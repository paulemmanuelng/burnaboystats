import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";
import { unitsOf, nextTier, tierLabel, staircase, project, against, weeksBetween } from "../scripts/plaque-radar/units.mjs";
import { parsePost, fridayOnOrBefore, parseTierWord } from "../scripts/plaque-radar/lists.mjs";
import { titleKey, looseTitleKey, creditHasArtist, artistsInCredit, artistAliases, ALIAS_OVERRIDES } from "../scripts/plaque-radar/normalize.mjs";
import { siteArtists } from "../scripts/plaque-radar/site.mjs";
import { renderReport } from "../scripts/plaque-radar/report.mjs";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { rankAll, judgeUK, coverage, buildRecords, historicalPace } from "../scripts/plaque-radar/rank.mjs";
import { parseRobots, robotsVerdict } from "../scripts/plaque-radar/robots.mjs";
import { assertAllowed, NEVER_HOSTS, ALLOWED_HOSTS } from "../scripts/plaque-radar/net.mjs";

// The plaque radar (scripts/plaque-radar/) is PRIVATE and run by hand. These
// tests pin its arithmetic and its ranking on fixtures — no network, no saved
// pages — and hold the two lines it must never cross: it is never scheduled,
// and it never requests a certification register.

const UK_SINGLE = CERT_THRESHOLDS.UK.single!;
const UK_ALBUM = CERT_THRESHOLDS.UK.album!;

describe("UK ladder, read from certThresholds.ts", () => {
  it("prices the BPI tiers the radar projects against", () => {
    expect([UK_SINGLE.silver, UK_SINGLE.gold, UK_SINGLE.platinum]).toEqual([200_000, 400_000, 600_000]);
    expect([UK_ALBUM.silver, UK_ALBUM.gold, UK_ALBUM.platinum]).toEqual([60_000, 100_000, 300_000]);
  });
  it("each further Platinum adds one Platinum's units", () => {
    expect(unitsOf(UK_SINGLE, { level: "Platinum", x: 3 })).toBe(1_800_000);
    expect(unitsOf(UK_ALBUM, { level: "Platinum", x: 2 })).toBe(600_000);
  });
  it("climbs Silver → Gold → Platinum → 2× with no Diamond at the BPI", () => {
    const steps = [null, { level: "Silver" }, { level: "Gold" }, { level: "Platinum", x: 1 }, { level: "Platinum", x: 7 }].map((t) =>
      tierLabel(nextTier(UK_SINGLE, t)),
    );
    expect(steps).toEqual(["Silver", "Gold", "Platinum", "2× Platinum", "8× Platinum"]);
  });
  it("turns into Diamond where a body awards one (Portugal: 10 × 25,000 = 250,000)", () => {
    const pt = CERT_THRESHOLDS.PT.single!;
    expect(nextTier(pt, { level: "Platinum", x: 9 })).toEqual({ level: "Diamond", x: 1 });
    expect(nextTier(pt, null)).toEqual({ level: "Gold", x: 1 });
  });
});

