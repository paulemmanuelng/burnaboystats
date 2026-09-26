// The embeddable stat widgets: /embed/<slug>, one small live box per figure,
// for fan pages, blogs and journalists to put on their own sites.
//
// Every figure below is READ from the module that already publishes it — the
// same constant or derivation the site's own pages render — so a box on
// someone else's site says exactly what this site says, and changes on the
// deploy that changes the page. Nothing here is typed as a number.
//
// A widget is served by app/embed/[widget]/route.ts as a complete, standalone
// HTML document (no Next runtime, no site chrome, no JavaScript beyond the
// three-line theme switch), because it lives inside other people's pages: it
// should cost them a few kilobytes, not the whole app.

import { spotifyTotalStreams, spotifyTotalStreamsExact } from "../data/streamingTotals";
import { totalAwards, countryCount, allItems, CERTS_VERIFIED_ON } from "../data/certifications";
import { daiDaiNumberOnes, daiDaiChartEntryCount, weeksAtPeak } from "../data/charts";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../data/daiDai";
import { bandFact } from "./bandHeadline";
import { updates } from "../data/updates";
import { esc } from "./emailChrome";
import { CANONICAL_ORIGIN } from "./seo";
import { embedTokenDeclarations } from "./embedTheme";
import type { EmbedMeta } from "./embedSnippet";

export interface EmbedStat {
  v: string;
  l: string;
  /** A token from embedTheme's list to colour the value (the tier inks). */
  ink?: string;
}

/** What one box prints, top to bottom. */
export interface EmbedContent {
  /** Mono kicker — always names Burna Boy, because the box is read on a page
   *  that may not. */
  kicker: string;
  /** The headline figure, in Anton. */
  figure?: string;
  /** A headline made of words rather than a figure (the latest milestone). */
  headline?: string;
  /** Mono line above a word headline: category and date. */
  meta?: string;
  /** What the figure counts. */
  label?: string;
  /** A second, smaller reading of the figure (the unrounded total). */
  detail?: string;
  body?: string;
  stats?: EmbedStat[];
  /** Where the number comes from, after "Source: ". */
  source: string;
  /** The page on this site the box links to. */
  href: string;
}

export interface EmbedWidget extends EmbedMeta {
  content: EmbedContent;
}

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

// ── (b) Certifications: the tier rail, counted the way /certifications does ─
const TIER_ORDER = ["Diamond", "Platinum", "Gold", "Silver"] as const;
export const embedTierCounts = TIER_ORDER.map((name) => ({
  name,
  count: allItems.reduce((n, item) => n + item.certs.filter((c) => c.level === name).length, 0),
}));

// ── (c) Dai Dai: the song's own run, as the Dai Dai page derives it ─────────
const weeksGlobal200 = weeksAtPeak("Dai Dai", "GLB");

// ── (d) The latest milestone: the home band's own read of the feed ─────────
// bandFact() is updates[0] (tests/updatesOrder.test.ts keeps the feed newest
// first, and tests/updatesBurnaOnly.test.ts keeps it Burna Boy news only), with
// its opening clause as the headline. The rest of the entry follows it, when
// the clause is a clean prefix; a clause the band had to trim gives way to the
// entry's whole text, so nothing is printed twice or cut off.
const latest = updates[0];
const fact = bandFact();
const latestRest = (() => {
  if (!latest || !fact) return "";
  if (!latest.text.startsWith(fact.headline)) return latest.text;
  return latest.text.slice(fact.headline.length).replace(/^[\s:.—–-]+/, "");
})();
const latestHeadline = latest && fact && latest.text.startsWith(fact.headline) ? fact.headline : undefined;

