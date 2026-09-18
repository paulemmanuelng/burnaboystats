# Nigeria chart sweep — Burna Boy's own catalogue at TurnTable's archive (18 September 2026)

Every issue of TurnTable Charts' **Official Nigeria Top 100** (306 issues, 5 Nov 2020 → 10 Sep 2026, the Top 50 era included) and **Official Top 100 Albums** (202 issues, 2 Nov 2022 → 10 Sep 2026) read at the body's own archive route, every row with Burna Boy on the artiste line kept. Read on 18 Sep 2026 by `scripts/turntable-walk.mjs`; each proposed change was then put to an adversarial verifier with the issue-level evidence before anything was applied. **Applied the same day** (`app/data/charts.ts`).

## What changed

- **Corrections: 0.** None of the 22 Nigerian peaks on file before the sweep (16 songs, 6 albums) moved — every one reproduces as the best rank in some issue.
- **Additions to existing rows: 8** — a release already on file gained its Nigerian peak: 4 Kampé II, Alone, Jerusalema (Remix), Just Like Me, Loved by You, Real Life, Talibans II, WGFT.
- **Open-run notes: 5** — peak reproduces, the run is still on the latest issue: Dai Dai, I Told Them..., Love, Damini, No Sign of Weakness, Outside.
- **New rows: 59** — releases that had no chart row anywhere on the site; most are album cuts that charted on release week.
- **No. 1s: unchanged at 46.** The chart total moves 284 → 351 across 69 territories; Nigeria now holds 89 releases' peaks, up from 22.
- **Merged, not added (verifier rulings):** "Sungba (Remix)" NG 1 and "Sittin' on Top of the World" NG 8 stand — TurnTable ran each as ONE entry that it re-credited mid-run (Sungba solo → "Asake ft. Burna Boy" at No. 1; Sittin' solo #8 → "ft. 21 Savage"), so the walker's lower "second" peak is the same entry, not a new one. "4 Kampé II" is the site's accented row; the chart flattens the accents.
- **Withheld (title clash):** the songs "Love, Damini" (NG 36, 2022) and "No Sign Of Weakness" (NG 19, 2025) share their exact title with the album rows, and every join on the site is title-keyed (`titleKey`, homeData, statCards, MobileCerts), so a song row would be read as the album's. The evidence is valid and is in the table below under "withheld"; adding them needs a title-plus-list key first.
- **Not found in the archive (8 plaqued titles):** "On the Low", "Location", "Wonderful", "Bank On It", "No Fit Vex", "Level Up", "Lenu (Remix)" and "B.D'or" never appear on any issue. All but the last were released before the chart began (5 Nov 2020); "B.D'or" is the 2019 Bramsito single, a different record from Burna Boy's own "B. D'OR" (ft. Wizkid, 2021, NG 2 — new row).
- **Side corrections forced by the join test** (`tests/releaseMetadataParity`): certifications.ts dated "Whiskey" 2020, "Thanks" 2020 and "Onyeka (Baby)" 2019 and credited "Solid" to "feat. Kehlani & Justin Bieber"; the album tracklists in albums.ts say 2022 / 2023 / 2020 and "feat. Blxst & Kehlani", and the ten Love, Damini / I Told Them… cuts with a Nigerian plaque now carry their album year so both pages print the same subtitle.

## Every Nigerian peak on file, with the issue that set it

Peak = best rank in ANY issue (TurnTable's `highestPosition` resets on the 7 Jul 2022 relaunch and on every re-entry). Weeks = issues the recording appears in. "Printed" is how the artiste line reads on the chart — the site keeps its own house credit.

| # | Title | Credit on site | List | NG peak | Set on issue | Weeks | Run | Printed on the chart | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | I Told Them... | — | albums | **1** | 2384 · 2023-08-31 (wk 35/2023) | 159 | 2023-08-31 (1) → 2026-09-10 (31) — still on | I Told Them — Burna Boy ×159 | peak reproduced; open-run note added |
| 2 | No Sign of Weakness | — | albums | **1** | 4569 · 2025-07-17 (wk 29/2025) | 61 | 2025-07-17 (1) → 2026-09-10 (19) — still on | No Sign Of Weakness — Burna Boy ×61 | peak reproduced; open-run note added |
| 3 | Love, Damini | — | albums | **3** | 1480 · 2022-11-02 (wk 44/2022) | 202 | 2022-11-02 (3) → 2026-09-10 (25) — still on | Love, Damini — Burna Boy ×202 | peak reproduced; open-run note added |
| 4 | Twice as Tall | — | albums | **17** | 1761 · 2023-02-02 (wk 5/2023) | 184 | 2022-11-02 (25) → 2026-09-10 (26) — still on | Twice As Tall — Burna Boy ×184 | reproduced, unchanged |
| 5 | African Giant | — | albums | **23** | 5713 · 2026-07-30 (wk 31/2026) | 158 | 2022-11-10 (40) → 2026-09-10 (36) — still on | African Giant — Burna Boy ×159 | reproduced, unchanged |
| 6 | Outside | — | albums | **41** | 3398 · 2024-07-04 (wk 27/2024) | 51 | 2024-03-14 (96) → 2026-09-10 (89) — still on | Outside — Burna Boy ×51 | peak reproduced; open-run note added |
| 7 | For My Hand | feat. Ed Sheeran | singles | **1** | 1250 · 2022-07-14 (wk 28/2022) | 35 | 2022-07-14 (1) → 2023-03-09 (47) | For My Hand — Burna Boy ft. Ed Sheeran ×35 | reproduced, unchanged |
| 8 | Ginger | Wizkid ft. Burna Boy | features | **1** | 145 · 2020-11-05 (wk 45/2020) | 33 | 2020-11-05 (1) → 2021-07-01 (48) | Ginger — Wizkid ft. Burna Boy ×33 | reproduced, unchanged |
| 9 | Higher | — | singles | **1** | 3415 · 2024-07-11 (wk 28/2024) | 35 | 2024-07-04 (2) → 2025-04-17 (45) | Higher — Burna Boy ×35 | reproduced, unchanged |
| 10 | Kilometre | — | singles | **1** | 462 · 2021-05-06 (wk 18/2021) | 27 | 2021-05-06 (1) → 2022-08-25 (88) | Kilometre — Burna Boy ×27 | reproduced, unchanged |
| 11 | Love | — | singles | **1** | 4589 · 2025-07-24 (wk 30/2025) | 38 | 2025-07-17 (4) → 2026-04-02 (37) | Love — Burna Boy ×38 | reproduced, unchanged |
| 12 | Sungba (Remix) | Asake ft. Burna Boy | features | **1** | 1025 · 2022-03-31 (wk 13/2022) | 5 | 2022-03-31 (1) → 2022-05-05 (3) | Sungba — Asake ft. Burna Boy ×5 | reproduced, unchanged |
| 13 | Tshwala Bam (Remix) | TitoM, Yuppe & Burna Boy feat. S.N.E | features | **1** | 3329 · 2024-05-23 (wk 21/2024) | 18 | 2024-05-23 (1) → 2024-09-19 (40) | Tshwala Bam (Remix) — Titom, Yuppe & Burna Boy ft. S.N.E ×18 | reproduced, unchanged |
| 14 | B. D'OR | feat. Wizkid | singles | **2** | 893 · 2021-12-23 (wk 51/2021) | 20 | 2021-12-16 (24) → 2022-07-07 (92) | B. D'OR — Burna Boy ft. Wizkid ×20 | new row |
| 15 | Big 7 | — | singles | **2** | 2288 · 2023-08-03 (wk 31/2023) | 51 | 2023-08-03 (2) → 2025-12-11 (40) | Big 7 — Burna Boy ×51 | reproduced, unchanged |
| 16 | Bundle by Bundle | — | singles | **2** | 3925 · 2024-12-26 (wk 52/2024) | 24 | 2024-12-19 (17) → 2025-05-29 (98) | Bundle By Bundle — Burna Boy ×24 | new row |
| 17 | City Boys | — | singles | **2** | 2457 · 2023-09-07 (wk 36/2023) | 33 | 2023-08-31 (3) → 2024-04-11 (41) | City Boys — Burna Boy ×33 | reproduced, unchanged |
| 18 | Giza | feat. Seyi Vibez | singles | **2** | 2380 · 2023-08-31 (wk 35/2023) | 32 | 2023-08-31 (2) → 2024-06-20 (45) | Giza — Burna Boy ft. Seyi Vibez ×32 | reproduced, unchanged |
| 19 | Laho II | Shallipopi & Burna Boy | features | **2** | 4402 · 2025-05-01 (wk 18/2025) | 35 | 2025-05-01 (2) → 2026-01-15 (44) | Laho II — Shallipopi & Burna Boy ×35 | new row |
| 20 | It's Plenty | — | singles | **3** | 1251 · 2022-07-21 (wk 29/2022) | 34 | 2022-07-14 (6) → 2023-03-02 (48) | It's Plenty — Burna Boy ×34 | new row |
| 21 | Last Last | — | singles | **3** | 1096 · 2022-05-19 (wk 20/2022) | 46 | 2022-05-19 (3) → 2023-03-30 (46) | Last Last — Burna Boy ×46 | reproduced, unchanged |
| 22 | Cheat on Me | feat. Dave | singles | **4** | 2380 · 2023-08-31 (wk 35/2023) | 19 | 2023-08-24 (41) → 2024-01-11 (92) | Cheat On Me — Burna Boy ft. Dave ×19 | reproduced, unchanged |
| 23 | Common Person | — | singles | **4** | 1255 · 2022-08-11 (wk 32/2022) | 38 | 2022-07-14 (7) → 2023-03-30 (34) | Common Person — Burna Boy ×38 | new row |
| 24 | Loved by You | Justin Bieber ft. Burna Boy | features | **4** | 392 · 2021-03-25 (wk 12/2021) | 10 | 2021-03-25 (4) → 2021-05-27 (46) | Loved By You — Justin Bieber ft. Burna Boy ×10 | NG entry added to the existing row |
| 25 | Question | feat. Don Jazzy | singles | **4** | 705 · 2021-09-02 (wk 35/2021) | 20 | 2021-08-26 (16) → 2022-01-06 (37) | Question — Burna Boy ft. Don Jazzy ×20 | new row |
| 26 | Update | — | singles | **4** | 4016 · 2025-02-27 (wk 9/2025) | 24 | 2025-02-20 (58) → 2025-07-31 (68) | Update — Burna Boy ×24 | new row |
| 27 | Dem Dey | — | singles | **5** | 4588 · 2025-07-17 (wk 29/2025) | 22 | 2025-07-17 (5) → 2026-02-05 (72) | Dem Dey — Burna Boy ×22 | new row |
| 28 | TaTaTa | feat. Travis Scott | singles | **5** | 4480 · 2025-05-29 (wk 22/2025) | 19 | 2025-05-22 (94) → 2025-09-25 (89) | TaTaTa — Burna Boy ft. Travis Scott ×19 | reproduced, unchanged |
| 29 | Do I | Phyno & Burna Boy | features | **6** | 2849 · 2024-01-11 (wk 2/2024) | 18 | 2023-12-21 (32) → 2024-04-18 (77) | Do I (Remix) — Phyno & Burna Boy ×18 | new row |
| 30 | Dai Dai | Shakira & Burna Boy | singles | **7** | 5654 · 2026-06-18 (wk 25/2026) | 17 | 2026-05-21 (42) → 2026-09-10 (96) — still on | Dai Dai — Shakira & Burna Boy ×17 | peak reproduced; open-run note added |
| 31 | Different Size | feat. Victony | singles | **8** | 1250 · 2022-07-14 (wk 28/2022) | 17 | 2022-07-14 (8) → 2022-12-08 (95) | Different Size — Burna Boy ft. Victony ×17 | new row |
| 32 | Rotate | Becky G, Burna Boy | features | **8** | 351 · 2021-03-04 (wk 9/2021) | 1 | 2021-03-04 (8) → 2021-03-04 (8) | Rotate — Becky G, Burna Boy ×1 | new row |
| 33 | Sittin' on Top of the World | feat. 21 Savage | singles | **8** | 2149 · 2023-06-08 (wk 23/2023) | 16 | 2023-06-08 (8) → 2023-10-12 (87) | Sittin' On Top Of The World — Burna Boy ft. 21 Savage ×12; Sittin' On Top Of The World — Burna Boy ×4 | reproduced, unchanged |
| 34 | Want It All | feat. Polo G | singles | **8** | 761 · 2021-10-07 (wk 40/2021) | 12 | 2021-10-07 (8) → 2021-12-23 (39) | Want It All — Burna Boy ft. Polo G ×12 | new row |
| 35 | Cloak & Dagger | feat. J Hus | singles | **9** | 1250 · 2022-07-14 (wk 28/2022) | 11 | 2022-07-14 (9) → 2022-09-22 (92) | Cloak & Dagger — Burna Boy ft. J Hus ×11 | new row |
| 36 | Second Sermon (Remix) | Black Sherif ft. Burna Boy | features | **9** | 1055 · 2022-04-14 (wk 15/2022) | 25 | 2021-12-16 (43) → 2022-10-13 (98) | Second Sermon (Remix) — Black Sherif ft. Burna Boy ×25 | new row |
| 37 | No Panic | — | singles | **13** | 4588 · 2025-07-17 (wk 29/2025) | 6 | 2025-07-17 (13) → 2025-08-21 (90) | No Panic — Burna Boy ×6 | new row |
| 38 | 20 10 20 | — | singles | **14** | 145 · 2020-11-05 (wk 45/2020) | 2 | 2020-11-05 (14) → 2020-11-12 (28) | 201020 — Burna Boy ×1; 20 10 20 — Burna Boy ×1 | new row |
| 39 | Change Your Mind | feat. Shaboozey | singles | **14** | 4588 · 2025-07-17 (wk 29/2025) | 5 | 2025-07-17 (14) → 2025-08-14 (60) | Change Your Mind — Burna Boy ft. Shaboozey ×5 | new row |
| 40 | Dey Play | — | singles | **14** | 2380 · 2023-08-31 (wk 35/2023) | 24 | 2023-08-31 (14) → 2024-04-04 (83) | Dey Play — Burna Boy ×24 | new row |
| 41 | Way Too Big | — | singles | **14** | 238 · 2021-01-07 (wk 1/2021) | 24 | 2020-11-05 (26) → 2021-04-29 (46) | Way Too Big — Burna Boy ×24 | new row |
| 42 | Science | — | singles | **15** | 1250 · 2022-07-14 (wk 28/2022) | 11 | 2022-07-14 (15) → 2022-09-22 (98) | Science — Burna Boy ×11 | new row |
| 43 | Sweet Love | — | singles | **15** | 4403 · 2025-05-08 (wk 19/2025) | 12 | 2025-05-08 (15) → 2025-07-31 (100) | Sweet Love — Burna Boy ×12 | new row |
| 44 | Talibans II | Byron Messia ft. Burna Boy | features | **16** | 2380 · 2023-08-31 (wk 35/2023) | 20 | 2023-07-27 (18) → 2024-03-07 (98) | Talibans II — Burna Boy & Bryon Messia ×20 | NG entry added to the existing row |
| 45 | Alone | — | singles | **17** | 1544 · 2022-11-24 (wk 47/2022) | 28 | 2022-11-10 (30) → 2023-05-25 (87) | Alone — Burna Boy ×28 | NG entry added to the existing row |
| 46 | On Form | — | singles | **17** | 2380 · 2023-08-31 (wk 35/2023) | 21 | 2023-08-31 (17) → 2024-05-30 (94) | On Form — Burna Boy ×21 | new row |
| 47 | Hey Boy | Sia ft. Burna Boy | features | **18** | 279 · 2021-01-21 (wk 3/2021) | 4 | 2021-01-21 (18) → 2021-02-11 (37) | Hey Boy — Sia ft. Burna Boy ×4 | new row |
| 48 | WGFT | Gunna ft. Burna Boy | features | **18** | 4698 · 2025-08-14 (wk 33/2025) | 24 | 2025-08-14 (18) → 2026-02-12 (75) | wgft — Gunna ft. Burna Boy ×24 | NG entry added to the existing row |
| 49 | All My Life (Burna Boy Remix) | Lil Durk & J. Cole ft. Burna Boy | features | **19** | 2607 · 2023-10-19 (wk 42/2023) | 4 | 2023-10-19 (19) → 2023-11-09 (31) | All My Life (Burna Boy Remix) — Lil Durk & J. Cole ft. Burna Boy ×4 | new row |
| 50 | Tested, Approved & Trusted | — | singles | **19** | 2611 · 2023-10-26 (wk 43/2023) | 24 | 2023-08-31 (27) → 2024-02-08 (63) | Tested, Approved & Trusted — Burna Boy ×24 | new row |
| 51 | Vanilla | — | singles | **19** | 1250 · 2022-07-14 (wk 28/2022) | 9 | 2022-07-14 (19) → 2022-09-08 (91) | Vanilla — Burna Boy ×9 | new row |
| 52 | Jerusalema (Remix) | Master KG ft. Nomcebo Zikode & Burna Boy | features | **20** | 155 · 2020-11-12 (wk 46/2020) | 6 | 2020-11-05 (37) → 2020-12-10 (30) | Jerusalema (Remix) — Master KG ft. Burna Boy & Nomcebo Zikode ×6 | NG entry added to the existing row |
| 53 | Buy You Life | — | singles | **21** | 4588 · 2025-07-17 (wk 29/2025) | 7 | 2025-07-17 (21) → 2025-08-28 (79) | Buy You Life — Burna Boy ×7 | new row |
| 54 | Normal | — | singles | **21** | 2380 · 2023-08-31 (wk 35/2023) | 6 | 2023-08-31 (21) → 2023-10-05 (73) | Normal — Burna Boy ×6 | new row |
| 55 | Rollercoaster | feat. J Balvin | singles | **21** | 1250 · 2022-07-14 (wk 28/2022) | 11 | 2022-07-14 (21) → 2023-05-11 (99) | Rollercoaster — Burna Boy ft. J. Balvin ×11 | new row |
| 56 | 28 Grams | — | singles | **23** | 4588 · 2025-07-17 (wk 29/2025) | 7 | 2025-07-17 (23) → 2025-08-28 (88) | 28 Grams — Burna Boy ×7 | new row |
| 57 | Dirty Secrets | — | singles | **23** | 1250 · 2022-07-14 (wk 28/2022) | 7 | 2022-07-14 (23) → 2022-08-25 (97) | Dirty Secrets — Burna Boy ×7 | new row |
| 58 | I Told Them | feat. GZA | singles | **23** | 2380 · 2023-08-31 (wk 35/2023) | 6 | 2023-08-31 (23) → 2023-10-05 (74) | I Told Them — Burna Boy ft. GZA ×6 | new row |
| 59 | Don't Let Me Drown | — | singles | **24** | 4560 · 2025-07-10 (wk 28/2025) | 5 | 2025-07-03 (26) → 2025-07-31 (96) | Don't Let Me Drown — Burna Boy ×5 | new row |
| 60 | 23 | — | singles | **26** | 418 · 2021-04-08 (wk 14/2021) | 21 | 2020-11-05 (35) → 2026-07-16 (97) | 23 — Burna Boy ×21 | new row |
| 61 | Glory | feat. Ladysmith Black Mambazo | singles | **26** | 1250 · 2022-07-14 (wk 28/2022) | 5 | 2022-07-14 (26) → 2022-08-11 (92) | Glory — Burna Boy ft. Ladysmith Black Mambazo ×5 | new row |
| 62 | Wild Dreams | feat. Khalid | singles | **27** | 1250 · 2022-07-14 (wk 28/2022) | 8 | 2022-07-14 (27) → 2022-09-01 (96) | Wild Dreams — Burna Boy ft. Khalid ×8 | new row |
| 63 | Born Winner | — | singles | **28** | 4588 · 2025-07-17 (wk 29/2025) | 6 | 2025-07-17 (28) → 2025-08-21 (91) | Born Winner — Burna Boy ×6 | new row |
| 64 | Monsters You Made | feat. Chris Martin | singles | **29** | 145 · 2020-11-05 (wk 45/2020) | 5 | 2020-11-05 (29) → 2020-12-03 (38) | Monsters You Made — Burna Boy ft. Chris Martin ×5 | new row |
| 65 | Whiskey | — | singles | **29** | 1250 · 2022-07-14 (wk 28/2022) | 5 | 2022-07-14 (29) → 2022-08-18 (98) | Whiskey — Burna Boy ×5 | new row |
| 66 | Empty Chairs | feat. Mick Jagger | singles | **30** | 4588 · 2025-07-17 (wk 29/2025) | 4 | 2025-07-17 (30) → 2025-08-07 (98) | Empty Chairs — Burna Boy ft. Mick Jagger ×4 | new row |
| 67 | Onyeka (Baby) | — | singles | **30** | 351 · 2021-03-04 (wk 9/2021) | 10 | 2021-02-18 (42) → 2021-04-22 (38) | Onyeka (Baby) — Burna Boy ×10 | new row |
| 68 | Toni-Ann Singh | feat. Popcaan | singles | **30** | 1250 · 2022-07-14 (wk 28/2022) | 4 | 2022-07-14 (30) → 2022-08-11 (99) | Toni-Ann Singh — Burna Boy ft. Popcaan ×4 | new row |
| 69 | Solid | feat. Blxst & Kehlani | singles | **31** | 1250 · 2022-07-14 (wk 28/2022) | 4 | 2022-07-14 (31) → 2022-08-04 (84) | Solid — Burna Boy ft. Blxst & Kehlani ×4 | new row |
| 70 | Thanks | feat. J. Cole | singles | **31** | 2380 · 2023-08-31 (wk 35/2023) | 2 | 2023-08-31 (31) → 2023-09-07 (65) | Thanks — Burna Boy ft. J. Cole ×2 | new row |
| 71 | If I'm Lying | — | singles | **33** | 2380 · 2023-08-31 (wk 35/2023) | 3 | 2023-08-31 (33) → 2023-09-14 (94) | If I'm Lying — Burna Boy ×3 | new row |
| 72 | Birthday | Fredo, Burna Boy & Steel Banglez | features | **34** | 5267 · 2026-02-12 (wk 7/2026) | 10 | 2026-02-05 (36) → 2026-04-16 (83) | Birthday — Fredo, Burna Boy & Steel Banglez ×10 | new row |
| 73 | How Bad Could It Be | — | singles | **34** | 1250 · 2022-07-14 (wk 28/2022) | 4 | 2022-07-14 (34) → 2022-08-04 (99) | How Bad Could It Be — Burna Boy ×4 | new row |
| 74 | 4 Kampé II | Joé Dwèt Filé ft. Burna Boy | features | **36** | 4226 · 2025-04-03 (wk 14/2025) | 9 | 2025-04-03 (36) → 2025-05-29 (94) | 4 Kampe II — Joe Dwet File & Burna Boy ×9 | NG entry added to the existing row |
| 75 | Come Gimme | — | singles | **36** | 4588 · 2025-07-17 (wk 29/2025) | 2 | 2025-07-17 (36) → 2025-07-24 (72) | Come Gimme — Burna Boy ×2 | new row |
| 76 | I FEEL IT | Jon Bellion ft. Burna Boy | features | **36** | 741 · 2021-09-23 (wk 38/2021) | 1 | 2021-09-23 (36) → 2021-09-23 (36) | I FEEL IT — Jon Bellion ft. Burna Boy ×1 | new row |
| 77 | Yaba Buluku (Remix) | DJ Tárico & Burna Boy ft. Preck & Nelson Tivane | features | **39** | 640 · 2021-08-05 (wk 31/2021) | 10 | 2021-07-15 (44) → 2021-12-30 (48) | Yaba Buluku (Remix) — Dj Tarico & Burna Boy ft. Preck & Nelson Tivane ×10 | new row |
| 78 | Real Life | feat. Stormzy | singles | **40** | 175 · 2020-12-03 (wk 49/2020) | 6 | 2020-11-05 (48) → 2020-12-17 (42) | Real Life — Burna Boy ft. Stormzy ×6 | NG entry added to the existing row |
| 79 | Virgil | — | singles | **41** | 2380 · 2023-08-31 (wk 35/2023) | 2 | 2023-08-31 (41) → 2023-09-07 (89) | Virgil — Burna Boy ×2 | new row |
| 80 | Jagele | — | singles | **42** | 1254 · 2022-08-04 (wk 31/2022) | 13 | 2022-07-14 (45) → 2022-10-06 (100) | Jagele — Burna Boy ×13 | new row |
| 81 | Kabiyesi | — | singles | **43** | 4588 · 2025-07-17 (wk 29/2025) | 2 | 2025-07-17 (43) → 2025-07-24 (84) | Kabiyesi — Burna Boy ×2 | new row |
| 82 | Pardon | with Stromae | singles | **56** | 4588 · 2025-07-17 (wk 29/2025) | 2 | 2025-07-17 (56) → 2025-07-24 (95) | Pardon — Burna Boy & Stromae ×2 | new row |
| 83 | Coming Home | Usher & Burna Boy | features | **58** | 3003 · 2024-02-15 (wk 7/2024) | 2 | 2024-02-15 (58) → 2024-02-22 (99) | Coming Home — USHER & Burna Boy ×2 | new row |
| 84 | ROBOSHOTTA | Busta Rhymes ft. Burna Boy | features | **59** | 2951 · 2024-02-01 (wk 5/2024) | 3 | 2024-01-18 (76) → 2024-02-01 (59) | ROBOSHOTTA — Busta Rhymes ft. Burna Boy ×3 | new row |
| 85 | Ye | — | singles | **70** | 5701 · 2026-07-09 (wk 28/2026) | 4 | 2026-07-02 (99) → 2026-07-23 (85) | Ye — Burna Boy ×4 | new row |
| 86 | Just Like Me | 21 Savage, Burna Boy & Metro Boomin | features | **72** | 2871 · 2024-01-18 (wk 3/2024) | 2 | 2024-01-18 (72) → 2024-01-25 (88) | just like me — 21 Savage, Burna Boy & Metro Boomin ×2 | NG entry added to the existing row |
| 87 | Masculine | J Hus ft. Burna Boy | features | **80** | 2257 · 2023-07-20 (wk 29/2023) | 2 | 2023-07-20 (80) → 2023-07-27 (100) | Masculine — J Hus ft. Burna Boy ×2 | new row |
| 88 | We Pray | Coldplay ft. Little Simz, Burna Boy, Elyanna & TINI | features | **83** | 3515 · 2024-09-05 (wk 36/2024) | 5 | 2024-09-05 (83) → 2024-10-17 (98) | WE PRAY — Coldplay, Little Simz, Burna Boy, Elyanna & TINI ×5 | reproduced, unchanged |
| 89 | Teary Eyes | YoungBoy Never Broke Again & Burna Boy | features | **85** | 5168 · 2026-01-22 (wk 4/2026) | 1 | 2026-01-22 (85) → 2026-01-22 (85) | Teary Eyes — YoungBoy Never Broke Again & Burna Boy ×1 | new row |
| 90 | No Sign Of Weakness | Burna Boy | singleCharts | **19** | 4588 · 2025-07-17 (wk 29/2025) | 4 | 2025-07-17 (19) → 2025-08-07 (87) | No Sign Of Weakness — Burna Boy ×4 | withheld — title clash with the album row |
| 91 | Love, Damini | Burna Boy ft. Ladysmith Black Mambazo | singleCharts | **36** | 1250 · 2022-07-14 (wk 28/2022) | 3 | 2022-07-14 (36) → 2022-07-28 (99) | Love, Damini — Burna Boy ft. Ladysmith Black Mambazo ×3 | withheld — title clash with the album row |

## Verifier notes carried into the data

- **"Sungba (Remix)" NG 1 stands, but read how the body prints it.** TurnTable carries ONE chart entry: "Sungba — Asake" (solo, peak 5, four issues to 24 Mar 2022), re-credited "Sungba — Asake ft. Burna Boy" at No. 1 on the 31 Mar 2022 issue, printed "Sungba (Remix)" from 28 Apr (and "Sungba" again on 5 May). The lastPosition chain and the weeks counter run straight through the re-title, so this is one entry, not two; the site's row folds the two Burna-credited printings (48 issues). The four solo issues are not counted.
- **"Sittin' on Top of the World" NG 8 stands** on the same basis: the entry debuted at 8 on 8 Jun 2023 credited "Burna Boy" alone, and was re-credited "Burna Boy ft. 21 Savage" from 6 Jul 2023 (lastPosition 17 carries across, weeks 5) — the peak was set under the solo credit; the 21 Savage printing never went above 29.
- **"Talibans II"** — the chart prints "Burna Boy & Bryon Messia" [sic], with Burna Boy first-named, while the site's featureCharts row reads "Byron Messia ft. Burna Boy" (and certifications.ts "with Byron Messia"). The proposed NG 16 goes on the existing featureCharts row; the credit question is the site's to settle, not the chart's.
- **"B. D'OR" (Burna Boy ft. Wizkid, NG peak 2, Dec 2021)** has no charts.ts row, and certifications.ts holds its Nigerian Platinum under "B.D'or — Bramsito ft. Burna Boy, 2019", which is a different record (the French single). The TCSN plaque most likely belongs to the Burna Boy ft. Wizkid single; check the register's credit before touching either row.
- **"Solid"** — the chart credits "Burna Boy ft. Blxst & Kehlani" (the album version); certifications.ts credits it "feat. Kehlani & Justin Bieber" (the remix). The row proposed here uses the chart's credit; align them deliberately.
- **Twice as Tall tracks ("Way Too Big", "23", "Real Life", "Monsters You Made", "201020")** first appear on the chart's very first issue, 5 Nov 2020 — the album was twelve weeks old by then, so their peaks here are the best rank on the chart since it began, not since release. There is no earlier TurnTable chart to read.
- **Catalogue songs charting late:** "Ye" (2018) entered in July 2026 (peak 70); "23" re-entered in July 2026 (97) after leaving in May 2021. The proposed rows take the release year from certifications.ts where it holds the same record, and say so where no year is on file.
- **Credits for new rows follow the site's own conventions:** lead rows get "feat. X" (or "with X" for a joint "Burna Boy & X" billing, as certifications.ts writes "Talibans II — with Byron Messia"); featured rows carry the chart's billing verbatim ("Shallipopi & Burna Boy", "Becky G, Burna Boy"). The chart's own casing is kept in titles ("WE PRAY", "wgft", "I FEEL IT", "ROBOSHOTTA") — normalise to the site's house style when adding.
- **"Do I (Remix)"** — the chart's title; certifications.ts has the song as "Do I (Phyno & Burna Boy)". Same record, same lead; the row proposed here keeps the chart's title.
- **Weeks figures** are counts of issues the recording appears in under a Burna Boy credit; the chart's own weeksOnChart counter is shown beside them in the full-walk table and can be lower after a re-entry. The New-Year special of 31 Dec 2024 is one issue like any other.
- **The 17 Sep 2026 issues (week 38) were not in the archive** at the time of the read (the route served the earliest-issue fallback, twice); the latest read issue for both charts is 10 Sep 2026.

## Method

- Route requested with a `Referer: https://www.turntablecharts.com/` header; the `payload` is base64 JSON; every response validated on `weekNumber` == requested week AND year(`dateCreated`) == requested year. An unpublished week serves the earliest issue (singles id 145, 5 Nov 2020; albums learned at run time) — that fallback, seen twice for the same week, is recorded as "no issue that week"; any other mismatch, rate-limit, empty or network response is retried up to six times with growing back-off.
- Rate: one request per 900 ms (~67/min). Each validated issue is cached as `issues/{chartId}/{year}-{week}.json`, so a re-run is free.
- Weeks are the body's own numbering, not ISO: e.g. the 31 Dec 2024 New-Year special is week 53/2024 and 2025 has no week 1.
- Peak = best rank in ANY issue; `highestPosition` is only reported for reference. Weeks = count of issues the recording appears in (the chart's `weeksOnChart` counter is shown alongside as `counter` — it also resets on re-entry).
- Match = the ARTIST: `/\bburna\s*boy\b/i` on the `artiste` line only, any position. Rows whose title or credit carry "Burna" without "Boy" were listed for review and NOT matched (see below).
- Lead vs feature: Burna Boy first-named on the artiste line = lead (singleCharts); otherwise a feature (featureCharts). The site's own exception (Dai Dai, "Shakira & Burna Boy", kept in singleCharts) is honoured by matching on title first.

### Chart 1 — Official Nigeria Top 100 (singles)
- Issues walked: **306**, first 2020-11-05 (id 145, "TurnTable Top 50"), last 2026-09-10 (id 5923, "Official Nigeria Top 100").
- Category names seen across the run: "TurnTable Top 50", "TurnTable Nigeria Top 100", "Official Nigeria Top 100".
- Rows per issue: 50, 100.
- Non-7-day gaps between consecutive issues: 2024-12-26 → 2024-12-31 (5d); 2024-12-31 → 2025-01-09 (9d).
- Issues that could not be read after retries: none.

### Chart 2 — Official Top 100 Albums
- Issues walked: **202**, first 2022-11-02 (id 1480, "Nigeria Top 50 Albums"), last 2026-09-10 (id 5922, "Official Top 100 Albums").
- Category names seen across the run: "Nigeria Top 50 Albums", "Official Top 50 Albums", "Official Top 100 Albums".
- Rows per issue: 50, 100.
- Non-7-day gaps between consecutive issues: 2022-11-02 → 2022-11-10 (8d); 2024-12-26 → 2024-12-31 (5d); 2024-12-31 → 2025-01-09 (9d).
- Issues that could not be read after retries: none.

Request stats for the fetch run (2026-09-18T06:16:00Z to 06:26Z (walk.log)): {"requests":539,"retries":14,"rateLimited":18,"empty":0,"mismatch":29,"errors":0} — the 429s were waited out, the 29 "mismatch" responses are the earliest-issue fallback for unpublished weeks (the fetch was made twice for each to confirm), and every retry ended in a validated issue. A first attempt at ~92 requests/min was rate-limited within two minutes and aborted after 16 issues; those 16 were reused from cache.

### Rows carrying "Burna" without "Boy" (reviewed, not matched)
- none

### Dedupes — one recording printed more than one way
- **Sittin' On Top Of The World** (singles) folded 2 printings: "Sittin' On Top Of The World — Burna Boy ft. 21 Savage" ×12; "Sittin' On Top Of The World — Burna Boy" ×4
- **201020** (singles) folded 2 printings: "201020 — Burna Boy" ×1; "20 10 20 — Burna Boy" ×1

## Re-running it

```bash
TT_TODAY=2026-09-18 node scripts/turntable-walk.mjs
```

The walk caches every validated issue under `.turntable-walk/issues/{1|2}/{year}-{week}.json` (gitignored), so a second run is free; `--no-fetch` re-analyses the cache against the current `charts.ts`. Against the data as applied it reports 0 corrections, 0 additions and the two withheld title-clash songs as the only "new releases".
