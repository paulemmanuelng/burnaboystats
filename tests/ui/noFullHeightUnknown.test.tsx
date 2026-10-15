import { renderToStaticMarkup } from "react-dom/server";

import { FigureGlobalRun, EN_FIGURE_LABELS, unreadRuns, type FigureLabels } from "../../app/components/DaiDaiFigures";
import styles from "../../app/components/DaiDaiFigures.module.css";
import { DAI_DAI_GLOBAL_200_RUN } from "../../app/data/daiDai";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * noFullHeightUnknown (site review 8 Oct 2026, Job 5 · J5-8, fix 112):
 * chapter 02's Global 200 run draws height only for a real position. A week
 * with no reading is a 6px hatched stub at the baseline, never a full-height
 * bar; one bracket over each run of unread weeks says "not read" (ES "sin
 * lectura"), mono 11 muted, so no stub carries a label of its own. Read weeks
 * keep the built height scale and the every-4th-week ticks; every week keeps
 * its hidden line for a screen reader.
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const ES: FigureLabels = { ...EN_FIGURE_LABELS, locale: "es-ES", weekUnread: "Lista del {date}: sin lectura", notRead: "sin lectura" };
const CSS = read("app/components/DaiDaiFigures.module.css");
const px = (v: string | undefined) => Number(v?.match(/^([\d.]+)px$/)?.[1] ?? NaN);

describe("noFullHeightUnknown: an unread week is a 6px stub (fix 112)", () => {
  it("the unread bar's CSS height is 6px or less, wherever it is set", () => {
    const hits = rules(CSS).filter((r) => r.selector.split(",").map((s) => s.trim()).includes(".barUnread"));
    expect(hits.length).toBeGreaterThan(0);
    const heights = hits.map((r) => decl(r.body, "height")).filter((h): h is string => h !== undefined);
    expect(heights.length).toBeGreaterThan(0);
    for (const h of heights) expect(px(h)).toBeLessThanOrEqual(6);
  });

  it("every unread week draws the stub and no sized bar; every read week its built height", () => {
    const d = parse(renderToStaticMarkup(<FigureGlobalRun t={EN_FIGURE_LABELS} />));
    const cells = [...d.querySelectorAll(`.${styles.barCell}`)];
    expect(cells).toHaveLength(DAI_DAI_GLOBAL_200_RUN.length);
    DAI_DAI_GLOBAL_200_RUN.forEach((w, i) => {
      const bar = cells[i].querySelector(`.${styles.bar}`) as HTMLElement;
      if (w.pos == null) {
        expect(bar.classList.contains(styles.barUnread), `week ${i + 1}`).toBe(true);
        expect(bar.style.height).toBe("");
        expect(cells[i].textContent).toContain("no reading held");
      } else {
        expect(bar.style.height, `week ${i + 1}`).toBe(`${Math.max(56 - (w.pos - 1) * 9, 4)}px`);
      }
      // The ticks every fourth week, as built.
      expect(cells[i].querySelector(`.${styles.barTick}`)!.textContent).toBe(i % 4 === 0 ? `w${i + 1}` : "");
    });
  });

  it.each([
    ["EN", EN_FIGURE_LABELS, "not read"],
    ["ES", ES, "sin lectura"],
  ] as const)("%s: exactly one bracket per run of unread weeks, spanning it, reading “%s”", (_, t, words) => {
    const d = parse(renderToStaticMarkup(<FigureGlobalRun t={t} />));
    // The runs, worked out here from the data.
    const runs: [number, number][] = [];
    DAI_DAI_GLOBAL_200_RUN.forEach((w, i) => {
      if (w.pos != null) return;
      const last = runs[runs.length - 1];
      if (last && last[1] === i - 1) last[1] = i;
      else runs.push([i, i]);
    });
    expect(unreadRuns(DAI_DAI_GLOBAL_200_RUN)).toEqual(runs.map(([start, end]) => ({ start, end })));
    const brackets = [...d.querySelectorAll(`.${styles.unreadBracket}`)] as HTMLElement[];
    expect(brackets).toHaveLength(runs.length);
    brackets.forEach((b, i) => {
      expect(b.textContent).toBe(words);
      expect(b.style.gridColumn).toBe(`${runs[i][0] + 1} / ${runs[i][1] + 2}`);
      expect(b.closest("[aria-hidden='true']")).not.toBeNull();
    });
    // No stub carries a visible label of its own.
    for (const c of d.querySelectorAll(`.${styles.barCell}`)) expect(c.querySelector(`.${styles.barTrack}`)!.textContent).toBe("");
  });

  it("the bracket's words are mono 11 in --text-muted", () => {
    const body = rules(CSS).filter((r) => r.selector === ".unreadText").map((r) => r.body).join(";");
    expect(decl(body, "font-family")).toMatch(/^var\(--font-mono\)/);
    expect(decl(body, "font-size")).toBe("11px");
    expect(decl(body, "color")).toBe("var(--text-muted)");
  });

  it("negative control: the shipped unread bar stood full height", () => {
    // DaiDaiFigures.module.css:148–149 on main e85e6efe.
    const shipped = ".barUnread {\n  height: 56px;\n  border: 1px dashed var(--text);\n}";
    expect(px(decl(rules(shipped)[0].body, "height"))).toBeGreaterThan(6);
  });
});
