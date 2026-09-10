# The career-streams offset — open investigation

> ## RESUME HERE
>
> **The site is publishing a wrong figure right now and it drifts further every run.**
> `spotifyTotalStreams` = 10,983,330,105, about **30M too high**, and the next
> pipeline run makes it worse (10,990,759,354). At 0.25% it is far under the
> metric's 3% alert threshold, so **nothing automated will ever catch it**.
>
> **The hand-measurement was attempted and REFUSED** — see the section below.
> Do not resurrect its number. Do not re-run it the same way.
>
> **Recommended next action, awaiting Paul:** option 2 — set `offset` in
> `scripts/watched-metrics.json` to the measured same-date kworb↔ChartMasters gap
> (~112,305,806), rewrite the note to say what the offset actually is, bump
> `baseline`/`lastSeenValue`. Interim and honest; stops the drift.
>
> **The real measurement, if someone has the appetite:** read every FEATURED row
> directly at `open.spotify.com/track/{id}` and difference against kworb. That is
> the only leg with a verified mechanism behind it (kworb's featured rows lag,
> its lead rows do not). Album pages show no counts when logged out; only
> `/track/{id}` does.
>
> **Still in flight when this was written:** `wf_df6bb814-02a`, the hidden-catalogue
> hunt (compilations, soundtracks, early/regional, and a Spotify-search-vs-kworb
> diff). Its screener had not returned. Resume with
> `Workflow({scriptPath, resumeFromRunId: "wf_df6bb814-02a"})`. Paul's constraint:
> **only tracks carrying his name**.
>
> **Two of Paul's leads are unused:** SoundDNA's 400+ song claim (the decisive
> question is how many of the extra are *on Spotify* — a credit that lives only on
> Apple Music or YouTube contributes zero), and his Liked Songs (325 tracks, mostly
> Burna Boy) as a candidate list — no play counts, and a biased sample.


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

## The hand-measurement was ATTEMPTED and REFUSED — 10 Sep 2026

Workflow `wf_bdd35c54-8c0` ran five slices and a reconciliation. The adversarial
verifier **refused to let a constant be written**, and it was right. Do not
resurrect its number (10,261,287,832 / offset +1,506,977).

**Why it failed — three reasons, all verified:**

1. **The sum was not a sum of things read.** 25.8% of it was kworb's own numbers
   copied in: 75 rows had kworb's value substituted where no read matched, and
   46 further rows were never opened. Worse, the matcher's join key was *exact
   value equality* — `if val in byval and len(byval[val])==1` — so any row that
   matched **could not register a delta by construction**. 9,450,448,644 of the
   10,845,509,076 was kworb's number by one route or another.
2. **The derived offset was a tautology.** Take kworb's roster as the spine,
   substitute kworb where no read matched, fill holes with kworb, subtract
   kworb's total. It can only ever return ~0. This is *precisely* the
   constant-on-both-sides failure the repo already has a memo about, reproduced
   inside the very exercise meant to escape it.
3. **The holes were self-imposed.** "Alone" (214,453,993) was reported as the one
   unmeasurable track big enough to matter; the verifier read it in a single page
   load. The stated cause of 43 other holes — a 50-release cap on the logged-out
   Appears On shelf — is not true.

**A premise I gave the agents was wrong, and all five slices disproved it.** I
told them a single and its album track are different URIs and both count.
**Spotify serves ONE merged play counter per recording, mirrored across every
linked URI** — tested on ~70 distinct-URI pairs with zero exceptions. `Killin Dem`
reads 47,713,464 on both the 2019 single and the African Giant track; `Kilometre`
78,232,842 on both; all 49 recordings shared between Twice As Tall's two releases
match to the unit. A deluxe/explicit/regional alternate or a pre-release single is
**the same plays displayed twice**. Naive slice-summing gave 15,080,387,944;
raw per-URI summing gave 22,337,553,362. Both are nonsense.

### The one real finding to keep

**kworb's FEATURED rows lag Spotify's displayed counters; its LEAD rows do not.**
Verified by direct reads on 10 Sep: `Alone` 214,453,993 exact, `On the Low`
426,418,293 exact, Last Last / Location / Dai Dai / wgft all exact — but
`Ginger (feat. Burna Boy)` read **137,629,170** against kworb's 137,580,321,
**+48,849**. Six of seven identical, and the one that moved is a featured credit.

That is a *mechanism* for a genuine offset, and it is the opposite of the config's
stated one. It is not yet a measured value: it would need every featured row read
directly at `open.spotify.com/track/{id}` and differenced against kworb — which is
the honest version of what this run only pretended to do.

**Also useful:** album pages show no play counts to a logged-out visitor; the only
anonymous per-track counter surface is `open.spotify.com/track/{id}`. And ~304M
across 10 tracks sits under his artist id with **no Burna credit at all** (Joe Dwet
File's `4 Kampe`, Shallipopi's `Laho`, and others), plus two 2009 "Hood" releases
that are a **different, Dutch artist merged into this artist id**.

