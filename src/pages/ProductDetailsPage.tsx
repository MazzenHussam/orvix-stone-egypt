import { useMemo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { ProductDetailsHero } from '@/components/products/ProductDetailsHero';
import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductMeta } from '@/components/products/ProductMeta';
import { ProductRelated } from '@/components/products/ProductRelated';
import { ProductSpecs } from '@/components/products/ProductSpecs';
import { getProductBySlug } from '@/data/products';
import { useLocale } from '@/hooks/useLocale';
import { routes } from '@/routes/paths';

export function ProductDetailsPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const { locale, products, isRtl } = useLocale();
  const product = getProductBySlug(locale, slug);

  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  const related = useMemo(() => {
    if (!product) return [];
    return product.relatedSlugs
      .map((relatedSlug) => products.items.find((item) => item.slug === relatedSlug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [product, products.items]);

  if (!product) {
    return (
      <Box
        component="section"
        sx={{
          bgcolor: '#FFFFFF',
          pt: { xs: 12, sm: 14, md: 16, lg: 18 },
          pb: { xs: 8, sm: 10, md: 12, lg: 16 },
          minHeight: '60vh',
        }}
      >
        <Container>
          <FadeIn>
            <Typography
              component="h1"
              sx={{
                fontFamily: displayFont,
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.25rem' },
                fontWeight: 400,
                color: '#111111',
                mb: 2,
              }}
            >
              {products.notFoundTitle}
            </Typography>
            <Typography sx={{ color: '#555555', mb: 4, maxWidth: 420 }}>
              {products.notFoundDescription}
            </Typography>
            <Button
              component={RouterLink}
              to={routes.products}
              variant="outlined"
              sx={{ borderRadius: '4px', borderColor: '#111111', color: '#111111' }}
            >
              {products.backToProductsLabel}
            </Button>
          </FadeIn>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      component="article"
      sx={{
        bgcolor: '#FFFFFF',
        pt: { xs: 12, sm: 14, md: 16, lg: 18 },
        pb: { xs: 8, sm: 10, md: 12, lg: 16 },
      }}
    >
      <Container>
        <FadeIn>
          <Button
            component={RouterLink}
            to={routes.products}
            variant="text"
            startIcon={
              <Box
                component="span"
                sx={{
                  display: 'inline-flex',
                  transform: isRtl ? 'scaleX(-1)' : 'none',
                }}
              >
                <ArrowLeft size={16} strokeWidth={1.25} />
              </Box>
            }
            sx={{
              px: 0,
              mb: { xs: 4, md: 6 },
              color: '#555555',
              borderRadius: 0,
              minWidth: 0,
              '&:hover': { bgcolor: 'transparent', color: '#111111' },
            }}
          >
            {products.backToProductsLabel}
          </Button>
        </FadeIn>

        <ProductDetailsHero product={product} content={products} />
        <ProductGallery product={product} content={products} />
        <ProductSpecs product={product} content={products} />
        <ProductMeta product={product} content={products} />
        <ProductRelated products={related} content={products} />
      </Container>
    </Box>
  );
}

export default ProductDetailsPage;
