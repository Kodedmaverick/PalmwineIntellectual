import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // When running `npm run dev` alone, forward /api to `vercel dev` (port 3000) if it is running.
  server: { proxy: { '/api': 'http://localhost:3000' } }
});
