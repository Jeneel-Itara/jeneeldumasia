import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Eyes on Wheels',
    description: 'Real-time drowsiness detection using ML on Raspberry Pi 4. Tracks eye-blink patterns and facial expressions via webcam.',
    stack: ['Python', 'OpenCV', 'NumPy', 'SciPy'],
    span: 'md:col-span-7',
  },
  {
    title: 'StockWise',
    description: 'Storage management platform — inventory tracking, automated billing, invoicing, client management, data visualization.',
    stack: ['JavaScript', 'HTML/CSS', 'MongoDB', 'NodeJS', 'Express'],
    span: 'md:col-span-5',
  },
  {
    title: 'KoffeeBrew',
    description: 'Android app for coffee enthusiasts — cafe discovery, user profiles, social features.',
    stack: ['Java', 'Android SDK', 'XML'],
    span: 'md:col-span-12',
  },
];

const WorkProjects = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="projects" className="px-4 md:px-6 pb-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-3">
        {projects.map((project, i) => (
          <div key={project.title} className={`project-card glass-card ${project.span} p-6 md:p-8 group`}>
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">project</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="font-mono text-[11px] text-foreground/70 px-2.5 py-1 bg-secondary/50 rounded-md border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProjects;
