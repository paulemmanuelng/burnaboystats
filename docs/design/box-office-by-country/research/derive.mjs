#!/usr/bin/env node
// derive.mjs — recompute, independently, every figure the box-office pages show
// (/records/tours/revenue and /records/tours/revenue/countries) from the data
// file itself, so the design brief never quotes a number nobody re-derived.
//
//   node docs/design/box-office-by-country/research/derive.mjs          # markdown
//   node docs/design/box-office-by-country/research/derive.mjs --json   # raw JSON
//
// Reads app/data/tourRevenue.ts and app/data/performedCountries.ts directly
// (Node 24 strips the TypeScript types; neither file imports anything). It does
// NOT import app/lib/revenueByCountry.ts: the point is a second, separate count.
// The rules it follows are the page's, as the owner ruled them (3 Oct 2026):
//
//   - an artist LEADS a country by TOTAL reported gross there: every single
//     show plus every multi-night run (a run is one combined figure);
//   - NIGHTS: one per single show, plus every night of a run;
//   - BEST NIGHT: single shows only — a run never stands in for one night;
//   - ranking inside a country: total, then best single night, then name;
//   - countries ranked by total, then name; continents by total, then the
//     page's continent order; Africa is listed even when empty.
//
// A flag the script does not know throws, as the page's own lib does.

import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "../../../..");
const { revenueShows, revenueStands, REVENUE_AS_OF } = await import(pathToFileURL(resolve(repo, "app/data/tourRevenue.ts")).href);
const { performedCountries } = await import(pathToFileURL(resolve(repo, "app/data/performedCountries.ts")).href);

const HIM = "Burna Boy";
const CONTINENT_ORDER = ["Africa", "Europe", "North America", "South America", "Asia", "Oceania"];
// The tour map's seven regions on six continents (the Caribbean folds into North America).
const CONTINENT_OF_REGION = {
  Africa: "Africa", Europe: "Europe", Asia: "Asia", "North America": "North America",
  "South America": "South America", Caribbean: "North America", Oceania: "Oceania",
};
// Board countries he has never played: the page's lib names these from its chart
// list or its own map (OUTSIDE_HIS_MAP). Mirrored here; an unknown flag throws.
const OUTSIDE = { "🇯🇵": ["Japan", "Asia"], "🇸🇬": ["Singapore", "Asia"], "🇵🇭": ["Philippines", "Asia"] };

function countryOf(flag) {
  const p = performedCountries.find((c) => c.flag === flag);
  if (p) return { flag, name: p.name, continent: CONTINENT_OF_REGION[p.region] };
  if (OUTSIDE[flag]) return { flag, name: OUTSIDE[flag][0], continent: OUTSIDE[flag][1] };
  throw new Error(`derive.mjs: no country for flag ${flag}`);
}

// ── Formatting, the page's own forms ─────────────────────────────────────────
const usdFull = (n) => `$${n.toLocaleString("en-US")}`;
const usdM = (n) => `$${(n / 1e6).toFixed(2)}M`; // countries page (both layouts)
const compactGross = (n) => (n >= 1e6 ? `$${(n / 1e6).toFixed(3)}M` : `$${(n / 1e3).toFixed(1)}K`); // revenue phone board
const nights = (n) => `${n} ${n === 1 ? "night" : "nights"}`;
const pct = (a, b) => `${((a / b) * 100).toFixed(1)}%`;
const toInt = (s) => (s ? Number(String(s).replace(/,/g, "")) : null);

// ── Rows ─────────────────────────────────────────────────────────────────────
const rows = [
  ...revenueShows.map((s) => ({ kind: "show", s })),
  ...revenueStands.map((s) => ({ kind: "run", s })),
];

