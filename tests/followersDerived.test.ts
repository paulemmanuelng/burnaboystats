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
const typedFollowerLine = (line: string) => /follower/i.test(line) && FIGURE.test(line);

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

  it("negative control: the lines the site shipped with typed figures are caught", () => {
    // app/data/spotify.ts until 27 Sep 2026, verbatim.
    expect(typedFollowerLine('export const spotifyFollowersDisplay = "17.91M";')).toBe(true);
    // The 24 Sep 2026 feed entry, as published.
    expect(
      typedFollowerLine(
        "17.91 million Spotify followers, the most of any African artist and just over five million clear of Wizkid (12.86M)"
      )
    ).toBe(true);
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
