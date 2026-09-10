# The career-streams offset — open investigation

**Opened 10 September 2026.** The site publishes a career Spotify figure that is
**not defensible as it stands**, and this file holds the evidence so the work is
not lost. Nothing has been changed in `app/data/` or `scripts/` yet.

## The finding

`app/data/streamingTotals.ts` publishes:

```
spotifyTotalStreams      = "10.98B"
spotifyTotalStreamsExact = "10,983,330,105"
```

That is **not a reading**. It is `kworb's raw sum + a hand "offset"`, applied by
`scripts/apply-stat-updates.mjs` from the `spotify-total-streams` metric in
`scripts/watched-metrics.json`. Verified to the unit against the config's own
recorded state: `lastRawValue 10836572850 + offset 146757255 = 10983330105`, and
that identity holds on every day of git history from 24 Aug to 8 Sep.

**ChartMasters reads 10,956,307,905. kworb's raw reads 10,844,002,099.**

### The gap decomposes, and it closes exactly

| component | amount | effect |
|---|---|---|
| Read date — site built on kworb's 8 Sep raw, ChartMasters stamped 9 Sep | −7,429,249 | *hides* gap |
| Credit scope — both all-credits | 0 | — |
| Genuine tracker disagreement, same day | 112,305,806 | — |
| **Offset overshoot** | **+34,451,449** | *creates* gap |

`34,451,449 − 7,429,249 = 27,022,200` — the stated gap, to the unit.

**A hypothesis that was tested and DISPROVEN, recorded so nobody re-runs it:**
that ChartMasters was two days stale and timing explained half the gap. It is
backwards. ChartMasters is stamped **9 September**; the site's string is built on
kworb's **8 September** raw and had not moved. ChartMasters is a day *newer*.
Being stale is currently making the site's figure look *closer* than it deserves;
put both on 9 Sep and the disagreement is **34,451,449 (0.31%)**.

### The offset's written rationale is false, in both mechanism and direction

`watched-metrics.json` says *"kworb's artist page undercounts featured credits"*
and *"it grows as featured songs accrue streams"*. Both are wrong at the body:

1. **kworb does not exclude features.** Its Total already contains
   **4,640,678,029** of featured streams — 43% of the figure. Read at
   `https://kworb.net/spotify/artist/3wcj11K77LjEY1PkEazffa_songs.html`
   (10 Sep, stamp "Last updated: 2026/09/09"): Total 10,844,002,099 · As lead
   6,203,324,070 · As feature 4,640,678,029, and lead + feature = Total to the
   unit. Confirmed again by parsing all 291 per-song rows: 190 lead rows sum to
   the lead figure, 101 featured rows to the feature figure.
2. **The offset should be SHRINKING, not growing.** kworb's cumulative rose
   162,102,008 from 25 Aug to 9 Sep — about **10.81M/day** — while its own
   printed Daily is 7,632,505 and ChartMasters' month-over-month implies
   7,065,761/day. A cumulative total rising faster than actual streaming is a
   tracker **absorbing catalogue it previously missed**, and every unit of that
   *closes* the gap the offset exists to fill.

Whatever the offset measures, it can only be **track URIs missing from kworb's
291-track crawl**. Nobody has ever re-derived it as that.

**It is about to get worse.** The next pipeline run writes
`10,844,002,099 + 146,757,255 = 10,990,759,354` — further from ChartMasters, not
closer. The config's own note predicted this: 0.25% is far under the metric's 3%
threshold, so nothing automated will ever catch it. Only a person will.

**One piece of offered evidence that is tautological — do not repeat it.**
"146,757,255 − 119,735,055 = 27,022,200" is not corroboration: given
`published = kworb-8-Sep + offset`, backing ChartMasters onto the 8 Sep raw must
reproduce the gap by construction.

## There is no arbiter

**Spotify publishes no career stream total** — not on the artist page, not in the
public Web API (the artist object has no stream field; `popularity` is a 0–100
score). Logged-out read on 10 Sep gave 51,136,954 monthly listeners, "#70 in the
world", and per-track counts on the top 10 only.

So **both figures are estimates and both are floors** — any credited track a
tracker has not discovered contributes zero. The question is not "which is
correct" but "which method is sounder".