describe("the projection", () => {
  const step = (date: string, level: string, x = 1) => ({ date, level, x, source: "fixture" });

  it("rate = units between the last two steps / weeks between them", () => {
    // Silver 2 Jan → Gold 27 Mar: 200,000 units in 12 weeks.
    const s = staircase(UK_SINGLE, [step("2026-01-02", "Silver"), step("2026-03-27", "Gold")]);
    const p = project(s, "2026-06-19")!;
    expect(p.weeks).toBe(12);
    expect(p.rate).toBeCloseTo(200_000 / 12, 6);
    // 12 weeks on from Gold: 400,000 + 12 × 16,667 = 600,000 — exactly Platinum.
    expect(p.since).toBe(12);
    expect(p.projected).toBe(600_000);
    const a = against(p, unitsOf(UK_SINGLE, { level: "Platinum", x: 1 })!)!;
    expect(a.ratio).toBeCloseTo(1, 6);
    expect(a.margin).toBe(0);
    expect(a.weeksToGo).toBe(0);
  });

  it("says how far short, and how many weeks to go at the same pace", () => {
    const s = staircase(UK_SINGLE, [step("2026-01-02", "Silver"), step("2026-03-27", "Gold")]);
    const p = project(s, "2026-05-22")!; // 8 weeks after Gold
    const a = against(p, 600_000)!;
    expect(p.projected).toBe(Math.round(400_000 + (200_000 / 12) * 8));
    expect(a.margin).toBe(p.projected - 600_000);
    expect(a.weeksToGo).toBe(Math.ceil((600_000 - p.projected) / p.rate));
  });

  it("uses the MOST RECENT pair, and reports the pace before it", () => {
    const s = staircase(UK_SINGLE, [step("2025-01-03", "Silver"), step("2025-02-28", "Gold"), step("2025-12-26", "Platinum")]);
    const p = project(s, "2026-01-02")!;
    expect(p.from.level).toBe("Gold");
    expect(p.rate).toBeCloseTo(200_000 / weeksBetween("2025-02-28", "2025-12-26"), 6);
    expect(p.earlierRate).toBeCloseTo(200_000 / 8, 6);
  });

  it("falls back to the release date as a zero-unit step, and marks it", () => {
    const s = staircase(UK_ALBUM, [step("2024-01-05", "Silver")]);
    expect(project(s, "2024-06-07")).toBeNull();
    const p = project(s, "2024-06-07", { releaseDate: "2023-10-13" })!;
    expect(p.fromRelease).toBe(true);
    expect(p.rate).toBeCloseTo(60_000 / 12, 6);
  });

  it("collapses a staircase: earliest date per tier, no step below an earlier one", () => {
    const s = staircase(UK_SINGLE, [
      step("2025-03-07", "Gold"),
      step("2025-03-14", "Gold"), // the same plaque transcribed a week late
      step("2024-11-08", "Silver"),
      step("2025-06-06", "Silver"), // a stray lower row after a higher one
    ]);
    expect(s.map((x) => `${x.level} ${x.date}`)).toEqual(["Silver 2024-11-08", "Gold 2025-03-07"]);
  });
});

describe("reading the weekly lists", () => {
  it("reads the BPI's own tab export, with certification and release dates", () => {
    const e = parsePost({ date: "2024-01-05T16:00:00Z", text: "Burna Boy\tCity Boys\tAtlantic\tSilver\tSingle\t05.01.2024\t25.08.2023" });
    expect(e).toEqual([
      { date: "2024-01-05", credit: "Burna Boy", title: "City Boys", format: "single", level: "Silver", x: 1, releaseDate: "2023-08-25", layout: "tab" },
    ]);
  });

  it("reads a dated full list with tier headers and (Nx) multiples", () => {
    const text = [
      "Full certifications list for 23rd January 2026:",
      "SINGLES:",
      "PLATINUM & MULTI-PLATINUM",
      "Dave ft. Burna Boy - Location (5x)",
      "Burna Boy - On The Low",
      "GOLD",
      "Dave & Tems - Raindance",
      "SILVER",
      "Rema - Charm",
      "ALBUMS:",
      "SILVER",
      "Burna Boy - Twice As Tall",
    ].join("\n");
    const e = parsePost({ date: "2026-01-26T10:00:00Z", text });
    expect(e.map((x) => `${x.date} ${x.format} ${x.level}${x.x > 1 ? ` x${x.x}` : ""} | ${x.credit} | ${x.title}`)).toEqual([
      "2026-01-23 single Platinum x5 | Dave ft. Burna Boy | Location",
      "2026-01-23 single Platinum | Burna Boy | On The Low",
      "2026-01-23 single Gold | Dave & Tems | Raindance",
      "2026-01-23 single Silver | Rema | Charm",
      "2026-01-23 album Silver | Burna Boy | Twice As Tall",
    ]);
  });

  it("dates an undated BRITs post to the Friday on or before it", () => {
    expect(fridayOnOrBefore("2023-04-05T15:05:33Z")).toBe("2023-03-31");
    expect(fridayOnOrBefore("2023-03-24T18:07:56Z")).toBe("2023-03-24");
    const e = parsePost({
      date: "2023-05-05T14:46:06Z",
      text: "Certifications that have been announced via the BRITs Twitter account today:\nSINGLES:\nDave ft. Burna Boy - Location (4X PLATINUM)\nLF System - Afraid To Feel (2X PLATINUM)\nPinkPantheress - boy's a liar (GOLD)",
    });
    expect(e[0]).toMatchObject({ date: "2023-05-05", credit: "Dave ft. Burna Boy", title: "Location", level: "Platinum", x: 4, layout: "twitter" });
  });

  it("ignores chat that merely mentions a record", () => {
    expect(parsePost({ date: "2026-01-05T19:00:00Z", text: "Burna Boy - Last Last should go 3x soon\nFingers crossed" })).toEqual([]);
  });

  it("reads tier words either way round", () => {
    expect(parseTierWord("Platinum 2x")).toEqual({ level: "Platinum", x: 2 });
    expect(parseTierWord("4x Platinum")).toEqual({ level: "Platinum", x: 4 });
    expect(parseTierWord("Silver")).toEqual({ level: "Silver", x: 1 });
  });
});