function totals(rs) {
  const by = new Map();
  for (const { kind, s } of rs) {
    const a = by.get(s.artist) ?? { artist: s.artist, his: s.artist === HIM, total: 0, nights: 0, singles: 0, best: null, runs: [], tickets: 0, ticketsKnown: true };
    by.set(s.artist, a);
    a.total += s.revenue;
    const t = toInt(s.tickets);
    if (t === null) a.ticketsKnown = false; else a.tickets += t;
    if (kind === "show") {
      a.nights += 1;
      a.singles += 1;
      if (!a.best || s.revenue > a.best.revenue) a.best = { venue: s.venue, city: s.city, year: s.year, revenue: s.revenue, tickets: s.tickets };
    } else {
      a.nights += s.shows;
      a.runs.push({ venue: s.venue, city: s.city, dates: s.dates, nights: s.shows, revenue: s.revenue, tickets: s.tickets, tour: s.tour });
    }
  }
  return [...by.values()].sort((x, y) => y.total - x.total || (y.best?.revenue ?? 0) - (x.best?.revenue ?? 0) || x.artist.localeCompare(y.artist));
}

const byFlag = new Map();
for (const r of rows) byFlag.set(r.s.flag, [...(byFlag.get(r.s.flag) ?? []), r]);

const countries = [...byFlag.entries()]
  .map(([flag, rs]) => {
    const artists = totals(rs);
    return {
      ...countryOf(flag),
      total: artists.reduce((n, a) => n + a.total, 0),
      nights: artists.reduce((n, a) => n + a.nights, 0),
      singles: rs.filter((r) => r.kind === "show").length,
      runs: rs.filter((r) => r.kind === "run").map((r) => r.s),
      cities: [...new Set(rs.map((r) => r.s.city))],
      artists,
      leader: artists[0],
    };
  })
  .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));

const continents = CONTINENT_ORDER.map((k) => {
  const cs = countries.filter((c) => c.continent === k);
  const artists = totals(rows.filter((r) => cs.some((c) => c.flag === r.s.flag)));
  return { continent: k, total: cs.reduce((n, c) => n + c.total, 0), nights: cs.reduce((n, c) => n + c.nights, 0), countries: cs, artists, leader: artists[0] ?? null };
}).sort((a, b) => b.total - a.total || CONTINENT_ORDER.indexOf(a.continent) - CONTINENT_ORDER.indexOf(b.continent));

const grandTotal = countries.reduce((n, c) => n + c.total, 0);
const nightCount = countries.reduce((n, c) => n + c.nights, 0);
const withData = continents.filter((k) => k.countries.length > 0);
const hisLeads = countries.filter((c) => c.leader.his).length;

// ── The revenue board (single shows only) ───────────────────────────────────
const board = {
  asOf: REVENUE_AS_OF,
  singleShows: revenueShows.length,
  his: revenueShows.filter((s) => s.artist === HIM).length,
  others: revenueShows.filter((s) => s.artist !== HIM).length,
  top: revenueShows[0],
  hisGross: revenueShows.filter((s) => s.artist === HIM).reduce((n, s) => n + s.revenue, 0),
  allGross: revenueShows.reduce((n, s) => n + s.revenue, 0),
  byArtist: Object.entries(revenueShows.reduce((acc, s) => ((acc[s.artist] = (acc[s.artist] ?? 0) + 1), acc), {})).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  noHeadcount: revenueShows.filter((s) => !s.tickets).length,
  sortedOk: revenueShows.every((s, i) => i === 0 || revenueShows[i - 1].revenue >= s.revenue),
  over1M: revenueShows.filter((s) => s.revenue >= 1e6).length,
  smallest: revenueShows[revenueShows.length - 1],
  runs: revenueStands,
};
// Phone labels that collide between neighbouring rows of different gross.
const collide = (fmt, list) => list.flatMap((s, i) => (i && fmt(list[i - 1].revenue) === fmt(s.revenue) && list[i - 1].revenue !== s.revenue ? [[i, fmt(s.revenue)]] : []));
board.usdMCollisions = collide(usdM, revenueShows).length;
board.compactCollisions = collide(compactGross, revenueShows).length;

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ board, grandTotal, nightCount, hisLeads, continents, countries }, null, 2));
  process.exit(0);
}

// ── Markdown ─────────────────────────────────────────────────────────────────
const out = [];
const p = (s = "") => out.push(s);
const names = (xs) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);

