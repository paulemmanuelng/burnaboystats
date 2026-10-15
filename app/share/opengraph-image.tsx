import { size, contentType } from "../lib/og-image";
import { BODY, FIG, ogFigureCard, ogFigureVersions } from "../lib/og-figure";
import { fitSize, wrapLines } from "../lib/ogFit";
import { getStatCards } from "../lib/statCards";
import { loadPortrait } from "../lib/onThisDayImages";

export { size, contentType };
export const alt = "Make a Burna Boy Stat Card — Download & Share the Numbers";

/**
 * /share's own link preview is the default stat card (J6-5, design review
 * 8 Oct 2026, fix 123 (b)): its body re-laid at 1200 x 630, not a crop of the
 * square card, which would cut the card's brand row, source line and stamp
 * and carry no lockup. Figure, label and source on the left, read from the
 * card itself; the portrait on the right, under the card's own left-dissolve
 * scrims; the plain card's lockup, tagline and foot around it, in gold.
 */
const card = getStatCards()[0];

// The left column: x 90 to the portrait's dissolve, 530px wide.
const COLUMN = 530;
const VALUE = fitSize([card.value], COLUMN, 220);
const TRACKING = 2;
const LABEL = wrapLines(card.label.toUpperCase(), "mono", 28, COLUMN, 2, TRACKING);
const SOURCE = wrapLines(card.source.toUpperCase(), "mono", 28, COLUMN, 2, TRACKING);

// The portrait's box: the right edge of the card, full height (x 640–1200).
const PHOTO_W = size.width - 640;
const PHOTO_H = size.height;
const ground = (a: number) => `rgba(10,10,11,${a})`;

// Versioned by what it prints, so a new default card or figure re-versions it.
export const generateImageMetadata = () => ogFigureVersions(["share", card.value, card.label, card.source], alt);

export default async function Image() {
  const portrait = await loadPortrait();

  // Satori takes plain arrays of keyed children; no fragments.
  const art = portrait
    ? [
        <img
          key="portrait"
          src={portrait}
          width={PHOTO_W}
          height={PHOTO_H}
          alt=""
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: PHOTO_W,
            height: PHOTO_H,
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.9,
          }}
        />,
        // The stat card's three scrims (statCardImage.tsx), at this box's size,
        // in this card's ground: the dissolve that starts before the photo's
        // left edge, the top wash, and the right-edge vignette.
        <div
          key="dissolve"
          style={{
            position: "absolute",
            right: PHOTO_W * 0.55,
            top: 0,
            width: PHOTO_W * 0.65,
            height: PHOTO_H,
            display: "flex",
            background: `linear-gradient(90deg, ${ground(1)} 0%, ${ground(1)} 30%, ${ground(0.9)} 55%, ${ground(0)} 100%)`,
          }}
        />,
        <div
          key="top"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: PHOTO_W,
            height: Math.round(PHOTO_H * 0.3),
            display: "flex",
            background: `linear-gradient(180deg, ${ground(0.85)} 0%, ${ground(0.35)} 55%, ${ground(0)} 100%)`,
          }}
        />,
        <div
          key="edge"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: Math.round(PHOTO_W * 0.45),
            height: PHOTO_H,
            display: "flex",
            background: `linear-gradient(270deg, ${ground(0.62)} 0%, ${ground(0.2)} 55%, ${ground(0)} 100%)`,
          }}
        />,
      ]
    : [];

  const line = (text: string, i: number, color: string) => (
    <div key={i} style={{ display: "flex", fontFamily: "Space Mono", fontSize: 28, lineHeight: 1.25, letterSpacing: TRACKING, color }}>
      {text}
    </div>
  );

  return ogFigureCard([
    ...art,
    <div
      key="body"
      style={{
        position: "absolute",
        left: BODY.left,
        top: BODY.top,
        width: COLUMN,
        height: BODY.bottom - BODY.top,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", fontFamily: "Anton", fontSize: VALUE, lineHeight: 1, color: FIG.gold }}>{card.value}</div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 22 }}>{LABEL.map((t, i) => line(t, i, FIG.ink))}</div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 14 }}>{SOURCE.map((t, i) => line(t, i, FIG.muted))}</div>
    </div>,
  ]);
}
