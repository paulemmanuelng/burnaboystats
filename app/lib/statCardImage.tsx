import { ImageResponse } from "next/og";
import type { StatCard } from "./statCards";
import { CARD_SIZES, type CardRatio } from "./cardSizes";
import { BURNA_PORTRAIT } from "./artistImages";

/**
 * The downloadable share card, built from designs/desktop/Share.dc.html.
 *
 * Two ratios, because the two places these get posted want different shapes:
 * a square for a timeline, a 9:16 for a story. Both render at 2× so the PNG
 * holds up on a phone screen.
 *
 * Rendered server-side by next/og rather than screenshotted in the browser, so
 * the download is a real image at a known size — no html2canvas, no device
 * pixel-ratio lottery, and it works from a link.
 */
// Kept for the OG/meta consumers that ask for the card's nominal size.
export const statCardSize = CARD_SIZES.square;

const GOLD = "#ffb627";
// The design's card face: a warm near-black, lit from the top right.
const FACE = "linear-gradient(155deg, #1A1410 0%, #0C0A09 55%, #140F0A 100%)";
const GOLD_GRAD = "linear-gradient(180deg, #ffd24a 0%, #ffb627 45%, #f5890b 100%)";

export function statCardImage(card: StatCard, ratio: CardRatio = "square") {
  const size = CARD_SIZES[ratio];
  const tall = ratio === "story";
  const pad = tall ? 96 : 84;
  // Satori has no `ch` unit — a `maxWidth: "22ch"` silently collapses to almost
  // nothing and wraps the label one word per line. Widths here are px, measured
  // off the card's own content box.
  const contentWidth = size.width - pad * 2;
  // The portrait sits in a column on the right. Its left edge is dissolved by a
  // scrim that starts on the card's own darkest tone, so there is no seam where
  // the column begins, and the text keeps a clear column of its own.
  const photoW = Math.round(size.width * (tall ? 0.62 : 0.5));
  // On the square card the portrait can run the full height — a 1:2 crop of
  // the square source keeps the face natural. Story is 1:3; running full
  // height there over-zooms the crop until the face lands by luck, so the
  // photo gets a bounded, top-anchored box instead and dissolves out well
  // above the number block.
  const photoH = tall ? Math.round(size.height * 0.56) : size.height;
  const textW = size.width - pad * 2 - photoW * (tall ? 0.15 : 0.45);

  // Long values ("$30.46M") have to hold the same optical weight as short ones
  // ("221") without overflowing, so the size steps down with length.
  const len = card.value.length;
  const base = tall ? 260 : 210;
  const valueSize =
    len <= 3 ? base : len <= 4 ? base * 0.86 : len <= 5 ? base * 0.76 : len <= 7 ? base * 0.62 : base * 0.52;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: FACE,
          color: "#f5f4f0",
          fontFamily: "sans-serif",
          padding: pad,
          border: "2px solid rgba(255,182,39,0.28)",
        }}
      >
        {/* Gold wash from the top right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(120% 80% at 100% 0%, rgba(255,182,39,0.22), rgba(255,182,39,0) 60%)",
          }}
        />
        {/* The portrait, bled off the right edge.
            Satori supports neither mask-image nor filter, so the fade is a real
            scrim laid over the photo: card-face colour at the left, clear at
            the right. That keeps the value and label side clean while the
            picture still reads. */}
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders its
            own tree; next/image cannot run inside an ImageResponse. */}
        <img
          src={BURNA_PORTRAIT}
          width={photoW}
          height={photoH}
          alt=""
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: photoW,
            height: photoH,
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.9,
          }}
        />
        {/* The dissolve starts BEFORE the photo's left edge — a scrim that
            begins exactly at the edge left a hard vertical seam where the
            portrait's bright forehead met the card's dark column. */}
        <div
          style={{
            position: "absolute",
            right: photoW * 0.55,
            top: 0,
            width: photoW * 0.65,
            height: photoH,
            display: "flex",
            background:
              "linear-gradient(90deg, #0C0A09 0%, #0C0A09 30%, rgba(12,10,9,0.9) 55%, rgba(12,10,9,0) 100%)",
          }}
        />
        {/* The photo's own studio backdrop is light grey; unscrimmed it glared
            against the card's border at the top-right and down the right edge.
            A top wash and a right-edge vignette melt it into the face. */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: photoW,
            height: Math.round(photoH * 0.3),
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(12,10,9,0.85) 0%, rgba(12,10,9,0.35) 55%, rgba(12,10,9,0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: Math.round(photoW * 0.45),
            height: photoH,
            display: "flex",
            background:
              "linear-gradient(270deg, rgba(12,10,9,0.62) 0%, rgba(12,10,9,0.2) 55%, rgba(12,10,9,0) 100%)",
          }}
        />
        {/* Story only: the photo box ends mid-card, so its bottom edge melts
            into the face colour rather than cutting a line across it. */}
        {tall && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: photoH - 240,
              width: photoW,
              height: 240,
              display: "flex",
              background:
                "linear-gradient(180deg, rgba(12,10,9,0) 0%, rgba(12,10,9,0.75) 62%, #0C0A09 100%)",
            }}
          />
        )}

        {/* A second wash up from the base, so the number never sits on a face. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(0deg, #0C0A09 8%, rgba(12,10,9,0.6) 34%, rgba(12,10,9,0) 66%)",
          }}
        />

        {/* The watermark word, ghosted into the bottom-right corner */}
        <div
          style={{
            position: "absolute",
            right: -pad * 0.4,
            bottom: -pad * 0.8,
            display: "flex",
            fontSize: tall ? 460 : 360,
            fontWeight: 800,
            lineHeight: 0.8,
            color: "rgba(255,182,39,0.05)",
            letterSpacing: 2,
          }}
        >
          {card.watermark}
        </div>

        {/* Brand row */}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: tall ? 44 : 38, fontWeight: 800, letterSpacing: 1 }}>
            <span style={{ display: "flex" }}>BURNABOY</span>
            <span style={{ display: "flex", color: GOLD }}>STATS</span>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: tall ? 26 : 23,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: GOLD,
              border: "2px solid rgba(255,182,39,0.5)",
              borderRadius: 999,
              padding: "10px 24px",
            }}
          >
            {card.chip}
          </div>
        </div>

        {/* The number, pinned to the base */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div
            style={{
              display: "flex",
              fontSize: valueSize,
              fontWeight: 800,
              lineHeight: 0.82,
              letterSpacing: -4,
              backgroundImage: GOLD_GRAD,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {card.value}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: tall ? 62 : 52,
              fontWeight: 700,
              lineHeight: 1.08,
              textTransform: "uppercase",
              marginTop: tall ? 40 : 30,
              maxWidth: textW,
            }}
          >
            {card.label}
          </div>
          <div
            style={{
              display: "flex",
              height: 2,
              background: "rgba(255,182,39,0.35)",
              margin: `${tall ? 44 : 34}px 0`,
            }}
          />
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div style={{ display: "flex", fontSize: tall ? 32 : 27, lineHeight: 1.5, color: "#CFC7BB", maxWidth: textW * 0.72 }}>
              {card.kicker}
            </div>
            {/* Every card carries the body behind the number, so a screenshot
                can always be traced back to its source. */}
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                paddingLeft: 24,
                fontSize: tall ? 24 : 21,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#8A8279",
              }}
            >
              {card.source}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // Satori renders take real time, and the figures only change with a
      // deploy — which busts the CDN cache on its own. Caching makes ratio
      // flips and re-downloads instant instead of a fresh render each time.
      headers: {
        "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