export const EMBED_WIDGETS: EmbedWidget[] = [
  {
    slug: "career-streams",
    name: "Career streams",
    what: "His all-time Spotify total, every song, lead and featured credits combined — the figure this site publishes, refreshed daily.",
    // Heights measured in a production build at 300, 360 and 400 px wide with
    // the fonts loaded (the figure grows with the width), each the tallest of
    // the three plus a few pixels. Re-measure when a box's contents change.
    width: 360,
    height: 260,
    iframeTitle: "Burna Boy's career Spotify streams, live from Burna Boy Stats",
    credit: "Burna Boy's career streams, live on Burna Boy Stats",
    creditHref: "/records/by-the-numbers",
    content: {
      kicker: "Burna Boy · Career streams",
      figure: spotifyTotalStreams,
      label: "Spotify streams across every Burna Boy song, lead and featured credits combined",
      detail: `${spotifyTotalStreamsExact} exactly`,
      source: "Spotify's per-track counts via kworb, anchored to ChartMasters, updated daily",
      href: "/records/by-the-numbers",
    },
  },
  {
    slug: "certifications",
    name: "Certifications",
    what: "Every plaque he holds and the countries that certified them, with the tier split.",
    width: 360,
    height: 280,
    iframeTitle: "Burna Boy's certifications, live from Burna Boy Stats",
    credit: "Burna Boy's certifications, live on Burna Boy Stats",
    creditHref: "/certifications",
    content: {
      kicker: "Burna Boy · Certifications",
      figure: String(totalAwards()),
      label: `certifications in ${countryCount} countries`,
      stats: embedTierCounts.map((t) => ({
        v: String(t.count),
        l: t.name,
        ink: `--tier-${t.name.toLowerCase()}-ink`,
      })),
      source: `each certifying body's own register, most recently read ${longDate(CERTS_VERIFIED_ON)}`,
      href: "/certifications",
    },
  },
  {
    slug: "dai-dai",
    name: "Dai Dai",
    what: "The World Cup anthem's run: countries at No. 1, weeks atop the Billboard Global 200, days atop Spotify's global chart.",
    width: 360,
    height: 320,
    iframeTitle: "“Dai Dai” by Shakira and Burna Boy, by the numbers, from Burna Boy Stats",
    credit: "“Dai Dai” by the numbers, live on Burna Boy Stats",
    creditHref: "/dai-dai",
    content: {
      kicker: "Shakira & Burna Boy · “Dai Dai”",
      figure: String(daiDaiNumberOnes),
      label: "countries at No. 1 on their official singles chart",
      stats: [
        ...(weeksGlobal200 !== null
          ? [{ v: String(weeksGlobal200), l: "weeks at No. 1, Billboard Global 200" }]
          : []),
        { v: String(DAI_DAI_SPOTIFY_NO1_DAYS), l: "days at No. 1, Spotify global daily" },
        { v: String(daiDaiChartEntryCount), l: "official chart entries" },
      ],
      source: "the official national charts, Billboard and Spotify Charts",
      href: "/dai-dai",
    },
  },
  {
    slug: "latest",
    name: "Latest milestone",
    what: "The newest entry in the site's dated log of Burna Boy news. It changes whenever a new fact is logged.",
    width: 360,
    height: 340,
    iframeTitle: "The latest Burna Boy milestone, from Burna Boy Stats",
    credit: "The latest Burna Boy milestones, on Burna Boy Stats",
    creditHref: "/updates",
    content: {
      kicker: "Burna Boy · Latest milestone",
      meta: latest ? `${latest.category} · ${longDate(latest.date)}` : undefined,
      headline: latestHeadline,
      body: latestRest,
      source: "the site's dated log of Burna Boy news",
      href: "/updates",
    },
  },
];

export const EMBED_SLUGS = EMBED_WIDGETS.map((w) => w.slug);

export const embedWidget = (slug: string) => EMBED_WIDGETS.find((w) => w.slug === slug);

/** The EmbedMeta half of each widget — what the /embed page's client
 *  components are handed. */
export const embedMetas = (): EmbedMeta[] =>
  EMBED_WIDGETS.map((w) => ({
    slug: w.slug,
    name: w.name,
    what: w.what,
    width: w.width,
    height: w.height,
    iframeTitle: w.iframeTitle,
    credit: w.credit,
    creditHref: w.creditHref,
  }));

// ── The document ────────────────────────────────────────────────────────────

/**
 * Before first paint: ?theme=light|dark pins the scheme; anything else, or no
 * parameter, leaves the CSS default, which follows the reader's device. It is
 * the only script on the page, and the page is correct without it — an iframe
 * sandboxed without scripts simply follows the device.
 */
const THEME_SCRIPT =
  'try{var t=new URLSearchParams(location.search).get("theme");' +
  'if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}';

const MONO = `"Space Mono",ui-monospace,Menlo,monospace`;
const ANTON = `"Anton",Impact,"Arial Narrow",sans-serif`;

/** The widget stylesheet. Colours and type sizes are the site's own tokens,
 *  declared from globals.css (embedTheme.ts); the vocabulary is the /press
 *  figure card's — a raised surface, Anton figure, mono kicker. */
