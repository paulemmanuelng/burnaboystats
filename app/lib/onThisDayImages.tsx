import { ImageResponse } from "next/og";
import { OgLockup, ogFonts } from "./og-lockup";
import { KIND_MARK, type OnThisDayKind } from "./onThisDayKinds";
import { CARD_SIZE } from "./cardPreview";
import { withoutKerning } from "./unkernedFont";
import type { DayPostCard } from "./onThisDayShare";

/**
 * ON THIS DAY — the drawing shared by its two share images, and the post card.
 *
 * Both images are always dark and stay inside the site's families (design
 * response §2 "Share images"): the link preview keeps the link-preview family's
 * ground, gold pool, lockup and URL footer; the post card keeps the stat
 * card's warm face, 2px gold frame, gold wash and centred stamp. Every word is
 * set in Geist Regular — the only text face loaded — and nothing asks for a
 * weight, because none would render (change list 18). Anton and Space Mono
 * appear only inside the lockup.
 *
 * Values are read off design_handoff_burnaboystats/designs/desktop/
 * "OTD Post Card.dc.html" and "OTD Link Preview.dc.html"; the design's em
 * trackings are written out in px, because the renderer is not a browser.
 */

export const OTD_GOLD = "#ffb627";
const INK = "#f5f4f0";

/**
 * The site's card fonts, with Geist's kerning off (lib/unkernedFont.ts).
 * Satori sizes each word letter by letter but draws it kerned, so a word with
 * tight pairs left a double-width gap after it — "HOLLYWOOD␣␣BOWL",
 * "CERTIFICATION␣␣·", "artist␣␣to". Unkerned, what is drawn is what was
 * measured. Same families, same order, same files otherwise: geist still
 * heads the list, so `sans-serif` still falls back to it.
 */
export const otdFonts = ogFonts.map((f) => (f.name === "geist" ? { ...f, data: withoutKerning(f.data) } : f));

/**
 * The post card's headline measure: 912px, the artboard's max-width (1080
 * less the 84px padding either side), given outright.
 *
 * The artboard also tracks the headline .01em — in a browser, which kerns.
 * Satori cannot (above), and an unkerned line at .01em runs about 1% longer
 * than the artboard's: 28 April's "BURNA BOY PLAYED MADISON" measured 920px
 * against Chrome's 909, so the card broke into four lines where the artboard
 * draws three. Tracking 0 gives back what the kerning took. Measured over all
 * 167 days against the artboard's own styles in Chrome (26 Sep 2026): the line
 * count matches on 166 (22 December's NATIVELAND FESTIVAL still takes four,
 * as it did), where .01em matched 164.
 */
const HEADLINE_WIDTH = 912;

/** A kind's mark on an image: its shape in the text colour around it — the
 *  same ink rule as the pages (lib/onThisDayKinds.ts), never a colour of its
 *  own. The word always prints beside it. */
export function ShareMark({ kind, size, color }: { kind: OnThisDayKind; size: number; color: string }) {
  const m = KIND_MARK[kind];
  return (
    <svg width={size} height={size} viewBox="0 0 12 12">
      <path d={m.d} fill={m.filled ? color : "none"} stroke={m.filled ? "none" : color} strokeWidth={m.filled ? 0 : 1.8} />
    </svg>
  );
}

/**
 * The address, as cardUrl() spells it: the domain in tracked capitals, the
 * path in lower case (lib/og-image.tsx keeps it that way).
 *
 * One run, at the design's domain tracking. The design sets the path tighter
 * in a span of its own, but the renderer opens a gap wherever one text run
 * ends and the next begins (the first build's "BURNABOY STATS" wordmark shows
 * it), and a gap after "BURNABOYSTATS.COM/" reads as a broken address.
 */
export function ShareUrl({ url, fontSize, color, tracking }: { url: string; fontSize: number; color: string; tracking: number }) {
  return <div style={{ display: "flex", fontSize, color, letterSpacing: tracking, whiteSpace: "nowrap" }}>{url}</div>;
}

// The stat card's face: a warm near-black, lit from the top right.
const FACE = "linear-gradient(155deg, #1A1410 0%, #0C0A09 55%, #140F0A 100%)";
const NUMERAL_GRAD = "linear-gradient(180deg, #ffd24a 0%, #ffb627 52%, #f5890b 100%)";

