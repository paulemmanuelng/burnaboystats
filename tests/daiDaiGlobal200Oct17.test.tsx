import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import storyStyles from "../app/components/DaiDaiStory.module.css";
import figureStyles from "../app/components/DaiDaiFigures.module.css";
import { DAI_DAI_GLOBAL_200_RUN } from "../app/data/daiDai";
import { allChartItems, BURNA_LAST_CHART_SWEEP } from "../app/data/charts";
import { read } from "./fixtures/cssRules";

/**
 * "Dai Dai" on Billboard's own Global 200 for the week of 17 October 2026,
 * read on 16 Oct 2026 off the owner's screenshot (a hand read: billboard.com
 * answers this site's tools with a 402). Its row: No. 12, LW 14, PEAK 1,
 * WEEKS AT NO. 1 7, WEEKS ON CHART 20. The 10 Oct issue is that LW column;
 * the 3 Oct issue was not read, so it holds no reading.
 *
 * The negative control is the run as it shipped (origin/main db35e489),
 * ending on the issue of 26 September, with the chart entry's 17 weeks.
 */
const READ = { issue: "2026-10-17", pos: 12, lw: 14, peak: 1, weeksAtNo1: 7, weeksOnChart: 20 };

type Row = { issue: string; pos: number | null };
type Entry = { peak: number; weeksAtPeak?: number; weeks?: number };

const DAY = 86_400_000;
const t = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
const minus = (iso: string, days: number) => new Date(t(iso) - days * DAY).toISOString().slice(0, 10);

/** The rows of DAI_DAI_GLOBAL_200_RUN as a source text writes them. */
function rowsOf(src: string): Row[] {
  const block = src.slice(src.indexOf("export const DAI_DAI_GLOBAL_200_RUN"));
  const body = block.slice(block.indexOf("= ["), block.indexOf("\n];"));
  return [...body.matchAll(/\{ issue: "(\d{4}-\d\d-\d\d)", pos: (null|\d+) \}/g)].map((m) => ({ issue: m[1], pos: m[2] === "null" ? null : Number(m[2]) }));
}