describe("matching a list row to a release — artist WITH title", () => {
  it("folds the spellings the lists use", () => {
    expect(looseTitleKey("soso")).toBe(looseTitleKey("So So"));
    expect(looseTitleKey("Wait For U")).toBe(looseTitleKey("WAIT 4 U"));
    expect(looseTitleKey("Ku Lo Sa - A COLORS SHOW")).toBe(looseTitleKey("KU LO SA"));
    expect(titleKey("It’s Plenty")).toBe(titleKey("Its Plenty"));
    expect(titleKey("I Told Them…")).toBe(titleKey("I Told Them..."));
  });
  it("never takes Buju Banton for BNXN or Tyla Yaweh for Tyla", () => {
    const aliases = artistAliases(siteArtists(afrobeatsArtists));
    expect(creditHasArtist("Wizkid ft. Buju", "bnxn", aliases)).toBe(true);
    expect(creditHasArtist("Buju Banton", "bnxn", aliases)).toBe(false);
    expect(creditHasArtist("Tyla Yaweh ft. Post Malone", "tyla", aliases)).toBe(false);
    expect(creditHasArtist("Tyla, Gunna & Skillibeng", "tyla", aliases)).toBe(true);
  });
});

describe("the artists come from the site's data", () => {
  const artists = siteArtists(afrobeatsArtists);
  const aliases = artistAliases(artists);

  it("matches every site artist by the site's own name", () => {
    expect(Object.keys(aliases).sort()).toEqual(artists.map((a) => a.slug).sort());
    const missed = artists.filter(
      (a) => !creditHasArtist(`Someone ft. ${a.name}`, a.slug, aliases) || !artistsInCredit(`${a.name} & Someone`, aliases).includes(a.slug),
    );
    expect(missed).toEqual([]);
  });

  it("types overrides only for artists the site carries", () => {
    const slugs = new Set(artists.map((a) => a.slug));
    expect(Object.keys(ALIAS_OVERRIDES).filter((s) => !slugs.has(s))).toEqual([]);
  });
});

// ── Ranking, on a fixture site ──────────────────────────────────────────────

type Tier = { c: string; level: string; x?: number };
const release = (slug: string, title: string, certs: Tier[], extra: Record<string, unknown> = {}) => ({
  slug,
  artist: slug,
  title,
  format: "single",
  certs: certs.map((c) => ({ ...c, x: c.x ?? 1 })),
  ...extra,
});
const row = (date: string, credit: string, title: string, level: string, x = 1) => ({ date, credit, title, format: "single", level, x, layout: "list" });

/** Forty filler rows for a Friday make it a FULL weekly list. */
const fullWeek = (date: string) => Array.from({ length: 40 }, (_, i) => row(date, `Filler Act ${i}`, `Filler ${i}`, "Silver"));
const fridays = (from: string, to: string) => {
  const out: string[] = [];
  for (let d = new Date(`${from}T00:00:00Z`); d.toISOString().slice(0, 10) <= to; d.setUTCDate(d.getUTCDate() + 7)) out.push(d.toISOString().slice(0, 10));
  return out;
};

function fixtureSite(releases: ReturnType<typeof release>[]) {
  return {
    artists: [
      { slug: "burna-boy", name: "Burna Boy" },
      { slug: "tems", name: "Tems" },
      { slug: "rema", name: "Rema" },
    ],
    releases,
    charts: [],
    live: [],
    sweepRows: [],
    thresholds: CERT_THRESHOLDS,
  };
}

