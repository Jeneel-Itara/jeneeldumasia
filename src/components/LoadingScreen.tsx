import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const bootLines = [
  '> initializing portfolio...',
  '> loading modules...',
  '> compiling experience...',
  '> jeneel.dumasia ready',
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete,
        });
      },
    });

    // Progress bar
    tl.to({}, {
      duration: 2,
      onUpdate: function () {
        const p = Math.round(this.progress() * 100);
        setProgress(p);
        // Show lines at certain progress points
        if (p > 10) setVisibleLines(1);
        if (p > 35) setVisibleLines(2);
        if (p > 65) setVisibleLines(3);
        if (p > 90) setVisibleLines(4);
      },
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="w-80 max-w-[90vw]">
        {/* Terminal lines */}
        <div className="mb-6 space-y-1">
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <p
              key={i}
              className={`font-mono text-xs md:text-sm ${
                i === visibleLines - 1 && visibleLines < 4
                  ? 'text-muted-foreground'
                  : i === bootLines.length - 1
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground/60'
              }`}
            >
              {line}
              {i === visibleLines - 1 && visibleLines < 4 && (
                <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
              )}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-[2px] bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 font-mono text-xs text-muted-foreground text-right">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
