import type { HomeContent } from '@/types/content';
import { routes } from '@/routes/paths';

export const homeAr: HomeContent = {
  comingSoonLabel: 'الصفحة قريباً',
  hero: {
    titleLine1: 'حجر خالد.',
    titleLine2: 'حرفة عالمية.',
    primaryCta: {
      label: 'استكشف مجموعتنا',
      path: routes.products,
    },
    secondaryCta: {
      label: 'احصل على عرض سعر مجاني',
      path: routes.contactForm,
    },
  },
  aboutPreview: {
    eyebrow: 'عن أورفيكس',
    title: 'مورّد أحجار طبيعية مصرية فاخرة',
    description:
      'اورفيكس ستون إيجيبت تورّد الرخام والجرانيت المصري للعمارة والديكور — مع اختيار دقيق وتشطيب وتحضير جاهز للتصدير للأسواق المحلية والدولية.',
    cta: {
      label: 'اكتشف المزيد',
      path: routes.about,
    },
  },
  capabilities: {
    title: 'ما نقدمه',
    items: [
      { id: 'custom-orders', label: 'طلبات مخصصة' },
      { id: 'export-ready', label: 'جاهزون للتصدير' },
      { id: 'factory-direct', label: 'توريد مباشر من المصنع' },
      { id: 'marble-granite', label: 'حلول الرخام والجرانيت' },
      { id: 'bulk-orders', label: 'طلبات بالجملة' },
      { id: 'shipping', label: 'شحن دولي متاح' },
    ],
  },
  featuredProducts: {
    title: 'المجموعة المميزة',
    items: [
      {
        id: 'gandola-granite',
        slug: 'gandola-granite',
        name: 'جرانيت جندولا',
        imageKey: 'gandola',
      },
      {
        id: 'bianco-halayb-granite',
        slug: 'bianco-halayb-granite',
        name: 'جرانيت بيانكو حلايب',
        imageKey: 'biancoHalayb',
      },
      {
        id: 'red-aswan-granite',
        slug: 'red-aswan-granite',
        name: 'جرانيت أسوان الأحمر',
        imageKey: 'redAswan',
      },
      {
        id: 'new-halayb-granite',
        slug: 'new-halayb-granite',
        name: 'جرانيت حلايب الجديد',
        imageKey: 'newHalayb',
      },
      {
        id: 'rosa-el-nasr-granite',
        slug: 'rosa-el-nasr-granite',
        name: 'جرانيت روزا النصر',
        imageKey: 'rosaElNasr',
      },
      {
        id: 'galala-light-marble',
        slug: 'galala-light-marble',
        name: 'رخام جلالة لايت',
        imageKey: 'galalaLight',
      },
      {
        id: 'rosa-katerina-granite',
        slug: 'rosa-katerina-granite',
        name: 'جرانيت روزا كاترينا',
        imageKey: 'rosaKaterina',
      },
    ],
  },
  applications: {
    title: 'التطبيقات',
    items: [
      { id: 'villas', title: 'فلل فاخرة', imageKey: 'villas' },
      { id: 'hotels', title: 'فنادق', imageKey: 'hotels' },
      { id: 'commercial', title: 'مبانٍ تجارية', imageKey: 'commercial' },
      { id: 'hospitality', title: 'ضيافة', imageKey: 'hospitality' },
      { id: 'mosques', title: 'مساجد', imageKey: 'mosques' },
      { id: 'landscape', title: 'تنسيق حدائق', imageKey: 'landscape' },
    ],
  },
  solutions: {
    title: 'حلول المشاريع',
    items: [
      { id: 'residential', label: 'مشاريع سكنية' },
      { id: 'commercial', label: 'مشاريع تجارية' },
      { id: 'hospitality', label: 'مشاريع ضيافة' },
    ],
  },
  whyChoose: {
    title: 'لماذا أورفيكس',
    items: [
      {
        id: 'premium-quality',
        title: 'جودة فاخرة',
        description: 'اختيار وتشطيب دقيقان لنتائج متسقة.',
        icon: 'quality',
      },
      {
        id: 'egyptian-stone',
        title: 'أحجار طبيعية مصرية',
        description: 'رخام وجرانيت من مصادر مصرية.',
        icon: 'stone',
      },
      {
        id: 'export-ready',
        title: 'جاهزون للتصدير',
        description: 'مستعدون لخدمة العملاء الدوليين.',
        icon: 'export',
      },
      {
        id: 'custom-orders',
        title: 'طلبات مخصصة',
        description: 'ألواح وبلاط وقص حسب الطلب وفق احتياجات المشروع.',
        icon: 'finishing',
      },
    ],
  },
  galleryPreview: {
    title: 'المعرض',
    cta: {
      label: 'استكشف المعرض',
      path: routes.gallery,
    },
    items: [
      { id: 'g1', title: 'جرانيت جندولا', imageKey: 'one' },
      { id: 'g2', title: 'جرانيت بيانكو حلايب', imageKey: 'two' },
      { id: 'g3', title: 'جرانيت أسوان الأحمر', imageKey: 'three' },
      { id: 'g4', title: 'رخام جلالة لايت', imageKey: 'four' },
      { id: 'g5', title: 'جرانيت روزا النصر', imageKey: 'five' },
      { id: 'g6', title: 'جرانيت روزا كاترينا', imageKey: 'six' },
    ],
  },
  exportPreview: {
    title: 'جاهزون للتصدير',
    cta: {
      label: 'احصل على عرض تصدير مجاني',
      path: routes.export,
    },
    steps: [
      { id: 'egypt', label: 'مصر' },
      { id: 'factory', label: 'المصنع' },
      { id: 'quality', label: 'الجودة' },
      { id: 'shipping', label: 'الشحن' },
      { id: 'destination', label: 'الوجهة' },
    ],
  },
  luxuryCta: {
    title: 'لنصنع معاً شيئاً خالداً',
    cta: {
      label: 'تحدّث مع فريقنا',
      path: routes.contactForm,
    },
  },
};
