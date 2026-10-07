import { render } from "@testing-library/react";
import { readFileSync } from "node:fs";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
}));

import MobileOfficialCharts from "../../app/components/MobileOfficialCharts";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../../app/data/charts";
import styles from "../../app/components/mobileOfficialCharts.module.css";

/**
 * V-afrobeats-06 / V-records-09 (debug of 5 Oct 2026): the phone charts
 * screen's count + peak-band bar ("103 releases · No. 1 · Top 10 · Top 40")
 * was one flex row that could not wrap, with nothing holding a label to one
 * line. At 320px the four did not fit, so each shrank and broke word by word:
 * "103 / RELEASES", "NO. / 1", "TOP / 10", "TOP / 40", each 35px tall, on
 * /records/charts and all 19 board artists' charts pages. The design's
 * `margin-left: auto` on the first band was written as
 * `.legendItem:nth-of-type(1)`, which never matched (the count is the bar's
 * first span), so the legend also sat packed against the count, not at the
 * right edge.
 *
 * Now the three bands are one group: count left, legend right, and where they
 * do not fit side by side the legend takes its own row under the count. jsdom
 * does no layout, so this pins the structure and reads the rules; the shipped
 * rules (origin/main 3504a1ed, quoted verbatim) fail the same check. Measured
 * in headless Chrome on the live pages with this layout grafted on, dark and
 * light: at 320 every label is one 18px line and the legend sits on a second
 * row (Black Sherif, CKay, Wizkid, /records/charts); at 360, 375, 390 and 430
 * the bar stays one 48px row with the legend ending at the right padding.
 */

const CSS = readFileSync("app/components/mobileOfficialCharts.module.css", "utf8");

const SHIPPED = `
.legendBar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dim);
}
.legendItem { display: inline-flex; align-items: center; gap: 5px; }
.legendItem:nth-of-type(1) { margin-left: auto; }
`;

const decls = (css: string, selector: string) => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Record<string, string> = {};
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].trim() !== selector) continue;
    for (const part of m[2].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
  }
  return out;
};

/** What keeps the bar readable at 320: it wraps between whole pieces, never inside one. */
const legendHolds = (css: string) => {
  const bar = decls(css, ".legendBar");
  return {
    barWraps: bar["flex-wrap"] === "wrap",
    countLeftLegendRight: bar["justify-content"] === "space-between",
    countOneLine: decls(css, ".legendCount")["white-space"] === "nowrap",
    labelsOneLine: decls(css, ".legendItem")["white-space"] === "nowrap",
  };
};

const ALL_TRUE = { barWraps: true, countLeftLegendRight: true, countOneLine: true, labelsOneLine: true };

beforeEach(() => window.history.replaceState(null, "", "/records/charts"));

describe("phone charts: the count + peak-band legend bar", () => {
  it("negative control: the shipped rules let every label break in two", () => {
    expect(legendHolds(SHIPPED)).toEqual({
      barWraps: false,
      countLeftLegendRight: false,
      countOneLine: false,
      labelsOneLine: false,
    });
  });

  it("wraps between the count and the legend, never inside a label", () => {
    expect(legendHolds(CSS)).toEqual(ALL_TRUE);
  });

  it("no positional push rule is left that matches nothing", () => {
    expect(CSS.replace(/\/\*[\s\S]*?\*\//g, "")).not.toMatch(/\.legendItem:nth-of-type/);
  });

  it("renders the count, then the three bands as one group", () => {
    const releases = [...albumCharts, ...singleCharts, ...featureCharts];
    const { container } = render(
      <MobileOfficialCharts
        albums={albumCharts}
        singles={singleCharts}
        features={featureCharts}
        countries={CHART_COUNTRIES}
        entryCount={chartEntryCount}
        territoryCount={chartCountryCount}
        numberOnes={numberOnes}
        releaseCount={releases.length}
      />
    );
    const bar = container.querySelector(`.${styles.legendBar}`)!;
    expect(bar).not.toBeNull();
    const [count, legend, ...rest] = [...bar.children];
    expect(rest).toHaveLength(0);
    expect(count.className).toBe(styles.legendCount);
    expect(count.textContent).toBe(`${releases.length} releases`);
    expect(legend.className).toBe(styles.legend);
    expect([...legend.children].map((c) => [c.className, c.textContent?.trim()])).toEqual([
      [styles.legendItem, "No. 1"],
      [styles.legendItem, "Top 10"],
      [styles.legendItem, "Top 40"],
    ]);
  });
});
