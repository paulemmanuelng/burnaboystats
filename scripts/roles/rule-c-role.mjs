#!/usr/bin/env node
// Files ONE song by Rule C, for a new release (Paul, 7 Oct 2026):
//
//   node scripts/roles/rule-c-role.mjs <slug> "<Spotify title>" [--first-listed]
//
// <slug> is "burna-boy" or a board slug. The title is the track's title as
// Spotify / kworb print it ("wgft (feat. Burna Boy)"). Pass --first-listed
// when kworb's song page shows no "*" against the track for that artist.
// It prints lead or featured and why. A song newer than the artist's own-
// release read (docs/sourcing/own-releases-*.json, readOn per artist) needs
// that artist's discography re-read first: docs/sourcing/rule-c-2026-10-07.md.
// Part 1 matches by title: a title the inputs already mark as shared with a
// DIFFERENT song of the artist's (`titleCollision`) skips it here too.

import { readFile } from "node:fs/promises";
import { normTitle, ownTitleIndex, ruleC } from "./rule-c-lib.mjs";

const [slug, title, ...flags] = process.argv.slice(2);
if (!slug || !title) {
  console.error('usage: node scripts/roles/rule-c-role.mjs <slug> "<Spotify title>" [--first-listed]');
  process.exit(2);
}
const read = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));
const own = await read("../../docs/sourcing/own-releases-2026-10-07.json");
const { overrides } = await read("../../app/data/roleOverrides.json");
const inputs = await read("../../docs/sourcing/rule-c-inputs-2026-10-07.json");
const block = own.artists[slug];
if (!block) {
  console.error(`no own-release list for "${slug}"; known: ${Object.keys(own.artists).join(", ")}`);
  process.exit(2);
}
const filed = slug === "burna-boy" ? inputs.burna : inputs.board[slug] ?? {};
const collision = Object.values(filed).find((row) => row.titleCollision && normTitle(row.spotifyTitle ?? "") === normTitle(title))?.titleCollision;
const r = ruleC({
  title,
  input: { spotifyTitle: title, firstListed: flags.includes("--first-listed"), titleCollision: collision },
  artistName: block.name,
  own: ownTitleIndex(block),
  overrides: overrides.filter((o) => o.artist === slug),
});
const why = {
  "own-release": `on ${block.name}'s own release “${r.ownRelease}”`,
  "first-listed": `${block.name} is first-listed on the track`,
  neither: collision
    ? `not first-listed, and the same-titled song on ${block.name}'s own releases is a different record`
    : `not on ${block.name}'s own releases (read ${block.readOn}) and not first-listed`,
  override: "one of the three overrides (app/data/roleOverrides.json)",
}[r.rule];
console.log(`${r.role.toUpperCase()} — ${why}`);
if (collision) console.log(`(title collision, rule-c-inputs: ${collision})`);
if (r.rule === "own-release")
  console.log(`Matched by title: if the song on “${r.ownRelease}” is a different record that only shares the title, add "titleCollision" to the release's inputs row.`);
