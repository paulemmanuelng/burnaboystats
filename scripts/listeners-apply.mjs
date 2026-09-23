// Apply a "Where the world listens" reading to app/data/listeners.ts.
//
// WHY THIS EXISTS. The top-50 cities are HAND-READ, and deliberately so: the
// source is ChartMasters' Artist Global Impact tool, behind a member login on
// a fan's shared account that must never be automated from CI. But hand-read
// does not have to mean hand-EDITED — retyping fifty rows is where a digit
// goes wrong, and it is why a page that should be re-read monthly can sit for
// a season instead. Reading stays a person's job; the transcription is this
// script's.
//
// HOW TO REFRESH (the whole procedure):
//   1. Open chartmasters.org/artists-global-performance/?artist_id=<spotify id>
//      in the site's own browser, signed in.
//   2. Run scripts/listeners-apply.mjs --snippet and paste the result into the
//      console; save its output as
//      docs/sourcing/chartmasters/reads/<YYYY-MM-DD>-cities.json.
//   3. node scripts/listeners-apply.mjs docs/sourcing/chartmasters/reads/<date>-cities.json
//   4. npm run verify
//
// WHAT IT REFUSES TO DO. It will not write a reading that is not 50 rows, not
// strictly descending, carries a zero, disagrees with its own countriesInTop50,
// or names a city whose coordinates this file has never seen — a city entering
// the top 50 needs a lon/lat and an ISO code chosen by a person, and guessing
// one would put a marker in the sea. In each case it prints what is wrong and
// writes nothing.
//
// Geography is CARRIED OVER, never re-derived: each city keeps the lon, lat,
// ISO code, numeric id and flag it already had, because those were fitted
// against the map's own projection (tests/listeners.test.ts checks every
// marker lands inside its country's shape).

import { readFileSync, writeFileSync } from "node:fs";

const DATA = "app/data/listeners.ts";
const args = process.argv.slice(2);
// An unknown flag is a REFUSAL, not a shrug. `--dry-rn` used to be discarded
// silently, which turned a check into a live rewrite of published data.
const KNOWN = new Set(["--dry-run", "--snippet", "--force"]);
const unknownFlags = args.filter((a) => a.startsWith("--") && !KNOWN.has(a));
if (unknownFlags.length) {
  console.error(`unknown flag: ${unknownFlags.join(" ")}\nknown flags: ${[...KNOWN].join(" ")}`);
  process.exit(2);
}
const DRY = args.includes("--dry-run");
const FORCE = args.includes("--force");

if (args.includes("--snippet")) {
  console.log(`Run this in the Artist Global Impact page (javascript_tool / DevTools console):

(() => {
  const tb = document.querySelector('table');
  const cities = [...tb.rows].slice(1).map(r => {
    const c = [...r.cells].map(x => x.innerText.trim());
    // The listener count is the LAST cell: a sparkline cell sits before it,
    // and reading cell 3 returns "-" for every row.
    return { rank: Number(c[0]), country: c[1], city: c[2], listeners: Number(c[c.length - 1].replace(/[^\\d]/g, '')) };
  });
  const t = document.body.innerText;
  const m = t.match(/Global Ranking: #(\\d+)[\\s\\S]*?come from (\\d+) countries[\\s\\S]*?Popularity Rating: (\\d+)\\/100[\\s\\S]*?Followers: ([\\d,]+)[\\s\\S]*?Monthly Listeners: ([\\d,]+) \\(Trend: (-?[\\d,]+)\\)/);
  const n = s => Number(String(s).replace(/,/g, ''));
  return JSON.stringify({
    readOn: new Date().toISOString().slice(0, 10),
    source: "ChartMasters — Artist Global Impact: Spotify Insights, read signed in, in the site's own browser",
    artist: "Burna Boy", spotifyId: "3wcj11K77LjEY1PkEazffa",
    globalRanking: n(m[1]), popularity: n(m[3]), followers: n(m[4]),
    monthlyListeners: n(m[5]), monthlyListenersTrend: n(m[6]), countriesInTop50: n(m[2]), cities,
  });
})()`);
  process.exit(0);
}

const file = args.find((a) => !a.startsWith("--"));
if (!file) {
  console.error("usage: node scripts/listeners-apply.mjs [--dry-run] <capture.json>\n       node scripts/listeners-apply.mjs --snippet");
  process.exit(2);
}

const read = JSON.parse(readFileSync(file, "utf8"));
const src = readFileSync(DATA, "utf8");

const die = (...lines) => {
  console.error(lines.join("\n"));
  process.exit(1);
};

