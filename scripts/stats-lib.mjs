// Pure helpers for the stats monitor — no I/O, so they're unit-testable
// (see tests/statsMonitor.test.ts). The runner (check-stats.mjs) does the
// fetching and wires these together.

// Parse a stat string into a number: handles thousands commas ("52,355,445")
// and K/M/B suffixes ("52.36M", "1.9B").
export function parseNum(input) {
  if (typeof input === "number") return input;
  if (input == null) return NaN;
  const cleaned = String(input).replace(/,/g, "").trim();
  const m = cleaned.match(/^([\d.]+)\s*([KMB])?$/i);
  if (m) {
    let n = parseFloat(m[1]);
    const suffix = (m[2] || "").toUpperCase();
    if (suffix === "K") n *= 1e3;
    else if (suffix === "M") n *= 1e6;
    else if (suffix === "B") n *= 1e9;
    return n;
  }
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : NaN;
}

// Relative change between a baseline and a live value (0.03 = 3%). Guards /0.
export function relativeDrift(baseline, live) {
  if (!baseline) return Infinity;
  return Math.abs(live - baseline) / baseline;
}

// Extract the numbers from a kworb "listeners" table row for a Spotify artist.
// The row is: #, Artist, Listeners, Daily +/-, Peak(rank), PkListeners. We find
// the artist id, read the comma-grouped numbers that follow it (2-digit ranks
// are skipped by the {3,} length floor), and read the leading rank from the
// cell just before the artist link.
export function extractKworbListeners(html, artistId) {
  const idx = html.indexOf(artistId);
  if (idx === -1) return null;
  const before = html.slice(Math.max(0, idx - 160), idx);
  const rankMatch = before.match(/(\d+)\D*$/);
  const window = html.slice(idx, idx + 500);
  const nums = (window.match(/\d[\d,]{3,}/g) || []).map((x) => parseNum(x));
  if (nums.length === 0) return null;
  return {
    rank: rankMatch ? parseInt(rankMatch[1], 10) : null,
    monthlyListeners: nums[0],
    peakListeners: nums.length >= 3 ? nums[2] : nums[0],
  };
}

// The cumulative-streams grand total on a kworb artist page is the largest
// comma-grouped number (it sums every song). We require the comma format so we
// never pick up raw/unformatted digit strings elsewhere in the markup.
export function extractKworbTotalStreams(html) {
  const nums = (html.match(/\d{1,3}(?:,\d{3})+/g) || []).map((x) => parseNum(x));
  if (nums.length === 0) return NaN;
  return Math.max(...nums);
}

// Views for one video on kworb's per-artist YouTube page. Rows are
// "<title></td><td>views</td>"; we match the row whose title contains
// `matchTitle` (case-insensitive) and read its view count. Exact-ish matching
// matters: an artist has "[Official Music Video]", "[Official Audio]" and
// "[Lyric Video]" rows for the same song with wildly different counts.
export function extractKworbYouTubeVideo(html, matchTitle) {
  const needle = String(matchTitle).toLowerCase();
  for (const row of html.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || []) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) =>
      m[1].replace(/<[^>]+>/g, "").trim()
    );
    if (cells.length < 2) continue;
    if (cells[0].toLowerCase().includes(needle)) return parseNum(cells[1]);
  }
  return NaN;
}

// Total Spotify streams for ONE song on kworb's per-artist songs page. Rows are
// "<title></td><td>total</td><td>daily</td>"; we match the title cell exactly so
// "Ye" can't match "Ye [Official Audio]"-style variants or a longer title.
export function extractKworbSongStreams(html, title) {
  const want = String(title).trim().toLowerCase();
  for (const row of html.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || []) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) =>
      m[1].replace(/<[^>]+>/g, "").trim()
    );
    if (cells.length < 2) continue;
    // kworb marks "as featured artist" rows with a leading "* ".
    const title = cells[0].replace(/^\*\s*/, "").trim().toLowerCase();
    if (title === want) return parseNum(cells[1]);
  }
  return NaN;
}

