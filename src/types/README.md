# `src/types`

## Purpose

Shared TypeScript contracts for content and domain models.

## How another developer updates it

1. Extend `content.ts` when data modules gain fields.
2. Import types into `src/data` and components.
3. Avoid runtime logic in this folder.

## Best practices

- Types are not user-facing copy.
- Prefer explicit unions for known variants (e.g. social icons).
