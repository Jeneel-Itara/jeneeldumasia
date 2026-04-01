import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certs = [
  { title: 'The Bits and Bytes of Computer Networking', issuer: 'Google' },
  { title: 'AWS Academy Cloud Foundations', issuer: 'AWS' },
  { title: 'Python for Everybody', issuer: 'University of Michigan' },
];

const WorkCertifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <span className="text-[11px] tracking-[0.5em] uppercase text-muted-foreground font-body">Certifications</span>
        <div className="w-12 h-px bg-primary mt-3" />
      </div>

      <div className="space-y-8">
        {certs.map((cert, i) => (
          <div key={i} className="cert-item flex items-baseline gap-6 border-b border-border pb-6">
            <span className="text-xs text-muted-foreground font-body w-6">0{i + 1}</span>
            <div>
              <h4 className="font-display text-xl md:text-2xl text-foreground">{cert.title}</h4>
              <p className="text-sm text-primary font-body mt-1">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkCertifications;
