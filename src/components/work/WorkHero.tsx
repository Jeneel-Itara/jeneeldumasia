import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const WorkHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.from('.hero-line', {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.15,
      });

      tl.from('.hero-role', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');

      tl.from('.hero-links a', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.3');

      tl.from('.scroll-indicator', {
        opacity: 0,
        y: -10,
        duration: 0.6,
      }, '-=0.2');

      // Subtle mouse parallax on the hero
      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to('.hero-3d-element', { x, y, duration: 0.8, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Abstract 3D-inspired geometric element */}
      <div className="hero-3d-element absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 600 600" className="w-[80vmin] h-[80vmin]">
          <rect x="100" y="100" width="400" height="400" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" transform="rotate(15 300 300)" />
          <rect x="150" y="150" width="300" height="300" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" transform="rotate(30 300 300)" />
          <rect x="200" y="200" width="200" height="200" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" transform="rotate(45 300 300)" />
          <line x1="0" y1="300" x2="600" y2="300" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="relative z-10 text-center">
        <div className="overflow-hidden mb-2">
          <h1 className="hero-line font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground leading-none">
            JENEEL
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-primary leading-none">
            DUMASIA
          </h1>
        </div>

        <p className="hero-role mt-8 text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground font-body">
          DevOps Intern · CS Student · Builder
        </p>

        <div className="hero-links flex items-center justify-center gap-6 mt-8">
          <a href="https://github.com/jeneeldumasia" target="_blank" rel="noopener noreferrer" data-cursor-label="GITHUB" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/jeneel" target="_blank" rel="noopener noreferrer" data-cursor-label="LINKEDIN" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:jeneeldumasia18@gmail.com" data-cursor-label="EMAIL" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.4em] uppercase font-body">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};

export default WorkHero;
