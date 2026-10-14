import { renderToStaticMarkup } from "react-dom/server";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { ReactElement } from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../../app/records/tours/page";
import FestivalsPage from "../../app/records/tours/festivals/page";
import MapPage from "../../app/records/tours/map/page";
import RevenuePage from "../../app/records/tours/revenue/page";
import RevenueCountriesPage from "../../app/records/tours/revenue/countries/page";
import { TOURS_EDITED_ON } from "../../app/data/tours";
import { festivalsP1, mapP1, revenueP1, toursP1 } from "../../app/lib/provenanceSpecs";
import { METHOD_LABEL, type P1Spec } from "../../app/lib/provenance";
import {
  DOCUMENTED_SHOWS,
  FESTIVAL_LINEUPS,
  REVENUE_BODY,
  REVENUE_PUBLISHERS,
  REVENUE_READ_ON,
  REVENUE_REPORTS,
  TOUR_ANNOUNCEMENTS,
} from "../../app/lib/revenueSource";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * The tours family's proof (design review 8 Oct 2026, Job 1).
 *
 * J1-11 (fixes 24, 29): /records/tours, /festivals and /map each carry a P1 in
 * the hero on both layouts — their sources, "Updated {TOURS_EDITED_ON}" (an
 * edit stamp, fix 10), "How this is counted" to the page's own method note,
 * and on the desktop "Open data ↗" to /api/v1/tours. The map's desktop P1
 * sits at the right end of the breadcrumb bar, so the bar stays 49px and the
 * map's foot stays at y 905; its method note (note2) is now its P3, and the
 * phone screen gains the same P3 at its foot.
 *
 * J1-12 (fix 24): the two box-office heroes (approved 3–4 Oct) gain a P1 as
 * their only change — "TouringData (Billboard Boxscore, Pollstar)", "Read
 * {REVENUE_READ_ON}" (a day the data holds, never the month-only "as of").
 */

const ROOT = join(__dirname, "..", "..");
type Layout = "desktop" | "phone";
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const named = (a: Element) => {
  const c = a.cloneNode(true) as Element;
  c.querySelectorAll('[aria-hidden="true"]').forEach((g) => g.remove());
  return words(c);
};
const layoutOf = (el: Element): Layout => (el.closest('[class*="desktopOnly"]') ? "desktop" : "phone");
const inLayout = (doc: Document, sel: string, layout: Layout) => [...doc.querySelectorAll(sel)].filter((n) => layoutOf(n) === layout);
const render = async (C: () => ReactElement | Promise<ReactElement>) => parse(renderToStaticMarkup(await C()));

const PAGES: [string, () => ReactElement | Promise<ReactElement>, P1Spec][] = [
  ["/records/tours", ToursPage, toursP1()],
  ["/records/tours/festivals", FestivalsPage, festivalsP1()],
  ["/records/tours/map", MapPage, mapP1()],
];
const DOCS = new Map<string, Document>();
for (const [route, C] of PAGES) DOCS.set(route, await render(C));

describe("J1-11: the sources, by name, from constants", () => {
  it("tours: TouringData (Billboard Boxscore and Pollstar reports) · tour announcements (fix 24)", () => {
    expect(toursP1().sources).toEqual([`${REVENUE_BODY} (${REVENUE_REPORTS})`, TOUR_ANNOUNCEMENTS]);
    expect(toursP1().sources[0]).toBe("TouringData (Billboard Boxscore and Pollstar reports)");
    expect(festivalsP1().sources).toEqual([FESTIVAL_LINEUPS, TOUR_ANNOUNCEMENTS]);
    expect(mapP1().sources).toEqual([DOCUMENTED_SHOWS]);
    for (const [, , spec] of PAGES) {
      expect(spec.date).toEqual({ label: "Updated", day: TOURS_EDITED_ON });
      expect(spec.method).toBe("#method");
      expect(spec.openData).toBe("/api/v1/tours");
    }
  });
});

