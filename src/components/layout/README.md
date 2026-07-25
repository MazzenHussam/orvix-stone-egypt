# `src/components/layout`

## Purpose

Site chrome and structural wrappers: Navbar, Footer, MainLayout, Container, PageWrapper.

## How another developer updates it

1. Edit Navbar/Footer for global navigation and company chrome.
2. Keep labels sourced from `src/data/site.ts` and `src/data/navigation.ts`.
3. Logo path comes from `src/config/images.ts`.

## Best practices

- Layout wraps pages; it should not own page sections.
- Preserve landmark structure (`header` via AppBar, `main`, `footer`).
- Keep scroll and mobile-menu behavior accessible.
