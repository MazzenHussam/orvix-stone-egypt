import { AboutCta } from '@/components/about/AboutCta';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutJourney } from '@/components/about/AboutJourney';
import { AboutMission } from '@/components/about/AboutMission';
import { AboutStory } from '@/components/about/AboutStory';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutVision } from '@/components/about/AboutVision';
import { AboutWhyEgypt } from '@/components/about/AboutWhyEgypt';
import { CapabilityStrip } from '@/components/common/CapabilityStrip';
import { useLocale } from '@/hooks/useLocale';

export function AboutPage() {
  const { about } = useLocale();

  return (
    <>
      <AboutHero />
      <AboutStory />
      <CapabilityStrip
        section={about.capabilities}
        tone="warm"
        id="about-capabilities"
      />
      <AboutMission />
      <AboutVision />
      <AboutValues />
      <AboutJourney />
      <AboutWhyEgypt />
      <AboutCta />
    </>
  );
}

export default AboutPage;
