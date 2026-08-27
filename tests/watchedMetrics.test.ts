import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import config from "../scripts/watched-metrics.json";
import { applyAnchoredReplace } from "../scripts/stats-lib.mjs";

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

  // The failure this file did NOT catch until it shipped: a target whose anchor
  // is too loose matches the FIRST value after it, not the intended one.
  // `spotify-peak-listeners` anchored on the leaderboard's id with a bare \d+M
  // pattern; Burna Boy's cell there holds a constant rather than a literal, so
  // the first literal belonged to the NEXT artist. The bot overwrote Tyla's
  // peak with his on every run for two days and nothing here noticed.
  it("every target edits its own record, never the next one", () => {
    for (const t of targets) {
      const src = readFileSync(t.file, "utf8");
      const from = src.indexOf(t.anchor) + t.anchor.length;
      const m = new RegExp(t.pattern).exec(src.slice(from));
      const gap = src.slice(from, from + (m?.index ?? 0));
      // How many record openers sit between the anchor and the value it edits.
      // Zero is the normal case, where the anchor already includes `name: "…"`.
      // Exactly one is correct for a `/* live:… */` marker, which is placed
      // immediately BEFORE its own entry precisely so the anchor can be unique
      // — the single `name:` in that gap is the entry's own. Two or more means
      // the pattern has walked out of this record and into the next one, which
      // is the failure this test exists to catch.
      const openers = (gap.match(/\b(?:name|slug):\s*"/g) ?? []).length;
      const allowed = /^\/\* live:/.test(t.anchor) ? 1 : 0;
      expect(
        openers,
        `${t.id} → target walks past its own entry into another record`
      ).toBeLessThanOrEqual(allowed);
    }
  });

  // End to end through the function the bot actually calls, so an escaping or
  // anchoring fault cannot pass the looser checks above and still fail in CI.
  it("every target applies through applyAnchoredReplace", () => {
    for (const t of targets) {
      const src = readFileSync(t.file, "utf8");
      const probe = (t.template ?? "%s").replace("%s", "999");
      const res = applyAnchoredReplace(src, t.anchor, t.pattern, probe);
      expect(res.reason ?? "applied", `${t.id} → ${res.reason}`).not.toBe("anchor not found");
      expect(res.reason ?? "applied", `${t.id} → ${res.reason}`).not.toBe(
        "pattern not found after anchor"
      );
    }
  });

  it("every metric id is unique", () => {
    const ids = config.metrics.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  // The anchor is resolved with indexOf, so a non-unique one silently writes to
  // whichever copy happens to come first in the file. Three anchors matched
  // three times each: `{ name: "Burna Boy", value: "` appears in the 2026 row,
  // the 2025 historical row and the daily-peak board. The bot hit the right one
  // only by source order. Adding a `sub:` field to the 2026 entries — a pure
  // styling edit, to match every other list board — would have redirected the
  // daily write into the 2025 row, rewriting history with today's number.
  // youtubeTotalViews is hand-maintained. kworb's page lists 187 videos summing
  // to 3,187,566,461; the site publishes 343 videos across every channel at
  // 4.0B. Two populations, not two readings of one number — and no wider kworb
  // view exists. While the two were wired together the bot would have published
  // 3.2B over the 4.0B the moment kworb's total passed its baseline, swapping an
  // all-channel figure for a partial one with nothing to show it had happened.
  it("no metric writes the hand-maintained YouTube total", () => {
    const writers = targets.filter((t) => t.anchor.includes("youtubeTotalViews"));
    expect(
      writers.map((t) => t.id),
      "youtubeTotalViews counts every channel; no automated source measures that scope",
    ).toEqual([]);
  });

  it("the kworb YouTube metric is watch-only", () => {
    const m = config.metrics.find((x) => x.id === "youtube-total-views");
    expect(m, "the kworb YouTube watch was removed entirely").toBeTruthy();
    expect(m!.siteTargets ?? [], "a watch-only metric must write nothing").toEqual([]);
    expect(m!.live, "live:true would put it back on the auto-write path").toBeFalsy();
    // check-stats reports metrics with !live, so it is still monitored.
    expect(!m!.live).toBe(true);
  });

  it("every anchor occurs exactly once in its target file", () => {
    for (const t of targets) {
      const src = readFileSync(t.file, "utf8");
      let n = 0;
      for (let i = src.indexOf(t.anchor); i !== -1; i = src.indexOf(t.anchor, i + t.anchor.length)) n++;
      expect(
        n,
        `${t.id} → anchor occurs ${n}x in ${t.file}; indexOf would take the first, which may not be this metric's row`
      ).toBe(1);
    }
  });
});

describe("every leaderboard is ordered by the numbers it prints", () => {
  // Ordering was checked on 1 of 15 boards — and not on the one the stats bot
  // writes three live values into. `streams-2026-{burna,wizkid,tems}` all
  // rewrite the most-streamed board every run, and the three totals sit within
  // ~53M of each other and move most days. On the ordinary day one passes
  // another, the board would render a ranked list contradicting its own numbers.
  const parse = (v: string): number | null => {
    const m = /^([\d.,]+)\s*([KMB])?$/.exec(v.trim());
    if (!m) return null;
    const n = Number(m[1].replace(/,/g, ""));
    if (Number.isNaN(n)) return null;
    return n * ({ K: 1e3, M: 1e6, B: 1e9 }[m[2] ?? ""] ?? 1);
  };

  it("lists descending values, on every board that prints comparable numbers", () => {
    const src = readFileSync("app/data/africasBiggest.ts", "utf8");
    // Each board's id, then every value: "…" literal up to the next id.
    const ids = [...src.matchAll(/id: "([a-z0-9-]+)"/g)];
    const offenders: string[] = [];
    ids.forEach((idm, i) => {
      const start = idm.index!;
      const end = i + 1 < ids.length ? ids[i + 1].index! : src.length;
      const block = src.slice(start, end);
      const values = [...block.matchAll(/value: "([^"]+)"/g)].map((m) => m[1]);
      const nums = values.map(parse);
      // Only judge boards where every printed value is a comparable magnitude.
      if (nums.length < 2 || nums.some((n) => n === null)) return;
      for (let k = 1; k < nums.length; k++) {
        if ((nums[k] as number) > (nums[k - 1] as number)) {
          offenders.push(`${idm[1]}: ${values[k - 1]} is listed above ${values[k]}`);
          break;
        }
      }
    });
    expect(offenders, "a ranked board contradicts its own numbers").toEqual([]);
  });
});

describe("the monthly-listeners leaderboard", () => {
  it("is ordered by the values it displays", () => {
    // StatBox derives its "He leads" badge from whoever sits at row one, so a
    // row out of order publishes a claim the board's own numbers contradict.
    // That is exactly what the mis-aimed write produced.
    const src = readFileSync("app/data/africasBiggest.ts", "utf8");
    const board = src.slice(src.indexOf('id: "monthly-listeners-peak"'));
    const entries = board.slice(0, board.indexOf("]"));
    const peak = /const BURNA_PEAK_LISTENERS = "([\d.]+)M"/.exec(src)![1];
    const values = [
      Number.parseFloat(peak),
      ...[...entries.matchAll(/value: "([\d.]+)M"/g)].map((m) => Number.parseFloat(m[1])),
    ];
    expect(values).toEqual([...values].sort((a, b) => b - a));
  });
});
