import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkAbout = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="px-4 md:px-6 pb-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-3">
        {/* Main about */}
        <div className="about-card glass-card md:col-span-8 p-8 md:p-10">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-6">// about</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Hi, I'm Jeneel.</h2>
          <div className="space-y-4 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
            <p>Computer Science student at P. P. Savani University, Surat — and DevOps Intern at IAMOPS.</p>
            <p>Developing strong foundations in Linux, networking, cloud infrastructure, and system design.</p>
            <p>At IAMOPS, I'm part of the NOC team, gaining hands-on exposure to client infrastructure and system monitoring.</p>
            <p>Currently learning: AWS architecture, monitoring systems, and incident response fundamentals.</p>
          </div>
        </div>

        {/* Terminal card */}
        <div className="about-card glass-card md:col-span-4 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
            </div>
            <div className="font-mono text-xs space-y-1.5 text-muted-foreground">
              <p><span className="text-primary">$</span> whoami</p>
              <p className="text-foreground pl-2">jeneel.dumasia</p>
              <p><span className="text-primary">$</span> uptime</p>
              <p className="text-foreground pl-2">3+ months @IAMOPS</p>
              <p><span className="text-primary">$</span> cat interests.txt</p>
              <p className="text-foreground pl-2">devops, cloud, networking</p>
              <p><span className="text-primary">$</span> echo $STATUS</p>
              <p className="text-foreground pl-2">still learning. always improving.<span className="inline-block w-1.5 h-3.5 bg-primary ml-0.5 animate-pulse" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAbout;
