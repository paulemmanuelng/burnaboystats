import { size, contentType } from "./lib/og-image";
import { BodyBox, Figure, Headline, MonoLines, monoText, ogFigureCard, ROOT_BODY } from "./lib/og-figure";
import { fitSize } from "./lib/ogFit";
import { ROOT_HEADLINE, ROOT_OG_ALT, ROOT_OG_ID, rootFigures } from "./lib/rootCard";

// Social share preview card (shown when the link is pasted on X, WhatsApp, etc.)
export { size, contentType };
// The alt reads the card's line and figures (PV-07): "… 251 certifications, 46 No. 1 peaks, …".
export const alt = ROOT_OG_ALT;

/**
 * The home page's preview, figure first (Job 6 · J6-4, fix 131): his
 * certifications, his No. 1 peaks and his Spotify streams, one row, each read
 * from the data, under one line saying what the site is (owner, 4 Nov 2026).
 * The card keeps its own frame as built (fix 127, C-2): the lockup at top 46 /
 * left 64, no foot, so the line and the figures line up at x 64.
 */
const GAP = 32;
const COLUMN = (ROOT_BODY.right - ROOT_BODY.left - 2 * GAP) / 3;
const figures = rootFigures();
// One size for the three, the largest at which the widest fits its column.
const FIGURE = fitSize(figures.map((f) => f.value), COLUMN, 108);
// The line, on one line, in capitals as drawn, across the body at most.
const LINE = ROOT_HEADLINE.toUpperCase();
const LINE_SIZE = fitSize([LINE], ROOT_BODY.right - ROOT_BODY.left, 72);

// Versioned by what it prints (lib/rootCard.ts), so /404, /search and
// /primitives, which cite it by hand, follow it.
export const generateImageMetadata = () => [{ id: ROOT_OG_ID, alt, size, contentType }];

export default function OpengraphImage() {
  return ogFigureCard(
    <BodyBox frame="root">
      <Headline lines={[LINE]} size={LINE_SIZE} style={{ marginBottom: 40 }} />
      <div style={{ display: "flex" }}>
        {figures.map((f, i) => (
          <div key={f.label} style={{ display: "flex", flexDirection: "column", width: COLUMN, marginLeft: i ? GAP : 0 }}>
            <Figure value={f.value} size={FIGURE} />
            <MonoLines lines={monoText(f.label, COLUMN)} style={{ marginTop: 14 }} />
          </div>
        ))}
      </div>
    </BodyBox>,
    "root",
  );
}
