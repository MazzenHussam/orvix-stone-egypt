import { company } from '@/config/company';
import type { SiteContent } from '@/types/content';

export const siteEn: SiteContent = {
  name: company.name.en,
  legalName: company.legalName.en,
  tagline: 'Premium Egyptian natural stone supplier',
  description: company.seo.defaultDescription.en,
  contact: {
    email: company.email,
    phones: [...company.phones],
    city: company.location.city.en,
    country: company.location.country.en,
    officeLabel: company.location.officeLabel.en,
  },
  social: company.social.map((item) => ({
    label: item.label.en,
    href: item.href,
    icon: item.icon,
  })),
  copyright: `© {year} ${company.legalName.en}. All rights reserved.`,
  requestQuoteLabel: 'Get Your Free Quote',
  imageComingSoonLabel: 'Image Coming Soon',
  languageSwitcherLabel: 'Language',
  footerNavigationTitle: 'Quick Links',
  footerProductsTitle: 'Products',
  footerConnectTitle: 'Connect',
  openMenuLabel: 'Open menu',
  closeMenuLabel: 'Close menu',
  languages: [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ],
};
