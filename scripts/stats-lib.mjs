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
// kworb's all-artists table (kworb.net/spotify/artists.html): one row per
// artist with Total and Daily stream columns. Returns the DAILY figure for the
// named artist — the increment an accumulate metric adds once per day.
export function extractKworbArtistDaily(html, artistName) {
  // Row shape (verified 13 Aug 2026):
  //   <td class="text"><div><a href="/spotify/artist/…">Burna Boy</a></div></td>
  //   <td>10,596.5</td>  <- career total, MILLIONS
  //   <td>9.267</td>     <- daily streams, MILLIONS
  // Values are in millions with a decimal point, so the daily converts ×1e6.
  const esc = artistName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const rowRe = new RegExp(`>${esc}</a>(?:</div>)?</td>\\s*((?:<td[^>]*>[\\d,.]+</td>\\s*){2})`, "i");
  const m = html.match(rowRe);
  if (!m) return NaN;
  const cells = [...m[1].matchAll(/<td[^>]*>([\d,.]+)<\/td>/g)].map((c) => parseNum(c[1]));
  return cells.length >= 2 ? Math.round(cells[1] * 1e6) : NaN;
}

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
  if (metric.kind === "accumulate") {
    // A running total the source only publishes as a DAILY increment. The
    // baseline IS the total; each new kworb day adds the daily figure to it —
    // once, gated on the date, because the live workflow runs hourly and the
    // source refreshes daily. liveValue here is the DAY'S streams, not a total.
    const today = new Date().toISOString().slice(0, 10);
    if (metric.lastSeenAt === today) {
      return { ...metric, live: metric.baseline, status: "ok" };
    }
    return { ...metric, live: metric.baseline + liveValue, added: liveValue, status: "accumulate" };
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
  return status === "drift" || status === "new-peak" || status === "rank-change" || status === "accumulate";
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
    case "B3":
      return `${(n / 1e9).toFixed(3)}B`;
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
    // Judge the SOURCE, not the rounded display. `lastChanged` moves only when
    // the published figure is rewritten, which for a slow-moving catalogue
    // metric can be many days apart while the feed is entirely healthy —
    // that combination fired this alarm on 17 good metrics at once.
    // `lastSeenAt` is stamped whenever the raw value differs from last run, so
    // it goes quiet only when the source has genuinely frozen.
    const marker = m.lastSeenAt ?? m.lastChanged;
    if (!marker) continue; // never recorded yet — nothing to judge against
    const days = (now.getTime() - new Date(marker).getTime()) / 86_400_000;
    if (days >= limit) out.push({ id: m.id, label: m.label, days: Math.floor(days), limit });
  }
  return out;
}

// ---------------------------------------------------------------------------
// LIVE PLATFORM CHARTS
//
// Parses kworb's artist page into per-song, per-platform, per-country live
// positions. This is PLATFORM data (Spotify/Apple/iTunes/Deezer/Shazam/YouTube
// daily country charts) — deliberately kept apart from data/charts.ts, which
// holds official national-chart peaks and feeds the site's headline totals.
// Mixing the two would inflate those totals with a different kind of number.
//
// Page shape, per song cell:
//   <div class="wrap"><b>Song</b></div>
//   <div class="spo">Spotify (10x #1):<br>
//     <div class="… spo"><a href="…/at_daily.html">#1 Austria</a>
//       <span class="change24">(=)</span></div> …
// The country code lives in the href, which is far more reliable than the
// display name (kworb writes "Turks and Caicos", "Côte d'Ivoire" etc.).
const PLATFORM_CLASSES = {
  spo: "Spotify",
  app: "Apple Music",
  itu: "iTunes",
  dee: "Deezer",
  sha: "Shazam",
  you: "YouTube",
};

/** Turn kworb's "(=)", "(+12)", "(-3)", "(NE)" movement marker into a number|null. */
export function parseMovement(raw) {
  if (!raw) return null;
  const t = raw.replace(/[()]/g, "").trim();
  if (t === "=" ) return 0;
  if (t === "NE" || t === "RE") return null; // new / re-entry: no prior position
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) ? n : null;
}

