import { useMode } from '@/contexts/ModeContext';
import { useModifierKey } from '@/hooks/useOS';
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
      {/* Pill toggle */}
      <div className="fixed top-5 right-5 z-[9990] flex items-center">
        <button
          ref={toggleRef}
          onClick={toggleMode}
          disabled={isTransitioning}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 border ${
            mode === 'work'
              ? 'bg-secondary/80 backdrop-blur-md text-foreground border-border hover:border-primary/50'
              : 'bg-card/80 backdrop-blur-md text-foreground border-border hover:border-primary/50'
          } ${isTransitioning ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <span className={`transition-colors ${mode === 'work' ? 'text-primary' : 'text-muted-foreground'}`}>
            Deploy
          </span>
          <span className="w-px h-3 bg-border" />
          <span className={`transition-colors ${mode === 'vibe' ? 'text-primary' : 'text-muted-foreground'}`}>
            Unwind
          </span>
        </button>

        {/* Keyboard shortcut hint */}
        <div className="hidden md:flex items-center ml-3 px-2 py-1 rounded-md bg-secondary/50 border border-border/50">
          <kbd className="font-mono text-[10px] text-muted-foreground">{modKey}+K</kbd>
        </div>
      </div>

      {showOverlay && (
        <div
          ref={overlayRef}
          className="mode-transition-overlay"
          style={{
            backgroundColor: mode === 'vibe'
              ? 'hsl(35 30% 8%)'
              : 'hsl(225 25% 5%)',
          }}
        />
      )}
    </>
  );
};

export default ModeToggle;
