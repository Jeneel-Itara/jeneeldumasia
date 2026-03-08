import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModeProvider, useMode } from '@/contexts/ModeContext';
import CustomCursor from '@/components/CustomCursor';
import CommandPalette from '@/components/CommandPalette';
import { useLenis } from '@/hooks/useLenis';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface ShowcaseSectionProps {
  title: string;
  subtitle: string;
  index: number;
  children: React.ReactNode;
  accent?: boolean;
}

const ShowcaseSection = ({ title, subtitle, index, children, accent }: ShowcaseSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Reveal heading
      gsap.from(el.querySelector('.showcase-heading'), {
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          end: 'top 40%',
          scrub: 1,
        },
        x: -80,
        opacity: 0,
        ease: 'power3.out',
      });

      // Reveal content
      gsap.from(el.querySelector('.showcase-content'), {
        scrollTrigger: {
          trigger: el,
          start: 'top 65%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        ease: 'power3.out',
      });

      // Parallax background
      gsap.to(el.querySelector('.showcase-bg'), {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        yPercent: -20,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Parallax background element */}
      <div className={`showcase-bg absolute inset-0 opacity-[0.03] ${accent ? 'dot-grid' : ''}`} />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="showcase-heading mb-8 md:mb-12">
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.5em] block mb-3">
            {String(index + 1).padStart(2, '0')} / component
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95]">
            {title}
          </h2>
          <p className="mt-3 font-body text-sm md:text-base text-muted-foreground max-w-lg">
            {subtitle}
          </p>
        </div>
        <div className="showcase-content">
          {children}
        </div>
      </div>
    </div>
  );
};

// Mini replicas of components for the showcase
const BentoGridDemo = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {['Identity', 'Status', 'Location', 'Links', 'Navigate', 'Build'].map((label, i) => (
      <div
        key={label}
        className={`glass-card p-6 ${i === 0 ? 'col-span-2 row-span-2 min-h-[200px]' : ''} flex flex-col justify-end group`}
      >
        <div className="dot-grid absolute inset-0 opacity-[0.04] rounded-lg" />
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">
          {String(i + 1).padStart(2, '0')}
        </span>
        <p className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {label}
        </p>
      </div>
    ))}
  </div>
);

const SkillRadarDemo = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {[
      { label: 'Build', icon: '⚡', items: ['Python', 'JavaScript', 'SQL'] },
      { label: 'Deploy', icon: '🚀', items: ['AWS', 'GCP', 'Linux'] },
      { label: 'Analyze', icon: '📊', items: ['OpenCV', 'NumPy', 'MongoDB'] },
      { label: 'Create', icon: '🔧', items: ['NodeJS', 'Express', 'RPi'] },
    ].map((g) => (
      <div key={g.label} className="glass-card p-5 group hover:glow-primary transition-all">
        <span className="text-2xl mb-3 block">{g.icon}</span>
        <p className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{g.label}</p>
        {g.items.map(s => (
          <p key={s} className="font-mono text-xs text-muted-foreground">{s}</p>
        ))}
      </div>
    ))}
  </div>
);

