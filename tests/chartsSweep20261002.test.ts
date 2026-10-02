import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { allChartItems, CHART_COUNTRIES, weeksAtPeak, weeksOnChart } from "../app/data/charts";
import { artistBySlug, chartCountryMeta } from "../app/data/afrobeats";

/**
 * The 2 Oct 2026 charts sweep (docs/sweeps/charts-sweep-2026-10-02.md).
 *
 * Every value below was CONFIRMED by two verifiers reading the chart body
 * itself, except the two SPLITs applied on the owner's instruction and marked
 * where they are pinned (the Swaguu album No. 1 and the Ashawo merge). Pinned so a later edit cannot quietly put back a figure the sweep
 * proved wrong — the removals especially, which are checked against the exact
 * source strings the site shipped before the sweep.
 */
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const burna = (title: string) => allChartItems.find((r) => r.title === title)!;
const peak = (title: string, c: string) => burna(title).entries.find((e) => e.c === c)?.peak;
const board = (slug: string, title: string, kind: "Singles" | "Albums" = "Singles") =>
  artistBySlug(slug)!.charts.find((r) => r.title === title && r.kind === kind);
const boardPeak = (slug: string, title: string, c: string, kind: "Singles" | "Albums" = "Singles") =>
  board(slug, title, kind)?.entries.find((e) => e.c === c)?.peak;

describe("Burna Boy: removals the bodies do not support", () => {
  // The literal lines charts.ts carried until 2 Oct 2026.
  const SHIPPED = [
    '{ title: "Kilometre", year: 2021, entries: [{ c: "NG", peak: 1, peakDate: "2021-05-06" }, { c: "UK", peak: 84 }] },',
    '{ title: "Loved by You", credit: "Justin Bieber ft. Burna Boy", year: 2021, entries: [{ c: "UK", peak: 59 }, { c: "US", peak: 87 }, { c: "NG", peak: 4, peakDate: "2021-03-25" }] },',
    '{ c: "BE", peak: 2 }, { c: "SR", peak: 2 }, { c: "HU", peak: 39 }, { c: "IE", peak: 43 },',
    '{ c: "AU", peak: 37 }, { c: "FI", peak: 38 }, { c: "DE", peak: 40 }, { c: "FR", peak: 45 }, { c: "GLB", peak: 50 },',
  ];

  it("Kilometre UK (Afrobeats chart only), Loved by You UK (Streaming chart only), My Oasis BE (Ultratip), We Pray AU (no ARIA Top 50 row) are gone", () => {
    expect(peak("Kilometre", "UK")).toBeUndefined();
    expect(peak("Loved by You", "UK")).toBeUndefined();
    expect(peak("My Oasis", "BE")).toBeUndefined();
    expect(peak("We Pray", "AU")).toBeUndefined();
  });

  it("negative control: none of the shipped lines is still in charts.ts", () => {
    const src = read("app/data/charts.ts");
    for (const line of SHIPPED) expect(src.includes(line), line).toBe(false);
  });

  it("keeps what the bodies DO print on those rows", () => {
    expect(peak("Kilometre", "NG")).toBe(1);
    expect(peak("Loved by You", "US")).toBe(87);
    expect(peak("My Oasis", "UK")).toBe(43);
    expect(peak("We Pray", "UK")).toBe(20); // held for the owner, not changed
  });
});

