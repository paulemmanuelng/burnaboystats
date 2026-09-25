import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
// @ts-expect-error — plain .mjs helper shared with the stats bot
import {
  extractLiveCharts,
  parseMovement,
  CHART_SWEEPS,
  extractCountryChart,
  mergeChartPlacements,
  titleKey,
  servesCoverArt,
  DEEZER_NO_COVER,
} from "../scripts/stats-lib.mjs";
import {
  liveCharts,
  livePlacementCount,
  liveNumberOnes,
  livePlatformTotals,
  liveCountryCount,
  liveChartsUpdated,
  liveChartsBuiltAt,
} from "../app/data/liveCharts";
import { CHART_COUNTRIES } from "../app/data/charts";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { countriesOf, cadenceOf, duplicateReleaseKeys } from "../app/lib/liveChartMeta";

// The live-charts page is generated wholesale from a scraped page, so the
// parser is the single point of failure. These pin its behaviour on a fixture
// shaped like the real markup, plus a few invariants on the generated data.

const CELL = `
<td valign=top width="200"><div class="wrap"><b>Test Song</b></div><br>
<div class="spo">Spotify (2x #1):<br>
<div class="eu small spo"><a href="/spotify/country/global_daily.html">#2 Worldwide</a> <span class="change24">(=)</span></div>
<div class="eu small spo"><a href="/spotify/country/at_daily.html">#1 Austria</a> <span class="change24">(=)</span></div>
<div class="eu spo"><a href="/spotify/country/de_daily.html">#1 Germany</a> <span class="change24">(+3)</span></div>
<div class="eu spo"><a href="/spotify/country/fr_daily.html">#12 France</a> <span class="change24">(-4)</span></div>
</div>
<div class="app">Apple Music:<br>
<div class="eu app"><a href="/charts/apple_s/gb.html">#7 United Kingdom</a> <span class="change24">(NE)</span></div>
</div></td>
<td valign=top><div class="wrap"><b>Album: Test Record</b></div><br>
<div class="spo">Spotify:<br>
<div class="africa small spo"><a href="https://charts.spotify.com/charts/view/album-ng-weekly/latest">#19 Nigeria</a> <span class="change24">(=)</span></div>
</div>
<div class="itu">iTunes:<br>
<div class="eu itu"><a href="/charts/itunes/ng.html">#3 Nigeria</a> <span class="change24">(=)</span></div>
</div></td>`;

describe("parseMovement", () => {
  it("reads kworb's markers", () => {
    expect(parseMovement("(=)")).toBe(0);
    expect(parseMovement("(+12)")).toBe(12);
    expect(parseMovement("(-3)")).toBe(-3);
    expect(parseMovement("(NE)")).toBeNull(); // new entry — no prior position
    expect(parseMovement("(RE)")).toBeNull(); // re-entry
    expect(parseMovement(undefined)).toBeNull();
  });
});

