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
