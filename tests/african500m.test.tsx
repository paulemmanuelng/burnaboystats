import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, mkdtempSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
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

import AfricasBiggestPage, { pageFaqs } from "../app/records/africas-biggest/page";
import desk from "../app/records/africas-biggest/africas-biggest.module.css";
import phone from "../app/components/mobileAfricasBiggest.module.css";
import {
  roster500,
  snapshot500,
  standings500,
  ranked500,
  listed500,
  LIST_FROM_500M,
  rank500,
  withReadings500,
  readingsUsed500,
  BOARD_AS_OF_500M,
  BOARD_AS_OF_500M_LONG,
  songLine500,
  streams500,
  THRESHOLD_500M,
  AS_OF_500M,
  AS_OF_500M_LONG,
  RULE_500M,
  FAQ_500M,
  SOURCE_500M,
  NOTE_500M,
  source500,
  olderPages500,
  closest500,
  closestOf500,
  closestLineOf500,
  nearLine500,
  type Roster500,
  type Snapshot500,
  songTitle500,
} from "../app/data/african500m";
import { statBoxes, rankOf, HIGHLIGHT } from "../app/data/africasBiggest";
import { africaBoards } from "../app/lib/africaBoards";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { hot100Artists, hot100NotCounted } from "../app/data/hot100Weeks";
import { BURNA_ROLES, BOARD_ROLES } from "../app/data/songRoles";
import { extractKworbSongsTable, gate500mReading, check500mFilings, apply500mReadings, evaluateMetric, formatStat } from "../scripts/stats-lib.mjs";
import { DAI_DAI_SPOTIFY_STREAMS } from "../app/data/daiDai";
import { updates } from "../app/data/updates";
import fixtureSnapshotJson from "./fixtures/african500m.snapshot-2026-10-06.json";

/**
 * "Most 500M-stream songs on Spotify" (Paul, 7 Oct 2026: "build a leaderboard
 * for the 500m, tie others, put flags").
 *
 * The stats bot rewrites the snapshot behind this board four times a day and
 * runs this suite before it commits, so every check here has to hold for ANY
 * sane kworb reading — the day "Dai Dai" crosses included. Nothing below pins
 * a count; it re-derives each one from the snapshot's rows and holds the board
 * to it.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const norm = (el: Element | null) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const BOX = "most-500m-stream-songs";
const box = statBoxes.find((b) => b.id === BOX)!;
const BURNA = roster500.artists.find((a) => a.name === HIGHLIGHT)!;

/** The board's data on 8 Oct 2026, frozen: kworb's snapshot as the bot last
 *  wrote it before that day (pages stamped up to 6 Oct), and the roster's
 *  readings up to 8 Oct. The live snapshot moves four times a day; this does
 *  not, so the day's board can be checked exactly. */
const FIXTURE_SNAPSHOT: Snapshot500 = fixtureSnapshotJson;
const FIXTURE_ROSTER: Roster500 = { ...roster500, readings: (roster500.readings ?? []).filter((r) => r.read <= "2026-10-08") };

/** The roster's dated Spotify readings for one artist. */
const readingsOf = (spotifyId: string) => (roster500.readings ?? []).filter((r) => r.artist === spotifyId);

/** The qualifying songs of one roster artist: the snapshot's, each at the
 *  higher of kworb's count and a dated Spotify reading of it. */
const pastLine = (spotifyId: string) =>
  withReadings500(snapshot500.pages[spotifyId]?.songs ?? [], readingsOf(spotifyId)).filter((s) => s.streams >= THRESHOLD_500M);

/** "🇳🇬" for "NG": the two letters as regional indicators. */
const flagFor = (cc: string) => String.fromCodePoint(...[...cc.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));

describe("the roster: who the board reads", () => {
  it("has one entry per Spotify id, each with a nationality and the flag of its country", () => {
    const ids = roster500.artists.map((a) => a.spotifyId);
    expect(new Set(ids).size).toBe(ids.length);
    for (const a of roster500.artists) {
      expect(a.spotifyId, a.name).toMatch(/^[A-Za-z0-9]{22}$/);
      expect(a.country, a.name).toMatch(/^[A-Z]{2}$/);
      expect(a.flag, a.name).toBe(flagFor(a.country));
      expect(a.nationality.length, a.name).toBeGreaterThan(3);
    }
  });

  it("files every role as lead or featured", () => {
    for (const a of roster500.artists)
      for (const [title, role] of Object.entries(a.roles ?? {})) expect(["lead", "featured"], `${a.name}: ${title}`).toContain(role);
  });

  it("keeps the ruled-out and contested names off it", () => {
    const names = new Set(roster500.artists.map((a) => a.name));
    const ids = new Set(roster500.artists.map((a) => a.spotifyId));
    expect(roster500.excluded.length).toBeGreaterThan(0);
    for (const x of roster500.excluded) {
      expect(names.has(x.name), x.name).toBe(false);
      expect(ids.has(x.spotifyId), x.name).toBe(false);
    }
    // Paul's 17 Sep 2026 ruling, by name.
    expect(roster500.excluded.map((x) => x.name)).toEqual(expect.arrayContaining(["Akon", "GIMS", "Aya Nakamura"]));
  });

  it("files every song the way the site's Rule C roles file it, wherever both hold the song", () => {
    // One rule across the site (data/songRoles.ts, Paul 7 Oct 2026: "exactly as
    // ChartMasters reads it"): the 500M roster files by kworb title, the roles
    // by release title with the Spotify title beside it.
    let compared = 0;
    for (const a of roster500.artists) {
      const slug = a.name === HIGHLIGHT ? "burna-boy" : afrobeatsArtists.find((x) => x.name === a.name)?.slug;
      const table = slug === "burna-boy" ? BURNA_ROLES : slug ? BOARD_ROLES[slug] : undefined;
      for (const [title, role] of Object.entries(a.roles ?? {})) {
        for (const [site, r] of Object.entries(table ?? {})) {
          if (r.spotifyTitle !== title && site !== title) continue;
          compared += 1;
          expect(role, `${a.name}: “${title}” is ${r.role} on the site (“${site}”)`).toBe(r.role);
        }
      }
    }
    expect(compared, "the premise: the two lists share most songs").toBeGreaterThanOrEqual(15);
  });

  it("makes the nationality calls this page's Hot 100 boards already publish", () => {
    // One page, one rule: an act the Hot 100 boards leave out is not counted
    // here, and an act both boards count carries the same country on both.
    const out = new Set(hot100NotCounted.map((x) => x.name));
    for (const a of roster500.artists) {
      expect(out.has(a.name), `${a.name} is on hot100NotCounted`).toBe(false);
      const there = hot100Artists.find((h) => h.name === a.name);
      if (there) expect(a.country, a.name).toBe(there.country);
    }
    // The premise: the contested three are on both pages' lists.
    for (const name of ["Moliy", "Amaarae", "Libianca"]) expect(hot100Artists.some((h) => h.name === name), name).toBe(true);
    for (const name of ["French Montana", "Sade", "Troye Sivan"]) {
      expect(out.has(name), name).toBe(true);
      expect(roster500.excluded.some((x) => x.name === name), name).toBe(true);
    }
  });

  it("an artist read off another act's page names its own tracks and files every one", () => {
    for (const a of roster500.artists.filter((x) => x.page)) {
      expect(a.tracks?.length, a.name).toBeGreaterThan(0);
      for (const s of pastLine(a.spotifyId)) expect(a.roles?.[s.title], `${a.name}: ${s.title}`).toBeDefined();
    }
  });
});

