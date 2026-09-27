import { ImageResponse } from "next/og";
import { OgLockup, ogFonts } from "./og-lockup";
import { KIND_MARK, type OnThisDayKind } from "./onThisDayKinds";
import { CARD_SIZE } from "./cardPreview";
import { withoutKerning } from "./unkernedFont";
import { BURNA_PORTRAIT } from "./artistImages";
import { CARD_FOOT, keepTogether, type DayPostCard } from "./onThisDayShare";

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
 * Tracked 0. The artboard tracks the headline .01em — in a browser, which
 * kerns. Satori cannot (above), and an unkerned line at .01em runs about 1%
 * longer than the artboard's: 28 April's "BURNA BOY PLAYED MADISON" measured
 * 920px against Chrome's 909. Tracking 0 gives back what the kerning took.
 * The sizes are no longer the artboard's since the card was redrawn to lead
 * with the milestone (cardHeadSize, lib/onThisDayShare.ts), so its lines are
 * counted on every day's own render (tests/onThisDayShareImages.test.tsx).
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

// ── The portrait ────────────────────────────────────────────────────────────

/**
 * Burna Boy's portrait, faded into the top right of the On This Day images.
 * Paul, 26 Sep 2026: "let's have burna boy picture faded on this part of the
 * On this day design", pointing at the post card's empty top right (then
 * around ON THIS DAY and to the right of the numeral, both gone since the card
 * leads with the milestone) and at the link preview's glow around the crown
 * lockup. It overrides change list 15 ("the portrait …
 * removed") on these images only: no other card or preview gains it
 * (tests/onThisDayShareImages.test.tsx).
 *
 * Atmosphere, not a second subject: the site's own photo (lib/artistImages.ts)
 * at about a third of its strength, the face clear and all around it dissolved
 * into the ground. The fade is the stat card's (lib/statCardImage.tsx): scrims
 * of the image's own ground laid over the photo, each solid BEFORE the photo's
 * edge, so the photo's square is never drawn. They are linear because Satori's
 * radial gradients cannot fade IN: one that runs from clear to solid paints its
 * last colour over its whole box (measured 26 Sep 2026). Two of the scrims
 * keep the type clean — a band under the top line and a floor above
 * everything the text can reach.
 */

/**
 * The portrait as a data URL, or null — and the image is drawn without it.
 *
 * Fetched before the render rather than handed to Satori as a URL: a THROWN
 * fetch inside Satori rejects the whole image (the card route's note), and the
 * link previews have no second attempt. So a Spotify CDN outage, or a stall
 * past five seconds, costs the portrait, never the image.
 */
export async function loadPortrait(): Promise<string | null> {
  try {
    const res = await fetch(BURNA_PORTRAIT, { signal: AbortSignal.timeout(5000) });
    const type = res.headers.get("content-type") ?? "";
    if (!res.ok || !type.startsWith("image/")) return null;
    return `data:${type};base64,${Buffer.from(await res.arrayBuffer()).toString("base64")}`;
  } catch {
    return null;
  }
}

/**
 * The byte budget for a day's link preview. WhatsApp is widely reported to
 * drop an og:image over about 300 KB — an external limit, not verified here.
 * The site's other cover cards sit under it (/dai-dai 276,830 B,
 * /music/last-last 292,620 B).
 */
export const PREVIEW_BYTES = 300_000;

/**
 * A link preview's PNG, re-encoded to stay under PREVIEW_BYTES.
 *
 * The renderer writes an RGBA PNG with light compression: live on 26 Sep
 * 2026, 37 of the 160 day previews were over 300 KB, all of them cover days
 * (6 March 362,298 B). The image is opaque, so the first pass drops the unused
 * alpha channel and re-deflates with adaptive filtering — the same pixels,
 * about a quarter lighter (6 March 238,362 B, 23 January 275,848 B). Only a
 * render still over budget after that takes a 256-colour palette, which
 * roughly thirds it. Should the encoder be missing on a host, the render is
 * served as drawn: a heavier preview, never a hole (the card route's rule).
 */
