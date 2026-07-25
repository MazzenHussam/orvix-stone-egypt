# `src/config`

## Purpose

App configuration that is not marketing prose.

| File | Role |
| --- | --- |
| `company.ts` | Phones, email, WhatsApp, social URLs, SEO site URL |
| `images.ts` | Central image map — **stone-first photography only** |

## Image rules

- Products / heroes: full-frame marble & granite slabs (no kitchens, bathrooms, furniture).
- About: quarry, factory, blocks, inspection.
- Export: containers, crates, warehouse, loading.
- Prefer local files under `public/images/` when client photography is available.
- Point every key through `images.ts` — do not hardcode URLs in components.

## Updating images

1. Place files under `public/images/...`
2. Update the matching key in `images.ts`
3. Keep product galleries as **6 shots**: Full Slab, Texture, Polished, Honed, Raw Block, Application