describe.each(PAGES)("J1-11: %s", (route, _C, spec) => {
  const doc = () => DOCS.get(route)!;

  it("one P1 per layout, 'Updated' on TOURS_EDITED_ON", () => {
    for (const layout of ["desktop", "phone"] as const) {
      const p1s = inLayout(doc(), '[data-provenance="p1"]', layout);
      expect(p1s, layout).toHaveLength(1);
      const date = p1s[0].querySelector("[data-provenance-date]")!;
      expect(words(date).startsWith("Updated "), layout).toBe(true);
      expect(date.querySelector("time")!.getAttribute("datetime"), layout).toBe(TOURS_EDITED_ON);
    }
  });

  it("the desktop names the sources and ends with 'Open data ↗'; the phone leaves Open data to its P3", () => {
    const [d] = inLayout(doc(), '[data-provenance="p1"]', "desktop");
    const label = spec.sources.length === 1 ? "Source" : "Sources";
    expect(words(d.querySelector("[data-provenance-sources]"))).toBe(`${label} ${spec.sources.join(" · ")}`);
    const links = [...d.querySelectorAll("a")];
    const open = links.at(-1)!;
    expect(open.getAttribute("href")).toBe("/api/v1/tours");
    expect(named(open)).toBe("Open data");
    expect(words(open)).toBe("Open data ↗");
    const [p] = inLayout(doc(), '[data-provenance="p1"]', "phone");
    expect(words(p.querySelector("[data-provenance-sources]"))).toBe(`${label}: ${spec.sources.join(", ")}`);
    expect(p.querySelector('a[href^="/api/"]')).toBeNull();
  });

  it("'How this is counted' lands on the same layout's own P3, with no ↗ (fix 11)", () => {
    for (const [layout, id] of [["desktop", "method"], ["phone", "m-method"]] as const) {
      const [p1] = inLayout(doc(), '[data-provenance="p1"]', layout);
      const how = p1.querySelector("a[data-provenance-method]")!;
      expect(how.getAttribute("href"), layout).toBe(`#${id}`);
      expect(named(how), layout).toBe(METHOD_LABEL[layout]);
      expect(how.textContent, layout).not.toMatch(/↗/);
      const target = doc().getElementById(id)!;
      expect(target.getAttribute("data-provenance"), layout).toBe("p3");
      expect(layoutOf(target), layout).toBe(layout);
    }
  });
});

