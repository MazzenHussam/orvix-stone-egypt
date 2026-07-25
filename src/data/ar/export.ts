import type { ExportContent } from '@/types/content';
import { routes } from '@/routes/paths';

export const exportAr: ExportContent = {
  comingSoonLabel: 'الصفحة قريباً',
  hero: {
    label: 'تصدير عالمي',
    title: 'رخام وجرانيت مصري فاخر — جاهزون لخدمة العملاء الدوليين',
  },
  capabilities: {
    title: 'قدرات التصدير',
    items: [
      { id: 'export-ready', label: 'جاهزون للتصدير' },
      { id: 'shipping', label: 'شحن دولي متاح' },
      { id: 'factory-direct', label: 'توريد مباشر من المصنع' },
      { id: 'bulk-orders', label: 'طلبات بالجملة' },
      { id: 'custom-orders', label: 'طلبات مخصصة' },
    ],
  },
  process: {
    title: 'عملية التصدير',
    steps: [
      {
        id: 'quarry',
        title: 'المحجر',
        description: 'اختيار الحجر من أرقى المحاجر المصرية من المصدر.',
        icon: 'quarry',
      },
      {
        id: 'selection',
        title: 'الفرز',
        description: 'فرز دقيق حسب اللون والبنية وملاءمة المشروع.',
        icon: 'selection',
      },
      {
        id: 'cutting',
        title: 'القطع',
        description: 'قطع دقيق وفق الأبعاد المعمارية المطلوبة.',
        icon: 'cutting',
      },
      {
        id: 'finishing',
        title: 'التشطيب',
        description: 'أسطح مصقولة ومطفأة وتشطيبات خاصة بعناية فائقة.',
        icon: 'finishing',
      },
      {
        id: 'inspection',
        title: 'الفحص',
        description: 'رقابة جودة متعددة المراحل قبل مغادرة المصنع.',
        icon: 'inspection',
      },
      {
        id: 'packaging',
        title: 'التعبئة',
        description: 'تغليف تصديري يحافظ على سلامة الحجر أثناء النقل.',
        icon: 'packaging',
      },
      {
        id: 'shipping',
        title: 'الشحن',
        description: 'تنسيق شحن عبر أهم موانئ التصدير المصرية.',
        icon: 'shipping',
      },
      {
        id: 'destination',
        title: 'الوجهة',
        description: 'جاهزون لدعم التسليم إلى وجهات المشاريع.',
        icon: 'destination',
      },
    ],
  },
  why: {
    title: 'لماذا أورفيكس',
    items: [
      {
        id: 'direct-quarry',
        title: 'توريد من المصنع',
        description: 'تنسيق توريد مع شركاء المحاجر والمصانع في مصر.',
        icon: 'quarry',
      },
      {
        id: 'international-packaging',
        title: 'جاهزون للتصدير',
        description: 'تغليف وقائي مُعدّ للشحن الدولي.',
        icon: 'packaging',
      },
      {
        id: 'quality-control',
        title: 'جودة فاخرة',
        description: 'معايير فحص دقيقة في كل طلب.',
        icon: 'quality',
      },
      {
        id: 'worldwide-logistics',
        title: 'طلبات مخصصة',
        description: 'دعم لوجستي وفق الوجهة واحتياجات المشروع.',
        icon: 'logistics',
      },
    ],
  },
  packaging: {
    title: 'التعبئة',
    description:
      'تُعبأ كل شحنة بعناية لحماية الحواف والأسطح والسلامة الإنشائية — ليصل الحجر المصري جاهزاً للتركيب.',
  },
  shipping: {
    title: 'الشحن',
    points: [
      {
        id: 'alexandria',
        title: 'ميناء الإسكندرية',
        description: 'منفذ متوسطي استراتيجي للطرق الأوروبية والعالمية.',
      },
      {
        id: 'sokhna',
        title: 'ميناء السخنة',
        description: 'بوابة البحر الأحمر لدعم الخدمات اللوجستية شرقاً.',
      },
      {
        id: 'container',
        title: 'الشحن بالحاويات',
        description: 'نقل آمن بالحاويات للألواح والبلاط والقطع.',
      },
      {
        id: 'worldwide',
        title: 'عملاء دوليون',
        description: 'مستعدون لخدمة العملاء الدوليين مع دعم تنسيق الشحن.',
      },
    ],
  },
  faq: {
    title: 'الأسئلة الشائعة',
    items: [
      {
        id: 'lead-time',
        question: 'ما مدة التصدير المعتادة؟',
        answer:
          'تختلف المدة حسب نوع الحجر والتشطيب والكمية. تُنسَّق معظم طلبات التصدير وفق مراحل إنتاج وشحن واضحة من التأكيد حتى المغادرة.',
      },
      {
        id: 'minimum-order',
        question: 'هل هناك حد أدنى للكمية؟',
        answer:
          'يعتمد الحد الأدنى على شكل المنتج والوجهة. يقدّم فريقنا أفضل الكميات كفاءة للألواح والبلاط والقص حسب الطلب.',
      },
      {
        id: 'packaging-standards',
        question: 'كيف يُغلَّف الحجر للتصدير؟',
        answer:
          'نستخدم تغليفاً تصديرياً مقوّى بمواد حماية مناسبة لكل نوع حجر، لتقليل المخاطر أثناء الشحن والمناولة.',
      },
      {
        id: 'ports',
        question: 'من أي موانئ يتم الشحن؟',
        answer:
          'تمر الطرق الأساسية عادة عبر الإسكندرية والسخنة، وفق الوجهة والجدول وكفاءة النقل.',
      },
      {
        id: 'documentation',
        question: 'هل توفرون مستندات التصدير؟',
        answer:
          'نعم. تُعد المستندات التجارية والشحن لدعم التخليص الجمركي والتسليم الدولي بسلاسة.',
      },
    ],
  },
  cta: {
    title: 'احصل على عرض تصدير مجاني',
    buttonLabel: 'احصل على عرض تصدير مجاني',
    path: routes.contactForm,
  },
};
