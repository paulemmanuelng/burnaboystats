import type { ReactNode } from "react";
import { ImageResponse } from "next/og";
import { OgLockup } from "./og-lockup";
import { contentType, ogCardFonts, ogId, size } from "./og-image";
import { compactPreview } from "./onThisDayImages";
import { wrapLines } from "./ogFit";

/**
 * The figure-first link previews (Job 6, design review 8 Oct 2026): a card
 * whose body is the page's own figure, not a kicker and a title.
 *
 * Only the body is new. The frame is the plain card's, byte for byte
 * (og-image.tsx ogImage): the lockup and its tagline at top 46 / left 90 and
 * "BURNABOYSTATS.COM" at bottom 50 / left 90, 26px, on the same near-black,
 * gold for every artist (fix 127). The body sits at x 90–1110, y 130–540
 * (fix 128), and no text in it is under 28px.
 *
 * The cards re-version under their own art key, FIGURE_ART, folded into each
 * id with every string the card prints: a data change moves a card's URL by
 * itself, and OG_ART (every other card's key) is not bumped for them.
 *
 * The root card is the one exception to the frame (fix 127, C-2): it stays
 * as built, footless, with its lockup at top 46 / left 64, so its body lines
 * up with that lockup at x 64–1136 rather than at 90.
 */

/** The figure cards' art version. Bump it when their drawing changes and their words do not. */
export const FIGURE_ART = "figure-first-1";

/** The body's box on the 1200 x 630 card (fix 128). */
export const BODY = { left: 90, right: 1110, top: 130, bottom: 540 } as const;

/** The root card's body: its own lockup's edge, x 64, mirrored on the right (C-2). */
export const ROOT_BODY = { left: 64, right: 1136, top: 130, bottom: 540 } as const;

/** Which frame a body sits in: the plain card's, or the root card's own. */
export type FigureFrameKind = "plain" | "root";

/** The body box of a frame. */
export const bodyOf = (frame: FigureFrameKind) => (frame === "root" ? ROOT_BODY : BODY);

/** The dark card's literals, as ogLadder uses them: cards stay dark and gold. */
export const FIG = {
  ground: "#0a0a0b",
  gold: "#ffb627",
  ink: "#f5f4f0",
  muted: "#9b9ba3",
  body: "#cfc7bb",
  green: "#3ed17f",
  /** The dark --other: a single-series bar that is not his. */
  other: "#74747e",
  track: "#24242a",
  /** A tile's ground and edge, and a cover's edge: the Dai Dai card's. */
  surface: "#141416",
  edge: "rgba(245,244,240,0.12)",
  coverEdge: "rgba(245,244,240,0.16)",
} as const;

/**
 * The frame around a figure body. "plain" is ogImage's, byte for byte: the
 * lockup at top 46 / left 90 and the 26px "BURNABOYSTATS.COM" foot at bottom
 * 50 / left 90. "root" is the root card's as built: its lockup at top 46 /
 * left 64, and no foot.
 */
export function figureFrame(body: ReactNode, frame: FigureFrameKind = "plain") {
  const chrome =
    frame === "root"
      ? [
          <div key="lockup" style={{ position: "absolute", top: 46, left: 64, display: "flex" }}>
            <OgLockup />
          </div>,
        ]
      : [
          <div key="lockup" style={{ position: "absolute", top: 46, left: 90, display: "flex" }}>
            <OgLockup />
          </div>,
          <div key="foot" style={{ position: "absolute", bottom: 50, left: 90, fontSize: 26, color: FIG.muted, letterSpacing: 5 }}>
            BURNABOYSTATS.COM
          </div>,
        ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        background: FIG.ground,
        color: FIG.ink,
        fontFamily: "sans-serif",
      }}
    >
      {body}
      {chrome}
    </div>
  );
}

/** The card, re-encoded under the preview byte budget (compactPreview). */
export function ogFigureCard(body: ReactNode, frame: FigureFrameKind = "plain") {
  return compactPreview(new ImageResponse(figureFrame(body, frame), { ...size, fonts: ogCardFonts }));
}

