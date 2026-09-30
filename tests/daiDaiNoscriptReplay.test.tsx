import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildReplayData, type ReplayData } from "../app/components/daiDaiReplayData";
import { EN_REPLAY_LABELS, ES_REPLAY_LABELS } from "../app/components/daiDaiReplayLabels";
import DaiDaiReplay from "../app/components/DaiDaiReplay";

/**
 * The no-JavaScript replay table, rendered by the player (speed pass, 30 Sep 2026).
 *
 * Both dai-dai pages rendered <noscript><DaiDaiReplayMultiples/></noscript>
 * themselves. A server component's tree travels twice, as HTML and again in
 * the page's RSC payload, so that table (66 countries and two globals by 18
 * weeks) was ~124 KB of each page's flight and of its prefetch segment. The
 * player, a client component, now renders the same <noscript> right after its
 * own root: the HTML is the same, and the payload carries only the player's
 * props, which it needs anyway.
 */
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

/** Every element inside the render, parsed as a browser without scripting
 *  would read it. A <noscript>'s content may come back as text, depending on
 *  the parser's scripting flag; it is re-parsed in that case. */
function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}
function noscriptContent(ns: Element): HTMLElement {
  return ns.children.length ? (ns as HTMLElement) : parse(ns.textContent ?? "");
}

/** What the render must hold: the player's root, then directly one <noscript>
 *  with the small multiples in it — one body row per chart, no button. Returns
 *  the problems found, so a negative control can show it finds some. */
function noscriptProblems(html: string, data: ReplayData): string[] {
  const host = parse(html);
  const problems: string[] = [];
  const [root, next, ...rest] = [...host.children];
  if (!root || root.tagName !== "DIV" || !root.hasAttribute("data-mode")) problems.push("the player's root does not come first");
  if (!next || next.tagName !== "NOSCRIPT") return [...problems, "no <noscript> directly after the player's root"];
  if (rest.length) problems.push(`${rest.length} more element(s) after the <noscript>`);
  if (host.querySelectorAll("noscript").length !== 1) problems.push("not exactly one <noscript>");
  const inner = noscriptContent(next);
  const tables = inner.querySelectorAll("table");
  if (tables.length !== 1) problems.push(`${tables.length} tables in the <noscript>`);
  const rows = [...inner.querySelectorAll("tbody tr")].map((tr) => tr.getAttribute("data-code"));
  const want = [...data.globals, ...data.countries].map((r) => r.code);
  if (rows.length !== want.length) problems.push(`${rows.length} rows, want ${want.length}`);
  if ([...want].sort().join() !== [...rows].sort().join()) problems.push("the rows are not one per chart");
  if (inner.querySelector("button")) problems.push("a button in the no-JavaScript copy");
  return problems;
}

describe("the replay's no-JavaScript table", () => {
  for (const [lang, labels] of [["en", EN_REPLAY_LABELS], ["es", ES_REPLAY_LABELS]] as const) {
    it(`${lang}: the player renders one <noscript> with the multiples, one row per chart, right after its root`, () => {
      const data = buildReplayData(lang);
      const html = renderToStaticMarkup(<DaiDaiReplay data={data} labels={labels} />);
      expect(noscriptProblems(html, data)).toEqual([]);
      // 66 countries and the two Billboard globals, as the page states.
      expect(data.countries.length + data.globals.length).toBeGreaterThan(60);
      expect(html).toContain(labels.multiplesTitle);
    });

    it(`${lang}: negative control, the same render with the <noscript> cut out fails`, () => {
      const data = buildReplayData(lang);
      const html = renderToStaticMarkup(<DaiDaiReplay data={data} labels={labels} />);
      const cut = html.replace(/<noscript>[\s\S]*<\/noscript>/, "");
      expect(cut).not.toBe(html);
      expect(noscriptProblems(cut, data)).toContain("no <noscript> directly after the player's root");
    });
  }
});

describe("the pages no longer render it themselves", () => {
  const pages = ["app/dai-dai/page.tsx", "app/dai-dai/es/page.tsx"];
  /** Whether page source renders the multiples or a <noscript> of its own.
   *  Comments are set aside: the pages' comments say where the table went. */
  const rendersOwnCopy = (src: string) => {
    const code = src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    return /<DaiDaiReplayMultiples\b/.test(code) || /<noscript\b/.test(code);
  };

  it("neither page.tsx renders DaiDaiReplayMultiples or <noscript>", () => {
    for (const p of pages) {
      const src = read(p);
      expect(rendersOwnCopy(src), p).toBe(false);
      expect(src, p).not.toMatch(/import DaiDaiReplayMultiples/);
      // The player itself is still on the page.
      expect(src, p).toMatch(/<DaiDaiReplay data=\{replayData\}/);
    }
  });

  it("negative control: the block the English page shipped fails", () => {
    const shipped = `<noscript>\n            <DaiDaiReplayMultiples data={replayData} labels={EN_REPLAY_LABELS} />\n          </noscript>`;
    expect(rendersOwnCopy(shipped)).toBe(true);
  });
});
