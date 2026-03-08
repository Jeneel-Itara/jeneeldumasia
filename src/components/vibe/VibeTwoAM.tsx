const VibeTwoAM = () => {
  return (
    <section id="vibe-2am" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-vibe-display text-4xl md:text-5xl text-foreground mb-8">
          {'>'} 2am hits different_
        </h2>

        {/* Night scene ASCII */}
        <pre className="font-vibe-display text-primary/40 text-xs md:text-sm mx-auto inline-block text-left mb-8 retro-flicker">
{`     *  .  *
  .    *    .
    ____
   |    |  ☕
   | __ |
   |/  \\|
   '----'`}
        </pre>

        <p className="font-vibe-display text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          Late nights are for chai, music, and either grinding ranked or doing nothing remotely productive.
          Both are valid. Both are necessary. <span className="text-primary">No regrets, ever.</span>
        </p>
      </div>

      <footer className="mt-16 text-center">
        <p className="font-vibe-hand text-lg text-muted-foreground">
          made with chai & questionable sleep schedules
        </p>
        <p className="font-vibe-display text-xs text-muted-foreground/50 mt-2">
          © 2026 Jeneel Dumasia · Surat, India
        </p>
        <div className="mt-4 font-vibe-display text-xs text-primary/30">
          ▓▒░ END OF TAPE ░▒▓
        </div>
      </footer>
    </section>
  );
};

export default VibeTwoAM;
