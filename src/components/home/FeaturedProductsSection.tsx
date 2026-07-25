import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SafeImage } from '@/components/common/SafeImage';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { productDetailsPath } from '@/routes/paths';
import { colors } from '@/theme/colors';
import { FadeIn } from './FadeIn';

/** Editorial product showcase — no cards, large photography, name only. */
export function FeaturedProductsSection() {
  const { home, isRtl } = useLocale();
  const { featuredProducts } = home;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="featured-products-title"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 18 },
        bgcolor: colors.white,
      }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="featured-products-title"
            component="h2"
            sx={{
              fontFamily: displayFont,
              fontWeight: 400,
              fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.5rem' },
              mb: { xs: 4, sm: 5, md: 7, lg: 10 },
              lineHeight: 1.15,
            }}
          >
            {featuredProducts.title}
          </Typography>
        </FadeIn>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            columnGap: { xs: 0, md: 4, lg: 6 },
            rowGap: { xs: 5, sm: 6, md: 8, lg: 10 },
          }}
        >
          {featuredProducts.items.map((product, index) => (
            <FadeIn
              key={product.id}
              delay={Math.min(index * 0.04, 0.2)}
              sx={{
                mt: { xs: 0, lg: index % 2 === 1 ? 10 : 0 },
              }}
            >
              <Box
                component={RouterLink}
                to={productDetailsPath(product.slug)}
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover .safe-image-media': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: '4px',
                    aspectRatio: index % 3 === 0 ? '3 / 4' : '4 / 5',
                    mb: 2.5,
                    bgcolor: colors.secondary,
                  }}
                >
                  <SafeImage
                    src={images.products[product.imageKey]}
                    alt={product.name}
                    fallbackLabel={product.name}
                    loading="lazy"
                    sx={{
                      transition: 'transform 320ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                    }}
                  />
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: displayFont,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    fontWeight: 400,
                    letterSpacing: isRtl ? 0 : '0.02em',
                  }}
                >
                  {product.name}
                </Typography>
              </Box>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturedProductsSection;
