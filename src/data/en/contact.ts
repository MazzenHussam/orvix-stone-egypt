import type { ContactContent } from '@/types/content';

export const contactEn: ContactContent = {
  comingSoonLabel: 'Page Coming Soon',
  hero: {
    title: 'CONTACT ORVIX',
  },
  capabilities: {
    title: 'How We Can Help',
    items: [
      { id: 'custom-orders', label: 'Custom Orders' },
      { id: 'export-ready', label: 'Export Ready' },
      { id: 'bulk-orders', label: 'Bulk Orders' },
      { id: 'residential', label: 'Residential Projects' },
      { id: 'commercial', label: 'Commercial Projects' },
      { id: 'hospitality', label: 'Hospitality Projects' },
    ],
  },
  form: {
    title: 'Get Your Free Quote',
    name: {
      label: 'Name',
      placeholder: 'Your full name',
    },
    company: {
      label: 'Company',
      placeholder: 'Company or studio name',
    },
    country: {
      label: 'Country',
      placeholder: 'Country of delivery',
    },
    email: {
      label: 'Email',
      placeholder: 'name@company.com',
    },
    phone: {
      label: 'Phone',
      placeholder: '+20 000 000 0000',
    },
    message: {
      label: 'Message',
      placeholder: 'Tell us about your project',
    },
    projectType: {
      label: 'Project Type',
      placeholder: 'Select project type',
      options: [
        { id: 'residential', label: 'Residential' },
        { id: 'commercial', label: 'Commercial' },
        { id: 'hospitality', label: 'Hospitality' },
        { id: 'export', label: 'Export / Wholesale' },
        { id: 'other', label: 'Other' },
      ],
    },
    submitLabel: 'Get Your Free Quote',
    successMessage: 'Thank you. Your inquiry has been received.',
    errors: {
      required: 'This field is required',
      email: 'Enter a valid email address',
      phone: 'Enter a valid phone number',
    },
  },
  company: {
    title: 'Company Information',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    socialLabel: 'Social Media',
    addressLabel: 'Office',
  },
  map: {
    title: 'Location',
    heading: 'Office Location Coming Soon',
    description: 'This location will be updated once the showroom opens.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        id: 'response-time',
        question: 'How quickly will you respond?',
        answer:
          'We typically reply within one to two business days with initial guidance and next steps for your inquiry.',
      },
      {
        id: 'samples',
        question: 'Can I request material samples?',
        answer:
          'Yes. Sample availability depends on the selected stone and finish. Share your project details and we will advise options.',
      },
      {
        id: 'export-orders',
        question: 'Do you handle international export orders?',
        answer:
          'Yes. ORVIX is ready to serve international clients with export packaging, documentation, and coordinated logistics support.',
      },
      {
        id: 'project-specs',
        question: 'What project information should I include?',
        answer:
          'Include stone preferences, approximate quantities, finishes, destination country, and timeline so we can prepare an accurate response.',
      },
    ],
  },
  cta: {
    title: "Let's Build Something Timeless",
    buttonLabel: 'Talk to Our Team',
  },
};
