'use client';

import { motion } from 'framer-motion';

const balls = [
  {
    id: 1,
    size: 120,
    x: '10%',
    y: '20%',
    duration: 20,
    delay: 0,
    gradient: 'from-cyan-400/50 to-blue-600/40',
  },
  {
    id: 2,
    size: 80,
    x: '80%',
    y: '60%',
    duration: 25,
    delay: 2,
    gradient: 'from-purple-400/50 to-pink-600/40',
  },
  {
    id: 3,
    size: 150,
    x: '70%',
    y: '10%',
    duration: 22,
    delay: 1,
    gradient: 'from-blue-400/50 to-cyan-600/40',
  },
  {
    id: 4,
    size: 100,
    x: '20%',
    y: '70%',
    duration: 28,
    delay: 3,
    gradient: 'from-teal-400/50 to-green-600/40',
  },
  {
    id: 5,
    size: 60,
    x: '50%',
    y: '50%',
    duration: 18,
    delay: 1.5,
    gradient: 'from-indigo-400/50 to-purple-600/40',
  },
  {
    id: 6,
    size: 90,
    x: '90%',
    y: '30%',
    duration: 30,
    delay: 0.5,
    gradient: 'from-pink-400/50 to-rose-600/40',
  },
  {
    id: 7,
    size: 70,
    x: '5%',
    y: '80%',
    duration: 26,
    delay: 2.5,
    gradient: 'from-amber-400/50 to-orange-600/40',
  },
  {
    id: 8,
    size: 110,
    x: '35%',
    y: '15%',
    duration: 24,
    delay: 0.8,
    gradient: 'from-emerald-400/50 to-teal-600/40',
  },
  {
    id: 9,
    size: 85,
    x: '60%',
    y: '75%',
    duration: 21,
    delay: 1.2,
    gradient: 'from-violet-400/50 to-indigo-600/40',
  },
  {
    id: 10,
    size: 95,
    x: '45%',
    y: '35%',
    duration: 27,
    delay: 3.5,
    gradient: 'from-sky-400/50 to-blue-600/40',
  },
  {
    id: 11,
    size: 65,
    x: '85%',
    y: '45%',
    duration: 23,
    delay: 1.8,
    gradient: 'from-fuchsia-400/50 to-purple-600/40',
  },
  {
    id: 12,
    size: 75,
    x: '25%',
    y: '40%',
    duration: 29,
    delay: 2.2,
    gradient: 'from-lime-400/50 to-green-600/40',
  },
  {
    id: 13,
    size: 105,
    x: '15%',
    y: '55%',
    duration: 19,
    delay: 0.3,
    gradient: 'from-red-400/50 to-pink-600/40',
  },
  {
    id: 14,
    size: 55,
    x: '75%',
    y: '85%',
    duration: 31,
    delay: 4,
    gradient: 'from-blue-400/50 to-indigo-600/40',
  },
  {
    id: 15,
    size: 130,
    x: '55%',
    y: '5%',
    duration: 26,
    delay: 1.7,
    gradient: 'from-purple-400/50 to-violet-600/40',
  },
  {
    id: 16,
    size: 45,
    x: '40%',
    y: '65%',
    duration: 20,
    delay: 2.8,
    gradient: 'from-cyan-400/50 to-teal-600/40',
  },
  {
    id: 17,
    size: 88,
    x: '95%',
    y: '70%',
    duration: 24,
    delay: 0.6,
    gradient: 'from-rose-400/50 to-red-600/40',
  },
  {
    id: 18,
    size: 115,
    x: '30%',
    y: '90%',
    duration: 28,
    delay: 3.2,
    gradient: 'from-orange-400/50 to-amber-600/40',
  },
  {
    id: 19,
    size: 72,
    x: '65%',
    y: '25%',
    duration: 22,
    delay: 1.4,
    gradient: 'from-green-400/50 to-emerald-600/40',
  },
  {
    id: 20,
    size: 98,
    x: '8%',
    y: '35%',
    duration: 25,
    delay: 2.6,
    gradient: 'from-indigo-400/50 to-blue-600/40',
  },
];

export default function BouncingBalls() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className={`absolute rounded-full bg-gradient-to-br ${ball.gradient} blur-lg`}
          style={{
            width: ball.size,
            height: ball.size,
            left: ball.x,
            top: ball.y,
          }}
          animate={{
            y: [0, -40, -25, 15, 0],
            x: [0, 20, -15, -20, 0],
            scale: [1, 1.08, 1.04, 0.96, 1],
          }}
          transition={{
            duration: ball.duration,
            repeat: Infinity,
            delay: ball.delay,
            ease: [0.45, 0.05, 0.55, 0.95],
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}
      
    </div>
  );
}