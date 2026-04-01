import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "Hi, I'm Jeneel.",
  "Computer Science student at P. P. Savani University, Surat — and DevOps Intern at IAMOPS.",
  "Developing strong foundations in Linux, networking, cloud infrastructure, and system design.",
  "At IAMOPS, I'm part of the NOC team, gaining hands-on exposure to client infrastructure and system monitoring.",
  "Currently learning: AWS architecture, monitoring systems, and incident response fundamentals.",
  "Still learning. Always improving.",
];

const WorkAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="text-[11px] tracking-[0.5em] uppercase text-muted-foreground font-body">About</span>
        <div className="w-12 h-px bg-primary mt-3" />
      </div>
      <div className="space-y-6">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`about-line font-body leading-relaxed ${
              i === 0 ? 'text-2xl md:text-3xl font-display font-semibold text-foreground' :
              i === lines.length - 1 ? 'text-xl md:text-2xl font-display italic text-primary' :
              'text-base md:text-lg text-muted-foreground'
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default WorkAbout;
