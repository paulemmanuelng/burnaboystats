// Shared SEO helpers — keeps every page's metadata complete and consistent
// (canonical + Open Graph + Twitter card), and builds breadcrumb structured data.
import type { Metadata } from "next";

export const SITE_NAME = "Burna Boy Stats";
// Canonical production origin (stable — used for absolute URLs in structured data).
export const CANONICAL_ORIGIN = "https://burnaboystats.com";

/** twitter:creator on every page: the site's maker, Paul's own account (E-11,
 *  Paul, 24 Sep 2026). NEVER @BurnaBoyStats — that is a fan page Paul does not
 *  run. No twitter:site: the site has no account of its own. */
export const TWITTER_CREATOR = "@paulemmanuelng";

/**
 * Burna Boy as ONE entity across the site's structured data.
 *
 * He was four unlinked nodes (26 Sep 2026): the layout's WebSite.about
 * MusicGroup with seven sameAs, /about's Person with five, /music's MusicGroup
 * with none and a url of its own, and a bare {MusicGroup, name} on every
 * Dataset, recording and album. Nothing said they were one artist, and none
 * named his Wikidata item — the identifier knowledge graphs key an entity on
 * (Q17305712, read off en.wikipedia's pageprops for "Burna Boy").
 *
 * The full node is written once per page, by the root layout. Everything else
 * points at it with BURNA_BOY_REF, which keeps @type and name beside the @id
 * so a reader that does not resolve @id still sees who is meant. The board
 * artists' own nodes are untouched: this id is his alone.
 */
export const BURNA_BOY_ID = `${CANONICAL_ORIGIN}/#burna-boy`;

export const BURNA_BOY_SAME_AS = [
  "https://en.wikipedia.org/wiki/Burna_Boy",
  "https://www.wikidata.org/wiki/Q17305712",
  "https://www.instagram.com/burnaboygram",
  "https://x.com/burnaboy",
  "https://www.youtube.com/channel/UCEzDdNqNkT-7rSfSGSr1hWg",
  "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
  "https://music.apple.com/us/artist/burna-boy/591899010",
  "https://www.facebook.com/Officialburnaboy",
];

/** The full node — WebSite.about in the root layout, so every page has it. */
export const BURNA_BOY = {
  "@type": "MusicGroup",
  "@id": BURNA_BOY_ID,
  name: "Burna Boy",
  alternateName: "Damini Ebunoluwa Ogulu",
  genre: ["Afrobeats", "Afro-fusion", "Reggae", "Dancehall"],
  award: "Grammy Award for Best Global Music Album (2021)",
  foundingLocation: { "@type": "Place", name: "Port Harcourt, Nigeria" },
  sameAs: BURNA_BOY_SAME_AS,
};

/** A pointer to that node, for byArtist, performer and about. */
export const BURNA_BOY_REF = { "@type": "MusicGroup", "@id": BURNA_BOY_ID, name: "Burna Boy" };

/**
 * A feed date ("2026-08-09") as a full ISO 8601 datetime.
 *
 * Search Console flagged "Invalid datetime value for dateModified" on the
 * ProfilePage at /curator: that type wants a datetime, and a bare date does
 * not satisfy it. Midday UTC is deliberate — the updates feed records the day
 * a fact changed, not the minute, and noon is the reading that stays on the
 * right calendar day in every timezone.
 */
export const asDateTime = (isoDate: string) => `${isoDate}T12:00:00+00:00`;

/**
 * The RSS feed, as an `alternates.types` entry: <link rel="alternate"
 * type="application/rss+xml"> in the head, which is how a reader finds a feed.
 * It was on /updates only. Next does not merge `alternates`: a page that sets
 * its own replaces the root layout's whole block, so the link has to ride in
 * both the root metadata and pageMetadata() for most pages to carry it.
 */
export const FEED_ALTERNATE = { "application/rss+xml": "/rss.xml" } as const;

/**
 * The robots directives every indexable page inherits from the root layout.
 *
 * Google Discover shows a page's large image card only when the image is at
 * least 1200px wide AND the page allows it with max-image-preview:large.
 * Every share card here is already a 1200×630 PNG; the opt-in was the missing
 * half, and on 26 Sep 2026 none of the 346 sitemap pages declared it, so
 * /updates and the story pages could only ever earn a thumbnail.
 *
 * The plain robots tag, not a googlebot one: it is the form Google's Discover
 * guidance gives, and Bing reads the same three directives. Next does not
 * merge `robots` — a page that sets its own (pageMetadata's noindex, /search,
 * /primitives, the 404) replaces this whole block, so no noindex page picks
 * up an "index" from here.
 */
