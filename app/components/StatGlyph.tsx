import { useId } from "react";
import { albums } from "../data/albums";

/**
 * Watermark glyphs for the stat cells — a faint pictogram of what each number
 * IS, sitting behind the figures. Same policy as the site's map and charts:
 * hand-built inline SVG, no icon library.
 *
 * Every glyph is monochrome line-work on `currentColor`, so the tint and
 * opacity live in the host's CSS (one knob per surface, not per icon). The one
 * exception is the album disc, which sets its own internal opacities: it clips
 * the real No Sign of Weakness cover into the vinyl label, and a raster image
 * can't be tinted by currentColor — so its wrapper runs brighter and the
 * line-work compensates internally (see .glyphAlbum in the host CSS).
 *
 * Purely decorative: every use is aria-hidden and pointer-events: none.
 */

export type GlyphKind = "certs" | "no1s" | "albums" | "countries" | "tour";

const nsow = albums.find((a) => a.title === "No Sign of Weakness");

const S = 96; // shared viewBox: 0 0 96 96 — hosts size via CSS width

export default function StatGlyph({ kind, className }: { kind: GlyphKind; className?: string }) {
  // The album glyph renders on both the desktop and mobile home surfaces at
  // once, so its clipPath id must be unique per instance.
  const clipId = useId();
  const common = {
    viewBox: `0 0 ${S} ${S}`,
    className,
    "aria-hidden": true as const,
    focusable: "false" as const,
  };

  if (kind === "certs") {
    // A framed plaque: outer frame, mat line, certified disc with a ribbon.
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="10" y="6" width="76" height="84" rx="4" />
        <rect x="20" y="16" width="56" height="64" />
        <circle cx="48" cy="40" r="14" />
        <circle cx="48" cy="40" r="7" strokeWidth="2" />
        <path d="M42 52l-4 18 10-7 10 7-4-18" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "no1s") {
    // A podium, first step tallest, a flag on top.
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M8 88V64h24v24" />
        <path d="M36 88V40h24v48" />
        <path d="M64 88V72h24v16" />
        <path d="M4 88h88" />
        <path d="M48 40V18" strokeWidth="2.5" />
        <path d="M48 18h16l-5 6 5 6H48" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "albums") {
    // A vinyl disc with the real No Sign of Weakness cover in the label.
    // Unlike the other glyphs, opacity is split INSIDE the SVG: the raster
    // cover has to stay bright enough to recognise on the dark background, so
    // the host wrapper runs at ~0.35 and the line-work is dimmed here to land
    // at the same effective weight as its 0.07-opacity siblings.
    return (
      <svg {...common}>
        <defs>
          <clipPath id={clipId}>
            <circle cx="48" cy="48" r="17" />
          </clipPath>
        </defs>
        <g fill="none" stroke="currentColor" opacity="0.2">
          <circle cx="48" cy="48" r="44" strokeWidth="3" />
          <circle cx="48" cy="48" r="36" strokeWidth="1.5" opacity="0.7" />
          <circle cx="48" cy="48" r="30" strokeWidth="1.5" opacity="0.55" />
          <circle cx="48" cy="48" r="24" strokeWidth="1.5" opacity="0.4" />
        </g>
        {nsow?.cover && (
          <image
            href={`${nsow.cover.replace("b273", "4851")}`}
            x="31"
            y="31"
            width="34"
            height="34"
            clipPath={`url(#${clipId})`}
            preserveAspectRatio="xMidYMid slice"
          />
        )}
        <circle cx="48" cy="48" r="17" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
        <circle cx="48" cy="48" r="2.5" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }

  if (kind === "countries") {
    // A globe: sphere, two meridians, two parallels.
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="48" cy="48" r="40" />
        <ellipse cx="48" cy="48" rx="18" ry="40" strokeWidth="2" />
        <path d="M48 8v80" strokeWidth="2" />
        <path d="M12 34h72M12 62h72" strokeWidth="2" />
      </svg>
    );
  }

  // tour — a stadium bowl: tiered arcs, pitch line, floodlight masts.
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M8 46c0 18 18 32 40 32s40-14 40-32" />
      <path d="M16 46c0 13 14 24 32 24s32-11 32-24" strokeWidth="2" />
      <ellipse cx="48" cy="46" rx="40" ry="12" />
      <ellipse cx="48" cy="46" rx="20" ry="6" strokeWidth="2" />
      <path d="M20 34V18m56 16V18" strokeWidth="2.5" />
      <path d="M14 18h12m44 0h12" strokeWidth="2.5" />
    </svg>
  );
}
