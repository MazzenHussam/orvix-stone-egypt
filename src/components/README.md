# `src/components`

## Purpose

React UI building blocks, organized by feature.

| Subfolder | Role |
|-----------|------|
| `common/` | Shared UI |
| `layout/` | Navbar, Footer, shell |
| `home/` | Home sections (future) |
| `about/` | About sections (future) |
| `products/` | Products sections (future) |
| `gallery/` | Gallery sections (future) |
| `export/` | Export sections (future) |
| `contact/` | Contact sections (future) |

## How another developer updates it

1. Add feature UI in the matching folder.
2. Compose from `src/pages/`.
3. Source copy from `src/data/` and images from `src/config/images.ts`.

## Best practices

- No hardcoded marketing copy.
- Keep layout separate from page sections.
- Promote shared pieces to `common/` only when reused.
