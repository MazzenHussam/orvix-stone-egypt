import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { useLocale } from '@/hooks/useLocale';
import type { ProductsContent } from '@/types/content';
import { colors } from '@/theme/colors';
import { bodySx, eyebrowSx, typeScale } from '@/theme/ui';

type ProductsHeroProps = {
  content: ProductsContent;
};

export function ProductsHero({ content }: ProductsHeroProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <FadeIn>
      <Box
        component="header"
        sx={{
          textAlign: 'center',
          maxWidth: 720,
          mx: 'auto',
          mb: { xs: 5, sm: 6, md: 7, lg: 8 },
          px: { xs: 0.5, sm: 0 },
        }}
      >
        <Typography component="p" sx={eyebrowSx(isRtl)}>
          {content.pageLabel}
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: displayFont,
            fontWeight: 400,
            fontSize: typeScale.display,
            lineHeight: 1.12,
            color: colors.text.primary,
            mb: { xs: 2.5, md: 3 },
          }}
        >
          {content.pageTitle}
        </Typography>
        <Typography sx={bodySx}>{content.pageDescription}</Typography>
      </Box>
    </FadeIn>
  );
}
