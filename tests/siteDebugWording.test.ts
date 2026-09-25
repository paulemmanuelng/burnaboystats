import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import UpdatesFeed from "../app/components/UpdatesFeed";
import { updates } from "../app/data/updates";
import { allItems } from "../app/data/certifications";
import { albumPages } from "../app/data/albumPages";
import { albums } from "../app/data/albums";
import { stats as byTheNumbers } from "../app/data/byTheNumbers";
import { CAREER_STREAMS_ANCHOR_READ_ON } from "../app/data/streamingTotals";
import { sweptArtists } from "../app/data/afrobeats";
import { numberOnesByRelease, countryNumberOnes, numberOneCountryCount } from "../app/lib/analysis";
import { findings } from "../app/lib/analysisFindings";
import { boardCells, boardCountriesShown } from "../app/lib/homeData";
import { navGroups } from "../app/lib/navGroups";
import { getStatCards } from "../app/lib/statCards";
import { searchIndex } from "../app/lib/searchIndex";
import { faqs } from "../app/data/faqs";
import { listenersLabel } from "../app/lib/visualizedSections";

/**
 * Wording the full-site debug of 24 Sep 2026 found reading wrong on the live
 * site (group A, items A-26 to A-48). Each negative control is the string the
 * site shipped, quoted from the source or the page as served.
 */

const ROOT = process.cwd();
const read = (p: string) => readFileSync(join(ROOT, p), "utf8");

describe("chart rows (A-27)", () => {
  // A No. 1 cannot climb. The Nigerian album rows for I Told Them… and No Sign
  // of Weakness carried the open-peak note, and the chip read "Nigeria — peak
  // #1 (Peak still open — … so it may yet climb.)".
  const SHIPPED = '{ c: "NG", peak: 1, note: "Peak still open — read while the release is still on the chart, so it may yet climb." }';
  const openPeakOnNo1 = /peak: 1, note: "[^"]*may yet climb/g;

  it("catches the row that shipped", () => {
    expect(SHIPPED.match(openPeakOnNo1)).toHaveLength(1);
  });

  it("no peak-1 row says its peak may yet climb", () => {
    for (const f of ["app/data/charts.ts", "app/data/afrobeats.ts"]) {
      expect(read(f).match(openPeakOnNo1) ?? [], f).toEqual([]);
    }
  });
});

describe("/records/visualized (A-28, A-39)", () => {
  it("both layouts call the certification pace 'international'", () => {
    const src = read("app/records/visualized/page.tsx");
    // Desktop shipped "— {certYearPeak} certifications with the year still
    // running" beside the phone's "63 international certifications".
    expect(src).not.toContain("— {certYearPeak} certifications with the year");
    expect(src).toContain("{certYearPeak} international certifications with the year still running");
    expect(src).toContain("${certYearPeak} international certifications, and it is still running");
  });

  it("never labels a listener reading past a threshold it had not crossed", () => {
    // The shipped formatter, `${v.toFixed(1)}M`, printed the 6 August 59.99
    // as "60.0M" two days before the 60M marker.
    const shipped = (v: number) => `${v.toFixed(1)}M`;
    expect(shipped(59.99)).toBe("60.0M");
    expect(listenersLabel(59.99)).toBe("59.9M");
    expect(listenersLabel(60.01)).toBe("60.0M");
    expect(listenersLabel(58.3)).toBe("58.3M");
    for (const f of ["app/records/visualized/page.tsx", "app/components/MobileVisualized.tsx"]) {
      expect(read(f), `${f} formats listeners on its own again`).not.toContain("${v.toFixed(1)}M");
      expect(read(f)).toContain("listenersLabel");
    }
  });
});

describe("the desktop updates feed dates rows the British way (A-29)", () => {
  it("prints 23 September 2026, not September 23, 2026", () => {
    const html = renderToStaticMarkup(createElement(UpdatesFeed, { items: updates.filter((u) => u.date === "2026-09-23").slice(0, 1) }));
    expect(html).toContain("23 September 2026");
    expect(html).not.toContain("September 23, 2026");
  });
});

