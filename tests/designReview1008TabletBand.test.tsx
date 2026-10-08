import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import FaqPage from "../app/faq/page";
import LiveChartsPage from "../app/live-charts/page";
import faqStyles from "../app/faq/faq.module.css";
import liveStyles from "../app/live-charts/liveCharts.module.css";
import { livePlatformTotals } from "../app/data/liveCharts";
import { GROUPS } from "../app/data/faqs";
import { read, rules, winning } from "./fixtures/cssRules";

/**
 * Design review of 8 Oct 2026, quick win 11 (SH-03, CC-23, R-14, R-10, C-22,
 * MU-18): the tablet band, 901–1239px, where the desktop tree renders under a
 * hamburger. Measured on the live site at 901, 1024, 1100 and 1239:
 *   - the menu panel ended at y=692 of a 768px window, 76px short, slicing its
 *     last visible row (SH-03);
 *   - four four-figure stat strips went 3 + 1 (/certifications CC-23,
 *     /records R-14, /methodology C-22, /live-charts and every board artist's
 *     live page), and live-charts' seven platform tiles went 3 + 3 + 1 (MU-18);
 *   - the sixteen record books on /records and the Africa's Biggest boards
 *     dropped to one column, 821–1159px wide (R-14, R-10);
 *   - the /faq jump chips wrapped "The car collection" alone onto a second
 *     line at 901–1100 (C-22).
 * Each now takes the column count the design uses from 1240 (four figures,
 * two cards, two boards), or, where no single row fits, two even rows.
 */

