const VibePeople = () => {
  return (
    <section id="vibe-people" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-vibe-display text-4xl md:text-5xl text-foreground mb-8">
          {'>'} My People_
        </h2>
        <div className="retro-card p-8 max-w-xl mx-auto">
          <p className="font-vibe-display text-lg md:text-xl text-muted-foreground leading-relaxed">
            I recharge around my friends, not away from them. Late nights, chai runs,
            doing absolutely nothing in particular — that's the good stuff.
            The best memories involve no plan, no agenda, and someone suggesting
            <span className="text-primary"> chai at midnight</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VibePeople;
