import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RecordsPage from "../app/records/page";
import desk from "../app/records/records.module.css";
import phone from "../app/components/mobileRecords.module.css";
import { read, winning } from "./fixtures/cssRules";
import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";
import { recordBooks } from "../app/lib/recordBooks";
// The data itself, recounted here rather than read off recordShelves, so a
// figure the hub got wrong has nothing to agree with.
import { allChartItems } from "../app/data/charts";
import { africaBoards } from "../app/lib/africaBoards";
import { statBoxes } from "../app/data/africasBiggest";
import { stats as byTheNumbers } from "../app/data/byTheNumbers";
import { JUMP } from "../app/lib/visualizedSections";
import { allNoms } from "../app/data/awards";
import { allFirsts } from "../app/data/firsts";
import { timelineEras } from "../app/data/timeline";
import { onThisDayDays } from "../app/lib/onThisDay";
import { tours, festivals, concerts, otherShows } from "../app/data/tours";
import { performedCountries } from "../app/data/performedCountries";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { cars } from "../app/data/cars";

/**
 * recordsCardHasFigureAndDate (Job 4, J4-3: fixes 80, 81, 82 and 94).
 *
 * The /records hub files its record books on four shelves. Live Charts and
 * The Afrobeats Board are no longer books (both are masthead links), On This
 * Day stays on Awards & firsts after Career Timeline, and the titles are
 * recordBooks.ts's own. Every card carries one figure counted from the data,
 * its unit, and "Updated {day}", the route's sitemap date; a route the
 * sitemap cannot date prints no date at all. Checked on both layouts, which
 * are separate trees in one document.
 */

const SHELVES: [string, string[]][] = [
  ["Charts & streaming", ["Official Charts", "Africa's Biggest", "By the Numbers", "Visualized"]],
  ["Awards & firsts", ["Awards", "Firsts", "Career Timeline", "On This Day"]],
  ["On the road", ["Tours", "Where He's Performed", "Highest-Grossing Shows", "Highest-Grossing Artists by Country", "Festivals"]],
  ["Off stage", ["Car Collection"]],
];

/** Each card's figure and its unit's two forms, recounted from the data. */
const EXPECTED: Record<string, [number, string, string]> = {
  "/records/charts": [allChartItems.reduce((n, r) => n + r.entries.length, 0), "chart entry", "chart entries"],
  "/records/africas-biggest": [africaBoards.filter((b) => b.leads).length, "board he leads", "boards he leads"],
  "/records/by-the-numbers": [byTheNumbers.length, "quotable figure", "quotable figures"],
  "/records/visualized": [JUMP.length, "chart", "charts"],
  "/records/awards": [allNoms.filter((n) => n.won).length, "win", "wins"],
  "/records/firsts": [allFirsts.length, "milestone", "milestones"],
  "/timeline": [timelineEras.reduce((n, e) => n + e.entries.length, 0), "entry", "entries"],
  "/on-this-day": [onThisDayDays.length, "date", "dates"],
  "/records/tours": [tours.length, "tour", "tours"],
  "/records/tours/map": [performedCountries.length, "country played", "countries played"],
  "/records/tours/revenue": [revenueShows.length, "show ranked", "shows ranked"],
  // The countries board groups every single show and multi-night stand by flag.
  "/records/tours/revenue/countries": [new Set([...revenueShows, ...revenueStands].map((s) => s.flag)).size, "country", "countries"],
  "/records/tours/festivals": [festivals.length + concerts.length + otherShows.length, "appearance", "appearances"],
  "/records/cars": [cars.filter((c) => !c.status).length, "car", "cars"],
};

/** The routes allowed to print no date: the sitemap has no evidence for them.
 *  A new dateless route fails until it is named here, with its reason.
 *  /on-this-day: no feed entry names it and no data file stamps it (C-2). */
const DATELESS = ["/on-this-day"];

const sitemapDay = new Map(
  sitemap().map((r) => [
    r.url.replace(siteUrl, "") || "/",
    r.lastModified ? new Date(r.lastModified).toISOString().slice(0, 10) : undefined,
  ]),
);

const html = renderToStaticMarkup(<RecordsPage />);
const doc = document.createElement("div");
doc.innerHTML = html;
const desktop = doc.querySelector(`.${desk.desktopOnly}`)!;
const phoneTree = doc.querySelector(`.${phone.screen}`)!;

