import { Box, Grid, Typography } from '@mui/material';
import { BadgeCheck, Mountain, Package, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import type { ExportWhyIcon } from '@/types/content';
import { colors } from '@/theme/colors';
import {
  iconSize,
  iconStroke,
  sectionSx,
  sectionTitleSx,
  typeScale,
} from '@/theme/ui';

const whyIconMap: Record<ExportWhyIcon, LucideIcon> = {
  quarry: Mountain,
  packaging: Package,
  quality: BadgeCheck,
  logistics: Truck,
};

export function ExportWhy() {
  const { export: exportPage, isRtl } = useLocale();
  const { why } = exportPage;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="export-why-title"
      sx={{ ...sectionSx, bgcolor: colors.white }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="export-why-title"
            component="h2"
            sx={{
              ...sectionTitleSx(displayFont),
              mb: { xs: 5, md: 8 },
            }}
          >
            {why.title}
          </Typography>
        </FadeIn>

        <Grid container spacing={{ xs: 4, sm: 5, lg: 4 }}>
          {why.items.map((item, index) => {
            const Icon = whyIconMap[item.icon];
            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
                <FadeIn delay={Math.min(index * 0.06, 0.24)}>
                  <Box component="article">
                    <Box sx={{ mb: 2.5, color: colors.text.primary }}>
                      <Icon size={iconSize.lg} strokeWidth={iconStroke} aria-hidden />
                    </Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: displayFont,
                        fontSize: typeScale.cardTitle,
                        fontWeight: 400,
                        color: colors.text.primary,
                        mb: 1.25,
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
