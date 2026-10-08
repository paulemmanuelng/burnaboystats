import { renderToStaticMarkup } from "react-dom/server";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
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
import CertificationsPage from "../../app/certifications/page";
import ChartsPage from "../../app/records/charts/page";
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import ToursPage from "../../app/records/tours/page";
import RevenuePage from "../../app/records/tours/revenue/page";
import RevenueCountriesPage from "../../app/records/tours/revenue/countries/page";
import FestivalsPage from "../../app/records/tours/festivals/page";
import FirstsPage from "../../app/records/firsts/page";
import AwardsPage from "../../app/records/awards/page";
import ByTheNumbersPage from "../../app/records/by-the-numbers/page";
import VisualizedPage from "../../app/records/visualized/page";
import ListenersPage from "../../app/music/listeners/page";
import LiveChartsPage from "../../app/live-charts/page";
import ArtistLivePage from "../../app/afrobeats/[artist]/live/page";
import AfrobeatsPage from "../../app/afrobeats/page";
import UpdatesPage from "../../app/updates/page";
import MethodologyPage from "../../app/methodology/page";
import AnalysisPage from "../../app/analysis/page";
import PressPage from "../../app/press/page";
import CuratorPage from "../../app/curator/page";
import ApiPage from "../../app/api/page";
import PrimitivesPage from "../../app/primitives/page";
import Provenance from "../../app/components/Provenance";
import MobileProvenance from "../../app/components/MobileProvenance";
import {
  DATE_LABELS,
  METHODOLOGY_ANCHORS,
  METHOD_LABEL,
  MORE_HREF,
  methodLeaves,
  methodParts,
  p1Shown,
  type MethodHref,
  type P2Spec,
  type ProvDate,
} from "../../app/lib/provenance";
import { dataLineFor, homeP1, offRegister, registerBodies } from "../../app/lib/provenanceSpecs";
import { allItems, CERTS_VERIFIED_ON } from "../../app/data/certifications";
import { issuerOf } from "../../app/lib/certs";
import { statBoxes } from "../../app/data/africasBiggest";
import { downloadBySlug, downloadFilename } from "../../app/lib/dataDownloads";
import { lastUpdated, LICENSE } from "../../app/lib/api";
import { CREDIT_LINE } from "../../app/lib/credit";
import { afterHitBox, decl, read, rules, winning } from "../fixtures/cssRules";

/**
 * The provenance component (design review 8 Oct 2026, J0-9, with fixes 9–13
 * and J0-13): one desktop build (Provenance) and one phone build
 * (MobileProvenance), four sizes — P1 the hero line, P2 a board's footer, P3
 * the page foot, Reviewed — and every existing source note rendered through
 * it, at the same place and in the same words.
 *
 * Job 0 converts the notes that exist and adds no new placement. The notes a
 * Job 1 item moves or needs new data for are on PENDING_JOB_1, which Job 1
 * empties; the ones that stay as built are on EXEMPT, each with its reason.
 * Both lists are checked against the code, so a stale row fails.
 */

const ROOT = join(__dirname, "..", "..");
const DESK_CSS = read(join(ROOT, "app/components/provenance.module.css"));
const PHONE_CSS = read(join(ROOT, "app/components/mobileProvenance.module.css"));
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
/** Text as a reader meets it: no-break spaces as spaces, runs collapsed. */
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
/** A link's name: its words without the aria-hidden glyph. */
const named = (a: Element) => {
  const c = a.cloneNode(true) as Element;
  c.querySelectorAll('[aria-hidden="true"]').forEach((g) => g.remove());
  return words(c);
};
const any = () => true;
const px = (v: string | undefined) => (v === undefined ? NaN : parseFloat(v));

/** The component's date and nothing else (J0-13). */
const COMPONENT_DATE =
  /^(\d{1,2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}|(as of )?(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4})$/;

// ── Every route that carries a note, rendered once ──────────────────────────
type Layout = "desktop" | "phone";
type Size = "p1" | "p2" | "p3" | "reviewed";
type Render = () => ReactElement | Promise<ReactElement>;
const withArtist = (C: unknown, artist: string): Render => () =>
  (C as (p: { params: Promise<{ artist: string }> }) => Promise<ReactElement>)({ params: Promise.resolve({ artist }) });

const ROUTES: [string, Render][] = [
  ["/", Home],
  ["/certifications", CertificationsPage],
  ["/records/charts", ChartsPage],
  ["/afrobeats/tyla/charts", withArtist(ArtistChartsPage, "tyla")],
  ["/records/tours", ToursPage],
  ["/records/tours/revenue", RevenuePage],
  ["/records/tours/revenue/countries", RevenueCountriesPage],
  ["/records/tours/festivals", FestivalsPage],
  ["/records/firsts", FirstsPage],
  ["/records/awards", AwardsPage],
  ["/records/by-the-numbers", ByTheNumbersPage],
  ["/records/visualized", VisualizedPage],
  ["/music/listeners", ListenersPage],
  ["/live-charts", LiveChartsPage],
  ["/afrobeats/tyla/live", withArtist(ArtistLivePage, "tyla")],
  ["/afrobeats", AfrobeatsPage],
  ["/updates", UpdatesPage],
  ["/methodology", MethodologyPage],
  ["/analysis", AnalysisPage],
  ["/press", PressPage],
  ["/curator", CuratorPage],
  ["/api", ApiPage],
];
// Rendered at collection: two dozen full pages is more work than one test's 5 s.
const DOCS = new Map<string, Document>();
for (const [route, render] of ROUTES) DOCS.set(route, parse(renderToStaticMarkup(await render())));
const PRIMITIVES = parse(renderToStaticMarkup(<PrimitivesPage />));

/** Which layout an element is in: the desktop column, or the phone screen. */
const layoutOf = (el: Element): Layout =>
  el.closest('[class*="desktopOnly"], [class*="desktopBody"], [data-build="desktop"]') ? "desktop" : "phone";
const nodes = (doc: Document, layout: Layout, size?: Size) =>
  [...doc.querySelectorAll(size ? `[data-provenance="${size}"]` : "[data-provenance]")].filter((n) => layoutOf(n) === layout);

