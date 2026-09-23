# Burna Boy — certification sourcing, pass 1

**Read 27 Aug 2026.** 12 agents, one per body group, 308 register reads.
Every register loaded once at artist level; matched to the 231-row worklist locally.

## Headline

**157 of 231 plaques sourced to the certifying body's own register** with a
verbatim row quote and a working URL. 66 unreadable, and those are recorded as
unreadable rather than dressed up.

**No aggregator URL was smuggled in as a body read.** Every host is either the
certifying body's own domain or its own vendor infrastructure.

## What the audit caught — corrections applied

An audit agent re-read every "sourced" row hunting for citations wearing a
body's clothes. It found six problems, all now fixed in the results:

1. **Switzerland — all 11 rows demoted.** They cited `swisscharts.com`, a Hung
   Medien aggregator mirror, not IFPI Schweiz. hitparade.ch is Turnstile-walled
   and was correctly not attempted. Nothing Swiss should publish off this pass.
2. **Sweden — 3 rows demoted.** Marked sourced while carrying no URL at all,
   carried forward from an earlier pass and never re-opened.
3. **Norway — 1 row demoted.** The register row credits DAVE only and never
   names Burna Boy; a "burna boy" search there returns nothing. The UK pass
   called the identical pattern *absent*, so this was inconsistent.
4. **Poland — 1 row demoted.** The quoted row carries no tier and no date; it
   evidences the credit only.
5. **Nigeria — 34 award dates blanked.** Every TCSN row ends "Feb 6, 2026", a
   register-wide stamp shared by all 500 rows. The quotes support the *tiers*;
   they do not support the dates. Publishing that as an award date would be
   publishing a scrape timestamp.
6. **France — 20 URLs replaced.** SNEP's permalinks are title-only stubs showing
   neither tier nor date. Swapped for the filtered listing that actually renders
   the row; stubs kept in `stubUrl`.

Also mitigated: **Australia's 10 rows** cite Dropbox share tokens. The PDFs are
ARIA's own and were read, but the URL neither reads as ARIA nor survives a
re-share, so each row now carries `aria.com.au/accreditations` as the primary
citation with Dropbox as a secondary locator. **Canada's 5 paginated URLs** had
their `_paged=` offsets stripped — pagination reshuffles on every update.

Four rows have tiers **inferred from an award-image filename** rather than any
quoted text (Norway, and three South African). Flagged `tierInferred`.

## Per-country outcome

See `results/burna-summary.md`. Strongest: UK 28/30, NG 34/63, CA 21, FR 20,
DK 13, AU 9, US 8/8. Blocked: **CH 0** (bot-wall), **NZ 1** (see below),
and nine single-plaque countries returned nothing readable.

## Two things that need Paul's eye

**1. New Zealand — 29 rows came back `absent`.** Not unreadable: the RMNZ chart
data *was* read and those titles were not in it. Combined with 7 unreadable,
only one NZ plaque of 19 is confirmed. Either these certifications sit on chart
weeks not covered by the pass, or the site's NZ block is weaker than it looks.
This needs a dedicated look before anything is published.

**2. A genuinely missing plaque: "No Stress" (Wizkid feat. Burna Boy), RiSA
Platinum, South Africa.** Not on the site in any form. Would be plaque 232.

Two near-misses were checked and are NOT new: Music Canada spells the site's
"Kilometre" as **"Killometre"** in its own register (their typo, same award),
and ARIA's "Be Honest" Gold is the 2020 step before the 2023 Platinum the site
already holds.

One conflict to resolve: the site records **Be Honest CA Gold**, but Music
Canada's register returned *absent* for it.

## Still to do

- The 16 countries with no body link at all (75 plaques) — fill from this pass.
- Point the UK country link at `certified-awards.bpi.co.uk`, which has real
  per-title permalinks, rather than the BPI page one level up.
- The other 11 board artists.

## 23 Sep 2026 — nine Nigerian plaques this pass never saw, and why

TCSN's own register holds **nine Burna Boy plaques and one upgrade that no
earlier pass found**. Each was read ✓ᴬ, in the raw Wayback capture of the
register page of 21 Feb 2026 (`20260221224010id_`, 39,322,478 bytes = its ETag,
2,477 rows, ids 4–2634; the `_next/data` JSON capture `20260221213029id_` holds
identical rows):

| title | TCSN id | row (milestone · artiste) | site |
|---|---|---|---|
| Ye | 1956 | Gold · Burna Boy (supersedes Silver id 970) | Silver → **Gold** |
| 28 Grams | 1996 | Gold · Burna Boy | new |
| Buy You Life | 2038 | Gold · Burna Boy | new |
| Born Winner | 2101 | Gold · Burna Boy | new |
| No Panic | 2116 | Gold · Burna Boy | new |
| No Sign Of Weakness (the song) | 2247 | Silver · Burna Boy, format Single | new |
| Change Your Mind | 2316 | Silver · Burna Boy ft. Shaboozey | new |
| Empty Chairs | 2423 | Silver · Burna Boy ft. Mick Jagger | new |
| Sweet Love (Burna Boy) | 2522 | Silver · Burna Boy | new |
| 4 Kampe Ii | 2562 | Silver · Joe Dwet File & Burna Boy | new (NG beside the FR Gold) |

**None was read and rejected. Every pass read only the live 500-row page.**

- The live register serves exactly 500 rows (456 Platinum, 44 Gold, 0 Silver):
  the first 500 rows of the February 2026 batch (ids 1361–1860), in id order.
  These ten sit at batch positions 595–1201, below the cap.
- **This pass (27 Aug)** loaded the live page once, as its brief told it to,
  and logged Ye NG as `"status":"unreadable"` (`results/burna-raw.json`). The
  eight new titles were never on its worklist, because the worklist was the
  site's own rows.
- **PR #97 (12 Aug)** read the same 500 rows ("34 Burna Boy entries") and
  called the Wayback captures "empty shells". They are not: the 21 Feb capture
  is complete.
- **The B. D'OR fix (18 Sep, RETRACTIONS #12)** did read the 21 Feb capture,
  but for that one title.

**Award dates.** None is published. The 8 Feb 2026 capture (1,203 rows, top id
1315) holds only the earlier Ye Silver, so the ten were added between 8 and
21 Feb 2026. The capture stamps them "2025-02-06" and the live page
"2026-02-06"; both are batch stamps (finding 5 above), and the batch includes
No Sign of Weakness tracks released on 11 Jul 2025. The dated log carries them
as **2026, no day**, PR #97's convention for this batch.

**No Sign of Weakness** is the title track, not the album: all 1,274 rows of
the February batch are format "Single", and no album-only title appears in it.
The site keeps the song (a single) and the album (albums.ts, no certification)
apart in every title-keyed join; `tests/certs.test.ts` holds them apart.

Full record: `docs/sweeps/sweep-2026-09-23.md`.
