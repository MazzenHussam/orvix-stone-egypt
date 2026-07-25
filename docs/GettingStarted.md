# Getting Started

## Prerequisites

- Node.js 20+ recommended
- npm

## Install & run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Architecture overview

| Area | Location |
|------|----------|
| Pages (routes) | `src/pages/` |
| Router | `src/routes/` |
| Layout (Navbar/Footer) | `src/components/layout/` |
| Feature UI (future) | `src/components/<feature>/` |
| Editable copy | `src/data/` |
| Image path map | `src/config/images.ts` |
| MUI theme | `src/theme/` |
| Types | `src/types/` |

## Rules

- Do not hardcode marketing copy in components — edit `src/data/`.
- Do not hardcode image URLs in components — edit `src/config/images.ts` and place files under `public/images/`.
- Do not change `package.json`, `vite.config.ts`, or `tsconfig*` unless explicitly requested.

## Next steps

1. Replace logo placeholders in `public/images/logos/`.
2. Fill content modules under `src/data/` when building each page.
3. Build page sections inside the matching `src/components/<feature>/` folder.
