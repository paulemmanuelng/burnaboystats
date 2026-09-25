# Kizz Daniel — official chart peaks

**Standard:** one entry per **country** per **release**, on that country's
**principal national singles or albums chart**. *peak* = the highest position the
release has ever reached. Lead, co-billed and featured credits all count.

**Excluded throughout:** platform charts (Spotify, Apple Music, iTunes, Deezer,
Shazam, YouTube, Audiomack, Boomplay); **genre and component charts** (UK
Afrobeats Chart, Billboard U.S. Afrobeats Songs, World Digital Song Sales, World
Albums, Singles Sales, Downloads, Independent, Video Streaming); extension charts
below a main chart (Hot 40, Tipparade); year-end, mid-week and recurrent charts.

**By hand, never read by an agent (owner rulings, 24–25 Sep 2026):** TOSAC
(South Africa's chart), RiSA, FIMI, the BPI, ARIA's accreditation Dropbox, AFP's
uploads, dutchcharts.nl, top40.nl and billboard.com — archived copies included.
A row whose only evidence came from one of them is not published here; it waits
on Paul's weekly hand check instead. Readings of those sources made before the
ruling are not relied on, as rows or as zeros.

Daniel Oluwatobiloba Anidugbe, Nigeria. Billed **"Kiss Daniel"** until about 2018,
so every chart was searched under both names. No chart that was read prints a row
under the old spelling.

## Total: 51 singles + 4 albums = 55 chart entries

**10 No. 1s**, all in Nigeria. **3 territories** (🇳🇬 Nigeria, 🇸🇷 Suriname,
🇨🇭 Switzerland).

Distribution: 🇳🇬 53 (49 singles + 4 albums) + 🇸🇷 1 + 🇨🇭 1 = **55** ✓.
No country appears twice for the same title.

**Swept 24 Sep 2026** (find pass), and **every row re-read at its chart body by a
separate verifier the same day**: 56 rows STAND, 0 are REFUTED, 1 is held as
UNVERIFIED (South Africa, *Cough (Odo)*, below). The Nigerian archive was
walked a second time, end to end, and reproduces every row. **55 are published:**
the 56th, South Africa *Buga (Lo Lo Lo)* #3, rested only on archived TOSAC pages
and is held for Paul's hand check under the 25 Sep 2026 ruling (below).

| release | chart peaks by country | |
|---|---|---|
| Cough (Odo) | 🇳🇬 #1 · 🇸🇷 #3 | **2** |
| Nesesari | 🇳🇬 #33 · 🇨🇭 #45 | **2** |
| 47 other singles | 🇳🇬 only (table below) | **47** |
| 4 albums | 🇳🇬 only (table below) | **4** |

**51 + 4 = 55.**

## Nigeria — the complete archive, read directly

TurnTable's site renders only the current week, but its backend exposes every
issue it has ever published. **All 307 weekly issues of the singles chart —
2020-11-05 (id 145, "TurnTable Top 50") to 2026-09-17 (id 5932, "Official
Nigeria Top 100") — and all 202 issues of the albums chart — 2022-11-02 (id 1480,
"Nigeria Top 50 Albums") to 2026-09-10 (id 5922, "Official Top 100 Albums")**
were read through

```
GET /api/ttc-proxy/api/chart/{1|2}/{weekNumber}/{year}
```

with a turntablecharts.com `Referer` (without one it returns 403), decoding the
base64 `payload` envelope, by a copy of `scripts/turntable-walk.mjs` run with an
honest User-Agent (`burnaboystats-chart-verify/1.0 (Claude-User; …)`).
turntablecharts.com has no robots.txt (404). Every response is validated against
the `weekNumber` and `dateCreated` year requested — an unpublished week serves
the category's *earliest* issue, and that fallback seen twice is recorded as
"no issue". 563 requests, 21 rate-limited and waited out, 33 fallback
mismatches, **0 failed issues**. The only non-7-day gaps are the New Year's Eve
special (2024-12-26 → 12-31 → 2025-01-09) and, for albums, 2022-11-02 → 11-10
(8 days). The albums issue for 17 Sep 2026 and both issues for 24 Sep 2026 were
not yet published when read.

Matching is on the **artist** line, word-anchored: `/\bki(?:zz|ss)\s*daniel\b/i`.
Every other artiste line containing "daniel", "kizz" or "kiss" was reviewed by
hand: only Daniel Caesar (*Peaches*, 13 issues; album *Son Of Spergy*, 1) —
namesakes, excluded. TurnTable never prints "Kiss Daniel".

Peak = the best rank in ANY issue (`highestPosition` resets at the 7 Jul 2022
relaunch — on that issue 0 of 100 rows carry a `lastPosition` — and on every
re-entry, so it is quoted only as evidence). Weeks = issues the recording
appears in **under a credit naming Kizz Daniel**; weeks at peak = issues at that
rank. Both are counted from the body's own weekly issues, and neither goes on the
board: TurnTable publishes no continuous weeks counter (it resets) and no
weeks-at-peak figure, and no Nigerian row on the board or in `charts.ts` carries
them.

**Re-read result: 53 of 53 Nigerian rows reproduce exactly** — peak, peak issue,
chart name on the peak issue, weeks and weeks at peak — and the verifier's
independent cache yields a byte-identical analysis to the find pass's. No
spot-check failed; the whole archive was re-read rather than sampled.

### Every Nigerian peak, with the issue that set it

| # | title | list | NG peak | set on issue | chart name on that issue | weeks | wks at peak | run | printed on the chart | verified |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Gwagwalada | singles | **1** | 1821 · 2023-02-23 (wk 8/2023) | Official Nigeria Top 100 | 51 | 4 | 2023-02-16 (45) → 2024-02-08 (41) | Gwagwalada — BNXN, Kizz Daniel & Seyi Vibez ×33; GWAGWALADA — BNXN, Kizz Daniel & Seyi Vibez ×18 | ✓ |
| 2 | Buga (Lo Lo Lo) | singles | **1** | 1095 · 2022-05-12 (wk 19/2022) | TurnTable Top 50 | 42 | 7 | 2022-05-12 (1) → 2023-02-23 (77) | Buga — Kizz Daniel ft. Tekno ×2; Buga (Lo Lo Lo) — Kizz Daniel ft. Tekno ×9; Buga (Lo Lo Lo) — Kizz Daniel & Tekno ×31 | ✓ |
| 3 | Lie | singles | **1** | 663 · 2021-08-12 (wk 32/2021) | TurnTable Top 50 | 37 | 7 | 2021-08-12 (1) → 2022-08-04 (97) | Lie — Kizz Daniel ×37 | ✓ |
| 4 | Pour Me Water | singles | **1** | 893 · 2021-12-23 (wk 51/2021) | TurnTable Top 50 | 36 | 1 | 2021-11-25 (20) → 2022-08-04 (93) | Pour Me Water — Kizz Daniel ×36 | ✓ |
| 5 | Cough (Odo) | singles | **1** | 1451 · 2022-10-20 (wk 42/2022) | TurnTable Nigeria Top 100 | 34 | 4 | 2022-10-20 (1) → 2023-06-08 (84) | Cough (Odo) — EMPIRE & Kizz Daniel ×34 | ✓ |
| 6 | Twe Twe | singles | **1** | 2829 · 2023-12-21 (wk 51/2023) | Official Nigeria Top 100 | 29 | 10 | 2023-12-14 (14) → 2024-06-27 (40) | Twe Twe — Kizz Daniel ×7; Twe Twe — Kizz Daniel & Davido ×22 | ✓ |
| 7 | Showa | singles | **1** | 3119 · 2024-03-28 (wk 13/2024) | Official Nigeria Top 100 | 24 | 3 | 2024-03-14 (40) → 2024-08-22 (53) | Showa — Kizz Daniel ×24 | ✓ |
| 8 | Marhaba | singles | **1** | 3651 · 2024-10-03 (wk 40/2024) | Official Nigeria Top 100 | 23 | 3 | 2024-10-03 (1) → 2025-03-06 (80) | Marhaba — Kizz Daniel ×23 | ✓ |
| 9 | My G | singles | **2** | 2670 · 2023-11-09 (wk 45/2023) | Official Nigeria Top 100 | 29 | 1 | 2023-08-03 (11) → 2024-02-15 (45) | My G — Kizz Daniel ×29 | ✓ |
| 10 | RTID (Rich Till I Die) | singles | **2** | 1631 · 2023-01-12 (wk 2/2023) | Official Nigeria Top 100 | 25 | 2 | 2023-01-12 (2) → 2023-06-29 (86) | RTID (Rich Till I Die) — Kizz Daniel ×25 | ✓ |
| 11 | Shu-Peru | singles | **2** | 2078 · 2023-05-18 (wk 20/2023) | Official Nigeria Top 100 | 24 | 1 | 2023-05-18 (2) → 2023-11-23 (95) | Shu-Peru — Kizz Daniel ×24 | ✓ |
| 12 | Double | singles | **2** | 3351 · 2024-06-06 (wk 23/2024) | Official Nigeria Top 100 | 24 | 2 | 2024-06-06 (2) → 2024-11-21 (94) | Double — Kizz Daniel ×24 | ✓ |
| 13 | Al-Jannah | singles | **2** | 4520 · 2025-06-12 (wk 24/2025) | Official Nigeria Top 100 | 20 | 1 | 2025-06-05 (3) → 2025-10-16 (91) | Al-Jannah — Kizz Daniel, ODUMODUBLVCK & Bella Shmurda ×20 | ✓ |
| 14 | Lost | singles | **3** | 4415 · 2025-05-22 (wk 21/2025) | Official Nigeria Top 100 | 42 | 1 | 2025-05-01 (4) → 2026-02-19 (49) | lost — FOLA & Kizz Daniel ×42 | ✓ |
| 15 | Eh God (Barnabas) | singles | **3** | 884 · 2021-12-16 (wk 50/2021) | TurnTable Top 50 | 37 | 1 | 2021-11-25 (13) → 2022-08-25 (82) | Eh God (Barnabas) — Kizz Daniel ×37 | ✓ |
| 16 | My Dealer (Remix) | singles | **3** | 3473 · 2024-08-15 (wk 33/2024) | Official Nigeria Top 100 | 16 | 2 | 2024-08-15 (3) → 2025-01-23 (34) | My Dealer (Remix) — Kaestyle & Kizz Daniel ×16 | ✓ |
| 17 | Big Big Things | singles | **4** | 3041 · 2024-02-29 (wk 9/2024) | Official Nigeria Top 100 | 24 | 1 | 2024-02-29 (4) → 2024-08-08 (47) | Big Big Things — Young Jonn ft. Kizz Daniel & Seyi Vibez ×24 | ✓ |
| 18 | Pano Tona | singles | **5** | 3876 · 2024-11-21 (wk 47/2024) | Official Nigeria Top 100 | 14 | 1 | 2024-11-14 (16) → 2025-02-13 (100) | Pano Tona — Kizz Daniel & Adekunle Gold ×14 | ✓ |
| 19 | Titi | singles | **6** | 4481 · 2025-06-05 (wk 23/2025) | Official Nigeria Top 100 | 24 | 1 | 2025-06-05 (6) → 2025-11-13 (74) | Titi — Kizz Daniel & FOLA ×24 | ✓ |
| 20 | Too Busy To Be Bae | singles | **8** | 2829 · 2023-12-21 (wk 51/2023) | Official Nigeria Top 100 | 24 | 1 | 2023-12-14 (31) → 2024-05-23 (78) | Too Busy To Be Bae — Kizz Daniel ×24 | ✓ |
| 21 | Follow Her | singles | **8** | 4403 · 2025-05-08 (wk 19/2025) | Official Nigeria Top 100 | 7 | 3 | 2025-05-08 (8) → 2025-06-19 (79) | Follow Her — Blaqbonez ft. Kizz Daniel ×7 | ✓ |
| 22 | Oshe | singles | **9** | 1078 · 2022-04-28 (wk 17/2022) | TurnTable Top 50 | 32 | 1 | 2021-11-25 (28) → 2022-10-27 (100) | Oshe — Kizz Daniel ft. The Cavemen. ×29; Oshe — Kizz Daniel ft. The Cavemen ×3 | ✓ |
| 23 | No Wahala | singles | **9** | 1017 · 2022-03-24 (wk 12/2022) | TurnTable Top 50 | 24 | 2 | 2022-03-10 (19) → 2022-09-08 (98) | No Wahala — 1da Banton ft. Kizz Daniel & Tiwa Savage ×17; No Wahala (Remix) — 1da Banton ft. Kizz Daniel & Tiwa Savage ×7 (fold, see below) | ✓ |
| 24 | We Must | singles | **11** | 3651 · 2024-10-03 (wk 40/2024) | Official Nigeria Top 100 | 6 | 1 | 2024-10-03 (11) → 2024-11-07 (84) | We Must — Kizz Daniel & Thyself ×6 | ✓ |
| 25 | Police | singles | **12** | 4299 · 2025-04-24 (wk 17/2025) | Official Nigeria Top 100 | 14 | 1 | 2025-04-17 (33) → 2025-07-17 (84) | Police — Kizz Daniel, Angelique Kidjo & Johnny Drille ×14 | ✓ |
| 26 | Energy | singles | **13** | 5565 · 2026-05-28 (wk 22/2026) | Official Nigeria Top 100 | 6 | 1 | 2026-05-21 (87) → 2026-06-25 (26) | Energy — G4ZI & Kizz Daniel ×6 | ✓ |
| 27 | Flex | singles | **13** | 351 · 2021-03-04 (wk 9/2021) | TurnTable Top 50 | 5 | 1 | 2021-03-04 (13) → 2021-04-22 (36) | Flex — Kizz Daniel ×5 | ✓ |
| 28 | Currently | singles | **14** | 306 · 2021-02-04 (wk 5/2021) | TurnTable Top 50 | 9 | 1 | 2021-02-04 (14) → 2021-04-01 (44) | Currently — Kizz Daniel ft. Falz, Olamide & LK Kuddy ×9 | ✓ |
| 29 | Day By Day | singles | **14** | 4521 · 2025-06-19 (wk 25/2025) | Official Nigeria Top 100 | 9 | 1 | 2025-06-12 (27) → 2025-08-07 (37) | Day By Day — Simi & Kizz Daniel ×9 | ✓ |
| 30 | Like | singles | **15** | 1254 · 2022-08-04 (wk 31/2022) | TurnTable Nigeria Top 100 | 16 | 2 | 2022-07-21 (16) → 2022-11-03 (79) | Like — Iyanya, Davido & Kizz Daniel ×16 | ✓ |
| 31 | Black Girl Magic | singles | **15** | 4481 · 2025-06-05 (wk 23/2025) | Official Nigeria Top 100 | 15 | 1 | 2025-06-05 (15) → 2025-09-11 (81) | Black Girl Magic — Kizz Daniel ×15 | ✓ |
| 32 | Sooner | singles | **18** | 3116 · 2024-03-21 (wk 12/2024) | Official Nigeria Top 100 | 15 | 1 | 2024-03-14 (53) → 2024-06-20 (75) | Sooner — Kizz Daniel ×15 | ✓ |
| 33 | To Be A Man | singles | **19** | 4770 · 2025-09-11 (wk 37/2025) | Official Nigeria Top 100 | 11 | 1 | 2025-09-04 (23) → 2025-11-13 (97) | To Be A Man — Kizz Daniel ×11 | ✓ |
| 34 | Secure | singles | **22** | 4481 · 2025-06-05 (wk 23/2025) | Official Nigeria Top 100 | 3 | 1 | 2025-06-05 (22) → 2025-06-19 (44) | Secure — Kizz Daniel & Zlatan ×3 | ✓ |
| 35 | Unleash | singles | **29** | 2611 · 2023-10-26 (wk 43/2023) | Official Nigeria Top 100 | 9 | 1 | 2023-09-14 (31) → 2023-11-09 (88) | Unleash — Poco Lee & Kizz Daniel ×9 | ✓ |
| 36 | Nesesari | singles | **33** | 503 · 2021-06-10 (wk 23/2021) | TurnTable Top 50 | 6 | 1 | 2021-05-13 (38) → 2021-06-17 (48) | Nesesari — Kizz Daniel ft. Philkeyz ×6 | ✓ |
| 37 | Addict | singles | **34** | 827 · 2021-11-25 (wk 47/2021) | TurnTable Top 50 | 3 | 1 | 2021-11-25 (34) → 2021-12-23 (49) | Addict — Kizz Daniel ×3 | ✓ |
| 38 | Peace I Chose | singles | **36** | 4481 · 2025-06-05 (wk 23/2025) | Official Nigeria Top 100 | 3 | 1 | 2025-06-05 (36) → 2025-06-19 (98) | Peace I Chose — Kizz Daniel & Runtown ×3 | ✓ |
| 39 | A1 | singles | **40** | 4973 · 2025-11-06 (wk 45/2025) | Official Nigeria Top 100 | 4 | 1 | 2025-10-23 (97) → 2025-11-20 (69) | A1 — Shoday & Kizz Daniel ×1; A1 — Shoday ft. Kizz Daniel ×3 | ✓ |
| 40 | Burn | singles | **40** | 827 · 2021-11-25 (wk 47/2021) | TurnTable Top 50 | 2 | 1 | 2021-11-25 (40) → 2021-12-02 (48) | Burn — Kizz Daniel ×2 | ✓ |
| 41 | YBIL (You Believe in Love) | singles | **41** | 3415 · 2024-07-11 (wk 28/2024) | Official Nigeria Top 100 | 5 | 1 | 2024-07-11 (41) → 2024-08-08 (84) | YBIL (You Believe in Love) — Qing Madi & Kizz Daniel ×5 | ✓ |
| 42 | Skin | singles | **46** | 827 · 2021-11-25 (wk 47/2021) | TurnTable Top 50 | 1 | 1 | 2021-11-25 (46) → 2021-11-25 (46) | Skin — Kizz Daniel & Kelvyn Colt ×1 | ✓ |
| 43 | Ijoba | singles | **47** | 5654 · 2026-06-18 (wk 25/2026) | Official Nigeria Top 100 | 2 | 1 | 2026-06-18 (47) → 2026-06-25 (82) | Ijoba — Naira Marley & Kizz Daniel ×2 | ✓ |
| 44 | Boys Are Bad | singles | **48** | 175 · 2020-12-03 (wk 49/2020) | TurnTable Top 50 | 2 | 1 | 2020-12-03 (48) → 2024-02-22 (100) | Boys Are Bad — Kizz Daniel ×2 | ✓ |
| 45 | Anchovy | singles | **49** | 2611 · 2023-10-26 (wk 43/2023) | Official Nigeria Top 100 | 11 | 1 | 2023-10-19 (80) → 2023-12-28 (92) | Anchovy — Kizz Daniel ×11 | ✓ |
| 46 | Eyo | singles | **60** | 4481 · 2025-06-05 (wk 23/2025) | Official Nigeria Top 100 | 2 | 1 | 2025-06-05 (60) → 2025-06-12 (97) | Eyo — Kizz Daniel ×2 | ✓ |
| 47 | Holy Romance | singles | **68** | 5080 · 2025-12-11 (wk 50/2025) | Official Nigeria Top 100 | 3 | 1 | 2025-12-11 (68) → 2026-01-22 (98) | Holy Romance — Kizz Daniel ×3 | ✓ |
| 48 | Owo Oluwa | singles | **81** | 5932 · 2026-09-17 (wk 38/2026) | Official Nigeria Top 100 | 1 | 1 | 2026-09-17 (81) → 2026-09-17 (81) — still on the latest issue | Owo Oluwa — Kizz Daniel ft. Young Jonn, Krizbeatz & Wave Choir ×1 | ✓ |
| 49 | Red & Green | singles | **92** | 2288 · 2023-08-03 (wk 31/2023) | Official Nigeria Top 100 | 1 | 1 | 2023-08-03 (92) → 2023-08-03 (92) | Red & Green — Kizz Daniel ×1 | ✓ |
| 50 | Uncle K: Lemon Chase | albums | **1** | 4434 · 2025-06-05 (wk 23/2025) | Official Top 100 Albums | 65 | 2 | 2025-06-05 (1) → 2026-09-10 (98) — still on the latest issue | Uncle K: Lemon Chase — Kizz Daniel ×65 | ✓ |
| 51 | TZA - EP | albums | **1** | 3069 · 2024-03-14 (wk 11/2024) | Official Top 100 Albums | 47 | 5 | 2024-03-14 (1) → 2025-02-06 (100) | TZA - EP — Kizz Daniel ×47 | ✓ |
| 52 | Maverick | albums | **2** | 2291 · 2023-08-03 (wk 31/2023) | Official Top 50 Albums | 87 | 1 | 2023-08-03 (2) → 2025-09-11 (100) | Maverick — Kizz Daniel ×87 | ✓ |
| 53 | Barnabas | albums | **16** | 1480 · 2022-11-02 (wk 44/2022) | Nigeria Top 50 Albums | 49 | 1 | 2022-11-02 (16) → 2024-08-29 (68) | Barnabas — Kizz Daniel ×49 | ✓ |

### Printings folded into one entry (each checked on the lastPosition / weeksOnChart chain)

- **Buga → Buga (Lo Lo Lo).** "Buga — Kizz Daniel ft. Tekno" on 12 and 19 May 2022 (#1, #1), then "Buga (Lo Lo Lo)" on 26 May at #1 with `lastPosition 1`, `weeksOnChart 3` — one entry. Later printed "Kizz Daniel & Tekno" (31 issues). 42 issues, 7 at #1.
- **No Wahala → No Wahala (Remix).** TurnTable's entry began as 1da Banton's solo record; from 10 Mar 2022 it is printed "1da Banton ft. Kizz Daniel & Tiwa Savage" (#19, `lastPosition 40`), peaking at #9 on 24 Mar and 31 Mar 2022; last seen 30 Jun at #50 (`weeksOnChart 30`). The next issue is the 7 Jul 2022 relaunch, which reset every counter, and it re-enters there as "No Wahala (Remix)" with the same credit at #52, running 7 issues to 8 Sep. One record: **peak 9, 24 credited issues (17 + 7), 2 at peak.** The solo issues are not counted for Kizz Daniel. Tiwa Savage's board must carry the same #9.
- **My Dealer (Remix)** is a re-credit, not a fold: TurnTable ran Kaestyle's "My Dealer" as one entry, credited "Kaestyle & Omah Lay" for 12 issues (best #5, which is what Omah Lay's board already carries), then "My Dealer (Remix) — Kaestyle & Kizz Daniel" from 15 Aug 2024 (#3, `lastPosition 14`, `weeksOnChart 13`). Only the 16 issues that name Kizz Daniel count here: peak 3, 2 at peak.
- **Twe Twe** is printed "Kizz Daniel" on 7 issues and "Kizz Daniel & Davido" on 22 — one chain. 29 issues, 10 at #1. TurnTable never prints "(Remix)"; Davido's board carries the same record as "Twe Twe", NG #1.
- **Gwagwalada** ("Gwagwalada" ×33, "GWAGWALADA" ×18), **Oshe** (with and without a trailing full stop after "The Cavemen") and **A1** ("Shoday & Kizz Daniel" ×1, "Shoday ft. Kizz Daniel" ×3) are each one chain.
- **Boys Are Bad** has two appearances three years apart — 3 Dec 2020 at #48 and a one-week re-entry on 22 Feb 2024 at #100 (`lastPosition 0`, `weeksOnChart 1`), same title and credit. Peak 48, 2 issues.

### Notes carried into the entry

- **Owo Oluwa** (Kizz Daniel ft. Young Jonn, Krizbeatz & Wave Choir) entered at **#81 on the latest issue read (17 Sep 2026)** — an open run, published with the board's open-run note and to be re-read at the next sweep.
- **Uncle K: Lemon Chase** is still on the albums chart (#98 on 10 Sep 2026, 65 issues). Its peak is #1 and cannot rise, so the entry carries no open-run note; only its week count is still moving.
- **Barnabas** (EP, Nov 2021) first appears on the albums chart's very first issue, 2 Nov 2022, at #16 — its peak there is the best rank since the chart began, not since release, and the entry says so. There is no earlier Nigerian albums chart to read.
- **Pre-archive, a gap and not a zero:** the singles chart begins 5 Nov 2020. "Woju", "Yeba", "Laye", "Mama", "One Ticket", "For You", "Madu", "Poko", "Fvck You" and the rest of the Kiss Daniel / *No Bad Songz* / *King of Love* era have no official Nigerian chart to be read against. None of his recordings first appears on the first singles issue.

### Shared records — the other boards already agree

Gwagwalada NG 1 (BNXN, Seyi Vibez), Twe Twe NG 1 (Davido), Big Big Things NG 4 (Seyi Vibez) and Currently NG 14 (Olamide) are already on the board at the same peaks.

**Title collisions for APPLY (different records, same title):** *Oshe* (Wizkid's own record, NG 14) and *Energy* (Wizkid's, NG 15; also Tiwa Savage, Wande Coal & Mavo's, which will be on Tiwa Savage's board). TurnTable's artiste lines separate them: "Oshe — Kizz Daniel ft. The Cavemen." vs "Oshe — Wizkid"; "Energy — G4ZI & Kizz Daniel" vs "Energy — Wizkid" / "Wande Coal & Wizkid" vs "Energy — Tiwa Savage, Wande Coal & Mavo". The title-keyed "one answer per chart" test in `tests/afrobeats.test.ts` will flag both; they belong in its `known` set with this reason, not "settled".

## Outside Nigeria — two entries, each read at the body

| release | country · chart | peak | weeks at peak / weeks | mark | verbatim, as the body prints it |
|---|---|---|---|---|---|
| Nesesari (Kizz Daniel feat. Philkeyz) | 🇨🇭 Schweizer Hitparade, Singles Top 100 | **45** | 1 / 9 | ✓ | Song page: "Single-Hitparade Einstieg 07.03.2021 (Rang 91) Zuletzt 02.05.2021 (Rang 95) Peak 45 (1 Woche) Anzahl Wochen 9"; run 91, 68, 75, 70, **45**, 55, 84, 84, 95. Weekly chart "Schweizer Hitparade - Singles Top 100 - 04.04.2021" (Woche 13/2021): "45 · Kizz Daniel feat. Philkeyz · Nesesari · VW 70 · W 5 · P 45". |
| Cough (Kizz Daniel) — i.e. *Cough (Odo)* | 🇸🇷 Nationale Top 40 Suriname | **3** | — (not published) | ✓ | "DE TOP 40 LIJST VOOR 9 – 16 FEB 2023": "3. Cough - Kizz Daniel". All 21 lists that carry it, 1 Dec 2022 → 4 May 2023: 20, 15, 14, 11, 11 (printed "Cough – Kiz Daniel, Empire"), 4, [absent 12–19 Jan], 24, 5, 4, **3**, 4, 6, 8, 9, 10, 15, 18, 23, 25, 32, 37. |

Sources: `swisscharts.com/song/Kizz-Daniel-feat.-Philkeyz/Nesesari-2161797` and `/charts/singles/04-04-2021` (hitparade.ch's own site; robots.txt allows both); `nationaletop40.sr/de-top-40-lijst-voor-9-16-feb-2023/` plus all 131 lists through the site's own `/wp-json/wp/v2/posts` (robots.txt disallows only `/wp-admin/`). Weeks are omitted for Suriname because the body prints no weeks column.

**Held for Paul's hand check — South Africa, *Buga (Lo Lo Lo)*, #3.** The find pass and the verifier read it from raw Wayback captures of TOSAC's own pages (weeks 22, 45 and 46 of 2022). TOSAC is by hand under the owner's ruling of 25 Sep 2026, archives included, so the row is not published and South Africa is not one of his territories until Paul confirms it on TOSAC's own site.

**Held — South Africa, *Cough (Odo)*, #86 (UNVERIFIED as a peak, and by hand since the 25 Sep 2026 ruling).** The reading was: TOSAC Week 46-2022 prints "86 · Cough (Odo) · Kizz Daniel, EMPIRE · PEAK 86 · POS. LAST WEEK 91" (Week 45: 91, PEAK 91). But the run was still climbing (91, 91, 86) when the archive goes dark. Wayback holds **no capture of any Local & International Streaming chart for 2022 W47–52 or 2023 W1–13** under any slug (CDX over every URL under `/charts/local-international-streaming…`; the yearless "week-47"…"week-52" slugs are all 2021 issues, dated by their own `datePublished`), and the next capture, 2023 W14 (still a Top 100), has no Cough row. Its Nigerian #1 (Oct 2022) and Surinamese #3 (Feb 2023) both fall inside that dark window, so 86 is a floor. **Paul's call:** publish ZA #86 with a floor note, or leave South Africa off this record. It is not in the entry.

**Better-looking numbers rejected, all genre or component charts:** UK Afrobeats Chart — Twe Twe **1**, Buga 2, Showa 3, Cough (Odo) 4 (and 9 as "Kizz Daniel & EMPIRE"), Gwagwalada 4, Sooner 5, Marhaba 6, Al-Jannah 7, Lie 8, Lost 8, Titi 8, Double 10, RTID 12, Shu-Peru 13, Police 13, Oshe 13, Pano Tona 14, Eh God 14, Pour Me Water 15, My G 15, Too Busy To Be Bae 16, To Be A Man 16; Buga also Video Streaming 20, Downloads 80, Sales 82, Independent 45, Independent Breakers 10; Cough (Odo) Video Streaming 46; Twe Twe Video Streaming 98 (all read on OCC's own artist pages, 24 Sep 2026). None of Kizz Daniel's nine OCC credits has an Official Singles Chart Top 100 entry. A No. 1 on the UK Afrobeats Chart is not a No. 1.

## Misses — his biggest records, checked chart by chart

Buga, Cough (Odo), Twe Twe, Lie, Gwagwalada, Pour Me Water, Showa, Marhaba, Lost and Eh God (Barnabas), plus Nesesari (his one European chart record), were checked on every official chart this sweep could read. **No missed peak was found.** Every read below was made by the verifier with an honest User-Agent:

| chart | what was read | result |
|---|---|---|
| 🇬🇧 UK Official Singles Chart Top 100 (OCC) | OCC's own search (`/search/kizz%20daniel/`, `/search/kiss%20daniel/`) and all nine artist credits it returns, read in full: Kizz Daniel; Kizz Daniel ft Cavemen; Kizz Daniel & Tekno; Kizz Daniel & EMPIRE; BNXN fka Buju/Kizz Daniel/Seyi; FOLA & Kizz Daniel; Kizz Daniel & Adekunle Gold; Kizz Daniel/Angelique Kidjo; Kizz Daniel/ODUMODUBLVCK/Bella | **zero** — only the component and genre charts listed above. "Kiss Daniel" has no OCC artist. |
| 🇮🇪 Official Irish Singles Chart (IRMA) | all nine of IRMA's song sitemaps, 17,728 charting songs | **zero** (control: three Burna Boy songs present) |
| 🇫🇷 SNEP Top Singles (Top 200) | every weekly list 2022 W18–52, 2023 W1–8 and 2024 W1–14 (Buga, Cough (Odo) and Twe Twe windows) | **zero** (control: Burna Boy on 2024 W1–2) |
| Hung Medien network (the song database behind hitparade.ch and the AT/BE/DE/DK/ES/FR/IT/NL/NO/PT/SE mirrors) | song search "kizz daniel", "kiss daniel", "buga", "cough", "gwagwalada", "pour me water", "marhaba", "nesesari"; the worldwide chart block of Twe Twe, Lie, Showa, Double, My G, Boys Are Bad, Follow Her, Loyal (Major Lazer ft. Kizz Daniel & Kranium), 4Dayz and Sofa | *Buga* and *Cough (Odo)* are **not in the database at all**; none of the ten items carries a chart line; *Nesesari* carries only CH 45 / 9. Control: Rema's *Calm Down* item lists CH, DE, AT, FR, NL, BE (V/W), SE, NO, DK, IT, ES, PT — so the block works. A lead, not a body read, for the countries whose own sites were not read. |
| 🇦🇺 ARIA Top 50 Singles | every weekly issue 2022-05-09 → 2023-02-27 and 2023-12-18 → 2024-04-01 (59 issues) | **zero** |
| 🇸🇷 Nationale Top 40 Suriname | all 131 lists, 1 Dec 2022 → 18 Sep 2026 | only *Cough* (above) |
| 🇿🇦 TOSAC | — | by hand (owner ruling, 25 Sep 2026) — not relied on, as a row or as a zero |
| 🇦🇪 🇸🇦 🇪🇬 Official MENA charts (Top 20) | spot check, four weeks of Twe Twe's run (5 Jan, 26 Jan, 16 Feb, 8 Mar 2024) × three countries | **zero** (spot check only) |

## What could NOT be read — gaps, not absences

- **Billboard** — Hot 100, Billboard 200, Global 200, Global 200 Excl. U.S., and the Canadian Hot 100 before 2 Sep 2023. billboard.com's robots.txt disallows ClaudeBot/anthropic-ai/Claude-Web and it redirects to a TollBit paywall; not bypassed, not read through Wayback. **Leads for Paul to check by hand:** Wikipedia's discography prints *Cough (Odo)* "138" in a column it labels World Digital Song Sales (a 25-place chart, so the number more likely belongs to the next column, Billboard Global); *Buga*'s own Wikipedia chart table lists only Nigeria and UK Afrobeats. *Uncle K: Lemon Chase* "US World 20" is Billboard World Albums, a genre chart — excluded either way. The Canadian Hot 100 from 2 Sep 2023 was read by the find pass (zero, Twe Twe's run included).
- **Netherlands** — dutchcharts.nl's robots.txt is `Disallow: /` and top40.nl disallows Claude agents; not read. **Lead:** Wikipedia gives *Nesesari* "NLD 10", citing the dutchcharts.nl item page. The Hung Medien worldwide block for that same item (id 2161797) has **no NL line** while the control lists NL for a Single Top 100 run, so the 10 is most likely a Tipparade / Single Tip placement (an extension chart, excluded) — but it is unconfirmed at the body.
- **South Africa** — by hand since the owner's ruling of 25 Sep 2026 (TOSAC is read by Paul, never by an agent). Before it: TOSAC 2021 weeks 34–42, 2022 W43–44 and W47–52, 2023 W1–13 are not archived; the live site serves AI-bot filler instead of the chart to an honest client. Published depth fell to a Top 10 from about 2023 W16 through 2024, so *Twe Twe*, *Showa*, *Marhaba* and later records could chart below the published depth invisibly.
- **Suriname** — no lists before 1 Dec 2022 (the site's first post): Buga's whole run (May 2022) is invisible. Unpublished windows include 15 Feb – 3 Oct 2024, which is Twe Twe's run.
- **Germany, Norway, Belgium** (robots.txt or a Cloudflare challenge; not bypassed), **Hungary** (robots disallows ClaudeBot), **Italy (FIMI)** and **RiSA** (manual by owner ruling), **Poland before 2023**, **Lithuania before 2022-W10**, **Iceland, India, Israel, Lebanon, Greece, Latvia, Singapore, Malaysia**, the Latin American bodies and every Billboard-compiled national chart — unread, not zero.
- **Australia positions 51–100** (ARIA publishes a Top 50) and **ARIA before 1 Jul 2019** (the dated archive starts there).

## Proven zeros

Read by this verifier, honest User-Agent: UK Official Singles Chart (all nine credits); Ireland (IRMA, 2014–2026); France (SNEP, the three windows above); ARIA Top 50 (the two windows above); Suriname (every list); Switzerland (hitparade.ch: only *Nesesari*; no album of his has a Swiss entry).

Resting on the find pass (24 Sep 2026): New Zealand Top 40 singles and albums (Aotearoa Music Charts' own search API; the find pass did not record its User-Agent), Canada from 2 Sep 2023 (ca.billboard.com, honest), and Czech Republic, Slovakia, Poland (2023–2026), Lithuania (2022–2026), the full UAE/Saudi/Egypt run and the earlier SNEP windows — **those last reads were made with a spoofed desktop-Chrome User-Agent** (see the verifier notes), so they are leads until re-read honestly. None could add a row that would stand without being re-read.

## Verifier notes (24 Sep 2026)

- Evidence: `~/burnaboy-work/board7/verify-charts/kizz-daniel/` — `tt/issues/{1,2}/` (the verifier's own 509-issue cache), `verify-walk-analysis.json`, `row-verdicts.json` (every row with its verbatim peak-issue line and source URL), `bodies/` (Swiss, Suriname, TOSAC, OCC, IRMA, SNEP, ARIA, MENA and Hung Medien reads).
- The find pass's TurnTable walk, and the repo's own `scripts/turntable-walk.mjs`, send `User-Agent: Mozilla/5.0 (archive read; burnaboystats sweep)` — changed to an honest
  one, `burnaboystats-turntable-walk/1.0 (+https://burnaboystats.com/contact)`, on
  25 Sep 2026. This pass ran a copy with an honest User-Agent instead and got the same 509 issues.
- TOSAC's live pages serve AI-bot filler to an honest client (the "✓ᴬ" rows are read from raw Wayback captures, the site's documented convention). Worth a ruling on whether archived reads of a site that deters AI clients stay acceptable. **Ruled 25 Sep 2026: they do not.** TOSAC is by hand, like RiSA, archives included; the row it alone supported is held.
