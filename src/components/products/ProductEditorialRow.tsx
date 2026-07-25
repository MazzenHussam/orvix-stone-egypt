import { Box, Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { productDetailsPath } from '@/routes/paths';
import type { Product, ProductsContent } from '@/types/content';
import { colors } from '@/theme/colors';

type ProductEditorialRowProps = {
  product: Product;
  content: ProductsContent;
  index: number;
};

export function ProductEditorialRow({ product, content, index }: ProductEditorialRowProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  const imageLeft = index % 2 === 0;
  const stoneLabel =
    product.stoneType === 'marble' ? content.filterMarbleLabel : content.filterGraniteLabel;

  const imageBlock = (
    <Box
      sx={{
        overflow: 'hidden',
        borderRadius: '4px',
        aspectRatio: '4 / 5',
        bgcolor: '#E9E6E2',
        '&:hover .safe-image-media': { transform: 'scale(1.02)' },
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
  );

  const textBlock = (
    <Stack spacing={2.5} sx={{ maxWidth: 460, py: { md: 2 } }}>
      <Typography
        sx={{
          color: colors.text.secondary,
          fontSize: '0.75rem',
          letterSpacing: isRtl ? '0.06em' : '0.14em',
          textTransform: isRtl ? 'none' : 'uppercase',
        }}
      >
        {content.stoneTypeLabel} — {stoneLabel}
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: displayFont,
          fontWeight: 400,
          fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
          lineHeight: 1.12,
          color: colors.text.primary,
        }}
      >
        {product.name}
      </Typography>
      <Typography
        sx={{
          color: colors.text.secondary,
          fontSize: { xs: '1rem', md: '1.0625rem' },
          lineHeight: 1.85,
        }}
      >
        {product.description}
      </Typography>
      <Box>
        <Typography
          sx={{
            color: colors.text.primary,
            fontSize: '0.8125rem',
            letterSpacing: isRtl ? '0.04em' : '0.1em',
            textTransform: isRtl ? 'none' : 'uppercase',
            mb: 1.25,
          }}
        >
          {content.applicationsLabel}
        </Typography>
        <Typography sx={{ color: colors.text.secondary, lineHeight: 1.8 }}>
          {product.applications.join(' · ')}
        </Typography>
      </Box>
      <Button
        component={RouterLink}
        to={productDetailsPath(product.slug)}
        variant="text"
        sx={{
          alignSelf: 'flex-start',
          px: 0,
          mt: 1,
          color: colors.text.primary,
          borderBottom: `1px solid ${colors.accent}`,
          borderRadius: 0,
          minWidth: 0,
          transition: 'opacity 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          '&:hover': { bgcolor: 'transparent', opacity: 0.7, transform: 'none' },
        }}
      >
        {content.viewDetailsLabel}
      </Button>
    </Stack>
  );

  return (
    <FadeIn>
      <Box
        component="article"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 3.5, sm: 4, lg: 8 },
          alignItems: 'center',
          mb: { xs: 8, sm: 10, lg: '120px' },
          '&:last-of-type': {
            mb: 0,
          },
        }}
      >
        <Box sx={{ order: { xs: 1, lg: imageLeft ? 1 : 2 } }}>{imageBlock}</Box>
        <Box sx={{ order: { xs: 2, lg: imageLeft ? 2 : 1 } }}>{textBlock}</Box>
      </Box>
    </FadeIn>
  );
}
