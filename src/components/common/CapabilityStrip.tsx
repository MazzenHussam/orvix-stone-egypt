import { Box, Stack, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import type { CapabilitySection } from '@/types/content';
import { colors } from '@/theme/colors';
import { eyebrowSx } from '@/theme/ui';

type CapabilityStripProps = {
  section: CapabilitySection;
  /** Visual tone — does not change layout structure. */
  tone?: 'white' | 'warm';
  id?: string;
};

/**
 * Minimal editorial strip of professional capability labels.
 * No cards, shadows, or invented statistics.
 */
export function CapabilityStrip({
  section,
  tone = 'warm',
  id = 'capability-strip',
}: CapabilityStripProps) {
  const { isRtl } = useLocale();

  return (
    <Box
      component="section"
      aria-labelledby={`${id}-title`}
      sx={{
        py: { xs: 5, sm: 6, md: 7, lg: 8 },
        bgcolor: tone === 'white' ? colors.white : colors.background,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container>
        <FadeIn>
          <Typography
            id={`${id}-title`}
            component="h2"
            sx={{
              ...eyebrowSx(isRtl),
              textAlign: 'center',
              px: 1,
              mb: { xs: 2.5, md: 3.5 },
            }}
          >
            {section.title}
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            component="ul"
            sx={{
              listStyle: 'none',
              m: 0,
              p: 0,
              flexWrap: 'wrap',
              justifyContent: 'center',
              columnGap: 0,
              rowGap: { xs: 1.75, md: 2 },
            }}
          >
            {section.items.map((item, index) => (
              <Box
                key={item.id}
                component="li"
                sx={{
                  px: { xs: 1.5, sm: 2, md: 2.5 },
                  py: { xs: 0.25, sm: 0 },
                  borderInlineStart:
                    index === 0 ? 'none' : { xs: 'none', md: `1px solid ${colors.border}` },
                }}
              >
                <Typography
                  sx={{
                    color: colors.text.primary,
                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.95rem' },
                    letterSpacing: isRtl ? 0 : '0.03em',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: 'center',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </FadeIn>
      </Container>
    </Box>
  );
}
