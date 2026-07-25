import { Box, Typography } from '@mui/material';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { bodySx, mediaFrameSx, sectionTallSx, sectionTitleSx } from '@/theme/ui';

export function AboutWhyEgypt() {
  const { about, isRtl } = useLocale();
  const { whyEgypt } = about;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="about-why-egypt-title"
      sx={{ ...sectionTallSx, bgcolor: colors.background }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 5, lg: 10 },
            alignItems: 'center',
          }}
        >
          <FadeIn>
            <Box
              sx={{
                ...mediaFrameSx,
                aspectRatio: { xs: '4 / 3', lg: '5 / 4' },
              }}
            >
              <SafeImage
                src={images.about.whyEgypt}
                alt={whyEgypt.title}
                fallbackLabel={whyEgypt.title}
                loading="lazy"
              />
            </Box>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Typography
              id="about-why-egypt-title"
              component="h2"
              sx={{ ...sectionTitleSx(displayFont), mb: { xs: 2.5, md: 3 } }}
            >
              {whyEgypt.title}
            </Typography>
            <Typography sx={bodySx}>{whyEgypt.description}</Typography>
          </FadeIn>
        </Box>
      </Container>
    </Box>
  );
}
