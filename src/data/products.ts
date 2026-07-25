import { productsAr } from '@/data/ar/products';
import { productsEn } from '@/data/en/products';
import type { LocaleCode, Product, ProductsContent } from '@/types/content';

/** Locale-aware product catalog. Prefer `useLocale().products` in UI. */
export const productsByLocale: Record<LocaleCode, ProductsContent> = {
  en: productsEn,
  ar: productsAr,
};

/** Default English catalog entry point (`src/data/products.ts`). */
export const products: ProductsContent = productsEn;

export function getProductsContent(locale: LocaleCode): ProductsContent {
  return productsByLocale[locale];
}

export function getProductBySlug(locale: LocaleCode, slug: string): Product | undefined {
  return productsByLocale[locale].items.find((item) => item.slug === slug);
}
