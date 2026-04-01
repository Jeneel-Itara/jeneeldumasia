import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.loading-screen', {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    tl.to({}, {
      duration: 1.5,
      onUpdate: function () {
        setProgress(Math.round(this.progress() * 100));
      },
    });

    // Animate monogram letters
    tl.from('.monogram-j', { y: 60, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.2);
    tl.from('.monogram-d', { y: 60, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.4);

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="flex items-baseline gap-1 mb-8">
        <span className="monogram-j font-display text-7xl md:text-9xl font-bold text-primary">J</span>
        <span className="monogram-d font-display text-7xl md:text-9xl font-bold text-foreground">D</span>
      </div>
      <div className="w-48 h-[2px] bg-muted overflow-hidden rounded-full">
        <div
          className="h-full bg-primary transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground font-body tracking-widest uppercase">
        {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
