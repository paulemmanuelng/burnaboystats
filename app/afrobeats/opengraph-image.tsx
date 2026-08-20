import { ImageResponse } from "next/og";
import { ogId } from "../lib/og-image";
import { sweptArtists, certCount, AFROBEATS_VERIFIED_ON } from "../data/afrobeats";
import { totalAwards } from "../data/certifications";

// The card carries live totals, so its id has to move when they do — otherwise
// a scraper keeps serving whatever it read the first time.
export function generateImageMetadata() {
  const sig = `${totalAwards()}|${sweptArtists.map((a) => certCount(a)).join("-")}|${AFROBEATS_VERIFIED_ON}`;
  return [{ id: ogId(sig), alt, size, contentType }];
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Afrobeats Board — certifications and chart records, verified at source";

const GOLD = "#ffb627";

export default function Image() {
  // Burna leads the board because he is the site's subject, then by plaques.
  const rows = [
    { name: "Burna Boy", n: totalAwards(), anchor: true },
    ...[...sweptArtists]
      .sort((a, b) => certCount(b) - certCount(a))
      .slice(0, 5)
      .map((a) => ({ name: a.name, n: certCount(a), anchor: false })),
  ];
  const most = Math.max(...rows.map((r) => r.n));

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
            left: -150,
            width: 580,
            height: 580,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.20), rgba(255,182,39,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: GOLD, textTransform: "uppercase", fontWeight: 700 }}>
            {`One rule · ${sweptArtists.length + 1} artists`}
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1, marginTop: 18 }}>
            The Afrobeats Board
          </div>
        </div>

        {/* A bar per artist — the comparison is the page, so it is the card. */}
        <div style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 8 }}>
          {rows.map((r) => (
            <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  display: "flex",
                  width: 250,
                  fontSize: 30,
                  fontWeight: 700,
                  color: r.anchor ? GOLD : "#f5f4f0",
                }}
              >
                {r.name}
              </div>
              <div
                style={{
                  display: "flex",
                  width: Math.round((r.n / most) * 620),
                  height: 34,
                  borderRadius: 6,
                  background: r.anchor ? GOLD : "rgba(245,244,240,0.26)",
                }}
              />
              <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: r.anchor ? GOLD : "#c9c9d0" }}>
                {r.n}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", fontSize: 25, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>
          CERTIFICATIONS READ AT SOURCE · BURNABOYSTATS.COM/AFROBEATS
        </div>
      </div>
    ),
    { ...size }
  );
}
