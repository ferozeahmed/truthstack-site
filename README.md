# Truthstack

Marketing site for Truthstack — software testing & QA consultancy.

## Development

```bash
npm install
cp .env.example .env.local   # fill in NEXT_PUBLIC_FORMSPREE_ENDPOINT
npm run dev
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run test:unit` — Vitest (data + validation logic)
- `npm run test:e2e` — Playwright smoke tests

## Deployment

Hosted on Vercel via its GitHub integration: link this repo in the Vercel
dashboard once, and it auto-deploys — preview URL per PR, production on
merge to `main`. No deploy scripting needed here; `.github/workflows/ci.yml`
only gates merges (lint/typecheck/tests/build).

## Setup still needed (not covered by this repo)

- **Domain** — register a domain and point its DNS at Vercel.
- **Formspree** — create a Formspree account, create a form, and set
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (locally in `.env.local`, and in Vercel's
  project environment variables) to its endpoint URL.
- **Vercel** — create a Vercel account/project and link this GitHub repo.
- **Content** — replace the About page's team placeholders and the Home
  page's `[client logo]` placeholders with real content once available.
