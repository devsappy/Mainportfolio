'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from './CountUp';
import { useLoading } from '@/contexts/LoadingContext';

const Silk = dynamic(() => import('./Silk'), { ssr: false });

export default function LoadingScreen() {
  const [isComplete, setIsComplete] = useState(false);
  const { isPageLoading, setIsPageLoading } = useLoading();

  const handleCountEnd = () => {
    setIsComplete(true);
    setTimeout(() => {
      setIsPageLoading(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isPageLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed inset-0 z-[10000] flex items-center justify-center transition-opacity duration-500 ${
            isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0">
            <Silk
              speed={5}
              scale={1}
              color="#7B7481"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
          <div className="relative z-10 text-center">
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={2.5}
              className="text-8xl md:text-9xl font-bold text-white tracking-tighter"
              onEnd={handleCountEnd}
            />
            <span className="text-8xl md:text-9xl font-bold text-white tracking-tighter">%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
