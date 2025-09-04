'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SimpleLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // First visit - show loading
    sessionStorage.setItem('hasVisited', 'true');

    // Simulate loading progress for 5 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        // Slower progress increment for 5 second duration
        return prev + Math.random() * 10;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[80px] animate-pulse animation-delay-2000" />
              <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] animate-pulse animation-delay-4000" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Logo/Name */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  SAPPY
                </span>
              </h1>
              <p className="text-gray-400 mt-2 text-sm md:text-base">Frontend Developer</p>
            </motion.div>

            {/* Loading bar container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-64 md:w-80 mx-auto"
            >
              {/* Progress bar background */}
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress text */}
              <div className="flex justify-between items-center">
                <motion.p
                  className="text-cyan-400 text-sm font-mono"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading...
                </motion.p>
                <motion.p
                  className="text-gray-400 text-sm font-mono"
                  key={Math.floor(progress)}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.min(Math.floor(progress), 100)}%
                </motion.p>
              </div>
            </motion.div>

            {/* Animated dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400/20 rounded-tl-3xl" />
          <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-cyan-400/20 rounded-tr-3xl" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-400/20 rounded-bl-3xl" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-400/20 rounded-br-3xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}