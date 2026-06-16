// An infinite horizontal scroller (like a ticker tape of achievements).
// We render the list TWICE back-to-back; the CSS slides it left by 50%,
// so the second copy seamlessly takes over and it loops forever.
export default function Marquee({ items = [] }) {
  const loop = [...items, ...items]; // duplicate for the seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marqueeTrack">
        {loop.map((text, i) => (
          <span key={i} className="marqueeItem">
            {text}
            <span className="marqueeStar"> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  );
}
