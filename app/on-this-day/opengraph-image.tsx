import { ImageResponse } from "next/og";
import { OgLockup, ogFonts } from "../lib/og-lockup";
import { ogId, cardUrl } from "../lib/og-image";
import { calendarTiles } from "../lib/onThisDayShare";
import { OTD_GOLD, ShareUrl } from "../lib/onThisDayImages";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burna Boy on this day — a calendar of dated milestones";

// DATES · MILESTONES · MONTHS · YEARS (change list 16) — counts and the year
// span, read off the data, never typed.
const tiles = calendarTiles();

// Versioned by what the card prints, like the other data-driven cards (see
// ogId in lib/og-image.tsx): a new dated record moves the figures, and the
// scraped previews follow.
export const generateImageMetadata = () => [
  { id: ogId([...tiles.map((t) => `${t.v}${t.k}`), cardUrl("/on-this-day")].join("|")), alt, size, contentType },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
          padding: "56px 64px 52px",
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
        {/* The lockup takes the corner facing the kicker, as on the timeline card. */}
        <div style={{ position: "absolute", top: 56, right: 64, display: "flex" }}>
          <OgLockup />
        </div>

        <div style={{ position: "relative", display: "flex", alignItems: "center", height: 44 }}>
          <div style={{ display: "flex", fontSize: 27, letterSpacing: 3.78, color: OTD_GOLD, maxWidth: 780, whiteSpace: "nowrap" }}>
            BURNA BOY · THE CALENDAR
          </div>
        </div>

        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 112, lineHeight: 0.95, letterSpacing: -1.12, color: OTD_GOLD }}>On This Day</div>
          <div style={{ display: "flex", fontSize: 30, lineHeight: 1.3, color: "#c9c9d0", maxWidth: 900 }}>
            A dated milestone for every day that has one — each on the day it happened.
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
            {tiles.map((t) => (
              <div
                key={t.k}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  padding: "16px 22px",
                  borderRadius: 12,
                  background: "#141416",
                  border: "1px solid rgba(245,244,240,0.12)",
                }}
              >
                <div style={{ display: "flex", fontSize: 46, lineHeight: 1, color: OTD_GOLD }}>{t.v}</div>
                <div style={{ display: "flex", fontSize: 18, letterSpacing: 2.16, color: "#9b9ba3" }}>{t.k}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", display: "flex" }}>
          <ShareUrl url={cardUrl("/on-this-day")} fontSize={20} color="#9b9ba3" tracking={2} />
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts }
  );
}