describe("No. 1 is spelled with a space, and the album with its ellipsis (A-30)", () => {
  const NO_SPACE = /No\.\d/;

  it("the updates feed never prints No.1 / No.14", () => {
    // Shipped on the 3 Jul entry: "…new peaks of No.5 in the UK, No.6 in Italy,
    // No.14 in Ireland and No.35 in Finland…"
    expect(NO_SPACE.test("the World Cup anthem hits new peaks of No.5 in the UK, No.6 in Italy")).toBe(true);
    expect(updates.filter((u) => NO_SPACE.test(u.text)).map((u) => `${u.date}: ${u.text.slice(0, 60)}`)).toEqual([]);
  });

  it("the Keep Exploring card and the chart-history titles say No. 1s", () => {
    for (const f of ["app/components/KeepExploring.tsx", "app/records/charts/page.tsx", "app/afrobeats/[artist]/charts/page.tsx", "app/records/by-the-numbers/page.tsx"]) {
      expect(read(f), f).not.toMatch(/No\.1s/);
    }
  });

  it("the site's own data writes I Told Them… with a real ellipsis", () => {
    // charts.ts shipped `{ title: "I Told Them...", year: 2023, entries: [`
    // while albums.ts, the album page and the feed wrote "I Told Them…".
    // liveCharts.ts is kworb's spelling and is not ours to change.
    const dots = /(?:title|work): "[^"]*\.\.\.[^"]*"/;
    expect(dots.test('  { title: "I Told Them...", year: 2023, entries: [')).toBe(true);
    for (const f of ["app/data/charts.ts", "app/data/certifications.ts", "app/data/awards.ts", "app/data/afrobeats.ts", "app/lib/homeData.ts"]) {
      expect(read(f).match(new RegExp(dots.source, "g")) ?? [], f).toEqual([]);
    }
    expect(allItems.some((r) => r.title === "I Told Them…")).toBe(true);
  });

  // The share cards drew it too. Comments may quote the old spelling; code may not.
  const CARDS = ["app/music/[song]/opengraph-image.tsx", "app/music/albums/[album]/opengraph-image.tsx", "app/dai-dai/ogId.ts"];
  const code = (src: string) => src.split("\n").filter((l) => !/^\s*(\/\/|\/\*|\*)/.test(l)).join("\n");

  it("the song, album and Dai Dai share cards print No. 1", () => {
    // Shipped until 25 Sep 2026: the song and album cards' stat line, and the
    // Dai Dai card's two stats (dai-dai/ogId.ts).
    const shipped = [
      '    best != null && { v: best === 1 ? "No.1" : `#${best}`, l: "Best peak" },',
      '  { v: "No.1", l: "Global 200" },',
      '  { v: `${daiDaiNumberOnes}`, l: "Country No.1s" },',
    ];
    for (const line of shipped) expect(code(line), line).toMatch(NO_SPACE);
    for (const f of CARDS) expect(code(read(f)), f).not.toMatch(NO_SPACE);
  });

  it("the song and album cards fold the peak AS PRINTED into their id, so the new words get a new URL", () => {
    // Shipped until 25 Sep 2026: the id carried the bare number, so a card whose
    // only change was "No.1" -> "No. 1" kept the URL every preview had cached.
    const shippedSongId = 'return [{ id: ogId(`${slug}|${song?.credit ?? ""}|${best}|${countries}|${certCount}|${cardUrl(`/music/${slug}`)}`), alt, size, contentType }];';
    const shippedAlbumId = "return [{ id: ogId(`${slug}|${best}|${countries}|${certCount}|${cardUrl(`/music/albums/${slug}`)}`), alt, size, contentType }];";
    const foldsPeak = /id: ogId\(`[^`]*\|\$\{peak\}\|/;
    expect(shippedSongId).not.toMatch(foldsPeak);
    expect(shippedAlbumId).not.toMatch(foldsPeak);
    for (const f of CARDS.slice(0, 2)) {
      const src = read(f);
      expect(src, f).toMatch(foldsPeak);
      expect(src, f).toContain('peak != null && { v: peak, l: "Best peak" }');
    }
  });
});

