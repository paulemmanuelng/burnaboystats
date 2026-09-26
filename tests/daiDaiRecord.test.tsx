import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import { allChartItems, CHART_COUNTRIES, daiDaiChartEntryCount, daiDaiNumberOnes, weeksAtPeak, weeksOnChart } from "../app/data/charts";
import { daiDaiCertCount } from "../app/data/certifications";
import { DAI_DAI_OTHER_CHARTS, DAI_DAI_SPOTIFY_STREAMS, DAI_DAI_VIDEO_ID, DAI_DAI_VIDEO_VIEWS, daiDaiSpotifyStraightDays } from "../app/data/daiDai";
import { countryName, plaqueCountries } from "../app/components/DaiDaiRecord";
import { millonesCortoEs, millonesEs } from "../app/lib/plural";

/**
 * "The record" — the reference half of /dai-dai and /dai-dai/es, as the
 * redesign of 26 Sep 2026 draws it (design_handoff_burnaboystats/PROMPT-DAI-DAI.md,
 * commit 2; approved by Paul). The old card grid was counted by
 * daiDaiParity.test.ts and streakParity.test.ts; the cards are now a table and
 * ruled lists, and this file holds the new structure to the data it reads —
 * every lead figure, every table cell and every row — in both editions.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const dom = (el: React.ReactElement) => {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return host;
};
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const CSS = read("app/dai-dai/dai-dai.module.css");
const GRID_CSS = read("app/components/DaiDaiConquest.module.css");
/** The body of a top-level rule (the first one with that exact selector). */
const rule = (css: string, selector: string) => {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const at = src.indexOf(`\n${selector} {`);
  if (at < 0) return "";
  return src.slice(src.indexOf("{", at) + 1, src.indexOf("}", at));
};

const entries = allChartItems.find((r) => r.title === "Dai Dai")!.entries;
const countries = entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX");

const editions = [
  ["EN", DaiDaiPage, "en"],
  ["ES", DaiDaiPageES, "es"],
] as const;

