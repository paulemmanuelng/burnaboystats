// Render the radar's findings as a private Markdown report. Pure.

import { fmtDate } from "./rank.mjs";

const MARKET_NAME = { UK: "United Kingdom (BPI)", ZA: "South Africa (RiSA)", AU: "Australia (ARIA)", PT: "Portugal (AFP / Audiogest)" };
const cell = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
const typeCell = (c) => `\`${cell(c.search.type)}\`${c.search.then ? ` — ${cell(c.search.then)}` : ""}`;

function table(rows, { withConfidence = true } = {}) {
  const head = ["#", "Artist", "Title", "Market", "Site tier", "Likely next", ...(withConfidence ? ["Confidence"] : []), "Evidence", "Type in the search box"];
  const lines = [`| ${head.join(" | ")} |`, `|${head.map(() => "---").join("|")}|`];
  rows.forEach((c, i) => {
    const fmt = c.format === "album" ? " (album)" : "";
    lines.push(
      `| ${[i + 1, cell(c.artist), `${cell(c.title)}${fmt}`, c.market, cell(c.siteTier), cell(c.nextTier), ...(withConfidence ? [c.confidence] : []), cell(c.evidence), typeCell(c)].join(" | ")} |`,
    );
  });
  return lines.join("\n");
}

const KIND = {
  listed: "already printed in a weekly list",
  due: "projected past the next tier since the last full list",
  soon: "projected to cross within four weeks",
  momentum: "no rate, but charting in the UK now",
  stale: "projected past it, but one or two full lists have not printed it",
};

