import { totalAwards, countryCount, allItems, tierOf, daiDaiCertCount, COUNTRIES } from "../data/certifications";
import { firstGroups } from "../data/firsts";
import { titleKey } from "./titleKey";
import { numberOnes, chartEntryCount, chartCountryCount, daiDaiNumberOnes, daiDaiChartEntryCount } from "../data/charts";
import { monthlyListenersValues } from "../data/trends";
import { totalWins, totalNominations, ceremonyCount } from "../data/awards";
import { spotifyFollowersDisplay } from "../data/spotify";

// Shareable "stat cards" — a Burna Boy headline stat rendered as a downloadable
// image (the Receiptify/Volt.fm-style viral artifact). Values are data-driven so
// the cards never go stale. Server-only (pulls the big data modules).

// A small "FIFA-style" supporting stat (value + short label).
export interface SignatureStat {
  value: string;
  label: string;
}

export interface StatCard {
  id: string;
  value: string;
  label: string;
  kicker: string;
  chip: string;
  // Three supporting stats, each relevant to THIS card's headline (not generic).
  stats: SignatureStat[];
  /** The body that owns this number — printed on the card itself. */
  source: string;
  /** Why the number is what it is. Shown beside the preview, not on the card. */
  detail: string;
  /** The page that documents it. */
  href: string;
  /** One word ghosted behind the card. */
  watermark: string;
}

// Count certification plaques of a given tier across the whole catalogue.
const tierCount = (tier: "diamond" | "platinum") =>
  allItems.reduce((n, it) => n + it.certs.filter((c) => tierOf(c.level) === tier).length, 0);

export function getStatCards(): StatCard[] {
  const listeners = monthlyListenersValues[monthlyListenersValues.length - 1];
  const diamond = tierCount("diamond");
  const platinum = tierCount("platinum");

  return [
    {
      id: "african-giant",
      source: "RIAA · BPI · SNEP · IFPI",
      watermark: "GOLD",
      href: "/certifications",
      detail: `Every award is counted once it appears in the issuing body's own searchable database. ${diamond} of them are Diamond, all awarded by SNEP in France.`,
      value: `${totalAwards()}`,
      label: `certifications across ${countryCount} countries`,
      kicker: "The most-certified African artist in history",
      chip: "Most-certified",
      stats: [
        { value: `${countryCount}`, label: "Countries" },
        { value: `${diamond}`, label: "Diamond" },
        { value: `${platinum}`, label: "Platinum" },
      ],
    },
    {
      id: "dai-dai",
      source: "National chart bodies",
      watermark: "DAI",
      href: "/dai-dai",
      detail: `The official song of the 2026 FIFA World Cup, with Shakira — No. 1 on both Billboard global charts and on ${daiDaiNumberOnes} national singles charts.`,
      value: "No. 1",
      label: "“Dai Dai” — the biggest song in the world",
      kicker: "The 2026 FIFA World Cup anthem, with Shakira",
      chip: "Dai Dai · No. 1",
      stats: [
        { value: `${daiDaiNumberOnes}`, label: "Country No.1s" },
        { value: `${daiDaiChartEntryCount}`, label: "Chart entries" },
        { value: `${daiDaiCertCount}`, label: "Certifications" },
      ],
    },
    {
      id: "no1s",
      source: "National chart bodies",
      watermark: "ONE",
      href: "/records/charts",
      detail: `Counted as placements: a song topping five countries adds five. Includes both Billboard Global charts alongside ${chartCountryCount} charting territories.`,
      value: `${numberOnes}`,
      label: "No. 1 chart placements worldwide",
      kicker: "Nigeria, the UK, the Netherlands, Colombia & more",
      chip: "No. 1s",
      stats: [
        { value: `${chartCountryCount}`, label: "Countries" },
        { value: `${chartEntryCount}`, label: "Chart entries" },
        { value: "No.1", label: "Global 200" },
      ],
    },
    {
      id: "listeners",
      source: "Spotify",
      watermark: "PLAY",
      href: "/records/africas-biggest",
      detail: `Read from Spotify's own artist page rather than a tracker. The first African artist ever past 50 million monthly listeners.`,
      value: `${listeners}M`,
      label: "Spotify monthly listeners",
      kicker: "The most of any African artist",
      chip: "Monthly listeners",
      stats: [
        { value: spotifyFollowersDisplay, label: "Followers" },
        { value: "840M", label: "YouTube peak" },
        { value: "No.1", label: "Spotify Global" },
      ],
    },
    {
      id: "tour",
      source: "Billboard Boxscore",
      watermark: "TOUR",
      href: "/records/tours",
      detail: `Box-office gross across three continents. His London Stadium night alone took $6.15M from 58,973 tickets — the biggest concert ever by an African artist.`,
      value: "$30.46M",
      label: "highest-grossing African tour ever",
      kicker: "The I Told Them… Tour",
      chip: "Record tour",
      stats: [
        { value: "$6.15M", label: "Biggest concert" },
        { value: "302K", label: "Tickets sold" },
        { value: "22", label: "Shows" },
      ],
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
      stats: [
        { value: `${totalWins}`, label: "Award wins" },
        { value: `${totalNominations}`, label: "Nominations" },
        { value: `${ceremonyCount}`, label: "Award bodies" },
      ],
    },
    {
      id: "concert",
      source: "Billboard Boxscore",
      watermark: "LIVE",
      href: "/records/tours/revenue",
      detail: `58,973 tickets at London Stadium, June 2024 — the highest-grossing single concert by any African artist, and the first UK stadium headline by one.`,
      value: "$6.15M",
      label: "biggest concert by an African artist",
      kicker: "London Stadium · June 2024",
      chip: "Biggest concert",
      stats: [
        { value: "$30.46M", label: "Record tour" },
        { value: "80K", label: "Capacity" },
        { value: "1st", label: "UK stadium" },
      ],
    },
    {
      id: "followers",
      source: "Spotify",
      watermark: "FOLLOW",
      href: "/records/africas-biggest",
      detail: `Followers, not monthly listeners — the count of people who chose to keep his releases in their feed. The most of any African artist.`,
      value: spotifyFollowersDisplay,
      label: "Spotify followers — most of any African artist",
      kicker: "The most-followed African artist on Spotify",
      chip: "Followers",
      stats: [
        { value: `${listeners}M`, label: "Monthly listeners" },
        { value: "840M", label: "YouTube peak" },
        { value: "#1", label: "Most-followed" },
      ],
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
      source: "CERTIFYING BODIES",
      watermark: "CERTS",
      href: "/certifications",
      detail: `Every certification “${r.title}” holds, as recorded by each country's own certifying body.`,
      stats: r.certs.slice(0, 3).map((c) => ({
        value: `${c.x ? `${c.x}× ` : ""}${c.level}`,
        label: COUNTRIES[c.c]?.name ?? c.c,
      })),
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
      stats: [],
    };
  }

  return undefined;
}
