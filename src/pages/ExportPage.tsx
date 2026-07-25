import { ExportCta } from '@/components/export/ExportCta';
import { ExportFaq } from '@/components/export/ExportFaq';
import { ExportHero } from '@/components/export/ExportHero';
import { ExportPackaging } from '@/components/export/ExportPackaging';
import { ExportProcess } from '@/components/export/ExportProcess';
import { ExportShipping } from '@/components/export/ExportShipping';
import { ExportWhy } from '@/components/export/ExportWhy';
import { CapabilityStrip } from '@/components/common/CapabilityStrip';
import { useLocale } from '@/hooks/useLocale';

export function ExportPage() {
  const { export: exportContent } = useLocale();

  return (
    <>
      <ExportHero />
      <CapabilityStrip
        section={exportContent.capabilities}
        tone="warm"
        id="export-capabilities"
      />
      <ExportProcess />
      <ExportWhy />
      <ExportPackaging />
      <ExportShipping />
      <ExportFaq />
      <ExportCta />
    </>
  );
}

export default ExportPage;
