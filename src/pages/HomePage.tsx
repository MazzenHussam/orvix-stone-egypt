import { AboutPreviewSection } from '@/components/home/AboutPreviewSection';
import { ApplicationsSection } from '@/components/home/ApplicationsSection';
import { ExportPreviewSection } from '@/components/home/ExportPreviewSection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { GalleryPreviewSection } from '@/components/home/GalleryPreviewSection';
import { HeroSection } from '@/components/home/HeroSection';
import { LuxuryCtaSection } from '@/components/home/LuxuryCtaSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { CapabilityStrip } from '@/components/common/CapabilityStrip';
import { useLocale } from '@/hooks/useLocale';

export function HomePage() {
  const { home } = useLocale();

  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <CapabilityStrip
        section={home.capabilities}
        tone="warm"
        id="home-capabilities"
      />
      <FeaturedProductsSection />
      <ApplicationsSection />
      <CapabilityStrip
        section={home.solutions}
        tone="white"
        id="home-solutions"
      />
      <WhyChooseSection />
      <GalleryPreviewSection />
      <ExportPreviewSection />
      <LuxuryCtaSection />
    </>
  );
}

export default HomePage;
