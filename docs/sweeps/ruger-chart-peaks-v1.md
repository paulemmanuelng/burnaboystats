# Ruger — official chart peaks

**Standard:** one entry per **country** per **release**, on that country's
**principal national singles or albums chart**. *peak* = the highest position the
release has ever reached. Lead, co-billed and featured credits all count.

**Excluded throughout:** platform charts (Spotify, Apple Music, iTunes, Deezer,
Shazam, YouTube, Audiomack, Boomplay); **genre and component charts** (UK
Afrobeats Chart, UK Video Streaming Chart, Billboard U.S. Afrobeats Songs, World
Digital Song Sales, World Albums, Singles Sales, Downloads, Independent); extension
charts below a main chart (Hot 40, Tipparade, Ultratip); year-end, mid-week and
recurrent charts.

**By hand, never read by an agent (owner rulings, 24–25 Sep 2026):** TOSAC
(South Africa's chart), RiSA, FIMI, the BPI, ARIA's accreditation Dropbox, AFP's
uploads, dutchcharts.nl, top40.nl and billboard.com — archived copies included.
A row whose only evidence came from one of them is not published here; it waits
on Paul's weekly hand check instead. Readings of those sources made before the
ruling are not relied on, as rows or as zeros.

Michael Adebayo Olayinka, Nigeria (Jonzing World until 2024, then Blown Boy Entertainment — Wikipedia, a lead). **Name traps,
all checked and excluded:** the firearms brand (no chart row anywhere carries it);
**Ruger Hauer**, a Finnish act (four albums in the Hung Medien database); **Markus Rüger**, a schlager singer (Hung Medien
"ruger" search); **Rema's "Bounce"** and **Bella Shmurda & Seyi Vibez's "Bounce"**,
different records charting on TurnTable under their own credits. TurnTable misprinted
him once as **"Rugger"** (three issues of *Bounce*, folded below); no other body
prints a variant spelling.

## Total: 39 singles + 6 albums = 45 chart entries

**2 No. 1s**, both in Nigeria (*Asiwaju*, *POE*). **2 territories** (🇳🇬 Nigeria,
🇸🇷 Suriname).

Distribution: 🇳🇬 43 (37 singles + 6 albums) + 🇸🇷 2 = **45** ✓. No country
appears twice for the same title.

**Swept 24 Sep 2026** (find pass), and **every row re-read at its chart body by a
separate verifier the same day**: 45 rows STAND, 0 are REFUTED, 0 are UNVERIFIED.
One further TurnTable placing is **held, not a row** (*Cry Baby (Ruger Remix)*,
Ruger named only in the title — below). The Nigerian archive was walked a second
time, end to end, and reproduces every row.

| release | chart peaks by country | |
|---|---|---|
| Asiwaju | 🇳🇬 #1 · 🇸🇷 #26 | **2** |
| Lately (Maleek Berry ft. Ruger) | 🇳🇬 #15 · 🇸🇷 #23 | **2** |
| 35 other singles | 🇳🇬 only (table below) | **35** |
| 6 albums | 🇳🇬 only (table below) | **6** |

**39 + 6 = 45.**

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
base64 `payload` envelope, by a copy of `scripts/turntable-walk.mjs` (from
`origin/main`) run in the verifier's own folder with an honest User-Agent
(`burnaboystats-chart-verify/1.0 (Claude-User; …)`). turntablecharts.com has no
robots.txt (404). Every response is validated against the `weekNumber` and
`dateCreated` year requested — an unpublished week serves the category's
*earliest* issue, and that fallback seen twice is recorded as "no issue". 560
requests, 18 rate-limited and waited out, 33 fallback mismatches, **0 failed
issues**. The only non-7-day gaps are the New Year's Eve special (2024-12-26 →
12-31 → 2025-01-09) and, for albums, 2022-11-02 → 11-10 (8 days). The albums
issue for 17 Sep 2026 and both issues for 24 Sep 2026 were not yet published when
read.

Matching is on the **artist** line, word-anchored: `/\brugg?er\b/i`. A loose pass
over title AND artist (`/rug+er|jonzing/i`) found one other line only: *Cry Baby
(Ruger Remix)* — Clean Bandit, Anne-Marie & David Guetta (held, below). Every
"Ruger" on an artiste line is the Nigerian artist.

Peak = the best rank in ANY issue (`highestPosition` resets at the 7 Jul 2022
relaunch and on every re-entry, and on *Dior*'s peak issue it still printed the
previous best, 13, beside rank 10 — so it is quoted only as evidence). Weeks =
issues the recording appears in **under a credit naming Ruger**; weeks at peak =
issues at that rank. Both are counted from the body's own weekly issues, and
neither goes on the board: TurnTable publishes no continuous weeks counter (it
resets) and no weeks-at-peak figure, and no Nigerian row on the board or in
`charts.ts` carries them.

