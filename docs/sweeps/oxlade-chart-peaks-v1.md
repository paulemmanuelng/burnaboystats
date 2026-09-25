# Oxlade — official chart peaks

**Standard:** one entry per **country** per **release**, on that country's
**principal national singles or albums chart**. *peak* = the highest position the
release has ever reached. Lead, co-billed and featured credits all count.

**Excluded throughout:** platform charts (Spotify, Apple Music, iTunes, Deezer,
Shazam, YouTube, Audiomack, Boomplay); **genre and component charts** (UK
Afrobeats Chart, UK Hip Hop & R&B Singles, UK Streaming, UK Video Streaming, UK
Singles Sales and Downloads, the midweek Official Singles Chart Update, Billboard
U.S. Afrobeats Songs, Billboard Rhythmic Airplay); extension charts below a main
chart (NZ Hot 40 Singles, Dutch Single Tip, Ultratip); year-end, mid-week and
recurrent charts.

**By hand, never read by an agent (owner rulings, 24–25 Sep 2026):** TOSAC
(South Africa's chart), RiSA, FIMI, the BPI, ARIA's accreditation Dropbox, AFP's
uploads, dutchcharts.nl, top40.nl and billboard.com — archived copies included.
A row whose only evidence came from one of them is not published here; it waits
on Paul's weekly hand check instead. Readings of those sources made before the
ruling are not relied on, as rows or as zeros.

The Nigerian singer credited as writer "Olaitan Ikuforiji" on the Hung Medien
*Ku Lo Sa* item. **Name traps, all checked and excluded:** the Oxlade *surname*
(English Wikipedia's "Oxlade" is a surname page — the footballer Alex
Oxlade-Chamberlain and others; no chart row carries any of them); **"Come
Kulosa"** (Billionboi, Shoday & Olamide, TurnTable NG 20, 2026), a different record
that a loose title search picks up; and **"Ku lo sa" (Oxlade x Camila Cabello)**,
the remix, which every body that carries it files under the *same* chart entry as
the COLORS original (below). Every other credit is printed "Oxlade" everywhere; no
body prints a variant spelling.

## Total: 33 singles + 1 album = 34 chart entries

**0 No. 1s.** **11 territories** (🇳🇬 Nigeria, 🇸🇷 Suriname,
🇳🇱 Netherlands, 🇨🇭 Switzerland, 🇫🇷 France, 🇬🇧 United Kingdom, 🇧🇪 Belgium,
🇸🇪 Sweden, 🇮🇪 Ireland, 🇵🇹 Portugal, 🇬🇷 Greece).

Distribution: 🇳🇬 23 (22 singles + 1 album) + 🇬🇧 2 + one each for SR, NL, CH,
FR, BE, SE, IE, PT, GR = **34** ✓. No country appears twice for the same title.

**Swept 24 Sep 2026** (find pass), and **every row re-read at its chart body by a
separate verifier on 24–25 Sep 2026**: 35 rows STAND, 0 are REFUTED, 0 are
UNVERIFIED. **34 are published:** the 35th, South Africa *Ku Lo Sa* #5, rested
only on archived TOSAC pages and is held for Paul's hand check under the
25 Sep 2026 ruling (below). The Nigerian archive was walked a second time, end to end, and
reproduces every row. **Three Billboard peaks for *Ku Lo Sa* are leads, not rows**
(Canada 59, Global 200 79, Luxembourg 12 — below): Billboard could not be read.

| release | chart peaks by country | |
|---|---|---|
| Ku Lo Sa - A COLORS SHOW | 🇸🇷 #2 · 🇳🇬 #9 · 🇳🇱 #13 · 🇨🇭 #14 · 🇫🇷 #18 · 🇬🇧 #24 · 🇧🇪 #32 · 🇸🇪 #35 · 🇮🇪 #50 · 🇵🇹 #60 · 🇬🇷 #83 | **11** |
| INTOXYCATED (Oxlade ft. Dave) | 🇳🇬 #24 · 🇬🇧 #49 | **2** |
| 20 other singles | 🇳🇬 only (table below) | **20** |
| OFA (Oxlade From Africa) | 🇳🇬 only (album) | **1** |

**11 + 2 + 20 + 1 = 34.**

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

with a turntablecharts.com `Referer`, decoding the base64 `payload` envelope, by a
copy of `scripts/turntable-walk.mjs` (from `origin/main`) run in the verifier's own
folder with an honest User-Agent (`burnaboystats-chart-verify/1.0 (Claude-User;
+https://burnaboystats.com/contact)`) and a fetch-only switch. turntablecharts.com
has no robots.txt (404). Every response is validated against the `weekNumber` and
`dateCreated` year requested — an unpublished week serves the category's
*earliest* issue, and that fallback seen twice is recorded as "no issue". 560
requests, 18 rate-limited and waited out, 33 fallback mismatches, **0 failed
issues**. The only non-7-day gaps are the New Year's Eve special (2024-12-26 →
12-31 → 2025-01-09) and, for albums, 2022-11-02 → 11-10 (8 days). The albums
issue for 17 Sep 2026 and both issues for 24 Sep 2026 were not yet published when
read.

