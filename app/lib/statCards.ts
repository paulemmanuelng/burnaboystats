import { totalAwards, countryCount, allItems, tierOf, daiDaiCertCount, COUNTRIES, CERTS_VERIFIED_ON } from "../data/certifications";
import { firstGroups } from "../data/firsts";
import { titleKey } from "./titleKey";
import { badgeWeight } from "./certs";
import { numberOnes, chartEntryCount, daiDaiNumberOnes, daiDaiChartEntryCount } from "../data/charts";
import { numberOneCountryCount } from "./analysis";
import { totalWins, totalNominations, ceremonyCount } from "../data/awards";
import { spotifyFollowersDisplay, SPOTIFY_FOLLOWERS_READ_ON } from "../data/spotify";
import { BURNA_PEAK_LISTENERS, BURNA_PEAK_LISTENERS_SET_ON, BURNA_PEAK_LISTENERS_SET_ON_LONG } from "../data/africasBiggest";
import { lastUpdated } from "./api";
import { revenueShows } from "../data/tourRevenue";
import { tours } from "../data/tours";

// The record tour and the record night, read off the data the tour pages use —
// "$30.46M", "$6.15M" and "58,973" were typed here four times over.
const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];
const topShow = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];
const usd = (n: number) => `$${(n / 1e6).toFixed(2)}M`;
const showYear = (y: string) => y;

// Shareable "stat cards" — a Burna Boy headline stat rendered as a downloadable
// image (the Receiptify/Volt.fm-style viral artifact). Values are data-driven so
// the cards never go stale. Server-only (pulls the big data modules).

export interface StatCard {
  id: string;
  value: string;
  label: string;
  kicker: string;
  chip: string;
  /** The body that owns this number — printed on the card itself. */
  source: string;
  /** Why the number is what it is. Shown beside the preview, not on the card. */
  detail: string;
  /** The page that documents it. */
  href: string;
  /** One word ghosted behind the card. */
  watermark: string;
  /**
   * The day THIS figure was read or set (ISO), printed on the card as "As of".
   * Until 27 Sep 2026 every card printed the newest /updates entry instead, so
   * the peak-listeners card — a high set on 10 Aug — was stamped 25 Sep, and a
   * follower count read on 24 Sep looked a day old whenever the feed moved.
   * Each card names its own date from the data file that holds the figure;
   * `lastUpdated` (the site's newest update) is the fallback only for figures
   * whose data carries no date, and those cards say so beside the field.
   */
  asOf: string;
}

// Count certification plaques of a given tier across the whole catalogue.
const tierCount = (tier: "diamond" | "platinum") =>
  allItems.reduce((n, it) => n + it.certs.filter((c) => tierOf(c.level) === tier).length, 0);

