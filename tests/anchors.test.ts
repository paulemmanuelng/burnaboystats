import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Anchor targets have to exist in the layout that links to them.
 *
 * Both layouts sit in the DOM at once and the desktop half is wrapped in a
 * `.desktopOnly` div that is `display: none` below 900px. An anchor jump to a
 * `display: none` element does nothing — no error, no console warning, the page
 * simply doesn't move. That made all six FAQ category chips dead taps on a
 * phone, and the certifications "Filter by tier" button scrolled to an id that
 * existed nowhere in the repo at all.
 *
 * Neither had a test, because both LOOK right: the markup is there, the href is
 * spelled correctly, and on a desktop browser they work.
 */

function walk(dir: string, out: string[] = []) {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(".tsx")) out.push(p);
  }
  return out;
}

const FILES = walk("app");
const SRC = new Map(FILES.map((f) => [f, readFileSync(f, "utf8")]));

/** Every literal `id="…"` the app renders, and the files rendering it. */
const definedIn = new Map<string, string[]>();
for (const [file, src] of SRC)
  for (const m of src.matchAll(/\bid="([A-Za-z][\w-]*)"/g))
    definedIn.set(m[1], [...(definedIn.get(m[1]) ?? []), file]);

/** Literal anchor references — `href="#x"`, `href="/page#x"`, getElementById. */
function anchorsIn(src: string) {
  return [
    ...[...src.matchAll(/href="(?:[^"#]*)#([A-Za-z][\w-]*)"/g)].map((m) => m[1]),
    ...[...src.matchAll(/getElementById\("([\w-]+)"\)/g)].map((m) => m[1]),
  ];
}

/**
 * The [start, end) spans of each `<div className={styles.desktopOnly}>` block,
 * found by counting <div> and </div> from its opening tag (self-closing divs
 * count as neither; a "<div>" inside a comment is blanked out first, keeping
 * every index where it was). An unclosed block runs to the end of the file,
 * which errs toward calling an id desktop-only.
 */
export function desktopSpans(src: string): [number, number][] {
  const s = src.replace(/\/\*[\s\S]*?\*\//g, (c) => " ".repeat(c.length));
  const spans: [number, number][] = [];
  for (const m of s.matchAll(/<div className=\{styles\.desktopOnly\}>/g)) {
    const tag = /<div\b[^>]*?(\/)?>|<\/div>/g;
    tag.lastIndex = m.index!;
    let depth = 0;
    let end = s.length;
    for (let t = tag.exec(s); t; t = tag.exec(s)) {
      if (t[0] === "</div>") depth--;
      else if (!t[1]) depth++;
      if (depth === 0) {
        end = t.index;
        break;
      }
    }
    spans.push([m.index!, end]);
  }
  return spans;
}

describe("anchor targets", () => {
  it("every literal anchor points at an id the app actually renders", () => {
    const dead: string[] = [];
    for (const [file, src] of SRC)
      for (const a of anchorsIn(src))
        if (!definedIn.has(a)) dead.push(`${file} -> #${a}`);
    expect(dead).toEqual([]);
  });

  it("a mobile screen never jumps to an id only the desktop layout renders", () => {
    // The trap: the id exists, so a naive existence check passes — but every
    // element carrying it is inside a `.desktopOnly` wrapper.
    const bad: string[] = [];
    for (const [file, src] of SRC) {
      if (!/(^|\/)Mobile[A-Z]\w*\.tsx$/.test(file)) continue;
      for (const a of anchorsIn(src)) {
        const defs = definedIn.get(a) ?? [];
        if (!defs.length) continue;
        // Reachable if any defining file renders it outside a desktopOnly wrapper.
        const reachable = defs.some((d) => {
          const s = SRC.get(d)!;
          if (!s.includes("desktopOnly")) return true;
          const idAt = s.indexOf(`id="${a}"`);
          const gateAt = s.indexOf("styles.desktopOnly");
          if (gateAt === -1) return true;
          // Outside every desktopOnly block: before the first opens, or after
          // it closes (a shared section between the two wrappers, as
          // /methodology's #certified-units and #dates are).
          return !desktopSpans(s).some(([from, to]) => idAt > from && idAt < to);
        });
        if (!reachable) bad.push(`${file} -> #${a} (only inside .desktopOnly)`);
      }
    }
    expect(bad).toEqual([]);
  });
});

describe("desktopSpans", () => {
  it("closes a block at its own </div>, nested divs and self-closing ones included", () => {
    const src = `<main><div className={styles.desktopOnly}><div><p id="in" />{/* a <div> in a comment */}</div><div className="x" /></div><section id="out" /></main>`;
    const spans = desktopSpans(src);
    expect(spans).toHaveLength(1);
    const inside = (id: string) => spans.some(([a, b]) => src.indexOf(`id="${id}"`) > a && src.indexOf(`id="${id}"`) < b);
    expect(inside("in")).toBe(true);
    // Negative control: what the old "after the first wrapper opens" rule called desktop-only.
    expect(inside("out")).toBe(false);
    expect(src.indexOf('id="out"') > src.indexOf("styles.desktopOnly")).toBe(true);
  });
});
