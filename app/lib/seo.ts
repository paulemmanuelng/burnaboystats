// Shared SEO helpers — keeps every page's metadata complete and consistent
// (canonical + Open Graph + Twitter card), and builds breadcrumb structured data.
import type { Metadata } from "next";

export const SITE_NAME = "Burna Boy Stats";
// Canonical production origin (stable — used for absolute URLs in structured data).
export const CANONICAL_ORIGIN = "https://burnaboystats.com";

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
}): Metadata {
  const ogTitle = opts.shareTitle ?? opts.title;
  const ogDescription = opts.shareDescription ?? opts.description;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: opts.path,
      ...(opts.languages ? { languages: opts.languages } : {}),
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: opts.path,
      siteName: SITE_NAME,
      type: "website",
      locale: opts.locale ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
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
    about: {
      "@type": "MusicGroup",
      name: opts.about?.name ?? "Burna Boy",
      ...(opts.about?.sameAs ? { sameAs: opts.about.sameAs } : {}),
    },
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
  /^\/music\/[^/]+$/,
  /^\/music\/albums\/[^/]+$/,
  /^\/certifications$/,
  /^\/timeline$/,
  /^\/dai-dai$/,
  /^\/records\/awards$/,
];

/** True where the page emits its own trail and the site-wide one must not. */
export const hasOwnBreadcrumb = (path: string) =>
  OWN_BREADCRUMB.some((re) => re.test(path.replace(/\/$/, "") || "/"));

export const SEGMENT_LABELS: Record<string, string> = {
  music: "Music",
  certifications: "Certifications",
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
  "dai-dai": "The Dai Dai Story",
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
