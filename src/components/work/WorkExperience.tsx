import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="experience" className="px-4 md:px-6 pb-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-3">
        {/* Role card */}
        <div className="exp-card glass-card md:col-span-5 p-8">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-6">// experience</p>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">Technical Intern</h3>
          <p className="font-display text-xl text-primary mt-2">IAMOPS</p>
          <p className="font-mono text-xs text-muted-foreground mt-2">Jan 2026 – Present · Surat, Gujarat</p>
          <p className="text-muted-foreground font-body text-sm mt-6 leading-relaxed">
            IAMOPS is a full DevOps company. Part of the NOC (Network Operations Center) team.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Real client infrastructure & system monitoring',
              'Deployed secure 3-tier architecture on AWS',
              'EC2, ECS, S3, VPC, Route 53, EFS, Cost Explorer',
              'Cloud networking, HA design, DevOps tooling',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-body text-xs text-foreground/80">
                <span className="text-primary mt-0.5 text-[10px]">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture diagram card */}
        <div className="exp-card glass-card md:col-span-7 p-6">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-4">3-Tier AWS Architecture</p>
          <svg viewBox="0 0 800 480" className="w-full" fill="none">
            {/* VPC */}
            <rect x="30" y="10" width="740" height="460" rx="8" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 4" opacity="0.3" />
            <text x="50" y="32" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="3" opacity="0.6">VPC</text>

            {/* Internet */}
            <rect x="310" y="22" width="180" height="32" rx="16" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="358" y="43" fill="hsl(var(--foreground))" fontSize="11" fontFamily="JetBrains Mono">Internet</text>

            <line x1="400" y1="54" x2="400" y2="88" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="396,86 400,94 404,86" fill="hsl(var(--primary))" />

            {/* Public Subnet */}
            <rect x="60" y="92" width="680" height="70" rx="6" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
            <text x="78" y="110" fill="hsl(var(--primary))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2" opacity="0.7">PUBLIC</text>
            <rect x="280" y="108" width="240" height="38" rx="6" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="320" y="132" fill="hsl(var(--foreground))" fontSize="11" fontFamily="JetBrains Mono">Load Balancer (ALB)</text>

            <line x1="400" y1="162" x2="400" y2="195" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="396,193 400,201 404,193" fill="hsl(var(--primary))" />

            {/* Private Frontend */}
            <rect x="60" y="198" width="680" height="70" rx="6" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
            <text x="78" y="216" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2" opacity="0.6">PRIVATE — FRONTEND</text>
            <rect x="300" y="218" width="200" height="36" rx="6" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="340" y="241" fill="hsl(var(--foreground))" fontSize="11" fontFamily="JetBrains Mono">Frontend (EC2)</text>

            <line x1="400" y1="268" x2="400" y2="298" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="396,296 400,304 404,296" fill="hsl(var(--primary))" />

            {/* Private Backend */}
            <rect x="60" y="302" width="680" height="70" rx="6" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
            <text x="78" y="320" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2" opacity="0.6">PRIVATE — BACKEND</text>
            <rect x="300" y="322" width="200" height="36" rx="6" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="338" y="345" fill="hsl(var(--foreground))" fontSize="11" fontFamily="JetBrains Mono">Backend (EC2)</text>

            <line x1="400" y1="372" x2="400" y2="400" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="396,398 400,406 404,398" fill="hsl(var(--primary))" />

            {/* Private Database */}
            <rect x="60" y="404" width="680" height="54" rx="6" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
            <text x="78" y="422" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="2" opacity="0.6">PRIVATE — DATABASE</text>
            <rect x="310" y="418" width="180" height="30" rx="6" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="362" y="438" fill="hsl(var(--foreground))" fontSize="11" fontFamily="JetBrains Mono">RDS / DB</text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
