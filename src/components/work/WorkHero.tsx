import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useModifierKey } from '@/hooks/useOS';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const WorkHero = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bento-card', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.2,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="hero" className="min-h-screen p-4 md:p-6 flex items-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Name card */}
        <div className="bento-card glass-card md:col-span-8 md:row-span-3 p-8 md:p-12 flex flex-col justify-end relative overflow-hidden min-h-[300px] md:min-h-[400px]">
          <div className="dot-grid absolute inset-0 opacity-[0.04]" />
          <p className="font-mono text-xs text-muted-foreground mb-4 relative z-10 opacity-60">// portfolio.init()</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[0.9] relative z-10">
            JENEEL
            <br />
            <span className="text-primary">DUMASIA</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-muted-foreground tracking-wider relative z-10">
            DevOps Intern · CS Student · Builder
          </p>
        </div>

        {/* Social links */}
        <a href="https://github.com/jeneeldumasia" target="_blank" rel="noopener noreferrer"
          className="bento-card glass-card md:col-span-4 p-4 flex items-center gap-3 group">
          <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">github/jeneeldumasia</span>
        </a>
        <a href="https://linkedin.com/in/jeneel" target="_blank" rel="noopener noreferrer"
          className="bento-card glass-card md:col-span-4 p-4 flex items-center gap-3 group">
          <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">in/jeneel</span>
        </a>
        <a href="mailto:jeneeldumasia18@gmail.com"
          className="bento-card glass-card md:col-span-4 p-4 flex items-center gap-3 group">
          <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">jeneeldumasia18@</span>
        </a>

        {/* Bottom row */}
        <div className="bento-card glass-card md:col-span-4 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-primary status-dot" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Current</span>
          </div>
          <p className="font-display text-lg font-bold text-foreground">Technical Intern</p>
          <p className="font-mono text-xs text-primary">@IAMOPS</p>
        </div>

        <div className="bento-card glass-card md:col-span-4 p-4 flex items-center gap-3">
          <MapPin className="text-primary shrink-0" size={16} />
          <div>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Location</p>
            <p className="text-sm text-foreground font-body">Surat, Gujarat, India</p>
          </div>
        </div>

        <div className="bento-card glass-card md:col-span-4 p-4 flex items-center justify-center gap-2 text-muted-foreground">
          <kbd className="font-mono text-xs px-1.5 py-0.5 bg-secondary rounded border border-border">⌘K</kbd>
          <span className="font-mono text-xs">to navigate</span>
          <ChevronDown size={12} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
