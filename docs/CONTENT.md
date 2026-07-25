# Content Guide

This document explains exactly which files contain editable website text for ORVIX STONE EGYPT.

## Rule of thumb

**Copy and content live in `src/data/`.**  
Components and pages should consume that data — they should not own long marketing strings.

---

## Primary editable content location

| File / folder | What to edit |
|---------------|--------------|
| `src/data/` | All marketing copy, navigation labels, product text, contact details, SEO defaults |

### Planned content modules (create/update these as features are built)

| File | Editable content |
|------|------------------|
| `src/data/site.ts` | Company name, tagline, contact info, social links, legal footer text |
| `src/data/navigation.ts` | Header/footer nav labels and paths |
| `src/data/home.ts` | Home hero, sections, CTAs |
| `src/data/about.ts` | About story, values, timeline |
| `src/data/products.ts` | Product names, descriptions, specs, categories |
| `src/data/gallery.ts` | Gallery titles, captions, album metadata |
| `src/data/contact.ts` | Contact form labels, address, map text, office hours |
| `src/data/seo.ts` | Default page titles, descriptions, Open Graph text |

Until these modules exist, add new editable strings as new files under `src/data/` following the same pattern.

---

## Secondary text locations (use sparingly)

| Location | When it is OK |
|----------|----------------|
| `src/types/` | Type-only shapes for content — not user-facing copy |
| `index.html` | Document `<title>` fallback / language attribute only |
| `public/` | Rare static HTML or image alt text embedded in assets — prefer data files |

---

## What is NOT editable content

Do not put marketing copy in:

- `src/components/**` — UI structure and presentation only
- `src/pages/**` — compose components + data; no long strings
- `src/routes/**` — route config only (path keys may mirror nav data)
- `src/theme/` — colors, typography tokens, spacing
- `src/styles/` — global CSS / Emotion globals
- `src/hooks/`, `src/utils/` — logic only
- `src/App.tsx`, `src/main.tsx` — bootstrap only

---

## How another developer updates text

1. Open the relevant file under `src/data/` (see table above).
2. Edit the string/object values. Keep keys stable so components do not break.
3. If adding a new section, extend the data shape in `src/types/` first, then update `src/data/`.
4. If the copy references an image/video, place the file per `docs/ASSETS.md` and store the path in the data file.
5. Preview with `npm run dev`.

---

## Best practices

- Keep content typed (`src/types`) so typos surface at compile time.
- Prefer plain objects/arrays over JSX for copy.
- One concern per file (`home.ts` vs `products.ts`).
- Do not duplicate the same sentence across files — share via `site.ts` or a shared constants object.
- For forms, labels/placeholders belong in `contact.ts` (or a dedicated `forms.ts`); validation messages can live beside them.

---

## Related

- Data folder: `src/data/README.md`
- Types: `src/types/README.md`
- Assets referenced by content: `docs/ASSETS.md`