const ArchitectureDemo = () => (
  <div className="glass-card p-6 md:p-8">
    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-6">3-Tier AWS Architecture</p>
    <div className="space-y-3">
      {['Public — ALB / Load Balancer', 'Private — Frontend (EC2)', 'Private — Backend (EC2)', 'Private — Database (RDS)'].map((layer, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
          <div className="flex-1 glass-card p-3">
            <p className="font-mono text-xs text-foreground">{layer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RetroTVDemo = () => (
  <div className="retro-card p-8 md:p-12 max-w-xl mx-auto text-center relative">
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
      <div className="w-px h-8 bg-foreground/20 -rotate-[20deg] origin-bottom" />
      <div className="w-px h-8 bg-foreground/20 rotate-[20deg] origin-bottom" />
    </div>
    <div className="absolute top-3 right-4 w-2 h-2 rounded-full bg-primary status-dot" />
    <h3 className="font-vibe-display text-4xl md:text-6xl text-foreground retro-flicker">
      Lo-fi Retro
    </h3>
    <p className="font-vibe-display text-xl text-primary mt-2">VHS aesthetic</p>
    <p className="font-vibe-hand text-lg text-muted-foreground mt-4">
      Scanlines, grain, and warm nostalgia
    </p>
  </div>
);

const CassetteDemo = () => (
  <div className="retro-card p-6 max-w-md mx-auto">
    <div className="border-2 border-foreground/10 rounded p-4 relative">
      <p className="font-vibe-display text-xs text-muted-foreground text-center mb-3 uppercase tracking-widest">Mixtape Vol. 1</p>
      <div className="flex justify-center gap-6 mb-3">
        <div className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-primary/50 rounded-full" />
      </div>
    </div>
  </div>
);

const ShowcaseContent = () => {
  useLenis();
  useMagneticEffect();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <CommandPalette />

      {/* Floating back button */}
      <Link
        to="/"
        className="magnetic-btn fixed top-6 left-6 z-50 glass-card px-4 py-2 flex items-center gap-2 group"
      >
        <ArrowLeft size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">Back</span>
      </Link>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="dot-grid absolute inset-0 opacity-[0.03]" />
        <Sparkles className="text-primary mb-6" size={32} />
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-center leading-[0.9] text-foreground">
          Interactive
          <br />
          <span className="text-primary">Showcase</span>
        </h1>
        <p className="mt-6 font-body text-sm md:text-base text-muted-foreground text-center max-w-lg">
          Scroll to explore each component with GSAP-powered reveal animations, parallax effects, and smooth scrolling.
        </p>
        <div className="mt-12 flex items-center gap-2 text-muted-foreground">
          <kbd className="font-mono text-xs px-1.5 py-0.5 bg-secondary rounded border border-border">⌘K</kbd>
          <span className="font-mono text-xs">to navigate</span>
        </div>
        <div className="absolute bottom-12 font-mono text-xs text-muted-foreground/40 animate-bounce">↓ scroll</div>
      </section>

      {/* Showcase sections */}
      <ShowcaseSection
        title="Bento Grid"
        subtitle="A modular grid layout inspired by Apple's design language. Glass cards with backdrop blur and subtle hover states."
        index={0}
        accent
      >
        <BentoGridDemo />
      </ShowcaseSection>

      <ShowcaseSection
        title="Skill Radar"
        subtitle="Interactive skill categories that expand on focus, using glassmorphic cards with glow effects."
        index={1}
      >
        <SkillRadarDemo />
      </ShowcaseSection>

      <ShowcaseSection
        title="Architecture"
        subtitle="AWS 3-tier architecture visualization. Clean, layered representation of cloud infrastructure."
        index={2}
        accent
      >
        <ArchitectureDemo />
      </ShowcaseSection>

      <ShowcaseSection
        title="Retro TV"
        subtitle="Lo-fi retro aesthetic with VHS tracking effects, scanlines, and CRT-inspired animations."
        index={3}
      >
        <RetroTVDemo />
      </ShowcaseSection>

      <ShowcaseSection
        title="Cassette Tape"
        subtitle="A nostalgic music player interface with analog tape reel aesthetics and warm color palettes."
        index={4}
        accent
      >
        <CassetteDemo />
      </ShowcaseSection>

      {/* Footer CTA */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6">
        <p className="font-mono text-xs text-muted-foreground/40 mb-4">// end of showcase</p>
        <Link
          to="/"
          className="magnetic-btn glass-card px-8 py-4 font-display text-lg font-bold text-primary hover:glow-primary transition-all"
        >
          ← Back to Portfolio
        </Link>
      </section>
    </div>
  );
};

const Showcase = () => (
  <ModeProvider>
    <ShowcaseContent />
  </ModeProvider>
);

export default Showcase;
