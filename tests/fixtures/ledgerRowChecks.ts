import { rules, decl, winning } from "./cssRules";

/**
 * Shared checks for the one desktop ledger row (design review 8 Oct 2026,
 * Job 3 · J3-1; fixes 61, 56): tests/ui/certExplorerRow.test.tsx and
 * tests/ui/chartExplorerRow.test.tsx run them on components/ledgerRow.module.css
 * and, as negative controls, on the stylesheets that shipped before it.
 */

/** Whether a stylesheet's @media head applies at a viewport `width`. */
export function mediaAt(width: number) {
  return (m: string | null) => {
    if (m === null) return true;
    if (/prefers-|hover|pointer|print/.test(m)) return false;
    const min = m.match(/min-width:\s*(\d+)px/);
    const max = m.match(/max-width:\s*(\d+)px/);
    return (!min || width >= Number(min[1])) && (!max || width <= Number(max[1]));
  };
}

/** The value the cascade gives `prop` on `selector` at `width` (last rule wins). */
export const at = (css: string, selector: string, prop: string, width: number) => winning(css, selector, prop, mediaAt(width));

const px = (v: string | undefined) => (v === undefined ? NaN : Number.parseFloat(v));

/** The first track of a `grid-template-columns`, in px, when it is fixed. */
export function fixedFirstTrack(columns: string | undefined): number | null {
  const m = columns?.match(/^(\d+(?:\.\d+)?)px\s/);
  return m ? Number(m[1]) : null;
}

/** The column gap of a `gap` shorthand ("0 20px" → 20; "16px 28px" → 28). */
export function columnGap(gap: string | undefined): number {
  const parts = (gap ?? "0").trim().split(/\s+/);
  return px(parts[1] ?? parts[0]);
}

/**
 * Why a ledger stylesheet fails J3-1's row, at a width, or an empty list.
 * `sel` names its row, its pills and its cover — the LedgerRow's own classes,
 * or the classes a shipped stylesheet used.
 */
export function rowProblems(css: string, sel: { row: string; pills: string; cover: string }, width: number, want: { col: number }): string[] {
  const out: string[] = [];
  const cols = at(css, sel.row, "grid-template-columns", width);
  if (cols !== `${want.col}px minmax(0, 1fr)`) out.push(`${sel.row} columns at ${width}: ${cols} (want ${want.col}px minmax(0, 1fr))`);
  if (columnGap(at(css, sel.row, "gap", width)) !== 20) out.push(`${sel.row} column gap at ${width}: ${at(css, sel.row, "gap", width)}`);
  const pad = at(css, sel.row, "padding", width);
  if (pad !== "12px 0") out.push(`${sel.row} padding at ${width}: ${pad} (want 12px 0 — no inset before the title column)`);
  if (at(css, sel.row, "min-height", width) !== "56px") out.push(`${sel.row} min-height: ${at(css, sel.row, "min-height", width)}`);
  const justify = at(css, sel.pills, "justify-content", width);
  if (justify !== "flex-start") out.push(`${sel.pills} justify-content at ${width}: ${justify} (want flex-start)`);
  if (at(css, sel.cover, "width", width) !== "28px" || at(css, sel.cover, "height", width) !== "28px")
    out.push(`${sel.cover}: ${at(css, sel.cover, "width", width)} × ${at(css, sel.cover, "height", width)} (want 28px)`);
  return out;
}

/** Every `:hover` rule on the row that moves it sideways (the pills with it). */
export function hoverShifts(css: string, row: string): string[] {
  return rules(css)
    .filter((r) => r.selector.split(",").some((s) => s.trim() === `${row}:hover`))
    .flatMap((r) =>
      ["padding-left", "padding", "padding-inline", "padding-inline-start", "margin-left", "transform", "translate"]
        .filter((p) => decl(r.body, p) !== undefined)
        .map((p) => `${r.selector} { ${p}: ${decl(r.body, p)} }`),
    );
}

/** The x the first pill starts at: the frame's left edge + the title column + the gap. */
export function pillStart(frameLeft: number, css: string, row: string, width: number): number {
  const col = fixedFirstTrack(at(css, row, "grid-template-columns", width));
  return col === null ? NaN : frameLeft + col + columnGap(at(css, row, "gap", width));
}

/** A centred `max-width` frame's left content edge at a viewport width. */
export function frameLeft(maxWidth: number, padLeft: number, width: number): number {
  return Math.max(0, (width - maxWidth) / 2) + padLeft;
}

/** The left value of a `padding` shorthand ("34px 40px 30px" → 40). */
export function padLeft(padding: string | undefined): number {
  const p = (padding ?? "0").trim().split(/\s+/).map(px);
  return p.length === 4 ? p[3] : p.length >= 2 ? p[1] : p[0];
}
