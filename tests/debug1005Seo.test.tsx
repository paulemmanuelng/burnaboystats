import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";
import { afrobeatsArtists, pageStamp, chartPageStamp, AFROBEATS_LAST_CHART_SWEEP, BURNA, certCount } from "../app/data/afrobeats";
import { CERTS_STAMP, COUNTRIES } from "../app/data/certifications";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";
import { allPairs, pairSlug } from "../app/lib/comparePairs";
import { comparableArtists, unitsForCert } from "../app/lib/certUnits";
import { countryBoards } from "../app/lib/certCountry";
import { liveTitleRows } from "../app/lib/liveChartMeta";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { songCardStats, albumCardStats } from "../app/lib/musicCards";
import { cardSig } from "../app/lib/boardCards";
import { ANALYSIS_STAMP } from "../app/lib/analysisStamp";
import { searchDocs } from "../app/lib/searchIndex";
import { totalAwards } from "../app/data/certifications";
import ArtistPage, { generateMetadata as artistMetadata } from "../app/afrobeats/[artist]/page";
import ArtistChartsPage from "../app/afrobeats/[artist]/charts/page";
import { generateMetadata as liveMetadata } from "../app/afrobeats/[artist]/live/page";
import PairPage from "../app/compare/[pair]/page";
import AfrobeatsPage from "../app/afrobeats/page";
import AnalysisPage from "../app/analysis/page";
import UnmergePage from "../app/analysis/spotify-unmerge/page";
import MethodologyPage from "../app/methodology/page";

// The SEO, share-card and site-wide copy findings of the debug pass of
// 5 Oct 2026. Each negative control is what the live site served that day.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const ldOf = (html: string) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]) as Record<string, unknown>);
const rows = sitemap();
const lastmod = (path: string) => {
  const r = rows.find((x) => x.url === `${siteUrl}${path}`);
  return r?.lastModified ? new Date(r.lastModified).toISOString().slice(0, 10) : undefined;
};
const swept = afrobeatsArtists.filter((a) => a.swept);
const bySlug = (slug: string) => afrobeatsArtists.find((a) => a.slug === slug)!;

// ── afrobeatsB-04 ────────────────────────────────────────────────────────────
describe("a page that prints chart rows is dated no earlier than the chart sweep that wrote them", () => {
  it("chartPageStamp is the later of the plaque stamp and the last chart sweep", () => {
    for (const a of swept) expect(chartPageStamp(a), a.slug).toBe([pageStamp(a), AFROBEATS_LAST_CHART_SWEEP].sort().at(-1));
  });

  it("the sitemap and both pages' Dataset agree, for every artist whose pages print chart rows", () => {
    for (const a of swept.filter((x) => x.charts.length > 0)) {
      for (const path of [`/afrobeats/${a.slug}`, `/afrobeats/${a.slug}/charts`]) expect(lastmod(path), path).toBe(chartPageStamp(a));
      expect(chartPageStamp(a) >= AFROBEATS_LAST_CHART_SWEEP, a.slug).toBe(true);
    }
    // Seyi Vibez's routes served 6 Sep on 5 Oct 2026, his plaque stamp then.
    // The board-title edits of the same debug pass (#428) moved his pageStamp
    // past the chart sweep since; the negative control is the shipped date.
    expect(chartPageStamp(bySlug("seyi-vibez"))).not.toBe("2026-09-06");
  });

  it("Asake's pages, whose plaque stamp is still 6 Sep, declare the chart sweep in their Dataset", async () => {
    const asake = bySlug("asake");
    expect(pageStamp(asake)).toBe("2026-09-06"); // its plaque stamp, no edit since
    const dated = async (el: Promise<React.ReactElement>) =>
      ldOf(renderToStaticMarkup(await el)).find((n) => n["@type"] === "Dataset")?.dateModified;
    expect(await dated(ArtistChartsPage({ params: Promise.resolve({ artist: "asake" }) }))).toBe(chartPageStamp(asake));
    expect(await dated(ArtistPage({ params: Promise.resolve({ artist: "asake" }) }))).toBe(chartPageStamp(asake));
    // Negative control: pageStamp alone, the date these routes carried.
    expect(chartPageStamp(asake)).not.toBe(pageStamp(asake));
    expect(chartPageStamp(asake)).toBe(AFROBEATS_LAST_CHART_SWEEP);
    // A later edit made without a register read is kept (D-05): CKay's 3 Oct,
    // Olamide's 5 Oct.
    for (const slug of ["ckay", "olamide"]) {
      expect(pageStamp(bySlug(slug)) > AFROBEATS_LAST_CHART_SWEEP, slug).toBe(true);
      expect(chartPageStamp(bySlug(slug)), slug).toBe(pageStamp(bySlug(slug)));
    }
  });
});

