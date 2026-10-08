import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Home from "../app/page";
import AboutPage from "../app/about/page";
import aboutStyles from "../app/about/about.module.css";
import mobileAboutStyles from "../app/components/mobileAbout.module.css";
import SharePage from "../app/share/page";
import MethodologyPage from "../app/methodology/page";
import CertificationsPage from "../app/certifications/page";
import AfrobeatsPage from "../app/afrobeats/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import ArtistChartsPage from "../app/afrobeats/[artist]/charts/page";
import ArtistLivePage from "../app/afrobeats/[artist]/live/page";
import ComparePage from "../app/compare/page";
import PairPage from "../app/compare/[pair]/page";
import CountryPage from "../app/compare/in/[country]/page";
import CountryIndexPage from "../app/compare/in/page";
import PressPage from "../app/press/page";
import ApiPage from "../app/api/page";
import EmbedPage from "../app/embed/page";
import DaiDaiPage from "../app/dai-dai/page";
import FaqPage from "../app/faq/page";
import AnalysisPage from "../app/analysis/page";
import VisualizedPage from "../app/records/visualized/page";
import BiggestPage from "../app/records/africas-biggest/page";
import TimelinePage from "../app/timeline/page";
import timelineStyles from "../app/timeline/timeline.module.css";
import MusicPage from "../app/music/page";
import SongPage from "../app/music/[song]/page";
import AlbumPage from "../app/music/albums/[album]/page";
import ChartsPage from "../app/records/charts/page";
import ToursPage from "../app/records/tours/page";
import RevenuePage from "../app/records/tours/revenue/page";
import RevenueCountriesPage from "../app/records/tours/revenue/countries/page";
import FestivalsPage from "../app/records/tours/festivals/page";
import CuratorPage from "../app/curator/page";
import ContactPage from "../app/contact/page";
import OnThisDayPage from "../app/on-this-day/page";
import ByTheNumbersPage from "../app/records/by-the-numbers/page";
import FirstsPage from "../app/records/firsts/page";
import RecordsPage from "../app/records/page";
import { songs } from "../app/data/songs";
import { albumPageSlugs } from "../app/data/albumPages";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { timelineEras } from "../app/data/timeline";
import { certCountryCodes, countrySlug } from "../app/lib/certCountry";
import { allPairs, pairSlug } from "../app/lib/comparePairs";
import { CREDIT_LINE } from "../app/lib/credit";

/**
 * The review of the copy lane (8 Oct 2026) found what its own tests missed:
 *
 * 1. "award" still named a plaque on /share, /methodology and the Slovak
 *    board — phrasings the Copy 2 pattern did not list, on a page it did not
 *    render — and a text read that glued block elements together ("New in
 *    2026International awards") hid "International awards" from \b.
 * 2. The one noun stopped at the board, the hub and /certifications: /compare,
 *    the country boards, /press, /api, /embed, /methodology and the Dai Dai
 *    story still counted "plaques".
 * 3. The phone /about heading broke his name: "ABOUT BURNA / BOY".
 * 4. Two lanes' open-data lines said "cite as burnaboystats.com", a fifth
 *    credit beside the one credit line.
 *
 * So the scans here read every page the way a reader does — each element's
 * text apart from its neighbour's, plus the aria-labels a screen reader reads
 * out and the titles a pointer shows — and the negative controls are the
 * lines burnaboystats.com served on 8 Oct 2026, copied off the live pages.
 */

/** A page's words as a reader meets them: every element's text kept apart
 *  from the next one's, no scripts or styles, then the aria-labels and the
 *  title attributes. No-break spaces read as spaces. */
const readerText = (html: string) => {
  const d = new DOMParser().parseFromString(html.replace(/</g, " <"), "text/html");
  d.querySelectorAll("script, style, template").forEach((x) => x.remove());
  const attrs = [...d.querySelectorAll("[aria-label], [title]")].flatMap((e) => [e.getAttribute("aria-label"), e.getAttribute("title")]).filter(Boolean);
  return `${d.body.textContent} | ${attrs.join(" | ")}`.replace(/ /g, " ").replace(/\s+/g, " ");
};
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

type Render = () => ReactElement | Promise<ReactElement>;
const page = (C: unknown): Render => () => (C as () => ReactElement)();
const withParams = (C: unknown, params: Record<string, string>): Render => () =>
  (C as (p: { params: Promise<Record<string, string>> }) => Promise<ReactElement>)({ params: Promise.resolve(params) });
