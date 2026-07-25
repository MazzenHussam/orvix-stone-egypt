import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { routes } from '@/routes/paths';
import type { Product, ProductsContent } from '@/types/content';
import { colors } from '@/theme/colors';
import { buttonOutlinedSx, buttonPrimarySx, mediaFrameSx } from '@/theme/ui';

type ProductDetailsHeroProps = {
  product: Product;
  content: ProductsContent;
};

export function ProductDetailsHero({ product, content }: ProductDetailsHeroProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  const stoneLabel =
    product.stoneType === 'marble' ? content.filterMarbleLabel : content.filterGraniteLabel;

  return (
    <Box component="section" sx={{ mb: { xs: 8, md: 12 } }}>
      <FadeIn>
        <Box
          sx={{
            ...mediaFrameSx,
            aspectRatio: { xs: '4 / 5', md: '21 / 9' },
            mb: { xs: 4, md: 6 },
            '&:hover .safe-image-media': { transform: 'scale(1.02)' },
          }}
        >
          <SafeImage
            src={images.products[product.imageKey]}
            alt={product.name}
            fallbackLabel={product.name}
            loading="eager"
            sx={{
              transition: 'transform 320ms cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          />
        </Box>
      </FadeIn>

      <FadeIn delay={0.08}>
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            sx={{
              color: colors.text.secondary,
              fontSize: '0.75rem',
              letterSpacing: isRtl ? '0.06em' : '0.14em',
              textTransform: isRtl ? 'none' : 'uppercase',
              mb: 2,
            }}
          >
            {content.stoneTypeLabel} — {stoneLabel}
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: {
                xs: '1.875rem',
                sm: '2.5rem',
                md: '3.25rem',
                lg: '3.75rem',
              },
              lineHeight: 1.1,
              color: colors.text.primary,
              mb: 3,
            }}
          >
            {product.name}
          </Typography>
          <Typography
            sx={{
              color: colors.text.secondary,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.85,
              mb: 4,
            }}
          >
            {product.description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              flexWrap: 'wrap',
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Button
              component={RouterLink}
              to={routes.contactForm}
              variant="contained"
              sx={{ ...buttonPrimarySx, width: { xs: '100%', sm: 'auto' } }}
            >
              {content.requestQuoteLabel}
            </Button>
            <Button
              variant="outlined"
              sx={{ ...buttonOutlinedSx, width: { xs: '100%', sm: 'auto' } }}
            >
              {content.downloadPdfLabel}
            </Button>
          </Box>
        </Box>
      </FadeIn>
    </Box>
  );
}
