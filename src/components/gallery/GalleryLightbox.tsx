import { useCallback, useEffect, useRef, type TouchEvent } from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SafeImage } from '@/components/common/SafeImage';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';
import type { GalleryContent, GalleryItem } from '@/types/content';
import { colors } from '@/theme/colors';

type GalleryLightboxProps = {
  open: boolean;
  items: GalleryItem[];
  index: number;
  content: GalleryContent;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function GalleryLightbox({
  open,
  items,
  index,
  content,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const { isRtl } = useLocale();
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const total = items.length;
  const current = items[index];

  const goPrev = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index - 1 + total) % total);
  }, [index, onIndexChange, total]);

  const goNext = useCallback(() => {
    if (total === 0) return;
    onIndexChange((index + 1) % total);
  }, [index, onIndexChange, total]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (isRtl) goNext();
        else goPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (isRtl) goPrev();
        else goNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose, goPrev, goNext, isRtl]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (event: TouchEvent) => {
    if (touchStartX.current == null) return;
    const x = event.touches[0]?.clientX ?? touchStartX.current;
    touchDeltaX.current = x - touchStartX.current;
  };

  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) {
      if (isRtl) goNext();
      else goPrev();
    } else if (isRtl) goPrev();
    else goNext();
  };

  if (!current) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-label={current.title}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.92)',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 12, md: 20 },
            insetInlineEnd: { xs: 12, md: 20 },
            zIndex: 2,
          }}
        >
          <IconButton
            aria-label={content.closeLabel}
            onClick={onClose}
            sx={{ color: colors.text.inverse }}
          >
            <X size={22} strokeWidth={1.25} />
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 1, md: 8 },
            py: { xs: 8, md: 6 },
            position: 'relative',
          }}
        >
          <IconButton
            aria-label={content.previousLabel}
            onClick={isRtl ? goNext : goPrev}
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              position: 'absolute',
              insetInlineStart: 24,
              color: colors.text.inverse,
            }}
          >
            <Box sx={{ display: 'inline-flex', transform: isRtl ? 'scaleX(-1)' : 'none' }}>
              <ChevronLeft size={28} strokeWidth={1.25} />
            </Box>
          </IconButton>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                maxWidth: 'min(1100px, 92vw)',
                maxHeight: '78vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SafeImage
                src={images.gallery[current.imageKey] ?? ''}
                alt={current.title}
                fallbackLabel={current.title}
                loading="eager"
                sx={{
                  width: '100%',
                  maxWidth: 'min(1100px, 92vw)',
                  maxHeight: '78vh',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  userSelect: 'none',
                  WebkitUserDrag: 'none',
                  minHeight: 240,
                  bgcolor: 'rgba(237,234,228,0.2)',
                }}
              />
            </motion.div>
          </AnimatePresence>

          <IconButton
            aria-label={content.nextLabel}
            onClick={isRtl ? goPrev : goNext}
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              position: 'absolute',
              insetInlineEnd: 24,
              color: colors.text.inverse,
            }}
          >
            <Box sx={{ display: 'inline-flex', transform: isRtl ? 'scaleX(-1)' : 'none' }}>
              <ChevronRight size={28} strokeWidth={1.25} />
            </Box>
          </IconButton>
        </Box>

        <Box
          sx={{
            pb: { xs: 3, md: 4 },
            px: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: colors.text.inverse,
              fontFamily: isRtl
                ? '"IBM Plex Sans Arabic", sans-serif'
                : '"Cormorant Garamond", Georgia, serif',
              fontSize: { xs: '1.15rem', md: '1.35rem' },
              mb: 0.5,
            }}
          >
            {current.title}
          </Typography>
          <Typography sx={{ color: 'rgba(247,245,242,0.55)', fontSize: '0.8125rem' }}>
            {index + 1} / {total}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
