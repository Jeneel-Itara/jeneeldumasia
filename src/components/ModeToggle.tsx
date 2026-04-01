import { useMode } from '@/contexts/ModeContext';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ModeToggle = () => {
  const { mode, toggleMode, toggleRef, isTransitioning } = useMode();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (!isTransitioning || !toggleRef.current || !overlayRef.current) return;

    const btn = toggleRef.current.getBoundingClientRect();
    const cx = btn.left + btn.width / 2;
    const cy = btn.top + btn.height / 2;
    const maxRadius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );

    setShowOverlay(true);
    const el = overlayRef.current;
    
    // The overlay takes the NEW mode's color
    const nextMode = mode; // mode has already switched by the time this runs in the second half
    
    gsap.set(el, {
      clipPath: `circle(0px at ${cx}px ${cy}px)`,
      opacity: 1,
    });
    
    gsap.to(el, {
      clipPath: `circle(${maxRadius}px at ${cx}px ${cy}px)`,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        setShowOverlay(false);
      },
    });
  }, [isTransitioning, mode]);

  return (
    <>
      <button
        ref={toggleRef}
        onClick={toggleMode}
        disabled={isTransitioning}
        className={`fixed top-6 right-6 z-[9990] px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
          mode === 'work'
            ? 'bg-secondary text-foreground border border-border font-body hover:bg-primary hover:text-primary-foreground'
            : 'bg-primary text-primary-foreground font-vibe-display border-2 border-foreground hover:scale-105'
        } ${isTransitioning ? 'opacity-50 pointer-events-none' : ''}`}
      >
        {mode === 'work' ? 'Unwind 🍵' : 'Deploy 💼'}
      </button>

      {showOverlay && (
        <div
          ref={overlayRef}
          className="mode-transition-overlay"
          style={{
            backgroundColor: mode === 'vibe' 
              ? 'hsl(40 40% 95%)' 
              : 'hsl(220 20% 6%)',
          }}
        />
      )}
    </>
  );
};

export default ModeToggle;
