import { ImageResponse } from "next/og";
import { timelineEntryCount, timelineEras } from "../data/timeline";
import { totalAwards } from "../data/certifications";
import { numberOnes } from "../data/charts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burna Boy career timeline — 2010 to today";

const GOLD = "#ffb627";

export default function Image() {
  const stats = [
    { v: `${timelineEras.length}`, l: "Eras" },
    { v: `${timelineEntryCount}`, l: "Milestones" },
    { v: String(totalAwards()), l: "Certs" },
    { v: String(numberOnes), l: "No. 1s" },
  ];

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
          Burna Boy · Est. 2010
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 110, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: GOLD }}>
            The Career Timeline
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#c9c9d0", marginTop: 18, lineHeight: 1.3, maxWidth: 900 }}>
            From Port Harcourt to the World Cup Final halftime show — dated and sourced.
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 34 }}>
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
                  minWidth: 150,
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

        <div style={{ display: "flex", fontSize: 26, color: "#9b9ba3", letterSpacing: 4, fontWeight: 700 }}>
          BURNABOYSTATS.COM/TIMELINE
        </div>
      </div>
    ),
    { ...size }
  );
}
