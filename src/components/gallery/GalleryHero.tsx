import { Box, Typography } from '@mui/material';
import { FadeIn } from '@/components/home/FadeIn';
import { useLocale } from '@/hooks/useLocale';
import type { GalleryContent } from '@/types/content';
import { typeScale } from '@/theme/ui';

type GalleryHeroProps = {
  content: GalleryContent;
};

export function GalleryHero({ content }: GalleryHeroProps) {
  const { isRtl } = useLocale();
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <FadeIn>
      <Box component="header" sx={{ mb: { xs: 5, md: 7 } }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: displayFont,
            fontWeight: 400,
            fontSize: typeScale.display,
            lineHeight: 1.1,
          }}
        >
          {content.pageTitle}
        </Typography>
      </Box>
    </FadeIn>
  );
}
