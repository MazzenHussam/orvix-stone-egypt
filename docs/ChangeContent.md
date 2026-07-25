# Change Content

All editable website text lives in `src/data/`.

## Files

| File | Content |
|------|---------|
| `navigation.ts` | Header and footer nav labels/paths |
| `site.ts` | Company name, contact, social, CTA labels, footer titles |
| `home.ts` | Home page copy |
| `about.ts` | About page copy |
| `products.ts` | Products listing copy / catalog data |
| `gallery.ts` | Gallery copy |
| `export.ts` | Export page copy |
| `contact.ts` | Contact page copy |

## How to update

1. Open the relevant file in `src/data/`.
2. Edit string values. Keep object keys stable.
3. If you add new fields, update the matching types in `src/types/content.ts`.
4. Refresh the dev server preview.

## Rules

- Components and pages must read copy from these modules.
- Do not embed marketing sentences in JSX.
- Image paths referenced by content should be registered in `src/config/images.ts`.
