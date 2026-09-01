# Retractions — everything I reported that did not survive checking

Written before making any edit. **Net result: no data change is warranted. The
site was right in every case; the errors were all mine.**

## 1. The five "understated Nigerian tiers" — all false

I matched register rows to site rows on **normalised title + country**, ignoring
the artist. TCSN parenthesises colliding titles and the parenthesis names the
owner, so the evidence was sitting in the quotes I had already captured:

| I reported | TCSN's actual credit | Truth |
|---|---|---|
| Wizkid *Everyday* Silver → Platinum | **Fireboy DML** — "Everyday (Fireboy Dml)" | site correct |
| Asake *Reason* Platinum → 5× | **Omah Lay** — "Reason (Omah Lay)". Asake's own row reads *Platinum* | site correct |
| Ayra Starr *Away* Gold → 2× | **Davido** — "Away (Davido)"; Davido already holds x2 | site correct |
| Rema *Bounce* Silver → Gold | **Bella Shmurda & Seyi Vibez**; Seyi already holds Gold | site correct |
| Victony *Risk* Silver → Gold | **Davido ft. Popcaan** — Davido's "Risky / Risk" | site correct |

I also reported Asake *2:30* as understated at Platinum. **It already carries
`x: 4`.** My worklist printed the `tier` field and dropped `x`.

## 2. "Bad Influence" — must NOT be added

The repo has already adjudicated this **three times**, from both sides:

- `asake-certifications-v1.md` — removed from Asake: the register row is real,
  but **no Asake recording of that title exists** on any service, and it is
  absent from every Asake project. It is **Omah Lay's** 2020 *Get Layd* track.
  TCSN's `artiste` field has a data-entry error — the same register spells
  Central Cee "Centra Cee".
- `omah-lay-certifications-v1.md` — removed from Omah Lay too: the register
  credits Asake, so a title-side match would wrongly credit it. Called out as
  "the single likeliest source of over-count in any normalised title match".
- `refresh-2026-08-26.md` — **HELD**: "A plaque is not published for a release
  that cannot be found."

That last doc warns, in terms: *"the register's exact strings were used rather
than normalised ones, because normalising is how 'Bad Influence' gets misfiled."*
I normalised, and got misfiled. **The existing decision stands.**

## 3. "No Stress" — not a missing plaque, and not a Burna Boy track

It is already on the site at `afrobeats.ts:179` under **Wizkid**, a lead single,
ZA Platinum + NG Gold. Paul is right that it is a Wizkid song.

The agent that "found" it reported `ARTIST: Wizkid feat. Burna Boy` — a credit
it appears to have invented, since the board pass read the same row as plain
"Wizkid". Its tier was also inferred from an award-image filename rather than
text. **Treat that agent's three South African rows as unreliable.**

## The lesson, which is now twice-learned

Both of today's errors are the same error: **matching records on a normalised
title instead of on the identity the source itself publishes.** It produced the
duplicate "On the Low" entry this morning and five phantom tier upgrades this
evening. The registers disambiguate; use their strings, not mine.

---

## 4. *Secondhand* 🇵🇹 Gold — I refuted a real certification (28 Aug 2026)

**This one did change the data.** On 27 Aug I published a refutation of the claim
that *Secondhand* (Don Toliver feat. Rema) was certified Gold in Portugal. The
certification is real. AFP/Audiogest's own July 2026 Ouro batch carries the card
*Secondhand — Don Toliver feat. Rema — Warner Music*, on the slide that also
holds *Porcelana* and *Saoko* (Rosalía) and *Saudade De Quem Eu Sou*
(Henrique & Juliano). Rema: 81 → **82** plaques, Portugal 1 → **2**.

**The refutation's load-bearing sentence was false.** It said the July carousel
"carries a cover plus six cards of four awards each — 24 golds… The count is
exact and the adjacent post ids return nothing, so the carousel was enumerated
end to end", and concluded there was "no O/P/Q/R/S entry at all". The card above
is slide 5 and is entirely P and S titles. The enumeration was partial and I
described it as complete.

**Why that was avoidable.** This project had *already* documented that the
logged-out Facebook page serves only the ~10 most recent photos and will not
scroll — I wrote that correction myself, one day earlier, after overstating the
same page's readability. Having established the limit, I then reasoned as though
it did not exist.