/** The GLB entry of "Dai Dai" as a charts.ts source text writes it. */
function glbOf(src: string): Entry {
  const m = src.match(/\{ c: "GLB", peak: (\d+), weeksAtPeak: (\d+), weeks: (\d+), note: "seven weeks at No\.1/);
  if (!m) throw new Error("no Dai Dai GLB entry");
  return { peak: Number(m[1]), weeksAtPeak: Number(m[2]), weeks: Number(m[3]) };
}

/** Where a run and its chart entry part from the hand read. */
function handReadProblems(run: readonly Row[], entry: Entry): string[] {
  const out: string[] = [];
  const last = run.at(-1)!;
  if (last.issue !== READ.issue || last.pos !== READ.pos) out.push(`ends ${last.issue} at ${last.pos}, not ${READ.issue} at ${READ.pos}`);
  const lw = run.find((r) => r.issue === minus(READ.issue, 7));
  if (lw?.pos !== READ.lw) out.push(`the issue of ${minus(READ.issue, 7)} is not the LW ${READ.lw}`);
  const before = run.find((r) => r.issue === minus(READ.issue, 14));
  if (!before || before.pos !== null) out.push(`the issue of ${minus(READ.issue, 14)} is not held as unread`);
  if (run.length !== READ.weeksOnChart) out.push(`${run.length} issues, not ${READ.weeksOnChart}`);
  if (entry.weeks !== READ.weeksOnChart) out.push(`the entry's weeks are ${entry.weeks}, not ${READ.weeksOnChart}`);
  if (entry.peak !== READ.peak) out.push(`the entry's peak is ${entry.peak}`);
  if (entry.weeksAtPeak !== READ.weeksAtNo1 || run.filter((r) => r.pos === 1).length !== READ.weeksAtNo1) out.push("the weeks at No. 1 are not 7");
  run.slice(1).forEach((r, i) => {
    if (t(r.issue) - t(run[i].issue) !== 7 * DAY) out.push(`${r.issue} is not a week after ${run[i].issue}`);
  });
  return out;
}

const DAI_DAI_TS = "app/data/daiDai.ts";
const CHARTS_TS = "app/data/charts.ts";

describe("Billboard Global 200, week of 17 October 2026 (hand read 16 Oct 2026)", () => {
  it("the run and the chart entry hold the row as read", () => {
    const entry = allChartItems.find((r) => r.title === "Dai Dai")!.entries.find((e) => e.c === "GLB")!;
    expect(handReadProblems(DAI_DAI_GLOBAL_200_RUN, entry)).toEqual([]);
    expect(DAI_DAI_GLOBAL_200_RUN.slice(-3)).toEqual([
      { issue: "2026-10-03", pos: null },
      { issue: "2026-10-10", pos: 14 },
      { issue: "2026-10-17", pos: 12 },
    ]);
    // The source this guard parses is the module's own.
    expect(rowsOf(read(DAI_DAI_TS))).toEqual(DAI_DAI_GLOBAL_200_RUN);
    expect(glbOf(read(CHARTS_TS))).toEqual({ peak: entry.peak, weeksAtPeak: entry.weeksAtPeak, weeks: entry.weeks });
    expect(entry.note).toContain("No.14 on 10 October and No.12 on 17 October");
    expect(entry.note).toContain("the 3 October issue has not been read");
    expect(read(CHARTS_TS)).toContain("// GLB: read 16 Oct 2026 off the owner's screenshot");
    expect(BURNA_LAST_CHART_SWEEP).toBe("2026-10-16");
  });

  it.each([
    ["/dai-dai", DaiDaiPage, "Chart dated 3 October 2026: no reading held", "Chart dated 10 October 2026: No. 14", "Chart dated 17 October 2026: No. 12"],
    ["/dai-dai/es", DaiDaiPageES, "Lista del 3 de octubre de 2026: sin lectura", "Lista del 10 de octubre de 2026: N.º 14", "Lista del 17 de octubre de 2026: N.º 12"],
  ])("%s: chapter 02 draws 20 weeks, 3 Oct unread", (_, Page, oct3, oct10, oct17) => {
    const d = document.createElement("div");
    d.innerHTML = renderToStaticMarkup(<Page />);
    const cells = [...d.querySelectorAll(`.${storyStyles.chapter}`)[1].querySelectorAll("li")];
    expect(cells).toHaveLength(20);
    expect(cells.slice(-3).map((c) => c.getAttribute("title"))).toEqual([oct3, oct10, oct17]);
    // 3 Oct is the hatched cell with no height of its own, as every unread week.
    expect(cells[17].querySelector(`.${figureStyles.barUnread}`)).not.toBeNull();
    expect(cells[17].querySelector('[style*="height"]')).toBeNull();
    expect(cells[18].querySelector('[style*="height"]')).not.toBeNull();
    expect(cells[19].querySelector('[style*="height"]')).not.toBeNull();
  });

  it("negative control: the run that shipped, ending on 26 September with 17 weeks, fails the read", () => {
    // origin/main db35e489, app/data/daiDai.ts, the run's last row and close:
    const SHIPPED_TAIL = `  { issue: "2026-09-26", pos: 4 },\n];`;
    // origin/main db35e489, app/data/charts.ts, the entry's head:
    const SHIPPED_GLB = `{ c: "GLB", peak: 1, weeksAtPeak: 7, weeks: 17, note: "seven weeks at No.1, not consecutive`;
    const src = read(DAI_DAI_TS);
    const shipped = src.slice(0, src.indexOf(`  { issue: "2026-09-26", pos: 4 },`)) + SHIPPED_TAIL + src.slice(src.indexOf("\n];", src.indexOf("export const DAI_DAI_GLOBAL_200_RUN")) + 3);
    expect(shipped).toContain(SHIPPED_TAIL);
    const run = rowsOf(shipped);
    expect(run.at(-1)).toEqual({ issue: "2026-09-26", pos: 4 });
    expect(handReadProblems(run, glbOf(SHIPPED_GLB))).toEqual([
      "ends 2026-09-26 at 4, not 2026-10-17 at 12",
      "the issue of 2026-10-10 is not the LW 14",
      "the issue of 2026-10-03 is not held as unread",
      "17 issues, not 20",
      "the entry's weeks are 17, not 20",
    ]);
  });
});
