// Writes app/data/downloadRedirects.json: /<file>.csv → the path the file is
// published at (/api/v1/<file>.csv), one per download in app/lib/dataDownloads.ts.
//
// Search Console listed /chart-peaks.csv and /awards.csv among its 404s on
// 18 Nov 2026 (docs/ops/seo-review-2026-11-18.md): the CSVs live under
// /api/v1, and nothing answered at the root. Every download gets one, so a
// file added there is covered the day it ships. next.config.mjs cannot import
// TypeScript, so the list is generated here and checked in, like
// comparePairRedirects.json; tests/strayUrlRedirects.test.ts asserts it is
// current.
//
//   npx tsx scripts/build-download-redirects.mjs
import { writeFile } from "node:fs/promises";
import { DATA_DOWNLOADS } from "../app/lib/dataDownloads.ts";

const OUT = new URL("../app/data/downloadRedirects.json", import.meta.url);
const rows = DATA_DOWNLOADS.map((d) => ({ source: `/${d.slug}.csv`, destination: d.path, permanent: true }));
await writeFile(OUT, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.error(`wrote ${rows.length} redirects`);