describe("the snapshot: what kworb shows", () => {
  it("holds a dated reading for every roster artist and for nobody else", () => {
    expect(Object.keys(snapshot500.pages).sort()).toEqual(roster500.artists.map((a) => a.spotifyId).sort());
    for (const a of roster500.artists) expect(snapshot500.pages[a.spotifyId].updated, a.name).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("keeps only songs at or past the watch floor, as whole positive counts", () => {
    for (const [id, r] of Object.entries(snapshot500.pages))
      for (const s of r.songs) {
        expect(Number.isInteger(s.streams) && s.streams >= roster500.watchFloor, `${id}: ${s.title}`).toBe(true);
        expect(s.id, s.title).toMatch(/^[A-Za-z0-9]{22}$/);
      }
  });
});

describe("the counts are the snapshot's", () => {
  it("every roster artist with a song past the line is counted, with exactly those songs", () => {
    const expected = roster500.artists.filter((a) => pastLine(a.spotifyId).length > 0).map((a) => a.name).sort();
    expect(ranked500.map((r) => r.name).sort()).toEqual(expected);
    for (const r of ranked500) {
      const songs = pastLine(r.spotifyId);
      expect(r.count, r.name).toBe(songs.length);
      expect(r.songs.map((s) => s.id).sort(), r.name).toEqual(songs.map((s) => s.id).sort());
      expect(r.total, r.name).toBe(songs.reduce((n, s) => n + s.streams, 0));
    }
  });

  it("prints each count, flag and song on the board's row", () => {
    expect(box.entries!.map((e) => e.name)).toEqual(standings500.map((r) => r.name));
    box.entries!.forEach((e, i) => {
      const r = standings500[i];
      expect(e.value, r.name).toBe(String(r.count));
      expect(e.sub!.startsWith(`${r.flag} `), `${r.name} opens on its flag`).toBe(true);
      for (const s of r.songs) expect(e.sub, `${r.name}: ${s.title}`).toContain(songLine500(s));
      expect(e.sub!.split(" · ").length, r.name).toBe(r.count);
    });
  });

  it("marks a featured credit, and only a featured credit", () => {
    for (const r of standings500)
      for (const s of r.songs) expect(songLine500(s).startsWith("featured on "), `${r.name}: ${s.title}`).toBe(s.role === "featured");
  });

  it("files a song by the roster where it is filed, else by kworb's mark", () => {
    for (const r of standings500) {
      const a = roster500.artists.find((x) => x.spotifyId === r.spotifyId)!;
      for (const s of r.songs) {
        const filed = a.roles?.[s.title];
        const star = snapshot500.pages[r.spotifyId].songs.find((x) => x.id === s.id)?.kworbStar ?? false;
        expect(s.role, `${r.name}: ${s.title}`).toBe(filed ?? (a.page ? "featured" : star ? "featured" : "lead"));
      }
    }
  });

  it("a song's streams print at the precision the row needs, and never below the line", () => {
    expect(streams500(1_966_656_829)).toBe("1.97B");
    expect(streams500(757_591_413)).toBe("758M");
    expect(streams500(500_000_000)).toBe("500M");
  });
});

describe("ties share a rank, and the next rank skips", () => {
  it("ranks the board by count, the bigger total first inside a tie, then by name", () => {
    for (let i = 1; i < standings500.length; i++) {
      const [a, b] = [standings500[i - 1], standings500[i]];
      const inOrder = a.count > b.count || (a.count === b.count && (a.total > b.total || (a.total === b.total && a.name <= b.name)));
      expect(inOrder, `${a.name} above ${b.name}`).toBe(true);
    }
  });

  it("gives every artist 1 + the number with more songs, on the data and on the board", () => {
    standings500.forEach((r) => expect(r.rank, r.name).toBe(1 + standings500.filter((o) => o.count > r.count).length));
    box.entries!.forEach((e, i) => {
      expect(rankOf(box.entries!, i), e.name).toBe(standings500[i].rank);
      expect(Boolean(e.tie), e.name).toBe(i > 0 && standings500[i - 1].count === standings500[i].count);
    });
  });

  it("works the rule on a reading the board has not seen: six tied at two, the next at seven", () => {
    const roster: Roster500 = {
      threshold: 500,
      watchFloor: 400,
      excluded: [],
      artists: ["A", "B", "C", "D", "E", "F", "G"].map((n) => ({
        name: n,
        spotifyId: n,
        country: "NG",
        nationality: "Nigerian",
        flag: "🇳🇬",
      })),
    };
    const song = (id: string, streams: number, kworbStar = false) => ({ id, title: id, streams, kworbStar });
    const snap: Snapshot500 = {
      pages: Object.fromEntries(
        roster.artists.map((a, i) => [
          a.spotifyId,
          {
            updated: "2026-10-06",
            songs: a.name === "G" ? [song("g1", 900), song("g2", 450)] : [song(`${a.name}1`, 600 + i), song(`${a.name}2`, 550, true)],
          },
        ]),
      ),
    };
    const ranked = rank500(roster, snap);
    expect(ranked.map((r) => r.rank)).toEqual([1, 1, 1, 1, 1, 1, 7]);
    // Inside the tie the bigger total leads: F has 605 + 550.
    expect(ranked.map((r) => r.name)).toEqual(["F", "E", "D", "C", "B", "A", "G"]);
    // kworb's "*" files the second song featured; no "*" files it lead.
    expect(ranked[0].songs.map((s) => s.role)).toEqual(["lead", "featured"]);
    // G's 450 is under the line: one song, not two.
    expect(ranked[6].count).toBe(1);
  });
});

describe("Burna Boy's songs", () => {
  const his = standings500.find((r) => r.name === HIGHLIGHT)!;

  it("counts Location as a feature and Last Last as his own", () => {
    const byTitle = new Map(his.songs.map((s) => [s.title, s.role]));
    expect(byTitle.get("Location (feat. Burna Boy)")).toBe("featured");
    expect(byTitle.get("Last Last")).toBe("lead");
  });

  it("counts Dai Dai, as his own, from the first reading that has it past the line — kworb's or Spotify's", () => {
    const daiDai = pastLine(BURNA.spotifyId).find((s) => s.title === "Dai Dai");
    const counted = his.songs.find((s) => s.title === "Dai Dai");
    if (daiDai) expect(counted?.role).toBe("lead");
    else expect(counted).toBeUndefined();
    // Past the line on Spotify's own count of 8 Oct 2026 (501,627,594), so
    // counted on every reading from here: a play count only climbs.
    expect(counted).toBeDefined();
    expect(counted!.streams).toBeGreaterThanOrEqual(501_627_594);
  });

  it("puts him alone at No. 1 the day kworb shows Dai Dai past 500M", () => {
    // Today's reading, with Dai Dai one play past the line — which is all the
    // bot's next run has to bring.
    const crossed: Snapshot500 = JSON.parse(JSON.stringify(snapshot500));
    const page = crossed.pages[BURNA.spotifyId];
    const dd = page.songs.find((s) => s.title === "Dai Dai");
    if (dd) dd.streams = Math.max(dd.streams, THRESHOLD_500M + 1);
    else page.songs.push({ id: "0kosUz0jePvjiz4ctmR6wL", title: "Dai Dai", streams: THRESHOLD_500M + 1, kworbStar: true });
    const ranked = rank500(roster500, crossed);
    const him = ranked.find((r) => r.name === HIGHLIGHT)!;
    expect(him.songs.find((s) => s.title === "Dai Dai")?.role, "kworb marks it '*'; it is his own release").toBe("lead");
    expect(him.count).toBe(his.count + (his.songs.some((s) => s.title === "Dai Dai") ? 0 : 1));
    // The premise holds while no one else has three.
    if (ranked.filter((r) => r.count >= him.count).length === 1) {
      expect(ranked[0].name).toBe(HIGHLIGHT);
      expect(ranked[1].rank).toBe(2);
    }
  });
});

describe("flags and links", () => {
  it("every row carries its artist's flag", () => {
    for (const r of standings500) expect(r.flag, r.name).toBe(flagFor(r.country));
  });

  it("links the artists with an Afrobeats Board page, and only those", () => {
    const slugs = new Map(afrobeatsArtists.map((a) => [a.name, a.slug]));
    for (const [i, r] of standings500.entries()) {
      const slug = slugs.get(r.name);
      expect(r.href, r.name).toBe(slug ? `/afrobeats/${slug}` : undefined);
      expect(box.entries![i].href, r.name).toBe(r.href);
    }
    expect(standings500.find((r) => r.name === HIGHLIGHT)?.href).toBeUndefined();
    expect(standings500.some((r) => r.href), "the premise: some board artist is on it").toBe(true);
  });
});

describe("the words are derived", () => {
  it("states the counting rule and the as-of date where both layouts show them", () => {
    expect(RULE_500M).toBe(
      "Every Spotify song with 500M+ plays the artist is credited on, lead or featured; versions count separately, as Spotify lists them. The board lists artists with two or more such songs.",
    );
    expect(LIST_FROM_500M).toBe(roster500.listFrom);
    expect(box.note!.startsWith(RULE_500M)).toBe(true);
    // The card's date is the newest thing it counts: kworb's newest page, or a
    // Spotify reading in use that is newer. The source dates each.
    expect(box.meta).toBe(`Spotify · African artists · as of ${BOARD_AS_OF_500M_LONG}`);
    expect(AS_OF_500M).toBe(standings500.map((r) => r.updated).sort().at(-1));
    const used = readingsUsed500(standings500).map((u) => u.song.reading.read);
    expect(BOARD_AS_OF_500M).toBe([AS_OF_500M, ...used].sort().at(-1));
  });

  it("names every page older than the as-of date, with its own date, in the source", () => {
    const day = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });
    for (const r of standings500.filter((x) => x.updated < AS_OF_500M)) {
      expect(box.source, r.name).toContain(r.name);
      expect(box.source, r.name).toContain(day(r.updated));
    }
  });

  it("groups the older pages by date, and gives no reason for a date", () => {
    // Review of 7 Oct 2026: the day kworb has regenerated Burna Boy's page but
    // not yet the others, the shipped line called Rema, Tems and Wizkid
    // "less-streamed artists" and printed "6 October" seven times.
    // His page a day past the newest stamp in the snapshot, whatever that is.
    const straddle: Snapshot500 = JSON.parse(JSON.stringify(snapshot500));
    const newest = Object.values(straddle.pages).map((r) => r.updated).sort().at(-1)!;
    const dayAfter = new Date(Date.parse(`${newest}T12:00:00Z`) + 86_400_000).toISOString().slice(0, 10);
    straddle.pages[BURNA.spotifyId].updated = dayAfter;
    const rows = rank500(roster500, straddle);
    const src = source500(rows);
    const groups = olderPages500(rows);
    const long = (iso: string, year = true) =>
      new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", ...(year ? { year: "numeric" as const } : {}), timeZone: "UTC" });
    const times = (text: string, day: string) => (text.match(new RegExp(`(?<!\\d)${day}(?!\\d)`, "g")) ?? []).length;
    // The line as shipped (negative control: the review's reading of it).
    expect(src).not.toContain("Pages for less-streamed artists are regenerated less often");
    expect(src).not.toContain("less-streamed");
    expect(src).toContain(`as of ${long(dayAfter)}.`);
    for (const g of groups) {
      expect(times(src, long(g.date, false)), `${g.date} printed once`).toBe(1);
      for (const n of g.names) expect(src, n).toContain(n);
    }
    // Every page but his is older, each named once in its date's group.
    expect(groups.flatMap((g) => g.names).sort()).toEqual(rows.filter((r) => r.name !== HIGHLIGHT).map((r) => r.name).sort());
    // On one date only: no older-pages clause at all.
    const sameDay: Snapshot500 = JSON.parse(JSON.stringify(snapshot500));
    for (const r of Object.values(sameDay.pages)) r.updated = "2026-10-06";
    expect(source500(rank500(roster500, sameDay))).not.toContain("not every page");
    // The board's own line is the function's.
    expect(SOURCE_500M).toBe(source500(standings500));
  });

  it("names French Montana, and every act it names as left out is on the roster's excluded list", () => {
    // Review of 7 Oct 2026: "Unforgettable" (3.1B) is the omission a reader
    // will ask about, and the Hot 100 boards' source already names him.
    const named = ["Akon", "French Montana", "GIMS", "Aya Nakamura"];
    for (const n of named) {
      expect(box.source, n).toContain(n);
      expect(roster500.excluded.some((x) => x.name === n), n).toBe(true);
    }
  });

  it("names the artists one song short of the board, each with their nearest song, a feature as a feature", () => {
    // Review of 7 Oct 2026: the note read "Black Coffee's “Get It Together”",
    // which is Drake's song. Since 8 Oct the board lists two songs or more, so
    // the artists "closest to joining" are the ones with one, each with the
    // nearest of their songs still under the line.
    expect(nearLine500({ name: "Black Coffee", title: "Get It Together", streams: 448_513_080, role: "featured" })).toBe(
      "Black Coffee (featured on “Get It Together”, 448.5M)",
    );
    expect(nearLine500({ name: "Oxlade", title: "KU LO SA - A COLORS SHOW", streams: 452_871_421, role: "lead" })).toBe(
      "Oxlade (“KU LO SA - A COLORS SHOW”, 452.8M)",
    );
    for (const near of [closest500]) {
      for (const n of near) {
        const r = ranked500.find((x) => x.name === n.name);
        expect(r?.count ?? 0, `${n.name} is one song short`).toBe(LIST_FROM_500M - 1);
        expect(standings500.some((x) => x.name === n.name), `${n.name} is not listed`).toBe(false);
        expect(n.streams, n.name).toBeLessThan(THRESHOLD_500M);
        // The nearest of theirs: no other song of theirs under the line is higher.
        const a = roster500.artists.find((x) => x.name === n.name)!;
        const under = withReadings500(snapshot500.pages[a.spotifyId]?.songs ?? [], readingsOf(a.spotifyId)).filter(
          (s) => s.streams < THRESHOLD_500M,
        );
        expect(Math.max(...under.map((s) => s.streams)), n.name).toBe(n.streams);
      }
      // Nearest first, three at most, and rounded down: nothing still short of
      // the line prints as past it.
      for (let i = 1; i < near.length; i++) expect(near[i - 1].streams).toBeGreaterThanOrEqual(near[i].streams);
      const line = closestLineOf500(near);
      for (const n of near.slice(0, 3)) expect(line).toContain(nearLine500(n));
      expect(line).not.toMatch(/500\.0M/);
    }
    expect(NOTE_500M).toContain(closestLineOf500(closest500));
    // Today: Wizkid, with "One Dance" past the line, is the one artist with a
    // second song in the snapshot (it keeps songs from 400M): "Essence".
    expect(closestLineOf500(closestOf500(FIXTURE_ROSTER, FIXTURE_SNAPSHOT))).toBe(
      "Closest to joining, one song short: Wizkid (“Essence (feat. Tems)”, 403.0M).",
    );
    // Negative control: the line as it shipped on 7 Oct named songs, not
    // artists — "Dai Dai" (Burna Boy, listed) and two acts with no song past
    // the line, who would need two to join.
    const SHIPPED =
      "Closest to joining: Burna Boy's “Dai Dai” (499.4M), Oxlade's “KU LO SA - A COLORS SHOW” (452.8M) and “Get It Together” featuring Black Coffee (448.5M).";
    expect(NOTE_500M).not.toContain(SHIPPED);
    for (const name of ["Burna Boy", "Oxlade", "Black Coffee"]) expect(closest500.some((n) => n.name === name), name).toBe(false);
    // A featured song is worded as a feature on any reading.
    const feat: Snapshot500 = JSON.parse(JSON.stringify(FIXTURE_SNAPSHOT));
    const bc = roster500.artists.find((x) => x.name === "Black Coffee")!;
    feat.pages[bc.spotifyId].songs.push({ id: "1".repeat(22), title: "One Past", streams: THRESHOLD_500M + 5, kworbStar: true });
    const withBc = closestOf500(FIXTURE_ROSTER, feat);
    expect(withBc[0]).toEqual({ name: "Black Coffee", title: "Get It Together", streams: 448_513_080, role: "featured" });
    expect(closestLineOf500(withBc)).toContain("Black Coffee (featured on “Get It Together”, 448.5M)");
  });

  it("calls the lead the rows give: one name alone, every name in a tie", () => {
    const top = standings500.filter((r) => r.rank === 1);
    if (top.length === 1) expect(box.note).toContain(`${top[0].name} leads with`);
    else expect(box.note).toMatch(/artists share first place with/);
    for (const r of top) expect(FAQ_500M, r.name).toContain(r.name);
  });

  it("the FAQ is on the page, at the board's date", () => {
    const f = pageFaqs.find((x) => x.a === FAQ_500M);
    expect(f?.q).toBe("Which African artist has the most songs past 500 million Spotify streams?");
    expect(FAQ_500M).toContain(AS_OF_500M_LONG);
  });

  it("types no count: the board's block in africasBiggest.ts prints no literal value", () => {
    const src = read("app/data/africasBiggest.ts");
    const at = src.indexOf(`id: "${BOX}"`);
    const block = src.slice(at, src.indexOf("\n  },", at));
    expect(block.length).toBeGreaterThan(0);
    expect(block).not.toMatch(/value: "/);
    expect(block).not.toMatch(/\b\d+ songs?\b/);
  });
});

describe("both layouts paint the board", () => {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(<AfricasBiggestPage />);

  it("desktop: rank, linked name, flag and songs, count", () => {
    const card = [...host.querySelectorAll(`.${desk.box}`)].find((b) => norm(b.querySelector("h3")) === box.title)!;
    expect(card).toBeTruthy();
    const rows = [...card.querySelectorAll(`.${desk.entryRow}`)];
    expect(rows.length).toBe(standings500.length);
    rows.forEach((row, i) => {
      const r = standings500[i];
      expect(norm(row.querySelector(`.${desk.entryRank}`)), r.name).toBe(String(r.rank));
      expect(norm(row.querySelector(`.${desk.entryName}`)), r.name).toBe(r.name);
      expect(row.querySelector(`.${desk.entryName} a`)?.getAttribute("href") ?? undefined, r.name).toBe(r.href);
      expect(norm(row.querySelector(`.${desk.entrySub}`)), r.name).toBe(box.entries![i].sub);
      expect(norm(row.querySelector(`.${desk.entryValue}`)), r.name).toBe(String(r.count));
      expect(row.classList.contains(desk.entryHim), r.name).toBe(r.name === HIGHLIGHT);
    });
    expect(norm(card.querySelector(`.${desk.boxNote}`))).toBe(box.note);
  });

  it("desktop: the card sits in one cell again, now that it lists two songs or more (8 Oct 2026)", () => {
    // It took the whole row from 7 Oct, when its fourteen rows stood 1,234px
    // tall beside a ~490px board. Cut to seven, it measured 763px in one cell
    // beside the followers board's 569px at 1240 and 1440, and the streaming
    // grid 678px shorter than with it across the row (5,199 against 5,877).
    const card = [...host.querySelectorAll(`.${desk.box}`)].find((b) => norm(b.querySelector("h3")) === box.title)!;
    expect(box.wide).toBeUndefined();
    expect(card.classList.contains(desk.boxWide)).toBe(false);
  });

  // The premise the one-cell measurement rests on: half the rows it had then.
  // It reads the live board, so it is an alarm for a human, not a data check:
  // an eighth artist reaching two songs is a true reading, and on the Stats
  // live publishing path (PUBLISH_GATE) a red here would hold back every
  // figure. It still fails in ci.yml, on the next push, to say "re-measure the
  // card, or set it wide again".
  it.skipIf(process.env.PUBLISH_GATE === "1")("desktop: the board still has the seven rows or fewer the one-cell measurement was taken at", () => {
    expect(standings500.length).toBeLessThanOrEqual(7);
  });

  it("phone: the same rows, ranks, links and note", () => {
    const board = [...host.querySelectorAll(`.${phone.board}`)].find((b) => norm(b.querySelector("h2")) === box.title)!;
    expect(board).toBeTruthy();
    const rows = [...board.querySelectorAll(`.${phone.row}`)];
    expect(rows.length).toBe(standings500.length);
    rows.forEach((row, i) => {
      const r = standings500[i];
      expect(norm(row.querySelector(`.${phone.rank}`)), r.name).toBe(String(r.rank).padStart(2, "0"));
      expect(norm(row.querySelector(`.${phone.rowName}`)), r.name).toBe(r.name);
      expect(row.querySelector(`.${phone.rowName} a`)?.getAttribute("href") ?? undefined, r.name).toBe(r.href);
      expect(norm(row.querySelector(`.${phone.rowSub}`)), r.name).toBe(box.entries![i].sub);
      expect(norm(row.querySelector(`.${phone.rowValue}`)), r.name).toBe(String(r.count));
      expect(row.classList.contains(phone.rowHis), r.name).toBe(r.name === HIGHLIGHT);
    });
    expect(norm(board.querySelector(`.${phone.boardNote}`))).toBe(box.note);
    const his = standings500.find((r) => r.name === HIGHLIGHT);
    const badge = africaBoards.find((b) => b.id === BOX)!.badge;
    expect(norm(board.querySelector(`.${phone.boardBadge}`))).toBe(badge);
    if (his) expect(badge).toBe(standings500[0].name === HIGHLIGHT ? "Leads" : `No. ${his.rank}`);
  });

  it("both style a linked name the same way", () => {
    for (const [sheet, cls] of [
      ["app/records/africas-biggest/africas-biggest.module.css", "entryLink"],
      ["app/components/mobileAfricasBiggest.module.css", "rowLink"],
    ]) {
      const css = read(sheet);
      const rule = css.slice(css.indexOf(`.${cls} {`), css.indexOf("}", css.indexOf(`.${cls} {`)));
      expect(rule, sheet).toContain("color: inherit");
      expect(rule, sheet).toContain("text-decoration: underline");
    }
  });
});

describe("the refresh", () => {
  // Two rows of Tems' kworb page as it was served on 7 Oct 2026 (stamped 6 Oct),
  // verbatim: the first carries kworb's "*".
  const PAGE = `<span class="pagetitle">Tems - Spotify Top Songs</span>Last updated: 2026/10/06<br>
<tr><td class="text"><div>* <a href="https://open.spotify.com/track/59nOXPmaKlBfGMDeOVGrIK" target="_blank">WAIT FOR U (feat. Drake & Tems)</a></div></td><td>1,421,706,123</td><td>579,967</td></tr>
<tr><td class="text"><div><a href="https://open.spotify.com/track/31kxPC3ZB9AYwCLyHaqEVX" target="_blank">Me & U</a></div></td><td>423,985,240</td><td>556,774</td></tr>`;

  it("reads a kworb songs page: date, ids, titles, counts and the '*' mark", () => {
    expect(extractKworbSongsTable(PAGE)).toEqual({
      date: "2026-10-06",
      songs: [
        { id: "59nOXPmaKlBfGMDeOVGrIK", title: "WAIT FOR U (feat. Drake & Tems)", streams: 1421706123, kworbStar: true },
        { id: "31kxPC3ZB9AYwCLyHaqEVX", title: "Me & U", streams: 423985240, kworbStar: false },
      ],
    });
  });

  it("decodes an entity-encoded title to the title the roster files", () => {
    const encoded = PAGE.replace("Me & U", "Me &amp; U").replace("Drake & Tems", "Drake &#38; Tems");
    expect(extractKworbSongsTable(encoded)!.songs.map((s: { title: string }) => s.title)).toEqual([
      "WAIT FOR U (feat. Drake & Tems)",
      "Me & U",
    ]);
  });

  it("reads a page with no stamp or no rows as a failure, never as no songs", () => {
    expect(extractKworbSongsTable(PAGE.replace(/Last updated: [\d/]+/, ""))).toBeNull();
    expect(extractKworbSongsTable(PAGE.split("\n")[0])).toBeNull();
    expect(extractKworbSongsTable(null)).toBeNull();
  });

  // "Dai Dai" as kworb's 6 Oct page lists it, and a second copy's id.
  const A = "0kosUz0jePvjiz4ctmR6wL";
  const B = "1zIk8RJEKGvoH4FioFnGyJ";
  const kept = { updated: "2026-10-06", songs: [{ id: A, title: "Song", streams: 499_449_618 }] };
  it("takes a later page whose songs have climbed", () => {
    expect(gate500mReading(kept, { updated: "2026-10-07", songs: [{ id: A, title: "Song", streams: 501_607_194 }] }).ok).toBe(true);
    expect(gate500mReading(undefined, kept).ok).toBe(true);
    // A new id for the same title is kworb listing another copy, not a lost song.
    expect(gate500mReading(kept, { updated: "2026-10-07", songs: [{ id: B, title: "Song", streams: 501_607_194 }] }).ok).toBe(true);
  });

  it("refuses a row whose track id is not a Spotify id", () => {
    // The board's own check holds every id to 22 characters; the gate holds the
    // reading back first, so a mis-read row never reaches that check.
    expect(gate500mReading(kept, { updated: "2026-10-07", songs: [{ id: "a", title: "Song", streams: 501_607_194 }] }).ok).toBe(false);
    expect(gate500mReading(undefined, { updated: "2026-10-07", songs: [{ id: `${A}x`, title: "Song", streams: 501_607_194 }] }).ok).toBe(false);
  });

  it("keeps the last reading against a fall, a vanished song, a jump or an older page", () => {
    const at = (streams: number, updated = "2026-10-07", title = "Song") => ({ updated, songs: [{ id: A, title, streams }] });
    expect(gate500mReading(kept, at(498_000_000)).ok).toBe(false);
    expect(gate500mReading(kept, { updated: "2026-10-07", songs: [] }).ok).toBe(false);
    expect(gate500mReading(kept, at(900_000_000)).ok).toBe(false);
    expect(gate500mReading(kept, at(501_000_000, "2026-10-05")).ok).toBe(false);
    expect(gate500mReading(kept, at(Number.NaN)).ok).toBe(false);
  });

  describe("a renamed song keeps the last reading, so the board's tests never hold back the commit", () => {
    // Review of 7 Oct 2026: kworb renaming Waka Waka on Shakira's page (same
    // track id) passed the gate and was written; the roster test then failed
    // in the workflow's Verify step and nothing was committed, Burna Boy's own
    // figures included.
    const FRESHLYGROUND = roster500.artists.find((a) => a.name === "Freshlyground")!;
    const WAKA = "Waka Waka (This Time for Africa) [The Official 2010 FIFA World Cup (TM) Song] (feat. Freshlyground)";
    const keptFor = (a: { spotifyId: string }) => snapshot500.pages[a.spotifyId];
    const renamed = (reading: { updated: string; songs: { id: string; title: string; streams: number; kworbStar: boolean }[] }, from: string, to: string) => ({
      ...reading,
      songs: reading.songs.map((x) => (x.title === from ? { ...x, title: to } : x)),
    });

    it("the premise: Waka Waka is filed under kworb's title, by its track id", () => {
      expect(FRESHLYGROUND.page).toBeTruthy();
      expect(FRESHLYGROUND.roles?.[WAKA]).toBe("featured");
      expect(keptFor(FRESHLYGROUND).songs.map((x) => x.title)).toEqual([WAKA]);
    });

    it("holds a borrowed page whose song has a title the roster does not file", () => {
      const next = renamed(keptFor(FRESHLYGROUND), WAKA, "Waka Waka (This Time for Africa) (feat. Freshlyground)");
      expect(gate500mReading(keptFor(FRESHLYGROUND), next).ok, "the gate alone lets it through").toBe(true);
      const held = check500mFilings(FRESHLYGROUND, keptFor(FRESHLYGROUND), next);
      expect(held.ok).toBe(false);
      expect(held.reason).toContain("has no filed role");
      expect(check500mFilings(FRESHLYGROUND, keptFor(FRESHLYGROUND), keptFor(FRESHLYGROUND)).ok).toBe(true);
    });

    it("holds any page on which a filed title has been renamed under the same id", () => {
      const next = renamed(keptFor(BURNA), "Location (feat. Burna Boy)", "Location (with Burna Boy)");
      expect(gate500mReading(keptFor(BURNA), next).ok).toBe(true);
      expect(check500mFilings(BURNA, keptFor(BURNA), next).ok).toBe(false);
      // A song the roster never filed may carry any title: it goes by kworb's mark.
      const unfiled = { ...keptFor(BURNA), songs: [...keptFor(BURNA).songs, { id: "0".repeat(22), title: "A New Song", streams: 450_000_000, kworbStar: false }] };
      expect(check500mFilings(BURNA, keptFor(BURNA), unfiled).ok).toBe(true);
    });

    // The script itself, on pages rebuilt from the snapshot, dry: nothing is written.
    const html = (date: string, songs: { id: string; title: string; streams: number; kworbStar: boolean }[]) =>
      `Last updated: ${date.replace(/-/g, "/")}<br>\n` +
      songs
        .map(
          (x) =>
            `<tr><td class="text"><div>${x.kworbStar ? "* " : ""}<a href="https://open.spotify.com/track/${x.id}" target="_blank">${x.title.replace(/&/g, "&amp;")}</a></div></td><td>${x.streams.toLocaleString("en-US")}</td><td>1</td></tr>`,
        )
        .join("\n");
    const pagesDir = (edit: (pages: Snapshot500["pages"]) => void = () => {}) => {
      const pages: Snapshot500["pages"] = JSON.parse(JSON.stringify(snapshot500.pages));
      edit(pages);
      const dir = mkdtempSync(join(tmpdir(), "kworb500-"));
      for (const a of roster500.artists) {
        const r = pages[a.spotifyId];
        writeFileSync(join(dir, `${a.page ?? a.spotifyId}.html`), html(r.updated, r.songs));
      }
      return dir;
    };
    const runDry = (dir: string) => {
      const res = spawnSync(process.execPath, ["scripts/build-african-500m.mjs", "--dry", `--pages=${dir}`], { encoding: "utf8" });
      return { status: res.status, out: `${res.stdout ?? ""}${res.stderr ?? ""}` };
    };

    it("the script reads today's pages as unchanged, and exits 0", () => {
      const { status, out } = runDry(pagesDir());
      expect(out).toContain("(unchanged)");
      expect(status).toBe(0);
    });

    it("the script keeps Freshlyground's reading and exits 1 when Waka Waka is renamed, and still reads Burna Boy's crossing", () => {
      const { status, out } = runDry(
        pagesDir((p) => {
          const f = p[FRESHLYGROUND.spotifyId];
          f.songs = f.songs.map((x) => ({ ...x, title: "Waka Waka (This Time for Africa) (feat. Freshlyground)" }));
          const b = p[BURNA.spotifyId];
          b.updated = "2099-01-01";
          b.songs = b.songs.map((x) => (x.title === "Dai Dai" ? { ...x, streams: Math.max(x.streams, THRESHOLD_500M + 1) } : x));
        }),
      );
      expect(status).toBe(1);
      expect(out).toMatch(/Freshlyground: .*has no filed role.*reading stands/);
      expect(out).not.toMatch(/Burna Boy: .*reading stands/);
      const his = pastLine(BURNA.spotifyId);
      const n = his.length + (his.some((x) => x.title === "Dai Dai") ? 0 : 1);
      expect(out).toMatch(new RegExp(`[:,] Burna Boy ${n}(,| |$)`, "m"));
    });
  });

  it("runs on every Stats live slot, before the verify and commit steps, and surfaces a failure after the commit", () => {
    const wf = read(".github/workflows/stats-live.yml");
    const step = wf.indexOf("run: node scripts/build-african-500m.mjs");
    expect(step).toBeGreaterThan(-1);
    expect(wf.slice(wf.lastIndexOf("- name:", step), step)).toContain("continue-on-error: true");
    expect(step).toBeLessThan(wf.indexOf("- name: Verify the regenerated data"));
    const commit = wf.indexOf("- name: Commit to main");
    const surface = wf.indexOf("steps.fivehundred.outcome == 'failure'");
    expect(surface).toBeGreaterThan(commit);
    expect(wf.slice(surface, surface + 400)).toContain("exit 1");
  });

  it("the script writes the snapshot the board reads, from the roster it reads", () => {
    const src = read("scripts/build-african-500m.mjs");
    expect(src).toContain("../app/data/african500m.artists.json");
    expect(src).toContain("../app/data/african500m.snapshot.json");
    expect(src).toContain("gate500mReading");
    expect(src).toContain("check500mFilings");
  });
});

describe("8 Oct 2026: “Dai Dai” past 500M on Spotify's own count, and only artists with two or more listed", () => {
  // Paul, 8 Oct 2026: "check spotify, it is 500M already" (Spotify's track page:
  // 501,627,594, while kworb's page, dated 6 Oct, had 499,449,618), and then,
  // looking at the live board: "too long, remove the ones with one song, burna
  // goes top and others stay".
  const DAI_DAI = "0kosUz0jePvjiz4ctmR6wL";
  const READING = (roster500.readings ?? []).find((r) => r.id === DAI_DAI)!;
  const ONE_SONG = ["Wizkid", "Freshlyground", "Libianca", "Seether", "Amaarae", "Master KG", "Nomcebo Zikode"];
  // The board as it shipped on 7 Oct 2026 (#443), top to bottom: a seven-way
  // tie at two, then seven artists with one.
  const SHIPPED_ROWS = ["Rema", "Tems", "Tyla", "CKay", "Ayra Starr", "Burna Boy", "Moliy", ...ONE_SONG];
  const day = rank500(FIXTURE_ROSTER, FIXTURE_SNAPSHOT);
  const dayBoard = listed500(day, FIXTURE_ROSTER.listFrom ?? 1);
  const shape = (rows: typeof standings500) => rows.map((r) => `${r.rank} ${r.name} ${r.count}`);

  it("the reading is the roster's, dated, with its source", () => {
    expect(READING).toMatchObject({ artist: BURNA.spotifyId, title: "Dai Dai", streams: 501_627_594, read: "2026-10-08", source: "Spotify's own count" });
    expect(roster500.listFrom).toBe(2);
  });

  it("the board of 8 Oct: Burna Boy alone at No. 1 with three, the six on two after him as they stood", () => {
    expect(shape(dayBoard)).toEqual([
      "1 Burna Boy 3",
      "2 Rema 2",
      "2 Tems 2",
      "2 Tyla 2",
      "2 CKay 2",
      "2 Ayra Starr 2",
      "2 Moliy 2",
    ]);
    const dd = dayBoard[0].songs.find((s) => s.id === DAI_DAI)!;
    expect(dd).toMatchObject({ title: "Dai Dai", streams: 501_627_594, role: "lead", reading: { read: "2026-10-08", source: "Spotify's own count", kworb: 499_449_618 } });
    expect(dayBoard[0].songs.map(songLine500)).toEqual(["featured on “Location (feat. Burna Boy)” 740M", "“Last Last” 615M", "“Dai Dai” 502M"]);
    // The words of that board, as the page printed them.
    expect(source500(dayBoard)).toContain(
      " Burna Boy's “Dai Dai” is counted at 501,627,594 plays — Spotify's own count, read on 8 October 2026 — while kworb's page shows 499,449,618; kworb's figure takes over once it passes that.",
    );
    expect(source500(dayBoard)).toContain("as of 6 October 2026.");
    expect(source500(dayBoard)).toContain("and an artist is listed once two of theirs have passed it.");
  });

  it("negative control: without the reading and the cut, the board as it shipped — a seven-way tie at two and fourteen rows", () => {
    const shipped = rank500({ ...FIXTURE_ROSTER, readings: [], listFrom: undefined }, FIXTURE_SNAPSHOT);
    const rows = listed500(shipped, 1);
    expect(rows.map((r) => r.name)).toEqual(SHIPPED_ROWS);
    expect(rows.filter((r) => r.rank === 1).length).toBe(7);
    expect(rows.find((r) => r.name === HIGHLIGHT)!.count).toBe(2);
    // The day's board is not that one: the reading and the cut both moved it.
    expect(shape(dayBoard)).not.toEqual(shape(rows));
    expect(listed500(shipped, 2).length).toBe(7);
  });

  it("the live board: he leads alone at No. 1 while nobody else has as many, on both layouts", () => {
    const him = standings500.find((r) => r.name === HIGHLIGHT)!;
    expect(him.count).toBeGreaterThanOrEqual(3);
    if (standings500.filter((r) => r.count >= him.count).length === 1) {
      expect(standings500[0].name).toBe(HIGHLIGHT);
      expect(him.rank).toBe(1);
      expect(box.entries![0].name).toBe(HIGHLIGHT);
      expect(box.entries![1].tie).toBeUndefined();
      expect(africaBoards.find((b) => b.id === BOX)!.badge).toBe("Leads");
      expect(NOTE_500M).toContain(`${HIGHLIGHT} leads with `);
      expect(FAQ_500M.startsWith(`${HIGHLIGHT}, with `)).toBe(true);
    }
  });

  it("lists only artists with two or more, on the data, both layouts and the ItemList; the rest stay counted", () => {
    expect(standings500.every((r) => r.count >= LIST_FROM_500M)).toBe(true);
    expect(standings500.map((r) => r.name)).toEqual(ranked500.filter((r) => r.count >= LIST_FROM_500M).map((r) => r.name));
    expect(box.entries!.map((e) => e.name)).toEqual(standings500.map((r) => r.name));
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<AfricasBiggestPage />);
    const card = [...host.querySelectorAll(`.${desk.box}`)].find((b) => norm(b.querySelector("h3")) === box.title)!;
    const board = [...host.querySelectorAll(`.${phone.board}`)].find((b) => norm(b.querySelector("h2")) === box.title)!;
    const deskNames = [...card.querySelectorAll(`.${desk.entryName}`)].map(norm);
    const phoneNames = [...board.querySelectorAll(`.${phone.rowName}`)].map(norm);
    const list = [...host.querySelectorAll('script[type="application/ld+json"]')]
      .map((el) => JSON.parse(el.textContent ?? "{}"))
      .find((j) => j["@type"] === "ItemList" && j.name === box.title);
    const listNames = (list?.itemListElement ?? []).map((e: { name: string }) => e.name);
    for (const names of [deskNames, phoneNames, listNames]) expect(names).toEqual(standings500.map((r) => r.name));
    expect(list.numberOfItems).toBe(standings500.length);
    expect(list.description).toBe(RULE_500M);
    // The one-song artists are off every list but still in the count, so each
    // comes back the day a second song crosses.
    for (const name of ONE_SONG) {
      const r = ranked500.find((x) => x.name === name);
      if (r && r.count < LIST_FROM_500M) {
        for (const names of [deskNames, phoneNames, listNames]) expect(names, name).not.toContain(name);
      }
    }
    expect(ranked500.filter((r) => r.count < LIST_FROM_500M).length, "the premise: someone is counted and not listed").toBeGreaterThan(0);
    // Negative control: the fourteen rows of 7 Oct, each one-song artist on them.
    expect(SHIPPED_ROWS.length).toBe(14);
    expect(ONE_SONG.every((n) => SHIPPED_ROWS.includes(n))).toBe(true);
    expect(deskNames).not.toEqual(SHIPPED_ROWS);
  });

  it("an artist reaching two joins the list with no hand edit", () => {
    const more: Snapshot500 = JSON.parse(JSON.stringify(FIXTURE_SNAPSHOT));
    const wiz = roster500.artists.find((a) => a.name === "Wizkid")!;
    for (const s of more.pages[wiz.spotifyId].songs) s.streams = Math.max(s.streams, THRESHOLD_500M);
    const rows = listed500(rank500(FIXTURE_ROSTER, more), 2);
    expect(rows.find((r) => r.name === "Wizkid")?.count).toBe(2);
    expect(rows.find((r) => r.name === "Wizkid")?.rank).toBe(2);
  });

  it("counts the reading only while it is ahead of kworb, on the board and in the refresh alike", () => {
    const kworb = (streams: number) => [{ id: DAI_DAI, title: "Dai Dai", streams, kworbStar: true }];
    const cases: [string, ReturnType<typeof kworb>][] = [
      ["kworb lower", kworb(499_449_618)],
      ["kworb level", kworb(501_627_594)],
      ["kworb higher", kworb(503_000_000)],
      ["kworb under another id", [{ id: "1".repeat(22), title: "Dai Dai", streams: 499_449_618, kworbStar: true }]],
      ["kworb without the song", []],
    ];
    const board = cases.map(([, songs]) => withReadings500(songs, [READING]));
    expect(board.map((x) => [x[0].streams, x[0].reading?.kworb])).toEqual([
      [501_627_594, 499_449_618],
      [501_627_594, undefined],
      [503_000_000, undefined],
      [501_627_594, 499_449_618],
      [501_627_594, null],
    ]);
    // The refresh's copy of the rule (scripts/stats-lib.mjs) agrees on every case.
    for (const [i, [name, songs]] of cases.entries()) {
      const lib = apply500mReadings(songs, [READING]);
      expect(lib.songs.map((x: { streams: number }) => x.streams), name).toEqual(board[i].map((x) => x.streams));
      expect(lib.stands.length, name).toBe(board[i].some((x) => x.reading) ? 1 : 0);
      expect(lib.passed.length, name).toBe(board[i].some((x) => x.reading) ? 0 : 1);
    }
    // Once kworb passes it, the board shows kworb's figure and says nothing of the reading.
    const passed: Snapshot500 = JSON.parse(JSON.stringify(FIXTURE_SNAPSHOT));
    passed.pages[BURNA.spotifyId].songs.find((s) => s.id === DAI_DAI)!.streams = 503_000_000;
    passed.pages[BURNA.spotifyId].updated = "2026-10-09";
    const rows = listed500(rank500(FIXTURE_ROSTER, passed), 2);
    expect(rows[0].songs.find((s) => s.id === DAI_DAI)).toMatchObject({ streams: 503_000_000 });
    expect(rows[0].songs.find((s) => s.id === DAI_DAI)!.reading).toBeUndefined();
    expect(readingsUsed500(rows)).toEqual([]);
    expect(source500(rows)).not.toContain("read on");
    expect(rows[0].count).toBe(3);
  });

  describe("the refresh step keeps the reading when kworb is lower and drops it when kworb is higher", () => {
    const html = (date: string, songs: { id: string; title: string; streams: number; kworbStar: boolean }[]) =>
      `Last updated: ${date.replace(/-/g, "/")}<br>\n` +
      songs
        .map(
          (x) =>
            `<tr><td class="text"><div>${x.kworbStar ? "* " : ""}<a href="https://open.spotify.com/track/${x.id}" target="_blank">${x.title.replace(/&/g, "&amp;")}</a></div></td><td>${x.streams.toLocaleString("en-US")}</td><td>1</td></tr>`,
        )
        .join("\n");
    /** The live snapshot's pages, Dai Dai at `streams` on kworb, run dry. */
    const runWith = (streams: number) => {
      const pages: Snapshot500["pages"] = JSON.parse(JSON.stringify(snapshot500.pages));
      const b = pages[BURNA.spotifyId];
      const dd = b.songs.find((x) => x.id === DAI_DAI);
      if (dd) dd.streams = Math.max(dd.streams, streams);
      const dir = mkdtempSync(join(tmpdir(), "kworb500r-"));
      for (const a of roster500.artists) writeFileSync(join(dir, `${a.page ?? a.spotifyId}.html`), html(pages[a.spotifyId].updated, pages[a.spotifyId].songs));
      const res = spawnSync(process.execPath, ["scripts/build-african-500m.mjs", "--dry", `--pages=${dir}`], { encoding: "utf8" });
      return { status: res.status, out: `${res.stdout ?? ""}${res.stderr ?? ""}`, kworb: dd ? dd.streams : null };
    };
    const tally = (out: string) => Number(out.match(/^500M board: .*?\bBurna Boy (\d+)/m)?.[1]);

    it("kworb lower: the reading stands, and the run counts Dai Dai at it", () => {
      // kworb's figure as the live snapshot has it (499,449,618 on the 6 Oct
      // page): under the line, so a tally of three is the reading's doing.
      const r = runWith(0);
      if (r.kworb !== null && r.kworb < READING.streams) {
        expect(r.out).toContain(`reading — Burna Boy: "Dai Dai" counts at the 2026-10-08 Spotify reading, 501,627,594 — kworb shows ${r.kworb.toLocaleString("en-US")}`);
      }
      if (r.kworb !== null && r.kworb < THRESHOLD_500M) {
        const onKworb = (snapshot500.pages[BURNA.spotifyId]?.songs ?? []).filter((s) => s.streams >= THRESHOLD_500M).length;
        expect(tally(r.out)).toBe(onKworb + 1);
      }
      expect(tally(r.out)).toBe(pastLine(BURNA.spotifyId).length);
      expect(r.status).toBe(0);
    });

    it("kworb higher: kworb's count shows and the reading is ignored", () => {
      const r = runWith(READING.streams + 1_000_000);
      expect(r.out).toMatch(/reading — Burna Boy: kworb's [\d,]+ has passed the 2026-10-08 Spotify reading of "Dai Dai" \(501,627,594\) — kworb's count shows; the reading is ignored/);
      expect(r.out).not.toContain('counts at the 2026-10-08 Spotify reading');
      expect(tally(r.out)).toBe(pastLine(BURNA.spotifyId).length);
      expect(r.status).toBe(0);
    });

    it("never writes the roster, where the reading lives", () => {
      const src = read("scripts/build-african-500m.mjs");
      expect(src).toContain("apply500mReadings");
      expect(src).not.toMatch(/writeFile\(ROSTER/);
      expect(src.match(/writeFile\(/g)?.length).toBe(1);
    });
  });

  it("the watched “Dai Dai” figure is Spotify's own count, and kworb's lag cannot walk it back", () => {
    const cfg = JSON.parse(read("scripts/watched-metrics.json"));
    const m = cfg.metrics.find((x: { id: string }) => x.id === "spotify-streams-dai-dai");
    expect(m.kind).toBe("peak");
    expect(m.baseline).toBeGreaterThanOrEqual(READING.streams);
    expect(DAI_DAI_SPOTIFY_STREAMS).toBe(formatStat(m.baseline, "compact"));
    // kworb's 6 Oct figure, read again on the next run, is not a new peak:
    // nothing is published, so 502M stands.
    expect(evaluateMetric(m, 499_449_618).status).toBe("ok");
    // Negative control: the figure as it shipped before the reading.
    expect(formatStat(499_449_618, "compact")).toBe("499M");
    expect(DAI_DAI_SPOTIFY_STREAMS).not.toBe("499M");
  });

  it("the /updates entry: one line, dated 8 Oct, true on that day's board", () => {
    const e = updates.filter((u) => u.date === "2026-10-08" && u.href === "/records/africas-biggest");
    expect(e).toHaveLength(1);
    const [u] = e;
    expect(u.category).toBe("Streaming");
    expect(u.text.length).toBeLessThan(300);
    // The figure and the day are the roster's reading, to the digit.
    expect(u.text).toContain(READING.streams.toLocaleString("en-US"));
    expect(u.text).toContain("Spotify's own count on 8 October");
    // "his third song past the mark ... the most of any African artist": the
    // day's board, Moliy and every other artist included.
    const him = dayBoard.find((r) => r.name === HIGHLIGHT)!;
    expect(him.count).toBe(3);
    expect(u.text).toContain("third song past the mark");
    expect(day.filter((r) => r.name !== HIGHLIGHT).every((r) => r.count < him.count)).toBe(true);
    expect(him.songs.map((s) => songTitle500(s.title).replace(/ \(feat\..*\)$/, ""))).toEqual(["Location", "Last Last", "Dai Dai"]);
    expect(u.text).toContain("after Dave's “Location” and “Last Last”");
    // Negative control: on the board as it shipped, with the two-song tie, the
    // same words were false.
    const shipped = rank500({ ...FIXTURE_ROSTER, readings: [] }, FIXTURE_SNAPSHOT);
    expect(shipped.find((r) => r.name === HIGHLIGHT)!.count).toBe(2);
    expect(shipped.filter((r) => r.count === 2).map((r) => r.name)).toEqual(["Rema", "Tems", "Tyla", "CKay", "Ayra Starr", "Burna Boy", "Moliy"]);
  });
});
