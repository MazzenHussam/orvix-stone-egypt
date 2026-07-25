export type LocaleCode = 'en' | 'ar';

export type NavItem = {
  label: string;
  path: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'tiktok' | 'linkedin' | 'youtube' | 'x';
};

export type LanguageOption = {
  code: LocaleCode;
  label: string;
};

export type SiteContact = {
  email: string;
  phones: string[];
  city: string;
  country: string;
  officeLabel: string;
};

export type SiteContent = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  contact: SiteContact;
  social: SocialLink[];
  /** Use `{year}` placeholder; Footer injects the current year. */
  copyright: string;
  requestQuoteLabel: string;
  /** Shown under the name when a media image is missing or fails. */
  imageComingSoonLabel: string;
  languageSwitcherLabel: string;
  footerNavigationTitle: string;
  footerProductsTitle: string;
  footerConnectTitle: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languages: LanguageOption[];
};

export type HomeLink = {
  label: string;
  path: string;
};

export type HomeFeaturedProduct = {
  id: string;
  slug: string;
  name: string;
  imageKey: ProductImageKey;
};

export type HomeApplication = {
  id: string;
  title: string;
  imageKey: 'villas' | 'hotels' | 'commercial' | 'hospitality' | 'mosques' | 'landscape';
};

export type HomeWhyChooseItem = {
  id: string;
  title: string;
  description: string;
  icon: 'stone' | 'export' | 'finishing' | 'quality';
};

export type HomeGalleryItem = {
  id: string;
  title: string;
  imageKey: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
};

export type HomeExportStep = {
  id: string;
  label: string;
};

/** Short professional capability / solutions labels (no invented stats). */
export type CapabilityItem = {
  id: string;
  label: string;
};

export type CapabilitySection = {
  title: string;
  items: CapabilityItem[];
};

export type HomeContent = {
  comingSoonLabel: string;
  hero: {
    titleLine1: string;
    titleLine2: string;
    primaryCta: HomeLink;
    secondaryCta: HomeLink;
  };
  aboutPreview: {
    eyebrow: string;
    title: string;
    description: string;
    cta: HomeLink;
  };
  capabilities: CapabilitySection;
  featuredProducts: {
    title: string;
    items: HomeFeaturedProduct[];
  };
  applications: {
    title: string;
    items: HomeApplication[];
  };
  solutions: CapabilitySection;
  whyChoose: {
    title: string;
    items: HomeWhyChooseItem[];
  };
  galleryPreview: {
    title: string;
    cta: HomeLink;
    items: HomeGalleryItem[];
  };
  exportPreview: {
    title: string;
    cta: HomeLink;
    steps: HomeExportStep[];
  };
  luxuryCta: {
    title: string;
    cta: HomeLink;
  };
};

export type LocaleBundle = {
  site: SiteContent;
  mainNavigation: NavItem[];
  footerNavigation: NavItem[];
  home: HomeContent;
  products: ProductsContent;
  gallery: GalleryContent;
  about: AboutContent;
  export: ExportContent;
  contact: ContactContent;
};

export type AboutValueIcon = 'craftsmanship' | 'quality' | 'integrity' | 'global';

export type AboutValue = {
  id: string;
  title: string;
  description: string;
  icon: AboutValueIcon;
};

export type AboutJourneyStep = {
  id: string;
  label: string;
};

export type AboutContent = {
  comingSoonLabel: string;
  hero: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  story: {
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  capabilities: CapabilitySection;
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    items: AboutValue[];
  };
  journey: {
    title: string;
    steps: AboutJourneyStep[];
  };
  whyEgypt: {
    title: string;
    description: string;
  };
  cta: {
    title: string;
    buttonLabel: string;
    path: string;
  };
};

export type ProductStoneType = 'marble' | 'granite';

export type ProductImageKey =
  | 'gandola'
  | 'biancoHalayb'
  | 'redAswan'
  | 'newHalayb'
  | 'rosaElNasr'
  | 'galalaLight'
  | 'rosaKaterina';

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  stoneType: ProductStoneType;
  description: string;
  applications: string[];
  finishes: string[];
  forms: string[];
  specifications: ProductSpec[];
  relatedSlugs: string[];
  imageKey: ProductImageKey;
};

