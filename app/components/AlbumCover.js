// Generates original, abstract album-cover art with CSS gradients — so we can
// show a "discography wall" without using any copyrighted cover images.
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

export default function AlbumCover({ title, year, index = 0, compact = false }) {
  const [a, b] = PALETTES[index % PALETTES.length];
  return (
    <div
      className="albumCover"
      style={{ backgroundImage: `linear-gradient(135deg, ${a}, ${b})` }}
    >
      {/* compact = a plain gradient swatch (used as a small thumbnail) */}
      {!compact && <span className="albumCoverYear">{year}</span>}
      {!compact && <span className="albumCoverTitle">{title}</span>}
    </div>
  );
}
