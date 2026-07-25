# `public/icons`

## What this folder is used for

Static icon files served at `/icons/...` (favicon variants, PWA icons, standalone SVG/PNG sets referenced by URL).

## How another developer can update it

1. Add icon files here (e.g. `icon-192.png`, `icon-512.png`, brand marks).
2. Reference as `/icons/<file>` from HTML, manifest, or data.
3. Keep `public/favicon.svg` as the default tab icon unless intentionally replaced.

## Best practices

- Prefer SVG for simple marks; PNG for raster app icons.
- Do not duplicate the same logo across many sizes without a clear consumer (manifest, Apple touch, etc.).
- Component-imported SVG icons may instead live under `src/assets/icons/` or use Lucide React.
- Full placement rules: `docs/ASSETS.md`.
