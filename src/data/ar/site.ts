import { company } from '@/config/company';
import type { SiteContent } from '@/types/content';

export const siteAr: SiteContent = {
  name: company.name.ar,
  legalName: company.legalName.ar,
  tagline: 'مورّد أحجار طبيعية مصرية فاخرة',
  description: company.seo.defaultDescription.ar,
  contact: {
    email: company.email,
    phones: [...company.phones],
    city: company.location.city.ar,
    country: company.location.country.ar,
    officeLabel: company.location.officeLabel.ar,
  },
  social: company.social.map((item) => ({
    label: item.label.ar,
    href: item.href,
    icon: item.icon,
  })),
  copyright: `© {year} ${company.legalName.ar}. جميع الحقوق محفوظة.`,
  requestQuoteLabel: 'احصل على عرض سعر مجاني',
  imageComingSoonLabel: 'الصورة قريباً',
  languageSwitcherLabel: 'اللغة',
  footerNavigationTitle: 'روابط سريعة',
  footerProductsTitle: 'المنتجات',
  footerConnectTitle: 'تواصل',
  openMenuLabel: 'فتح القائمة',
  closeMenuLabel: 'إغلاق القائمة',
  languages: [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ],
};