**The general rule this breaks, which the Portugal sweep states in its own
words:** a register that badges a title only while it is charting cannot be read
for an off-chart award, and *absence from a partial read is not absence*. The
blank `Gal.` column across *Secondhand*'s Semanas 6–13 run was accurate and
irrelevant — it was gone from the chart by 26 March, months before a July award.

**What still stands:** the graphic circulating on X genuinely was not AFP's; the
real card carries the Audiogest wordmark. But a fake fan card is not evidence
against the underlying fact, and the refutation should never have rested on it.

**Standing correction to how I argue:** "not found in the body's publication" is
only a refutation when the publication was read in full AND is capable of
carrying the award. Otherwise it is "not found", which is not a finding.

## 5. RETRACTED — my own "correction" to the Spotify run was the error (29 Aug 2026)

**This entry originally claimed the site's "98 days on the chart" was wrong.
It was not. I was.** Both halves of what I wrote here have been withdrawn, and
the change it justified has been reverted.

**What I claimed.** That 98 was an elapsed-days count taken on 20 Aug, over a
run with a day missing from it, and that the true figure was 104. I rewrote the
28 Aug feed entry from 98 to 103 and published 104 on both editions.

**What is actually true.** The updates feed carries a day-by-day series of
Spotify Global Daily readings, each naming its own chart date: **82 on the 10
Aug chart, 83 on 11 Aug, 86 on 14 Aug, 87 on 15 Aug, 90 on 18 Aug, 93 on 21
Aug**. Clean +1 per chart day. That series puts **98 on the 26 Aug chart** —
exactly the chart the 28 Aug entry describes (No. 8, 3,228,190 streams). **The
entry was correct as written**, and I rewrote a right number into a wrong one.

**The actual mistake, which is worse than the arithmetic.** The site publishes
the **streak**, and its own earlier entries say so outright — "69 straight days
on the chart", "66 straight days". I substituted the **total number of days it
has appeared**, which is a different quantity, and then treated the disagreement
between my quantity and the published one as evidence the published one was
stale. **A wrong number is recoverable; a wrong definition rewrites history.**
This is the "don't conflate metrics" rule, broken by the person who keeps
writing it down.

**Why the arithmetic looked so convincing.** 98 genuinely is elapsed-day-98 for
20 Aug. That coincidence is what sold it. An arithmetic check that happens to
land on a real figure is not corroboration.

**What was right in the original entry.** The debut date, the login gate
(charts.spotify.com's API answers `401 missing_token`; the only Wayback capture
is a 3 KB shell), and the one-day absence Paul supplied from live tracking.
Those three reconcile everything: the streak starts **21 May**, the debut was
15 May, and one day in 15–20 May was missed — so 5 days before the break plus
the streak equals the total, and the total equals elapsed minus one.

**Both figures now exist, separately named**, in `app/data/daiDai.ts`:
`daiDaiSpotifyStraightDays` (**99** through the 27 Aug chart — the published
one) and `daiDaiSpotifyDaysOnChart` (**104**). `tests/spotifyRun.test.ts` parses
the feed's dated readings, checks they all imply one start date, and fails if
the constant disagrees with the site's own log — mutation-checked by moving the
date a day.

**Standing correction to how I argue.** When my figure disagrees with a figure
the site already publishes, **the site's own dated log is evidence and my
recomputation is a hypothesis** — read the log first. I audited an external
source and never opened the file I was editing.

## 6. "48 days as YouTube's most-viewed" — a month stale, and re-published as fresh (29 Aug 2026)

`48` was last true on **26 July 2026**. It then sat on `/dai-dai` and
`/dai-dai/es` unchanged — and on **13 August** the updates feed *restated* it
("logs a 48th day as YouTube's most-viewed") on a day when the run was on
**day 66**. So this is not a figure that went quietly unmaintained; it is one
that was copied forward as though freshly counted.

**Why nothing caught it.** `tests/streakParity.test.ts` guards this streak by
tying the page card to the matching prose in `updates.ts`. That test enforces
only that the two agree with *each other*, never that either agrees with
YouTube — so the card and the feed froze together and the suite stayed green
for a month. **A test comparing two copies of a number cannot tell you both are
wrong.** That is the general lesson, and it is the second time in this file that
a self-consistency check has been mistaken for a correctness check.

