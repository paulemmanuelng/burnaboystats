import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

/**
 * No link into /compare prefetches (15 Oct 2026).
 *
 * The Vercel firewall rate-limits /compare: a request whose path starts with
 * /compare counts, 60 to an IP in a 60-second window, then 403. Every
 * next/link prefetch is such a request, and one visit to /compare made 21 —
 * the page and 20 prefetches of its links in view, measured on the live site.
 * Three page views in a minute spent the budget, and the owner's phone got
 * Vercel's "This request was blocked · 403 FORBIDDEN" page at 06:03 UK.
 *
 * The fix is app/components/SiteLink.tsx, next/link with prefetch={false}
 * whenever the href starts with /compare (app/lib/noPrefetch.ts). It is the
 * only module in app/ that imports next/link: every other file imports it as
 * `Link`, so the decision is made at render time from the href itself, wherever
 * the href came from. This file holds it in place:
 *
 *   1. the rule, and SiteLink applying it and nothing else;
 *   2. every page that carries a compare link, rendered with the layout's
 *      chrome, with a next/link stand-in that records the prefetch prop:
 *      every Link whose href resolves to a /compare path has prefetch false;
 *      and the links that only appear in a state a page render does not
 *      reach: the tour map's pinned country, both layouts, and the home
 *      page's LIVE band when its updates entry links into /compare;
 *   3. what one visit to /compare costs: the links that could prefetch
 *      before (the shipped props) and now (none, so the page alone);
 *   4. the source: a module other than SiteLink importing next/link, or a
 *      router.prefetch of a compare (or unknown) path, fails.
 *
 * Each negative control is the props or the source line the site shipped.
 */

const ORIGIN = "https://burnaboystats.com";

const state = vi.hoisted(() => ({
  path: "/",
  query: "",
  /** Every Link rendered since the last reset: its href, its prefetch prop, and whether one was passed at all. */
  links: [] as { href: string; prefetch: unknown; given: boolean }[],
  /** True: SiteLink renders as origin/main did, plain next/link with the props as written. */
  shipped: false,
  /** app/data/updates' list, the real one; the band test swaps one entry in. */
  updates: [] as unknown[],
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => state.path,
  useSearchParams: () => new URLSearchParams(state.query),
  notFound: () => {
    throw new Error("notFound()");
  },
}));

// The prefetch prop is the thing under test, and next/link never writes it to
// the DOM: the stand-in records it as it renders.
vi.mock("next/link", () => ({
  default: (props: { href: string | { pathname?: string; search?: string }; children?: ReactNode; prefetch?: unknown }) => {
    const { href, children, prefetch, ...rest } = props;
    const h = typeof href === "string" ? href : `${href.pathname ?? ""}${href.search ?? ""}`;
    state.links.push({ href: h, prefetch, given: "prefetch" in props });
    return (
      <a href={h} {...(rest as object)}>
        {children}
      </a>
    );
  },
}));

// The negative control's switch: with `shipped` on, SiteLink is the next/link
// it replaced, given exactly the props the call site wrote.
vi.mock("../app/components/SiteLink", async (importOriginal) => {
  const real = await importOriginal<typeof import("../app/components/SiteLink")>();
  const { default: NextLink } = await import("next/link");
  return {
    default: (props: ComponentProps<typeof real.default>) =>
      state.shipped ? <NextLink {...props} /> : <real.default {...props} />,
  };
});

// The home page's LIVE band leads with an updates entry (lib/bandHeadline), and
// three entries in the log link into /compare. The list is the real one, in
// place, so the band test can put one of them on top and put the log back.
vi.mock("../app/data/updates", async (importOriginal) => {
  const real = await importOriginal<typeof import("../app/data/updates")>();
  state.updates = [...real.updates];
  return { ...real, updates: state.updates };
});

