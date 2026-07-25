import { useMemo, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { CapabilityStrip } from '@/components/common/CapabilityStrip';
import { EmptyState } from '@/components/common/EmptyState';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { ProductEditorialList } from '@/components/products/ProductEditorialList';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductsHero } from '@/components/products/ProductsHero';
import { useLocale } from '@/hooks/useLocale';
import type { ProductFilterValue } from '@/types/content';

export function ProductsPage() {
  const { products } = useLocale();
  const [filter, setFilter] = useState<ProductFilterValue>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return products.items;
    return products.items.filter((item) => item.stoneType === filter);
  }, [filter, products.items]);

  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: '#FFFFFF',
          pt: { xs: 12, sm: 14, md: 16, lg: 18 },
          pb: { xs: 5, sm: 6, md: 7, lg: 8 },
        }}
      >
        <Container>
          <ProductsHero content={products} />
        </Container>
      </Box>

      <CapabilityStrip
        section={products.capabilities}
        tone="warm"
        id="products-capabilities"
      />

      <Box
        component="section"
        sx={{
          bgcolor: '#FFFFFF',
          pt: { xs: 6, md: 8 },
          pb: { xs: 10, md: 16 },
        }}
      >
        <Container>
          <FadeIn delay={0.05}>
            <Stack sx={{ mb: { xs: 8, md: 12 } }}>
              <ProductFilters content={products} value={filter} onChange={setFilter} />
            </Stack>
          </FadeIn>
          {filtered.length === 0 ? (
            <EmptyState
              title={products.emptyFilterTitle}
              description={products.emptyFilterDescription}
            />
          ) : (
            <ProductEditorialList products={filtered} content={products} />
          )}
        </Container>
      </Box>
    </>
  );
}

export default ProductsPage;
