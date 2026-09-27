import { render, fireEvent, within } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildReplayData } from "../app/components/daiDaiReplayData";
import { EN_REPLAY_LABELS, ES_REPLAY_LABELS } from "../app/components/daiDaiReplayLabels";
import DaiDaiReplay from "../app/components/DaiDaiReplay";

/**
 * The replay's two Billboard tiles on a phone (Paul, 27 Sep 2026, iPhone
 * Safari): "GLOBAL 2…" and "GLOBAL E…", the sub-line split "7 wk at No." /
 * "1 so far". "The global 200 here and the excl should be readable."
 *
 * The names now print in full — the phone stacks the two tiles, and nothing
 * ellipsises a name at any width — and the sub-line holds "No. 1" together
 * with U+00A0 at the draw, the way the post card does, while the label
 * strings keep the plain space the site spells "No. 1" with.
 */

const css = readFileSync(join(process.cwd(), "app/components/DaiDaiReplay.module.css"), "utf8");

/** A top-level rule's declarations, or "" when there is none. */
const ruleOf = (src: string, selector: string) => {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|\\n)${esc} \\{([^}]*)\\}`).exec(src)?.[1] ?? "";
};
/** The phone block: from its @media line to the closing brace at column 0. */
const phoneOf = (src: string) => {
  const at = src.indexOf("@media (max-width: 900px) {");
  if (at < 0) return "";
  const end = src.indexOf("\n}\n", at);
  return src.slice(at, end < 0 ? undefined : end);
};
/** A rule inside the phone block, indented two spaces. */
const phoneRuleOf = (src: string, selector: string) => {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\n {2}${esc} \\{([^}]*)\\n {2}\\}`).exec(phoneOf(src))?.[1] ?? "";
};

/** The name is cut when its rule ellipsises it (or hides what overflows). */
const truncates = (rule: string) => /text-overflow:\s*ellipsis/.test(rule) || /overflow:\s*hidden/.test(rule);
/** The phone stacks the two tiles when its .tiles rule is one column. */
const stacks = (src: string) => /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*;/.test(phoneRuleOf(src, ".tiles"));
/** Stacked rows share one height, so neither tile is taller. */
const evenRows = (src: string) => /grid-auto-rows:\s*1fr\s*;/.test(phoneRuleOf(src, ".tiles"));

// The shipped CSS (origin/main, 27 Sep 2026): the .tileName rule verbatim, and
// the phone block cut to its tile lines, each verbatim. The negative control.
const SHIPPED_TILE_NAME = `
.tileName {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`;
const SHIPPED_PHONE = `
@media (max-width: 900px) {
  .readout {
    font-size: 22px;
  }
  .tileNameLong {
    display: none;
  }
  .tileNameShort {
    display: inline;
  }
}
`;

