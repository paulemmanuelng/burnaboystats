import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/africas-biggest",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../app/records/africas-biggest/page";
import AfrobeatsPage from "../app/afrobeats/page";
import desk from "../app/records/africas-biggest/africas-biggest.module.css";
import phone from "../app/components/mobileAfricasBiggest.module.css";
import {
  hot100Artists,
  hot100NotCounted,
  hot100Standings,
  hot100StandingsOf,
  hot100StillChartingLine,
  hot100Top,
  HOT100_TOP,
  HOT100_COUNTRIES,
  HOT100_CHART_DATE,
  HOT100_CHART_DATE_LONG,
  HOT100_READ_ON,
  HOT100_READ_ON_LONG,
  HOT100_PUBLISHED_ON,
  HOT100_PUBLISHED_ON_LONG,
  HOT100_METHOD,
  weeksOf,
  type Hot100Artist,
  type Hot100Song,
} from "../app/data/hot100Weeks";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { allChartItems } from "../app/data/charts";
import { statBoxes, HIGHLIGHT, BURNA_HOT_100_ENTRIES, rankOf, type RankEntry } from "../app/data/africasBiggest";
import { africaBoards } from "../app/lib/africaBoards";

/**
 * Most weeks on the Billboard Hot 100 — African artists, top five, on
 * /records/africas-biggest and nowhere else (Paul, 27 Sep 2026).
 *
 * Every figure on it is a sum over Billboard's own rows, and the rows are the
 * only thing typed. So the tests are of four kinds: the rows are what Billboard
 * printed (they reconcile with each page's own summary line, with the chart
 * calendar, and with the site's separately swept US figures); the figures are
 * computed from the rows and nothing else; who counts as African is a call
 * written down, not an absence; and the board is on the one page it belongs
 * to, on both layouts, and on no other.
 */

const read = (p: string) => readFileSync(p, "utf8");

/** Rendered markup into a jsdom tree — the parse tests/lcpPriority.test.tsx
 *  uses. Static, so no cleanup between tests empties it. */
function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

/** The CI alarm's window, in days since the chart date. */
const STALE_AFTER_DAYS = 10;
const DAY = 86_400_000;
const at = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
/** The day a Hot 100 dated `chartDate` (a Saturday) is published: the Tuesday before. */
const readableFrom = (chartDate: string) => new Date(at(chartDate) - 4 * 24 * 3600 * 1000).toISOString().slice(0, 10);
const plusWeeks = (iso: string, n: number) => new Date(at(iso) + n * 7 * DAY).toISOString().slice(0, 10);
const counted = hot100Artists.filter((a) => a.read !== "unreadable" && a.songs.length > 0);
const artist = (slug: string) => hot100Artists.find((a) => a.slug === slug)!;
const sourceOf = (a: Hot100Artist, s: Hot100Song) => s.source ?? a.source;
const ARTIST_PAGE = /^https:\/\/www\.billboard\.com\/artist\/([a-z0-9-]+)\/chart-history\/hsi\/$/;
const WEEKLY_CHART = /^https:\/\/www\.billboard\.com\/charts\/hot-100\/(\d{4}-\d{2}-\d{2})\/$/;
const BOX_ID = "most-hot-100-weeks";
const TITLE = "Most weeks on the Billboard Hot 100";

/* ── The rows ─────────────────────────────────────────────────────────────── */

