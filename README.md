# Al-Baraq Travels

A React + Vite website for Al-Baraq Travels.

## Run locally

Requires Node.js 22.x and npm.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production site is written to `dist/`. `npm run build` type-checks the TypeScript before bundling.

## Deploy to Vercel

Import this repository in Vercel and deploy. The included `vercel.json` configures Vercel to use the Vite framework, run `npm run build`, and publish `dist/`. The committed `package-lock.json` keeps npm dependency installs reproducible. No environment variables are currently required.