p(`## 1. Headline figures`);
p();
p(`| Figure | Value | Rule |`);
p(`|---|---|---|`);
p(`| Single shows on the board | **${board.singleShows}** | \`revenueShows.length\` |`);
p(`| Multi-night runs | **${revenueStands.length}** (${revenueStands.reduce((n, s) => n + s.shows, 0)} nights) | \`revenueStands\` |`);
p(`| Nights, all told | **${nightCount}** | singles + every night of a run |`);
p(`| Countries | **${countries.length}** | distinct flags across shows and runs |`);
p(`| Continents with reported box office | **${withData.length}** of ${CONTINENT_ORDER.length} (${names(withData.map((k) => k.continent))}) | Africa, South America have none |`);
p(`| Countries Burna Boy leads | **${hisLeads} of ${countries.length}** | leader = biggest total |`);
p(`| Countries someone else leads | ${countries.filter((c) => !c.leader.his).map((c) => `${c.name} (${c.leader.artist})`).join(", ")} | |`);
p(`| Grand total, every reported gross | **${usdFull(grandTotal)}** (${usdM(grandTotal)}) | shows + runs |`);
p(`| His share of the grand total | ${usdFull(countries.reduce((n, c) => n + (c.artists.find((a) => a.his)?.total ?? 0), 0))} = ${pct(countries.reduce((n, c) => n + (c.artists.find((a) => a.his)?.total ?? 0), 0), grandTotal)} | |`);
p(`| Board last re-read | ${board.asOf} | \`REVENUE_AS_OF\` |`);
p();
p(`The page's own summary sentence, rebuilt with its rule: "${board.singleShows} single shows and ${revenueStands.length} multi-night runs (${nightCount} nights) in ${countries.length} countries on ${withData.length} continents. Burna Boy leads ${hisLeads} of the ${countries.length}."`);
p();

p(`## 2. Continents (ranked as the page ranks them)`);
p();
p(`| # | Continent | Total | Nights | Countries | Leader · leader's total (share) | Runner-up · total | Artists |`);
p(`|---|---|---|---|---|---|---|---|`);
continents.forEach((k, i) => {
  if (!k.countries.length) {
    p(`| ${i + 1} | ${k.continent} | — | 0 | 0 | **No reported box office yet** | — | 0 |`);
    return;
  }
  const r = k.artists[1];
  p(`| ${i + 1} | ${k.continent} | ${usdFull(k.total)} (${usdM(k.total)}) | ${k.nights} | ${k.countries.length} (${k.countries.map((c) => c.name).join(", ")}) | ${k.leader.his ? "**" + k.leader.artist + "**" : k.leader.artist} · ${usdM(k.leader.total)} of ${usdM(k.total)} (${pct(k.leader.total, k.total)}) | ${r ? `${r.artist} · ${usdM(r.total)}` : "the only artist reported"} | ${k.artists.length} |`);
});
p();
p(`Every artist per continent (total · nights):`);
p();
for (const k of withData) p(`- **${k.continent}**: ${k.artists.map((a) => `${a.artist} ${usdM(a.total)} · ${nights(a.nights)}`).join("; ")}`);
p();

p(`## 3. Countries (ranked as the page ranks them)`);
p();
p(`| # | Flag | Country | Continent | Total | Nights | Leader | Leader's total of country's (share) | Leader's best single night | Artists |`);
p(`|---|---|---|---|---|---|---|---|---|---|`);
countries.forEach((c, i) => {
  const L = c.leader;
  const best = L.best ? `${usdFull(L.best.revenue)} · ${L.best.venue}, ${L.best.city} (${L.best.year})${L.best.tickets ? ` · ${L.best.tickets} tickets` : ""}` : "none (runs only)";
  p(`| ${i + 1} | ${c.flag} | ${c.name} | ${c.continent} | ${usdFull(c.total)} | ${c.nights} | ${L.his ? "**" + L.artist + "**" : L.artist} | ${c.artists.length === 1 ? `only artist · ${usdM(L.total)}` : `${usdM(L.total)} of ${usdM(c.total)} (${pct(L.total, c.total)})`} | ${best} | ${c.artists.length} |`);
});
p();

