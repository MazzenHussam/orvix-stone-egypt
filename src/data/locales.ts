import { aboutAr } from '@/data/ar/about';
import { contactAr } from '@/data/ar/contact';
import { exportAr } from '@/data/ar/export';
import { footerNavigationAr, mainNavigationAr } from '@/data/ar/navigation';
import { galleryAr } from '@/data/ar/gallery';
import { homeAr } from '@/data/ar/home';
import { productsAr } from '@/data/ar/products';
import { siteAr } from '@/data/ar/site';
import { aboutEn } from '@/data/en/about';
import { contactEn } from '@/data/en/contact';
import { exportEn } from '@/data/en/export';
import { footerNavigationEn, mainNavigationEn } from '@/data/en/navigation';
import { galleryEn } from '@/data/en/gallery';
import { homeEn } from '@/data/en/home';
import { productsEn } from '@/data/en/products';
import { siteEn } from '@/data/en/site';
import type { LocaleBundle, LocaleCode } from '@/types/content';

export const locales: Record<LocaleCode, LocaleBundle> = {
  en: {
    site: siteEn,
    mainNavigation: mainNavigationEn,
    footerNavigation: footerNavigationEn,
    home: homeEn,
    products: productsEn,
    gallery: galleryEn,
    about: aboutEn,
    export: exportEn,
    contact: contactEn,
  },
  ar: {
    site: siteAr,
    mainNavigation: mainNavigationAr,
    footerNavigation: footerNavigationAr,
    home: homeAr,
    products: productsAr,
    gallery: galleryAr,
    about: aboutAr,
    export: exportAr,
    contact: contactAr,
  },
};

export const defaultLocale: LocaleCode = 'en';