describe("Burna Boy: added and corrected", () => {
  it("UK and Irish feature rows read at the OCC and IRMA", () => {
    expect(burna("Play Play").entries).toEqual([{ c: "UK", peak: 11 }, { c: "IE", peak: 38 }]);
    expect(burna("Siberia").entries).toEqual([{ c: "UK", peak: 35 }, { c: "IE", peak: 72 }]);
    expect(burna("She's Not Anyone").entries).toEqual([{ c: "UK", peak: 30 }, { c: "IE", peak: 86 }]);
    expect(burna("Good Time").entries).toEqual([{ c: "UK", peak: 88 }]);
    expect(peak("Masculine", "UK")).toBe(24);
    expect(peak("Masculine", "IE")).toBe(77);
    expect(peak("Cloak & Dagger", "UK")).toBe(47);
  });

  it("album peaks read at the bodies, and Belgium's better side", () => {
    expect(peak("I Told Them…", "CH")).toBe(7);
    expect(peak("I Told Them…", "NO")).toBe(6);
    expect(peak("I Told Them…", "BE")).toBe(11);
    expect(peak("Love, Damini", "CH")).toBe(6);
    expect(peak("Love, Damini", "DK")).toBe(8);
    expect(peak("Love, Damini", "NO")).toBe(6);
    expect(peak("No Sign of Weakness", "BE")).toBe(118);
  });

  it("back-catalogue singles in Europe", () => {
    expect([peak("Own It", "LT"), peak("Own It", "CZ"), peak("Own It", "SK"), peak("Own It", "DE")]).toEqual([25, 66, 48, 75]);
    expect(peak("Own It", "NO")).toBeUndefined(); // VG-lista was a Top 20 in 2019: held
    expect([peak("Be Honest", "LT"), peak("Be Honest", "CH")]).toEqual([46, 51]);
    expect([peak("Loved by You", "DK"), peak("Loved by You", "SK"), peak("Loved by You", "SE")]).toEqual([28, 49, 100]);
    expect([peak("Cheat on Me", "CH"), peak("Cheat on Me", "SE")]).toEqual([56, 65]);
    expect(peak("Gbona", "CH")).toBe(78);
    expect(peak("TaTaTa", "CH")).toBe(75);
    expect(peak("Wild Dreams", "SE")).toBe(55);
  });

  it("Suriname, floors where the run predates the archive", () => {
    expect(peak("It's Plenty", "SR")).toBe(2);
    expect(peak("Last Last", "SR")).toBe(12);
    expect(peak("Tested, Approved & Trusted", "SR")).toBe(5);
    expect(peak("TaTaTa", "SR")).toBe(6);
    expect(burna("It's Plenty").entries.find((e) => e.c === "SR")?.note).toContain("so this is a floor");
  });

  it("Dai Dai: the newest weeks, the better Bulgarian and Israeli peaks, the closed Nigerian run", () => {
    expect(peak("Dai Dai", "BG")).toBe(2);
    expect(peak("Dai Dai", "IL")).toBe(5);
    expect([weeksAtPeak("Dai Dai", "DE"), weeksOnChart("Dai Dai", "DE")]).toEqual([13, 18]);
    expect([weeksAtPeak("Dai Dai", "AT"), weeksOnChart("Dai Dai", "AT")]).toEqual([14, 18]);
    expect([weeksAtPeak("Dai Dai", "CH"), weeksOnChart("Dai Dai", "CH")]).toEqual([16, 19]);
    expect(weeksOnChart("Dai Dai", "SE")).toBe(20);
    expect(weeksOnChart("Dai Dai", "IT")).toBe(16);
    expect(weeksOnChart("Dai Dai", "IE")).toBe(18);
    expect(weeksOnChart("Dai Dai", "UK")).toBe(17);
    expect(weeksOnChart("Dai Dai", "FR")).toBe(18);
    expect(weeksAtPeak("Dai Dai", "PT")).toBe(8); // the 9 is a SPLIT: held
    expect(burna("Dai Dai").entries.find((e) => e.c === "NG")?.note).toBeUndefined();
  });

  it("North Macedonia and Slovenia are airplay floors, declared like the board's", () => {
    expect(peak("Dai Dai", "MK")).toBe(9);
    expect(peak("Dai Dai", "SI")).toBe(4);
    for (const c of ["MK", "SI"]) {
      expect(CHART_COUNTRIES[c].body).toMatch(/^Radiomonitor .* \(airplay — no other national chart\)$/);
      expect(burna("Dai Dai").entries.find((e) => e.c === c)?.note).toContain("the run's best may be higher");
    }
  });

  it("the held items are untouched", () => {
    expect(peak("Jerusalema (Remix)", "UK")).toBe(55);
    expect(peak("Jerusalema (Remix)", "HU")).toBe(1);
    expect(peak("Dai Dai", "MY")).toBe(5);
    expect(peak("Dai Dai", "LB")).toBe(1);
    expect(peak("Dai Dai", "PL")).toBe(1);
    expect(weeksOnChart("Dai Dai", "NL")).toBe(17);
  });
});