p(`## 4. Every country, in full`);
p();
p(`Each artist row: rank · artist · total (full) · page label (\`usdM\`) · nights · best single night · runs in the total. **Bold** = Burna Boy (gold on the page).`);
p();
for (const c of countries) {
  p(`### ${c.flag} ${c.name} — ${c.continent}`);
  p();
  p(`Total ${usdFull(c.total)} (${usdM(c.total)}) · ${nights(c.nights)} (${c.singles} single ${c.singles === 1 ? "show" : "shows"}${c.runs.length ? ` + ${c.runs.length} ${c.runs.length === 1 ? "run" : "runs"}` : ""}) · ${c.artists.length} ${c.artists.length === 1 ? "artist" : "artists"} · cities: ${c.cities.join(" · ")}`);
  p();
  p(`| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |`);
  p(`|---|---|---|---|---|---|---|`);
  c.artists.forEach((a, i) => {
    const best = a.best ? `${usdFull(a.best.revenue)} · ${a.best.venue}, ${a.best.city} (${a.best.year})${a.best.tickets ? ` · ${a.best.tickets} tickets` : ""}` : "— (every reported night was in a run)";
    const runs = a.runs.length ? a.runs.map((r) => `${r.venue}, ${r.city} · ${r.dates} · ${r.nights} nights · ${usdFull(r.revenue)} · ${r.tickets} tickets`).join("<br>") : "—";
    p(`| ${String(i + 1).padStart(2, "0")} | ${a.his ? "**" + a.artist + "**" : a.artist} | ${usdFull(a.total)} | ${usdM(a.total)} | ${a.nights} | ${best} | ${runs} |`);
  });
  p();
}

p(`## 5. Multi-night runs (\`revenueStands\`), and where each lands`);
p();
p(`| Run | Artist | Tour | Dates | Nights | Gross | Tickets | Where its total would rank among single shows | Country it adds to |`);
p(`|---|---|---|---|---|---|---|---|---|`);
// No per-night average: the owner's rule is that no per-night split is invented
// for a run, so the brief does not compute one either.
for (const r of revenueStands) {
  const rank = revenueShows.filter((s) => s.revenue > r.revenue).length + 1;
  p(`| ${r.flag} ${r.venue}, ${r.city} | ${r.artist === HIM ? "**" + r.artist + "**" : r.artist} | ${r.tour} | ${r.dates} | ${r.shows} | ${usdFull(r.revenue)} | ${r.tickets} | would be No. ${rank} | ${countryOf(r.flag).name} |`);
}
p();

p(`## 6. The revenue board's own facts (phone hero, desktop lede, chips)`);
p();
p(`| Fact | Value |`);
p(`|---|---|`);
p(`| Shows on the board | ${board.singleShows} |`);
p(`| His | ${board.his} (${pct(board.his, board.singleShows)} of the shows) |`);
p(`| Everyone else's | ${board.others} |`);
p(`| "more than every other artist on this list combined" prints? | ${board.his > board.others ? "yes" : "**no** — " + board.his + " is not more than " + board.others} |`);
p(`| His share of the board's gross | ${usdFull(board.hisGross)} of ${usdFull(board.allGross)} = ${pct(board.hisGross, board.allGross)} |`);
p(`| No. 1 | ${board.top.artist} · ${board.top.venue}, ${board.top.city} (${board.top.year}) · ${usdFull(board.top.revenue)} (${usdM(board.top.revenue)}) · ${board.top.tickets} tickets |`);
p(`| Smallest | ${board.smallest.artist} · ${board.smallest.venue}, ${board.smallest.city} (${board.smallest.year}) · ${usdFull(board.smallest.revenue)} · ${board.smallest.tickets} tickets |`);
p(`| Shows at $1M or more | ${board.over1M} |`);
p(`| Rows with no headcount | ${board.noHeadcount} |`);
p(`| Board sorted by gross | ${board.sortedOk ? "yes" : "NO"} |`);
p(`| Shows per artist (desktop chip counts) | ${board.byArtist.map(([a, n]) => `${a} ${n}`).join(" · ")} |`);
p(`| Neighbouring rows whose \`usdM\` labels collide ($X.XXM) | ${board.usdMCollisions} |`);
p(`| Neighbouring rows whose \`compactGross\` labels collide (the phone board's) | ${board.compactCollisions} |`);
p();

