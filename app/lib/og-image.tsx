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
 * The address a share card prints, bottom-left: BURNABOYSTATS.COM/dai-dai.
 *
 * THE CASE IS LOAD-BEARING. A hostname is case-insensitive (RFC 4343), so the
 * domain can carry the cards' tracked caps and still be typed back correctly. A
 * PATH is not, and this site does no case folding — there is no middleware.ts,
 * and next.config.mjs redirects only the vercel host and /tour. Every card that
 * printed a path was printing a dead one, checked rather than assumed:
 *
 *   /timeline                   200      /TIMELINE                   404
 *   /dai-dai                    200      /DAI-DAI                    404
 *   /music/last-last            200      /MUSIC/LAST-LAST            404
 *   /music/albums/love-damini   200      /MUSIC/ALBUMS/LOVE-DAMINI   404
 *   /afrobeats/wizkid           200      /AFROBEATS/WIZKID           404
 *   /afrobeats/wizkid/charts    200      /AFROBEATS/WIZKID/CHARTS    404
 *   /afrobeats/seyi-vibez/live  200      /AFROBEATS/SEYI-VIBEZ/LIVE  404
 *
 * Five of those seven built the string as `${slug.toUpperCase()}` and two typed
 * it in caps; all seven have shipped a 404 since the day they went up. That line
 * exists to survive a screenshot with no link chrome — reposted into a group
 * chat, cropped into a slide — which is the one case where the reader has to
 * retype what they can see. So the domain shouts and the path does not.
 *
 * Feed the RESULT into the card's ogId as well. A card whose id does not move
 * keeps serving the picture a scraper cached, so the fix would never reach the
 * previews that are already wrong — which is the whole population this is for.
 */
export const cardUrl = (path: string) => `BURNABOYSTATS.COM${path.toLowerCase()}`;

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
