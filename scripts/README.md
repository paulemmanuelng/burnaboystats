# Stats monitor

A small, review-gated pipeline that keeps the site's numbers honest **without
ever editing them automatically**.

## Why it works this way

Burna Boy's fast-moving figures (Spotify monthly listeners, peaks) are verified
by hand against the primary source before they go on the site. So this monitor
is deliberately **not** an auto-updater — it's a tripwire. On a schedule it
compares public sources to the site's baselines and, if something has moved,
opens a GitHub issue asking a human to verify and update. The human stays the
source of truth; the robot just says "go check."

## How it runs

- **`scripts/watched-metrics.json`** — the metrics to watch: each has a source
  URL, an extractor, the current site baseline, and a threshold.
- **`scripts/stats-lib.mjs`** — pure, unit-tested logic (parsing, drift maths,
  extraction, classification). Covered by `tests/statsMonitor.test.ts`.
- **`scripts/check-stats.mjs`** — fetches the sources, evaluates each metric,
  prints a report, and (in CI) flags `has_drift` + writes `drift-report.md`.
- **`.github/workflows/stats-monitor.yml`** — runs it every Monday (and on
  demand). If anything drifted, it opens or updates a single tracking issue.

## The refresh layer (review-gated auto-draft)

The monitor tells you *that* something moved. The **refresh** goes one step
further and drafts the edit for you — still without ever merging it.

- **`scripts/apply-stat-updates.mjs`** — same fetch + evaluate, but for any
  drifted metric that declares `siteTargets`, it applies an **anchored
  find/replace** in the data files and bumps that metric's baseline to match.
- **`.github/workflows/stats-refresh.yml`** — runs daily. When anything was
  drafted, it pushes a `stat-refresh/auto` branch and opens (or updates) **one
  pull request** with the diff plus a checklist of the prose parts a human still
  owns. You review and merge — or close it if your own tracking is fresher.

**The safety rule that makes it trustworthy:** a baseline is bumped *only* if
every one of that metric's site edits applied cleanly. If a file changed shape
and an anchor goes missing, the metric is skipped whole (site + baseline
untouched) and listed under "needs your attention" — so the baseline can never
silently drift away from what the page shows. Run `node
scripts/apply-stat-updates.mjs --dry-run` to preview with no writes.

## The live layer (fully automatic, sanity-gated)

Some figures are safe to publish with **no review at all**. A metric marked
`"live": true` is handled by `.github/workflows/stats-live.yml` (hourly), which
runs `apply-stat-updates.mjs --live` and **commits sane changes straight to
main** — the site updates itself. The other (review-gated) metrics are excluded
from this run and stay on the daily PR.

**What makes it safe:** every live value passes `withinSanity(baseline, live,
{maxJump, min, max})` before it can touch a file. A value that's NaN, outside the
absolute range, or more than `maxJump` off the baseline is **rejected and
skipped** — never committed. This is the guard against kworb's known failure
mode (mis-reading e.g. a rank as a listener count, which shows up as a huge %
swing). Configure the bounds per metric under `"sanity"`.

Currently live: **Spotify followers** (official API — needs `SPOTIFY_CLIENT_ID` /
`SPOTIFY_CLIENT_SECRET` repo secrets; skipped if absent) and **peak monthly
listeners** (kworb). Followers is stored as the displayed string in
`app/data/spotify.ts` so it only re-commits when the visible value changes.

### Give a metric a `siteTargets` entry

```jsonc
"siteTargets": [{
  "file": "app/data/africasBiggest.ts",
  "anchor": "id: \"monthly-listeners-peak\"", // unique string to search from
  "pattern": "\\d+(?:\\.\\d+)?M",              // the value to replace, after the anchor
  "format": "M2"                               // M2 | M0 | raw | int
}],
"manualAfter": ["Log the new peak on /updates", "..."] // prose steps for the PR checklist
```

## Metric kinds

- `drift` — flags when the live value differs from the baseline by ≥ `threshold`
  (e.g. monthly listeners moved 3%+, or total streams grew 3%+ → re-verify).
- `peak` — flags only when a new all-time high is set (a milestone to log).
- `rank` — flags when a chart/leaderboard rank moves by ≥ `threshold` places
  (e.g. global monthly-listeners rank moved 5+ spots). Lower is better.

## What's watched today

Spotify monthly listeners, peak monthly listeners, global monthly-listeners
rank, and total cumulative streams — all from kworb.

## Run it locally

```bash
npm run check:stats
```

It never fails the build: an unreachable source is reported as
`source unavailable`, not an error.

## When you update a real figure

After you verify and update a number on the site, **bump its `baseline`** in
`scripts/watched-metrics.json` so the monitor compares against the new value.

## Add a new metric

Add an entry to `watched-metrics.json`. If it needs a new source format, add an
extractor to the `extractors` map in `check-stats.mjs` and a pure helper (with a
test) in `stats-lib.mjs`.
