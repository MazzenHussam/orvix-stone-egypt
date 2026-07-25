import { Box, Grid, Typography } from '@mui/material';
import { BadgeCheck, Gem, Globe2, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import type { HomeWhyChooseItem } from '@/types/content';
import { colors } from '@/theme/colors';
import {
  iconSize,
  iconStroke,
  sectionTallSx,
  sectionTitleLgSx,
  typeScale,
} from '@/theme/ui';
import { FadeIn } from './FadeIn';

const iconMap: Record<HomeWhyChooseItem['icon'], LucideIcon> = {
  stone: Gem,
  export: Globe2,
  finishing: Sparkles,
  quality: BadgeCheck,
};

export function WhyChooseSection() {
  const { home, isRtl } = useLocale();
  const { whyChoose } = home;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="why-choose-title"
      sx={{
        ...sectionTallSx,
        bgcolor: colors.black,
        color: colors.text.inverse,
      }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="why-choose-title"
            component="h2"
            sx={{
              ...sectionTitleLgSx(displayFont),
              color: colors.text.inverse,
              mb: { xs: 5, md: 8 },
            }}
          >
            {whyChoose.title}
          </Typography>
        </FadeIn>

        <Grid container spacing={{ xs: 4, sm: 5, lg: 4 }}>
          {whyChoose.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
                <FadeIn delay={Math.min(index * 0.06, 0.24)}>
                  <Box component="article">
                    <Box sx={{ mb: 2.5, color: colors.text.inverse }}>
                      <Icon size={iconSize.lg} strokeWidth={iconStroke} aria-hidden />
                    </Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: displayFont,
                        fontSize: typeScale.cardTitle,
                        fontWeight: 400,
                        color: colors.text.inverse,
                        mb: 1.25,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(248,246,243,0.65)',
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

export default WhyChooseSection;
