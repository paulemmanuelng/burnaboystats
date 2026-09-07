import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * The strength of every colour mix on the site, pinned.
 *
 * A `color-mix(in srgb, var(--tok) N%, transparent)` is a colour whose VALUE
 * lives in that N. The colour-literal guard next door cannot see it: there is
 * no hex to find, the token is legitimate, and the declaration reads as
 * correct at any N. So an N could change — and one did, twice, silently.
 *
 * The --wash-strength migration rewrote 95 of these to `calc(N% * var(...))`.
 * Two of them had briefly been swapped for a token that was consolidated away
 * an hour later, and when they were written back they got the site's usual 16%
 * rather than the 13% they actually held. --wash-strength is 1 in dark, so
 * both plates gained three points of gold in a theme the whole migration had
 * promised not to touch. Nothing failed. It took a two-server render diff and
 * an eight-agent source audit to find three units of alpha.
 *
 * This file is the cheap version of that audit: the (token, percentage) pairs
 * per file, checked in. Changing an existing mix fails here and has to be said
 * out loud in the snapshot, which is the same bargain literal-allowlist.json
 * strikes for hex values.
 *
 * When a change IS intended, regenerate rather than hand-edit:
 *   npx vitest run tests/mixStrengths.test.ts -u   # no — see below
 * There is no -u for this; run the generator in the failure message. Keeping it
 * manual is the point: the diff in the snapshot is the record of the decision.
 */

const ROOT = process.cwd();
const SNAPSHOT = "docs/design/theming/mix-strengths.json";

/**
 * A mix and the strength it is used at.
 *
 * `calc(` is optional because half the sites went through --wash-strength and
 * half did not; both forms carry their number in the same place, and it is the
 * number this file is about. Only var()-based mixes are pinned — a mix of two
 * literals is the colour-literal guard's business, not this one.
 */
const MIX = /color-mix\(\s*in srgb,\s*var\((--[a-z0-9-]+)\)\s*(?:calc\(\s*)?(\d+(?:\.\d+)?)%/g;

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|css)$/.test(p)) out.push(p);
  }
  return out;
}

/** The current state of the tree, in the snapshot's own shape. */
function scan(): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const f of walk("app")) {
    const hits = [...readFileSync(f, "utf8").matchAll(MIX)].map(
      (m) => `${m[1]} ${m[2]}%`
    );
    if (hits.length) out[f] = hits.sort();
  }
  return out;
}

const snapshot: Record<string, string[]> = JSON.parse(
  readFileSync(join(ROOT, SNAPSHOT), "utf8")
);

describe("colour-mix strengths are pinned", () => {
  it("no mix changes strength without saying so", () => {
    const now = scan();
    const drift: string[] = [];

    for (const file of new Set([...Object.keys(snapshot), ...Object.keys(now)])) {
      const was = snapshot[file] ?? [];
      const is = now[file] ?? [];
      if (was.join("|") === is.join("|")) continue;

      // Report the pairs, not the arrays: "which mix moved" is the useful line,
      // and a file that gained one site should not print its other twelve.
      const count = (list: string[]) => {
        const m = new Map<string, number>();
        for (const x of list) m.set(x, (m.get(x) ?? 0) + 1);
        return m;
      };
      const a = count(was);
      const b = count(is);
      for (const k of new Set([...a.keys(), ...b.keys()])) {
        const from = a.get(k) ?? 0;
        const to = b.get(k) ?? 0;
        if (from !== to) drift.push(`${file}  ${k}  x${from} -> x${to}`);
      }
    }

    expect(
      drift,
      `A colour mix changed strength. If that is intended, regenerate the snapshot and let the diff record it:\n` +
        `  node -e "const fs=require('fs'),p=require('path');const M=/color-mix\\\\(\\\\s*in srgb,\\\\s*var\\\\((--[a-z0-9-]+)\\\\)\\\\s*(?:calc\\\\(\\\\s*)?(\\\\d+(?:\\\\.\\\\d+)?)%/g;const w=(d,o=[])=>{for(const e of fs.readdirSync(d)){if(e==='node_modules'||e==='.next')continue;const q=p.join(d,e);fs.statSync(q).isDirectory()?w(q,o):/\\\\.(tsx?|css)$/.test(q)&&o.push(q)}return o};const out={};for(const f of w('app')){const h=[...fs.readFileSync(f,'utf8').matchAll(M)].map(m=>m[1]+' '+m[2]+'%');if(h.length)out[f]=h.sort()}fs.writeFileSync('${SNAPSHOT}',JSON.stringify(Object.fromEntries(Object.keys(out).sort().map(k=>[k,out[k]])),null,2)+'\\\\n')"\n`
    ).toEqual([]);
  });

  it("the snapshot has no entry for a file that is gone", () => {
    const live = new Set(walk("app"));
    const stale = Object.keys(snapshot).filter((f) => !live.has(f));
    expect(stale, "a snapshot entry for a deleted file hides the next change").toEqual([]);
  });
});
