const VibeChai = () => {
  return (
    <section id="vibe-chai" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-vibe-display text-4xl md:text-5xl text-foreground mb-6">
          {'>'} Chai {'>'} Everything
        </h2>

        {/* ASCII art tea cup */}
        <pre className="font-vibe-display text-primary/60 text-sm md:text-base mx-auto inline-block text-left my-8 retro-flicker">
{`    ( (
     ) )
  ._______.
  |       |]
  \\       /
   \`-----'`}
        </pre>

        <p className="font-vibe-display text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          I love discovering new cafes and trying different coffees — genuinely. But at the end of the day,
          a <span className="text-primary">cutting chai</span> from a roadside stall beats every cafe latte I've ever ordered.
          Tea was here first. Tea will be here last.
        </p>
      </div>
    </section>
  );
};

export default VibeChai;
