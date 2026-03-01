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
          <svg viewBox="0 0 800 400" className="w-full" fill="none">
            {/* Public Subnet */}
            <rect x="50" y="30" width="700" height="100" rx="4" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="70" y="55" fill="hsl(var(--muted-foreground))" fontSize="11" fontFamily="Space Grotesk">PUBLIC SUBNET</text>
            <rect x="280" y="60" width="240" height="50" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="320" y="90" fill="hsl(var(--foreground))" fontSize="13" fontFamily="Space Grotesk">Application Load Balancer</text>

            {/* Arrow */}
            <line x1="400" y1="130" x2="400" y2="170" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="395,168 400,178 405,168" fill="hsl(var(--primary))" />

            {/* Private Subnet - App */}
            <rect x="50" y="180" width="700" height="100" rx="4" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 3" />
            <text x="70" y="205" fill="hsl(var(--muted-foreground))" fontSize="11" fontFamily="Space Grotesk">PRIVATE SUBNET — APPLICATION</text>
            <rect x="150" y="215" width="130" height="45" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="175" y="243" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">EC2 / ECS</text>
            <rect x="340" y="215" width="130" height="45" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="375" y="243" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">S3 / EFS</text>
            <rect x="530" y="215" width="130" height="45" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="548" y="243" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">Route 53 / VPC</text>

            {/* Arrow */}
            <line x1="400" y1="280" x2="400" y2="320" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <polygon points="395,318 400,328 405,318" fill="hsl(var(--primary))" />

            {/* Private Subnet - Data */}
            <rect x="50" y="330" width="700" height="60" rx="4" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="6 3" />
            <text x="70" y="355" fill="hsl(var(--muted-foreground))" fontSize="11" fontFamily="Space Grotesk">PRIVATE SUBNET — DATA</text>
            <rect x="340" y="340" width="130" height="38" rx="4" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
            <text x="365" y="364" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk">Cost Explorer</text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
