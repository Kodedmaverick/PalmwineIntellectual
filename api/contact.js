// Vercel serverless function: POST /api/contact
// Validates the message and emails it to CONTACT_TO_EMAIL via Resend.
// Reply-To is set to the sender's email (when given) so you can reply directly.

const MAX = { name: 120, email: 200, phone: 40, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,40}$/;
const hits = new Map(); // best-effort rate limit per warm instance

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter(t => now - t < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};

  // Honeypot: real visitors never fill this hidden field.
  if (body.company) return res.status(200).json({ ok: true });

  const name = String(body.name || '').trim().slice(0, MAX.name);
  const email = String(body.email || '').trim().slice(0, MAX.email);
  const phone = String(body.phone || '').trim().slice(0, MAX.phone);
  const message = String(body.message || '').trim().slice(0, MAX.message);

  const errors = {};
  if (!name) errors.name = 'Add your name.';
  if (!email && !phone) errors.contact = 'Add an email or phone number so I can reply.';
  if (email && !EMAIL_RE.test(email)) errors.email = 'That email doesn’t look right.';
  if (phone && !PHONE_RE.test(phone)) errors.phone = 'That phone number doesn’t look right.';
  if (message.length < 10) errors.message = 'Write a little more so I have context.';
  if (Object.keys(errors).length) return res.status(400).json({ error: 'Check the highlighted fields.', fields: errors });

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return res.status(429).json({ error: 'Too many messages. Try again in a few minutes.' });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL');
    return res.status(500).json({ error: 'The form isn’t configured yet. Please email directly.' });
  }

  const rows = [['Name', name], ['Email', email || '—'], ['Phone', phone || '—']];
  const html = `
    <div style="font-family:Arial,sans-serif;color:#1c3a2a;line-height:1.5">
      <h2 style="margin:0 0 16px">New message from your portfolio</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">
        ${rows.map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#56695c">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`).join('')}
      </table>
      <div style="padding:16px;background:#f6f3eb;border-radius:8px;white-space:pre-wrap">${esc(message)}</div>
      <p style="color:#56695c;font-size:13px;margin-top:16px">${email ? 'Reply to this email to respond.' : 'No email given — respond by phone.'}</p>
    </div>`;
  const text = `New message from your portfolio\n\nName: ${name}\nEmail: ${email || '—'}\nPhone: ${phone || '—'}\n\n${message}`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
        to: [CONTACT_TO_EMAIL],
        subject: `Portfolio message from ${name}`,
        html,
        text,
        ...(email ? { reply_to: email } : {})
      })
    });
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text());
      return res.status(502).json({ error: 'Your message couldn’t be sent. Please email directly.' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Contact send failed', e);
    return res.status(502).json({ error: 'Your message couldn’t be sent. Please email directly.' });
  }
}