/** Every converted site (§4.1 of the provenance plan): route → size → count, per layout. */
const SITES: Record<string, Partial<Record<Layout, Partial<Record<Size, number>>>>> = {
  "/": { desktop: { p1: 1 } },
  "/certifications": { desktop: { p3: 1 } },
  "/records/charts": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/afrobeats/tyla/charts": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/tours": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/tours/revenue": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/tours/revenue/countries": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/tours/festivals": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/firsts": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/awards": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/by-the-numbers": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/records/visualized": { phone: { p3: 1 } },
  "/music/listeners": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/live-charts": { desktop: { p3: 1 } },
  "/afrobeats/tyla/live": { desktop: { p3: 1 } },
  "/afrobeats": { desktop: { p3: 1 }, phone: { p3: 1 } },
  "/updates": { desktop: { p3: 1 } },
  "/methodology": { desktop: { reviewed: 1 }, phone: { reviewed: 1 } },
  "/analysis": { desktop: { reviewed: 1 }, phone: { reviewed: 1 } },
  "/press": { desktop: { reviewed: 1 }, phone: { reviewed: 1 } },
  "/curator": { desktop: { reviewed: 1 }, phone: { reviewed: 1 } },
  "/api": { desktop: { reviewed: 1 } },
};

/** Each converted note's opening words, as the page prints them. A reworded
 *  note fails here and is updated here, so the check never goes vacuous. */