export function getStatCards(): StatCard[] {
  const diamond = tierCount("diamond");
  const platinum = tierCount("platinum");
  // The bodies behind the Diamond plaques — "all awarded by SNEP" was typed
  // beside a derived count and would have outlived a second Diamond body.
  const diamondBodies = [...new Set(allItems.flatMap((it) => it.certs.filter((c) => tierOf(c.level) === "diamond").map((c) => COUNTRIES[c.c]?.body ?? c.c)))];

  return [
    {
      id: "african-giant",
      source: "RIAA · BPI · SNEP · IFPI",
      watermark: "GOLD",
      href: "/certifications",
      detail: `Every award is counted once it appears in the issuing body's own searchable database, or, in a market with no current public register, on the label's own plaque. ${diamond} of them are Diamond${diamondBodies.length === 1 ? `, all awarded by ${diamondBodies[0]}` : `, across ${diamondBodies.join(" · ")}`}.`,
      value: `${totalAwards()}`,
      label: `certifications across ${countryCount} countries`,
      kicker: "The most-certified African artist in history",
      chip: "Most-certified",
      // The last day a certifying body's own register was read for the file.
      asOf: CERTS_VERIFIED_ON,
    },
    {
      id: "dai-dai",
      source: "National chart bodies",
      watermark: "DAI",
      href: "/dai-dai",
      detail: `The official song of the 2026 FIFA World Cup, with Shakira — No. 1 on both Billboard global charts and on ${daiDaiNumberOnes} national singles charts.`,
      value: "No. 1",
      // A closed run stated as its record, not a present-tense superlative.
      label: `“Dai Dai” — No. 1 in ${daiDaiNumberOnes} countries and on both Billboard global charts`,
      kicker: "The 2026 FIFA World Cup anthem, with Shakira",
      chip: "Dai Dai · No. 1",
      // data/charts.ts carries no read date: fallback.
      asOf: lastUpdated,
    },
    {
      id: "no1s",
      source: "National chart bodies",
      watermark: "ONE",
      href: "/records/charts",
      // "alongside ${chartCountryCount}" double-counted the globals: that
      // figure already includes them, so the sentence added them a second time
      // and read two territories high. Then "alongside 67 charting countries"
      // set a charted-countries figure beside a No. 1 count; since 24 Sep 2026
      // it is the countries with a No. 1, the figure this card is about.
      detail: `Counted as placements: a song topping five countries adds five. Includes both Billboard Global charts alongside No. 1s in ${numberOneCountryCount} countries.`,
      value: `${numberOnes}`,
      label: "No. 1 chart placements worldwide",
      kicker: "Nigeria, the UK, the Netherlands, Colombia & more",
      chip: "No. 1s",
      // data/charts.ts carries no read date: fallback.
      asOf: lastUpdated,
    },
    {
      id: "listeners",
      // The metric is Spotify's; the PEAK is kworb's record of it (its
      // PkListeners column). Spotify's artist page prints only today's
      // figure, so a reader sent to "Spotify" alone could not find this one.
      source: "Spotify · kworb",
      watermark: "PLAY",
      href: "/records/africas-biggest",
      // Said "Read from Spotify's own artist page rather than a tracker" until
      // 27 Sep 2026 — the opposite of where a peak comes from. Worded now as
      // /records/africas-biggest words it.
      detail: `His highest Spotify monthly listeners — kworb's recorded peak, set on ${BURNA_PEAK_LISTENERS_SET_ON_LONG}; Spotify's own artist page shows only the current figure. The first African artist ever past ${Math.floor(Number.parseFloat(BURNA_PEAK_LISTENERS))} million monthly listeners.`,
      value: BURNA_PEAK_LISTENERS,
      label: "peak Spotify monthly listeners",
      kicker: "The most of any African artist",
      chip: "Peak listeners",
      // The day the peak was set, derived from the series the bot extends.
      asOf: BURNA_PEAK_LISTENERS_SET_ON,
    },
    {
      id: "tour",
      source: "Billboard Boxscore",
      watermark: "TOUR",
      href: "/records/tours",
      detail: `Box-office gross across North America and Europe. His ${topShow.venue} night alone took ${usd(topShow.revenue)} from ${topShow.tickets} tickets — the biggest concert ever by an African artist.`,
      value: topTour.gross!,
      label: "highest-grossing African tour ever",
      kicker: "The I Told Them… Tour",
      chip: "Record tour",
      // A closed tour; tourRevenue.ts dates its figures to a month only: fallback.
      asOf: lastUpdated,
    },
    {
      id: "grammy",
      source: "Recording Academy",
      watermark: "GRAMMY",
      href: "/records/awards",
      detail: `Best Global Music Album for Twice as Tall — the first winner of the category under that name. ${totalWins} wins from ${totalNominations} nominations across ${ceremonyCount} bodies.`,
      value: "2021",
      label: "Grammy winner — Best Global Music Album",
      kicker: "Twice as Tall",
      chip: "Grammy",
      // data/awards.ts carries no read date: fallback.
      asOf: lastUpdated,
    },
    {
      id: "concert",
      source: "Billboard Boxscore",
      watermark: "LIVE",
      href: "/records/tours/revenue",
      detail: `${topShow.tickets} tickets at ${topShow.venue}, June ${showYear(topShow.year)} — the highest-grossing single concert by any African artist, a year after his 2023 night there made him the first African artist to headline a UK stadium.`,
      value: usd(topShow.revenue),
      label: "biggest concert by an African artist",
      kicker: `${topShow.venue} · June ${showYear(topShow.year)}`,
      chip: "Biggest concert",
      // tourRevenue.ts dates its figures to a month only: fallback.
      asOf: lastUpdated,
    },
    {
      id: "followers",
      source: "Spotify",
      watermark: "FOLLOW",
      href: "/records/africas-biggest",
      detail: `Followers, not monthly listeners — the count of people who chose to keep his releases in their feed. The most of any African artist, read from each artist's own Spotify page on ${new Date(`${SPOTIFY_FOLLOWERS_READ_ON}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}.`,
      value: spotifyFollowersDisplay,
      label: "Spotify followers — most of any African artist",
      kicker: "The most-followed African artist on Spotify",
      chip: "Followers",
      // The day the whole followers board was read — one reading for all rows.
      asOf: SPOTIFY_FOLLOWERS_READ_ON,
    },
  ];
}

/**
 * Resolve ANY card id — the eight canned cards above, plus two derived
 * families that back the detailed per-row share dialogs:
 *
 *   cert-<titleKey>   one card per certified release
 *   first-<titleKey>  one card per career first
 *
 * The dialogs used to render their own CSS card, which had drifted from the
 * downloadable design and could not be downloaded at all. Registering every
 * possible card server-side lets them preview and save the REAL PNG from
 * /stat-card — and keeps that route id-only, so nobody can mint an
 * official-looking card with arbitrary text via URL params.
 */
const highestTier = (r: (typeof allItems)[number]) => {
  const order = ["diamond", "platinum", "gold", "silver"] as const;
  for (const t of order) {
    const hit = r.certs.find((c) => tierOf(c.level) === t);
    if (hit) return `${hit.x ? `${hit.x}× ` : ""}${hit.level}`;
  }
  return r.certs[0]?.level ?? "";
};

// Satori wraps but never scrolls; a run-on kicker would collide with the
// value block, so the derived families clamp it at a sentence-ish length.
const clamp = (s: string, n = 150) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

// The bodies behind the number, most representative first — the same
// ordering the cert badges use — so "Location" credits BPI, RIAA and SNEP
// rather than the placeholder phrase that shipped here. Three names fit the
// source line; the rest roll up into a count.
const certBodies = (r: (typeof allItems)[number]) => {
  const seen: string[] = [];
  for (const c of [...r.certs].sort((a, b) => badgeWeight(b) - badgeWeight(a))) {
    const body = COUNTRIES[c.c]?.body;
    if (body && !seen.includes(body)) seen.push(body);
  }
  // Two names, then the count — three crowded the line on most cards.
  const shown = seen.slice(0, 2);
  const rest = seen.length - shown.length;
  return rest > 0 ? `${shown.join(" · ")} + ${rest} more` : shown.join(" · ");
};

export function findCard(id: string | null): StatCard | undefined {
  if (!id) return undefined;
  const canned = getStatCards().find((c) => c.id === id);
  if (canned) return canned;

  if (id.startsWith("cert-")) {
    const key = id.slice(5);
    const r = allItems.find((it) => titleKey(it.title) === key);
    if (!r) return undefined;
    const countrySet = new Set(r.certs.map((c) => c.c));
    return {
      id,
      value: `${r.certs.length}`,
      label: `certification${r.certs.length === 1 ? "" : "s"} for “${r.title}”`,
      kicker: `${countrySet.size} ${countrySet.size === 1 ? "country" : "countries"} · highest award ${highestTier(r)}`,
      chip: "Certified",
      source: certBodies(r),
      watermark: "CERTS",
      href: "/certifications",
      detail: `Every certification “${r.title}” holds, as recorded by each country's own certifying body.`,
      asOf: CERTS_VERIFIED_ON,
    };
  }

  if (id.startsWith("first-")) {
    const key = id.slice(6);
    const f = firstGroups.flatMap((g) => g.items).find((it) => titleKey(it.title) === key);
    if (!f) return undefined;
    return {
      id,
      value: f.year,
      label: f.title,
      kicker: clamp(f.text),
      chip: "First",
      source: "CAREER FIRSTS",
      watermark: "FIRST",
      href: "/records/firsts",
      detail: f.text,
      asOf: f.asOf ?? lastUpdated,
    };
  }

  return undefined;
}
