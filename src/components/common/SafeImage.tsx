import { Box, type BoxProps, type SxProps, type Theme } from '@mui/material';
import { useEffect, useState } from 'react';
import { ImagePlaceholder, ImageSkeleton } from '@/components/common/ImagePlaceholder';
import { useLocale } from '@/hooks/useLocale';

type SafeImageProps = Omit<BoxProps<'img'>, 'component' | 'src' | 'alt'> & {
  src?: string | null;
  alt: string;
  /** Prefer lazy for below-the-fold media; use eager for logos/heroes. */
  loading?: 'lazy' | 'eager';
  /** Shown when the image fails — preferably the product / stone name. */
  fallbackLabel?: string;
  /**
   * `media` — editorial placeholder (name + Image Coming Soon).
   * `logo` — compact muted box (avoids breaking navbar/footer).
   */
  variant?: 'media' | 'logo';
};

function isAutoHeightSx(sx: SxProps<Theme> | undefined): boolean {
  if (sx == null || typeof sx !== 'object' || Array.isArray(sx)) return false;
  return (sx as { height?: unknown }).height === 'auto';
}

/**
 * Image with loading skeleton and graceful failure.
 * Never shows a browser broken-image icon.
 *
 * Important: the <img> must stay in the layout (never display:none) while
 * loading — otherwise `loading="lazy"` images (gallery masonry) never fetch.
 */
export function SafeImage({
  src,
  alt,
  loading = 'lazy',
  fallbackLabel,
  variant = 'media',
  sx,
  ...rest
}: SafeImageProps) {
  const { site } = useLocale();
  const label = (fallbackLabel ?? alt).trim() || site.name;
  const resolvedSrc = typeof src === 'string' ? src.trim() : '';

  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(() =>
    resolvedSrc ? 'loading' : 'error',
  );

  useEffect(() => {
    setStatus(resolvedSrc ? 'loading' : 'error');
  }, [resolvedSrc]);

  if (status === 'error') {
    if (variant === 'logo') {
      return (
        <Box
          role="img"
          aria-label={label}
          sx={{
            display: 'block',
            bgcolor: '#EDEAE4',
            border: '1px solid #E2DED8',
            borderRadius: '2px',
            minWidth: 72,
            ...sx,
          }}
        />
      );
    }

    return <ImagePlaceholder title={label} sx={sx} />;
  }

  /* Logos keep intrinsic / explicit sizing — no full-bleed wrapper. */
  if (variant === 'logo') {
    return (
      <Box
        component="img"
        className="safe-image-media"
        src={resolvedSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        sx={{
          display: 'block',
          opacity: status === 'loaded' ? 1 : 0.35,
          transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          ...sx,
        }}
        {...rest}
      />
    );
  }

  const autoHeight = isAutoHeightSx(sx);
  const showSkeleton = status === 'loading';

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: autoHeight ? 'auto' : '100%',
        minHeight: showSkeleton && !autoHeight ? 160 : undefined,
        overflow: 'hidden',
      }}
    >
      {showSkeleton ? (
        <ImageSkeleton
          sx={
            autoHeight
              ? {
                  width: '100%',
                  aspectRatio: '4 / 5',
                  position: 'relative',
                }
              : {
                  position: 'absolute',
                  inset: 0,
                }
          }
        />
      ) : null}

      <Box
        component="img"
        className="safe-image-media"
        src={resolvedSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        sx={{
          display: 'block',
          width: '100%',
          objectFit: 'cover',
          transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          zIndex: 1,
          /* Keep the img paintable while loading so lazy-load can run.
             Absolute-fill over the skeleton until intrinsic size is known. */
          ...(autoHeight
            ? status === 'loaded'
              ? {
                  position: 'relative',
                  height: 'auto',
                }
              : {
                  position: 'absolute',
                  inset: 0,
                  height: '100%',
                }
            : {
                position: 'relative',
                height: '100%',
              }),
          ...sx,
          /* Re-assert load-state geometry after caller sx (e.g. height: 'auto'). */
          ...(autoHeight && status !== 'loaded'
            ? {
                position: 'absolute' as const,
                inset: 0,
                width: '100%',
                height: '100%',
              }
            : {}),
          opacity: status === 'loaded' ? 1 : 0,
        }}
        {...rest}
      />
    </Box>
  );
}
