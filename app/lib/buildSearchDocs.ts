// Search docs for the site's own DATA — releases, award bodies, countries.
//
// SERVER-ONLY, like searchStats.ts: it imports the datasets, so it must never
// be pulled into a client bundle. scripts/build-search-index.mjs calls it to
// write searchIndex.generated.ts, and a test calls it to assert that file is
// still current. Keeping the logic here rather than in the script means the
// test can check the data without shelling out.
//
// Why any of this exists: searchIndex.ts held 79 page descriptions and nothing
// else, so search found pages and never records. Measured against the real
// data, 63 of 85 certified titles returned nothing — "Location", his
// most-certified title, among them — as did all 46 award bodies and every
// charting country. The box's own placeholder invites "Songs, records,
// countries, awards": the four things it could not find.
//
// Docs carry names and paths, never figures beyond a short count in the
// description. The page each one points at owns the numbers; a second copy here
// would drift.

import { allItems, COUNTRIES } from "../data/certifications";
import { allChartItems, CHART_COUNTRIES } from "../data/charts";
import { ceremonies } from "../data/awards";
import { songs } from "../data/songs";
import { albumPages } from "../data/albumPages";
import { titleKey } from "./titleKey";
import type { SearchDoc } from "./searchIndex";

export function buildSearchDocs(): SearchDoc[] {
  const songSlug = new Map(songs.map((s) => [titleKey(s.title), s.slug]));
  const albumSlug = new Map(albumPages.map((a) => [titleKey(a.title), a.slug]));

  /** A release's own page, when it has one. */
  const pathFor = (title: string): string | null => {
    const k = titleKey(title);
    if (songSlug.has(k)) return `/music/${songSlug.get(k)}`;
    if (albumSlug.has(k)) return `/music/albums/${albumSlug.get(k)}`;
    return null;
  };

  const docs: SearchDoc[] = [];
  const seen = new Set<string>();
  const add = (doc: Omit<SearchDoc, "generated">) => {
    // Every doc from here is generated, by definition.
    (doc as SearchDoc).generated = true;
    const key = `${doc.title}|${doc.path}`;
    if (seen.has(key)) return;
    seen.add(key);
    docs.push(doc);
  };

  // ── Releases ────────────────────────────────────────────────────────────
  // Worth finding whether certified, charted or both. Its own page when it has
  // one; otherwise the ledger or chart table where its figures actually are.
  type Agg = { title: string; credit?: string; certs: number; entries: number };
  const releases = new Map<string, Agg>();
  for (const r of allItems) {
    const k = titleKey(r.title);
    const e = releases.get(k) ?? { title: r.title, credit: r.credit, certs: 0, entries: 0 };
    e.certs += r.certs.length;
    e.credit ??= r.credit;
    releases.set(k, e);
  }
  for (const r of allChartItems) {
    const k = titleKey(r.title);
    const e = releases.get(k) ?? { title: r.title, credit: r.credit, certs: 0, entries: 0 };
    e.entries += r.entries.length;
    e.credit ??= r.credit;
    releases.set(k, e);
  }

  for (const r of releases.values()) {
    const own = pathFor(r.title);
    const where = own ?? (r.certs >= r.entries ? "/certifications" : "/records/charts");
    const bits: string[] = [];
    if (r.certs) bits.push(`${r.certs} certification${r.certs === 1 ? "" : "s"}`);
    if (r.entries) bits.push(`${r.entries} chart entr${r.entries === 1 ? "y" : "ies"}`);
    add({
      title: r.title,
      path: where,
      section: "Release",
      description: `${r.credit ? `${r.credit} — ` : ""}${bits.join(" · ") || "On the record"}.`,
      // The credit carries the collaborators, which is how "coldplay" or
      // "justin bieber" reaches the record they are on.
      keywords: [
        ...(r.credit
          ? r.credit.toLowerCase().split(/[^a-z0-9']+/i).filter((w) => w.length > 2)
          : []),
        "song",
        "release",
      ],
    });
  }

  // ── Award bodies ────────────────────────────────────────────────────────
  for (const c of ceremonies) {
    const wins = c.noms.filter((n) => n.won).length;
    add({
      title: c.name,
      path: "/records/awards",
      section: "Awards",
      description: `${wins} win${wins === 1 ? "" : "s"} from ${c.noms.length} nomination${c.noms.length === 1 ? "" : "s"}.`,
      keywords: ["award", "awards", "ceremony", "won", "nomination"],
    });
  }

  // ── Countries ───────────────────────────────────────────────────────────
  // Certifying countries point at the ledger, charting territories at the chart
  // table. A country in both is listed once, at the ledger.
  const certCountries = new Set(allItems.flatMap((r) => r.certs.map((c) => c.c)));
  const chartCountries = new Set(
    allChartItems
      .flatMap((r) => r.entries.map((e) => e.c))
      .filter((c) => c !== "GLB" && c !== "GLBX")
  );
  for (const code of certCountries) {
    const meta = COUNTRIES[code];
    if (!meta) continue;
    add({
      title: meta.name,
      path: "/certifications",
      section: "Country",
      description: `Certifications awarded in ${meta.name} by ${meta.body}.`,
      keywords: [code.toLowerCase(), "country", "certified", meta.body.toLowerCase()],
    });
  }
  for (const code of chartCountries) {
    if (certCountries.has(code)) continue;
    const meta = CHART_COUNTRIES[code];
    if (!meta) continue;
    add({
      title: meta.name,
      path: "/records/charts",
      section: "Country",
      description: `Chart peaks in ${meta.name} on ${meta.body}.`,
      keywords: [code.toLowerCase(), "country", "chart", "peak", meta.body.toLowerCase()],
    });
  }

  docs.sort((a, b) => a.section.localeCompare(b.section) || a.title.localeCompare(b.title));
  return docs;
}
