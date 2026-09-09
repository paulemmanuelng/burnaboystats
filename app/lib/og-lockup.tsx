import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The brand lockup, for share cards.
 *
 * docs/design/LOGO.md has said since the crown shipped that OG images carry
 * `burnaboystats-horizontal.svg` top-left at 44px tall — and no card ever did.
 * The mark reached the favicon, the nav and the footer; the thirty-seven share
 * cards stayed text-only, which is the one place the brand is seen by people
 * who have never opened the site.
 *
 * It is not a drop-in of that file, and cannot be. The lockup carries its type
 * as LIVE text (LOGO.md keeps it that way on purpose, so it stays editable and
 * matches `.brand`), and LOGO.md's own warning applies here — "outline the text
 * before using a lockup anywhere Anton is not loaded". next/og rasterises with
 * resvg, which is handed no fonts at all, so an <img src="…horizontal.svg">
 * would render the crown and drop both lines of text silently. So the lockup is
 * rebuilt from its parts:
 *
 *   - the crown as an SVG data URI, which is pure geometry and needs no font
 *   - BURNABOY / STATS as real Anton text, the gold on STATS via background-clip
 *   - THE NUMBERS, VERIFIED as real Space Mono text
 *
 * Every coordinate below is the horizontal lockup's own, scaled by k = h/96.
 */

const fontFile = (name: string) => readFileSync(join(process.cwd(), "public/fonts", name));

/**
 * The satori font list for every card on the site.
 *
 * geist is FIRST and is not optional. next/og's default list is exactly
 * `[{ name: "geist", weight: 400 }]` (its own Geist-Regular.ttf, byte-identical
 * to the copy in public/fonts), and `fonts: options.fonts || defaultFonts` means
 * supplying a list REPLACES that default rather than extending it. Every card on
 * the site sets `fontFamily: "sans-serif"`, which matches no loaded family and
 * falls back to the head of the list — so dropping geist, or ordering Anton
 * first, would silently reset all thirty-seven cards in the poster face.
 *
 * That is not a guess: rendering one card with `fonts` undefined and again with
 * this list produces a byte-identical PNG. tests/ogLockup.test.ts holds the
 * ordering; the copy of Geist is what makes it hold without reaching into
 * node_modules at render time.
 */
export const ogFonts = [
  { name: "geist", data: fontFile("Geist-Regular.ttf"), weight: 400 as const, style: "normal" as const },
  { name: "Anton", data: fontFile("Anton-Regular.ttf"), weight: 400 as const, style: "normal" as const },
  { name: "Space Mono", data: fontFile("SpaceMono-Regular.ttf"), weight: 400 as const, style: "normal" as const },
];

/**
 * The crown, verbatim from LOGO.md — viewBox 0 0 84 74, bars at x 7·22·37·52·67
 * (w 11, rx 5.5), heights 33·22·43·22·33 on y 58, base rule y 64, dot 42/8 r4.
 * The same geometry as components/BrandMark.tsx, with the tokens resolved to the
 * literals they hold on the cards' dark ground: --gold #ffb627 → --grad-b
 * #ff7a1a, and --green #3ed17f for the dot, which LOGO.md says is never omitted.
 */
const CROWN_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 74">' +
  '<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">' +
  '<stop offset="0" stop-color="#ffb627"/><stop offset="1" stop-color="#ff7a1a"/>' +
  "</linearGradient></defs>" +
  '<circle cx="42" cy="8" r="4" fill="#3ed17f"/>' +
  '<rect x="7" y="25" width="11" height="33" rx="5.5" fill="url(#g)"/>' +
  '<rect x="22" y="36" width="11" height="22" rx="5.5" fill="url(#g)"/>' +
  '<rect x="37" y="15" width="11" height="43" rx="5.5" fill="url(#g)"/>' +
  '<rect x="52" y="36" width="11" height="22" rx="5.5" fill="url(#g)"/>' +
  '<rect x="67" y="25" width="11" height="33" rx="5.5" fill="url(#g)"/>' +
  '<rect x="7" y="64" width="71" height="6.5" rx="3.25" fill="url(#g)"/>' +
  "</svg>";

const CROWN = `data:image/svg+xml;base64,${Buffer.from(CROWN_SVG).toString("base64")}`;

/** LOGO.md: "OG images: burnaboystats-horizontal.svg top-left at 44px tall." */
export const OG_LOCKUP_HEIGHT = 44;

export function OgLockup({ h = OG_LOCKUP_HEIGHT }: { h?: number }) {
  const k = h / 96; // the lockup's viewBox is 520 x 96
  return (
    <div style={{ display: "flex", position: "relative", width: 520 * k, height: h }}>
      {/* Positioned, not flowed: the crown's 84x74 box sits at (1,6) inside the
          lockup, and the wordmark's left edge is x=112. Laying it out by those
          numbers keeps the card's mark the same shape as the header's. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- satori has no
          next/image; the rule is auto-exempt inside opengraph-image.tsx files
          and this is the same code, just factored out of thirty-seven of them. */}
      <img
        src={CROWN}
        width={84 * k}
        height={74 * k}
        alt=""
        style={{ position: "absolute", left: 1 * k, top: 6 * k }}
      />
      <div
        style={{
          position: "absolute",
          left: 112 * k,
          top: 0,
          height: h,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Anton",
            fontSize: 52 * k,
            letterSpacing: 0.5 * k,
            lineHeight: 1,
            color: "#f5f4f0",
          }}
        >
          <span>BURNABOY</span>
          {/* LOGO.md rule 1: STATS is the only gradient text on the site. satori
              honours background-clip: text, so it is the real ramp rather than a
              flat gold stand-in. */}
          <span
            style={{
              backgroundImage: "linear-gradient(180deg,#ffb627,#ff7a1a)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            STATS
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Space Mono",
            fontSize: 12 * k,
            letterSpacing: 6.2 * k,
            lineHeight: 1,
            marginTop: 7 * k,
            color: "#9b9ba3",
          }}
        >
          THE NUMBERS, VERIFIED
        </div>
      </div>
    </div>
  );
}
