# Afrobeats board — certification sourcing, pass 1

**Read 27 Aug 2026.** 11 body agents + audit, 262 register reads. Organised
**body-first**: Nigeria alone holds 475 of the board's 830 plaques across all
twelve artists, so one TCSN read covers 57% of the work.

## Headline

**509 of 830 board plaques sourced** to the certifying body's own register
(61%), each with a verbatim row and a URL that was actually loaded.

**Zero aggregator URLs.** Every host is a certifying body's own domain:
turntablecharts, musiccanada, aotearoamusiccharts, certified-awards.bpi.co.uk,
snepmusique, riaa, ifpi.dk, aria.com.au, pro-musicabr, elportaldemusica,
audiogest, goudplatina, olis.pl, musikindustrie, fimi, ifpi.no, slagerlistak,
amprofon, ifpi.gr, ifpi.at.

**The Switzerland fix held.** Last pass cited swisscharts (a Hung Medien mirror)
for 11 rows and all 11 were demoted. This pass was told explicitly not to, and
returned **all 17 Swiss rows as unreadable with no URL at all** — the correct
answer when hitparade.ch is bot-walled and the body cannot be opened.

## Why 321 are unsourced — mostly structural, not failure

| | Unsourced | Reason |
|---|---|---|
| NG | 225 | TCSN's live register caps at **500 rows total** across every artist. The board claims 475 Nigerian plaques and Burna another 63. The register physically cannot show them all. Certification there is request-based and paid, so absence proves nothing. |
| NZ | 27 | RMNZ has no register — certifications ride on chart rows, so only titles currently charting are readable. |
| ZA | 22 | **risa.org.za serves HTTP 421 and an empty document.** Genuinely down. |
| CH | 17 | hitparade.ch Turnstile-walled; the body was correctly not faked. |
| GR, BE, AT, and others | ~13 | Small bodies with no usable public register. |

## 19 tier disagreements worth your eye

Full detail in `results/board-tier-diffs.json`. Note this compares the site
against the register's **highest** row, because registers keep every escalation
step (Gold → Platinum → Double → Triple…) as its own row and the site holds the
current tier. An earlier cut of this comparison reported 94 disagreements; 75 of
those were escalation history and parser artefacts, not real.

**Body HIGHER than the site — 7. These are candidate upgrades:**

| | Title | Site | Body |
|---|---|---|---|
| NG | Wizkid — Everyday | Silver | **Platinum** |
| NG | Asake — Reason | Platinum | **5× Platinum** |
| NG | Ayra Starr — Away | Gold | **2× Platinum** |
| NG | Rema — Bounce | Silver | **Gold** |
| NG | Victony — Risk | Silver | **Gold** |
| US | Wizkid — One Dance | Diamond | 11× Platinum (Diamond) |
| US | Tems — Wait For U | Diamond | 11× Platinum (Diamond) |

The two US rows are probably **not** errors: RIAA expresses Diamond as a
multi-platinum count, so "11× Platinum (Diamond)" and "Diamond" describe the
same award. The five Nigerian ones look like real upgrades — three of them from
Silver, a tier TCSN's public register does not even serve.

**Site HIGHER than the body — 12.** Treat these with caution rather than as
errors: five are New Zealand, where only current chart rows are readable, so an
older song's later upgrades simply cannot appear. Same shape for Poland. These
need a targeted re-read, not a downgrade.

## Two genuinely missing plaques

- **Asake — "Bad Influence", TCSN 2× Platinum.** Not on the site in any form.
- **Asake — "2:30"** is on the site at **Platinum**; TCSN prints it "02:30" at
  **4× Platinum**. Same award, understated by three steps.

## A caution that undercuts an earlier find

Burna's pass returned three South African rows as sourced, including a
**"No Stress" RiSA Platinum** I flagged as a missing plaque. This pass finds
**risa.org.za returning HTTP 421 and an empty document**. Those two results
cannot both be right. Until RiSA is readable again, treat "No Stress" as
unconfirmed and do not publish it.

## Not yet done

- Applying any of this to `app/data/` — held by instruction until review.
- The 16 countries with no body-level link (75 Burna plaques + board).
- Re-reads for NZ, ZA, CH once those registers are reachable.
