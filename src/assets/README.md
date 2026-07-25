# `src/assets`

## What this folder is used for

Bundled static assets imported into React components or styles (images, fonts, SVGs). Vite fingerprints and optimizes these at build time.

## How another developer can update it

1. Place new files under the correct subfolder (see `docs/ASSETS.md`).
2. Import them in a component:
   ```ts
   import logo from '@/assets/images/shared/logo.svg';
   ```
3. Prefer feature subfolders (`images/home`, `images/products`, etc.).

## Best practices

- Use for assets that are part of the component tree and benefit from bundling.
- Prefer WebP/SVG; keep file names kebab-case and descriptive.
- Do not store large videos here — use `public/videos/`.
- Do not put CMS-style gallery catalogs here if paths are driven from `src/data` via public URLs.
