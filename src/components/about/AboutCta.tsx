import { BandCta } from '@/components/common/BandCta';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';

export function AboutCta() {
  const { about } = useLocale();
  const { cta } = about;

  return (
    <BandCta
      id="about-cta-title"
      title={cta.title}
      buttonLabel={cta.buttonLabel}
      href={cta.path}
      backgroundImage={images.about.cta}
    />
  );
}
