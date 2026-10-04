#!/usr/bin/env node
// board-extras.mjs — the few board facts the brief's §1 and Job 2 quote that
// derive.mjs does not print: the top ten, the $1M club, per-artist totals on
// the single-show board, the longest strings in the board's own fields, and the
// phone row's meta line in the owner's 3 Oct form ("Artist · City · Year" for
// every row, his included).
//
//   node docs/design/box-office-by-country/research/board-extras.mjs 2>/dev/null
//
// Reads app/data/tourRevenue.ts directly, like derive.mjs. Report only.
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "../../../..");
const { revenueShows } = await import(pathToFileURL(resolve(repo, "app/data/tourRevenue.ts")).href);
const HIM = "Burna Boy";
const usd = (n) => `$${n.toLocaleString("en-US")}`;
const s = [...revenueShows].sort((a, b) => b.revenue - a.revenue);
const longest = (f) => s.map(f).reduce((a, b) => (b.length > a.length ? b : a), "");
const tix = (r) => Number(String(r.tickets).replace(/,/g, ""));

console.log("## Top ten single shows\n");
console.log("| # | Artist | Venue, city | Year | Tickets | Gross |\n|---|---|---|---|---|---|");
s.slice(0, 10).forEach((r, i) => console.log(`| ${i + 1} | ${r.artist === HIM ? `**${r.artist}**` : r.artist} | ${r.flag} ${r.venue}, ${r.city} | ${r.year} | ${r.tickets} | ${usd(r.revenue)} |`));
const firstOther = s.findIndex((r) => r.artist !== HIM);
console.log(`\n- His shows in the top ten: ${s.slice(0, 10).filter((r) => r.artist === HIM).length}; in the top five: ${s.slice(0, 5).filter((r) => r.artist === HIM).length}.`);
console.log(`- The highest-ranked show that is not his: No. ${firstOther + 1}, ${s[firstOther].artist}, ${s[firstOther].venue} (${s[firstOther].year}), ${usd(s[firstOther].revenue)}.`);
const club = s.filter((r) => r.revenue >= 1e6);
console.log(`- Shows at $1M or more: ${club.length}, of them his: ${club.filter((r) => r.artist === HIM).length}.`);
console.log(`- Scale: biggest ${usd(s[0].revenue)} / smallest ${usd(s.at(-1).revenue)} = ${Math.round(s[0].revenue / s.at(-1).revenue)}×.`);
console.log(`- Tickets per show run from ${Math.min(...s.map(tix)).toLocaleString("en-US")} to ${Math.max(...s.map(tix)).toLocaleString("en-US")}.`);
console.log(`- Years on the board: ${[...new Set(s.map((r) => r.year))].sort().join(", ")}. Distinct tours: ${new Set(s.map((r) => r.tour)).size}.`);

console.log("\n## Per artist, single-show board (the chip counts)\n");
console.log("| Artist | Shows | Gross of those shows | Best show |\n|---|---|---|---|");
const by = new Map();
for (const r of s) { const a = by.get(r.artist) ?? { n: 0, g: 0, best: r }; a.n++; a.g += r.revenue; by.set(r.artist, a); }
[...by].sort((a, b) => b[1].g - a[1].g).forEach(([k, a]) => console.log(`| ${k === HIM ? `**${k}**` : k} | ${a.n} | ${usd(a.g)} | ${usd(a.best.revenue)} · ${a.best.venue}, ${a.best.city} (${a.best.year}) |`));

console.log("\n## Longest strings in the board's own fields\n");
console.log(`- Venue: "${longest((r) => r.venue)}" (${longest((r) => r.venue).length})`);
console.log(`- City: "${longest((r) => r.city)}" (${longest((r) => r.city).length})`);
console.log(`- Tour: "${longest((r) => r.tour ?? "")}" (${longest((r) => r.tour ?? "").length})`);
console.log(`- Artist: "${longest((r) => r.artist)}" (${longest((r) => r.artist).length})`);
const meta = (r) => `${r.artist} · ${r.city} · ${r.year}`;
const hisMeta = s.filter((r) => r.artist === HIM).map(meta).reduce((a, b) => (b.length > a.length ? b : a), "");
console.log(`- Phone meta in the owner's 3 Oct form, "Artist · City · Year", every row: longest "${longest(meta)}" (${longest(meta).length}); longest of his: "${hisMeta}" (${hisMeta.length}).`);
const metaTour = (r) => `${r.artist} · ${r.city} · ${r.tour} · ${r.year}`;
console.log(`- The same with the tour added, every row: longest "${longest(metaTour)}" (${longest(metaTour).length}).`);
