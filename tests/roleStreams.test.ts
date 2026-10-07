import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  extractKworbTrackRows,
  extractKworbSongsSummary,
  sumByRole,
  roleStreamsRefusals,
  ROLE_STREAMS_MIN_ROWS,
  // @ts-expect-error — plain .mjs helper shared with the stats bot
} from "../scripts/stats-lib.mjs";
import { ROLE_STREAMS } from "../app/data/roleStreams";
import burnaTrackRoles from "../app/data/burnaTrackRoles.json";

// Burna Boy's streams by credit role (/music, "Lead vs featured"): kworb's
// per-song totals, each filed under his role on the track — Spotify's own
// "Main Artist" / "Featured Artist" (app/data/burnaTrackRoles.json). The bot
// rewrites app/data/roleStreams.ts daily (scripts/build-role-streams.mjs), so
// the checked-in file is held to INVARIANTS here, never to stream values.

const ROOT = process.cwd();
const FIXTURE = readFileSync(join(ROOT, "tests/fixtures/kworb-burna-songs-2026-10-06.html"), "utf8");
const ROLES = burnaTrackRoles.tracks as Record<string, { role: "lead" | "featured"; title: string }>;

/** The roles file without the two fixture rows the test treats as new releases. */
const UNREAD = ["2lEl1iNGpz9r2B7R5BqXSD", "7bDCBn5W4rLCQAJiUAymCk"]; // "Ye" (plain), "Be Honest - Acoustic" (*)
const rolesWithout = Object.fromEntries(Object.entries(ROLES).filter(([id]) => !UNREAD.includes(id)));

describe("extractKworbTrackRows / sumByRole, on a trimmed copy of the 2026/10/06 page", () => {
  const rows = extractKworbTrackRows(FIXTURE);

  it("reads every track row: id, title (entities decoded), streams and kworb's marker", () => {
    expect(rows.map((r: { title: string }) => r.title)).toEqual([
      "Location (feat. Burna Boy)",
      "Last Last",
      "Be Honest",
      "Ye",
      "Be Honest - Acoustic",
    ]);
    expect(rows[0]).toEqual({ id: "6KFWubocLBhrLs31RpEdR9", title: "Location (feat. Burna Boy)", streams: 740167444, marker: "*" });
    expect(rows[1].marker).toBeNull();
    expect(extractKworbSongsSummary(FIXTURE)).toEqual({ date: "2026-10-06", streams: 2099544623, tracks: 5 });
  });

  it("files each row by Spotify's credit, not by kworb's marker", () => {
    const s = sumByRole(rows, ROLES);
    // Location carries kworb's "*" but Spotify credits him as a Main Artist: lead.
    expect(s.tracks[0]).toEqual({ id: "6KFWubocLBhrLs31RpEdR9", title: "Location", streams: 740167444, role: "lead", mapped: true });
    expect(s.tracks.find((t: { title: string }) => t.title === "Be Honest").role).toBe("featured");
    expect(s.lead).toBe(740167444 + 615396840 + 339177519);
    expect(s.featured).toBe(392984466 + 11818354);
    expect([s.leadSongs, s.featuredSongs]).toEqual([3, 2]);
    expect(s.unmapped).toEqual([]);
  });

  it("an unread track falls back to kworb's marker, says so, and is still counted", () => {
    const s = sumByRole(rows, rolesWithout);
    expect(s.unmapped.map((t: { title: string; role: string }) => [t.title, t.role])).toEqual([
      ["Ye", "lead"],
      ["Be Honest - Acoustic", "featured"],
    ]);
    expect(s.lead + s.featured).toBe(2099544623);
    expect(roleStreamsRefusals(extractKworbSongsSummary(FIXTURE), s, rows, null)).toEqual([`only 5 track rows parsed (floor ${ROLE_STREAMS_MIN_ROWS})`]);
  });

  it("refuses: below the row floor, no stamp, rows that do not add up, or a total that falls", () => {
    const summary = extractKworbSongsSummary(FIXTURE);
    const s = sumByRole(rows, ROLES);
    const many = Array.from({ length: ROLE_STREAMS_MIN_ROWS }, () => rows[0]);
    const manySplit = sumByRole(many, ROLES);
    const ok = { ...summary, streams: undefined, tracks: undefined };
    expect(roleStreamsRefusals(ok, manySplit, many, null)).toEqual([]);
    expect(roleStreamsRefusals(summary, s, rows, null)[0]).toMatch(/^only 5 track rows parsed/);
    expect(roleStreamsRefusals({ ...ok, date: undefined }, manySplit, many, null)).toEqual(["the page carries no 'Last updated' stamp"]);
    expect(roleStreamsRefusals(ok, { ...manySplit, lead: manySplit.lead - 1 }, many, null)[0]).toMatch(/is not the rows' sum/);
    expect(roleStreamsRefusals({ ...ok, streams: 1 }, manySplit, many, null)[0]).toMatch(/the page's own Streams total is 1$/);
    expect(roleStreamsRefusals({ ...ok, tracks: 1 }, manySplit, many, null)[0]).toMatch(/the page says 1 tracks$/);
    const prev = { lead: manySplit.lead + 1, featured: manySplit.featured };
    expect(roleStreamsRefusals(ok, manySplit, many, prev)).toEqual([`lead fell: ${prev.lead} -> ${manySplit.lead}`]);
    expect(roleStreamsRefusals(ok, manySplit, many, prev, { allowFall: true })).toEqual([]);
  });
});

describe("the checked-in reading (app/data/roleStreams.ts) — invariants only", () => {
  const { tracks } = ROLE_STREAMS;
  const sum = (role: string) => tracks.filter((t) => t.role === role).reduce((n, t) => n + t.streams, 0);

  it("is a whole page: at least the row floor, each track once, with a date", () => {
    expect(tracks.length).toBeGreaterThanOrEqual(ROLE_STREAMS_MIN_ROWS);
    expect(new Set(tracks.map((t) => t.id)).size).toBe(tracks.length);
    expect(ROLE_STREAMS.pageDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(ROLE_STREAMS.readAt >= ROLE_STREAMS.pageDate).toBe(true);
    expect(sum("lead") + sum("featured")).toBe(tracks.reduce((n, t) => n + t.streams, 0));
  });

  it("every mapped track carries its role and title from burnaTrackRoles.json", () => {
    for (const t of tracks.filter((x) => x.mapped)) {
      expect(ROLES[t.id], t.id).toBeTruthy();
      expect(t.role, t.title).toBe(ROLES[t.id].role);
      expect(t.title).toBe(ROLES[t.id].title);
    }
    for (const t of tracks.filter((x) => !x.mapped)) expect(ROLES[t.id], `${t.title} is mapped after all`).toBeUndefined();
  });

  it("is the shape the bot reads back before it rewrites the file", () => {
    const script = readFileSync(join(ROOT, "scripts/build-role-streams.mjs"), "utf8");
    const pattern = new RegExp(/export const ROLE_STREAMS_PATTERN = \/(.*)\/;/.exec(script)![1]);
    const m = readFileSync(join(ROOT, "app/data/roleStreams.ts"), "utf8").match(pattern);
    expect(m, "the bot would halt on a file it cannot read back").not.toBeNull();
    expect(JSON.parse(m![1])).toEqual(ROLE_STREAMS);
  });
});
