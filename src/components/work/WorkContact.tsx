import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WorkContact = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="contact" className="px-4 md:px-6 pb-6 max-w-6xl mx-auto">
      <div className="contact-card glass-card p-10 md:p-16 text-center">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-6">// contact</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Let's build something.
        </h2>
        <a
          href="mailto:jeneeldumasia18@gmail.com"
          className="inline-block font-mono text-lg md:text-xl text-primary hover:text-foreground transition-colors duration-300 border-b border-primary/50 hover:border-foreground pb-1"
        >
          jeneeldumasia18@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6 mt-10">
          <a href="https://github.com/jeneeldumasia" target="_blank" rel="noopener noreferrer"
            className="glass-card p-3 text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/jeneel" target="_blank" rel="noopener noreferrer"
            className="glass-card p-3 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <footer className="mt-6 text-center">
        <p className="font-mono text-xs text-muted-foreground/50">© 2026 Jeneel Dumasia · Surat, India</p>
      </footer>
    </section>
  );
};

export default WorkContact;
