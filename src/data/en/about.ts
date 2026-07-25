import type { AboutContent } from '@/types/content';
import { routes } from '@/routes/paths';

export const aboutEn: AboutContent = {
  comingSoonLabel: 'Page Coming Soon',
  hero: {
    label: 'ABOUT ORVIX STONE',
    titleLine1: "Crafting Egypt's Finest",
    titleLine2: 'Natural Stone',
    description:
      'Premium Egyptian marble and granite for architecture, commercial developments, and export-ready supply.',
  },
  story: {
    titleLine1: 'Crafted from Egypt.',
    titleLine2: 'Serving Local & International Markets.',
    description:
      'ORVIX STONE EGYPT is a premium Egyptian natural stone supplier. We focus on careful quarry sourcing, precise finishing, and export-ready preparation for architects, developers, and project teams.',
  },
  capabilities: {
    title: 'How We Work',
    items: [
      { id: 'factory-direct', label: 'Factory Direct Supply' },
      { id: 'custom-orders', label: 'Custom Orders' },
      { id: 'export-ready', label: 'Export Ready' },
      { id: 'marble-granite', label: 'Marble & Granite Solutions' },
      { id: 'bulk-orders', label: 'Bulk Orders' },
    ],
  },
  mission: {
    title: 'Mission',
    description:
      'To supply Egyptian marble and granite of enduring beauty and careful quality — connecting Egypt’s natural stone with projects that demand clarity, consistency, and craft.',
  },
  vision: {
    title: 'Vision',
    description:
      'To become a trusted international reference for premium Egyptian marble and granite — where craft, consistency, and quiet luxury define every order.',
  },
  values: {
    title: 'Core Values',
    items: [
      {
        id: 'craftsmanship',
        title: 'Premium Quality',
        description: 'Careful selection and finishing shaped by exact standards.',
        icon: 'craftsmanship',
      },
      {
        id: 'quality',
        title: 'Egyptian Natural Stone',
        description: 'Marble and granite sourced from Egypt’s quarries and factory partners.',
        icon: 'quality',
      },
      {
        id: 'integrity',
        title: 'Factory Sourcing',
        description: 'Direct coordination with production for transparent order handling.',
        icon: 'integrity',
      },
      {
        id: 'global',
        title: 'Export Ready',
        description: 'Ready to serve international clients with packaging and logistics support.',
        icon: 'global',
      },
    ],
  },
  journey: {
    title: 'Production Journey',
    steps: [
      { id: 'quarry', label: 'Quarry' },
      { id: 'cutting', label: 'Cutting' },
      { id: 'finishing', label: 'Finishing' },
      { id: 'inspection', label: 'Inspection' },
      { id: 'packaging', label: 'Packaging' },
      { id: 'export', label: 'Export' },
    ],
  },
  whyEgypt: {
    title: 'Why Egypt',
    description:
      'Egypt is known for natural stone of distinctive character — warm limestones, luminous marbles, and enduring granites valued in architecture and contemporary interiors.',
  },
  cta: {
    title: 'Begin Your Project',
    buttonLabel: 'Talk to Our Team',
    path: routes.contactForm,
  },
};
