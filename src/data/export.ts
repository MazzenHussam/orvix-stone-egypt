import { exportAr } from '@/data/ar/export';
import { exportEn } from '@/data/en/export';
import type { ExportContent, LocaleCode } from '@/types/content';

/** Locale-aware export content. Prefer `useLocale().export` in UI. */
export const exportByLocale: Record<LocaleCode, ExportContent> = {
  en: exportEn,
  ar: exportAr,
};

/** Default English entry point (`src/data/export.ts`). */
export const exportContent: ExportContent = exportEn;

export function getExportContent(locale: LocaleCode): ExportContent {
  return exportByLocale[locale];
}
