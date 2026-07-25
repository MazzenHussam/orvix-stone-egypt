import { Box, Grid, Typography } from '@mui/material';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';

export function ExportPackaging() {
  const { export: exportPage, isRtl } = useLocale();
  const { packaging } = exportPage;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="export-packaging-title"
      sx={{ py: { xs: 10, md: 16 }, bgcolor: '#F8F6F3' }}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <FadeIn>
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: '4px',
                  aspectRatio: { xs: '4 / 3', md: '16 / 10' },
                  bgcolor: '#E9E6E2',
                }}
              >
                <SafeImage
                  src={images.export.packaging}
                  alt={packaging.title}
                  fallbackLabel={packaging.title}
                  loading="lazy"
                />
              </Box>
            </FadeIn>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <FadeIn delay={0.08}>
              <Typography
                id="export-packaging-title"
                component="h2"
                sx={{
                  fontFamily: displayFont,
                  fontWeight: 400,
                  fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.25rem' },
                  color: '#111111',
                  mb: 3,
                }}
              >
                {packaging.title}
              </Typography>
              <Typography
                sx={{
                  color: '#555555',
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  maxWidth: 420,
                }}
              >
                {packaging.description}
              </Typography>
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
