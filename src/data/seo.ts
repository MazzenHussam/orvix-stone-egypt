import type { LocaleCode } from '@/types/content';

export type PageSeo = {
  title: string;
  description: string;
};

export type SeoContent = {
  pages: Record<string, PageSeo>;
};

export const seoEn: SeoContent = {
  pages: {
    '/': {
      title: 'Premium Egyptian Natural Stone Supplier',
      description:
        'ORVIX STONE EGYPT supplies premium Egyptian marble and granite — export ready for local and international clients.',
    },
    '/about': {
      title: 'About',
      description:
        'ORVIX STONE EGYPT — premium Egyptian natural stone, factory sourcing, custom orders, and export-ready supply.',
    },
    '/products': {
      title: 'Products — ORVIX Granite & Marble',
      description:
        'Official ORVIX catalog: Gandola, Bianco Halayb, Red Aswan, New Halayb, Rosa El Nasr, Galala Light, and Rosa Katerina.',
    },
    '/gallery': {
      title: 'Gallery',
      description:
        'Explore ORVIX STONE EGYPT marble, granite, factory, and quarry photography.',
    },
    '/export': {
      title: 'Export',
      description:
        'Export-ready Egyptian marble and granite with packaging, quality control, and logistics support for international clients.',
    },
    '/contact': {
      title: 'Contact',
      description:
        'Get your free quote from ORVIX STONE EGYPT by phone, WhatsApp, or inquiry form.',
    },
  },
};

export const seoAr: SeoContent = {
  pages: {
    '/': {
      title: 'مورّد أحجار طبيعية مصرية فاخرة',
      description:
        'اورفيكس ستون إيجيبت مورّد رخام وجرانيت مصري فاخر — جاهز للتصدير وخدمة العملاء المحليين والدوليين.',
    },
    '/about': {
      title: 'من نحن',
      description:
        'اورفيكس ستون إيجيبت — أحجار طبيعية مصرية فاخرة، توريد من المصنع، طلبات مخصصة، وتوريد جاهز للتصدير.',
    },
    '/products': {
      title: 'المنتجات — جرانيت ورخام اورفيكس',
      description:
        'كتالوج اورفيكس الرسمي: جندولا، بيانكو حلايب، أسوان الأحمر، حلايب الجديد، روزا النصر، جلالة لايت، وروزا كاترينا.',
    },
    '/gallery': {
      title: 'المعرض',
      description:
        'استكشف صور الرخام والجرانيت والمصنع والمحاجر لدى اورفيكس ستون إيجيبت.',
    },
    '/export': {
      title: 'التصدير',
      description:
        'رخام وجرانيت مصري جاهز للتصدير مع التعبئة ومراقبة الجودة ودعم لوجستي للعملاء الدوليين.',
    },
    '/contact': {
      title: 'تواصل',
      description:
        'احصل على عرض سعر مجاني من اورفيكس ستون إيجيبت عبر الهاتف أو واتساب أو نموذج الاستفسار.',
    },
  },
};

export const seoByLocale: Record<LocaleCode, SeoContent> = {
  en: seoEn,
  ar: seoAr,
};
