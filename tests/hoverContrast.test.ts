import { describe, it, expect } from "vitest";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { decl, read, rules } from "./fixtures/cssRules";
import { THEMES, tokenContrast } from "./fixtures/tokenColours";

/**
 * Job 0 · J0-12 (design review 8 Oct 2026, panel 7; J0-Q2 approved): hover
 * and pressed.
 *  - No gold washes on hover or press.
 *  - A plain surface presses to --bg-raised (rule 25).
 *  - A surface that carries gold, ember or --dim text presses to --hover
 *    instead, for hover and pressed alike: on paper gold, ember and --dim all
 *    drop under 4.5:1 on --bg-raised (4.14 / 4.18 / 4.18) and hold on --hover
 *    (4.62 / 4.67 / 4.66). In dark --hover is --bg-raised.
 *  - --dim text on a hoverable surface becomes --text-muted: in dark --dim is
 *    4.22:1 on any hover surface.
 *
 * Exempt, by the owner's default (PROMPT-DESIGN-REVIEW-1008, fix-round
 * housekeeping): the approved home scoreboard hover (#238, a 7% gold wash and
 * gold numerals). The exemption is asserted to still exist and still carry
 * its gold, so it cannot outlive the design it protects.
 */

const GOLD = /--gold|--color-accent|--display-ramp|--floor-|255,\s*182,\s*39|148,\s*94,\s*0|#945e00|#ffb627/i;
const STATE = /:hover|:active|\.resultActive/;

