import { ImageResponse } from "next/og";
import { songBySlug, songSlugs } from "../../data/songs";
import { allChartItems } from "../../data/charts";
import { allItems } from "../../data/certifications";

export function generateStaticParams() {
  return songSlugs.map((song) => ({ song }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burna Boy song — chart peaks, certifications and stats";

const GOLD = "#ffb627";

export default async function Image({ params }: { params: Promise<{ song: string }> }) {
  const { song: slug } = await params;
  const song = songBySlug(slug);

  const chart = song && allChartItems.find((r) => r.title === song.title);
  const cert = song && allItems.find((r) => r.title === song.title);
  const entries = chart ? chart.entries : [];
  const countries = entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX").length;
  const best = entries.length ? Math.min(...entries.map((e) => e.peak)) : null;
  const certCount = cert ? cert.certs.length : 0;

  const stats = [
    best != null && { v: best === 1 ? "No.1" : `#${best}`, l: "Best peak" },
    countries > 0 && { v: `${countries}`, l: "Countries" },
    certCount > 0 && { v: `${certCount}`, l: "Certs" },
  ].filter(Boolean) as { v: string; l: string }[];

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
            background: "radial-gradient(circle, rgba(255,182,39,0.22), rgba(255,182,39,0) 70%)",
          }}
        />

        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: GOLD, textTransform: "uppercase", fontWeight: 700 }}>
          Burna Boy · {song?.album ?? "Song"} · {song?.year ?? ""}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
          {song && (
            <img
              src={song.cover}
              width={300}
              height={300}
              alt=""
              style={{ borderRadius: 18, border: "2px solid rgba(245,244,240,0.16)" }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", fontSize: 104, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: GOLD }}>
              {song?.title ?? "Song"}
            </div>
            <div style={{ display: "flex", fontSize: 28, color: "#c9c9d0", marginTop: 16, lineHeight: 1.3, maxWidth: 640 }}>
              {song?.tagline ?? ""}
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 30 }}>
              {stats.map((s) => (
                <div
                  key={s.l}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px 22px",
                    background: "#141416",
                    border: "1px solid rgba(245,244,240,0.12)",
                    borderRadius: 12,
                    minWidth: 140,
                  }}
                >
                  <div style={{ display: "flex", fontSize: 48, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ display: "flex", fontSize: 19, color: "#9b9ba3", marginTop: 9, textTransform: "uppercase", letterSpacing: 1 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#9b9ba3", letterSpacing: 4, fontWeight: 700 }}>
          BURNABOYSTATS.COM/MUSIC/{(song?.slug ?? "").toUpperCase()}
        </div>
      </div>
    ),
    { ...size }
  );
}