describe("extractLiveCharts", () => {
  const out = extractLiveCharts(CELL);

  it("splits songs from albums and strips the Album: prefix", () => {
    expect(out.map((r: { title: string }) => r.title)).toContain("Test Song");
    const album = out.find((r: { kind: string }) => r.kind === "album");
    expect(album.title).toBe("Test Record"); // prefix removed
  });

  it("keeps Spotify's weekly Top Albums placements, as their own weekly platform", () => {
    // kworb links an album's Spotify placements to
    // charts.spotify.com/charts/view/album-<cc>-weekly/latest — no ".html", no
    // country page — and the song-only pattern dropped every one of them on
    // all sixteen boards. Seyi Vibez's page read "Spotify 15" on 17 Sep 2026
    // while Spotify's own Weekly Top Albums Nigeria listed seven of his albums.
    const album = out.find((r: { kind: string }) => r.kind === "album");
    const names = album.platforms.map((p: { platform: string }) => p.platform);
    expect(names).toEqual(expect.arrayContaining(["Spotify Albums", "iTunes"]));
    expect(names).not.toContain("Spotify");
    const spotify = album.platforms.find((p: { platform: string }) => p.platform === "Spotify Albums");
    expect(spotify.entries).toEqual([{ country: "NG", name: "Nigeria", position: 19, movement: 0 }]);
    expect(cadenceOf("Spotify Albums")).toBe("weekly");
    expect(cadenceOf("Spotify")).toBe("daily");
  });

  it("groups placements under the right platform", () => {
    const song = out.find((r: { title: string }) => r.title === "Test Song");
    const names = song.platforms.map((p: { platform: string }) => p.platform);
    expect(names).toEqual(expect.arrayContaining(["Spotify", "Apple Music"]));
    expect(song.platforms.find((p: { platform: string }) => p.platform === "Spotify").entries)
      .toHaveLength(4);
  });

  it("keeps Spotify's global chart row, mapped to WW", () => {
    // Spotify's worldwide chart lives at global_daily.html — not a two-letter
    // code like every other page — and the parser used to drop it silently.
    const song = out.find((r: { title: string }) => r.title === "Test Song");
    const spo = song.platforms.find((p: { platform: string }) => p.platform === "Spotify");
    expect(spo.entries).toContainEqual(
      expect.objectContaining({ country: "WW", name: "Worldwide", position: 2 })
    );
  });

  it("takes the country code from the href, not the display name", () => {
    const song = out.find((r: { title: string }) => r.title === "Test Song");
    const apple = song.platforms.find((p: { platform: string }) => p.platform === "Apple Music");
    // "United Kingdom" would be unparseable as a code; the href gives GB.
    expect(apple.entries[0]).toMatchObject({ country: "GB", position: 7, movement: null });
  });

  it("counts No. 1s per platform and sorts entries by position", () => {
    const song = out.find((r: { title: string }) => r.title === "Test Song");
    const spo = song.platforms.find((p: { platform: string }) => p.platform === "Spotify");
    expect(spo.numberOnes).toBe(2);
    expect(spo.entries.map((e: { position: number }) => e.position)).toEqual([1, 1, 2, 12]);
  });

  it("returns nothing for markup with no placements", () => {
    expect(extractLiveCharts("<td><div class='wrap'><b>Empty</b></div></td>")).toEqual([]);
  });
});

