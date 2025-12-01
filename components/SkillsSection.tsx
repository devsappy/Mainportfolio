'use client';

import { motion } from 'framer-motion';
import {
  HiCode,
  HiColorSwatch,
  HiCog,
  HiCalendar,
  HiLightningBolt,
  HiDesktopComputer
} from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Core Technologies',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5', level: 98 },
    ],
    Icon: HiCode,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Styling & Design',
    skills: [
      { name: 'CSS3/SASS', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'GSAP', level: 80 },
    ],
    Icon: HiColorSwatch,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Webpack/Vite', level: 85 },
      { name: 'Jest/Cypress', level: 75 },
      { name: 'Figma', level: 80 },
    ],
    Icon: HiCog,
    color: 'from-orange-500 to-yellow-500',
  },
];

const stats = [
  { label: 'Years Experience', value: '3+', Icon: HiCalendar },
  { label: 'Projects Completed', value: '50+', Icon: HiLightningBolt },
  { label: 'Technologies', value: '15+', Icon: HiDesktopComputer },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen relative overflow-hidden py-20 bg-transparent">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <span className="text-primary">{'//'}</span> Skills & Technologies
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-dark-card/30 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-white/90">{skill.name}</span>
                        <span className="text-xs text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-dark-card/20 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3">
                <stat.Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