describe("ranking", () => {
  const AS_OF = "2026-09-26";
  // Full lists every Friday up to 18 Sep; 25 Sep has only the BRITs handful.
  const weeks = fridays("2025-01-03", "2026-09-18").flatMap(fullWeek);

  const site = fixtureSite([
    // Listed: the weekly list prints Gold; the site still says Silver.
    release("tems", "Me & U", [{ c: "UK", level: "Silver" }]),
    // Due: Silver 3 Apr → Gold 26 Jun 2026 (12 wks, 16.7k/wk); Platinum lands ≈18 Sep–25 Sep.
    release("burna-boy", "Due Song", [{ c: "UK", level: "Gold" }]),
    // Slowed: Silver → Gold in early 2025 at the same pace; Platinum was due in
    // 2025 and a year of full lists has not printed it.
    release("burna-boy", "Faded Song", [{ c: "UK", level: "Gold" }]),
    // Soon: crossing a fortnight after the as-of date.
    release("rema", "Soon Song", [{ c: "UK", level: "Gold" }]),
    // A different record that merely shares a title with a list row.
    release("burna-boy", "Location", [{ c: "UK", level: "Platinum", x: 5 }]),
  ]);
  const entries = [
    ...weeks,
    row("2026-07-31", "Tems", "Me & U", "Gold"),
    row("2026-04-03", "Burna Boy", "Due Song", "Silver"),
    row("2026-06-26", "Burna Boy", "Due Song", "Gold"),
    row("2025-01-03", "Burna Boy", "Faded Song", "Silver"),
    row("2025-03-28", "Burna Boy", "Faded Song", "Gold"),
    row("2026-04-17", "Rema", "Soon Song", "Silver"),
    row("2026-07-10", "Rema", "Soon Song", "Gold"),
    row("2026-01-02", "Khalid", "Location", "Platinum", 2), // Khalid's record, not Dave & Burna Boy's
    ...Array.from({ length: 10 }, (_, i) => row("2026-09-25", `BRITs ${i}`, `Handful ${i}`, "Gold")),
  ];
  const ranked = rankAll({ site, entries, asOf: AS_OF, markets: ["UK"] });
  const byTitle = Object.fromEntries(ranked.main.map((c: { title: string }) => [c.title, c]));

  it("knows which weeks carry the full list", () => {
    const cov = coverage(entries);
    expect(cov.lastComplete).toBe("2026-09-18");
    expect(cov.last).toBe("2026-09-25");
  });

  it("puts a plaque the list already printed first, with high confidence", () => {
    expect(ranked.main[0]).toMatchObject({ title: "Me & U", kind: "listed", confidence: "high", siteTier: "Silver", nextTier: "Gold" });
  });

  it("flags a projection that crossed after the last full list, and says by how much", () => {
    expect(byTitle["Due Song"]).toMatchObject({ kind: "due", siteTier: "Gold", nextTier: "Platinum", confidence: "medium" });
    expect(byTitle["Due Song"].projected).toBeGreaterThanOrEqual(600_000);
    expect(byTitle["Due Song"].evidence).toMatch(/≈\d+k\/wk over 12 wks/);
  });

  it("keeps a crossing due within four weeks, below the due ones", () => {
    const titles = ranked.main.map((c: { title: string }) => c.title);
    expect(byTitle["Soon Song"]).toMatchObject({ kind: "soon", confidence: "low" });
    expect(titles.indexOf("Soon Song")).toBeGreaterThan(titles.indexOf("Due Song"));
  });

  it("drops a projection that many full lists have failed to print", () => {
    expect(byTitle["Faded Song"]).toBeUndefined();
    expect(ranked.slowed.map((c: { title: string }) => c.title)).toContain("Faded Song");
  });

  it("never matches another act's record with the same title", () => {
    const recs = buildRecords(site, entries);
    const loc = recs.find((r: { title: string; releases: unknown[] }) => r.title === "Location" && r.releases.length);
    expect(loc.entries).toEqual([]);
    expect(ranked.main.map((c: { title: string }) => c.title)).not.toContain("Location");
  });

  it("reads the slowdown from the titles' own past steps, not a typed constant", () => {
    // Ten titles: Silver → Gold in 10 weeks, then Gold → Platinum in 20 — every
    // replay predicts 10 weeks for the third step and sees 20, so the factor is 2.
    const titles = Array.from({ length: 10 }, (_, i) => `Fader ${i}`);
    const paceSite = fixtureSite(titles.map((t) => release("burna-boy", t, [{ c: "UK", level: "Platinum" }])));
    const paceRows = titles.flatMap((t) => [
      row("2025-01-03", "Burna Boy", t, "Silver"),
      row("2025-03-14", "Burna Boy", t, "Gold"),
      row("2025-08-01", "Burna Boy", t, "Platinum"),
    ]);
    const pace = historicalPace(buildRecords(paceSite, paceRows), paceSite);
    expect(pace.samples).toBe(10);
    expect(pace.factor).toBeCloseTo(2, 6);
    // Too few replays (the fixture above has none) and the line is left straight.
    expect(historicalPace(buildRecords(site, entries), site)).toEqual({ factor: 1, samples: 0 });
  });

  it("matches an artist who joins the board with no typed alias", () => {
    const joined = fixtureSite([release("new-act", "Joiner Song", [{ c: "UK", level: "Silver" }])]);
    joined.artists = [...joined.artists, { slug: "new-act", name: "New Act" }];
    expect(ALIAS_OVERRIDES).not.toHaveProperty("new-act");
    const r = rankAll({ site: joined, entries: [...weeks, row("2026-08-14", "New Act", "Joiner Song", "Gold")], asOf: AS_OF, markets: ["UK"] });
    expect(r.main[0]).toMatchObject({ title: "Joiner Song", kind: "listed", siteTier: "Silver", nextTier: "Gold" });
  });

  it("counts the artists in the report from the data", () => {
    const inputs = { repo: "fixture", artists: site.artists.length, releases: site.releases.length, ukPlaques: site.releases.length, lists: 1, ourRows: 1, occ: "not read", liveUpdated: AS_OF, thresholds: CERT_THRESHOLDS, netLog: [] };
    const md = renderReport({ asOf: AS_OF, markets: ["UK"], ranked, inputs, offline: true });
    expect(md).toContain(`rows name one of the ${site.artists.length} artists.`);
  });

  it("caps the list", () => {
    expect(rankAll({ site, entries, asOf: AS_OF, markets: ["UK"], top: 2 }).main).toHaveLength(2);
  });

  it("takes the next tier from the site's plaque when it is above the last dated step", () => {
    const floorSite = fixtureSite([release("burna-boy", "Floor Song", [{ c: "UK", level: "Platinum" }])]);
    const recs = buildRecords(floorSite, [
      ...weeks,
      row("2026-01-02", "Burna Boy", "Floor Song", "Silver"),
      row("2026-03-27", "Burna Boy", "Floor Song", "Gold"),
    ]);
    const j = judgeUK(recs[0], { site: floorSite, asOf: AS_OF, cov: coverage(weeks), occ: [] });
    expect(j.siteTier).toBe("Platinum");
    expect(j.nextTier).toBe("2× Platinum");
    expect(j.kind).toBe("later");
  });

  it("does not project from a single dated step with no release date", () => {
    const one = fixtureSite([release("burna-boy", "One Step", [{ c: "UK", level: "Silver" }])]);
    const recs = buildRecords(one, [...weeks, row("2026-08-07", "Burna Boy", "One Step", "Silver")]);
    const j = judgeUK(recs[0], { site: one, asOf: AS_OF, cov: coverage(weeks), occ: [] });
    expect(j.kind).toBe("unprojectable");
    expect(j.nextTier).toBe("Gold");
  });
});

