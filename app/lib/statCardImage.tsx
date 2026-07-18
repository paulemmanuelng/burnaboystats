import { ImageResponse } from "next/og";
import type { StatCard } from "./statCards";

export const statCardSize = { width: 1080, height: 1080 };
const GOLD = "#ffb627";

// A square, downloadable stat card — brand mark, a big gold value, the stat and
// its context, on the site's gold-on-black look.
export function statCardImage(card: StatCard) {
  const big = card.value.replace(/[^0-9A-Za-z]/g, "").length <= 4;
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
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -230,
            right: -170,
            width: 660,
            height: 660,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.22), rgba(255,182,39,0) 70%)",
          }}
        />

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, letterSpacing: 1 }}>
            <span style={{ display: "flex" }}>BURNABOY</span>
            <span style={{ display: "flex", color: GOLD }}>STATS</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: GOLD, textTransform: "uppercase" }}>
            The African Giant
          </div>
        </div>

        {/* Center: kicker · value · label */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#9b9ba3", textTransform: "uppercase", marginBottom: 20 }}>
            {card.kicker}
          </div>
          <div style={{ display: "flex", fontSize: big ? 280 : 168, fontWeight: 800, letterSpacing: -6, lineHeight: 0.9, color: GOLD }}>
            {card.value}
          </div>
          <div style={{ display: "flex", fontSize: 54, lineHeight: 1.15, color: "#f5f4f0", marginTop: 26, maxWidth: 900 }}>
            {card.label}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(245,244,240,0.14)", paddingTop: 30 }}>
          <div style={{ display: "flex", fontSize: 28, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>
            BURNABOYSTATS.COM
          </div>
          <div style={{ display: "flex", fontSize: 24, color: GOLD, letterSpacing: 2 }}>Burna Boy · by the numbers</div>
        </div>
      </div>
    ),
    { ...statCardSize }
  );
}
