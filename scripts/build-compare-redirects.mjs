// Writes app/data/comparePairRedirects.json: the reverse order of every
// /compare/<a>-vs-<b> pair → its canonical order.
//
// Routing-layer redirects, for the reason next.config.mjs gives for /tour: a
// page calling permanentRedirect() is prerendered, so Next cannot emit an HTTP
// status and serves a meta-refresh with a 200 — the reverse order would look
// like a live page. next.config.mjs cannot import TypeScript, so the list is
// generated here from app/lib/comparePairs.ts and checked in;
// tests/comparePage.test.tsx asserts it is current.
//
//   npx tsx scripts/build-compare-redirects.mjs
import { writeFile } from "node:fs/promises";
import { allPairs } from "../app/lib/comparePairs.ts";

const OUT = new URL("../app/data/comparePairRedirects.json", import.meta.url);
const rows = allPairs().map(([a, b]) => ({
  source: `/compare/${b.slug}-vs-${a.slug}`,
  destination: `/compare/${a.slug}-vs-${b.slug}`,
  permanent: true,
}));
await writeFile(OUT, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.error(`wrote ${rows.length} redirects`);
