import { ImageResponse } from "next/og";
import { OgLockup, ogFonts } from "./og-lockup";

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
        {/* LOGO.md: "OG images: burnaboystats-horizontal.svg top-left at 44px
            tall, on the dark ground they already use." Absolutely positioned so
            it does not enter the centred column and shift the headline. */}
        <div style={{ position: "absolute", top: 46, left: 90, display: "flex" }}>
          <OgLockup />
        </div>
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
    { ...size, fonts: ogFonts }
  );
}

/** One bar of a ladder card: its label, its length (0–1 of the longest), and
 *  whether it is his — gold if so, the --other neutral if not. */
export interface OgLadderRow {
  label: string;
  w: number;
  his: boolean;
}

/** The two box-office cards' shape (Claude Design round 1, 4 Oct 2026,
 *  GXOG.dc.html): kicker, title and one big figure at the left, a ladder of
 *  bars at the right, the address and a foot line along the bottom. */
export interface OgLadderCard {
  kicker: string;
  title: string;
  /** The figure, e.g. "$6,147,209". */
  big: string;
  /** Gold only when the figure is his (N6): another artist's record prints in ink. */
  bigHis: boolean;
  bigCap: string;
  graphTitle: string;
  rows: OgLadderRow[];
  /** The page's path; the card prints it through cardUrl. */
  path: string;
  foot: string;
}

/**
 * The ladder variant of the share card. Satori lays out flexbox only, so every
 * box is a flex container; colours are the dark card's literals (the cards stay
 * gold on near-black for every page). A ladder label is "{artist} · {venue}"
 * in a fixed column with an ellipsis (review fix 11: two rows both read
 * "La Défense Arena", told apart by colour alone).
 */
export function ogLadder(card: OgLadderCard) {
  const GOLD = "#ffb627";
  const OTHER = "#74747e";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          background: "#0a0a0b",
          backgroundImage: "radial-gradient(circle at 0% 0%, rgba(255,182,39,0.12), rgba(10,10,11,0) 60%)",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 46, left: 64, display: "flex" }}>
          <OgLockup />
        </div>
        <div style={{ position: "absolute", left: 64, top: 140, width: 540, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Space Mono", fontSize: 16, letterSpacing: 2.2, color: GOLD, textTransform: "uppercase" }}>
            {card.kicker}
          </div>
          <div style={{ display: "flex", marginTop: 18, fontFamily: "Anton", fontSize: 64, lineHeight: 0.98, textTransform: "uppercase" }}>
            {card.title}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", marginTop: 28 }}>
            <div style={{ display: "flex", fontFamily: "Anton", fontSize: 76, lineHeight: 0.9, color: card.bigHis ? GOLD : "#f5f4f0" }}>
              {card.big}
            </div>
            <div style={{ display: "flex", marginLeft: 18, paddingBottom: 4, fontSize: 20, lineHeight: 1.3, color: "#cfc7bb", maxWidth: 260 }}>
              {card.bigCap}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", right: 64, top: 140, width: 500, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Space Mono", fontSize: 13, letterSpacing: 1.6, color: "#9b9ba3", textTransform: "uppercase" }}>
            {card.graphTitle}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 14 }}>
            {card.rows.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", height: 20, marginTop: i ? 7 : 0 }}>
                <div
                  style={{
                    display: "block",
                    width: 250,
                    fontSize: 15,
                    color: "#f5f4f0",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {r.label}
                </div>
                <div style={{ display: "flex", marginLeft: 12, width: 238, height: 10, background: "#1c1c21", borderRadius: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      width: Math.max(3, Math.round(238 * r.w)),
                      height: 10,
                      borderRadius: 2,
                      background: r.his ? GOLD : OTHER,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            bottom: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(245,244,240,0.14)",
            paddingTop: 20,
          }}
        >
          <div style={{ display: "flex", fontFamily: "Space Mono", fontSize: 16, letterSpacing: 1, color: "#f5f4f0" }}>
            {cardUrl(card.path)}
          </div>
          <div style={{ display: "flex", fontFamily: "Space Mono", fontSize: 13, letterSpacing: 1.6, color: "#9b9ba3", textTransform: "uppercase" }}>
            {card.foot}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts }
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
 * The version of the card ART, folded into every id below.
 *
 * An id derived only from a card's TEXT cannot express "the same words, drawn
 * differently". The lockup is exactly that change: the copy on all thirty-seven
 * cards is identical either side of it, so without this every preview already
 * scraped by X, Facebook, Slack and iMessage would go on serving the logo-less
 * image for as long as their caches live — which for some of them is forever.
 *
 * Bump it whenever the drawing changes and the words do not. Do NOT bump it for
 * a data change; those move their own ids already, and re-versioning all
 * thirty-seven cards to ship one new figure is just churn.
 *
 *   lockup-1       the crown lockup reached every card
 *   on-this-day-1  the On This Day images redrawn (26 Sep 2026): the
 *                  milestone as the hero, covers, the post card's numeral,
 *                  and the faded portrait (same day, before any of it was
 *                  live, so the one bump covers it)
 *   on-this-day-2  the post card leads with the milestone, not the date
 *                  (26 Sep 2026, Paul): the headline is the hero, the date
 *                  a small gold label over it, the numeral gone
 *   on-this-day-3  a day preview's meta line steps down where it would wrap
 *                  beside a cover (8 and 18 September, 8 December, 23
 *                  January), and the day previews are re-encoded under 300 KB
 *                  — 37 were over it, and a preview dropped for its size may
 *                  sit in a cache as "no image" (live debug, 27 Sep 2026)
 *   stat-cards-asof-1  every stat card's "As of" prints its own figure's date
 *                  rather than the site's newest update, and the peak-listeners
 *                  card credits "Spotify · kworb" (Spotify audit, 27 Sep 2026)
 */
export const OG_ART = "stat-cards-asof-1";

/**
 * The root card's URL, for the three pages that cite it by hand.
 *
 * /404, /search and /primitives draw no card of their own — they name the root
 * one, because the inherited openGraph block drops `images` the moment a page
 * declares any field of its own (see the notes on those pages). A bare
 * `/opengraph-image` carries no version at all, so when the art changed those
 * three were the only surfaces on the site whose preview could never be
 * re-scraped. The query is inert to Next, which matches the route and ignores
 * it, and distinct to every cache that has already stored the old picture.
 */
export const ROOT_OG_IMAGE = `/opengraph-image?${OG_ART}`;

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
  const salted = `${OG_ART}|${s}`;
  for (let i = 0; i < salted.length; i++) h = ((h * 33) ^ salted.charCodeAt(i)) >>> 0;
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