**Re-read result: 43 of 43 Nigerian rows reproduce exactly** — peak, peak issue,
chart name on the peak issue, credit, weeks and weeks at peak. The whole archive
was re-read rather than sampled, so every top-10 peak (9 singles, 3 albums) and
all 31 other rows were checked; no spot-check failed. The same analysis run over
the find pass's own cache gives an identical result, row for row.

**The two No. 1s, attacked directly.** Every row in all 509 issues whose title is
*Asiwaju* or *POE* was listed, under any credit: there is exactly one chart entry
for each, always credited as below, never a remix or a second version.

- ***Asiwaju* — "Ruger"**: #1 on seven consecutive issues, 15 Dec 2022 → 26 Jan
  2023 (ids 1587, 1591, 1601, 1610, 1631, 1643, 1746); the category was renamed
  from "TurnTable Nigeria Top 100" to "Official Nigeria Top 100" mid-run (12 Jan
  2023). Chain: 70 → 7 → 5 → 3 → **1 ×7** → 2 … 69 (29 Jun 2023), `weeksOnChart`
  1 → 33 unbroken.
- ***POE* — "Ruger & Bnxn"**: #1 once, 2 May 2024 (id 3200: rank 1, lastPosition
  2, weeksOnChart 4). Chain 100 → 4 → 2 → **1** → 3 … 50 (26 Sep 2024), 25 issues,
  `weeksOnChart` 1 → 25 unbroken. BNXN's board already carries POE NG #1.

### Every Nigerian peak, with the issue that set it

