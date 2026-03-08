import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  { label: 'Build', icon: '⚡', skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Java'] },
  { label: 'Deploy', icon: '🚀', skills: ['AWS (EC2, ECS, S3, VPC, Route 53, EFS)', 'GCP', 'Linux', 'Git & GitHub'] },
  { label: 'Analyze', icon: '📊', skills: ['OpenCV', 'NumPy', 'SciPy', 'MongoDB'] },
  { label: 'Create', icon: '🔧', skills: ['NodeJS', 'Express', 'Android SDK', 'Raspberry Pi'] },
];

const WorkSkills = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className="px-4 md:px-6 pb-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {skillGroups.map((group, i) => (
          <button
            key={group.label}
            onClick={() => setActive(i)}
            className={`skill-card glass-card p-5 text-left transition-all duration-300 ${
              active === i ? 'glow-primary border-primary/30' : ''
            }`}
          >
            <span className="text-2xl mb-3 block">{group.icon}</span>
            <p className={`font-display text-lg font-bold mb-3 transition-colors ${active === i ? 'text-primary' : 'text-foreground'}`}>
              {group.label}
            </p>
            <div className={`space-y-1 transition-all duration-300 ${active === i ? 'opacity-100 max-h-[300px]' : 'opacity-40 max-h-[80px] overflow-hidden'}`}>
              {group.skills.map(skill => (
                <p key={skill} className="font-mono text-xs text-muted-foreground">{skill}</p>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default WorkSkills;