function css(): string {
  return `
@font-face{font-family:"Anton";src:url("/fonts/Anton-Regular.ttf") format("truetype");font-display:swap}
@font-face{font-family:"Space Mono";src:url("/fonts/SpaceMono-Regular.ttf") format("truetype");font-display:swap}
@font-face{font-family:"Geist";src:url("/fonts/Geist-Regular.ttf") format("truetype");font-display:swap}
:root{color-scheme:light dark;${embedTokenDeclarations()}}
:root[data-theme="light"]{color-scheme:light}
:root[data-theme="dark"]{color-scheme:dark}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
html{background:var(--bg-soft);overflow:hidden}
body{font-family:"Geist",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--text);-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums}
.card{display:flex;flex-direction:column;height:100%;padding:16px 18px 13px;background:var(--bg-soft);border:1px solid var(--rule-soft);color:inherit;text-decoration:none}
.card:hover{background:var(--bg-raised)}
.card:focus-visible{outline:2px solid var(--gold-ink);outline-offset:-2px}
.kicker{font-family:${MONO};font-weight:700;font-size:var(--type-label);line-height:var(--type-label-lh);letter-spacing:var(--type-label-tracking);text-transform:uppercase;color:var(--text-muted)}
.figure{font-family:${ANTON};font-weight:400;font-size:clamp(48px,17vw,64px);line-height:1;letter-spacing:.01em;color:var(--gold-ink);margin-top:10px}
.label{font-size:var(--type-small);line-height:var(--type-small-lh);color:var(--text);margin-top:6px}
.detail{font-family:${MONO};font-size:var(--type-label);letter-spacing:.04em;color:var(--text-muted);margin-top:3px}
.meta{font-family:${MONO};font-weight:700;font-size:var(--type-label);letter-spacing:var(--type-label-tracking);text-transform:uppercase;color:var(--text-muted);margin-top:12px}
.headline{font-family:${ANTON};font-weight:400;font-size:24px;line-height:1.08;letter-spacing:.02em;text-transform:uppercase;color:var(--text);margin-top:6px}
.body{font-size:var(--type-small);line-height:var(--type-small-lh);color:var(--text-body);margin-top:8px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden}
.stats{display:flex;margin-top:12px;border-top:1px solid var(--line)}
.stat{flex:1 1 0;min-width:0;padding:8px 8px 0 0}
.stat+.stat{padding-left:10px;border-left:1px solid var(--line)}
.statV{display:block;font-family:${ANTON};font-weight:400;font-size:22px;line-height:1;color:var(--text)}
.statL{display:block;font-size:11.5px;line-height:1.3;color:var(--text-muted);margin-top:4px}
.foot{margin-top:auto;padding-top:9px;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:3px}
.source{font-size:var(--type-caption);line-height:var(--type-caption-lh);color:var(--text-muted)}
.brand{font-family:${MONO};font-weight:700;font-size:var(--type-label);letter-spacing:.06em;color:var(--gold-ink)}
.card:hover .brand{color:var(--gold-bright-ink)}
`.trim();
}

function statsHtml(stats: EmbedStat[]): string {
  return (
    `<span class="stats">` +
    stats
      .map(
        (s) =>
          `<span class="stat"><span class="statV"${s.ink ? ` style="color:var(${s.ink})"` : ""}>${esc(s.v)}</span>` +
          `<span class="statL">${esc(s.l)}</span></span>`
      )
      .join("") +
    `</span>`
  );
}

/** The whole document for one widget, or null for a slug that is not one. */
export function renderEmbed(slug: string): string | null {
  const w = embedWidget(slug);
  if (!w) return null;
  const c = w.content;
  const parts: string[] = [`<span class="kicker">${esc(c.kicker)}</span>`];
  if (c.figure !== undefined) parts.push(`<span class="figure">${esc(c.figure)}</span>`);
  if (c.meta) parts.push(`<span class="meta">${esc(c.meta)}</span>`);
  if (c.headline) parts.push(`<span class="headline">${esc(c.headline)}</span>`);
  if (c.label) parts.push(`<span class="label">${esc(c.label)}</span>`);
  if (c.detail) parts.push(`<span class="detail">${esc(c.detail)}</span>`);
  if (c.body) parts.push(`<span class="body">${esc(c.body)}</span>`);
  if (c.stats?.length) parts.push(statsHtml(c.stats));
  parts.push(
    `<span class="foot"><span class="source">Source: ${esc(c.source)}</span>` +
      `<span class="brand">burnaboystats.com <span aria-hidden="true">↗</span></span></span>`
  );

  // A normal followed link — no nofollow, no noreferrer — on the canonical
  // domain, in a new tab so the reader keeps the page they were on.
  const href = `${CANONICAL_ORIGIN}${c.href}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, indexifembedded">
<title>${esc(w.iframeTitle)}</title>
<link rel="preload" href="/fonts/Anton-Regular.ttf" as="font" type="font/ttf" crossorigin>
<script>${THEME_SCRIPT}</script>
<style>${css()}</style>
</head>
<body>
<a class="card" href="${esc(href)}" target="_blank" rel="noopener">${parts.join("")}</a>
</body>
</html>
`;
}
