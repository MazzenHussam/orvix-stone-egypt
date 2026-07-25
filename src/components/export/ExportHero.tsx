import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';

export function ExportHero() {
  const { export: exportPage, isRtl } = useLocale();
  const { hero } = exportPage;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-label={hero.label}
      sx={{
        bgcolor: '#FFFFFF',
        pt: { xs: 12, sm: 14, md: 16, lg: 18 },
        pb: { xs: 6, sm: 7, md: 9, lg: 10 },
      }}
    >
      <Container>
        <FadeIn>
          <Box sx={{ maxWidth: 780, mx: 'auto', textAlign: 'center', px: { xs: 0.5, sm: 0 } }}>
            <Typography
              component="p"
              sx={{
                color: '#B9985A',
                fontSize: { xs: '0.8125rem', md: '0.75rem' },
                letterSpacing: isRtl ? '0.06em' : '0.16em',
                textTransform: isRtl ? 'none' : 'uppercase',
                fontWeight: 500,
                mb: { xs: 2.5, md: 3 },
              }}
            >
              {hero.label}
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: displayFont,
                fontWeight: 400,
                fontSize: {
                  xs: '1.875rem',
                  sm: '2.5rem',
                  md: '3.25rem',
                  lg: '3.75rem',
                },
                lineHeight: 1.15,
                color: '#111111',
              }}
            >
              {hero.title}
            </Typography>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
