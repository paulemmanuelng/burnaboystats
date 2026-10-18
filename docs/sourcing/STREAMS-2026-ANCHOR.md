# The 2026 running Spotify totals — what happened, what they are now (12 Sep 2026; last re-anchored 18 Oct)

The "Most-streamed African artist · 2026" row on Africa's Biggest is five live
figures. This file records what went wrong with them, what they are anchored
to, how every number was measured, and the question left open.

## The anchor now: ChartMasters through 16 Oct 2026 (re-anchored 18 Oct)

Two things were wrong on 18 Oct. The career total's offset alarm had said since the
16 Oct 04:35 UTC run that kworb's raw sum for Burna Boy fell, and the board was
held at its 14 Oct checkpoint: kworb skipped Tems' 15 Oct page (14 Oct -> 16 Oct),
and the stats bot's runs since 16 Oct 21:12 UTC have not committed (its "Verify the
regenerated data" step fails on tests/liveBoards.test.ts, fireboy-dml artwork), so
the committed ledgers never banked kworb's 16 Oct pages. By the 18 Oct 04:37 UTC
run Burna Boy's 16 Oct was a hole the skipped-day fill refuses (his page's totals
leave 12,453,433 for the one skipped stamp, against about 7.0M a day). On Paul's
standing rule of 14 Oct ("use chartmasters for all 5"), all five rows were
re-anchored **together, on one read**, with the career offset: ChartMasters' public
artist pages, fetched 18 Oct 05:52:45–05:52:58 UTC with curl and the anchor
script's user agent (no login, no Tool URL, no `/wp-json/`), each page's "Streams
Over Time" October 2026 point. Every earlier month-end point on all five pages
equals reads/2026-10-08-series.json to the unit. Reading file:
docs/sourcing/chartmasters/reads/2026-10-18.json.

| artist | ChartMasters total | 2025 close | **2026, through 16 Oct** | board before (14 Oct checkpoint) | difference |
|---|---|---|---|---|---|
| Burna Boy | 11,231,093,436 | 9,199,552,674 (corrected) | **2,031,540,762** | 2,010,260,369 | +21,280,393 |
| Wizkid | 11,949,726,670 | 9,956,972,028 | **1,992,754,642** | 1,974,030,006 | +18,724,636 |
| Tems | 6,414,840,033 | 4,441,224,978 | **1,973,615,055** | 1,957,913,974 | +15,701,081 |
| Asake | 4,538,351,943 | 2,904,149,809 | **1,634,202,134** | 1,617,274,987 | +16,927,147 |
| Tyla | 4,926,462,458 | 3,616,238,389 | **1,310,224,069** | 1,300,036,138 | +10,187,931 |

Dated by kworb's 17 Oct pages (N+1); kworb's Tems page was on 2026/10/16 at the
read (the other four on 2026/10/17), so the run used `--kworb-frozen`, which
changes her ledger only. The board reads 2.032B / 1.993B / 1.974B / 1.634B /
1.310B, "as of 17 October 2026", in the same order: Burna Boy leads Wizkid by
38,786,120 and Tems by 57,925,707.

- **The through-date is inferred.** The pages print no day for the newest point.
  Residual = newest total − (14 Oct read's 12 Oct total + kworb's dailies through
  the day):

  | artist | through 15 Oct | **through 16 Oct** | through 17 Oct |
  |---|---|---|---|
  | Burna Boy | +7,527,037 | **+341,102** | −6,844,833 |
  | Wizkid | +6,877,615 | **+828,508** | −5,220,599 |
  | Tems | +5,439,140 | **+308,468** | −4,822,204 |
  | Asake | +6,018,685 | **+117,319** | −5,784,047 |
  | Tyla | +3,430,847 | **+51,264** | −3,328,319 |

  kworb's 16 Oct pages' dailies (Burna 6,900,663, Wizkid 5,974,572, Tems
  5,130,672, Asake 5,572,190, Tyla 3,432,010) were never committed and are taken
  from the bot's 17 Oct run logs (each artist's total through 16 Oct minus its
  total through 15 Oct). Tems' 14 Oct is the bot's own fill from her pages'
  totals (5,131,269), and her 16 Oct, with no 17 Oct page, is one ordinary day
  (her last stamped daily, 5,130,672), as the 14 Oct read did. 16 Oct is under
  0.15 of a day for every artist and a day either side misses by most of a day.
