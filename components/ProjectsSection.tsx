'use client';

import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ThirtySix Studio Clone',
    description: 'Pixel-perfect recreation of the award-winning ThirtySix Studio website with smooth animations, interactive elements, and modern design principles.',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://thirty-six-studio-clone-topaz.vercel.app/',
    githubLink: '#',
    image: '/img 1.png',
  },
  {
    title: 'GTA 6 Landing Page',
    description: 'Immersive landing page for GTA 6 featuring cinematic scroll animations, parallax effects, and seamless integration of GSAP with Locomotive Scroll.',
    technologies: ['React', 'GSAP', 'Locomotive Scroll', 'Three.js'],
    liveLink: 'https://gta-vi-blue.vercel.app/',
    githubLink: 'https://github.com/devsappy/GTA-VI',
    image: '/img 2.png',
  },
  {
    title: 'Portfolio Website v1',
    description: 'Creative developer portfolio showcasing projects with 3D animations, dynamic interactions, and glassmorphism design elements.',
    technologies: ['HTML5', 'CSS3', 'GSAP', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://devsappy.github.io/sappy.dev/',
    githubLink: 'https://github.com/devsappy/sappy.dev',
    image: '/img 3.png',
  },
  {
    title: 'Portfolio Website v2',
    description: 'Modern minimalist portfolio featuring smooth page transitions, interactive cursor effects, and animated gradient backgrounds.',
    technologies: ['HTML5', 'CSS3', 'GSAP', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://devsappy.github.io/portfolio2/',
    githubLink: 'https://github.com/devsappy/portfolio2',
    image: '/img 4.png',
  },
  {
    title: 'Miranda Website Clone',
    description: 'Sophisticated recreation of Miranda design agency website featuring elegant animations, smooth transitions, and premium visual aesthetics.',
    technologies: ['React', 'GSAP', 'CSS3', 'JavaScript'],
    liveLink: 'https://miranda-sand.vercel.app/',
    githubLink: 'https://github.com/devsappy/MIRANDA',
    image: '/img 5.png',
  },
  {
    title: 'Chatbot UI',
    description: 'Intelligent conversational AI interface with real-time messaging, natural language processing, and seamless user interaction design.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    liveLink: 'https://devsappy.github.io/SyntaxLoopers_Diversion/',
    githubLink: 'https://github.com/devsappy/SyntaxLoopers_Diversion',
    image: '/img 6.png',
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
          className="text-center text-blue-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          A collection of my recent work showcasing modern web development 
          techniques and creative solutions
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}