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
import { totalAwards, countryCount, tierCounts, CERTS_VERIFIED_ON } from "../data/certifications";
import { daiDaiNumberOnes, daiDaiChartEntryCount, weeksAtPeak } from "../data/charts";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../data/daiDai";
import { openingClause } from "./bandHeadline";
import { updates, type Update } from "../data/updates";
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

/** A widget as written below. Its credit line links where the box does
 *  (content.href), so embedMetas() fills creditHref in rather than it being
 *  typed twice. */
export interface EmbedWidget extends Omit<EmbedMeta, "creditHref"> {
  /** The box named mid-sentence ("the latest milestone"), for copy that lists
   *  the boxes; `name` is the label form ("Latest milestone"). */
  phrase: string;
  content: EmbedContent;
}

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

// ── (b) Certifications: the tier split is tierCounts(), the helper the
// /certifications hero rail prints, so the two cannot count differently ──────

// ── (c) Dai Dai: the song's own run, as the Dai Dai page derives it ─────────
const weeksGlobal200 = weeksAtPeak("Dai Dai", "GLB");

// ── (d) The latest milestone: the home band's own read of the feed ─────────
// The box shows updates[0] (tests/updatesOrder.test.ts keeps the feed newest
// first, and tests/updatesBurnaOnly.test.ts keeps it Burna Boy news only), split
// the way the home band splits it: the entry's opening clause — openingClause,
// the function bandFact() prints — as the headline, and the rest of the entry
// after it. A clause the band had to trim is not a prefix of the entry, so it
// gives way to the entry's whole text. Either way the box prints the entry
// once and whole: the body is never clamped, so nothing is cut off.
export function latestContent(entry: Update): { meta: string; headline?: string; body: string } {
  const meta = `${entry.category} · ${longDate(entry.date)}`;
  const clause = openingClause(entry.text);
  if (!entry.text.startsWith(clause)) return { meta, body: entry.text };
  return { meta, headline: clause, body: entry.text.slice(clause.length).replace(/^[\s:.—–-]+/, "") };
}

/**
 * What the latest box's height is sized for. Its contents change with every
 * new feed entry, so its height cannot be re-measured per entry; it was
 * measured once, at the narrowest column the /embed page promises
 * (EMBED_FITS.min), with the fonts loaded, for the longest entry the feed
 * allows: a headline of the band's full 72 characters (openingClause trims past
 * that) with the rest of a 300-character entry under it
 * (tests/updatesLength.test.ts caps entries at 300), under the longest meta
 * line the categories and months can make. Measured 26 Sep 2026 in headless
 * Chrome, of every entry then in the feed plus 800 worst cases built from the
 * feed's own words: the tallest box was 413 px at 300 px wide and 439 px at
 * 280 (narrower is taller), so the height is 460, a line to spare at 280. A
 * short entry leaves room above the source line; it never overflows.
 * tests/embedWidgets.test.ts checks every entry in the feed against these, so
 * an entry past them fails there rather than running off the bottom of the box
 * on someone else's page — raise them only after re-measuring.
 */
export const LATEST_SIZED_FOR = {
  headline: 72,
  entry: 300,
  meta: "Firsts & Records · 30 September 2026",
} as const;

const latest = updates[0];

