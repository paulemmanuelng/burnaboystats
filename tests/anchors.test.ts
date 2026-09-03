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
          // Defined before the desktop wrapper opens, or in a mobile component.
          return gateAt === -1 || idAt < gateAt;
        });
        if (!reachable) bad.push(`${file} -> #${a} (only inside .desktopOnly)`);
      }
    }
    expect(bad).toEqual([]);
  });
});
