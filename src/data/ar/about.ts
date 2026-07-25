import type { AboutContent } from '@/types/content';
import { routes } from '@/routes/paths';

export const aboutAr: AboutContent = {
  comingSoonLabel: 'الصفحة قريباً',
  hero: {
    label: 'عن أورفيكس ستون',
    titleLine1: 'نصنع أرقى الأحجار',
    titleLine2: 'الطبيعية المصرية',
    description:
      'رخام وجرانيت مصري فاخر للعمارة والمشاريع التجارية والتوريد الجاهز للتصدير.',
  },
  story: {
    titleLine1: 'صُنع في مصر.',
    titleLine2: 'نخدم الأسواق المحلية والدولية.',
    description:
      'اورفيكس ستون إيجيبت مورّد أحجار طبيعية مصرية فاخرة. نركّز على التوريد من المحاجر والتشطيب الدقيق والتحضير الجاهز للتصدير للمعماريين والمطورين وفرق المشاريع.',
  },
  capabilities: {
    title: 'كيف نعمل',
    items: [
      { id: 'factory-direct', label: 'توريد مباشر من المصنع' },
      { id: 'custom-orders', label: 'طلبات مخصصة' },
      { id: 'export-ready', label: 'جاهزون للتصدير' },
      { id: 'marble-granite', label: 'حلول الرخام والجرانيت' },
      { id: 'bulk-orders', label: 'طلبات بالجملة' },
    ],
  },
  mission: {
    title: 'رسالتنا',
    description:
      'توريد الرخام والجرانيت المصري بجمال دائم وجودة دقيقة — لربط الحجر الطبيعي المصري بالمشاريع التي تتطلب الوضوح والاتساق والحرفية.',
  },
  vision: {
    title: 'رؤيتنا',
    description:
      'أن نصبح مرجعاً دولياً موثوقاً للرخام والجرانيت المصري الفاخر — حيث تحدد الحرفة والاتساق والفخامة الهادئة كل طلب.',
  },
  values: {
    title: 'قيمنا الأساسية',
    items: [
      {
        id: 'craftsmanship',
        title: 'جودة فاخرة',
        description: 'اختيار وتشطيب دقيقان وفق معايير واضحة.',
        icon: 'craftsmanship',
      },
      {
        id: 'quality',
        title: 'أحجار طبيعية مصرية',
        description: 'رخام وجرانيت من محاجر مصر وشركاء التصنيع.',
        icon: 'quality',
      },
      {
        id: 'integrity',
        title: 'توريد من المصنع',
        description: 'تنسيق مباشر مع الإنتاج لإدارة الطلبات بشفافية.',
        icon: 'integrity',
      },
      {
        id: 'global',
        title: 'جاهزون للتصدير',
        description: 'مستعدون لخدمة العملاء الدوليين مع دعم التعبئة والخدمات اللوجستية.',
        icon: 'global',
      },
    ],
  },
  journey: {
    title: 'رحلة الإنتاج',
    steps: [
      { id: 'quarry', label: 'المحجر' },
      { id: 'cutting', label: 'القطع' },
      { id: 'finishing', label: 'التشطيب' },
      { id: 'inspection', label: 'الفحص' },
      { id: 'packaging', label: 'التعبئة' },
      { id: 'export', label: 'التصدير' },
    ],
  },
  whyEgypt: {
    title: 'لماذا مصر',
    description:
      'تشتهر مصر بأحجار طبيعية ذات طابع مميز — أحجار جيرية دافئة ورخام مضيء وجرانيت متين يُقدَّر في العمارة والديكورات المعاصرة.',
  },
  cta: {
    title: 'ابدأ مشروعك',
    buttonLabel: 'تحدّث مع فريقنا',
    path: routes.contactForm,
  },
};
