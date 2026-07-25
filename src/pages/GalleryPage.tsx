import { useMemo, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { EmptyState } from '@/components/common/EmptyState';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { GalleryFilters } from '@/components/gallery/GalleryFilters';
import { GalleryHero } from '@/components/gallery/GalleryHero';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';
import { GalleryMasonry } from '@/components/gallery/GalleryMasonry';
import { useLocale } from '@/hooks/useLocale';
import type { GalleryFilterValue } from '@/types/content';
import { colors } from '@/theme/colors';

export function GalleryPage() {
  const { gallery } = useLocale();
  const [filter, setFilter] = useState<GalleryFilterValue>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    if (filter === 'all') return gallery.items;
    return gallery.items.filter((item) => item.category === filter);
  }, [filter, gallery.items]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Box
      component="section"
      sx={{
        bgcolor: colors.background,
        pt: { xs: 12, sm: 14, md: 16, lg: 18 },
        pb: { xs: 8, sm: 10, md: 12, lg: 16 },
      }}
    >
      <Container>
        <GalleryHero content={gallery} />
        <FadeIn delay={0.05}>
          <Stack sx={{ mb: { xs: 5, md: 6 } }}>
            <GalleryFilters content={gallery} value={filter} onChange={setFilter} />
          </Stack>
        </FadeIn>
        {filtered.length === 0 ? (
          <EmptyState
            title={gallery.emptyFilterTitle}
            description={gallery.emptyFilterDescription}
          />
        ) : (
          <GalleryMasonry items={filtered} onOpen={openLightbox} />
        )}
      </Container>

      <GalleryLightbox
        open={lightboxOpen}
        items={filtered}
        index={activeIndex}
        content={gallery}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActiveIndex}
      />
    </Box>
  );
}

export default GalleryPage;