import SiteLink from "../app/components/SiteLink";
import { hrefPath, noPrefetch, NO_PREFETCH_PREFIX } from "../app/lib/noPrefetch";
import ComparePage from "../app/compare/page";
import PairPage from "../app/compare/[pair]/page";
import CountryIndexPage from "../app/compare/in/page";
import CountryPage from "../app/compare/in/[country]/page";
import ArtistPage, { generateStaticParams as boardArtists } from "../app/afrobeats/[artist]/page";
import AfrobeatsPage from "../app/afrobeats/page";
import CertificationsPage from "../app/certifications/page";
import HomePage from "../app/page";
import MethodologyPage from "../app/methodology/page";
import PressPage from "../app/press/page";
import UpdatesPage from "../app/updates/page";
import SearchPage from "../app/search/page";
import Nav from "../app/components/Nav";
import MobileNavSheet from "../app/components/MobileNavSheet";
import MobileTabBar from "../app/components/MobileTabBar";
import FooterNav from "../app/components/FooterNav";
import BirthdayCelebration from "../app/components/BirthdayCelebration";
import TourMapCard from "../app/components/TourMapCard";
import TourMapPanel from "../app/components/TourMapPanel";
import LiveBand from "../app/components/LiveBand";
import { tourMapCountries, tourMapTotals } from "../app/lib/tourMapData";
import { updates, type Update } from "../app/data/updates";
import { navGroups, navSearchHint, navUpdated, searchPlaceholder } from "../app/lib/navGroups";
import { suggestedSearchDocs } from "../app/lib/searchSuggested";
import { allPairs, pairSlug } from "../app/lib/comparePairs";
import { certCountryCodes, countrySlug } from "../app/lib/certCountry";

/** The path a rendered href asks for, read as the browser reads it on `page`. */
function pathOn(href: string, page: string): string | null {
  const u = new URL(href, ORIGIN + page);
  return u.origin === ORIGIN ? u.pathname : null;
}
const isCompare = (href: string, page: string) => pathOn(href, page)?.startsWith("/compare") ?? false;

// ── 1. The rule ─────────────────────────────────────────────────────────────
describe("the rule: a link whose path starts with /compare does not prefetch", () => {
  it("is the firewall's own test, starts with /compare", () => {
    expect(NO_PREFETCH_PREFIX).toBe("/compare");
    // The four shapes the 21 live requests took, and the pages they reach.
    for (const href of [
      "/compare",
      "/compare?a=burna-boy",
      "/compare?mode=songs",
      "/compare/in",
      "/compare/in/canada",
      "/compare/burna-boy-vs-wizkid",
      "/compare?a=burna-boy#slot-b",
      `${ORIGIN}/compare/in`,
    ])
      expect(noPrefetch(href), href).toBe(true);
    expect(noPrefetch({ pathname: "/compare/in", query: { feat: "0" } } as { pathname: string })).toBe(true);
    for (const href of ["/", "/certifications", "/afrobeats/wizkid", "/methodology#certified-units", "/music", `${ORIGIN}/`])
      expect(noPrefetch(href), href).toBe(false);
    expect(hrefPath("https://open.spotify.com/artist/x")).toBe("/artist/x");
  });

  it("SiteLink turns prefetch off for a compare href and passes every other link through untouched", () => {
    const render = (el: ReactElement) => {
      state.links = [];
      renderToStaticMarkup(el);
      return state.links[0];
    };
    expect(render(<SiteLink href="/compare/in">x</SiteLink>)).toEqual({ href: "/compare/in", prefetch: false, given: true });
    // Even when the call site asked for it.
    expect(render(<SiteLink href="/compare" prefetch>x</SiteLink>).prefetch).toBe(false);
    // Anywhere else: no prefetch prop added, and the call site's own kept.
    expect(render(<SiteLink href="/certifications">x</SiteLink>)).toEqual({ href: "/certifications", prefetch: undefined, given: false });
    expect(render(<SiteLink href="/music" prefetch={false}>x</SiteLink>).prefetch).toBe(false);
  });
});

// ── 2. Every page that carries a compare link ───────────────────────────────
type Page = { path: string; render: () => unknown };

/** The layout's link-bearing chrome, as app/layout.tsx mounts it on every page. */
const chrome = () => (
  <>
    <Nav suggested={suggestedSearchDocs()} searchPlaceholder={searchPlaceholder} />
    <MobileNavSheet groups={navGroups} updated={navUpdated} searchHint={navSearchHint} />
    <BirthdayCelebration />
    <MobileTabBar />
    <FooterNav />
  </>
);

