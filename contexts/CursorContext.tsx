'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CursorContextType {
  cursorImage: string | null;
  setCursorImage: (image: string | null) => void;
  cursorText: string | null;
  setCursorText: (text: string | null) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorImage, setCursorImage] = useState<string | null>(null);
  const [cursorText, setCursorText] = useState<string | null>(null);

  return (
    <CursorContext.Provider value={{ cursorImage, setCursorImage, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}