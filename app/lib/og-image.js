import { ImageResponse } from "next/og";

// Shared Open Graph card generator so every route gets a branded, on-message
// share image (gold-on-near-black, matching the site).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function ogImage({ kicker, title, sub }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#ffb627", textTransform: "uppercase" }}>
          {kicker}
        </div>
        <div style={{ fontSize: 108, fontWeight: 800, letterSpacing: -3, marginTop: 14, lineHeight: 1 }}>
          {title}
        </div>
        {sub ? (
          <div style={{ fontSize: 34, color: "#9b9ba3", marginTop: 26, maxWidth: 900 }}>{sub}</div>
        ) : null}
        <div style={{ position: "absolute", bottom: 50, left: 90, fontSize: 26, color: "#9b9ba3", letterSpacing: 5 }}>
          BURNABOYSTATS.COM
        </div>
      </div>
    ),
    { ...size }
  );
}
