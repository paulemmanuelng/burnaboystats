import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import config from "../scripts/watched-metrics.json";

// The stats bot edits real site files by anchored find/replace. If an anchor or
// pattern silently stops matching, the metric just never applies — and because
// an unchanged figure reports "ok", the breakage stays invisible until the
// number moves and quietly fails to update. That happened once (patterns were
// double-escaped, so `[\\d.]` matched a literal backslash instead of digits),
// so these guards run on every commit.

const targets = config.metrics.flatMap((m) =>
  (m as { siteTargets?: { file: string; anchor: string; pattern: string; template?: string; format: string }[] }).siteTargets?.map(
    (t) => ({ id: m.id, ...t })
  ) ?? []
);

describe("watched-metrics site targets", () => {
  it("has at least one target wired", () => {
    expect(targets.length).toBeGreaterThan(0);
  });

  it("every anchor still exists in its target file", () => {
    for (const t of targets) {
      const src = readFileSync(t.file, "utf8");
      expect(src.includes(t.anchor), `${t.id} → anchor missing in ${t.file}: ${t.anchor}`).toBe(true);
    }
  });

  it("every pattern matches something after its anchor", () => {
    for (const t of targets) {
      const src = readFileSync(t.file, "utf8");
      const from = src.indexOf(t.anchor);
      const found = new RegExp(t.pattern).test(src.slice(from, from + 800));
      expect(found, `${t.id} → pattern ${t.pattern} matches nothing after anchor in ${t.file}`).toBe(true);
    }
  });

  // The double-escape bug: `\\d` in the JSON parses to a literal backslash + d.
  it("no pattern is double-escaped", () => {
    for (const t of targets) {
      expect(t.pattern.includes("\\\\"), `${t.id} → pattern is double-escaped: ${t.pattern}`).toBe(false);
    }
  });

  it("every metric id is unique", () => {
    const ids = config.metrics.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
