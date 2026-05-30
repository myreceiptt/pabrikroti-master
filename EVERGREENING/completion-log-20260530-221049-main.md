# EVERGREEN Completion Log — pabrikroti-master main

## Summary

- Repo: `pabrikroti-master`
- Base branch: `origin/main`
- Working branch: `stacks-evergreen-main-20260530-220652`
- Class: Class A — App Repo
- Runtime target: Node.js 24.x
- Package manager: Yarn Modern 4.12.0
- Live URL: `https://pabrikroti.endhonesa.com/`

## Branch Scope

This run is only for the `main` branch cycle. The `preview` branch must be handled in a separate branch and separate Evergreen run after this branch is inspected and merged as requested.

## Baseline

- Starting point: `origin/main` at release `2.7.0`.
- Existing package manager file: Yarn v1 `yarn.lock`.
- Existing runtime metadata targeted Node `>=22.14.0` and Yarn `>=1.22.0`.
- Existing CI used `actions/setup-node@v3` with Node 22.
- Live production URL returned HTTP 200.
- `.env.local` was present locally and used for build validation; it was not committed.

## Monthly / Quarterly Changes

- Added `.nvmrc` with Node 24.
- Added `.yarnrc.yml` with `nodeLinker: node-modules` for Next.js/Web3 compatibility.
- Added `packageManager: yarn@4.12.0`.
- Updated `engines` to Node 24.x and Yarn 4.x.
- Regenerated `yarn.lock` with Yarn 4.12.0.
- Updated CI to Node 24, `actions/setup-node@v4`, Corepack, and `yarn install --immutable`.
- Updated runtime dependencies:
  - `next` to 16.2.6.
  - `react` and `react-dom` to 19.2.6.
  - `thirdweb` to 5.120.0.
  - `@vercel/analytics` to 2.0.1.
  - `framer-motion` to 12.40.0.
  - `hls.js` to 1.6.16.
  - `react-icons` to 5.6.0.
  - `@noble/curves` and `@noble/hashes` to 2.2.0.
- Updated dev dependencies:
  - Next ESLint packages to 16.2.6.
  - Tailwind CSS and `@tailwindcss/postcss` to 4.3.0.
  - `postcss` to 8.5.15.
  - `@types/node` to 24.12.4.
  - React type packages to current React 19 types.
  - `prettier` to 3.8.3.
- Removed `NEXT_PUBLIC_TW_SECRET_KEY` from `.env.example` and CI public env injection because secret keys must not be exposed through `NEXT_PUBLIC_*`.
- Updated README commands and added Evergreen maintenance notes for the `main` cycle.

## Deferred Items

- `@types/node@25` is intentionally deferred because the repo targets Node.js 24.x.
- `eslint@10` is deferred until the current Next/TypeScript/Web3 lint stack is confirmed compatible.
- `typescript@6` is deferred until the current Next/Web3 dependency stack is confirmed compatible.
- Yarn peer warnings remain from transitive Web3/Solana/WalletConnect packages; no direct app code change is indicated by those warnings.

## Validation

- `corepack yarn install` completed with peer warnings only.
- `corepack yarn lint` passed.
- `corepack yarn build` passed using `.env.local`.
- `corepack yarn npm audit --severity moderate --recursive` reported zero moderate-or-higher audit findings after the update.
- Production URL check: `https://pabrikroti.endhonesa.com/` returned HTTP 200 during the read-only preflight.

## Notes

- No feature behavior was intentionally changed.
- This branch is ready for manual inspection before commit/merge handling requested by Prof. NOTA.