describe("J1-11: where each P1 sits", () => {
  it("tours and festivals: under the lede, inside the hero, on both layouts", () => {
    for (const route of ["/records/tours", "/records/tours/festivals"]) {
      for (const layout of ["desktop", "phone"] as const) {
        const [p1] = inLayout(DOCS.get(route)!, '[data-provenance="p1"]', layout);
        const lede = p1.previousElementSibling!;
        expect(lede.tagName, `${route} ${layout}`).toBe("P");
        expect(lede.className, `${route} ${layout}`).toMatch(/lede/);
        // nothing between the lede and the h1 moved: the h1 is still the hero's
        expect(p1.parentElement!.querySelector("h1"), `${route} ${layout}`).not.toBeNull();
      }
    }
  });

  it("the map, desktop: inside the breadcrumb bar, after the current crumb", () => {
    const doc = DOCS.get("/records/tours/map")!;
    const [p1] = inLayout(doc, '[data-provenance="p1"]', "desktop");
    const nav = p1.closest('nav[aria-label="Breadcrumb"]')!;
    expect(nav).not.toBeNull();
    const current = nav.querySelector('[aria-current="page"]')!;
    expect(current.compareDocumentPosition(p1) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("the map, phone: under the figures, in the hero", () => {
    const doc = DOCS.get("/records/tours/map")!;
    const [p1] = inLayout(doc, '[data-provenance="p1"]', "phone");
    expect(p1.previousElementSibling!.className).toMatch(/figs/);
    expect(p1.parentElement!.querySelector("h1")).not.toBeNull();
  });

  it("the breadcrumb bar stays 12 + 24 + 12 + 1 = 49px with the P1 in it", () => {
    const bar = read(join(ROOT, "app/components/breadcrumbBar.module.css"));
    const top = (sel: string, prop: string) => {
      let v: string | undefined;
      for (const r of rules(bar)) if (r.media === null && r.selector.split(",").map((s) => s.trim()).includes(sel)) v = decl(r.body, prop) ?? v;
      return v;
    };
    const pad = parseFloat(top(".inner", "padding")!.split(/\s+/)[0]);
    const line = parseFloat(top(".inner a", "min-height")!);
    const asideP1 = parseFloat(top('.aside [data-provenance="p1"]', "min-height")!);
    const edge = parseFloat(top(".bar", "border-bottom")!);
    expect(Math.max(line, asideP1)).toBe(24);
    expect(pad + Math.max(line, asideP1) + pad + edge).toBe(49);
    // .aside [data-provenance="p1"] (0,2,0) outranks the component's .p1 (0,1,0) and its 44px.
    expect(top(".aside", "margin-left")).toBe("auto");
    // its links keep the component's gold, not the crumbs' muted ink
    expect(top(".inner .aside a", "color")).toBe("var(--gold)");
  });

  it("in the bar the P1's hairlines take the bar's 10px each side, so it holds one row at 1240 and up", () => {
    // Measured 14 Oct 2026 (next dev, 1240 × 900): the crumbs end at x 546 and
    // the P1 at 14px gaps is 646 wide, 1162 in all against the 1160 the bar
    // has, so the P1 wrapped to a second row (bar 83px, the map 34px lower).
    // The canvas draws the bar's hairlines at "margin:0 10px".
    const bar = read(join(ROOT, "app/components/breadcrumbBar.module.css"));
    const one = (sel: string) => rules(bar).filter((r) => r.media === null && r.selector === sel);
    const row = one('.aside [data-provenance="p1"] > span');
    const item = one('.aside [data-provenance="p1"] > span > span');
    expect([row.length, item.length]).toEqual([1, 1]);
    expect(decl(row[0].body, "column-gap")).toBe("10px");
    // one hairline (1px) and one gap left of the line, where .p1's clip cuts it
    expect(decl(row[0].body, "margin-left")).toBe("-11px");
    expect(decl(item[0].body, "column-gap")).toBe("10px");
    // The hero P1s keep the component's 14px: only the bar's P1 is tightened.
    const comp = read(join(ROOT, "app/components/provenance.module.css"));
    const c = (sel: string, prop: string) => rules(comp).filter((r) => r.selector === sel).map((r) => decl(r.body, prop)).filter(Boolean);
    expect(c(".p1Row", "column-gap")).toEqual(["14px"]);
    expect(c(".p1Row", "margin-left")).toEqual(["-15px"]);
    expect(c(".p1Item", "column-gap")).toEqual(["14px"]);
    // The P1's markup is what the two selectors reach: p1 > row > items.
    const [p1] = inLayout(DOCS.get("/records/tours/map")!, 'nav[aria-label="Breadcrumb"] [data-provenance="p1"]', "desktop");
    expect(p1.children).toHaveLength(1);
    expect(p1.firstElementChild!.tagName).toBe("SPAN");
    expect([...p1.firstElementChild!.children].every((k) => k.tagName === "SPAN" && k.firstElementChild?.getAttribute("aria-hidden") === "true")).toBe(true);
    expect(p1.firstElementChild!.children).toHaveLength(4);
  });
});

describe("J1-11: the map's method note is its P3 on both layouts", () => {
  const OPENING = "Compiled from his tours, festivals and one-off shows, cross-checked against press and setlist records.";
  it("the same words, the Tours page link, and the data line /api/v1/tours (no CSV)", () => {
    const doc = DOCS.get("/records/tours/map")!;
    const notes = (["desktop", "phone"] as const).map((layout) => {
      const p3s = inLayout(doc, '[data-provenance="p3"]', layout);
      expect(p3s, layout).toHaveLength(1);
      const note = p3s[0].querySelector("[data-provenance-note]")!;
      expect(words(note).startsWith(OPENING), layout).toBe(true);
      expect(note.querySelector('a[href="/records/tours"]'), layout).not.toBeNull();
      const data = p3s[0].querySelector("[data-provenance-data]")!;
      expect(data.querySelector('a[href="/api/v1/tours"]'), layout).not.toBeNull();
      expect(data.querySelector('a[href$=".csv"]'), layout).toBeNull();
      return words(note);
    });
    expect(notes[0]).toBe(notes[1]);
    // nothing prints the note outside the component any more
    expect([...doc.querySelectorAll("p")].filter((p) => !p.closest("[data-provenance]") && words(p).startsWith(OPENING))).toEqual([]);
  });
});

describe("J1-11: negative controls", () => {
  it("the shipped map breadcrumb has no P1", () => {
    // /records/tours/map, live 8 Oct 2026, verbatim.
    const SHIPPED = parse(
      `<nav aria-label="Breadcrumb" class="breadcrumbBar-module__XfGt9q__bar"><div class="breadcrumbBar-module__XfGt9q__inner"><a href="/">Home</a><span class="breadcrumbBar-module__XfGt9q__crumb"><span class="breadcrumbBar-module__XfGt9q__sep" aria-hidden="true">/</span><a href="/records">Career Records</a></span><span class="breadcrumbBar-module__XfGt9q__crumb"><span class="breadcrumbBar-module__XfGt9q__sep" aria-hidden="true">/</span><a href="/records/tours">Tours &amp; Live</a></span><span class="breadcrumbBar-module__XfGt9q__sep" aria-hidden="true">/</span><span aria-current="page" class="breadcrumbBar-module__XfGt9q__current">Where He&#x27;s Performed</span></div></nav>`,
    );
    expect(SHIPPED.querySelector('[data-provenance="p1"]')).toBeNull();
  });

  it("a P1 at its own 44px in the bar would make it 69px", () => {
    expect(12 + 44 + 12 + 1).toBe(69);
    expect(12 + 44 + 12 + 1).not.toBe(49);
  });

  it("the canvas's label 'How we verify ↗' is not fix 29's", () => {
    // Proof.dc.html §5, every tours hero's P1, as drawn.
    expect(Object.values(METHOD_LABEL)).not.toContain("How we verify");
    for (const doc of DOCS.values()) expect(words(doc.body)).not.toContain("How we verify");
  });
});

// ── J1-12 (fix 24): the box-office heroes ────────────────────────────────
describe("J1-12: P1 under the revenue and countries heroes", () => {
  const GROSS: [string, () => ReactElement | Promise<ReactElement>][] = [
    ["/records/tours/revenue", RevenuePage],
    ["/records/tours/revenue/countries", RevenueCountriesPage],
  ];
  const GROSS_DOCS = new Map<string, Document>();
  beforeAll(async () => {
    for (const [route, C] of GROSS) GROSS_DOCS.set(route, await render(C));
  });

  it("the spec: TouringData (Billboard Boxscore, Pollstar), 'Read' on REVENUE_READ_ON, the page's own method, Open data", () => {
    expect(revenueP1()).toEqual({
      sources: [`${REVENUE_PUBLISHERS[0]} (${REVENUE_PUBLISHERS.slice(1).join(", ")})`],
      date: { label: "Read", day: REVENUE_READ_ON },
      method: "#method",
      openData: "/api/v1/tours",
    });
    expect(revenueP1().sources[0]).toBe("TouringData (Billboard Boxscore, Pollstar)");
  });

  it.each(GROSS)("%s: one P1 per layout, 'Read' on REVENUE_READ_ON, never 'as of'", (route) => {
    const doc = GROSS_DOCS.get(route)!;
    for (const layout of ["desktop", "phone"] as const) {
      const p1s = inLayout(doc, '[data-provenance="p1"]', layout);
      expect(p1s, layout).toHaveLength(1);
      const date = p1s[0].querySelector("[data-provenance-date]")!;
      expect(words(date), layout).toMatch(/^Read \d{1,2} [A-Z][a-z]{2} \d{4}$/);
      expect(date.querySelector("time")!.getAttribute("datetime"), layout).toBe(REVENUE_READ_ON);
      expect(words(p1s[0]), layout).not.toMatch(/as of/i);
      const how = p1s[0].querySelector("a[data-provenance-method]")!;
      expect(how.getAttribute("href"), layout).toBe(layout === "desktop" ? "#method" : "#m-method");
      expect(doc.getElementById(how.getAttribute("href")!.slice(1))?.getAttribute("data-provenance"), layout).toBe("p3");
    }
    const [d] = inLayout(doc, '[data-provenance="p1"]', "desktop");
    expect(words(d.querySelector("[data-provenance-sources]"))).toBe("Source TouringData (Billboard Boxscore, Pollstar)");
    expect(d.querySelector('a[href="/api/v1/tours"]')).not.toBeNull();
    const [p] = inLayout(doc, '[data-provenance="p1"]', "phone");
    expect(words(p.querySelector("[data-provenance-sources]"))).toBe("Source: TouringData (Billboard Boxscore, Pollstar)");
    expect(p.querySelector('a[href^="/api/"]')).toBeNull();
  });

  it.each(GROSS)("%s: the P1 is the hero's last child; the hero's own text is unchanged", (route) => {
    const doc = GROSS_DOCS.get(route)!;
    for (const layout of ["desktop", "phone"] as const) {
      const [p1] = inLayout(doc, '[data-provenance="p1"]', layout);
      const hero = p1.parentElement!;
      expect(hero.lastElementChild, `${route} ${layout}`).toBe(p1);
      // the hero still holds its own h1 (desktop) or figures (phone), above the P1
      expect(hero.querySelector(layout === "desktop" ? "h1, [class*='heroBtns']" : "[class*='figs']"), `${route} ${layout}`).not.toBeNull();
    }
    // The desktop hero's text without the P1 is the approved hero's: its
    // buttons are the last thing before the P1.
    const [d] = inLayout(doc, '[data-provenance="p1"]', "desktop");
    expect(d.previousElementSibling!.className).toMatch(/heroBtns/);
  });

  it("every P1 slot outweighs the component's own .p1 { margin: 0 }, whatever order the sheets load in", () => {
    // In next dev the two sheets' order differs from page to page: a single
    // .p1Slot (0,1,0) lost to .p1 (0,1,0) on five of the seven heroes, and
    // their P1s sat flush under the buttons (measured 14 Oct 2026). Every
    // sheet in app/ that places a P1, not a list: the review found the phone
    // home's single .p1Slot at 0px, outside the seven tours-family sheets.
    const SLOTS = (readdirSync(join(ROOT, "app"), { recursive: true }) as string[])
      .filter((f) => f.endsWith(".module.css"))
      .map((f) => join("app", f))
      .filter((f) => rules(read(join(ROOT, f))).some((r) => /\bp1Slot\b/.test(r.selector)));
    for (const f of [
      "app/records/tours/tours.module.css",
      "app/records/tours/festivals/festivals.module.css",
      "app/components/mobileTours.module.css",
      "app/components/mobileFestivals.module.css",
      "app/components/mobileTourMap.module.css",
      "app/records/tours/revenue/revenue.module.css",
      "app/components/mobileRevenue.module.css",
      "app/components/mobileHome.module.css",
    ])
      expect(SLOTS).toContain(f);
    for (const f of SLOTS) {
      const slot = rules(read(join(ROOT, f))).filter((r) => /\bp1Slot\b/.test(r.selector));
      expect(slot.map((r) => r.selector), f).toEqual([".p1Slot.p1Slot"]);
      // A top margin, alone or first in the shorthand (phone /about: "10px 18px 0").
      expect(decl(slot[0].body, "margin-top") ?? decl(slot[0].body, "margin"), f).toMatch(/^\d+px(\s|$)/);
    }
    // negative controls: the single class this replaced, and the phone home's
    // as the review read it (mobileHome.module.css on f0810e2a, verbatim)
    expect(rules(".p1Slot { margin-top: 16px; }").map((r) => r.selector)).not.toEqual([".p1Slot.p1Slot"]);
    expect(rules(".p1Slot { margin-top: 6px; }").map((r) => r.selector)).not.toEqual([".p1Slot.p1Slot"]);
  });

  it("negative control: the response's month-only 'as of Oct 2026' (REVENUE_AS_OF) is not the P1's date", () => {
    // design-response-design-review-1008.md, "The tours family": "The gross
    // pages use their REVENUE_AS_OF ("as of Oct 2026")" — fix 24 makes it Read {day}.
    const RESPONSE = "As of Oct 2026";
    for (const doc of GROSS_DOCS.values())
      for (const p1 of doc.querySelectorAll('[data-provenance="p1"]')) expect(words(p1.querySelector("[data-provenance-date]"))).not.toBe(RESPONSE);
  });
});