// ── The lines the radar must never cross ────────────────────────────────────

describe("the radar stays private and polite", () => {
  it("is never scheduled: no workflow mentions it", () => {
    const dir = join(process.cwd(), ".github", "workflows");
    const files = existsSync(dir) ? readdirSync(dir) : [];
    const hits = files.filter((f) => /plaque-radar|plaque radar/i.test(readFileSync(join(dir, f), "utf8")));
    expect(hits).toEqual([]);
  });

  it("is never imported by the site", () => {
    const walk = (d: string): string[] =>
      readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : /\.(tsx?|mjs)$/.test(e.name) ? [join(d, e.name)] : []));
    const hits = walk(join(process.cwd(), "app")).filter((f) => readFileSync(f, "utf8").includes("plaque-radar"));
    expect(hits).toEqual([]);
  });

  it("refuses every certification register and anything off its host list", () => {
    for (const h of NEVER_HOSTS) expect(() => assertAllowed(`https://${h}/`)).toThrow();
    expect(() => assertAllowed("https://www.bpi.co.uk/page/certified-awards")).toThrow();
    expect(() => assertAllowed("https://example.com/")).toThrow();
    expect(() => assertAllowed("http://www.buzzjack.com/forums/")).toThrow();
    for (const h of ALLOWED_HOSTS) expect(() => assertAllowed(`https://${h}/`)).not.toThrow();
  });

  it("obeys robots.txt for Claude-User, its own token and *", () => {
    const groups = parseRobots("User-agent: ClaudeBot\nDisallow: /\n\nUser-agent: *\nDisallow: /search/\nAllow: /\n");
    const tokens = ["Claude-User", "burnaboystats.com"];
    expect(robotsVerdict(groups, tokens, "/forums/topic/1-x/page/2/").ok).toBe(true);
    expect(robotsVerdict(groups, tokens, "/search/?q=burna").ok).toBe(false);
    const named = parseRobots("User-agent: Claude-User\nDisallow: /\n\nUser-agent: *\nAllow: /\n");
    expect(robotsVerdict(named, tokens, "/anything").ok).toBe(false);
  });
});