// The board's hero copy, rebuilt with the page's own rules (app/records/tours/
// revenue/page.tsx and app/lib/homeData.ts numberWord), so the brief quotes the
// strings the screen prints today.
const WORDS = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"];
const TENS = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
const numberWord = (n) => (n <= 20 ? WORDS[n] : n % 10 === 0 ? TENS[Math.floor(n / 10)] : `${TENS[Math.floor(n / 10)]}-${WORDS[n % 10].toLowerCase()}`);
const topM = usdM(board.top.revenue);
p(`The board's hero, as the screens print it today:`);
p();
p(`| Where | Text |`);
p(`|---|---|`);
p(`| Phone top-bar badge | \`${topM}\` (the No. 1 gross) |`);
p(`| Phone lede | "${numberWord(board.singleShows)} documented shows by African artists, ranked by gross — ${board.his} of them his." |`);
p(`| Phone stat grid | \`${topM}\` BIGGEST NIGHT · \`${board.top.tickets ?? "—"}\` TICKETS, ${board.top.city.toUpperCase()} |`);
p(`| Phone chips | ALL ${board.singleShows} · BURNA BOY ${board.his} · OTHERS ${board.others} |`);
p(`| Desktop lede | "Every reported single-show gross by an African artist we have verified — ${board.singleShows} shows, ranked. Burna Boy holds ${board.his} of them${board.his > board.others ? " — more than every other artist on this list combined" : ""}." |`);
p(`| Countries page lede (both layouts) | "Every reported box-office gross by an African artist, added up country by country — ${board.singleShows} single shows and ${revenueStands.length} multi-night runs (${nightCount} nights) in ${countries.length} countries on ${withData.length} continents. Burna Boy leads ${hisLeads} of the ${countries.length}." |`);
p(`| Countries page phone stat grid | \`${hisLeads} of ${countries.length}\` COUNTRIES HE LEADS · \`${nightCount}\` REPORTED NIGHTS |`);
p(`| Countries page phone top-bar badge | \`${countries.length} countries\` |`);
p();

// ── 7. Edge cases the design must hold ──────────────────────────────────────
// The page's own line builders, reproduced word for word from
// app/lib/revenueByCountry.ts as #405 ships it after its merge with main (the
// reader-facing word is "run", not "stand"), so the longest strings are the
// real ones.
const runsLine = (runs) =>
  `${runs.reduce((n, s) => n + s.nights, 0)} nights in ${runs.length} runs, each reported together · ${runs.map((s) => `${s.venue}, ${s.city}`).join("; ")}`;
const leaderLine = (c) =>
  c.artists.length === 1
    ? `· the only artist reported · ${usdM(c.total)} · ${nights(c.nights)}`
    : `leads · ${usdM(c.leader.total)} of ${usdM(c.total)} · ${nights(c.nights)} reported`;
const bestNightLine = (a) => {
  if (a.best) return `Best night ${usdM(a.best.revenue)} · ${a.best.venue}, ${a.best.city} (${a.best.year})`;
  const st = a.runs[0];
  return a.runs.length === 1 ? `${st.nights} nights reported together · ${st.venue}, ${st.city} (${st.dates})` : runsLine(a.runs);
};
const runNote = (a) => {
  if (!a.best || a.runs.length === 0) return null;
  const n = a.runs.reduce((k, s) => k + s.nights, 0);
  return a.runs.length === 1 ? `Total includes a ${n}-night run at ${a.runs[0].venue} reported as one figure` : `Total includes ${runsLine(a.runs)}`;
};