Matching is on the **artist** line, word-anchored: `/\boxlade\b/i`. A loose pass
over title AND artist (`/ox+lade|oxlad|ku ?lo ?sa|ikuforiji/i`) found one other
line only: *Come Kulosa* — Billionboi, Shoday & Olamide (a different record). Every
"Oxlade" on an artiste line is the Nigerian artist.

Peak = the best rank in ANY issue (`highestPosition` resets at the 7 Jul 2022
relaunch and on every re-entry, so it is quoted only as evidence). Weeks = issues
the recording appears in **under a credit naming Oxlade**; weeks at peak = issues
at that rank. Both are counted from the body's own weekly issues, and neither goes
on the board: TurnTable publishes no continuous weeks counter and no weeks-at-peak
figure, and no Nigerian row on the board or in `charts.ts` carries them.

**Re-read result: 23 of 23 Nigerian rows reproduce exactly** — peak, peak issue,
chart name on the peak issue, credit, weeks and weeks at peak. The whole archive
was re-read rather than sampled, so both top-10 peaks and all 21 other rows were
checked; no spot-check failed.

**The top-10 peaks, attacked directly** (there is no No. 1):

- ***KOLO* — "Ice Prince ft. Oxlade"**: issue 431, 22 Apr 2021 (TurnTable Top 50):
  `rank 7, lastPosition 10, highestPosition 7, weeksOnChart 5`. 18 issues,
  2021-03-18 (#9) → 2021-07-15 (#43), one at #7. *Kolo Kolo* (Patoranking ft.
  Diamond Platnumz) is a different record. Wikipedia prints NG 8 — the payload is
  the chart.
- ***KU LO SA - A COLORS SHOW* — "Oxlade"**: issue 1401, 29 Sep 2022 (TurnTable
  Nigeria Top 100): `rank 9, lastPosition 11, highestPosition 9, weeksOnChart 13`.
  One at #9. The folded chain is below.

### Every Nigerian peak, with the issue that set it

