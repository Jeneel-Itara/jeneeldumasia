const VibePlaylist = () => {
  return (
    <section id="vibe-playlist" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-vibe-display text-4xl md:text-5xl text-foreground mb-2 text-center">
          {'>'} My Playlist Makes No Sense
        </h2>
        <p className="font-vibe-display text-xl text-primary text-center mb-8">(And I'm Proud)</p>

        {/* Cassette tape - retro style */}
        <div className="retro-card p-6 max-w-md mx-auto mb-8 vhs-glitch">
          <div className="border-2 border-foreground/15 p-4 bg-muted/30">
            <p className="font-vibe-display text-center text-primary text-lg mb-1">JENEEL'S MIX VOL. 1</p>
            <p className="font-vibe-display text-center text-muted-foreground text-sm">
              Gujarati Folk → Metal → Qawwali → Country
            </p>
            <p className="font-vibe-display text-center text-muted-foreground/50 text-xs mt-1">
              // no algorithm can decode this
            </p>
          </div>
          <div className="flex justify-center gap-12 mt-4">
            <div className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-foreground/30" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-foreground/30" />
            </div>
          </div>
          {/* Play controls */}
          <div className="flex justify-center gap-4 mt-4 font-vibe-display text-muted-foreground text-lg">
            <span className="hover:text-primary cursor-pointer">⏮</span>
            <span className="hover:text-primary cursor-pointer">▶</span>
            <span className="hover:text-primary cursor-pointer">⏭</span>
          </div>
        </div>

        <p className="font-vibe-display text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
          Gujarati folk at 8am. Metal by noon. Qawwali when it's raining. Country on a road trip.
          <span className="text-primary"> The range is the point.</span>
        </p>
      </div>
    </section>
  );
};

export default VibePlaylist;
