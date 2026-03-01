const VibeChai = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-vibe-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          ☕ Chai Beats Everything
        </h2>

        {/* Tea glass illustration */}
        <div className="relative w-32 h-40 mx-auto my-10">
          <svg viewBox="0 0 100 130" className="w-full h-full">
            {/* Glass */}
            <path d="M25 20 L20 110 Q20 120 35 120 L65 120 Q80 120 80 110 L75 20" 
              fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
            {/* Tea color */}
            <path d="M27 50 L22 108 Q22 116 36 116 L64 116 Q78 116 78 108 L73 50 Z" 
              fill="hsl(var(--primary) / 0.3)" />
            {/* Steam */}
            <path d="M40 15 Q45 5, 42 -5" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" className="vibe-float" />
            <path d="M50 12 Q55 0, 52 -8" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" className="vibe-float" style={{ animationDelay: '0.5s' }} />
            <path d="M60 15 Q65 5, 62 -5" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" className="vibe-float" style={{ animationDelay: '1s' }} />
          </svg>
        </div>

        <p className="font-vibe-display text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          I love discovering new cafes and trying different coffees — genuinely. But at the end of the day, 
          a <span className="text-primary font-bold">cutting chai</span> from a roadside stall beats every cafe latte I've ever ordered. 
          Some things just can't be upgraded. Tea was here first. Tea will be here last.
        </p>
      </div>
    </section>
  );
};

export default VibeChai;
