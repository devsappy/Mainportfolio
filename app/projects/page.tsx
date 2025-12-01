'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const InfiniteMenu = dynamic(() => import('@/components/InfiniteMenu'), { ssr: false });
const Silk = dynamic(() => import('@/components/Silk'), { ssr: false });

const menuItems = [
  {
    title: 'ThirtySix Studio Clone',
    description: 'Pixel-perfect recreation of the award-winning ThirtySix Studio website with smooth animations.',
    image: '/img 1.png',
    link: 'https://thirty-six-studio-clone-topaz.vercel.app/',
  },
  {
    title: 'GTA 6 Landing Page',
    description: 'Immersive landing page for GTA 6 featuring cinematic scroll animations and parallax effects.',
    image: '/img 2.png',
    link: 'https://gta-vi-blue.vercel.app/',
  },
  {
    title: 'Portfolio Website v1',
    description: 'Creative developer portfolio showcasing projects with 3D animations and glassmorphism.',
    image: '/img 3.png',
    link: 'https://devsappy.github.io/sappy.dev/',
  },
  {
    title: 'Portfolio Website v2',
    description: 'Modern minimalist portfolio with smooth page transitions and interactive cursor effects.',
    image: '/img 4.png',
    link: 'https://devsappy.github.io/portfolio2/',
  },
  {
    title: 'Miranda Website Clone',
    description: 'Sophisticated recreation of Miranda design agency website with elegant animations.',
    image: '/img 5.png',
    link: 'https://miranda-sand.vercel.app/',
  },
  {
    title: 'Chatbot UI',
    description: 'Intelligent conversational AI interface with real-time messaging and seamless UX.',
    image: '/img 6.png',
    link: 'https://devsappy.github.io/SyntaxLoopers_Diversion/',
  },
];

export default function ProjectsPage() {
  return (
    <div className="fixed inset-0">
      {/* Silk Background */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#8B5CF6"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-dark-secondary/80 backdrop-blur-sm border border-primary/20 rounded-full text-white hover:border-primary/50 transition-all duration-300 hover:scale-105"
      >
        <span className="text-primary">&#8592;</span>
        <span>Back</span>
      </Link>

      {/* Page title */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-primary">{'//'}</span> Projects
        </h1>
      </div>

      {/* Full page 3D sphere menu */}
      <div className="relative w-full h-full">
        <InfiniteMenu items={menuItems} />
      </div>
    </div>
  );
}
