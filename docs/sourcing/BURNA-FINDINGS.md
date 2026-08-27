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