## The hidden-catalogue hunt — MEASURED, 10 Sep 2026

Workflow `wf_df6bb814-02a`. This one worked. Its screener rebuilt the ground truth
rather than trusting the agents, re-verified all 46 candidates twice over (credit
line from Spotify's own embed JSON, checking `spotify:artist:3wcj11K77LjEY1PkEazffa`
is a *linked* artist rather than a name in a title string; count from each track's
own page), and rejected a third of them.

### THE 400+ CLAIM DOES NOT SURVIVE

**"SoundDNA" does not exist as an artist-credits database.** Two real products carry
the name: DMI Music's *soundDNA* (corporate sonic branding, sold to brands, tracks no
artist credits) and Spotify's **SongDNA** (launched March 2026, Premium-only, a
PER-TRACK collaborators/samples view built on the WhoSampled acquisition — no
artist-level surface, no per-artist song total). **The 400+ figure has no verifiable
provenance.**

**And the real credits database knows FEWER titles than kworb, not more.**
MusicBrainz (MBID 78a19169-ac75-4868-b504-7e2e073118e0) returns 382 *recordings* —
which is close to "400+" and is probably where such a number comes from — but that
counts every remix, radio edit, alternate mix and live take as its own row.
Normalised to distinct titles it collapses to **261**. kworb's 291 rows collapse to
**272 distinct titles**. The credits database knows **eleven fewer** distinct titles
than kworb. The premise is inverted.

### THE MEASUREMENT

**42 tracks survive the credit screen. 80,606,612 streams, every one read
first-hand — no holes.** That is **57.9% of the live offset of 139,328,006**
(published 10,983,330,105 minus kworb's 9 Sep raw 10,844,002,099).

**The mechanism is NOT "featured credits."** Every one of them sits on another
artist's release or a Various-Artists compilation — which is exactly what Spotify's
artist-page "appears on" shelf, kworb's source, drops. That is the real content of
the offset, and it is nothing like what the config claims.

### Three rejections that matter more than the total

1. **`WE PRAY - Single Version`** (4ePie7AbHKyKdQtCte6SYC) — reads 251,495,693,
   **byte-identical to kworb's existing `WE PRAY` row**. A duplicate URI of a
   recording kworb already counts in full. Including it would have added 251M to a
   139M offset — nearly doubling the error it was meant to fix, in the wrong
   direction.
2. **`Streets of Africa`** — an agent searched kworb for "streets", got nothing, and
   called it missing. kworb carries it as **"Street of Africa"**, singular, at
   4,153,487, exactly what the track page reads. A search false-negative, which is
   the failure mode `feedback-search-case-insensitive` already names.
3. **`Cono` and `Hood`** — counted as his on the strength of Spotify's artist link.
   The lyrics are **Dutch**; the parent 2009 release's other track is credited to
   DH / Sosaroekeloos / YK; 2009 predates his recording career. **A Dutch rapper's
   single is merged into Burna Boy's Spotify artist id.**

### The one track that answers Paul's question exactly

**`12 Jewels (feat. RZA)`** — track 12 of 15 on his own *I Told Them…*, the only one
of that album's tracks kworb omits, and it runs **0:27**. Below Spotify's 30-second
streaming threshold, so it can **never register a play**. A song he has that
contributes exactly zero to a stream total. Count it in a SONG COUNT; it can never
move a STREAM total.

Also worth noting: **`My Money, My Baby`** (Queen & Slim soundtrack) is a SOLO LEAD
credit kworb misses entirely — not a feature.

### A methodological correction, recorded so it is not re-litigated

Two agents reported the counts as unreadable and left holes. **They are wrong.**
`open.spotify.com/track/<id>` renders the count. Album pages do not when logged out;
track pages do. That converted every hole into a real number.

### What this means for the constant

The offset's only legitimate content is **recordings on Spotify that kworb does not
carry**. That is now measured at **80,606,612**, leaving ~58.7M of the live 139.3M
unexplained. The remaining candidate is the *other* verified mechanism: **kworb's
featured rows lag Spotify's displayed counters** (`Ginger` read +48,849 against
kworb; six of seven lead spot-reads exact). Measuring that means reading every
featured row at `open.spotify.com/track/{id}` and differencing — now known to be
possible, since track pages do render counts.

**Nothing has been written to `scripts/watched-metrics.json`.** 80,606,612 is a
measured floor for one component, not the whole offset.

## Options, if the measurement cannot be completed

1. **Re-anchor from a hand-measured Spotify total** — chosen, in flight.
2. Set the offset to **~112M**, the measured same-date kworb↔ChartMasters gap,
   and rewrite the note to say what it actually is.
3. **Drop the offset** and publish kworb's raw with attribution.

In every case **the note must be rewritten** — as written it is factually wrong
and is what kept the constant from being questioned while it drifted.
