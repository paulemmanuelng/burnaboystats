// The radar's command line, and the two paths it writes to.
//
// Split from index.mjs so the tests can hold the file rules without running a
// radar: an --offline re-run must never overwrite the day's online report, and
// --out moves the report only, never the saved Official Charts pages.

import { homedir } from "node:os";
import { join } from "node:path";
import { MARKETS } from "./site.mjs";

export const HELP = `Plaque radar — titles likely due a new plaque (private; estimates only).

  node scripts/plaque-radar/index.mjs [--market UK|ZA|AU|PT] [--offline]

  --market M     one market (repeat or comma-separate for several); default all
  --offline      no network: saved pages and the site's own data only; the
                 report is radar-<date>-offline.md, beside the online one
  --as-of DATE   judge as of this date (YYYY-MM-DD); default today
  --top N        how many UK titles to list (default 10)
  --out DIR      where the report goes (default ~/burnaboy-work/radar)
  --occ DIR      saved Official Charts pages (default ~/burnaboy-work/radar/occ,
                 whatever --out says)
  --buzzjack DIR saved BuzzJack pages (default ~/burnaboy-work/buzzjack)`;

export function parseArgs(argv, home = homedir()) {
  const a = {
    markets: [],
    offline: false,
    asOf: null,
    top: 10,
    out: join(home, "burnaboy-work/radar"),
    // Fixed, not join(out, "occ"): with --out somewhere else, an offline run
    // looked for the day's saved charts there, found none, and read no chart.
    occ: join(home, "burnaboy-work/radar/occ"),
    buzzjack: join(home, "burnaboy-work/buzzjack"),
  };
  for (let i = 0; i < argv.length; i++) {
    const [flag, inline] = argv[i].split("=");
    const val = () => inline ?? argv[++i];
    if (flag === "--help" || flag === "-h") a.help = true;
    else if (flag === "--offline") a.offline = true;
    else if (flag === "--market") a.markets.push(...val().split(",").map((m) => m.trim().toUpperCase()));
    else if (flag === "--as-of") a.asOf = val();
    else if (flag === "--top") a.top = Number(val());
    else if (flag === "--out") a.out = val();
    else if (flag === "--occ") a.occ = val();
    else if (flag === "--buzzjack") a.buzzjack = val();
    else throw new Error(`unknown option ${argv[i]}\n\n${HELP}`);
  }
  a.markets = a.markets.map((m) => (m === "GB" ? "UK" : m));
  if (!a.markets.length || a.markets.includes("ALL")) a.markets = [...MARKETS];
  const bad = a.markets.filter((m) => !MARKETS.includes(m));
  if (bad.length) throw new Error(`unknown market ${bad.join(", ")} — use ${MARKETS.join(", ")}`);
  if (a.asOf && !/^\d{4}-\d{2}-\d{2}$/.test(a.asOf)) throw new Error("--as-of wants YYYY-MM-DD");
  if (!Number.isInteger(a.top) || a.top < 1) throw new Error("--top wants a whole number");
  return a;
}

/**
 * Where the report goes. An offline run gets its own name: it has no network
 * line and no robots record, so writing it over the day's online report (the
 * same radar-<date>.md, as it did until 26 Sep 2026) threw both away.
 */
export const reportFile = (args, asOf) => join(args.out, `radar-${asOf}${args.offline ? "-offline" : ""}.md`);

/** One saved Official Charts page per chart and day, under --occ. */
export const occFile = (args, asOf, id) => join(args.occ, `${asOf}-${id}.html`);
