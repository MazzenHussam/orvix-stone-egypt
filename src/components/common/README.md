# `src/components/common`

## Purpose

Shared UI used across multiple features.

| Component | Role |
| --- | --- |
| `SocialIcon` | Facebook / Instagram / TikTok (and legacy) icons |
| `SafeImage` | Lazy image with skeleton + graceful missing/fail placeholder |
| `ImagePlaceholder` | Elegant “name + Image Coming Soon” media card |
| `EmptyState` | Minimal empty message for filtered lists |
| `MediaSkeletonGrid` | Optional grid of loading skeletons |
| `WhatsAppFab` | Global floating WhatsApp button |
| `SeoHead` | Title, description, Open Graph, Twitter tags |
| `CapabilityStrip` | Minimal label strip for capabilities / project solutions |
| `BandCta` | Shared photographic CTA band (Home / About / Export / Contact) |

## Best practices

- Do not import from feature folders (`home`, `about`, etc.).
- Keep marketing copy in `src/data/`; keep facts in `src/config/company.ts`.
