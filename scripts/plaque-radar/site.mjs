// Read the site's own data — plaques, chart runs, live platform charts and
// thresholds — for Burna Boy and every artist on the Afrobeats Board.
//
// READ ONLY. The radar never writes to app/ or docs/: its output is a private
// report outside the repository.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { parseSweepDoc } from "./sweeps.mjs";

const load = (root, rel) => import(pathToFileURL(join(root, rel)).href);

/** The markets the radar serves; "UK" as the site writes it. */
export const MARKETS = ["UK", "ZA", "AU", "PT"];

/**
 * Everything the radar needs from the repo, flattened to plain records.
 *   artists   [{ slug, name }]
 *   releases  [{ slug, artist, title, credit?, format, certs: [{c, level, x}] }]
 *   charts    [{ slug, title, credit?, format, entries: [{c, peak, weeks?}] }]
 *   live      [{ slug, title, format, country, platform, position, updated }]
 *   thresholds CERT_THRESHOLDS from app/data/certThresholds.ts
 *   sweepRows dated plaques from docs/sweeps/*-certifications-v1.md
 */
export async function loadSite(root) {
  const certs = await load(root, "app/data/certifications.ts");
  const charts = await load(root, "app/data/charts.ts");
  const board = await load(root, "app/data/afrobeats.ts");
  const thresholds = await load(root, "app/data/certThresholds.ts");
  const burnaLive = await load(root, "app/data/liveCharts.ts");
  const boards = await load(root, "app/data/liveBoards.ts");

  const artists = [{ slug: "burna-boy", name: "Burna Boy" }, ...board.afrobeatsArtists.map((a) => ({ slug: a.slug, name: a.name }))];
  const nameOf = Object.fromEntries(artists.map((a) => [a.slug, a.name]));

  const releases = [];
  const push = (slug, r, format) =>
    releases.push({ slug, artist: nameOf[slug], title: r.title, credit: r.credit, format, year: r.year, certs: r.certs.map((c) => ({ c: c.c, level: c.level, x: c.x ?? 1 })) });
  for (const r of certs.albums) push("burna-boy", r, "album");
  for (const r of certs.singles) push("burna-boy", r, "single");
  for (const r of certs.features) push("burna-boy", r, "single");
  for (const a of board.afrobeatsArtists) for (const r of a.releases) push(a.slug, r, r.kind === "Albums" ? "album" : "single");

  const chartRows = [];
  for (const r of charts.albumCharts) chartRows.push({ slug: "burna-boy", title: r.title, credit: r.credit, format: "album", entries: r.entries });
  for (const r of [...charts.singleCharts, ...charts.featureCharts]) chartRows.push({ slug: "burna-boy", title: r.title, credit: r.credit, format: "single", entries: r.entries });
  for (const a of board.afrobeatsArtists) for (const r of a.charts) chartRows.push({ slug: a.slug, title: r.title, format: r.kind === "Albums" ? "album" : "single", entries: r.entries });

  // Platform charts, today. kworb writes the UK as "UK" on some platforms and
  // "GB" on others; both are the UK here.
  const live = [];
  const addLive = (slug, rels, updated) => {
    for (const r of rels)
      for (const p of r.platforms)
        for (const e of p.entries)
          live.push({ slug, title: r.title, format: r.kind === "album" ? "album" : "single", country: e.country === "GB" ? "UK" : e.country, platform: p.platform, position: e.position, updated });
  };
  addLive("burna-boy", burnaLive.liveCharts, burnaLive.liveChartsUpdated);
  for (const b of boards.LIVE_BOARDS) addLive(b.slug, b.releases, b.updated);

  const sweepRows = [];
  const dir = join(root, "docs/sweeps");
  if (existsSync(dir)) {
    for (const f of readdirSync(dir).filter((f) => f.endsWith("-certifications-v1.md"))) {
      const slug = f.replace(/-certifications-v1\.md$/, "");
      if (!nameOf[slug]) continue;
      for (const row of parseSweepDoc(readFileSync(join(dir, f), "utf8"), slug)) sweepRows.push({ ...row, file: `docs/sweeps/${f}` });
    }
  }

  return {
    artists,
    releases,
    charts: chartRows,
    live,
    liveUpdated: burnaLive.liveChartsUpdated,
    thresholds: thresholds.CERT_THRESHOLDS,
    sweepRows,
    countries: certs.COUNTRIES,
  };
}