const OPENINGS: [string, Layout, string | RegExp][] = [
  ["/certifications", "desktop", "Sources: "],
  ["/records/charts", "desktop", "Peak positions on each country's principal national chart."],
  ["/records/charts", "phone", "Peaks on each country's principal national chart —"],
  ["/afrobeats/tyla/charts", "desktop", "Peak positions on each country's principal national chart —"],
  ["/afrobeats/tyla/charts", "phone", "Peaks on each country's principal national chart"],
  ["/records/tours", "desktop", "Box-office figures are reported by Billboard Boxscore"],
  ["/records/tours", "phone", "Tour grosses come from "],
  ["/records/tours/revenue", "desktop", /^Source ?Box-office reports as published by /],
  ["/records/tours/revenue", "phone", /^Source ?Box-office reports as published by /],
  ["/records/tours/revenue/countries", "desktop", /^Source ?Box-office reports as published by /],
  ["/records/tours/revenue/countries", "phone", /^Source ?Box-office reports as published by /],
  ["/records/tours/festivals", "desktop", "Festival headline sets and other major festival"],
  ["/records/tours/festivals", "phone", "Verified against press and festival line-ups."],
  ["/records/firsts", "desktop", "Every milestone here was cross-checked against multiple sources"],
  ["/records/firsts", "phone", "Every milestone was cross-checked against multiple sources"],
  ["/records/awards", "desktop", "Includes a 2021 Grammy win"],
  ["/records/awards", "phone", "Wins and nominations come from each body's own winners list."],
  ["/records/by-the-numbers", "desktop", "Every figure links to the page that documents it"],
  ["/records/by-the-numbers", "phone", "Every figure is fact-checked against"],
  ["/records/visualized", "phone", "Every figure is computed from the same datasets"],
  ["/music/listeners", "desktop", /^Nigeria's \w+ cities hold /],
  ["/music/listeners", "phone", /^The \d+ cities hold /],
  ["/live-charts", "desktop", "Positions come from each platform's own country charts, via kworb"],
  ["/afrobeats/tyla/live", "desktop", "Positions come from each platform's own country charts, via kworb"],
  ["/afrobeats", "desktop", "Counted under the rules on the methodology page."],
  ["/afrobeats", "phone", "Counted under the rules on the methodology page."],
  ["/updates", "desktop", "Every entry links to the page where the figure lives"],
];

/** Notes a Job 1 item moves or needs new data for: kept as they are in Job 0. */
const PENDING_JOB_1: [string, string, string][] = [
  ["app/components/StatBox.tsx", "<details className={styles.sourceWrap}>", "J1-9 / fix 22: Africa's Biggest P2 needs each board's scope and sources"],
  ["app/components/MobileAfricasBiggest.tsx", "Each board cites its own source and date on the desktop page.", "J1-10 / J1-9: the per-board phone P2"],
  ["app/faq/page.tsx", "const SOURCE_NOTE", "J1-16: moves to a day-precise hero P1 (fix 24)"],
  ["app/components/MobileFaq.tsx", "{source}", "J1-16"],
  ["app/components/TourMapDesktop.tsx", "Compiled from his tours, festivals and one-off shows", "J1-11: P3 under the map is measured against the foot at y 905"],
  ["app/records/by-the-numbers/page.tsx", "styles.freshness", "J1-13 / fix 31: the hero stamp becomes 'Updated {lastUpdated}'"],
  ["app/records/by-the-numbers/page.tsx", "listMeta={`verified ${asOf}`}", "J1-13 / fix 31"],
];

/** Notes that stay as built, each with its reason. */
const EXEMPT: [string, string, string][] = [
  ["app/page.tsx", "Source: {REVENUE_BODY} ({REVENUE_REPORTS})", "a home records-module claim caption; fix 105 keeps the home modules"],
  ["app/records/page.tsx", "{REVENUE_SOURCE}, as of {REVENUE_AS_OF}", "an in-module caption; as a P2 it would add a fold (fix 80, dense screens)"],
  ["app/records/tours/page.tsx", "className={styles.sourceNote}", "the top-shows caption, as above (toursMeasure pins it)"],
  ["app/music/[song]/page.tsx", "Official certifications", "a section caption with no read date; the song template is Job 4's"],
  ["app/music/albums/[album]/page.tsx", "Official certifications", "as the song page"],
  ["app/afrobeats/[artist]/page.tsx", "className={styles.provenance}", "a provenance sentence is copy (response §9)"],
  ["app/components/MobileCerts.tsx", "<p className={styles.provenance}>{caption}</p>", "fix 28 keeps the tier caption"],
  ["app/compare/page.tsx", 'href="/methodology#certified-units"', "Job 2 owns the compare method links; they already name a section"],
  ["app/compare/CountryBoardView.tsx", "How this is counted", "Job 2"],
  ["app/records/cars/page.tsx", 'id="note"', "an approved bespoke design (cars handoff §5.3)"],
  ["app/records/cars/[car]/page.tsx", "styles.provKicker", "an approved bespoke design (cars handoff §8)"],
  ["app/components/StatCardMaker.tsx", "Site updated", "fix 132 keeps /share's rows"],
  ["app/components/MobileStatCards.tsx", "Site updated", "fix 132"],
  ["app/live-charts/page.tsx", "Snapshot taken", "a live stamp with a time of day the component's date cannot carry"],
  ["app/afrobeats/[artist]/live/page.tsx", "Snapshot taken", "as above"],
  ["app/components/MobileLiveCharts.tsx", "Snapshot", "as above"],
  ["app/components/TodaysNumber.tsx", "Updated", "live (#238; fix 18 keeps the day–month form)"],
  ["app/components/MobileNavSheet.tsx", "Updated", "chrome (fix 78 keeps the foot)"],
  ["app/lib/links.ts", "Certification data is read from each issuing body.", "footer chrome, rewritten in Job 0's last commit"],
  ["app/components/DaiDaiReplay.tsx", "styles.foot", "an approved story module with EN and ES strings"],
  ["app/analysis/page.tsx", "How to check this", "a headed content section, not a note"],
  ["app/analysis/spotify-unmerge/page.tsx", "TODAY_NOTE", "article content"],
  ["app/curator/page.tsx", "How I work", "content: the method pages themselves"],
  ["app/methodology/page.tsx", "Where the numbers come from", "content: the method pages themselves"],
  ["app/afrobeats/page.tsx", "Provenance", "an approved hub card linking /methodology#sources; the rails keep gold and green"],
  ["app/page.tsx", "Every number here comes with a source and a date.", "a promo section"],
  ["app/components/MobileTourMap.tsx", "are shown as dots", "a map legend"],
  ["app/page.tsx", "styles.scoreSource", "figure meta under each number (J0-8)"],
  ["app/components/MobileHome.tsx", "styles.statSource", "figure meta (J0-8)"],
  ["app/records/tours/page.tsx", "styles.upcomingSource", "a per-row attribution (Job 3, fix 66)"],
  ["app/components/MobileTours.tsx", "styles.upcomingSource", "as above"],
  ["app/live-charts/page.tsx", "styles.platformCardCadence", "a two-word label"],
  ["app/components/MobileLiveCharts.tsx", "styles.platformCadence", "a two-word label"],
  ["app/records/africas-biggest/page.tsx", "An all-time high set on", "a figure caption"],
];
/** The one EXEMPT row a rendered converted route prints with a "Source…" opening. */
const EXEMPT_RENDERED: [string, RegExp][] = [["/", /^Source: TouringData /]];

// ── 1. Sizes ─────────────────────────────────────────────────────────────────
describe("sizes: panel 9's contract", () => {
  const d = (sel: string, prop: string) => winning(DESK_CSS, sel, prop, (m) => m === null);
  const p = (sel: string, prop: string) => winning(PHONE_CSS, sel, prop, (m) => m === null);

  it("P1: a 44px row of mono 700 labels at the label step, 0.1em, upper case, muted", () => {
    expect(d(".p1", "min-height")).toBe("44px");
    expect(d(".p1", "font-family")).toMatch(/var\(--font-mono\)/);
    expect(d(".p1", "font-weight")).toBe("700");
    expect(d(".p1", "font-size")).toBe("var(--type-label)");
    expect(d(".p1", "letter-spacing")).toBe("0.1em");
    expect(d(".p1", "text-transform")).toBe("uppercase");
    expect(d(".p1", "color")).toBe("var(--text-muted)");
    expect(d(".value", "color")).toBe("var(--text)");
    // Items split by 1 × 12 --rule hairlines.
    expect([d(".sep", "width"), d(".sep", "height"), d(".sep", "background")]).toEqual(["1px", "12px", "var(--rule)"]);
    // Phone: the sources in Geist at the caption step, then a 44px mono row.
    expect(p(".p1Sources", "font-family")).toMatch(/--font-geist-sans/);
    expect(p(".p1Sources", "font-size")).toBe("var(--type-caption)");
    expect(p(".p1Sources", "color")).toBe("var(--text-body)");
    expect(p(".p1Row", "min-height")).toBe("44px");
  });

  it("links are gold, with a 24px box on desktop and a 44 × 44 hit area on the phone", () => {
    for (const sel of [".link", ".more", ".dataLink"]) {
      expect(d(sel, "color"), sel).toBe("var(--gold)");
      expect(px(d(sel, "min-height")), sel).toBeGreaterThanOrEqual(24);
      expect(p(sel, "color"), sel).toBe("var(--gold)");
      const after = rules(PHONE_CSS).find((r) => r.selector.split(",").map((s) => s.trim()).includes(`${sel}::after`));
      expect(after, `${sel}::after`).toBeDefined();
      const [w, h] = afterHitBox(after!.body, [8, 14]);
      expect(w, sel).toBeGreaterThanOrEqual(44);
      expect(h, sel).toBeGreaterThanOrEqual(44);
    }
  });

  it("P2: a 44px row on a --rule-soft rule (48px on the phone); 'Method ▾' 24px on desktop, 44 × 72 on the phone", () => {
    expect(d(".p2", "min-height")).toBe("44px");
    expect(d(".p2", "border-top")).toMatch(/var\(--rule-soft\)/);
    expect(p(".p2", "min-height")).toBe("48px");
    expect(p(".p2", "border-top")).toMatch(/var\(--rule-soft\)/);
    expect(px(d(".p2Summary", "height"))).toBeGreaterThanOrEqual(24);
    expect(px(d(".p2Summary", "min-width"))).toBeGreaterThanOrEqual(24);
    expect(px(p(".p2Summary", "min-height"))).toBeGreaterThanOrEqual(44);
    expect(px(p(".p2Summary", "min-width"))).toBeGreaterThanOrEqual(72);
    for (const css of [DESK_CSS, PHONE_CSS]) {
      expect(winning(css, ".p2Line", "font-size", any)).toBe("var(--type-caption)");
      expect(winning(css, ".p2Line", "color", any)).toBe("var(--text-body)");
      // ▾ reads ▴ when the method is open.
      expect(winning(css, ".p2Method[open] .chev", "transform", any)).toBe("rotate(180deg)");
    }
  });

  it("P3: a --rule-soft rule, the note in Geist 13.5 / 1.5 at the measure, the data tokens 44px on the phone", () => {
    for (const css of [DESK_CSS, PHONE_CSS]) {
      expect(winning(css, ".p3", "border-top", any)).toMatch(/var\(--rule-soft\)/);
      expect(winning(css, ".p3Note", "font-family", any)).toMatch(/--font-geist-sans/);
      expect(winning(css, ".p3Note", "font-size", any)).toBe("var(--type-small)");
      expect(winning(css, ".p3Note", "line-height", any)).toBe("var(--type-small-lh)");
      expect(winning(css, ".p3Note", "max-width", any)).toBe("var(--measure)");
      expect(winning(css, ".p3Note", "color", any)).toBe("var(--text-body)");
      expect(winning(css, ".cite", "color", any)).toBe("var(--text-muted)");
      // The credit line is copied as written: its own case.
      expect(winning(css, ".cite", "text-transform", any)).toBe("none");
    }
    expect(d(".p3Data", "min-height")).toBe("44px");
    expect(p(".tok", "min-height")).toBe("44px");
  });

  it("no separator ends or opens a line: each item opens on its separator, and the row starts one separator left of the line, under a clip (review, 8 Oct 2026)", () => {
    // Desktop P1: each item opens on its hairline, 14px before its text; the
    // row starts 15px (hairline + gap) left of .p1, which clips 4px out on the
    // left (for focus rings). A flex line starts at the row's left edge, so
    // every line's first hairline is cut, whatever room the line leaves.
    expect(d(".p1Item", "column-gap")).toBe("14px");
    expect(d(".p1Row", "column-gap")).toBe("14px");
    expect(d(".p1Row", "margin-left")).toBe("-15px");
    expect(d(".p1", "clip-path")).toBe("inset(-24px -24px -24px -4px)");
    // Phone P3: each token opens on its "·", centred in a 26px box; the row
    // starts 26px left of .p3Data, which clips 4px out on the left.
    expect(p(".tokSep", "width")).toBe("26px");
    expect(p(".tokSep", "text-align")).toBe("center");
    expect(p(".p3DataRow", "margin-left")).toBe("-26px");
    expect(p(".p3Data", "clip-path")).toBe("inset(-24px -24px -24px -4px)");
    // The markup: every desktop P1 item opens on its hairline; every phone
    // token opens on its separator box, empty on the first token only.
    const p1 = nodes(DOCS.get("/")!, "desktop", "p1")[0];
    const items = [...p1.querySelectorAll('[class*="p1Item"]')];
    expect(items.length).toBeGreaterThanOrEqual(3);
    for (const it of items) expect(it.firstElementChild?.getAttribute("class"), "the item opens on its hairline").toMatch(/sep/);
    for (const route of ["/records/tours", "/records/tours/festivals"]) {
      const [p3] = nodes(DOCS.get(route)!, "phone", "p3");
      const toks = [...p3.querySelectorAll("[data-provenance-data] [class*='tok']")].filter((t) => !/tokSep/.test(t.getAttribute("class") ?? ""));
      expect(toks.length, route).toBeGreaterThanOrEqual(3);
      expect(toks.map((t) => words(t.firstElementChild)), route).toEqual(toks.map((_, i) => (i === 0 ? "" : "·")));
    }
  });

  it("negative control: the home row live on main (d3c39eda) let a hairline close a line", () => {
    // The live home row (the same markup this file's fix-9 control reads):
    // its hairlines were flex items of their own between the items, in a
    // wrapping row with no clip, so a wrap could leave one last on a line.
    const SHIPPED = `<div class="page-module__E0kJGG__provenance"><span>Sources RIAA · BPI · SNEP · IFPI</span><span class="page-module__E0kJGG__provSep" aria-hidden="true"></span><span>Verified 8 Oct 2026</span><span class="page-module__E0kJGG__provSep" aria-hidden="true"></span><a class="page-module__E0kJGG__provLink" href="/api">Open data API ↗</a></div>`;
    const row = parse(SHIPPED).querySelector("div")!;
    expect(row.querySelectorAll('[class*="p1Item"]').length).toBe(0);
    expect([...row.children].filter((c) => /provSep/.test(c.getAttribute("class") ?? "")).length).toBe(2);
    // and its stylesheet (app/page.module.css .provenance on d3c39eda,
    // verbatim): a wrapping flex row, nothing clipping it.
    const css = `.provenance {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
  min-height: 44px;
  padding: 0;
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}`;
    expect(winning(css, ".provenance", "flex-wrap", any)).toBe("wrap");
    expect(winning(css, ".provenance", "clip-path", any)).toBeUndefined();
  });

  it("Reviewed: a 44px row behind a 7px --green-dot", () => {
    for (const css of [DESK_CSS, PHONE_CSS]) {
      expect(winning(css, ".reviewed", "min-height", any)).toBe("44px");
      expect(winning(css, ".dot", "background", any)).toBe("var(--green-dot)");
      expect([winning(css, ".dot", "width", any), winning(css, ".dot", "height", any)]).toEqual(["7px", "7px"]);
    }
  });

  it("hover underlines a link and never washes it (J0-12), and every colour is a token", () => {
    for (const css of [DESK_CSS, PHONE_CSS]) {
      for (const r of rules(css)) {
        if (/:hover/.test(r.selector)) expect(decl(r.body, "background") ?? decl(r.body, "background-color"), r.selector).toBeUndefined();
        for (const prop of ["color", "background", "border-top"]) {
          const v = decl(r.body, prop);
          if (v) expect(v, `${r.selector} ${prop}`).not.toMatch(/#[0-9a-f]{3,8}\b|rgba?\(/i);
        }
      }
    }
  });

  it("negative control: the home row as shipped fails the contract", () => {
    // app/page.module.css on 8 Oct 2026, verbatim.
    const SHIPPED =
      ".provenance {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: auto;\n  min-height: 44px;\n  padding: 0;\n  font-family: var(--font-mono), monospace;\n  font-weight: 700;\n  font-size: 11px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.provSep {\n  width: 1px;\n  height: 12px;\n  background: var(--line);\n  flex: none;\n}";
    expect(winning(SHIPPED, ".provenance", "font-size", any)).not.toBe("var(--type-label)");
    expect(winning(SHIPPED, ".provSep", "background", any)).not.toBe("var(--rule)");
  });
});

// ── 2. Every source note renders through the component ──────────────────────
/** Elements outside the component whose own text opens like a source note. */
function strayNotes(doc: Document, route: string): string[] {
  const allowed = EXEMPT_RENDERED.filter(([r]) => r === route).map(([, re]) => re);
  return [...doc.querySelectorAll("p, div, span, li, dd")]
    .filter((el) => !el.closest("[data-provenance]") && !el.querySelector("[data-provenance]"))
    .filter((el) => [...el.children].every((c) => !/^(Sources?:? |Data last reviewed|Data updated)/.test(words(c))))
    .map((el) => words(el))
    .filter((t) => /^(Sources?:? |Data last reviewed|Data updated)/.test(t) && !allowed.some((re) => re.test(t)));
}
/** Why a converted note does not render through the component; [] when it does. */
function noteProblems(doc: Document, layout: Layout, opening: string | RegExp): string[] {
  const opens = (t: string) => (typeof opening === "string" ? t.startsWith(opening) : opening.test(t));
  const inside = nodes(doc, layout).map((n) => words(n.querySelector("[data-provenance-note]")));
  if (inside.some(opens)) return [];
  const outside = [...doc.querySelectorAll("p, div, dl")].filter((el) => layoutOf(el) === layout && !el.closest("[data-provenance]") && opens(words(el)));
  return [outside.length ? `"${String(opening)}" renders outside the component` : `"${String(opening)}" not found`];
}

describe("every source note renders through the component", () => {
  it.each(Object.entries(SITES))("%s: the sizes each layout carries", (route, want) => {
    const doc = DOCS.get(route)!;
    for (const layout of ["desktop", "phone"] as const) {
      const got: Partial<Record<Size, number>> = {};
      for (const n of nodes(doc, layout)) {
        const s = n.getAttribute("data-provenance") as Size;
        got[s] = (got[s] ?? 0) + 1;
      }
      expect(got, `${route} ${layout}`).toEqual(want[layout] ?? {});
    }
  });

  it("37 sites in all: 1 P1, 15 + 12 P3, 5 + 4 Reviewed", () => {
    const tally = { p1: 0, p3d: 0, p3p: 0, rvd: 0, rvp: 0 };
    for (const want of Object.values(SITES)) {
      tally.p1 += want.desktop?.p1 ?? 0;
      tally.p3d += want.desktop?.p3 ?? 0;
      tally.p3p += want.phone?.p3 ?? 0;
      tally.rvd += want.desktop?.reviewed ?? 0;
      tally.rvp += want.phone?.reviewed ?? 0;
    }
    expect(tally).toEqual({ p1: 1, p3d: 15, p3p: 12, rvd: 5, rvp: 4 });
  });

  it.each(OPENINGS)("%s (%s): the note's own words, inside P3", (route, layout, opening) => {
    expect(noteProblems(DOCS.get(route)!, layout, opening)).toEqual([]);
  });

  it("no converted route prints a source note outside the component", () => {
    const stray = Object.fromEntries([...DOCS].map(([route, doc]) => [route, strayNotes(doc, route)]).filter(([, s]) => s.length));
    expect(stray).toEqual({});
  });

  it.each([...PENDING_JOB_1.map((r) => ["PENDING_JOB_1", ...r]), ...EXEMPT.map((r) => ["EXEMPT", ...r])])(
    "%s: %s still holds %s",
    (_list, file, anchor) => {
      // A row whose anchor is gone is stale: Job 1 converted it, or the code moved.
      expect(read(join(ROOT, file)).includes(anchor)).toBe(true);
    },
  );

  it("negative controls: the notes as they shipped on 8 Oct 2026 are caught", () => {
    // Verbatim from burnaboystats.com, 8 Oct 2026.
    const firsts = parse(
      `<div class="firsts-module__GANqVW__desktopOnly"><p class="firsts-module__GANqVW__source">Every milestone here was cross-checked against multiple sources (Billboard, Pollstar/Boxscore, the BPI and press reporting), as of September 2026. More milestones are added as they are confirmed.</p></div>`,
    );
    expect(noteProblems(firsts, "desktop", "Every milestone here was cross-checked against multiple sources")).toEqual([
      `"Every milestone here was cross-checked against multiple sources" renders outside the component`,
    ]);
    const tours = parse(
      `<div class="tours-module__-JUH5q__desktopOnly"><p class="tours-module__-JUH5q__sourceLine">Box-office figures are reported by Billboard Boxscore &amp; Pollstar (as aggregated by TouringData) and cross-checked against press reporting, as of October 2026.</p></div>`,
    );
    expect(noteProblems(tours, "desktop", "Box-office figures are reported by Billboard Boxscore")).toHaveLength(1);
    const reviewed = parse(
      `<div class="mobileMethodology-module__UUXRJW__reviewed"><span class="mobileMethodology-module__UUXRJW__reviewedDot" aria-hidden="true"></span>Data last reviewed <!-- -->8 October 2026</div>`,
    );
    expect(strayNotes(reviewed, "/methodology")).toEqual(["Data last reviewed 8 October 2026"]);
    const api = parse(
      `<div class="api-module__JGHx8G__freshness"><span class="api-module__JGHx8G__freshDot" aria-hidden="true"></span>Data updated <!-- -->2026-10-08</div>`,
    );
    expect(strayNotes(api, "/api")).toEqual(["Data updated 2026-10-08"]);
  });
});

// ── 3. Fixes 9–13 ────────────────────────────────────────────────────────────
describe("fix 9: P1 names the register bodies behind the figures, most first", () => {
  const bodies = registerBodies(allItems);
  const backed = (b: string) => allItems.flatMap((r) => r.certs).filter((c) => !offRegister(c) && issuerOf(c) === b).length;

  it("register rows only: the off-register plaques (label, announcement) are left to their own line", () => {
    const on = allItems.flatMap((r) => r.certs).filter((c) => !offRegister(c));
    expect(new Set(bodies)).toEqual(new Set(on.map(issuerOf)));
    expect(bodies.reduce((n, b) => n + backed(b), 0)).toBe(on.length);
    // An issuer that only ever issued an off-register plaque is not a register body.
    for (const c of allItems.flatMap((r) => r.certs).filter(offRegister))
      if (!on.some((x) => issuerOf(x) === issuerOf(c))) expect(bodies).not.toContain(issuerOf(c));
  });

  it("ordered by plaques backed, ties A–Z", () => {
    for (let i = 1; i < bodies.length; i++) {
      const [a, b] = [bodies[i - 1], bodies[i]];
      expect(backed(a) > backed(b) || (backed(a) === backed(b) && a.localeCompare(b, "en") < 0), `${a} before ${b}`).toBe(true);
    }
  });

  it("the home row shows the first four and '+ N more', a link to the registers with no glyph", () => {
    const p1 = nodes(DOCS.get("/")!, "desktop", "p1")[0];
    const names = words(p1.querySelector(`[data-provenance-sources] [class*="value"]`)).split(" · ");
    expect(names).toEqual(bodies.slice(0, 4));
    const more = p1.querySelector("[data-provenance-sources] a")!;
    expect(more.getAttribute("href")).toBe(MORE_HREF);
    expect(named(more)).toBe(`+ ${bodies.length - 4} more sources`);
    expect(more.textContent).not.toMatch(/[↗→↓▾]/);
    expect(homeP1().sources).toEqual(bodies);
  });

  it("five sources show four and '+ 1 more'; four show four and no link", () => {
    const five = registerBodies(allItems).slice(0, 5);
    expect(p1Shown(five)).toEqual({ shown: five.slice(0, 4), more: 1 });
    expect(p1Shown(five.slice(0, 4))).toEqual({ shown: five.slice(0, 4), more: 0 });
    const date: ProvDate = { label: "Verified", day: CERTS_VERIFIED_ON };
    for (const [Build, label] of [[Provenance, "desktop"], [MobileProvenance, "phone"]] as const) {
      const four = parse(renderToStaticMarkup(<Build size="p1" sources={five.slice(0, 4)} date={date} method="/methodology#registers" />));
      expect(four.querySelector("[data-provenance-sources] a"), label).toBeNull();
      const all = parse(renderToStaticMarkup(<Build size="p1" sources={five} date={date} method="/methodology#registers" />));
      const more = all.querySelector("[data-provenance-sources] a")!;
      expect(more.getAttribute("href"), label).toBe(MORE_HREF);
      expect(named(more), label).toBe("+ 1 more sources");
    }
  });

  it("negative control: the home row as shipped names bodies the data does not, in no order, under the wrong label", () => {
    // Live 8 Oct 2026, verbatim.
    const SHIPPED = parse(
      `<div class="page-module__E0kJGG__provenance"><span>Sources RIAA · BPI · SNEP · IFPI</span><span class="page-module__E0kJGG__provSep" aria-hidden="true"></span><span>Verified 8 Oct 2026</span><span class="page-module__E0kJGG__provSep" aria-hidden="true"></span><a class="page-module__E0kJGG__provLink" href="/api">Open data API ↗</a></div>`,
    );
    const shipped = words(SHIPPED.querySelector("span")).replace(/^Sources /, "").split(" · ");
    expect(shipped).not.toEqual(bodies.slice(0, 4));
    expect(bodies).not.toContain("IFPI");
    expect(named(SHIPPED.querySelector("a")!)).not.toBe("Open data");
  });
});

describe("fix 10: the date label is one closed set", () => {
  it("the set is the fix's seven labels, in order", () => {
    expect([...DATE_LABELS]).toEqual(["Verified", "Checked", "Read", "Chart dated", "Updated", "Set", "As of"]);
  });

  it("every rendered label is in the set, and 'As of' only ever takes a month", () => {
    const seen: string[] = [];
    for (const doc of [...DOCS.values(), PRIMITIVES])
      for (const el of doc.querySelectorAll("[data-provenance] [data-provenance-date]")) {
        const t = el.querySelector("time");
        const label = words(el).replace(words(t), "").trim();
        seen.push(label);
        expect(DATE_LABELS as readonly string[], label).toContain(label);
        if (label === "As of") expect(t?.getAttribute("datetime")).toMatch(/^\d{4}-\d{2}$/);
        else expect(t?.getAttribute("datetime")).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    expect(seen.length).toBeGreaterThan(0);
  });

  it("a certifications-backed P1 reads 'Verified', dated the day the registers were read", () => {
    const el = nodes(DOCS.get("/")!, "desktop", "p1")[0].querySelector("[data-provenance-date]")!;
    expect(words(el)).toMatch(/^Verified /);
    expect(el.querySelector("time")!.getAttribute("datetime")).toBe(CERTS_VERIFIED_ON);
  });

  it("the type rejects 'As of' with a day and a day label with a month", () => {
    // @ts-expect-error — "As of" is month-only (fix 10).
    const asOfDay: ProvDate = { label: "As of", day: CERTS_VERIFIED_ON };
    // @ts-expect-error — a day label never takes a month.
    const verifiedMonth: ProvDate = { label: "Verified", month: CERTS_VERIFIED_ON.slice(0, 7) };
    const unrecorded: ProvDate = { label: "Read", unrecorded: true };
    expect([asOfDay, verifiedMonth, unrecorded]).toHaveLength(3);
    const row = parse(renderToStaticMarkup(<Provenance size="p1" sources={[]} date={unrecorded} method="#method" />));
    expect(words(row.querySelector("[data-provenance-date]"))).toBe("Read date not recorded");
    expect(row.querySelector("time")).toBeNull();
  });

  it("negative controls: the stamps as shipped", () => {
    // /api, live 8 Oct 2026: "Data updated 2026-10-08" — not a label in the set.
    expect(DATE_LABELS as readonly string[]).not.toContain("Data updated");
    // The home row, live 8 Oct 2026: "Verified 8 Oct 2026" — the newest update, not a register read.
    expect(lastUpdated).not.toBe(CERTS_VERIFIED_ON);
  });
});

describe("fix 11: 'How this is counted' goes to a section that exists, or to the page's own method note", () => {
  const meth = DOCS.get("/methodology")!;

  it("every allowed /methodology anchor is a section on both layouts", () => {
    for (const id of METHODOLOGY_ANCHORS) {
      const el = meth.getElementById(id);
      expect(el, id).not.toBeNull();
      if (layoutOf(el!) === "desktop") {
        const twin = meth.getElementById(`m-${id}`);
        expect(twin, `m-${id}`).not.toBeNull();
        expect(layoutOf(twin!), `m-${id}`).toBe("phone");
      }
    }
  });

  it("every rendered method link names an allowed anchor, with ↗ only when it leaves the page", () => {
    let n = 0;
    for (const doc of [...DOCS.values(), PRIMITIVES])
      for (const a of doc.querySelectorAll("[data-provenance] a[data-provenance-method]")) {
        n++;
        const href = a.getAttribute("href")!;
        const layout = layoutOf(a);
        expect(named(a)).toBe(METHOD_LABEL[layout]);
        if (href.startsWith("/")) {
          expect(METHODOLOGY_ANCHORS as readonly string[], href).toContain(href.split("#")[1]);
          expect(a.textContent).toMatch(/↗$/);
        } else {
          expect(href).toBe(layout === "desktop" ? "#method" : "#m-method");
          expect(doc.getElementById(href.slice(1))?.getAttribute("data-provenance")).toBe("p3");
          expect(a.textContent).not.toMatch(/↗/);
        }
      }
    expect(n).toBeGreaterThan(0);
  });

  it("an on-page method link reaches the page's own P3, on each layout", () => {
    for (const [Build, layout, id] of [[Provenance, "desktop", "method"], [MobileProvenance, "phone", "m-method"]] as const) {
      const doc = parse(
        renderToStaticMarkup(
          <main>
            <Build size="p1" sources={[]} date={{ label: "Verified", day: CERTS_VERIFIED_ON }} method="#method" />
            <Build size="p3">A note.</Build>
          </main>,
        ),
      );
      const a = doc.querySelector("a[data-provenance-method]")!;
      expect(a.getAttribute("href"), layout).toBe(`#${id}`);
      expect(doc.getElementById(id)?.getAttribute("data-provenance"), layout).toBe("p3");
      expect(methodLeaves("#method")).toBe(false);
    }
  });

  it("negative controls: an unanchored link, and the anchor Job 1's frames implied", () => {
    // MobileAfrobeatsHub.tsx as shipped: <Link href="/methodology">methodology page</Link>.
    expect((METHODOLOGY_ANCHORS as readonly string[]).includes("/methodology".split("#")[1] ?? "")).toBe(false);
    expect(meth.getElementById("certifications")).toBeNull();
    // @ts-expect-error — not an anchor /methodology has.
    const bad: MethodHref = "/methodology#certifications";
    expect(bad).toBeTruthy();
  });
});

describe("fix 12: P2 takes one or two sources, an optional 'what', and the board's own method", () => {
  const read6: ProvDate = { label: "Read", day: "2026-10-06" };
  const read8: ProvDate = { label: "Read", day: "2026-10-08" };

  it("two sources print as the fix's own sample", () => {
    for (const Build of [Provenance, MobileProvenance]) {
      const doc = parse(
        renderToStaticMarkup(
          <Build size="p2" sources={[{ name: "kworb", date: read6 }, { name: "Spotify's own count", date: read8 }]} method={{ parts: methodParts(statBoxes[0].source) }} />,
        ),
      );
      expect(words(doc.querySelector("[data-provenance-sources]"))).toBe("kworb · read 6 Oct 2026 · Spotify's own count · read 8 Oct 2026");
      const withWhat = parse(renderToStaticMarkup(<Build size="p2" sources={[{ name: "kworb", date: read6 }]} what="Spotify plays" method={{ href: "#method" }} />));
      expect(words(withWhat.querySelector("[data-provenance-sources]"))).toBe("kworb (Spotify plays) · read 6 Oct 2026");
    }
  });

  it("the type takes one or two sources, never three", () => {
    const s = { name: "kworb", date: read6 };
    // @ts-expect-error — fix 12: one or two.
    const three: P2Spec = { sources: [s, s, s], method: { href: "#method" } };
    expect(three).toBeTruthy();
  });

  it("the method is the board's existing source text, never new copy", () => {
    for (const box of statBoxes) expect(methodParts(box.source).join(" "), box.id).toBe(box.source.replace(/\s+/g, " ").trim());
  });

  it("'Method ▾' is a native disclosure; the source line stays visible outside it", () => {
    for (const Build of [Provenance, MobileProvenance]) {
      const doc = parse(renderToStaticMarkup(<Build size="p2" sources={[{ name: "kworb", date: read6 }]} method={{ parts: methodParts(statBoxes[0].source) }} />));
      const details = doc.querySelector("[data-provenance='p2'] details")!;
      const summary = details.querySelector(":scope > summary")!;
      expect(named(summary)).toBe("Method");
      expect(summary.querySelector('span[aria-hidden="true"]')?.textContent).toBe("▾");
      expect(details.contains(doc.querySelector("[data-provenance-sources]"))).toBe(false);
      expect(details.hasAttribute("open")).toBe(false);
      expect([...details.querySelectorAll("p")].map((p) => words(p)).join(" ")).toBe(statBoxes[0].source.replace(/\s+/g, " ").trim());
    }
  });

  it("negative control: StatBox's shipped 'Source ▾' fails the P2 shape", () => {
    // app/components/StatBox.tsx as shipped (the PENDING_JOB_1 row).
    const SHIPPED = parse(`<details class="sourceWrap"><summary class="sourceSummary">Source ▾</summary><p class="sourceText">x</p></details>`);
    const summary = SHIPPED.querySelector("summary")!;
    expect(named(summary)).not.toBe("Method");
    expect(summary.querySelector('span[aria-hidden="true"]')).toBeNull();
    expect(SHIPPED.querySelector("[data-provenance-sources]")).toBeNull();
  });
});

describe("fix 13: P3's data line is OpenDataLine restyled, with ToursDataLine folded in", () => {
  const LINE = `Download CSV ↓ · JSON ↗ · CC BY 4.0 ↗ · cite as “${CREDIT_LINE}”`;
  const JSON_ONLY = `JSON ↗ · CC BY 4.0 ↗ · cite as “${CREDIT_LINE}”`;
  /** route → [csv slug or none, JSON route]. */
  const LINES: [string, Layout, "certifications" | "chart-peaks" | "tours" | null, string][] = [
    ["/certifications", "desktop", "certifications", "/api/v1/certifications"],
    ["/records/charts", "desktop", "chart-peaks", "/api/v1/charts"],
    ["/records/charts", "phone", "chart-peaks", "/api/v1/charts"],
    ["/records/tours", "desktop", "tours", "/api/v1/tours"],
    ["/records/tours", "phone", "tours", "/api/v1/tours"],
    ["/records/tours/revenue", "desktop", "tours", "/api/v1/tours"],
    ["/records/tours/revenue", "phone", "tours", "/api/v1/tours"],
    ["/records/tours/revenue/countries", "desktop", "tours", "/api/v1/tours"],
    ["/records/tours/revenue/countries", "phone", "tours", "/api/v1/tours"],
    ["/records/tours/festivals", "desktop", null, "/api/v1/tours"],
    ["/records/tours/festivals", "phone", null, "/api/v1/tours"],
  ];

  it.each(LINES)("%s (%s)", (route, layout, csv, json) => {
    const [p3] = nodes(DOCS.get(route)!, layout, "p3");
    const line = p3.querySelector("[data-provenance-data]")!;
    expect(words(line)).toBe(csv ? LINE : JSON_ONLY);
    const csvLink = line.querySelector('a[href$=".csv"]');
    if (csv) {
      expect(csvLink!.getAttribute("href")).toBe(downloadBySlug(csv).path);
      expect(csvLink!.getAttribute("download")).toBe(downloadFilename(csv));
    } else expect(csvLink).toBeNull();
    const jsonLink = line.querySelector(`a[href="${json}"]`)!;
    expect(named(jsonLink)).toBe("JSON");
    expect(existsSync(join(ROOT, "app", json, "route.ts")), json).toBe(true);
    const licence = line.querySelector(`a[href="${LICENSE.url}"]`)!;
    expect(licence.getAttribute("rel")).toBe("license noopener");
    // CSV, JSON and the licence are the component's gold links; the citation is muted text.
    for (const a of line.querySelectorAll("a")) expect(a.getAttribute("class"), route).toMatch(/dataLink/);
    expect(line.querySelector('[class*="cite"]')?.textContent).toBe(`cite as “${CREDIT_LINE}”`);
    // A separator never opens a line.
    expect(line.textContent).not.toMatch(/ ·/);
  });

  it("one P3 per layout, its id the layout's own", () => {
    for (const [route, doc] of DOCS) {
      const d = nodes(doc, "desktop", "p3");
      const p = nodes(doc, "phone", "p3");
      expect(d.every((n) => n.id === "method"), route).toBe(true);
      expect(p.every((n) => n.id === "m-method"), route).toBe(true);
      expect(doc.querySelectorAll("#method").length, route).toBeLessThanOrEqual(1);
      expect(doc.querySelectorAll("#m-method").length, route).toBeLessThanOrEqual(1);
    }
  });

  it("negative control: the line both lanes shipped has no ↗ and class-less links", () => {
    // ToursDataLine.tsx as merged (#455), with C-17's credit line.
    const SHIPPED = parse(
      `<p data-tours-data-line=""><a href="/api/v1/tours.csv" download="${downloadFilename("tours")}">Download CSV<span aria-hidden="true"> ↓</span></a> · <a href="/api/v1/tours">JSON</a> · <a href="${LICENSE.url}" rel="license noopener" target="_blank">CC BY 4.0</a> · cite as “${CREDIT_LINE}”</p>`,
    ).querySelector("p")!;
    expect(words(SHIPPED)).not.toBe(LINE);
    expect([...SHIPPED.querySelectorAll("a")].some((a) => /dataLink/.test(a.getAttribute("class") ?? ""))).toBe(false);
  });
});

// ── 4. J0-13 inside the component ────────────────────────────────────────────
describe("J0-13: one date format inside the component", () => {
  it("every date the component prints is '7 Oct 2026' or 'Oct 2026'", () => {
    let n = 0;
    for (const doc of [...DOCS.values(), PRIMITIVES])
      for (const t of doc.querySelectorAll("[data-provenance] time")) {
        n++;
        expect(words(t)).toMatch(COMPONENT_DATE);
      }
    expect(n).toBeGreaterThan(10);
  });

  it("Reviewed reads 'Data last reviewed {d Mon yyyy}', dated the newest logged update", () => {
    for (const route of ["/methodology", "/analysis", "/press", "/curator", "/api"])
      for (const n of DOCS.get(route)!.querySelectorAll('[data-provenance="reviewed"]')) {
        expect(words(n)).toMatch(/^Data last reviewed \d{1,2} [A-Z][a-z]{2} \d{4}$/);
        expect(n.querySelector("time")!.getAttribute("datetime"), route).toBe(lastUpdated);
      }
  });
});

// ── 5. Props from data ───────────────────────────────────────────────────────
function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const APP_TSX = walk(join(ROOT, "app")).filter((f) => /\.tsx?$/.test(f));
/** A literal source name or date handed to the component at a call site. */
const TYPED_PROP = /\b(sources|name|day|month)=(["'`]|\{\s*["'`[])/;
const callSites = (src: string) => [...src.matchAll(/<(?:Mobile)?Provenance\b[\s\S]*?\/?>/g)].map((m) => m[0]);

describe("props from data", () => {
  it("no call site types a source name or a date", () => {
    const typed = APP_TSX.flatMap((f) => callSites(read(f)).filter((c) => TYPED_PROP.test(c)).map((c) => `${f}: ${c}`));
    expect(typed).toEqual([]);
    expect(APP_TSX.flatMap((f) => callSites(read(f))).length).toBeGreaterThan(30);
  });

  it("the spec module types no date", () => {
    expect(read(join(ROOT, "app/lib/provenanceSpecs.ts"))).not.toMatch(/\b(day|month)\s*:\s*["'`]\d/);
  });

  it("negative control: the shipped home row's four names, as a literal prop, are caught", () => {
    const SHIPPED = `<Provenance size="p1" sources={["RIAA", "BPI", "SNEP", "IFPI"]} date={date} method="/methodology#registers" />`;
    expect(callSites(SHIPPED).some((c) => TYPED_PROP.test(c))).toBe(true);
  });
});

// ── 6. Pure components ───────────────────────────────────────────────────────
describe("pure components", () => {
  const PURE: [string, RegExp][] = [
    ["app/components/Provenance.tsx", /^(react|next\/link|\.\/AnchorTwins|\.\/provenanceParts|\.\.\/lib\/provenance|\.\.\/lib\/dates|\.\/provenance\.module\.css)$/],
    ["app/components/MobileProvenance.tsx", /^(react|next\/link|\.\/AnchorTwins|\.\/provenanceParts|\.\.\/lib\/provenance|\.\.\/lib\/dates|\.\/mobileProvenance\.module\.css)$/],
    ["app/components/provenanceParts.tsx", /^(react|\.\.\/lib\/provenance)$/],
    ["app/lib/provenance.ts", /^\.\/dates$/],
  ];
  it.each(PURE)("%s imports no data and holds no client code", (file, allowed) => {
    const src = read(join(ROOT, file));
    const imports = [...src.matchAll(/^import [\s\S]*? from "([^"]+)";/gm)].map((m) => m[1]);
    for (const i of imports) expect(i, file).toMatch(allowed);
    expect(src.trimStart().startsWith('"use client"')).toBe(false);
  });

  it("no client module imports the server-only spec module", () => {
    const clients = APP_TSX.filter((f) => /^\s*["']use client["']/.test(read(f)));
    expect(clients.filter((f) => /from "[^"]*provenanceSpecs"/.test(read(f)))).toEqual([]);
  });

  it("the method disclosure is the only tap-to-reveal the component adds", () => {
    for (const file of ["app/components/Provenance.tsx", "app/components/MobileProvenance.tsx"]) {
      const src = read(join(ROOT, file));
      expect((src.match(/<details\b/g) ?? []).length, file).toBe(1);
      expect(src).not.toMatch(/aria-expanded|useState/);
    }
  });
});

// ── /primitives: every size on both builds, from real data ──────────────────
describe("/primitives shows every size on both builds", () => {
  it("P1, P2, P3 and Reviewed, desktop and phone", () => {
    for (const build of ["desktop", "phone"] as const) {
      const sizes = [...PRIMITIVES.querySelectorAll(`[data-build="${build}"] [data-provenance]`)].map((n) => n.getAttribute("data-provenance"));
      expect(sizes, build).toEqual(["p1", "p2", "p3", "reviewed"]);
    }
  });
});
