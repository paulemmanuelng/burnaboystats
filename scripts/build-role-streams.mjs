#!/usr/bin/env node
// Regenerates app/data/roleStreams.ts: Burna Boy's Spotify streams split by
// his credit role on each song — the "Lead vs featured" section on /music.
//
// kworb's per-song totals (his songs page, the one the bot already reads for
// the career total) are summed under his role on each track, read off
// Spotify's own credits panel (app/data/burnaTrackRoles.json; the credit-role
// rule, Paul, 6 Oct 2026). Never typed totals: every /music figure derives
// from this file, and the file is rewritten whole, like build-live-charts.mjs.
// Run daily by .github/workflows/stats-live.yml.
//
// It REFUSES to write (exit 1, the checked-in file kept) when fewer than
// ROLE_STREAMS_MIN_ROWS track rows parse, the page has no date stamp, the
// rows do not add up (to each other or to the page's own Streams/Tracks
// figures), or either role total falls — both only ever grow, so a fall means
// kworb dropped a track or the parse lost one, and a human must look
// (--allow-fall after looking, e.g. when a role is re-read and moves).
//
// A track with no role on file (a new release whose credits have not been
// read) is filed by kworb's own marker ("*" = featured) and named in the log,
// so its credits get read and added to burnaTrackRoles.json.
//
//   node scripts/build-role-streams.mjs                  # fetch and write
//   node scripts/build-role-streams.mjs --from=page.html # a page saved with curl
//   node scripts/build-role-streams.mjs --dry            # summary only

import { readFile, writeFile } from "node:fs/promises";
import { extractKworbTrackRows, extractKworbSongsSummary, sumByRole, roleStreamsRefusals } from "./stats-lib.mjs";

const SOURCE = "https://kworb.net/spotify/artist/3wcj11K77LjEY1PkEazffa_songs.html";
const ROLES = new URL("../app/data/burnaTrackRoles.json", import.meta.url);
const OUT = new URL("../app/data/roleStreams.ts", import.meta.url);
const UA = { "user-agent": "burnaboystats-bot" };

const arg = (name) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const flag = (name) => process.argv.includes(`--${name}`);

/** The checked-in reading, read back from the file this script writes. */
export const ROLE_STREAMS_PATTERN = /export const ROLE_STREAMS: RoleStreams = (\{[\s\S]*\n\});/;

async function previous() {
  try {
    const m = (await readFile(OUT, "utf8")).match(ROLE_STREAMS_PATTERN);
    if (!m) throw new Error("app/data/roleStreams.ts does not match the shape this script writes — was it edited by hand?");
    return JSON.parse(m[1]);
  } catch (e) {
    if (e.code === "ENOENT") return null;
    throw e;
  }
}

const from = arg("from");
const html = from
  ? await readFile(from, "utf8")
  : await (async () => {
      const res = await fetch(SOURCE, { headers: UA });
      if (!res.ok) throw new Error(`kworb answered ${res.status}`);
      return res.text();
    })();

const roles = JSON.parse(await readFile(ROLES, "utf8")).tracks;
const rows = extractKworbTrackRows(html);
const summary = extractKworbSongsSummary(html);
const split = sumByRole(rows, roles);
const prev = await previous();
const prevTotals = prev
  ? {
      lead: prev.tracks.filter((t) => t.role === "lead").reduce((n, t) => n + t.streams, 0),
      featured: prev.tracks.filter((t) => t.role === "featured").reduce((n, t) => n + t.streams, 0),
    }
  : null;

console.log(
  `kworb page ${summary.date ?? "(no stamp)"}: ${rows.length} tracks — lead ${split.lead.toLocaleString("en-US")} ` +
    `(${split.leadSongs} songs), featured ${split.featured.toLocaleString("en-US")} (${split.featuredSongs} songs)`,
);
for (const t of split.unmapped)
  console.warn(`::warning::no credit role on file for ${t.id} "${t.title}" — filed ${t.role} by kworb's marker; read its Spotify credits and add it to app/data/burnaTrackRoles.json`);

const refusals = roleStreamsRefusals(summary, split, rows, prevTotals, { allowFall: flag("allow-fall") });
if (refusals.length) {
  for (const r of refusals) console.error(`::error::role streams not written: ${r}`);
  process.exit(1);
}

const reading = {
  pageDate: summary.date,
  readAt: new Date().toISOString().slice(0, 10),
  tracks: split.tracks,
};
// The same page read again is not a new reading: rewriting it would change
// only readAt, and every bot commit is a production deploy.
if (prev && prev.pageDate === reading.pageDate && JSON.stringify(prev.tracks) === JSON.stringify(reading.tracks)) {
  console.log("unchanged since the last read; not rewritten");
  process.exit(0);
}
if (flag("dry")) process.exit(0);

const body = `// GENERATED FILE — do not edit by hand.
// Rebuilt by scripts/build-role-streams.mjs from kworb's songs page for Burna
// Boy, ${SOURCE}:
// each track's total Spotify streams, filed under his credit role on it —
// Spotify's own "Main Artist" (lead) or "Featured Artist" (featured),
// app/data/burnaTrackRoles.json. \`mapped: false\` marks a track with no role
// on file yet, filed by kworb's marker until its credits are read.
// /music's "Lead vs featured" section derives every figure from this.

export interface RoleStreamTrack {
  id: string;
  title: string;
  streams: number;
  role: "lead" | "featured";
  mapped: boolean;
}

export interface RoleStreams {
  /** kworb's own "Last updated" stamp on the page read. */
  pageDate: string;
  /** The day the page was read. */
  readAt: string;
  tracks: RoleStreamTrack[];
}

export const ROLE_STREAMS: RoleStreams = {
  "pageDate": ${JSON.stringify(reading.pageDate)},
  "readAt": ${JSON.stringify(reading.readAt)},
  "tracks": [
${reading.tracks.map((t) => `    ${JSON.stringify(t)}`).join(",\n")}
  ]
};
`;
await writeFile(OUT, body);
console.log(`wrote app/data/roleStreams.ts (page ${reading.pageDate}, ${reading.tracks.length} tracks)`);