/** Every Link a visit to `page` renders, page and chrome, with what it was given. */
async function linksOf(page: Page, shipped = false) {
  const u = new URL(page.path, ORIGIN);
  state.path = u.pathname;
  state.query = u.search;
  state.shipped = shipped;
  state.links = [];
  try {
    const body = (await page.render()) as ReactElement;
    renderToStaticMarkup(
      <>
        {body}
        {chrome()}
      </>
    );
    return state.links;
  } finally {
    state.shipped = false;
  }
}

const sp = (q: Record<string, string>) => ({ searchParams: Promise.resolve(q) });
const COMPARE: Page = { path: "/compare", render: () => ComparePage(sp({})) };

const PAGES: Page[] = [
  COMPARE,
  { path: "/compare?a=burna-boy", render: () => ComparePage(sp({ a: "burna-boy" })) },
  { path: "/compare?a=burna-boy&b=wizkid&mode=songs", render: () => ComparePage(sp({ a: "burna-boy", b: "wizkid", mode: "songs" })) },
  { path: "/compare?mode=albums", render: () => ComparePage(sp({ mode: "albums" })) },
  { path: "/compare?mode=country", render: () => ComparePage(sp({ mode: "country" })) },
  ...allPairs().map(([a, b]) => {
    const pair = pairSlug(a, b);
    return { path: `/compare/${pair}`, render: () => PairPage({ params: Promise.resolve({ pair }) }) };
  }),
  { path: "/compare/in", render: () => CountryIndexPage() },
  ...certCountryCodes().map((code) => {
    const country = countrySlug(code);
    return { path: `/compare/in/${country}`, render: () => CountryPage({ params: Promise.resolve({ country }) }) };
  }),
  ...boardArtists().map(({ artist }) => ({
    path: `/afrobeats/${artist}`,
    render: () => ArtistPage({ params: Promise.resolve({ artist }) }),
  })),
  { path: "/afrobeats", render: () => AfrobeatsPage() },
  { path: "/certifications", render: () => CertificationsPage() },
  { path: "/", render: () => HomePage() },
  { path: "/methodology", render: () => MethodologyPage() },
  { path: "/press", render: () => PressPage() },
  { path: "/updates", render: () => UpdatesPage() },
  { path: "/search?q=compare", render: () => SearchPage(sp({ q: "compare" })) },
];

describe("on every page that links into /compare, no such link prefetches", () => {
  it("covers every kind of page that carries one", () => {
    expect(PAGES.filter((p) => p.path.startsWith("/compare/") && p.path.includes("-vs-")).length).toBe(allPairs().length);
    expect(PAGES.filter((p) => p.path.startsWith("/compare/in/")).length).toBe(certCountryCodes().length);
    expect(PAGES.filter((p) => p.path.startsWith("/afrobeats/")).length).toBeGreaterThan(1);
  });

  it.each(PAGES.map((p) => [p.path, p] as const))("%s", async (path, page) => {
    const links = (await linksOf(page)).filter((l) => isCompare(l.href, path));
    // Every one of these pages links into /compare, if only from the masthead.
    expect(links.length, path).toBeGreaterThan(0);
    expect(links.filter((l) => l.prefetch !== false).map((l) => l.href), path).toEqual([]);
  });

  it("the shipped props fail it: on origin/main the same links prefetched", async () => {
    for (const page of [COMPARE, PAGES.find((p) => p.path === "/afrobeats/wizkid")!, PAGES.find((p) => p.path === "/")!]) {
      const links = (await linksOf(page, true)).filter((l) => isCompare(l.href, page.path));
      expect(links.length, page.path).toBeGreaterThan(0);
      // next/link's default: no prefetch prop at all, on every one of them.
      expect(links.filter((l) => l.prefetch !== false).length, page.path).toBe(links.length);
    }
  });

  it("navigation is unchanged: the links are next/link Links still, with the same hrefs", async () => {
    const now = (await linksOf(COMPARE)).map((l) => l.href);
    const shipped = (await linksOf(COMPARE, true)).map((l) => l.href);
    expect(now).toEqual(shipped);
  });
});

