# ORVIX STONE EGYPT

Corporate website for **ORVIX STONE EGYPT** — premium Egyptian marble, granite, and natural stone.

## Stack

- React 19 + TypeScript + Vite
- Material UI
- React Router
- Framer Motion
- React Hook Form
- React Helmet Async
- Lucide React

## Quick start

```bash
npm install
npm run dev
npm run build
npm run preview
```

Path alias: `@/` → `src/`.

---

## How to update company information

**Single source of truth:** [`src/config/company.ts`](src/config/company.ts)

Update these in `company.ts` (not scattered across components):

| Field | What to change |
| --- | --- |
| Company name (EN/AR) | `company.name` / `company.legalName` |
| Phone numbers | `company.phones` |
| WhatsApp number + default messages | `company.whatsapp` |
| Email | `company.email` |
| City / country / office label | `company.location` |
| Social URLs | `company.social` |
| SEO site URL + default descriptions | `company.seo` |

Site copy (labels, navigation text) lives under `src/data/en/` and `src/data/ar/` and reads values from `company.ts` where appropriate.

---

## Logo (typography wordmark)

Premium wordmark only — no icon mark.

- SVG files: `public/images/logos/orvix-wordmark-dark.svg` / `orvix-wordmark-light.svg`
- React: `<Wordmark variant="dark|light" />` in [`src/components/common/Wordmark.tsx`](src/components/common/Wordmark.tsx)
- Config paths: `images.logos` in [`src/config/images.ts`](src/config/images.ts)
- Favicon: `public/favicon.svg`

---

## How to replace images

1. Add assets under the matching folder in `public/images/` (`hero`, `products`, `gallery`, `about`, `applications`, etc.).
2. Update the path map in [`src/config/images.ts`](src/config/images.ts).
3. Prefer Unsplash/remote URLs only for temporary placeholders — production should use local files under `public/`.

Broken images fall back to a soft placeholder via `SafeImage` (`src/components/common/SafeImage.tsx`).

---

## How to replace phone numbers

Edit `company.phones` and `company.whatsapp` in [`src/config/company.ts`](src/config/company.ts).

Phones render as clickable `tel:` links in the Footer and Contact page. The floating WhatsApp button uses `getWhatsAppUrl()`.

---

## How to replace email

Edit `company.email` in [`src/config/company.ts`](src/config/company.ts).

All email links use `mailto:` via `getMailtoHref()`.

---

## How to replace products

1. Edit product entries in:
   - `src/data/en/products.ts`
   - `src/data/ar/products.ts`
2. Add product images under `public/images/products/` and register keys in `src/config/images.ts`.
3. Keep `slug` values URL-safe; they drive `/products/:slug`.

---

## How to replace gallery items

1. Edit:
   - `src/data/en/gallery.ts`
   - `src/data/ar/gallery.ts`
2. Register image keys in `src/config/images.ts` → `images.gallery`.

---

## Language (EN / AR)

- Switcher in the Navbar (desktop + mobile).
- Locale persists in `localStorage` (`orvix-locale`).
- Arabic uses RTL; English uses LTR (`document.documentElement.dir`).

---

## Contact form

- Fields: Name, Company, Country, Phone, Email, Message, Project Type.
- Client-side validation (required, email, phone).
- Success snackbar on submit.
- Currently logs payload to the browser console.
- Look for the `TODO` in `src/components/contact/ContactForm.tsx` to connect a backend/CRM later.

---

## SEO & crawlability

- Per-route titles/descriptions: `src/data/seo.ts` (wired by `SeoHead`).
- Favicon: `public/favicon.svg`
- `public/robots.txt`
- `public/sitemap.xml` — update the domain to match `company.seo.siteUrl` before go-live.

---

## Deploy

```bash
npm run build
```

Serve the `dist/` folder. Configure the host for SPA fallback to `index.html` (required for `/products/:slug`).

See also [`docs/Deploy.md`](docs/Deploy.md).

### Pre-launch checklist

- [ ] Update `company.seo.siteUrl` and `public/sitemap.xml` / `robots.txt` domain
- [ ] Replace logo and key photography
- [ ] Confirm phones, WhatsApp, social URLs in `company.ts`
- [ ] Replace temporary email when a real mailbox exists
- [ ] Connect the contact form backend (see TODO in `ContactForm.tsx`)
- [ ] `npm run build` succeeds
- [ ] SPA rewrite rules configured on the host

---

## Architecture

| Area | Path |
| --- | --- |
| Pages | `src/pages/` |
| Feature UI | `src/components/{home,about,products,gallery,export,contact}/` |
| Layout | `src/components/layout/` |
| Shared UI | `src/components/common/` |
| Copy (EN/AR) | `src/data/en/`, `src/data/ar/` |
| Company facts | `src/config/company.ts` |
| Image map | `src/config/images.ts` |
| Routes | `src/routes/` |