/**
 * The post card, 1080×1350 (4:5): /on-this-day/<day>/card.
 *
 * The date is its identity — the day numeral in the gold gradient, with the
 * month — beside the record's 420px cover when the lead has one, and alone at
 * 360px when it does not, the month set on its baseline. The milestone is the
 * reading hero, its record sentence under it; the year, the kind and how many
 * more milestones share the day sit on the foot, with the source only when it
 * is a publisher. No portrait, watermark or tone seam: the portrait made
 * every card the same card (change list 15).
 */
export function postCardImage(card: DayPostCard) {
  const { width, height } = CARD_SIZE;
  const cover = Boolean(card.cover);
  const n = card.numeralSize;
  const m = card.monthSize;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: 84,
          background: FACE,
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        {/* The gold wash from the top right, then the 2px frame. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width,
            height,
            display: "flex",
            background: "radial-gradient(60% 45% at 100% 0%, rgba(255,182,39,0.16), rgba(255,182,39,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width,
            height,
            display: "flex",
            border: "2px solid rgba(255,182,39,0.28)",
          }}
        />

        {/* The crown lockup — the link preview's brand, on the post card too. */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", height: 44 }}>
          <OgLockup />
          <div style={{ display: "flex", marginLeft: "auto", fontSize: 26, letterSpacing: 5.72, color: OTD_GOLD }}>
            ON THIS DAY
          </div>
        </div>

        {/* The hero, centred in the space above the rule. */}
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", gap: 44 }}>
            {card.cover && (
              // eslint-disable-next-line @next/next/no-img-element -- satori draws its own tree; next/image cannot run inside an ImageResponse.
              <img
                src={card.cover}
                width={420}
                height={420}
                alt=""
                style={{
                  width: 420,
                  height: 420,
                  borderRadius: 18,
                  border: "2px solid rgba(245,244,240,0.16)",
                  objectFit: "cover",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                }}
              />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: cover ? "column" : "row",
                alignItems: cover ? "flex-start" : "flex-end",
                gap: cover ? 14 : 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: n,
                  lineHeight: 0.78,
                  letterSpacing: -0.04 * n,
                  paddingTop: 0.08 * n,
                  whiteSpace: "nowrap",
                  backgroundImage: NUMERAL_GRAD,
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {card.numeral}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: m,
                  lineHeight: 1,
                  letterSpacing: 0.16 * m,
                  paddingBottom: cover ? 0 : 18,
                  color: INK,
                }}
              >
                {card.month}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: cover ? 60 : 56, width: HEADLINE_WIDTH }}>
            <div
              style={{
                display: "flex",
                fontSize: card.headSize,
                lineHeight: 1.08,
                letterSpacing: 0,
                textWrap: "balance",
              }}
            >
              {card.headline}
            </div>
            {card.record && (
              <div style={{ display: "flex", fontSize: 32, lineHeight: 1.3, color: "#CFC7BB" }}>{card.record}</div>
            )}
          </div>
        </div>

        {/* The foot: the rule, the year, the kind and the day's other
            milestones, the publisher when there is one, the address. */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", height: 2, background: "rgba(255,182,39,0.35)" }} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", fontSize: 52, lineHeight: 1, letterSpacing: 1.04 }}>{card.year}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, letterSpacing: 2.64, color: "#9b9ba3" }}>
                <ShareMark kind={card.kind} size={20} color="#9b9ba3" />
                <div style={{ display: "flex", flex: 1, minWidth: 0 }}>{card.kindLine}</div>
              </div>
            </div>
            {card.source && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 6,
                  maxWidth: 420,
                  textAlign: "right",
                }}
              >
                <div style={{ display: "flex", fontSize: 18, letterSpacing: 3.24, color: "#6B655D" }}>SOURCE</div>
                <div style={{ display: "flex", fontSize: 22, letterSpacing: 2.2, color: "#8A8279" }}>{card.source}</div>
              </div>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ShareUrl url={card.url} fontSize={21} color="#8a8279" tracking={1.68} />
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: otdFonts,
      // Rendered on request; the CDN keeps it an hour, so a redesign reaches
      // every reader within the hour.
      headers: { "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400" },
    }
  );
}
