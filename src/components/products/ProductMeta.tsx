import { Box, Stack, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { useLocale } from '@/hooks/useLocale';
import type { Product, ProductsContent } from '@/types/content';

type ProductMetaProps = {
  product: Product;
  content: ProductsContent;
};

function MetaList({
  title,
  items,
  displayFont,
}: {
  title: string;
  items: string[];
  displayFont: string;
}) {
  return (
    <Box>
      <Typography
        component="h2"
        sx={{
          fontFamily: displayFont,
          fontWeight: 400,
          fontSize: { xs: '1.75rem', md: '2.25rem' },
          color: '#111111',
          mb: 3,
        }}
      >
        {title}
      </Typography>
      <Stack component="ul" spacing={1.5} sx={{ m: 0, p: 0, listStyle: 'none' }}>
        {items.map((item) => (
          <Typography
            component="li"
            key={item}
            sx={{
              color: '#555555',
              fontSize: '1rem',
              lineHeight: 1.7,
              borderBottom: '1px solid #E2DED8',
              pb: 1.25,
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

export function ProductMeta({ product, content }: ProductMetaProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
        gap: { xs: 6, md: 8 },
        mb: { xs: 8, md: 12 },
      }}
    >
      <FadeIn>
        <MetaList
          title={content.applicationsLabel}
          items={product.applications}
          displayFont={displayFont}
        />
      </FadeIn>
      <FadeIn delay={0.06}>
        <MetaList
          title={content.finishesLabel}
          items={product.finishes}
          displayFont={displayFont}
        />
      </FadeIn>
      <FadeIn delay={0.12}>
        <MetaList title={content.formsLabel} items={product.forms} displayFont={displayFont} />
      </FadeIn>
    </Box>
  );
}
