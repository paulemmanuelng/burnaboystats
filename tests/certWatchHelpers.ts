// Shared helpers for tests/certWatch*.test.ts — not a test file itself.
//
// Every fixture read here is a REAL response: tests/fixtures/cert-watch/
// PROVENANCE.json names where and when each was fetched, and
// certWatchConfig.test.ts fails on a fixture without an entry.
import { readFileSync, writeFileSync } from "node:fs";
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
 *  optional, LABELLED edit applied before hydration, hydrated with the real
 *  config.json unless a (labelled) edit of it is passed. */
export function frozenIndex(edit?: (json: Json) => void, cfg: Json = config) {
  const json = JSON.parse(fixture("site-index.2026-09-24.json"));
  if (edit) edit(json);
  return hydrateSiteIndex(json, LIVE_ARTISTS, cfg);
}

/** A release in a JSON index, for labelled edits. */
export function releaseOf(json: Json, artist: string, title: string) {
  const r = json.releases.find((x: Json) => x.artist === artist && x.title === title);
  if (!r) throw new Error(`no release ${artist} / ${title} in the frozen index`);
  return r;
}

/** A LABELLED EDIT of config.json: as it stood before Paul's rulings of
 *  24 Sep 2026 (SPEC §0.5) — without TCSN's "02:30" → "2:30" title alias and
 *  the known divergence on PROMUSICAE's CKay remix — so the offline run's two
 *  real leads (TCSN "Asake | 02:30", PROMUSICAE "LOVE NWANTITI (REMIX)")
 *  come back for the tests that need a lead to work with. Written to `dir`;
 *  returns the file's path, for --config. */
export function configBeforeRulings(dir: string): string {
  const cfg = JSON.parse(JSON.stringify(config));
  cfg.titleAliases = cfg.titleAliases.filter((t: Json) => !(t.register === "tcsn" && t.printed === "02:30"));
  cfg.knownDivergences = cfg.knownDivergences.filter((d: Json) => !(d.adapter === "promusicae" && d.printed === "LOVE NWANTITI (REMIX)"));
  if (cfg.titleAliases.length !== config.titleAliases.length - 1 || cfg.knownDivergences.length !== config.knownDivergences.length - 1) {
    throw new Error("configBeforeRulings: the two rulings are not where they were");
  }
  const file = join(dir, "config-before-rulings.json");
  writeFileSync(file, JSON.stringify(cfg));
  return file;
}

export { LIVE_ARTISTS };