const artistRows = countries.flatMap((c) => c.artists.map((a) => ({ c, a })));
const longest = (xs, f) => xs.map((x) => ({ x, s: f(x) })).filter((y) => y.s).sort((p1, p2) => p2.s.length - p1.s.length)[0];
const lBest = longest(artistRows, ({ a }) => bestNightLine(a));
const lPhone = longest(artistRows, ({ a }) => bestNightLine(a) + (runNote(a) ? `. ${runNote(a)}` : ""));
const lLead = longest(countries, (c) => `${c.leader.artist} ${leaderLine(c)}`);
const lVenue = longest(artistRows.filter(({ a }) => a.best), ({ a }) => a.best.venue);
const lCity = longest(revenueShows, (s) => s.city);
const lArtist = longest(artistRows, ({ a }) => a.artist);
const lCountry = longest(countries, (c) => c.name);
const allRuns = (a) => a.runs.reduce((n, r) => n + r.revenue, 0);
const countryBestNight = (c) => c.artists.filter((a) => a.best).sort((x, y) => y.best.revenue - x.best.revenue)[0];
const labelCollisions = countries.flatMap((c) => c.artists.flatMap((a, i) => (i && usdM(c.artists[i - 1].total) === usdM(a.total) ? [`${c.name}: ${c.artists[i - 1].artist} / ${a.artist} both ${usdM(a.total)}`] : [])));
const venueShared = Object.entries(
  rows.reduce((acc, { s }) => ((acc[`${s.venue}, ${s.city}`] = [...new Set([...(acc[`${s.venue}, ${s.city}`] ?? []), s.artist])]), acc), {})
).filter(([, as]) => as.length > 1);