export type ProductsContent = {
  comingSoonLabel: string;
  pageLabel: string;
  pageTitle: string;
  pageDescription: string;
  capabilities: CapabilitySection;
  filterAllLabel: string;
  filterMarbleLabel: string;
  filterGraniteLabel: string;
  stoneTypeLabel: string;
  applicationsLabel: string;
  finishesLabel: string;
  formsLabel: string;
  specificationsLabel: string;
  galleryLabel: string;
  /** Ordered labels for the six product detail gallery slots */
  galleryShotLabels: [string, string, string, string, string, string];
  viewDetailsLabel: string;
  backToProductsLabel: string;
  requestQuoteLabel: string;
  downloadPdfLabel: string;
  relatedProductsLabel: string;
  notFoundTitle: string;
  notFoundDescription: string;
  emptyFilterTitle: string;
  emptyFilterDescription: string;
  items: Product[];
};

export type ProductFilterValue = 'all' | ProductStoneType;

export type ProductSummary = {
  id: string;
  slug: string;
  name: string;
};

export type GalleryCategory =
  | 'marble'
  | 'granite'
  | 'projects'
  | 'factory'
  | 'quarry';

export type GalleryImageKey =
  | 'one'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'six'
  | 'projects1'
  | 'projects2'
  | 'projects3'
  | 'marble1'
  | 'marble2'
  | 'marble3'
  | 'marble4'
  | 'granite1'
  | 'granite2'
  | 'granite3'
  | 'factory1'
  | 'factory2'
  | 'quarry1'
  | 'quarry2';

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  imageKey: GalleryImageKey;
};

export type GalleryContent = {
  comingSoonLabel: string;
  pageTitle: string;
  filterAllLabel: string;
  filterProjectsLabel: string;
  filterMarbleLabel: string;
  filterGraniteLabel: string;
  filterFactoryLabel: string;
  filterQuarryLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  emptyFilterTitle: string;
  emptyFilterDescription: string;
  items: GalleryItem[];
};

export type GalleryFilterValue = 'all' | GalleryCategory;

export type ExportProcessIcon =
  | 'quarry'
  | 'selection'
  | 'cutting'
  | 'finishing'
  | 'inspection'
  | 'packaging'
  | 'shipping'
  | 'destination';

export type ExportWhyIcon = 'quarry' | 'packaging' | 'quality' | 'logistics';

export type ExportProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: ExportProcessIcon;
};

export type ExportWhyItem = {
  id: string;
  title: string;
  description: string;
  icon: ExportWhyIcon;
};

export type ExportShippingPoint = {
  id: string;
  title: string;
  description: string;
};

export type ExportFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ExportContent = {
  comingSoonLabel: string;
  hero: {
    label: string;
    title: string;
  };
  capabilities: CapabilitySection;
  process: {
    title: string;
    steps: ExportProcessStep[];
  };
  why: {
    title: string;
    items: ExportWhyItem[];
  };
  packaging: {
    title: string;
    description: string;
  };
  shipping: {
    title: string;
    points: ExportShippingPoint[];
  };
  faq: {
    title: string;
    items: ExportFaqItem[];
  };
  cta: {
    title: string;
    buttonLabel: string;
    path: string;
  };
};

export type ContactFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ContactProjectTypeOption = {
  id: string;
  label: string;
};

export type ContactFieldCopy = {
  label: string;
  placeholder: string;
};

export type ContactContent = {
  comingSoonLabel: string;
  hero: {
    title: string;
  };
  capabilities: CapabilitySection;
  form: {
    title: string;
    name: ContactFieldCopy;
    company: ContactFieldCopy;
    country: ContactFieldCopy;
    email: ContactFieldCopy;
    phone: ContactFieldCopy;
    message: ContactFieldCopy;
    projectType: {
      label: string;
      placeholder: string;
      options: ContactProjectTypeOption[];
    };
    submitLabel: string;
    successMessage: string;
    errors: {
      required: string;
      email: string;
      phone: string;
    };
  };
  company: {
    title: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    socialLabel: string;
    addressLabel: string;
  };
  map: {
    title: string;
    heading: string;
    description: string;
  };
  faq: {
    title: string;
    items: ContactFaqItem[];
  };
  cta: {
    title: string;
    buttonLabel: string;
  };
};

export type PageComingSoonContent = {
  label: string;
};
