import { ImageResponse } from "next/og";

// Social share preview card (shown when the link is pasted on X, WhatsApp, etc.)
export const alt = "Burna Boy Stats — Unofficial Fan Site";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 140, fontWeight: 800, letterSpacing: -4 }}>
          <span>BURNA</span>
          <span style={{ color: "#ffb627", marginLeft: 28 }}>BOY</span>
        </div>
        <div style={{ fontSize: 44, letterSpacing: 16, color: "#9b9ba3", marginTop: 4 }}>
          STATS
        </div>
        <div style={{ fontSize: 30, color: "#9b9ba3", marginTop: 36 }}>
          The African Giant — by the numbers
        </div>
      </div>
    ),
    { ...size }
  );
}