// ── compareB-02 / compareA-10 ────────────────────────────────────────────────
describe("the /compare routes are dated by the same helper the sitemap uses", () => {
  it("a pair page's Dataset says what its sitemap row says — the 48 Tems, Olamide and CKay pairs included", async () => {
    const pair = allPairs().find(([a, b]) => pairSlug(a, b) === "tems-vs-tyla")!;
    const html = renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: "tems-vs-tyla" }) }));
    const date = ldOf(html).find((n) => n["@type"] === "Dataset")?.dateModified;
    expect(date).toBe([pageStamp(pair[0]), pageStamp(pair[1])].sort().at(-1));
    expect(date).toBe(lastmod("/compare/tems-vs-tyla"));
    // Negative control: the newer verifiedOn, as the page declared it.
    expect(date).not.toBe([pair[0].verifiedOn, pair[1].verifiedOn].sort().at(-1));
  });

  it("the /compare index is dated by the newest plaque list it orders its chips by", () => {
    expect(lastmod("/compare")).toBe([...swept.map(pageStamp), CERTS_STAMP].sort().at(-1));
    expect(lastmod("/compare")! > "2026-09-23").toBe(true); // what the sitemap said on 5 Oct
  });

  it("the finished /naija66 page is not advertised as changing daily", () => {
    expect(rows.find((r) => r.url === `${siteUrl}/naija66`)?.changeFrequency).toBe("monthly");
  });
});

// ── compareA-13 ─────────────────────────────────────────────────────────────
describe("the /compare share cards claim only the pricing the data supports", () => {
  // The wording is the boards pass's (#428, compareIn-04): "priced country by
  // country" / "priced market by market", no "each" — Greece's plaques are
  // priced at IFPI's June 2013 level and Colombia's not at all.
  it("today two Colombian plaques cannot be priced, so neither card says 'each'", () => {
    const certs = comparableArtists.flatMap((a) => a.releases.flatMap((r) => r.certs.map((c) => ({ c, r }))));
    const priced = certs.filter(({ c, r }) => unitsForCert(c, r.format).units !== null).length;
    expect(certs.length - priced).toBeGreaterThan(0);
    const shipped = /each priced at its own body's threshold/;
    // Negative control: the /compare/in card's sub line as it shipped (main at
    // e6ebef4f); the /compare card's ended on the same clause.
    expect("  sub: `${certCountryCodes().length} markets · ${plaques.toLocaleString(\"en-US\")} plaques · each priced at its own body's threshold`,").toMatch(shipped);
    for (const f of ["app/compare/opengraph-image.tsx", "app/compare/in/opengraph-image.tsx"]) expect(read(f), f).not.toMatch(shipped);
    expect(read("app/compare/opengraph-image.tsx")).toContain("· priced country by country`");
    expect(read("app/compare/in/opengraph-image.tsx")).toContain("· priced market by market`");
    const boards = countryBoards();
    expect(boards.reduce((n, b) => n + b.counted, 0)).toBeLessThan(boards.reduce((n, b) => n + b.plaques, 0));
  });
});

