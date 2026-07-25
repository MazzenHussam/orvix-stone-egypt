import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SafeImage } from '@/components/common/SafeImage';
import { Container } from '@/components/layout/Container';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { FadeIn } from './FadeIn';

export function GalleryPreviewSection() {
  const { home, isRtl } = useLocale();
  const { galleryPreview } = home;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="gallery-preview-title"
      sx={{
        py: { xs: 8, sm: 10, md: 16, lg: 18 },
        bgcolor: colors.white,
      }}
    >
      <Container>
        <FadeIn>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { sm: 'flex-end' },
              gap: { xs: 2.5, sm: 3 },
              mb: { xs: 4, sm: 5, md: 6, lg: 8 },
            }}
          >
            <Typography
              id="gallery-preview-title"
              component="h2"
              sx={{
                fontFamily: displayFont,
                fontWeight: 400,
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem', lg: '3.5rem' },
                lineHeight: 1.15,
                minWidth: 0,
              }}
            >
              {galleryPreview.title}
            </Typography>
            <Button
              component={RouterLink}
              to={galleryPreview.cta.path}
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                borderRadius: '4px',
                alignSelf: { xs: 'flex-start', sm: 'auto' },
                transition:
                  'background-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                '&:hover': {
                  bgcolor: colors.secondary,
                  borderColor: colors.primary,
                  transform: 'scale(1.02)',
                },
              }}
            >
              {galleryPreview.cta.label}
            </Button>
          </Box>
        </FadeIn>

        <Box
          sx={{
            columns: { xs: 1, sm: 2, lg: 3 },
            columnGap: { xs: 1.5, md: 2 },
          }}
        >
          {galleryPreview.items.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={Math.min(index * 0.04, 0.2)}
              sx={{
                breakInside: 'avoid',
                mb: { xs: 1.5, md: 2 },
                display: 'block',
              }}
            >
              <Box
                component="figure"
                sx={{
                  m: 0,
                  overflow: 'hidden',
                  borderRadius: '4px',
                  bgcolor: colors.secondary,
                  aspectRatio: '4 / 5',
                  '&:hover .safe-image-media': { transform: 'scale(1.02)' },
                }}
              >
                <SafeImage
                  src={images.gallery[item.imageKey] ?? ''}
                  alt={item.title}
                  fallbackLabel={item.title}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    transition: 'transform 320ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                  }}
                />
              </Box>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default GalleryPreviewSection;
