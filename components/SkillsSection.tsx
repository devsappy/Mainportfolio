'use client';

import SkillItem from '@/components/SkillItem';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core Technologies',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5'],
  },
  {
    title: 'Styling & Design',
    skills: ['CSS3/SASS', 'Tailwind CSS', 'Styled Components', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Webpack', 'Vite', 'Git/GitHub', 'Storybook', 'Jest/Cypress', 'Performance Optimization'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark -z-10" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/3 left-1/5 w-52 h-52 bg-secondary/3 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute bottom-1/4 right-1/5 w-68 h-68 bg-accent/4 rounded-full blur-3xl animate-float-slower" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          <span className="text-primary">{'//'}</span> Skills & Technologies
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-blue-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          A comprehensive overview of the technologies and tools I work with 
          to create exceptional web experiences
        </motion.p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-dark-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    name={skill}
                    index={categoryIndex * 10 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional section for expertise level */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Expertise Levels
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-primary font-bold mb-2">Expert</h4>
              <p className="text-blue-400 text-sm">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="text-accent font-bold mb-2">Advanced</h4>
              <p className="text-blue-400 text-sm">
                GSAP, Framer Motion, CSS Animations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-cyan-400 font-bold mb-2">Learning</h4>
              <p className="text-blue-400 text-sm">
                Three.js, WebGL, Rust, Web3
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}