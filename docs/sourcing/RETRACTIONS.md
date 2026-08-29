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

## 5. "98 days on the chart" — a stale number, over a run that had a hole in it (29 Aug 2026)

Shipped 28 Aug 2026 to `/dai-dai`, `/dai-dai/es` and the updates feed, paired
with "and has not left it since". Both halves were wrong, and they were wrong in
two different ways at once:

1. **It was an elapsed-days count, not a chart-days count.** Counting 15 May
   2026 as day 1, day 98 falls on **20 Aug** — so the figure was already eight
   days old on the day it was committed.
2. **Elapsed days was the wrong quantity anyway.** The song has spent one day
   **off** the chart, so days-on-chart has always been elapsed minus one.

Neither error was reachable by any test, because both lived inside a sentence.
The identical failure is documented three feet up this repo in the `weeksAtPeak`
doc comment — "a number in a sentence cannot be checked against anything" — and
it happened again in the next figure that was typed rather than derived.

**What I could not do:** confirm any of it at the source. charts.spotify.com is
login-gated; its API answers `401 missing_token` to an anonymous caller, the
`/public/v0/` path 404s, the legacy spotifycharts.com CSV route is dead, and the
single Wayback capture of the daily chart is a 3 KB shell. The one-day gap came
from Paul, who tracks the chart live.

**The fix:** `app/data/daiDai.ts` now derives the figure from a debut date, a
`CONFIRMED_THROUGH` date and a days-off count. It deliberately counts to the
last chart someone has actually read rather than to `new Date()` — counting to
today would keep the number climbing straight through a drop-off nobody had
checked for, which is the same bug in a new costume. `tests/daiDaiParity.test.ts`
fails if either edition types the number again.

Corrected figures: **104 days on the chart** as of the 27 Aug chart (the same
chart that gives 71 days in the Top 10), and **103** in the 28 Aug feed entry,
which describes the 26 Aug chart.
