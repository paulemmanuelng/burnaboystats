// A spinning vinyl record, drawn entirely in SVG (no image file needed).
// The outer wrapper gets the "vinyl" class which spins it (see globals.css).
export default function Vinyl({ size = 260, className = "" }) {
  return (
    <svg
      className={`vinyl ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Spinning vinyl record"
    >
      {/* Record body */}
      <circle cx="100" cy="100" r="98" fill="#111114" />
      <circle cx="100" cy="100" r="98" fill="none" stroke="#2a2a31" strokeWidth="1" />
      {/* Grooves */}
      {[88, 78, 68, 58].map((r) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.5"
        />
      ))}
      {/* A gold sheen sweeping across the record */}
      <circle cx="100" cy="100" r="92" fill="url(#sheen)" opacity="0.5" />
      {/* Centre label */}
      <circle cx="100" cy="100" r="40" fill="url(#label)" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="#1a1303" strokeWidth="1" />
      {/* Spindle hole */}
      <circle cx="100" cy="100" r="5" fill="#09090b" />
      <defs>
        <linearGradient id="label" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffcf6b" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(232,176,75,0.35)" />
          <stop offset="45%" stopColor="transparent" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
