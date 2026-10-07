#!/usr/bin/env node
// Refreshes app/data/african500m.snapshot.json — the kworb readings behind the
// "Most 500M-stream songs on Spotify" board on /records/africas-biggest.
//
// One request per artist in app/data/african500m.artists.json: their own kworb
// songs page (kworb.net/spotify/artist/<id>_songs.html), which lists every
// Spotify track the artist is credited on with Spotify's own play count. Every
// song at or above the roster's `watchFloor` is kept, so the board can name the
// songs closest to the line as well as the ones past it; the counting, ranking
// and wording all happen in app/data/african500m.ts, so this script only reads.
// "Dai Dai" joins Burna Boy's list on the first run after kworb shows it past
// 500M, with no hand edit.
//
// Like build-live-charts.mjs this rewrites a dataset wholesale, and like every
// live write it is sanity-gated (gate500mReading in stats-lib.mjs). A page that
// fails to fetch, will not parse, is dated before the reading already kept, or
// shows a song lower than it was keeps its PREVIOUS reading, and the run exits 1
// after writing the rest, so the workflow step goes red while every good page
// still publishes. More than half the pages failing writes nothing: that is a
// reshaped source, not a bad day for half of Africa.
//
// The file only changes when a page does — no run date is written — so a run
// on a day kworb has not regenerated anything is not a commit or a deploy.
//
//   node scripts/build-african-500m.mjs               # fetch and write
//   node scripts/build-african-500m.mjs --dry         # fetch, report, write nothing
//   node scripts/build-african-500m.mjs --pages=DIR   # read DIR/<id>.html instead of fetching

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { extractKworbSongsTable, gate500mReading } from "./stats-lib.mjs";

const ROSTER = new URL("../app/data/african500m.artists.json", import.meta.url);
const OUT = new URL("../app/data/african500m.snapshot.json", import.meta.url);
const UA = { "user-agent": "burnaboystats-bot" };
const DRY = process.argv.includes("--dry");
const PAGES = process.argv.find((a) => a.startsWith("--pages="))?.slice("--pages=".length);
const pageUrl = (id) => `https://kworb.net/spotify/artist/${id}_songs.html`;

const roster = JSON.parse(await readFile(ROSTER, "utf8"));
let previous = { pages: {} };
try {
  previous = JSON.parse(await readFile(OUT, "utf8"));
} catch (err) {
  if (err?.code !== "ENOENT") {
    // A snapshot that exists and cannot be read is not a first run: carrying
    // nothing forward would drop every artist the next fetch misses.
    console.error(`REFUSING TO CONTINUE: ${OUT.pathname} is unreadable (${err?.message ?? err}).`);
    process.exit(1);
  }
}

/** One page's HTML, from disk with --pages or from kworb. Null on any failure. */
async function pageHtml(id) {
  try {
    if (PAGES) return await readFile(join(PAGES, `${id}.html`), "utf8");
    const res = await fetch(pageUrl(id), { headers: UA });
    if (!res.ok) {
      console.error(`  ${id}: HTTP ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.error(`  ${id}: ${err?.message ?? err}`);
    return null;
  }
}

const pageCache = new Map();
const pages = {};
const failures = [];
const notes = [];
for (const artist of roster.artists) {
  const pageId = artist.page ?? artist.spotifyId;
  if (!pageCache.has(pageId)) {
    pageCache.set(pageId, extractKworbSongsTable(await pageHtml(pageId)));
    if (!PAGES) await new Promise((ok) => setTimeout(ok, 300)); // polite: one page at a time
  }
  const table = pageCache.get(pageId);
  const kept = previous.pages?.[artist.spotifyId];
  if (!table) {
    failures.push(`${artist.name}: ${pageUrl(pageId)} did not fetch or parse`);
    if (kept) pages[artist.spotifyId] = kept;
    continue;
  }
  // An artist read off someone else's page (Freshlyground off Shakira's) takes
  // only their own tracks: by id, or by a title the roster files for them.
  const own = artist.page
    ? table.songs.filter((s) => (artist.tracks ?? []).includes(s.id) || s.title in (artist.roles ?? {}))
    : table.songs;
  const reading = {
    ...(artist.page ? { page: artist.page } : {}),
    updated: table.date,
    songs: own.filter((s) => s.streams >= roster.watchFloor),
  };
  const gate = gate500mReading(kept, reading);
  if (!gate.ok) {
    failures.push(`${artist.name}: ${gate.reason} — the ${kept?.updated ?? "previous"} reading stands`);
    if (kept) pages[artist.spotifyId] = kept;
    continue;
  }
  // A song crossing the line with no filed role is counted on kworb's mark;
  // say so, so a human can file it by ChartMasters' rule.
  const before = new Set((kept?.songs ?? []).filter((s) => s.streams >= roster.threshold).map((s) => s.title));
  for (const s of reading.songs) {
    if (s.streams >= roster.threshold && !before.has(s.title)) {
      const filed = (artist.roles ?? {})[s.title];
      notes.push(
        `${artist.name}: "${s.title}" is past ${roster.threshold.toLocaleString("en-US")} (${s.streams.toLocaleString("en-US")})` +
          (filed ? `, filed ${filed}` : `, no filed role — counted ${s.kworbStar ? "featured" : "lead"} on kworb's mark`)
      );
    }
  }
  pages[artist.spotifyId] = reading;
}

const total = roster.artists.length;
for (const n of notes) console.log(`joins the board — ${n}`);
for (const f of failures) console.log(`::warning::500M board: ${f}`);
if (failures.length > total / 2) {
  console.error(`REFUSING TO WRITE: ${failures.length} of ${total} pages failed — a reshaped source, not a reading.`);
  process.exit(1);
}

const next = { pages };
const body = `${JSON.stringify(next, null, 1)}\n`;
const same = JSON.stringify(previous) === JSON.stringify(next);
const counted = roster.artists
  .map((a) => [a.name, (pages[a.spotifyId]?.songs ?? []).filter((s) => s.streams >= roster.threshold).length])
  .filter(([, n]) => n > 0)
  .map(([name, n]) => `${name} ${n}`);
console.log(`500M board: ${counted.join(", ")}${same ? " (unchanged)" : ""}`);
if (!DRY && !same) await writeFile(OUT, body, "utf8");
if (failures.length) process.exit(1);
