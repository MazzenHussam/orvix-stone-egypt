import { Box, Typography } from '@mui/material';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import type { Product, ProductImageKey, ProductsContent } from '@/types/content';

type ProductGalleryProps = {
  product: Product;
  content: ProductsContent;
};

export function ProductGallery({ product, content }: ProductGalleryProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  const gallery = images.productGalleries[product.imageKey as ProductImageKey] ?? [
    images.products[product.imageKey],
  ];

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
            mb: { xs: 4, md: 5 },
          }}
        >
          {content.galleryLabel}
        </Typography>
      </FadeIn>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {gallery.map((src, index) => {
          const shotLabel =
            content.galleryShotLabels[index] ?? `${content.galleryLabel} ${index + 1}`;
          const alt = `${product.name} — ${shotLabel}`;
          return (
            <FadeIn key={`${product.id}-gallery-${index}`} delay={Math.min(index * 0.06, 0.2)}>
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: '4px',
                  aspectRatio: '3 / 4',
                  bgcolor: '#E9E6E2',
                  '&:hover .safe-image-media': { transform: 'scale(1.02)' },
                }}
              >
                <SafeImage
                  src={src}
                  alt={alt}
                  fallbackLabel={product.name}
                  loading="lazy"
                  sx={{
                    transition: 'transform 320ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                />
              </Box>
            </FadeIn>
          );
        })}
      </Box>
    </Box>
  );
}
