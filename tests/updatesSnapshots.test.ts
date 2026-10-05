import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { updates } from "../app/data/updates";

/**
 * A dated updates.ts entry is a SNAPSHOT (owner ruling, 4 Oct 2026): a running
 * total it states is the figure of its own day. Interpolated from the live
 * data, the entry dated 23 Sep 2026 — the nine Nigerian plaques of that day's
 * sweep, "Burna Boy 239 -> 248" in commit 86c3863f — read "250 plaques in all"
 * on /updates and in the RSS feed by 4 Oct, and the 8 Sep and 5 Jul garage
 * entries counted a car bought on 23 Sep (debug pass 4 Oct 2026, C-02 and the
 * missed item beside it).
 *
 * So an entry may interpolate only a FIXED figure — a body's published
 * threshold, read from certThresholds.ts so a typo cannot creep in beside the
 * register's own number. Anything else in a `${…}` is refused, whatever it is
 * called, and the file imports nothing that could supply a running total.
 */

const SRC = readFileSync("app/data/updates.ts", "utf8");

/** The `${…}` expressions in the file's template literals. */
const interpolations = (src: string): string[] => [...src.matchAll(/\$\{([^}]*)\}/g)].map((m) => m[1].trim());

/** An interpolation of a fixed threshold: `(2 * esSingle.platinum!).toLocaleString("en-US")`
 *  or `dkSingle.gold!.toLocaleString("en-US")` — one of the per-country single
 *  levels declared at the top of the file from CERT_THRESHOLDS. */
const THRESHOLD = /^\(?(?:\d+ \* )?[a-z]{2}Single\.(?:silver|gold|platinum|diamond)!\)?\.toLocaleString\("en-US"\)$/;

/** What is not a fixed figure in the given source. */
const runningTotals = (src: string) => interpolations(src).filter((x) => !THRESHOLD.test(x));

/** Every module the file imports a value from. */
const imports = (src: string) => [...src.matchAll(/^import\s+(?!type\b)[^;]*?from\s+"([^"]+)";/gm)].map((m) => m[1]);

describe("dated updates are snapshots: no running total is interpolated", () => {
  it("every `${…}` in updates.ts is a fixed threshold", () => {
    expect(runningTotals(SRC)).toEqual([]);
    // Not vacuous: the thresholds the Dai Dai and Alone entries print are still
    // interpolated, and the check accepts them.
    expect(interpolations(SRC).length).toBeGreaterThan(3);
  });

  it("imports only the thresholds — never the cars, the certifications or any other running total", () => {
    expect(imports(SRC)).toEqual(["./certThresholds"]);
  });

  it("negative control: the 23 Sep entry and the garage lines as they shipped are refused", () => {
    // app/data/updates.ts at 3e4dedf4 (origin/main, 4 Oct 2026), verbatim.
    const shipped = [
      "and “Ye” rose to Gold — ${totalAwards()} plaques in all.`,",
      "text: `A correction to the garage total, now ${totalValueFormatted} across ${carCount} cars: the Bugatti",
      "with his confirmed collection now at ${carCount} cars worth a reported ${totalValueFormatted}.`,",
    ].join("\n");
    expect(runningTotals(shipped)).toEqual(["totalAwards()", "totalValueFormatted", "carCount", "carCount", "totalValueFormatted"]);
    expect(imports('import { carCount, totalValueFormatted } from "./cars";\nimport { totalAwards } from "./certifications";\n')).toEqual([
      "./cars",
      "./certifications",
    ]);
  });

  it("the 23 Sep sweep entry states its own day's total, 248", () => {
    const e = updates.find((u) => u.date === "2026-09-23" && u.text.startsWith("Nine more Nigerian plaques"))!;
    expect(e.text).toMatch(/— 248 plaques in all\.$/);
    // What /updates and /rss.xml printed on 4 Oct 2026 (live, debug pass C-02).
    expect(e.text).not.toContain("250 plaques in all");
  });
});
