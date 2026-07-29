import { ImageResponse } from "next/og";

// Shared Open Graph card generator so every route gets a branded, on-message
// share image (gold-on-near-black, matching the site).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function ogImage({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
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

/**
 * Cache key for a social preview card.
 *
 * Next derives the `?<hash>` on an og:image URL from the route file, not from
 * the data the card renders. So a card built from live figures keeps the exact
 * same URL after those figures move, and Twitter, WhatsApp, Slack and iMessage
 * go on serving whichever copy they scraped first — a preview frozen at
 * whatever the numbers were the day someone first shared the link.
 *
 * Feeding the rendered text through here puts it in the URL instead, so the
 * preview changes precisely when the card changes, and not otherwise.
 */
export function ogId(s: string) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

export function ogVersions(
  card: { kicker: string; title: string; sub?: string },
  alt: string
) {
  return [
    { id: ogId([card.kicker, card.title, card.sub ?? ""].join("|")), alt, size, contentType },
  ];
}
