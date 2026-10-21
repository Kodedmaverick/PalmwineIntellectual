# Kolom Oden-Ikpi — Portfolio (React)

Vite + React + React Router, with a serverless contact endpoint that emails form submissions to you.

## Routes
- `/` — homepage (work, how I work, about, experience, contact form)
- `/work/documents`
- `/work/patient-journeys`
- `/work/rfa-capital-advisors`

## Run locally
```bash
npm install
npm run dev          # site only, http://localhost:5173 (form will show an error: no API)
npx vercel dev       # site + /api/contact together, http://localhost:3000
```

## Contact form → your inbox
1. Create a free account at https://resend.com using **kolomodenikpi@gmail.com** and create an API key.
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`.
3. Deploy to Vercel (`npx vercel`), then add the same three variables under
   Project → Settings → Environment Variables and redeploy.

Each submission arrives as an email with the sender's **name, email and/or phone, and message**.
If they left an email, it's set as Reply-To — just hit Reply. If they only left a phone number, it's shown in the email.

Validation runs in the browser and again on the server (name, message, and at least one of email/phone).
A hidden honeypot field and a light per-IP limit reduce spam.

> `onboarding@resend.dev` only delivers to the address you registered with Resend — which is what you want here.
> To send from your own address later, verify a domain in Resend and update `CONTACT_FROM_EMAIL`.

## Project layout
```
api/contact.js            serverless email endpoint (Vercel)
src/pages/*.jsx           page content (edit copy here)
src/components/           header, footer, case layout, contact form, DS primitives
src/content/cases.js      case list used by "More work"
src/styles/tokens/        design tokens (Titaaria)
src/styles/site.css       theme, layout, responsive rules
```
