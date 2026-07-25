import { aboutAr } from '@/data/ar/about';
import { aboutEn } from '@/data/en/about';
import type { AboutContent, LocaleCode } from '@/types/content';

/** Locale-aware about content. Prefer `useLocale().about` in UI. */
export const aboutByLocale: Record<LocaleCode, AboutContent> = {
  en: aboutEn,
  ar: aboutAr,
};

/** Default English entry point (`src/data/about.ts`). */
export const about: AboutContent = aboutEn;

export function getAboutContent(locale: LocaleCode): AboutContent {
  return aboutByLocale[locale];
}
