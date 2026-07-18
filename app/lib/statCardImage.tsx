import { ImageResponse } from "next/og";
import type { StatCard, SignatureStat } from "./statCards";

// A moderate landscape rectangle (not square, not a wide banner).
export const statCardSize = { width: 1200, height: 900 };
const GOLD = "#ffb627";
const BG = "#0a0a0b";
// Burna Boy's Spotify artist photo (same CDN the discography uses).
const PHOTO = "https://i.scdn.co/image/ab6761610000e5ebb4e44d0f4e3e47af2cf06f3f";

// A premium, FUT-card-inspired share card: a headline stat (the "rating"), a
// supporting FIFA-style stat strip, and Burna's photo faded into the right side.
export function statCardImage(card: StatCard, trio: SignatureStat[] = []) {
  const alnum = card.value.replace(/[^0-9A-Za-z]/g, "").length;
  const valueSize = alnum <= 3 ? 216 : alnum <= 4 ? 168 : 132;

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
          width={640}
          height={900}
          alt=""
          style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 640, objectFit: "cover", objectPosition: "50% 16%", opacity: 0.82 }}
        />
        {/* Left→right wash: solid on the text side, long soft fade so the photo
            blends in rather than sitting behind a hard seam */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: `linear-gradient(90deg, ${BG} 0%, ${BG} 37%, rgba(10,10,11,0.85) 51%, rgba(10,10,11,0.6) 67%, rgba(10,10,11,0.5) 100%)`,
          }}
        />
        {/* Top/bottom vignette: kills the bright studio backdrop up top and keeps
            the footer readable over the photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: `linear-gradient(180deg, rgba(10,10,11,0.96) 0%, rgba(10,10,11,0.55) 15%, rgba(10,10,11,0.12) 30%, rgba(10,10,11,0) 44%, rgba(10,10,11,0) 66%, rgba(10,10,11,0.95) 100%)`,
          }}
        />
        {/* Gold glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 640,
            height: 640,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.20), rgba(255,182,39,0) 70%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: "100%", height: "100%" }}>
          {/* Brand row */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 800, letterSpacing: 1 }}>
              <span style={{ display: "flex" }}>BURNABOY</span>
              <span style={{ display: "flex", color: GOLD }}>STATS</span>
            </div>
            <div style={{ display: "flex", fontSize: 20, letterSpacing: 5, color: GOLD, textTransform: "uppercase", marginLeft: 22, paddingLeft: 22, borderLeft: "1px solid rgba(255,182,39,0.35)" }}>
              The African Giant
            </div>
          </div>

          {/* Hero stat (the "rating") */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 560 }}>
            <div style={{ display: "flex", fontSize: 25, letterSpacing: 4, color: "#9b9ba3", textTransform: "uppercase", marginBottom: 14 }}>{card.kicker}</div>
            <div style={{ display: "flex", fontSize: valueSize, fontWeight: 800, letterSpacing: -4, lineHeight: 0.9, color: GOLD }}>{card.value}</div>
            <div style={{ display: "flex", fontSize: 44, lineHeight: 1.15, color: "#f5f4f0", marginTop: 20, maxWidth: 560 }}>{card.label}</div>
          </div>

          {/* FIFA-style supporting strip + footer */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {trio.length ? (
              <div style={{ display: "flex", gap: 46, marginBottom: 30 }}>
                {trio.map((s) => (
                  <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", fontSize: 50, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ display: "flex", fontSize: 19, color: "#9b9ba3", textTransform: "uppercase", letterSpacing: 2, marginTop: 8 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(245,244,240,0.16)", paddingTop: 26 }}>
              <div style={{ display: "flex", fontSize: 26, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>BURNABOYSTATS.COM</div>
              <div style={{ display: "flex", fontSize: 24, color: GOLD, letterSpacing: 2 }}>Burna Boy · by the numbers</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...statCardSize }
  );
}
