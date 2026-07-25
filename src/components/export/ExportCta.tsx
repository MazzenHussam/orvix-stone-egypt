import { BandCta } from '@/components/common/BandCta';
import { images } from '@/config/images';
import { useLocale } from '@/hooks/useLocale';

export function ExportCta() {
  const { export: exportPage } = useLocale();
  const { cta } = exportPage;

  return (
    <BandCta
      id="export-cta-title"
      title={cta.title}
      buttonLabel={cta.buttonLabel}
      href={cta.path}
      backgroundImage={images.export.cta}
    />
  );
}