/**
 * The card's metadata: its id folds FIGURE_ART and every string it prints.
 * Its alt reads the figures the card prints (PV-07, live debug 15 Oct 2026,
 * Paul "yes"): each route builds it from the same values it draws and folds,
 * so the alt and the id move with the same data.
 */
export function ogFigureVersions(texts: string[], alt: string) {
  return [{ id: ogId([FIGURE_ART, ...texts].join("|")), alt, size, contentType }];
}

// ── The body's parts ─────────────────────────────────────────────────────
// Satori lays out flexbox only, so every box is a flex container, and a run
// of lines is drawn as one child per line: the line count is what ogFit
// says, never the renderer's own wrapping. Text is passed in capitals where
// the drawing sets it in capitals, so what is measured is what is drawn.

/** Space Mono at the 28px floor: every label, kicker, sub and list row. */
export const MONO_SIZE = 28;
/** Its tracking, in px (the drawing's .06–.07em). */
export const MONO_TRACK = 2;
/** One Space Mono line's height, in px. */
export const MONO_LINE = 35;
/** Anton's line height on a figure: tight, as the drawing sets it. */
export const FIG_LH = 0.9;
/** An Anton headline's line height. */
export const HEAD_LH = 1.02;

/** A label's lines: `text` in capitals, broken to `width`, at most `maxLines`. */
export const monoText = (text: string, width: number, maxLines = 2) =>
  wrapLines(text.toUpperCase(), "mono", MONO_SIZE, width, maxLines, MONO_TRACK);