describe("generated liveCharts data", () => {
  // A release is its kind AND its title. This asserted unique TITLES until 25
  // Sep 2026, and the stats bot stopped publishing for it: on 24 Sep the song
  // "African Giant" (Apple Music, Guinea-Bissau No. 171) started charting
  // beside the album "African Giant" (No. 1 there), two real releases, and
  // every run from 21:32 UTC failed its test gate and committed nothing.
  it("has releases and no release listed twice (same kind and title)", () => {
    expect(liveCharts.length).toBeGreaterThan(0);
    expect(duplicateReleaseKeys(liveCharts), "the same release appears twice").toEqual([]);
  });

  it("holds every board artist to the same rule", () => {
    for (const b of LIVE_BOARDS) {
      expect(duplicateReleaseKeys(b.releases), `${b.slug}: the same release twice`).toEqual([]);
    }
  });

  it("tells a real duplicate from a title track (controls)", () => {
    const pair = [
      { kind: "album", title: "African Giant" },
      { kind: "song", title: "African Giant" },
    ];
    // The pair that stopped the bot is two releases, not a duplicate…
    expect(duplicateReleaseKeys(pair)).toEqual([]);
    // …while the same song twice still fails, whatever else is on the list.
    expect(duplicateReleaseKeys([...pair, { kind: "song", title: "African Giant" }])).toEqual([
      "song:African Giant",
    ]);
    expect(duplicateReleaseKeys([...pair, { kind: "album", title: "African Giant" }])).toEqual([
      "album:African Giant",
    ]);
  });

  it("counts countries by the site's rule, not by raw kworb code", () => {
    // The share card read the generated count (151) while the page recounted
    // (149): kworb says "UK" on five platforms and "GB" on Spotify's, and
    // emits "WW" for its worldwide chart. One rule, in liveChartMeta, for both.
    const entries = liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries));
    expect(liveCountryCount).toBe(countriesOf(entries));
    const raw = new Set(entries.map((e) => e.country));
    if (raw.has("UK") && raw.has("GB")) expect(liveCountryCount).toBeLessThan(raw.size);
  });

  it("stamps the snapshot to the minute, on the same day as its date", () => {
    // The job fires a few times a day, not on the hour, so the page prints the
    // minute the board was built rather than letting a date imply "now".
    expect(liveChartsBuiltAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z$/);
    expect(liveChartsBuiltAt.slice(0, 10)).toBe(liveChartsUpdated);
  });

  it("carries no decomposed accents in any board's titles", () => {
    // kworb served Davido's "Oriadé" as "Oriade" + a combining acute (NFD);
    // Satori drew the accent detached on the live OG card. The extractor
    // normalises to NFC; this holds every generated board to it.
    const files = readdirSync("app/data").filter((f) => /^liveCharts(\.[a-z-]+)?\.ts$/.test(f));
    expect(files.length).toBeGreaterThan(10);
    for (const f of files) {
      const src = readFileSync(`app/data/${f}`, "utf8");
      expect(/[\u0300-\u036f]/.test(src), `${f} carries a combining mark`).toBe(false);
    }
  });

  it("derived totals agree with the rows", () => {
    const placements = liveCharts.reduce(
      (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
      0
    );
    expect(livePlacementCount).toBe(placements);
    expect(livePlatformTotals.reduce((n, p) => n + p.placements, 0)).toBe(placements);
    expect(liveNumberOnes).toBe(
      liveCharts.reduce(
        (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.filter((e) => e.position === 1).length, 0),
        0
      )
    );
  });

  it("every position is a sane chart position", () => {
    for (const r of liveCharts) {
      for (const p of r.platforms) {
        for (const e of p.entries) {
          expect(e.position, `${r.title} / ${p.platform} / ${e.name}`).toBeGreaterThan(0);
          expect(e.position).toBeLessThanOrEqual(500);
          expect(e.country).toMatch(/^[A-Z]{2}$/);
        }
      }
    }
  });

  // The boundary this page exists to respect: platform data must not leak into
  // the official-chart dataset, and vice versa.
  it("does not write into the official chart country map", () => {
    const officialCodes = Object.keys(CHART_COUNTRIES);
    const liveCodes = new Set(
      liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
    );
    // Live charts cover far more territories than the official dataset — proof
    // they are separate sets, not one being derived from the other.
    expect(liveCodes.size).toBeGreaterThan(officialCodes.length);
  });
});

// kworb writes chart slugs, not strict ISO. Any code that isn't a real
// alpha-2 renders as letter boxes instead of a flag, which is how "UK" shipped
// looking broken. This pins the set so a new one gets caught rather than seen.
describe("flag coverage", () => {
  const ALIASED = new Set(["UK", "WW", "EL"]);
  const ISO =
    /^(A[DEFGILMOQRSTUWXZ]|B[ABDEFGHIJLMNOQRSTVWYZ]|C[ACDFGHIKLMNORUVWXYZ]|D[EJKMOZ]|E[CEGHRST]|F[IJKMOR]|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|I[DELMNOQRST]|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]|M[ACDEFGHKLMNOPQRSTUVWXYZ]|N[ACEFGILOPRUZ]|OM|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTVXYZ]|T[CDFGHJKLMNORTVWZ]|U[AGMSYZ]|V[ACEGINU]|W[FS]|Y[ET]|Z[AMW])$/;

  it("every country code either has a real flag or a deliberate alias", () => {
    const codes = new Set(
      liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
    );
    const unmapped = [...codes].filter((c) => !ISO.test(c) && !ALIASED.has(c));
    expect(unmapped, `codes with no flag and no alias: ${unmapped.join(", ")}`).toEqual([]);
  });
});

// Deezer and YouTube publish only the LEAD credit, so "Shakira - Dai Dai"
// carries no mention of Burna Boy and kworb's artist page never attaches it to
// him. These pin the backfill that reads those country charts directly.
const DEEZER = CHART_SWEEPS.find((s: { platform: string }) => s.platform === "Deezer")!;
const YOUTUBE = CHART_SWEEPS.find((s: { platform: string }) => s.platform === "YouTube")!;

