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
- `npm run start` — serve the production build (used by CI and by Playwright's local test server)
- `npx tsc --noEmit` — typecheck (also run in CI)

CI runs on Node 20. `npm run test:e2e` works locally without setting `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — `playwright.config.ts` defaults it to a placeholder that matches the contact tests' network mock.

## Deployment

Hosted on Vercel:

- **Live site:** [https://truthstack-site.vercel.app/](https://truthstack-site.vercel.app/)
- **Project dashboard:** [https://vercel.com/truthstack-site/truthstack-site](https://vercel.com/truthstack-site/truthstack-site)

GitHub integration auto-deploys — preview URL per PR, production on merge
to `main`. No deploy scripting needed here; `.github/workflows/ci.yml` only
gates merges (lint/typecheck/tests/build). Vercel Analytics is included via
`<Analytics />` in `app/layout.tsx`.

Redeploy production from the dashboard or with `npx vercel --prod` after
`npx vercel link`.

## Setup still needed (not covered by this repo)

- **Domain** — register a domain, point its DNS at Vercel, and update `metadataBase` in `app/layout.tsx` from the placeholder `https://truthstack.example.com` to the real domain.
- **Formspree** — create a Formspree account, create a form, and set
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (locally in `.env.local`, and in Vercel's
  project environment variables) to its endpoint URL.
- **Content** — replace the About page's team placeholders and the Home
  page's `[client logo]` placeholders with real content once available.
