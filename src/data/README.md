# `src/data`

## Purpose

Editable website content. Bilingual copy lives in locale folders.

## Structure

| Path | Content |
|------|---------|
| `en/site.ts` | English company / chrome copy |
| `en/navigation.ts` | English nav labels |
| `en/home.ts` | English home page copy |
| `en/products.ts` | English product catalog |
| `ar/site.ts` | Arabic company / chrome copy |
| `ar/navigation.ts` | Arabic nav labels |
| `ar/home.ts` | Arabic home page copy |
| `ar/products.ts` | Arabic product catalog |
| `products.ts` | Catalog API (`products`, `getProductBySlug`) |
| `locales.ts` | Locale bundle map |

Runtime selection is handled by `useLocale()` (`src/hooks/useLocale.tsx`).

## How another developer updates it

1. Edit the matching file under `en/` or `ar/`.
2. Keep object keys identical between languages.
3. Extend types in `src/types/content.ts` when adding fields.

## Best practices

- Never hardcode marketing copy in components.
- Keep EN and AR structures in sync.
- Image paths stay in `src/config/images.ts` (locale-agnostic).
