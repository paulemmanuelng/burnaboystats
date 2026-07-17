import { ImageResponse } from "next/og";
import { daiDaiNumberOnes, daiDaiChartEntryCount } from "../data/charts";
import { daiDaiCertCount } from "../data/certifications";

// A rich, data-driven share card (like Polymarket's) — cover art + the headline
// Dai Dai stats + the song/halftime hook + the link. Auto-used as the page's
// og:image, so any share of /dai-dai renders this.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Dai Dai — Shakira & Burna Boy's 2026 FIFA World Cup anthem: No.1 worldwide, live at the Final halftime show on 19 July";

const COVER = "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4";
const GOLD = "#ffb627";

export default function Image() {
  const stats = [
    { v: "No.1", l: "Global 200" },
    { v: `${daiDaiNumberOnes}`, l: "Country No.1s" },
    { v: `${daiDaiChartEntryCount}`, l: "Charts" },
    { v: `${daiDaiCertCount}`, l: "Certs" },
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
        {/* gold glow, top-right */}
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

        {/* Kicker */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            color: GOLD,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Shakira × Burna Boy · 2026 World Cup Anthem
        </div>

        {/* Main row: cover + title/desc/stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
          <img
            src={COVER}
            width={300}
            height={300}
            alt=""
            style={{
              borderRadius: 18,
              border: "2px solid rgba(245,244,240,0.16)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                fontSize: 126,
                fontWeight: 800,
                letterSpacing: -4,
                lineHeight: 1,
                color: GOLD,
              }}
            >
              DAI DAI
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 29,
                color: "#c9c9d0",
                marginTop: 18,
                lineHeight: 1.3,
                maxWidth: 700,
              }}
            >
              The official 2026 FIFA World Cup anthem — the most-streamed song on Earth, live at
              the Final halftime show on 19 July.
            </div>

            <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
              {stats.map((s) => (
                <div
                  key={s.l}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px 18px",
                    background: "#141416",
                    border: "1px solid rgba(245,244,240,0.12)",
                    borderRadius: 12,
                    minWidth: 128,
                  }}
                >
                  <div style={{ display: "flex", fontSize: 46, fontWeight: 800, color: GOLD, lineHeight: 1 }}>
                    {s.v}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 18,
                      color: "#9b9ba3",
                      marginTop: 9,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: link + halftime hook */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#9b9ba3", letterSpacing: 4, fontWeight: 700 }}>
            BURNABOYSTATS.COM/DAI-DAI
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: GOLD,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 700,
              border: `1px solid ${GOLD}`,
              borderRadius: 999,
              padding: "10px 20px",
            }}
          >
            Live · World Cup Final · 19 July
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
