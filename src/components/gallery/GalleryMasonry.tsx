import { Box } from '@mui/material';
import { SafeImage } from '@/components/common/SafeImage';
import { FadeIn } from '@/components/home/FadeIn';
import { images } from '@/config/images';
import type { GalleryItem } from '@/types/content';
import { colors } from '@/theme/colors';

type GalleryMasonryProps = {
  items: GalleryItem[];
  onOpen: (index: number) => void;
};

export function GalleryMasonry({ items, onOpen }: GalleryMasonryProps) {
  return (
    <Box
      component="ul"
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0,
        columns: { xs: 1, sm: 2, lg: 3 },
        columnGap: { xs: 1.5, md: 2 },
      }}
    >
      {items.map((item, index) => (
        <Box
          component="li"
          key={item.id}
          sx={{
            breakInside: 'avoid',
            mb: { xs: 1.5, md: 2 },
            display: 'block',
          }}
        >
          <FadeIn delay={Math.min(index * 0.03, 0.2)}>
            <Box
              component="button"
              type="button"
              onClick={() => onOpen(index)}
              aria-label={item.title}
              sx={{
                display: 'block',
                width: '100%',
                p: 0,
                m: 0,
                border: 0,
                cursor: 'pointer',
                bgcolor: colors.secondary,
                borderRadius: '4px',
                overflow: 'hidden',
                textAlign: 'inherit',
                aspectRatio: '4 / 5',
                '&:hover .safe-image-media': { transform: 'scale(1.02)' },
                '&:focus-visible': {
                  outline: `1px solid ${colors.accent}`,
                  outlineOffset: 2,
                },
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
        </Box>
      ))}
    </Box>
  );
}