const LAYOUTS = [
  { name: "desktop", tree: desktop, card: desk.card, shelf: desk.shelfName, shelfBox: desk.shelf, count: desk.shelfCount, title: desk.cardTitle, desc: desk.cardDesc, figure: desk.cardFigure, unit: desk.cardUnit, date: desk.cardDate, arrow: desk.arrow, head: "H3" },
  { name: "phone", tree: phoneTree, card: phone.bookRow, shelf: phone.shelfName, shelfBox: phone.shelf, count: phone.shelfCount, title: phone.bookTitle, desc: phone.bookDesc, figure: phone.bookFigure, unit: phone.bookUnit, date: phone.bookDate, arrow: phone.arrow, head: "H2" },
] as const;

const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

/** What is wrong with one card's date: the sitemap's day, labelled "Updated",
 *  or nothing at all for a route the sitemap cannot date. */
function dateViolations(card: Element, href: string, dateClass: string): string[] {
  const out: string[] = [];
  const day = sitemapDay.get(href);
  const time = card.querySelector("time");
  if (day === undefined) {
    if (!DATELESS.includes(href)) out.push(`${href}: the sitemap has no date and the route is not in DATELESS`);
    if (time) out.push(`${href}: prints a date the sitemap does not have`);
    return out;
  }
  if (!time) return [`${href}: no date, the sitemap says ${day}`];
  if (time.getAttribute("datetime") !== day) out.push(`${href}: dated ${time.getAttribute("datetime")}, the sitemap says ${day}`);
  const line = time.closest(`.${dateClass}`);
  if (!line) out.push(`${href}: the date is not in the card's date line`);
  else if (!/^Updated \d{1,2} [A-Z][a-z]{2} \d{4}$/.test(text(line))) out.push(`${href}: the date reads "${text(line)}", not "Updated {day}"`);
  return out;
}

describe.each(LAYOUTS)("recordsCardHasFigureAndDate · $name", (L) => {
  const cards = [...L.tree.querySelectorAll(`a.${L.card}`)];
  const hrefs = cards.map((a) => a.getAttribute("href")!);

  it("lists the record books, Live Charts and The Afrobeats Board out", () => {
    expect(cards.length).toBe(recordBooks.length);
    expect(hrefs).toEqual(recordBooks.map((b) => b.href));
    expect(hrefs).not.toContain("/live-charts");
    expect(hrefs).not.toContain("/afrobeats");
  });

  it("files them on the four shelves, titles as recordBooks has them, On This Day after Career Timeline", () => {
    const heads = [...L.tree.querySelectorAll(`.${L.shelf}`)];
    expect(heads.map(text)).toEqual(SHELVES.map(([name]) => name));
    expect(heads.every((h) => h.tagName === L.head)).toBe(true);
    const titles = cards.map((a) => text(a.querySelector(`.${L.title}`)));
    expect(titles).toEqual(SHELVES.flatMap(([, t]) => t));
    expect(titles).toEqual(recordBooks.map((b) => b.title));
    expect(titles.indexOf("On This Day")).toBe(titles.indexOf("Career Timeline") + 1);
    // Each shelf holds its own cards, and says how many.
    for (const [i, h] of heads.entries()) {
      const shelf = h.closest(`.${L.shelfBox}`)!;
      expect(shelf.querySelectorAll(`a.${L.card}`).length).toBe(SHELVES[i][1].length);
      expect(text(shelf.querySelector(`.${L.count}`))).toBe(`${SHELVES[i][1].length} books`);
    }
  });

  it("gives every card one figure counted from the data, with its unit", () => {
    for (const [i, a] of cards.entries()) {
      const [n, one, many] = EXPECTED[hrefs[i]] ?? [NaN, "", ""];
      expect(Number(text(a.querySelector(`.${L.figure}`)).replace(/,/g, "")), hrefs[i]).toBe(n);
      expect(text(a.querySelector(`.${L.unit}`)), hrefs[i]).toBe(n === 1 ? one : many);
      expect(a.querySelectorAll(`.${L.figure}`).length, hrefs[i]).toBe(1);
    }
  });

  it("Africa's Biggest's line is the derived board count (fix 94)", () => {
    const ab = cards[hrefs.indexOf("/records/africas-biggest")];
    expect(text(ab.querySelector(`.${L.desc}`))).toBe(`${statBoxes.length} leaderboards`);
  });

  it("dates every card by its route's sitemap day, \"Updated {day}\"; only DATELESS routes print none", () => {
    expect(cards.flatMap((a, i) => dateViolations(a, hrefs[i], L.date))).toEqual([]);
    for (const h of DATELESS) expect(sitemapDay.get(h), `${h} has a sitemap date now: drop it from DATELESS`).toBeUndefined();
  });

  it("keeps the gold → at each card's foot", () => {
    for (const a of cards) {
      const arrow = a.querySelector(`.${L.arrow}`);
      expect(text(arrow)).toBe("→");
      expect(arrow?.getAttribute("aria-hidden")).toBe("true");
    }
  });
});

