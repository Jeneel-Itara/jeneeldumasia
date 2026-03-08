const VibeGamer = () => {
  return (
    <section id="vibe-gaming" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-vibe-display text-4xl md:text-5xl text-foreground mb-8">
          {'>'} VALORANT <span className="text-primary">(Eternally Climbing)</span>
        </h2>

        <div className="retro-card p-6 md:p-8 relative overflow-hidden vhs-glitch">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-primary/20 border-2 border-primary/50 flex items-center justify-center font-vibe-display text-3xl">
              ⚔
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="retro-card px-4 py-2">
                  <span className="font-vibe-display text-xs text-muted-foreground">RANK</span>
                  <p className="font-vibe-display text-lg text-foreground">Iron–Gold</p>
                </div>
                <div className="retro-card px-4 py-2">
                  <span className="font-vibe-display text-xs text-muted-foreground">STATUS</span>
                  <p className="font-vibe-display text-lg text-primary">Online</p>
                </div>
                <div className="retro-card px-4 py-2">
                  <span className="font-vibe-display text-xs text-muted-foreground">FUEL</span>
                  <p className="font-vibe-display text-lg text-foreground">Chai</p>
                </div>
              </div>
              <p className="font-vibe-display text-base md:text-lg text-muted-foreground leading-relaxed">
                Somewhere between Iron and Gold depending on the day, the teammates, and whether I've had my chai yet.
                I play because I genuinely love it. The rank is just a suggestion.
              </p>
            </div>
          </div>

          {/* VHS timestamp */}
          <div className="absolute bottom-2 right-3 font-vibe-display text-xs text-primary/50">
            REC ● 02:47 AM
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeGamer;
