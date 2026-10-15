import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/analysis",
}));

import AnalysisPage from "../../app/analysis/page";
import MobileAnalysis from "../../app/components/MobileAnalysis";
import styles from "../../app/components/mobileAnalysis.module.css";
import { findings } from "../../app/lib/analysisFindings";
import { decl, read, rules, winning } from "../fixtures/cssRules";

/**
 * analysisPhoneCharts (site review 8 Oct 2026, Job 5 · J5-6, fixes 115 and
 * 116): on the phone, each /analysis finding draws ITS OWN chart after its
 * stat row — its chartLabel, every bar in its set in order (8–10 today, the
 * same set the desktop charts), and its chartNote. Single-series bars are
 * --other on the --bg-soft-2 track; gold goes only on a bar the finding marks
 * hot, as a solid --gold-fill.
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const CSS = read("app/components/mobileAnalysis.module.css");
const phone = (m: string | null) => m === null || /max-width/.test(m ?? "");
const bodyOf = (sel: string) =>
  rules(CSS)
    .filter((r) => r.selector.split(",").map((x) => x.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

function phoneFindings() {
  const d = parse(renderToStaticMarkup(<AnalysisPage />));
  const screen = d.querySelector(`.${styles.screen}`)!;
  return [...screen.querySelectorAll(`.${styles.finding}`)];
}

describe("analysisPhoneCharts: each phone finding charts its own evidence (fix 116)", () => {
  it("one chart per finding, after the stat row and before the prose", () => {
    const els = phoneFindings();
    expect(els).toHaveLength(findings.length);
    for (const el of els) {
      const kids = [...el.children].map((c) => c.className);
      const stat = kids.indexOf(styles.statRow);
      const chart = kids.indexOf(styles.chart);
      expect(stat).toBeGreaterThanOrEqual(0);
      expect(chart).toBe(stat + 1);
      expect(kids[chart + 1]).toBe(styles.body);
    }
  });

  it("every bar of the finding's own set, in order, with its label and its note", () => {
    const els = phoneFindings();
    findings.forEach((f, i) => {
      const chart = els[i].querySelector(`.${styles.chart}`)!;
      expect(chart.querySelector(`.${styles.chartLabel}`)!.textContent).toBe(f.chartLabel);
      expect(chart.querySelector(`.${styles.chartNote}`)!.textContent).toBe(f.chartNote);
      const rows = [...chart.querySelectorAll(`.${styles.barRow}`)];
      expect(rows.map((r) => r.querySelector(`.${styles.barName}`)!.textContent), f.id).toEqual(f.bars.map((b) => b.name));
      expect(rows.map((r) => r.querySelector(`.${styles.barValue}`)!.textContent)).toEqual(f.bars.map((b) => b.value));
      rows.forEach((r, j) => {
        const fill = r.querySelector(`.${styles.barFill}`) as HTMLElement;
        expect(fill.style.width).toBe(`${Math.round(f.bars[j].frac * 100)}%`);
        // Gold only where the finding marks the bar hot.
        expect(fill.classList.contains(styles.barFillHot), `${f.id} ${f.bars[j].name}`).toBe(!!f.bars[j].hot);
        expect(r.querySelector(`.${styles.barName}`)!.classList.contains(styles.barNameHot)).toBe(!!f.bars[j].hot);
      });
    });
  });

  it("the bars are --other on the --bg-soft-2 track; the hot bar a solid --gold-fill, never a gradient", () => {
    expect(decl(bodyOf(".barFill"), "background")).toBe("var(--other)");
    expect(decl(bodyOf(".barTrack"), "background")).toBe("var(--bg-soft-2)");
    expect(decl(bodyOf(".barFillHot"), "background")).toBe("var(--gold-fill)");
    expect(CSS).not.toMatch(/linear-gradient\([^)]*var\(--grad-b\)/);
    // No gold on the names or the values: ink and muted ink.
    for (const sel of [".barName", ".barNameHot", ".barValue", ".chartLabel", ".chartNote"])
      expect(winning(CSS, sel, "color", phone), sel).not.toMatch(/--gold/);
  });

  it("the chart text is 11px or more: labels 11px mono 700, values 12px", () => {
    expect(winning(CSS, ".barName", "font-size", phone)).toBe("11px");
    expect(winning(CSS, ".barName", "font-weight", phone)).toBe("700");
    expect(winning(CSS, ".barValue", "font-size", phone)).toBe("12px");
    expect(winning(CSS, ".chartLabel", "font-size", phone)).toBe("var(--type-label)");
    expect(winning(CSS, ".chartNote", "font-size", phone)).toBe("var(--type-caption)");
  });

  it("every name sits on one line: the name column fits the finding's longest name, up to 150px, and the rows share it", () => {
    // Space Mono's advance is 0.612 em: an 11px name is 6.732px a letter.
    const widest = Math.max(...findings.flatMap((f) => f.bars.map((b) => [...b.name].length))) * 0.612 * 11;
    const cols = decl(bodyOf(".bars"), "grid-template-columns")!;
    expect(cols).toBe("minmax(110px, max-content) minmax(0, 1fr) 56px");
    expect(decl(bodyOf(".barRow"), "grid-template-columns")).toBe("subgrid");
    expect(decl(bodyOf(".barRow"), "grid-column")).toBe("1 / -1");
    const cap = parseFloat(decl(bodyOf(".barName"), "max-width")!);
    expect(widest).toBeLessThanOrEqual(cap);
    // At 320 the bar keeps room: 284px of content less the name, the value
    // column and two 10px gaps.
    expect(320 - 2 * 18 - cap - 56 - 2 * 10).toBeGreaterThanOrEqual(56);
  });

  it("negative control: the name column as first built was a fixed 110px, narrower than the longest name", () => {
    // mobileAnalysis.module.css on a4e6a960 (J5-6): each row its own grid.
    const built = ".barRow { display: grid; grid-template-columns: 110px minmax(0, 1fr) 56px; gap: 10px; align-items: center; min-height: 22px; }";
    const first = decl(rules(built)[0].body, "grid-template-columns")!.split(" ")[0];
    const widest = Math.max(...findings.flatMap((f) => f.bars.map((b) => [...b.name].length))) * 0.612 * 11;
    expect(parseFloat(first)).toBeLessThan(widest);
  });

  it("negative control: the shipped phone finding drew no bars", () => {
    // MobileAnalysis.tsx 62–96 on main e85e6efe: kicker, title, stat row,
    // body, links — no f.bars.
    const shipped = (f: (typeof findings)[number]) => (
      <div className={styles.finding}>
        <h2 className={styles.findingTitle}>{f.h}</h2>
        <div className={styles.statRow} />
        {f.body.map((p, i) => (
          <p key={i} className={styles.body}>{p}</p>
        ))}
      </div>
    );
    for (const f of findings) {
      const el = parse(renderToStaticMarkup(shipped(f)));
      expect(el.querySelectorAll(`.${styles.barRow}`)).toHaveLength(0);
      expect(f.bars.length).toBeGreaterThan(0);
    }
  });

  it("negative control: the canvas's fixed top-five footer is not printed", () => {
    // Data Modules.dc.html:257 (fix 116 rejects it: the findings chart 8–10).
    const canvas = "Top 5 · gold = the highlighted bar · same data as the desktop chart";
    const html = renderToStaticMarkup(<MobileAnalysis findings={findings} lede="" reviewedOn="2026-10-08" checkNote="" />);
    expect(html).not.toContain(canvas);
    expect(findings.some((f) => f.bars.length !== 5)).toBe(true);
  });
});
