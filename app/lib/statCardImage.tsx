import { ImageResponse } from "next/og";
import type { StatCard } from "./statCards";

// A moderate landscape rectangle (not square, not a wide banner).
export const statCardSize = { width: 1200, height: 900 };
const BG = "#0a0a0b";
// A brushed-gold gradient for the headline value (nicer than flat gold).
const GOLD_GRAD = "linear-gradient(160deg, #ffe08a 0%, #ffc23e 46%, #e08f22 100%)";
// Burna Boy's Spotify artist photo (same CDN the discography uses).
const PHOTO = "https://i.scdn.co/image/ab6761610000e5ebb4e44d0f4e3e47af2cf06f3f";

// A premium, FUT-card-inspired share card: a headline stat (the "rating"), a
// supporting FIFA-style stat strip relevant to that stat, and Burna's photo
// faded into the right side. All text is kept on the dark left so it never
// overlaps the photo.
export function statCardImage(card: StatCard) {
  const alnum = card.value.replace(/[^0-9A-Za-z]/g, "").length;
  const valueSize = alnum <= 3 ? 210 : alnum <= 4 ? 164 : 128;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: BG,
          color: "#f5f4f0",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Burna's photo, anchored right (dimmed so it reads as part of the card) */}
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori (next/og) renders to a PNG server-side; next/image is not supported here */}
        <img
          src={PHOTO}
          width={620}
          height={900}
          alt=""
          style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 620, objectFit: "cover", objectPosition: "50% 16%", opacity: 0.82 }}
        />
        {/* Left→right wash: solid black under the text, long fade so the photo blends */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: `linear-gradient(90deg, ${BG} 0%, ${BG} 54%, rgba(10,10,11,0.85) 67%, rgba(10,10,11,0.55) 82%, rgba(10,10,11,0.46) 100%)`,
          }}
        />
        {/* Top/bottom vignette: darkens the bright backdrop up top (so the brand row
            reads) and the base (so the footer reads) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: `linear-gradient(180deg, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.8) 12%, rgba(10,10,11,0.35) 22%, rgba(10,10,11,0) 34%, rgba(10,10,11,0) 66%, rgba(10,10,11,0.96) 100%)`,
          }}
        />
        {/* Gold glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 620,
            height: 620,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.18), rgba(255,182,39,0) 70%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: "100%", height: "100%" }}>
          {/* Brand row */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 29, fontWeight: 800, letterSpacing: 1 }}>
              <span style={{ display: "flex" }}>BURNABOY</span>
              <span style={{ display: "flex", color: "#ffc23e" }}>STATS</span>
            </div>
            <div style={{ display: "flex", fontSize: 17, letterSpacing: 2, color: "#ffc23e", textTransform: "uppercase", marginLeft: 18, paddingLeft: 18, borderLeft: "1px solid rgba(255,182,39,0.35)" }}>
              The African Giant
            </div>
          </div>

          {/* Hero stat (the "rating") */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#9b9ba3", textTransform: "uppercase", marginBottom: 14, maxWidth: 440 }}>{card.kicker}</div>
            <div
              style={{
                display: "flex",
                fontSize: valueSize,
                fontWeight: 800,
                letterSpacing: -4,
                lineHeight: 0.9,
                backgroundImage: GOLD_GRAD,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {card.value}
            </div>
            <div style={{ display: "flex", fontSize: 42, lineHeight: 1.15, color: "#f5f4f0", marginTop: 20, maxWidth: 470 }}>{card.label}</div>
          </div>

          {/* FIFA-style supporting strip (relevant to this stat) + footer */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 30, marginBottom: 30, maxWidth: 620 }}>
              {card.stats.map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: "#ffc23e", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ display: "flex", fontSize: 14, color: "#9b9ba3", textTransform: "uppercase", letterSpacing: 1.2, marginTop: 8 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(245,244,240,0.16)", paddingTop: 24 }}>
              <div style={{ display: "flex", fontSize: 25, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>BURNABOYSTATS.COM</div>
              <div style={{ display: "flex", fontSize: 23, color: "#ffc23e", letterSpacing: 2 }}>Burna Boy · by the numbers</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...statCardSize }
  );
}
