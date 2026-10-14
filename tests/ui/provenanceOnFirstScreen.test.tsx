import { renderToStaticMarkup } from "react-dom/server";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
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
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Home from "../../app/page";
import ToursPage from "../../app/records/tours/page";
import FestivalsPage from "../../app/records/tours/festivals/page";
import TourMapPage from "../../app/records/tours/map/page";
import RevenuePage from "../../app/records/tours/revenue/page";
import RevenueCountriesPage from "../../app/records/tours/revenue/countries/page";
import AboutPage from "../../app/about/page";
import FaqPage from "../../app/faq/page";
import CertificationsPage from "../../app/certifications/page";
import ArtistPage from "../../app/afrobeats/[artist]/page";
import AfricasBiggestPage from "../../app/records/africas-biggest/page";
import ByTheNumbersPage from "../../app/records/by-the-numbers/page";
import ChartsPage from "../../app/records/charts/page";
import { statBoxes } from "../../app/data/africasBiggest";
import { stats } from "../../app/data/byTheNumbers";
import { BURNA_LAST_CHART_SWEEP } from "../../app/data/charts";
import { DATE_LABELS } from "../../app/lib/provenance";

/**
 * Job 1's route guard (design review 8 Oct 2026, J1-18; the response's
 * `provenanceOnFirstScreen`): every Job 1 route renders the provenance
 * component where Job 1 put it, on each layout, from data.
 *
 * - P1 routes (the phone home and the desktop home, the five tours-family
 *   heroes, /about, /faq): exactly one P1, before the first <h2> of that
 *   layout's tree, so it is on the first screen.
 * - P2 routes: the phone /certifications and board-artist end blocks, one
 *   each; Africa's Biggest, one per board on both layouts.
 * - /records/by-the-numbers: one date line per figure on both layouts.
 * - /records/charts on the phone: its P3 is dated.
 *
 * Plus the static scan: no app file types a date into a ProvDate.
 */

type Layout = "desktop" | "phone";
type Render = () => ReactElement | Promise<ReactElement>;
const withArtist = (C: unknown, artist: string): Render => () =>
  (C as (p: { params: Promise<{ artist: string }> }) => Promise<ReactElement>)({ params: Promise.resolve({ artist }) });
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const layoutOf = (el: Element): Layout =>
  el.closest('[class*="desktopOnly"], [class*="desktopBody"], [data-build="desktop"]') ? "desktop" : "phone";
const inLayout = (doc: Document, sel: string, layout: Layout) => [...doc.querySelectorAll(sel)].filter((n) => layoutOf(n) === layout);
const before = (a: Element, b: Element) => !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);

/** Why a layout's first screen lacks its P1: [] when it has exactly one, ahead of the first h2. */
function p1Problems(doc: Document, layout: Layout): string[] {
  const p1s = inLayout(doc, '[data-provenance="p1"]', layout);
  if (p1s.length !== 1) return [`${p1s.length} P1s`];
  const h2 = inLayout(doc, "h2", layout)[0];
  return h2 && !before(p1s[0], h2) ? ["the P1 comes after the first h2"] : [];
}
const count = (doc: Document, layout: Layout, size: string) => inLayout(doc, `[data-provenance="${size}"]`, layout).length;
/** A by-the-numbers figure's date line: the component's date grammar inside the figure's own link. */
const figureDates = (doc: Document, layout: Layout) => inLayout(doc, "a [data-provenance-date]", layout);

const P1_ROUTES: [string, Render][] = [
  ["/", Home],
  ["/records/tours", ToursPage],
  ["/records/tours/festivals", FestivalsPage],
  ["/records/tours/map", TourMapPage],
  ["/records/tours/revenue", RevenuePage],
  ["/records/tours/revenue/countries", RevenueCountriesPage],
  ["/about", AboutPage],
  ["/faq", FaqPage],
];
const DOCS = new Map<string, Document>();
for (const [route, render] of [
  ...P1_ROUTES,
  ["/certifications", CertificationsPage],
  ["/afrobeats/tyla", withArtist(ArtistPage, "tyla")],
  ["/records/africas-biggest", AfricasBiggestPage],
  ["/records/by-the-numbers", ByTheNumbersPage],
  ["/records/charts", ChartsPage],
] as [string, Render][]) {
  DOCS.set(route, parse(renderToStaticMarkup(await render())));
}

describe("a P1 on the first screen", () => {
  it.each(P1_ROUTES.flatMap(([route]) => (["desktop", "phone"] as const).map((l) => [route, l] as const)))("%s (%s)", (route, layout) => {
    expect(p1Problems(DOCS.get(route)!, layout)).toEqual([]);
  });
});

describe("P2 where the data ends", () => {
  it("the phone /certifications and /afrobeats/tyla end blocks: one P2 each, then the P3", () => {
    for (const route of ["/certifications", "/afrobeats/tyla"]) {
      const doc = DOCS.get(route)!;
      expect(count(doc, "phone", "p2"), route).toBe(1);
      const [p2] = inLayout(doc, '[data-provenance="p2"]', "phone");
      const [p3] = inLayout(doc, '[data-provenance="p3"]', "phone");
      expect(before(p2, p3), route).toBe(true);
    }
  });

  it("Africa's Biggest: one P2 per board, on both layouts", () => {
    const doc = DOCS.get("/records/africas-biggest")!;
    expect(count(doc, "desktop", "p2")).toBe(statBoxes.length);
    expect(count(doc, "phone", "p2")).toBe(statBoxes.length);
  });
});

