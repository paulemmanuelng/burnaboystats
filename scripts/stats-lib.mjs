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