export async function compactPreview(res: Response): Promise<Response> {
  const drawn = Buffer.from(await res.arrayBuffer());
  const headers = new Headers(res.headers);
  headers.delete("content-length");
  let bytes: Buffer = drawn;
  try {
    const { default: sharp } = await import("sharp");
    const lossless = await sharp(drawn).removeAlpha().png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer();
    bytes =
      lossless.length < PREVIEW_BYTES
        ? lossless
        : await sharp(drawn).removeAlpha().png({ palette: true, quality: 100, compressionLevel: 9 }).toBuffer();
    if (bytes.length > drawn.length) bytes = drawn;
  } catch {
    bytes = drawn;
  }
  return new Response(new Uint8Array(bytes), { status: res.status, headers });
}

/** One scrim: a box, and the ground's alpha at stops along one direction. */
interface Scrim {
  left: number;
  top: number;
  width: number;
  height: number;
  /** CSS degrees: 90 runs left → right, 180 top → bottom. */
  angle: number;
  /** [position in %, alpha] */
  stops: [number, number][];
}

export interface PortraitPlacement {
  /** The photo's square, in the image's px. */
  photo: { left: number; top: number; size: number };
  /** How much of the photo shows before any scrim. */
  opacity: number;
  scrims: Scrim[];
}

/** The photo and its scrims in `ground` ("r,g,b"). Drawn under the image's
 *  glow and light, so they fall on the photo as they fall on the ground. */