describe("every certified release is dated (A-32)", () => {
  it("the certifications API publishes a year for every release", async () => {
    // Shipped: {"title":"Lenu (Remix)","credit":"Burna Boy","year":null}, and
    // year null on No Fit Vex and Level Up.
    const { GET } = await import("../app/api/v1/certifications/route");
    const body = await GET().json();
    const releases = body.data.releases as { title: string; credit: string; year: number | null }[];
    expect(releases.filter((r) => typeof r.year !== "number").map((r) => r.title)).toEqual([]);
    const lenu = releases.find((r) => r.title === "Lenu (Remix)")!;
    expect(lenu.credit).toBe("BNXN ft. Burna Boy");
    expect(lenu.year).toBe(2020);
  });
});

describe("/api's phone pills name what they count (A-33)", () => {
  it("says countries charted, as the desktop badge does", () => {
    const src = read("app/api/page.tsx");
    expect(src).toContain("`${chartedCountryCount} countries charted`");
    expect(src).not.toMatch(/`\$\{chartedCountryCount\} countries`/);
  });
});

describe("/methodology (A-34)", () => {
  it("dates the career-streams anchor from the newest ChartMasters read on file", () => {
    // It printed "(last 17 September 2026)" after reads of 20, 21, 22 and 23 Sep.
    const reads = readdirSync(join(ROOT, "docs/sourcing/chartmasters/reads"))
      .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
      .map((f) => f.slice(0, 10))
      .sort();
    expect(CAREER_STREAMS_ANCHOR_READ_ON).toBe(reads.at(-1));
    const src = read("app/methodology/page.tsx");
    expect(src).not.toContain("(last 17 September 2026)");
    expect(src).toContain("(last ${anchorReadLabel})");
  });

  it("does not call the hand-read figures live", () => {
    const src = read("app/methodology/page.tsx").replace(/\s+/g, " ");
    // Shipped: "Spotify monthly listeners, follower counts, YouTube views — are
    // tracked live". Followers and the channel total are read by hand.
    expect(src).not.toContain("follower counts, YouTube views — are tracked live");
    expect(src).toContain("follower counts and his channel&apos;s all-time YouTube total are read by hand");
  });
});

describe("the 27 Jul Spotify entry (A-35)", () => {
  it("no longer claims the only songs past 20 days, nor re-logs the 21st day", () => {
    const SHIPPED = "joining BTS's “Swim” as the only songs to spend more than 20 days atop the chart this year";
    expect(updates.some((u) => u.text.includes(SHIPPED))).toBe(false);
    const entry = updates.find((u) => u.date === "2026-07-27" && u.text.startsWith("Over 20 days at the summit"))!;
    expect(entry.text).toContain("the only 2026 releases");
    expect(entry.text).not.toContain("21st day");
  });
});

describe("album pages (A-36, A-42)", () => {
  it("no FAQ answer opens a parenthesis after a full stop", () => {
    // Shipped: "…Olamide and Reminisce. (the linked Spotify release is the
    // 19-track deluxe edition)."
    const bad = /\. \([a-z]/;
    expect(bad.test("Olamide and Reminisce. (the linked Spotify release is the 19-track deluxe edition).")).toBe(true);
    const hits = albumPages.flatMap((p) => p.faqs.map((f) => f.a)).filter((a) => bad.test(a));
    expect(hits).toEqual([]);
  });

  it("names every guest on the tracklist wherever the page lists the guests", () => {
    // The No Sign of Weakness page named Travis Scott, Mick Jagger and
    // Shaboozey, and left out "Pardon (with Stromae)".
    const page = albumPages.find((p) => p.slug === "no-sign-of-weakness")!;
    const album = albums.find((a) => a.title === "No Sign of Weakness")!;
    const guests = album.tracks.flatMap((t) => [...t.matchAll(/\((?:feat\.|with) ([^)]+)\)/g)].map((m) => m[1]));
    expect(guests).toEqual(["Travis Scott", "Mick Jagger", "Stromae", "Shaboozey"]);
    const faq = page.faqs.find((f) => /Who features/.test(f.q))!.a;
    const fact = page.extraFacts.find((f) => /featuring/.test(f.l))!.l;
    for (const g of guests) {
      expect(page.blurb, `blurb omits ${g}`).toContain(g);
      expect(faq, `FAQ omits ${g}`).toContain(g);
      expect(fact, `fact omits ${g}`).toContain(g);
    }
  });
});