export function renderReport(r) {
  const { asOf, markets, ranked, inputs } = r;
  const cov = ranked.coverage;
  const L = [];
  L.push(`# Plaque radar — ${fmtDate(asOf)}`);
  L.push("");
  L.push("Private working list. **Estimates, never published — only the register confirms a plaque.** Nothing here goes on the site until the body's own register has been read.");
  L.push("");
  L.push(`Run by hand: \`node scripts/plaque-radar/index.mjs${r.argsText ? ` ${r.argsText}` : ""}\` · markets: ${markets.join(", ")} · ${r.offline ? "offline (saved pages only)" : "online"}`);
  L.push("");
  L.push("**Inputs**");
  L.push(`- Site data: ${inputs.repo}. ${inputs.artists} artists (Burna Boy + the Afrobeats Board), ${inputs.releases} releases, ${inputs.ukPlaques} UK plaques on the site.`);
  if (markets.includes("UK")) {
    L.push(
      `- BuzzJack weekly lists: ${inputs.lists} weeks transcribed (${cov.complete.size} of them the full list; the rest only the BRITs account's handful — most of Apr–Sep 2023), ${cov.first ? fmtDate(cov.first) : "—"} → ${cov.last ? fmtDate(cov.last) : "—"}; last FULL list ${cov.lastComplete ? fmtDate(cov.lastComplete) : "—"}${cov.last && cov.last !== cov.lastComplete ? `; ${fmtDate(cov.last)} has only ${cov.byWeek.get(cov.last)} rows so far (the BRITs posts), so a plaque awarded that week may not be visible yet` : ""}. ${inputs.ourRows} rows name one of the ${inputs.artists} artists.`,
    );
    L.push(`- Official Charts Company: ${inputs.occ}.`);
  }
  L.push(`- Live platform charts (Spotify, Apple Music, YouTube …): the site's snapshot of ${fmtDate(inputs.liveUpdated)}.`);
  if (inputs.netLog.length) L.push(`- Network: ${inputs.netLog.join("; ")}.`);
  L.push("");

  if (markets.includes("UK")) {
    L.push("## 1. Search these first — UK");
    L.push("");
    L.push(`Type each term into the ${"BPI certified-awards search (bpi.co.uk/page/certified-awards)"}. Ranked: titles a weekly list has already printed, then titles projected past their next tier since the last full list, then titles due within four weeks.`);
    L.push("");
    if (ranked.main.length) {
      L.push(table(ranked.main));
      L.push("");
      const kinds = Object.entries(KIND)
        .map(([k, v]) => [v, ranked.main.filter((c) => c.kind === k).length])
        .filter(([, n]) => n)
        .map(([v, n]) => `${n} ${v}`);
      L.push(`_${kinds.join(" · ")}${ranked.overflow ? ` · ${ranked.overflow} more below the cap` : ""}._`);
    } else {
      L.push("_Nothing projected past its next tier. No list has printed a plaque the site lacks._");
    }
    L.push("");
    L.push("## 2. UK — never certified, strong chart run (low confidence)");
    L.push("");
    const uk = inputs.thresholds?.UK;
    const n = (v) => Number(v).toLocaleString("en-GB");
    L.push(`No dated steps, so no unit rate: a chart run and nothing more.${uk ? ` Silver is ${n(uk.single.silver)} units for a single and ${n(uk.album.silver)} for an album, and` : ""} none of these has appeared in a weekly list since ${cov.first ? fmtDate(cov.first) : "2022"}.`);
    L.push("");
    L.push(ranked.chart.length ? table(ranked.chart, { withConfidence: false }) : "_None._");
    L.push("");
  }

  const hintMarkets = markets.filter((m) => m !== "UK");
  if (hintMarkets.length) {
    L.push(`## ${markets.includes("UK") ? "3" : "1"}. ${hintMarkets.map((m) => MARKET_NAME[m].split(" (")[0]).join(", ")} — chart hints (low confidence)`);
    L.push("");
    L.push("No readable register ladder for these markets, so no rate and no projection — only where each title is charting today, its best chart run there, and how it has certified elsewhere. Treat every row as a maybe.");
    L.push("");
    for (const m of hintMarkets) {
      L.push(`### ${MARKET_NAME[m]}`);
      L.push("");
      L.push(ranked.hints[m]?.length ? table(ranked.hints[m], { withConfidence: false }) : "_Nothing charting there today, and no strong chart run on file._");
      L.push("");
    }
  }

  L.push("## How to read this");
  L.push("");
  L.push("- **Listed** (high): a BuzzJack transcription of the BPI's weekly list already prints a tier the site does not carry. The forum is a transcription, not the register — read the BPI row before changing anything.");
  const pace = ranked.pace;
  L.push(
    `- **Projected** (medium / low): the rate between the last two dated steps, carried forward. Streams fade, so a straight line runs ahead of most titles: replaying ${pace?.samples ?? 0} past steps of these same titles, the next step took ${pace && pace.factor > 1 ? `${pace.factor.toFixed(2)}×` : "no longer than"} the straight-line time (median), and every crossing date here is stretched by that factor. A projection whose crossing has passed through more than two FULL weekly lists without appearing is dropped — the BPI certifies automatically, and the lists would have printed it.`,
  );
  L.push("- A title credited in a way the lists never matched (a BPI credit that omits the artist) has no dated steps, and appears only under _Not projectable_ below.");
  L.push("- Chart hints (ZA / AU / PT, and UK titles never certified) are signals, not unit counts.");
  L.push("");

  if (markets.includes("UK")) {
    L.push("## Also checked (UK)");
    L.push("");
    const brief = (c) => `${c.artist} — ${c.title} (${c.siteTier} → ${c.nextTier}, ≈${fmtDate(c.when)})`;
    if (ranked.later.length) {
      L.push(`**On the way, not yet due (${ranked.later.length}; the soonest ${Math.min(ranked.later.length, 8)}):** ${ranked.later.slice(0, 8).map(brief).join("; ")}.`);
      L.push("");
    }
    if (ranked.slowed.length) {
      L.push(`**Projected past the next tier, but three or more full lists have not printed it — the pace has slowed (${ranked.slowed.length}):** ${ranked.slowed
        .slice()
        .sort((a, b) => b.when.localeCompare(a.when))
        .map(brief)
        .join("; ")}.`);
      L.push("");
    }
    if (ranked.unprojectable.length) {
      L.push(`**Not projectable (${ranked.unprojectable.length})** — a UK plaque with fewer than two dated steps and no UK chart this week: ${ranked.unprojectable
        .map((c) => `${c.artist} — ${c.title} (${c.siteTier})`)
        .join("; ")}.`);
      L.push("");
    }
  }
  return `${L.join("\n")}\n`;
}

/** The few lines printed to the terminal. */
export function renderSummary({ file, ranked, markets }) {
  const out = [];
  if (markets.includes("UK")) {
    const by = (k) => ranked.main.filter((c) => c.kind === k).length;
    out.push(`UK: ${ranked.main.length} to search (${by("listed")} already listed, ${by("due")} projected due, ${by("soon")} due soon, ${by("stale")} stale) · ${ranked.chart.length} chart-only`);
    ranked.main.slice(0, 5).forEach((c, i) => out.push(`  ${i + 1}. ${c.artist} — ${c.title}: ${c.siteTier} → ${c.nextTier} [${c.confidence}] type "${c.search.type}"`));
  }
  for (const m of markets.filter((m) => m !== "UK")) out.push(`${m}: ${ranked.hints[m]?.length ?? 0} chart hints (low confidence)`);
  out.push(`Report: ${file}`);
  return out.join("\n");
}