export function FadedPortrait({
  src,
  at,
  ground,
  width,
  height,
}: {
  src: string;
  at: PortraitPlacement;
  ground: string;
  width: number;
  height: number;
}) {
  const { left, top, size } = at.photo;
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width, height, display: "flex" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- satori draws its own tree; next/image cannot run inside an ImageResponse. */}
      <img
        src={src}
        width={size}
        height={size}
        alt=""
        style={{ position: "absolute", left, top, width: size, height: size, opacity: at.opacity }}
      />
      {at.scrims.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            display: "flex",
            left: s.left,
            top: s.top,
            width: s.width,
            height: s.height,
            background: `linear-gradient(${s.angle}deg, ${s.stops.map(([p, a]) => `rgba(${ground},${a}) ${p}%`).join(", ")})`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * The link previews' portrait (1200×630, a day's and the calendar's): the
 * face under the lockup, in the glow. The band under the top line keeps the
 * lockup and its tagline (60–95) on the ground they had. The floor is solid
 * from 215, above the highest any day's headline starts: 23 January's, at
 * 219, reading every day on the calendar (26 Sep 2026). The left fade is
 * solid to the photo's edge at x 832, far right of the cover tile (x 64–364)
 * and of the kicker's longest date (the 780 cap). At 400px the face fits the
 * window between band and floor: the glasses, the nose and the mouth.
 */
export const PREVIEW_PORTRAIT: PortraitPlacement = {
  photo: { left: 832, top: 22, size: 400 },
  opacity: 0.38,
  scrims: [
    // The band under the top line: solid to 100, clear by 140.
    { left: 700, top: 0, width: 500, height: 140, angle: 180, stops: [[0, 1], [72, 1], [100, 0]] },
    // The left fade: solid to the photo's edge (832), clear at 960.
    { left: 700, top: 0, width: 260, height: 630, angle: 90, stops: [[0, 1], [52, 1], [100, 0]] },
    // The floor: clear at 168, solid from 215 to the foot.
    { left: 700, top: 168, width: 500, height: 462, angle: 180, stops: [[0, 0], [10, 1], [100, 1]] },
    // The photo's grey backdrop at the right edge.
    { left: 1060, top: 0, width: 140, height: 630, angle: 90, stops: [[0, 0], [100, 0.8]] },
  ],
};

// The stat card's face: a warm near-black, lit from the top right.
const FACE = "linear-gradient(155deg, #1A1410 0%, #0C0A09 55%, #140F0A 100%)";
/**
 * The same face in two layers, for a card with the portrait: its darkest tone
 * (the 55% stop) as the ground the scrims are drawn in, and the rest of its
 * light laid over the photo. So a scrim's solid edge is the ground's own
 * colour, and no seam can show where it meets the face. Over a bare ground the
 * pair composes to FACE exactly: 12 + .25·(68−12) = 26 at the first stop,
 * 12 + .2·(52−12) = 20 at the last, and likewise in green and blue.
 */
const GROUND = "12,10,9";
const FACE_LIGHT =
  "linear-gradient(155deg, rgba(68,50,37,0.25) 0%, rgba(68,50,37,0) 55%, rgba(52,35,14,0) 55%, rgba(52,35,14,0.2) 100%)";

/**
 * The post card's portrait: the top right, bled off the top and the right
 * edge. The band under the top line fades it into the card's top edge (it
 * kept ON THIS DAY, 93–119, clean until that label moved down into the date
 * line). The floor is solid from 385, and no text reaches it: on a day
 * without a cover the text starts no higher than TEXT_TOP (400), and on a day
 * with one it starts under the cover — the highest text right of x 600 on any
 * day is 19 July's headline, at 530, reading every day on the calendar
 * (26 Sep 2026; the card's text starts at 464 at the highest). So the
 * photo never sits behind the date line, the headline or the record. The left
 * fade is solid to the photo's edge at x 600: clear of the cover (x 84–504 at
 * 420, 84–444 at 360) on a day that has one.
 */
export const CARD_PORTRAIT: PortraitPlacement = {
  photo: { left: 600, top: -10, size: 600 },
  opacity: 0.34,
  scrims: [
    // The band under the top line: solid to 119, clear by 180.
    { left: 520, top: 0, width: 560, height: 180, angle: 180, stops: [[0, 1], [66, 1], [100, 0]] },
    // The left fade: solid to the photo's edge (600), clear at 780.
    { left: 520, top: -10, width: 260, height: 700, angle: 90, stops: [[0, 1], [32, 1], [100, 0]] },
    // The floor: clear at 280, solid by 385 and down past the photo's foot.
    { left: 520, top: 280, width: 560, height: 420, angle: 180, stops: [[0, 0], [25, 1], [100, 1]] },
    // The photo's grey backdrop at the right edge.
    { left: 940, top: -10, width: 140, height: 700, angle: 90, stops: [[0, 0], [100, 0.55]] },
    // The corner between the left fade and the floor, rounded off.
    { left: 520, top: 150, width: 400, height: 300, angle: 225, stops: [[0, 0], [50, 0], [80, 1], [100, 1]] },
  ],
};

/** Where the post card's hero begins: under the 84px padding and the 44px
 *  lockup row. */
const HERO_TOP = 84 + 44;
/**
 * The highest the post card's text may start on a day without a cover: 15px
 * under the portrait's floor, which is solid from 385 (CARD_PORTRAIT). The
 * text runs the full measure, x 84–996, so it passes under the photo's
 * column; on a day with a cover, the cover (left of the photo, x 84–504) is
 * what sits up there, and the text starts below it.
 */
const TEXT_TOP = 400;

/**
 * The post card, 1080×1350 (4:5): /on-this-day/<day>/card.
 *
 * The milestone is the hero (Paul, 26 Sep 2026: "so much focus is on the
 * big gold date whereas the focus should be on the actual stuff being
 * remembered"): the lead's headline is the largest thing on the card, in the
 * card's white, stepped by length (cardHeadSize) and balanced, its record
 * sentence straight under it. The date is a label over it — "ON THIS DAY · 16
 * AUGUST" in the gold, tracked caps at 28 — where change list 15 had the day
 * numeral in the gold gradient as the card's identity figure. The record's
 * cover, when the lead has 640px art, sits above the label: 420 wide, or 360
 * over a headline that may run to four lines. The year, the kind and how many
 * more milestones share the day sit on the foot, with the source only when it
 * is a publisher. No watermark or tone seam (change list 15). The portrait
 * that list removed is back, faded into the top right (Paul, 26 Sep 2026;
 * CARD_PORTRAIT above) — `portrait` is loadPortrait()'s data URL, and with
 * null the card is drawn as it was without one.
 */
export function postCardImage(card: DayPostCard, portrait: string | null = null) {
  const { width, height } = CARD_SIZE;
  const cover = Boolean(card.cover);
  const c = card.coverSize;
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
          background: portrait ? `rgb(${GROUND})` : FACE,
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        {/* The portrait on the face's ground, then the rest of the face's
            light over both. */}
        {portrait && <FadedPortrait src={portrait} at={CARD_PORTRAIT} ground={GROUND} width={width} height={height} />}
        {portrait && (
          <div style={{ position: "absolute", top: 0, left: 0, width, height, display: "flex", background: FACE_LIGHT }} />
        )}
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

        {/* The crown lockup — the link preview's brand, on the post card too.
            The top right is the portrait's: ON THIS DAY moved down into the
            date line, over the headline. */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", height: 44 }}>
          <OgLockup />
        </div>

        {/* The hero: the cover when there is one, the date line, the
            milestone and its record — centred in the band between TEXT_TOP
            (or, with a cover, 48 under the lockup) and 48 above the rule. */}
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 0,
            paddingTop: cover ? 48 : TEXT_TOP - HERO_TOP,
            paddingBottom: 48,
          }}
        >
          {card.cover && (
            // eslint-disable-next-line @next/next/no-img-element -- satori draws its own tree; next/image cannot run inside an ImageResponse.
            <img
              src={card.cover}
              width={c}
              height={c}
              alt=""
              style={{
                width: c,
                height: c,
                marginBottom: 44,
                borderRadius: 18,
                border: "2px solid rgba(245,244,240,0.16)",
                objectFit: "cover",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
              }}
            />
          )}
          <div style={{ display: "flex", fontSize: 28, lineHeight: 1, letterSpacing: 5.6, color: OTD_GOLD, whiteSpace: "nowrap" }}>
            {card.dateLine}
          </div>
          <div
            style={{
              display: "flex",
              width: HEADLINE_WIDTH,
              marginTop: 22,
              fontSize: card.headSize,
              lineHeight: 1.04,
              letterSpacing: 0,
              color: INK,
              textWrap: "balance",
            }}
          >
            {keepTogether(card.headline)}
          </div>
          {card.record && (
            <div style={{ display: "flex", width: HEADLINE_WIDTH, marginTop: 26, fontSize: 32, lineHeight: 1.3, color: "#CFC7BB" }}>
              {keepTogether(card.record)}
            </div>
          )}
        </div>

        {/* The foot: the rule, the year, the kind and the day's other
            milestones, the publisher when there is one, the address. Every
            line of it is one line, so the rule sits at the same height on
            every card: the source is set whole, and the kind line is the
            longest form that fits beside it (cardKindLine, CARD_FOOT). */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", height: 2, background: "rgba(255,182,39,0.35)" }} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: CARD_FOOT.gap }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", fontSize: 52, lineHeight: 1, letterSpacing: 1.04 }}>{card.year}</div>
              <div style={{ display: "flex", alignItems: "center", gap: CARD_FOOT.markGap, ...CARD_FOOT.kind, color: "#9b9ba3" }}>
                <ShareMark kind={card.kind} size={CARD_FOOT.mark} color="#9b9ba3" />
                <div style={{ display: "flex", flex: 1, minWidth: 0 }}>{card.kindLine}</div>
              </div>
            </div>
            {card.source && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  flexShrink: 0,
                  gap: 6,
                  textAlign: "right",
                }}
              >
                <div style={{ display: "flex", fontSize: CARD_FOOT.label.fontSize, letterSpacing: CARD_FOOT.label.letterSpacing, color: "#6B655D" }}>
                  {CARD_FOOT.label.text}
                </div>
                <div style={{ display: "flex", ...CARD_FOOT.source, color: "#8A8279", whiteSpace: "nowrap" }}>{card.source}</div>
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
