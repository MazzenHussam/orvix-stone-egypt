import { Box, Grid, Stack, Typography } from '@mui/material';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';

export function ExportShipping() {
  const { export: exportPage, isRtl } = useLocale();
  const { shipping } = exportPage;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="export-shipping-title"
      sx={{ py: { xs: 10, md: 16 }, bgcolor: '#FFFFFF' }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="export-shipping-title"
            component="h2"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.25rem' },
              color: '#111111',
              mb: { xs: 6, md: 8 },
            }}
          >
            {shipping.title}
          </Typography>
        </FadeIn>

        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeIn>
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: '4px',
                  aspectRatio: '4 / 3',
                  bgcolor: '#E9E6E2',
                }}
              >
                <SafeImage
                  src={images.export.map}
                  alt={shipping.title}
                  fallbackLabel={shipping.title}
                  loading="lazy"
                />
              </Box>
            </FadeIn>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              {shipping.points.map((point, index) => (
                <FadeIn key={point.id} delay={Math.min(index * 0.05, 0.2)}>
                  <Box component="article">
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: displayFont,
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: '#111111',
                        mb: 1,
                      }}
                    >
                      {point.title}
                    </Typography>
                    <Typography sx={{ color: '#555555', lineHeight: 1.8 }}>
                      {point.description}
                    </Typography>
                  </Box>
                </FadeIn>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