describe("By the numbers dates every figure", () => {
  it.each(["desktop", "phone"] as const)("%s", (layout) => {
    const dates = figureDates(DOCS.get("/records/by-the-numbers")!, layout);
    expect(dates.length).toBe(stats.length);
    for (const d of dates) expect(d.querySelector("time")?.getAttribute("datetime")).toMatch(/^\d{4}-\d{2}(-\d{2})?$/);
  });
});

describe("the phone /records/charts P3 is dated", () => {
  it("Checked {BURNA_LAST_CHART_SWEEP}", () => {
    const [p3] = inLayout(DOCS.get("/records/charts")!, '[data-provenance="p3"]', "phone");
    expect(p3.querySelector("time")?.getAttribute("datetime")).toBe(BURNA_LAST_CHART_SWEEP);
  });
});

// ── Every date is derived ────────────────────────────────────────────────────
const ROOT = join(__dirname, "..", "..");
const appFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? appFiles(p) : /\.(ts|tsx)$/.test(f) ? [p] : [];
  });
const LABEL = DATE_LABELS.map((l) => l.replace(/ /g, "\\s")).join("|");
/** A ProvDate object literal with a typed date: `{ label: "Read", day: "2026-…" }`, either order. */
const TYPED_PROV_DATE = new RegExp(
  `label\\s*:\\s*["'\`](?:${LABEL})["'\`]\\s*,\\s*(?:day|month)\\s*:\\s*["'\`]\\d|(?:day|month)\\s*:\\s*["'\`]\\d[^,}]*,\\s*label\\s*:\\s*["'\`](?:${LABEL})["'\`]`,
);

describe("no ProvDate holds a typed date", () => {
  it("every app file", () => {
    const typed = appFiles(join(ROOT, "app"))
      .filter((f) => TYPED_PROV_DATE.test(readFileSync(f, "utf8")))
      .map((f) => relative(ROOT, f));
    expect(typed).toEqual([]);
  });

  it("negative controls: the shapes a typed date takes", () => {
    expect(`date: { label: "Verified", day: "2026-10-07" }`).toMatch(TYPED_PROV_DATE);
    expect(`{ label: "As of", month: "2026-08" }`).toMatch(TYPED_PROV_DATE);
    expect(`{ day: "2026-10-03", label: "Read" }`).toMatch(TYPED_PROV_DATE);
    // A constant is not a typed date, and neither is an Intl option.
    expect(`{ label: "Verified", day: CERTS_VERIFIED_ON }`).not.toMatch(TYPED_PROV_DATE);
    expect(`{ month: "2-digit", day: "2-digit" }`).not.toMatch(TYPED_PROV_DATE);
  });
});

// ── The guard sees what Job 1 replaced ───────────────────────────────────────
describe("negative controls: the notes Job 0 held for Job 1, as served on 8 Oct 2026", () => {
  it("the phone Africa's Biggest footnote, with no board's P2, fails", () => {
    const doc = parse(
      `<div class="mobileAfricasBiggest-module__MpN2xW__screen"><p class="mobileAfricasBiggest-module__MpN2xW__footNote">Each board cites its own source and date on the desktop page.</p></div>`,
    );
    expect(count(doc, "phone", "p2")).not.toBe(statBoxes.length);
  });

  it("the /faq foot note, with no P1, fails on both layouts", () => {
    const doc = parse(
      `<div class="mobileFaq-module__4NV0La__screen"><h1>Burna Boy FAQ</h1><h2>Who is Burna Boy?</h2><p class="mobileFaq-module__4NV0La__source">Figures stay in sync with the site&#x27;s certifications, charts, awards and tours data, verified against official sources as of October 2026.</p></div><div class="faq-module__VSI0LW__desktopOnly"><h1>Burna Boy FAQ</h1><h2>The artist</h2><p class="faq-module__VSI0LW__source">Figures stay in sync with the site&#x27;s certifications, charts, awards and tours data, verified against official sources as of October 2026.</p></div>`,
    );
    expect(p1Problems(doc, "desktop")).toEqual(["0 P1s"]);
    expect(p1Problems(doc, "phone")).toEqual(["0 P1s"]);
  });

  it("By the numbers' 'Updated October 2026', with no figure dated, fails", () => {
    const doc = parse(
      `<div class="byTheNumbers-module__n-nFea__desktopOnly"><span class="byTheNumbers-module__n-nFea__freshness"><span class="byTheNumbers-module__n-nFea__freshDot" aria-hidden="true"></span>Updated <!-- -->October 2026</span><a href="/certifications"><span>251</span><span>Certifications</span></a></div>`,
    );
    expect(figureDates(doc, "desktop").length).not.toBe(stats.length);
  });

  it("a P1 placed after the first h2 fails", () => {
    const doc = parse(`<div class="x__desktopOnly"><h1>T</h1><h2>First section</h2><p data-provenance="p1">Sources</p></div>`);
    expect(p1Problems(doc, "desktop")).toEqual(["the P1 comes after the first h2"]);
  });
});