describe("the Afrobeats board", () => {
  it("strict-rule corrections: artist WITH title, a printed rank", () => {
    expect(board("bnxn", "African Soldier")).toBeUndefined(); // Patoranking ft. Buju Banton
    expect(boardPeak("victony", "Glory II", "NG")).toBe(26);
    expect(boardPeak("rema", "Soweto", "NG")).toBe(5);
    expect(boardPeak("wizkid", "Abracadabra (Remix)", "NG")).toBe(7);
    expect(boardPeak("black-sherif", "Come & Go", "NG")).toBe(15);
    expect(boardPeak("davido", "Maserati (Remix) (Olakira ft. Davido)", "NG")).toBe(17);
    expect(boardPeak("wizkid", "Mood (Wizkid ft. BNXN)", "NG")).toBe(13);
    expect(boardPeak("bnxn", "Mood (Wizkid ft. BNXN)", "NG")).toBe(13);
    expect(boardPeak("wizkid", "Man on a Mission", "NG")).toBe(30);
    expect(boardPeak("tems", "What You Need", "NG")).toBe(79);
    expect(boardPeak("wizkid", "Brown Skin Girl", "LT")).toBe(67);
    expect(boardPeak("tems", "Fountains", "LT")).toBe(79);
    expect(boardPeak("tyla", "Push 2 Start", "LT")).toBeUndefined();
    expect(boardPeak("omah-lay", "Damn", "NG")).toBe(25);
  });

  it("negative control: the shipped African Soldier row is gone", () => {
    expect(read("app/data/afrobeats.ts")).not.toContain('{ title: "African Soldier", kind: "Singles"');
  });

  it("better Nigerian peaks the pre-relaunch Top 50 holds", () => {
    expect(boardPeak("fireboy-dml", "Peru", "NG")).toBe(1);
    expect(boardPeak("omah-lay", "understand", "NG")).toBe(1);
    expect(boardPeak("omah-lay", "Attention", "NG")).toBe(4);
    expect(boardPeak("victony", "Holy Father", "NG")).toBe(2);
    expect(boardPeak("asake", "Palazzo (SPINALL & Asake)", "NG")).toBe(2);
    expect(boardPeak("kizz-daniel", "Owo Oluwa", "NG")).toBe(8);
  });

  it("the Nigeria backfill, with disambiguated titles where an album shares the name", () => {
    expect(boardPeak("rema", "Oh No", "NG")).toBe(2);
    expect(boardPeak("rema", "HEIS (single)", "NG")).toBe(28);
    expect(boardPeak("rema", "HEIS", "NG", "Albums")).toBe(1);
    expect(boardPeak("omah-lay", "Godly", "NG")).toBe(1);
    expect(boardPeak("fireboy-dml", "Playboy (single)", "NG")).toBe(2);
    expect(boardPeak("fireboy-dml", "Ozumba Mbadiwe (Remix)", "NG")).toBe(4);
    expect(boardPeak("victony", "Stubborn (album)", "NG", "Albums")).toBe(2);
    expect(boardPeak("seyi-vibez", "Volume", "NG")).toBe(1);
    expect(boardPeak("seyi-vibez", "Swaguu (single)", "NG")).toBe(13);
    expect(boardPeak("seyi-vibez", "Swaguu", "NG", "Albums")).toBe(1); // SPLIT, owner's instruction: re-read Albums wk39
    expect(boardPeak("ckay", "Emiliana", "NG")).toBe(5);
    expect(boardPeak("tems", "Damages", "NG")).toBe(6);
  });

  it("a peak-1 open run never says it may yet climb", () => {
    const vol = board("seyi-vibez", "Volume")!.entries[0];
    expect(vol.note).toContain("the run is still open");
    expect(vol.note).not.toContain("may yet climb");
  });

  it("closed runs lose the open-run note; open ones are dated 2 Oct 2026", () => {
    for (const [slug, title] of [["ruger", "All Die"], ["ckay", "SHEGE"], ["tyla", "That Girl"]] as const)
      expect(board(slug, title)!.entries.find((e) => e.c === "NG")!.note, title).toBeUndefined();
    expect(board("tiwa-savage", "Energy")!.entries[0].note).toContain("17 weeks in (4 Jun to 24 Sep 2026)");
    expect(board("seyi-vibez", "BACK 2 U")!.entries[0]).toMatchObject({ peak: 4 });
  });

  // SPLIT (A REFUTED at 16, B 43): merged on the owner's rule, with a note.
  it("Ashawo is one TurnTable entry, so one row", () => {
    expect(board("fireboy-dml", "Ashawo")).toBeUndefined();
    expect(boardPeak("fireboy-dml", "All of Us (Ashawo)", "NG")).toBe(16);
    const note = board("fireboy-dml", "All of Us (Ashawo)")!.entries.find((e) => e.c === "NG")?.note ?? "";
    expect(note).toContain("printed as 'Ashawo'");
    expect(note).toContain("Best under the new title: No. 43.");
  });

  it("Bulgaria off PROPHON's World TOP 10, Israel from Mako's first live issue", () => {
    expect(boardPeak("rema", "Calm Down", "BG")).toBe(2);
    expect(boardPeak("ayra-starr", "Wo, man", "BG")).toBe(2);
    expect(boardPeak("rema", "Calm Down", "IL")).toBe(35);
    expect(boardPeak("tems", "Raindance", "IL")).toBe(27);
    expect(boardPeak("oxlade", "Ku Lo Sa - A COLORS SHOW", "IL")).toBeUndefined(); // backfill only
    expect(boardPeak("ayra-starr", "Rush", "IL")).toBeUndefined(); // backfill only
  });

  it("Ecuador's board rows name the chart they were read from", () => {
    expect(chartCountryMeta("EC").body).toBe("Billboard Ecuador Songs");
    expect(boardPeak("ayra-starr", "Santa", "EC")).toBe(2);
  });

  it("international rows, and Tyla's Philippine and Icelandic reads", () => {
    expect(boardPeak("tyla", "Push 2 Start", "PH")).toBe(17);
    expect(boardPeak("tyla", "Push 2 Start", "IE")).toBe(60);
    expect(boardPeak("tyla", "Water", "IS")).toBe(14);
    expect(boardPeak("omah-lay", "Company", "MK")).toBe(4);
    expect(boardPeak("wizkid", "One Dance", "GR")).toBe(8);
    expect(boardPeak("ckay", "love nwantiti (ah ah ah)", "SK")).toBe(6);
    expect(boardPeak("rema", "Calm Down", "IS")).toBe(24);
    expect(boardPeak("rema", "Calm Down", "NO")).toBeUndefined(); // Top 20 rule: held
    expect(boardPeak("asake", "M$NEY", "IE", "Albums")).toBe(58);
    expect(boardPeak("victony", "SLICK", "SR")).toBe(4);
  });
});