p(`## 7. Edge cases (computed)`);
p();
p(`| Case | What the data holds today |`);
p(`|---|---|`);
p(`| One-artist countries | ${countries.filter((c) => c.artists.length === 1).map((c) => `${c.flag} ${c.name} (${c.leader.artist}, ${usdM(c.total)})`).join(" · ")} — the leader line reads "· the only artist reported · …" and there is no runner-up |`);
p(`| One-artist continent | ${withData.filter((k) => k.artists.length === 1).map((k) => `${k.continent} (${k.leader.artist}, ${k.countries.length} countries)`).join(" · ") || "none"} — the card's runner line reads "The only artist reported" and has no "of $X" |`);
p(`| Leader whose total is mostly runs | ${countries.filter((c) => allRuns(c.leader) > 0).map((c) => `${c.name}: ${c.leader.artist} ${usdFull(c.leader.total)}, of which runs ${usdFull(allRuns(c.leader))} (${pct(allRuns(c.leader), c.leader.total)}); without the runs he would have ${usdFull(c.leader.total - allRuns(c.leader))} and ${c.artists[1].artist}'s ${usdFull(c.artists[1].total)} would ${c.leader.total - allRuns(c.leader) > c.artists[1].total ? "still trail" : "lead"}`).join(" · ")} |`);
p(`| Leader whose best night is NOT the country's best night | ${countries.filter((c) => c.leader.best && countryBestNight(c) && countryBestNight(c).artist !== c.leader.artist).map((c) => `${c.name}: leader ${c.leader.artist}'s best single night ${usdFull(c.leader.best.revenue)} (${c.leader.best.venue}) < ${countryBestNight(c).artist}'s ${usdFull(countryBestNight(c).best.revenue)} (${countryBestNight(c).best.venue})`).join(" · ") || "none"} |`);
p(`| Artist with no single night in a country (runs only) | ${artistRows.filter(({ a }) => !a.best).map(({ c, a }) => `${c.name}: ${a.artist} (row reads "Nights reported together")`).join(" · ") || "none"} |`);
p(`| Artist with a run AND single nights | ${artistRows.filter(({ a }) => a.best && a.runs.length).map(({ c, a }) => `${c.name}: ${a.artist} — ${a.runs.length} runs + ${a.singles} single nights`).join(" · ") || "none"} |`);
p(`| Narrowest lead | ${[...countries].filter((c) => c.artists.length > 1).sort((x, y) => x.leader.total / x.total - y.leader.total / y.total)[0].name} (${pct([...countries].filter((c) => c.artists.length > 1).sort((x, y) => x.leader.total / x.total - y.leader.total / y.total)[0].leader.total, [...countries].filter((c) => c.artists.length > 1).sort((x, y) => x.leader.total / x.total - y.leader.total / y.total)[0].total)} of the country) |`);
p(`| Most artists in one country | ${[...countries].sort((x, y) => y.artists.length - x.artists.length)[0].name} (${[...countries].sort((x, y) => y.artists.length - x.artists.length)[0].artists.length}) |`);
p(`| Most nights in one country | ${countries[0].name} ${countries[0].nights}; most nights by one artist in one country: ${[...artistRows].sort((x, y) => y.a.nights - x.a.nights).slice(0, 2).map(({ c, a }) => `${a.artist} in ${c.name}, ${a.nights}`).join("; ")} |`);
p(`| Many nights, small total | ${artistRows.filter(({ a }) => a.nights >= 3 && a.total < 1.5e6).map(({ c, a }) => `${a.artist} in ${c.name}: ${nights(a.nights)}, ${usdFull(a.total)}`).join(" · ")} |`);
p(`| Biggest / smallest country total | ${countries[0].name} ${usdFull(countries[0].total)} / ${countries[countries.length - 1].name} ${usdFull(countries[countries.length - 1].total)} (a ${Math.round(countries[0].total / countries[countries.length - 1].total)}× spread) |`);
p(`| Biggest / smallest artist total in a country | ${(() => { const s = [...artistRows].sort((x, y) => y.a.total - x.a.total); return `${s[0].a.artist} in ${s[0].c.name} ${usdFull(s[0].a.total)} / ${s[s.length - 1].a.artist} in ${s[s.length - 1].c.name} ${usdFull(s[s.length - 1].a.total)} (label ${usdM(s[s.length - 1].a.total)})`; })()} |`);
p(`| Biggest / smallest best night | ${(() => { const s = artistRows.filter(({ a }) => a.best).sort((x, y) => y.a.best.revenue - x.a.best.revenue); return `${usdFull(s[0].a.best.revenue)} (${s[0].a.best.venue}) / ${usdFull(s[s.length - 1].a.best.revenue)} (${s[s.length - 1].a.artist}, ${s[s.length - 1].a.best.venue}; label ${usdM(s[s.length - 1].a.best.revenue)})`; })()} |`);
p(`| Totals that print below $1M as "$0.xxM" (artist rows) | ${artistRows.filter(({ a }) => a.total < 1e6).length} of ${artistRows.length} |`);
p(`| Neighbouring artist rows in one country with the same \`usdM\` label | ${labelCollisions.join(" · ") || "none today"} |`);
p(`| Same venue, more than one artist | ${venueShared.map(([v, as]) => `${v} (${as.join(", ")})`).join(" · ")} |`);
p(`| Continents with no reported box office | ${continents.filter((k) => !k.countries.length).map((k) => k.continent).join(", ")} — the page prints the Africa card only; South America is not printed anywhere |`);
p(`| Longest country name | ${lCountry.s} (${lCountry.s.length} chars) |`);
p(`| Longest artist name | ${lArtist.s} (${lArtist.s.length} chars) |`);
p(`| Longest best-night venue | ${lVenue.s} (${lVenue.s.length} chars) |`);
p(`| Longest city | ${lCity.s} (${lCity.s.length} chars) |`);
p(`| Longest leader line (name + line) | "${lLead.s}" (${lLead.s.length} chars) |`);
p(`| Longest best-night line | "${lBest.s}" (${lBest.s.length} chars; ${lBest.x.a.artist}, ${lBest.x.c.name}) |`);
p(`| Longest phone meta line (best night + run note) | "${lPhone.s}" (${lPhone.s.length} chars; ${lPhone.x.a.artist}, ${lPhone.x.c.name}) |`);
p();
p(`Every leader line and best-night line, as the page builds them:`);
p();
for (const c of countries) {
  p(`- ${c.flag} **${c.name}** — "${c.leader.artist} ${leaderLine(c)}"`);
  for (const a of c.artists) p(`  - ${a.artist}: "${bestNightLine(a)}"${runNote(a) ? ` + "${runNote(a)}"` : ""}`);
}
p();

console.log(out.join("\n"));
