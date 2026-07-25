import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SafeImage } from '@/components/common/SafeImage';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';

const HERO_BG = '#F8F6F3';
const HEADING = '#111111';
const BODY = '#555555';
const LABEL = '#B9985A';

export function AboutHero() {
  const { about, isRtl } = useLocale();
  const { hero } = about;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-label={hero.label}
      sx={{
        bgcolor: HERO_BG,
        pt: { xs: 12, sm: 14, md: 16, lg: 18 },
        pb: { xs: 6, sm: 7, md: 8, lg: 10 },
      }}
    >
      <Container>
        <Box
          sx={{
            maxWidth: 700,
            mx: 'auto',
            textAlign: 'center',
            mb: { xs: 4, sm: 5, md: 6, lg: 8 },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typography
              component="p"
              sx={{
                color: LABEL,
                fontSize: '0.75rem',
                letterSpacing: isRtl ? '0.08em' : '0.22em',
                textTransform: isRtl ? 'none' : 'uppercase',
                fontWeight: 500,
                mb: 3,
              }}
            >
              {hero.label}
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontFamily: displayFont,
                fontWeight: 400,
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3.25rem',
                  lg: '3.75rem',
                },
                lineHeight: 1.12,
                color: HEADING,
                mb: { xs: 2.5, md: 3 },
                px: { xs: 0.5, sm: 0 },
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                {hero.titleLine1}
              </Box>
              <Box component="span" sx={{ display: 'block' }}>
                {hero.titleLine2}
              </Box>
            </Typography>

            <Typography
              sx={{
                color: BODY,
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.8,
                maxWidth: 560,
                mx: 'auto',
              }}
            >
              {hero.description}
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.32, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Box
            sx={{
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: '4px',
              overflow: 'hidden',
              bgcolor: '#E9E6E2',
            }}
          >
            <SafeImage
              src={images.about.hero}
              alt={hero.titleLine1}
              fallbackLabel={hero.titleLine1}
              loading="eager"
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default AboutHero;
