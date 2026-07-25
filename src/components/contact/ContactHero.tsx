import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';

export function ContactHero() {
  const { contact, isRtl } = useLocale();
  const { hero } = contact;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="contact-hero-title"
      sx={{
        bgcolor: '#FFFFFF',
        pt: { xs: 12, sm: 14, md: 16, lg: 18 },
        pb: { xs: 6, sm: 8, md: 10, lg: 12 },
      }}
    >
      <Container>
        <FadeIn>
          <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', px: { xs: 0.5, sm: 0 } }}>
            <Typography
              id="contact-hero-title"
              component="h1"
              sx={{
                fontFamily: displayFont,
                fontWeight: 400,
                fontSize: {
                  xs: '2.25rem',
                  sm: '2.75rem',
                  md: '3.5rem',
                  lg: '4.25rem',
                },
                lineHeight: 1.1,
                letterSpacing: isRtl ? 0 : '0.04em',
                color: '#111111',
              }}
            >
              {hero.title}
            </Typography>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