// The "Total views:" figure on the same page.
export function extractKworbYouTubeTotal(html) {
  const m = html.match(/Total views:[\s\S]{0,120}?([\d,]{7,})/);
  return m ? parseNum(m[1]) : NaN;
}

// Pull the follower total from Spotify's official artist API response.
// GET https://api.spotify.com/v1/artists/{id} → { followers: { total: N }, ... }.
export function extractSpotifyFollowers(json) {
  const n = json?.followers?.total;
  return typeof n === "number" ? n : NaN;
}

// The safety gate for values published live with no human review. Returns true
// only if a live value is plausible: a real number, inside an absolute range,
// and within `maxJump` of the baseline. The jump guard is the key protection —
// kworb's documented failure mode is a sudden mis-read (e.g. reading a rank as a
// listener count), which shows up as a huge % swing and gets rejected here so it
// never reaches the site. A rejected value is skipped, not published.
export function withinSanity(baseline, live, { maxJump = 0.15, min = 0, max = Infinity } = {}) {
  if (live == null || Number.isNaN(live) || live <= min || live > max) return false;
  if (baseline && Math.abs(live - baseline) / baseline > maxJump) return false;
  return true;
}

// Pull a YouTube video's view count out of the watch page's embedded JSON.
// YouTube renders the visible count client-side, but the raw number is in the
// ytInitialData blob as `"viewCount":"533033080"` — read that, not the UI text.
export function extractYouTubeViews(html) {
  // Preferred: the raw integer in the player/initial data.
  const raw = html.match(/"viewCount":"(\d+)"/);
  if (raw) return parseInt(raw[1], 10);
  // Fallback (what CI/datacenter IPs often get): the "533,033,080 views"
  // simpleText form — strip the commas.
  const simple = html.match(/"simpleText":"([\d,]+) views?"/);
  if (simple) return parseInt(simple[1].replace(/,/g, ""), 10);
  return NaN;
}

// Append a dated point to a trend series array, so the site's history deepens
// on its own instead of staying a handful of hand-added points. Idempotent: if
// `date` is already present in that series it's a no-op, so re-running the same
// day never duplicates. Returns { text, applied }.
export function appendTrendPoint(text, anchor, date, value) {
  const start = text.indexOf(anchor);
  if (start === -1) return { text, applied: false, reason: "anchor not found" };
  const close = text.indexOf("\n];", start);
  if (close === -1) return { text, applied: false, reason: "series end not found" };
  const body = text.slice(start, close);
  if (body.includes(`"${date}"`)) return { text, applied: false, reason: "date already present" };
  const line = `  { date: "${date}", value: ${value} },`;
  return { text: text.slice(0, close) + "\n" + line + text.slice(close), applied: true };
}

// Compare a live value to a metric's baseline and classify the result.
//   kind "drift" → flags when |change| ≥ threshold (default 5%)
//   kind "peak"  → flags only when a new all-time high is set
export function evaluateMetric(metric, liveValue) {
  if (liveValue == null || Number.isNaN(liveValue)) {
    return { ...metric, live: null, status: "unavailable" };
  }
  if (metric.baseline == null) {
    return { ...metric, live: liveValue, status: "unbaselined" };
  }
  if (metric.kind === "peak") {
    return {
      ...metric,
      live: liveValue,
      status: liveValue > metric.baseline ? "new-peak" : "ok",
    };
  }
  if (metric.kind === "rank") {
    // A chart rank: lower number is better. Flag a move of ≥ threshold places.
    const delta = Math.abs(liveValue - metric.baseline);
    return {
      ...metric,
      live: liveValue,
      delta,
      status: delta >= (metric.threshold ?? 5) ? "rank-change" : "ok",
    };
  }
  const drift = relativeDrift(metric.baseline, liveValue);
  return {
    ...metric,
    live: liveValue,
    drift,
    status: drift >= (metric.threshold ?? 0.05) ? "drift" : "ok",
  };
}

// True when a result is worth alerting a human about.
export function isActionable(status) {
  return status === "drift" || status === "new-peak" || status === "rank-change";
}