| # | title | list | NG peak | set on issue | chart name on that issue | weeks | wks at peak | run | printed on the chart | verified |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | KOLO | singles | **7** | 431 · 2021-04-22, wk 16/2021 | TurnTable Top 50 | 18 | 1 | 2021-03-18 (#9) → 2021-07-15 (#43) | KOLO — Ice Prince ft. Oxlade ×18 | ✓ |
| 2 | KU LO SA - A COLORS SHOW | singles | **9** | 1401 · 2022-09-29, wk 39/2022 | TurnTable Nigeria Top 100 | 39 | 1 | 2022-07-07 (#66) → 2023-03-30 (#47) | KU LO SA - A COLORS SHOW — Oxlade ×23; KU LO SA - A COLORS SHOW — Oxlade & Camila Cabello ×1; KU LO SA — Oxlade & Camila Cabello ×15 | ✓ |
| 3 | Ojuju | singles | **11** | 751 · 2021-09-30, wk 39/2021 | TurnTable Top 50 | 16 | 1 | 2021-08-19 (#13) → 2021-12-02 (#49) | Ojuju — Oxlade ×16 | ✓ |
| 4 | All My Life | singles | **13** | 503 · 2021-06-10, wk 23/2021 | TurnTable Top 50 | 7 | 2 | 2021-06-10 (#13) → 2021-07-22 (#32) | All My Life — M.I Abaga ft. Oxlade ×7 | ✓ |
| 5 | OLOLUFE | singles | **22** | 4012 · 2025-02-20, wk 8/2025 | Official Nigeria Top 100 | 12 | 1 | 2025-02-20 (#22) → 2025-12-11 (#82) | OLOLUFE — Oxlade ft. Sarkodie ×12 | ✓ |
| 6 | Bad Boy | singles | **23** | 1587 · 2022-12-15, wk 50/2022 | TurnTable Nigeria Top 100 | 9 | 1 | 2022-12-01 (#25) → 2023-02-02 (#96) | Bad Boy — Oxlade ft. Mayorkun ×9 | ✓ |
| 7 | INTOXYCATED | singles | **24** | 2257 · 2023-07-20, wk 29/2023 | Official Nigeria Top 100 | 11 | 1 | 2023-07-20 (#24) → 2023-10-05 (#88) | INTOXYCATED — Oxlade ft. Dave ×11 | ✓ |
| 8 | KATIGORI | singles | **27** | 2718 · 2023-11-23, wk 47/2023 | Official Nigeria Top 100 | 6 | 1 | 2023-11-23 (#27) → 2024-01-11 (#77) | KATIGORI — Oxlade ×6 | ✓ |
| 9 | OVAMI | singles | **29** | 2114 · 2023-05-25, wk 21/2023 | Official Nigeria Top 100 | 6 | 1 | 2023-05-25 (#29) → 2023-06-29 (#97) | OVAMI — Oxlade & Flavour ×6 | ✓ |
| 10 | How Many Times | singles | **30** | 2043 · 2023-05-04, wk 18/2023 | Official Nigeria Top 100 | 9 | 1 | 2023-04-20 (#37) → 2023-06-15 (#95) | How Many Times — DJ Big N, Oxlade & Ayra Starr ×9 | ✓ |
| 11 | DOINGZ | singles | **39** | 4261 · 2025-04-17, wk 16/2025 | Official Nigeria Top 100 | 5 | 1 | 2025-04-10 (#41) → 2025-05-08 (#54) | DOINGZ — Oxlade ×5 | ✓ |
| 12 | IFA | singles | **46** | 3500 · 2024-08-29, wk 35/2024 | Official Nigeria Top 100 | 5 | 1 | 2024-08-29 (#46) → 2024-09-26 (#92) | IFA — Oxlade & Fally Ipupa ×5 | ✓ |
| 13 | Myself | singles | **48** | 238 · 2021-01-07, wk 1/2021 | TurnTable Top 50 | 1 | 1 | 2021-01-07 (#48) → 2021-01-07 (#48) | Myself — Basketmouth ft. Oxlade & Show Dem Camp ×1 | ✓ |
| 14 | Spell (Remix) | singles | **52** | 1902 · 2023-03-23, wk 12/2023 | Official Nigeria Top 100 | 5 | 1 | 2023-03-23 (#52) → 2023-04-20 (#87) | Spell (Remix) — Chike & Oxlade ×5 | ✓ |
| 15 | Mine Alone | singles | **76** | 1423 · 2022-10-06, wk 40/2022 | TurnTable Nigeria Top 100 | 2 | 1 | 2022-10-06 (#76) → 2022-10-13 (#83) | Mine Alone — Show Dem Camp & Oxlade ×2 | ✓ |
| 16 | Undress You | singles | **77** | 3041 · 2024-02-29, wk 9/2024 | Official Nigeria Top 100 | 1 | 1 | 2024-02-29 (#77) → 2024-02-29 (#77) | Undress You — KJ Spio, Oxlade & Sarkodie ×1 | ✓ |
| 17 | Mistaken | singles | **96** | 2803 · 2023-12-14, wk 50/2023 | Official Nigeria Top 100 | 1 | 1 | 2023-12-14 (#96) → 2023-12-14 (#96) | Mistaken — Libianca, Oxlade & Chloe ×1 | ✓ |
| 18 | Pressure | singles | **98** | 5771 · 2026-08-13, wk 33/2026 | Official Nigeria Top 100 | 2 | 2 | 2026-08-13 (#98) → 2026-09-03 (#98) | Pressure — K-Trap & Oxlade ×2 | ✓ |
| 19 | Clueless | singles | **99** | 2078 · 2023-05-18, wk 20/2023 | Official Nigeria Top 100 | 1 | 1 | 2023-05-18 (#99) → 2023-05-18 (#99) | Clueless — Michael Brun & Oxlade ×1 | ✓ |
| 20 | Melanin | singles | **99** | 5362 · 2026-03-26, wk 13/2026 | Official Nigeria Top 100 | 1 | 1 | 2026-03-26 (#99) → 2026-03-26 (#99) | Melanin — Balloranking & Oxlade ×1 | ✓ |
| 21 | Woman | singles | **100** | 2114 · 2023-05-25, wk 21/2023 | Official Nigeria Top 100 | 1 | 1 | 2023-05-25 (#100) → 2023-05-25 (#100) | Woman — Joeboy & Oxlade ×1 | ✓ |
| 22 | ARABAMBI | singles | **100** | 3385 · 2024-06-20, wk 25/2024 | Official Nigeria Top 100 | 1 | 1 | 2024-06-20 (#100) → 2024-06-20 (#100) | ARABAMBI — Oxlade ×1 | ✓ |
| 23 | OFA (Oxlade From Africa) | albums | **40** | 3551 · 2024-09-26, wk 39/2024 | Official Top 100 Albums | 13 | 1 | 2024-09-26 (#40) → 2025-05-29 (#94) | OFA (Oxlade From Africa) — Oxlade ×6; OFA: Deluxe Edition — Oxlade ×7 | ✓ |

### Printings folded into one entry (each checked on the lastPosition / weeksOnChart chain)

- ***Ku Lo Sa* — three printings, one TurnTable entry.** "KU LO SA - A COLORS
  SHOW — Oxlade" from 7 Jul 2022 (#66, `weeksOnChart 1`) through 8 Dec 2022 (#28,
  WOC 23); on 15 Dec 2022 the same row reads "KU LO SA - A COLORS SHOW — Oxlade &
  Camila Cabello" (#12, LP 28, WOC 24); from 22 Dec 2022 it is "KU LO SA — Oxlade &
  Camila Cabello" (#12, LP 12, WOC 25) to 30 Mar 2023 (#47, WOC 39).
  `highestPosition 9` and the week counter run straight through: one chain, 39
  issues. The **#9 was set under the COLORS printing** (29 Sep 2022); the Camila
  Cabello printings never went above #12. OCC and SNEP do the same (one entry
  credited OXLADE for both versions), and Hung Medien gives the remix item only
  France's S26-2023 week (#193). The board keeps **one** release row. If Paul
  ever wants the remix as its own row, split at 15 Dec 2022: COLORS printing #9
  (23 issues), Camila printings #12 (16 issues).
- ***OFA (Oxlade From Africa)* → *OFA: Deluxe Edition*.** Standard edition #40 on
  debut (26 Sep 2024, WOC 1), 6 issues to 20 Feb 2025 (WOC 6); on 10 Apr 2025
  "OFA: Deluxe Edition — Oxlade" re-enters at #60 with `lastPosition -1`,
  `highestPosition 40`, `weeksOnChart 7`, and runs to 29 May 2025 (WOC 13). One
  entry, peak **40**, 13 issues.
- Every other recording is printed one way on every issue it appears in.

### Notes carried into the entry

- **No open runs.** Nothing of his is on the latest singles issue (17 Sep 2026) or
  the latest albums issue (10 Sep 2026). *Pressure* (K-Trap & Oxlade) is the most
  recent: #98 on 13 Aug and again on 3 Sep 2026, off since — re-read at the next
  sweep in case it re-enters.
- **House titles.** Every Nigerian-only title is exactly as TurnTable printed it
  on the peak issue. The multi-country release takes the COLORS title as the
  bodies print it, "Ku Lo Sa - A COLORS SHOW", on the board's pattern for "In My
  Mind - A COLORS SHOW".
- **Pre-archive, a gap and not a zero:** the singles chart begins 5 Nov 2020 and
  the albums chart 2 Nov 2022. *Away* (2020) and the EPs *Oxygene* (2020) and
  *Eclipse* (2021) never appear on any issue; any earlier Nigerian run is
  unreadable. His first charting credit is *Myself* (Basketmouth, 7 Jan 2021).

### Shared records — what APPLY must line up

- ***How Many Times*** (DJ Big N, Oxlade & Ayra Starr) — Ayra Starr's board carries
  "How Many Times" NG 30: same title, same peak. It joins the pinned
  shared-records list in `tests/afrobeats.test.ts`.
- ***OLOLUFE*** (Oxlade ft. Sarkodie, NG 22) and ***Undress You*** (KJ Spio,
  Oxlade & Sarkodie, NG 77) — Sarkodie is in this expansion batch; if his board
  takes these rows, use these exact titles and peaks.
- **Title collisions (different records):** "Pressure|NG" — K-Trap & Oxlade #98
  is a sixth "Pressure" on TurnTable (Seyi Vibez #1, Seyi Vibez & French Montana
  #6, Peruzzi ft. Fireboy DML #25, Wizkid #39, M3LON #43, Kunmie & Zlatan #45);
  "Pressure|NG" is already in the test's `known` set, so nothing new is needed.
  "Woman" — Joeboy & Oxlade #100 against Omah Lay's *Woman* (TurnTable best #5,
  28 issues); Omah Lay's board row "Woman" currently carries only ZA 100, so there
  is no NG clash today, but if his NG row is ever added, "Woman|NG" needs a
  `known` entry (or a qualified title). Wizkid's "Ololufe" (ft. Wande Coal, NG 4)
  is a different record from Oxlade's "OLOLUFE"; the test keys on the exact
  title, so the two strings do not meet.

## Outside Nigeria — eleven entries, each read at the body

| release | country · chart | peak | weeks at peak / weeks | mark | verbatim, as the body prints it |
|---|---|---|---|---|---|
| Ku Lo Sa - A COLORS SHOW | 🇸🇷 Nationale Top 40 Suriname | **2** | — (not published) | ✓ | "De top 40 lijst voor 1 – 8 dec 2022", `<ol class="wp-block-list">` item 2: "Ku Lo Sa – Oxlade". Then 5, 5, 5, 5 (Dec 2022 lists), 3, 4, 6, 8, 10, 13, 18, 26, 29 (typed numbers, 5 Jan – 9 Mar 2023). |
| Ku Lo Sa - A Colors Show | 🇳🇱 Dutch Single Top 100 | **13** | — / 45 (doc only) | ✓ᴴ | Hung Medien block "NL \| Peak: 13 / Wochen: 45" (swisscharts.com), "NL \| Top: 13 / Semaines: 45" (Ultratop's archived page), "nl \| Peak: 13 / weeks: 45" (portuguesecharts.com). |
| Ku Lo Sa - A Colors Show | 🇨🇭 Schweizer Hitparade | **14** | 3 / 27 | ✓ | "Single-Hitparade \| Einstieg \| 28.08.2022 \| (Rang 84) \| Zuletzt \| 12.03.2023 \| (Rang 90) \| Peak \| 14 (3 Wochen) \| Anzahl Wochen \| 27" |
| KU LO SA - A COLORS SHOW | 🇫🇷 SNEP Top Singles (Top 200) | **18** | — (not published) | ✓ | S37-2022 (Semaine du 16 septembre 2022): "18 \| KU LO SA - A COLORS SHOW \| OXLADE \| SONY MUSIC ENTERTAINMENT / EPIC \| 32e La Semaine Dernière". Run from S31-2022 (148): 148, 114, 110, 96, 64, 32, **18**, 27, 22, 20 … |
| KU LO SA - A COLORS SHOW | 🇬🇧 Official Singles Chart Top 100 | **24** | 1 / 20 | ✓ | Chart of 16/9/2022: "Number 24 \| KU LO SA - A COLORS SHOW \| OXLADE \| LW: 32 , Peak: 24 , Weeks: 9". Song page: 15 weeks 28/07–03/11/2022 + 5 weeks 12/01–09/02/2023 = 20, peak marked once (22/09/2022). |
| Ku Lo Sa - A Colors Show | 🇧🇪 Ultratop 50 Wallonia | **32** | 1 / 10 | ✓ᴬ | "Singles Charts \| Entrée \| 17/09/2022 \| (Position 50) \| Dernière semaine \| 03/12/2022 \| (Position 44) \| Top \| 32 (1 semaine) \| Semaines \| 10"; block "BE \| Top: 32 / Semaines: 10 (W)". No Flanders entry. |
| KU LO SA – A COLORS SHOW | 🇸🇪 Sverigetopplistan | **35** | 1 / 9 | ✓ | Vecka 38/2022, position 35. Stats panel: "9 \| Veckor på listan \| 58 \| Föregående placering \| 35 \| Högsta placering \| Första placering: Vecka 35, 2 september 2022". Run 90, 47, 36, **35**, 41, 46, 46, 58, 77. |
| KU LO SA - A COLORS SHOW | 🇮🇪 Official Irish Singles Chart (IRMA) | **50** | — (not published) | ✓ | IRMA: "KU LO SA - A COLORS SHOW \| OXLADE \| Singles \| Peak \| # \| 50 \| Label \| COLUMBIA". OCC's Irish chart of 14/10/2022: "Number 50 \| KU LO SA - A COLORS SHOW \| OXLADE \| LW: 67 , Peak: 50 , Weeks: 7". |
| Ku Lo Sa - A Colors Show | 🇵🇹 AFP Top 200 Singles | **60** | — / 25 (doc only) | ✓ᴴ | portuguesecharts.com: "35/2022 : N 149. 36/2022 : 107. 37/2022 : 76. 38/2022 : 60. 39/2022 : 70. … 06/2023 : 160. 08/2023 : R 194." |
| KU LO SA - A COLORS SHOW | 🇬🇷 IFPI Greece Digital Singles (International) | **83** | — (floor, not recorded) | ✓ᴬ | Week 37/2022: "83 \| Oxlade \| KU LO SA - A COLORS SHOW \| Panik/Sony \| QMEU32209358 \| \| \| 1 \| 83 \| 2022_37 \| NE"; week 38/2022: "89 \| … \| 83 \| 2 \| 83 \| 2022_37 \| DOWN". |
| INTOXYCATED (Oxlade ft. Dave) | 🇬🇧 Official Singles Chart Top 100 | **49** | 1 / 3 | ✓ | Chart of 21/7/2023: "Number 49 \| New \| INTOXYCATED \| OXLADE FT DAVE \| LW: New Peak: 49 , Weeks: 1". Run 49, 68, 96. Label COLUMBIA. |

**✓ᴴ** = read in the Hung Medien chart database — the data dutchcharts.nl and the
AFP mirror serve — not at the body's own site. For the Netherlands the body could
not be read at all (dutchcharts.nl robots.txt is `User-agent: * / Disallow: /`;
top40.nl disallows ClaudeBot, Claude-Web and anthropic-ai); for Portugal, AFP's
weekly PDFs sit under an audiogest.pt path its robots.txt disallows. Both figures
are printed identically on three separate Hung Medien pages, and the board's
earlier sweeps accept that database for NL and PT. Their weeks (NL 45, PT 25) are
recorded here, not in the entry.

**Row-level notes.**
- **Suriname 2** is the rendered position in the site's HTML ordered list — the
  basis the board already accepts for Davido's *Hayya Hayya* SR 1 (item 1 of this
  same list). The `<ol>` order matches the next list with typed numbers (29 Dec
  top five: We moeten doorgaan, Dit is Su, Rush, It's Plenty, Ku Lo Sa → 5 Jan
  typed: Rush 1, Dit is Su 2, Ku Lo Sa 3). If a typed number is ever required, the
  peak is 3. The run was already at 2 in the site's first-ever list (1 Dec 2022),
  so a higher earlier peak cannot be ruled out.
- **South Africa — held for Paul's hand check.** The find pass and the verifier
  read *Ku Lo Sa* at #5 from raw Wayback captures of TOSAC's own pages (2022). TOSAC
  is by hand under the owner's ruling of 25 Sep 2026, archives included, so the
  row is not published and South Africa is not one of his territories until Paul
  confirms it on TOSAC's own site.
- **Belgium** — Wallonia only; no Flanders line exists on Ultratop's page or in
  the Hung Medien block.
- **Greece** — the captures show issue 37 (83, NE) and 38 (89, 2 weeks); the page
  then sat on issue 38 until 19 Oct 2022 and next showed issue 45 (26 Oct), which
  has no row. Issues 39–44 appear in no capture, so the weeks are a floor and no
  weeks figure goes on the board.
- **Ireland** — IRMA prints only the peak; OCC shows only the Irish Top 50, so the
  total weeks (the row read 7 at its peak week) are not published.

**Better-looking numbers rejected, all genre, component or extension charts:** UK
**Afrobeats Chart** — Ku Lo Sa **2**, INTOXYCATED 4, Interest (Dolapo, Ms Banks &
Oxlade) 8, ASUNASA (ft. Wande Coal) 13, OLOLUFE 15, OVAMI 16, Ojuju 18, Want You
18, Bad Boy 19; UK **Hip Hop & R&B** — Ku Lo Sa 7, INTOXYCATED 28; UK **Singles
Chart Update** (midweek) — Ku Lo Sa 26, INTOXYCATED 53; UK Streaming 36, Video
Streaming 81, Sales 85, Downloads 81 (all Ku Lo Sa); **NZ Hot 40** — Mistaken 16,
Ku Lo Sa 22, Intoxycated 26 (find pass and Wikipedia; the body's search returns
these three entities only); **Dutch Single Tip** — Intoxycated (Wikipedia); Billboard **U.S.
Afrobeats Songs** 5 and **Rhythmic Airplay** 19 (Ku Lo Sa, Wikipedia).

## Misses — his biggest records, checked chart by chart

*Ku Lo Sa*, *KOLO*, *Ojuju*, *All My Life*, *OLOLUFE*, *Bad Boy*, *INTOXYCATED*,
*KATIGORI*, *OVAMI*, *How Many Times*, *Mistaken* and *Pressure*, plus the album
*OFA*, were checked on every official chart this pass could read. **No missed peak
was confirmed at a body.** Three Billboard leads could not be read (next section).
Every read below was made by the verifier with an honest User-Agent:

| chart | what was read | result |
|---|---|---|
| 🇬🇧 UK Official Singles Chart Top 100 (OCC) | OCC search `/search/oxlade/` (7 credits: OXLADE; Oxlade ft Dave; Oxlade ft Mayorkun; Oxlade & Flavour; Oxlade ft Sarkodie; Oxlade ft Wande Coal; Dolapo/Ms Banks/Oxlade) and all seven read in full; also searched k-trap and "pressure" | only the two rows above. K-Trap & Oxlade *Pressure* has no OCC entry (not on K-Trap's page; not among OCC's 12 "Pressure" songs) |
| 🇮🇪 IRMA | all nine song sitemaps, 17,728 charting songs | only *Ku Lo Sa* (Libianca has *People*, not *Mistaken*) |
| 🇫🇷 SNEP Top Singles | 92 weekly lists: 2022 W24 – 2023 W36 (Ku Lo Sa, Intoxycated), 2023 W47–52 (Katigori; ElGrandeToto feat. Oxlade *Like That*), 2024 W13–20 (Rhove feat. Oxlade *Soli*), 2024 W24–28 (Arabambi), 2025 W48 – 2026 W3 (Luciano feat. Oxlade *Medicine*); each list checked against its active week | only *Ku Lo Sa* |
| Hung Medien network (swisscharts.com; austriancharts.at) | song search "oxlade" (18 items) and "ku lo sa"; every Oxlade item read: DKT, Want You, Ku Lo Sa - A Colors Show, Ku lo sa (x Camila Cabello), Bad Boy, Intoxycated, Katigori, Arabambi, Like That, Medicine, Mister Romantic (MC One), Soli, Safe Salina (Tawsen), Okay (It's Not Right) (Whitney Houston & Oxlade & Pheelz), Napona (Nandy & Oxlade) | only *Ku Lo Sa* has a chart run (CH, FR, NL, BE-W, SE, PT) plus the remix item's single FR week inside the same SNEP entry. No AT, DE, NO, DK, IT, ES or FI line on any item; *Mistaken* and *OFA* are not in the database. Austria is a proven zero (its artist page has no Ö3 section) |
| 🇸🇪 Sverigetopplistan | weekly lists 2022 v34–v45 and the stats panel | only *Ku Lo Sa* |
| 🇳🇿 Official Top 40 Singles (Aotearoa Music Charts) | the body's search API ("Oxlade", "Ku Lo Sa", "Intoxycated", "Mistaken") and 46 dated Top 40 issues: 29 Jul 2022 – 27 Jan 2023, 14 Jul – 1 Sep 2023, 15 Dec 2023 – 23 Feb 2024 | **zero** in the Top 40; the three entities hold Hot 40 runs only |
| 🇦🇺 ARIA Top 50 Singles | 45 weekly issues: 1 Aug 2022 – 30 Jan 2023, 17 Jul – 28 Aug 2023, 18 Dec 2023 – 26 Feb 2024 | **zero** |
| 🇨🇿 🇸🇰 ČNS IFPI Singles Digital Top 100 | 17 weekly issues each, 2022 W34–W50 (Ku Lo Sa), each checked against its selected week | **zero** |
| 🇱🇹 AGATA Top 100 | 21 weekly posts, 2022 W30–W52 (W39 was never posted) | **zero** |
| 🇦🇪 🇸🇦 🇪🇬 Official MENA charts (Top 20) | 16 weeks × three countries = 48 lists: 2023 W47 – 2024 W2 (Katigori, Mistaken), 2025 W8–10 (OLOLUFE), 2026 W33–37 (Pressure) | **zero** |
| 🇿🇦 TOSAC | — | by hand (owner ruling, 25 Sep 2026) — not relied on, as a row or as a zero |
| 🇸🇷 Nationale Top 40 Suriname | all 131 lists, 1 Dec 2022 → 18 Sep 2026 | only *Ku Lo Sa* |

## Leads that could not be read — Billboard (UNVERIFIED, not in the entry)

English Wikipedia's *Ku Lo Sa* article and *Oxlade discography* print three
Billboard peaks, each citing a billboard.com chart week:

| chart | peak | Wikipedia's citation |
|---|---|---|
| 🇨🇦 Canadian Hot 100 | 59 | "Canadian Hot 100: Week of October 15, 2022" — billboard.com/charts/canadian-hot-100/2022-10-15/ |
| 🌐 Billboard Global 200 | 79 | "Billboard Global 200: Week of October 8, 2022" — billboard.com/charts/billboard-global-200/2022-10-08/ |
| 🇱🇺 Billboard Luxembourg Songs | 12 | "Billboard Luxembourg Songs: Week of September 24, 2022" — billboard.com/charts/luxembourg-songs-hotw/2022-09-24/ |

billboard.com's robots.txt disallows ClaudeBot, anthropic-ai and Claude-Web and it
sends an AI client to a TollBit paywall; it was not bypassed and not read through
Wayback. ca.billboard.com (Billboard Canada's own site) returns 404 for every dated
chart before 2 Sep 2023. **Paul to check these three by hand** (and the Global 200
Excl. U.S. for the same weeks, which Wikipedia does not list). If they stand, the
entry gains three entries and three territories. The Hot 100 and Billboard 200 are
unread too; Wikipedia lists no U.S. Hot 100 or Bubbling Under peak for *Ku Lo Sa*.

**Wikipedia figures the bodies contradict — rejected:** NG *Ku Lo Sa* 49, *KOLO* 8
and *Ojuju* 13 (TurnTable's own payloads: 9, 7 and 11).

## What could NOT be read — gaps, not absences

- **Billboard** — above. Also the Canadian Hot 100 before 2 Sep 2023 (Ku Lo Sa,
  Intoxycated) and every Billboard-compiled national chart (LU, HR, RO, IS …).
- **Netherlands (body)** and **Dutch Top 40** — dutchcharts.nl `Disallow: /`,
  top40.nl disallows Claude agents. The Single Top 100 row rests on Hung Medien.
- **Portugal (body)** — AFP PDFs robots-disallowed; the row rests on Hung Medien.
- **Germany, Norway** (robots or a Cloudflare challenge), **Belgium live site**
  (Cloudflare; Wayback only), **Hungary** (robots disallows ClaudeBot), **Italy
  (FIMI)** and **RiSA** (manual by owner ruling) — unread, not zero. For
  DE/NO/DK/IT/ES/FI the only evidence is the Hung Medien lead (no line on any
  Oxlade item).
- **South Africa** — by hand since the owner's ruling of 25 Sep 2026 (TOSAC is read
  by Paul, never by an agent). Before it: TOSAC W43–W44-2022 and W47-2022 onward unarchived (the Camila
  Cabello remix window), and TOSAC's shallow published depth from about 2023 W14
  hides *Intoxycated*, *KATIGORI* and *OLOLUFE*.
- **Greece** — IFPI Greece issues 39–44/2022 appear in no capture; the Top 75
  Albums was not walked.
- **Suriname** — no lists before 1 Dec 2022 (Ku Lo Sa's first half-year, Ojuju,
  KOLO); unpublished windows 18 May – 27 Jul 2023 (Intoxycated's release) and
  15 Feb – 3 Oct 2024 (Arabambi, IFA).
- **SNEP outside the windows above**, **Poland before 2023**, **Lithuania before
  2022-W10** and outside the 2022 window re-read here, **Latvia, Iceland, India,
  Israel, Lebanon, Singapore, Malaysia** and the Latin American bodies.
- **Australia positions 51–100** (ARIA publishes a Top 50) and ARIA before 1 Jul
  2019.
- **Ireland** — total weeks for *Ku Lo Sa* (IRMA prints none; OCC shows the Top 50
  only).
- **TurnTable** — singles before 5 Nov 2020, albums before 2 Nov 2022, and the
  albums issue of 17 Sep 2026 (not yet published when read).

## Proven zeros

Read by this verifier, honest User-Agent: UK Official Singles Chart (all seven OCC
credits; nothing beyond the two rows); Ireland (IRMA, 2014–2026 song archive);
Switzerland and Austria (Hung Medien's own database: no other item of his has a
Swiss or Austrian run); New Zealand Top 40 (the body's search API plus the 46
issues above); France (the 92 SNEP lists above); ARIA Top 50 (the 45 issues
above); Czech Republic and Slovakia (2022 W34–W50); Lithuania (2022 W30–W52);
UAE/Saudi Arabia/Egypt (the 48 lists above); Suriname (every list).

Resting on the find pass (24 Sep 2026): ARIA Top 50 singles and albums, all 377
issues 2019-07-01 → 2026-09-21; Canada 2 Sep 2023 → 28 Feb 2026 (ca.billboard.com,
honest User-Agent); Czech/Slovak, Polish (2023–2026),
Lithuanian and MENA walks outside the windows above (made with a spoofed desktop
User-Agent, so leads until re-read honestly); the Danish, Swedish, Finnish,
Hungarian and Spanish artist searches.

## Verifier notes (25 Sep 2026)

- Evidence: `~/burnaboy-work/board7/verify-charts/oxlade/` —
  `tt/issues/{1,2}/` (the verifier's own 509-issue cache), `walk.log`,
  `verify-walk-analysis.json` (every Oxlade appearance), `fold-chains.txt` (every
  *Ku Lo Sa* and *OFA* row with its counters), `ng-compare.json` (find pass vs
  re-read, row by row), `row-verdicts.json` (every row with its verbatim line,
  source URL and saved file), and `bodies/` (OCC, IRMA, Suriname, TOSAC, swisscharts
  / Hung Medien, SNEP, Sverigetopplistan, Ultratop, AFP mirror, IFPI Greece, NZ,
  ARIA, ČNS IFPI, AGATA, MENA and Wikipedia-lead reads, each host's robots.txt
  alongside).
- The repo's `scripts/turntable-walk.mjs` sends `User-Agent: Mozilla/5.0 (archive
  read; burnaboystats sweep)` — changed to an honest
  one, `burnaboystats-turntable-walk/1.0 (+https://burnaboystats.com/contact)`, on
  25 Sep 2026. This pass ran the copy with an honest User-Agent
  (plus a fetch-only switch) and got the same 307 + 202 issues.
- **robots.txt, for a ruling (as in the Ruger and Kizz Daniel verifications):**
  officialcharts.com and snepmusique.com disallow ClaudeBot (OCC also anthropic-ai)
  but do not name Claude-User, and their `*` groups allow the chart, song, artist
  and search pages; both were read as user-requested fetches. hitparade.ch and
  ultratop.be serve Cloudflare challenges (not bypassed): swisscharts.com (same
  database, crawl-delay 10 s respected) and raw Wayback captures were used.
- Email addresses printed in saved pages (the Czech, Swedish and Irish bodies'
  contact lines) were redacted in every saved copy. A temporary list of the file
  paths to redact was written to /tmp for a few seconds and then deleted.
