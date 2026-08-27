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
