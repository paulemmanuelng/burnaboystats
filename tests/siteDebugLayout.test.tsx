import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import TodaysNumber from "../app/components/TodaysNumber";
import AwardExplorer from "../app/components/AwardExplorer";
import { livePlatformTotals } from "../app/data/liveCharts";

/**
 * Layout fixes from the full-site debug of 24 Sep 2026, group D. Each was
 * measured on the live site at a phone or desktop width; these pin the rule
 * that removed it. The layout itself needs a browser, so the guards read the
 * CSS the way the cascade will: the rule, its media block, and its order.
 *
 * Each negative control is the rule or the text the live site shipped.
 */

type Rule = { media: string | null; selector: string; body: string; at: number };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null, base: number) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head, base + open + 1);
      else out.push({ media, selector: head, body, at: base + i });
      i = j;
    }
  };
  walk(src, null, 0);
  return out;
}

const read = (p: string) => readFileSync(p, "utf8");
const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

/** span per row position for "<grid> > :last-child:nth-child(Cn + k)". */
function lastRowSpans(css: string, grid: string, cols: number, media: (m: string | null) => boolean) {
  const spans = new Map<number, number>();
  const re = new RegExp(`^\\.${grid} > :last-child:nth-child\\(${cols}n \\+ (\\d+)\\)$`);
  for (const r of rules(css)) {
    const m = r.selector.match(re);
    if (m && media(r.media)) spans.set(Number(m[1]), Number(decl(r.body, "grid-column")?.replace("span", "")));
  }
  return spans;
}

/** Every partial last row is filled: position k spans the cols - k + 1 left. */
function fillsEveryRow(spans: Map<number, number>, cols: number) {
  for (let k = 1; k < cols; k++) if (spans.get(k) !== cols - k + 1) return false;
  return true;
}

describe("D-02: the live-charts platform grid has no grey slab", () => {
  const css = read("app/live-charts/liveCharts.module.css");
  const wide = (m: string | null) => m === "@media (min-width: 1240px)";
  const narrow = (m: string | null) => m === "@media (max-width: 1239px)";

  it("stretches the last card across a short last row at six columns and at three", () => {
    expect(fillsEveryRow(lastRowSpans(css, "platformGrid", 6, wide), 6)).toBe(true);
    expect(fillsEveryRow(lastRowSpans(css, "platformGrid", 3, narrow), 3)).toBe(true);
    // Seven platforms today: 7 = 6 + 1, the case that shipped a 1002px slab.
    expect(livePlatformTotals.length % 6).not.toBe(0);
  });

  it("scopes each span to its own column count", () => {
    // A span 6 or 5 in the three-column grid invents columns and overflows.
    for (const r of rules(css)) {
      if (!/platformGrid > :last-child/.test(r.selector)) continue;
      const span = Number(decl(r.body, "grid-column")?.replace("span", ""));
      if (span > 3) expect(r.media, r.selector).toBe("@media (min-width: 1240px)");
    }
  });

  it("negative control: the shipped sheet had no span rule for the grid", () => {
    const shipped = `.platformGrid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2px;
  background: var(--line);
}
@media (max-width: 1239px) {
  .platformGrid { grid-template-columns: repeat(3, 1fr); }
}`;
    expect(fillsEveryRow(lastRowSpans(shipped, "platformGrid", 6, wide), 6)).toBe(false);
    expect(fillsEveryRow(lastRowSpans(shipped, "platformGrid", 3, narrow), 3)).toBe(false);
  });
});

