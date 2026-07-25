import { BandCta } from '@/components/common/BandCta';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';

export function ContactCta() {
  const { contact } = useLocale();
  const { cta } = contact;

  return (
    <BandCta
      id="contact-cta-title"
      title={cta.title}
      buttonLabel={cta.buttonLabel}
      href="#contact-form"
      backgroundImage={images.contact.cta}
      externalHash
    />
  );
}