export const INDEXABLE_ROBOTS = {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
} satisfies Metadata["robots"];

// Build a full Metadata object for a page: title + description + canonical, plus
// a matching Open Graph and Twitter card so social/search previews are unique
// per page (Next does not copy the page title into og:title automatically).
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  shareTitle?: string; // shorter title for social cards (optional)
  shareDescription?: string;
  /** hreflang alternates — every language edition of this page, keyed by code
   *  (plus "x-default"). Without these a translated page reads to a search
   *  engine as a separate, competing page rather than the same page in another
   *  language, and the wrong one gets served. */
  languages?: Record<string, string>;
  /** Open Graph locale, e.g. "es_ES". Defaults to en_US. */
  locale?: string;
  /** Keep the page out of the index while still following its links. Used for
   *  a page that exists for readers but has no data of its own yet — three
   *  near-identical "sweep scheduled" pages are thin content until they carry
   *  figures, and this flips off on its own the week they do. */
  noindex?: boolean;
  /** An article page — one whose structured data is an Article — declares
   *  og:type "article" with the same publication date, rather than the
   *  "website" every other page carries. */
  article?: { publishedTime: string };
}): Metadata {
  const ogTitle = opts.shareTitle ?? opts.title;
  const ogDescription = opts.shareDescription ?? opts.description;
  const ogType = opts.article
    ? { type: "article" as const, publishedTime: opts.article.publishedTime }
    : { type: "website" as const };
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: opts.path,
      ...(opts.languages ? { languages: opts.languages } : {}),
      types: FEED_ALTERNATE,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: opts.path,
      siteName: SITE_NAME,
      ...ogType,
      locale: opts.locale ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      creator: TWITTER_CREATOR,
    },
  };
}

// Dataset structured data — marks our data-heavy pages (charts, certifications,
// records, the tour map) as structured datasets, so search engines and AI answer
// engines can recognise, surface and cite them as a source.
export function datasetJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  keywords: string[];
  variableMeasured: string[];
  /** Who the dataset is ABOUT. Defaults to Burna Boy, which is every page on
   *  the site except the Afrobeats Board — where declaring his name on another
   *  artist's chart record would tell a search engine the page is about the
   *  wrong entity. Pass the artist's name and Spotify URL there. */
  about?: { name: string; sameAs?: string[] };
  /** ISO date the underlying figures were last read at source. Answer engines
   *  weight recency, and a Dataset with no date looks static to them — these
   *  boards are reviewed weekly, which is worth saying in the markup. */
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: opts.name,
    description: opts.description,
    url: `${CANONICAL_ORIGIN}${opts.path}`,
    keywords: opts.keywords,
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: opts.about
      ? {
          "@type": "MusicGroup",
          name: opts.about.name,
          ...(opts.about.sameAs ? { sameAs: opts.about.sameAs } : {}),
        }
      : BURNA_BOY_REF,
    variableMeasured: opts.variableMeasured,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

// Human-readable labels for each URL segment, used for breadcrumbs.
/**
 * Routes that hand-write their own BreadcrumbList, because they know a leaf
 * title the URL cannot spell — "L.I.F.E", "Last Last", "The Dai Dai Story".
 *
 * The site-wide <Breadcrumbs> in the root layout stands down on these, so no
 * page ships two competing trails. Seven routes were emitting both: the
 * hand-written one with the real title, and a generated one built from the
 * slug, leaving a search engine to pick between them. The album pages were the
 * worst of it — their generated trail advertised /music/albums, which has no
 * page at all.
 */