const compareAt = (sp: Record<string, string>): Render => () => ComparePage({ searchParams: Promise.resolve(sp) });
const html = async (r: Render) => renderToStaticMarkup(await r());

/** Every page that counts, prices or explains certifications — and the rest
 *  of the site's pages besides, since a count can turn up anywhere. */
const CERT_PAGES: [string, Render][] = [
  ["/certifications", page(CertificationsPage)],
  ["/share", page(SharePage)],
  ["/press", page(PressPage)],
  ["/api", page(ApiPage)],
  ["/embed", page(EmbedPage)],
  ["/afrobeats", page(AfrobeatsPage)],
  ["/compare", compareAt({})],
  ["/compare?a=burna-boy", compareAt({ a: "burna-boy" })],
  ["/compare (songs)", compareAt({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" })],
  ["/compare (songs, Nigerian)", compareAt({ mode: "songs", a: "asake", b: "seyi-vibez" })],
  ["/compare (albums)", compareAt({ mode: "albums", a: "burna-boy", b: "wizkid" })],
  ["/compare (all rows)", compareAt({ a: "burna-boy", b: "wizkid", all: "1" })],
  ["/compare (features off)", compareAt({ a: "burna-boy", b: "wizkid", feat: "0" })],
  ["/compare?mode=country", compareAt({ mode: "country" })],
  ["/compare/in", page(CountryIndexPage)],
  ...afrobeatsArtists.flatMap((a): [string, Render][] => [
    [`/afrobeats/${a.slug}`, withParams(ArtistPage, { artist: a.slug })],
    [`/afrobeats/${a.slug}/live`, withParams(ArtistLivePage, { artist: a.slug })],
  ]),
  ...allPairs().map(([a, b]): [string, Render] => [`/compare/${pairSlug(a, b)}`, withParams(PairPage, { pair: pairSlug(a, b) })]),
  ...certCountryCodes().map((c): [string, Render] => [`/compare/in/${countrySlug(c)}`, withParams(CountryPage, { country: countrySlug(c) })]),
];
const OTHER_PAGES: [string, Render][] = [
  ["/", page(Home)],
  ["/about", page(AboutPage)],
  ["/methodology", page(MethodologyPage)],
  ["/dai-dai", page(DaiDaiPage)],
  ["/faq", page(FaqPage)],
  ["/analysis", page(AnalysisPage)],
  ["/records", page(RecordsPage)],
  ["/records/visualized", page(VisualizedPage)],
  ["/records/africas-biggest", page(BiggestPage)],
  ["/records/by-the-numbers", page(ByTheNumbersPage)],
  ["/records/firsts", page(FirstsPage)],
  ["/records/charts", page(ChartsPage)],
  ["/records/tours", page(ToursPage)],
  ["/records/tours/revenue", page(RevenuePage)],
  ["/records/tours/revenue/countries", page(RevenueCountriesPage)],
  ["/records/tours/festivals", page(FestivalsPage)],
  ["/timeline", page(TimelinePage)],
  ["/on-this-day", page(OnThisDayPage)],
  ["/music", page(MusicPage)],
  ["/curator", page(CuratorPage)],
  ["/contact", page(ContactPage)],
  ...afrobeatsArtists.map((a): [string, Render] => [`/afrobeats/${a.slug}/charts`, withParams(ArtistChartsPage, { artist: a.slug })]),
  ...songs.map((s): [string, Render] => [`/music/${s.slug}`, withParams(SongPage, { song: s.slug })]),
  ...albumPageSlugs.map((s): [string, Render] => [`/music/albums/${s}`, withParams(AlbumPage, { album: s })]),
];

// ── 2. One noun: "plaque" only for the thing itself ─────────────────────────

describe("Copy 2 (B-10), finished: no count, label or line calls a certification a plaque", () => {
  /** Where "plaque" stays: the physical thing — a label's own plaque, the one
   *  a venue or a chart presents — and the counting rule /methodology defines
   *  ("one plaque per title per country"). */
  const KEPT = [
    /\bone plaque per (?:title|release) per country\b/gi,
    /\blabels?(?:'|’)s? own plaques?\b/gi,
    /\blabel-issued plaques?\b/gi,
    /\bthe label (?:issued|issued or announced) the plaque\b/gi,
    /\bon its own plaques?\b/gi,
    /\bpresented (?:him )?(?:the No\. 1|a) plaque\b/gi,
    /\ba special plaque\b/gi,
    /\bBRIT Billion plaque\b/gi,
    // Dai Dai's first screen is design job 8 (Claude Design draws it, and the
    // owner approves it); its lede's wording goes with that screen.
    /\bevery chart, plaque and stream behind it\b/gi,
  ];
  const plaqueWords = (t: string) => {
    let rest = t;
    for (const re of KEPT) rest = rest.replace(re, "");
    return [...rest.matchAll(/.{0,40}\bplaques?\b.{0,20}/gi)].map((m) => m[0]);
  };

  // Each as burnaboystats.com served it on 8 Oct 2026.
  const SHIPPED = [
    "certified units · outside Nigeria · 178 of 179 plaques counted", // /compare/burna-boy-vs-wizkid, the head
    "7 plaques · top shown", // the same page's artist-mode cell
    "No plaque", // its empty cell
    "Seyi Vibez — 102 plaques · at least 11,125,000", // /compare/seyi-vibez-vs-asake, the Nigeria strip
    "Every plaque is a floor — a Platinum single in the UK means at least 600,000", // /compare's lede
    "28 countries, 1,241 plaques — a record two artists share counted once", // /compare/in
    "20 artists · 672 plaques", // /compare/in, a market's row
    "14 artists · 43 plaques · Platinum 1,000,000", // /compare/in/united-states, the RIAA table's head
    "Highest plaque", // its column
    "46 of 46 plaques counted", // its figure
    "The board's plaques here",
    "What one plaque is worth here",
    "Biggest plaques in the United States",
    "1,340 artist plaques", // /press, the certifications.csv button
    "Every plaque for Burna Boy and the 19 artists on the Afrobeats Board", // /press and /api
    "Every plaque he holds and the countries that certified them, with the tier split.", // /embed
    "The plaques rolled in", // /dai-dai, chapter 05
    "The song earned its own plaques",
    "The pace of the plaques", // /records/visualized
    "The 100th Platinum plaque", // /timeline
    "Who awards a plaque, and what it means", // /methodology
    "A plaque is not a chart entry",
  ];

  it.each(CERT_PAGES)("%s", async (_path, render) => {
    expect(plaqueWords(readerText(await html(render)))).toEqual([]);
  });

  it.each(OTHER_PAGES)("%s", async (_path, render) => {
    expect(plaqueWords(readerText(await html(render)))).toEqual([]);
  });

  it("negative control: every line the site shipped is caught, and the plaque itself is not", () => {
    for (const line of SHIPPED) expect(plaqueWords(line), line).not.toEqual([]);
    for (const kept of [
      "One plaque per release per country", // /compare, the rule's card
      "South Africa — Sony Music Africa, label-issued plaque",
      "or, in a market with no current public register, from the label's own plaque",
      "Tyla's 10 certifications in South Africa from Sony Music Africa — 9 on its own plaques and “Chanel” Gold",
      "Ziggo presented him a plaque marking the milestone",
      "nearly ten months before his first BRIT Billion plaque",
    ])
      expect(plaqueWords(kept), kept).toEqual([]);
  });
});

// ── 1. "Award" names an award ───────────────────────────────────────────────

describe("Copy 2 (B-10, MU-24), finished: on the certification pages, 'award' only ever names an award", () => {
  /** Every use of the word these pages have for an award itself — the
   *  awards dataset, the nav card, the counted wins — and the bodies' own
   *  words (IFPI's 2013 levels list, Greece's "Award" column). Anything left
   *  after they are taken out is a plaque called an award. */
  const AWARD_USES = [
    /\bCharts, awards & tours\b/g,
    /\bcertification, award, tour\b/g,
    /\bawards\.csv\b/g,
    /\/api\/v1\/awards\b/g,
    /\b[\d,]+ Award wins\b/g,
    /\bAward events are not certifications\b/g,
    /\bInternational Certification Award levels\b/g,
    /\bin its Award column\b/g,
    /\bit awards for\b/g, // the verb: Colombia's body "awards for 'la música más vendida…'"
  ];
  const plaqueAwards = (t: string) => {
    let rest = t;
    for (const re of AWARD_USES) rest = rest.replace(re, "");
    return [...rest.matchAll(/.{0,40}\bawards?\b.{0,20}/gi)].map((m) => m[0]);
  };

  // Each as burnaboystats.com served it on 8 Oct 2026.
  const SHIPPED = [
    "Every award is counted once it appears in the issuing body's own searchable database", // /share
    "New in 2026 International awards", // /certifications, the summary strip
    "Until 2022 the Slovak awards ran on euro revenue — a different measure.", // /compare/in/slovakia
    "RIAA awards", // /compare/in/united-states, the RIAA table, read aloud
    "RIAA Latin awards",
    "9 read from the label's own award and 1 from its own announcement", // /afrobeats/tyla
    "The source column says what each plaque was read from: a register row, a label's own award", // /press
  ];

  it.each(CERT_PAGES)("%s", async (_path, render) => {
    expect(plaqueAwards(readerText(await html(render)))).toEqual([]);
  });

  it("negative control: every line the site shipped is caught", () => {
    for (const line of SHIPPED) expect(plaqueAwards(line), line).not.toEqual([]);
  });

  it("the timeline files a certification as one: its badge says so, and only awards say Award", async () => {
    const entries = timelineEras.flatMap((e) => e.entries);
    // An "award" entry is an award: it opens the awards page.
    for (const e of entries.filter((x) => x.kind === "award")) expect(e.href, e.title).toBe("/records/awards");
    // A certification entry opens /certifications and is filed as one.
    for (const e of entries.filter((x) => x.href === "/certifications")) expect(e.kind, e.title).toBe("certification");
    const d = parse(await html(page(TimelinePage)));
    const badges = [...d.querySelectorAll(`.${timelineStyles.kind}`)].map((b) => b.textContent);
    expect(badges).toContain("Certification");
    // The shipped entry — {title: "The 100th Platinum plaque", href: "/certifications", kind: "award"} — fails the rule above.
    const SHIPPED_ENTRY = { title: "The 100th Platinum plaque", href: "/certifications", kind: "award" };
    expect(SHIPPED_ENTRY.kind === "award" && SHIPPED_ENTRY.href !== "/records/awards").toBe(true);
  });
});

// ── 3. /about: his name on one line ─────────────────────────────────────────

describe("C-10 (review): the /about heading never breaks his name", () => {
  /** The heading's name span holds no breaking space. */
  const nameHeld = (h1: Element) => {
    const name = h1.querySelector("span")!;
    return name.textContent === "Burna Boy";
  };

  it("both layouts: the name in the h1 is one unbreakable run", () => {
    const d = parse(renderToStaticMarkup(<AboutPage />));
    const h1s = [d.querySelector(`h1.${aboutStyles.h1}`)!, d.querySelector(`h1.${mobileAboutStyles.title}`)!];
    for (const h1 of h1s) {
      expect(nameHeld(h1), h1.outerHTML).toBe(true);
      // And it still reads "About Burna Boy".
      expect(h1.textContent!.replace(/ /g, " ").replace(/\s+/g, " ").trim()).toBe("About Burna Boy");
    }
  });

  it("negative control: the heading as this branch first set it breaks after Burna", () => {
    // e878926b, phone: at 320 and 360 it set "ABOUT BURNA / BOY".
    const SHIPPED = parse('<h1 class="title">About <span class="gold">Burna Boy</span></h1>').querySelector("h1")!;
    expect(nameHeld(SHIPPED)).toBe(false);
  });
});

// ── 4. One credit line, everywhere it is offered ────────────────────────────

describe("C-17 (review): every open-data line cites the one credit line", () => {
  /** Every "cite as …" a page offers, read to the end of its line. */
  const citations = (h: string) =>
    [...parse(h).querySelectorAll("p, span, div")]
      .filter((e) => /cite as/.test(e.textContent ?? "") && ![...e.children].some((c) => /cite as/.test(c.textContent ?? "")))
      .map((e) => (e.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").replace(/^.*?cite as /, "cite as ").trim());
  const ONE = `cite as “${CREDIT_LINE}”`;

  it.each([
    ["/certifications", page(CertificationsPage)],
    ["/records/charts", page(ChartsPage)],
    ["/records/tours", page(ToursPage)],
    ["/records/tours/revenue", page(RevenuePage)],
    ["/records/tours/revenue/countries", page(RevenueCountriesPage)],
    ["/records/tours/festivals", page(FestivalsPage)],
  ] as [string, Render][])("%s", async (_path, render) => {
    const found = citations(await html(render));
    expect(found.length).toBeGreaterThan(0);
    expect(new Set(found)).toEqual(new Set([ONE]));
  });

  it("negative control: the line the two lanes shipped cites a shorter form", () => {
    // /certifications, /records/charts and /records/tours, 8 Oct 2026.
    const SHIPPED = "Download CSV ↓ · JSON · CC BY 4.0 · cite as burnaboystats.com";
    expect(citations(`<p>${SHIPPED}</p>`)).not.toEqual([ONE]);
  });
});