describe("review follow-ups: run lengths and open-run notes", () => {
  it("Dai Dai LT and BR carry the weeks both votes read", () => {
    expect(weeksOnChart("Dai Dai", "LT")).toBe(18);
    expect(weeksAtPeak("Dai Dai", "LT")).toBe(1);
    expect(weeksOnChart("Dai Dai", "BR")).toBe(16);
    expect(peak("Dai Dai", "BR")).toBe(27);
  });

  it("Raindance LT and Wo, man BG are open runs, and say so", () => {
    const rd = board("tems", "Raindance")!.entries.find((e) => e.c === "LT")!;
    expect(rd).toMatchObject({ peak: 2, weeksAtPeak: 3, weeks: 42 });
    expect(rd.note).toMatch(/^Peak still open — still on AGATA's Top 100 when read 2 Oct 2026/);
    const wm = board("ayra-starr", "Wo, man")!.entries.find((e) => e.c === "BG")!;
    expect(wm.note).toMatch(/^Peak still open — still on PROPHON's World TOP 10 when read 2 Oct 2026, 6 issues in/);
  });

  it("negative control: the shipped bare Wo, man row is gone", () => {
    const SHIPPED = '{ title: "Wo, man", kind: "Singles", entries: [{ c: "BG", peak: 2 }] },';
    expect(read("app/data/afrobeats.ts").includes(SHIPPED)).toBe(false);
  });
});