- **Cross-check, not used.** @WITTIEWIZ's "yesterday — Friday, October 16, 2026"
  post (a hand read of Paul's screenshot; X was not fetched): Burna Boy 7.28M,
  Wizkid 6.28M, Asake 5.99M, Tems 5.24M, Tyla 3.39M. Against kworb's dailies for
  ChartMasters' 16 Oct (pages stamped 17 Oct) that is +94,065, +230,893, +88,634
  and +10,417 (Tems has no 17 Oct page; +109,328 on her 16 Oct one); against the
  pages stamped 16 Oct, +379,337, +305,428, +417,810, +109,328 and −42,010.
  ChartMasters' mean daily lead over kworb's dailies across the four days
  (Burna +85,276, Wizkid +207,127, Asake +29,330, Tyla +12,816) brings the first
  set to within 8,790, 23,766, 59,304 and 2,399 of the post's rounded figures:
  the post reads as ChartMasters' 16 Oct day, paired as this read pairs it. With
  5.24M for Tems' 16 Oct her residual is +199,140, still 16 Oct. No hole is left
  for the fill once every checkpoint is on 17 Oct, so the post fills nothing.
- **No Playcounts Tool confirmation** was taken. Confirm at
  `valid_as_of=20261016` when Paul next signs in; any mismatch means this anchor
  does not apply.
- **Ledger rules kept.** One read, one date, all five; checkpoint, baseline and
  anchor moved together; the banked 15 Oct dailies were absorbed. Tems'
  `lastStamp` stays on her 14 Oct page, so her 16 Oct page (inside the
  checkpoint) records nothing, and the movement from her 14 Oct page to her next
  page after 17 Oct is shared among every skipped stamp, those inside the
  checkpoint included, as on 14 Oct. The five ledgers' `lastSeenValue`,
  `lastSeenAt` and `lastChanged` were set to the new values and 18 Oct by hand,
  as a publish sets them (the script stamps only the career total): with the
  bot's runs not committing, Tems' `lastSeenAt` had sat on 15 Oct and
  tests/staleness.test.ts flagged her in ci.yml. The career total's offset was re-measured on
  Burna Boy's same-date pair (152,487,385, +21,144,556; see
  docs/sourcing/CAREER-STREAMS-OFFSET.md). tests/statsGuards.test.ts and
  tests/streams2026CmAnchor.test.ts pin the anchor by relation to the read and the
  closes, with a Tems-only re-anchor and the 14 Oct anchors as negative controls.
- **Marks.** Wizkid's 1,992,754,642 prints 1.993B, strictly past 2025's 1.986B
  (Burna Boy's 1,986,007,572), so the board's derived notes now name him beside
  Burna Boy as past it; nobody new is past two billion. That is a mark the
  published row crosses; no /updates entry was added (the feed carries Burna Boy
  stories only).

## The 14 Oct anchor: ChartMasters through 12 Oct 2026

Paul, 14 Oct: "use chartmasters for all 5 now". kworb's Tems page froze on its
2026/10/12 build while the other four moved to 2026/10/13, and the board publishes
all five rows on their common day or none, so it was held on 12 Oct. A Tems-only
re-anchor that morning would have put one ChartMasters read beside four kworb
ledgers and was reverted. This one moves **all five together, on one read**:
ChartMasters' public artist pages, fetched 14 Oct 13:22 UTC (no login, no Tool
URL, no `/wp-json/`), each page's "Streams Over Time" October 2026 point. Every
earlier month-end point on all five pages equals reads/2026-10-08-series.json to
the unit. Reading file: docs/sourcing/chartmasters/reads/2026-10-14.json.

| artist | ChartMasters total | 2025 close | **2026, through 12 Oct** | board before (kworb 12 Oct) | difference |
|---|---|---|---|---|---|
| Burna Boy | 11,203,035,730 | 9,199,552,674 (corrected) | **2,003,483,056** | 1,996,343,307 | +7,139,749 |
| Wizkid | 11,925,293,062 | 9,956,972,028 | **1,968,321,034** | 1,961,318,916 | +7,002,118 |
| Tems | 6,394,064,871 | 4,441,224,978 | **1,952,839,893** | 1,947,409,574 | +5,430,319 |
| Asake | 4,516,099,926 | 2,904,149,809 | **1,611,950,117** | 1,605,224,127 | +6,725,990 |
| Tyla | 4,912,967,516 | 3,616,238,389 | **1,296,729,127** | 1,293,642,422 | +3,086,705 |

