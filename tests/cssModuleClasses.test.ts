import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve, basename } from "node:path";

// `styles.foo` where the CSS module has no `.foo` is silent. React drops a
// className of `undefined` entirely, so nothing appears in the DOM, nothing
// warns, no test fails — the element just renders unstyled and looks almost
// right. On /methodology it had left four paragraphs at the global 16px with no
// measure, and an inline link to /contact rendering WHITE WITH NO UNDERLINE,
// indistinguishable from the sentence around it. An invisible link, in the
// paragraph inviting people to report accessibility problems.
//
// Dynamic access — styles[`kind_${e.kind}`] — is deliberately not matched here;
// only literal dot access can be checked statically, and flagging the dynamic
// form would make this file lie about classes that are used.

const ROOT = resolve(__dirname, "..", "app");

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((e) => {
    const p = join(dir, e);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(ROOT);
const tsx = files.filter((f) => f.endsWith(".tsx"));

/** Class names a CSS module actually defines. */
const definedIn = (cssPath: string) => {
  const src = readFileSync(cssPath, "utf8");
  return new Set([...src.matchAll(/\.([A-Za-z][\w-]*)/g)].map((m) => m[1]));
};

/** Resolve `import styles from "./x.module.css"` to a path on disk. */
const moduleImportedBy = (tsxPath: string): string | null => {
  const src = readFileSync(tsxPath, "utf8");
  const m = src.match(/import\s+styles\s+from\s+"([^"]+\.module\.css)"/);
  if (!m) return null;
  const p = resolve(dirname(tsxPath), m[1]);
  return files.includes(p) ? p : null;
};

describe("every styles.X resolves to a class the module defines", () => {
  it("has no dangling class references", () => {
    const dangling: string[] = [];
    for (const f of tsx) {
      const css = moduleImportedBy(f);
      if (!css) continue;
      const defined = definedIn(css);
      const used = new Set([...readFileSync(f, "utf8").matchAll(/styles\.([A-Za-z]\w*)/g)].map((m) => m[1]));
      for (const name of used) {
        if (!defined.has(name)) {
          dangling.push(`${f.replace(`${ROOT}/`, "app/")} → styles.${name} (not in ${basename(css)})`);
        }
      }
    }
    expect(
      dangling.sort(),
      "these render with no className at all — React drops an undefined one, so the element is unstyled and nothing warns",
    ).toEqual([]);
  });

  it("is actually looking at something", () => {
    // A resolver bug that silently matched nothing would make the check above
    // pass forever. Pin that it found modules and references to compare.
    const withModules = tsx.filter((f) => moduleImportedBy(f));
    expect(withModules.length).toBeGreaterThan(20);
  });
});