export const EMBED_WIDGETS: EmbedWidget[] = [
  {
    slug: "career-streams",
    name: "Career streams",
    phrase: "career streams",
    what: "His all-time Spotify total, every song, lead and featured credits combined — the figure this site publishes, refreshed daily.",
    // Heights measured in a production build with the fonts loaded, at every
    // 20 px from EMBED_FITS.min to EMBED_FITS.max wide (the figure grows with
    // the width, the text wraps as it narrows): each is the tallest of those
    // plus a few pixels. Re-measure when a box's layout changes. The latest
    // box is the exception: it is sized for the longest entry the feed allows
    // (LATEST_SIZED_FOR), not for the entry it shows today.
    width: 360,
    height: 280,
    iframeTitle: "Burna Boy's career Spotify streams, live from Burna Boy Stats",
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
    phrase: "certifications",
    what: "Every plaque he holds and the countries that certified them, with the tier split.",
    width: 360,
    height: 280,
    iframeTitle: "Burna Boy's certifications, live from Burna Boy Stats",
    content: {
      kicker: "Burna Boy · Certifications",
      figure: String(totalAwards()),
      label: `certifications in ${countryCount} countries`,
      stats: tierCounts().map((t) => ({
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
    phrase: "Dai Dai",
    what: "The World Cup anthem's run: countries at No. 1, weeks atop the Billboard Global 200, days atop Spotify's global chart.",
    width: 360,
    height: 350,
    iframeTitle: "“Dai Dai” by Shakira and Burna Boy, by the numbers, from Burna Boy Stats",
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
    phrase: "the latest milestone",
    what: "The newest entry in the site's dated log of Burna Boy news, printed whole. It changes whenever a new fact is logged, so the box is tall enough for the longest entry the log takes.",
    width: 360,
    // Sized for the longest entry the feed allows, not today's: LATEST_SIZED_FOR.
    height: 460,
    iframeTitle: "The latest Burna Boy milestone, from Burna Boy Stats",
    content: {
      kicker: "Burna Boy · Latest milestone",
      ...(latest ? latestContent(latest) : {}),
      source: "the site's dated log of Burna Boy news",
      href: "/updates",
    },
  },
];

export const EMBED_SLUGS = EMBED_WIDGETS.map((w) => w.slug);

/** "career streams, certifications, Dai Dai and the latest milestone": the boxes
 *  as the copy that lists them names them (the /embed description, share card
 *  and /press), so a box added to the list is named there the day it ships. */
const listPhrases = (phrases: string[]) =>
  phrases.length > 1 ? `${phrases.slice(0, -1).join(", ")} and ${phrases[phrases.length - 1]}` : (phrases[0] ?? "");
export const EMBED_NAME_LIST = listPhrases(EMBED_WIDGETS.map((w) => w.phrase));

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
    creditHref: w.content.href,
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

/**
 * The widget's font files, from public/fonts: Latin-only WOFF2, one per face.
 *
 * They were the full TTFs the share cards render with (public/fonts/*.ttf),
 * 337 KB for three faces behind a 5 KB box, and a widget's fonts are fetched
 * again on every site that embeds it, because browsers keep a separate cache
 * per site. These four come to 42 KB.
 *
 * Anton, Geist and Space Mono Regular are cut from those TTFs with fonttools:
 * the Latin range Google Fonts serves, plus ↗ (U+2197) for the brand line,
 * every OpenType feature kept (tabular-nums reads Geist's tnum) and hinting
 * dropped, as Google serves them:
 *
 *   pyftsubset public/fonts/<face>.ttf --flavor=woff2 --no-hinting \
 *     --layout-features='*' --output-file=public/fonts/<face>-latin.woff2 \
 *     --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2197,U+2212,U+2215,U+FEFF,U+FFFD
 *
 * Space Mono Bold has no TTF here. Its file is the Latin WOFF2 Google Fonts
 * serves for Space Mono 700, the one next/font fetches for the site's own mono
 * bold. The kicker, meta and brand lines ask for 700, and with only the
 * Regular loaded the browser drew a synthetic bold; this is the real cut. It
 * has no ↗, so the arrow (aria-hidden) comes from the next font in the stack.
 */
const FONTS = [
  { family: "Anton", weight: 400, file: "Anton-Regular-latin.woff2" },
  { family: "Geist", weight: 400, file: "Geist-Regular-latin.woff2" },
  { family: "Space Mono", weight: 400, file: "SpaceMono-Regular-latin.woff2" },
  { family: "Space Mono", weight: 700, file: "SpaceMono-Bold-latin.woff2" },
] as const;
export const EMBED_FONT_FILES = FONTS.map((f) => `/fonts/${f.file}`);

/** Preloaded: the Anton figure is the largest thing in the box, so its swap
 *  from the fallback is the one that moves the layout most. */
const PRELOAD = `/fonts/${FONTS[0].file}`;

/** The widget stylesheet. Colours and type sizes are the site's own tokens,
 *  declared from globals.css (embedTheme.ts); the vocabulary is the /press
 *  figure card's — a raised surface, Anton figure, mono kicker. */
function css(): string {
  return `
${FONTS.map(
  (f) => `@font-face{font-family:"${f.family}";src:url("/fonts/${f.file}") format("woff2");font-weight:${f.weight};font-display:swap}`
).join("\n")}
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
.body{font-size:var(--type-small);line-height:var(--type-small-lh);color:var(--text-body);margin-top:8px}
.stats{display:flex;margin-top:12px;border-top:1px solid var(--line)}
.stat{flex:1 1 0;min-width:0;padding:8px 8px 0 0}
.stat+.stat{padding-left:10px;border-left:1px solid var(--line)}
@media (max-width:319px){.stat{padding-right:2px}.stat+.stat{padding-left:6px}}
.statV{display:block;font-family:${ANTON};font-weight:400;font-size:22px;line-height:1;color:var(--text)}
.statL{display:block;font-size:var(--type-caption);line-height:1.3;color:var(--text-muted);margin-top:4px}
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
<link rel="preload" href="${PRELOAD}" as="font" type="font/woff2" crossorigin>
<script>${THEME_SCRIPT}</script>
<style>${css()}</style>
</head>
<body>
<a class="card" href="${esc(href)}" target="_blank" rel="noopener">${parts.join("")}</a>
</body>
</html>
`;
}
