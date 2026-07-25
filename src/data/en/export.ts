import type { ExportContent } from '@/types/content';
import { routes } from '@/routes/paths';

export const exportEn: ExportContent = {
  comingSoonLabel: 'Page Coming Soon',
  hero: {
    label: 'GLOBAL EXPORT',
    title: 'Premium Egyptian Marble & Granite — Ready for International Clients',
  },
  capabilities: {
    title: 'Export Capabilities',
    items: [
      { id: 'export-ready', label: 'Export Ready' },
      { id: 'shipping', label: 'Worldwide Shipping Available' },
      { id: 'factory-direct', label: 'Factory Direct Supply' },
      { id: 'bulk-orders', label: 'Bulk Orders' },
      { id: 'custom-orders', label: 'Custom Orders' },
    ],
  },
  process: {
    title: 'Export Process',
    steps: [
      {
        id: 'quarry',
        title: 'Quarry',
        description: 'Stone selected at source from Egypt’s finest quarries.',
        icon: 'quarry',
      },
      {
        id: 'selection',
        title: 'Selection',
        description: 'Careful grading for color, structure, and project fit.',
        icon: 'selection',
      },
      {
        id: 'cutting',
        title: 'Cutting',
        description: 'Precision cutting to architectural dimensions.',
        icon: 'cutting',
      },
      {
        id: 'finishing',
        title: 'Finishing',
        description: 'Polished, honed, and specialty surfaces executed with care.',
        icon: 'finishing',
      },
      {
        id: 'inspection',
        title: 'Inspection',
        description: 'Multi-stage quality control before goods leave the facility.',
        icon: 'inspection',
      },
      {
        id: 'packaging',
        title: 'Packaging',
        description: 'Export-grade crating designed for stone integrity in transit.',
        icon: 'packaging',
      },
      {
        id: 'shipping',
        title: 'Shipping',
        description: 'Coordinated freight through Egypt’s major export ports.',
        icon: 'shipping',
      },
      {
        id: 'destination',
        title: 'Destination',
        description: 'Ready to support delivery to project destinations.',
        icon: 'destination',
      },
    ],
  },
  why: {
    title: 'Why ORVIX',
    items: [
      {
        id: 'direct-quarry',
        title: 'Factory Sourcing',
        description: 'Coordinated sourcing from Egyptian quarry and factory partners.',
        icon: 'quarry',
      },
      {
        id: 'international-packaging',
        title: 'Export Ready',
        description: 'Protective packaging prepared for international shipping.',
        icon: 'packaging',
      },
      {
        id: 'quality-control',
        title: 'Premium Quality',
        description: 'Careful inspection standards on every order.',
        icon: 'quality',
      },
      {
        id: 'worldwide-logistics',
        title: 'Custom Orders',
        description: 'Logistics support tailored to destination and project needs.',
        icon: 'logistics',
      },
    ],
  },
  packaging: {
    title: 'Packaging',
    description:
      'Each shipment is carefully packed to protect edges, surfaces, and structural integrity — ensuring Egyptian stone arrives ready for installation.',
  },
  shipping: {
    title: 'Shipping',
    points: [
      {
        id: 'alexandria',
        title: 'Alexandria Port',
        description: 'Strategic Mediterranean access for European and global routes.',
      },
      {
        id: 'sokhna',
        title: 'Sokhna Port',
        description: 'Red Sea gateway supporting efficient eastbound logistics.',
      },
      {
        id: 'container',
        title: 'Container Shipping',
        description: 'Secure containerized transport for slabs, tiles, and cut pieces.',
      },
      {
        id: 'worldwide',
        title: 'International Clients',
        description: 'Ready to serve international clients with coordinated shipping support.',
      },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        id: 'lead-time',
        question: 'What is the typical export lead time?',
        answer:
          'Lead times vary by stone, finish, and quantity. Most export orders are coordinated with clear production and shipping milestones from confirmation to departure.',
      },
      {
        id: 'minimum-order',
        question: 'Is there a minimum order quantity?',
        answer:
          'Minimums depend on product form and destination. Our team advises the most efficient quantities for slabs, tiles, and cut-to-size projects.',
      },
      {
        id: 'packaging-standards',
        question: 'How is stone packaged for export?',
        answer:
          'We use reinforced export packaging with protective materials suited to each stone type, minimizing risk during ocean freight and handling.',
      },
      {
        id: 'ports',
        question: 'Which ports do you ship from?',
        answer:
          'Primary routes typically move through Alexandria and Sokhna, selected according to destination, schedule, and logistics efficiency.',
      },
      {
        id: 'documentation',
        question: 'Do you provide export documentation?',
        answer:
          'Yes. Commercial and shipping documentation is prepared to support smooth customs clearance and international delivery.',
      },
    ],
  },
  cta: {
    title: 'Get Your Free Export Quote',
    buttonLabel: 'Get Your Free Export Quote',
    path: routes.contactForm,
  },
};
