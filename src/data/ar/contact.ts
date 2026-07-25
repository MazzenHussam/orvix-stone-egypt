import type { ContactContent } from '@/types/content';

export const contactAr: ContactContent = {
  comingSoonLabel: 'الصفحة قريباً',
  hero: {
    title: 'تواصل مع أورفيكس',
  },
  capabilities: {
    title: 'كيف يمكننا المساعدة',
    items: [
      { id: 'custom-orders', label: 'طلبات مخصصة' },
      { id: 'export-ready', label: 'جاهزون للتصدير' },
      { id: 'bulk-orders', label: 'طلبات بالجملة' },
      { id: 'residential', label: 'مشاريع سكنية' },
      { id: 'commercial', label: 'مشاريع تجارية' },
      { id: 'hospitality', label: 'مشاريع ضيافة' },
    ],
  },
  form: {
    title: 'احصل على عرض سعر مجاني',
    name: {
      label: 'الاسم',
      placeholder: 'الاسم الكامل',
    },
    company: {
      label: 'الشركة',
      placeholder: 'اسم الشركة أو المكتب',
    },
    country: {
      label: 'الدولة',
      placeholder: 'دولة التسليم',
    },
    email: {
      label: 'البريد الإلكتروني',
      placeholder: 'name@company.com',
    },
    phone: {
      label: 'الهاتف',
      placeholder: '+20 000 000 0000',
    },
    message: {
      label: 'الرسالة',
      placeholder: 'أخبرنا عن مشروعك',
    },
    projectType: {
      label: 'نوع المشروع',
      placeholder: 'اختر نوع المشروع',
      options: [
        { id: 'residential', label: 'سكني' },
        { id: 'commercial', label: 'تجاري' },
        { id: 'hospitality', label: 'ضيافة' },
        { id: 'export', label: 'تصدير / جملة' },
        { id: 'other', label: 'أخرى' },
      ],
    },
    submitLabel: 'احصل على عرض سعر مجاني',
    successMessage: 'شكراً لك. تم استلام استفسارك.',
    errors: {
      required: 'هذا الحقل مطلوب',
      email: 'أدخل بريداً إلكترونياً صالحاً',
      phone: 'أدخل رقم هاتف صالحاً',
    },
  },
  company: {
    title: 'معلومات الشركة',
    phoneLabel: 'الهاتف',
    whatsappLabel: 'واتساب',
    emailLabel: 'البريد الإلكتروني',
    socialLabel: 'وسائل التواصل',
    addressLabel: 'المكتب',
  },
  map: {
    title: 'الموقع',
    heading: 'موقع المكتب قريباً',
    description: 'سيتم تحديث هذا الموقع عند افتتاح المعرض.',
  },
  faq: {
    title: 'الأسئلة الشائعة',
    items: [
      {
        id: 'response-time',
        question: 'متى تتلقون الرد؟',
        answer:
          'نرد عادة خلال يوم إلى يومي عمل مع توجيه أولي والخطوات التالية لاستفسارك.',
      },
      {
        id: 'samples',
        question: 'هل يمكن طلب عينات من المواد؟',
        answer:
          'نعم. توفر العينات يعتمد على نوع الحجر والتشطيب. شارك تفاصيل مشروعك وسنقترح الخيارات المناسبة.',
      },
      {
        id: 'export-orders',
        question: 'هل تتعاملون مع طلبات التصدير الدولية؟',
        answer:
          'نعم. اورفيكس مستعدة لخدمة العملاء الدوليين مع تعبئة تصديرية ومستندات ودعم تنسيق لوجستي.',
      },
      {
        id: 'project-specs',
        question: 'ما المعلومات التي يجب تضمينها عن المشروع؟',
        answer:
          'يفضّل ذكر تفضيلات الحجر والكميات التقريبية والتشطيبات ودولة الوجهة والجدول الزمني لإعداد رد دقيق.',
      },
    ],
  },
  cta: {
    title: 'لنصنع شيئاً خالداً',
    buttonLabel: 'تحدّث مع فريقنا',
  },
};
