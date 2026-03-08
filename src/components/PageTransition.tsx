import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const transitionLines = [
  '> routing...',
  '> loading module...',
  '> rendering...',
  '> ready',
];

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  const runTransition = useCallback(() => {
    setIsTransitioning(true);
    setVisibleLines(0);
    setProgress(0);

    const tl = gsap.timeline({
      onComplete: () => {
        setDisplayChildren(children);
        // Exit animation
        gsap.to('.page-transition-overlay', {
          yPercent: -100,
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            setIsTransitioning(false);
            setVisibleLines(0);
            setProgress(0);
          },
        });
      },
    });

    // Enter animation
    tl.fromTo('.page-transition-overlay', 
      { yPercent: 100 },
      { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }
    );

    // Progress
    tl.to({}, {
      duration: 0.8,
      onUpdate: function() {
        const p = Math.round(this.progress() * 100);
        setProgress(p);
        if (p > 10) setVisibleLines(1);
        if (p > 35) setVisibleLines(2);
        if (p > 65) setVisibleLines(3);
        if (p > 90) setVisibleLines(4);
      },
    });
  }, [children]);

  useEffect(() => {
    if (location.pathname !== prevPath) {
      setPrevPath(location.pathname);
      runTransition();
    } else {
      setDisplayChildren(children);
    }
  }, [location.pathname, children, prevPath, runTransition]);

  return (
    <>
      {displayChildren}
      {isTransitioning && (
        <div className="page-transition-overlay fixed inset-0 z-[9998] bg-background flex flex-col items-center justify-center">
          <div className="w-72 max-w-[90vw]">
            <div className="mb-4 space-y-1">
              {transitionLines.slice(0, visibleLines).map((line, i) => (
                <p
                  key={i}
                  className={`font-mono text-xs ${
                    i === transitionLines.length - 1 ? 'text-primary font-semibold' : 'text-muted-foreground/60'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="w-full h-[2px] bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1.5 font-mono text-[10px] text-muted-foreground text-right">{progress}%</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageTransition;
