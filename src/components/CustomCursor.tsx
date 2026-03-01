import { useEffect, useRef } from 'react';
import { useMode } from '@/contexts/ModeContext';

const CustomCursor = () => {
  const { mode } = useMode();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animate);
    };

    const onEnterInteractive = (e: Event) => {
      cursor.classList.add('scale-150');
      const target = e.target as HTMLElement;
      const label = target.dataset.cursorLabel;
      if (label && labelRef.current) {
        labelRef.current.textContent = label;
        labelRef.current.classList.remove('opacity-0');
      }
    };

    const onLeaveInteractive = () => {
      cursor.classList.remove('scale-150');
      if (labelRef.current) {
        labelRef.current.classList.add('opacity-0');
        labelRef.current.textContent = '';
      }
    };

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor-label]').forEach(el => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });
    
    const raf = requestAnimationFrame(animate);
    document.documentElement.classList.add('custom-cursor-active');

    // Check for touch device
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) {
      cursor.style.display = 'none';
      dot.style.display = 'none';
      document.documentElement.classList.remove('custom-cursor-active');
    }

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('custom-cursor-active');
      document.querySelectorAll('a, button, [data-cursor-label]').forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, [mode]);

  const isVibe = mode === 'vibe';

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9995] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${
          isVibe
            ? 'w-10 h-10 rounded-full border-[3px] border-primary'
            : 'w-8 h-8 rounded-full border border-primary'
        }`}
      >
        <span
          ref={labelRef}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] tracking-widest uppercase text-primary font-body whitespace-nowrap opacity-0 transition-opacity"
        />
      </div>
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9996] -translate-x-1/2 -translate-y-1/2 rounded-full ${
          isVibe ? 'w-3 h-3 bg-primary' : 'w-1.5 h-1.5 bg-primary'
        }`}
      />
    </>
  );
};

export default CustomCursor;