describe("D-03: the Dai Dai conquest grid draws its seams per cell", () => {
  const conquest = (css: string) => {
    const all = rules(css).filter((r) => r.media === null);
    return {
      grid: all.filter((r) => r.selector === ".grid").map((r) => r.body).join(";"),
      cell: all.filter((r) => r.selector === ".cell").map((r) => r.body).join(";"),
    };
  };
  const bedless = (css: string) => {
    const { grid, cell } = conquest(css);
    return (
      !/var\(--rule\)/.test(decl(grid, "background") ?? "") &&
      decl(grid, "overflow") === "hidden" &&
      decl(cell, "box-shadow") === "0.5px 0.5px 0 0.5px var(--rule)"
    );
  };

  it("paints no --rule bed behind the cells, so an empty slot is page", () => {
    const css = read("app/components/DaiDaiConquest.module.css");
    expect(bedless(css)).toBe(true);
    // The frame is unchanged: --rule-soft with the --rule the bed used to lay
    // under it, now an outline pulled onto the border.
    const { grid } = conquest(css);
    expect(decl(grid, "border")).toBe("1px solid var(--rule-soft)");
    expect(decl(grid, "outline")).toBe("1px solid var(--rule)");
    expect(decl(grid, "outline-offset")).toBe("-1px");
  });

  it("negative control: the shipped grid showed --rule through its gaps", () => {
    const shipped = `.grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1px;
  background: var(--rule);
  border: 1px solid var(--rule-soft);
  margin-top: 14px;
}
.cell {
  background: var(--bg);
  padding: 12px 8px;
}`;
    expect(bedless(shipped)).toBe(false);
  });
});

describe("D-04: the compare table's country label wraps on a phone", () => {
  const wraps = (css: string) =>
    rules(css).some(
      (r) => r.media === "@media (max-width: 760px)" && r.selector === ".country" && decl(r.body, "white-space") === "normal"
    );

  it("lets \"US · LATIN\" break inside the 78px column", () => {
    expect(wraps(read("app/compare/compare.module.css"))).toBe(true);
  });

  it("negative control: the shipped phone rule kept the base nowrap", () => {
    expect(wraps(`@media (max-width: 760px) {\n  .country { gap: 6px; }\n}`)).toBe(false);
  });
});

describe("D-06: the region row headers sit on the row's top line", () => {
  const aligned = (css: string) =>
    rules(css).some((r) => r.selector === ".table th.regionCell" && decl(r.body, "vertical-align") === "top");

  for (const f of ["app/music/listeners/listeners.module.css", "app/records/tours/map/map.module.css"]) {
    it(f, () => {
      const css = read(f);
      expect(aligned(css)).toBe(true);
      // The Anton 17px type was the owner's call, and he approved it on
      // 24 Sep 2026 (tests/designItems.test.tsx holds the type). This file
      // holds the alignment: exactly one raised rule, and it sets top.
      const raised = rules(css).filter((r) => r.selector === ".table th.regionCell");
      expect(raised.length).toBe(1);
      expect(decl(raised[0].body, "vertical-align")).toBe("top");
    });
  }

  it("negative control: the shipped sheet had only the outranked .regionCell", () => {
    expect(aligned(`.table th { text-align: left; }\n.regionCell { font-size: 17px; text-align: left; }`)).toBe(false);
  });
});

describe("D-07: the home album rail snaps to the gutter", () => {
  const snapsToGutter = (css: string) => {
    const rail = rules(css).find((r) => r.selector === ".rail" && r.media === null)!;
    const inline = decl(rail.body, "padding")!.split(/\s+/)[1];
    return decl(rail.body, "scroll-padding-inline") === inline;
  };

  it("scroll-padding matches the rail's inline padding", () => {
    expect(snapsToGutter(read("app/components/mobileHome.module.css"))).toBe(true);
  });

  it("negative control: the shipped rail left scroll-padding at auto", () => {
    const shipped = `.rail {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 16px 18px 4px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}`;
    expect(snapsToGutter(shipped)).toBe(false);
  });
});

describe("D-08: the awards filter bar sits in the page container", () => {
  it("wraps the filter bar in .wide, like the ceremonies below it", () => {
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(<AwardExplorer />), "text/html");
    const bar = [...doc.querySelectorAll("div")].find((d) => /filterBar/.test(d.className))!;
    expect(bar).toBeTruthy();
    expect(bar.parentElement!.className).toMatch(/wide/);
  });
});