const OWN_BREADCRUMB = [
  /^\/music$/,
  // /music/listeners is a static sibling of the song pages and uses the generated trail.
  /^\/music\/(?!listeners$)[^/]+$/,
  /^\/music\/albums\/[^/]+$/,
  /^\/certifications$/,
  /^\/timeline$/,
  /^\/dai-dai$/,
  /^\/records\/awards$/,
  // A car page's leaf is "Bugatti Chiron", which the slug cannot spell.
  /^\/records\/cars\/[^/]+$/,
  // /compare writes Home › Certifications › Compare (it belongs under the
  // certifications, not at the root the URL suggests) and was ALSO getting
  // the generated Home › Compare — two trails on one page. A pair page's
  // leaf is "Burna Boy vs Wizkid", which the slug cannot spell.
  /^\/compare$/,
  /^\/compare\/[^/]+$/,
  // A country board is the same view one level deeper, and writes the same
  // five-crumb trail with the market's name ("United Kingdom"). The pattern
  // above stops at one segment, so all 27 boards also shipped the generated
  // trail, ending in the raw slug "united-kingdom".
  /^\/compare\/in\/[^/]+$/,
];

/** True where the page emits its own trail and the site-wide one must not. */
export const hasOwnBreadcrumb = (path: string) =>
  OWN_BREADCRUMB.some((re) => re.test(path.replace(/\/$/, "") || "/"));

export const SEGMENT_LABELS: Record<string, string> = {
  music: "Music",
  certifications: "Certifications",
  compare: "Compare",
  // /compare/in/<country> — "in" is a preposition in the URL and a section in
  // the trail: Compare / By country / Canada.
  in: "By country",
  records: "Career Records",
  "by-the-numbers": "By the Numbers",
  visualized: "Visualized",
  "spotify-unmerge": "The Spotify Correction",
  charts: "Official Charts",
  live: "Live Charts",
  awards: "Awards",
  tours: "Tours & Live",
  festivals: "Festivals & Shows",
  revenue: "Highest Revenue Per Show",
  map: "Where He's Performed",
  listeners: "Where the World Listens",
  cars: "Car Collection",
  firsts: "Firsts & Records",
  "africas-biggest": "Africa's Biggest",
  updates: "Latest Updates",
  timeline: "Career Timeline",
  afrobeats: "The Afrobeats Board",
  // Board artists, so /afrobeats/<slug>/charts reads as words in the trail.
  wizkid: "Wizkid",
  davido: "Davido",
  rema: "Rema",
  tems: "Tems",
  tyla: "Tyla",
  "ayra-starr": "Ayra Starr",
  asake: "Asake",
  "omah-lay": "Omah Lay",
  "seyi-vibez": "Seyi Vibez",
  victony: "Victony",
  "fireboy-dml": "Fireboy DML",
  ckay: "CKay",
  olamide: "Olamide",
  "black-sherif": "Black Sherif",
  bnxn: "BNXN",
  "kizz-daniel": "Kizz Daniel",
  ruger: "Ruger",
  oxlade: "Oxlade",
  "tiwa-savage": "Tiwa Savage",
  "dai-dai": "The Dai Dai Story",
  // The leaf of /dai-dai/es. /dai-dai hand-writes its own trail, but the
  // Spanish edition is not in OWN_BREADCRUMB, so it takes the generated one —
  // and with no entry here it published `"name":"es"` as the leaf of its
  // BreadcrumbList, which is what Google was actually shown for an INDEXED
  // page. Spanish, because it names the Spanish edition to a Spanish reader.
  es: "Español",
  share: "Stat Cards",
  faq: "FAQ",
  curator: "About the Curator",
  press: "Press & Data Kit",
  analysis: "Analysis",
  "live-charts": "Live Charts",
  api: "Open Data API",
  methodology: "Methodology",
  about: "About",
  contact: "Contact",
  // The two noindex routes. <Breadcrumbs> is in the root layout and has no way
  // to know a page is noindex, so it renders its trail there like anywhere
  // else — these were publishing "search" and "primitives" as raw slugs. Being
  // noindex excuses them from the sitemap and from owning an OG image; it does
  // not make the markup they DO emit correct, and a label is one line.
  search: "Search",
  primitives: "Primitives",
};

// BreadcrumbList JSON-LD for a given path (e.g. "/records/tours/festivals").
// Returns null for the home page (a one-item breadcrumb is meaningless).
export function breadcrumbList(path: string) {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items = [{ name: "Home", url: CANONICAL_ORIGIN }];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    items.push({ name: SEGMENT_LABELS[seg] ?? seg, url: `${CANONICAL_ORIGIN}${acc}` });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
