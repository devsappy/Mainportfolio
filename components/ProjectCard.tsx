'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-dark-card border border-primary/20 rounded-lg overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-300 ease-out"
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
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-blue-400 mb-4 line-clamp-2">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded-full hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="text-primary hover:text-accent transition-colors flex items-center gap-1"
            >
              Live Demo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="text-primary hover:text-accent transition-colors flex items-center gap-1"
            >
              GitHub
              <span className="group-hover:translate-x-1 transition-transform">→</span>
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