// The links a page render in its default state does not reach.
describe("the tour map's pinned country: its Certifications link does not prefetch, in either layout", () => {
  // A pinned country's card (desktop) and panel (phone) link its country
  // board, /compare/in/<country> (lib/tourMapData, from certCountry's
  // countryBoardLinks). Pinning is a click, the find box or a ?country= deep
  // link from the /records/tours rows, so the page renders none of them.
  const MAP = "/records/tours/map";
  const withBoard = tourMapCountries.filter((c) => c.links.some((l) => noPrefetch(l.href)));

  /** Every compare Link the card (pinned) and the panel render, over every country on the map. */
  function pinnedLinks(shipped: boolean) {
    state.shipped = shipped;
    state.links = [];
    try {
      for (const c of tourMapCountries) {
        renderToStaticMarkup(<TourMapCard country={c} pinned itinerariesFrom={tourMapTotals.itinerariesFrom} onClose={() => {}} />);
        renderToStaticMarkup(<TourMapPanel country={c} itinerariesFrom={tourMapTotals.itinerariesFrom} onClose={() => {}} />);
      }
      return state.links.filter((l) => isCompare(l.href, MAP));
    } finally {
      state.shipped = false;
    }
  }

  it("one board link per country per layout, and none prefetches", () => {
    expect(withBoard.length).toBeGreaterThan(10);
    const links = pinnedLinks(false);
    expect(links.map((l) => l.href).sort()).toEqual(
      withBoard.flatMap((c) => c.links.filter((l) => noPrefetch(l.href)).map((l) => [l.href, l.href])).flat().sort()
    );
    expect(links.filter((l) => l.prefetch !== false).map((l) => l.href)).toEqual([]);
  });

  it("the shipped props fail it: as origin/main rendered them, every one prefetched", () => {
    const links = pinnedLinks(true);
    expect(links).toHaveLength(withBoard.length * 2);
    expect(links.filter((l) => l.prefetch !== false)).toHaveLength(links.length);
  });
});

describe("the home page's LIVE band: an updates entry that links into /compare does not prefetch", () => {
  // The band links the entry it leads with (lib/bandHeadline: the week's
  // headliner, else the newest), on every desktop home visit. Today's entry is
  // not a compare link; these are, and any of them could have led the band.
  const log = updates as Update[];
  const compareEntries = log.filter((u) => noPrefetch(u.href));
  const HOME = PAGES.find((p) => p.path === "/")!;

  /** Render with `entry` alone in the log, so the band leads with it, then put the log back. */
  async function withBand<T>(entry: Update, run: () => T | Promise<T>): Promise<T> {
    const real = [...log];
    log.splice(0, log.length, entry);
    try {
      return await run();
    } finally {
      log.splice(0, log.length, ...real);
    }
  }
  const bandLinks = (entry: Update, shipped: boolean) =>
    withBand(entry, () => {
      state.shipped = shipped;
      state.links = [];
      try {
        renderToStaticMarkup(<LiveBand />);
        return state.links.filter((l) => l.href === entry.href);
      } finally {
        state.shipped = false;
      }
    });

  it("the log has such entries", () => {
    expect(compareEntries.map((u) => u.href)).toEqual(
      expect.arrayContaining(["/compare/burna-boy-vs-wizkid", "/compare/in", "/compare/in/poland"])
    );
  });

  it.each(compareEntries.map((u) => [`${u.date} ${u.href}`, u] as const))("band leads with %s", async (_, entry) => {
    const links = await bandLinks(entry, false);
    expect(links).toHaveLength(1);
    expect(links[0].prefetch).toBe(false);
    // And the whole home page with that band: no compare link on it prefetches.
    const page = await withBand(entry, () => linksOf(HOME));
    expect(page.some((l) => l.href === entry.href)).toBe(true);
    expect(page.filter((l) => isCompare(l.href, "/") && l.prefetch !== false).map((l) => l.href)).toEqual([]);
  });

  it("the shipped props fail it: the band's link prefetched", async () => {
    for (const entry of compareEntries) {
      const links = await bandLinks(entry, true);
      expect(links.map((l) => l.prefetch), entry.href).toEqual([undefined]);
    }
  });
});

