import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Colour literals belong in globals.css, and nowhere else.
 *
 * Light mode is not a stylesheet — it is a property of the tokens. A hex typed
 * into a module is a colour that cannot theme, and it fails silently: the page
 * still renders, still passes review in dark, and only looks wrong to the one
 * reader who chose the other theme. Six hundred and twelve of them had
 * accumulated before anyone counted.
 *
 * So the rule is enforced rather than remembered. Every literal still in a
 * module is listed in docs/design/theming/literal-allowlist.json WITH A REASON,
 * and a new one fails this test. The allowlist is not an amnesty: half of it is
 * ink sitting on a fill that deliberately does not theme, and the rest are
 * recorded in deferred.json as sites where no existing token is byte-identical
 * in dark — which is the bar this migration set itself.
 *
 * The second rule is the one that let the "two layouts" bug ship four times: a
 * token declared inside a module resolves in one layout's tree and not the
 * other's. Tokens are declared once, on :root — and on the masthead island,
 * which re-resolves that same list against its own colour-scheme.
 */

const ROOT = process.cwd();
const LITERAL = /#[0-9a-fA-F]{3,8}\b|rgba?\((?![^)]*\bfrom\b)[^)]*\)/g;

/** Blank out block comments, preserving offsets so line numbers stay true. */
function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
}

function modules(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) modules(p, out);
    else if (e.endsWith(".module.css")) out.push(p.slice(ROOT.length + 1));
  }
  return out;
}

const FILES = modules(join(ROOT, "app"));
const allow: { file: string; literal: string; reason: string }[] = JSON.parse(
  readFileSync(join(ROOT, "docs/design/theming/literal-allowlist.json"), "utf8")
);

/** How many times each (file, literal) pair is permitted. */
const budget = new Map<string, number>();
for (const a of allow) {
  const k = `${a.file} ${a.literal.toLowerCase()}`;
  budget.set(k, (budget.get(k) ?? 0) + 1);
}

describe("colour literals live in globals.css", () => {
  it("no module introduces a colour that cannot theme", () => {
    const spent = new Map<string, number>();
    const offenders: string[] = [];
    for (const f of FILES) {
      const src = stripComments(readFileSync(join(ROOT, f), "utf8"));
      src.split("\n").forEach((line, i) => {
        for (const m of line.match(LITERAL) ?? []) {
          const lit = m.replace(/\s+/g, " ");
          const k = `${f} ${lit.toLowerCase()}`;
          const used = (spent.get(k) ?? 0) + 1;
          spent.set(k, used);
          if (used > (budget.get(k) ?? 0)) {
            offenders.push(
              `${f}:${i + 1}  ${lit}  - use a token from app/globals.css, or add it to ` +
                `docs/design/theming/literal-allowlist.json with the reason it cannot theme`
            );
          }
        }
      });
    }
    expect(offenders).toEqual([]);
  });

  it("every allowlisted literal says why it is exempt", () => {
    const mute = allow.filter((a) => !a.reason || a.reason.trim().length < 12);
    expect(mute, "an allowlist entry without a reason is just a hex").toEqual([]);
  });

  it("the allowlist does not quietly grow", () => {
    // A number, so a change that adds twenty exemptions has to say so out loud.
    expect(allow.length).toBeLessThanOrEqual(61);
  });

  it("no module declares a design token", () => {
    const bad: string[] = [];
    for (const f of FILES) {
      const src = stripComments(readFileSync(join(ROOT, f), "utf8"));
      src.split("\n").forEach((line, i) => {
        // Anywhere on the line, not just at its start: `.x { --tok: red; }` is
        // one line and was the shape this missed the first time it was written.
        // `var(--tok)` is a USE, not a declaration, so it must not match.
        for (const m of line.matchAll(/(^|[^-\w)])(--[a-z0-9-]+)\s*:/gi)) {
          const before = line.slice(0, m.index ?? 0);
          if (/var\(\s*$/.test(before)) continue;
          bad.push(`${f}:${i + 1}  ${m[2]}  in  ${line.trim()}`);
        }
      });
    }
    expect(
      bad,
      "a token declared in a module resolves in one layout's tree and not the other's - declare it on :root in globals.css"
    ).toEqual([]);
  });
});
