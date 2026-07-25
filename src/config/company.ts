/**
 * Single source of truth for ORVIX STONE EGYPT company details.
 * Update phone numbers, email, social URLs, and WhatsApp here —
 * UI copy (EN/AR labels) still lives under `src/data/`.
 */
export const company = {
  name: {
    en: 'ORVIX STONE EGYPT',
    ar: 'اورفيكس ستون إيجيبت',
  },
  legalName: {
    en: 'ORVIX STONE EGYPT',
    ar: 'اورفيكس ستون إيجيبت',
  },
  /** Temporary until a real mailbox is provisioned. */
  email: 'info@orvixstone.com',
  phones: ['+20 109 077 4499', '+20 109 947 7466'] as const,
  whatsapp: {
    /** Digits only for wa.me links */
    number: '201090774499',
    display: '+20 109 077 4499',
    baseUrl: 'https://wa.me/201090774499',
    defaultMessage: {
      en: 'Hello ORVIX STONE,\nI would like to request a quotation.',
      ar: 'مرحباً،\nأرغب في الحصول على عرض سعر.',
    },
  },
  location: {
    city: {
      en: 'Cairo',
      ar: 'القاهرة',
    },
    country: {
      en: 'Egypt',
      ar: 'مصر',
    },
    officeLabel: {
      en: 'Office Coming Soon',
      ar: 'المكتب قريباً',
    },
  },
  social: [
    {
      icon: 'facebook' as const,
      href: 'https://www.facebook.com/share/1EEEcA7si6/',
      label: { en: 'Facebook', ar: 'فيسبوك' },
    },
    {
      icon: 'instagram' as const,
      href: 'https://www.instagram.com/orvix_stone',
      label: { en: 'Instagram', ar: 'إنستغرام' },
    },
    {
      icon: 'tiktok' as const,
      href: 'https://www.tiktok.com/@orvixstone1',
      label: { en: 'TikTok', ar: 'تيك توك' },
    },
  ],
  seo: {
    /** Update to the live production domain before deploy. */
    siteUrl: 'https://orvixstone.com',
    defaultDescription: {
      en: 'ORVIX STONE EGYPT is a premium Egyptian natural stone supplier of marble and granite — export ready for local and international clients.',
      ar: 'اورفيكس ستون إيجيبت مورّد أحجار طبيعية مصرية فاخرة من الرخام والجرانيت — جاهز للتصدير وخدمة العملاء المحليين والدوليين.',
    },
    ogImage: '/images/logos/orvix-wordmark-dark.svg',
  },
  whatsappButton: {
    ariaLabel: {
      en: 'Talk to Our Team on WhatsApp',
      ar: 'تحدّث مع فريقنا عبر واتساب',
    },
  },
} as const;

export type CompanyConfig = typeof company;

/** Build a WhatsApp deep link with a prefilled locale message. */
export function getWhatsAppUrl(locale: 'en' | 'ar'): string {
  const text = company.whatsapp.defaultMessage[locale];
  return `${company.whatsapp.baseUrl}?text=${encodeURIComponent(text)}`;
}

/** Normalize a display phone into a tel: href. */
export function getTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function getMailtoHref(email: string = company.email): string {
  return `mailto:${email}`;
}