const DEEZER_FR = `<title>Deezer Top Songs - France</title><table><tbody>
<tr><td>1</td><td>=</td><td>Shakira - Dai Dai</td></tr>
<tr><td>2</td><td>+3</td><td>Some Other Act - Dai Dai</td></tr>
<tr><td>4</td><td>NEW</td><td>Burna Boy - Kabiyesi</td></tr>
<tr><td>9</td><td>-2</td><td>Unrelated - Another Song</td></tr>
</tbody></table>`;

// The real YouTube pages put a class on every row. Splitting on a literal
// "<tr>" therefore matched only the header — which is exactly why the sweep
// first read as zero placements while "Dai Dai" was No. 1 in 62 countries.
const YOUTUBE_NG = `<title>YouTube Weekly Chart - Nigeria</title><table><tbody>
<tr class="newpeak"><td class="np">1</td><td class="np">+8</td><td class="text mp"><div>Shakira - Dai Dai</div></td><td>10</td><td>1</td><td>(x1)</td><td>421,979</td><td>+133,591</td></tr>
<tr><td>66</td><td>(RE)</td><td><div>Burna Boy - Ye</div></td><td>4</td><td>12</td><td>(x1)</td><td>90,000</td><td>+1,000</td></tr>
</tbody></table>`;

describe("extractCountryChart", () => {
  const rows = extractCountryChart(DEEZER_FR, "fr", DEEZER);

  it("reads the country from the page title and the code from the slug", () => {
    expect(rows[0]).toMatchObject({ country: "FR", name: "France", platform: "Deezer" });
  });

  it("matches his own credits and the known collaboration alias", () => {
    expect(rows.map((r: { release: string }) => r.release).sort()).toEqual(["Dai Dai", "Kabiyesi"]);
  });

  it("does not match on title alone — a same-titled song by another act is skipped", () => {
    expect(rows).toHaveLength(2);
  });

  it("carries position, movement and entry status through", () => {
    expect(rows.find((r: { release: string }) => r.release === "Dai Dai")).toMatchObject({
      position: 1,
      movement: 0,
    });
    const kb = rows.find((r: { release: string }) => r.release === "Kabiyesi");
    expect(kb.movement).toBeNull();
    expect(kb.status).toBe("new");
  });

  it("reads rows that carry attributes on the <tr> tag", () => {
    const yt = extractCountryChart(YOUTUBE_NG, "ng", YOUTUBE);
    expect(yt).toHaveLength(2);
    expect(yt[0]).toMatchObject({ platform: "YouTube", release: "Dai Dai", position: 1, movement: 8 });
    expect(yt[1]).toMatchObject({ release: "Ye", position: 66, status: "re" });
  });

  it("matches an alias when the chart prints the feature in the title", () => {
    // The country charts bill a featured record to its LEAD and print the
    // feature in the title; an alias names the record as the artist page does.
    // The matcher compared those raw, so "Secondhand (feat. Rema)" never met
    // the alias "Secondhand" — and every featured placement on a swept
    // platform was dropped, for every artist on the board. Rema's Secondhand
    // was at Deezer #2 in Slovenia with his page showing no Deezer for it.
    const page = `<title>Deezer Top Songs - Senegal</title><table><tbody>
<tr><td>46</td><td>=</td><td>Don Toliver - Secondhand (feat. Rema)</td></tr>
</tbody></table>`;
    const who = {
      credit: /\brema\b/i,
      aliases: [{ artist: "Don Toliver", title: "Secondhand", release: "Secondhand" }],
    };
    const got = extractCountryChart(page, "sn", DEEZER, who);
    expect(got).toHaveLength(1);
    // It folds onto the artist page's own name for the record, not the
    // chart's — otherwise it would appear as a second, separate release.
    expect(got[0]).toMatchObject({ release: "Secondhand", country: "SN", position: 46 });
  });

  it("still refuses an alias whose lead artist does not match", () => {
    // Normalising the title must not loosen the artist check: the pair is what
    // stops an unrelated song of the same name being swept in.
    const page = `<title>Deezer Top Songs - Senegal</title><table><tbody>
<tr><td>46</td><td>=</td><td>Someone Else - Secondhand (feat. Rema)</td></tr>
</tbody></table>`;
    const who = {
      credit: /\bnobody\b/i,
      aliases: [{ artist: "Don Toliver", title: "Secondhand", release: "Secondhand" }],
    };
    expect(extractCountryChart(page, "sn", DEEZER, who)).toEqual([]);
  });

  it("returns nothing when the page is not the chart it expected", () => {
    expect(extractCountryChart(DEEZER_FR, "fr", YOUTUBE)).toEqual([]);
    expect(extractCountryChart("<title>Something else</title>", "fr", DEEZER)).toEqual([]);
  });
});

