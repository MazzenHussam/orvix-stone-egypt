import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { eyebrowSx, sectionSx, typeScale } from '@/theme/ui';

export function AboutMission() {
  const { about, isRtl } = useLocale();
  const { mission } = about;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="about-mission-title"
      sx={{ ...sectionSx, bgcolor: colors.white }}
    >
      <Container>
        <FadeIn>
          <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto' }}>
            <Typography component="p" sx={eyebrowSx(isRtl)}>
              {mission.title}
            </Typography>
            <Typography
              id="about-mission-title"
              component="h2"
              sx={{
                fontFamily: displayFont,
                fontWeight: 400,
                fontSize: typeScale.sectionLg,
                lineHeight: 1.25,
                color: colors.text.primary,
                mb: 0,
              }}
            >
              {mission.description}
            </Typography>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