describe("the record band breaks the story from the reference sections", () => {
  it.each(editions)("%s: sits after the story's end and before the lineup", (_, Page) => {
    const d = dom(<Page />);
    const band = d.querySelector('[class*="band"]');
    expect(band, "no record band").not.toBeNull();
    const end = d.querySelector("[data-dd-story-end]")!;
    const lineup = d.querySelector("#dd-lineup")!;
    expect(end.compareDocumentPosition(band!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(band!.compareDocumentPosition(lineup) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("is --bg-soft with a 2px --rule top, and its title is 56px", () => {
    const band = rule(CSS, ".band");
    expect(band).toMatch(/background:\s*var\(--bg-soft\)/);
    expect(band).toMatch(/border-top:\s*2px solid var\(--rule\)/);
    expect(rule(CSS, ".bandTitle")).toMatch(/font-size:\s*56px/);
  });
});

describe("reference headings are 34px ink, with no gold half", () => {
  it.each(editions)("%s: no h2 carries a gold span", (_, Page) => {
    const d = dom(<Page />);
    for (const h of d.querySelectorAll("h2")) {
      expect(h.querySelector('[class*="gold"]'), `"${text(h)}" has a gold half`).toBeNull();
    }
    const h2 = rule(CSS, ".h2");
    expect(h2).toMatch(/font-size:\s*34px/);
    expect(h2).toMatch(/color:\s*var\(--text\)/);
  });
});

describe("the lineup: six circles, the headliners ringed in gold", () => {
  it.each(editions)("%s: six acts, the two headliners marked", (_, Page) => {
    const d = dom(<Page />);
    const section = d.querySelector("#dd-lineup")!.closest("section")!;
    const acts = section.querySelectorAll("li");
    expect(acts.length).toBe(6);
    expect([...acts].filter((li) => /lineupHeadliner/.test(li.className)).map((li) => text(li.querySelector('[class*="lineupName"]')))).toEqual([
      "Shakira",
      "Burna Boy",
    ]);
    // The MusicEvent's date, venue and producer are on the page, not only in
    // the structured data.
    const t = text(section);
    expect(t).toContain("MetLife Stadium");
    expect(t).toContain("Global Citizen");
  });

  it("draws circles, a 3px gold ring on a 3px --bg gap, and a left-aligned note", () => {
    const photo = rule(CSS, ".lineupPhoto");
    expect(photo).toMatch(/border-radius:\s*50%/);
    expect(photo).toMatch(/aspect-ratio:\s*1/);
    expect(photo).toMatch(/width:\s*132px/);
    expect(rule(CSS, ".lineupHeadliner .lineupPhoto")).toMatch(/0 0 0 3px var\(--bg\), 0 0 0 6px var\(--gold\)/);
    const note = rule(CSS, ".lineupNote");
    expect(note).not.toMatch(/text-align:\s*center/);
    expect(note).not.toMatch(/margin:\s*0 auto/);
  });
});

describe("the takeover: every country named, the No. 1s in the No. 1 band", () => {
  it.each(editions)("%s: one cell per country, each showing its name and peak", (_, Page, lang) => {
    const d = dom(<Page />);
    const cells = [...d.querySelectorAll("li[data-code]")];
    expect(cells.length).toBe(countries.length);
    for (const c of cells) {
      const code = c.getAttribute("data-code")!;
      const e = countries.find((x) => x.c === code)!;
      expect(text(c.querySelector('[class*="name"]')), code).toBe(countryName(code, lang));
      expect(text(c.querySelector('[class*="peak"]')), code).toBe(`#${e.peak}`);
    }
    const ones = cells.filter((c) => /cellOne/.test(c.className));
    expect(ones.length).toBe(daiDaiNumberOnes);
  });

  it.each(editions)("%s: the phone shows 30 before the fold, and no summary bar", (_, Page) => {
    const d = dom(<Page />);
    const cells = [...d.querySelectorAll("li[data-code]")];
    expect(cells.filter((c) => /cellFolded/.test(c.className)).length).toBe(Math.max(0, countries.length - 30));
    expect(cells.slice(0, 30).every((c) => !/cellFolded/.test(c.className))).toBe(true);
    const fold = [...d.querySelectorAll("button")].find((b) => b.hasAttribute("aria-expanded") && /66|todos|all/i.test(text(b)));
    expect(text(fold)).toContain(String(countries.length));
    // The "66 countries · 26 at No. 1" bar repeated the sentence above it.
    expect(d.querySelector('[class*="foldNums"]')).toBeNull();
  });

  it("the Spanish grid names the countries in Spanish", () => {
    const d = dom(<DaiDaiPageES />);
    expect(text(d.querySelector('li[data-code="CH"] [class*="name"]'))).toBe("Suiza");
    expect(text(d.querySelector('li[data-code="UK"] [class*="name"]'))).toBe("Reino Unido");
  });

  it("is eleven across, and a No. 1 cell is the peak band, never the brand gold", () => {
    expect(rule(GRID_CSS, ".grid")).toMatch(/grid-template-columns:\s*repeat\(11, minmax\(0, 1fr\)\)/);
    const one = rule(GRID_CSS, ".cellOne");
    expect(one).toMatch(/var\(--peak-band-1\)/);
    expect(one).not.toMatch(/--gold/);
  });
});

describe("by the numbers: six captioned lead figures, all from data", () => {
  it("the English leads are the data's own figures", () => {
    const d = dom(<DaiDaiPage />);
    const leads = [...d.querySelectorAll("#numbers ul > li")].slice(0, 6);
    const values = leads.map((li) => text(li.querySelector('[class*="leadValue"]')));
    expect(values).toEqual([
      String(daiDaiChartEntryCount),
      String(daiDaiNumberOnes),
      "No. 1",
      DAI_DAI_SPOTIFY_STREAMS,
      String(daiDaiCertCount),
      "19 Jul",
    ]);
    // 68 is the national charts plus both Billboard globals, and says so.
    expect(entries.some((e) => e.c === "GLB") && entries.some((e) => e.c === "GLBX")).toBe(true);
    expect(countries.length + 2).toBe(daiDaiChartEntryCount);
    const caps = leads.map((li) => text(li.querySelector('[class*="leadCaption"]')));
    expect(caps[0]).toContain(`${countries.length} national charts plus both Billboard globals`);
    expect(caps[4]).toContain(`in ${plaqueCountries()} countries`);
    // Only the live figure is gold, and it says how often it moves.
    const gold = leads.filter((li) => li.querySelector('[class*="liveValue"]'));
    expect(gold.map((li) => text(li.querySelector('[class*="leadValue"]')))).toEqual([DAI_DAI_SPOTIFY_STREAMS]);
    expect(text(gold[0])).toMatch(/several times a day/i);
  });

  it("the Spanish leads carry the same figures, the streams in the compact Spanish form", () => {
    const d = dom(<DaiDaiPageES />);
    const values = [...d.querySelectorAll("#numbers ul > li")].slice(0, 6).map((li) => text(li.querySelector('[class*="leadValue"]')));
    expect(values).toEqual([
      String(daiDaiChartEntryCount),
      String(daiDaiNumberOnes),
      "N.º 1",
      millonesCortoEs(DAI_DAI_SPOTIFY_STREAMS),
      String(daiDaiCertCount),
      "19 jul",
    ]);
  });

  it.each(editions)("%s: the served HTML holds every final value (the count-up only runs in view)", (_, Page) => {
    const served = renderToStaticMarkup(<Page />);
    for (const n of [daiDaiChartEntryCount, daiDaiNumberOnes, daiDaiCertCount]) expect(served).toContain(`>${n}<`);
  });
});

describe("the national charts are a real table, with no empty cell", () => {
  const expectedRows = (lang: "en" | "es") => {
    const src = read(lang === "en" ? "app/dai-dai/page.tsx" : "app/dai-dai/es/page.tsx");
    const block = src.match(/const national:[\s\S]*?\n {2}\];/)![0];
    return [...block.matchAll(/\{ c: "([A-Z]+)", l: [^\n]*?(?:other: "([A-Z_0-9]+)")? \},?\n/g)].map((m) => ({
      c: m[1],
      other: m[2] as keyof typeof DAI_DAI_OTHER_CHARTS | undefined,
    }));
  };

  it.each(editions)("%s: five columns, every cell filled, every figure read from the data", (_, Page, lang) => {
    const d = dom(<Page />);
    const table = d.querySelector("#numbers table")!;
    expect(table, "the national charts are not a <table>").not.toBeNull();
    expect(table.querySelectorAll("thead th").length).toBe(5);
    const rows = [...table.querySelectorAll("tbody tr")];
    const specs = expectedRows(lang);
    expect(specs.length).toBe(15);
    expect(rows.length).toBe(specs.length);
    const P = lang === "en" ? "No." : "N.º";
    const NOT = lang === "en" ? "not stated" : "no consta";
    rows.forEach((tr, i) => {
      const cells = [...tr.children];
      expect(cells.length).toBe(5);
      for (const cell of cells) expect(text(cell), `row ${i + 1} has an empty cell`).not.toBe("");
      const { c, other } = specs[i];
      const [, chart, peak, w1, wc] = cells;
      if (other) {
        const o = DAI_DAI_OTHER_CHARTS[other];
        expect(text(chart).startsWith(o.chart)).toBe(true);
        expect(text(peak)).toBe(`${P} ${o.peak}`);
        expect(text(w1).startsWith(o.weeksAtNo1 == null ? NOT : String(o.weeksAtNo1))).toBe(true);
        expect(text(wc)).toContain(o.weeksOnChart == null ? NOT : String(o.weeksOnChart));
        return;
      }
      const e = entries.find((x) => x.c === c)!;
      expect(text(chart).startsWith(CHART_COUNTRIES[c].body), `${c} chart`).toBe(true);
      expect(text(peak)).toBe(`${P} ${e.peak}`);
      const at1 = weeksAtPeak("Dai Dai", c);
      if (e.peak !== 1) expect(text(w1)).toMatch(/^—/);
      else expect(text(w1).startsWith(at1 == null ? NOT : String(at1)), `${c} weeks at No. 1`).toBe(true);
      const on = weeksOnChart("Dai Dai", c);
      expect(text(wc), `${c} weeks on chart`).toContain(on == null ? NOT : String(on));
    });
  });

  it("names a missing figure in words — the negative control is an empty cell", () => {
    const d = dom(<DaiDaiPage />);
    const norway = [...d.querySelectorAll("#numbers tbody tr")].find((tr) => text(tr.firstElementChild).includes("Norway"))!;
    expect(weeksOnChart("Dai Dai", "NO")).toBeNull();
    expect(text(norway.lastElementChild)).toContain("not stated");
  });
});

describe("streaks, rankings and the video are ruled lists", () => {
  it.each(editions)("%s: three lists, every row a label, a sentence and a figure", (_, Page) => {
    const d = dom(<Page />);
    const lists = [...d.querySelectorAll('#numbers section[aria-labelledby^="dd-list"]')];
    expect(lists.length).toBe(3);
    const counts = lists.map((l) => l.querySelectorAll("li").length);
    expect(counts[1]).toBe(5);
    expect(counts[2]).toBe(2);
    expect(counts[0]).toBeGreaterThanOrEqual(5);
    for (const li of lists.flatMap((l) => [...l.querySelectorAll("li")])) {
      expect(text(li.querySelector('[class*="rowKey"]'))).not.toBe("");
      expect(text(li.querySelector('[class*="note"]'))).not.toBe("");
      expect(text(li.querySelector('[class*="rowValue"]'))).not.toBe("");
    }
    // The heading counts its own rows.
    for (const l of lists) expect(text(l.querySelector("h3"))).toMatch(new RegExp(`· ${l.querySelectorAll("li").length}$`));
  });

  it("the live figures are the gold ones: the streak, the views and No. 1 right now", () => {
    const d = dom(<DaiDaiPage />);
    const gold = [...d.querySelectorAll('#numbers [class*="rowValue"][class*="liveValue"]')].map((el) => text(el));
    expect(gold).toContain(String(daiDaiSpotifyStraightDays));
    expect(gold).toContain(DAI_DAI_VIDEO_VIEWS);
    const es = dom(<DaiDaiPageES />);
    expect([...es.querySelectorAll('#numbers [class*="liveValue"]')].map((el) => text(el))).toContain(millonesEs(DAI_DAI_VIDEO_VIEWS));
  });

  it.each(editions)("%s: the music video is a poster, with no player until a tap", (_, Page) => {
    const served = renderToStaticMarkup(<Page />);
    expect(served).toContain(`i.ytimg.com/vi/${DAI_DAI_VIDEO_ID}/`);
    expect(served).not.toContain("<iframe");
  });

  it.each(editions)("%s: the full-breakdown fold is gone", (_, Page) => {
    const served = renderToStaticMarkup(<Page />);
    expect(served).not.toMatch(/Show the full breakdown|Ver el desglose completo/);
  });
});

describe("the FAQ and the outro", () => {
  it("the desktop FAQ is a 320px heading column and answers at 72ch", () => {
    expect(rule(CSS, ".faq")).toMatch(/grid-template-columns:\s*320px minmax\(0, 1fr\)/);
    expect(rule(CSS, ".faqList")).toMatch(/max-width:\s*72ch/);
  });

  it.each(editions)("%s: eight questions as h3, every answer in the HTML", (_, Page) => {
    const d = dom(<Page />);
    const faq = d.querySelector("#dd-faq")!.closest("section")!;
    expect(faq.querySelectorAll("h3").length).toBe(8);
    expect([...faq.querySelectorAll("p")].filter((p) => text(p).length > 40).length).toBe(8);
  });

  it.each(editions)("%s: the outro is left-aligned under a 2px rule, and restates no figure", (_, Page) => {
    const d = dom(<Page />);
    const outro = d.querySelector('[class*="outroLead"]')!.closest("section")!;
    expect(text(outro.querySelector("p"))).not.toMatch(/\d/);
    expect([...outro.querySelectorAll("a")].map((a) => a.getAttribute("href"))).toEqual([
      "/records/charts?song=Dai%20Dai",
      "/records/africas-biggest",
      "/music",
    ]);
    // Links, not a second primary button: the hero has the page's one.
    expect(outro.querySelector(".btnPrimary")).toBeNull();
    const css = rule(CSS, ".outro");
    expect(css).toMatch(/border-top:\s*2px solid var\(--rule\)/);
    expect(css).toMatch(/padding-top:\s*48px/);
    expect(css).not.toMatch(/text-align:\s*center/);
  });
});

// Ruling 13 of 26 Sep 2026: within a peak, the takeover's cells run in the
// order of the names the edition prints, not of the ISO codes behind them.
describe("the takeover grid, within each peak, is in the order of its visible names", () => {
  const collate = (lang: "en" | "es") => new Intl.Collator(lang === "es" ? "es" : "en-GB", { sensitivity: "base" });
  const inNameOrder = (cells: { name: string; peak: number }[], lang: "en" | "es") =>
    cells.every((c, i) => i === 0 || cells[i - 1].peak < c.peak || (cells[i - 1].peak === c.peak && collate(lang).compare(cells[i - 1].name, c.name) <= 0));
  const cellsOf = (d: HTMLElement) =>
    [...d.querySelectorAll("ol[aria-label] li[data-code]")].map((li) => ({
      code: li.getAttribute("data-code")!,
      name: text(li.querySelector('[class*="name"]')),
      peak: Number(text(li.querySelector('[class*="peak"]')).slice(1)),
    }));

  it.each(editions)("%s", (_, Page, lang) => {
    const cells = cellsOf(dom(<Page />));
    expect(cells).toHaveLength(countries.length);
    expect(inNameOrder(cells, lang)).toBe(true);
    // Peaks still run best first.
    for (let i = 1; i < cells.length; i++) expect(cells[i - 1].peak).toBeLessThanOrEqual(cells[i].peak);
  });

  it("the two editions differ where the names do: Germany is Alemania", () => {
    const en = cellsOf(dom(<DaiDaiPage />)).filter((c) => c.peak === 1).map((c) => c.code);
    const es = cellsOf(dom(<DaiDaiPageES />)).filter((c) => c.peak === 1).map((c) => c.code);
    expect(new Set(es)).toEqual(new Set(en));
    expect(es.indexOf("DE")).toBeLessThan(es.indexOf("AT")); // Alemania < Austria
    expect(en.indexOf("AT")).toBeLessThan(en.indexOf("DE")); // Austria < Germany
  });

  it("negative control: the grid as shipped, ordered by code within a peak", () => {
    for (const lang of ["en", "es"] as const) {
      const shipped = countries
        .map((e) => ({ code: e.c, name: countryName(e.c, lang), peak: e.peak }))
        .sort((a, b) => a.peak - b.peak || a.code.localeCompare(b.code, "en"));
      expect(inNameOrder(shipped, lang), lang).toBe(false);
    }
  });
});

// Ruling 4 of 26 Sep 2026: on this page only, the Keep-exploring cards align
// to the content column (120–1320 at 1440) — the shared rail is untouched.
describe("the Keep-exploring rail lines up with the content column", () => {
  it("both editions wrap the rail in .exploreRail, whose sides equal .wrap's", () => {
    for (const file of ["app/dai-dai/page.tsx", "app/dai-dai/es/page.tsx"]) {
      expect(read(file), file).toMatch(/className=\{`\$\{styles\.desktopOnly\} \$\{styles\.exploreRail\}`\}>\s*<KeepExploring/);
    }
    const wrapSides = /padding:\s*\d+px (\d+)px/.exec(rule(CSS, ".wrap"))?.[1];
    const railSides = /padding-inline:\s*(\d+)px/.exec(rule(CSS, ".exploreRail :global(.container)"))?.[1];
    expect(wrapSides).toBe("40");
    expect(railSides).toBe(wrapSides);
    // The shared component keeps the site-wide .container it always had.
    expect(read("app/components/KeepExploring.tsx")).toContain("className={`container ${styles.wrap}`}");
    // Negative control: the site-wide gutter the rail had here, 16px short.
    const shipped = /padding:\s*0 (\d+)px/.exec(read("app/globals.css").match(/\n\.container \{[^}]*\}/)![0])?.[1];
    expect(Number(wrapSides) - Number(shipped)).toBe(16);
  });
});