**What was actually established.** charts.youtube.com's Global Daily Top Music
Videos chart was walked day by day — all **97** days from the 23 May debut to
the 27 Aug chart, twice, from both directions, plus ten independent spot-checks.
The chart's own "days on chart" counter (18 on 9 Jun, 97 on 27 Aug) proves no
chart day is missing from the middle, and the "yesterday" column pins both ends
of the run.

- **80 consecutive days at No. 1**, 9 June → 27 August 2026 — the published figure
- 93 days at No. 1 in total; the only misses ever are 28 and 29 May, 2 June and
  8 June, each a No. 2 behind Sơn Tùng M-TP & Tyga, iShowSpeed and BABYMONSTER
- **Not published: the 93.** It is a different metric from the run the card
  describes, and swapping it into a sentence reading "as the most-viewed music
  video on YouTube worldwide" is the conflation trap again.

**Matching note.** Rows were matched on video id `fcnDmrtj6Sk`, never on title —
from 8 August a second row, **"Dai dai (Live)" by Shakira & Beéle**
(`mapfegnAXOg`), sits on the same chart in the 30s–90s. A title match would have
picked it up.

**Recipe, for the next walk.** Dated URLs work but only in the compact form
`charts.youtube.com/charts/TopVideos/global/daily/YYYYMMDD`; the hyphenated form
returns HTTP 400. The SPA can serve a date other than the one requested, so
check the page's displayed date on every read. A viewport around 1600px exposes
the "Yesterday" and "Days on chart" columns, which are the cheapest continuity
proof available.

**Still open:** the figure now lives in `app/data/daiDai.ts` with an explicit
`CONFIRMED_THROUGH`, so staleness is at least visible in the data rather than
buried in a sentence. There is still no check against YouTube itself — the
number is hand-maintained because the stats bot cannot fetch it.

## 7. The Dominican Republic No. 1 — published from a round-up, never read at the body (2 Sep 2026)

`{ c: "DO", peak: 1 }` sat in "Dai Dai"'s chart entries from 30 July 2026 and has
been **removed**. It was never true on the chart this dataset names for the
Dominican Republic.

**How it got in.** Commit `ff676f1` added Venezuela, El Salvador and the DR
together, and its message is careful and reads well — but about the wrong
question. It argues at length that Monitor Latino's DR chart is *eligible*
(the country publishes no non-airplay national chart, so the airplay carve-out
applies). It never establishes the **position**. That came from "the World Music
Awards round-up", an aggregator. Eligibility was reasoned about; the No. 1 was
taken on trust.

**What the body actually says.** Monitor Latino publishes a free weekly post
naming the No. 1 on each country's Top 20 General. Across all sixteen weekly
posts covering the song's life:

> 18 May Amenazzy *Una Vibra* · 25 May *Una Vibra* · 1 Jun – 3 Aug Yiyo Sarante
> *Me Dio Pa Llamarte* (eleven weeks) · 10 Aug Yenddi *Soldado Engañado* ·
> 17, 24, 31 Aug DaniLeigh, Lennox & La Insuperable *Island*

"Dai Dai" never appears. **And this is not the round-ups ignoring it:** the 6 July
post is headlined *"El fenómeno de Dai Dai"*, and the 20 July post names it the
No. 1 in "Argentina, España, Bolivia, Puerto Rico y Centroamérica" **while giving
the Dominican Republic to Yiyo Sarante in the same breath.** That is positive
absence, not silence.

**The likely origin of the 1** is either a Monitor Latino DR *genre* chart (their
Urbano and Anglo/Pop lists are separate, and this file's rules exclude genre
charts everywhere) or the regional Central America & Caribbean airplay chart —
which the song genuinely does top, and which the release note already records as
a regional, not national, achievement.

**Resynced:** 280 → 279 chart entries, 49 → 48 No. 1 placements, 71 → 70
territories, Dai Dai 28 → 27 country No. 1s and 70 → 69 entries. The
30 July feed entry announcing "three more No. 1s" now says two, with its
same-day tallies corrected. `DO` is out of `CHART_COUNTRIES` as well — a test
requires every country code to be used by at least one release.

**The lesson, which is the same one as #5 and #6:** a careful argument about
whether a source *counts* is not evidence of what the source *says*. The commit
that added this did the hard part — the eligibility reasoning — and skipped the
easy one.