export function extractLiveCharts(html) {
  const songs = [];
  for (const cell of html.match(/<td[^>]*>[\s\S]*?<\/td>/g) || []) {
    const title = cell.match(/<div class="wrap"><b>([\s\S]*?)<\/b>/)?.[1];
    if (!title) continue;
    const platforms = [];
    // Each platform header opens a run that lasts until the next header.
    const heads = [...cell.matchAll(/<div class="(spo|app|itu|dee|sha|you)">([^<(]+?)(?:\s*\(([^)]*)\))?:<br>/g)];
    for (let i = 0; i < heads.length; i++) {
      const h = heads[i];
      const body = cell.slice(h.index, i + 1 < heads.length ? heads[i + 1].index : cell.length);
      const entries = [];
      // Country pages use two-letter codes ("de_daily.html", "ww.html"), but
      // Spotify's global chart lives at "global_daily.html" — without the
      // alternation the site silently dropped Spotify worldwide placements
      // while showing Shazam's and Deezer's ("ww" happens to be two letters).
      for (const m of body.matchAll(
        /<a href="[^"]*?\/([a-z]{2}|global)(?:_daily)?\.html">#(\d+) ([^<]+)<\/a>\s*(?:<span[^>]*>([^<]*)<\/span>)?/g
      )) {
        // "(NE)" and "(RE)" both mean "no previous position", so both give a
        // null movement — but they are different facts, and rendering a
        // re-entry as NEW says the record has never charted there when it has.
        // Keep which one it was. A marker missing entirely stays absent rather
        // than being read as either.
        const entry = {
          country: m[1] === "global" ? "WW" : m[1].toUpperCase(),
          name: m[3].trim(),
          position: Number.parseInt(m[2], 10),
        };
        if (m[4] !== undefined) {
          entry.movement = parseMovement(m[4]);
          const flag = m[4].replace(/[()]/g, "").trim();
          if (flag === "NE") entry.status = "new";
          else if (flag === "RE") entry.status = "re";
        }
        entries.push(entry);
      }
      if (entries.length) {
        platforms.push({
          platform: PLATFORM_CLASSES[h[1]],
          numberOnes: entries.filter((e) => e.position === 1).length,
          entries: entries.sort((a, b) => a.position - b.position || a.name.localeCompare(b.name)),
        });
      }
    }
    if (platforms.length) {
      songs.push({
        title: title.replace(/&amp;/g, "&").trim(),
        platforms: platforms.sort((a, b) => b.entries.length - a.entries.length),
      });
    }
  }
  // kworb lists duplicate rows by default (it ships a "No dupes" toggle), so the
  // same release can appear more than once. Merge by title and keep the best
  // position per country, or a song's totals get double-counted.
  const merged = new Map();
  for (const song of songs) {
    const prev = merged.get(song.title);
    if (!prev) { merged.set(song.title, song); continue; }
    for (const p of song.platforms) {
      const target = prev.platforms.find((x) => x.platform === p.platform);
      if (!target) { prev.platforms.push(p); continue; }
      for (const e of p.entries) {
        const seen = target.entries.find((x) => x.country === e.country);
        if (!seen) target.entries.push(e);
        else if (e.position < seen.position) Object.assign(seen, e);
      }
      target.entries.sort((a, b) => a.position - b.position || a.name.localeCompare(b.name));
      target.numberOnes = target.entries.filter((e) => e.position === 1).length;
    }
  }

  // Albums arrive titled "Album: X" — split them out so the page can show
  // songs and albums separately rather than mixing formats in one list.
  const out = [...merged.values()].map((s) => {
    const isAlbum = /^Album:\s*/i.test(s.title);
    return { ...s, title: s.title.replace(/^Album:\s*/i, ""), kind: isAlbum ? "album" : "song" };
  });

  // Most-charted first — that is the headline the page leads with.
  const reach = (s) => s.platforms.reduce((n, p) => n + p.entries.length, 0);
  return out.sort((a, b) => reach(b) - reach(a));
}

// ---------------------------------------------------------------------------
// COUNTRY-CHART BACKFILL
//
// kworb's artist page attaches a placement to an artist by matching the chart
// row's credit string. Deezer and YouTube both publish only the LEAD credit —
// "Shakira - Dai Dai", no featured artists — so a record Burna Boy is featured
// on never gets attached to him on that page. The damage was severe: 2 Deezer
// placements listed where there are 58, and 6 YouTube where there are ~127.
//
// Fix: read those country charts directly and merge what belongs to him.
// Matching uses an explicit credit list rather than title alone, because a bare
// title match ("Location", "Real Life") would sweep in unrelated songs that
// happen to share a name.
const CREDIT_ALIASES = [
  { artist: "Shakira", title: "Dai Dai", release: "Dai Dai" },
];

/**
 * The charts we sweep directly. Both page types put position in column 0,
 * movement in column 1 and the credit in column 2, so one row parser serves
 * both; only the index, the URL shape and the title line differ.
 */
export const CHART_SWEEPS = [
  {
    platform: "Deezer",
    index: "https://kworb.net/charts/",
    url: (cc) => `https://kworb.net/charts/deezer/${cc}.html`,
    codesFrom: (html) => [
      ...new Set([...html.matchAll(/\/charts\/deezer\/([a-z]{2})\.html/g)].map((m) => m[1])),
    ],
    title: /<title>\s*Deezer Top Songs - ([^<]*?)\s*<\/title>/,
  },
  {
    platform: "YouTube",
    index: "https://kworb.net/youtube/insights/",
    url: (cc) => `https://kworb.net/youtube/insights/${cc}.html`,
    // This index links relatively ("ng.html"), not by full path.
    codesFrom: (html) => [
      ...new Set([...html.matchAll(/href="([a-z]{2})\.html"/g)].map((m) => m[1])),
    ],
    title: /<title>\s*YouTube Weekly Chart - ([^<]*?)\s*<\/title>/,
    // A weekly chart behind 134 pages. Re-reading it every hour would be ~3,200
    // needless requests a day against a free service, so sweep it every 6h and
    // carry the data between runs.
    everyHours: 6,
  },
];

