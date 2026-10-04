import { describe, it, expect, vi, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, cleanup, act } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue/countries",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CountriesPage from "../app/records/tours/revenue/countries/page";
import JumpSpy from "../app/components/JumpSpy";
import * as og from "../app/records/tours/revenue/countries/opengraph-image";
import { SOURCE_LINE } from "../app/components/RevenueCountries";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { REVENUE_AS_OF, REVENUE_SOURCE } from "../app/lib/revenueSource";
import { pct } from "../app/lib/showsChips";
import {
  CONTINENT_ORDER,
  continentAnchor,
  countryAnchor,
  heroFigures,
  ladderRows,
  leadsOnTotal,
  nightsLabel,
  revenueByCountry,
  usdFull,
  usdM,
} from "../app/lib/revenueByCountry";
import { declaredAt, text, trees } from "./fixtures/phoneTrees";

/**
 * Highest-Grossing Artists by Country, the new design — Claude Design round 1
 * (4 Oct 2026), Job 1 ("ranked bars"), built with the review's fixes 1–10 and
 * the owner's rulings Q1 and N4. One block per new behaviour, each with a
 * negative control taken from a string the site or the canvas actually
 * carried. Africa and South America (Q1) are in tests/revenueCountriesPage;
 * gold on his figures in tests/goldMarksHisRows; the helpers in
 * tests/revenueByCountry.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const DESK_CSS = read("app/records/tours/revenue/countries/countries.module.css");
const PHONE_OWN = read("app/components/mobileRevenueCountries.module.css");
const PHONE_CSS = read("app/components/mobileRevenue.module.css");
const html = renderToStaticMarkup(<CountriesPage />);
const page = trees(html);
const board = revenueByCountry();
const hero = heroFigures(board);
const both = () => [
  ["phone", page.phone!],
  ["desktop", page.desktop!],
] as const;

// ── The hero ────────────────────────────────────────────────────────────────
describe("the hero: total, nights, continents, the countries he leads, his share — derived", () => {
  it("both layouts print the board's own figures", () => {
    for (const [, tree] of both()) {
      const t = text(tree);
      expect(t).toContain(usdM(board.grandTotal));
      expect(t).toContain(`${board.hisLeads} of ${board.countryCount}`);
      expect(t).toContain(pct(hero.hisShare));
      expect(t).toContain(usdM(hero.hisTotal));
      expect(t).toContain(String(board.showCount));
    }
    expect(text(page.desktop!)).toContain(`Countries · ${board.continentCount} of ${CONTINENT_ORDER.length} continents`);
    expect(text(page.phone!)).toContain(`${board.continentCount} of ${CONTINENT_ORDER.length}Continents`);
    expect(text(page.desktop!)).toContain(`${usdM(hero.othersTotal)} · ${hero.otherArtists} other artists`);
  });

  it("“9 of 12” and his share are gold; the total and the nights are ink", () => {
    for (const [, tree] of both()) {
      const vals = [...tree.querySelectorAll('[class*="figValue"]')];
      const leads = vals.find((v) => text(v) === `${board.hisLeads} of ${board.countryCount}`)!;
      expect(leads.className).toMatch(/figHis/);
      const nights = vals.find((v) => text(v) === String(board.showCount))!;
      expect(nights.className).not.toMatch(/figHis/);
    }
  });

  it("negative control: no hero figure is typed into the source", () => {
    for (const f of ["app/components/RevenueCountries.tsx", "app/components/MobileRevenueCountries.tsx", "app/records/tours/revenue/countries/page.tsx"]) {
      // The canvas's figures: GXCountriesDesk / GXCountriesPhone, rendered.
      expect(read(f), f).not.toMatch(/\b(9 of 12|65\.3%|68\.87|4 of 6)\b/);
    }
  });
});

describe("fix 3: the lede says verified", () => {
  it("the desktop lede", () => {
    expect(text(page.desktop!)).toContain(
      "Every verified, reported box-office gross by an African artist, added up country by country. Bars are each country’s total; the gold part is Burna Boy’s.",
    );
  });
  it("negative control: the canvas's lede claimed every reported gross", () => {
    // GXCountriesDesk.dc.html:46, verbatim.
    expect(text(page.desktop!)).not.toContain("Every reported box-office gross by an African artist, added up country by country.");
  });
});

// ── The ladder ──────────────────────────────────────────────────────────────
describe("the country ladder: every country, its leader named, each bar a jump link", () => {
  const ladders = () =>
    both().map(([w, tree]) => [w, [...tree.querySelectorAll('a[class*="ladderRow"]')]] as const);

  it("one row per country, in order, each naming its leader in the same place — his too (fix 5)", () => {
    const rows = ladderRows(board);
    for (const [w, links] of ladders()) {
      expect(links.length, w).toBe(board.countryCount);
      links.forEach((a, i) => {
        expect(text(a.querySelector('[class*="ladderName"]')), w).toBe(`${rows[i].flag}${rows[i].name}`.replace(/\s+/g, " "));
        expect(text(a.querySelector('[class*="ladderLeader"]')), w).toBe(rows[i].leader);
        expect(text(a.querySelector('[class*="ladderTotal"]')), w).toBe(usdM(rows[i].total));
      });
    }
  });

  it("each bar jumps to its country's block on the same layout", () => {
    for (const [w, links] of ladders()) {
      for (const a of links) {
        const id = a.getAttribute("href")!.slice(1);
        const target = page.d.getElementById(id);
        expect(target, `${w} ${id}`).not.toBeNull();
        const tree = w === "phone" ? page.phone! : page.desktop!;
        expect(tree.contains(target), `${w} ${id} sits in the other layout`).toBe(true);
      }
    }
  });

  it("the bar is linear against the largest country, his part gold, a 2px ground gap between parts", () => {
    const rows = ladderRows(board);
    for (const [, links] of ladders())
      links.forEach((a, i) => {
        const fill = a.querySelector('[class*="ladderFill"]') as HTMLElement;
        expect(parseFloat(fill.style.width)).toBeCloseTo(100 * rows[i].w, 2);
        const his = fill.querySelector('[class*="segHis"]') as HTMLElement | null;
        if (rows[i].his > 0) expect(parseFloat(his!.style.width)).toBeCloseTo(100 * rows[i].his, 2);
        else expect(his).toBeNull();
      });
    for (const [css, sel] of [[DESK_CSS, ".ladderFill"], [PHONE_OWN, ".ladderFill"], [DESK_CSS, ".countryBar"], [PHONE_OWN, ".splitBar"], [DESK_CSS, ".heroBar"], [PHONE_OWN, ".contBar"], [DESK_CSS, ".cardBar"]] as const)
      expect(declaredAt(css, sel, "gap", 1440), sel).toBe("2px");
    expect(declaredAt(DESK_CSS, ".seg", "background", 1440)).toBe("var(--other)");
    expect(declaredAt(DESK_CSS, ".segHis", "background", 1440)).toBe("var(--gold-fill)");
    expect(declaredAt(PHONE_CSS, ".seg", "background", 390)).toBe("var(--other)");
  });

  it("negative control: the canvas's ladder row named no artist (Japan, the Philippines and Singapore were grey bars)", () => {
    // GXCountriesDesk.dc.html:79–82, the ladder row's four cells, verbatim.
    const canvasRow = `<span style="font:700 11px/1 'Space Mono',monospace;color:var(--dim);font-variant-numeric:tabular-nums">{{ c.rank }}</span>
                <span style="display:flex;align-items:center;gap:8px;min-width:0;font-size:13.5px;font-weight:600;white-space:nowrap"><span style="font-size:15px">{{ c.flag }}</span>{{ c.name }}</span>`;
    expect(canvasRow).not.toMatch(/leader|artist/);
    expect(ladderRows(board).filter((r) => r.his === 0).map((r) => r.leader)).toEqual(expect.arrayContaining(["Tyla"]));
  });
});

// ── Money ───────────────────────────────────────────────────────────────────
describe("fix 4: money under $1M prints thousands; one money form on each layout", () => {
  it("no “$0.xxM” anywhere, and the phone prints only the short form", () => {
    for (const [, tree] of both()) expect(text(tree)).not.toMatch(/\$0\.\d\dM/);
    // The phone's short form only: never full dollars, never the three-place
    // compact form the canvas used ("$15.495M", "$884.1K").
    const p = text(page.phone!.querySelector("main") ?? page.phone!).replace(SOURCE_LINE, "");
    expect(p).not.toMatch(/\$\d{1,3},\d{3}/);
    expect(p).not.toMatch(/\$\d+\.\d{3}M|\$\d+\.\dK/);
  });
  it("the phone's block head and its rows agree", () => {
    const us = board.countries.find((c) => c.name === "United States")!;
    const t = text(page.phone!);
    expect(t).toContain(`leads · ${usdM(us.leader.total)} of ${usdM(us.total)}`);
    expect(t).toContain(`Burna Boy${usdM(us.leader.total)}`);
  });
  it("the desktop prints the short form only too: hero, ladder, index, heads, rows and runs agree", () => {
    // The desktop's hero, ladder, continent cards and "Jump to" index print
    // "$26.92M"; since the 4 Oct review its heads, rows, runs and callouts do
    // as well (fix 4: one money form per screen).
    const d = text(page.desktop!).replace(SOURCE_LINE, "");
    expect(d).not.toMatch(/\$\d{1,3}(,\d{3})+/);
    expect(d).not.toMatch(/\$\d+\.\d{3}M|\$\d+\.\dK/);
    const us = board.countries.find((c) => c.name === "United States")!;
    const nav = page.desktop!.querySelector('nav[aria-label="Jump to a country"]')!;
    expect(text(nav)).toContain(`United States${usdM(us.total)}`);
    expect(d).toContain(`leads · ${usdM(us.leader.total)} of ${usdM(us.total)}`);
    expect(d).toContain(usdM(us.leader.total));
    expect(d).not.toContain(usdFull(us.total));
    // No full-dollar formatter left in the desktop component.
    expect(read("app/components/RevenueCountries.tsx")).not.toMatch(/usdFull/);
  });
  it("negative control: the desktop as this PR first built it printed two forms side by side", () => {
    // The 1440 build at 590cae87, verbatim: the index beside the US head.
    const shippedIndex = "United States$26.92M";
    const shippedHead = "$15,495,482 of $26,920,799";
    expect(shippedIndex).toMatch(/\$\d+\.\d\dM/);
    expect(shippedHead).toMatch(/\$\d{1,3}(,\d{3})+/);
    expect(text(page.desktop!)).not.toContain("$15,495,482 of $26,920,799");
    // And #408's desktop row (a7530590, RevenueCountries.tsx:70 and :91,
    // verbatim) mixed them inside one row: the best night short, the total full.
    const shippedRow = ["{usdM(a.best.revenue)} · {a.best.venue}", "{usdFull(a.total)}"];
    expect(shippedRow.join(" ")).toMatch(/usdM[\s\S]*usdFull/);
  });
  it("negative control: the canvas's phone row and head disagreed (the phone never shipped the compact form)", () => {
    // GXCountriesPhone: head "$15.50M", row "$15.495M" (B.compact).
    const us = board.countries.find((c) => c.name === "United States")!;
    expect(`$${(us.leader.total / 1e6).toFixed(3)}M`).toBe("$15.495M");
    expect(text(page.phone!)).not.toContain("$15.495M");
  });
});

// ── Rows ────────────────────────────────────────────────────────────────────
describe("fix 6: a one-artist country is a normal row", () => {
  const singles = board.countries.filter((c) => c.artists.length === 1);
  it("there are one-artist countries — otherwise this proves nothing", () => {
    expect(singles.length).toBeGreaterThan(0);
  });
  it.each(both())("%s: the head says “the only artist reported”; the row has rank 01, the artist, the best night, nights and total", (w, tree) => {
    const fmt = usdM;
    for (const c of singles) {
      const block = page.d.getElementById(countryAnchor(c.name, w === "phone"))!;
      const head = text(block.querySelector("h3")!.parentElement);
      expect(head).toContain(`${c.leader.artist} · the only artist reported · ${fmt(c.total)}`);
      const ranks = [...block.querySelectorAll('[class*="rank"]')].map((r) => text(r));
      expect(ranks).toEqual(["01"]);
      const a = c.artists[0];
      expect(text(block)).toContain(a.artist);
      if (a.best) expect(text(block)).toContain(a.best.venue);
      expect(text(block)).toContain(fmt(a.total));
      // One border per block: no split bar for a single artist.
      expect(block.querySelector('[role="img"]')).toBeNull();
      expect(tree.contains(block)).toBe(true);
    }
  });
  it("negative control: the canvas's one-artist block put the h3 inside the table, with no rank", () => {
    // GXCountriesDesk.dc.html:178–184, the S3 frame, rendered.
    const shipped = new DOMParser().parseFromString(
      `<div role="table" aria-label="Japan: Tyla, the only artist reported"><h3>Japan</h3><span role="cell">Tyla · the only artist reported</span></div>`,
      "text/html",
    );
    expect(shipped.querySelector('[role="table"] h3')).not.toBeNull();
    expect(page.desktop!.querySelector('[role="table"] h3')).toBeNull();
  });
});

describe("fix 7: “1 night”, his best night gold on both layouts, the callout names the leader", () => {
  it.each(both())("%s: never “1 nights”", (_w, tree) => {
    expect(text(tree)).not.toMatch(/\b1 nights\b/);
    expect(nightsLabel(1)).toBe("1 night");
  });
  it.each(both())("%s: one gold best night per row of his that has one", (_w, tree) => {
    const his = board.countries.reduce((n, c) => n + c.artists.filter((a) => a.his && a.best).length, 0);
    expect(tree.querySelectorAll('[class*="bestHis"]').length).toBe(his);
    for (const el of tree.querySelectorAll('[class*="bestFig"]:not([class*="bestHis"])')) expect(text(el)).not.toBe("");
  });
  it.each(both())("%s: the Canada callout names the leader", (w, tree) => {
    const canada = board.countries.find((c) => c.name === "Canada")!;
    const line = leadsOnTotal(canada, usdM, w === "desktop" ? "desk" : "phone");
    if (line) {
      expect(text(tree)).toContain(`Leads on total${line}`);
      expect(line).toContain(canada.leader.artist);
    }
  });
  it("negative control: the canvas's phone row said “1 nights” and its callout said “his”", () => {
    // GXCountriesPhone.dc.html:128 and :193.
    const shippedRow = `${1} nights · best $1.003M · 12,901 tickets`;
    expect(shippedRow).toMatch(/\b1 nights\b/);
    const shippedCallout = "2 runs are $4.706M of his $5.684M. Asake has the biggest single night, $917.0K.";
    expect(shippedCallout).toMatch(/\bhis\b/);
    expect(text(page.phone!)).not.toContain(shippedCallout);
  });
});

// ── N4: his name in ink ─────────────────────────────────────────────────────
describe("N4: his name is set like every other name, on both layouts", () => {
  it.each(both())("%s: no element that prints his name carries a gold or his-only class", (_w, tree) => {
    const names = [...tree.querySelectorAll("span, div")].filter((e) => e.children.length === 0 && text(e) === "Burna Boy");
    expect(names.length).toBeGreaterThan(board.hisLeads);
    for (const n of names) expect(n.className, n.outerHTML).not.toMatch(/His|gold/i);
  });
  it("the phone's name class is ink", () => {
    expect(declaredAt(PHONE_OWN, ".leadName", "color", 390)).toBe("var(--text)");
    expect(declaredAt(DESK_CSS, ".leadName", "color", 1440)).toBe("var(--text)");
  });
  it("negative control: the phone lead line as #408 shipped it (a7530590) lit his name", () => {
    // MobileRevenueCountries.tsx and mobileRevenueCountries.module.css at a7530590, verbatim.
    const shipped = `<span className={c.leader.his ? own.leadHis : own.leadOther}>{c.leader.artist}</span>`;
    const shippedCss = ".leadHis { color: var(--gold); font-weight: 600; }";
    expect(shipped).toMatch(/leadHis[^}]*\}>\{c\.leader\.artist\}/);
    expect(declaredAt(shippedCss, ".leadHis", "color", 390)).toBe("var(--gold)");
    expect(read("app/components/MobileRevenueCountries.tsx")).not.toMatch(/leadHis[^<]*\}>\{(c\.leader|L|k\.leader!?)\.artist\}/);
  });
});

describe("N4: his desktop rows carry no wash — the row is clear but for hover", () => {
  it("no desktop row of his carries a his-only class, and the shared sheet no longer declares one", () => {
    const rows = [...page.desktop!.querySelectorAll('[role="row"]')];
    const his = rows.filter((r) => [...r.children].some((c) => text(c) === "Burna Boy"));
    expect(his.length).toBeGreaterThanOrEqual(board.hisLeads);
    for (const r of rows) expect(r.className, text(r).slice(0, 40)).not.toMatch(/rowHis/);
    expect(read("app/records/tours/revenue/revenue.module.css")).not.toMatch(/\.rowHis\b/);
    expect(declaredAt(DESK_CSS, ".row", "background", 1440)).toBeUndefined();
  });
  it("negative control: the row as this PR first built it (590cae87) washed his rows gold", () => {
    // RevenueCountries.tsx:149 at 590cae87, verbatim, and the class it rendered.
    const shipped = "<div role=\"row\" className={`${own.row} ${a.his ? styles.rowHis : \"\"}`}>";
    expect(shipped).toMatch(/styles\.rowHis/);
    const rendered = new DOMParser().parseFromString(`<div role="row" class="row rowHis"><span>Burna Boy</span></div>`, "text/html");
    expect(rendered.querySelector('[role="row"]')!.className).toMatch(/rowHis/);
  });
});

describe("the run marker inside a row is the page's own (the shows page dropped its marker in #418)", () => {
  it("both sheets draw the pill, and every run prints one", () => {
    for (const [css, w] of [[DESK_CSS, 1440], [PHONE_OWN, 390]] as const) {
      expect(declaredAt(css, ".runMarker", "border-radius", w)).toBe("999px");
      expect(declaredAt(css, ".runMarker", "border", w)).toBe("1px solid var(--btn-edge)");
    }
    const runs = board.countries.reduce((n, c) => n + c.artists.reduce((m, a) => m + a.stands.length, 0), 0);
    expect(runs).toBeGreaterThan(0);
    for (const [, tree] of both()) expect(tree.querySelectorAll('[class*="runMarker"]:not([class*="runMarkerBars"])').length).toBe(runs);
  });
  it("negative control: the classes this page first borrowed are gone from the shared sheets", () => {
    // RevenueCountries.tsx at 590cae87, verbatim: the marker came from the shows sheet.
    const shipped = "<span className={styles.runMarker}>";
    expect(shipped).toMatch(/styles\.runMarker/);
    expect(declaredAt(read("app/records/tours/revenue/revenue.module.css"), ".runMarker", "border-radius", 1440)).toBeUndefined();
    expect(declaredAt(PHONE_CSS, ".runMarker", "border-radius", 390)).toBeUndefined();
    for (const f of ["app/components/RevenueCountries.tsx", "app/components/MobileRevenueCountries.tsx"])
      expect(read(f), f).not.toMatch(/styles\.runMarker\b/);
  });
});

// ── Jump navigation ─────────────────────────────────────────────────────────
describe("item 3: the desktop “Jump to” index and the phone's continent rail", () => {
  it("desktop: every continent and every country, each link landing on its own block", () => {
    const nav = page.desktop!.querySelector('nav[aria-label="Jump to a country"]')!;
    expect(nav).not.toBeNull();
    const hrefs = [...nav.querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(hrefs).toEqual(
      board.continents.flatMap((k) => [`#${continentAnchor(k.continent)}`, ...k.countries.map((c) => `#${countryAnchor(c.name)}`)]),
    );
    for (const h of hrefs) expect(page.desktop!.querySelector(`[id="${h!.slice(1)}"]`), h!).not.toBeNull();
  });
  it("phone: one chip per continent, Africa and South America included, each landing on its section", () => {
    const nav = page.phone!.querySelector('nav[aria-label="Jump to a continent"]')!;
    const hrefs = [...nav.querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(hrefs).toEqual(board.continents.map((k) => `#${continentAnchor(k.continent, true)}`));
    for (const h of hrefs) expect(page.phone!.querySelector(`[id="${h!.slice(1)}"]`), h!).not.toBeNull();
  });
  it("no id is printed twice across the two layouts", () => {
    const ids = [...page.d.querySelectorAll("[id]")].map((e) => e.id);
    expect(ids.length).toBe(new Set(ids).size);
  });
  it("the phone rail is held under the back bar, below it in z; the desktop index is sticky beside the tables", () => {
    expect(declaredAt(PHONE_OWN, ".railStick", "position", 390)).toBe("sticky");
    expect(declaredAt(PHONE_OWN, ".railStick", "top", 390)).toBe("calc(69px + env(safe-area-inset-top, 0px))");
    expect(Number(declaredAt(PHONE_OWN, ".railStick", "z-index", 390))).toBeLessThan(Number(declaredAt(PHONE_CSS, ".backBar", "z-index", 390)));
    expect(declaredAt(DESK_CSS, ".index", "position", 1440)).toBe("sticky");
    expect(declaredAt(DESK_CSS, ".index", "display", 1024)).toBe("none");
  });
  it("the current place: an ember edge on desktop, the ember on-state on the phone — never a gold fill (N2)", () => {
    expect(DESK_CSS).toMatch(/\.indexLink\[aria-current\]\s*\{[^}]*box-shadow:\s*inset 2px 0 0 var\(--ember\)/);
    const on = /\.chip\[aria-current\]\s*\{([^}]*)\}/.exec(PHONE_OWN)![1];
    expect(on).toMatch(/border-color:\s*var\(--ember\)/);
    expect(on).not.toMatch(/--gold/);
    // One gold action on the phone screen: the action bar.
    expect(page.phone!.querySelectorAll('[class*="actionPrimary"]').length).toBe(1);
    expect(page.phone!.querySelectorAll(".btnPrimary").length).toBe(0);
  });
  it("focus: a 2px gold ring over a 2px ground gap", () => {
    expect(declaredAt(PHONE_OWN, ".chip:focus-visible", "box-shadow", 390)).toBe("0 0 0 2px var(--bg), 0 0 0 4px var(--gold)");
    const global = read("app/globals.css");
    expect(global).toMatch(/a:focus-visible,[\s\S]{0,200}\{\s*outline: 2px solid var\(--gold\);\s*outline-offset: 2px;/);
  });
  it("negative control: the badge as the page shipped it before C3 was the shared gold badge (fix 2)", () => {
    // MobileRevenueCountries.tsx at a88639e2 (live 3 Oct 2026), verbatim; the
    // canvas (GXCountriesPhone.dc.html:158) drew the same second gold, filled.
    const shipped = "<span className={`${styles.badge} ${own.barBadge}`}>{board.countryCount} countries</span>";
    expect(shipped).not.toMatch(/mutedBadge/);
    expect(declaredAt(PHONE_CSS, ".badge", "color", 390)).toBe("var(--gold)");
    const badge = page.phone!.querySelector('[class*="badge"]')!;
    expect(badge.className).toMatch(/mutedBadge/);
    expect(declaredAt(PHONE_OWN, ".mutedBadge.mutedBadge", "color", 390)).toBe("var(--text-muted)");
  });
});

describe("JumpSpy marks the place on screen", () => {
  afterEach(cleanup);
  it("the last target scrolled past the offset is current; scrolling moves it", async () => {
    document.body.innerHTML = `<div id="a"></div><div id="b"></div><div id="c"></div>`;
    const tops: Record<string, number> = { a: -400, b: 100, c: 900 };
    for (const id of ["a", "b", "c"])
      document.getElementById(id)!.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
    const { container } = render(
      <JumpSpy label="Jump to" offset={140}>
        <a href="#a">A</a>
        <a href="#b">B</a>
        <a href="#c">C</a>
      </JumpSpy>,
      { container: document.body.appendChild(document.createElement("div")) },
    );
    // jsdom has no layout: offsetParent is null for everything, so stand in a parent.
    const root = container.firstElementChild as HTMLElement;
    Object.defineProperty(root, "offsetParent", { get: () => document.body, configurable: true });
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    const cur = () => [...root.querySelectorAll("a")].filter((a) => a.getAttribute("aria-current") === "location").map((a) => a.textContent);
    expect(cur()).toEqual(["B"]);
    tops.c = 50;
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    expect(cur()).toEqual(["C"]);
  });
  it("at the foot of the page the last place on screen is current, though it never reached the offset", async () => {
    document.body.innerHTML = `<div id="p"></div><div id="q"></div>`;
    const tops: Record<string, number> = { p: -50, q: 600 };
    for (const id of ["p", "q"]) document.getElementById(id)!.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
    const { container } = render(
      <JumpSpy label="Jump to" offset={140}>
        <a href="#p">P</a>
        <a href="#q">Q</a>
      </JumpSpy>,
      { container: document.body.appendChild(document.createElement("div")) },
    );
    const root = container.firstElementChild as HTMLElement;
    Object.defineProperty(root, "offsetParent", { get: () => document.body, configurable: true });
    const doc = document.documentElement;
    const tick = async () =>
      act(async () => {
        window.dispatchEvent(new Event("scroll"));
        await new Promise((r) => requestAnimationFrame(() => r(null)));
      });
    // Mid-page: P, the last one scrolled past.
    Object.defineProperty(doc, "scrollHeight", { value: 5000, configurable: true });
    await tick();
    expect(root.querySelector('[aria-current="location"]')!.textContent).toBe("P");
    // At the foot: Q, on screen below the offset.
    Object.defineProperty(doc, "scrollHeight", { value: window.innerHeight + window.scrollY, configurable: true });
    await tick();
    expect(root.querySelector('[aria-current="location"]')!.textContent).toBe("Q");
  });
  it("negative control: with nothing scrolled past, the first is current — not none", async () => {
    document.body.innerHTML = `<div id="x"></div>`;
    document.getElementById("x")!.getBoundingClientRect = () => ({ top: 2000 }) as DOMRect;
    const { container } = render(
      <JumpSpy label="Jump to" offset={140}>
        <a href="#x">X</a>
      </JumpSpy>,
      { container: document.body.appendChild(document.createElement("div")) },
    );
    const root = container.firstElementChild as HTMLElement;
    Object.defineProperty(root, "offsetParent", { get: () => document.body, configurable: true });
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    });
    expect(root.querySelector("a")!.getAttribute("aria-current")).toBe("location");
  });
});

// ── Motion ──────────────────────────────────────────────────────────────────
describe("the bars grow 0.3s on first view; none under reduced motion", () => {
  it("both layouts' ladders and the share bar carry the grow class, on the site's slow duration", () => {
    for (const [css, sel] of [[DESK_CSS, ".grow"], [PHONE_OWN, ".grow"]] as const)
      expect(declaredAt(css, sel, "animation", 1440)).toMatch(/var\(--dur-slow\) var\(--ease-out\) both/);
    expect(read("app/globals.css")).toMatch(/--dur-slow:\s*0\.3s/);
    for (const [, tree] of both()) expect(tree.querySelectorAll('[class*="ladderFill"][class*="grow"]').length).toBe(board.countryCount);
  });
  it("the global reduced-motion switch takes every animation to its end", () => {
    expect(read("app/globals.css")).toMatch(/@media \(prefers-reduced-motion: reduce\)\s*\{\s*\*, \*::before, \*::after \{\s*animation-duration: 0\.001ms !important;/);
  });
});

// ── Source and words ────────────────────────────────────────────────────────
describe("the source line and the words", () => {
  it("the source line is REVENUE_SOURCE + “, as of ” + REVENUE_AS_OF on both layouts", () => {
    expect(SOURCE_LINE).toBe(`${REVENUE_SOURCE}, as of ${REVENUE_AS_OF}.`);
    for (const [, tree] of both()) expect(text(tree)).toContain(SOURCE_LINE);
  });
  it("negative control: the canvas typed its own source wordings", () => {
    // GXCountriesDesk.dc.html:307 and GXCountriesPhone's "Counts" row.
    for (const typed of [
      "Per-show gross box office reported by Billboard Boxscore and Pollstar, as TouringData republishes them",
      "Per-show grosses from Billboard Boxscore and Pollstar via TouringData, cross-checked with press",
    ])
      for (const [, tree] of both()) expect(text(tree)).not.toContain(typed);
  });
  it("gross, never “revenue”, in the page's words", () => {
    for (const [, tree] of both()) expect(text(tree)).not.toMatch(/\brevenue\b/i);
  });
  it("no row's source note reaches the page", () => {
    for (const r of [...revenueShows, ...revenueStands]) expect(html).not.toContain(r.source);
  });
});

// ── The share card ──────────────────────────────────────────────────────────
describe("items 8 / fix 10: the share card carries the ladder and names each leader", () => {
  it("is versioned from what it prints, and uses the ladder card", () => {
    const meta = og.generateImageMetadata();
    expect(meta).toHaveLength(1);
    expect(meta[0].id).toMatch(/^[a-z0-9]+$/);
    const src = read("app/records/tours/revenue/countries/opengraph-image.tsx");
    expect(src).toMatch(/ogLadder\(card\)/);
    expect(src).toMatch(/ogId\(`\$\{JSON\.stringify\(card\)\}/);
    // A data card: the id moves with the figures; the shared art version does not.
    expect(src.replace(/\/\/.*$/gm, "")).not.toMatch(/OG_ART/);
  });
  it("every row: the country, its leader as a muted note, his share of the bar", () => {
    const src = read("app/records/tours/revenue/countries/opengraph-image.tsx");
    expect(src).toMatch(/label: r\.name, note: r\.leader, w: r\.w, his: r\.his > 0, hisShare: r\.his/);
    const ogSrc = read("app/lib/og-image.tsx");
    expect(ogSrc).toMatch(/note\?: string/);
    expect(ogSrc).toMatch(/hisShare\?: number/);
  });
  it("negative control: the card the page shipped named only him, never another leader", () => {
    // opengraph-image.tsx at a534d98e (main before this PR): its whole text,
    // with the board's figures filled in. The canvas (GXOG.dc.html) labelled
    // its rows `${c.flag} ${c.name}` — no leader either (review fix 10).
    const shipped = `African artists · box office Highest-Grossing Artists by Country Who leads each of ${board.countryCount} countries for reported box office by African artists — Burna Boy leads ${board.hisLeads}`;
    const others = [...new Set(ladderRows(board).map((r) => r.leader))].filter((l) => l !== "Burna Boy");
    expect(others).toContain("Tyla");
    for (const l of others) expect(shipped).not.toContain(l);
    // Today's card carries a leader note on every row.
    expect(read("app/records/tours/revenue/countries/opengraph-image.tsx")).toMatch(/note: r\.leader/);
  });
});