// ── seo-03, seo-15, afrobeatsB-05, seo-19 (live) ────────────────────────────
describe("a live page's description and share card read the same rows", () => {
  const description = async (slug: string) => String((await liveMetadata({ params: Promise.resolve({ artist: slug }) })).description);

  it("Seyi Vibez: the description's SWAGUU count is the card's", async () => {
    const seyi = LIVE_BOARDS.find((b) => b.slug === "seyi-vibez")!;
    const top = liveTitleRows(seyi.releases)[0];
    const d = await description("seyi-vibez");
    expect(d).toContain(`led by “${top.title}”, best No. ${top.best}, on ${top.reach} chart`);
  });

  it("ties go to the better position on both, so Ruger's lead is the card's first row", () => {
    const rows = [
      { title: "POE", platforms: [{ entries: Array.from({ length: 7 }, (_, i) => ({ position: 104 + i })) }] },
      { title: "RnB", platforms: [{ entries: Array.from({ length: 7 }, (_, i) => ({ position: 68 + i })) }] },
    ];
    // In the data's order, POE first — what the card printed on 5 Oct 2026.
    expect(liveTitleRows(rows).map((r) => r.title)).toEqual(["RnB", "POE"]);
  });

  it("merges a title track's song and album into one row", () => {
    const rows = liveTitleRows([
      { title: "SWAGUU", platforms: [{ entries: [{ position: 3 }, { position: 9 }] }] },
      { title: "SWAGUU", platforms: [{ entries: [{ position: 1 }] }] },
      { title: "GTA", platforms: [{ entries: [{ position: 2 }] }] },
    ]);
    expect(rows).toEqual([
      { title: "SWAGUU", reach: 3, best: 1 },
      { title: "GTA", reach: 1, best: 2 },
    ]);
  });

  it("every description counts placements as placements, inside 160 characters", async () => {
    for (const b of LIVE_BOARDS) {
      const d = await description(b.slug);
      expect(d.length, b.slug).toBeLessThanOrEqual(160);
      expect(d, b.slug).not.toMatch(/is on \d+ platform charts/);
      expect(d, b.slug).toMatch(/has \d+ placements? on platform charts/);
    }
    // Negative control: Wizkid's description as it read on 5 Oct 2026.
    expect("Wizkid is on 281 platform charts in 64 countries right now").toMatch(/is on \d+ platform charts/);
  });

  it("the live card draws three title rows, not four", () => {
    expect(read("app/afrobeats/[artist]/live/opengraph-image.tsx")).toMatch(/const LIVE_CARD_ROWS = 3;/);
    expect(read("app/afrobeats/[artist]/live/opengraph-image.tsx")).not.toMatch(/\.slice\(0, 4\)/);
  });

  it("the charts card holds its chips to two rows", () => {
    expect(read("app/afrobeats/[artist]/charts/opengraph-image.tsx")).toContain("maxHeight: 140, overflow: \"hidden\"");
  });
});

