// Generates original, abstract album-cover art with CSS gradients + an SVG
// "music motif" per cover — so we get a varied discography wall without using
// any copyrighted cover images.
const PALETTES = [
  ["#e8b04b", "#c0392b"],
  ["#6d28d9", "#db2777"],
  ["#0ea5e9", "#1e3a8a"],
  ["#f97316", "#7c2d12"],
  ["#10b981", "#064e3b"],
  ["#f43f5e", "#4c0519"],
  ["#eab308", "#713f12"],
  ["#8b5cf6", "#312e81"],
];

// A different music-related graphic for each cover (chosen by index).
function Motif({ index }) {
  const W = "#ffffff";
  const svg = (children) => (
    <svg
      className="albumCoverArt"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {children}
    </svg>
  );

  switch (index % 8) {
    case 0: // Vinyl record
      return svg(
        <>
          <g fill="none" stroke={W} strokeOpacity="0.28" strokeWidth="2">
            <circle cx="74" cy="30" r="28" />
            <circle cx="74" cy="30" r="21" />
            <circle cx="74" cy="30" r="14" />
            <circle cx="74" cy="30" r="7" />
          </g>
          <circle cx="74" cy="30" r="3" fill={W} fillOpacity="0.4" />
        </>
      );
    case 1: // Equalizer bars
      return svg(
        <g fill={W} fillOpacity="0.26">
          <rect x="16" y="34" width="7" height="22" rx="3.5" />
          <rect x="29" y="22" width="7" height="34" rx="3.5" />
          <rect x="42" y="10" width="7" height="46" rx="3.5" />
          <rect x="55" y="26" width="7" height="30" rx="3.5" />
          <rect x="68" y="16" width="7" height="40" rx="3.5" />
          <rect x="81" y="30" width="7" height="26" rx="3.5" />
        </g>
      );
    case 2: // Waveform
      return svg(
        <g fill="none" stroke={W} strokeWidth="3" strokeLinecap="round">
          <path d="M-2,34 Q12,16 26,34 T54,34 T82,34 T110,34" strokeOpacity="0.3" />
          <path d="M-2,48 Q12,66 26,48 T54,48 T82,48 T110,48" strokeOpacity="0.16" />
        </g>
      );
    case 3: // Sound waves from the top-right corner
      return svg(
        <g fill="none" stroke={W} strokeWidth="2.5" strokeOpacity="0.26">
          <circle cx="100" cy="6" r="20" />
          <circle cx="100" cy="6" r="34" />
          <circle cx="100" cy="6" r="48" />
          <circle cx="100" cy="6" r="62" />
        </g>
      );
    case 4: // Beamed eighth notes
      return svg(
        <g fill={W} fillOpacity="0.26">
          <rect x="40" y="22" width="4" height="44" />
          <rect x="68" y="16" width="4" height="44" />
          <rect x="40" y="16" width="32" height="7" />
          <ellipse cx="36" cy="66" rx="9" ry="6.5" />
          <ellipse cx="64" cy="60" rx="9" ry="6.5" />
        </g>
      );
    case 5: // Cassette tape
      return svg(
        <>
          <g fill="none" stroke={W} strokeOpacity="0.28" strokeWidth="2.5">
            <rect x="18" y="26" width="64" height="44" rx="6" />
            <circle cx="38" cy="48" r="9" />
            <circle cx="62" cy="48" r="9" />
            <line x1="38" y1="48" x2="62" y2="48" />
          </g>
          <g fill={W} fillOpacity="0.32">
            <circle cx="38" cy="48" r="2.5" />
            <circle cx="62" cy="48" r="2.5" />
          </g>
        </>
      );
    case 6: // Concentric ripples
      return svg(
        <g fill="none" stroke={W} strokeOpacity="0.24" strokeWidth="2">
          <circle cx="50" cy="40" r="12" />
          <circle cx="50" cy="40" r="22" />
          <circle cx="50" cy="40" r="32" />
          <circle cx="50" cy="40" r="42" />
        </g>
      );
    default: // 7: Single eighth note
      return svg(
        <g fill={W} fillOpacity="0.26">
          <rect x="58" y="18" width="5" height="48" rx="2" />
          <path d="M63,18 c18,4 18,22 8,30 c6,-10 4,-22 -8,-24 z" />
          <ellipse cx="52" cy="66" rx="11" ry="8" transform="rotate(-18 52 66)" />
        </g>
      );
  }
}

export default function AlbumCover({ title, year, index = 0, compact = false }) {
  const [a, b] = PALETTES[index % PALETTES.length];
  return (
    <div
      className="albumCover"
      style={{ backgroundImage: `linear-gradient(135deg, ${a}, ${b})` }}
    >
      <Motif index={index} />
      {/* compact = a plain swatch (used as a small thumbnail) */}
      {!compact && <span className="albumCoverYear">{year}</span>}
      {!compact && <span className="albumCoverTitle">{title}</span>}
    </div>
  );
}
