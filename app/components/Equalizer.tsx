// Animated equalizer: a row of bars that bounce like a music visualiser.
// Pure CSS animation (see globals.css). Decorative, so aria-hidden.
export default function Equalizer({ bars = 7, className = "" }) {
  return (
    <span className={`equalizer ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        // Each bar starts at a slightly different time → lively wave effect.
        <span key={i} style={{ animationDelay: `${(i % bars) * 0.13}s` }} />
      ))}
    </span>
  );
}
