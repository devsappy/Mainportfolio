'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const InfiniteMenu = dynamic(() => import('./InfiniteMenu'), { ssr: false });

const projects = [
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark -z-10" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/5 right-1/4 w-60 h-60 bg-accent/3 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute bottom-1/5 left-1/4 w-56 h-56 bg-primary/4 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          <span className="text-primary">{'//'}</span> Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-blue-400 text-lg mb-8 max-w-2xl mx-auto"
        >
          Drag to explore my recent work showcasing modern web development
          techniques and creative solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ height: '600px', position: 'relative' }}
        >
          <InfiniteMenu items={projects} />
        </motion.div>
      </div>
    </section>
  );
}
