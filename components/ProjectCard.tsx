'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCursor } from '@/contexts/CursorContext';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  image,
  index
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { setCursorImage, setCursorText } = useCursor();

  const handleCardMouseMove = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isButton = target.tagName === 'A' || target.closest('a');
    
    if (image && !isButton) {
      setCursorImage(image);
      setCursorText(title);
    } else {
      setCursorImage(null);
      setCursorText(null);
    }
  };

  const handleMouseLeave = () => {
    setCursorImage(null);
    setCursorText(null);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-dark-card border border-primary/20 rounded-lg overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col h-full"
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      
      {/* Project image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-primary/30 text-xl uppercase tracking-widest">Preview</span>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-blue-400 mb-4 line-clamp-2">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6 flex-grow">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded-full hover:bg-primary/20 transition-colors h-fit"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links - Now at the bottom */}
        <div className="flex gap-3 mt-auto">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="px-5 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="px-5 py-2.5 bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-secondary/3" />
      </div>
    </motion.div>
  );
}