/** A run of Space Mono lines, one child per line, at the labels' tracking unless a line is fitted to its own. */
export function MonoLines({
  lines,
  color = FIG.ink,
  tracking = MONO_TRACK,
  style,
}: {
  lines: string[];
  color?: string;
  tracking?: number;
  style?: Record<string, unknown>;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {lines.map((t, i) => (
        <div
          key={i}
          style={{ display: "flex", fontFamily: "Space Mono", fontSize: MONO_SIZE, lineHeight: MONO_LINE / MONO_SIZE, letterSpacing: tracking, color }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

/** One Anton figure on its own line. */
export function Figure({ value, size, color = FIG.gold, style }: { value: string; size: number; color?: string; style?: Record<string, unknown> }) {
  return (
    <div style={{ display: "flex", fontFamily: "Anton", fontSize: size, lineHeight: FIG_LH, color, whiteSpace: "nowrap", ...style }}>
      {value}
    </div>
  );
}

/** An Anton headline, one child per line (lines from ogFit's wrapLines). */
export function Headline({ lines, size, color = FIG.ink, style }: { lines: string[]; size: number; color?: string; style?: Record<string, unknown> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {lines.map((t, i) => (
        <div key={i} style={{ display: "flex", fontFamily: "Anton", fontSize: size, lineHeight: HEAD_LH, color, whiteSpace: "nowrap" }}>
          {t}
        </div>
      ))}
    </div>
  );
}

/** A bar's height, in px (the drawing's 8 at half size). */
export const BAR_H = 16;

/** A share bar: `share` (0–1) of its track filled in `color`, on the dark track. */
export function Bar({ share, color, style }: { share: number; color: string; style?: Record<string, unknown> }) {
  const w = Math.max(0, Math.min(1, share));
  return (
    <div style={{ display: "flex", height: BAR_H, background: FIG.track, ...style }}>
      <div style={{ display: "flex", width: `${(w * 100).toFixed(2)}%`, height: BAR_H, background: color }} />
    </div>
  );
}

/** A hairline's height, in px: a strip's column with nothing to draw (an empty year, an unreported gross). */
export const HAIRLINE = 2;

/** One upright bar in a strip: `share` (0–1) of the strip's height; 0 draws the hairline. */
export interface StripBar {
  share: number;
  color: string;
}

/**
 * A row of upright bars on one baseline, each its share of `height`, `gap`
 * apart, the columns equal; a share of 0 is a hairline, so a column with
 * nothing to draw still reads as a column. `labels`, when given, sit one
 * under each bar, in Space Mono at the 28px floor.
 */
export function Strip({
  bars,
  height,
  gap,
  labels,
  labelColor = FIG.muted,
  style,
}: {
  bars: StripBar[];
  height: number;
  gap: number;
  labels?: string[];
  labelColor?: string;
  style?: Record<string, unknown>;
}) {
  const h = (b: StripBar) => (b.share > 0 ? Math.max(HAIRLINE, Math.round(Math.min(1, b.share) * height)) : HAIRLINE);
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      <div style={{ display: "flex", alignItems: "flex-end", height }}>
        {bars.map((b, i) => (
          <div key={i} style={{ display: "flex", flex: 1, height: h(b), marginLeft: i ? gap : 0, background: b.color }} />
        ))}
      </div>
      {labels ? (
        <div style={{ display: "flex", marginTop: 12 }}>
          {labels.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                marginLeft: i ? gap : 0,
                fontFamily: "Space Mono",
                fontSize: MONO_SIZE,
                lineHeight: MONO_LINE / MONO_SIZE,
                letterSpacing: MONO_TRACK,
                color: labelColor,
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/**
 * A row of square covers, `size` px, `gap` apart, in the order given; a
 * release with no art on file keeps its place as a blank tile.
 */
export function CoverStrip({ covers, size, gap, style }: { covers: (string | null)[]; size: number; gap: number; style?: Record<string, unknown> }) {
  return (
    <div style={{ display: "flex", ...style }}>
      {covers.map((src, i) =>
        src ? (
          // eslint-disable-next-line @next/next/no-img-element -- Satori draws its own tree; next/image cannot run in an ImageResponse
          <img key={i} src={src} width={size} height={size} alt="" style={{ width: size, height: size, marginLeft: i ? gap : 0, borderRadius: 8 }} />
        ) : (
          <div key={i} style={{ display: "flex", width: size, height: size, marginLeft: i ? gap : 0, borderRadius: 8, background: FIG.surface }} />
        ),
      )}
    </div>
  );
}

/** A ranked list row: its place (when the list numbers them) and name at the left, its value at the right. */
export interface RankRow {
  rank?: string;
  name: string;
  value: string;
  valueColor: string;
}

/** The padding over and under a list row, and its rule. */
export const ROW_PAD = 20;
export const ROW_RULE = "rgba(245,244,240,.24)";

/** A short ranked list, in capitals, ruled between rows. */
export function RankList({ rows, style }: { rows: RankRow[]; style?: Record<string, unknown> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: `${ROW_PAD}px 0`,
            borderBottom: `1px solid ${ROW_RULE}`,
            fontFamily: "Space Mono",
            fontSize: MONO_SIZE,
            lineHeight: MONO_LINE / MONO_SIZE,
            letterSpacing: MONO_TRACK,
          }}
        >
          <div style={{ display: "flex", fontSize: MONO_SIZE, color: FIG.ink, whiteSpace: "nowrap" }}>{r.rank ? `${r.rank} ${r.name.toUpperCase()}` : r.name.toUpperCase()}</div>
          <div style={{ display: "flex", fontSize: MONO_SIZE, color: r.valueColor, whiteSpace: "nowrap" }}>{r.value}</div>
        </div>
      ))}
    </div>
  );
}

/** Places in a ranked list, ties sharing one (1, 1, 3): the boards' own rule,
 *  defined once in ./jointRanks. */
export { jointRanks } from "./jointRanks";

/** The body's box, in a frame: the figures centred in it, top to bottom. */
export function BodyBox({ frame = "plain", children, style }: { frame?: FigureFrameKind; children: ReactNode; style?: Record<string, unknown> }) {
  const b = bodyOf(frame);
  return (
    <div
      style={{
        position: "absolute",
        left: b.left,
        top: b.top,
        width: b.right - b.left,
        height: b.bottom - b.top,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
