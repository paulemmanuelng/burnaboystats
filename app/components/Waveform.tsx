// Animated waveform: a long strip of pulsing bars, like an audio file.
// Each bar gets a fixed "base height" plus its own animation timing so the
// whole thing ripples. Decorative → aria-hidden.
export default function Waveform({ bars = 64, className = "" }) {
  return (
    <div className={`waveform ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => {
        // A smooth, repeating height pattern using a sine wave.
        const base = 30 + Math.abs(Math.sin(i * 0.5)) * 70; // 30%–100%
        return (
          <span
            key={i}
            style={{
              height: `${base}%`,
              animationDelay: `${(i % 12) * 0.08}s`,
              animationDuration: `${1.2 + (i % 5) * 0.15}s`,
            }}
          />
        );
      })}
    </div>
  );
}
