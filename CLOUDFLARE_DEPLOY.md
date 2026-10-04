# Cloudflare Pages Deployment

This site is configured as a static Next.js export. It does not need a Worker runtime, database, or server functions.

## Cloudflare dashboard

1. Open **Workers & Pages**.
2. Choose **Create application** -> **Pages**.
3. Choose **Import an existing Git repository**.
4. Select **mkraja826/Revathi**.
5. Use these settings:

- Framework preset: **Next.js (Static HTML Export)**
- Production branch: **main**
- Build command: `npx next build`
- Build output directory: `out`
- Root directory: repository root

6. Deploy.

Cloudflare will rebuild automatically whenever `main` changes.

## Before custom domain launch

After the final domain is chosen:
- add the custom domain in Cloudflare Pages;
- update any final brand assets and approved business details;
- add the production domain to global metadata/canonical and sitemap in a final SEO pass.

## Local verification

```bash
npm install
npm run qa
npm run build
```

The exported site will be in `out/`.