// Format a raw number the way a given site field displays it, so an auto-drafted
// edit matches the surrounding style exactly.
//   "M2"  → "56.52M"      (millions, 2dp — leaderboard values)
//   "M0"  → "747M"        (millions, whole)
//   "raw" → "56,517,687"  (grouped integer — prose / baselines)
//   "int" → "44"          (plain integer — ranks)
export function formatStat(n, format) {
  if (n == null || Number.isNaN(n)) return null;
  switch (format) {
    case "M2":
      return `${(n / 1e6).toFixed(2)}M`;
    case "M1":
      return `${(n / 1e6).toFixed(1)}M`;
    case "M0":
      return `${Math.round(n / 1e6)}M`;
    // Auto-scales so a 598M song and a 986K deep cut both read naturally, and
    // sub-10M keeps a decimal instead of rounding 3.7M up to "4M".
    case "compact":
      if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
      if (n >= 1e7) return `${Math.round(n / 1e6)}M`;
      if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
      if (n >= 1e3) return `${Math.round(n / 1e3)}K`;
      return String(Math.round(n));
    case "raw":
      return Math.round(n).toLocaleString("en-US");
    case "int":
      return String(Math.round(n));
    default:
      return null;
  }
}

// Replace the first occurrence of `pattern` that appears AFTER `anchor` in
// `text`, leaving everything else untouched. Returns { text, applied }.
// `applied` is false when the anchor or the pattern isn't found — the caller
// then skips this target (and its baseline bump) rather than risk a bad edit.
// This is what keeps the bot from ever guessing: a structural change to the file
// simply produces a no-op the human sees flagged in the PR, never a wrong edit.
export function applyAnchoredReplace(text, anchor, pattern, replacement) {
  const anchorIdx = text.indexOf(anchor);
  if (anchorIdx === -1) return { text, applied: false, reason: "anchor not found" };
  const from = anchorIdx + anchor.length;
  const re = new RegExp(pattern);
  const rest = text.slice(from);
  const m = rest.match(re);
  if (!m) return { text, applied: false, reason: "pattern not found after anchor" };
  const at = from + m.index;
  const already = m[0] === replacement;
  const next = text.slice(0, at) + replacement + text.slice(at + m[0].length);
  return { text: next, applied: !already, changedFrom: m[0], reason: already ? "already current" : undefined };
}

// ---------------------------------------------------------------------------
// STALENESS ALARM
//
// A dead extractor is loud — it returns NaN and gets reported "unavailable".
// The dangerous failure is quieter: the fetch keeps working and keeps yielding
// a plausible number, but the number stops moving because the source changed
// shape. An unchanged figure reports "ok", so that looks identical to a stable
// stat and can hide for weeks (it already did once here, when double-escaped
// patterns meant edits silently never applied).
//
// So each metric records `lastChanged` — the last time its value actually
// moved — and anything that should be moving but hasn't gets flagged.
//
// Metrics that are legitimately static are exempt: a `peak` only moves on a new
// all-time high and a `rank` can sit still for weeks. Both would cry wolf.
// Set `stalenessDays: null` on any other metric that is expected to sit still.
export const DEFAULT_STALENESS_DAYS = 3;

/** Metrics whose kind means "no change" is normal rather than suspicious. */
const STATIC_BY_NATURE = new Set(["peak", "rank"]);

export function staleMetrics(metrics, now = new Date()) {
  const out = [];
  for (const m of metrics) {
    if (!m.live) continue; // monitor-only metrics write nothing to check
    if (m.stalenessDays === null) continue; // explicitly opted out
    if (m.stalenessDays === undefined && STATIC_BY_NATURE.has(m.kind)) continue;
    const limit = m.stalenessDays ?? DEFAULT_STALENESS_DAYS;
    if (!m.lastChanged) continue; // never recorded yet — nothing to judge against
    const days = (now.getTime() - new Date(m.lastChanged).getTime()) / 86_400_000;
    if (days >= limit) out.push({ id: m.id, label: m.label, days: Math.floor(days), limit });
  }
  return out;
}