// ── the reading has to be a reading ────────────────────────────────────────
const cities = read.cities ?? [];
if (!/^\d{4}-\d{2}-\d{2}$/.test(read.readOn ?? "")) die(`readOn must be an ISO date, got ${read.readOn}`);
if (cities.length !== 50) die(`expected 50 cities, got ${cities.length} — a partial table was captured`);
const zeros = cities.filter((c) => !c.listeners || !c.city);
if (zeros.length) die(`${zeros.length} row(s) carry no listener count — the sparkline cell was read instead of the number:`, ...zeros.slice(0, 5).map((c) => `  #${c.rank} ${c.city}`));
for (let i = 1; i < cities.length; i++)
  if (cities[i].listeners >= cities[i - 1].listeners)
    die(`rows are not in descending order: #${cities[i].rank} ${cities[i].city} (${cities[i].listeners}) is not below #${cities[i - 1].rank} ${cities[i - 1].city} (${cities[i - 1].listeners})`);
if (cities.some((c, i) => c.rank !== i + 1)) die("ranks are not 1..50 in order");
const countries = new Set(cities.map((c) => c.country));
if (read.countriesInTop50 && countries.size !== read.countriesInTop50)
  die(`the rows hold ${countries.size} countries; the page's own headline says ${read.countriesInTop50}`);
const sum = cities.reduce((n, c) => n + c.listeners, 0);
if (read.monthlyListeners && sum >= read.monthlyListeners)
  die(`the top 50 (${sum.toLocaleString("en-US")}) cannot exceed monthly listeners (${read.monthlyListeners.toLocaleString("en-US")})`);

// ── geography carries over ─────────────────────────────────────────────────
// Keyed on CITY AND COUNTRY, because city names are not unique: Birmingham is
// in England and in Alabama, Santiago in Chile and the Dominican Republic,
// Valencia in Spain and Venezuela. Keyed on the name alone, a reading in which
// the other one entered the top 50 was published with the stored city's
// country, flag and coordinates — an American city plotted in England under a
// UK flag, and every downstream test still green, because the row-for-row
// guard compares rank/city/listeners and the projection check only asks
// whether the marker sits inside the shape it was given.
const geo = new Map();
const key = (city, country) => `${city}|${country}`;
for (const m of src.matchAll(
  /\{ rank: \d+, city: "([^"]+)", country: "([^"]+)", code: "([^"]+)", numeric: (\d+), flag: "([^"]+)", lon: (-?[\d.]+), lat: (-?[\d.]+), listeners: [\d_]+ \},?/g,
)) {
  geo.set(key(m[1], m[2]), { city: m[1], country: m[2], code: m[3], numeric: Number(m[4]), flag: m[5], lon: m[6], lat: m[7] });
}
if (geo.size === 0) die(`could not parse any city row out of ${DATA} — has the row shape changed?`);

const unknown = cities.filter((c) => !geo.has(key(c.city, c.country)));
if (unknown.length)
  die(
    `${unknown.length} row(s) have no coordinates on file for that city IN THAT COUNTRY:`,
    ...unknown.map((c) => {
      const elsewhere = [...geo.values()].filter((g) => g.city === c.city);
      const note = elsewhere.length
        ? ` — the file has ${c.city} in ${elsewhere.map((g) => g.country).join(" / ")}, which is a DIFFERENT place`
        : "";
      return `  #${c.rank} ${c.city}, ${c.country}${note}`;
    }),
    `Add the row to ${DATA} by hand once — lon/lat, the ISO alpha-2 code, the ISO numeric (0 where the 110m map has no shape) and the flag — then re-run.`,
    `The marker's place on the map is a decision, not a lookup.`,
  );

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "_");
const rows = cities
  .map((c) => {
    const g = geo.get(key(c.city, c.country));
    return `  { rank: ${c.rank}, city: "${c.city}", country: "${g.country}", code: "${g.code}", numeric: ${g.numeric}, flag: "${g.flag}", lon: ${g.lon}, lat: ${g.lat}, listeners: ${fmt(c.listeners)} },`;
  })
  .join("\n");

// ── the edits ──────────────────────────────────────────────────────────────
// A reading may not go BACKWARDS. Eight similarly-named captures sit in that
// directory; picking last week's by tab-completion would have rolled the page
// back to older figures with every guard still green, because each reading is
// internally consistent — it is only wrong relative to the one on the page.
const current = (src.match(/LISTENERS_READ_ON = "([\d-]+)"/) ?? [])[1];
if (current && read.readOn < current && !FORCE)
  die(
    `${file} is dated ${read.readOn}; the page already carries ${current}.`,
    `Applying it would roll /music/listeners back to older figures. Re-run with --force if that is really what you want.`,
  );