// ── seo-05 ───────────────────────────────────────────────────────────────────
describe("share-card stat labels go singular at one", () => {
  // The board's artist and charts cards: artistCardStats / chartsCardStats
  // (app/lib/boardCards.ts), held at one and at many in
  // tests/debug1005Boards.test.ts (afrobeatsB-08). The song and album cards
  // build on the same CardStat shape and cardSig.
  it("the song and album tiles, at one and at many", () => {
    expect(songCardStats("#3", 1, 1).map((t) => t.l)).toEqual(["Best peak", "Country", "Cert"]);
    expect(songCardStats("No. 1", 2, 5).map((t) => t.l)).toEqual(["Best peak", "Countries", "Certs"]);
    expect(albumCardStats(null, 1, 1, 14).map((t) => t.l)).toEqual(["Country", "Cert", "Tracks"]);
    expect(albumCardStats(null, 2, 2, 1).map((t) => t.l)).toEqual(["Countries", "Certs", "Track"]);
  });

  it("the live card's three tiles each have a singular", () => {
    const src = read("app/afrobeats/[artist]/live/opengraph-image.tsx");
    for (const [n, one, many] of [
      ["placements", "Placement", "Placements"],
      ["countries", "Country", "Countries"],
      ["services", "Platform", "Platforms"],
    ]) {
      expect(src, many).toContain(`l: b.${n} === 1 ? "${one}" : "${many}"`);
    }
  });

  it("the labels join each card's image id, so a scraped preview re-fetches", () => {
    expect(cardSig(songCardStats("#3", 1, 1))).not.toBe(cardSig([
      { v: "#3", l: "Best peak" },
      { v: "1", l: "Countries" },
      { v: "1", l: "Certs" },
    ]));
    for (const f of [
      "app/music/[song]/opengraph-image.tsx",
      "app/music/albums/[album]/opengraph-image.tsx",
      "app/afrobeats/[artist]/opengraph-image.tsx",
      "app/afrobeats/[artist]/charts/opengraph-image.tsx",
      "app/afrobeats/[artist]/live/opengraph-image.tsx",
    ]) {
      const src = read(f);
      // The live card's labels follow from the figures its id already folds
      // (placements, countries, services); the others fold cardSig.
      if (f.includes("/live/")) expect(src, f).toMatch(/\|\$\{b\.placements\}\|\$\{b\.countries\}\|\$\{b\.numberOnes\}\|\$\{b\.services\}\|/);
      else expect(src, f).toContain("cardSig(");
      // No hard-coded plural label left behind.
      expect(src, f).not.toMatch(/l: "(Countries|Certs|Territories|No\. 1 peaks|Certifications|Chart entries|Placements|Platforms)"/);
      expect(src, f).not.toMatch(/\{t\.reach\} charts/);
    }
  });
});

// ── seo-08 ───────────────────────────────────────────────────────────────────
describe("board artist titles count plaques as plaques", () => {
  it("'Plaques in', like Burna Boy's own certifications title, within 60 characters", async () => {
    for (const a of swept) {
      const t = String((await artistMetadata({ params: Promise.resolve({ artist: a.slug }) })).title);
      expect(t, a.slug).toMatch(/Certifications — \d+ Plaques? in \d+ Countr(y|ies)$/);
      expect(t, a.slug).not.toContain("Awards");
      expect(t.length, a.slug).toBeLessThanOrEqual(60);
    }
    expect("Wizkid Certifications — 159 Awards in 21 Countries").toContain("Awards");
  });
});

// ── seo-09 ───────────────────────────────────────────────────────────────────
describe("the root layout leaves the X card's title and description to openGraph", () => {
  it("sets no twitter title or description of its own", () => {
    const src = read("app/layout.tsx");
    const block = /twitter: \{([\s\S]*?)\n {2}\},/.exec(src)![1];
    expect(block).not.toMatch(/\btitle:|\bdescription:/);
    expect(block).toContain("card:");
    expect(src).not.toContain("Certifications, discography and milestones of the African Giant.\",\n    // The pages");
    expect(src).not.toMatch(/title: "Burna Boy Stats",\n/);
  });
});

// ── seo-10 ───────────────────────────────────────────────────────────────────
describe("the /afrobeats ItemList opens with the board's first row, Burna Boy", () => {
  it("lists him first, the board after him, in descending plaque order", () => {
    const list = ldOf(renderToStaticMarkup(AfrobeatsPage())).map((n) => n.mainEntity as Record<string, unknown> | undefined).find((m) => m?.["@type"] === "ItemList")!;
    const items = list.itemListElement as { position: number; name: string; url: string }[];
    expect(items[0]).toMatchObject({ position: 1, name: "Burna Boy", url: `https://burnaboystats.com${BURNA.href}` });
    expect(list.numberOfItems).toBe(items.length);
    // Every artist on the board, swept or pending, after him.
    expect(items.length).toBe(afrobeatsArtists.length + 1);
    // His count leads every board count, so "Descending" stays true.
    expect(swept.every((a) => certCount(a) < totalAwards())).toBe(true);
    // Negative control: the list opened on Wizkid.
    expect(items[0].name).not.toBe("Wizkid");
  });
});

