'use client';

import dynamic from 'next/dynamic';

const Silk = dynamic(() => import('@/components/Silk'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#0a0a1a]" />
});

const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="min-h-screen" />
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="min-h-screen" />
});

const SkillsSection = dynamic(() => import('@/components/SkillsSection'), {
  loading: () => <div className="min-h-screen" />
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="min-h-screen" />
});

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
