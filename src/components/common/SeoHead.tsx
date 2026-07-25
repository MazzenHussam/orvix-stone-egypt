import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { company } from '@/config/company';
import { seoByLocale } from '@/data/seo';
import { useLocale } from '@/hooks/useLocale';

function resolvePageKey(pathname: string): string {
  if (pathname.startsWith('/products/')) return '/products';
  if (pathname.startsWith('/gallery')) return '/gallery';
  return pathname;
}

/** Site-wide SEO head tags driven by locale + route. */
export function SeoHead() {
  const { pathname } = useLocation();
  const { locale, site, products } = useLocale();
  const pageKey = resolvePageKey(pathname);
  const page = seoByLocale[locale].pages[pageKey] ?? seoByLocale[locale].pages['/'];

  const productSlug = pathname.startsWith('/products/')
    ? pathname.replace('/products/', '').split('/')[0]
    : null;
  const product = productSlug
    ? products.items.find((item) => item.slug === productSlug)
    : undefined;

  const title = product
    ? `${product.name} | ${site.name}`
    : page
      ? `${page.title} | ${site.name}`
      : site.name;
  const description = product?.description ?? page?.description ?? site.description;
  const canonical = `${company.seo.siteUrl}${pathname === '/' ? '' : pathname}`;
  const ogImage = `${company.seo.siteUrl}${company.seo.ogImage}`;

  return (
    <Helmet htmlAttributes={{ lang: locale, dir: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_EG' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
