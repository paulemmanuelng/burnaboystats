import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * The listeners map keeps its own look while the tour map changes.
 *
 * /music/listeners imported its frame, its + and − buttons, its floating card
 * and its unplayed-land colour from the TOUR map's stylesheet
 * (records/tours/map/map.module.css). The 30 Sep 2026 tour-map redesign drops
 * the + and −, puts the card inside the frame and recolours the land (design
 * response, items 1, 2, 27 and 30) — and item 73 says the listeners map must
 * not change with it. So the shared parts moved, rule for rule, to
 * components/worldMap.module.css, and this file holds the listeners map to
 * them.
 */

const LISTENER_MAP = "app/components/ListenerMap.tsx";
const SHARED = "app/components/worldMap.module.css";

/** The shipped import line, 30 Sep 2026, before the move. */
const SHIPPED_IMPORT = 'import mapStyles from "../records/tours/map/map.module.css";';

const importsTourSheet = (src: string) => /from\s+"[^"]*records\/tours\/map\/map\.module\.css"/.test(src);

/** Declarations of one exact selector at the top level (comments and @media
 *  blocks stripped, so the coarse-pointer 44px does not overwrite the 34px). */
const decls = (css: string, selector: string) => {
  const out: Record<string, string> = {};
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/@media[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g, "");
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].trim() !== selector) continue;
    for (const d of m[2].split(";")) {
      const i = d.indexOf(":");
      if (i > 0) out[d.slice(0, i).trim()] = d.slice(i + 1).trim();
    }
  }
  return out;
};

describe("the listeners map does not read the tour map's stylesheet", () => {
  const src = readFileSync(LISTENER_MAP, "utf8");

  it("imports the shared world-map module instead", () => {
    expect(importsTourSheet(src)).toBe(false);
    expect(src).toContain('import mapStyles from "./worldMap.module.css";');
  });

  it("negative control: the shipped import is the tour map's sheet", () => {
    expect(importsTourSheet(SHIPPED_IMPORT)).toBe(true);
  });

  it("every class it takes from the shared module exists there", () => {
    const css = readFileSync(SHARED, "utf8");
    const used = [...new Set([...src.matchAll(/mapStyles\.(\w+)/g)].map((m) => m[1]))];
    expect(used.length).toBeGreaterThan(5);
    const missing = used.filter((c) => !new RegExp(`\\.${c}\\b`).test(css));
    expect(missing).toEqual([]);
  });
});

describe("the listeners map keeps its + and −, its floating card and its colours", () => {
  const css = readFileSync(SHARED, "utf8");

  it("the zoom buttons: 34px, 44px on a coarse pointer", () => {
    expect(decls(css, ".zoomBtn")).toMatchObject({ width: "34px", height: "34px", color: "var(--gold-bright-ink)" });
    expect(css).toMatch(/@media \(pointer: coarse\) \{\s*\.zoomBtn \{ width: 44px; height: 44px; \}/);
  });

  it("the card floats, fixed, with its gold edge and arrow", () => {
    expect(decls(css, ".card")).toMatchObject({ position: "fixed", "pointer-events": "none", border: "1px solid var(--gold)" });
    expect(decls(css, ".cardAbove .arrow")["border-top"]).toBe("7px solid var(--gold)");
  });

  it("the unplayed land keeps the well colour and the fixed dark edge", () => {
    expect(decls(css, ".off")).toMatchObject({
      fill: "var(--bg-soft-2)",
      stroke: "color-mix(in srgb, var(--scrim-base) 90%, transparent)",
    });
  });

  it("negative control: the tour map's redesigned card (inside the frame, --rule edge) would fail", () => {
    const redesigned = `.card { position: absolute; border: 1px solid var(--rule); }`;
    expect(decls(redesigned, ".card").position).not.toBe("fixed");
    expect(decls(redesigned, ".card").border).not.toBe("1px solid var(--gold)");
  });
});
