import type { HomeContent } from '@/types/content';
import { routes } from '@/routes/paths';

export const homeEn: HomeContent = {
  comingSoonLabel: 'Page Coming Soon',
  hero: {
    titleLine1: 'Timeless Stone.',
    titleLine2: 'Global Craft.',
    primaryCta: {
      label: 'Explore Our Collection',
      path: routes.products,
    },
    secondaryCta: {
      label: 'Get Your Free Quote',
      path: routes.contactForm,
    },
  },
  aboutPreview: {
    eyebrow: 'About ORVIX',
    title: 'Premium Egyptian Natural Stone Supplier',
    description:
      'ORVIX STONE EGYPT supplies Egyptian marble and granite for architecture and interiors — with careful selection, finishing, and export-ready preparation for local and international clients.',
    cta: {
      label: 'Discover More',
      path: routes.about,
    },
  },
  capabilities: {
    title: 'What We Offer',
    items: [
      { id: 'custom-orders', label: 'Custom Orders' },
      { id: 'export-ready', label: 'Export Ready' },
      { id: 'factory-direct', label: 'Factory Direct Supply' },
      { id: 'marble-granite', label: 'Marble & Granite Solutions' },
      { id: 'bulk-orders', label: 'Bulk Orders' },
      { id: 'shipping', label: 'Worldwide Shipping Available' },
    ],
  },
  featuredProducts: {
    title: 'Signature Collection',
    items: [
      { id: 'gandola-granite', slug: 'gandola-granite', name: 'Gandola Granite', imageKey: 'gandola' },
      {
        id: 'bianco-halayb-granite',
        slug: 'bianco-halayb-granite',
        name: 'Bianco Halayb Granite',
        imageKey: 'biancoHalayb',
      },
      {
        id: 'red-aswan-granite',
        slug: 'red-aswan-granite',
        name: 'Red Aswan Granite',
        imageKey: 'redAswan',
      },
      {
        id: 'new-halayb-granite',
        slug: 'new-halayb-granite',
        name: 'New Halayb Granite',
        imageKey: 'newHalayb',
      },
      {
        id: 'rosa-el-nasr-granite',
        slug: 'rosa-el-nasr-granite',
        name: 'Rosa El Nasr Granite',
        imageKey: 'rosaElNasr',
      },
      {
        id: 'galala-light-marble',
        slug: 'galala-light-marble',
        name: 'Galala Light Marble',
        imageKey: 'galalaLight',
      },
      {
        id: 'rosa-katerina-granite',
        slug: 'rosa-katerina-granite',
        name: 'Rosa Katerina Granite',
        imageKey: 'rosaKaterina',
      },
    ],
  },
  applications: {
    title: 'Applications',
    items: [
      { id: 'villas', title: 'Luxury Villas', imageKey: 'villas' },
      { id: 'hotels', title: 'Hotels', imageKey: 'hotels' },
      { id: 'commercial', title: 'Commercial Buildings', imageKey: 'commercial' },
      { id: 'hospitality', title: 'Hospitality', imageKey: 'hospitality' },
      { id: 'mosques', title: 'Mosques', imageKey: 'mosques' },
      { id: 'landscape', title: 'Landscape', imageKey: 'landscape' },
    ],
  },
  solutions: {
    title: 'Project Solutions',
    items: [
      { id: 'residential', label: 'Residential Projects' },
      { id: 'commercial', label: 'Commercial Projects' },
      { id: 'hospitality', label: 'Hospitality Projects' },
    ],
  },
  whyChoose: {
    title: 'Why ORVIX',
    items: [
      {
        id: 'premium-quality',
        title: 'Premium Quality',
        description: 'Careful selection and finishing for consistent results.',
        icon: 'quality',
      },
      {
        id: 'egyptian-stone',
        title: 'Egyptian Natural Stone',
        description: 'Marble and granite sourced from Egypt.',
        icon: 'stone',
      },
      {
        id: 'export-ready',
        title: 'Export Ready',
        description: 'Ready to serve international clients.',
        icon: 'export',
      },
      {
        id: 'custom-orders',
        title: 'Custom Orders',
        description: 'Slabs, tiles, and cut-to-size prepared to project needs.',
        icon: 'finishing',
      },
    ],
  },
  galleryPreview: {
    title: 'Gallery',
    cta: {
      label: 'Explore Gallery',
      path: routes.gallery,
    },
    items: [
      { id: 'g1', title: 'Gandola Granite', imageKey: 'one' },
      { id: 'g2', title: 'Bianco Halayb Granite', imageKey: 'two' },
      { id: 'g3', title: 'Red Aswan Granite', imageKey: 'three' },
      { id: 'g4', title: 'Galala Light Marble', imageKey: 'four' },
      { id: 'g5', title: 'Rosa El Nasr Granite', imageKey: 'five' },
      { id: 'g6', title: 'Rosa Katerina Granite', imageKey: 'six' },
    ],
  },
  exportPreview: {
    title: 'Export Ready',
    cta: {
      label: 'Get Your Free Export Quote',
      path: routes.export,
    },
    steps: [
      { id: 'egypt', label: 'Egypt' },
      { id: 'factory', label: 'Factory' },
      { id: 'quality', label: 'Quality' },
      { id: 'shipping', label: 'Shipping' },
      { id: 'destination', label: 'Destination' },
    ],
  },
  luxuryCta: {
    title: "Let's Build Something Timeless",
    cta: {
      label: 'Talk to Our Team',
      path: routes.contactForm,
    },
  },
};
