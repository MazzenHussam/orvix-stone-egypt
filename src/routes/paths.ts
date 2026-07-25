export const routes = {
  home: '/',
  about: '/about',
  products: '/products',
  productDetails: '/products/:slug',
  gallery: '/gallery',
  export: '/export',
  contact: '/contact',
  /** Contact page anchored to the inquiry form */
  contactForm: '/contact#contact-form',
  notFound: '*',
} as const;

export function productDetailsPath(slug: string): string {
  return `/products/${slug}`;
}
