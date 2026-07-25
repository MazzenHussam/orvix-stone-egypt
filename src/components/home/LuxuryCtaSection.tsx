import { BandCta } from '@/components/common/BandCta';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';

export function LuxuryCtaSection() {
  const { home } = useLocale();
  const { luxuryCta } = home;

  return (
    <BandCta
      id="luxury-cta-title"
      title={luxuryCta.title}
      buttonLabel={luxuryCta.cta.label}
      href={luxuryCta.cta.path}
      backgroundImage={images.hero.cta}
    />
  );
}

export default LuxuryCtaSection;
