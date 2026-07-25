import { Box, Typography } from '@mui/material';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { bodySx, mediaFrameSx, sectionTallSx, sectionTitleSx } from '@/theme/ui';

export function AboutStory() {
  const { about, isRtl } = useLocale();
  const { story } = about;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="about-story-title"
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
            <Box sx={{ ...mediaFrameSx, aspectRatio: '4 / 5' }}>
              <SafeImage
                src={images.about.story}
                alt={`${story.titleLine1} ${story.titleLine2}`}
                fallbackLabel={story.titleLine1}
                loading="lazy"
              />
            </Box>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Typography
              id="about-story-title"
              component="h2"
              sx={{ ...sectionTitleSx(displayFont), mb: { xs: 2.5, md: 3 } }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                {story.titleLine1}
              </Box>
              <Box component="span" sx={{ display: 'block' }}>
                {story.titleLine2}
              </Box>
            </Typography>
            <Typography sx={bodySx}>{story.description}</Typography>
          </FadeIn>
        </Box>
      </Container>
    </Box>
  );
}
