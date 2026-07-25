import { Box, Typography } from '@mui/material';
import { SafeImage } from '@/components/common/SafeImage';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { FadeIn } from './FadeIn';

const masonrySpans: Record<string, object> = {
  villas: {
    gridColumn: { xs: '1 / -1', sm: 'span 2', lg: 'span 2' },
    gridRow: { xs: 'span 1', lg: 'span 2' },
  },
  hotels: { gridColumn: { xs: '1 / -1', sm: 'span 1' } },
  commercial: { gridColumn: { xs: '1 / -1', sm: 'span 1' } },
  hospitality: { gridColumn: { xs: '1 / -1', sm: 'span 1' } },
  mosques: { gridColumn: { xs: '1 / -1', sm: 'span 1' } },
  landscape: { gridColumn: { xs: '1 / -1', sm: 'span 2', lg: 'span 2' } },
};

export function ApplicationsSection() {
  const { home, isRtl } = useLocale();
  const { applications } = home;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="applications-title"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 18 },
        bgcolor: colors.background,
      }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="applications-title"
            component="h2"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.5rem' },
              mb: { xs: 4, sm: 5, md: 6, lg: 8 },
              lineHeight: 1.15,
            }}
          >
            {applications.title}
          </Typography>
        </FadeIn>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 1.5, md: 2 },
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gridAutoRows: { xs: '220px', sm: '240px', lg: '220px' },
          }}
        >
          {applications.items.map((item, index) => (
            <Box key={item.id} sx={{ ...masonrySpans[item.id], minHeight: 0 }}>
              <FadeIn delay={Math.min(index * 0.05, 0.25)} sx={{ height: '100%' }}>
                <Box
                  component="article"
                  sx={{
                    position: 'relative',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    bgcolor: colors.secondary,
                    '&:hover .safe-image-media': { transform: 'scale(1.02)' },
                    '&:hover .app-veil': { opacity: 1 },
                    '&:hover .app-title': {
                      opacity: 1,
                    },
                  }}
                >
                  <SafeImage
                    src={images.applications[item.imageKey]}
                    alt={item.title}
                    fallbackLabel={item.title}
                    loading="lazy"
                    sx={{
                      transition: 'transform 320ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                    }}
                  />
                  <Box
                    className="app-veil"
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(0,0,0,0.45)',
                      opacity: { xs: 0.4, lg: 0 },
                      transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                      '@media (hover: none)': {
                        opacity: 0.4,
                      },
                    }}
                  />
                  <Typography
                    className="app-title"
                    component="h3"
                    sx={{
                      position: 'absolute',
                      left: { xs: 20, md: 28 },
                      bottom: { xs: 20, md: 28 },
                      right: 20,
                      zIndex: 1,
                      color: colors.text.inverse,
                      fontFamily: displayFont,
                      fontSize: { xs: '1.2rem', sm: '1.35rem', lg: '1.75rem' },
                      fontWeight: 400,
                      /* Always readable on touch; hover fade on pointer devices */
                      opacity: { xs: 1, lg: 0 },
                      textShadow: '0 1px 12px rgba(0,0,0,0.35)',
                      transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                      '@media (hover: none)': {
                        opacity: 1,
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </FadeIn>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ApplicationsSection;
