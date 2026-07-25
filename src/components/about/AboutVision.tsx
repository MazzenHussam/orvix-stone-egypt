import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { eyebrowSx, sectionSx, typeScale } from '@/theme/ui';

export function AboutVision() {
  const { about, isRtl } = useLocale();
  const { vision } = about;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="about-vision-title"
      sx={{
        ...sectionSx,
        bgcolor: colors.black,
        color: colors.text.inverse,
      }}
    >
      <Container>
        <FadeIn>
          <Box sx={{ maxWidth: 860, mx: 'auto', textAlign: 'center' }}>
            <Typography
              component="p"
              sx={{
                ...eyebrowSx(isRtl),
                color: colors.accent,
              }}
            >
              {vision.title}
            </Typography>
            <Typography
              id="about-vision-title"
              component="h2"
              sx={{
                fontFamily: displayFont,
                fontWeight: 400,
                fontSize: typeScale.sectionLg,
                lineHeight: 1.3,
                color: colors.text.inverse,
              }}
            >
              {vision.description}
            </Typography>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
