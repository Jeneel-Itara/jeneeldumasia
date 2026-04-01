import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Eyes on Wheels',
    description: 'Real-time drowsiness detection using machine learning on Raspberry Pi 4. Tracks eye-blink patterns and facial expressions via webcam.',
    stack: ['Python', 'OpenCV', 'NumPy', 'SciPy'],
  },
  {
    title: 'StockWise',
    description: 'Storage management platform — inventory tracking, automated billing, invoicing, client management, data visualization.',
    stack: ['JavaScript', 'HTML/CSS', 'MongoDB', 'NodeJS', 'Express'],
  },
  {
    title: 'KoffeeBrew',
    description: 'Android app for coffee enthusiasts — cafe discovery, user profiles, social features.',
    stack: ['Java', 'Android SDK', 'XML'],
  },
];

const WorkProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <span className="text-[11px] tracking-[0.5em] uppercase text-muted-foreground font-body">Projects</span>
        <div className="w-12 h-px bg-primary mt-3" />
      </div>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="project-card group border-t border-border pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <span className="text-xs text-muted-foreground font-body">0{i + 1}</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body mt-4 max-w-xl text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:max-w-[200px]">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-body text-foreground border border-border px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProjects;