describe("the rows are Billboard's rows", () => {
  it("holds each act once", () => {
    const slugs = hot100Artists.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    const names = hot100Artists.map((a) => a.name.toLowerCase());
    expect(new Set(names).size).toBe(names.length);
  });

  it("accounts for Burna Boy and every board artist, under the board's own names and countries", () => {
    // Counted, read with nothing on the Hot 100, or unreadable — never simply
    // missing, so a new board artist forces a decision here.
    for (const b of afrobeatsArtists) {
      const a = hot100Artists.find((x) => x.slug === b.slug);
      expect(a, `${b.name} is not accounted for in hot100Weeks.ts`).toBeTruthy();
      expect(a!.name, b.slug).toBe(b.name);
      expect(HOT100_COUNTRIES[a!.country].flag, `${b.name}'s country`).toBe(b.flag);
    }
    expect(artist("burna-boy").name).toBe(HIGHLIGHT);
  });

  /** Word-boundary and case-insensitive: Billboard spells him "WizKid" in two
   *  of his credits and the band "KONGOS", and a bare substring would let
   *  "Tyla" match a "Tyla Yaweh". */
  const credits = (credit: string, name: string) =>
    new RegExp(`(^|[^a-z0-9])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`, "i").test(credit);

  it("every counted song's credit names the act it is filed under — lead or featured, never a writing credit", () => {
    const wrong = counted.flatMap((a) =>
      a.songs.filter((s) => !credits(s.credit, a.name)).map((s) => `${a.name}: "${s.title}" credited to ${s.credit}`),
    );
    expect(wrong).toEqual([]);
  });

  it("the credit check rejects the rows it exists to keep out", () => {
    // Billboard's own credit line for "Lift Me Up" — the song Tems co-wrote and
    // is not credited on, which is why it is not on her Hot 100 page.
    expect(credits("Rihanna", "Tems")).toBe(false);
    // A name inside a longer word is not a credit.
    expect(credits("Seether Featuring Amy Lee", "Seethe")).toBe(false);
    expect(credits("Seether Featuring Amy Lee", "Amy")).toBe(true);
    // And it is not fooled by capitalisation it has to accept.
    expect(credits("Drake Featuring WizKid & Kyla", "Wizkid")).toBe(true);
    expect(credits("KONGOS", "Kongos")).toBe(true);
  });

  it("an act read off its own page reconciles with the summary line printed there", () => {
    for (const a of counted.filter((x) => x.read === "own-page")) {
      expect(a.source, a.name).toMatch(ARTIST_PAGE);
      expect(a.summary, `${a.name} was read off its own page and carries no summary`).toBeTruthy();
      expect(a.songs.length, `${a.name}: rows vs "${a.summary!.songs} songs"`).toBe(a.summary!.songs);
      if (a.summary!.no1s !== undefined)
        expect(a.songs.filter((s) => s.peak === 1).length, `${a.name}: No. 1s`).toBe(a.summary!.no1s);
      if (a.summary!.top10s !== undefined)
        expect(a.songs.filter((s) => s.peak <= 10).length, `${a.name}: Top 10s`).toBe(a.summary!.top10s);
      // The page lists everything, so nothing of theirs was read anywhere else.
      expect(a.songs.every((s) => sourceOf(a, s) === a.source), a.name).toBe(true);
    }
  });

  it("an act read off a co-artist's page names that co-artist in every row's credit", () => {
    const co = counted.filter((a) => a.read === "co-artist-page");
    expect(co.length).toBeGreaterThan(0);
    for (const a of co)
      for (const s of a.songs) {
        const slug = ARTIST_PAGE.exec(sourceOf(a, s))?.[1];
        expect(slug, `${a.name}: "${s.title}" has no chart-history source`).toBeTruthy();
        expect(slug, `${a.name}: a co-artist page cannot be the act's own`).not.toBe(a.slug);
        expect(credits(s.credit, slug!.replace(/-/g, " ")), `${a.name}: "${s.title}" vs ${slug}`).toBe(true);
      }
  });

  it("a row read off the weekly charts is its last week's figure, with the weeks after it checked", () => {
    const weekly = counted.flatMap((a) =>
      a.songs.filter((s) => WEEKLY_CHART.test(sourceOf(a, s))).map((s) => [a, s] as const),
    );
    expect(weekly.length, "no weekly-chart rows — checking nothing").toBeGreaterThanOrEqual(10);
    for (const [a, s] of weekly) {
      const id = `${a.name}: "${s.title}"`;
      const issue = WEEKLY_CHART.exec(sourceOf(a, s))![1];
      expect(s.lastWeek, id).toBe(issue);
      // One unbroken run: the last week sits weeks-1 issues after the debut.
      expect(plusWeeks(s.debut, s.weeks - 1), `${id} — debut and weeks disagree with its last week`).toBe(s.lastWeek);
      expect(s.goneBy?.length, `${id} — nothing checked after its last week`).toBeGreaterThan(0);
      expect(s.goneBy![0], `${id} — the week after its last must be checked`).toBe(plusWeeks(s.lastWeek!, 1));
      for (let i = 1; i < s.goneBy!.length; i++) expect(s.goneBy![i] > s.goneBy![i - 1], id).toBe(true);
      for (const d of s.goneBy!) expect(new Date(at(d)).getUTCDay(), `${id} — ${d}`).toBe(6);
    }
    // And a row with a last week recorded is a weekly-chart row.
    for (const a of counted)
      for (const s of a.songs)
        if (s.lastWeek) expect(sourceOf(a, s), `${a.name}: "${s.title}"`).toMatch(WEEKLY_CHART);
  });

  it("sits on the chart calendar: Saturdays, in order, and no more weeks than issues", () => {
    for (const a of counted)
      for (const s of a.songs) {
        const id = `${a.name}: "${s.title}"`;
        for (const d of [s.debut, ...(s.peakDate ? [s.peakDate] : [])]) {
          expect(d, id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
          expect(new Date(at(d)).getUTCDay(), `${id} — ${d} is not a Saturday`).toBe(6);
        }
        if (s.peakDate) expect(s.debut <= s.peakDate && s.peakDate <= HOT100_CHART_DATE, `${id} dates out of order`).toBe(true);
        if (s.peakDate && s.lastWeek) expect(s.peakDate <= s.lastWeek, `${id} peaked after its last week`).toBe(true);
        expect(s.peak, id).toBeGreaterThanOrEqual(1);
        expect(s.peak, id).toBeLessThanOrEqual(100);
        expect(s.weeks, id).toBeGreaterThanOrEqual(1);
        const issues = (at(HOT100_CHART_DATE) - at(s.debut)) / (7 * DAY) + 1;
        expect(s.weeks, `${id} has more weeks than issues since its debut`).toBeLessThanOrEqual(issues);
        // Still on the chart means it was not checked gone.
        if (s.stillCharting) expect(s.goneBy, id).toBeUndefined();
      }
  });

  it("only the two songs on the chart dated 26 September 2026 are still charting", () => {
    const moving = counted.flatMap((a) => a.songs.filter((s) => s.stillCharting).map((s) => `${a.name}: ${s.title}`));
    expect(moving).toEqual(["Tems: What You Need", "Burna Boy: Dai Dai (FIFA World Cup Official Song 2026)"]);
  });

  it("a song credited to two counted acts is the same row for both", () => {
    const byTitle = new Map<string, string[]>();
    for (const a of counted)
      for (const s of a.songs)
        // Where it was read may differ; what was read may not.
        byTitle.set(s.title, [...(byTitle.get(s.title) ?? []), JSON.stringify({ ...s, source: undefined })]);
    const shared = [...byTitle].filter(([, rows]) => rows.length > 1).map(([t]) => t);
    expect(shared.sort()).toEqual(["Essence", "Sad Girlz Luv Money", "Sensational"]);
    for (const t of shared) expect(new Set(byTitle.get(t)).size, t).toBe(1);
  });

  it("an unreadable page is unranked, never zero — and the board's own data backs its absence", () => {
    const unreadable = hot100Artists.filter((a) => a.read === "unreadable");
    expect(unreadable.length).toBeGreaterThan(0);
    for (const a of unreadable) {
      expect(a.songs, a.name).toEqual([]);
      expect(hot100Standings.map((s) => s.slug), a.name).not.toContain(a.slug);
      // Each is a board artist whose separately swept chart record has no US
      // Hot 100 peak at all — no single with a US entry (an album's US entry is
      // the Billboard 200, a different chart). If one ever gains one, this is
      // where it shows.
      const b = afrobeatsArtists.find((x) => x.slug === a.slug);
      expect(b, `${a.name} is unreadable and not a board artist — nothing backs the absence`).toBeTruthy();
      const us = b!.charts
        .filter((r) => r.kind === "Singles" && r.entries.some((e) => e.c === "US"))
        .map((r) => r.title);
      expect(us, `${a.name} has a US peak in afrobeats.ts`).toEqual([]);
    }
  });
});

/* ── The rows against the site's own, separately read, US figures ─────────── */

describe("the rows agree with what the site already publishes", () => {
  const key = (t: string) => t.replace(/\(.*?\)/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

  it("each best peak matches the Hot 100 peak board on the same page", () => {
    const board = statBoxes.find((b) => b.id === "billboard-hot-100-peak")!.entries!;
    const checked = board.filter((e) => hot100Standings.some((s) => s.name === e.name));
    expect(checked.length, "no overlap — checking nothing").toBeGreaterThanOrEqual(5);
    for (const e of checked)
      expect(`No. ${hot100Standings.find((s) => s.name === e.name)!.bestPeak}`, e.name).toBe(e.value);
  });

  // The peak board was typed until 30 Sep 2026 and left out two acts the rows
  // rank above its lower rows: Hugh Masekela (No. 1, 1968) and Miriam Makeba
  // (No. 12), so Burna Boy's No. 16 printed fifth; and it gave Tems' No. 1 no
  // tie mark, so she printed second. Judged here against every counted act's
  // rows, not against the standings the board is now built from.
  const bestPeak = (a: Hot100Artist) => Math.min(...a.songs.map((s) => s.peak));
  const peakBoardFaults = (entries: RankEntry[]) => {
    const faults: string[] = [];
    const last = Number(entries.at(-1)!.value!.replace(/\D/g, ""));
    for (const a of counted)
      if (bestPeak(a) <= last && !entries.some((e) => e.name === a.name))
        faults.push(`missing ${a.name} (No. ${bestPeak(a)})`);
    entries.forEach((e, i) => {
      const a = counted.find((x) => x.name === e.name);
      if (!a) return void faults.push(`${e.name} has no Hot 100 rows`);
      const held = 1 + counted.filter((x) => bestPeak(x) < bestPeak(a)).length;
      if (rankOf(entries, i) !== held) faults.push(`${e.name} prints rank ${rankOf(entries, i)}, holds ${held}`);
    });
    return faults;
  };

  it("the Hot 100 peak board leaves out no act ranked above its last row, and prints the ranks the rows give", () => {
    const board = statBoxes.find((b) => b.id === "billboard-hot-100-peak")!.entries!;
    expect(peakBoardFaults(board)).toEqual([]);
    expect(board.some((e) => e.name === HIGHLIGHT), "his row is on the board").toBe(true);
  });

  it("negative control: the board as it was typed fails on all three counts", () => {
    const SHIPPED: RankEntry[] = [
      { name: "Wizkid", sub: "🇳🇬 “One Dance” (with Drake)", value: "No. 1" },
      { name: "Tems", sub: "🇳🇬 “Wait for U” (Future & Drake)", value: "No. 1" },
      { name: "Rema", sub: "🇳🇬 “Calm Down” (with Selena Gomez)", value: "No. 3" },
      { name: "Tyla", sub: "🇿🇦 “Water”", value: "No. 7" },
      { name: "Burna Boy", sub: "🇳🇬 “WGFT” (with Gunna)", value: "No. 16" },
    ];
    expect(peakBoardFaults(SHIPPED)).toEqual([
      "missing Hugh Masekela (No. 1)",
      "missing Miriam Makeba (No. 12)",
      "Tems prints rank 2, holds 1",
      "Rema prints rank 3, holds 4",
      "Tyla prints rank 4, holds 5",
      "Burna Boy prints rank 5, holds 7",
    ]);
  });

  it("the peak board's first No. 1 is the act the entries board calls the first to top the chart", () => {
    const first = statBoxes.find((b) => b.id === "billboard-hot-100-peak")!.entries![0];
    const entriesNote = statBoxes.find((b) => b.id === "most-hot-100-entries")!.note!;
    expect(first.value).toBe("No. 1");
    expect(entriesNote).toContain(`${first.name.split(" ").at(-1)} was the first African act to top the chart`);
  });

  it("each song count matches the Hot 100 entries board, and Burna Boy's matches his constant", () => {
    expect(artist("burna-boy").songs.length).toBe(BURNA_HOT_100_ENTRIES);
    const board = statBoxes.find((b) => b.id === "most-hot-100-entries")!.entries!;
    let checked = 0;
    for (const e of board)
      for (const name of e.name.split(" & ")) {
        const a = counted.find((x) => x.name === name);
        if (!a) continue;
        checked++;
        expect(a.songs.length, name).toBe(Number(e.value));
      }
    // Burna Boy, Tems, Seether, Wizkid, Tyla and Hugh Masekela.
    expect(checked, "no overlap — checking nothing").toBeGreaterThanOrEqual(6);
  });

  it("each row's peak matches the US peak the site's chart sweeps recorded for that title", () => {
    // Matched on title WITHIN the artist's own chart record, never across
    // artists — a title alone is not an identity.
    const usPeaks = (slug: string) =>
      new Map(
        (slug === "burna-boy" ? allChartItems : afrobeatsArtists.find((a) => a.slug === slug)?.charts ?? []).flatMap(
          (r) => {
            const us = r.entries.find((e) => e.c === "US");
            return us ? [[key(r.title), us.peak] as const] : [];
          },
        ),
      );
    let checked = 0;
    for (const a of counted) {
      const peaks = usPeaks(a.slug);
      for (const s of a.songs) {
        const p = peaks.get(key(s.title));
        if (p === undefined) continue;
        checked++;
        expect(s.peak, `${a.name}: "${s.title}"`).toBe(p);
      }
    }
    expect(checked, "matched almost nothing — the title key has stopped working").toBeGreaterThanOrEqual(25);
  });
});

/* ── Who counts ───────────────────────────────────────────────────────────── */

describe("African by nationality — every call written down", () => {
  // The acts whose nationality needed a call: formed in one country and based
  // in another, recording in exile, or of dual heritage. Each carries its call.
  const CALLS = ["seether", "kongos", "john-kongos", "moliy", "amaarae", "libianca", "cheb-mami", "hugh-masekela", "miriam-makeba"];

  it("each dual or diaspora act that is counted carries the call that counts it", () => {
    for (const slug of CALLS) {
      const a = artist(slug);
      expect(a, slug).toBeTruthy();
      expect(a.nationality?.length ?? 0, `${a.name} is counted with no nationality call written down`).toBeGreaterThan(20);
    }
    // And the two the owner may yet overrule say so — and cannot reach the top five.
    const open = hot100Artists.filter((a) => a.rulingOpen).map((a) => a.slug).sort();
    expect(open).toEqual(["john-kongos", "kongos"]);
    for (const slug of open) expect(hot100Top.map((s) => s.slug)).not.toContain(slug);
  });

  it("no act left out on nationality is counted, and each is given a non-African nationality", () => {
    const countedNames = new Set(hot100Artists.map((a) => a.name.toLowerCase()));
    const african = new Set(Object.values(HOT100_COUNTRIES).map((c) => c.name));
    for (const n of hot100NotCounted) {
      expect(countedNames.has(n.name.toLowerCase()), `${n.name} is both counted and left out`).toBe(false);
      expect(african.has(n.nationality), `${n.name} is left out as ${n.nationality}`).toBe(false);
    }
    // The ones a reader will raise first are there, with the reason.
    for (const name of ["F3miii", "Akon", "French Montana", "Shaboozey", "Dave Matthews Band"])
      expect(hot100NotCounted.find((n) => n.name === name)?.why, name).toBeTruthy();
  });

  it("names the calls in the board's own source line", () => {
    const box = statBoxes.find((b) => b.id === BOX_ID)!;
    expect(box.source).toContain("Nationality decides who counts");
    for (const n of hot100NotCounted) expect(box.source, n.name).toContain(n.name);
  });
});

/* ── The figures are computed ─────────────────────────────────────────────── */

describe("totals, counts and ranks come from the rows", () => {
  it("every standing is its rows, summed", () => {
    for (const s of hot100Standings) {
      const a = artist(s.slug);
      expect(s.weeks, s.name).toBe(a.songs.map((x) => x.weeks).reduce((m, n) => m + n, 0));
      expect(s.songs, s.name).toBe(a.songs.length);
      expect(s.bestPeak, s.name).toBe(Math.min(...a.songs.map((x) => x.peak)));
      expect(s.stillCharting, s.name).toBe(a.songs.filter((x) => x.stillCharting).length);
      expect(s.country, s.name).toBe(a.country);
    }
  });

  const withWeeks = (slug: string, title: string, weeks: number): Hot100Artist[] =>
    hot100Artists.map((a) =>
      a.slug !== slug ? a : { ...a, songs: a.songs.map((s) => (s.title === title ? { ...s, weeks } : s)) },
    );

  it("move a row and the board moves with it", () => {
    const rema = weeksOf(artist("rema"));
    const water = artist("tyla").songs.find((s) => s.title === "Water")!.weeks;
    const tyla = weeksOf(artist("tyla"));
    // Give Tyla enough weeks to pass Rema, and the top five changes with no other edit.
    const moved = hot100StandingsOf(withWeeks("tyla", "Water", water + (rema - tyla) + 1));
    const top = moved.filter((s) => s.rank <= HOT100_TOP).map((s) => s.slug);
    expect(top).toContain("tyla");
    expect(top).not.toContain("rema");
  });

  it("ties share a rank, the next rank skips, and a tie at fifth shows both", () => {
    const rema = weeksOf(artist("rema"));
    const water = artist("tyla").songs.find((s) => s.title === "Water")!.weeks;
    const tyla = weeksOf(artist("tyla"));
    const tied = hot100StandingsOf(withWeeks("tyla", "Water", water + (rema - tyla)));
    const r = tied.find((s) => s.slug === "rema")!;
    const t = tied.find((s) => s.slug === "tyla")!;
    expect(t.rank).toBe(r.rank);
    expect(tied.find((s) => s.weeks < rema)!.rank).toBe(r.rank + 2);
    expect(tied.filter((s) => s.rank <= HOT100_TOP).length).toBe(HOT100_TOP + 1);
    // The real data already carries ties further down: Kongos and Moliy share tenth.
    expect(hot100Standings.find((s) => s.slug === "kongos")!.rank).toBe(hot100Standings.find((s) => s.slug === "moliy")!.rank);
  });

  /**
   * A typed total is the one way these figures could stop following the rows.
   * The detector reads the data file, the board's entry in africasBiggest.ts and
   * both layouts of the page; its negative control is the literal line the
   * verified read itself carried for Tems.
   */
  const stripComments = (src: string) => src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "");
  const typedTotal = (src: string) =>
    /\btotal(?:Weeks)?"?\s*:\s*\d/.test(src) ||
    hot100Top.some((s) => new RegExp(`(^|[^\\w.#-])${s.weeks}([^\\w.%]|$)`).test(stripComments(src)));

  /** The board's own code in africasBiggest.ts: its row builder and its entry. */
  const boardCode = () => {
    const src = read("app/data/africasBiggest.ts");
    const a = src.indexOf("const hot100WeeksEntries");
    const b = src.indexOf(`id: "${BOX_ID}"`);
    expect(a, "the row builder moved — point this test at it").toBeGreaterThan(0);
    expect(b, "the board entry moved — point this test at it").toBeGreaterThan(0);
    return src.slice(a, src.indexOf("}));", a)) + src.slice(b, src.indexOf("\n  },", b));
  };

  it("no total is typed — in the data, the board's entry, or either layout", () => {
    const data = stripComments(read("app/data/hot100Weeks.ts"));
    expect(/\btotal(?:Weeks)?"?\s*:\s*\d/.test(data), "hot100Weeks.ts carries a typed total").toBe(false);
    expect(typedTotal(boardCode()), "africasBiggest.ts types a leaderboard figure").toBe(false);
    for (const f of ["app/records/africas-biggest/page.tsx", "app/components/MobileAfricasBiggest.tsx", "app/lib/africaBoards.ts"])
      expect(typedTotal(read(f)), `${f} types a leaderboard figure`).toBe(false);
  });

  it("the typed-total detector fires on the line the read shipped", () => {
    const SHIPPED_IN_THE_READ = `"totalWeeks": 158,`;
    expect(typedTotal(SHIPPED_IN_THE_READ)).toBe(true);
    // And on the figure dropped straight into a board entry.
    expect(typedTotal(`{ name: "Tems", value: "${hot100Top[0].weeks} weeks" }`)).toBe(true);
  });

  it("the still-charting sentence follows the rows", () => {
    expect(hot100StillChartingLine()).toBe(
      "Tems (“What You Need”) and Burna Boy (“Dai Dai”) are still on the chart, so both totals grow with each new one.",
    );
    // Nothing moving, nothing said.
    expect(hot100StillChartingLine(hot100Top.map((s) => ({ ...s, stillCharting: 0 })))).toBe("");
  });
});

/* ── The published board ──────────────────────────────────────────────────── */

describe("the top five", () => {
  it("is ordered by weeks, most first, and nobody tying the last place is left off", () => {
    expect(hot100Top.length).toBeGreaterThanOrEqual(HOT100_TOP);
    for (let i = 1; i < hot100Top.length; i++) expect(hot100Top[i].weeks).toBeLessThanOrEqual(hot100Top[i - 1].weeks);
    expect(hot100Top.every((s) => s.rank <= HOT100_TOP)).toBe(true);
    const last = hot100Top[hot100Top.length - 1].weeks;
    expect(hot100Standings.filter((s) => s.weeks === last).every((s) => hot100Top.includes(s))).toBe(true);
  });

  it("reads Tems, Seether, Wizkid, Burna Boy, Rema on the chart dated 26 September 2026, Tyla sixth", () => {
    // The order the verified read reported, pinned so a change to it is a
    // decision made out loud. Burna Boy is one week clear of Rema and "Dai Dai"
    // is still on the chart: when a re-read moves the order, update this line.
    expect(hot100Top.map((s) => s.name)).toEqual(["Tems", "Seether", "Wizkid", "Burna Boy", "Rema"]);
    expect(hot100Standings[HOT100_TOP].name).toBe("Tyla");
  });
});

/* ── On /records/africas-biggest, both layouts ────────────────────────────── */

describe("/records/africas-biggest carries the board on both layouts", () => {
  const box = statBoxes.find((b) => b.id === BOX_ID)!;
  const container = parse(renderToStaticMarkup(<AfricasBiggestPage />));
  const norm = (el: Element | null) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

  it("is a board on the page, in the Billboard group, built from the data", () => {
    expect(box, "no Hot 100 weeks board in statBoxes").toBeTruthy();
    expect(box.title).toBe(TITLE);
    expect(box.meta).toBe(`Top ${HOT100_TOP} · African artists`);
    expect(box.note).toContain(HOT100_METHOD);
    expect(HOT100_METHOD).toContain("lead or featured");
    expect(HOT100_METHOD).toContain("African artists by nationality");
    expect(HOT100_METHOD).toContain(`As of the chart dated ${HOT100_CHART_DATE_LONG} (published ${HOT100_PUBLISHED_ON_LONG}).`);
    // The publication date is the Tuesday before the chart's Saturday.
    expect(new Date(`${HOT100_PUBLISHED_ON}T00:00:00Z`).getUTCDay(), "Billboard publishes on Tuesdays").toBe(2);
    expect(box.source).toContain(`read ${HOT100_READ_ON_LONG}`);
    expect(box.source).toContain(`as of the chart dated ${HOT100_CHART_DATE_LONG}`);
    expect(box.entries!.map((e) => e.name)).toEqual(hot100Top.map((s) => s.name));
    const group = container.querySelector("section#billboard")!;
    expect([...group.querySelectorAll("h3")].map(norm)).toContain(TITLE);
  });

  it("desktop: the title, the kicker, then the five rows in order — every figure the data's", () => {
    const card = [...container.querySelectorAll(`.${desk.box}`)].find((b) => norm(b.querySelector("h3")) === TITLE)!;
    expect(card, "no desktop card").toBeTruthy();
    expect(norm(card.querySelector(`.${desk.boxMeta}`))).toBe(`Top ${HOT100_TOP} · African artists`);
    const rows = [...card.querySelectorAll(`.${desk.entryRow}`)];
    expect(rows.length).toBe(hot100Top.length);
    rows.forEach((row, i) => {
      const s = hot100Top[i];
      expect(norm(row.querySelector(`.${desk.entryRank}`))).toBe(String(s.rank));
      expect(norm(row.querySelector(`.${desk.entryName}`))).toBe(s.name);
      expect(norm(row.querySelector(`.${desk.entrySub}`))).toBe(
        `${HOT100_COUNTRIES[s.country].flag} ${s.songs} ${s.songs === 1 ? "song" : "songs"} · best No. ${s.bestPeak}`,
      );
      expect(norm(row.querySelector(`.${desk.entryValue}`))).toBe(`${s.weeks} weeks`);
      // His emphasis on his row — the page's rule on every board — and no one else's.
      expect(row.classList.contains(desk.entryHim), s.name).toBe(s.name === HIGHLIGHT);
    });
    expect(norm(card.querySelector(`.${desk.boxNote}`))).toContain(HOT100_METHOD);
    expect(norm(card.querySelector(`.${desk.sourceText}`))).toBe(box.source.replace(/\s+/g, " ").trim());
  });

  it("phone: the same board, the same rows, his standing in the badge", () => {
    const board = [...container.querySelectorAll(`.${phone.board}`)].find((b) => norm(b.querySelector("h2")) === TITLE)!;
    expect(board, "no phone board").toBeTruthy();
    expect(norm(board.querySelector(`.${phone.boardMeta}`))).toBe(`Top ${HOT100_TOP} · African artists`);
    const rows = [...board.querySelectorAll(`.${phone.row}`)];
    expect(rows.length).toBe(hot100Top.length);
    rows.forEach((row, i) => {
      const s = hot100Top[i];
      expect(norm(row.querySelector(`.${phone.rank}`))).toBe(String(s.rank).padStart(2, "0"));
      expect(norm(row.querySelector(`.${phone.rowName}`))).toBe(s.name);
      expect(norm(row.querySelector(`.${phone.rowValue}`))).toBe(`${s.weeks} weeks`);
      expect(row.classList.contains(phone.rowHis), s.name).toBe(s.name === HIGHLIGHT);
    });
    const his = hot100Top.find((s) => s.name === HIGHLIGHT)!;
    expect(norm(board.querySelector(`.${phone.boardBadge}`))).toBe(his.rank === 1 ? "Leads" : `No. ${his.rank}`);
    expect(norm(board.querySelector(`.${phone.boardNote}`))).toContain(HOT100_METHOD);
    expect(africaBoards.find((b) => b.id === BOX_ID)?.title).toBe(TITLE);
  });

  it("the structured data lists the same five, in the same order, with the method", () => {
    const lists = [...container.querySelectorAll('script[type="application/ld+json"]')]
      .map((s) => JSON.parse(s.textContent!))
      .filter((j) => j["@type"] === "ItemList");
    const ld = lists.find((j) => j.name === TITLE);
    expect(ld, "no Hot 100 weeks ItemList on /records/africas-biggest").toBeTruthy();
    expect(ld.itemListElement.map((i: { name: string }) => i.name)).toEqual(hot100Top.map((s) => s.name));
    expect(ld.description).toBe(HOT100_METHOD);
  });
});

/* ── And nowhere else ─────────────────────────────────────────────────────── */

describe("the board is on /records/africas-biggest and nowhere else", () => {
  it("/afrobeats renders no trace of it, on either layout", () => {
    const container = parse(renderToStaticMarkup(<AfrobeatsPage />));
    expect(container.textContent).not.toContain(TITLE);
    expect(container.querySelector("#hot-100-weeks, #hot-100-weeks-phone")).toBeNull();
    const lds = [...container.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent ?? "");
    expect(lds.some((t) => /weeks on the Billboard Hot 100/i.test(t))).toBe(false);
    for (const f of [
      "app/afrobeats/page.tsx",
      "app/afrobeats/afrobeats.module.css",
      "app/components/MobileAfrobeatsHub.tsx",
      "app/components/mobileAfrobeatsHub.module.css",
    ])
      expect(read(f), f).not.toMatch(/hot100|hot-100-weeks/i);
  });

  it("only Africa's Biggest reads the data", () => {
    // Every file under app/ that imports the module. A second page importing it
    // is a second home for the board, which Paul ruled out on 27 Sep 2026.
    const importers = execSync('grep -rlE "from \\"[./]+(data/)?hot100Weeks\\"" app', { encoding: "utf8" })
      .trim()
      .split("\n")
      .sort();
    expect(importers).toEqual(["app/data/africasBiggest.ts", "app/records/africas-biggest/page.tsx"]);
  });
});

/* ── The date, and the alarm on it ────────────────────────────────────────── */

describe("the read is dated and gets re-read", () => {
  const days = (from: string, to: string) => Math.round((at(to) - at(from)) / DAY);

  it("dates the chart and the reading, in that order", () => {
    expect(HOT100_CHART_DATE).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(HOT100_READ_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(new Date(at(HOT100_CHART_DATE)).getUTCDay(), "Hot 100 issues are dated Saturdays").toBe(6);
    // Billboard publishes each Hot 100 on the Tuesday BEFORE the Saturday it is
    // dated, so a read can legitimately precede the printed date by up to four
    // days (30 Sep 2026 read the chart dated 3 Oct, out since Tuesday 29 Sep).
    // What cannot happen is a read before that Tuesday.
    expect(readableFrom(HOT100_CHART_DATE) <= HOT100_READ_ON, "read before the chart it counts was published").toBe(true);
  });

  it("the publication rule accepts the reads that happened and refuses one before release", () => {
    expect(readableFrom("2026-09-26") <= "2026-09-27").toBe(true);   // the first read
    expect(readableFrom("2026-10-03") <= "2026-09-30").toBe(true);   // Tuesday-release read
    expect(readableFrom("2026-10-03") <= "2026-09-28").toBe(false);  // the Monday before release
  });

  it("the weekly monitor issue reads HOT100_CHART_DATE from this file", () => {
    // Pulled out of scripts/check-stats.mjs rather than restated, so a renamed
    // constant or a moved file shows up here and not as a silent "read date
    // not found" row in an issue nobody opens.
    const monitor = read("scripts/check-stats.mjs");
    const entry = monitor.slice(monitor.indexOf('file: "app/data/hot100Weeks.ts"'));
    expect(entry.length, "check-stats.mjs has no HAND_READS entry for the Hot 100 weeks board").toBeLessThan(monitor.length);
    const re = /re: \/(.+?)\/,/.exec(entry)?.[1];
    expect(re, "the entry has no read-date pattern").toBeTruthy();
    expect(new RegExp(re!).exec(read("app/data/hot100Weeks.ts"))?.[1]).toBe(HOT100_CHART_DATE);
    const every = Number(/everyDays: (\d+)/.exec(entry)?.[1]);
    const slack = Number(/slack: (\d+)/.exec(entry)?.[1]);
    // The issue must ask before CI goes red, or the gentle ask is noise.
    expect(every + slack).toBeLessThan(STALE_AFTER_DAYS);
    // And it names the page the board is on.
    expect(monitor.slice(monitor.lastIndexOf("label:", monitor.indexOf('file: "app/data/hot100Weeks.ts"')))).toMatch(
      /^label: "[^"]*\/records\/africas-biggest/,
    );
  });

  /** A DEADLINE ALARM, exempt from the publishing path like the four others
   *  (tests/awardsPending, liveClaims, listeners and staleness): it is MEANT to
   *  go red on a date with nothing in the repo having changed, and must never
   *  be what stops the stats bot publishing. It fails in ci.yml, on every push
   *  and pull request, which is where a human reads it. Ten days: a new Hot 100
   *  is out every Tuesday, and the rows still on the chart are a week behind it. */
  it.skipIf(process.env.PUBLISH_GATE === "1")("the chart it counts is no more than ten days old", () => {
    const today = new Date().toISOString().slice(0, 10);
    expect(
      days(HOT100_CHART_DATE, today),
      `The Hot 100 weeks board on /records/africas-biggest counts the chart dated ${HOT100_CHART_DATE}, ${days(HOT100_CHART_DATE, today)} days ago. Re-read the latest Hot 100 into app/data/hot100Weeks.ts and move HOT100_CHART_DATE and HOT100_READ_ON.`,
    ).toBeLessThanOrEqual(STALE_AFTER_DAYS);
  });

  it("the alarm rings on day eleven and not before", () => {
    expect(days("2026-09-26", "2026-10-06")).toBeLessThanOrEqual(STALE_AFTER_DAYS);
    expect(days("2026-09-26", "2026-10-07")).toBeGreaterThan(STALE_AFTER_DAYS);
  });
});
