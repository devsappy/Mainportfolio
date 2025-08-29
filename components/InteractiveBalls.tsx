'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

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
];

interface BallProps {
  ball: typeof balls[0];
  mouseX: number;
  mouseY: number;
  isAttracting: boolean;
}

function InteractiveBall({ ball, mouseX, mouseY, isAttracting }: BallProps) {
  const ballRef = useRef<HTMLDivElement>(null);
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    if (ballRef.current) {
      const rect = ballRef.current.getBoundingClientRect();
      setBallPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  }, []);

  useEffect(() => {
    if (mouseX === 0 && mouseY === 0) return;
    
    // Calculate distance from mouse to ball center
    const dx = mouseX - ballPos.x;
    const dy = mouseY - ballPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Interaction radius
    const interactionRadius = 250;
    
    if (distance < interactionRadius) {
      const force = (1 - distance / interactionRadius) * 80;
      const angle = Math.atan2(dy, dx);
      
      if (isAttracting) {
        // Attraction mode - balls move towards cursor
        x.set(Math.cos(angle) * force * 1.5);
        y.set(Math.sin(angle) * force * 1.5);
      } else {
        // Repulsion mode - balls move away from cursor
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      }
    } else {
      // Return to original position
      x.set(0);
      y.set(0);
    }
  }, [mouseX, mouseY, ballPos, x, y]);

  return (
    <motion.div
      ref={ballRef}
      className={`absolute rounded-full bg-gradient-to-br ${ball.gradient} blur-lg`}
      style={{
        width: ball.size,
        height: ball.size,
        left: ball.x,
        top: ball.y,
        x,
        y,
      }}
      animate={{
        scale: [1, 1.08, 1.04, 0.96, 1],
      }}
      transition={{
        scale: {
          duration: ball.duration,
          repeat: Infinity,
          delay: ball.delay,
          ease: [0.45, 0.05, 0.55, 0.95],
        },
      }}
    />
  );
}

export default function InteractiveBalls() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isAttracting, setIsAttracting] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setIsAttracting(true);
    const handleMouseUp = () => setIsAttracting(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balls.map((ball) => (
        <InteractiveBall
          key={ball.id}
          ball={ball}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          isAttracting={isAttracting}
        />
      ))}
      
      {/* Cursor glow effect */}
      <motion.div
        className="fixed w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-3xl pointer-events-none"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}