# Truthstack

Marketing site for Truthstack — software testing & QA consultancy.

## Development

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY
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

CI runs on Node 20. `npm run test:e2e` never calls the real `/api/contact` route — the contact tests mock that endpoint with Playwright's `page.route`, so no `RESEND_API_KEY` is needed locally or in CI.

## Git workflow

- **`develop`** — integration. Feature work lands here first.
- **`main`** — production. Only updated by merging a pull request from `develop`.

There is no deploy script in this repo. [Vercel Git](https://vercel.com/docs/git) deploys production when GitHub receives a push to `main` (the merge commit from that PR). CI (`.github/workflows/ci.yml`) only gates merges: lint, typecheck, unit tests, build, and Playwright. It does not deploy.

### Day to day

1. Branch from `develop`, open a PR **into `develop`**.
2. Wait for CI. Vercel may attach a preview URL to the PR.
3. Merge into `develop` when it looks good.

### Ship to production

1. Open a PR **`develop` → `main`** (do not push straight to `main`).
2. Wait for CI on that PR to pass.
3. Merge the PR. Vercel builds `main` and updates [https://truthstack-site.vercel.app/](https://truthstack-site.vercel.app/).

### One-time setup (Vercel + GitHub)

Do this in the [Vercel project](https://vercel.com/truthstack-site/truthstack-site), not in code:

1. Connect the GitHub repo `ferozeahmed/truthstack-site` if it is not already connected.
2. Set the **Production Branch** to `main`.

Recommended GitHub settings for `main` (Settings → Branches): require a pull request, require the CI status check to pass, and disallow direct pushes. Same rules on `develop` are optional but useful.

Emergency redeploy: dashboard **Redeploy**, or `npx vercel --prod` after `npx vercel link`. Vercel Analytics is included via `<Analytics />` in `app/layout.tsx`.

## Hosting

- **Live site:** [https://truthstack-site.vercel.app/](https://truthstack-site.vercel.app/)
- **Project dashboard:** [https://vercel.com/truthstack-site/truthstack-site](https://vercel.com/truthstack-site/truthstack-site)

## Setup still needed (not covered by this repo)

- **Domain** — register a domain, point its DNS at Vercel, and update `metadataBase` in `app/layout.tsx` from the placeholder `https://truthstack.example.com` to the real domain.
- **Resend** — create a [Resend](https://resend.com) account, get an API
  key, and set `RESEND_API_KEY` (locally in `.env.local`, and in Vercel's
  project environment variables — server-only, do not prefix with
  `NEXT_PUBLIC_`). The contact form (`app/api/contact/route.ts`) emails
  `algofire-contact@googlegroups.com` via Resend's sandbox sender
  (`onboarding@resend.dev`); verify a real domain in Resend and update the
  `from` address once one is available.
- **Content** — replace the About page's team placeholders and the Home
  page's `[client logo]` placeholders with real content once available.
