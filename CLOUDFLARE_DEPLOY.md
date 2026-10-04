# Cloudflare Deployment

Revathi Blush is a static Next.js export deployed to the existing Cloudflare Worker project **revathi** using Cloudflare Static Assets.

## Cloudflare build settings

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: repository root

Do not use OpenNext for this site. There are no server actions, API routes, authentication flows, or runtime-rendered pages.

## How deployment works

`next build` creates the static website in:

```
out/
```

The committed `wrangler.jsonc` tells Wrangler to upload `./out` as the Worker's static assets.

It also configures:

- custom `404.html` handling
- forced trailing slashes to match the Next.js export
- no Worker script / no OpenNext runtime

## Local verification

```bash
npm install
npm run qa
npm run build
npm run preview
```

To deploy manually:

```bash
npm run deploy
```

Cloudflare's Git integration can keep running the build and deploy commands automatically whenever `main` changes.
