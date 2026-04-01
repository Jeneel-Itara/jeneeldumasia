const VibeHero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Doodle decorations */}
      <div className="absolute top-20 left-10 text-6xl vibe-float" style={{ animationDelay: '0s' }}>🍵</div>
      <div className="absolute top-40 right-16 text-4xl vibe-float" style={{ animationDelay: '1s' }}>🎮</div>
      <div className="absolute bottom-32 left-20 text-5xl vibe-float" style={{ animationDelay: '2s' }}>🎵</div>
      <div className="absolute bottom-20 right-10 text-4xl vibe-float" style={{ animationDelay: '0.5s' }}>☕</div>

      {/* Squiggly line decorations */}
      <svg className="absolute top-10 left-1/4 w-32 opacity-20" viewBox="0 0 100 20">
        <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
      </svg>

      <div className="relative z-10 text-center">
        <h1 className="font-vibe-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight vibe-pop-in">
          Hi, I'm Jeneel.
        </h1>
        <p className="font-vibe-display text-2xl md:text-3xl text-primary mt-2 vibe-pop-in" style={{ animationDelay: '0.2s' }}>
          The other one.
        </p>
        <p className="font-vibe-hand text-xl md:text-2xl text-muted-foreground mt-6 max-w-lg mx-auto vibe-pop-in" style={{ animationDelay: '0.4s' }}>
          No AWS here. Just chai, Valorant, and a music taste that confuses every algorithm.
        </p>
      </div>

      {/* Wavy bottom border */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0 30 Q 360 0, 720 30 T 1440 30 L 1440 60 L 0 60 Z" fill="hsl(var(--card))" />
      </svg>
    </section>
  );
};

export default VibeHero;
