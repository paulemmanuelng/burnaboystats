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
`"live": true` is handled by `.github/workflows/stats-live.yml` (four fixed slots a day: 00:17, 06:17, 12:17, 18:17 UTC), which
runs `apply-stat-updates.mjs --live` and **commits sane changes straight to
main** — the site updates itself. The other (review-gated) metrics are excluded
from this run and stay on the daily PR.

**What makes it safe:** every live value passes `withinSanity(baseline, live,
{maxJump, min, max})` before it can touch a file. A value that's NaN, outside the
absolute range, or more than `maxJump` off the baseline is **rejected and
skipped** — never committed. This is the guard against kworb's known failure
mode (mis-reading e.g. a rank as a listener count, which shows up as a huge %
swing). Configure the bounds per metric under `"sanity"`.

Currently live: **peak monthly listeners** (kworb).

**Followers is NOT auto-fetched.** Spotify's API stopped returning the
`followers` field for standard app credentials in 2026 (the artist object comes
back without it), so it's maintained by hand in `app/data/spotify.ts` — it moves
slowly, so that's fine. The `spotifyFollowers` extractor and the (now-removed)
metric config are kept in the code, ready to re-enable if that access returns.

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

Two modifiers sit on top of a kind:

- `offset` — added to whatever the source reports, for a source that counts a
  known, measured amount less (or more) than the published figure. The
  baseline, the sanity gate and the written display all live in corrected
  space, so an offset can only change together with its baseline. The raw
  value is watched separately (`lastRawValue`, `rawJumpAlert`): a cumulative
  that FALLS, or jumps far beyond a day's growth, means the source's counted
  set changed and the offset is wrong by that much until re-measured.
- `group` — a set of LEDGERS published together. Each member holds a
  `checkpoint` (its total through a date) and `readings` (each later day's
  streams under the date its source page is stamped with, read by
  `extractor: kworbArtistPage`); its total through a later day is the
  checkpoint plus every daily to that day, and exists only where no day is
  missing. The group publishes on the newest day every member covers, writes
  that day beside the values (`field: "asOf"`), rolls each checkpoint forward,
  and writes all of its rows or none (`hold` keeps recording without
  publishing). Rows within `tieWithin` of the row above are written
  `tie: true` — shown level, because the count cannot resolve a smaller gap —
  and a stamp that skips a day has the skipped day derived from the page's
  own totals (`fillSkippedDays`, gated to look like a day; a catalogue jump
  stays a hole). This is the 2026 running-streams board. A running total is
  never summed by the bot's own clock — that counted three days twice and
  missed three — and never taken as the change in a cumulative, which absorbs
  catalogue the source had not tracked. A hole that cannot be derived is
  reported, never skipped over; only a hand can fill it or move the
  checkpoint past it.

## What's watched today

Spotify monthly listeners, peak monthly listeners, global monthly-listeners
rank, total cumulative streams, per-song Spotify and YouTube counts, and the
five 2026 running totals on the Africa's Biggest board — all from kworb and
YouTube.

## Run it locally

```bash
npm run check:stats
```

It never fails the build: an unreachable source is reported as
`source unavailable`, not an error.

## The ChartMasters anchor (monthly, by hand, one command)

Two figures rest on ChartMasters rather than kworb: the career Spotify total
(kworb's raw + an offset for the recordings kworb's roster misses) and the
2026 running-streams ledgers' anchors. ChartMasters is behind a membership
login and its export is a button, so the bot never reads it — a person signed
in in the site's Browser pane does, and `scripts/chartmasters-anchor.mjs` does
the rest:

```
node scripts/chartmasters-anchor.mjs --snippet        # JS to run in the Playcounts Tool page, per date
node scripts/chartmasters-anchor.mjs --dry-run docs/sourcing/chartmasters/reads/<date>.json
node scripts/chartmasters-anchor.mjs docs/sourcing/chartmasters/reads/<date>.json
```

