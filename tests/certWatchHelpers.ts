// Shared helpers for tests/certWatch*.test.ts — not a test file itself.
//
// Every fixture read here is a REAL response: tests/fixtures/cert-watch/
// PROVENANCE.json names where and when each was fetched, and
// certWatchConfig.test.ts fails on a fixture without an entry.
import { readFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { join } from "node:path";
import { LIVE_ARTISTS } from "../scripts/live-artists.mjs";
import { hydrateSiteIndex } from "../scripts/cert-watch/site.mjs";

export const ROOT = process.cwd();
export const FIX = join(ROOT, "tests/fixtures/cert-watch");

/** A fixture's text, gunzipped when it is a .gz. */
export function fixture(name: string, encoding: BufferEncoding = "utf8"): string {
  let b = readFileSync(join(FIX, name));
  if (name.endsWith(".gz")) b = gunzipSync(b);
  return b.toString(encoding);
}

export const config = JSON.parse(readFileSync(join(ROOT, "scripts/cert-watch/config.json"), "utf8"));

// Plain JSON from the frozen index; the tests read it loosely on purpose.
type Json = any;

/** The site index frozen at build time (site-index.2026-09-24.json), with an
 *  optional, LABELLED edit applied before hydration. */
export function frozenIndex(edit?: (json: Json) => void) {
  const json = JSON.parse(fixture("site-index.2026-09-24.json"));
  if (edit) edit(json);
  return hydrateSiteIndex(json, LIVE_ARTISTS);
}

/** A release in a JSON index, for labelled edits. */
export function releaseOf(json: Json, artist: string, title: string) {
  const r = json.releases.find((x: Json) => x.artist === artist && x.title === title);
  if (!r) throw new Error(`no release ${artist} / ${title} in the frozen index`);
  return r;
}

export { LIVE_ARTISTS };
