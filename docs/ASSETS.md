# Assets Guide

This document explains exactly where future images, videos, and icons should be placed for ORVIX STONE EGYPT.

## Quick decision tree

1. **Imported in React/TS and optimized by Vite** → `src/assets/`
2. **Referenced by public URL (`/images/...`) or needed for SEO/meta** → `public/images/`, `public/videos/`, or `public/icons/`
3. **Site favicon / root static files** → `public/` root

---

## `src/assets/`

Use for assets that are **imported** into components or styles.

```ts
import heroTexture from '@/assets/images/home/hero-texture.webp';
```

### Recommended subfolders (create as needed)

| Path | Purpose |
|------|---------|
| `src/assets/images/` | Bundled images (heroes, section art, product close-ups) |
| `src/assets/images/home/` | Home-page-only imagery |
| `src/assets/images/about/` | About-page-only imagery |
| `src/assets/images/products/` | Product imagery used via import |
| `src/assets/images/gallery/` | Gallery imagery used via import |
| `src/assets/images/contact/` | Contact-page imagery |
| `src/assets/images/shared/` | Logos, textures, patterns reused across pages |
| `src/assets/fonts/` | Custom font files (if self-hosted) |
| `src/assets/icons/` | SVG icons imported as React/URL modules |

### Naming

- Prefer kebab-case: `quarry-overview.webp`
- Include purpose: `hero-marble-slab.webp`, not `img1.webp`
- Prefer WebP/AVIF for photos; SVG for logos and simple icons

---

## `public/images/`

Use for images served at a **stable public URL**.

Examples:

- Open Graph / social preview images
- Large galleries referenced by path string from `src/data`
- Content that marketing may swap without a rebuild of import paths

URL form: `/images/<file>`

### Recommended subfolders

| Path | Purpose |
|------|---------|
| `public/images/home/` | Home public images |
| `public/images/about/` | About public images |
| `public/images/products/` | Product catalog images |
| `public/images/gallery/` | Gallery album images |
| `public/images/contact/` | Maps, office photos |
| `public/images/brand/` | Logo lockups for email/OG use |

---

## `public/videos/`

Use for marketing or background videos served as static files.

URL form: `/videos/<file>`

| Path | Purpose |
|------|---------|
| `public/videos/home/` | Hero / brand films |
| `public/videos/about/` | Company / process films |
| `public/videos/products/` | Product demos |

Prefer compressed MP4 (H.264) with a poster image in `public/images/`.

---

## `public/icons/`

Use for favicons, PWA icons, and standalone SVG/PNG icon sets referenced by path.

URL form: `/icons/<file>`

Keep the root `public/favicon.svg` for the browser tab icon unless replaced intentionally.

---

## Do / Don't

**Do**

- Keep feature-specific media under the matching page folder
- Document new asset paths in `src/data` when content references them
- Compress images before commit

**Don't**

- Put large videos in `src/assets/` (prefer `public/videos/`)
- Commit originals + multiples of the same asset without naming convention
- Hard-code absolute disk paths — use `/images/...` or imports only

---

## Related

- Folder details: `src/assets/README.md`
- Public folders: `public/images/README.md`, `public/videos/README.md`, `public/icons/README.md`
- Editable copy that may reference asset paths: `docs/CONTENT.md`
