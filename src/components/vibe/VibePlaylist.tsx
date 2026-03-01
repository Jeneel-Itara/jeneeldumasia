const VibePlaylist = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-vibe-display text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
          🎵 My Playlist Makes No Sense
          <span className="block text-xl md:text-2xl text-primary mt-1">(And I'm Proud)</span>
        </h2>

        {/* Cassette tape illustration */}
        <div className="doodle-border bg-background p-6 md:p-8 max-w-md mx-auto mb-8 vibe-wobble">
          <svg viewBox="0 0 300 180" className="w-full">
            {/* Cassette body */}
            <rect x="10" y="10" width="280" height="160" rx="10" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="3" />
            {/* Label area */}
            <rect x="40" y="25" width="220" height="80" rx="4" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="2" />
            {/* Label text */}
            <text x="150" y="55" textAnchor="middle" fill="hsl(var(--primary))" fontSize="14" fontFamily="Caveat" fontWeight="bold">JENEEL'S MIX</text>
            <text x="150" y="75" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontFamily="Caveat">Gujarati Folk → Metal → Qawwali → Country</text>
            <text x="150" y="92" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="Caveat">no algorithm can decode this</text>
            {/* Reels */}
            <circle cx="110" cy="140" r="18" fill="hsl(var(--background))" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <circle cx="110" cy="140" r="6" fill="hsl(var(--foreground))" />
            <circle cx="190" cy="140" r="18" fill="hsl(var(--background))" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <circle cx="190" cy="140" r="6" fill="hsl(var(--foreground))" />
            {/* Tape window */}
            <rect x="120" y="128" width="60" height="24" rx="2" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
          </svg>
        </div>

        <p className="font-vibe-display text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
          Gujarati folk at 8am. Metal by noon. Qawwali when it's raining. Country on a road trip. 
          No streaming algorithm has figured me out and I genuinely intend to keep it that way. 
          <span className="text-primary font-bold"> The range is the point.</span>
        </p>
      </div>
    </section>
  );
};

export default VibePlaylist;
