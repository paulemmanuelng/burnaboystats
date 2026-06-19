// Musical notes that slowly drift upward in the background.
// Positions are fixed (not random) so the server and browser always agree.
const NOTES = [
  { char: "♪", left: "8%", size: 26, dur: 14, delay: 0 },
  { char: "♫", left: "20%", size: 34, dur: 18, delay: 3 },
  { char: "♩", left: "34%", size: 22, dur: 12, delay: 6 },
  { char: "♬", left: "48%", size: 40, dur: 20, delay: 1 },
  { char: "♪", left: "62%", size: 28, dur: 16, delay: 4 },
  { char: "♫", left: "76%", size: 32, dur: 19, delay: 7 },
  { char: "♩", left: "88%", size: 24, dur: 13, delay: 2 },
];

export default function FloatingNotes() {
  return (
    <div className="floatingNotes" aria-hidden="true">
      {NOTES.map((n, i) => (
        <span
          key={i}
          style={{
            left: n.left,
            fontSize: `${n.size}px`,
            animationDuration: `${n.dur}s`,
            animationDelay: `${n.delay}s`,
          }}
        >
          {n.char}
        </span>
      ))}
    </div>
  );
}
