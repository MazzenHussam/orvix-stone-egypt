# `src/pages`

## Purpose

Route-level screens rendered by React Router.

## Current pages

- `HomePage`
- `AboutPage`
- `ProductsPage`
- `ProductDetailsPage`
- `GalleryPage`
- `ExportPage`
- `ContactPage`
- `NotFoundPage`

Foundation pages currently return only the coming-soon label from `src/data`.

## How another developer updates it

1. Replace the coming-soon return with composed feature sections from `src/components/<feature>/`.
2. Keep copy sourced from `src/data/`.
3. Register new routes in `src/routes/AppRouter.tsx`.

## Best practices

- Keep pages thin (orchestration only).
- Do not define the router tree here.
