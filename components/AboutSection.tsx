'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section 
      ref={containerRef}
      id="about" 
      className="min-h-screen relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark -z-10" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-primary/4 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-secondary/3 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="text-primary">{'//'}</span> About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-blue-400"
          >
            <p className="text-lg leading-relaxed">
              I&apos;m a passionate frontend developer specializing in creating stunning, 
              interactive user interfaces that blend aesthetics with functionality. 
              I transform designs into pixel-perfect, performant web experiences.
            </p>
            
            <p className="text-lg leading-relaxed">
              My expertise lies in modern JavaScript frameworks like React, Vue, and Next.js, 
              combined with a deep understanding of CSS animations, responsive design, 
              and web performance optimization. I believe great UX comes from attention 
              to detail and understanding user behavior.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I&apos;m not crafting interfaces, you&apos;ll find me experimenting with WebGL, 
              exploring new CSS features, contributing to design systems, or diving into 
              the latest frontend frameworks and tools.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-bold text-primary mb-4">What I Do Best</h3>
              <ul className="space-y-3">
                {[
                  'Building responsive, accessible web applications',
                  'Creating smooth animations and micro-interactions',
                  'Optimizing web performance and Core Web Vitals',
                  'Implementing modern design systems',
                  'Developing reusable component libraries',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-accent">▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative w-72 h-72 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-pulse opacity-30 blur-xl" />
                <div className="absolute inset-[-2px] bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-spin-slow" />
                <div className="absolute inset-[2px] bg-dark rounded-full" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark">
                  <Image
                    src="/mainimg.jpg"
                    alt="Sappy - Frontend Developer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sappy</h3>
                <p className="text-cyan-400 text-lg">Frontend Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}