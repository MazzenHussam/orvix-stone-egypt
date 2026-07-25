import { ContactCta } from '@/components/contact/ContactCta';
import { ContactFaq } from '@/components/contact/ContactFaq';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactMain } from '@/components/contact/ContactMain';
import { ContactMap } from '@/components/contact/ContactMap';
import { CapabilityStrip } from '@/components/common/CapabilityStrip';
import { useLocale } from '@/hooks/useLocale';

export function ContactPage() {
  const { contact } = useLocale();

  return (
    <>
      <ContactHero />
      <CapabilityStrip
        section={contact.capabilities}
        tone="warm"
        id="contact-capabilities"
      />
      <ContactMain />
      <ContactMap />
      <ContactFaq />
      <ContactCta />
    </>
  );
}

export default ContactPage;
