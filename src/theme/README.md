# `src/theme`

## Purpose

Material UI theme tokens and `createTheme` setup for brand colors, typography, spacing, and breakpoints.

## Files

- `colors.ts` — brand palette
- `typography.ts` — Cormorant Garamond + Inter
- `spacing.ts` — spacing scale helpers
- `breakpoints.ts` — responsive breakpoints
- `theme.ts` — assembled MUI theme

## How another developer updates it

1. Change tokens in the focused file (`colors.ts`, etc.).
2. Avoid one-off hex values in components — use theme/palette or `colors`.
3. Re-test Navbar contrast (transparent vs solid) after palette changes.

## Best practices

- Keep brand tokens centralized.
- Prefer semantic palette usage in MUI components.
- Document intentional deviations briefly.
