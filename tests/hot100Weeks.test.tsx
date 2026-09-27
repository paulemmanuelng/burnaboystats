import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats",
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

import AfrobeatsPage from "../app/afrobeats/page";
import desk from "../app/afrobeats/afrobeats.module.css";
import phone from "../app/components/mobileAfrobeatsHub.module.css";
import {
  hot100Artists,
  hot100Standings,
  hot100StandingsOf,
  hot100Top,
  HOT100_TOP,
  HOT100_CHART_DATE,
  HOT100_CHART_DATE_LONG,
  HOT100_READ_ON,
  HOT100_METHOD,
  weeksOf,
  type Hot100Artist,
} from "../app/data/hot100Weeks";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { allChartItems } from "../app/data/charts";
import { statBoxes, BURNA_HOT_100_ENTRIES } from "../app/data/africasBiggest";

/**
 * Most weeks on the Billboard Hot 100 — the board's top five, on /afrobeats.
 *
 * Every figure on it is a sum over Billboard's own rows, and the rows are the
 * only thing typed. So the tests are of three kinds: the rows are what
 * Billboard printed (they reconcile with the page's own summary line, with the
 * chart calendar, and with the board's separately swept US peaks); the figures
 * are computed from the rows and nothing else; and the read carries its date
 * and is re-read before that date gets old.
 */

const read = (p: string) => readFileSync(p, "utf8");

/** Rendered markup into a jsdom tree — the parse tests/lcpPriority.test.tsx uses. */
function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

/** The CI alarm's window, in days since the chart date. */
const STALE_AFTER_DAYS = 10;
const DAY = 86_400_000;
const at = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
const readArtists = hot100Artists.filter((a) => a.status === "read");
const artist = (slug: string) => hot100Artists.find((a) => a.slug === slug)!;

/* ── The rows ─────────────────────────────────────────────────────────────── */

