# `public/videos`

## What this folder is used for

Static video files served at `/videos/...` (hero films, process clips, product demos).

## How another developer can update it

1. Place compressed MP4 (H.264) files under a feature subfolder (`home/`, `about/`, `products/`).
2. Reference as `/videos/<subfolder>/<file>` from components or `src/data`.
3. Provide a poster image under `public/images/`.

## Best practices

- Keep file sizes production-reasonable; compress before commit.
- Avoid putting large videos in `src/assets/`.
- Include duration/orientation context in the filename when helpful (`hero-quarry-16x9.mp4`).
- Full placement rules: `docs/ASSETS.md`.