/**
 * Pull Burna Boy's rows out of one country chart.
 * Returns [{ platform, release, country, name, position, movement, status? }].
 */
export function extractCountryChart(html, code, spec) {
  const name = html.match(spec.title)?.[1]?.trim();
  if (!name) return []; // not the page we expected — don't guess at its shape
  const country = code.toUpperCase();
  const out = [];
  // Rows carry classes on these pages ("<tr class='newpeak'>"), so match the
  // tag with attributes. Splitting on a literal "<tr>" silently returns only
  // the header row, which is exactly how the YouTube sweep first read as zero.
  for (const row of html.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || []) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) =>
      m[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim()
    );
    if (cells.length < 3) continue;
    const [pos, move, credit] = cells;
    const position = Number.parseInt(pos, 10);
    if (!Number.isFinite(position)) continue;

    const split = credit.indexOf(" - ");
    const artist = split < 0 ? "" : credit.slice(0, split).trim();
    const title = (split < 0 ? credit : credit.slice(split + 3)).trim();

    let release = null;
    if (/burna\s*boy/i.test(artist)) release = title;
    else {
      const alias = CREDIT_ALIASES.find(
        (a) =>
          a.artist.toLowerCase() === artist.toLowerCase() &&
          a.title.toLowerCase() === title.toLowerCase()
      );
      if (alias) release = alias.release;
    }
    if (!release) continue;

    const flag = move.replace(/[()]/g, "").trim().toUpperCase();
    const hit = { platform: spec.platform, release, country, name, position, movement: parseMovement(move) };
    if (flag === "NEW" || flag === "NE") hit.status = "new";
    else if (flag === "RE") hit.status = "re";
    out.push(hit);
  }
  return out;
}

/**
 * Matching key for a release title. The artist page and the country charts
 * name the same record differently — "On the Low" vs "On The Low", "For My
 * Hand" vs "For My Hand (feat. Ed Sheeran)" — and matching on the raw string
 * created a second copy of the song, splitting its placements across two rows.
 *
 * Only casing, punctuation and featured-artist credits are normalised away.
 * Version suffixes stay significant: "Dai Dai (Instrumental)" and "Dai Dai
 * (Clean Bandit Remix)" chart separately and must not fold into "Dai Dai".
 */
export function titleKey(title) {
  return String(title)
    .replace(/\s*[([](?:feat|ft|with|w\/)\.?\s[^)\]]*[)\]]/gi, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Fold swept rows into the releases parsed from the artist page, mutating in
 * place. A country can legitimately appear twice (Deezer occasionally carries
 * two IDs for one track — Slovakia had it at both #1 and #54), so the best
 * position wins, matching how the artist-page duplicates are merged above.
 */
export function mergeChartPlacements(releases, rows) {
  const touched = new Set();
  for (const row of rows) {
    let release = releases.find(
      (r) => titleKey(r.title) === titleKey(row.release) && r.kind !== "album"
    );
    if (!release) {
      release = { title: row.release, kind: "song", platforms: [] };
      releases.push(release);
    }
    let block = release.platforms.find((p) => p.platform === row.platform);
    if (!block) {
      block = { platform: row.platform, numberOnes: 0, entries: [] };
      release.platforms.push(block);
    }
    touched.add(block);
    const entry = {
      country: row.country,
      name: row.name,
      position: row.position,
      movement: row.movement,
    };
    if (row.status) entry.status = row.status;
    const seen = block.entries.find((e) => e.country === row.country);
    if (!seen) block.entries.push(entry);
    else if (entry.position < seen.position) Object.assign(seen, entry);
  }

  for (const block of touched) {
    block.entries.sort((a, b) => a.position - b.position || a.name.localeCompare(b.name));
    block.numberOnes = block.entries.filter((e) => e.position === 1).length;
  }
  for (const r of releases) r.platforms.sort((a, b) => b.entries.length - a.entries.length);
  const reach = (r) => r.platforms.reduce((n, p) => n + p.entries.length, 0);
  return releases.sort((a, b) => reach(b) - reach(a));
}

// ── Certification watches ──────────────────────────────────────────────────
// A cert watch polls a register's own search endpoint and reports when a row
// for the watched release appears. `html` is the fragment the register
// returns; a hit means "a human should verify the tier at the register and
// add the certification" — the watch never decides the tier itself.
export function certWatchStatus(html, pattern) {
  if (typeof html !== "string" || !html.trim()) return "unavailable";
  if (html.includes("Nessuna certificazione")) return "not-found";
  return html.toLowerCase().includes(pattern.toLowerCase()) ? "found" : "not-found";
}