// ── 3. What one visit to /compare costs ─────────────────────────────────────
describe("one visit to /compare: 21 /compare requests before, the page alone now", () => {
  it("before, every compare link on the page could prefetch; now none can", async () => {
    const before = (await linksOf(COMPARE, true)).filter((l) => isCompare(l.href, "/compare") && l.prefetch !== false);
    const after = (await linksOf(COMPARE)).filter((l) => isCompare(l.href, "/compare") && l.prefetch !== false);
    // Next prefetches each distinct URL once, as its link enters the viewport
    // (or is hovered or touched). Live, the links in view on arrival were 20
    // of these, plus the page: 21. The rest wait for a scroll.
    const distinct = new Set(before.map((l) => new URL(l.href, ORIGIN + "/compare").href.replace(/#.*$/, "")));
    expect(distinct.size).toBeGreaterThanOrEqual(20);
    // Now: no prefetch at all, so a visit is one /compare request, the page,
    // and a click is one more, the page it opens.
    expect(after).toEqual([]);
  });
});

// ── 4. The source ───────────────────────────────────────────────────────────
const ROOT = join(__dirname, "..");
const APP = join(ROOT, "app");
const WRAPPER = join(APP, "components", "SiteLink.tsx");

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : /\.tsx?$/.test(name) && !name.endsWith(".d.ts") ? [p] : [];
  });
}

const parse = (file: string, src: string) =>
  ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);

function visit(node: ts.Node, fn: (n: ts.Node) => void) {
  fn(node);
  node.forEachChild((c) => visit(c, fn));
}

/** next/link, by any path it can be loaded from. */
const NEXT_LINK = /^next\/(link|dist\/client\/(app-dir\/)?link)(\.js)?$/;

/** Every place a source file loads next/link at run time: `import`, `export …
 *  from`, `import x = require()`, `import()` and `require()`. A type-only
 *  import loads nothing, so it is not one. */
function nextLinkLoads(sf: ts.SourceFile): ts.Node[] {
  const out: ts.Node[] = [];
  visit(sf, (n) => {
    let spec: ts.Node | undefined;
    if (ts.isImportDeclaration(n) && !n.importClause?.isTypeOnly) spec = n.moduleSpecifier;
    else if (ts.isExportDeclaration(n) && !n.isTypeOnly) spec = n.moduleSpecifier;
    else if (ts.isImportEqualsDeclaration(n) && !n.isTypeOnly && ts.isExternalModuleReference(n.moduleReference)) spec = n.moduleReference.expression;
    else if (ts.isCallExpression(n) && (n.expression.kind === ts.SyntaxKind.ImportKeyword || (ts.isIdentifier(n.expression) && n.expression.text === "require")))
      spec = n.arguments[0];
    if (spec && ts.isStringLiteralLike(spec) && NEXT_LINK.test(spec.text)) out.push(n);
  });
  return out;
}

type Problem = string;

/**
 * The scan, over one file's source.
 *
 *  L. No module but SiteLink loads next/link. A Link's href can come from
 *     anywhere: a literal, a prop, a search hit, a data list several modules
 *     away (the tour map's country boards reach its card through tourMapData
 *     and certCountry's countryBoardLinks; the home band's entry through
 *     bandHeadline and the updates log). No reading of the source can follow
 *     every one of those, so the rule is not "a Link whose href looks like
 *     /compare needs prefetch={false}" but "every Link is SiteLink", which
 *     reads the href itself when it renders. SiteLink passes every other
 *     link through untouched (section 1), so this costs nothing elsewhere.
 *  P. A router.prefetch() of anything but a plain non-compare path.
 *
 * eslint.config.mjs holds rule L too (no-restricted-imports), for the editor.
 */
function scan(file: string, src: string): Problem[] {
  if (file === WRAPPER) return [];
  const sf = parse(file, src);
  const where = (n: ts.Node) => `${relative(ROOT, file)}:${sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1}`;
  const out: Problem[] = nextLinkLoads(sf).map((n) => `L ${where(n)} loads next/link; import Link from components/SiteLink`);
  visit(sf, (n) => {
    if (
      ts.isCallExpression(n) &&
      ts.isPropertyAccessExpression(n.expression) &&
      n.expression.name.text === "prefetch" &&
      !(n.arguments[0] && ts.isStringLiteral(n.arguments[0]) && !n.arguments[0].text.startsWith("/compare"))
    )
      out.push(`P ${where(n)} ${n.getText(sf)}`);
  });
  return out;
}

const FILES = walk(APP);
const SOURCE = new Map(FILES.map((f) => [f, readFileSync(f, "utf8")]));