describe("D-09, D-14, D-15: long unbroken words wrap instead of spilling", () => {
  const has = (f: string, selector: string, prop: string, value: string) =>
    rules(read(f)).some((r) => r.media === null && r.selector === selector && decl(r.body, prop) === value);

  it("song number labels (#JerusalemaDanceChallenge)", () => {
    expect(has("app/music/[song]/song.module.css", ".numLabel", "overflow-wrap", "anywhere")).toBe(true);
  });

  it("the phone API attribution", () => {
    expect(has("app/components/mobileApi.module.css", ".codeAttr", "white-space", "pre-wrap")).toBe(true);
    expect(has("app/components/mobileApi.module.css", ".codeAttr", "overflow-wrap", "anywhere")).toBe(true);
    // The curl line above it still scrolls on one line.
    expect(has("app/components/mobileApi.module.css", ".codeLine", "white-space", "pre")).toBe(true);
  });

  it("the search query echoes", () => {
    const f = "app/search/search.module.css";
    expect(has(f, ".resultsHint", "min-width", "0")).toBe(true);
    expect(has(f, ".resultsHint", "overflow-wrap", "anywhere")).toBe(true);
    expect(has(f, ".emptyH", "overflow-wrap", "anywhere")).toBe(true);
  });

  it("negative control: the shipped rules", () => {
    const shipped = rules(
      `.numLabel { font-size: 13px; line-height: 1.6; color: var(--text-body); margin-top: 11px; }
.codeAttr { font-family: var(--font-mono), monospace; font-size: 11px; color: var(--text-body); white-space: pre; }
.resultsHint {
  margin-left: auto;
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dim);
}`
    );
    expect(shipped.some((r) => decl(r.body, "overflow-wrap") === "anywhere")).toBe(false);
    expect(decl(shipped.find((r) => r.selector === ".codeAttr")!.body, "white-space")).toBe("pre");
  });
});

describe("D-12: the rejected-claims headings stand off what precedes them", () => {
  it("all three list headings carry .rejectH, which outranks .blockH's margin: 0 by order", () => {
    const page = read("app/methodology/page.tsx");
    const lists = ["No primary source names him", "Counts that circulate higher than ours", "Checks that changed our own figures"];
    for (const h of lists) {
      const line = page.split("\n").find((l) => l.includes(`>${h}</h3>`));
      expect(line, h).toBeTruthy();
      expect(line, h).toContain("styles.rejectH");
    }
    const css = rules(read("app/methodology/methodology.module.css")).filter((r) => r.media === null);
    const blockH = css.find((r) => r.selector === ".blockH")!;
    const rejectH = css.find((r) => r.selector === ".rejectH")!;
    expect(decl(rejectH.body, "margin-top")).toBe("30px");
    expect(rejectH.at).toBeGreaterThan(blockH.at);
  });

  it("negative control: the shipped heading had .blockH alone", () => {
    const shipped = `<h3 className={styles.blockH}>No primary source names him</h3>`;
    expect(shipped).not.toContain("rejectH");
  });
});

describe("D-13: the home panel's caption has no stray no-break space", () => {
  // A no-break space straight after a normal one: the line broke before it,
  // and line two opened on the nbsp, 5px in from the quote mark.
  const stray = /\s | [“"]/;

  it("renders “with “Dai Dai” right now” with one ordinary space", () => {
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(<TodaysNumber />), "text/html");
    const caption = [...doc.querySelectorAll("div")].find((d) => /caption/.test(d.className) && /right now/.test(d.textContent ?? ""))!;
    expect(caption).toBeTruthy();
    expect(caption.textContent).not.toMatch(stray);
    expect(caption.textContent).toMatch(/at No\. 1 with “[^”]+” right now/);
  });

  it("negative control: the caption the live site shipped", () => {
    expect("countries at No. 1 with  “Dai Dai” right now").toMatch(stray);
  });
});