It pairs ChartMasters' "streams updated through" day N with kworb's page
stamped N+1 (kworb stamps the build day — the pairing under which the gap sits
still), prints every pair it can make from the bot's git history, sets the
offset from the newest pair against kworb's page read right now, re-anchors
each 2026 ledger that has a 2025 close in `docs/sourcing/chartmasters/closes-2025.json`
(anchor, checkpoint, baseline moved together; absorbed readings dropped; board
rows rewritten and re-ordered), and appends a block to
`docs/sourcing/chartmasters/reads.md`. It refuses an offset step over 25M
without `--force` — that is a roster change on one side and wants a look
first. Then `npm run verify` and commit the reading file with the edits.

## When you update a real figure

After you verify and update a number on the site, **bump its `baseline`** in
`scripts/watched-metrics.json` so the monitor compares against the new value.

## Add a new metric

Add an entry to `watched-metrics.json`. If it needs a new source format, add an
extractor to the `extractors` map in `check-stats.mjs` and a pure helper (with a
test) in `stats-lib.mjs`.

# Cert watcher

A daily, read-only tripwire for certifications: it reads every certification
register a machine may read, compares each row that names one of the sixteen
artists (Burna Boy and the board) with the site's own plaque data
(`app/data/certifications.ts`, `app/data/afrobeats.ts`), and keeps **one**
GitHub issue current — "🏅 New certifications found — verify & add". Full
design: `docs/cert-watcher/SPEC.md`; a real run: `docs/cert-watcher/sample-report.md`.

## What it never does

- **Edit site data, commit, push or open a PR.** The job has `contents: read`.
  Every line in the issue is a *lead*: confirm it at the certifying body, then
  add the plaque by hand (data file, `/compare` pricing, the country's register
  link, the updates feed).
- **Say "no new certifications" for a register it did not read cleanly.** A
  bot challenge, a decoy page (`<title>ai/…`), a changed page, a page other
  than the one asked for, a register that shrank below its learned floor, a
  read whose rows naming the sixteen fell under half their peak
  (`unmatched`), a newest-first read that no longer holds the last run's
  newest rows (its rolling control) — each is named in the headline as "not
  read", says nothing about today, and posts **no leads**: rows that would
  have been candidates are listed under "Held back" as plain text only. A
  register read cleanly but quiet for longer than its cadence is **stale**.
- **Match on a title alone**, or report a register row the site is *ahead* of.
  Absence, a lower tier or a missing row is never evidence of anything.
- **Get round a bot wall** (no retries, no header changes, no browser
  User-Agent, no origin hosts or mirrors), read a path robots.txt disallows,
  or keep a cookie past one run. The User-Agent is always
  `burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)`.

## How it runs

- **`.github/workflows/cert-watch.yml`** — daily at 06:17 UTC; Mondays add the
  deep reads. It reads the previous issue body (state and your ticks), runs the
  watcher, and edits the issue — commenting only when something is new or
  changed. `workflow_dispatch` has `dry_run`, `deep` and `only` inputs.
