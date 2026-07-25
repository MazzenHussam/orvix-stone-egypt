import { contactAr } from '@/data/ar/contact';
import { contactEn } from '@/data/en/contact';
import type { ContactContent, LocaleCode } from '@/types/content';

/** Locale-aware contact content. Prefer `useLocale().contact` in UI. */
export const contactByLocale: Record<LocaleCode, ContactContent> = {
  en: contactEn,
  ar: contactAr,
};

/** Default English entry point (`src/data/contact.ts`). */
export const contact: ContactContent = contactEn;

export function getContactContent(locale: LocaleCode): ContactContent {
  return contactByLocale[locale];
}
