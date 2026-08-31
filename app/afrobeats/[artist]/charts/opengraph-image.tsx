import { ImageResponse } from "next/og";
import { ogId } from "../../../lib/og-image";
import { artistBySlug, afrobeatsArtists, chartEntries, chartTerritories, chartNo1s, countryMeta, bestPeaks } from "../../../data/afrobeats";

export function generateStaticParams() {
  return afrobeatsArtists.filter((a) => a.charts.length > 0).map((a) => ({ artist: a.slug }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  // Survives the param-less probe Next runs while collecting page data.
  const sig = a
    ? `${slug}|charts|${chartEntries(a)}|${chartTerritories(a)}|${chartNo1s(a)}`
    : `${slug}`;
  return [{ id: ogId(sig), alt, size, contentType }];
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Official chart peaks by country, read from each country's own chart";

const GOLD = "#ffb627";
const CYAN = "#8fe3f0";

export default async function Image({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);

  // The card's proof is the peaks themselves: best positions first, flags and
  // all, so a share preview shows the record rather than describing it.
  // bestPeaks carries the non-obvious dedupe (and its history) in one tested place.
  const best = a ? bestPeaks(a, 8) : [];

  const stats = a
    ? [
        { v: `${chartEntries(a)}`, l: "Chart entries" },
        { v: `${chartTerritories(a)}`, l: "Territories" },
        { v: `${chartNo1s(a)}`, l: "No. 1 peaks" },
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
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.20), rgba(255,182,39,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: GOLD, textTransform: "uppercase", fontWeight: 700 }}>
            Official charts · peak positions
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1, marginTop: 16, color: GOLD }}>
            {a?.name ?? "Artist"}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, maxWidth: 1060 }}>
          {best.map((e) => {
            const meta = countryMeta(e.c);
            const one = e.peak === 1;
            return (
              <div
                key={e.c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 20px",
                  borderRadius: 999,
                  border: `1px solid ${one ? GOLD : e.peak <= 10 ? "rgba(143,227,240,0.55)" : "rgba(245,244,240,0.18)"}`,
                  background: one ? "rgba(255,182,39,0.18)" : "transparent",
                  color: one ? GOLD : e.peak <= 10 ? CYAN : "#c9c9d0",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                {meta.flag} #{e.peak} <span style={{ color: "#9b9ba3", fontWeight: 400 }}>{meta.name}</span>
              </div>
            );
          })}
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
                minWidth: 190,
              }}
            >
              <div style={{ display: "flex", fontSize: 48, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.v}</div>
              <div style={{ display: "flex", fontSize: 18, color: "#9b9ba3", marginTop: 9, textTransform: "uppercase", letterSpacing: 1 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>
          BURNABOYSTATS.COM/AFROBEATS/{(a?.slug ?? "").toUpperCase()}/CHARTS
        </div>
      </div>
    ),
    { ...size }
  );
}
