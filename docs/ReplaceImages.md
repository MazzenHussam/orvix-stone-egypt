# Replace Images

All image **paths** are centralized in `src/config/images.ts`.

## Steps

1. Add the image file under the correct folder in `public/images/`:

| Folder | Use for |
|--------|---------|
| `public/images/hero/` | Homepage / page heroes |
| `public/images/products/` | Product photography |
| `public/images/gallery/` | Gallery albums |
| `public/images/applications/` | Project / application shots |
| `public/images/factory/` | Factory and process photos |
| `public/images/about/` | About page photography |
| `public/images/logos/` | Brand logos and marks |
| `public/images/icons/` | Raster/SVG icons served by URL |

2. Register the public path in `src/config/images.ts`:

```ts
hero: {
  home: '/images/hero/home-hero.webp',
},
```

3. Import and use the path from config in components:

```ts
import { images } from '@/config/images';

<img src={images.hero.home} alt="..." />
```

## Rules

- Prefer WebP for photos; SVG for logos when possible.
- Use kebab-case filenames.
- Do not import images with hardcoded `/images/...` strings outside `src/config/images.ts`.
- Update alt text via `src/data/` (not inside the config file) when content work begins.

## Logos (typography wordmark)

- `/images/logos/orvix-wordmark-dark.svg` — light surfaces
- `/images/logos/orvix-wordmark-light.svg` — dark surfaces

In the app, use `<Wordmark variant="dark|light" />` for correct Cormorant Garamond + Inter rendering. Paths also live under `images.logos` in `src/config/images.ts`.