Dated by kworb's 13 Oct pages (N+1), Tems with `--kworb-frozen`. The board reads
2.003B / 1.968B / 1.953B / 1.612B / 1.297B, "as of 13 October 2026", in the same
order: Burna Boy leads Wizkid by 35,162,022 and Tems by 50,643,163.

- **The through-date is inferred.** The pages print no day for the newest point.
  Residual = newest total − (5 Oct read + kworb's dailies through the day):

  | artist | through 11 Oct | **through 12 Oct** | through 13 Oct |
  |---|---|---|---|
  | Burna Boy | +7,139,749 | **+449,615** | −6,240,519 |
  | Wizkid | +7,002,118 | **+1,307,298** | −4,387,522 |
  | Tems | +5,430,319 | **+514,458** | −4,401,403 |
  | Asake | +6,725,990 | **+1,354,894** | −4,016,202 |
  | Tyla | +3,086,705 | **+49,799** | −2,987,107 |

  kworb has no 14 Oct page yet, so "through 13 Oct" takes one more ordinary day
  (each artist's newest stamped daily); Tems has no 13 Oct page either, so her
  12 Oct is one ordinary day too (4,915,861, her 12 Oct page's daily), as the
  8 Oct read did for a skipped day. 12 Oct is under 0.3 of a day for every
  artist and a day either side misses by most of a day. Wizkid's and Asake's
  ~1.3M is ChartMasters running ~0.19M a day ahead of kworb's dailies over the
  week.
- **The morning reads agree.** At 07:22/07:34 UTC Burna Boy, Tems and Tyla were
  already at these totals and Wizkid (11,919,467,185) and Asake (4,510,727,207)
  were one day behind; their steps to the 13:22 read, +5,825,877 and +5,372,719,
  equal kworb's 12 Oct dailies (5,694,820 and 5,371,096) to within 131,057 and
  1,623.
- **No Playcounts Tool confirmation** was taken. Confirm at
  `valid_as_of=20261012` when Paul next signs in; any mismatch means this anchor
  does not apply.
- **Ledger rules kept.** One read, one date, all five; checkpoint, baseline and
  anchor moved together; the banked 13 Oct dailies were absorbed. Tems'
  `lastStamp` stays on her 12 Oct page, and her dailies resume from the first page
  stamped after 13 Oct (a 13 Oct page is inside the checkpoint). If that page
  skips stamps, the movement from her 12 Oct page covers stamp 13 as well:
  `fillSkippedDays` shares it among every skipped stamp, 13 Oct included, and
  fills only those after the checkpoint (fixed on review the same day: the
  first cut divided it among the later days only: a 15 Oct page would have
  left a hole at 14 Oct, and a page on 16 Oct or later would have overcounted
  her by about a day, inside the 0.5–1.5× gate). The career
  total's offset was re-measured on Burna Boy's same-date pair (131,342,829; see
  docs/sourcing/CAREER-STREAMS-OFFSET.md). tests/statsGuards.test.ts and
  tests/streams2026CmAnchor.test.ts pin the anchor by relation to the read and the
  closes, with a Tems-only re-anchor as the negative control.
- **Two billion.** Burna Boy's 2,003,483,056 is past two billion and past his
  2025 record (1,986,007,572), and the board prints 2.003B, so its 2026 note says
  both; that agrees with the /updates line and the /records/firsts entry of
  14 Oct (ChartMasters' own post that day).

## The 8 Oct anchor: ChartMasters through 5 Oct 2026

**Confirmed at the source, 8 Oct:** Paul opened the Playcounts Tool at
`valid_as_of=20261005` for all five on his account (one tab each; the agent read
the pages he opened). Every page printed "Streams updated through October 5,
2026" with the totals below to the unit, Wizkid's 11,882,989,347 included, so
the inferred date and the fan-graphic figure both hold. Recorded as
`toolConfirmation` in reads/2026-10-08.json.

Paul, 8 Oct: "check chartmasters to update". All five rows were re-anchored
together on **ChartMasters' public artist pages** (chartmasters.org/artist/<slug>/),
read 8 Oct 05:04–05:08 UTC with curl and no login. robots.txt allows those pages
for `*`; it bars the Playcounts Tool's `?`-URLs and `/wp-json/`, which were not
touched. Reading file: docs/sourcing/chartmasters/reads/2026-10-08.json; the
month-end series for all five: reads/2026-10-08-series.json.

**Where the exact figures are.** Each page's "Streams Over Time" chart prints
every month-end running total exactly, in the `data-total` attribute of its chart
points; the newest ("October 2026") is the total to date. The rest of the page
rounds ("8.0b lead"), and its ranking sentence is lead-only, a different metric.
It is the board's metric: every "September 2026" point equals the Playcounts
Tool's 30 Sep total (reads/2026-10-02.json) to the unit, for all five, and that
total minus each close is the 1 Oct anchor (commit bb9232d7) to the unit.

| artist | ChartMasters total | 2025 close | **2026, through 5 Oct** | board before (kworb 4 Oct) | difference |
|---|---|---|---|---|---|
| Burna Boy | 11,153,473,176 | 9,199,552,674 (corrected) | **1,953,920,502** | 1,940,468,231 | +13,452,271 |
| Wizkid | 11,882,989,347 † | 9,956,972,028 | **1,926,017,319** | 1,914,458,563 | +11,558,756 |
| Tems | 6,357,018,828 | 4,441,224,978 | **1,915,793,850** | 1,905,226,177 | +10,567,673 |
| Asake | 4,476,744,569 | 2,904,149,809 (new) | **1,572,594,760** | 1,561,045,782 | +11,548,978 |
| Tyla | 4,890,753,923 | 3,616,238,389 (new) | **1,274,515,534** | 1,267,523,885 | +6,991,649 |

Dated by kworb's 6 Oct pages (ChartMasters' day N pairs with kworb's page
stamped N+1), the newest stamp all five shared when read. The board reads
1.954B / 1.926B / 1.916B / 1.573B / 1.275B, "as of 6 October 2026", in the same
order: Burna Boy leads Wizkid by 27.9M and Tems by 38.1M.

- **The through-date is inferred.** The pages print no day for the newest point.
  5 Oct is the only fit: the Tool's 2 Oct totals plus kworb's dailies leave one
  ordinary day for the 4 Oct kworb skipped (Burna Boy 6,668,941, Tems 5,336,450,
  Asake 6,372,169) or a residual of 19,372 (Tyla); and @theowensblock's graphic
  labelled 5 Oct (a lead: the account labels tables with ChartMasters'
  through-date, and its "1 Oct" table equals the Tool's 1 Oct read) prints Burna
  Boy's and Tems' totals to the unit.
- **† Wizkid's page had already moved on** to 11,889,076,613 (6 Oct), so his
  5 Oct total is the one that graphic prints from chartmasters.org. It is 634,667
  above his own kworb-daily ledger for the same day (1,925,382,652), which had no
  hole. **Before merge, open the Tool at `valid_as_of=20261005`, one tab per
  artist**, and check "Streams updated through October 5, 2026" and the five
  totals above; any mismatch means this anchor does not apply. If Paul will not
  sign in, the fallback is Wizkid on his own ledger and the other four from the
  pages, which mixes two reads in one anchor and is second best.
- **The closes.** Each page also prints its December 2025 point, the total through
  31 Dec 2025. Wizkid's and Tems' derived closes equal it to the unit. Asake's and
  Tyla's 22 Sep derivations (2,904,229,392 / 3,617,292,368) carried the kworb
  ledger's small error and sat 79,583 and 1,053,979 high; closes-2025.json now
  holds the printed points. Burna Boy's corrected close is kept: his December 2025
  point is 9,508,991,024, and the 309,438,350 Spotify reallocated in February 2026
  (/analysis/spotify-unmerge) shows in his series as February's −148,793,058
  month. Subtracting the raw point would give 1,644,482,152, the counter's change
  and not 2026's streams. No other artist has a negative month.
- **Why now.** The board had not drifted: once whole days are counted, every gap
  to ChartMasters is under one day's streams. It was stuck. kworb skipped its
  5 Oct page for Burna Boy, Tems and Asake, and their kworb totals then rose too
  little across the gap (Burna Boy +9,100,860 over two days, 6,783,330 of it the
  6 Oct daily, leaving 2.3M for 5 Oct) or fell (Tems −16,214,692, Asake
  −97,680,882), so the skipped-day fill refused and three holes held all five on kworb's 4 Oct. Only a
  hand-fill or a checkpoint past the hole clears that; this re-anchor is the
  second, for all five at once.
- **Ledger rules kept.** All five moved together, on one read and one date;
  checkpoint, baseline and anchor moved together; the banked dailies (all on or
  before 6 Oct) were absorbed; `lastStamp` stays on the 6 Oct pages so the
  skipped-day fill can work from them; kworb's dailies continue from 7 Oct. The
  career total's offset was re-measured on the same pair (128,365,865; see
  docs/sourcing/CAREER-STREAMS-OFFSET.md). tests/statsGuards.test.ts pins the
  anchor and tests/streams2026CmAnchor.test.ts holds each row to the read, with
  the 4 Oct board and a lone re-anchor as negative controls.
- **Records not yet reached.** Burna Boy's 1,953,920,502 is 32,087,070 short of
  his 2025 record (ChartMasters' own year, 9,508,991,024 − 7,522,983,452 =
  1,986,007,572, the board's 1.986B) and 46,079,498 short of two billion: about
  five and seven days at his pace. Neither is claimed. The 2025 note, the 2026
  note and the Africa's Biggest intro now derive both from the rows and say so
  only once a printed row is strictly past the mark ("1.987B" against "1.986B",
  "2.001B" against two billion), so the crossing is called up to half a million
  late, never early; /records/visualized uses the same rule (it used to give the
  record away on equal strings). No updates entry until a mark is crossed in
  the data.

## What the board said, and why it was wrong

On 11 Sep the board read Burna Boy 1.774B, Wizkid 1.772B — Burna Boy second,
past Wizkid. The fan tracker the row has always been checkpointed to
(@WITTIEWIZ) posted on 10 Sep: Tems 1.770B, Wizkid 1.764B, Burna Boy 1.756B.
Paul caught it.

Nothing single was wrong. The summing was broken, and that turned out to be
a small part of it; the rest was a checkpoint a few million out and two
counts that differ by a few million — each inside a day's streams, all of
them leaning the same way.

**1. The summing was broken — but nearly count-neutral.** From 27 Aug the top
three were summed from kworb's per-artist "Daily" column, one addition per
calendar day *of the bot's own clock*. That gate could not tell "the same page
read twice" from "a new day". For Burna Boy, sixteen additions covered
sixteen kworb days (08/26–09/10) with three repeats — so **three days were
never added**: 08/28, 08/31 and 09/09.

| runs (UTC) | added twice (Burna / Wizkid / Tems) | why |
|---|---|---|
| 27 Aug 09:54 and 20:34 | 8,463,000 / 6,268,000 / 5,106,000 | commit f28f177 (10:44) renamed the gate field from `lastSeenAt` to `lastAccumulatedAt` without back-filling it, so the 20:34 run saw no gate |
| 28 Aug 18:47 and 29 Aug 02:15 | 8,317,000 / 6,186,000 / 5,445,000 | run dates differ, page unchanged |
| 1 Sep 22:08 and 2 Sep 00:21 | 7,825,000 / 5,717,000 / 5,000,000 | run dates differ, page unchanged |

That is Burna Boy's pattern. Wizkid's row repeated five times and Tems' eight
(their rows on kworb's table move less regularly), so each of them also lost
about as many days as it doubled. Gross over-count Burna +24.6M, Wizkid
+18.2M, Tems +15.6M (lower bounds for the last two); net, because a stable
daily makes each repeat worth about one miss, **about +0.7M Burna, −0.5M
Wizkid** — roughly 1.5M of the 8M by which the board's Burna–Wizkid gap
disagreed with the tracker.

**2. The measures agree; the rest was small things adding up.** Summed once
per kworb day — the dailies recovered from the bot's commits and, for the
days it never landed, from the failed runs' logs (08/31 = 7,666,000, 09/09 =
7,633,000) — kworb's own column moves Burna Boy about **+114M** over
08/27–09/09 against the tracker's **+113M**, and Wizkid about **+87M** against
**+90M**. The two counts are within a few million of each other. The 8M by
which the board favoured Burna Boy on 11 Sep was the sum of: the 27 Aug
checkpoint already sitting a few million in his favour against the tracker
(the typed figures and the board's own state that day disagree by 8M Burna /
5M Wizkid, and which kworb day the tracker's 26 Aug post covered cannot be
settled from here); the doubled days, ~1.5M; and the two counts' own
difference, a few million. None of it was a real crossover — and no summing
of kworb's dailies can be more certain than a day's streams at each end of
its window.

Two more things learned on the way:

- kworb's "Daily" is not the day's change in the cumulative, and the
  cumulative is no substitute: between the 27 Aug and 9 Sep archived tables
  Tems' total rose **138M while her days summed to 74M** — kworb absorbing
  catalogue it had not tracked, counted as if streamed. A running-year total
  cannot be a difference of cumulatives.
- kworb regenerates each artist's page on its own schedule and stamps it with
  the data day; the day-D page goes up during the UTC evening of D or later
  (Burna Boy's 09/08 total was in this repo at 21:16 UTC on 8 Sep; his 09/09
  page appeared after 22:01 UTC on 9 Sep). At one moment on 12 Sep his page was
  stamped 09/11 and Tems' 09/10. Five pages read in one run are not five
  readings of the same day until their stamps say so.
- Asake and Tyla were typed on 27 Aug and never moved; by 10 Sep the tracker
  had them 85M and 47M higher.

## The mechanism now

Each of the five is a **ledger**: a checkpoint (the total through a date) plus
each later day's streams under the date kworb's page is stamped with.

- The bot reads each artist's own kworb page every half hour — `Last updated`,
  `Daily` — and records the daily under that date, once, however often the
  page is read. A daily that is not a positive number up to 25M is refused
  before it can enter the ledger.
- A ledger's total through a later day is the checkpoint plus every daily to
  it, and exists only where no day is missing: **a hole is a hole, never a
  zero.** Holes are named in every run's summary; only a hand fills one (from
  the tracker's own daily post) or moves the checkpoint past it.
- The five publish together, on the newest day every ledger covers, and
  write that day into the row (`asOf`, rendered "as of 10 September 2026").
  All five rows or none: one member failing the absolute sanity bounds, one
  anchored edit failing, or a `hold` on any member holds the group. (No
  relative jump guard applies to a ledger — after a hold or a lagging page a
  week's worth of gated dailies is a legitimate move.) Each checkpoint rolls
  forward on publish; the day-by-day record stays in git.
- `kind: "peak"` — a year-to-date total only moves up.

## The anchor

The tracker's "Most Streamed African Artists on Spotify in 2026 so far" post of
**10 Sep 2026, 11:31 UTC** — x.com/WITTIEWIZ/status/2098011367378735458:

| artist | tracker, 10 Sep |
|---|---|
| Tems | 1.770B |
| Wizkid | 1.764B |
| Burna Boy | 1.756B |
| Asake | 1.420B |
| Tyla | 1.185B |

**Through which kworb day?** The account labels its daily posts "yesterday —
Thursday, September 10" and posts them the next day, i.e. it reads the day-D
pages the morning after D. This post went up mid-morning on the 10th, so it is
through **09/09**. (An earlier draft of this file dated it by a premise about
kworb's publishing hour that the repo's own history refutes — see above; the
dating rests on the account's convention, not on kworb's clock.) Burna Boy's
09/09 page was up by 05:21 UTC on the 10th and Wizkid's by 10:03 (their
dailies, 7,633,000 and 6,247,000, are in the failed runs' logs), so the post
could see them. **Tems is the exception**: kworb never published a 09/09 page
for her — her row read the 09/08 daily (4,836,000) in every read from 9 Sep
01:37 to 11 Sep 06:05 UTC and then the 09/10 page. Her tracker figure is
therefore through her 09/08 page, and 09/09 is a day kworb skipped for her.
Her ledger is anchored at 09/09 all the same, at the tracker's figure: the
reference lacks that day too, and a checkpoint at 09/08 would be a hole no
hand could ever fill. Her page skips days; expect more of these. A one-day
misattribution elsewhere would shift a figure by that artist's daily, 3–8M.

Each ledger's anchor is that figure on 09/09. The dailies since:

| artist | 09/10 daily | source | 09/11 daily | source |
|---|---|---|---|---|
| Tems | 5,357,158 | her page, stamped 09/10, read 12 Sep (exact) | — | page not yet regenerated |
| Wizkid | 6,046,000 | bot's table read, 11 Sep 13:46 UTC (3 decimals of a million, ±500) | 6,229,175 | his page (exact) |
| Burna Boy | 7,714,000 | bot's table read, 11 Sep 13:46 UTC (±500); that page's total, 10,851,429,147, is one day above the exact 09/09 read of 10,844,002,099 in CAREER-STREAMS-OFFSET.md, which pins the stamp | 7,828,573 | his page (exact) |
| Asake | 5,727,000 | **estimated**: no kworb read of that page exists; @WizStatz's 10 Sep reading 5.94M × 0.9642, the mean kworb/WizStatz ratio that day on the three artists kworb was read for (±0.15M) | 5,918,975 | his page (exact) |
| Tyla | 3,413,000 | **estimated** the same way from 3.54M (±0.1M) | 3,546,051 | her page (exact) |

Both estimates sit on rows more than 300M clear of any contested place, below
the million the board displays to. (If WizStatz's "10 Sep" figures describe
09/09 streams, pairing like with like against kworb's 09/09 dailies gives
Asake 5.787M and Tyla 3.449M — inside the stated error either way.) Re-anchor from the tracker's next "so far"
post, whenever a hole is reported, and whenever the two drift by more than a
day's streams.

## A second fixed point (15 Sep 2026)

The tracker's earlier post — 5 Sep 2026, 19:50 UTC, "All African artists with
over 1 BILLION streams gained in 2026 on Spotify so far": Tems 1.750B, Wizkid
1.739B, Burna Boy 1.725B, Asake 1.396B, Tyla 1.172B — is through kworb's 09/05
pages (posted after that evening's pages went up). Between it and the 10 Sep
post (through 09/09, four kworb days) the tracker moved Burna Boy +31M,
Wizkid +25M, Tems +20M; kworb's own dailies for 09/06–09/09, as the bot read
them, sum to 31.9M, 25.0M and 20.7M. The tracker is the sum of kworb's dailies
to the rounding, and the ledger's method reproduces its movement. Asake +24M
against kworb's 23.8M and Tyla +13M against 13.9M say the same for the rows
below.

Through 14 Sep the ledger reads Tems 1,796.4M, Burna Boy 1,795.3M, Wizkid
1,794.3M — joint first, as the rule intends; the first fan call of "Burna Boy
now the most-streamed" appeared on 15 Sep, on a 1–2M margin no count can
resolve. By kworb's dailies the gap clears ten million around 19–20 Sep, and
the board will say so then, on a kworb date.

## A third fixed point, and a re-anchor (16 Sep 2026) — the tracker is ChartMasters

*Confirmed 17 Sep 2026 on Paul's ChartMasters account: the tracker's three totals are ChartMasters' Playcounts Tool totals "through September 15, 2026" to the unit (Burna Boy 11,010,480,657, Wizkid 11,765,176,755, Tems 6,248,869,339), and its 2026 figures are those minus the 2025 closes. ChartMasters' data day N pairs with kworb's page stamped N+1, so the 16 Sep checkpoint date below is the right kworb date for a ChartMasters figure through 15 Sep — see docs/sourcing/CAREER-STREAMS-OFFSET.md.*

@BurnaBoyStats — the fan page, not this site — posted on the morning of 17 Sep
2026 a "Most-streamed African artists in 2026" table with exact figures, method
stated on the graphic ("2026 streams = total streams − total at the end of
2025. Totals are the sum of the artist's own Spotify profile counts"), a daily
column for 16 Sep, and Burna Boy's 2025 close at 9,199,552,674 — the corrected
close this site published on 21 Aug at /analysis/spotify-unmerge:

| artist | total, 16 Sep | 16 Sep daily | 2026 so far |
|---|---|---|---|
| Burna Boy | 11,010,480,657 | 7,509,481 | **1,810,927,983** |
| Wizkid | 11,765,176,755 | 6,287,773 | **1,808,204,727** |
| Tems | 6,248,869,339 | 5,362,022 | **1,807,644,361** |

Against this site's own ledger through kworb's 2026/09/16 pages (checkpoint
14 Sep + the 15 and 16 Sep dailies; Tems' 15 Sep derived from her page's
totals, 5,265,672, the page having skipped that day):

| artist | ledger, 16 Sep | tracker | gap |
|---|---|---|---|
| Burna Boy | 1,810,143,793 | 1,810,927,983 | +784,190 |
| Wizkid | 1,806,161,655 | 1,808,204,727 | +2,043,072 |
| Tems | 1,806,917,767 | 1,807,644,361 | +726,594 |

Two different measures — kworb's tracked roster and its dailies against a sum
of every credited track's own counter — agree within a day's streams on all
three; the tracker's measure runs a little higher, most of all for Wizkid,
whose 16 Sep daily it counts at 6,287,773 against kworb's 5,997,915. The same
day kworb's Wizkid cumulative moved only 1.4M while his Daily read 6.0M — a
catalogue adjustment inside kworb's total, and one more reason the ledger
sums dailies rather than differencing cumulatives.

The career figure corroborates the method from the other side: the tracker's
Burna Boy total, 11,010,480,657, sits 2,872,057 above this site's own
11,007,608,600 for the same day (kworb's raw 10,895,302,794 plus the
ChartMasters-anchored offset of 112,305,806) — the 2.9M being the offset a week stale; read directly on 17 Sep, ChartMasters is that total exactly.

**Re-anchored 17 Sep 2026** at the tracker's three exact figures through
16 Sep; Asake (1,460,097,619) and Tyla (1,208,808,241) at the ledger's own
figures for the same day, the tracker having printed the top three only.
Checkpoint, baseline and anchor moved together; readings dropped; `lastStamp`
set to the 16 Sep pages. The board reads Burna Boy 1.811B, Wizkid 1.808B,
Tems 1.808B — Burna Boy first in order for the first time this year, and all
three marked joint: 2.7M and 0.6M are inside the ten-million resolution, so
the note says "joint first" and the feed says the trackers have him on top by
a margin the count cannot resolve. That is the rule working as chosen below.

## The decision revisited (17 Sep 2026): option (a) — the lead is called

With the board reading Burna Boy 1.811B, Wizkid 1.808B, Tems 1.808B and every
tracker naming Burna Boy the most-streamed African artist of 2026, Paul retired
the joint mark: "it is not joint — Burna Boy is now No. 1 based on fact." The
board now ranks the rows by value and names the leader; the note prints the
spread beside them ("with Burna Boy ahead of Wizkid and Tems, the three of
them separated by about 3 million"), and the phone's year board reads
"01 Burna Boy · 2026 · 1.811B so far · in progress · Leads", gold. `tieWithin`
is removed from all five members (tiedRows() marks nothing without it); the
code path and the loader's joint wording stay for any future decision.
tests/streams2026Ties.test.ts reads the rule from the config, so putting the
key back would bring the marks back with it.

## The decision (12 Sep 2026): option (b) — superseded 17 Sep

Paul chose **(b)**: the row moves every day on kworb's dailies, re-anchored
at each tracker post, and a row inside the method's resolution of the row
above is shown **joint** rather than called a lead.

- `tieWithin` = 10,000,000. A tracker-anchored count carries about a day's
  streams of uncertainty at each end of its window (5–8M for these artists),
  so a gap under ten million is not a lead the board can support. Ties chain:
  three rows each within ten million of the next are one level group, and the
  note prints the spread beside them ("joint first, the three of them
  separated by about 14 million"). The mark comes off the day a gap opens past
  ten million — on a kworb date, not a run time.
- The bot writes the mark with the value (`1.770B", tie: true`), the board's
  own `tie`/`rankOf` idiom from the YouTube days board, and
  tests/streams2026Ties.test.ts holds the shipped file to the rule.
- **Skipped stamps.** kworb regenerates Tems' page irregularly (09/08 → 09/10,
  and 09/11 had not appeared by 14:43 UTC on 12 Sep). A daily-sum ledger
  would hold a hole at the skipped day, and the whole group with it, most
  weeks. The page carries the missing figure: between two stamps the total
  moved by every day in between, so the skipped day's streams are the total's
  movement minus the stamped day's own Daily. `fillSkippedDays` derives it,
  accepts it only if it lands within 0.5–1.5× the two stamped dailies around
  it (a catalogue jump inside the gap fails that and stays a hole for a
  hand), and the run summary names every derived day. "A hole is a hole,
  never a zero" still holds: a derived day is a figure with a stated
  provenance, not a zero. The movement is shared by every stamp between the
  two pages, including any on or before the checkpoint (a re-anchor can put
  the checkpoint past the last page kworb served, as Tems' did on 14 Oct);
  those are already inside the checkpoint and are not filled.
- The other two options, for the record: (a) move daily and call every lead
  — exact within its method, but the Burna–Wizkid gap is the size of the
  method's noise, so it would name crossovers the tracker may not, which is
  the situation Paul caught; (c) hold at the tracker's figures and move only
  on its posts — never disagrees with the reference, but a row labelled in
  progress that sits still for a fortnight reads as broken.

Rolling the checkpoint forward drops the derived dates it absorbed; re-anchor
from the tracker's next "so far" post as before.
