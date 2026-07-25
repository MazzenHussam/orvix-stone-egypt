import { galleryAr } from '@/data/ar/gallery';
import { galleryEn } from '@/data/en/gallery';
import type { GalleryContent, LocaleCode } from '@/types/content';

/** Locale-aware gallery content. Prefer `useLocale().gallery` in UI. */
export const galleryByLocale: Record<LocaleCode, GalleryContent> = {
  en: galleryEn,
  ar: galleryAr,
};

/** Default English entry point (`src/data/gallery.ts`). */
export const gallery: GalleryContent = galleryEn;

export function getGalleryContent(locale: LocaleCode): GalleryContent {
  return galleryByLocale[locale];
}
