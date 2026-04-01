import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.aws-diagram', {
        scrollTrigger: {
          trigger: '.aws-diagram',
          start: 'top 75%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <span className="text-[11px] tracking-[0.5em] uppercase text-muted-foreground font-body">Experience</span>
        <div className="w-12 h-px bg-primary mt-3" />
      </div>

      <div className="exp-content">
        <div className="mb-6">
          <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground">Technical Intern</h3>
          <p className="font-display text-xl md:text-2xl text-primary mt-2">IAMOPS</p>
          <p className="text-sm text-muted-foreground font-body tracking-wider mt-2">
            January 2026 – Present · Surat, Gujarat
          </p>
        </div>

        <p className="text-muted-foreground font-body text-base md:text-lg mb-8 max-w-3xl">
          IAMOPS is a full DevOps company. Jeneel works as part of the NOC (Network Operations Center) team.
        </p>

        <ul className="space-y-4 mb-16">
          {[
            'Gaining hands-on exposure to real client infrastructure and system monitoring',
            'Deployed a secure 3-tier application architecture on AWS — app components in private subnets, Application Load Balancer in public subnet',
            'Worked with EC2, ECS, S3, VPC, Route 53, EFS, and AWS Cost Explorer',
            'Hands-on experience with cloud networking, high availability design, cost monitoring, and DevOps tooling in production',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground font-body text-sm md:text-base">
              <span className="text-primary mt-1.5 text-xs">◆</span>
              {item}
            </li>
          ))}
        </ul>

        {/* AWS 3-Tier Architecture Diagram */}
        <div className="aws-diagram p-8 rounded-lg bg-card border border-border">
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6 font-body">3-Tier AWS Architecture</p>
          <svg viewBox="0 0 800 520" className="w-full" fill="none">
            {/* VPC boundary */}
            <rect x="30" y="10" width="740" height="500" rx="6" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="8 4" opacity="0.4" />
            <text x="50" y="35" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="Space Grotesk" letterSpacing="3">VPC</text>

            {/* Internet / Users */}
            <rect x="310" y="25" width="180" height="36" rx="18" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="360" y="48" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">Internet / Users</text>

            {/* Arrow: Internet → ALB */}
            <line x1="400" y1="61" x2="400" y2="95" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="395,93 400,103 405,93" fill="hsl(var(--primary))" />

            {/* Public Subnet — Load Balancer */}
            <rect x="60" y="100" width="680" height="80" rx="4" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="80" y="120" fill="hsl(var(--primary))" fontSize="10" fontFamily="Space Grotesk" letterSpacing="3">PUBLIC SUBNET</text>
            <rect x="280" y="118" width="240" height="44" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="300" y="145" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">Application Load Balancer</text>

            {/* Arrow: ALB → Frontend */}
            <line x1="400" y1="180" x2="400" y2="215" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="395,213 400,223 405,213" fill="hsl(var(--primary))" />

            {/* Private Subnet — Frontend */}
            <rect x="60" y="220" width="680" height="80" rx="4" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 3" />
            <text x="80" y="240" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="Space Grotesk" letterSpacing="3">PRIVATE SUBNET — FRONTEND</text>
            <rect x="300" y="248" width="200" height="40" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="340" y="273" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">Frontend (EC2)</text>

            {/* Arrow: Frontend → Backend */}
            <line x1="400" y1="300" x2="400" y2="335" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="395,333 400,343 405,333" fill="hsl(var(--primary))" />

            {/* Private Subnet — Backend */}
            <rect x="60" y="340" width="680" height="80" rx="4" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 3" />
            <text x="80" y="360" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="Space Grotesk" letterSpacing="3">PRIVATE SUBNET — BACKEND</text>
            <rect x="300" y="368" width="200" height="40" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="335" y="393" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">Backend (EC2)</text>

            {/* Arrow: Backend → Database */}
            <line x1="400" y1="420" x2="400" y2="450" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="395,448 400,458 405,448" fill="hsl(var(--primary))" />

            {/* Private Subnet — Database */}
            <rect x="60" y="455" width="680" height="50" rx="4" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 3" />
            <text x="80" y="475" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="Space Grotesk" letterSpacing="3">PRIVATE SUBNET — DATABASE</text>
            <rect x="310" y="464" width="180" height="34" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="355" y="486" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">RDS / DB</text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
