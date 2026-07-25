import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { buttonOutlinedSx, buttonPrimarySx } from '@/theme/ui';

export function HeroSection() {
  const { home, isRtl } = useLocale();
  const { hero } = home;

  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-label={hero.titleLine1}
      sx={{
        position: 'relative',
        height: { xs: '100svh', md: '100vh' },
        minHeight: { xs: 520, sm: 560, md: 640 },
        maxHeight: { xs: 820, md: 'none' },
        display: 'flex',
        alignItems: 'flex-end',
        color: colors.text.primary,
        overflow: 'hidden',
        bgcolor: colors.background,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images.hero.home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(248,246,243,0) 42%, rgba(248,246,243,0.18) 68%, rgba(248,246,243,0.25) 100%)',
        }}
      />

      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          pb: { xs: 6, sm: 8, md: 12, lg: 14 },
          pt: { xs: 12, sm: 14, md: 18, lg: 20 },
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: {
                xs: '2.125rem',
                sm: '2.75rem',
                md: '3.5rem',
                lg: '4.5rem',
                xl: '5.5rem',
              },
              lineHeight: { xs: 1.12, md: 1.05 },
              letterSpacing: isRtl ? 0 : '0.01em',
              color: colors.text.primary,
              maxWidth: 920,
              mb: { xs: 3, sm: 3.5, md: 5 },
              wordBreak: isRtl ? 'break-word' : 'normal',
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              {hero.titleLine1}
            </Box>
            <Box component="span" sx={{ display: 'block' }}>
              {hero.titleLine2}
            </Box>
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
            useFlexGap
            sx={{
              alignItems: { xs: 'stretch', sm: 'center' },
              maxWidth: { sm: '100%' },
            }}
          >
            <Button
              component={RouterLink}
              to={hero.primaryCta.path}
              variant="contained"
              sx={{ ...buttonPrimarySx, width: { xs: '100%', sm: 'auto' } }}
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              component={RouterLink}
              to={hero.secondaryCta.path}
              variant="outlined"
              sx={{
                ...buttonOutlinedSx,
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: colors.primary,
                  bgcolor: 'rgba(255,255,255,0.45)',
                  transform: 'scale(1.02)',
                },
              }}
            >
              {hero.secondaryCta.label}
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default HeroSection;
