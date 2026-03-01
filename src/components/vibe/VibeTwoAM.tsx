const VibeTwoAM = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-vibe-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          🌙 2am hits different
        </h2>
        <p className="font-vibe-display text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          Late nights are for chai, music, and either grinding ranked or doing nothing remotely productive. 
          Both are valid. Both are necessary. <span className="text-primary font-bold">No regrets, ever.</span>
        </p>
        
        {/* Night scene doodle */}
        <div className="relative w-48 h-32 mx-auto">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* Moon */}
            <circle cx="150" cy="30" r="20" fill="hsl(var(--accent))" />
            <circle cx="158" cy="25" r="18" fill="hsl(var(--card))" />
            {/* Stars */}
            <text x="30" y="25" fontSize="12" className="vibe-float">✨</text>
            <text x="80" y="15" fontSize="10" className="vibe-float" style={{ animationDelay: '0.5s' }}>⭐</text>
            <text x="120" y="55" fontSize="8" className="vibe-float" style={{ animationDelay: '1s' }}>✨</text>
            {/* Window/desk silhouette */}
            <rect x="50" y="70" width="100" height="50" rx="4" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <rect x="60" y="80" width="30" height="20" rx="2" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--foreground))" strokeWidth="1" />
            {/* Steam from chai */}
            <path d="M115 75 Q118 68, 115 60" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeLinecap="round" className="vibe-float" />
            <rect x="110" y="78" width="12" height="10" rx="2" fill="hsl(var(--primary) / 0.5)" stroke="hsl(var(--foreground))" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <footer className="mt-20 text-center">
        <p className="font-vibe-hand text-lg text-muted-foreground">
          made with chai & questionable sleep schedules ☕
        </p>
        <p className="text-xs text-muted-foreground font-vibe-display mt-2">
          © 2026 Jeneel Dumasia · Surat, India
        </p>
      </footer>
    </section>
  );
};

export default VibeTwoAM;
