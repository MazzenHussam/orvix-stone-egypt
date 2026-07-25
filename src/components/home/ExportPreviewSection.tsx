import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { FadeIn } from './FadeIn';

export function ExportPreviewSection() {
  const { home, isRtl } = useLocale();
  const { exportPreview } = home;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="export-preview-title"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 18 },
        bgcolor: colors.background,
      }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="export-preview-title"
            component="h2"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.5rem' },
              mb: { xs: 4, sm: 5, md: 7, lg: 10 },
              textAlign: 'center',
              lineHeight: 1.15,
              px: { xs: 1, sm: 0 },
            }}
          >
            {exportPreview.title}
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
              columnGap: { lg: 0.5 },
              mb: { xs: 5, md: 6, lg: 8 },
              width: '100%',
            }}
          >
            {exportPreview.steps.map((step, index) => (
              <Fragment key={step.id}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: displayFont,
                    fontSize: { xs: '1.35rem', sm: '1.5rem', lg: '1.75rem' },
                    fontWeight: 400,
                    letterSpacing: isRtl ? 0 : '0.04em',
                    px: { lg: 1.75, xl: 2.5 },
                    whiteSpace: { xs: 'normal', lg: 'nowrap' },
                    textAlign: 'center',
                  }}
                >
                  {step.label}
                </Typography>
                {index < exportPreview.steps.length - 1 && (
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

        <FadeIn delay={0.12}>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to={exportPreview.cta.path}
              variant="contained"
              sx={{
                bgcolor: colors.primary,
                color: colors.text.inverse,
                px: { xs: 2.5, sm: 3.5 },
                py: 1.4,
                borderRadius: '4px',
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: 360, sm: 'none' },
                transition:
                  'background-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                '&:hover': {
                  bgcolor: colors.black,
                  transform: 'scale(1.02)',
                },
              }}
            >
              {exportPreview.cta.label}
            </Button>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}

export default ExportPreviewSection;
