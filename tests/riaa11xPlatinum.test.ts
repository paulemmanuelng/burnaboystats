import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { afrobeatsArtists, artistBySlug, diamondCountriesOf, type AfroArtist } from "../app/data/afrobeats";
import { comparableArtists, unitsForCert } from "../app/lib/certUnits";
import { thresholdFor } from "../app/data/certThresholds";

/**
 * Paul, 21 Oct 2026: "then which means our ruling is wrong, it should be x11
 * plat". RIAA's database (tab_active=default-award, read 21 Oct 2026) prints
 * both US awards at 11X PLATINUM:
 *   se=one+dance  default_424119  DRAKE | ONE DANCE (FEAT. WIZKID & KYLA) |
 *                 October 30, 2023 | badge alt "badge DI level 11"
 *   se=tems       default_451587  FUTURE | WAIT FOR U (FEAT. DRAKE & TEMS) |
 *                 July 16, 2026 | badge alt "badge DI level 11"
 * This reverses the 10 Sep 2026 ruling that held both at Diamond. The two hooks
 * that rode on the Diamond now read the rows, so they cannot go false again.
 *
 * 23 Oct 2026 (Paul: "one dance by wizkid x15 platinum in the US"): RIAA's
 * database, re-read that day, prints "One Dance" at 15X PLATINUM —
 *   se=one+dance  default_455530  DRAKE | ONE DANCE (FEAT. WIZKID & KYLA) |
 *                 YOUNG MONEY / CASH MONEY / REPUBLIC RECORDS | SINGLE |
 *                 October 23, 2026 | badge alt "badge DI level 15"
 * (default_424119 is no longer listed) — and "Wait For U" still at level 11
 * (default_451587, July 16, 2026). Each record carries the level its row prints,
 * and is priced by RIAA's rule: N× Platinum = N × 1,000,000 units.
 */

/** RIAA's own Platinum single, 1,000,000 units — the rule, not our table. */
const RIAA_PLATINUM = 1_000_000;
/** The level each row prints, as read on 23 Oct 2026. */
const RECORDS = [
  ["wizkid", "One Dance", 15],
  ["tems", "Wait For U", 11],
] as const;

/** The "One Dance" row as main served it until 23 Oct 2026 (b789d993,
 *  app/data/afrobeats.ts), verbatim up to its US plaque. */
const SHIPPED_UNTIL_2026_10_23 =
  '{ title: "One Dance", kind: "Featured appearances", cover: "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg", certs: [{ c: "US", level: "Platinum", x: 11 },';
