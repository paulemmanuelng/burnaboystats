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

// Figures in a hook are not always digits. Asake's hook said "Seventy-nine
// plaques" while the data held 80, and Victony's said "Three countries have
// certified him" against four -- both sailed past the checks above, which only
// match \d+. Spelled-out numbers need the same guard.
const WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30,
  forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90,
};
/** "ninety-one" -> 91, "eighty" -> 80, "17" -> 17. Null when unparseable. */
const toNumber = (raw: string): number | null => {
  const t = raw.trim().toLowerCase();
  if (/^\d+$/.test(t)) return Number(t);
  const parts = t.split(/[-\s]+/);
  let total = 0;
  for (const p of parts) {
    if (!(p in WORDS)) return null;
    total += WORDS[p];
  }
  return total;
};

const NUM = "\\d+|[a-zA-Z]+(?:-[a-zA-Z]+)?";

describe("hooks agree with the data when the figure is spelled out", () => {
  it("no hook misstates its plaque count in words", () => {
    const wrong: string[] = [];
    for (const a of afrobeatsArtists) {
      const m = new RegExp(`(${NUM})\\s+plaques`, "i").exec(a.hook ?? "");
      if (!m) continue;
      const said = toNumber(m[1]);
      if (said === null) continue;
      const actual = certCount(a);
      if (said !== actual) wrong.push(`${a.slug}: hook says ${m[1]} (${said}), data has ${actual}`);
    }
    expect(wrong).toEqual([]);
  });

  // Only phrasings that mean the artist's OWN country total. "Diamond in five
  // countries" is a claim about one record, not about how many countries have
  // certified the artist, so it must not be swept up here.
  it("no hook misstates how many countries have certified the artist", () => {
    const wrong: string[] = [];
    const forms = [
      new RegExp(`(${NUM})\\s+countries have certified`, "i"),
      new RegExp(`plaques (?:in|across)\\s+(${NUM})\\s+countries`, "i"),
      new RegExp(`across\\s+(${NUM})\\s+countries`, "i"),
    ];
    for (const a of afrobeatsArtists) {
      const hook = a.hook ?? "";
      const m = forms.map((re) => re.exec(hook)).find(Boolean);
      if (!m) continue;
      const said = toNumber(m[1]);
      if (said === null) continue;
      // Victony's hook counts the countries OUTSIDE Nigeria, and says so.
      const countries = new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)));
      if (/outside nigeria/i.test(hook)) countries.delete("NG");
      if (said !== countries.size) {
        wrong.push(`${a.slug}: hook says ${m[1]} (${said}), data has ${countries.size}`);
      }
    }
    expect(wrong).toEqual([]);
  });
});

// Numbers were guarded; SUPERLATIVES were not, and that is the half that broke.
// Olamide's hook claimed "the deepest home catalogue on this board, and more
// than anyone else has put on the chart" while Seyi Vibez sat above him with
// 114 Nigerian records to Olamide's 99. Every figure in that sentence was
// right — the ranking around them was the lie, and no digit-matching check can
// see a ranking. Paul spotted it by eye, which is the failure mode a test
// exists to prevent.
const ngRecords = (a: (typeof afrobeatsArtists)[number]) =>
  (a.charts ?? []).filter((c) => c.entries.some((e) => e.c === "NG")).length;
const ngNo1s = (a: (typeof afrobeatsArtists)[number]) =>
  (a.charts ?? []).filter((c) => c.entries.some((e) => e.c === "NG" && e.peak === 1)).length;
const leaderBy = (f: (a: (typeof afrobeatsArtists)[number]) => number) =>
  [...afrobeatsArtists].sort((x, y) => f(y) - f(x))[0];

describe("hooks do not claim a rank the data denies", () => {
  it("only the artist with the most Nigerian records claims the deepest home catalogue", () => {
    const leader = leaderBy(ngRecords);
    const claimants = afrobeatsArtists.filter((a) => /deepest home (?:catalogue|chart)/i.test(a.hook ?? ""));
    expect(
      claimants.map((a) => `${a.slug} (${ngRecords(a)} NG records)`),
      `the deepest home catalogue belongs to ${leader.slug} with ${ngRecords(leader)} Nigerian records`,
    ).toEqual(claimants.length ? [`${leader.slug} (${ngRecords(leader)} NG records)`] : []);
  });

  it("only the artist with the most Nigerian No. 1s claims the most chart-toppers at home", () => {
    const leader = leaderBy(ngNo1s);
    const claimants = afrobeatsArtists.filter((a) =>
      /more chart-toppers at home than anyone/i.test(a.hook ?? ""),
    );
    for (const c of claimants) {
      expect(ngNo1s(c), `${c.slug} claims the most Nigerian No. 1s but ${leader.slug} has ${ngNo1s(leader)}`).toBe(
        ngNo1s(leader),
      );
    }
  });

  // "second only to <Name>" names the artist above. If the board reorders, the
  // name has to move with it — that is exactly what went stale on Olamide.
  it("every 'second only to X' names an artist who really is above them", () => {
    const wrong: string[] = [];
    for (const a of afrobeatsArtists) {
      const m = /second only to ([^,—.]+?)\s+(?:at home|on this board)/i.exec(a.hook ?? "");
      if (!m) continue;
      const named = m[1].trim();
      const metric = /No\. ?1s/i.test(a.hook ?? "") ? ngNo1s : ngRecords;
      const above = afrobeatsArtists.filter((x) => metric(x) > metric(a));
      if (above.length !== 1 || above[0].name.toLowerCase() !== named.toLowerCase()) {
        wrong.push(
          `${a.slug} says "second only to ${named}", but the artists above them are: ${
            above.map((x) => `${x.name} (${metric(x)})`).join(", ") || "nobody"
          }`,
        );
      }
    }
    expect(wrong).toEqual([]);
  });
});
