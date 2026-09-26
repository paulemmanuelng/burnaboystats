import { ImageResponse } from "next/og";
import { OgLockup, ogFonts } from "../lib/og-lockup";
import { ogId, cardUrl } from "../lib/og-image";
import { KIND_LABEL, onThisDayCounts, onThisDayDays, onThisDayEvents, type OnThisDayKind } from "../lib/onThisDay";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burna Boy on this day — a calendar of dated milestones";

const GOLD = "#ffb627";

// The three biggest kinds, by count — read off the data, never typed.
const top = (Object.keys(KIND_LABEL) as OnThisDayKind[])
  .filter((k) => onThisDayCounts[k] > 0)
  .sort((a, b) => onThisDayCounts[b] - onThisDayCounts[a])
  .slice(0, 2);

const stats = [
  { v: String(onThisDayDays.length), l: "Dates" },
  { v: String(onThisDayEvents.length), l: "Milestones" },
  ...top.map((k) => ({ v: String(onThisDayCounts[k]), l: KIND_LABEL[k] })),
];

// Versioned by what the card prints, like the other data-driven cards (see
// ogId in lib/og-image.ts): a new dated record moves the figures, and the
// scraped previews follow.
export const generateImageMetadata = () => [
  { id: ogId([...stats.map((s) => `${s.v}${s.l}`), cardUrl("/on-this-day")].join("|")), alt, size, contentType },
];

export default function Image() {
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
        {/* The lockup takes the corner facing the kicker, as on the timeline card. */}
        <div style={{ position: "absolute", top: 56, right: 64, display: "flex" }}>
          <OgLockup />
        </div>
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

        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: GOLD, textTransform: "uppercase", fontWeight: 700, maxWidth: 780 }}>
          Burna Boy · The calendar
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 110, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: GOLD }}>
            On This Day
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#c9c9d0", marginTop: 18, lineHeight: 1.3, maxWidth: 900 }}>
            A dated milestone for every day that has one — each on the day it happened.
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
          {cardUrl("/on-this-day")}
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts }
  );
}
