import { Box, Typography, type BoxProps, type SxProps, type Theme } from '@mui/material';
import { useLocale } from '@/hooks/useLocale';

type ImagePlaceholderProps = {
  /** Product / media name */
  title: string;
  /** Override “Image Coming Soon”; defaults to site copy */
  caption?: string;
  sx?: SxProps<Theme>;
};

/**
 * Elegant media placeholder when an image is missing or fails to load.
 * Shows the name plus a quiet “Image Coming Soon” line — never a broken-image icon.
 */
export function ImagePlaceholder({ title, caption, sx }: ImagePlaceholderProps) {
  const { site, isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';
  const comingSoon = caption ?? site.imageComingSoonLabel;

  return (
    <Box
      role="img"
      aria-label={`${title}. ${comingSoon}`}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 160,
        bgcolor: '#EDEAE4',
        border: '1px solid #E2DED8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        py: 4,
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      <Box sx={{ maxWidth: 280 }}>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontFamily: displayFont,
            fontWeight: 400,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            letterSpacing: isRtl ? 0 : '0.04em',
            color: '#111111',
            lineHeight: 1.25,
            mb: 1.25,
          }}
        >
          {title}
        </Typography>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontSize: '0.75rem',
            letterSpacing: isRtl ? '0.04em' : '0.14em',
            textTransform: isRtl ? 'none' : 'uppercase',
            color: '#8A847A',
            fontWeight: 400,
          }}
        >
          {comingSoon}
        </Typography>
      </Box>
    </Box>
  );
}

type ImageSkeletonProps = Omit<BoxProps, 'children'>;

/** Soft pulse skeleton shown while an image is loading. */
export function ImageSkeleton({ sx, ...rest }: ImageSkeletonProps) {
  return (
    <Box
      aria-hidden
      {...rest}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 160,
        bgcolor: '#E9E6E2',
        position: 'relative',
        overflow: 'hidden',
        '@keyframes orvix-fade-pulse': {
          '0%, 100%': { opacity: 0.55 },
          '50%': { opacity: 0.9 },
        },
        animation: 'orvix-fade-pulse 1.6s ease-in-out infinite',
        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none',
          opacity: 0.7,
        },
        ...sx,
      }}
    />
  );
}
