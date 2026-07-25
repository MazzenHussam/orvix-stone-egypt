# `src/hooks`

## Purpose

Shared React hooks.

## Current hooks

- `useScrolled` — detects scroll position for Navbar solid/transparent states

## How another developer updates it

1. Add `useSomething.ts`.
2. Keep hooks free of page-specific JSX.
3. Clean up listeners/subscriptions on unmount.

## Best practices

- Prefix with `use`.
- Prefer small composable hooks.
