import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const greetings = ['HELLO', 'HOLA', 'CIAO', 'नमस्ते', 'BONJOUR', 'SALUT'];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Cycle through greetings
    greetings.forEach((_, i) => {
      const delay = i * 0.45;
      tl.to(textRef.current, {
        opacity: 0,
        duration: 0.15,
        ease: 'power2.in',
        onComplete: () => setIndex(i),
      }, delay);
      tl.to(textRef.current, {
        opacity: 1,
        duration: 0.15,
        ease: 'power2.out',
      });
    });

    // Hold last greeting
    tl.to({}, { duration: 0.4 });

    // Fade out screen
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
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-[#555] text-5xl md:text-7xl"
          style={{ lineHeight: 1 }}
        >
          ·
        </span>
        <span
          ref={textRef}
          className="font-light text-5xl md:text-7xl tracking-wide"
          style={{ color: '#e0e0e0' }}
        >
          {greetings[index]}
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
