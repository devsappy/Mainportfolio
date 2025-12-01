'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const Lanyard = dynamic(() => import('./Lanyard'), {
  ssr: false,
  loading: () => null
});

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const words = ["Developer", "Photographer", "Video Editor"];
  
  // Parallax scroll effects
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        // If at the end, change direction
        if (prev === words.length - 1 && direction === 1) {
          setDirection(-1);
          return prev - 1;
        }
        // If at the beginning, change direction
        if (prev === 0 && direction === -1) {
          setDirection(1);
          return prev + 1;
        }
        // Otherwise, continue in current direction
        return prev + direction;
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [direction, words.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

      {/* Lanyard 3D Effect - positioned on the left */}
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      {/* Subtle floating orbs (kept for additional depth) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-secondary/4 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-accent/3 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <motion.div 
        className="relative z-10 text-center px-4"
        style={{ y, opacity }}
      >
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
        >
          <div className="block">
            <div className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Hi, I&apos;m Saptarshi</div>
            <div className="relative w-full h-20 overflow-hidden flex justify-center">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  style={{ color: '#00ffff' }}
                  className="absolute whitespace-nowrap text-5xl md:text-7xl font-bold"
                  initial={{ y: 80 }}
                  animate={{
                    y: mounted ? (index === currentWordIndex ? 0 : index < currentWordIndex ? -80 : 80) : 80
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl text-white/90 mb-8 uppercase tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        >
          <span className="text-primary">{'< '}</span>
          Frontend Developer | UI/UX Enthusiast | React Specialist
          <span className="text-primary">{' />'}</span>
        </motion.p>

        <motion.div 
          ref={buttonsRef} 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gray-100/90 text-gray-900 font-semibold rounded-md hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider hover:bg-white/90"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ delay: scrolled ? 0 : 3, duration: scrolled ? 0.3 : 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm uppercase tracking-wider mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}