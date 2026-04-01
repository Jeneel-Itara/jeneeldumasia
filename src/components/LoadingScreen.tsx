import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1: Black screen, then logo fades in (Apple-style)
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
      0.4
    );

    // Phase 2: Progress bar appears
    tl.fromTo(
      barRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
      1.2
    );

    // Phase 3: Progress bar fills
    tl.fromTo(
      fillRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.8, ease: 'power1.inOut' },
      1.4
    );

    // Phase 4: Everything fades out, then logo scales up as screen brightens
    tl.to(barRef.current, { opacity: 0, duration: 0.3 }, '+=0.2');
    tl.to(logoRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
    }, '-=0.1');

    // Phase 5: Screen fades to transparent
    tl.to(screenRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete,
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#000' }}
    >
      {/* Apple-style centered logo */}
      <div ref={logoRef} className="flex items-baseline gap-1 opacity-0">
        <span className="font-display text-6xl md:text-8xl font-bold" style={{ color: '#f5f5f7' }}>
          J
        </span>
        <span className="font-display text-6xl md:text-8xl font-bold" style={{ color: '#86868b' }}>
          D
        </span>
      </div>

      {/* Thin progress bar below logo */}
      <div
        ref={barRef}
        className="mt-10 rounded-full overflow-hidden opacity-0"
        style={{ width: '180px', height: '3px', backgroundColor: '#333' }}
      >
        <div
          ref={fillRef}
          className="h-full rounded-full origin-left"
          style={{ backgroundColor: '#f5f5f7' }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
