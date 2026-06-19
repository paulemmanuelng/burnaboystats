// An infinite horizontal scroller (ticker tape of achievements).
// We build a "unit" wide enough to exceed any viewport, then render it TWICE;
// the CSS slides the track left by exactly one unit (-50%), so it loops with
// no gap regardless of screen width.
export default function Marquee({ items = [] }) {
  const unit = [...items, ...items];
  const loop = [...unit, ...unit];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marqueeTrack">
        {loop.map((text, i) => (
          <span key={i} className="marqueeItem">
            {text}
            <span className="marqueeStar">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
