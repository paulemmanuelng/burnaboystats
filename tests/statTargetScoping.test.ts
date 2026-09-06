import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { formatStat, applyAnchoredReplace } from "../scripts/stats-lib.mjs";

/**
 * A metric's pattern must match the value that sits AT its anchor.
 *
 * `applyAnchoredReplace` rewrites the FIRST pattern match after the anchor. If
 * the pattern cannot match the field's current value, it does not fail — it
 * walks on and rewrites the next thing that DOES match, which is some other
 * field entirely.
 *
 * That is not hypothetical. `dai-dai-video-views` shipped `format: "M0"` with
 * `pattern: "\\d+M"`. The day the video passed a billion the display became
 * "1.01B", `\d+M` no longer matched it, and the next match after the anchor was
 * the line below:
 *
 *     export const DAI_DAI_SPOTIFY_STREAMS = "418M";
 *
 * The bot would have written the video's view count into the Spotify streams
 * field — a wrong number published under a different metric's name, with the
 * run reporting success. The guard is to check every target against the file it
 * actually edits, at the value it actually holds.
 */
const cfg = JSON.parse(readFileSync("scripts/watched-metrics.json", "utf8"));

describe("stat pipeline targets are scoped to their own field", () => {
  it("every target's pattern matches the value at its own anchor", () => {
    const wrong: string[] = [];
    for (const m of cfg.metrics) {
      for (const t of m.siteTargets ?? []) {
        const src = readFileSync(t.file, "utf8");
        const at = src.indexOf(t.anchor);
        if (at < 0) { wrong.push(`${m.id}: anchor not found in ${t.file}`); continue; }
        // the slice from the anchor to the end of that statement
        const stmt = src.slice(at, at + src.slice(at).indexOf(";") + 1);
        const re = new RegExp(t.pattern);
        const hit = re.exec(stmt);
        if (!hit) {
          const after = src.slice(at);
          const stray = new RegExp(t.pattern).exec(after);
          wrong.push(
            `${m.id}: pattern ${t.pattern} does not match its own statement ` +
              `(${stmt.trim().slice(0, 60)}) — the next match after the anchor is ` +
              `${stray ? JSON.stringify(stray[0]) : "nothing"}, which is a DIFFERENT field`
          );
        }
      }
    }
    expect(wrong).toEqual([]);
  });

  it("a formatted value still matches the pattern that will rewrite it", () => {
    // Round-trip: format a plausible live reading, write it, and confirm the
    // result is still matchable — otherwise the NEXT run walks off the anchor.
    const wrong: string[] = [];
    for (const m of cfg.metrics) {
      for (const t of m.siteTargets ?? []) {
        const base = m.baseline;
        if (typeof base !== "number") continue;
        const src = readFileSync(t.file, "utf8");
        for (const mult of [1, 1.02, 1.5]) {
          const out = formatStat(Math.round(base * mult), t.format);
          if (out == null) continue;
          const repl = t.template ? t.template.replace("%s", out) : out;
          const res = applyAnchoredReplace(src, t.anchor, t.pattern, repl);
          if (!res.applied) continue;
          const again = applyAnchoredReplace(res.text, t.anchor, t.pattern, repl);
          // `applied: false` with reason "already current" is SUCCESS — the
          // value is identical, so there is nothing to rewrite. The caller in
          // apply-stat-updates.mjs treats that reason the same way. Only a
          // genuine miss means the pattern has walked off its own field.
          if (!again.applied && again.reason !== "already current")
            wrong.push(
              `${m.id}: after writing ${out}, the pattern no longer matches it — ` +
                `the next run would rewrite a different field (${again.reason})`
            );
        }
      }
    }
    expect(wrong).toEqual([]);
  });
});
