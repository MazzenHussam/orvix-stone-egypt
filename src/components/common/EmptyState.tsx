import { Box, Typography, type SxProps, type Theme } from '@mui/material';
import { useLocale } from '@/hooks/useLocale';

type EmptyStateProps = {
  title: string;
  description?: string;
  sx?: SxProps<Theme>;
};

/**
 * Minimal empty-state message for filtered lists with no results.
 */
export function EmptyState({ title, description, sx }: EmptyStateProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      role="status"
      sx={{
        py: { xs: 8, md: 12 },
        px: 3,
        textAlign: 'center',
        border: '1px solid #E2DED8',
        bgcolor: '#F8F6F3',
        borderRadius: '4px',
        ...sx,
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: displayFont,
          fontWeight: 400,
          fontSize: { xs: '1.5rem', md: '1.75rem' },
          color: '#111111',
          mb: description ? 1.25 : 0,
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          sx={{
            color: '#555555',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            maxWidth: 420,
            mx: 'auto',
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
