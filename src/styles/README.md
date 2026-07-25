# `src/styles`

## Purpose

Global CSS baseline (`global.css`). Most visual design should live in the MUI theme.

## How another developer updates it

1. Add global rules sparingly.
2. Prefer `src/theme` for colors/typography/spacing.
3. Import global CSS only from `main.tsx`.

## Best practices

- Avoid global class names that fight MUI.
- Keep this folder thin.
