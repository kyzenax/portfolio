# UK Driving Instructor Website

Production-ready Next.js App Router website for a UK driving instructor with SEO, accessibility, and security hardening.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.local.example` to `.env.local` and fill in values.
3. Run the dev server:
   ```bash
   npm run dev
   ```

## Environment variables

See `.env.local.example` for required values.

## Turnstile setup

- Create a Cloudflare Turnstile site and secret key.
- Add the site key to the form widget in `ContactForm.tsx`.
- Set `TURNSTILE_SECRET_KEY` in `.env.local`.

## Production hardening checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to your live domain.
- [ ] Update all placeholder copy with business details.
- [ ] Add real reviews with proof stored securely.
- [ ] Confirm ADI/PDI status is accurate everywhere.
- [ ] Add real imagery (optimized, compressed).
- [ ] Configure email provider credentials.
- [ ] Enable analytics only after cookie consent.
- [ ] Run `npm audit` regularly and update dependencies.
- [ ] Enable WAF and rate limiting at the edge (e.g., Cloudflare).
- [ ] Configure backups for critical data and logs.
- [ ] Monitor uptime and form delivery (email provider alerts).
