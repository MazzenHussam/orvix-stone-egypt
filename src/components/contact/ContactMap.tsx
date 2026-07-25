import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';

export function ContactMap() {
  const { contact, isRtl } = useLocale();
  const { map } = contact;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="contact-map-title"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: '#F8F6F3' }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="contact-map-title"
            component="h2"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#111111',
              mb: { xs: 4, md: 6 },
              textAlign: isRtl ? 'right' : 'left',
            }}
          >
            {map.title}
          </Typography>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Box
            role="img"
            aria-label={map.heading}
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '21 / 9',
              minHeight: { xs: 240, md: 360 },
              overflow: 'hidden',
              border: '1px solid #E2DED8',
              bgcolor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 3, md: 6 },
            }}
          >
            <Box sx={{ textAlign: 'center', maxWidth: 520 }}>
              <Typography
                component="p"
                sx={{
                  fontFamily: displayFont,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#111111',
                  mb: 2,
                  letterSpacing: isRtl ? 0 : '0.04em',
                }}
              >
                {map.heading}
              </Typography>
              <Typography sx={{ color: '#555555', lineHeight: 1.8, fontSize: '1.05rem' }}>
                {map.description}
              </Typography>
            </Box>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
