# Tiwa Savage — official chart peaks

**Standard:** one entry per **country** per **release**, on that country's
**principal national singles or albums chart**. *peak* = the highest position the
release has ever reached. Lead, co-billed and featured credits all count when the
chart prints them.

**Excluded throughout:** platform charts (Spotify, Apple Music, iTunes, Deezer,
Shazam, YouTube, Audiomack, Boomplay); **genre and component charts** (UK
Afrobeats Chart, UK Singles Sales / Downloads / Video Streaming, UK Independent
Singles Breakers, UK Album Downloads, UK Hip Hop & R&B Albums, Billboard U.S.
Afrobeats Songs, World Digital Song Sales); extension charts below a main chart;
year-end, mid-week and recurrent charts.

**By hand, never read by an agent (owner rulings, 24–25 Sep 2026):** TOSAC
(South Africa's chart), RiSA, FIMI, the BPI, ARIA's accreditation Dropbox, AFP's
uploads, dutchcharts.nl, top40.nl and billboard.com — archived copies included.
A row whose only evidence came from one of them is not published here; it waits
on Paul's weekly hand check instead. Readings of those sources made before the
ruling are not relied on, as rows or as zeros.

Tiwa Savage, Nigerian singer-songwriter. Matched as **"Tiwa Savage"**, never a bare
"Savage". **Name traps, all checked and excluded:** **Savage**, the Nigerian rapper
(TurnTable: "Confident — Savage & Buju", 12 issues; album "That Uzere Boy — Savage");
**21 Savage** (TurnTable, SNEP, ARIA, IRMA); Chantay Savage, Edna Savage, Savage
Garden and the other OCC "savage" credits. No body prints a variant spelling of her
name, and no chart line carries a bare "Tiwa".

## Total: 32 singles + 2 albums = 34 chart entries

**0 No. 1s.** Her best rank anywhere is **2** (Nigeria, twice). **2 territories**
(🇳🇬 Nigeria, 🇫🇷 France).

Distribution: 🇳🇬 33 (31 singles + 2 albums) + 🇫🇷 1 = **34** ✓. No country appears
twice for the same title.

**Swept 24 Sep 2026** (find pass), and **every row re-read at its chart body by a
separate verifier on 25 Sep 2026**: 34 rows STAND, 0 are REFUTED, 0 are
UNVERIFIED. One row carries a **ruling flag** (*Awolowo (Remix)*, below). The
Nigerian archive was walked a second time, end to end, and reproduces every row on
every field. The misses pass found **no missed peak**.

| release | chart peaks by country | |
|---|---|---|
| African Sugar (Tayc feat. Tiwa Savage) | 🇫🇷 #148 | **1** |
| 31 singles | 🇳🇬 only (table below) | **31** |
| 2 albums | 🇳🇬 only (table below) | **2** |

**31 + 1 + 2 = 34.**

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

with a turntablecharts.com `Referer` (403 without it), decoding the base64
`payload` envelope, by a copy of `scripts/turntable-walk.mjs` (from `origin/main`)
run in the verifier's own folder with an honest User-Agent
(`burnaboystats-chart-verify/1.0 (Claude-User; …)`) and a fetch-only switch.
turntablecharts.com has no robots.txt (404). Every response is validated against
the `weekNumber` and `dateCreated` year requested — an unpublished week serves the
category's *earliest* issue, and that fallback seen twice is recorded as "no
issue". 560 requests, 18 rate-limited and waited out, 33 fallback mismatches, **0
failed issues**. The only non-7-day gaps are the New Year's Eve special
(2024-12-26 → 12-31 → 2025-01-09) and, for albums, 2022-11-02 → 11-10 (8 days).
The singles issue for 24 Sep 2026 and the albums issues for 17 and 24 Sep 2026
were not yet published when read (25 Sep 2026, 00:57 BST).

Matching is on the **artist** line, word-anchored: `/\btiwa\s*savage\b/i`. A loose
pass over title AND artist (`/tiwa|savage|savge|tiwah/i`) found only the name traps
above. Peak = the best rank in ANY issue (`highestPosition` resets at the 7 Jul
2022 relaunch and on every re-entry, so it is quoted only as evidence). Weeks =
issues the recording appears in **under a credit naming Tiwa Savage**; weeks at
peak = issues at that rank. Both are counted from the body's own weekly issues, and
neither goes on the board: TurnTable publishes no continuous weeks counter and no
weeks-at-peak figure, and no Nigerian row on the board carries them.

**Re-read result: 33 of 33 Nigerian rows reproduce exactly** — peak, peak issue,
chart name on the peak issue, title, credit, weeks and weeks at peak. The whole
archive was re-read rather than sampled, so all 12 top-10 peaks (*Who Is Your
Guy? (Remix)*, *Toma Toma*, *Loaded*, *Stamina*, *Awolowo (Remix)*, *Somebody's
Son*, *Energy*, *Jaiye Foreign*, *100 MILLION*, *Forgiveness*, *No Wahala*, *Mega
Money Mega*) and all 21 other rows were checked; no check failed. The same analysis
run over the find pass's own cache gives an identical result, row for row. The
re-walk found **no Nigerian row the find pass missed**.

**No No. 1 to attack.** No Tiwa Savage-credited row ranks 1 in any of the 509
issues. The two #2s were attacked directly:

- ***Who Is Your Guy? (Remix)* — "Spyro & Tiwa Savage"**: #2 once, 16 Mar 2023
  (issue 1886: rank 2, lastPosition 4, highestPosition 2, weeksOnChart 8). One
  TurnTable entry: "Who Is Your Guy? — Spyro" solo from 26 Jan 2023 (76, 18, **6**,
  9, 10, 10 — WOC 1→6), re-credited "Who Is Your Guy? (Remix) — Spyro & Tiwa Savage"
  from 9 Mar 2023 (#4, `lastPosition 10`, WOC 7), then 2, 3, 4 … 48 (28 Sep 2023,
  WOC 32). Only the 26 credited issues are counted; the #2 was set under the
  credited printing. Spyro is not on the board.
- ***Toma Toma* — "Ruger & Tiwa Savage"**: #2 once, 5 Dec 2024 (issue 3884: rank
  2, lastPosition 6, highestPosition 2, weeksOnChart 4). 23 issues, 14 Nov 2024
  (#76) → 24 Apr 2025 (#99), one printing throughout. Ruger's verified draft
  carries the same NG 2.

### Every Nigerian peak, with the issue that set it

| # | title | list | NG peak | set on issue | chart name on that issue | weeks | wks at peak | run | printed on the chart | verified |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Who Is Your Guy? (Remix) | singles | **2** | 1886 · 2023-03-16 (wk 11/2023) | Official Nigeria Top 100 | 26 | 1 | 2023-03-09 (#4) → 2023-09-28 (#48) | Who Is Your Guy? (Remix) — Spyro & Tiwa Savage ×26 | ✓ |
| 2 | Toma Toma | singles | **2** | 3884 · 2024-12-05 (wk 49/2024) | Official Nigeria Top 100 | 23 | 1 | 2024-11-14 (#76) → 2025-04-24 (#99) | Toma Toma — Ruger & Tiwa Savage ×23 | ✓ |
| 3 | Loaded | singles | **3** | 1499 · 2022-11-10 (wk 45/2022) | TurnTable Nigeria Top 100 | 29 | 3 | 2022-11-10 (#3) → 2023-05-25 (#98) | Loaded — Tiwa Savage & Asake ×29 | ✓ |
| 4 | Stamina | singles | **3** | 1946 · 2023-03-30 (wk 13/2023) | Official Nigeria Top 100 | 24 | 1 | 2023-03-16 (#26) → 2023-11-09 (#84) | Stamina — Tiwa Savage, Ayra Starr & Young Jonn ×24 | ✓ |
| 5 | Awolowo (Remix) | singles | **3** | 3853 · 2024-11-14 (wk 46/2024) | Official Nigeria Top 100 | 1 | 1 | 2024-11-14 (#3) → 2024-11-14 (#3) | Awolowo (Remix) — Fido & Tiwa Savage ×1 | ✓ ruling flag |
| 6 | Somebody's Son | singles | **5** | 783 · 2021-10-21 (wk 42/2021) | TurnTable Top 50 | 21 | 1 | 2021-08-26 (#13) → 2022-01-20 (#41) | Somebody's Son — Tiwa Savage ft. Brandy ×21 | ✓ |
| 7 | Energy | singles | **7** | 5769 · 2026-07-30 (wk 31/2026) | Official Nigeria Top 100 | 16 | 1 | 2026-06-04 (#17) → 2026-09-17 (#34) — still on the latest issue | Energy — Tiwa Savage, Wande Coal & Mavo ×16 | ✓ |
| 8 | Jaiye Foreign | singles | **8** | 1276 · 2022-08-18 (wk 33/2022) | TurnTable Nigeria Top 100 | 13 | 2 | 2022-08-18 (#8) → 2022-11-10 (#95) | Jaiye Foreign — Tiwa Savage & Zinoleesky ×13 | ✓ |
| 9 | 100 MILLION | singles | **8** | 3116 · 2024-03-21 (wk 12/2024) | Official Nigeria Top 100 | 12 | 1 | 2024-03-21 (#8) → 2024-06-06 (#100) | 100 MILLION — ODUMODUBLVCK & Tiwa Savage ×12 | ✓ |
| 10 | Forgiveness | singles | **8** | 3797 · 2024-10-24 (wk 43/2024) | Official Nigeria Top 100 | 9 | 1 | 2024-10-24 (#8) → 2025-03-06 (#97) | Forgiveness — Tiwa Savage ×9 | ✓ |
| 11 | No Wahala | singles | **9** | 1017 · 2022-03-24 (wk 12/2022) | TurnTable Top 50 | 24 | 2 | 2022-03-10 (#19) → 2022-09-08 (#98) | No Wahala — 1da Banton ft. Kizz Daniel & Tiwa Savage ×17; No Wahala (Remix) — 1da Banton ft. Kizz Daniel & Tiwa Savage ×7 | ✓ |
| 12 | Mega Money Mega | singles | **9** | 3947 · 2025-01-09 (wk 2/2025) | Official Nigeria Top 100 | 11 | 2 | 2024-12-19 (#25) → 2025-03-06 (#81) | Mega Money Mega — Tiwa Savage ×11 | ✓ |
| 13 | You4Me | singles | **12** | 4402 · 2025-05-01 (wk 18/2025) | Official Nigeria Top 100 | 12 | 1 | 2025-04-24 (#95) → 2025-07-10 (#84) | You4Me — Tiwa Savage ×12 | ✓ |
| 14 | Tanana | singles | **16** | 161 · 2020-11-19 (wk 47/2020) | TurnTable Top 50 | 2 | 1 | 2020-11-19 (#16) → 2020-11-26 (#40) | Tanana — Davido ft. Tiwa Savage ×2 | ✓ |
| 15 | Pick Up | singles | **16** | 2207 · 2023-06-29 (wk 26/2023) | Official Nigeria Top 100 | 20 | 1 | 2023-06-15 (#20) → 2024-01-11 (#95) | Pick Up — Tiwa Savage ×20 | ✓ |
| 16 | Over The Moon | singles | **16** | 4760 · 2025-08-28 (wk 35/2025) | Official Nigeria Top 100 | 7 | 1 | 2025-08-21 (#19) → 2025-10-02 (#78) | Over The Moon — Johnny Drille & Tiwa Savage ×7 | ✓ |
| 17 | Koroba | singles | **21** | 155 · 2020-11-12 (wk 46/2020) | TurnTable Top 50 | 12 | 1 | 2020-11-05 (#24) → 2021-01-28 (#40) | Koroba — Tiwa Savage ×12 | ✓ |
| 18 | Men Are Crazy | singles | **21** | 3158 · 2024-04-11 (wk 15/2024) | Official Nigeria Top 100 | 8 | 1 | 2024-04-11 (#21) → 2024-06-13 (#88) | Men Are Crazy — Simi & Tiwa Savage ×8 | ✓ |
| 19 | BBC (Remix) | singles | **22** | 331 · 2021-02-18 (wk 7/2021) | TurnTable Top 50 | 4 | 1 | 2021-02-18 (#22) → 2021-03-11 (#47) | BBC (Remix) — Blaqbonez ft. Tiwa Savage ×4 | ✓ |
| 20 | NSV | singles | **23** | 2078 · 2023-05-18 (wk 20/2023) | Official Nigeria Top 100 | 7 | 1 | 2023-05-18 (#23) → 2023-06-29 (#94) | NSV — Bella Shmurda & Tiwa Savage ×7 | ✓ |
| 21 | Commitment | singles | **36** | 4055 · 2025-03-13 (wk 11/2025) | Official Nigeria Top 100 | 5 | 1 | 2025-03-06 (#47) → 2025-04-03 (#63) | Commitment — Craig David & Tiwa Savage ×5 | ✓ |
| 22 | In My Head | singles | **37** | 3198 · 2024-04-25 (wk 17/2024) | Official Nigeria Top 100 | 5 | 1 | 2024-04-18 (#70) → 2024-05-16 (#90) | In My Head — Timaya & Tiwa Savage ×5 | ✓ |
| 23 | Gbese | singles | **38** | 2059 · 2023-05-11 (wk 19/2023) | Official Nigeria Top 100 | 19 | 1 | 2023-03-09 (#39) → 2024-02-29 (#100) | Gbese — Majeeed & Tiwa Savage ×19 | ✓ |
| 24 | Tales By Moonlight | singles | **42** | 694 · 2021-08-26 (wk 34/2021) | TurnTable Top 50 | 1 | 1 | 2021-08-26 (#42) → 2021-08-26 (#42) | Tales By Moonlight — Tiwa Savage ft. Amaarae ×1 | ✓ |
| 25 | On The Low | singles | **42** | 4760 · 2025-08-28 (wk 35/2025) | Official Nigeria Top 100 | 6 | 1 | 2025-08-07 (#52) → 2025-09-11 (#72) | On The Low — Tiwa Savage & Skepta ×6 | ✓ |
| 26 | Ole | singles | **49** | 155 · 2020-11-12 (wk 46/2020) | TurnTable Top 50 | 1 | 1 | 2020-11-12 (#49) → 2020-11-12 (#49) | Ole — Tiwa Savage ft. Naira Marley ×1 | ✓ |
| 27 | Can't Let You Go | singles | **50** | 331 · 2021-02-18 (wk 7/2021) | TurnTable Top 50 | 1 | 1 | 2021-02-18 (#50) → 2021-02-18 (#50) | Can't Let You Go — Steff London ft. Tiwa Savage & Rema ×1 | ✓ |
| 28 | Lost Time | singles | **51** | 3211 · 2024-05-09 (wk 19/2024) | Official Nigeria Top 100 | 5 | 1 | 2024-05-09 (#51) → 2024-06-06 (#75) | Lost Time — Tiwa Savage ×5 | ✓ |
| 29 | Commona | singles | **60** | 3401 · 2024-07-04 (wk 27/2024) | Official Nigeria Top 100 | 3 | 1 | 2024-07-04 (#60) → 2024-07-18 (#99) | Commona — Tiwa Savage, Olamide & Mystro ×3 | ✓ |
| 30 | Turn It Up | singles | **80** | 5771 · 2026-08-13 (wk 33/2026) | Official Nigeria Top 100 | 5 | 2 | 2026-07-23 (#84) → 2026-09-03 (#80) | Turn It Up — Jonna Fraser ft. Tiwa Savage ×5 | ✓ |
| 31 | 10% | singles | **82** | 4852 · 2025-10-02 (wk 40/2025) | Official Nigeria Top 100 | 1 | 1 | 2025-10-02 (#82) → 2025-10-02 (#82) | 10% — Tiwa Savage ×1 | ✓ |
| 32 | Water & Garri (Original Motion Picture Soundtrack) | albums | **30** | 3327 · 2024-05-16 (wk 20/2024) | Official Top 100 Albums | 2 | 1 | 2024-05-16 (#30) → 2024-05-23 (#74) | Water & Garri (Original Motion Picture Soundtrack) — Tiwa Savage ×2 | ✓ |
| 33 | This One Is Personal | albums | **79** | 4763 · 2025-09-04 (wk 36/2025) | Official Top 100 Albums | 1 | 1 | 2025-09-04 (#79) → 2025-09-04 (#79) | This One Is Personal — Tiwa Savage ×1 | ✓ |

### Printings folded into one entry (each checked on the lastPosition / weeksOnChart chain)

- **No Wahala → No Wahala (Remix).** TurnTable's entry began as 1da Banton's solo
  record ("No Wahala — 1da Banton", 13 issues, 9 Dec 2021 → 3 Mar 2022, not
  counted). From 10 Mar 2022 it is printed "1da Banton ft. Kizz Daniel & Tiwa
  Savage" (#19, `lastPosition 40`, WOC 14), peaking at **9** on 24 and 31 Mar 2022,
  last seen 30 Jun at #50 (WOC 30). The next issue is the 7 Jul 2022 relaunch, which
  reset every counter; it re-enters there as "No Wahala (Remix)" with the same
  artiste line (#52, WOC 1) for 7 issues to 8 Sep 2022. One record, 24 credited
  issues. Kizz Daniel's verified draft carries the same NG 9 and the same fold.
- **Who Is Your Guy? → Who Is Your Guy? (Remix)** — the re-credit described under
  the #2s above; only the credited printing is counted.
- **Turn It Up** is one entry with a re-entry: debut 23 Jul 2026 (#84, WOC 1),
  absent 30 Jul and 6 Aug, re-entry 13 Aug (#80, `lastPosition -1`, WOC 2), then
  83, 89, **80** (3 Sep, `highestPosition 80`). One oddity, recorded rather than
  resolved: the 20 Aug issue prints `lastPosition 81`, `highestPosition 81` for it,
  while the 13 Aug issue itself prints rank 80 (and the same 20 Aug issue gives
  BNXN & Sarz's "Already" `lastPosition 80`, where 13 Aug printed it at 90). The
  peak does not depend on 13 Aug: the 3 Sep issue prints rank 80 with
  `highestPosition 80`. Off the chart on 10 and 17 Sep, so the run is closed.
- **Gbese** and **Pick Up** each run under one printing with re-entries; the
  `weeksOnChart` counter continues across each gap, so each is one entry.
- Every other recording is printed one way on every issue it appears in.

### Ruling flag — *Awolowo (Remix)*, NG #3 (in the entry; Paul may drop it)

TurnTable ran **one** entry, "Awolowo — Fido" (29 Aug 2024 → 6 Mar 2025,
`weeksOnChart` 1 → 27), and printed it **"Awolowo (Remix) — Fido & Tiwa Savage"
on the 14 Nov 2024 issue only** (issue 3853: rank 3, lastPosition 4,
highestPosition 3, weeksOnChart 12), reverting to "Awolowo — Fido" the next week
(#7, lastPosition 3). On the body the row is exact — her name is in the printed
credit, the title is as printed, the rank is 3 — so it **STANDS**, and it is counted
under the Sungba (Remix) rule (the issues printed with the credit count). It is
flagged because the whole peak rests on one re-credited issue in another act's run.
Dropping it makes the headline **33 entries**; territories (2) and No. 1s (0) do not
move. (Wizkid's board row "Awolowo", NG 48, is a different record: "Awolowo — BOJ,
Wizkid & Darkovibes", 5 May 2022.)

### Notes carried into the entry

- **Open run, published with the board's open-run note:** *Energy* (Tiwa Savage,
  Wande Coal & Mavo) — #7 on 30 Jul 2026, #34 on the latest issue (17 Sep), 16
  issues. The standard note says "read in the release's first weeks"; this run is
  16 weeks old and falling, so the wording is loose. It is the board's one open-run
  sentence, used as the README requires. Re-read at the next sweep.
- **Koroba predates the chart:** it was #24 on the singles chart's very first issue
  (5 Nov 2020) and reached 21 the next week, so 21 is the best rank since the chart
  began, not since release. The entry says so, in the words the board already uses
  for albums that predate the albums chart.
- **Pre-archive, a gap and not a zero:** the singles chart begins 5 Nov 2020 and the
  albums chart 2 Nov 2022. *Kele Kele Love*, *Eminado*, *All Over*, *Ma Lo*, *Lova
  Lova*, *49-99*, *Attention*, *Dangerous Love*, *Temptation* and the albums *Once
  Upon a Time*, *R.E.D.*, *Celia* and the *Water & Garri* EP (2021) have no official
  Nigerian chart to be read against. None of *Ma Lo*, *All Over*, *Attention*,
  *Dangerous Love*, *Temptation* or *Fever* appears on any issue under a credit
  naming her (the "All Over" and "Attention" rows that do exist are Magixx's,
  Omah Lay & Justin Bieber's and Soundz's records). Wikipedia's discography
  gives *Attention* "NGR 1" (2019); that predates TurnTable, and the source chart is
  not named, so it is not a row.

### Shared records — the other boards already agree

*Loaded* NG 3 (Asake's board), *Stamina* NG 3 (Ayra Starr's), *Commona* NG 60
(Olamide's), *Tanana* NG 16 (Davido's, titled "Tanana (ft. Tiwa Savage)"), *Toma
Toma* NG 2 (Ruger's verified draft) and *No Wahala* NG 9 (Kizz Daniel's verified
draft). Every figure matches.

**Title collisions for APPLY (different records, same title):**
- *Energy* | NG: Tiwa Savage, Wande Coal & Mavo (7, this entry); Wizkid's own (15,
  Wizkid's board); G4ZI & Kizz Daniel (13, Kizz Daniel's draft). Three records.
- *Forgiveness* | NG: Tiwa Savage's (8) vs Asake's own (1, Asake's board).
- *Ole* | NG: "Ole — Tiwa Savage ft. Naira Marley" (49) vs "Ole — Qing Madi & BNXN"
  (12, BNXN's board).

TurnTable's artiste lines separate every pair. The title-keyed "one answer per
chart" test in `tests/afrobeats.test.ts` will flag "Energy|NG", "Forgiveness|NG"
and "Ole|NG". They belong in its `known` set, or the rows can take qualified titles
on the pattern of BNXN's "Mood (Wizkid ft. BNXN)". Not settled here.

**House titles:** every title is TurnTable's printing on the peak issue ("100
MILLION", "Who Is Your Guy? (Remix)", "Water & Garri (Original Motion Picture
Soundtrack)", "Over The Moon", "On The Low"). Normalise to house style at APPLY.

## Outside Nigeria — one entry, read at the body

| release | country · chart | peak | weeks at peak / weeks | mark | verbatim, as the body prints it |
|---|---|---|---|---|---|
| African Sugar (Tayc feat. Tiwa Savage) | 🇫🇷 SNEP Top Singles (Top 200) | **148** | — / 1 (doc only) | ✓ | S50-2020, "Semaine du 11 décembre 2020": "148 \| AFRICAN SUGAR \| TAYC FEAT. TIWA SAVAGE \| WM FR AFFILIATED/PLAY TWO \| 1er Semaine dans le Top \| 148e Meilleure Position". |

Read at snepmusique.com, 97 weekly Top Singles lists (200 rows each): 2020 W33–53,
2021 W1–4, 2021 W33–49, 2022 W45–52, 2023 W1–4 and W9–18, 2024 W46–52, 2025 W1–2
and W13–18, and 2026 W22–38. 94 lists are validated by the page's own active-week
selector. Three pages carry no selector label (2020-W53, 2023-W1, 2025-W1), and each
differs from both of its neighbours (193–198 rows), so they are real issues.
*African Sugar* appears on **one** list only. It entered in the release week of
Tayc's album *Fleur froide* (4 Dec 2020) and is absent from S33–S49 and S51–S53 of
2020, S1–S4 of 2021, and S33–S49 of 2021, including the album's reissue weeks
(S46–S49). Hung Medien's item for the song
(swisscharts.com) agrees: "Weltweit | FR | Peak: 148 / Wochen: 1", one week in
France in total. Weeks are recorded here, not in the entry, as with every FR row on
the board. The credit is a featured one (Tayc leads).

## Misses — her biggest records, checked chart by chart

*Loaded*, *Who Is Your Guy? (Remix)*, *Stamina*, *Toma Toma*, *Somebody's Son*,
*Koroba*, *No Wahala*, *Energy*, *Commitment* (with Craig David) and *Turn It Up*
(with Jonna Fraser), plus *Keys to the Kingdom*, *African Sugar* and the albums
*Water & Garri (OST)* and *This One Is Personal*, were checked on every official
chart this pass could read. **No missed peak was found.** Every read below was made
by the verifier with an honest User-Agent:

| chart | what was read | result |
|---|---|---|
| 🇬🇧 UK Official Singles Chart Top 100 and Official Albums Chart (OCC) | OCC's search capped at 12 artist results, so each collaborator was searched with "tiwa" as well. There are 13 OCC credits naming her, all read in full: Tiwa Savage; Tiwa Savage/Sam Smith; Tiwa Savage/Smallgod/Kwesi; Tiwa Savage ft Brandy; Tiwa Savage ft Amaarae; Zinoleesky & Tiwa Savage; Tiwa Savage & Asake; Tiwa Savage & Ayra Starr; Tiwa Savage & Mr Eazi; Odumodublvck/Tiwa Savage; Ruger/Tiwa Savage; Tiwa Savage/Skepta; Craig David & Tiwa Savage. Also read: Spyro, 1da Banton, Tayc, Fido, Timaya, Simi. Searched: spyro, tayc, jonna fraser, fido, simi, timaya, bella shmurda, johnny drille, wande coal, olamide, davido, blaqbonez, steff london, 1da banton, kizz daniel, naira marley, young jonn, wizkid, majeeed (each + "tiwa") | **zero.** The parser was checked against Oxlade's page, which shows his Singles Chart 24/49 and Irish Singles Chart 50. OCC has no Spyro, 1da Banton, Tayc, Jonna Fraser, Fido, Simi or Timaya credit that prints Tiwa Savage |
| 🇮🇪 Official Irish Singles Chart (IRMA) | all nine song sitemaps (17,728 charting songs), grep on tiwa/savage and on every big title and collaborator; OCC's Irish Singles Chart section on all 13 credits | **zero.** The only "savage" songs are 21 Savage, Savage Garden, Megan Thee Stallion and Jawsh 685. Control: 15 Burna Boy songs |
| 🇫🇷 SNEP Top Singles (Top 200) | the 97 lists above | only *African Sugar* |
| Hung Medien database (swisscharts.com: the Swiss Hitparade's own site, and the database behind the AT/BE/DE/DK/ES/FR/IT/NL/NO/PT/SE mirrors) | song and album search "tiwa savage": 21 songs + 3 albums, every item read (crawl-delay 10 s respected) | only *African Sugar* has a chart block (FR 148/1). No Swiss run on any item, so **Switzerland is a proven zero**. No item credited to her exists for *Loaded*, *Who Is Your Guy? (Remix)*, *Toma Toma*, *No Wahala*, *Commitment*, *Energy*, *Ma Lo* or *Celia* (the Ruger verifier found no *Toma Toma* under his name either). For the other countries this is a lead, not a read at the body |
| 🇳🇱 Dutch Single Top 100 — *Turn It Up* (Jonna Fraser feat. Tiwa Savage, 2026) | Hung Medien item 2627279. Controls: Jonna Fraser's own 2026 items "We're All Gonna Make It" (NL Peak 75 / 1 week) and "Fashionweek" (Lil Kleine & Jonna Fraser, NL 13 / 13 weeks) | **no NL line** on *Turn It Up*, although the database carries his 2026 Dutch runs. This is a lead only: dutchcharts.nl and top40.nl cannot be read (see gaps) |
| 🇦🇺 ARIA Top 50 Singles | 52 weekly issues, 50 rows each: 2021-08-30 → 11-01 (Somebody's Son), 2022-11-14 → 12-19 (Loaded), 2023-03-06 → 04-24 (WIYG Remix, Stamina), 2024-11-18 → 12-23 (Toma Toma), 2025-03-03 → 04-14 (Commitment), 2026-06-08 → 09-21 (Energy, Turn It Up) | **zero.** The only hits are 21 Savage's |
| 🇳🇿 Official Top 40 (Aotearoa Music Charts) | the body's own search API: "Tiwa", "Tiwa Savage" | **zero** results. Control: "Burna Boy" returns results |
| 🇨🇦 Canadian Hot 100 (ca.billboard.com) | spot check 2024-12-07 (Toma Toma) and 2025-03-22 (Commitment), 100 rows each; 2026-09-26 came back without chart rows (as the find pass found for 2026) | **zero** (the find pass read 124 issues, Sep 2023 → Feb 2026: zero) |
| 🇸🇷 Nationale Top 40 Suriname | all 131 lists, 1 Dec 2022 → 18 Sep 2026, through the site's own `/wp-json/wp/v2/posts` | **zero.** The only "Energy" rows are Mical Teja's and Ky-Mani Marley's. Control: Burna Boy on 62 lists |
| Wikipedia (lead only, not a body) | "Tiwa Savage discography" and the "Loaded" article | its chart columns are NGR, UK Afrobeats, UK Digital, US Afrobeats and US World Digital. There is no Hot 100, Billboard 200, Global 200 or Canadian column, so no Billboard lead |

**Better-looking numbers rejected, all genre or component charts** (OCC's own
artist pages, 25 Sep 2026):
- UK **Afrobeats Chart**: Stamina **2**, Temptation 4, Loaded 4, Somebody's Son 6,
  Toma Toma 7, Koroba 10, On The Low 10, Dangerous Love 12, Pick Up 13, 100
  Million 14, Let Dem Kno 14, Jaiye Foreign 15, You4Me 16, and Tales By Moonlight
  19 (OCC prints it "TALES MY MOONLIGHT").
- UK **Singles Downloads / Sales**: Commitment 51 / 53, Keys to the Kingdom 73 / 75.
- UK **Video Streaming**: Somebody's Son 80, Loaded 85.
- UK **Independent Singles Breakers**: Loaded 16.
- UK **Album Downloads** and **Hip Hop & R&B Albums**: This One Is Personal 42 and
  18.
- Wikipedia's **US Afrobeats Songs** and **World Digital Song Sales** columns:
  Loaded 15, Stamina 16, Toma Toma 17, Jaiye Foreign 18, 100 Million 24,
  Somebody's Son 42 / 11, Ma Lo 13, 49-99 9, Roll on Me 12 / 4.

**Attempts to refute from Wikipedia's NGR column, all answered by the body:**

| title | Wikipedia NGR | the body | read on |
|---|---|---|---|
| *Toma Toma* | 3 | **2** | issue 3884, 5 Dec 2024: rank 2, highestPosition 2 |
| *Somebody's Son* | 6 | **5** | issue 783, 21 Oct 2021: rank 5, lastPosition 9, highestPosition 5 |
| *Pick Up* | 20 | **16** | issue 2207, 29 Jun 2023 |
| *On the Low* | 52 | **42** | issue 4760, 28 Aug 2025 (its debut was 52) |

The body's own issues win.

**Considered and not counted:** *Terminator* (King Promise featuring Sean Paul and
Tiwa Savage). Wikipedia lists it at NGR 6, but TurnTable prints it "Terminator —
King Promise" on all 31 issues it charted (6 Jul 2023 → 1 Feb 2024, peak 6), never
with her name. The chart does not credit her, so under the standard it is not a
row. *Who Is Your Guy?* in its six solo issues (26 Jan → 2 Mar 2023, peak 6) is
credited to Spyro alone and is not counted either.

## What could NOT be read — gaps, not absences

- **Billboard**: Hot 100, Billboard 200, Global 200, Global 200 Excl. U.S., and the
  Canadian Hot 100 before 2 Sep 2023. billboard.com redirects an honest client to a
  TollBit paywall (307), and its robots.txt disallows ClaudeBot, anthropic-ai and
  Claude-Web. It was not bypassed and not read through Wayback. **No lead found**
  (Wikipedia shows only the US Afrobeats and World Digital columns).
- **Netherlands, the one live lead.** *Turn It Up* is a Dutch rapper's single (Jonna
  Fraser feat. Tiwa Savage, July 2026). Hung Medien shows no NL line, but the body
  itself is unreadable: dutchcharts.nl's robots.txt is `User-agent: * / Disallow: /`,
  and top40.nl disallows Claude-Web, ClaudeBot and anthropic-ai (the Dutch Top 40 was
  not read). **Paul to check the Single Top 100 (and the Top 40) for Aug–Sep 2026 by
  hand.** If it charted, it is a new NL row and a third territory.
- **Belgium** (Ultratop's live site serves a Cloudflare 403; the robots.txt fetch
  also got 403), **Germany** and **Norway** (robots.txt or a Cloudflare challenge),
  **Hungary** (robots.txt disallows ClaudeBot), **Italy (FIMI)** and **RiSA**
  (manual, by owner ruling). **Sweden**: the site's search is JavaScript-rendered and
  could not be re-read here; it rests on the find pass. **Austria, Denmark, Spain,
  Portugal**: lead only. For all of these, the Hung Medien lead above (no chart line
  on any Tiwa Savage item except *African Sugar*'s FR) is the only evidence.
- **SNEP outside the windows above** (2021 W5–32, 2022 W1–44, 2023 W5–8 and W19
  onward, 2024 W1–45, 2025 W3–12 and W19 onward, 2026 W1–21). This is a lead only:
  there is no Hung Medien FR line except *African Sugar*'s.
- **South Africa (TOSAC).** By hand since the owner's ruling of 25 Sep 2026 (TOSAC
  is read by Paul, never by an agent); the find pass's zero across about 202
  archived issues is not relied on. The window 2022 W47 – 2023 W13 is not archived (*Loaded*, the start of
  *Who Is Your Guy? (Remix)* and *Stamina*), and TOSAC published only a Top 10/20 for
  much of 2023–2024 (*100 MILLION*, *Toma Toma*). Not re-read here.
- **Suriname**: no lists before 1 Dec 2022 (*Somebody's Son*, *Koroba*, *No Wahala*,
  *Jaiye Foreign*). Unpublished windows include 15 Feb – 3 Oct 2024 (*100 MILLION*,
  *Men Are Crazy*, *Lost Time*, *Commona*), 2 Jan – 6 Mar 2025 (*Toma Toma*'s second half,
  *Mega Money Mega*) and 30 Oct – 18 Dec 2025.
- **Australia** positions 51–100 (ARIA publishes a Top 50) and ARIA before 1 Jul
  2019.
- **Canada 2026**: dated pages from 2026-03-07 on come back without chart rows,
  including 2026-09-26 in this read (the *Energy* and *Turn It Up* window).
- **Ireland**: albums at positions 51–100, and anything before Nov 2014. Not walked.
- **MENA (AE/SA/EG), Czech Republic, Slovakia, Poland, Lithuania, Greece**: resting
  on the find pass. The Kizz Daniel verifier noted that the MENA and
  CZ/SK/PL/LT walks used a spoofed desktop-browser User-Agent, so they are leads
  until re-read honestly. None was re-read here.
- **Iceland, India, Israel, Lebanon, Latvia, Singapore, Malaysia**, the Latin
  American bodies, the airplay carve-outs and every Billboard-compiled national
  chart: unread, not zero.
- **TurnTable**: singles before 5 Nov 2020 and albums before 2 Nov 2022 (the
  pre-archive list above). The albums issues of 17 and 24 Sep 2026 and the singles
  issue of 24 Sep 2026 were not yet published; *Energy*'s run is open.

## Proven zeros

Read by this verifier with an honest User-Agent:
- UK Official Singles Chart and Official Albums Chart (all 13 OCC credits naming
  her, Craig David & Tiwa Savage included).
- Ireland (IRMA, all 17,728 charting songs, 2014–2026; and OCC's Irish Top 50 from
  2017).
- Switzerland (the Hitparade's own database: none of her 24 items has a Swiss run).
- New Zealand Top 40 (the body's own search API).
- Suriname (every list, 1 Dec 2022 → 18 Sep 2026).
- France outside *African Sugar* (the 97 SNEP lists above).
- ARIA Top 50 (the 52 issues above).
- Nigeria: *Ma Lo*, *Fever*, *All Over*, *Attention*, *Dangerous Love* and
  *Temptation* never appear under a credit naming her in any of the 509 issues.

Resting on the find pass (24 Sep 2026): ARIA Top 50 singles and albums, all 377
issues from 2019-07-01 to 2026-09-21; Canada from 2 Sep 2023 to 28 Feb 2026
(ca.billboard.com, honest User-Agent). Also, as leads until
re-read honestly: Czech Republic, Slovakia, Poland (2023–2026), Lithuania
(2022–2026), UAE/Saudi/Egypt and the Greek captures. None of them could add a row
that would stand without being re-read.

## Verifier notes (25 Sep 2026)

- Evidence is under `~/burnaboy-work/board7/verify-charts/tiwa-savage/`:
  - `tt/issues/{1,2}/`: the verifier's own 509-issue cache.
  - `walk.log` and `tt/fetch-stats.json`.
  - `verify-walk-analysis.json` / `.txt`: every Tiwa Savage appearance.
  - `findpass-cache-analysis.*`: the same analysis over the find pass's cache.
    It is identical.
  - `row-verdicts.json`: every row with its verbatim peak-issue line, source URL,
    field checks and verdict.
  - `ng-table.md`.
  - `chains.mjs`: the title-chain lister used for the folds, Terminator and the
    collisions.
  - `bodies/`: OCC, IRMA, SNEP (97 lists + `snep-parsed.json`), Hung Medien
    (24 items + controls, `hm-summary.txt`), ARIA, NZ, Canada, Suriname, Sweden and
    the Wikipedia leads. Each folder keeps the host's robots.txt.
- The repo's `scripts/turntable-walk.mjs` sends `User-Agent: Mozilla/5.0 (archive
  read; burnaboystats sweep)` — changed to an honest
  one, `burnaboystats-turntable-walk/1.0 (+https://burnaboystats.com/contact)`, on
  25 Sep 2026. This pass ran a copy with an honest User-Agent and a
  fetch-only switch (byte-identical to the Ruger verifier's copy) and got the same
  509 issues.
- **robots.txt, for a ruling:** officialcharts.com and snepmusique.com disallow
  ClaudeBot (and OCC also anthropic-ai) but do not name Claude-User, and their `*`
  groups allow `/search/`, `/artist/` and the weekly lists. Both were read as
  user-requested fetches, as every earlier board sweep has done. top40.nl was not
  read, although it too names only Claude-Web, ClaudeBot and anthropic-ai; this
  matches the Oxlade verifier.
- Email-like strings in saved pages were redacted: the Sverigetopplistan footer and
  a Sentry key in the Canada pages. No email address was used in any request.
- Nothing in any repo or worktree was edited.
