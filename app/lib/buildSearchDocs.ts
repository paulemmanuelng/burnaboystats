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

import { allItems, albums as certAlbums, COUNTRIES } from "../data/certifications";
import { albumCharts, allChartItems, CHART_COUNTRIES } from "../data/charts";
import { ceremonies } from "../data/awards";
import { songs } from "../data/songs";
import { albumPages } from "../data/albumPages";
import { garage } from "../data/cars";
import { titleKey } from "./titleKey";
import { allPairs, pairSlug } from "./comparePairs";
import { certCountryCodes, countrySlug, priceCountry } from "./certCountry";
import type { SearchDoc } from "./searchIndex";

export function buildSearchDocs(): SearchDoc[] {
  const songSlug = new Map(songs.map((s) => [titleKey(s.title), s.slug]));
  const albumSlug = new Map(albumPages.map((a) => [titleKey(a.title), a.slug]));

  /** A release's own page, when it has one — an album's among the album
   *  pages, a single's among the song pages. "No Sign of Weakness" is both an
   *  album and (since 23 Sep 2026) a certified title track, and a title-only
   *  lookup folded the track's plaque into the album's entry. */
  const pathFor = (title: string, album: boolean): string | null => {
    const k = titleKey(title);
    if (album) return albumSlug.has(k) ? `/music/albums/${albumSlug.get(k)}` : null;
    return songSlug.has(k) ? `/music/${songSlug.get(k)}` : null;
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
  // Keyed by kind AND title, so an album and its title track stay two records.
  type Agg = { title: string; credit?: string; album: boolean; certs: number; entries: number };
  const releases = new Map<string, Agg>();
  const certAlbum = new Set<unknown>(certAlbums);
  const chartAlbum = new Set<unknown>(albumCharts);
  const aggFor = (title: string, credit: string | undefined, album: boolean) => {
    const k = `${album ? "album" : "track"}|${titleKey(title)}`;
    const e = releases.get(k) ?? { title, credit, album, certs: 0, entries: 0 };
    e.credit ??= credit;
    releases.set(k, e);
    return e;
  };
  for (const r of allItems) aggFor(r.title, r.credit, certAlbum.has(r)).certs += r.certs.length;
  for (const r of allChartItems) aggFor(r.title, r.credit, chartAlbum.has(r)).entries += r.entries.length;

  for (const r of releases.values()) {
    const own = pathFor(r.title, r.album);
    const where = own ?? (r.certs >= r.entries ? "/certifications" : "/records/charts");
    const bits: string[] = [];
    if (r.certs) bits.push(`${r.certs} certification${r.certs === 1 ? "" : "s"}`);
    if (r.entries) bits.push(`${r.entries} chart entr${r.entries === 1 ? "y" : "ies"}`);
    // Two results share the title when a track is named after its album; say
    // which one this is.
    const titleTrack = !r.album && releases.has(`album|${titleKey(r.title)}`);
    add({
      title: r.title,
      path: where,
      section: "Release",
      description: `${titleTrack ? "The title track — " : ""}${r.credit ? `${r.credit} — ` : ""}${bits.join(" · ") || "On the record"}.`,
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

  // ── Cars ────────────────────────────────────────────────────────────────
  // Each current car has a page. Names and paths only — the value lives on
  // the page. The make and the slug's words are what a query is likely to be.
  for (const c of garage) {
    add({
      title: `${c.make} ${c.model}`,
      path: `/records/cars/${c.slug}`,
      section: "Car",
      description: "In Burna Boy's garage — its page: illustration, reported value and specifications.",
      keywords: [c.make.toLowerCase(), ...c.slug.split("-"), "car", "garage"],
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

  // ── Head to head ────────────────────────────────────────────────────────
  // Every pairing that has a page under /compare — not only the curated nine,
  // which left "burna boy vs davido" returning nothing (17 Sep 2026).
  for (const [x, y] of allPairs()) {
    add({
      title: `${x.name} vs ${y.name}`,
      path: `/compare/${pairSlug(x, y)}`,
      section: "Compare",
      description: `${x.name} against ${y.name} by certified units — every plaque priced at its own body's threshold, country by country.`,
      keywords: [x.name.toLowerCase(), y.name.toLowerCase(), "vs", "versus", "compare", "certified units", "head to head", "who has more"],
    });
  }

  // ── Certified units, market by market ───────────────────────────────────
  // "certified units in canada" found nothing: the country docs above point at
  // the CHART table, which is a different question about the same place.
  for (const code of certCountryCodes()) {
    const board = priceCountry(code);
    add({
      title: `Certified units in ${board.name}`,
      path: `/compare/in/${countrySlug(code)}`,
      section: "Compare",
      description: `Every Afrobeats plaque awarded in ${board.name}, priced at ${board.body}'s own thresholds and ranked by artist.`,
      keywords: [
        board.name.toLowerCase(),
        code.toLowerCase(),
        board.body.toLowerCase(),
        "certified units",
        "certifications",
        `certifications in ${board.name.toLowerCase()}`,
        "plaques",
        "by country",
      ],
    });
  }

  docs.sort((a, b) => a.section.localeCompare(b.section) || a.title.localeCompare(b.title));
  return docs;
}
