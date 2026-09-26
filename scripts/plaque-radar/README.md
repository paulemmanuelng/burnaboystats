# Plaque radar

A **private, run-by-hand** list of the handful of titles most likely to have
reached a new certification tier in the markets whose registers can't be read
automatically — the UK (BPI), South Africa (RiSA), Australia (ARIA) and
Portugal (AFP / Audiogest) — for Burna Boy and every artist on the Afrobeats
Board. Instead of searching those registers for every one of them, search
only what the radar names.

```sh
node scripts/plaque-radar/index.mjs                # every market, online
node scripts/plaque-radar/index.mjs --market UK    # one market (UK, ZA, AU, PT)
node scripts/plaque-radar/index.mjs --offline      # saved pages + site data only
```

It writes `~/burnaboy-work/radar/radar-<YYYY-MM-DD>.md` and prints a short
summary. Other options: `--as-of YYYY-MM-DD`, `--top N` (default 10),
`--out DIR`, `--buzzjack DIR`.

## What it will never do

- **Publish.** Nothing it produces goes on the website, the API, the updates
  feed or a PR. Its estimates are not figures; only the register confirms a
  plaque, and a plaque goes on the site only after the body's own register has
  been read.
- **Run on its own.** No GitHub workflow, cron or scheduled task runs it
  (`tests/plaqueRadar.test.ts` fails if a workflow mentions it).
- **Edit site data.** It reads `app/data/` and `docs/sweeps/`; it writes only
  its report and the pages it fetches (BuzzJack, Official Charts) under
  `~/burnaboy-work/`.
- **Read a certification register** — not the BPI's, RiSA's, ARIA's or
  Audiogest's, blocked or allowed. `net.mjs` knows two hosts, BuzzJack's forum
  and the Official Charts Company, and refuses the rest.

## Evidence it uses

| Source | What it gives | Where |
| --- | --- | --- |
| The site's own plaques | each title's current tier per market | `app/data/certifications.ts`, `app/data/afrobeats.ts` |
| Sweep documents | award dates the sweeps printed (`🇬🇧 Silver ✓ (21.03.2025)`) | `docs/sweeps/*-certifications-v1.md` |
| BuzzJack's "<year> BPI Certifications" threads | the BPI's weekly lists, transcribed: a dated step per tier | saved pages in `~/burnaboy-work/buzzjack/<year>/`; online runs fetch only pages newer than the newest saved |
| Official Charts Company | this week's Singles, Albums and Afrobeats charts | fetched online, only if robots.txt allows; kept in `~/burnaboy-work/radar/occ/` so an `--offline` re-run the same day reuses them |
| The site's live platform charts | where each title charts today, per country | `app/data/liveCharts*.ts`, `app/data/liveBoards.ts` |
| Official chart runs | best peak and weeks per country | `app/data/charts.ts`, `app/data/afrobeats.ts` |
| Thresholds | units per tier, per body | `app/data/certThresholds.ts` — the radar types none |

Thread ids live in `THREADS` in `buzzjack.mjs`; a new year's thread needs its
id added there. The forum's search is never used. Requests carry the honest
User-Agent `burnaboystats.com (+https://burnaboystats.com/contact)`, are spaced
at least two seconds apart (longer if a crawl-delay asks), and go through
`curl`; robots.txt is read first and obeyed for Claude-User, the radar's own
token and `*`.

## How the UK list is made

1. **Match.** A list row belongs to a release only when the title matches AND
   the credit names the release's artist (or someone its credit names) —
   never on the title alone. Khalid's "Location" is not Dave and Burna Boy's.
   "Buju Banton" is not BNXN; "Tyla Yaweh" is not Tyla. The artists and
   their names come from the site's own list (`app/data/afrobeats.ts`), so a
   new board artist is matched with no edit; only other spellings ("Wiz Kid",
   "Buju") and look-alikes are typed, in `ALIAS_OVERRIDES` in `normalize.mjs`.
2. **Staircase.** Every dated row for a title becomes a step: units at that
   tier (a 3× Platinum single is 3 × 600,000), dated the first time it was
   seen.
3. **Listed** (confidence high). If a list prints a tier above the one the site
   carries — or a plaque for a title the site has no row for — the list has
   already said it. Read the BPI row.
4. **Projected.** Otherwise: rate = units between the last two steps ÷ weeks
   between them; carried forward from the last step, it gives the day the next
   tier's units would be reached. With one step and a release date (the BPI's
   own export carries one), the release counts as a step at zero — a lifetime
   average, marked as such.
5. **Checked against the lists.** The BPI certifies automatically each Friday,
   and BuzzJack transcribes the full list most weeks. A crossing that fell
   before the last full list, and that three or more full lists have not
   printed, means the straight line ran ahead of a slowing title: it drops to
   the report's appendix. What stays is the crossings **after the last full
   list** (due now), the crossings within four weeks (due soon), and near
   misses one or two lists old (stale).
6. **Momentum.** A title with no usable rate that is charting in the UK this
   week is listed too, low confidence, with the weekly pace it would have
   needed.

Titles never certified in the UK get a separate, low-confidence list from
their chart run alone. South Africa, Australia and Portugal publish no ladder
the radar can read, so they get **chart hints only**, all low confidence:
where the title charts in that country today, its best chart run there, and
how widely it has certified elsewhere.

## Limits — read before trusting a row

- **Estimates, never published.** A straight line fits a steady title and
  flatters a fading one. Only the register confirms a plaque.
- **The lists are a transcription, not the register.** BuzzJack's posters copy
  the BPI's list by hand. Weeks go missing, and from late April to September
  2023 the thread carried only the ten or so titles the BRITs account posted
  each week — a plaque awarded then may never have been transcribed.
- **Credits the lists never matched.** If the BPI files a record under a
  credit that omits the artist, the radar sees no steps for it.
- **One step is not a rate.** A title with a single dated step and no release
  date is listed only if it is charting now; the rest are named in the
  appendix as not projectable.
- **The newest week is thin.** A Friday list is often only partly transcribed
  on the day; the report says how many rows the latest week holds.
- **ZA / AU / PT hints are signals, not unit counts.** No rate, no projection.

## Files

| File | Job |
| --- | --- |
| `index.mjs` | the command: options, loading, network, report |
| `site.mjs` | reads the site's data (read only) |
| `ts-hook.mjs` | lets Node load the site's `.ts` data files |
| `buzzjack.mjs` | reads saved thread pages; fetches newer ones |
| `lists.mjs` | parses the weekly lists in every layout the thread has used |
| `sweeps.mjs` | dated plaques in the sweep documents |
| `normalize.mjs` | title keys and artist-in-credit matching |
| `units.mjs` | tier arithmetic and the projection (pure) |
| `rank.mjs` | builds, judges and ranks the candidates (pure) |
| `occ.mjs` | parses the Official Charts pages |
| `robots.mjs`, `net.mjs` | robots.txt and the two-host network door |
| `report.mjs` | the Markdown report and the terminal summary |

Tests: `tests/plaqueRadar.test.ts` — the projection maths, the list parser and
the ranking on fixtures, plus the guards above. No network.
