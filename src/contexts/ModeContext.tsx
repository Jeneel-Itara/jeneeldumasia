import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

type Mode = 'work' | 'vibe';

interface ModeContextType {
  mode: Mode;
  isTransitioning: boolean;
  toggleMode: () => void;
  toggleRef: React.RefObject<HTMLButtonElement>;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('work');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null!);

  const toggleMode = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setMode(prev => prev === 'work' ? 'vibe' : 'work');
    }, 500);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isTransitioning]);

  return (
    <ModeContext.Provider value={{ mode, isTransitioning, toggleMode, toggleRef }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used within ModeProvider');
  return ctx;
};
