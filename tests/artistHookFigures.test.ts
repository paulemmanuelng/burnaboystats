import { describe, it, expect } from "vitest";
import { afrobeatsArtists } from "../app/data/afrobeats";

// A board artist's `hook` is prose, so any figure inside it is a literal the
// derived counts do not reach. Removing "Road Runners" on 27 Aug 2026 took Seyi
// Vibez from 103 plaques to 102 everywhere that computes the number — the page
// title, the stat cards, the intro line — while his hook went on saying "103
// plaques and 114 chart entries" directly above them. It shipped that way.

const certCount = (a: (typeof afrobeatsArtists)[number]) =>
  (a.releases ?? []).reduce((n, r) => n + (r.certs?.length ?? 0), 0);
const chartCount = (a: (typeof afrobeatsArtists)[number]) =>
  (a.charts ?? []).reduce((n, r) => n + (r.entries?.length ?? 0), 0);

describe("artist hooks agree with the data underneath them", () => {
  it("no hook states a plaque count that contradicts the releases", () => {
    const wrong: string[] = [];
    for (const a of afrobeatsArtists) {
      const m = /(\d+)\s+plaques/.exec(a.hook ?? "");
      if (!m) continue;
      const actual = certCount(a);
      if (Number(m[1]) !== actual) wrong.push(`${a.slug}: hook says ${m[1]}, data has ${actual}`);
    }
    expect(wrong).toEqual([]);
  });

  it("no hook states a chart-entry count that contradicts the charts", () => {
    const wrong: string[] = [];
    for (const a of afrobeatsArtists) {
      const m = /(\d+)\s+chart entries/.exec(a.hook ?? "");
      if (!m) continue;
      const actual = chartCount(a);
      if (Number(m[1]) !== actual) wrong.push(`${a.slug}: hook says ${m[1]}, data has ${actual}`);
    }
    expect(wrong).toEqual([]);
  });
});
