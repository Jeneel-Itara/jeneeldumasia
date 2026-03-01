const VibeGamer = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-vibe-display text-3xl md:text-5xl font-bold text-foreground mb-8 vibe-wobble inline-block">
          🎮 VALORANT <span className="text-primary">(Eternally Climbing)</span>
        </h2>

        {/* Gaming profile card */}
        <div className="doodle-border bg-background p-6 md:p-8 relative overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-2 right-2 text-2xl">⚔️</div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-4xl vibe-wobble">
              🎯
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-muted px-4 py-2 rounded-xl">
                  <span className="text-xs text-muted-foreground font-vibe-display">RANK</span>
                  <p className="font-vibe-display font-bold text-foreground">Iron–Gold 🤷</p>
                </div>
                <div className="bg-muted px-4 py-2 rounded-xl">
                  <span className="text-xs text-muted-foreground font-vibe-display">STATUS</span>
                  <p className="font-vibe-display font-bold text-primary">Still Playing</p>
                </div>
                <div className="bg-muted px-4 py-2 rounded-xl">
                  <span className="text-xs text-muted-foreground font-vibe-display">FUEL</span>
                  <p className="font-vibe-display font-bold text-foreground">Chai ☕</p>
                </div>
              </div>
              <p className="font-vibe-display text-muted-foreground leading-relaxed">
                Somewhere between Iron and Gold depending on the day, the teammates, and whether I've had my chai yet. 
                I've been playing long enough to know what I'm doing wrong and stubborn enough to keep doing it anyway. 
                I play because I genuinely love it. The rank is just a suggestion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeGamer;