// ── seo-12 ───────────────────────────────────────────────────────────────────
describe("a page's JSON-LD date is the page's own, not the newest feed date anywhere", () => {
  it("/analysis declares the stamp its sitemap row reports", () => {
    const art = ldOf(renderToStaticMarkup(AnalysisPage())).find((n) => n["@type"] === "Article")!;
    expect(String(art.dateModified).slice(0, 10)).toBe(ANALYSIS_STAMP);
    expect(lastmod("/analysis")).toBe(ANALYSIS_STAMP);
  });

  it("/api, /press and /curator, which the sitemap leaves undated by design, declare no dateModified", () => {
    for (const f of ["app/api/page.tsx", "app/press/page.tsx", "app/curator/page.tsx"]) expect(read(f), f).not.toMatch(/^\s+dateModified:/m);
    for (const p of ["/api", "/press", "/curator"]) expect(lastmod(p), p).toBeUndefined();
  });

  it("/analysis/spotify-unmerge, whose live career figure has no as-of date, declares no dateModified", async () => {
    // It declared lastUpdated — the newest feed date anywhere (10-04 on 5 Oct)
    // — beside a sitemap row on its own feed entries (09-17): two dates for one
    // page (review of the 5 Oct debug PR). The figure that moves is the stats
    // bot's daily career total, which carries no date of its own, so neither
    // value is the page's. datePublished stays.
    const nodes = ldOf(renderToStaticMarkup(await UnmergePage()));
    for (const n of nodes) expect(n.dateModified, String(n["@type"])).toBeUndefined();
    const article = nodes.find((n) => n["@type"] === "Article")!;
    expect(article.datePublished).toBe("2026-08-21");
    expect(read("app/analysis/spotify-unmerge/page.tsx")).not.toMatch(/^\s+dateModified:/m);
  });
});

// ── core-08 ──────────────────────────────────────────────────────────────────
describe("one name per certifying body", () => {
  it("Switzerland is IFPI Switzerland and Colombia's body keeps its accent", () => {
    expect(COUNTRIES.CH.body).toBe("IFPI Switzerland");
    expect(COUNTRIES.CO.body).toBe("Pro Música Colombia");
    // Bare "IFPI" names the umbrella body the Greek levels come from.
    expect(Object.values(COUNTRIES).map((c) => c.body)).not.toContain("IFPI");
  });

  it("the methodology's lists and table use the registers list's names", () => {
    const t = renderToStaticMarkup(<MethodologyPage />).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    // As the ‡/¶ lists and the threshold table printed them (flag, then name).
    // The dated "Checks that changed our own figures" record keeps its own
    // wording, as the feed's log lines do.
    for (const shipped of ["🇨🇭 IFPI Schweiz", "🇳🇴 IFPI Norge AS", "🇳🇬 TurnTable Certification System of Nigeria", "🇨🇴 PRO MÚSICA", "🇧🇪 BRMA", "🇵🇹 Audiogest"]) {
      expect(t, shipped).not.toContain(shipped);
    }
    expect(t).toContain("🇨🇭 IFPI Switzerland");
    expect(t).toContain("🇵🇹 AFP — AFP/Audiogest raised");
    // Portugal's ‡ note names the certifier its hero names.
    expect(CERT_THRESHOLDS.PT.vintage).toMatch(/^AFP\/Audiogest raised/);
    // The § notes name the Danish and Norwegian bodies as their boards do.
    const notes = JSON.stringify(CERT_THRESHOLDS);
    expect(notes).not.toContain("the ratio IFPI Danmark and IFPI Norge publish");
    expect(notes).toContain("the ratio IFPI Denmark and IFPI Norway publish");
  });

  it("search still finds Colombia's board typed without the accent", () => {
    expect(searchDocs("pro musica colombia").map((d) => d.path)).toContain("/compare/in/colombia");
  });
});

// ── core-14 ──────────────────────────────────────────────────────────────────
describe("the About share card spells the genre as every page does", () => {
  it("Afro-fusion, not Afro-Fusion", () => {
    expect(read("app/about/opengraph-image.tsx")).toContain("Afro-fusion pioneer");
    expect(read("app/about/opengraph-image.tsx")).not.toContain("Afro-Fusion");
  });
});
