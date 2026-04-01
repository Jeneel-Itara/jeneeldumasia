import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  { label: 'Build', skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Java'] },
  { label: 'Deploy', skills: ['AWS (EC2, ECS, S3, VPC, Route 53, EFS)', 'GCP', 'Linux', 'Git & GitHub'] },
  { label: 'Analyze', skills: ['OpenCV', 'NumPy', 'SciPy', 'MongoDB'] },
  { label: 'Create', skills: ['NodeJS', 'Express', 'Android SDK', 'Raspberry Pi'] },
];

const WorkSkills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeGroup, setActiveGroup] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-section', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <span className="text-[11px] tracking-[0.5em] uppercase text-muted-foreground font-body">Skills</span>
        <div className="w-12 h-px bg-primary mt-3" />
      </div>

      <div className="skills-section grid md:grid-cols-[200px_1fr] gap-12">
        {/* Category tabs */}
        <div className="flex md:flex-col gap-4">
          {skillGroups.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setActiveGroup(i)}
              className={`text-left font-display text-lg md:text-xl transition-all duration-300 magnetic-btn ${
                activeGroup === i
                  ? 'text-primary translate-x-2'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeGroup === i && <span className="text-primary mr-2">—</span>}
              {group.label}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="min-h-[200px]">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {skillGroups[activeGroup].skills.map((skill, i) => (
              <span
                key={skill}
                className="font-body text-lg md:text-2xl text-foreground"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSkills;
