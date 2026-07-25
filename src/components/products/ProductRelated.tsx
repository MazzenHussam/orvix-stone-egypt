import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { productDetailsPath } from '@/routes/paths';
import type { Product, ProductsContent } from '@/types/content';

type ProductRelatedProps = {
  products: Product[];
  content: ProductsContent;
};

export function ProductRelated({ products, content }: ProductRelatedProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  if (products.length === 0) return null;

  return (
    <Box component="section" sx={{ mt: { xs: 4, md: 6 } }}>
      <FadeIn>
        <Typography
          component="h2"
          sx={{
            fontFamily: displayFont,
            fontWeight: 400,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            color: '#111111',
            mb: { xs: 4, md: 5 },
          }}
        >
          {content.relatedProductsLabel}
        </Typography>
      </FadeIn>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: { xs: 3.5, sm: 4, md: 5 },
        }}
      >
        {products.map((product, index) => (
          <FadeIn key={product.id} delay={Math.min(index * 0.05, 0.2)}>
            <Box
              component={RouterLink}
              to={productDetailsPath(product.slug)}
              sx={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                '&:hover .safe-image-media': { transform: 'scale(1.02)' },
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: '4px',
                  aspectRatio: '4 / 5',
                  mb: 2,
                  bgcolor: '#E9E6E2',
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
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: '#111111',
                }}
              >
                {product.name}
              </Typography>
            </Box>
          </FadeIn>
        ))}
      </Box>
    </Box>
  );
}
