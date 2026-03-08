import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useMagneticEffect = () => {
  useEffect(() => {
    const magneticElements = document.querySelectorAll('button, a, .magnetic-btn');
    const handlers = new Map<Element, { move: (e: MouseEvent) => void; leave: () => void }>();

    magneticElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const strength = 0.3;

      const move = (e: MouseEvent) => {
        const rect = htmlEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(htmlEl, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const leave = () => {
        gsap.to(htmlEl, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      };

      htmlEl.addEventListener('mousemove', move);
      htmlEl.addEventListener('mouseleave', leave);
      handlers.set(el, { move, leave });
    });

    return () => {
      handlers.forEach(({ move, leave }, el) => {
        (el as HTMLElement).removeEventListener('mousemove', move);
        (el as HTMLElement).removeEventListener('mouseleave', leave);
      });
    };
  }, []);
};
