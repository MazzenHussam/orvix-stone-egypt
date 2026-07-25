# `src/routes`

## Purpose

React Router path constants and the application route tree.

## Files

- `paths.ts` — path constants / helpers
- `AppRouter.tsx` — `<Routes>` configuration

## How another developer updates it

1. Add a path in `paths.ts`.
2. Add a `<Route>` in `AppRouter.tsx` pointing at a page from `src/pages/`.
3. Keep `src/data/navigation.ts` labels/paths in sync.

## Best practices

- Centralize path strings.
- Use the shared `MainLayout` route for chrome.
- Lazy-load pages later if bundle size requires it.