describe("mergeChartPlacements", () => {
  it("attaches to the existing release rather than creating a duplicate", () => {
    const releases = [
      { title: "Dai Dai", kind: "song", platforms: [{ platform: "Spotify", numberOnes: 0, entries: [] }] },
    ];
    mergeChartPlacements(releases, [
      { platform: "Deezer", release: "Dai Dai", country: "FR", name: "France", position: 1, movement: 0 },
    ]);
    expect(releases).toHaveLength(1);
    const dz = releases[0].platforms.find((p: { platform: string }) => p.platform === "Deezer");
    expect(dz.entries).toHaveLength(1);
    expect(dz.numberOnes).toBe(1);
  });

  it("keeps platforms apart when both sweeps hit the same release", () => {
    const releases: { title: string; kind: string; platforms: { platform: string }[] }[] = [];
    mergeChartPlacements(releases, [
      { platform: "Deezer", release: "Dai Dai", country: "FR", name: "France", position: 1, movement: 0 },
      { platform: "YouTube", release: "Dai Dai", country: "FR", name: "France", position: 3, movement: 1 },
    ]);
    expect(releases[0].platforms.map((p) => p.platform).sort()).toEqual(["Deezer", "YouTube"]);
  });

  it("keeps the best position when a country is listed twice", () => {
    // Real case: Slovakia carried the same track at both #1 and #54.
    const releases: { platforms: { platform: string }[] }[] = [];
    mergeChartPlacements(releases, [
      { platform: "Deezer", release: "Dai Dai", country: "SK", name: "Slovakia", position: 54, movement: 0 },
      { platform: "Deezer", release: "Dai Dai", country: "SK", name: "Slovakia", position: 1, movement: 0 },
    ]);
    const dz = releases[0].platforms.find((p) => p.platform === "Deezer")!;
    expect(dz.entries).toHaveLength(1);
    expect(dz.entries[0].position).toBe(1);
  });

  it("creates the release when the artist page never knew about it", () => {
    const releases: { title: string }[] = [];
    mergeChartPlacements(releases, [
      { platform: "YouTube", release: "Brand New", country: "NG", name: "Nigeria", position: 3, movement: null },
    ]);
    expect(releases[0].title).toBe("Brand New");
  });
});

describe("backfilled coverage in the generated data", () => {
  it("reflects the sweeps rather than the artist page's handful", () => {
    // The artist page alone yielded 2 Deezer and 6 YouTube. Anything near those
    // means a sweep silently broke.
    expect(livePlatformTotals.find((p) => p.platform === "Deezer")!.placements).toBeGreaterThan(20);
    expect(livePlatformTotals.find((p) => p.platform === "YouTube")!.placements).toBeGreaterThan(50);
  });
});

// The sweeps and the artist page name the same record differently. Matching on
// the raw title created a second copy of a song and split its placements —
// "On the Low" (24) sat next to "On The Low" (1).
describe("titleKey", () => {
  it("folds casing and featured-artist credits", () => {
    expect(titleKey("On the Low")).toBe(titleKey("On The Low"));
    expect(titleKey("For My Hand")).toBe(titleKey("For My Hand (feat. Ed Sheeran)"));
    expect(titleKey("Real Life")).toBe(titleKey("Real Life (w/ Stormzy)"));
  });

  it("keeps version suffixes significant — they chart separately", () => {
    expect(titleKey("Dai Dai")).not.toBe(titleKey("Dai Dai (Instrumental)"));
    expect(titleKey("Dai Dai")).not.toBe(titleKey("Dai Dai (Clean Bandit Remix)"));
  });
});

