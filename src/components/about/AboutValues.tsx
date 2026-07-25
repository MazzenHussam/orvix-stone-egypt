import { Box, Grid, Typography } from '@mui/material';
import { BadgeCheck, Globe2, Hammer, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import type { AboutValueIcon } from '@/types/content';
import { colors } from '@/theme/colors';
import {
  iconSize,
  iconStroke,
  sectionTallSx,
  sectionTitleSx,
  typeScale,
} from '@/theme/ui';

const iconMap: Record<AboutValueIcon, LucideIcon> = {
  craftsmanship: Hammer,
  quality: BadgeCheck,
  integrity: Scale,
  global: Globe2,
};

export function AboutValues() {
  const { about, isRtl } = useLocale();
  const { values } = about;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="about-values-title"
      sx={{ ...sectionTallSx, bgcolor: colors.background }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="about-values-title"
            component="h2"
            sx={{
              ...sectionTitleSx(displayFont),
              mb: { xs: 5, md: 8 },
            }}
          >
            {values.title}
          </Typography>
        </FadeIn>

        <Grid container spacing={{ xs: 4, sm: 5, lg: 4 }}>
          {values.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
                <FadeIn delay={Math.min(index * 0.06, 0.24)}>
                  <Box component="article">
                    <Box sx={{ mb: 2.5, color: colors.primary }}>
                      <Icon size={iconSize.lg} strokeWidth={iconStroke} aria-hidden />
                    </Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: displayFont,
                        fontSize: typeScale.cardTitle,
                        fontWeight: 400,
                        mb: 1.25,
                        color: colors.text.primary,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.text.secondary,
                        lineHeight: 1.75,
                        fontSize: typeScale.bodySm,
                        maxWidth: 280,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </FadeIn>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
