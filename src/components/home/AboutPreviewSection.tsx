import { Box, Button, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SafeImage } from '@/components/common/SafeImage';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { buttonOutlinedSx, mediaFrameSx } from '@/theme/ui';
import { FadeIn } from './FadeIn';

export function AboutPreviewSection() {
  const { home, isRtl } = useLocale();
  const { aboutPreview } = home;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="about-preview-title"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 18 },
        bgcolor: colors.background,
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeIn>
              <Box sx={{ ...mediaFrameSx, aspectRatio: '4 / 5' }}>
                <SafeImage
                  src={images.about.preview}
                  alt={aboutPreview.title}
                  fallbackLabel={aboutPreview.title}
                  loading="lazy"
                />
              </Box>
            </FadeIn>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FadeIn delay={0.1}>
              <Typography
                variant="overline"
                sx={{
                  color: colors.text.secondary,
                  letterSpacing: isRtl ? '0.06em' : '0.14em',
                  fontSize: { xs: '0.8125rem', md: '0.75rem' },
                  mb: { xs: 2.5, md: 3 },
                  display: 'block',
                }}
              >
                {aboutPreview.eyebrow}
              </Typography>
              <Typography
                id="about-preview-title"
                component="h2"
                sx={{
                  fontFamily: displayFont,
                  fontWeight: 400,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3.25rem' },
                  lineHeight: 1.15,
                  mb: { xs: 3, md: 4 },
                  maxWidth: 520,
                }}
              >
                {aboutPreview.title}
              </Typography>
              <Typography
                sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  mb: 5,
                  maxWidth: 460,
                }}
              >
                {aboutPreview.description}
              </Typography>
              <Button
                component={RouterLink}
                to={aboutPreview.cta.path}
                variant="outlined"
                sx={buttonOutlinedSx}
              >
                {aboutPreview.cta.label}
              </Button>
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutPreviewSection;
