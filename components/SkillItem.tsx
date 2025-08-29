'use client';

import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  index: number;
}

export default function SkillItem({ name, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 5px 20px rgba(0, 255, 255, 0.4)',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--bg-dark)',
      }}
      className="relative px-4 py-2 bg-dark-card border border-primary/20 rounded-full text-blue-400 hover:text-dark hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <span className="relative z-10">{name}</span>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}