## A second, separate finding

The two trackers split lead vs featured **completely differently**:

| | kworb | ChartMasters |
|---|---|---|
| lead | 6,203,324,070 | 6,883,421,120 |
| featured | 4,640,678,029 | 4,072,886,785 |

ChartMasters' lead is **680,097,050 higher**; its featured **567,791,244 lower**.
The difference between those is 112,305,806 — exactly the all-credits gap. So
roughly **half a billion streams sit on opposite sides of the lead/feature line**
depending on which tracker you ask. "Dai Dai" (~430M) is the obvious case: kworb
asterisks it as a *feature*; Spotify presents it as his own release.

**Anything on the site publishing a lead-only or featured split from kworb will
disagree violently with a ChartMasters-sourced one.** Not yet audited.

## What was chosen, and what is in flight

Paul chose **option 1: re-anchor properly** — hand-measure the career total from
Spotify's own per-track counts and set the offset from that measurement, rather
than swapping one unevidenced constant for an estimated one.

Two workflows were running when this was written. **Neither has been applied.**

- `wf_bdd35c54-8c0` — sums per-track play counts across five slices of the
  discography (early albums, late albums, singles/EPs, major features, feature
  tail), then reconciles and derives the offset, then an adversarial pass.
- `wf_df6bb814-02a` — hunts the **hidden** catalogue: compilations,
  various-artists releases, soundtracks, the 2011–13 Aristokrat-era and regional
  catalogue, and a mechanical diff of Spotify search against kworb's 291-title
  list. Paul's constraint: **only count tracks that carry his name** — no
  uncredited or ghost appearances, no production-only credits, no covers,
  tributes, unofficial uploads or DJ mixes. Ambiguous credits are listed, not
  counted.

Resume either with `Workflow({scriptPath, resumeFromRunId})`; transcripts are
under `subagents/workflows/<runId>/`.

### The traps those runs must not fall into

- **Duplicate releases.** Spotify counts plays per *track URI*, and an album can
  exist as several releases — deluxe, regional, explicit/clean, re-issues. Love,
  Damini's own page says "1 more release". Summing every URI double-counts.
  ChartMasters' **−148,793,058 February 2026** month is almost certainly such a
  restatement, and is the subject of the site's own `/analysis/spotify-unmerge`.
- **A single and its album track are different URIs and both are real plays.** A
  re-issue of the same track is not. De-duplicating on title would be wrong.
- **Unreadable tracks are holes, not zeros.** The output is a **floor**, and an
  offset derived from a floor is a floor too.

### The sanity test for whatever number comes back

The offset should be **positive, modest, and shrinking** — because kworb is a
floor as well and has been absorbing catalogue. A value *larger* than the current
146,757,255 would be surprising and needs extraordinary evidence, not acceptance.

## Paul's own leads, not yet used

- **SoundDNA credits him with 400+ songs** against kworb's 291. If real, that is
  ~110 tracks the trackers miss, and it is the offset. **But the decisive
  question is how many of those are on SPOTIFY** — a credit that exists only on
  Apple Music, YouTube or a Nigerian platform contributes zero to a Spotify
  total. "Songs he has" and "songs kworb misses on Spotify" are different sets.
- **Paul's Liked Songs (325 tracks, mostly Burna Boy)** — a candidate list for
  tracks kworb misses. It carries **no play counts**, and it is a biased sample:
  it can add to the list, never prove it complete.
- Paul signed into Spotify to help. **The Claude in Chrome extension is not
  connected**, so the session was not reachable. A console snippet was given to
  him instead. Note that if SoundDNA is the Spotify for Artists credits view, a
  listener login does not unlock it — that needs artist-account access.

## Options, if the measurement cannot be completed

1. **Re-anchor from a hand-measured Spotify total** — chosen, in flight.
2. Set the offset to **~112M**, the measured same-date kworb↔ChartMasters gap,
   and rewrite the note to say what it actually is.
3. **Drop the offset** and publish kworb's raw with attribution.

In every case **the note must be rewritten** — as written it is factually wrong
and is what kept the constant from being questioned while it drifted.
