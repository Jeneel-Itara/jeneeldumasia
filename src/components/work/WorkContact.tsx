import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WorkContact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6">
      <div className="contact-content max-w-5xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
          Let's build something.
        </h2>
        <a
          href="mailto:jeneeldumasia18@gmail.com"
          data-cursor-label="MAIL"
          className="inline-block font-body text-xl md:text-3xl text-primary hover:text-foreground transition-colors duration-300 border-b-2 border-primary hover:border-foreground pb-1"
        >
          jeneeldumasia18@gmail.com
        </a>

        <div className="flex items-center justify-center gap-8 mt-12">
          <a href="https://github.com/jeneeldumasia" target="_blank" rel="noopener noreferrer" data-cursor-label="GITHUB" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/jeneel" target="_blank" rel="noopener noreferrer" data-cursor-label="LINKEDIN" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={22} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm font-body">
          <MapPin size={14} />
          <span>Surat, Gujarat, India</span>
        </div>
      </div>

      <footer className="mt-24 text-center text-xs text-muted-foreground font-body tracking-wider">
        © 2026 Jeneel Dumasia · Surat, India
      </footer>
    </section>
  );
};

export default WorkContact;