const before = src;
let out = src;
const replace = (re, to, what) => {
  if (!re.test(out)) die(`could not find ${what} in ${DATA}`);
  out = out.replace(re, to);
};
replace(/export const LISTENERS_READ_ON = "[\d-]+";/, `export const LISTENERS_READ_ON = "${read.readOn}";`, "the read date");
replace(
  /export const MONTHLY_LISTENERS_ON_READ = [\d_]+;/,
  `export const MONTHLY_LISTENERS_ON_READ = ${fmt(read.monthlyListeners)};`,
  "the monthly-listeners figure",
);
replace(
  /export const listenerCities: ListenerCity\[\] = \[\n[\s\S]*?\n\];/,
  `export const listenerCities: ListenerCity[] = [\n${rows}\n];`,
  "the city table",
);
// The header names the capture it was read from; keep it true. Only the
// FILENAME is rewritten — the prose around it wraps across comment lines — so
// the sentence in listeners.ts deliberately names no predecessor date. It used
// to end "(the 17 Sep read it replaced sits beside it)", which this script
// then froze: after the 23 Sep run the file claimed to have replaced a
// reading two before it, and would have drifted further every month.
replace(
  /reads\/\d{4}-\d{2}-\d{2}-cities\.json/,
  `reads/${read.readOn}-cities.json`,
  "the capture reference in the header",
);

// ── what moved ─────────────────────────────────────────────────────────────
const old = new Map(
  [...before.matchAll(/\{ rank: (\d+), city: "([^"]+)"[^}]*listeners: ([\d_]+) \}/g)].map((m) => [
    m[2],
    { rank: Number(m[1]), listeners: Number(m[3].replace(/_/g, "")) },
  ]),
);
const moves = cities
  .map((c) => ({ city: c.city, rank: c.rank, was: old.get(c.city), delta: c.listeners - (old.get(c.city)?.listeners ?? 0) }))
  .filter((m) => m.was && m.was.rank !== m.rank);
console.log(`${read.readOn}: ${cities.length} cities, ${countries.size} countries, top 50 sum ${sum.toLocaleString("en-US")}`);
console.log(`monthly listeners ${read.monthlyListeners.toLocaleString("en-US")} (trend ${read.monthlyListenersTrend?.toLocaleString("en-US") ?? "—"})`);
console.log(moves.length ? `rank moves: ${moves.map((m) => `${m.city} ${m.was.rank}→${m.rank}`).join(", ")}` : "no rank moves");
const rose = cities.filter((c) => old.has(c.city) && c.listeners > old.get(c.city).listeners).length;
console.log(`${rose} of ${cities.length} cities up, ${cities.length - rose} down`);

if (DRY) {
  console.log("\n--dry-run: nothing written.");
  process.exit(0);
}
writeFileSync(DATA, out);

// …and log the read, because the ledger entry is the part a person forgets.
// Both earlier city readings have a block in reads.md; the first one applied
// by this script did not, until a review noticed.
const LEDGER = "docs/sourcing/chartmasters/reads.md";
try {
  const ledger = readFileSync(LEDGER, "utf8");
  const heading = `## ${read.readOn} — Artist Global Impact (cities), read by hand`;
  if (ledger.includes(heading)) {
    console.log(`\n${LEDGER} already carries a cities block for ${read.readOn} — left alone.`);
  } else {
    const n = (x) => x.toLocaleString("en-US");
    const entry = [
      ``,
      heading,
      ``,
      `- Source: chartmasters.org/artists-global-performance/?artist_id=${read.spotifyId ?? ""}, signed in, in the site's own browser`,
      `- Captured: \`${file.replace(/^docs\/sourcing\/chartmasters\//, "")}\` — ${cities.length} cities, ${countries.size} countries` +
        (read.globalRanking ? `; Global Ranking #${read.globalRanking}` : "") +
        (read.popularity ? `; popularity ${read.popularity}` : "") +
        (read.followers ? `; followers ${n(read.followers)}` : "") +
        `; monthly listeners ${n(read.monthlyListeners)}` +
        (read.monthlyListenersTrend ? ` (trend ${read.monthlyListenersTrend < 0 ? "−" : "+"}${n(Math.abs(read.monthlyListenersTrend))})` : ""),
      `- Feeds: ${DATA} (whole list replaced, LISTENERS_READ_ON ${read.readOn}), applied with \`node scripts/listeners-apply.mjs\`.`,
      `- ${rose} of ${cities.length} cities up, ${cities.length - rose} down; ${moves.length} rank move${moves.length === 1 ? "" : "s"}. Top city ${cities[0].city} ${n(cities[0].listeners)}.`,
      ``,
    ].join("\n");
    writeFileSync(LEDGER, ledger.trimEnd() + "\n" + entry);
    console.log(`\nLogged the read in ${LEDGER}.`);
  }
} catch {
  console.log(`\nCould not log the read in ${LEDGER} — add the block by hand.`);
}

console.log(`\nWritten. Now: npm run verify, and commit ${DATA} with ${file}.`);
