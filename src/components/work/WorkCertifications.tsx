import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certs = [
  { title: 'The Bits and Bytes of Computer Networking', issuer: 'Google', icon: '🌐' },
  { title: 'AWS Academy Cloud Foundations', issuer: 'AWS', icon: '☁️' },
  { title: 'Python for Everybody', issuer: 'University of Michigan', icon: '🐍' },
];

const WorkCertifications = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="certifications" className="px-4 md:px-6 pb-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {certs.map((cert, i) => (
          <div key={i} className="cert-card glass-card p-6 group">
            <span className="text-2xl mb-4 block">{cert.icon}</span>
            <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
              {cert.title}
            </h4>
            <p className="font-mono text-xs text-primary">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkCertifications;