const cssUnder = (dir: string): string[] =>
  readdirSync(join(process.cwd(), dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? cssUnder(`${dir}/${e.name}`) : e.name.endsWith(".css") ? [`${dir}/${e.name}`] : [],
  );
const norm = (s: string) => s.split(",").map((x) => x.replace(/\s+/g, " ").trim()).join(", ");
/** Every state rule painting a gold background: file::selector -> the background values. */
function goldStateBackgrounds(files: string[], src: (f: string) => string = read): Map<string, string[]> {
  const out = new Map<string, string[]>();
  for (const f of files)
    for (const r of rules(src(f))) {
      if (!STATE.test(r.selector)) continue;
      const bgs = r.body
        .split(";")
        .map((d) => d.trim())
        .filter((d) => /^background(-color|-image)?\s*:/.test(d) && GOLD.test(d));
      if (bgs.length) out.set(`${f}::${norm(r.selector)}`, bgs);
    }
  return out;
}
const bodiesOf = (file: string, sel: string) => rules(read(file)).filter((r) => norm(r.selector) === norm(sel));
const bg = (body: string) => decl(body, "background") ?? decl(body, "background-color");

/** #238: the approved home scoreboard hover. Desktop only; nothing else. */
const EXEMPT_238 = ["app/page.module.css::.scoreCell:hover"];

/** Gold backgrounds on a state that are not a wash, each for its reason. */
const NOT_A_WASH: Record<string, string> = {
  "app/afrobeats/[artist]/artist.module.css::.chartCta:hover .chartCtaArrow": "the page's one action: its arrow chip fills gold",
  "app/components/StatCardMaker.module.css::.primary:hover": "the page's one action (Download PNG) brightens",
  "app/compare/compare.module.css::.switch:hover .dotOn": "a switch's on-track: a state, not the action (fix 72)",
  "app/components/certSwitches.module.css::.switch:hover .dotOn": "a switch's on-track: a state, not the action (fix 72)",
  "app/components/BackToTop.module.css::.btn:hover": "chrome: the floating back-to-top control",
  "app/records/charts/charts.module.css::.table tbody tr.rowOne:hover":
    "the No. 1 row's resting data wash, held under the pointer (no extra gold)",
};


// Surfaces that carry gold, ember or --dim text: they hover and press to --hover.
const TO_HOVER: [string, string][] = [
  ["app/globals.css", "summary:hover"],
  ["app/globals.css", ".btnGhost:hover"],
  ["app/globals.css", ".btnGhost:active"],
  ["app/globals.css", ".tableBase tbody tr:hover"],
  ["app/certifications/certifications.module.css", ".certRow:hover"],
  ["app/components/SearchPalette.module.css", ".resultActive"],
  ["app/components/mobileCerts.module.css", ".row:hover"],
  ["app/components/mobileCerts.module.css", ".row:active"],
  ["app/components/statCardButton.module.css", ".iconBtn:hover"],
  ["app/music/music.module.css", ".songCard:hover"],
  // its label turns gold under the pointer (it sat on a 6% ink wash: 4.39:1 on paper)
  ["app/globals.css", ".btnSecondary:hover"],
  ["app/records/awards/awards.module.css", ".moreBodies:hover"],
  ["app/records/by-the-numbers/byTheNumbers.module.css", ".stat:hover"],
  ["app/records/cars/[car]/car.module.css", "a.source:hover"],
  ["app/records/charts/charts.module.css", ".row:hover"],
  ["app/records/records.module.css", ".card:hover"],
  ["app/records/tours/tours.module.css", ".tourRowOpen:hover"],
  ["app/timeline/timeline.module.css", ".entryLinked:hover"],
  ["app/api/api.module.css", ".endpoint:hover"],
  ["app/updates/updates.module.css", ".row:hover"],
  ["app/components/onThisDayBand.module.css", ".row:hover"],
  ["app/on-this-day/onThisDay.module.css", ".row:hover"],
  ["app/on-this-day/onThisDay.module.css", ".row:active"],
  ["app/components/mobileOnThisDay.module.css", ".dayRow:active"],
  ["app/components/tourMapCard.module.css", ".linkRow:hover"],
  ["app/components/tourMapPanel.module.css", ".linkRow:active"],
  ["app/components/mobileTours.module.css", ".roadRow:hover, .roadRow:active"],
  ["app/press/press.module.css", ".figure:hover"],
  ["app/components/mobilePress.module.css", ".tile:active"],
  ["app/records/tours/tours.module.css", ".jumpCard:hover"],
  ["app/records/tours/tours.module.css", ".jumpCardAlt:hover"],
  ["app/records/tours/festivals/festivals.module.css", ".mapLink:hover"],
  ["app/components/mobileFestivals.module.css", ".mapLink:hover, .mapLink:active"],
  ["app/records/cars/cars.module.css", ".carRow:hover"],
  ["app/components/worldMap.module.css", ".zoomBtn:hover:not(:disabled)"],
  ["app/components/DaiDaiConquest.module.css", ".fold:hover"],
];
// Plain surfaces: they press to --bg-raised.
const TO_RAISED: [string, string][] = [
  ["app/globals.css", 'button[class*="hip"]:active, button[aria-pressed]:active'],
  ["app/certifications/certifications.module.css", ".yearBtn:hover"],
  ["app/components/mobileDeepPage.module.css", ".rowLink:active"],
  ["app/components/mobileDeepPage.module.css", ".tile:active"],
  ["app/components/mobileHome.module.css", ".stat:hover"],
  ["app/components/mobileHome.module.css", ".stat:active"],
  ["app/components/mobileTabBar.module.css", ".tab:active"],
  ["app/contact/contact.module.css", ".channel:hover"],
  ["app/live-charts/liveCharts.module.css", ".summary:hover .caret"],
  ["app/music/listeners/listeners.module.css", ".table tbody tr:hover td"],
  ["app/music/listeners/listeners.module.css", ".cityRow:hover"],
  ["app/page.module.css", ".boardCell:hover"],
  ["app/page.module.css", ".albumCard:hover"],
  // /music's album wall and wide cards: their track counts are ink (J0-1), so no gold sits on them
  ["app/music/music.module.css", ".albumCard:hover"],
  ["app/music/music.module.css", ".wideCard:hover"],
  ["app/records/awards/awards.module.css", ".row:hover"],
  ["app/records/charts/charts.module.css", ".table tbody tr:hover"],
  ["app/records/firsts/firsts.module.css", ".row:hover"],
  ["app/records/records.module.css", ".headlineCell:hover"],
  ["app/records/tours/festivals/festivals.module.css", ".countCell:hover"],
  ["app/timeline/timeline.module.css", ".todayCell:hover"],
  // the masthead's search pill (Job 0's last commit): its label is muted, not gold
  ["app/components/SearchPalette.module.css", ".trigger:hover"],
];
// --dim text on a hoverable surface: --text-muted.
const DIM_TO_MUTED: [string, string][] = [
  ["app/records/by-the-numbers/byTheNumbers.module.css", ".proof"],
  ["app/records/tours/revenue/revenue.module.css", ".showRank"],
  ["app/records/tours/revenue/countries/countries.module.css", ".ladderPos"],
  ["app/records/tours/revenue/countries/countries.module.css", ".indexVal"],
  ["app/records/tours/revenue/countries/countries.module.css", ".rank"],
  ["app/components/mobileRevenueCountries.module.css", ".ladderPos"],
  ["app/components/mobileRevenueCountries.module.css", ".rank"],
  ["app/records/tours/tours.module.css", ".grossNone"],
  ["app/components/mobileDeepPage.module.css", ".tileRank"],
  ["app/records/cars/cars.module.css", ".tileNaira"],
  ["app/components/mobileTours.module.css", ".grossNone"],
  // Africa's Biggest "Source ▾": a summary, which presses to --hover (globals summary:hover)
  ["app/records/africas-biggest/africas-biggest.module.css", ".sourceSummary"],
];

describe("J0-12: no gold wash on hover or press", () => {
  const found = goldStateBackgrounds(cssUnder("app"));

  it("every gold background on a hover, pressed or active state is the #238 exemption or a named non-wash", () => {
    const allowed = new Set([...EXEMPT_238, ...Object.keys(NOT_A_WASH)]);
    const off = [...found.keys()].filter((k) => !allowed.has(k));
    expect(off, "a hover or pressed surface is never a gold wash: use --bg-raised, or --hover where it carries gold").toEqual([]);
  });

  it("each listed exception still exists, so the list cannot go stale", () => {
    for (const k of [...EXEMPT_238, ...Object.keys(NOT_A_WASH)]) expect([...found.keys()], k).toContain(k);
  });

  it("#238 stays as built: the 7% wash and the gold numerals under the pointer", () => {
    const [cell] = bodiesOf("app/page.module.css", ".scoreCell:hover");
    expect(bg(cell.body)).toBe("var(--color-accent-100)");
    const value = bodiesOf("app/page.module.css", ".scoreCell:hover .scoreValue")[0].body;
    expect(decl(value, "color")).toBe("var(--gold)");
    expect(decl(value, "-webkit-text-fill-color")).toBe("var(--gold)");
    // and only the desktop: the phone twin predates #238 and is not exempt
    expect(bg(bodiesOf("app/components/mobileHome.module.css", ".stat:hover")[0].body)).toBe("var(--bg-raised)");
  });

  it("the No. 1 row's hold is its resting wash, not a stronger one", () => {
    const rest = bg(bodiesOf("app/records/charts/charts.module.css", ".rowOne")[0].body);
    const held = bg(bodiesOf("app/records/charts/charts.module.css", ".table tbody tr.rowOne:hover")[0].body);
    expect(held).toBe(rest);
  });
});

describe("J0-12: the split — --hover where the surface carries gold, ember or --dim; --bg-raised elsewhere", () => {
  it.each(TO_HOVER)("%s %s -> --hover", (file, sel) => {
    const rs = bodiesOf(file, sel).filter((r) => bg(r.body) !== undefined);
    expect(rs.length, `${file} ${sel}`).toBeGreaterThan(0);
    for (const r of rs) expect(bg(r.body)).toBe("var(--hover)");
  });

  it.each(TO_RAISED)("%s %s -> --bg-raised", (file, sel) => {
    const rs = bodiesOf(file, sel).filter((r) => bg(r.body) !== undefined && bg(r.body) !== "none");
    expect(rs.length, `${file} ${sel}`).toBeGreaterThan(0);
    for (const r of rs) expect(bg(r.body)).toBe("var(--bg-raised)");
  });

  it.each(DIM_TO_MUTED)("%s %s: --dim -> --text-muted", (file, sel) => {
    const rs = bodiesOf(file, sel).filter((r) => decl(r.body, "color") !== undefined);
    expect(rs.length, `${file} ${sel}`).toBeGreaterThan(0);
    for (const r of rs) expect(decl(r.body, "color")).toBe("var(--text-muted)");
  });

  it("the selected year tab keeps its ink fill under the pointer and while pressed", () => {
    const css = "app/certifications/certifications.module.css";
    expect(bg(bodiesOf(css, ".yearBtnOn:hover")[0].body)).toBe("var(--text)");
    expect(bg(bodiesOf(css, ".yearBtn.yearBtnOn:active")[0].body)).toBe("var(--text)");
    // the unselected tab's hover edge is ink, no longer gold
    expect(decl(bodiesOf(css, ".yearBtn:hover")[0].body, "border-color")).toBe("var(--text)");
  });
});

describe("J0-12: the ratios behind the split, computed from the tokens", () => {
  it("on paper, gold, ember and --dim fail on --bg-raised and hold on --hover", () => {
    for (const ink of ["--gold", "--ember", "--dim"]) {
      expect(tokenContrast(ink, "--bg-raised", "light"), `${ink} on --bg-raised`).toBeLessThan(4.5);
      expect(tokenContrast(ink, "--hover", "light"), `${ink} on --hover`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("in dark --dim fails on any hover surface, which is why it becomes --text-muted", () => {
    expect(tokenContrast("--dim", "--hover", "dark")).toBeLessThan(4.5);
    for (const t of THEMES)
      for (const s of ["--hover", "--bg-raised"]) expect(tokenContrast("--text-muted", s, t), `${s} ${t}`).toBeGreaterThanOrEqual(4.5);
  });

  it("gold and ember hold on --hover in dark too", () => {
    for (const ink of ["--gold", "--ember"]) expect(tokenContrast(ink, "--hover", "dark")).toBeGreaterThanOrEqual(4.5);
  });
});

describe("J0-12 negative controls: the shipped washes fail", () => {
  it("/records' card hover and the tab bar's pressed tab, as shipped (d3c39eda)", () => {
    const shipped: Record<string, string> = {
      "records.module.css": `.card:hover { border-color: var(--gold); background: color-mix(in srgb, var(--gold-wash-base) calc(5% * var(--wash-strength)), transparent); }`,
      "mobileTabBar.module.css": `.tab:active { background: rgba(255, 182, 39, 0.08); }`,
    };
    const hits = goldStateBackgrounds(Object.keys(shipped), (f) => shipped[f]);
    expect([...hits.keys()].sort()).toEqual(["mobileTabBar.module.css::.tab:active", "records.module.css::.card:hover"]);
  });

  it("the masthead search pill's hover, as shipped (d3c39eda), is caught", () => {
    const shipped = `.trigger:hover {
  border-color: var(--gold-dim);
  color: var(--text);
  background: color-mix(in srgb, var(--gold-wash-base) calc(6% * var(--wash-strength)), transparent);
}`;
    expect([...goldStateBackgrounds(["SearchPalette.module.css"], () => shipped).keys()]).toEqual(["SearchPalette.module.css::.trigger:hover"]);
  });

  it("a hover edge is not a wash: a gold border on hover alone passes the scan", () => {
    const hits = goldStateBackgrounds(["x.css"], () => `.chip:hover { border-color: var(--gold); }`);
    expect(hits.size).toBe(0);
  });
});