describe("no release is listed twice under a title variant", () => {
  // The guard for the whole class of bug: if two rows in the generated data
  // normalise to the same key, a song's placements are split across both and
  // every total involving it is wrong.
  it("holds one row per song", () => {
    const seen = new Map<string, string>();
    const clashes: string[] = [];
    for (const r of liveCharts) {
      const key = `${r.kind}:${titleKey(r.title)}`;
      if (seen.has(key)) clashes.push(`${seen.get(key)} ↔ ${r.title}`);
      else seen.set(key, r.title);
    }
    expect(clashes, `split releases: ${clashes.join(", ")}`).toEqual([]);
  });
});

// build-live-charts.mjs takes a Deezer search hit's `cover_big` only if the CDN
// actually serves it. Wizkid's "Superstar" shipped with a hash Deezer had
// dropped: the URL answers 302 to the empty-string MD5, which renders a grey
// placeholder, and the builder's carry-forward kept it on every run.
describe("the live-charts cover check", () => {
  // The URL that shipped on Wizkid's Superstar row until 24 Sep 2026, and the
  // redirect Deezer's CDN gave for it.
  const SHIPPED = "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg";
  const PLACEHOLDER = `https://cdn-images.dzcdn.net/images/cover/${DEEZER_NO_COVER}/500x500-000000-80-0-0.jpg`;
  const REAL = "https://cdn-images.dzcdn.net/images/cover/5d6f7e168ec16377ae3bfa88dbf1ebb5/500x500-000000-80-0-0.jpg";

  type Answer = { status: number; bytes?: number } | Error;
  /** A fetch that answers in turn, and records how it was asked. */
  function cdn(...answers: Answer[]) {
    const calls: { url: string; redirect?: string }[] = [];
    const fetchImpl = async (url: string, init: { redirect?: string } = {}) => {
      calls.push({ url, redirect: init.redirect });
      const a = answers[Math.min(calls.length - 1, answers.length - 1)];
      if (a instanceof Error) throw a;
      return {
        status: a.status,
        arrayBuffer: async () => new ArrayBuffer(a.bytes ?? 0),
      };
    };
    return { fetchImpl, calls };
  }

  it("refuses a sleeve that redirects to the placeholder, asking without following redirects", async () => {
    const { fetchImpl, calls } = cdn({ status: 302 });
    expect(await servesCoverArt(SHIPPED, { fetchImpl, retryMs: 0 })).toBe(false);
    expect(calls.length).toBe(2);
    expect(calls.every((c) => c.redirect === "manual")).toBe(true);
  });

  it("refuses the placeholder itself without asking", async () => {
    const { fetchImpl, calls } = cdn({ status: 200, bytes: 6602 });
    expect(await servesCoverArt(PLACEHOLDER, { fetchImpl, retryMs: 0 })).toBe(false);
    expect(calls.length).toBe(0);
  });

  it("refuses a 200 too small to be artwork, and an unreachable CDN", async () => {
    expect(await servesCoverArt(REAL, { ...cdn({ status: 200, bytes: 900 }), retryMs: 0 })).toBe(false);
    expect(await servesCoverArt(REAL, { ...cdn(new Error("socket hang up")), retryMs: 0 })).toBe(false);
    expect(await servesCoverArt("", { ...cdn({ status: 200, bytes: 54_669 }), retryMs: 0 })).toBe(false);
  });

  it("accepts real artwork, including after one 302 under load", async () => {
    expect(await servesCoverArt(REAL, { ...cdn({ status: 200, bytes: 54_669 }), retryMs: 0 })).toBe(true);
    const flaky = cdn({ status: 302 }, { status: 200, bytes: 54_669 });
    expect(await servesCoverArt(REAL, { ...flaky, retryMs: 0 })).toBe(true);
    expect(flaky.calls.length).toBe(2);
  });

  it("is what the builder calls before it keeps a hit", () => {
    const src = readFileSync("scripts/build-live-charts.mjs", "utf8");
    expect(src).toMatch(/if \(hit && \(await servesCoverArt\(art\(hit\)/);
    // The line that shipped, which kept any hit's cover on trust.
    expect(src).not.toMatch(/^\s*if \(hit\) \{\s*$/m);
  });
});