describe("recordsCardHasFigureAndDate · counts and type", () => {
  it("the desktop lede and the phone back bar count the cards", () => {
    expect(text(desktop.querySelector(`.${desk.lede}`))).toContain(`${recordBooks.length} record books`);
    expect(text(phoneTree.querySelector(`.${phone.backNote}`))).toBe(`${recordBooks.length} books`);
  });

  const top = (m: string | null) => m === null;
  const all = () => true;
  const px = (v: string | undefined) => parseFloat(v ?? "NaN");

  it("figures are ink (a hub tally is never gold); the unit and the date label muted, the date ink", () => {
    for (const [file, figure, labels] of [
      ["app/records/records.module.css", ".cardFigure", [".cardUnit", ".cardDate", ".shelfCount"]],
      ["app/components/mobileRecords.module.css", ".bookFigure", [".bookUnit", ".bookDate", ".shelfCount"]],
    ] as const) {
      const css = read(file);
      expect(winning(css, figure, "color", all), file).toBe("var(--text)");
      for (const l of labels) expect(winning(css, l, "color", all), `${file} ${l}`).toBe("var(--text-muted)");
    }
    // The date itself is the provenance component's ink value.
    expect(winning(read("app/components/provenance.module.css"), ".value", "color", top)).toBe("var(--text)");
  });

  it("every label is at least 11px, at every width", () => {
    for (const [file, labels] of [
      ["app/records/records.module.css", [".cardUnit", ".cardDate", ".shelfCount"]],
      ["app/components/mobileRecords.module.css", [".bookUnit", ".bookDate", ".shelfCount"]],
    ] as const) {
      const css = read(file);
      for (const l of labels) expect(px(winning(css, l, "font-size", all)), `${file} ${l}`).toBeGreaterThanOrEqual(11);
    }
  });

  it("three cards a row from 1240, two from 901 to 1239", () => {
    const css = read("app/records/records.module.css");
    expect(winning(css, ".grid", "grid-template-columns", top)).toBe("repeat(3, minmax(0, 1fr))");
    expect(winning(css, ".grid", "grid-template-columns", (m) => m === null || /max-width:\s*1239px/.test(m))).toBe(
      "repeat(2, minmax(0, 1fr))",
    );
  });
});

describe("recordsCardHasFigureAndDate · negative controls", () => {
  it("the shipped Live Charts card (main e85e6efe, recordBooks.ts:23) fails 'no /live-charts'", () => {
    const shipped = document.createElement("div");
    shipped.innerHTML = `<a class="${desk.card}" href="/live-charts"><span><span class="${desk.cardTitle}">Live Charts</span><span class="${desk.cardDesc}">Where every release is charting right now, refreshed hourly</span></span><span class="${desk.arrow}" aria-hidden="true">→</span></a>`;
    const hrefs = [...shipped.querySelectorAll(`a.${desk.card}`)].map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/live-charts");
    // and it carries no figure at all
    expect(shipped.querySelector(`.${desk.cardFigure}`)).toBeNull();
  });

  it("the shipped lede (main e85e6efe) fails the count", () => {
    const shipped = "Charts, awards, tours and the firsts that made history — 16 record books, each one sourced and dated.";
    expect(shipped).not.toContain(`${recordBooks.length} record books`);
  });

  it("a card dated \"As of 7 Oct 2026\" (the canvas sample) fails the label check", () => {
    const href = recordBooks.find((b) => sitemapDay.get(b.href) !== undefined)!.href;
    const day = sitemapDay.get(href)!;
    const card = document.createElement("a");
    card.innerHTML = `<span class="${desk.cardDate}">As of <time datetime="${day}">7 Oct 2026</time></span>`;
    expect(dateViolations(card, href, desk.cardDate).join(" ")).toMatch(/not "Updated \{day\}"/);
  });
});
