// Production server for Nixpacks / Coolify / Railway / any Node host.
// Serves the built Vite app from ./dist and runs the contact endpoint at POST /api/contact.
// (On Vercel this file is ignored — Vercel uses api/contact.js directly.)
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import contactHandler from './api/contact.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = Number(process.env.PORT) || 3000;

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8', '.pdf': 'application/pdf', '.mp4': 'video/mp4'
};

// Give Node's res the small Express/Vercel-style helpers api/contact.js expects.
function adapt(res) {
  res.status = code => { res.statusCode = code; return res; };
  res.json = obj => {
    if (!res.headersSent) res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(obj));
    return res;
  };
  return res;
}

function readBody(req, limit = 100_000) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > limit) { reject(new Error('too large')); req.destroy(); }
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

async function sendFile(res, file, cache) {
  const body = await readFile(file);
  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': cache
  });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  adapt(res);
  const url = new URL(req.url, 'http://localhost');

  try {
    if (url.pathname === '/api/contact') {
      if (req.method === 'POST') {
        try { req.body = await readBody(req); } catch { return res.status(413).json({ error: 'Message too large.' }); }
      }
      return await contactHandler(req, res);
    }
    if (url.pathname.startsWith('/api/')) return res.status(404).json({ error: 'Not found.' });

    // Static files from dist/, falling back to index.html for client-side routes.
    const rel = decodeURIComponent(url.pathname);
    const file = path.normalize(path.join(DIST, rel));
    if (file.startsWith(DIST + path.sep)) {
      const s = await stat(file).catch(() => null);
      if (s?.isFile()) {
        const immutable = rel.startsWith('/assets/');
        return await sendFile(res, file, immutable ? 'public, max-age=31536000, immutable' : 'public, max-age=3600');
      }
    }
    if (path.extname(rel)) { res.statusCode = 404; return res.end('Not found'); }
    return await sendFile(res, path.join(DIST, 'index.html'), 'no-cache');
  } catch (err) {
    console.error(err);
    if (!res.headersSent) res.status(500).json({ error: 'Server error.' });
    else res.end();
  }
});

server.listen(PORT, '0.0.0.0', () => console.log(`Portfolio running on port ${PORT}`));