describe("the rows are Billboard's rows", () => {
  it("covers Burna Boy and every board artist exactly once, under the board's own names", () => {
    const expected = ["burna-boy", ...afrobeatsArtists.map((a) => a.slug)].sort();
    expect(hot100Artists.map((a) => a.slug).sort()).toEqual(expected);
    for (const a of hot100Artists) {
      if (a.slug === "burna-boy") {
        expect(a.name).toBe("Burna Boy");
        continue;
      }
      expect(a.name, a.slug).toBe(afrobeatsArtists.find((b) => b.slug === a.slug)!.name);
    }
  });

  /** Word-boundary and case-insensitive: Billboard spells him "WizKid" in two
   *  of his credits, and a bare substring would let "Tyla" match a "Tyla Yaweh". */
  const credits = (credit: string, name: string) =>
    new RegExp(`(^|[^a-z0-9])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`, "i").test(credit);

  it("every row's credit names the artist it is filed under — lead or featured, never a writing credit", () => {
    const wrong = readArtists.flatMap((a) =>
      a.songs.filter((s) => !credits(s.credit, a.name)).map((s) => `${a.name}: "${s.title}" credited to ${s.credit}`),
    );
    expect(wrong).toEqual([]);
  });

  it("the credit check rejects the row it exists to keep out", () => {
    // Billboard's own credit line for "Lift Me Up" — the song Tems co-wrote and
    // is not credited on, which is why it is not on her Hot 100 page.
    expect(credits("Rihanna", "Tems")).toBe(false);
    // And it is not fooled by capitalisation it has to accept.
    expect(credits("Drake Featuring WizKid & Kyla", "Wizkid")).toBe(true);
  });

  it("reconciles with the summary line printed on each artist's own page", () => {
    for (const a of readArtists) {
      if (!a.summary) continue;
      expect(a.songs.length, `${a.name}: rows vs "${a.summary.songs} songs"`).toBe(a.summary.songs);
      if (a.summary.no1s !== undefined)
        expect(a.songs.filter((s) => s.peak === 1).length, `${a.name}: No. 1s`).toBe(a.summary.no1s);
      if (a.summary.top10s !== undefined)
        expect(a.songs.filter((s) => s.peak <= 10).length, `${a.name}: Top 10s`).toBe(a.summary.top10s);
    }
    // Every artist with rows carries the summary it was checked against.
    expect(readArtists.filter((a) => a.songs.length && !a.summary).map((a) => a.name)).toEqual([]);
  });

  it("sits on the chart calendar: Saturdays, in order, and no more weeks than issues", () => {
    for (const a of readArtists)
      for (const s of a.songs) {
        const id = `${a.name}: "${s.title}"`;
        for (const d of [s.debut, s.peakDate]) {
          expect(d, id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
          expect(new Date(at(d)).getUTCDay(), `${id} — ${d} is not a Saturday`).toBe(6);
        }
        expect(s.debut <= s.peakDate && s.peakDate <= HOT100_CHART_DATE, `${id} dates out of order`).toBe(true);
        expect(s.peak, id).toBeGreaterThanOrEqual(1);
        expect(s.peak, id).toBeLessThanOrEqual(100);
        expect(s.weeks, id).toBeGreaterThanOrEqual(1);
        const issues = (at(HOT100_CHART_DATE) - at(s.debut)) / (7 * DAY) + 1;
        expect(s.weeks, `${id} has more weeks than issues since its debut`).toBeLessThanOrEqual(issues);
        // A song on this week's chart has, at the least, this week.
        if (s.stillCharting) expect(s.weeks, id).toBeGreaterThanOrEqual(1);
      }
  });

  it("a song credited to two board artists is the same row on both pages", () => {
    const byTitle = new Map<string, string[]>();
    for (const a of readArtists)
      for (const s of a.songs) byTitle.set(s.title, [...(byTitle.get(s.title) ?? []), JSON.stringify(s)]);
    const shared = [...byTitle].filter(([, rows]) => rows.length > 1);
    expect(shared.map(([t]) => t), "Essence credits Wizkid and Tems").toContain("Essence");
    for (const [title, rows] of shared) expect(new Set(rows).size, title).toBe(1);
  });

  it("an unreadable page is unranked, never zero", () => {
    const unreadable = hot100Artists.filter((a) => a.status === "unreadable");
    expect(unreadable.length).toBeGreaterThan(0);
    for (const a of unreadable) {
      expect(a.songs, a.name).toEqual([]);
      expect(hot100Standings.map((s) => s.slug), a.name).not.toContain(a.slug);
    }
  });
});

/* ── The rows against the site's own, separately read, US figures ─────────── */

describe("the rows agree with what the site already publishes", () => {
  const key = (t: string) => t.replace(/\(.*?\)/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

  it("each best peak matches the Hot 100 peak board on /records/africas-biggest", () => {
    const board = statBoxes.find((b) => b.id === "billboard-hot-100-peak")!.entries!;
    const checked = board.filter((e) => hot100Standings.some((s) => s.name === e.name));
    expect(checked.length, "no overlap — checking nothing").toBeGreaterThanOrEqual(5);
    for (const e of checked)
      expect(`No. ${hot100Standings.find((s) => s.name === e.name)!.bestPeak}`, e.name).toBe(e.value);
  });

  it("each song count matches the Hot 100 entries board, and Burna Boy's matches his constant", () => {
    expect(artist("burna-boy").songs.length).toBe(BURNA_HOT_100_ENTRIES);
    const board = statBoxes.find((b) => b.id === "most-hot-100-entries")!.entries!;
    let checked = 0;
    for (const e of board)
      for (const name of e.name.split(" & ")) {
        const a = readArtists.find((x) => x.name === name);
        if (!a) continue;
        checked++;
        expect(a.songs.length, name).toBe(Number(e.value));
      }
    expect(checked, "no overlap — checking nothing").toBeGreaterThanOrEqual(4);
  });

  it("each row's peak matches the US peak the site's chart sweeps recorded for that title", () => {
    // Matched on title WITHIN the artist's own chart record, never across
    // artists — a title alone is not an identity.
    const usPeaks = (slug: string) =>
      new Map(
        (slug === "burna-boy"
          ? allChartItems
          : afrobeatsArtists.find((a) => a.slug === slug)!.charts
        ).flatMap((r) => {
          const us = r.entries.find((e) => e.c === "US");
          return us ? [[key(r.title), us.peak] as const] : [];
        }),
      );
    let checked = 0;
    for (const a of readArtists) {
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

/* ── The figures are computed ─────────────────────────────────────────────── */

describe("totals, counts and ranks come from the rows", () => {
  it("every standing is its rows, summed", () => {
    for (const s of hot100Standings) {
      const a = artist(s.slug);
      expect(s.weeks, s.name).toBe(a.songs.map((x) => x.weeks).reduce((m, n) => m + n, 0));
      expect(s.songs, s.name).toBe(a.songs.length);
      expect(s.bestPeak, s.name).toBe(Math.min(...a.songs.map((x) => x.peak)));
      expect(s.stillCharting, s.name).toBe(a.songs.filter((x) => x.stillCharting).length);
    }
  });

  const withWeeks = (slug: string, title: string, weeks: number): Hot100Artist[] =>
    hot100Artists.map((a) =>
      a.slug !== slug ? a : { ...a, songs: a.songs.map((s) => (s.title === title ? { ...s, weeks } : s)) },
    );

  it("move a row and the board moves with it", () => {
    const burna = weeksOf(artist("burna-boy"));
    const calmDown = artist("rema").songs.find((s) => s.title === "Calm Down")!.weeks;
    const rema = weeksOf(artist("rema"));
    // Give Rema enough weeks to pass him, and the order changes with no other edit.
    const moved = hot100StandingsOf(withWeeks("rema", "Calm Down", calmDown + (burna - rema) + 1));
    const r = moved.find((s) => s.slug === "rema")!;
    const b = moved.find((s) => s.slug === "burna-boy")!;
    expect(r.weeks).toBe(burna + 1);
    expect(r.rank).toBeLessThan(b.rank);
  });

  it("ties share a rank and the next rank skips", () => {
    const burna = weeksOf(artist("burna-boy"));
    const calmDown = artist("rema").songs.find((s) => s.title === "Calm Down")!.weeks;
    const rema = weeksOf(artist("rema"));
    const tied = hot100StandingsOf(withWeeks("rema", "Calm Down", calmDown + (burna - rema)));
    const b = tied.find((s) => s.slug === "burna-boy")!;
    const r = tied.find((s) => s.slug === "rema")!;
    expect(r.rank).toBe(b.rank);
    const next = tied.find((s) => s.weeks < burna)!;
    expect(next.rank).toBe(b.rank + 2);
  });

  /**
   * A typed total is the one way these figures could stop following the rows.
   * The detector reads the data file and both layouts; its negative control is
   * the literal line the verified read itself carried for Tems.
   */
  const typedTotal = (src: string) =>
    /\btotal(?:Weeks)?"?\s*:\s*\d/.test(src) ||
    hot100Top.some((s) => new RegExp(`(^|[^\\w.#-])${s.weeks}([^\\w.%]|$)`).test(src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "")));

  it("no total is typed — in the data or in either layout", () => {
    // The data file: no total field at all.
    const data = read("app/data/hot100Weeks.ts").replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "");
    expect(/\btotal(?:Weeks)?"?\s*:\s*\d/.test(data), "hot100Weeks.ts carries a typed total").toBe(false);
    for (const f of ["app/afrobeats/page.tsx", "app/components/MobileAfrobeatsHub.tsx"])
      expect(typedTotal(read(f)), `${f} types a leaderboard figure`).toBe(false);
  });

  it("the typed-total detector fires on the line the read shipped", () => {
    const SHIPPED_IN_THE_READ = `"totalWeeks": 158,`;
    expect(typedTotal(SHIPPED_IN_THE_READ)).toBe(true);
    // And on the figure dropped straight into JSX.
    expect(typedTotal(`<span className={styles.hot100Weeks}>${hot100Top[0].weeks} weeks</span>`)).toBe(true);
  });
});

/* ── The published board ──────────────────────────────────────────────────── */

describe("the top five", () => {
  it("is ordered by weeks, most first", () => {
    expect(hot100Top.length).toBeGreaterThanOrEqual(HOT100_TOP);
    for (let i = 1; i < hot100Top.length; i++)
      expect(hot100Top[i].weeks).toBeLessThanOrEqual(hot100Top[i - 1].weeks);
    expect(hot100Top.every((s) => s.rank <= HOT100_TOP)).toBe(true);
    // Nobody left off who ties the last place shown.
    const last = hot100Top[hot100Top.length - 1].weeks;
    expect(hot100Standings.filter((s) => s.weeks === last).every((s) => hot100Top.includes(s))).toBe(true);
  });

  it("reads Tems, Wizkid, Burna Boy, Rema, Tyla on the chart dated 26 September 2026", () => {
    // The order the read reported, pinned so a change to it is a decision made
    // out loud. Burna Boy is one week clear of Rema, and "Dai Dai" is still on
    // the chart: when a re-read moves the order, update this line with it.
    expect(hot100Top.map((s) => s.name)).toEqual(["Tems", "Wizkid", "Burna Boy", "Rema", "Tyla"]);
  });
});

/* ── Both layouts ─────────────────────────────────────────────────────────── */

describe("/afrobeats renders the leaderboard on both layouts", () => {
  const root = parse(renderToStaticMarkup(<AfrobeatsPage />));
  const layouts = [
    ["desktop", desk, "hot-100-weeks"],
    ["phone", phone, "hot-100-weeks-phone"],
  ] as const;

  it.each(layouts)("%s: an h2, then the five rows in order, every figure the data's", (_l, css, id) => {
    const h2 = root.querySelector(`h2#${id}`);
    expect(h2?.textContent?.trim()).toBe("Most weeks on the Billboard Hot 100");
    const rows = [...root.querySelectorAll(`a.${css.hot100Row}`)];
    expect(rows.length).toBe(hot100Top.length);
    rows.forEach((row, i) => {
      const s = hot100Top[i];
      const text = (cls: string) => row.querySelector(`.${cls}`)!.textContent!.replace(/\s+/g, " ").trim();
      expect(text(css.hot100Rank)).toBe(String(s.rank));
      expect(text(css.hot100Name)).toBe(s.name);
      expect(text(css.hot100Weeks)).toBe(`${s.weeks} weeks`);
      expect(text(css.hot100Sub)).toBe(
        `${s.songs} ${s.songs === 1 ? "song" : "songs"} · best No. ${s.bestPeak}`,
      );
      expect(row.getAttribute("href")).toBe(s.slug === "burna-boy" ? "/records/charts" : `/afrobeats/${s.slug}/charts`);
      // His emphasis on his row, and on no one else's.
      expect(row.classList.contains(css.hot100His), s.name).toBe(s.slug === "burna-boy");
    });
  });

  it.each(layouts)("%s: the method line carries the chart date, and the source is Billboard", (_l, css) => {
    expect([...root.querySelectorAll(`.${css.hot100Method}`)].map((p) => p.textContent)).toContain(HOT100_METHOD);
    expect(HOT100_METHOD).toContain(`As of the chart dated ${HOT100_CHART_DATE_LONG}.`);
    const source = root.querySelector(`.${css.hot100Source}`)!;
    expect(source.textContent).toContain("read ");
    expect(source.querySelector("a")!.textContent).toBe("Billboard");
    expect(source.querySelector("a")!.getAttribute("href")).toMatch(/^https:\/\/www\.billboard\.com\//);
  });

  it("each board artist's link goes to a chart page the board actually builds", () => {
    for (const s of hot100Top.filter((x) => x.slug !== "burna-boy")) {
      const a = afrobeatsArtists.find((b) => b.slug === s.slug)!;
      expect(a.charts.length, `${s.name} has no /charts page to link`).toBeGreaterThan(0);
    }
  });

  it("the structured data lists the same five, in the same order", () => {
    const lists = [...root.querySelectorAll('script[type="application/ld+json"]')]
      .map((s) => JSON.parse(s.textContent!))
      .filter((j) => j["@type"] === "ItemList");
    const ld = lists.find((j) => /Billboard Hot 100/.test(j.name));
    expect(ld, "no Hot 100 ItemList on /afrobeats").toBeTruthy();
    expect(ld.itemListElement.map((i: { name: string }) => i.name)).toEqual(hot100Top.map((s) => s.name));
    expect(ld.description).toBe(HOT100_METHOD);
  });
});

/* ── The date, and the alarm on it ────────────────────────────────────────── */

describe("the read is dated and gets re-read", () => {
  const days = (from: string, to: string) => Math.round((at(to) - at(from)) / DAY);

  it("dates the chart and the reading, in that order", () => {
    expect(HOT100_CHART_DATE).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(HOT100_READ_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(new Date(at(HOT100_CHART_DATE)).getUTCDay(), "Hot 100 issues are dated Saturdays").toBe(6);
    expect(HOT100_READ_ON >= HOT100_CHART_DATE, "read before the chart it counts").toBe(true);
  });

  it("the weekly monitor issue reads HOT100_CHART_DATE from this file", () => {
    // Pulled out of scripts/check-stats.mjs rather than restated, so a renamed
    // constant or a moved file shows up here and not as a silent "read date
    // not found" row in an issue nobody opens.
    const monitor = read("scripts/check-stats.mjs");
    const entry = monitor.slice(monitor.indexOf('file: "app/data/hot100Weeks.ts"'));
    expect(entry.length, "check-stats.mjs has no HAND_READS entry for the Hot 100 leaderboard").toBeLessThan(monitor.length);
    const re = /re: \/(.+?)\/,/.exec(entry)?.[1];
    expect(re, "the entry has no read-date pattern").toBeTruthy();
    expect(new RegExp(re!).exec(read("app/data/hot100Weeks.ts"))?.[1]).toBe(HOT100_CHART_DATE);
    const every = Number(/everyDays: (\d+)/.exec(entry)?.[1]);
    const slack = Number(/slack: (\d+)/.exec(entry)?.[1]);
    // The issue must ask before CI goes red, or the gentle ask is noise.
    expect(every + slack).toBeLessThan(STALE_AFTER_DAYS);
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
      `The Hot 100 leaderboard on /afrobeats counts the chart dated ${HOT100_CHART_DATE}, ${days(HOT100_CHART_DATE, today)} days ago. Re-read each artist's source page in app/data/hot100Weeks.ts and move HOT100_CHART_DATE and HOT100_READ_ON.`,
    ).toBeLessThanOrEqual(STALE_AFTER_DAYS);
  });

  it("the alarm rings on day eleven and not before", () => {
    expect(days("2026-09-26", "2026-10-06")).toBeLessThanOrEqual(STALE_AFTER_DAYS);
    expect(days("2026-09-26", "2026-10-07")).toBeGreaterThan(STALE_AFTER_DAYS);
  });
});
