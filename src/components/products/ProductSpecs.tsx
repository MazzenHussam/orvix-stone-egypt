import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { useLocale } from '@/hooks/useLocale';
import type { Product, ProductsContent } from '@/types/content';

type ProductSpecsProps = {
  product: Product;
  content: ProductsContent;
};

export function ProductSpecs({ product, content }: ProductSpecsProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box component="section" sx={{ mb: { xs: 8, md: 12 } }}>
      <FadeIn>
        <Typography
          component="h2"
          sx={{
            fontFamily: displayFont,
            fontWeight: 400,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            color: '#111111',
            mb: 4,
          }}
        >
          {content.specificationsLabel}
        </Typography>
      </FadeIn>

      <FadeIn delay={0.05}>
        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            '& th, & td': {
              textAlign: 'start',
              py: 2,
              borderBottom: '1px solid #E2DED8',
              verticalAlign: 'top',
            },
          }}
        >
          <Box component="tbody">
            {product.specifications.map((spec) => (
              <Box component="tr" key={spec.label}>
                <Box
                  component="th"
                  scope="row"
                  sx={{
                    width: { xs: '40%', md: '30%' },
                    color: '#111111',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    pe: 3,
                  }}
                >
                  {spec.label}
                </Box>
                <Box
                  component="td"
                  sx={{
                    color: '#555555',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                  }}
                >
                  {spec.value}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </FadeIn>
    </Box>
  );
}