| # | title | list | NG peak | set on issue | chart name on that issue | weeks | wks at peak | run | printed on the chart | verified |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Asiwaju | singles | **1** | 1587 · 2022-12-15 (wk 50/2022) | TurnTable Nigeria Top 100 | 33 | 7 | 2022-11-17 (#70) → 2023-06-29 (#69) | Asiwaju — Ruger ×33 | ✓ |
| 2 | POE | singles | **1** | 3200 · 2024-05-02 (wk 18/2024) | Official Nigeria Top 100 | 25 | 1 | 2024-04-11 (#100) → 2024-09-26 (#50) | POE — Ruger & Bnxn ×25 | ✓ |
| 3 | Toma Toma | singles | **2** | 3884 · 2024-12-05 (wk 49/2024) | Official Nigeria Top 100 | 23 | 1 | 2024-11-14 (#76) → 2025-04-24 (#99) | Toma Toma — Ruger & Tiwa Savage ×23 | ✓ |
| 4 | Bounce | singles | **4** | 577 · 2021-07-08 (wk 27/2021) | TurnTable Top 50 | 30 | 2 | 2021-05-13 (#39) → 2022-01-06 (#48) | Bounce — Ruger ×27; Bounce — Rugger ×3 | ✓ |
| 5 | Romeo Must Die (RMD) | singles | **4** | 3059 · 2024-03-07 (wk 10/2024) | Official Nigeria Top 100 | 22 | 3 | 2024-03-07 (#4) → 2024-08-01 (#98) | Romeo Must Die (RMD) — Ruger & Bnxn ×22 | ✓ |
| 6 | Girlfriend | singles | **5** | 1345 · 2022-09-08 (wk 36/2022) | TurnTable Nigeria Top 100 | 39 | 1 | 2022-06-23 (#27) → 2023-03-16 (#41) | Girlfriend — Ruger ×39 | ✓ |
| 7 | Jay Jay | singles | **7** | 4012 · 2025-02-20 (wk 8/2025) | Official Nigeria Top 100 | 18 | 1 | 2025-02-20 (#7) → 2025-06-19 (#96) | Jay Jay — Ruger ×18 | ✓ |
| 8 | Ilashe | singles | **9** | 3211 · 2024-05-09 (wk 19/2024) | Official Nigeria Top 100 | 18 | 1 | 2024-04-25 (#20) → 2024-09-19 (#93) | Ilashe — Ruger & Bnxn ×18 | ✓ |
| 9 | Dior | singles | **10** | 925 · 2022-01-13 (wk 2/2022) | TurnTable Top 50 | 26 | 3 | 2021-12-02 (#32) → 2022-07-07 (#73) | Dior — Ruger ×26 | ✓ |
| 10 | Tour | singles | **11** | 2517 · 2023-09-28 (wk 39/2023) | Official Nigeria Top 100 | 14 | 1 | 2023-09-07 (#29) → 2023-12-07 (#90) | Tour — Ruger ×14 | ✓ |
| 11 | Giveaway | singles | **11** | 4403 · 2025-05-08 (wk 19/2025) | Official Nigeria Top 100 | 14 | 1 | 2025-04-03 (#15) → 2025-07-03 (#78) | Giveaway — Ruger & Zlatan ×14 | ✓ |
| 12 | Muhammad Ali (Can't Relate) | singles | **14** | 5047 · 2025-11-27 (wk 48/2025) | Official Nigeria Top 100 | 12 | 2 | 2025-11-20 (#21) → 2026-03-26 (#88) | Muhammad Ali (Can't Relate) — Ruger ×12 | ✓ |
| 13 | Lately | singles | **15** | 3545 · 2024-09-19 (wk 38/2024) | Official Nigeria Top 100 | 7 | 2 | 2024-09-12 (#59) → 2024-10-24 (#96) | Lately — Maleek Berry ft. Ruger ×7 | ✓ |
| 14 | Goddess | singles | **15** | 3516 · 2024-09-12 (wk 37/2024) | Official Nigeria Top 100 | 6 | 1 | 2024-09-05 (#88) → 2024-10-10 (#46) | Goddess — Bayanni & Ruger ×6 | ✓ |
| 15 | Dudu | singles | **16** | 4226 · 2025-04-03 (wk 14/2025) | Official Nigeria Top 100 | 5 | 1 | 2025-04-03 (#16) → 2025-05-01 (#78) | Dudu — Ruger & Kranium ×5 | ✓ |
| 16 | Bienvenue | singles | **18** | 1797 · 2023-02-09 (wk 6/2023) | Official Nigeria Top 100 | 15 | 1 | 2023-02-02 (#81) → 2023-05-11 (#87) | Bienvenue — DJ Neptune & Ruger ×15 | ✓ |
| 17 | Make Way | singles | **19** | 3394 · 2024-06-27 (wk 26/2024) | Official Nigeria Top 100 | 12 | 1 | 2024-06-13 (#22) → 2025-10-30 (#81) | Make Way — Ruger ×12 | ✓ |
| 18 | Red Flags | singles | **21** | 1544 · 2022-11-24 (wk 47/2022) | TurnTable Nigeria Top 100 | 16 | 1 | 2022-11-17 (#89) → 2023-03-02 (#98) | Red Flags — Ruger ×16 | ✓ |
| 19 | Do Nothing | singles | **22** | 5848 · 2026-08-20 (wk 34/2026) | Official Nigeria Top 100 | 6 | 1 | 2026-08-13 (#27) → 2026-09-17 (#29) — still on the latest issue | Do Nothing — Ruger, Musa Keys & Young Stunna ×6 | ✓ |
| 20 | Snapchat | singles | **23** | 970 · 2022-02-17 (wk 7/2022) | TurnTable Top 50 | 14 | 1 | 2022-01-13 (#49) → 2022-07-14 (#99) | Snapchat — Ruger ×14 | ✓ |
| 21 | Luv Again | singles | **25** | 3367 · 2024-06-13 (wk 24/2024) | Official Nigeria Top 100 | 6 | 1 | 2024-06-13 (#25) → 2024-07-25 (#99) | Luv Again — Ruger ×6 | ✓ |
| 22 | WeWe | singles | **26** | 1249 · 2022-07-07 (wk 27/2022) | TurnTable Nigeria Top 100 | 16 | 1 | 2022-06-30 (#43) → 2023-01-26 (#99) | WeWe — Ruger ×16 | ✓ |
| 23 | One Shirt | singles | **27** | 306 · 2021-02-04 (wk 5/2021) | TurnTable Top 50 | 3 | 1 | 2021-02-04 (#27) → 2021-02-18 (#45) | One Shirt — ruger, Rema & D Prince ×1; One Shirt — Jonzing World ft. ruger, Rema & D Prince ×2 | ✓ |
| 24 | Jonzing Boy | singles | **28** | 2078 · 2023-05-18 (wk 20/2023) | Official Nigeria Top 100 | 5 | 1 | 2023-05-18 (#28) → 2023-06-15 (#82) | Jonzing Boy — Ruger ×5 | ✓ |
| 25 | GBESUNMO | singles | **34** | 5671 · 2026-07-02 (wk 27/2026) | Official Nigeria Top 100 | 3 | 1 | 2026-07-02 (#34) → 2026-07-16 (#85) | GBESUNMO — Wande Coal, Ruger & BNXN ×3 | ✓ |
| 26 | All Of Us | singles | **38** | 2803 · 2023-12-14 (wk 50/2023) | Official Nigeria Top 100 | 11 | 1 | 2023-12-14 (#38) → 2024-02-29 (#91) | All Of Us — Kukbeatz & Ruger ×11 | ✓ |
| 27 | Kristy | singles | **38** | 2329 · 2023-08-17 (wk 33/2023) | Official Nigeria Top 100 | 7 | 1 | 2023-08-03 (#52) → 2023-09-14 (#96) | Kristy — Ruger ×7 | ✓ |
| 28 | Bae Bae | singles | **40** | 3200 · 2024-05-02 (wk 18/2024) | Official Nigeria Top 100 | 16 | 1 | 2024-04-25 (#48) → 2024-08-08 (#80) | Bae Bae — Ruger & Bnxn ×16 | ✓ |
| 29 | All Die | singles | **42** | 5771 · 2026-08-13 (wk 33/2026) | Official Nigeria Top 100 | 6 | 1 | 2026-08-13 (#42) → 2026-09-17 (#82) — still on the latest issue | All Die — Ruger ×6 | ✓ |
| 30 | Private Chef | singles | **52** | 5848 · 2026-08-20 (wk 34/2026) | Official Nigeria Top 100 | 6 | 1 | 2026-08-13 (#54) → 2026-09-17 (#76) — still on the latest issue | Private Chef — Ruger & MC Morena ×6 | ✓ |
| 31 | Toro (A Colors Show) | singles | **60** | 4124 · 2025-03-20 (wk 12/2025) | Official Nigeria Top 100 | 3 | 1 | 2025-03-20 (#60) → 2025-04-03 (#91) | Toro (A Colors Show) — Ruger ×3 | ✓ |
| 32 | Body Tuff | singles | **69** | 5352 · 2026-03-19 (wk 12/2026) | Official Nigeria Top 100 | 7 | 1 | 2026-03-19 (#69) → 2026-04-30 (#92) | Body Tuff — Tml Vibez & Ruger ×7 | ✓ |
| 33 | Till We Die | singles | **73** | 2670 · 2023-11-09 (wk 45/2023) | Official Nigeria Top 100 | 4 | 1 | 2023-11-02 (#89) → 2023-11-30 (#85) | Till We Die — Sarkodie ft. Ruger ×4 | ✓ |
| 34 | Calculate Love | singles | **74** | 3198 · 2024-04-25 (wk 17/2024) | Official Nigeria Top 100 | 2 | 1 | 2024-04-25 (#74) → 2024-05-02 (#82) | Calculate Love — Ruger & Bnxn ×2 | ✓ |
| 35 | Party Monster | singles | **86** | 3198 · 2024-04-25 (wk 17/2024) | Official Nigeria Top 100 | 2 | 1 | 2024-04-25 (#86) → 2024-05-02 (#98) | Party Monster — Ruger & Bnxn ×2 | ✓ |
| 36 | Not Done | singles | **90** | 3198 · 2024-04-25 (wk 17/2024) | Official Nigeria Top 100 | 1 | 1 | 2024-04-25 (#90) → 2024-04-25 (#90) | Not Done — Ruger & Bnxn ×1 | ✓ |
| 37 | I Want Peace | singles | **91** | 2515 · 2023-09-14 (wk 37/2023) | Official Nigeria Top 100 | 1 | 1 | 2023-09-14 (#91) → 2023-09-14 (#91) | I Want Peace — Ruger ×1 | ✓ |
| 38 | RnB | albums | **2** | 3327 · 2024-05-16 (wk 20/2024) | Official Top 100 Albums | 126 | 3 | 2024-04-18 (#9) → 2026-09-10 (#73) — still on the latest issue | RnB — Ruger & Bnxn ×126 | ✓ |
| 39 | Blownboy RU | albums | **3** | 4248 · 2025-04-03 (wk 14/2025) | Official Top 100 Albums | 25 | 1 | 2025-04-03 (#3) → 2025-09-18 (#95) | Blownboy RU — Ruger ×25 | ✓ |
| 40 | RU The World | albums | **9** | 2463 · 2023-09-07 (wk 36/2023) | Official Top 50 Albums | 141 | 1 | 2023-09-07 (#9) → 2026-09-10 (#85) — still on the latest issue | RU The World — Ruger ×141 | ✓ |
| 41 | The Second Wave (Deluxe) | albums | **13** | 1480 · 2022-11-02 (wk 44/2022) | Nigeria Top 50 Albums | 133 | 4 | 2022-11-02 (#13) → 2026-09-10 (#62) — still on the latest issue | The Second Wave (Deluxe) — Ruger ×133 | ✓ |
| 42 | PANDEMIC - EP | albums | **36** | 1545 · 2022-11-24 (wk 47/2022) | Nigeria Top 50 Albums | 33 | 1 | 2022-11-02 (#40) → 2025-07-24 (#94) | PANDEMIC - EP — Ruger ×33 | ✓ |
| 43 | R.U. (Raw & Unfiltered), Vol. 1 - Ep | albums | **61** | 5775 · 2026-08-13 (wk 33/2026) | Official Top 100 Albums | 1 | 1 | 2026-08-13 (#61) → 2026-08-13 (#61) | R.U. (Raw & Unfiltered), Vol. 1 - Ep — Ruger ×1 | ✓ |

### Printings folded into one entry (each checked on the lastPosition / weeksOnChart chain)

- **Bounce — "Rugger".** TurnTable printed the credit "Rugger" on three issues:
  27 May 2021 (#15, `lastPosition 32`, `weeksOnChart 3`), 3 Jun (#8, LP 15, WOC 4)
  and 10 Jun (#14, LP 8, WOC 5). The run before reads "Bounce — Ruger" #39 (WOC 1)
  and #32 (WOC 2); the run after reads "Bounce — Ruger" #5 on 17 Jun (LP 14, WOC 6).
  One chain. Rema's own "Bounce" is a separate row in every one of those issues
  (#25, #28, #41, with its own LP/WOC). The fold changes only the weeks (27 → 30,
  matching TurnTable's own WOC 30 on the last issue); the peak, **4** (8 Jul and
  22 Jul 2021), is on "Ruger" printings.
- **One Shirt.** A Jonzing World posse cut: "One Shirt — ruger, Rema & D Prince"
  at #27 on its debut (4 Feb 2021), then "Jonzing World ft. ruger, Rema & D Prince"
  at #42 (LP 27) and #45 (LP 42). Ruger is named on every printing; peak **27**,
  3 issues. (`weeksOnChart` was not yet populated in the chart's first months.)
- **Make Way** is one entry with a re-entry: 9 issues from 13 Jun 2024 (peak #19,
  27 Jun), then 16 Oct 2025 at #64 with `lastPosition -1`, `highestPosition 19`,
  `weeksOnChart 10`, and two more weeks — the counter continues, so it is the same
  entry. Peak 19, 12 issues.
- Every other recording is printed one way on every issue it appears in.

### Notes carried into the entry

- **Open runs, published with the board's open-run note:** *Do Nothing* (Ruger,
  Musa Keys & Young Stunna — #22 on 20 Aug 2026, #29 on the latest issue, 17 Sep),
  *All Die* (#42 on its 13 Aug debut, #82 on 17 Sep) and *Private Chef* (Ruger &
  MC Morena — #52 on 20 Aug, #76 on 17 Sep). Re-read at the next sweep.
- **Long album runs still on the chart, no note:** *RnB* (#73 on 10 Sep 2026, 126
  issues; peak 2, set May 2024), *RU The World* (#85, 141 issues; peak 9, Sep 2023)
  and *The Second Wave (Deluxe)* (#62, 133 issues). Only their week counts are still
  moving; BNXN's board carries the same *RnB* NG 2 without a note.
- **Albums that predate the albums chart:** *The Second Wave (Deluxe)* was #13 on
  the chart's very first issue (2 Nov 2022) and *PANDEMIC - EP* was on it at #40
  (its #36 came on 24 Nov 2022). Their peaks are the best ranks since the chart
  began, not since release, and the entry says so. There is no earlier Nigerian
  albums chart to read.
- **Pre-archive, a gap and not a zero:** the singles chart begins 5 Nov 2020.
  *One Shirt* (Feb 2021) is his earliest charting credit; the single "Ruger" (Feb
  2021, per its Hung Medien item) and the *PANDEMIC* tracks other than those above
  never appear. Nothing of his is on the first issue.
- **House title:** "R.U. (Raw & Unfiltered), Vol. 1 - Ep" is TurnTable's printing;
  the entry writes "- EP", as the board does for *TZA - EP* and *The Game Needs Us -
  EP*. Every other title is exactly as printed on its peak issue.

### Held — *Cry Baby (Ruger Remix)*, NG #54 (not a row; ruling needed)

TurnTable, 3 Oct 2024 (issue 3651): "54 · Cry Baby (Ruger Remix) — Clean Bandit,
Anne-Marie & David Guetta · lastPosition -1 · highestPosition 54 · weeksOnChart 2".
It is the same TurnTable entry as the original "Cry Baby" (#99, 22 Aug 2024, WOC 1),
re-entering as the Ruger Remix; 6 issues to 31 Oct 2024 (54, 60, 57, 66, 72).
Ruger appears only in the **title**; the artiste line never names him, and OCC's
credit for the song is "CLEAN BANDIT/ANNE-MARIE/GUETTA". Under the standard (a
featured credit counts when the chart prints it *as a credit*) it is not counted.
**Paul's call** whether a remixer named in the title counts. It is not in the entry.

### Shared records — the other boards already agree

BNXN's board carries every Ruger & BNXN record at the same peak: *POE* NG 1,
*Romeo Must Die (RMD)* NG 4, *Ilashe* NG 9, *Bae Bae* NG 40, *Calculate Love* NG 74,
*Party Monster* NG 86, *Not Done* NG 90, *GBESUNMO* NG 34 and the album *RnB* NG 2 —
the entry uses BNXN's exact titles so the title-keyed test lines them up. The find
pass gives *Toma Toma* NG 2 on Tiwa Savage's rows and *Till We Die* NG 73 on
Sarkodie's, both identical to Ruger's.

**Title collisions for APPLY (different records, same title):** *Bounce* (Bella
Shmurda & Seyi Vibez's record, NG 9 on Seyi Vibez's board) and *Lately* (Davido's
own record, NG 40 on his board). TurnTable's artiste lines separate them: "Bounce —
Ruger" vs "Bounce — Bella Shmurda & Seyi Vibez"; "Lately — Maleek Berry ft. Ruger"
vs "Lately — Davido". The title-keyed "one answer per chart" test in
`tests/afrobeats.test.ts` will flag "Bounce|NG" and "Lately|NG"; they belong in its
`known` set with this reason (as with "Pressure", "Away", "Special"), or the rows can
be titled "Lately (Maleek Berry ft. Ruger)" on the pattern of BNXN's "Mood (Wizkid ft.
BNXN)". Not settled here.

## Outside Nigeria — two entries, each read at the body

| release | country · chart | peak | weeks at peak / weeks | mark | verbatim, as the body prints it |
|---|---|---|---|---|---|
| Asiwaju (Ruger) | 🇸🇷 Nationale Top 40 Suriname | **26** | — (not published) | ✓ | "Top 40 – 13 april tot 20 april 2023": "26. Asiwaju - Ruger (vorige week 29)". All 7 lists that carry it: 32 (NIEUW, 30 Mar–6 Apr 2023), 29, **26**, 27, 33, 38, 40 (11–18 May 2023). |
| Lately (Maleek Berry ft. Ruger) | 🇸🇷 Nationale Top 40 Suriname | **23** | — (not published) | ✓ | "Top 40 – 28 november tot 05 december 2024": "23. Lately 0 Maleek Berry ft Ruger (vorige week 34)"; "Top40 – 5 tot en met 12 december 2024": "23. Lately 0 Maleek Berry ft Ruger (vorige week 23)". Then 31, 33, 35 (26 Dec 2024–2 Jan 2025). |

Source: `nationaletop40.sr` — the two peak posts saved from the live site, and all
131 lists (1 Dec 2022 → 18 Sep 2026) through the site's own
`/wp-json/wp/v2/posts` (robots.txt disallows only `/wp-admin/`). Weeks are omitted
because Suriname prints no weeks column. The "0" in "Lately 0 Maleek Berry" is the
page's own typo for the dash; the next three lists print "Lately - Maleek Berry ft
Ruger". *Lately* is a featured credit — Maleek Berry leads — and is not Davido's
*Lately*. Two unread weeks are noted, neither able to beat the peak on the run's
shape: no lists were posted 18 May–27 Jul 2023 (Asiwaju was falling, 38 → 40), and
Lately's "vorige week 34" points at a list that was never posted (the 14–21 Nov 2024
post has no Lately row). No other Ruger record is on any of the 131 lists.

**Better-looking numbers rejected, all genre or component charts** (OCC's own
artist pages, 24 Sep 2026): UK **Afrobeats Chart** — Asiwaju **2**, Romeo Must Die
(RMD) 2, Solar (Darkoo & Ruger) 4, POE 5, Toma Toma 7, Ilashe 7, Dior 8, Girlfriend
9, Tour 11, Red Flags 12, Dudu 12, Jay Jay 13, Muhammad Ali (Can't Relate) 14,
Bae Bae 15, GBESUNMO 16, Snapchat 19, WeWe 19, Jonzing Boy 19, Bienvenue 20; UK
**Video Streaming Chart** — Asiwaju 94. None of his seven OCC credits has an Official
Singles Chart Top 100 entry.

## Misses — his biggest records, checked chart by chart

*Asiwaju*, *POE*, *Toma Toma*, *Bounce*, *Romeo Must Die (RMD)*, *Girlfriend*,
*Jay Jay*, *Ilashe*, *Dior* and *Tour*/*Giveaway*, plus the albums *RnB* and
*Blownboy RU*, were checked on every official chart this pass could read. **No missed
peak was found.** Every read below was made by the verifier with an honest
User-Agent:

| chart | what was read | result |
|---|---|---|
| 🇬🇧 UK Official Singles Chart Top 100 (OCC) | OCC's own search `/search/ruger/` (7 artist credits, 0 songs) and all seven credits read in full: Ruger; Ruger & Kranium; Ruger & BNXN; Darkoo & Ruger; DJ Neptune & Ruger; Ruger/Tiwa Savage; Wande Coal/Ruger/BNXN. Also searched: rugger, maleek berry, sarkodie, bayanni, kukbeatz, jonzing, tml vibez, clean bandit | **zero** — only the component and genre charts above. OCC has no "Maleek Berry ft Ruger" credit (its three Maleek Berry credits are his own, Not3s's and Yxng Bane's) and no "Sarkodie ft Ruger" (its only Sarkodie credit is "Oxlade ft Sarkodie"); Cry Baby is "Clean Bandit/Anne-Marie/Guetta" |
| 🇮🇪 Official Irish Singles Chart (IRMA) | all nine song sitemaps, 17,728 charting songs, regex on ruger/rugger and his titles and collaborators | **zero** (only hit: Wiley's "My One" with Kranium — not Ruger). Control: 15 Burna Boy songs |
| 🇫🇷 SNEP Top Singles (Top 200) | 136 weekly lists — 2021 W27–52, 2022 W1–52, 2023 W1–20 (Bounce, Dior, Girlfriend, Asiwaju), 2024 W8–26 (RMD, POE, Ilashe), 2024 W44–2025 W10 (Toma Toma, Jay Jay); every list 200 rows, each checked against its own previous/next-week links | **zero**. Control: Burna Boy on 42 of the lists |
| Hung Medien network (swisscharts.com, the Swiss hitparade's own site, and the song database behind the AT/BE/DE/DK/ES/FR/IT/NL/NO/PT/SE mirrors) | song search "ruger" and album search "ruger"; the six items credited to him read in full: Ruger – Girlfriend, Red Flags, Ruger (2021 single); Maleek Berry feat. Ruger – Lately; Sarkodie feat. Ruger – Till We Die; Patoranking, Ruger – Shake That; album The Second Wave [EP] | none of the seven items has a chart run or a "Weltweit" (global chart) block; *Asiwaju*, *Dior*, *Bounce*, *POE*, *RMD*, *Toma Toma* and *RnB* are **not in the database at all**. Control: Rema's *Calm Down* shows CH, DE, AT, FR, NL, BE, SE, NO, DK, IT, ES, PT. Switzerland is a proven zero; the other countries are leads, not body reads |
| 🇦🇺 ARIA Top 50 Singles | 33 weekly issues, 2022-11-21 → 2023-03-27 (Asiwaju) and 2024-03-04 → 2024-06-03 (RMD, POE), 50 rows each | **zero** |
| 🇳🇿 Official Top 40 (Aotearoa Music Charts) | the body's own search API: "Ruger", "Rugger", "Asiwaju" | **zero** results. Control: "Burna Boy" returns 20 |
| 🇨🇦 Canadian Hot 100 (ca.billboard.com) | spot check: 2024-03-16, 04-27, 05-11, 12-07 (RMD, POE, Toma Toma), 100 rows each | **zero** (the find pass read 124 issues, Sep 2023 → Feb 2026: zero) |
| 🇦🇪 🇸🇦 🇪🇬 Official MENA charts (Top 20) | spot check: 9 weeks (2024 W10–20 and W47–51) × three countries = 27 lists | **zero** |
| 🇿🇦 TOSAC | — | by hand (owner ruling, 25 Sep 2026) — not relied on, as a row or as a zero |
| 🇸🇷 Nationale Top 40 Suriname | all 131 lists, 1 Dec 2022 → 18 Sep 2026 | only *Asiwaju* and *Lately* (above) |

## What could NOT be read — gaps, not absences

- **Billboard** — Hot 100, Billboard 200, Global 200, Global 200 Excl. U.S., and the
  Canadian Hot 100 before 2 Sep 2023. billboard.com's robots.txt disallows
  ClaudeBot/anthropic-ai/Claude-Web and it redirects to a TollBit paywall; not
  bypassed, not read through Wayback. **No lead found:** Ruger's English Wikipedia
  article and the *RnB* EP article carry no chart columns at all. *Asiwaju* (late
  2022) is the record to check by hand on the Global 200 / Excl. U.S.
- **South Africa — the one live lead.** *Do Nothing* is credited to Ruger with two
  South African acts, **Musa Keys and Young Stunna**, and was released in August
  2026. TOSAC's 2026 W32 issue (captured 14 Aug 2026) has no row for it; **W33
  onward is not archived** (the only later capture, W36, is an HTTP 421 error), and
  the live site serves AI-bot filler to an honest client. **Paul to check TOSAC's
  Streaming Top 20 for Aug–Sep 2026 by hand** — TOSAC is by hand under the owner's
  ruling of 25 Sep 2026, archives included. Also dark: *Asiwaju*'s run, which
  falls in TOSAC's unarchived 2022 W47 – 2023 W13 window and then below the Top 10
  that TOSAC alone published from about 2023 W14 through 2024 (the depth that also
  hides *RMD*, *POE* and *Toma Toma*).
- **Suriname** — no lists before 1 Dec 2022 (Bounce, Dior, Girlfriend invisible).
  Unpublished windows include 15 Feb – 3 Oct 2024 (Romeo Must Die, POE, Ilashe, the
  *RnB* singles) and 2 Jan – 6 Mar 2025 (Toma Toma's second half, Jay Jay).
- **Netherlands** (dutchcharts.nl `Disallow: /`, top40.nl disallows Claude agents),
  **Germany**, **Norway**, **Belgium** (robots.txt or a Cloudflare challenge; not
  bypassed), **Hungary** (robots disallows ClaudeBot), **Italy (FIMI)** and **RiSA**
  (manual by owner ruling), **Poland before 2023**, **Lithuania before 2022-W10**,
  **Iceland, India, Israel, Lebanon, Greece, Latvia, Singapore, Malaysia**, the Latin
  American bodies and every Billboard-compiled national chart — unread, not zero.
  For NL/DE/NO/BE/DK/AT/ES/PT/SE/IT the Hung Medien lead above (no chart line on any
  Ruger item) is the only evidence.
- **SNEP outside the windows above** (2021 W1–26, 2023 W21–2024 W7, 2024 W27–43,
  2025 W11 on) — lead only: no Hung Medien FR line.
- **Australia positions 51–100** (ARIA publishes a Top 50) and **ARIA before 1 Jul
  2019**.
- **TurnTable albums, 17 Sep 2026** — not yet published when read; the open album
  runs are through 10 Sep.

## Proven zeros

Read by this verifier, honest User-Agent: UK Official Singles Chart (all seven OCC
credits); Ireland (IRMA, 2014–2026); Switzerland (hitparade.ch's own database: no
item of his has a Swiss run); New Zealand Top 40 (the body's own search API);
France (SNEP, the 136 weekly lists above); ARIA Top 50 (the 33 issues above);
Suriname (every list).

Resting on the find pass (24 Sep 2026): ARIA Top 50 singles and albums, all 377
issues 2019-07-01 → 2026-09-21; Canada 2 Sep 2023 → 28 Feb 2026 (ca.billboard.com,
honest User-Agent); Czech Republic, Slovakia,
Poland (2023–2026), Lithuania (2022–2026), the full UAE/Saudi/Egypt run, and the
Austrian, Danish, Swedish, Finnish, Hungarian and Spanish artist searches. The
MENA and Czech/Slovak/Polish/Lithuanian walks were made with a spoofed desktop-
browser User-Agent (the Kizz Daniel verifier's note), so they are leads until
re-read honestly; this verifier re-read only the MENA spot check above. None of
them could add a row that would stand without being re-read.

## Verifier notes (24 Sep 2026)

- Evidence: `~/burnaboy-work/board7/verify-charts/ruger/` —
  `tt/issues/{1,2}/` (the verifier's own 509-issue cache), `verify-walk-analysis.json`
  (every Ruger appearance), `findpass-cache-analysis.json` (the same analysis over
  the find pass's cache: identical), `row-verdicts.json` (every row with its verbatim
  peak-issue line, source URL and checks), and `bodies/` (Suriname, OCC, IRMA, SNEP,
  Hung Medien, ARIA, NZ, Canada, MENA, TOSAC and Wikipedia-lead reads, each with the
  host's robots.txt).
- The repo's `scripts/turntable-walk.mjs` sends `User-Agent: Mozilla/5.0 (archive
  read; burnaboystats sweep)` — changed to an honest
  one, `burnaboystats-turntable-walk/1.0 (+https://burnaboystats.com/contact)`, on
  25 Sep 2026. This pass ran a copy with an honest User-Agent
  instead (plus a fetch-only switch) and got the same 509 issues.
- **robots.txt, for a ruling:** officialcharts.com and snepmusique.com disallow
  ClaudeBot (and OCC also anthropic-ai) but do not name Claude-User, and their `*`
  groups allow `/search/`, `/artist/` and the weekly lists; both were read as
  user-requested fetches, as every earlier board sweep has. hitparade.ch now serves a
  Cloudflare challenge (not bypassed); swisscharts.com (same database, crawl-delay
  10 s, respected) was used. TOSAC was read only through raw Wayback captures;
  since the 25 Sep 2026 ruling those reads are not relied on, and nothing in this
  document rests on them.
- One saved Canada page carried an email-like Sentry key string in its scripts; it
  was redacted in all four saved copies.
