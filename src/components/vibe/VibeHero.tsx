const VibeHero = () => {
  return (
    <section id="vibe-hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Retro TV frame */}
      <div className="retro-card p-8 md:p-12 max-w-2xl w-full text-center relative">
        {/* TV antenna */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
          <div className="w-px h-8 bg-foreground/20 -rotate-[20deg] origin-bottom" />
          <div className="w-px h-8 bg-foreground/20 rotate-[20deg] origin-bottom" />
        </div>

        {/* Power LED */}
        <div className="absolute top-3 right-4 w-2 h-2 rounded-full bg-primary status-dot" />

        <h1 className="font-vibe-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-none retro-flicker">
          Hi, I'm Jeneel.
        </h1>
        <p className="font-vibe-display text-2xl md:text-3xl text-primary mt-2">
          The other one.
        </p>
        <p className="font-vibe-hand text-xl md:text-2xl text-muted-foreground mt-6 max-w-lg mx-auto">
          No AWS here. Just chai, Valorant, and a music taste that confuses every algorithm.
        </p>

        {/* Static noise bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      {/* Decorative pixels */}
      <div className="absolute top-20 left-10 font-vibe-display text-4xl text-primary/30 retro-flicker">▓▒░</div>
      <div className="absolute bottom-20 right-10 font-vibe-display text-4xl text-primary/30 retro-flicker" style={{ animationDelay: '2s' }}>░▒▓</div>
    </section>
  );
};

export default VibeHero;
