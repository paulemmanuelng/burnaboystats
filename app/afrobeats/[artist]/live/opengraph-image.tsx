import { ImageResponse } from "next/og";
import { ogId } from "../../../lib/og-image";
import { artistBySlug } from "../../../data/afrobeats";
import { LIVE_BOARDS, liveBoardFor } from "../../../data/liveBoards";

export function generateStaticParams() {
  return LIVE_BOARDS.map((b) => ({ artist: b.slug }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const b = liveBoardFor(slug);
  // The card is a snapshot, so its id has to move with the snapshot — otherwise
  // a scraper keeps serving whatever it read the first time. Survives the
  // param-less probe Next runs while collecting page data.
  const sig = b ? `${slug}|live|${b.updated}|${b.placements}|${b.countries}|${b.numberOnes}` : `${slug}`;
  return [{ id: ogId(sig), alt, size, contentType }];
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Live platform chart placements, refreshed hourly";

const GOLD = "#ffb627";
const LIVE = "#70e0a0";

export default async function Image({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  const b = liveBoardFor(slug);

  // One row per TITLE. A title track charts as both a song and an album —
  // Seyi Vibez's "FUJI MOTO" is both — and the card listed the same name twice
  // at two positions, which reads as a bug rather than as two charts.
  const byTitle = new Map<string, { title: string; best: number; reach: number }>();
  for (const r of b?.releases ?? []) {
    const positions = r.platforms.flatMap((p) => p.entries.map((e) => e.position));
    if (!positions.length) continue;
    const row = {
      title: r.title,
      best: Math.min(...positions),
      reach: r.platforms.reduce((n, p) => n + p.entries.length, 0),
    };
    const seen = byTitle.get(r.title);
    if (!seen || row.reach > seen.reach) {
      byTitle.set(r.title, seen ? { ...row, reach: seen.reach + row.reach, best: Math.min(seen.best, row.best) } : row);
    } else {
      byTitle.set(r.title, { ...seen, reach: seen.reach + row.reach, best: Math.min(seen.best, row.best) });
    }
  }
  const top = [...byTitle.values()].sort((x, y) => y.reach - x.reach).slice(0, 4);

  const stats = b
    ? [
        { v: `${b.placements}`, l: "Placements" },
        { v: `${b.countries}`, l: "Countries" },
        { v: `${b.platformTotals.length}`, l: "Platforms" },
      ]
    : [];

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
        <div
          style={{
            position: "absolute",
            top: -190,
            right: -150,
            width: 580,
            height: 580,
            display: "flex",
            background: "radial-gradient(circle, rgba(112,224,160,0.20), rgba(112,224,160,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, letterSpacing: 6, color: LIVE, textTransform: "uppercase", fontWeight: 700 }}>
            <div style={{ display: "flex", width: 16, height: 16, borderRadius: 8, background: LIVE }} />
            Charting right now
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, letterSpacing: -3, lineHeight: 1, marginTop: 14, marginBottom: 10, color: GOLD }}>
            {a?.name ?? "Artist"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
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
                {t.reach} charts
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
          PLATFORM CHARTS · BURNABOYSTATS.COM/AFROBEATS/{(slug ?? "").toUpperCase()}/LIVE
        </div>
      </div>
    ),
    { ...size }
  );
}