/** Rules that apply somewhere in 901–1239: unscoped, or a media block whose range includes the band. */
const inBand = (m: string | null) => {
  if (m === null) return true;
  if (/print|prefers-/.test(m)) return false;
  const min = Number(m.match(/min-width:\s*(\d+)px/)?.[1] ?? 0);
  const max = Number(m.match(/max-width:\s*(\d+)px/)?.[1] ?? Infinity);
  return min <= 901 && max >= 1239;
};
const cols = (template: string | undefined) => {
  if (!template) return NaN;
  const rep = template.match(/^repeat\((\d+),/);
  if (rep) return Number(rep[1]);
  return template.split(/\s+/).length;
};
/** Rows of `n` items in `c` columns, as counts. */
const rowsOf = (n: number, c: number) => Array.from({ length: Math.ceil(n / c) }, (_, i) => Math.min(c, n - i * c));
const leavesOneAlone = (rows: number[]) => rows.length > 1 && rows[rows.length - 1] === 1;

describe("SH-03: the menu panel reaches the floor in the band", () => {
  const CSS = read("app/components/mobileNavSheet.module.css");
  const atBand = (m: string | null) => m === null || /\(min-width:\s*901px\)/.test(m);
  it("bottom: 0 from 901px (the phone keeps its 76px dismiss strip)", () => {
    expect(winning(CSS, ".sheet", "bottom", atBand)).toBe("0");
    expect(winning(CSS, ".sheet", "bottom", (m) => m === null)).toBe("76px");
  });
  it("negative control: the shipped band rule left the phone's 76px", () => {
    const shipped = `.sheet { position: absolute; top: 0; left: 0; right: 0; bottom: 76px; }
@media (min-width: 901px) {
  .sheet {
    left: auto;
    width: 402px;
  }
  .dismissHint { display: none; }
}`;
    expect(winning(shipped, ".sheet", "bottom", atBand)).toBe("76px");
  });
});

describe("the four-figure stat strips stay four across in the band", () => {
  const strips: [string, string, string][] = [
    ["app/certifications/certifications.module.css", ".summaryGrid", "CC-23 /certifications"],
    ["app/records/records.module.css", ".headlineGrid", "R-14 /records"],
    ["app/methodology/methodology.module.css", ".counts", "C-22 /methodology"],
    ["app/live-charts/liveCharts.module.css", ".summaryGrid", "/live-charts and the board live pages"],
  ];
  for (const [file, grid, name] of strips) {
    it(name, () => {
      const c = cols(winning(read(file), grid, "grid-template-columns", inBand));
      expect(c).toBe(4);
      expect(leavesOneAlone(rowsOf(4, c))).toBe(false);
    });
  }
  it("negative control: the shipped band rule, repeat(3, 1fr), leaves the fourth alone", () => {
    const shipped = `.summaryGrid { display: grid; grid-template-columns: repeat(4, 1fr); }
@media (max-width: 1239px) {
  .summaryGrid { grid-template-columns: repeat(3, 1fr); }
}`;
    expect(leavesOneAlone(rowsOf(4, cols(winning(shipped, ".summaryGrid", "grid-template-columns", inBand))))).toBe(true);
  });
});

describe("R-14 / R-10: the record books and the Africa's Biggest boards keep two columns", () => {
  it("/records' sixteen cards, two up", () => {
    expect(cols(winning(read("app/records/records.module.css"), ".grid", "grid-template-columns", inBand))).toBe(2);
  });
  it("Africa's Biggest's boards, two up, with the partial-row stretch rules live from 901", () => {
    const css = read("app/records/africas-biggest/africas-biggest.module.css");
    expect(cols(winning(css, ".boxGrid", "grid-template-columns", inBand))).toBe(2);
    const stretch = rules(css).filter((r) => r.selector === ".boxGrid > :last-child:nth-child(2n + 1)");
    expect(stretch.length).toBeGreaterThan(0);
    expect(stretch.every((r) => r.media !== null && /min-width:\s*901px/.test(r.media))).toBe(true);
    expect(rules(css).find((r) => r.selector === ".boxWide")?.media).toMatch(/min-width:\s*901px/);
  });
  it("negative control: the shipped band rules dropped both to one column", () => {
    const shippedRecords = `.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 1239px) {
  .headBtn { margin-left: 0; }
  .grid { grid-template-columns: 1fr; }
}`;
    const shippedBoards = `.boxGrid { display: grid; grid-template-columns: 1fr 1fr; }
@media (max-width: 1239px) {
  .boxGrid { grid-template-columns: 1fr; }
}`;
    expect(cols(winning(shippedRecords, ".grid", "grid-template-columns", inBand))).toBe(1);
    expect(cols(winning(shippedBoards, ".boxGrid", "grid-template-columns", inBand))).toBe(1);
  });
});

describe("MU-18: live-charts' platform tiles sit in one row of equal cells in the band", () => {
  const CSS = read("app/live-charts/liveCharts.module.css");
  it("as many columns as platforms, the count set from the data", () => {
    expect(winning(CSS, ".platformGrid", "grid-template-columns", inBand)).toBe("repeat(var(--platforms, 6), minmax(0, 1fr))");
    const d = new DOMParser().parseFromString(renderToStaticMarkup(LiveChartsPage()), "text/html");
    const grid = d.querySelector(`.${liveStyles.platformGrid}`) as HTMLElement;
    expect(grid.style.getPropertyValue("--platforms")).toBe(String(livePlatformTotals.length));
    expect(grid.children).toHaveLength(livePlatformTotals.length);
    expect(rowsOf(livePlatformTotals.length, livePlatformTotals.length)).toEqual([livePlatformTotals.length]);
  });
  it("negative control: the shipped three columns made the seven tiles 3 + 3 + 1", () => {
    const shipped = `.platformGrid { display: grid; grid-template-columns: repeat(6, 1fr); }
@media (max-width: 1239px) {
  .platformGrid { grid-template-columns: repeat(3, 1fr); }
}`;
    expect(leavesOneAlone(rowsOf(livePlatformTotals.length, cols(winning(shipped, ".platformGrid", "grid-template-columns", inBand))))).toBe(true);
  });
});

describe("C-22: the /faq jump chips in two even rows in the band", () => {
  const CSS = read("app/faq/faq.module.css");
  const band = (m: string | null) => m !== null && /max-width:\s*1239px/.test(m);
  it("a grid of half the groups across, without the label and the total", () => {
    expect(winning(CSS, ".jumpPad", "display", band)).toBe("grid");
    expect(winning(CSS, ".jumpPad", "grid-template-columns", band)).toBe("repeat(var(--jump-cols, 3), max-content)");
    // Each chip keeps its own width (not stretched to its column's widest).
    expect(winning(CSS, ".jumpPad", "justify-items", band)).toBe("start");
    expect(winning(CSS, ".jumpLabel", "display", band)).toBe("none");
    expect(winning(CSS, ".jumpTotal", "display", band)).toBe("none");
    const d = new DOMParser().parseFromString(renderToStaticMarkup(FaqPage()), "text/html");
    const pad = d.querySelector(`.${faqStyles.jumpPad}`) as HTMLElement;
    const chips = pad.querySelectorAll(`.${faqStyles.jumpChip}`).length;
    expect(chips).toBe(GROUPS.length);
    const c = Number(pad.style.getPropertyValue("--jump-cols"));
    expect(c).toBe(Math.ceil(chips / 2));
    expect(rowsOf(chips, c)).toHaveLength(2);
    expect(leavesOneAlone(rowsOf(chips, c))).toBe(false);
  });
  it("negative control: the shipped wrapping row, as measured live at 1024 — five chips, then one", () => {
    const SHIPPED_1024 = [[175, 139, 193, 141, 134], [160]].map((r) => r.length);
    expect(leavesOneAlone(SHIPPED_1024)).toBe(true);
  });
});