- **`scripts/cert-watch/index.mjs`** — the runner; `http.mjs` — the only other
  I/O (honest User-Agent, per-host queue with at least 1.1 s between requests
  and each host's robots.txt Crawl-delay, typed results, conditional GET).
- **`scripts/cert-watch/adapters/`** — one file per register, each with pure
  parsers tested on real saved responses (`tests/certWatch*.test.ts`,
  `tests/fixtures/cert-watch/`). `adapters/index.mjs` is the registry: every
  register row, automated, held or manual, so the report is always complete.
- **`match.mjs`** (who a row belongs to, and whether the site lacks it),
  **`health.mjs`** (clean / stale / shrank / unmatched / format / challenge), **`state.mjs`**
  (dedupe through a hidden block in the issue body), **`report.mjs`** — pure.
- **`config.json`** — every ruling, each with its `why` and `on`.

## Run it locally

```bash
npm run check:certs                                                   # every register, live, prints the report; never touches an issue
node --no-warnings scripts/cert-watch/index.mjs --dry-run --only=riaa-latin   # one register
node --no-warnings scripts/cert-watch/index.mjs --dry-run --deep              # with the Monday deep reads
node --no-warnings scripts/cert-watch/index.mjs --offline --dry-run           # the saved responses only, no network
node --no-warnings scripts/cert-watch/index.mjs --self-test                   # load the site data and print its counts
```

Node 24 loads the `.ts` data files directly (no `tsx`, no `npm ci`). The
report also goes to `cert-watch-out/`; robots copies, validators and kept
bodies go to `.cert-watch-cache/` (both gitignored).

## Working the issue

- **Tick a candidate's box** to dismiss it; it comes back only if its reading
  changes. When you add the plaque, do nothing else — the next run sees the
  site caught up and lists it once as "cleared".
- **Manual checks** (BPI, RiSA, FIMI, Pro Música Colombia, Ultratop, ARIA,
  AFP): tick them as you do them; the ticks reset each ISO week. RiSA and FIMI
  are manual for good: both ask not to be read by AI tools (Paul's ruling,
  24 Sep 2026).
- **"Held back"** lists rows from a register that came back but was not read
  cleanly. They are not leads and cannot be ticked; they return as leads on
  the register's next clean read.
- **The watchlist** reports its items every run until they land: an item with
  `until: {"register": "atLeastSite"}` lands when the register catches up with
  the site; `until: {"site": {…}}` lands when the site holds the target. A
  landed item says "remove it from config.json" — the watcher never edits config.

## Rulings in `config.json`

| Key | Use it when |
|---|---|
| `knownDivergences` | the site holds a reading on purpose that differs from the register's exact reading (One Dance, Wait For U at RIAA `DI level 11`) |
| `heldRows` | a register row must never become a lead (TCSN's `Asake \| Bad Influence`) |
| `titleAliases` | a register prints a release's title differently; add `register` to scope it to that register's rows only (the TCSN aliases) |
| `leadAliases` | a register credits only the lead act on a record one of the sixteen is on |
| `chartOnlyAliases` | a chart alias (`live-artists.mjs`) must not match certification rows: the registers certify a different recording under the lead (Victony's Soweto for Rema). Chart aliases with no plaque on the site behind them are left out on their own |
| `creditTypos`, `namesakes` | a register misspells a credit (scoped to that register; its name searches then also ask for the misspelling — Pro-Música Brasil's "Teams" for Tems); a different artist shares a name |
| `watchlist` | a single plaque to follow until it lands |
| `staleAfterDays`, `controls` | a register's usual cadence; a new positive-control row after a year rollover (from a saved fixture) |
| `adapters.<id>` | a register held by robots.txt (BPI): enabling it needs a written `permission` record. `permanent: true` (with `ruledBy` and `on`) keeps a register manual for good — RiSA and FIMI — and nothing enables it |

## Adding or refreshing a register's fixtures

Capture real responses with a one-off live run: `--dry-run --only=<id> --deep
--save-raw <dir>`. `--save-raw` keeps the bytes as served, less anything that
names the machine that fetched (`set-cookie`, `X-Remote-Addr` and the other
client-address headers, PROMUSICAE's footer `IP:` / `EX-IP:`) or a person:
every address, however it is written — `mailto:`, plain, `[at]` / `(at)` /
` at `, `&#64;`, `%40` — and TYPO3's encrypted `data-mailto-token` /
`data-mailto-vector` pairs (BVMI's contact block), which are blanked. Copy
what the tests need into `tests/fixtures/cert-watch/` with a
`PROVENANCE.json` entry each (a replayed response carries its exact
request). The config tests fail on any fixture without an entry, and on any
address in one, in any of those shapes (`.gz` files decompressed), or a
labelled machine address — redact a person's address from a real page and
say so in the entry's note.