describe("/records/by-the-numbers (A-37)", () => {
  it("does not say the Hot 100 lead has run six years", () => {
    const hot = byTheNumbers.find((s) => s.label === "Billboard Hot 100 entries")!;
    expect(hot.sub).not.toBe("the most by any African artist, six years running");
    expect(hot.sub).toBe("the most by any African artist, and on the chart six years running");
  });
});

describe("/records/cars (A-40)", () => {
  it("does not call the Senna the only dealer-stated price beside the Chiron's dealer figure", () => {
    const src = read("app/records/cars/page.tsx").replace(/\s+/g, " ");
    expect(src).not.toContain("The McLaren Senna is the one price stated by the selling dealer");
    expect(src).toContain("Two prices come from the selling dealer");
  });
});

describe("the No. 1s stat card (A-41)", () => {
  it("sets the countries with a No. 1 beside the No. 1 count, not the charted countries", () => {
    const card = getStatCards().find((c) => c.id === "no1s")!;
    expect(card.detail).not.toMatch(/charting countries/);
    expect(card.detail).toContain(`No. 1s in ${numberOneCountryCount} countries`);
  });
});

describe("/analysis's No. 1s chart reconciles with its headline (A-43)", () => {
  it("labels the slice and accounts for the releases it leaves out", () => {
    const f = findings.find((x) => x.id === "one-song")!;
    expect(f.chartLabel).toMatch(/top \d+/);
    const shown = f.bars.length;
    const rest = numberOnesByRelease.slice(shown);
    // Shipped: eight bars summing to 38 under a 44 headline, "Own It" missing,
    // and nothing on the chart saying so.
    if (rest.length > 0) expect(f.chartNote).toContain(`other ${rest.length} releases`);
    const barsTotal = numberOnesByRelease.slice(0, shown).reduce((n, r) => n + r.count, 0);
    expect(barsTotal + rest.reduce((n, r) => n + r.count, 0)).toBe(countryNumberOnes);
  });
});

describe("the home No. 1 board counts countries, not cells (A-44)", () => {
  it("does not count the UK's two cells twice", () => {
    // Shipped: "SHOWING 24 OF 30" over 24 cells, two of them the UK's.
    expect(boardCountriesShown).toBe(new Set(boardCells.map((c) => c.code)).size);
    expect(boardCells.filter((c) => c.code === "UK").length).toBeGreaterThanOrEqual(1);
    expect(read("app/page.tsx")).toContain("Showing {boardCountriesShown} of {boardCountryTotal}");
  });
});

describe("the nav's Afrobeats Board count matches the board (A-45)", () => {
  it("counts Burna Boy, as the board's own 'One rule, N verified artists' does", () => {
    const row = navGroups.flatMap((g) => g.items).find((i) => i.label === "The Afrobeats Board")!;
    expect(row.meta).toBe(String(sweptArtists.length + 1));
    expect(read("app/afrobeats/page.tsx")).toContain("One rule, {boardNames.length} verified artists");
  });
});

describe("no surface promises a weekly board review (A-46)", () => {
  it("llms.txt and the Afrobeats API say what /afrobeats says", () => {
    for (const f of ["app/llms.txt/route.ts", "app/api/v1/afrobeats/route.ts"]) {
      const src = read(f);
      expect(src, f).not.toMatch(/Reviewed weekly/);
      expect(src, f).toContain("Re-read at each register sweep");
    }
    expect(read("app/api/v1/afrobeats/route.ts")).not.toContain('board: "weekly"');
  });
});

describe("FAQ search entry (A-48)", () => {
  it("promises only what the FAQ answers", () => {
    const doc = searchIndex.find((d) => d.path === "/faq")!;
    const faqText = faqs.map((f) => `${f.q} ${f.a}`).join(" ").toLowerCase();
    // Shipped: "Burna Boy's real name, net worth, Grammys and more — answered."
    // over 22 questions, none of them about net worth.
    expect(faqText.includes("net worth")).toBe(false);
    expect(doc.description.toLowerCase()).not.toContain("net worth");
    expect((doc.keywords ?? []).map((k) => k.toLowerCase())).not.toContain("net worth");
  });
});
