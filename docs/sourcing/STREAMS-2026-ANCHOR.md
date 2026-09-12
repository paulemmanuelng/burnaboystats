# The 2026 running Spotify totals — what happened, what they are now (12 Sep 2026)

The "Most-streamed African artist · 2026" row on Africa's Biggest is five live
figures. This file records what went wrong with them, what they are anchored
to, how every number was measured, and the question left open.

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

## Where the board stands, and the question left open

The board prints the anchor itself — the tracker's five figures, dated 9
September — and the ledgers are **held**: dailies are recorded every half
hour, the row does not move. By kworb's dailies Burna Boy closes on Wizkid at
about 1.6M a day from 6.3M behind on 09/10, so a board that moved between
tracker posts would put him past Wizkid around 14 Sep; the tracker's count is
within a few million of kworb's, which is also the size of that gap — so the
day of the crossover is inside the noise, and the tracker may not call it on
the same day.

The choice is Paul's:

- **(a) Move daily on kworb's dailies**, re-anchoring at each tracker post.
  Live, and internally exact; may call a lead a day or two before or after
  the tracker does.
- **(b) Move daily, but mark rows within the measure's noise as joint** — a
  tie inside ~10M shows "joint 2nd", the note says "level within N million".
  Honest about resolution; a little more mechanism (the bot writes `tie`).
- **(c) Hold at the tracker's figures, dated**, and move only when it posts.
  Never disagrees with the reference; the row moves every couple of weeks.

Lifting the hold is one field per metric (`hold`) in
scripts/watched-metrics.json.
