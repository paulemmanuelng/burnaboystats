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

import { readFile } from "node:fs/promises";
import { ownTitleIndex, ruleC } from "./rule-c-lib.mjs";

const [slug, title, ...flags] = process.argv.slice(2);
if (!slug || !title) {
  console.error('usage: node scripts/roles/rule-c-role.mjs <slug> "<Spotify title>" [--first-listed]');
  process.exit(2);
}
const read = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));
const own = await read("../../docs/sourcing/own-releases-2026-10-07.json");
const { overrides } = await read("../../app/data/roleOverrides.json");
const block = own.artists[slug];
if (!block) {
  console.error(`no own-release list for "${slug}"; known: ${Object.keys(own.artists).join(", ")}`);
  process.exit(2);
}
const r = ruleC({
  title,
  input: { spotifyTitle: title, firstListed: flags.includes("--first-listed") },
  artistName: block.name,
  own: ownTitleIndex(block),
  overrides: overrides.filter((o) => o.artist === slug),
});
const why = {
  "own-release": `on ${block.name}'s own release “${r.ownRelease}”`,
  "first-listed": `${block.name} is first-listed on the track`,
  neither: `not on ${block.name}'s own releases (read ${block.readOn}) and not first-listed`,
  override: "one of the three overrides (app/data/roleOverrides.json)",
}[r.rule];
console.log(`${r.role.toUpperCase()} — ${why}`);
