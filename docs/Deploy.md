# Deploy

## Production build

```bash
npm run build
```

Output is written to `dist/`.

Preview locally:

```bash
npm run preview
```

## Hosting notes

- This is a Vite SPA. Configure the host to fallback unknown routes to `index.html` so React Router works (especially `/products/:slug` and 404).
- Serve `dist/` as the site root.
- Ensure `public/images/**` assets are included in the build output (Vite copies `public/` automatically).

## Environment

No environment variables are required for the current foundation.

When APIs are added later, document keys here and keep secrets out of `src/data/`.

## Checklist

- [ ] `npm run build` succeeds
- [ ] Logo and critical images replaced
- [ ] Contact details updated in `src/config/company.ts`
- [ ] Domain updated in `company.seo.siteUrl`, `public/robots.txt`, and `public/sitemap.xml`
- [ ] Host rewrite rules configured for SPA routing
