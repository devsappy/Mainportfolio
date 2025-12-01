'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Silk = dynamic(() => import('@/components/Silk'), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#8B5CF6"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="overflow-x-hidden max-w-full relative z-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}