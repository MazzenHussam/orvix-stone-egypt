import { Box, Stack, Typography } from '@mui/material';
import {
  CheckCircle2,
  MapPinned,
  Mountain,
  Package,
  ScanSearch,
  Scissors,
  Ship,
  Sparkles,
  ArrowDown,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Fragment } from 'react';
import { FadeIn } from '@/components/home/FadeIn';
import { Container as AppContainer } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import type { ExportProcessIcon } from '@/types/content';
import { colors } from '@/theme/colors';
import { iconSize, iconStroke, sectionSx, sectionTitleSx, typeScale } from '@/theme/ui';

const processIconMap: Record<ExportProcessIcon, LucideIcon> = {
  quarry: Mountain,
  selection: ScanSearch,
  cutting: Scissors,
  finishing: Sparkles,
  inspection: CheckCircle2,
  packaging: Package,
  shipping: Ship,
  destination: MapPinned,
};

export function ExportProcess() {
  const { export: exportPage, isRtl } = useLocale();
  const { process } = exportPage;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="export-process-title"
      sx={{ ...sectionSx, bgcolor: colors.background }}
    >
      <AppContainer>
        <FadeIn>
          <Typography
            id="export-process-title"
            component="h2"
            sx={{
              ...sectionTitleSx(displayFont),
              textAlign: 'center',
              mb: { xs: 5, md: 8 },
            }}
          >
            {process.title}
          </Typography>
        </FadeIn>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
            gap: { xs: 5, md: 6 },
          }}
        >
          {process.steps.map((step, index) => {
            const Icon = processIconMap[step.icon];
            return (
              <FadeIn key={step.id} delay={Math.min(index * 0.05, 0.3)}>
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
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.text.secondary,
                      lineHeight: 1.75,
                      fontSize: typeScale.bodySm,
                    }}
                  >
                    {step.description}
                  </Typography>
                  {index < process.steps.length - 1 && (
                    <Box
                      aria-hidden
                      sx={{
                        display: { xs: 'flex', lg: 'none' },
                        justifyContent: 'center',
                        mt: 3,
                        color: colors.text.secondary,
                        opacity: 0.45,
                      }}
                    >
                      <ArrowDown size={iconSize.sm} strokeWidth={iconStroke} />
                    </Box>
                  )}
                </Box>
              </FadeIn>
            );
          })}
        </Box>

        {/* Desktop linear cue under grid for editorial continuity */}
        <FadeIn delay={0.1}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: 'none', lg: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              mt: 8,
              rowGap: 1.5,
            }}
          >
            {process.steps.map((step, index) => (
              <Fragment key={`cue-${step.id}`}>
                <Typography
                  sx={{
                    fontFamily: displayFont,
                    fontSize: '1rem',
                    color: colors.text.primary,
                    px: 1,
                  }}
                >
                  {step.title}
                </Typography>
                {index < process.steps.length - 1 && (
                  <Box
                    aria-hidden
                    sx={{
                      color: colors.text.secondary,
                      opacity: 0.45,
                      display: 'inline-flex',
                      transform: isRtl ? 'scaleX(-1)' : 'none',
                    }}
                  >
                    <ArrowRight size={14} strokeWidth={iconStroke} />
                  </Box>
                )}
              </Fragment>
            ))}
          </Stack>
        </FadeIn>
      </AppContainer>
    </Box>
  );
}