describe("the global tiles' names print in full", () => {
  it("no rule ellipsises or clips a tile name, at any width", () => {
    expect(truncates(ruleOf(css, ".tileName"))).toBe(false);
    expect(ruleOf(css, ".tileName")).not.toMatch(/white-space:\s*nowrap/);
    for (const sel of [".tileName", ".tileNameLong", ".tileNameShort"]) expect(truncates(phoneRuleOf(css, sel)), sel).toBe(false);
    expect(css).not.toMatch(/\.tileName[^{]*\{[^}]*text-overflow/);
  });

  it("the phone stacks the two tiles, one height for both", () => {
    expect(stacks(css)).toBe(true);
    expect(evenRows(css)).toBe(true);
  });

  it("negative control: the shipped CSS truncated the name and kept two tiles side by side", () => {
    expect(ruleOf(SHIPPED_TILE_NAME, ".tileName")).not.toBe("");
    expect(truncates(ruleOf(SHIPPED_TILE_NAME, ".tileName"))).toBe(true);
    expect(phoneOf(SHIPPED_PHONE)).not.toBe("");
    expect(stacks(SHIPPED_PHONE)).toBe(false);
  });
});

// ── The markup ───────────────────────────────────────────────────────────────

const tileOf = (html: string, code: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.querySelector(`div[data-code="${code}"]`);
};
const byClass = (el: Element | null, re: RegExp) =>
  [...(el?.querySelectorAll("span") ?? [])].find((s) => (s.getAttribute("class") ?? "").split(/\s+/).some((c) => re.test(c)));
const subOf = (el: Element | null) => byClass(el, /(^|_)tileSub(_|$)/)?.textContent ?? "";
const shortNameOf = (el: Element | null) => byClass(el, /(^|_)tileNameShort(_|$)/)?.textContent ?? "";
/** "No." or "n.º" left at the end of a line: a plain space before the numeral. */
const splitsNo = (s: string) => /\b(No\.|n\.º) \d/i.test(s);

describe("the tiles' sub-lines", () => {
  for (const [lang, t] of [["en", EN_REPLAY_LABELS], ["es", ES_REPLAY_LABELS]] as const) {
    const data = buildReplayData(lang);
    const html = renderToStaticMarkup(<DaiDaiReplay data={data} labels={t} />);

    it(`${lang}: the poster's tiles carry both names in full and a sub-line that never splits No. 1`, () => {
      expect(data.globals.map((g) => g.code)).toEqual(["GLB", "GLBX"]);
      for (const g of data.globals) {
        const tile = tileOf(html, g.code);
        expect(tile, g.code).not.toBeNull();
        expect(shortNameOf(tile)).toBe(g.name);
        expect(shortNameOf(tile)).not.toMatch(/…/);
        const sub = subOf(tile);
        // The figure is the data's own: weeks at the peak, not a typed number.
        const n = g.weeksAtPeak!;
        expect(n).toBeGreaterThan(1);
        const want = t.tileSoFar.replace("{n}", String(n)).replace(/\b(No\.|n\.º) (?=\d)/gi, "$1 ");
        expect(sub).toBe(want);
        expect(sub).toMatch(lang === "en" ? /No\. 1/ : /n\.º 1/);
        expect(splitsNo(sub)).toBe(false);
      }
      expect(data.globals.map((g) => g.name)).toEqual(["Global 200", "Global Excl. US"]);
    });
  }

  it("the words are written out, singular for one week, and the labels keep the plain space", () => {
    expect(EN_REPLAY_LABELS.tileSoFar).toBe("{n} weeks at No. 1 so far");
    expect(EN_REPLAY_LABELS.tileSoFarOne).toBe("{n} week at No. 1 so far");
    expect(ES_REPLAY_LABELS.tileSoFar).toBe("{n} semanas en el n.º 1 hasta ahora");
    expect(ES_REPLAY_LABELS.tileSoFarOne).toBe("{n} semana en el n.º 1 hasta ahora");
    for (const t of [EN_REPLAY_LABELS, ES_REPLAY_LABELS]) {
      expect(t.tileSoFar).not.toMatch(/ /);
      expect(t.tileSoFarOne).not.toMatch(/ /);
    }
  });

  it("a frame with one week at No. 1 reads 'week', not 'weeks'", () => {
    const data = buildReplayData("en");
    const g = data.globals.find((x) => x.code === "GLBX")!;
    const first = g.pts.findIndex((p) => p.s === "on" && p.p === 1);
    expect(first).toBeGreaterThan(0);
    const { container } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    const s = within(container).getByRole("slider");
    fireEvent.keyDown(s, { key: "Home" });
    for (let i = 0; i < first; i++) fireEvent.keyDown(s, { key: "ArrowRight" });
    expect(s.getAttribute("aria-valuenow")).toBe(String(first));
    expect(subOf(container.querySelector('div[data-code="GLBX"]'))).toBe("1 week at No. 1 so far");
  });

  it("negative control: the shipped sub-line split No. 1", () => {
    // As /dai-dai rendered it on 27 Sep 2026.
    const shipped = '<div data-code="GLBX"><span class="DaiDaiReplay_tileSub__x">10 wk at No. 1 so far</span></div>';
    expect(splitsNo(subOf(tileOf(shipped, "GLBX")))).toBe(true);
    const shippedEs = '<div data-code="GLBX"><span class="DaiDaiReplay_tileSub__x">10 sem. en el n.º 1 hasta ahora</span></div>';
    expect(splitsNo(subOf(tileOf(shippedEs, "GLBX")))).toBe(true);
  });
});
