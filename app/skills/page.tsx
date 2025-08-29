'use client';

import SkillItem from '@/components/SkillItem';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core Technologies',
    skills: ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5'],
  },
  {
    title: 'Styling & Design',
    skills: ['CSS3/SASS', 'Tailwind CSS', 'Styled Components', 'Framer Motion', 'GSAP', 'Figma'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Webpack', 'Vite', 'Git/GitHub', 'Storybook', 'Jest/Cypress', 'Performance Optimization'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Additional Skills',
    skills: ['Redux/Zustand', 'React Query', 'Socket.io', 'Docker', 'AWS/Vercel', 'CI/CD'],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark -z-10" />
      <div className="fixed inset-0 opacity-30 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          <span className="text-primary">{'//'}</span> Skills & Technologies
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-text-secondary text-lg mb-16 max-w-2xl mx-auto"
        >
          A comprehensive overview of the technologies and tools I work with 
          to create exceptional web experiences
        </motion.p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
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
              <p className="text-text-secondary text-sm">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="text-accent font-bold mb-2">Advanced</h4>
              <p className="text-text-secondary text-sm">
                Vue.js, GSAP, Node.js, MongoDB
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-secondary font-bold mb-2">Learning</h4>
              <p className="text-text-secondary text-sm">
                Three.js, WebGL, Rust, Web3
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}