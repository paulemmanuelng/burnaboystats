import { ImageResponse } from "next/og";
import { OgLockup, ogFonts } from "../../lib/og-lockup";
import { ogId, cardUrl } from "../../lib/og-image";
import { KIND_MARK, dayBySlug, onThisDayDays, yearSpan } from "../../lib/onThisDay";

export function generateStaticParams() {
  return onThisDayDays.map((d) => ({ day: d.slug }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burna Boy on this day";

const GOLD = "#ffb627";

/** What the card prints, so its id moves when the day's list does. */
function cardFor(slug: string) {
  const day = dayBySlug(slug);
  if (!day) return null;
  const n = day.events.length;
  return {
    day,
    lead: `${day.lead.year} — ${day.lead.headline}`,
    stats: [
      { v: String(n), l: n === 1 ? "Milestone" : "Milestones" },
      { v: yearSpan(day.events), l: "Years" },
      { v: KIND_MARK[day.lead.kind].word, l: "Leads with" },
    ],
    url: cardUrl(`/on-this-day/${day.slug}`),
  };
}

export async function generateImageMetadata({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const card = cardFor(slug);
  return [
    {
      id: ogId([card?.lead ?? slug, ...(card?.stats.map((s) => s.v) ?? []), cardUrl(`/on-this-day/${slug}`)].join("|")),
      alt: card ? `Burna Boy on this day, ${card.day.label}: ${card.lead}` : alt,
      size,
      contentType,
    },
  ];
}

export default async function Image({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const card = cardFor(slug);

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
        {/* The lockup takes the corner facing the kicker, as on the song cards. */}
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
          Burna Boy · On this day
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 120, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: GOLD }}>
            {card?.day.label ?? "On This Day"}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#c9c9d0", marginTop: 18, lineHeight: 1.3, maxWidth: 1000 }}>
            {card?.lead ?? ""}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 30 }}>
            {(card?.stats ?? []).map((s) => (
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
                <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.v}</div>
                <div style={{ display: "flex", fontSize: 19, color: "#9b9ba3", marginTop: 9, textTransform: "uppercase", letterSpacing: 1 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#9b9ba3", letterSpacing: 4, fontWeight: 700 }}>
          {card?.url ?? cardUrl("/on-this-day")}
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts }
  );
}
