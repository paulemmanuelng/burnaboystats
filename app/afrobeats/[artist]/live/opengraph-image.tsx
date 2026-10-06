import { ImageResponse } from "next/og";
import { ogId, cardUrl } from "../../../lib/og-image";
import { OgLockup, ogFonts } from "../../../lib/og-lockup";
import { artistBySlug } from "../../../data/afrobeats";
import { LIVE_BOARDS, liveBoardFor } from "../../../data/liveBoards";
import { LIVE_CADENCE, liveTitleRows } from "../../../lib/liveChartMeta";
import { plural } from "../../../lib/plural";
import { liveTiles, tilesSig } from "../../../lib/ogStatTiles";

export function generateStaticParams() {
  return LIVE_BOARDS.map((b) => ({ artist: b.slug }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const b = liveBoardFor(slug);
  // The card is a snapshot, so its id has to move with the snapshot — otherwise
  // a scraper keeps serving whatever it read the first time. Survives the
  // param-less probe Next runs while collecting page data.
  // The rows and tiles AS PRINTED join it: three rows, singular labels and
  // the description's tie-break all changed the picture on 5 Oct 2026, and a
  // snapshot that had not moved would have kept the old card.
  const sig = b
    ? `${slug}|live|${b.updated}|${b.placements}|${b.countries}|${b.numberOnes}|${liveTitleRows(b.releases)
        .slice(0, LIVE_CARD_ROWS)
        .map((t) => `${t.best}:${t.title}:${t.reach}`)
        .join(",")}|${tilesSig(tilesFor(b))}|${cardUrl(`/afrobeats/${slug}/live`)}`
    : `${slug}`;
  const artist = artistBySlug(slug);
  return [{ id: ogId(sig), alt: artist ? `${artist.name} — live platform chart placements, ${LIVE_CADENCE}` : alt, size, contentType }];
}

/** How many title rows the card draws. */
const LIVE_CARD_ROWS = 3;

/** The stat tiles, singular where the count is one (debug pass 5 Oct 2026). */
const tilesFor = (b: NonNullable<ReturnType<typeof liveBoardFor>>) => liveTiles(b.placements, b.countries, b.platformTotals.length);

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `Live platform chart placements, ${LIVE_CADENCE}`;

const GOLD = "#ffb627";
const LIVE = "#3ed17f"; // the site green — one green, per the token decision

export default async function Image({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  const b = liveBoardFor(slug);

  // One row per TITLE. A title track charts as both a song and an album —
  // Seyi Vibez's "FUJI MOTO" is both — and the card listed the same name twice
  // at two positions, which reads as a bug rather than as two charts. The
  // rows are liveTitleRows, the ones the page's description leads with.
  //
  // Three rows, not four: the fourth left the list, the tiles and the footer
  // about 1px apart and ran the footer ~27px into the bottom padding on every
  // live card (debug pass 5 Oct 2026, seo-19).
  const top = liveTitleRows(b?.releases ?? []).slice(0, LIVE_CARD_ROWS);

  const stats = b ? tilesFor(b) : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
          padding: 64,
          position: "relative",
        }}
      >
        {/* LOGO.md puts the lockup top-LEFT on a share card. On this one the
            top-left corner is the kicker's, so the mark takes the facing
            corner rather than displacing it — same 44px height, same clear
            space, and the card's own composition is untouched. */}
        <div style={{ position: "absolute", top: 56, right: 64, display: "flex" }}>
          <OgLockup />
        </div>
        <div
          style={{
            position: "absolute",
            top: -190,
            right: -150,
            width: 580,
            height: 580,
            display: "flex",
            background: "radial-gradient(circle, rgba(62,209,127,0.20), rgba(62,209,127,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, letterSpacing: 6, color: LIVE, textTransform: "uppercase", fontWeight: 700,
            // Capped like the sibling cards, so the kicker cannot reach
            // the lockup in the facing corner.
            maxWidth: 780 }}>
            <div style={{ display: "flex", width: 16, height: 16, borderRadius: 8, background: LIVE }} />
            Charting right now
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, letterSpacing: -3, lineHeight: 1, marginTop: 14, color: GOLD }}>
            {a?.name ?? "Artist"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {top.map((t) => (
            <div key={t.title} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: `1px solid ${t.best === 1 ? GOLD : "rgba(245,244,240,0.22)"}`,
                  background: t.best === 1 ? "rgba(255,182,39,0.18)" : "transparent",
                  color: t.best === 1 ? GOLD : "#c9c9d0",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                #{t.best}
              </div>
              <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>{t.title}</div>
              <div style={{ display: "flex", fontSize: 24, color: "#9b9ba3" }}>
                {t.reach} {plural(t.reach, "chart", "charts")}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {stats.map((s) => (
            <div
              key={s.l}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px",
                background: "#141416",
                border: "1px solid rgba(245,244,240,0.12)",
                borderRadius: 12,
                minWidth: 180,
              }}
            >
              <div style={{ display: "flex", fontSize: 46, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.v}</div>
              <div style={{ display: "flex", fontSize: 18, color: "#9b9ba3", marginTop: 9, textTransform: "uppercase", letterSpacing: 1 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>
          PLATFORM CHARTS · {cardUrl(`/afrobeats/${slug ?? ""}/live`)}
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts }
  );
}
