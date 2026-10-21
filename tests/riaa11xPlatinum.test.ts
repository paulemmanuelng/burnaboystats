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
 */

const RIAA_LEVEL = 11;
const RECORDS = [
  ["wizkid", "One Dance"],
  ["tems", "Wait For U"],
] as const;

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

describe("both US plaques are 11x Platinum, as RIAA prints them", () => {
  it("each row carries { level: Platinum, x: 11 } on RIAA's standard programme", () => {
    for (const [slug, title] of RECORDS) {
      expect(usOf(artistBySlug(slug)!, title), `${slug} — ${title}`).toEqual({ c: "US", level: "Platinum", x: RIAA_LEVEL });
    }
  });

  it("and no other row on the board files either recording's US plaque differently", () => {
    for (const [, title] of RECORDS)
      for (const a of afrobeatsArtists)
        for (const r of a.releases.filter((x) => x.title === title))
          expect(r.certs.find((c) => c.c === "US"), `${a.slug} — ${title}`).toEqual({ c: "US", level: "Platinum", x: RIAA_LEVEL });
  });

  it("each is worth 11 × RIAA's Platinum — 1 × Platinum past RIAA's Diamond", () => {
    const platinum = thresholdFor("US", "single", "Platinum")!;
    for (const [slug, title] of RECORDS) {
      const units = unitsForCert(usOf(artistBySlug(slug)!, title)!, "single").units!;
      expect(units, title).toBe(RIAA_LEVEL * platinum);
      expect(units - thresholdFor("US", "single", "Diamond")!, title).toBe(platinum);
    }
  });

  it("the 10 Sep instruction to hold them at Diamond is gone from the data file", () => {
    const src = readFileSync(join(process.cwd(), "app/data/afrobeats.ts"), "utf8");
    // Negative controls: the lines main carried until 21 Oct 2026.
    expect(src).not.toContain("SETTLED (Paul, 10 Sep 2026): THESE STAY DIAMOND.");
    expect(src).not.toContain('Do not "correct" them to 11x');
    expect(src).toContain("US \"ONE DANCE\" AND \"WAIT FOR U\" ARE 11x PLATINUM (Paul, 21 Oct 2026).");
  });
});

describe("Wizkid's hook counts One Dance's Diamonds from the row", () => {
  const wizkid = artistBySlug("wizkid")!;

  it("reads the count the row holds", () => {
    const row = wizkid.releases.find((r) => r.title === "One Dance")!;
    const n = new Set(row.certs.filter((c) => c.level === "Diamond").map((c) => c.c)).size;
    expect(n).toBe(4); // CA, DE, FR, BR — separate bodies, each with its own Diamond
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
    expect(tems.hook).toBe("Holds a US 11× Platinum for “Wait For U” — one of only two on this board who do.");
  });

  it("negative control: the same getter over the 10 Sep Diamond data gives the sentence main served", () => {
    expect(hookOver(tems, asOn10Sep(tems, "Wait For U"))).toBe(
      "Holds a US Diamond for “Wait For U” — one of only two on this board who do.",
    );
  });

  it("'one of only two': Tems and Wizkid are the only artists, Burna Boy included, with a US plaque that high", () => {
    const bar = unitsForCert(usOf(tems, "Wait For U")!, "single").units!;
    const holders = comparableArtists
      .filter((a) => a.releases.some((r) => r.certs.some((c) => c.c === "US" && (unitsForCert(c, r.format).units ?? 0) >= bar)))
      .map((a) => a.slug)
      .sort();
    expect(holders).toEqual(["tems", "wizkid"]);
  });
});
