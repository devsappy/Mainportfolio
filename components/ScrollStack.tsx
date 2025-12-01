'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

const ScrollStack = ({ children, className = '' }: ScrollStackProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="scroll-stack-simple">{children}</div>;
  }

  return (
    <div className={`scroll-stack-simple ${className}`.trim()}>
      {children}
    </div>
  );
};

export default ScrollStack;