describe("the source: every Link in app/ is SiteLink, and no router.prefetch reaches /compare", () => {
  it("the rules refuse the lines the site shipped", () => {
    const L = (file: string, line: number) => new RegExp(`^L ${file.replace(/[[\]./]/g, "\\$&")}:${line} `);
    // app/components/TourMapCard.tsx and TourMapPanel.tsx: a pinned country's
    // board link, /compare/in/<country>, from data two modules away. The
    // first commit's scan (an href that names compare, or a next/link file
    // importing a module that holds a /compare literal) passed both.
    const card = `"use client";

import Link from "next/link";
import type { Ref } from "react";
import type { TourMapCountry } from "../lib/tourMapData";`;
    expect(scan(join(APP, "components/TourMapCard.tsx"), card)).toEqual([expect.stringMatching(L("app/components/TourMapCard.tsx", 3))]);
    // app/components/LiveBand.tsx: <Link href={fact.href}>, the band's updates entry.
    const band = `import Link from "next/link";
import styles from "./liveBand.module.css";
import { bandFact } from "../lib/bandHeadline";`;
    expect(scan(join(APP, "components/LiveBand.tsx"), band)).toEqual([expect.stringMatching(L("app/components/LiveBand.tsx", 1))]);
    // app/compare/page.tsx, as origin/main shipped it.
    const comparePage = `import type { Metadata } from "next";
import Link from "next/link";`;
    expect(scan(join(APP, "compare/page.tsx"), comparePage)).toEqual([expect.stringMatching(L("app/compare/page.tsx", 2))]);
    // The other ways to load it.
    for (const src of [
      `const Link = dynamic(() => import("next/link"));`,
      `const Link = require("next/link").default;`,
      `export { default } from "next/link";`,
      `import Link from "next/dist/client/app-dir/link";`,
      `import Link = require("next/link");`,
    ])
      expect(scan(join(APP, "components/X.tsx"), src), src).toHaveLength(1);
    // A prefetch call: none ever shipped, so these are the docs' own shapes.
    expect(scan(join(APP, "components/X.tsx"), `const go = () => router.prefetch("/compare/in");`)).toHaveLength(1);
    expect(scan(join(APP, "components/X.tsx"), `const go = (h: string) => router.prefetch(h);`)).toHaveLength(1);
    // And the fix passes: the same lines through SiteLink; a type-only import
    // loads nothing; a plain path may still be prefetched.
    expect(scan(join(APP, "components/TourMapCard.tsx"), card.replace(`"next/link"`, `"./SiteLink"`))).toEqual([]);
    expect(scan(join(APP, "components/LiveBand.tsx"), band.replace(`"next/link"`, `"./SiteLink"`))).toEqual([]);
    expect(scan(join(APP, "compare/page.tsx"), comparePage.replace(`"next/link"`, `"../components/SiteLink"`))).toEqual([]);
    expect(scan(join(APP, "components/X.tsx"), `import type { LinkProps } from "next/link";`)).toEqual([]);
    expect(scan(join(APP, "components/X.tsx"), `const go = () => router.prefetch("/music");`)).toEqual([]);
  });

  it("the matcher sees SiteLink's own import, so it reads the shape the files really use", () => {
    expect(nextLinkLoads(parse(WRAPPER, SOURCE.get(WRAPPER)!))).toHaveLength(1);
  });

  it("app/ passes: SiteLink is the only module that loads next/link", () => {
    expect(FILES.flatMap((f) => scan(f, SOURCE.get(f)!))).toEqual([]);
    expect(FILES.filter((f) => nextLinkLoads(parse(f, SOURCE.get(f)!)).length).map((f) => relative(ROOT, f))).toEqual([
      "app/components/SiteLink.tsx",
    ]);
  });

  it("the files that render Links import them from SiteLink, the tour map's card and panel and the home band among them", () => {
    const users = FILES.filter((f) => /^import Link from "(\.\.?\/)+(components\/)?SiteLink";$/m.test(SOURCE.get(f)!)).map((f) => relative(ROOT, f));
    for (const f of ["app/components/TourMapCard.tsx", "app/components/TourMapPanel.tsx", "app/components/LiveBand.tsx", "app/compare/page.tsx", "app/page.tsx"])
      expect(users, f).toContain(f);
  });
});
