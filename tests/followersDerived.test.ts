import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { spotifyFollowersRead, followersCompact, SPOTIFY_FOLLOWERS_READ_ON } from "../app/data/spotify";
import { updates } from "../app/data/updates";

/**
 * Every Spotify follower figure the site prints comes from one dated list,
 * spotifyFollowersRead in app/data/spotify.ts. Until 27 Sep 2026 the stat card's
 * figure was typed beside it (`spotifyFollowersDisplay = "17.91M"`), and each
 * re-read had to find every copy by hand. Two exemptions, both on purpose:
 * spotify.ts itself (the data, and the dated readings in its header) and
 * updates.ts, a dated log whose old entries are never re-written.
 */

/** A typed follower-sized figure: 17,954,252 / 17.95M / 17.9 million. */
const FIGURE = /\d{1,3}(?:,\d{3}){2,}|\d{1,3}(?:_\d{3}){2,}|\d+(?:\.\d+)?\s?(?:M\b|million)/;
/** "follower" and "followed": the board's note said "most-followed", never "follower". */
const typedFollowerLine = (line: string) => /follow(?:er|ed)/i.test(line) && FIGURE.test(line);

/**
 * The board's own rows carry no follower word at all (`value: "12.86M"`), so the
 * line check cannot see them. This one reads the followers box as a block, from
 * its id to the next box's id, and flags any typed figure inside it. The values
 * themselves are pinned to the reading in spotifyAuditFixes.test.ts ("shows the
 * reading's top five, in order, at the reading's values"); this guard is the
 * source-level half, so a typed row fails even if it happens to match the data.
 */
const BOX_ID = 'id: "most-followed-spotify"';
function typedInFollowersBox(src: string): string[] {
  const lines = src.split("\n");
  const start = lines.findIndex((l) => l.includes(BOX_ID));
  if (start < 0) return [];
  const end = lines.findIndex((l, i) => i > start && /^\s*id:\s*"/.test(l));
  return lines.slice(start + 1, end < 0 ? undefined : end).filter((l) => FIGURE.test(l));
}

const EXEMPT = new Set(["app/data/spotify.ts", "app/data/updates.ts"]);

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return sourceFiles(p);
    return /\.(ts|tsx)$/.test(name) ? [p] : [];
  });
}

const sorted = [...spotifyFollowersRead].sort((a, b) => b.followers - a.followers);

describe("follower figures are read off spotifyFollowersRead, never typed", () => {
  it("no line on the site pairs the word follower with a typed figure", () => {
    const hits = sourceFiles("app")
      .filter((f) => !EXEMPT.has(f))
      .flatMap((f) =>
        readFileSync(f, "utf8")
          .split("\n")
          .map((line, i) => ({ where: `${f}:${i + 1}`, line }))
          .filter(({ line }) => typedFollowerLine(line))
          .map(({ where, line }) => `${where}  ${line.trim().slice(0, 100)}`)
      );
    expect(hits, "derive it from spotifyFollowersRead (followersCompact for the M spelling)").toEqual([]);
  });

  it("the followers box on the board holds no typed figure", () => {
    const src = readFileSync("app/data/africasBiggest.ts", "utf8");
    expect(src).toContain(BOX_ID);
    expect(typedInFollowersBox(src)).toEqual([]);
  });

  it("negative control: the lines the site shipped with typed figures are caught", () => {
    // app/data/spotify.ts until 27 Sep 2026, verbatim.
    expect(typedFollowerLine('export const spotifyFollowersDisplay = "17.91M";')).toBe(true);
    // The 24 Sep 2026 feed entry, as published.
    expect(
      typedFollowerLine(
        "17.91 million Spotify followers, the most of any African artist and just over five million clear of Wizkid (12.86M)"
      )
    ).toBe(true);
    // app/data/africasBiggest.ts at df19bf0d (the 24 Sep re-read), line 369, verbatim:
    // the board's note, which says "most-followed" and never "follower".
    expect(
      typedFollowerLine(
        '    note: "Burna Boy is the most-followed African artist on Spotify — just over 5 million clear of Wizkid in second. Davido and Rema sit within a hundred thousand of each other for third, and Asake is past ten million too; Omah Lay (8.02M) and Ayra Starr (7.83M) are next.",'
      )
    ).toBe(true);
  });

  it("negative control: the followers box as it shipped at df19bf0d is caught, row by row", () => {
    // app/data/africasBiggest.ts at df19bf0d, lines 357-366 and 372-374, verbatim (the note and
    // source lines between them are left out here; the line check above covers those).
    // Line 364 (Wizkid's row) has no follower word, so only the block check sees it.
    const shipped = [
      "  {",
      '    id: "most-followed-spotify",',
      '    title: "Most-followed African artist on Spotify",',
      '    meta: "Spotify followers · African artists · current",',
      '    layout: "list",',
      "    entries: [",
      '      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: spotifyFollowersDisplay },',
      '      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "12.86M" },',
      '      { name: "Davido", sub: "🇳🇬 Nigeria", value: "12.03M" },',
      '      { name: "Rema", sub: "🇳🇬 Nigeria", value: "11.94M" },',
      '      { name: "Asake", sub: "🇳🇬 Nigeria", value: "10.77M" },',
      "    ],",
      "  },",
      "  {",
      '    id: "highest-spotify-global-peak",',
    ].join("\n");
    expect(typedFollowerLine('      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "12.86M" },')).toBe(false);
    expect(typedInFollowersBox(shipped)).toHaveLength(4);
    expect(typedInFollowersBox(shipped)[0]).toContain('"12.86M"');
  });
});

describe("a feed entry dated the reading day quotes that reading", () => {
  const entries = updates.filter((u) => u.date === SPOTIFY_FOLLOWERS_READ_ON && /Spotify followers/.test(u.text));
  const [first, second, ...rest] = sorted;

  it("there is one, and it names the leader's exact count", () => {
    expect(entries).toHaveLength(1);
    expect(entries[0].text).toContain(first.followers.toLocaleString("en-US"));
  });

  it("its gap and the next names' figures are the reading's", () => {
    const text = entries[0].text;
    const gap = first.followers - second.followers;
    expect(text).toContain(`${(gap / 1e6).toFixed(2)} million clear of ${second.name} (${followersCompact(second.followers)})`);
    for (const r of rest.slice(0, 3)) expect(text).toContain(`${r.name} (${followersCompact(r.followers)})`);
  });

  it("negative control: the 24 Sep entry fails the same checks against this reading", () => {
    const shipped = updates.find((u) => u.date === "2026-09-24" && /Spotify followers/.test(u.text))!.text;
    expect(shipped).not.toContain(first.followers.toLocaleString("en-US"));
    expect(shipped).not.toContain(`${second.name} (${followersCompact(second.followers)})`);
  });
});
