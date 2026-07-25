import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import {
  buttonOnDarkSx,
  ctaBandMinHeight,
  ctaOverlaySx,
  typeScale,
} from '@/theme/ui';

type BandCtaProps = {
  id: string;
  title: string;
  buttonLabel: string;
  /** Internal route or hash href */
  href: string;
  backgroundImage: string;
  /** Use anchor link instead of router */
  externalHash?: boolean;
};

/**
 * Shared photographic CTA band — one pattern for Home / About / Export / Contact.
 */
export function BandCta({
  id,
  title,
  buttonLabel,
  href,
  backgroundImage,
  externalHash = false,
}: BandCtaProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby={id}
      sx={{
        position: 'relative',
        minHeight: ctaBandMinHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: colors.text.inverse,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box aria-hidden sx={ctaOverlaySx} />

      <Container
        sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: { xs: 10, md: 14 } }}
      >
        <FadeIn>
          <Typography
            id={id}
            component="h2"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: typeScale.display,
              lineHeight: 1.12,
              color: colors.white,
              maxWidth: 780,
              mx: 'auto',
              mb: 4,
              px: { xs: 1, sm: 0 },
            }}
          >
            {title}
          </Typography>
          {externalHash ? (
            <Button component="a" href={href} variant="contained" sx={buttonOnDarkSx}>
              {buttonLabel}
            </Button>
          ) : (
            <Button
              component={RouterLink}
              to={href}
              variant="contained"
              sx={buttonOnDarkSx}
            >
              {buttonLabel}
            </Button>
          )}
        </FadeIn>
      </Container>
    </Box>
  );
}