/** The multiple on the "One Dance" row's US plaque, read from source text. */
const oneDanceUsX = (src: string) =>
  Number(/\{ title: "One Dance", kind: "Featured appearances"[^\n]*?certs: \[\{ c: "US", level: "Platinum", x: (\d+) \}/.exec(src)?.[1]);

const usOf = (a: { releases: AfroArtist["releases"] }, title: string) =>
  a.releases.find((r) => r.title === title)?.certs.find((c) => c.c === "US");

/** An artist as the 10 Sep 2026 data had it: the same rows, the US plaque on
 *  `title` at Diamond. */
const asOn10Sep = (a: AfroArtist, title: string) => ({
  ...a,
  releases: a.releases.map((r) =>
    r.title === title ? { ...r, certs: r.certs.map((c) => (c.c === "US" ? { c: "US", level: "Diamond" as const } : c)) } : r,
  ),
});

/** The artist's hook, computed by its own getter over other rows. */
const hookOver = (a: AfroArtist, rows: { releases: AfroArtist["releases"] }) => {
  const get = Object.getOwnPropertyDescriptor(a, "hook")?.get;
  expect(get, `${a.slug}'s hook is read from the data, not typed`).toBeTypeOf("function");
  return get!.call(rows) as string;
};

describe("both US plaques carry the level RIAA prints — One Dance 15x, Wait For U 11x", () => {
  it("each row carries { level: Platinum, x: <RIAA's level> } on RIAA's standard programme", () => {
    for (const [slug, title, level] of RECORDS) {
      expect(usOf(artistBySlug(slug)!, title), `${slug} — ${title}`).toEqual({ c: "US", level: "Platinum", x: level });
    }
  });

  it("and no other row on the board files either recording's US plaque differently", () => {
    for (const [, title, level] of RECORDS)
      for (const a of afrobeatsArtists)
        for (const r of a.releases.filter((x) => x.title === title))
          expect(r.certs.find((c) => c.c === "US"), `${a.slug} — ${title}`).toEqual({ c: "US", level: "Platinum", x: level });
  });

  it("each is worth N × RIAA's Platinum — (N − 10) × Platinum past RIAA's Diamond", () => {
    expect(thresholdFor("US", "single", "Platinum")).toBe(RIAA_PLATINUM);
    for (const [slug, title, level] of RECORDS) {
      const units = unitsForCert(usOf(artistBySlug(slug)!, title)!, "single").units!;
      expect(units, title).toBe(level * RIAA_PLATINUM);
      expect(units - thresholdFor("US", "single", "Diamond")!, title).toBe((level - 10) * RIAA_PLATINUM);
    }
  });

  it("negative control: the 11× One Dance main served until 23 Oct 2026 is refused", () => {
    const [, , level] = RECORDS[0];
    // The reader finds the multiple in the row main shipped…
    expect(oneDanceUsX(SHIPPED_UNTIL_2026_10_23)).toBe(11);
    // …and it is not the level RIAA prints, while the data file's is.
    expect(oneDanceUsX(SHIPPED_UNTIL_2026_10_23)).not.toBe(level);
    expect(oneDanceUsX(readFileSync(join(process.cwd(), "app/data/afrobeats.ts"), "utf8"))).toBe(level);
    // And priced, the 11× is 4,000,000 short of the plaque RIAA certified.
    const shipped = unitsForCert({ c: "US", level: "Platinum", x: 11 }, "single").units!;
    const now = unitsForCert(usOf(artistBySlug("wizkid")!, "One Dance")!, "single").units!;
    expect(now - shipped).toBe((level - 11) * RIAA_PLATINUM);
    expect(now).not.toBe(shipped);
  });

  it("the 10 Sep instruction to hold them at Diamond is gone from the data file", () => {
    const src = readFileSync(join(process.cwd(), "app/data/afrobeats.ts"), "utf8");
    // Negative controls: the lines main carried until 21 Oct 2026.
    expect(src).not.toContain("SETTLED (Paul, 10 Sep 2026): THESE STAY DIAMOND.");
    expect(src).not.toContain('Do not "correct" them to 11x');
    expect(src).toContain("US \"ONE DANCE\" AND \"WAIT FOR U\" CARRY RIAA'S PRINTED N× PLATINUM LEVEL (Paul, 21 Oct 2026).");
    // And the 23 Oct 2026 certification is recorded under it, with its row.
    expect(src).toContain("23 Oct 2026: RIAA certified \"One Dance\" 15X PLATINUM — row default_455530");
  });
});

describe("Wizkid's hook counts One Dance's Diamonds from the row", () => {
  const wizkid = artistBySlug("wizkid")!;

  it("reads the count the row holds", () => {
    const row = wizkid.releases.find((r) => r.title === "One Dance")!;
    const n = new Set(row.certs.filter((c) => c.level === "Diamond").map((c) => c.c)).size;
    // CA, DE, FR, BR — separate bodies, each with its own Diamond. Still four at
    // RIAA's 15× Platinum (23 Oct 2026): the US plaque is Platinum-class either way.
    expect(n).toBe(4);
    expect(diamondCountriesOf(wizkid, "One Dance")).toBe("four countries");
    expect(wizkid.hook).toBe(
      "“One Dance” is Diamond in four countries — the deepest certification count on this board after Burna Boy.",
    );
  });

  it("negative control: the same getter over the 10 Sep Diamond data gives the five main served", () => {
    expect(diamondCountriesOf(asOn10Sep(wizkid, "One Dance"), "One Dance")).toBe("five countries");
    expect(hookOver(wizkid, asOn10Sep(wizkid, "One Dance"))).toBe(
      "“One Dance” is Diamond in five countries — the deepest certification count on this board after Burna Boy.",
    );
  });

  it("one country reads singular", () => {
    const one = { releases: [{ title: "X", kind: "Lead singles" as const, certs: [{ c: "FR", level: "Diamond" as const }] }] };
    expect(diamondCountriesOf(one, "X")).toBe("one country");
  });
});

describe("Tems' hook reads her US level from the row", () => {
  const tems = artistBySlug("tems")!;

  it("says 11× Platinum, not Diamond", () => {
    expect(tems.hook).toBe("Holds a US 11× Platinum for “Wait For U” — one of only two on this board with a US certification past Diamond.");
    // The 21 Oct wording, "one of only two on this board who do", stopped being
    // literally true on 23 Oct when One Dance went to 15× (Wizkid no longer holds
    // an 11×), so the claim now names what the two share.
    expect(tems.hook).not.toContain("one of only two on this board who do.");
  });

  it("negative control: the same getter over the 10 Sep Diamond data reads the row's own level", () => {
    expect(hookOver(tems, asOn10Sep(tems, "Wait For U"))).toContain("Holds a US Diamond for “Wait For U”");
  });

  it("'one of only two': Tems and Wizkid are the only artists, Burna Boy included, with a US plaque past Diamond", () => {
    // Past Diamond = more than RIAA's 10,000,000-unit Diamond rung.
    const bar = 10_000_001;
    const holders = comparableArtists
      .filter((a) => a.releases.some((r) => r.certs.some((c) => c.c === "US" && (unitsForCert(c, r.format).units ?? 0) >= bar)))
      .map((a) => a.slug)
      .sort();
    expect(holders).toEqual(["tems", "wizkid"]);
  });
});
