import { Box, Stack, Typography } from '@mui/material';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';

export function AboutJourney() {
  const { about, isRtl } = useLocale();
  const { journey } = about;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="about-journey-title"
      sx={{ py: { xs: 8, sm: 10, md: 14, lg: 16 }, bgcolor: colors.white }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="about-journey-title"
            component="h2"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.25rem' },
              mb: { xs: 4, sm: 5, md: 7, lg: 10 },
              textAlign: 'center',
              lineHeight: 1.15,
            }}
          >
            {journey.title}
          </Typography>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={{ xs: 2, lg: 0 }}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              rowGap: { xs: 1.5, lg: 2 },
              width: '100%',
            }}
          >
            {journey.steps.map((step, index) => (
              <Fragment key={step.id}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: displayFont,
                    fontSize: { xs: '1.25rem', sm: '1.35rem', lg: '1.55rem' },
                    fontWeight: 400,
                    letterSpacing: isRtl ? 0 : '0.04em',
                    px: { lg: 1.5, xl: 2 },
                    whiteSpace: { xs: 'normal', lg: 'nowrap' },
                    textAlign: 'center',
                  }}
                >
                  {step.label}
                </Typography>
                {index < journey.steps.length - 1 && (
                  <Box
                    aria-hidden
                    sx={{
                      color: colors.text.secondary,
                      display: 'flex',
                      alignItems: 'center',
                      opacity: 0.5,
                      transform: isRtl ? 'scaleX(-1)' : 'none',
                      px: { lg: 0.5 },
                      flexShrink: 0,
                    }}
                  >
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                      <ArrowRight size={18} strokeWidth={1} />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                      <ArrowDown size={18} strokeWidth={1} />
                    </Box>
                  </Box>
                )}
              </Fragment>
            ))}
          </Stack>
        </FadeIn>
      </Container>
    </Box>
  );
}
