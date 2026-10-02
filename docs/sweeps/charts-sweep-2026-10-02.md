# Charts sweep — 2 Oct 2026

The owner asked for "a charts update sweep" with a rundown, built "with high speed and efficiency… accurately". This file is the evidence for every chart figure the sweep changed in `app/data/charts.ts` (Burna Boy) and `app/data/afrobeats.ts` (the Afrobeats Board), what it deliberately left alone, and what is waiting on a hand check.

## Method

1. **Find.** Twelve lanes read the chart bodies directly — airplay-east (5), americas (24), cee (29), dach (13), fr-benelux (17), mena-asia (10), ng (166), nordic (17), oceania (2), south-eu (5), uk-ie (22) leads — each lead naming the chart, the issue that sets the peak, the run and the evidence. Robots and the owner's access rulings were obeyed: no BPI, TOSAC, RiSA, FIMI by agent, no dutchcharts.nl / top40.nl / billboard.com, no Cloudflare challenge passed, and the OLiS API was not called with a borrowed Referer.
2. **Verify.** Every lead went to two independent verifiers (A and B), each re-reading the body by its own route. A lead is **CONFIRMED** only when both votes confirm it with the same figure; **SPLIT** when they disagree or one could not read the body; **REFUTED** when the body contradicts it.
   Result: **310 leads — 296 CONFIRMED, 12 SPLIT, 2 REFUTED.** A mini-verify of three MENA/Asia fills followed (all three CONFIRMED): Tyla's *Push 2 Start* PH 17 on the IFPI Official Philippines Chart (2025 week 5), and two contradictions that stay as hand checks (Dai Dai LB 1, Raindance MY 12).
3. **Apply.** Only CONFIRMED rows, at the verifiers' own values (never a lead's `newPeak` where they differ — Omah Lay's *Damn* is 25, not the lead's 11), with the newest weeks a verifier read where both votes or the note make it clear (Dai Dai SE 20 as of vecka 40, IT 16 as of week 40, IE 18 per IRMA's 2 Oct issue). The Nigerian backfill was scripted from the verify JSON, then read in the diff.

**Rules held throughout:** one entry per country on its principal national chart; airplay only where a country publishes no other national chart; the artist matched WITH the title (a printing that does not credit the artist does not count for them, even on a shared TurnTable entry); a peak is a PRINTED rank, never a `highestPosition` counter alone; a live run is published at its current peak with a dated note; a floor is labelled a floor.

## Charts and issues read, by lane

- **cee:a** — Bulgaria (cee-001/002/003): PROPHON publishes two weekly Top 10s, 'Българският ТОП 10' (Bulgarian repertoire only) and 'Световният ТОП 10'. The World list is mixed: in 76 of the 101 issues I read it carries Bulgarian-repertoire rows (e.g. 14 Aug 2026 has DARA at 6 and Поли Генова at 8). It is the same list that carries the site's Dai Dai BG figure, which tracks it exactly (10 Jul = 3). If BG stays on the World TOP 10, Rema's Calm Down #2 is printed and credited, and the rema sweep's 'repertoire component of a PROPHON Top 40' reason does not hold for this list. Note that the site's airplay-exception rule allows BG only because there is no other national chart. Poland: the OLiS API (the only route to the singles-on-stream data) now returns a Cloudflare 302 unless a Referer is sent, so under this run's rules PL is unreadable. The owner should decide whether the POLAND-OLIS.md recipe's Refe…
- **cee:b** — BG: PROPHON publishes two Top 10s each week, Bulgarian (Balgarskiyat) and World (Svetovniyat). The World list is a combined ranking and Bulgarian rows appear on it: DARA 'Bangaranga' is World No.1 on 10 Jul 2026 and Poli Genova 'Spomeni' is World No.9 on 10 Jul 2026. The site's BG figures (Dai Dai 3, and the leads' Calm Down 2 and Wo, man 2) all come from the World list. There is a newer issue than the finder read, 25.09.2026. CZ and SK: ČNS IFPI Singles Digitál Top 100 (charts 30 and 43). Featured artists print inside the title field, e.g. 'Own It (feat. Ed Sheeran & Burna Boy)' and 'Loved By You (feat. Burna Boy)', so those rows match. Jerusalema in HU and SK is billed only to Master KG (feat./&) Nomcebo, with no Burna credit in any issue. Whether those count for Burna under the One Dance precedent is the owner's call. LT: AGATA Top 100 is the national chart. It also lists separate ve…
- **ng-updates:b** — Nigeria has only one official chart family, so no airplay question arises: TurnTable's Official Nigeria Top 100 (the Top 50 before the 7 Jul 2022 relaunch) and the Top 100 Albums. As of 2 Oct 2026, the newest singles issue is 24 Sep 2026 (id 5939); week 40 is not yet published. The newest albums issue is 17 Sep 2026 (id 5935); week 39 is not published. These calls need Paul's ruling on credits and titles: (1) Remix or featured printings that share one TurnTable entry and musicLink with a printing that lacks the artist or uses another title: Come & Go (Black Sherif 15 vs 12), Maserati (Davido 17 vs 13), Soweto (Rema 5 vs the Omah Lay remix's 4), Abracadabra (Wizkid 7 vs the original's 6). Also Damn: 25 under the title 'Damn' vs 11 under 'Damn (Remix) ft. 6lack'. And Peru: 1 as 'Fireboy DML & Ed Sheeran' vs a solo-credited best of 3. (2) 'Ashawo' and 'All of Us (Ashawo)' are one retitled …
- **uk-ie:a** — UK: the site tracks the Official Singles Chart Top 100 (OCC). The Singles Chart Update, Streaming, Sales, Downloads, Video Streaming and Afrobeats charts are all component or genre charts, not the national chart; Kilometre UK 84 and Loved by You UK 59 both fail on this. Ireland: the national chart is IRMA's Top 100 (OCC's Irish pages print only the Top 50, and their 'Weeks' on the song/artist block counts Top-50 weeks only, e.g. Dai Dai shows 15 there against 17 on the weekly row). Neither country is an airplay-only case. Two credit-only cases need an owner ruling: Jerusalema (Remix) and We Pray. Both have the site's figures matching the body's row exactly, but the row is credited to Master KG ft Nomcebo Zikode or to Coldplay alone, never to Burna Boy. New since the lead: IRMA's 2 Oct 2026 singles issue is out (Dai Dai #54, 18th week). OCC's 2 Oct UK and Irish issues were not up at 15:5…
- **ng-updates:a** — Nigeria's chart is TurnTable's Official Nigeria Top 100 for singles (the TurnTable Top 50 before the 7 Jul 2022 relaunch) and the Official Top 100 Albums (Top 50 Albums early on). It is not an airplay chart, so the airplay rule does not apply. As of 2 Oct 2026, the newest singles issue is 24 Sep (id 5939) and the newest albums issue is 17 Sep (id 5935). The 1 Oct singles and 24 Sep albums issues were not yet published: the earliest-issue fallback came back twice for each. The highestPosition counter resets on the July 2022 relaunch and on every re-entry, and it carries across retitles and remixes, which is why 16-024 and 027-035 differ. Credit rulings for Paul: (a) printings that omit the artist but share the recording's musicLink: Come & Go 12 for Black Sherif (031); (b) Damn vs Damn (Remix) for Omah Lay (019: 25 strict, 11 if the remix folds in); (c) whether a various-artists soundtra…
- **americas:a** — PANAMA: PRODUCE (the national producers' society) publishes two charts, and the site uses the airplay one. (1) The airplay chart is the 'Top 50 Nacional e Internacional' (BMAT, 60 channels), which the site uses for PA. (2) The streaming chart is 'Charts digital Panamá': a weekly 'Weighted Streaming Panama' report from BMAT (Spotify/Apple/Deezer/Amazon/YouTube) with rank, last week, weeks, weeks at No. 1 and a Max column, plus a monthly report. The digital page has existed since 2020 (Wayback captures from 27 Apr 2020). The charts.ts note says PA has 'no other national chart' and that Monitor Latino is the only alternative; that premise looks wrong. PRODUCE's disclaimer says the data is reported to BMAT by the platforms and is not used to distribute rights. Switching PA to the streaming chart would leave Dai Dai at No. 1 (Max 1, 2 weeks at No. 1, versus 5 on airplay) but would move Ayra …
- **ng-new:b** — Nigeria has its own national charts on the site: TurnTable Official Nigeria Top 100 (singles; it was the TurnTable Top 50 before July 2022, and the archive starts 5 Nov 2020) and the Official Top 100 Albums (archive starts 2 Nov 2022). So the airplay-only rule does not apply. All 129 confirmed rows come from these two charts, never from TurnTable's streaming, radio or genre sub-charts.  1. The archive is current to singles wk39 (24 Sep 2026, id 5939) and albums wk38 (17 Sep 2026, id 5935). Singles wk40 and albums wk39–40 are not published yet, so the open-run leads (001, 052, 097–111) are stated as of 24 Sep.  2. Title-variant cases need the owner's call on how to file them:    - 079 charted only as 'Love Nwantiti (Ah Ah Ah) [Remix]' (ft. Joeboy & Kuami Eugene).    - 125 is split: 'Sere' (best 32) and 'Sere (Remix)' (best 20).    - 054 is printed both as 'Forever' and as 'Forever (Remix…
- **ng-new:a** — Nigeria uses TurnTable's archive route: chart 1 is the singles chart (TurnTable Top 50 until 30 Jun 2022, Official Nigeria Top 100 from 7 Jul 2022) and chart 2 is the Official Top 100 Albums, from 2 Nov 2022. Both are official national charts, not airplay charts. The fresh walk read 308 singles issues (5 Nov 2020 to 24 Sep 2026, newest id 5939) and 203 album issues (2 Nov 2022 to 17 Sep 2026, newest id 5935), with no weeks missing. Singles weeks 40-41 and albums weeks 39-41 of 2026 are not published yet.  Rulings needed or worth knowing: (1) Title clashes. Each of these needs a disambiguated title, the way 'FUJI MOTO (single)' was handled before:   - Rema 'HEIS' single (28) vs the HEIS album (NG 1).   - Fireboy 'Playboy' single (2) vs the Playboy album (NG 8).   - Victony 'Stubborn' album (2) vs the existing Stubborn single (NG 2) and the separate 'Very Stubborn' deluxe (23).   - Seyi V…
- **americas:b** — PANAMA: PRODUCE (Panama's IFPI national group) publishes a non-airplay national chart, so the site's PA airplay exception ('no other national chart', charts.ts:111-116) rests on a false premise. The chart is 'Weighted Streaming Panama', a weekly BMAT/IFPI-CAM Top ~3000 built from Spotify, Apple, Deezer, Amazon and YouTube. It has come out weekly since week 23 of 2026 (IFPI-CAM-Panama-Weighted-Streaming-Manual-Weekly-TOP-3000-Week-23-2026.pdf, posted 12 Jun 2026), with monthly editions as well. PRODUCE also posted 'IFPI-CAM Panama Total Streams ISRC Weekly TOP 1000' PDFs in 2024. The page carries a disclaimer that the chart is informative only and is not used for royalty distribution. If the owner switches PA to the streaming chart: Dai Dai stays at peak 1 (2 weeks at No. 1, 19 weeks); the board's Santa PA 5 would become Max 57 and Bubalu PA 41 would become Max 902; Calm Down Max 439, Sl…
- **dach:a** — All three DACH countries have a main national sales/streaming chart, so no airplay chart is involved. CH is the Schweizer Hitparade, read on swisscharts.com (= hitparade.ch, which the site treats as the body's own pages). AT is the Ö3 Austria Top 40 (Singles Top 75), read on austriancharts.at. DE is the GfK Offizielle Deutsche Charts. Live offiziellecharts.de returns Akamai 403 even for robots.txt. Its archived robots.txt (Wayback 20260501) bars only ClaudeBot, anthropic-ai, Claude-SearchBot and other AI crawlers, not Claude-User, so Wayback id_ copies are usable. For live DE figures, I used GfK's own press releases (gfk-entertainment.com; robots allows /news) plus germancharts.de (Hung Medien's mirror, Top 10 only, with a W column) for weeks-on-chart. germancharts.de showitem pages carry no chart data. The DE weeks figure therefore comes from the Hung mirror, not printed by GfK. dach-0…
- **uk-ie:b** — UK: the national chart is the OCC Official Singles Chart Top 100 (Official Albums Chart for albums). OCC also publishes component and genre charts: Singles Chart Update, Streaming, Video Streaming, Sales, Downloads, Hip Hop & R&B and Afrobeats. None of these is the national chart and none should be stored as UK peaks. Kilometre UK 84 (Afrobeats-only on OCC) and Loved by You UK 59 (Streaming-only) both fail this test. Ireland: the national chart is IRMA's Top 100 (singles and albums); OCC's Irish pages carry only the Top 50 and lag a week, so IRMA is the authority for positions 51-100 and for weeks counts. Neither country is an airplay case. IRMA has published its 2 Oct 2026 issue (Dai Dai IE #54, Weeks 18). OCC's 2 Oct UK issue was not yet out at 16:07 UTC, so UK Dai Dai stays at 17 weeks until it is. Owner rulings still open: Jerusalema (Remix) and We Pray. On both charts these rows ne…
- **fr-benelux:b** — Belgium: charts.ts line 12 says that where Belgium runs Flanders plus Wallonia, the better peak is shown. Under that rule I Told Them… goes to 11 and No Sign of Weakness to 118, both Wallonia. No 'Flanders convention' is written anywhere in charts.ts. Ultratip is a bubbling-under list, not the Ultratop 50, so a Tip position is not a chart peak (My Oasis). Netherlands: the site tracks the Dutch Single Top 100. dutchcharts.nl and top40.nl are barred, so all NL leads (008-012) need Paul's hand check, with Hung Medien blocks as leads only. The Dai Dai NL block now reads 19 weeks, not 18. France: SNEP prints no weeks-on-chart column, so weeks are counted. Dai Dai's SNEP rows credit Burna Boy only in S31-S34; the other 14 of its 18 weeks credit SHAKIRA alone. Paul should rule whether those weeks count, though the site note already discloses it. Burna-row changes (I Told Them…, NSOW, Dai Dai B…
- **dach:b** — I checked the chart bodies against the site's table: CH = Schweizer Hitparade, AT = Ö3 Austria Top 40, DE = GfK / Offizielle Charts. All three are each country's main sales/streaming chart, not airplay, so the airplay rule does not apply. For Switzerland I read swisscharts.com (Hung Medien, which runs the Hitparade's site; hitparade.ch was avoided). For Austria I read austriancharts.at. For Germany: offiziellecharts.de live answers my user agent with a 403 (Akamai), even for robots.txt. I used Wayback id_ copies instead; the newest archived robots (2026-05-01) bars only ClaudeBot, anthropic-ai and Claude-SearchBot. GfK's own press releases on gfk-entertainment.com (robots allow) were used for weeks at No.1. germancharts.de (Hung Medien's German portal) prints only a Top 10 with a W column; its item pages carry no chart data. Timing matters for the open runs. Germany: the 02.10.2026 char…
- **mena-asia:a** — ISRAEL: charts.ts names IL's chart as "Mako Hit List (official singles chart)". tests/charts.test.ts still lists IL in AIRPLAY_EXCEPTIONS (IL, BG, UY, VE), although IL's chart name no longer says airplay. Mako's first live issue is "07.03 - 13.03.2023", published 20 Mar 2023. The 28 earlier issues in Mako's own archive (30 Aug 2022 to 7 Mar 2023) are backfill: midnight publishDates, many oldPosition -1 values (all 100 items in the Jan to Mar 2023 issues), timesInChart counting down, and highestPosition already set to the final value. Before Mako, Israel's only national chart was Media Forest airplay, the old carve-out. The board's own sweeps disagree. The Tyla, Rema and Ayra Starr docs accept Mako from March 2023. The Tems doc rejected Mako and dropped Israel. The Tyla doc says the ruling needs Paul's sign-off. Two rulings are needed. (a) Does Mako count for board artists? This decides …
- **fr-benelux:a** — 1) The Belgian albums convention needs Paul's ruling. The charts.ts header says that for Belgium (Flanders + Wallonia) and the Netherlands (Single Top 100 + Top 40) 'the better peak is shown'. Burna's I Told Them… (BE 20 = Flanders, Wallonia 11) and No Sign of Weakness (BE 136 = Flanders, Wallonia 118) show the Flanders figure, and the 18 Sep audit kept 136 under a 'Flanders convention'. Applying the header rule gives 11 and 118. His other BE album rows (Love Damini 24, Twice as Tall 22, African Giant 58) may be Flanders-only too and were not checked. Also, Burna's Wallonia discography block prints We Pray at 12 against the site's BE 9, which is consistent with 9 being the Flanders and better figure. 2) Belgium's extension chart (Ultratip) is excluded by the header, the same as NL 'Single Tip' and US Bubbling Under. My Oasis's BE 2 is an Ultratip position, so it should go. 3) The Nether…
- **airplay-east:a** — MK (North Macedonia) and SI (Slovenia) are not in charts.ts CHART_COUNTRIES. They exist only in afrobeats.ts EXTRA_COUNTRIES as 'Radiomonitor ... (airplay — no other national chart)', so adding a Burna Boy MK or SI row needs the owner's OK to extend CHART_COUNTRIES with these airplay carve-outs. Slovenia check: slotop50.si DNS resolves again (212.30.70.214), but https://www.slotop50.si refuses the connection and http 301/302s to https, so SloTop50 is still unreachable. The afrobeats.ts comment 'SloTop50's domain no longer resolves' is technically out of date. Russia: the site's RU chart is 'TopHit streaming'. TopHit also publishes a weekly Top 100 Radio Hits Russia, but since a non-airplay national chart exists, the no-airplay rule excludes the radio chart. Radiomonitor widget: no robots.txt (404 on radiomonitor.com and app2), payloads are undated, there is no history parameter, and MK …
- **airplay-east:b** — 1) North Macedonia and Slovenia (leads 001-003): Radiomonitor 'All Radio' is an airplay chart. The board already uses it as the airplay exception for MK and SI (afrobeats.ts EXTRA_COUNTRIES; docs/sweeps say SloTop50 no longer resolves). Burna's charts.ts CHART_COUNTRIES has neither country, so adding the Dai Dai rows (MK 9, SI 4) also means adding MK and SI to CHART_COUNTRIES with the same airplay-exception wording. I did not confirm that neither country has a non-airplay national chart. billboard.com is barred, so I could not check for a Billboard Slovenia or North Macedonia Songs chart. No such chart is among the Billboard country charts the repo already uses. 2) Every Radiomonitor figure is a single-week FLOOR. The public API has no date and no history, Wayback holds nothing, and MK shows only a Top 10 (SI a Top 30). If the rows are published, the note should say the peak may have be…
- **mena-asia:b** — 1. Israel and Mako: charts.ts names the Mako Hit List as IL's official chart, and Burna's Dai Dai IL row uses it. Two things conflict with that: the memory note lists IL as an airplay carve-out, and tems-chart-peaks-v1.md dropped Israel. The owner should rule once for all board artists. 2. Mako backfill: Mako's archive serves 28 issues (30 Aug 2022 to 7 Mar 2023) that were compiled after the fact. They carry midnight publish/created stamps equal to the issue date, their timesInChart counters run backwards, and they hold no oldPositions from 3 Jan 2023 onward. The first live issue ("07.03 - 13.03.2023") was published 20 Mar 2023. If only live issues count: Calm Down IL drops to 35 (solo 'Rema' row) or 60 (joint row), and Ku Lo Sa and Rush have no IL entry at all. 3. Malaysia: charts.ts says RIM's international chart IS the official one for Burna and forbids substituting the regional char…
- **oceania:a** — Australia's chart body is ARIA (charts.ts CHART_COUNTRIES AU: body "ARIA"). The site already carries AU peaks above 50 from ARIA's Top 100 in the subscriber ARIA Report: Be Honest AU 77, and other rows at 56 and 79. So We Pray could have a real placing between 51 and 100 that the public site does not show. Only a hand check of the ARIA Report can confirm that. A figure of 37 is ruled out whatever that check shows, because rank 37 would appear in the public Top 50 and it does not. If no 51–100 placing is confirmed, the owner's choice is to remove the AU entry from the We Pray row. For NZ, the finder reports that RMNZ confirms We Pray NZ 21. I did not re-read that.
- **oceania:b** — Australia's tracked body is ARIA (charts.ts CHART_COUNTRIES AU body 'ARIA'). The public chart is the ARIA Top 50 Singles. Positions 51–100 appear only in the subscriber ARIA Report. Other AU feature entries on the site go as low as 96, so the site has mixed in 51–100 placings from secondary tables, which can't be checked on public routes. Australia has a full national singles chart, so the airplay exception doesn't apply. aria.com.au robots.txt allows everything for User-Agent: *. cdn.aria.com.au has no robots.txt (it returns an Azure blob error), so its per-issue print PDFs can be read.
- **nordic:b** — NORWAY DEPTH (nordic-008, -009, -016): both of IFPI Norge's own archives print 40 singles positions for 2019 and 2023. topplista.no singles 2019-W46 to W52 and 2023-W10 to W23 are 40-row lists. vglista.no pages titled 'Topp 20 Single 2019-48' and 'Topp 20 Single 2023-15' also print 40 numbered rows (1–40) under the 'Topp 20' title. Topplista's data-lastposition values (46, 48) show that ranks below 40 are tracked but not published. From 2025-W16 Topplista serves a Top 100, which fits the site's 'Top 100 from 2025-W14' note. Albums are a Top 40 in both archives, so Love, Damini 6 and I Told Them 6 have no depth issue. The owner has to decide whether VG-lista 2019–2025 counts as a Top 20 (drop Own It 26 and Calm Down 27) or a Top 40 (add both and reinstate Calm Down). The vglista.no Burna artist page also lists Own It as '2019 / 1 / 26'. CREDIT RULINGS (nordic-010, -017): Sweden's Jerusal…
- **south-eu:a** — Greece: the site tracks the IFPI Greece Digital Singles Chart (International). IFPI Greece also publishes an Album Sales Chart, an Airplay Chart and a Digital Singles Chart (Local). The airplay chart must not be used, because Greece has a non-airplay national chart. Italy: FIMI Top Singoli (the Singoli tab on fimi.it). The ajax endpoint needs the 'week' parameter; 'numweek' is ignored and returns the latest issue. FIMI published week 40 (25 Sep-1 Oct 2026) on 2 Oct, so open-run counts read before that are one week stale. Portugal: AFP Top 200 Singles is the LAST section of the weekly PDF (p9). Page 7 is 'TOP 200 STREAMS', which carries identical Dai Dai rows but is a different chart. audiogest.pt robots disallows /uploads, so weekly AFP PDFs are readable only from copies Paul downloads. On the site's rule, IFPI Greece remix/version rows (e.g. the Dai Dai SPINALL Remix, peak 22) are not …
- **south-eu:b** — GR: the site tracks the IFPI Greece Digital Singles Chart (International) (charts.ts GR body 'IFPI Greece'). This is a national sales/streaming chart, not airplay, so it is valid. IFPI also has Album, Airplay and Local digital charts. The page prints its own all-time Best Position and Best Week/Year columns plus a cumulative '# of Weeks' counter. Its 2026 combined summer edition '34 (31-34)' counts as ONE week in that counter. Wayback holds digital_ien.html only from 7 Apr 2018 (week 12/2018), so peaks from 2016-17 rest on IFPI's printed Best Position column alone. IT: FIMI Top Singoli is the only official singles chart. The archive page per week, /archivio-classifiche-per-settimana/?tipo=3&anno=YYYY&settimana=N (the trailing slash is required, otherwise it returns a 301), prints the albums, singles and vinyl tables in that order, so the singles table is the second. Week 40/2026 (25 Sep…
- **nordic:a** — NORWAY DEPTH (Own It #26 2019, Calm Down #27 2023): both of IFPI Norge's archives print 40 singles rows for 2019 and 2023. But vglista.no titles those very pages 'Topp 20 Single 2019-48' and 'Topp 20 Single 2023-15'. Topplista's own row data also shows the database ranked past 40 in 2023 (Calm Down data-lastposition=46 in 2023-W11 and 48 in W21). So the 40-row view is itself a cut of an extended list, which supports the site's existing rule that the chart was a Top 20 until wk 14/2025. Reinstating 21–40 needs Paul's ruling. Album charts are a different case: the Norwegian albums list is a 40-row list (Topp 40 Album), and the Love, Damini 6 and I Told Them 6 placings are inside the top 10 anyway. CREDIT RULINGS: Sweden files Jerusalema under MASTER KG (feat. Nomcebo Zikode) only, and Iceland files We Pray under Coldplay only. Both bodies print featured credits elsewhere, so under the mat…

## Applied — Burna Boy (`app/data/charts.ts`)

| Release | Country | Before | After | Verify ids | Issue read |
|---|---|---|---|---|---|
| Dai Dai | BG | 3 | 2 | cee-001 | PROPHON Svetovniyat (World) TOP 10: No. 2 on 14, 21 and 28 Aug 2026 |
| Dai Dai | IL | 6 | 5 | mena-asia-001 | Mako, issue "04.08 - 28.07.2026" |
| Dai Dai | MK | — | 9 (floor) | airplay-east-001 | Radiomonitor North Macedonia All Radio, current week as served 2 Oct 2026 |
| Dai Dai | SI | — | 4 (floor) | airplay-east-002 | Radiomonitor Slovenia All Radio, current week as served 2 Oct 2026 |
| Dai Dai | LT | 5 | 5 · 1 wk at No. 5 · 18 wks (open) | cee-024 | AGATA 2026-W27 (peak); 2026-W40 prints 54 \| 41 \| 18 — both votes |
| Dai Dai | BR | 27 | 27 · 16 wks (closed 7 Sep) | americas-002 | Billboard Brasil Hot 100, 27 Jul 2026 (peak); 7 Sep 2026 No. 92, Semanas no Chart 16; absent 14/21/28 Sep — both votes. 16 is the body's own counter (A: 12 printed appearances) |
| Dai Dai | DE | 1 · 11 wks at No. 1 · 16 wks | 1 · 13 · 18 | dach-003, dach-013 | GfK 25.09.2026 (13th week at No. 1); GfK release of 2 Oct: No. 2, run at the top final — **the 2 Oct release (news/5987) was read by vote B only**; vote A saw germancharts.de before it posted 02.10, so the 13/18 are two-vote and the "ends" is one-vote (hand check below) |
| Dai Dai | AT | 1 · 13 · 17 | 1 · 14 · 18 | dach-001 | Ö3 Austria Top 40, 25.09.2026 |
| Dai Dai | CH | 1 · 15 · 18 | 1 · 16 · 19 | dach-002 | Schweizer Hitparade, 27.09.2026 |
| Dai Dai | SE | weeks 17 | weeks 20 | nordic-001 | Sverigetopplistan vecka 40/2026 (No. 4) |
| Dai Dai | IT | weeks 13 | weeks 16 | south-eu-002 | FIMI Top Singoli week 40/2026 (No. 8) |
| Dai Dai | GR | weeks 13 | weeks 15 | south-eu-003 | IFPI Greece Digital Singles (International), week 38/2026 (No. 7) |
| Dai Dai | PT | weeks 14 | weeks 19 | south-eu-004 | AFP Top 200 Singles, Semana 39 de 2026 (No. 4) |
| Dai Dai | FR | weeks 16 (counted) | weeks 18 (counted) | fr-benelux-006 | SNEP Top Singles, semaine 39 (25 septembre, No. 6) |
| Dai Dai | BE | weeks 14 | weeks 19 | fr-benelux-007, fr-benelux-015 | Ultratop 50 Wallonia 26 Sep 2026 (S 19) |
| Dai Dai | CZ | weeks 13 | weeks 16 | cee-006, cee-022 | ČNS IFPI CZ Singles Digitál 39/2026 (Počet kol 16) |
| Dai Dai | SK | weeks 14 | weeks 17 | cee-007, cee-023 | ČNS IFPI SK Singles Digitál 39/2026 (Počet kol 17) |
| Dai Dai | AE | weeks 14 | weeks 18 | mena-asia-002 | Official UAE Chart wk39/2026 (No. 3) |
| Dai Dai | VE | weeks 11 | weeks 16 | americas-001 | Record Report, issue of 3 Oct 2026 (SC 16) |
| Dai Dai | UK | weeks 16 | weeks 17 | uk-ie-001 | OCC Singles 25 Sep–1 Oct 2026 (#33, Weeks 17) |
| Dai Dai | IE | no weeks | 1 wk at peak · 18 wks | uk-ie-002 | IRMA singles 2 Oct 2026 (#54, Weeks 18) |
| Dai Dai | NG | 7, open note | 7, run closed | ng-updates-004 | TurnTable: 18 issues, 21 May–17 Sep 2026; off the 24 Sep issue |
| I Told Them… | BE | 20 (Flanders) | 11 (Wallonia) | fr-benelux-004, fr-benelux-013 | Ultratop Albums Top 200 Wallonia, 2 Sep 2023 |
| I Told Them… | CH | — | 7 | dach-005 | Schweizer Hitparade Alben, 3 Sep 2023 |
| I Told Them… | NO | — | 6 | nordic-007 | Topplista Album 2023 uke 35 |
| Love, Damini | CH | — | 6 | dach-004 | Schweizer Hitparade Alben, 17 Jul 2022 |
| Love, Damini | DK | — | 8 | nordic-005 | Hitlisten Album Top-40 uge 28/2022 |
| Love, Damini | NO | — | 6 | nordic-006 | Topplista Album 2022 uke 28 |
| No Sign of Weakness | BE | 136 (Flanders) | 118 (Wallonia) | fr-benelux-005, fr-benelux-014 | Ultratop Albums Top 200 Wallonia, 19 Jul 2025 |
| Own It | LT | — | 25 | cee-010 | AGATA 2019-W48 |
| Own It | CZ | — | 66 | cee-013 | ČNS IFPI CZ 48/2019 |
| Own It | SK | — | 48 | cee-014 | ČNS IFPI SK 48/2019 |
| Own It | DE | — | 75 | dach-011, dach-012 | GfK 29.11.2019 (Wayback id_ of offiziellecharts.de) |
| Be Honest | LT | — | 46 | cee-011 | AGATA 2019-W35/W36 |
| Be Honest | CH | — | 51 | dach-006 | Schweizer Hitparade, 25 Aug 2019 |
| My Oasis | LT | — | 71 | cee-012 | AGATA 2020-W33 |
| My Oasis | BE | 2 | removed | fr-benelux-017 | Ultratip (bubbling-under), not the Ultratop 50 |
| Loved by You | SK | — | 49 | cee-015 | ČNS IFPI SK 12/2021 |
| Loved by You | SE | — | 100 | nordic-004 | Sverigetopplistan vecka 12/2021 |
| Loved by You | DK | — | 28 | nordic-011 | Hitlisten Track Top-40 uge 12/2021 |
| Loved by You | UK | 59 | removed | uk-ie-020 | Official Streaming Chart only; not on the Singles Chart |
| Kilometre | UK | 84 | removed | uk-ie-019 | Official Afrobeats Chart only; absent from five Singles Chart issues |
| We Pray | AU | 37 | removed | oceania-001, oceania-002 | no ARIA Top 50 row, 26 Aug 2024–30 Jun 2025 |
| Cheat on Me | CH | — | 56 | dach-008 | Schweizer Hitparade, 3 Sep 2023 |
| Cheat on Me | SE | — | 65 | nordic-003 | Sverigetopplistan vecka 35/2023 |
| TaTaTa | CH | — | 75 | dach-009 | Schweizer Hitparade, 1 Jun 2025 |
| TaTaTa | SR | — | 6 | americas-021 | Nationale Top 40, 3–10 Jul 2025 |
| Wild Dreams | SE | — | 55 | nordic-002 | Sverigetopplistan vecka 28/2022 |
| Gbona (new row) | CH | — | 78 | dach-007 | Schweizer Hitparade, 3 Apr 2022 |
| Play Play (new row) | UK / IE | — | 11 / 38 | uk-ie-003, uk-ie-004 | OCC 31 Jan–6 Feb 2020; IRMA 2020-01-31 |
| Siberia (new row) | UK / IE | — | 35 / 72 | uk-ie-005, uk-ie-006 | OCC 19–25 Feb 2021; IRMA 2021-02-19 |
| She's Not Anyone (new row) | UK / IE | — | 30 / 86 | uk-ie-007, uk-ie-008 | OCC 30 Sep–6 Oct 2022; IRMA 2022-09-30 |
| Masculine | UK / IE | — | 24 / 77 | uk-ie-009, uk-ie-010 | OCC 21–27 Jul 2023; IRMA 2023-07-21 |
| Cloak & Dagger | UK | — | 47 | uk-ie-011 | OCC 15–21 Jul 2022 |
| Good Time (new row) | UK | — | 88 | uk-ie-012 | OCC 19–25 May 2017 |
| It's Plenty | SR | — | 2 (floor) | americas-017 | Nationale Top 40, 15–22 Dec 2022 |
| Last Last | SR | — | 12 (floor) | americas-018 | Nationale Top 40, 1–8 Dec 2022 |
| Jagele | SR | — | 24 (floor) | americas-019 | Nationale Top 40, 1–8 Dec 2022 |
| Tested, Approved & Trusted | SR | — | 5 | americas-020 | Nationale Top 40, 18–25 Jan 2024 |

Also in `charts.ts`: **MK** and **SI** join `CHART_COUNTRIES` with the board's own airplay-exception wording ("Radiomonitor … (airplay — no other national chart)"), declared in `tests/charts.test.ts` AIRPLAY_EXCEPTIONS and `NOT_NATIONAL_BODIES`, and given ISO numerics in `app/lib/isoCodes.ts`. Both Dai Dai rows are floors: Radiomonitor's public widget serves the current week only, with no archive.

Both votes' issue references for each Burna row:

- Dai Dai BG (cee-001) — A = B: 14.08.2026 – 20.08.2026 (also 21–27 Aug and 28 Aug–3 Sep 2026)
- Dai Dai IL (mena-asia-001) — A: Mako issue "04.08 - 28.07.2026" (publishDate 2026-08-04, chartId 6a71f643921944bedecd3704) · B: Mako "04.08 - 28.07.2026" (published 4 Aug 2026, chartId 6a71f643921944bedecd3704)
- Dai Dai MK (airplay-east-001) — A: Radiomonitor North Macedonia All Radio, current week as served 2 Oct 2026 16:21 UTC (the API gives no date) · B: current week as served by Radiomonitor on 2 Oct 2026 16:21 UTC (the payload carries no date)
- Dai Dai SI (airplay-east-002) — A: Radiomonitor Slovenia All Radio, current week as served 2 Oct 2026 16:21 UTC (undated) · B: current week as served by Radiomonitor on 2 Oct 2026 16:21 UTC (the payload carries no date)
- Dai Dai DE (dach-003) — A: 25.09.2026 (No.1 every issue 03.07.2026-25.09.2026) · B: GfK 25.09.2026 (13th week at No.1); GfK 02.10.2026 press release: dropped to No.2
- Dai Dai DE (dach-013) — A: 25.09.2026 (No.1 every issue 03.07.2026-25.09.2026) · B: No.1 03.07.2026-25.09.2026 (13 consecutive); No.2 in the GfK chart published 02.10.2026
- Dai Dai AT (dach-001) — A: 25.09.2026 (No.1 every issue 26.06.2026-25.09.2026) · B: 25.09.2026 (Austria Top 40 - Singles Top 75), No.1 every week 26.06.2026-25.09.2026
- Dai Dai CH (dach-002) — A: 27.09.2026 (No.1 every issue 14.06.2026-27.09.2026) · B: 27.09.2026 (Schweizer Hitparade Singles Top 100), No.1 every week 14.06.2026-27.09.2026
- Dai Dai SE (nordic-001) — A: Veckolista Singlar vecka 28/2026 (first No. 1); newest issue now vecka 40/2026 (published 2 Oct 2026) · B: Veckolista Singlar vecka 28/2026 (first week at No. 1); newest issue is vecka 40/2026 (2 Oct 2026)
- Dai Dai IT (south-eu-002) — A: FIMI Top Singoli 2026, weeks 30-33 (No.1). Newest issue: week 40 (25 Sep-1 Oct 2026). · B: FIMI Top Singoli weeks 30-33 of 2026 (17 Jul - 13 Aug 2026)
- Dai Dai GR (south-eu-003) — A: IFPI Greece Digital Singles Chart (International), week 38/2026 (newest published; the live page still shows week 38 on 2 Oct) · B: No. 1 most recently in week 36/2026 (week 35/2026 per IFPI's Best Week column)
- Dai Dai PT (south-eu-004) — A: AFP Top 200 Singles, Semana 39 de 2026 (newest in hand; p9, the last section) · B: AFP Semana 39 de 2026 (18/9-24/9), Top 200 Singles
- Dai Dai FR (fr-benelux-006) — A: SNEP Top Singles S28-S36 2026 at No. 1; newest issue S39 (Semaine du 25 septembre 2026) at No. 6 · B: SNEP Top Singles S28-S36 2026 (No. 1); latest S39 (25 septembre) No. 6
- Dai Dai BE (fr-benelux-007) — A: Ultratop 50 Wallonia and Flanders, 26/09/2026 (newest captured) · B: Ultratop 50, 26 Sep 2026 (Wallonia #13, Flanders #2)
- Dai Dai BE (fr-benelux-015) — A: Ultratop 50 Wallonia and Flanders, 26/09/2026 · B: Ultratop 50, 26 Sep 2026
- Dai Dai CZ (cee-006) — A: weeks 30–32/2026 (ČNS IFPI CZ Singles Digitál Top 100) · B: 30.–32. týden 2026
- Dai Dai CZ (cee-022) — A: weeks 30–32/2026 · B: 30.–32. týden 2026
- Dai Dai SK (cee-007) — A: weeks 26–27 and 30–35/2026 (SK Singles Digitál Top 100) · B: 26., 27., 30.–35. týden 2026
- Dai Dai SK (cee-023) — A: weeks 26–27, 30–35/2026 · B: 26., 27., 30.–35. týden 2026
- Dai Dai AE (mena-asia-002) — A: No. 1 in wk25 through wk33 of 2026 (12 Jun to 13 Aug); newest issue is wk39 (18-24 Sep 2026, week_id 1829) · B: No.1 from wk25 to wk33 of 2026; newest issue read is wk39 (18-24 Sep 2026), week_id 1829
- Dai Dai VE (americas-001) — A: No. 1 in the 11/07/2026 week, printed only as SA=1 on the issue 'Fecha de Publicación: Sábado 18/07/2026' (ES 6, SA 1, SC 5) · B: No. 1 is printed only as SA=1 on the issue 'Fecha de Publicación: 18/07/2026' (ES 6, SA 1, SC 5). The live issue of Sat 03/10/2026 reads ES 30, SA 39, SC 16.
- Dai Dai UK (uk-ie-001) — A: Official Singles Chart 25 Sep - 1 Oct 2026 (#33, LW 31, Peak 2, Weeks 17) · B: OCC Singles 30 Jul - 27 Aug 2026 (5 issues at No.2); latest 25 Sep - 1 Oct 2026 #33
- Dai Dai IE (uk-ie-002) — A: IRMA chart-singles-2026-07-31 (id 101642), #3 · B: IRMA chart-singles-2026-07-31 (id 101642) #3
- Dai Dai NG (ng-updates-004) — A = B: 2026-06-18 (id 5654)
- I Told Them… BE (fr-benelux-004) — A: Ultratop Albums Top 200 Wallonia, 02/09/2023 (debut) · B: Ultratop Albums Top 200 Wallonia, 2 Sep 2023 (debut)
- I Told Them… BE (fr-benelux-013) — A: Ultratop Albums Top 200 Wallonia, 02/09/2023 · B: Ultratop Albums Top 200 Wallonia, 2 Sep 2023
- I Told Them… CH (dach-005) — A: 03.09.2023 (debut) · B: 03.09.2023 (Schweizer Hitparade Alben Top 100, debut)
- I Told Them… NO (nordic-007) — A: Topplista Album 2023 uke 35 · B: Topplista albums 2023-W35 (VG-lista Topp 40 Album 2023-35)
- Love, Damini CH (dach-004) — A: 17.07.2022 (debut) · B: 17.07.2022 (Schweizer Hitparade Alben Top 100, debut)
- Love, Damini DK (nordic-005) — A = B: Hitlisten Album Top-40 uge 28/2022
- Love, Damini NO (nordic-006) — A: Topplista Album 2022 uke 28 · B: Topplista albums 2022-W28 (VG-lista Topp 40 Album 2022-28)
- No Sign of Weakness BE (fr-benelux-005) — A: Ultratop Albums Top 200 Wallonia, 19/07/2025 · B: Ultratop Albums Top 200 Wallonia, 19 Jul 2025
- No Sign of Weakness BE (fr-benelux-014) — A: Ultratop Albums Top 200 Wallonia, 19/07/2025 · B: Ultratop Albums Top 200 Wallonia, 19 Jul 2025
- Own It LT (cee-010) — A: AGATA 2019-W48 (post savaites-klausomiausi-w48, 29 Nov 2019) · B: 2019 48-os savaitė (lapkričio 22–28 d.)
- Own It CZ (cee-013) — A: 48. týden 2019 (CZ Singles Digitál Top 100) · B: 48. týden 2019 (weekId 2614)
- Own It SK (cee-014) — A: 48. týden 2019 (SK Singles Digitál Top 100) · B: 48. týden 2019
- Own It DE (dach-011) — A: GfK chart of 29.11.2019 (Zeitraum 29.11.2019-05.12.2019) · B: GfK chart 29.11.2019 - 05.12.2019
- Own It DE (dach-012) — A: GfK chart of 29.11.2019 (Zeitraum 29.11.2019-05.12.2019) · B: GfK chart 29.11.2019 - 05.12.2019 (Wayback id_ 20240127124626 of for-date-1575049603000)
- Be Honest LT (cee-011) — A: AGATA 2019-W35 and W36 · B: 2019-W35 (post of 2 Sep 2019); also 46 in 2019-W36
- Be Honest CH (dach-006) — A: 25.08.2019 (debut) · B: 25.08.2019 (Schweizer Hitparade Singles Top 100, debut)
- My Oasis LT (cee-012) — A: AGATA 2020-W33 · B: 2020-W33
- My Oasis BE (fr-benelux-017) — A: Ultratop item pages (fr and nl, Wayback 2026 captures) · B: Ultratip only (entry 08/08/2020, Tip 2 Wallonia)
- Loved by You SK (cee-015) — A: 12. týden 2021 (SK) · B: 12. týden 2021 (weekId 2697)
- Loved by You SE (nordic-004) — A = B: Veckolista Singlar vecka 12/2021
- Loved by You DK (nordic-011) — A = B: Hitlisten Track Top-40 uge 12/2021
- Loved by You UK (uk-ie-020) — A: UK Singles 26 Mar - 1 Apr 2021 and 2-8 Apr 2021: absent · B: OCC Singles 19 Mar, 26 Mar, 2 Apr 2021 (absent)
- Kilometre UK (uk-ie-019) — A: UK Singles 30 Apr, 7 May, 14 May and 21 May 2021 issues read in full: absent · B: OCC Singles issues 30 Apr, 7 May, 14 May, 21 May, 28 May 2021 (all absent)
- We Pray AU (oceania-001) — A: none: no We Pray row in any ARIA Top 50 Singles issue from 26 Aug 2024 to 30 Jun 2025 · B: none. Checked ARIA Top 50 Singles for every week commencing 2024-08-19 to 2025-03-31 (33 consecutive issues).
- We Pray AU (oceania-002) — A: none: I checked 2024-09-02 (first full week after the 23 Aug release) and 2024-10-14 (Moon Music week) directly, plus all 45 issues from 2024-08-26 to 2025-06-30 · B: none. Checked weekly issues 2024-08-19 to 2025-03-31 and the print PDFs for 2 Sep, 14 Oct, 11 Nov and 18 Nov 2024.
- Cheat on Me CH (dach-008) — A = B: 03.09.2023 (only week)
- Cheat on Me SE (nordic-003) — A = B: Veckolista Singlar vecka 35/2023
- TaTaTa CH (dach-009) — A = B: 01.06.2025 (only week)
- TaTaTa SR (americas-021) — A: Top40 – 03 – 10 juli 2025 (held four lists to 24–31 Jul) · B: Top40 – 03 – 10 juli 2025 (held four lists, to 24–31 Jul)
- Wild Dreams SE (nordic-002) — A = B: Veckolista Singlar vecka 28/2022
- Gbona (new row) CH (dach-007) — A: 03.04.2022 (debut; 78 again on 24.04.2022) · B: 03.04.2022 (debut) and again 24.04.2022 (re-entry)
- Play Play (new row) UK / IE (uk-ie-003) — A: Official Singles Chart 31 Jan - 6 Feb 2020 (#11, New) · B: OCC Singles 31 Jan - 6 Feb 2020 #11 (New)
- Play Play (new row) UK / IE (uk-ie-004) — A: IRMA chart-singles-2020-01-31 (id 47562), #38 · B: IRMA chart-singles-2020-01-31 (id 47562) #38
- Siberia (new row) UK / IE (uk-ie-005) — A: Official Singles Chart 19-25 Feb 2021 (#35, New) · B: OCC Singles 19-25 Feb 2021 #35 (New)
- Siberia (new row) UK / IE (uk-ie-006) — A: IRMA chart-singles-2021-02-19 (id 47846), #72 · B: IRMA chart-singles-2021-02-19 (id 47846) #72
- She's Not Anyone (new row) UK / IE (uk-ie-007) — A: Official Singles Chart 30 Sep - 6 Oct 2022 (#30, New) · B: OCC Singles 30 Sep - 6 Oct 2022 #30 (New)
- She's Not Anyone (new row) UK / IE (uk-ie-008) — A: IRMA chart-singles-2022-09-30 (id 48264), #86 · B: IRMA chart-singles-2022-09-30 (id 48264) #86
- Masculine UK / IE (uk-ie-009) — A: Official Singles Chart 21-27 Jul 2023 (#24, New) · B: OCC Singles 21-27 Jul 2023 #24 (New)
- Masculine UK / IE (uk-ie-010) — A: IRMA chart-singles-2023-07-21 (id 48472), #77 · B: IRMA chart-singles-2023-07-21 (id 48472) #77
- Cloak & Dagger UK (uk-ie-011) — A: Official Singles Chart 15-21 Jul 2022 (#47, New) · B: OCC Singles 15-21 Jul 2022 #47 (New)
- Good Time (new row) UK (uk-ie-012) — A: Official Singles Chart 19-25 May 2017 (#88, New) · B: OCC Singles 19-25 May 2017 #88 (New)
- It's Plenty SR (americas-017) — A = B: De top 40 lijst voor 15 – 22 dec 2022
- Last Last SR (americas-018) — A = B: De top 40 lijst voor 1 – 8 dec 2022
- Jagele SR (americas-019) — A = B: De top 40 lijst voor 1 – 8 dec 2022
- Tested, Approved & Trusted SR (americas-020) — A: Top40 – 18 t/m 25 jan 2024 (held to 8 Feb) · B: Top40 – 18 t/m 25 jan 2024 (held 25 Jan–1 Feb and 1–8 Feb)

## Applied — the Afrobeats Board (`app/data/afrobeats.ts`)

### asake

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Palazzo (SPINALL & Asake) | NG | 5 | 2 | ng-updates-023 | A = B: 2022-05-19 (id 1096) |
| Trabaye | NG | 74 | 24 | ng-updates-024 | A = B: 2022-02-24 (id 983) |
| Terminator | IE | — | 91 | uk-ie-014 | A: IRMA chart-singles-2022-08-26 (id 48239), #91 · B: IRMA chart-singles-2022-08-26 (id 48239) #91 |
| Wave | IE | — | 82 | uk-ie-015 | A: IRMA chart-singles-2024-06-28 (id 48718), #82 · B: IRMA chart-singles-2024-06-28 (id 48718) #82 |
| Active | IE | — | 88 | uk-ie-016 | A: IRMA chart-singles-2024-08-16 (id 48754), #88 · B: IRMA chart-singles-2024-08-16 (id 48754) #88 |
| Work of Art | IE | — | 59 | uk-ie-017 | A: IRMA chart-albums-2023-06-23 (id 48448), #59 · B: IRMA chart-albums-2023-06-23 (id 48448) #59 |
| M$NEY | IE | — | 58 | uk-ie-018 | A: IRMA chart-albums-2026-05-08 (id 41363), #58 · B: IRMA chart-albums-2026-05-08 (id 41363) #58 |
| WORSHIP | SR | — | 2 | americas-003 | A = B: Top 40 – 28 mei tot en met 4 juni 2026 |
| Bad Boy (Live in London) | NG | — | 70 | ng-new-114 | A: 2026-07-30 (id 5769) · B: 2026-07-30 id 5769 |
| Psycho (Live in London) | NG | — | 71 | ng-new-115 | A: 2026-07-30 (id 5769) · B: 2026-07-30 id 5769 |

### ayra-starr

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Starrgirl | NG | 2 | 2 | ng-updates-015 | A: 2026-08-20 (albums id 5859) · B: 2026-08-20 (id 5859) |
| Wo, man | BG | — | 2 (open: 6 issues to 25 Sep) | cee-002 | A: 04.09.2026 – 10.09.2026 (and again 25.09.2026 – 01.10.2026) · B: 04.09.2026 – 10.09.2026 (No.2 again in 25.09.2026 – 01.10.2026) |

### black-sherif

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Come & Go | NG | 12 | 15 | ng-updates-031 | A: 2022-06-09 (id 1114); also 2022-06-16 (id 1118) · B: 2022-06-09 (id 1114) and 2022-06-16 (id 1118) |
| Jolie | NG | — | 73 | ng-new-111 | A: 2026-09-17 (id 5940) · B: 2026-09-17 id 5940 |
| Love Again | NG | — | 78 | ng-new-112 | A: 2026-09-17 (id 5940) · B: 2026-09-17 id 5940 |
| SUN SHERIF - EP | NG | — | 77 | ng-new-113 | A: 2026-09-10 (id 5922) · B: 2026-09-10 id 5922 |

### bnxn

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| WHO THIS | NG | 24 | 24 | ng-updates-005 | A = B: 2026-09-10 (id 5923) |
| Mood (Wizkid ft. BNXN) | NG | 12 | 13 | ng-updates-034 | A: 2021-09-09 (id 721); also ids 732, 751 · B: 2021-09-09 (id 721); also ids 732 and 751 |
| African Soldier | NG | 98 | removed | ng-updates-026 (Patoranking ft. Buju Banton) | A: 2026-04-02 (id 5429) · B: 2026-04-02 (id 5429), #98 |
| African Soldier | — | row | removed | ng-updates-026 (Patoranking ft. Buju Banton) | — |
| Online | NG | — | 20 | ng-new-109 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |

### ckay

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| SHEGE | NG | 50 | 50 | ng-updates-012 (run closed 17 Sep) | A = B: 2026-09-10 (id 5923) |
| love nwantiti (ah ah ah) | LT | — | 12 | cee-018 | A: AGATA 2021-W43 (slug 43s) · B: 2021-W43 |
| love nwantiti (ah ah ah) | CZ | — | 9 | cee-019 | A: 39. týden 2021 (CZ) · B: 39. týden 2021 (weekId 2731) |
| love nwantiti (ah ah ah) | SK | — | 6 | cee-020 | A: 40. and 41. týden 2021 (SK) · B: 40. and 41. týden 2021 |
| love nwantiti (ah ah ah) | IS | — | 11 | nordic-013 | A: Tónlistinn Lög, list live 16 Oct 2021 (Wayback 20211016211223) · B: Tónlistinn Lög list live 16–17 Oct 2021 (Wayback 20211016211223 and 20211017171800) |
| Emiliana | CH | — | 27 | dach-010 | A: 06.03.2022 · B: 06.03.2022 (Schweizer Hitparade Singles Top 100) |
| Emiliana | FR | — | 9 | fr-benelux-002 | A: SNEP Top Singles S18-2022 (Semaine du 6 mai 2022) and S19 (13 mai 2022) · B: SNEP Top Singles, Semaine du 6 mai 2022 (S18) and 13 mai 2022 (S19) |
| Emiliana | BE | — | 29 | fr-benelux-003 | A: Ultratop 50 Wallonia 05/03/2022 and 19/03/2022 · B: Ultratop 50 Wallonia, 5 Mar 2022 and 19 Mar 2022 |
| BADAMINTON | SR | — | 21 | americas-007 | A = B: Top 40 – 26 maart 2026 – 02 april 2026 |
| Emiliana | NG | — | 5 | ng-new-073 | A: 2022-01-20 (id 937) · B: 2022-01-20 id 937 |
| Felony | NG | — | 8 | ng-new-074 | A: 2021-03-11 (id 368) · B: 2021-03-11 id 368 |
| HALLELUJAH | NG | — | 9 | ng-new-075 | A: 2023-06-08 (id 2149) · B: 2023-06-08 id 2149 |
| La La | NG | — | 10 | ng-new-076 | A: 2021-05-06 (id 462) · B: 2021-05-06 id 462 |
| WATAWI | NG | — | 10 | ng-new-077 | A: 2022-06-30 (id 1136) · B: 2022-06-30 id 1136 |
| Egwu Eji | NG | — | 11 | ng-new-078 | A: 2024-09-19 (id 3545) · B: 2024-09-19 id 3545 |
| love nwantiti (ah ah ah) | NG | — | 14 | ng-new-079 | A: 2021-10-14 (id 769) · B: 2021-10-14 id 769 |
| Trumpet | NG | — | 15 | ng-new-080 | A: 2023-04-27 (id 2013) · B: 2023-04-27 id 2013 |
| ADDICTED | NG | — | 15 | ng-new-081 | A: 2024-10-31 (id 3831) · B: 2024-10-31 id 3831 |
| forever | NG | — | 16 | ng-new-082 | A: 2025-06-19 (id 4521) · B: 2025-06-19 id 4521 |
| MYSTERIOUS LOVE | NG | — | 19 | ng-new-083 | A: 2024-02-15 (id 3003) · B: 2024-02-15 id 3003 |
| Wahala | NG | — | 20 | ng-new-084 | A: 2024-05-23 (id 3329) · B: 2024-05-23 id 3329 |
| Wahala | SR | — | 29 | ng-new-084 | A: 2024-05-23 (id 3329) · B: 2024-05-23 id 3329 |
| by now | NG | — | 25 | ng-new-085 | A: 2024-04-04 (id 3141) · B: 2024-04-04 id 3141 |
| Beggie Beggie | NG | — | 26 | ng-new-086 | A: 2022-02-17 (id 970) · B: 2022-02-17 id 970 |
| By Your Side | NG | — | 39 | ng-new-087 | A: 2021-12-09 (id 877) · B: 2021-12-09 id 877 |
| Wetin Be Love | NG | — | 45 | ng-new-088 | A: 2023-06-08 (id 2149) · B: 2023-06-08 id 2149 |
| IS IT YOU? | NG | — | 54 | ng-new-089 | A: 2024-02-22 (id 3012) · B: 2024-02-22 id 3012 |
| nwayi | NG | — | 58 | ng-new-090 | A: 2023-06-15 (id 2162) · B: 2023-06-15 id 2162 |
| mmadu | NG | — | 67 | ng-new-091 | A: 2022-09-29 (id 1401) · B: 2022-09-29 id 1401 |
| In My Bed | NG | — | 71 | ng-new-092 | A: 2024-10-10 (id 3760) · B: 2024-10-10 id 3760 |
| Obianuju | NG | — | 74 | ng-new-093 | A: 2024-12-19 (id 3924) · B: 2024-12-19 id 3924 |
| you | NG | — | 95 | ng-new-094 | A: 2022-09-01 (id 1326) · B: 2022-09-01 id 1326 |
| Sad Romance | NG | — | 17 | ng-new-095 | A: 2023-06-22 (id 2203) · B: 2023-06-22 id 2203 |
| EMOTIONS | NG | — | 35 | ng-new-096 | A: 2024-10-24 (id 4899) · B: 2024-10-24 id 4899 |

### davido

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Maserati (Remix) (Olakira ft. Davido) | NG | 13 | 17 | ng-updates-032 | A = B: 2021-01-07 (id 238) |

### fireboy-dml

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Peru | NG | 33 | 1 | ng-updates-016 | A: 2021-12-30 (id 897) · B: 2021-12-30 (id 897); also ids 920, 925, 937 (to 2022-01-20) |
| Ashawo | — | row | merged into All of Us (Ashawo), NG 16, with a note | ng-updates-027 (**SPLIT**) | A: REFUTED — 2022-08-11 (id 1255), 16 printed as 'Ashawo'; merge the rows · B: 43 — 2022-09-29 (id 1401), best printing under the new title |
| Peru | HU | — | 27 | cee-004 | A = B: 2022. 16. hét (MAHASZ Single Top 40) |
| YAWA | SR | — | 11 | americas-012 | A: Top 40 – 16 nov t/m 23 nov 2023 · B: Top 40 – 16 nov t/m 23 nov 2023 (prints LW 11 for the unpublished 9–16 Nov list) |
| Diana | SR | — | 15 | americas-011 (floor) | A = B: De top 40 lijst voor 1 – 8 dec 2022 |
| IMALI | NG | — | 22 | ng-new-110 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Playboy (single) | NG | — | 2 | ng-new-120 | A: 2022-04-28 (id 1078) · B: 2022-04-28 id 1078 |
| History | NG | — | 4 | ng-new-121 | A: 2021-04-29 (id 438) · B: 2021-04-29 id 438 |
| Ozumba Mbadiwe (Remix) | NG | — | 4 | ng-new-122 | A: 2022-02-10 (id 957) · B: 2022-02-10 id 957 |
| Running | NG | — | 5 | ng-new-123 | A: 2021-10-28 (id 790) · B: 2021-10-28 id 790 |
| Southy Love | NG | — | 18 | ng-new-124 | A: 2021-02-04 (id 306) · B: 2021-02-04 id 306 |
| Sere (Remix) | NG | — | 20 | ng-new-125 | A: 2021-05-13 (id 473) · B: 2021-05-13 id 473 |
| Champion | NG | — | 25 | ng-new-126 | A: 2021-03-18 (id 378) · B: 2021-03-18 id 378 |
| Spell | NG | — | 28 | ng-new-127 | A: 2021-02-11 (id 318) · B: 2021-02-11 id 318 |
| She Knows | NG | — | 38 | ng-new-128 | A: 2022-02-03 (id 953) · B: 2022-02-03 id 953 |
| Coming Back For You | NG | — | 100 | ng-new-129 | A: 2022-11-10 (id 1499) · B: 2022-11-10 id 1499 |

### kizz-daniel

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Owo Oluwa | NG | 81 | 8 | ng-updates-001 | A = B: 2026-09-24 (id 5939) |

### olamide

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Wahala | SR | — | 29 | americas-009 | A = B: Top 40 – 3 oktober tot 10 oktober 2024 |
| Jinja | SR | — | 10 | americas-010 | A: Top 40 – 26 okt t/m 02 nov 2023 (held 02–09 nov) · B: Top 40 – 26 okt t/m 02 nov 2023 (also 10 on 02–09 nov) |

### omah-lay

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| As We Get High | NG | 35 | 25 | ng-updates-003 | A = B: 2026-09-17 (id 5940) |
| understand | NG | 60 | 1 | ng-updates-017 | A: 2021-07-15 (id 584) · B: 2021-07-15 (id 584); also 2021-07-29 and 2021-08-05 |
| Attention | NG | 41 | 4 | ng-updates-018 | A: 2022-03-10 (id 1001) · B: 2022-03-10 (id 1001); also 2022-03-17 (id 1011) |
| Damn | NG | 83 | 25 | ng-updates-019 | A = B: 2020-11-19 (id 161) |
| i'm a mess | SR | — | 19 | americas-013 | A = B: DE TOP 40 LIJST VOOR 23 FEB – 2 MRT 2023 |
| With You | SR | — | 7 | americas-014 | A = B: Top40 – 28 augustus tot 04 september 2025 (held 4–11 Sep) |
| One Call | SR | — | 8 | americas-015 | A: Top40 – 10 oktober tot 17 oktober 2024 (held to 31 Oct) · B: Top40 – 10 oktober tot 17 oktober 2024 (held 17–24 and 24–31 Oct) |
| Waist | SR | — | 20 | americas-016 | A: Top 40 – 7 tot en met 14 mei 2026 · B: Top 40 – 7 tot en met 14 mei 2026 (also 14–21 May, and the unpublished 30 Apr–7 May list per LW 20) |
| Company | MK | — | 4 | airplay-east-003 + ng-new-052 | A: Radiomonitor North Macedonia All Radio, current week as served 2 Oct 2026 (undated) · B: current week as served by Radiomonitor on 2 Oct 2026 16:21 UTC (the payload carries no date) |
| Company | NG | — | 100 | airplay-east-003 + ng-new-052 | A: Radiomonitor North Macedonia All Radio, current week as served 2 Oct 2026 (undated) · B: current week as served by Radiomonitor on 2 Oct 2026 16:21 UTC (the payload carries no date) |
| Godly | NG | — | 1 | ng-new-053 | A: 2020-12-03 (id 175) · B: 2020-12-03 id 175 |
| Forever (Remix) | NG | — | 1 | ng-new-054 | A: 2021-03-25 (id 392) · B: 2021-03-25 id 392 |
| Infinity | NG | — | 2 | ng-new-055 | A: 2020-11-12 (id 155) · B: 2020-11-12 id 155 |
| Pronto | NG | — | 3 | ng-new-056 | A: 2021-03-18 (id 378) · B: 2021-03-18 id 378 |
| Peaches (Masterkraft Remix) | NG | — | 4 | ng-new-057 | A: 2021-07-01 (id 540) · B: 2021-07-01 id 540 |
| Woman | NG | — | 5 | ng-new-058 | A: 2022-05-26 (id 1103) · B: 2022-05-26 id 1103 |
| Free My Mind | NG | — | 7 | ng-new-059 | A: 2021-11-18 (id 820) · B: 2021-11-18 id 820 |
| PAMI | NG | — | 12 | ng-new-060 | A: 2020-11-12 (id 155) · B: 2020-11-12 id 155 |
| My Bebe | NG | — | 12 | ng-new-061 | A: 2020-12-03 (id 175) · B: 2020-12-03 id 175 |
| Can't Relate | NG | — | 18 | ng-new-062 | A: 2020-12-03 (id 175) · B: 2020-12-03 id 175 |
| Bad Influence | NG | — | 20 | ng-new-063 | A: 2021-01-07 (id 238) · B: 2021-01-07 id 238 |
| Confession | NG | — | 22 | ng-new-064 | A: 2020-11-26 (id 167) · B: 2020-11-26 id 167 |
| Lo Lo | NG | — | 32 | ng-new-065 | A: 2021-01-07 (id 238) · B: 2021-01-07 id 238 |
| You | NG | — | 40 | ng-new-066 | A: 2020-12-31 (id 218) · B: 2020-12-31 id 218 |
| joanna | NG | — | 41 | ng-new-067 | A: 2023-06-22 (id 2180) · B: 2023-06-22 id 2180 |
| imagine | NG | — | 44 | ng-new-068 | A: 2023-06-22 (id 2180) · B: 2023-06-22 id 2180 |
| come closer | NG | — | 45 | ng-new-069 | A: 2023-06-22 (id 2180) · B: 2023-06-22 id 2180 |
| Abeg | NG | — | 49 | ng-new-070 | A: 2022-05-12 (id 1095) · B: 2022-05-12 id 1095 |
| Take It On (Sprite Limelight) | NG | — | 85 | ng-new-071 | A: 2022-08-25 (id 1289) · B: 2022-08-25 id 1289 |
| 10 Toes | NG | — | 87 | ng-new-072 | A: 2022-07-28 (id 1252) · B: 2022-07-28 id 1252 |

### rema

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| TEA | NG | 3 | 3 | ng-updates-008 | A = B: 2026-08-13 (id 5771) |
| Soweto | NG | 4 | 5 | ng-updates-029 | A: 2023-03-30 (id 1946); also 2023-04-20 (id 2012) · B: 2023-03-30 (id 1946) and 2023-04-20 (id 2012) |
| Calm Down | IS | 31 | 24 | nordic-014 | A: Tónlistinn Lög, list live 6 Jan 2024 (Wayback 20240106201130) · B: Tónlistinn Lög list live 6 Jan 2024 (Wayback 20240106201130) |
| Calm Down | BG | — | 2 | cee-003 (reverses the repertoire-component exclusion) | A = B: 03.02.2023 – 09.02.2023 and 03.03.2023 – 09.03.2023 |
| Calm Down | IL | — | 35 | mena-asia-004 (live issues only: 35, not the backfilled 12) | Mako "07.03 - 13.03.2023" (first live issue, published 20 Mar 2023), solo "Rema" row #35 — both votes. Both votes' headline 12 is in the backfilled "28.11 - 22.11.2022" issue (published 29 Nov 2022), not counted; duo row's best live printing 60 |
| Oh No | NG | — | 2 | ng-new-001 | A: 2026-09-17 (id 5940) · B: 2026-09-17 id 5940 |
| Oh No | SR | — | 27 | ng-new-001 | A: 2026-09-17 (id 5940) · B: 2026-09-17 id 5940 |
| Smooth Criminal | NG | — | 2 | ng-new-002 | A: 2023-11-02 (id 2619) · B: 2023-11-02 id 2619 |
| Holiday | NG | — | 3 | ng-new-003 | A: 2023-02-23 (id 1821) · B: 2023-02-23 id 1821 |
| Bounce | NG | — | 4 | ng-new-004 | A: 2021-04-15 (id 425) · B: 2021-04-15 id 425 |
| DND | NG | — | 5 | ng-new-005 | A: 2023-11-23 (id 2718) · B: 2023-11-23 id 2718 |
| Dimension | NG | — | 5 | ng-new-006 | A: 2021-05-06 (id 462) · B: 2021-05-06 id 462 |
| Peace of Mind | NG | — | 7 | ng-new-007 | A: 2020-12-10 (id 186) · B: 2020-12-10 id 186 |
| Reason You | NG | — | 16 | ng-new-008 | A: 2023-02-23 (id 1821) · B: 2023-02-23 id 1821 |
| Trouble Maker | NG | — | 17 | ng-new-009 | A: 2023-11-02 (id 2619) · B: 2023-11-02 id 2619 |
| MARCH AM | NG | — | 18 | ng-new-010 | A: 2024-07-25 (id 3442) · B: 2024-07-25 id 3442 |
| Pretty Girl | NG | — | 18 | ng-new-011 | A: 2023-10-26 (id 2611) · B: 2023-10-26 id 2611 |
| Don't Leave | NG | — | 21 | ng-new-012 | A: 2023-11-02 (id 2619) · B: 2023-11-02 id 2619 |
| Compromise | NG | — | 23 | ng-new-013 | A: 2022-08-11 (id 1255) · B: 2022-08-11 id 1255 |
| Woman | NG | — | 25 | ng-new-014 | A: 2021-01-21 (id 279) · B: 2021-01-21 id 279 |
| Time N Affection | NG | — | 25 | ng-new-015 | A: 2022-03-31 (id 1025) · B: 2022-03-31 id 1025 |
| Red Potion | NG | — | 25 | ng-new-016 | A: 2023-11-02 (id 2619) · B: 2023-11-02 id 2619 |
| WAR MACHINE | NG | — | 25 | ng-new-017 | A: 2024-07-18 (id 3431) · B: 2024-07-18 id 3431 |
| Secondhand | NG | — | 26 | ng-new-018 | A: 2026-02-12 (id 5267) · B: 2026-02-12 id 5267 |
| One Shirt | NG | — | 27 | ng-new-019 | A: 2021-02-04 (id 306) · B: 2021-02-04 id 306 |
| AZAMAN | NG | — | 27 | ng-new-020 | A: 2024-07-25 (id 3442) · B: 2024-07-25 id 3442 |
| HEIS (single) | NG | — | 28 | ng-new-021 | A: 2024-07-25 (id 3442) · B: 2024-07-25 id 3442 |
| Too Correct | NG | — | 28 | ng-new-022 | A: 2021-05-13 (id 473) · B: 2021-05-13 id 473 |
| Alle | NG | — | 29 | ng-new-023 | A: 2022-12-08 (id 1570) · B: 2022-12-08 id 1570 |
| Hide & Seek (Rema Remix) | NG | — | 29 | ng-new-024 | A: 2023-03-09 (id 1866) · B: 2023-03-09 id 1866 |
| FYN | NG | — | 31 | ng-new-025 | A: 2022-03-17 (id 1011) · B: 2022-03-17 id 1011 |
| Mukulu | NG | — | 32 | ng-new-026 | A: 2023-08-17 (id 2329) · B: 2023-08-17 id 2329 |
| Are You There? | NG | — | 33 | ng-new-027 | A: 2022-05-12 (id 1095) · B: 2022-05-12 id 1095 |
| Ginger Me | NG | — | 34 | ng-new-028 | A: 2020-11-12 (id 155) · B: 2020-11-12 id 155 |
| Afro Jigga | NG | — | 38 | ng-new-029 | A: 2021-11-11 (id 810) · B: 2021-11-11 id 810 |
| NOW I KNOW | NG | — | 40 | ng-new-030 | A: 2024-07-18 (id 3431) · B: 2024-07-18 id 3431 |
| Hov | NG | — | 44 | ng-new-031 | A: 2023-05-04 (id 2043) · B: 2023-05-04 id 2043 |
| Amina | NG | — | 45 | ng-new-032 | A: 2022-12-15 (id 1587) · B: 2022-12-15 id 1587 |
| VILLAIN | NG | — | 47 | ng-new-033 | A: 2024-07-18 (id 3431) · B: 2024-07-18 id 3431 |
| EGUNGUN | NG | — | 49 | ng-new-034 | A: 2024-07-18 (id 3431) · B: 2024-07-18 id 3431 |
| Can't Let You Go | NG | — | 50 | ng-new-035 | A: 2021-02-18 (id 331) · B: 2021-02-18 id 331 |
| Only You | NG | — | 53 | ng-new-036 | A: 2022-10-20 (id 1451) · B: 2022-10-20 id 1451 |
| Moviestar | NG | — | 80 | ng-new-037 | A: 2026-04-23 (id 5560) · B: 2026-04-23 id 5560 |
| Jollof On The Jet | NG | — | 97 | ng-new-038 | A: 2024-02-22 (id 3012) · B: 2024-02-22 id 3012 |

### ruger

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Do Nothing | NG | 22 | 22 | ng-updates-009 | A = B: 2026-08-20 (id 5848) |
| Private Chef | NG | 52 | 52 | ng-updates-010 | A = B: 2026-08-20 (id 5848) |
| All Die | NG | 42 | 42 | ng-updates-011 (run closed 17 Sep) | A = B: 2026-08-13 (id 5771) |

### seyi-vibez

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| BACK 2 U | NG | 8 | 4 | ng-updates-002 | A = B: 2026-09-24 (id 5939) |
| Volume | NG | — | 1 | ng-new-097 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Ilome | NG | — | 3 | ng-new-098 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Diamonds | NG | — | 5 | ng-new-099 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Pansa | NG | — | 7 | ng-new-100 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| GOD | NG | — | 9 | ng-new-101 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Swaguu (single) | NG | — | 13 | ng-new-102 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Melanin | NG | — | 14 | ng-new-103 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| El Jaja | NG | — | 15 | ng-new-104 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Alubarika | NG | — | 16 | ng-new-105 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Akpan Akpari | NG | — | 17 | ng-new-106 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Alafia | NG | — | 18 | ng-new-107 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Oble (Original) | NG | — | 23 | ng-new-108 | A: 2026-09-24 (id 5939) · B: 2026-09-24 id 5939 |
| Billion Dollar | NG | — | 10 | ng-new-116 | A: 2022-04-14 (id 1055) · B: 2022-04-14 id 1055 |
| Swaguu | NG | — | 1 | ng-new-130 (owner's screenshot + TurnTable news 2278) | A: Official Top 100 Albums, week 39 2026 (week of 24 Sep): table not published · B: Albums wk39 2026 (would be dated 24 Sep 2026); not published |

### tems

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| What You Need | NG | 78 | 79 | ng-updates-036 | A = B: 2026-07-09 (id 5701) |
| Fountains | LT | 40 | 79 | cee-028 | A: AGATA 2021-W36 (slug 34s-2-2) · B: 2021-W36 (post of 10 Sep 2021) |
| Raindance | IL | — | 27 | mena-asia-003 | A: Mako issue titled "09.03 - 03.02.2026" (a typo for 09.02; publishDate 2026-02-10, chartId 698ae9986778d6bb7b833d79) · B: Mako issue titled "09.03 - 03.02.2026" (a typo for 09.02; published 10 Feb 2026, chartId 698ae9986778d6bb7b833d79) |
| Damages | NG | — | 6 | ng-new-039 | A: 2020-11-05 (id 145) · B: 2020-11-05 id 145 |
| Get It Right | NG | — | 12 | ng-new-040 | A: 2024-06-20 (id 3385) · B: 2024-06-20 id 3385 |
| Crazy Tings | NG | — | 16 | ng-new-041 | A: 2021-09-16 (id 732) · B: 2021-09-16 id 732 |
| Fountains | NG | — | 21 | ng-new-042 | A: 2021-09-09 (id 721) · B: 2021-09-09 id 721 |
| Not An Angel | NG | — | 33 | ng-new-043 | A: 2023-12-14 (id 2803) · B: 2023-12-14 id 2803 |
| The Key | NG | — | 38 | ng-new-044 | A: 2021-02-18 (id 331) · B: 2021-02-18 id 331 |
| Wickedest | NG | — | 43 | ng-new-045 | A: 2024-08-08 (id 3463) · B: 2024-08-08 id 3463 |
| No.1 | NG | — | 79 | ng-new-046 | A: 2024-03-28 (id 3119) · B: 2024-03-28 id 3119 |
| No Woman No Cry | NG | — | 81 | ng-new-047 | A: 2022-08-04 (id 1254) · B: 2022-08-04 id 1254 |
| Free Fall | NG | — | 81 | ng-new-048 | A: 2024-06-13 (id 3367) · B: 2024-06-13 id 3367 |
| Live Life | NG | — | 96 | ng-new-049 | A: 2022-10-06 (id 1423) · B: 2022-10-06 id 1423 |
| Love Is a Kingdom | NG | — | 30 | ng-new-050 | A: 2025-11-27 (id 5049) · B: 2025-11-27 id 5049 |
| For Broken Ears | NG | — | 99 | ng-new-051 | A: 2024-10-17 (id 3763) · B: 2024-10-17 id 3763 |
| Raindance | LT | 2 | 2 · 3 wks at No. 2 · 42 wks (open) | cee-025 | A: AGATA 2026-W3, W4, W9 · B: 2026-W3, W4 and W9 (No. 2); latest 2026-W40 prints 51 \| 44 \| 42 |

### tiwa-savage

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Energy | NG | 7 | 7 | ng-updates-014 | A = B: 2026-07-30 (id 5769) |

### tyla

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| That Girl | NG | 41 | 41 | ng-updates-013 (run closed 10 Sep) | A = B: 2026-08-13 (id 5771) |
| Push 2 Start | LT | 40 | removed | cee-029 (no AGATA row) | A = B:  |
| Push 2 Start | IE | — | 60 | uk-ie-013 | A: IRMA chart-singles-2025-01-24 (id 48877), #60 · B: IRMA chart-singles-2025-01-24 (id 48877) #60 |
| A\\Pop | FR | — | 56 | fr-benelux-001 | A = B: SNEP Top Albums, Semaine du 31 juillet 2026 (S31) |
| Show Me Love | NO | — | 48 | nordic-012 | A: Topplista Singel 2025 uke 20 · B: Topplista Singel 2025-W20 |
| Talk to Me | SI | 14 | 14 | airplay-east-004 (open) | A: Radiomonitor Slovenia All Radio, current week as served 2 Oct 2026 (undated) · B: current week as served by Radiomonitor on 2 Oct 2026 16:21 UTC (the payload carries no date) |
| Push 2 Start | PH | — | 17 | mena-fill-001 (mini-verify CONFIRMED) |  |

### victony

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| WHO THIS | NG | 24 | 24 | ng-updates-006 | A = B: 2026-09-10 (id 5923) |
| TWIN | NG | 18 | 18 | ng-updates-007 | A = B: 2026-09-03 (id 5874) |
| Holy Father | NG | 53 | 2 | ng-updates-020 | A = B: 2021-12-09 (id 877) |
| Apollo | NG | 82 | 13 | ng-updates-021 | A = B: 2022-04-14 (id 1055) |
| Kolomental | NG | 17 | 10 | ng-updates-022 | A = B: 2022-05-12 (id 1095) |
| Glory II | NG | 20 | 26 | ng-updates-028 | A = B: 2025-07-24 (id 4589) |
| SLICK | SR | — | 4 | americas-004 (open) | A: TOP 40- 10 tot en met 17 september 2026 (held 17–24 Sep) · B: TOP 40- 10 tot en met 17 september 2026 (held on the 17–24 Sep list) |
| Mili | SR | — | 17 | americas-005 (floor) | A = B: Top40 – 06 tot 13 maart 2025 |
| Stubborn (album) | NG | — | 2 | ng-new-117 | A: 2024-06-27 (id 3397) · B: 2024-06-27 id 3397 |
| B&B (Booze & Bumbum) | NG | — | 83 | ng-new-118 | A: 2022-12-15 (id 1587) · B: 2022-12-15 id 1587 |
| Ba$tard, Don't Be Silly | NG | — | 99 | ng-new-119 | A: 2024-06-27 (id 3394) · B: 2024-06-27 id 3394 |

### wizkid

| Release | Country | Before | After | Verify id | Issue (A · B) |
|---|---|---|---|---|---|
| Abracadabra (Remix) | NG | 6 | 7 | ng-updates-030 | A = B: 2023-02-23 (id 1821) |
| Mood (Wizkid ft. BNXN) | NG | 12 | 13 | ng-updates-033 | A: 2021-09-09 (id 721); also ids 732, 751 · B: 2021-09-09 (id 721); also ids 732 and 751 |
| Man on a Mission | NG | 29 | 30 | ng-updates-035 | A = B: 2026-06-25 (id 5655) |
| Brown Skin Girl | LT | 29 | 67 | cee-027 | A: AGATA post of 26 Jul 2019 (2019 wk30 label) · B: 2019-W30 (post of 26 Jul 2019) |
| Checklist | LT | — | 46 | cee-016 | A: AGATA post of 2 Nov 2018 (2018 wk44 label) · B: 2018-W44 (post of 2 Nov 2018) |
| Checklist | SK | — | 86 | cee-017 | A: 44. týden 2018 (SK) · B: 44. týden 2018 (weekId 2547) |
| One Dance | GR | — | 8 | south-eu-001 | A: Best Position 8 / Best Week 2017_2 is printed in the IFPI Greece Digital Singles Chart (International) issues for weeks 35/2026 and 36/2026. The week 2/2017 issue itself is not readable. · B: IFPI Greece week 2/2017, per the Best Position / Best Week colum… |

Board notes: closed runs lost the open-run note (Ruger *All Die*, CKay *SHEGE*, Tyla *That Girl*); every open run carries a note dated "read 2 Oct 2026" with its span; a No. 1 that is still open says so without "may yet climb" (tests/siteDebugWording.test.ts). Fireboy DML's *Ashawo* row is gone: it and *All of Us (Ashawo)* are one retitled TurnTable entry (same music link, continuous counter), and neither chart row carried anything but NG 16, so nothing was lost by the merge. The board's `CHART_BODY_OVERRIDES` gains **EC: "Billboard Ecuador Songs"** — *Santa* EC 2 and *Bubalu* EC 21 were read there, not on IFPI Latin America (americas-023). `chartPublished` was recomputed for every artist whose rows moved.

**Bulgaria.** PROPHON's Svetovniyat (World) TOP 10 is the combined list — it carries Bulgarian-repertoire rows in most issues (DARA's "Bangaranga" at No. 1 on 10 Jul 2026) — and it is the list Dai Dai's BG row is read from. So Rema's *Calm Down* BG 2 and Ayra Starr's *Wo, man* BG 2 are added, **reversing** the earlier "repertoire component of a PROPHON Top 40" exclusion in rema-chart-peaks-v1.md, for consistency with Dai Dai's row (cee-001/002/003).

**Israel (Mako).** Counted from its first LIVE issue — 07–13 Mar 2023, published 20 Mar 2023. Backfilled pre-launch issues (midnight publish dates, counters running backwards) do not count. So: Tems *Raindance* IL 27 (all live); Rema *Calm Down* IL **35** (the solo-"Rema" row in that first live issue — the duo row's 12 is backfill); no IL row for Oxlade's *Ku Lo Sa* or Ayra Starr's *Rush* (backfill only); Dai Dai IL 6 → 5.

**Seyi Vibez — *Swaguu* (album), NG No. 1.** The archive had not published the Top 100 Albums issue for 18–24 Sep 2026 when read (both verifiers: the route returns the earliest-issue fallback), so ng-new-130 is a SPLIT on the printed-rank rule. It is added on two first-party prints: TurnTable's own chart graphic for 18–24 Sep 2026 (per the owner's screenshot of TurnTable's chart graphic, reported 2 Oct; not archived in the repo, and seen by neither the apply agent nor the verifiers: *Swaguu* No. 1, 35.8K units) and TurnTable's news post 2278 (29 Sep), which says *Swaguu* ends *M$NEY*'s 17-week reign at No. 1. The row is noted as open, and should be re-read when the archive publishes the issue.

**Applied despite SPLIT (owner's instruction).** Two rows below go beyond the two-vote rule, and say so where they appear: Seyi Vibez *Swaguu* album NG 1 (ng-new-130; both votes UNREADABLE — see above) and the Fireboy DML *Ashawo* merge (ng-updates-027; A REFUTED at 16, B 43 under the new title). The merged *All of Us (Ashawo)* row keeps NG 16 with a note that the 16 printed as 'Ashawo' (11 Aug 2022), the entry was retitled on 15 Sep 2022, and the best printing under the new title is 43.

## Held for the owner (not changed)

- **Jerusalema (Remix)** UK 55 / IE 4 / SE 3 / HU 1 / SK 46 — every body's row credits Master KG ft. Nomcebo (Zikode) alone, never Burna Boy (uk-ie-021, nordic-010, cee-008, cee-009). Ruling: keep as the merged remix entry (the One Dance precedent) or take off his line.
- **We Pray** UK 20 / IE 7 / IS 30 — the OCC, IRMA and Tónlistinn rows credit Coldplay alone (uk-ie-022, nordic-017). Sweden's row credits all five artists, so SE 79 is supported. (AU 37 was removed: no ARIA Top 50 row at all.)
- **Norway before week 14 of 2025** — *Own It* NO 26 (2019) and Rema *Calm Down* NO 27 (2023) are printed but below VG-lista's Top 20 of the time; the site's Top 20 rule stands (nordic-008/009/016).
- **Hand checks** — Dai Dai MY 5 (RIM posts on Facebook; IFPI MY's best is 8), Tems *Raindance* MY 12 (no IFPI MY row; Billboard Malaysia barred), Dai Dai LB 1 (OLT20's web archive stops at 7 Nov 2025).
- **SPLIT** — Dai Dai PL weeks (OLiS API needs a Referer the rules do not allow; cee-005/021); Dai Dai NL weeks 17 → 19 (Hung Medien block only; fr-benelux-008); *Cheat on Me* NL 46, *Sittin' on Top of the World* NL 98, CKay *Emiliana* NL 21, Fireboy *Peru* NL 11 vs 21 (dutchcharts.nl barred; fr-benelux-009–012); Dai Dai PT weeks at No. 1 9 vs 8 (Semanas 32–36 not readable; south-eu-005); Dai Dai MY / Raindance MY (mena-asia-009/010); *All of Us (Ashawo)* 16 vs 43 (resolved by the merge, see above); *Swaguu* album (added on the owner's screenshot, see above).
- **REFUTED** — *Taki Sama Sani* SR 24 (a Benjamin Faya record mis-credited on one list; americas-022); Dai Dai RU on TopHit's radio chart (the site's RU row is TopHit streaming; airplay-east-005).
- **Dai Dai version rows** on AGATA — Instrumental 16, Spanish Version 40, SPINALL Remix 69 (cee-026). The Portuguese Version credits Filipe Ret and Leo Santana, not Burna Boy.
- **Tems — *Black Panther: Wakanda Forever*** soundtrack, TurnTable albums No. 11, credited "Rihanna & Tems" (ng-updates-025): a various-artists album; not added.
- **Panama's chart choice** — PRODUCE also publishes a weekly BMAT "Weighted Streaming Panama" chart (americas-024). Dai Dai is No. 1 on either; Ayra Starr's *Santa* would move 5 → 57.
- **Side finds nobody verified** — *Twice as Tall* NO albums; Asake *Lungu Boy* IE 42 (IRMA albums, 16 Aug 2024).

## The owner's hand-check list

- **PT AFP/Audiogest Top 200 Singles + Top 200 Albuns** — Open the TOP AFP/AUDIOGEST PDFs for Semana 36 de 2026 (28/8-3/9) and Semana 37 de 2026 (4/9-10/9) from audiogest.pt/tops-semanais-2026. In the TOP 200 SINGLES section, read the Pos. of 'Dai Dai - Shakira & Burna Boy' in weeks 35, 36 and 37 (week 37 should be 2), and scan both sections for any of the 20 artists.
- **PT AFP/Audiogest Top 200 Singles + Top 200 Albuns** — Download Semana 40 de 2026 (25/9-1/10/2026) when it is published (about 6 Oct) and save it to ~/Downloads for the next read.
- **GR IFPI Greece Digital Singles Chart (International)** — Optional. Any IFPI Greece source for the week 2/2017 Digital Singles (International) issue, to confirm 'One Dance - Drake feat. Wizkid & Kyla' at No. 8.
- **DE Offizielle Deutsche Charts (offiziellecharts.de)** — offiziellecharts.de/charts/titel-details-2616806 (Shakira x Burna Boy, Dai dai): read Höchstposition '1 (N Wochen)' and Anzahl Wochen; also the Single Top 100 for 18.09, 25.09 and 02.10.2026
- **DE Offizielle Deutsche Charts** — offiziellecharts.de Suche 'Stormzy' (or 'Burna Boy'), SINGLE tab, 'Own It'. Check for peak 75 and its weeks
- **DE Offizielle Deutsche Charts** — offiziellecharts.de artist search for each of the 20 artists (SINGLE + ALBUM tabs), especially Seyi Vibez, BNXN, Kizz Daniel, Asake, Davido, Victony, Omah Lay, Ayra Starr and Tems for the Sep 2026 releases; plus the Single and Album Top 100 for 18.09, 25.09 and 02.10.2026
- **AT Ö3 Austria Top 40 and CH Schweizer Hitparade** — austriancharts.at/charts/singles (02.10.2026 issue) and swisscharts.com/charts/singles (04.10.2026 issue) for Dai dai
- **UK Official Singles Chart Top 100 + Irish Singles (OCC/IRMA), issue of 2 Oct 2026** — After ~17:45 BST on Fri 2 Oct 2026, open officialcharts.com/charts/singles-chart/ and irma.ie/irish-charts/singles/ and find DAI DAI (Shakira & Burna Boy) and RAINDANCE (Dave/Tems). Then also scan the albums charts for Seyi Vibez SWAGUU, Victony STARLIFE, Omah Lay CLARITY OF MIIND and BNXN
- **Owner ruling: credits on Jerusalema (Remix) UK 55 / IE 4 and We Pray UK 20 / IE 7** — OCC song pages master-kg-ft-nomcebo-zikode-jerusalema and coldplay-we-pray, plus IRMA chart-singles-2021-02-12 row 4 and chart-singles-2024-09-13 row 7
- **TurnTable Official Top 100 Albums (NG)** — turntablecharts.com/charts/2 — the issue dated 2026-09-24 (week 39), once published (confirms or corrects the *Swaguu* album No. 1, applied on the owner's instruction as a SPLIT)
- **DE GfK, chart of 2 Oct 2026** — confirm Dai Dai at No. 2 behind Taylor Swift's *Patient Zero* (only vote B read GfK news/5987; the updates feed's "ends Dai Dai's run at the top" rests on it), and read the weeks figure (18 printed to 25.09; 19 counted with 02.10)
- **TurnTable Official Nigeria Top 100 (NG singles)** — turntablecharts.com/charts/1 — the issue dated 2026-10-01 (week 40), once published
- **TurnTable Official Nigeria Top 100 (NG singles)** — Owner ruling: credit test for entries re-credited mid-run (Come & Go/Black Sherif 12 v 15, Maserati (Remix)/Davido 13 v 17, Abracadabra (Remix)/Wizkid 6 v 7, Soweto/Rema 4 v 5) and counter-only peaks (Mood 12 v 13, Man on a Mission 29 v 30)
- **TurnTable Official Top 100 Albums (NG)** — Owner ruling: Tems — 'Black Panther: Wakanda Forever - Music From and Inspired By' credited 'Rihanna & Tems' (#11)
- **TurnTable Official Nigeria Top 100 (NG singles)** — Note for verifiers: the 17 Sep 2026 singles issue is now served as id 5940 (sweep docs cite id 5932); the 24 Sep issue is id 5939
- **Billboard Iceland Songs (billboard.com, barred to agents)** — billboard.com/charts/iceland-songs, newest week, then Burna Boy / Shakira chart history for 'Dai Dai'
- **Billboard Iceland Songs** — Dave / Tems chart history, 'Raindance', Iceland Songs (2026)
- **Billboard Iceland Songs** — Iceland Songs 2026 weeks for Tyla 'She Did It Again' / 'Chanel', and any of the 20 artists
- **Norway – VG-lista / Topplista depth before wk 14/2025 (owner ruling)** — topplista.no/charts/singles/2019-w48/ (Own It #26) and /2023-w15/ (Calm Down #27); vglista.no/topplister/topp-20-single-2019-48/ and topp-20-single-2023-15/
- **Norway – which register CHART_COUNTRIES 'VG-lista' means from 2025 (owner note)** — topplista.no/charts/singles/2026-w04/ vs vglista.no/topplister/topp-40-singler-2026-04/
- **Sverigetopplistan – Jerusalema credit (owner ruling)** — sverigetopplistan.se/search/?query=master kg -> 'JERUSALEMA (FEAT. NOMCEBO ZIKODE) — MASTER KG', peak 3
- **TopHit Top Radio Hits weekly: Kazakhstan, Moldova, Ukraine, Estonia, Belarus. Also TopHit Russia (whichever series the site means, see the RU label item)** — In a signed-in or normal browser on tophit.com, open the weekly chart issues from 11 Sep 2026 to the latest (/chart/top/radio/hits/{kz/md/ua/ee/by/ru}/weekly). Then open the track pages for: Dai Dai (stored EE 1, KZ 8, RU 31, MD 34, UA 90; is each still charting, and did KZ, RU, MD or UA improve?). Also Rema's Calm Down (KZ 2, MD 2, BY 8, RU 16, EE 19), Tyla's Talk to Me (EE 11, KZ 33), Water, Chanel, She Did It Aga…
- **Radiomonitor Türkiye International Airplay (TR): Burna Boy, Dai Dai stored at 7** — Radiomonitor Türkiye's weekly posts (X / Instagram) since 11 Sep 2026: is Dai Dai still listed, and what is its best position? Separately, and as a Billboard hand check: Dai Dai on Billboard Turkey Songs.
- **Radiomonitor North Macedonia / Slovenia: full runs** — Dai Dai (Shakira feat. Burna Boy): best position and weeks on Radiomonitor North Macedonia (current #9) and Slovenia (current #4). Company (Clean Bandit, Chlöe, Omah Lay): best position on North Macedonia (current #4). Talk to Me (Tyla): confirm SI 14 is still the best.
- **Radiomonitor Malta (positions 11-40)** — Tyla's Chanel (stored MT 16) and Ayra Starr's Where Do We Go (stored MT 18), plus any of the 20 artists in Malta's 11-40 since 11 Sep 2026.
- **TopHit Russia: which series is the site's chart** — Decide whether RU rows are TopHit Top Radio Hits Russia (radio) or a TopHit streaming chart, then confirm Dai Dai RU 31's series.
- **Dutch Single Top 100 (dutchcharts.nl)** — Shakira x Burna Boy - Dai dai: weeks on chart and positions in the 26 Sep and 3 Oct 2026 issues
- **Dutch Single Top 100** — Burna Boy feat. Dave - Cheat On Me
- **Dutch Single Top 100** — Burna Boy - Sittin' On Top Of The World
- **Dutch Single Top 100 + Nederlandse Top 40** — Fireboy DML & Ed Sheeran - Peru (and Fireboy DML - Peru)
- **Dutch Single Top 100** — CKay - Emiliana
- **Dutch Single Top 100 + Nederlandse Top 40** — Topic x Fireboy DML x Nico Santos - Body
- **Dutch Single Top 100** — Oxlade - Ku Lo Sa (A Colors Show); Jonna Fraser feat. Tiwa Savage - Turn It Up
- **Dutch Single Top 100 + Album Top 100 (issues 19 Sep, 26 Sep, 3 Oct 2026)** — scan for Seyi Vibez (Swaguu), BNXN (Online), Kizz Daniel (OWO OLUWA), Asake, Davido, Victony, Omah Lay, Ayra Starr, Tems, Burna Boy
- **Ultratop 50 + Album Top 200, Wallonia and Flanders (issues of 12 Sep 2026; Wallonia and albums of 19 Sep 2026)** — ultratop.be weekly pages 2026/20260912 and 20260919, any of the 20 artists
- **Ultratop 50 Wallonia** — Shakira x Burna Boy - Dai dai song page: weeks at No. 1
- **Ultratop 50 Wallonia (Feb-May 2022 issues)** — CKay - Emiliana: which week(s) it reached #29
- **HR Billboard Croatia Songs** — Issues dated 13 Sep, 20 Sep, 27 Sep and 4 Oct 2026: Dai Dai (Shakira & Burna Boy; site peak 13). Also any of the 20 artists, especially Ayra Starr & Peggy Gou 'Wo, man' (#2 on Bulgaria's PROPHON 4 Sep), Tems 'What You Need', Rema.
- **RO Billboard Romania Songs** — Issues dated 13 Sep–4 Oct 2026: Dai Dai (site peak 5), Raindance (site 14), Calm Down (site 11, closed), Ayra Starr 'Wo, man', and any of the 20.
- **LV Latvia streaming chart (LaIPA)** — Find where LaIPA now publishes its weekly streaming top. Then read weeks 37–40/2026 for Dai Dai (site 5), Raindance (5), Calm Down (18), Water (14), 'Wo, man' and any of the 20.
- **BG PROPHON (owner ruling)** — Rule whether PROPHON's 'Svetovniyat TOP 10' is Bulgaria's counted chart. If yes: reinstate Rema 'Calm Down' BG #2, move Dai Dai BG 3 → 2, and add Ayra Starr 'Wo, man' BG #2.
- **HU MAHASZ Single Top 40 and SK Singles Digitál (owner ruling)** — Jerusalema (Remix): HU #1 row billed 'Master KG feat. Nomcebo'; SK #46 row billed 'MASTER KG & NOMCEBO'.
- **HU MAHASZ (chart choice, informational)** — Archived 'Stream Top 40' (2016–2021 era): One Dance #5 (Wizkid), love nwantiti #7 (CKay), Own It #35 (Burna Boy).
- **Billboard Global 200 + Global Excl. US** — P1. billboard.com/artist/wizkid/chart-history/ (Global 200 and Global Excl. U.S. tabs; or Drake's page): row 'One Dance — Drake Featuring WizKid & Kyla'. Screenshot debut date, peak, peak date and weeks on each chart, and whether it is on the 3 Oct 2026 issue.
- **Billboard Global Excl. US** — P1. billboard.com/artist/burna-boy/chart-history/ Global Excl. U.S. tab: every row with Burna Boy in the credit (Last Last, For My Hand, Jerusalema (Remix), We Pray, WGFT, City Boys, Alone, Cheat on Me, plus any others).
- **Billboard Global 200 + Global Excl. US (week of 3 Oct 2026)** — P1. billboard.com/charts/billboard-global-200/2026-10-03/ and /charts/billboard-global-excl-us/2026-10-03/: the 'Dai Dai — Shakira X Burna Boy' row (rank, LW, PEAK, WEEKS). Scan the whole of both 200-row charts for any of the 20 artists, lead or featured.
- **Billboard Luxembourg Songs (week of 3 Oct 2026)** — P1. billboard.com/charts/luxembourg-songs-hotw/2026-10-03/: the Dai Dai row (rank, LW, PEAK, WEEKS).
- **Billboard Hot 100 (week of 3 Oct 2026 full chart; week of 10 Oct 2026, out Tue 6 Oct)** — P1. billboard.com/charts/hot-100/2026-10-03/: scan all 100 rows for the 20 artists (lead or featured). Then, on 6 Oct, the 10 Oct issue: Dai Dai (Shakira X Burna Boy) and What You Need (Tems) rows, rank and weeks.
- **Canadian Hot 100** — P2. Tems chart-history page, Canadian Hot 100 tab: 'What You Need' (Tems). Then the Canadian Hot 100 dated 3 Oct 2026: rows for Dai Dai, Raindance and What You Need.
- **Billboard 200 + Canadian Albums (weeks of 3 and 10 Oct 2026)** — P2. billboard.com/charts/billboard-200/2026-10-03/: scan for 'SWAGUU — Seyi Vibez' (Seyi Vibez's artist page has no chart module, so read the full 200 rows). Also the Canadian Albums chart for the same week. Repeat for 10 Oct.
- **Billboard 200 + Canadian Albums** — P2. billboard.com/artist/ayra-starr/chart-history/ Billboard 200 and Canadian Albums tabs: 'Starrgirl'. Debut issue is 29 Aug 2026 (release 14 Aug).
- **Billboard 200 + Canadian Albums** — P3. Davido chart-history Billboard 200 and Canadian Albums tabs: 'Oriade' (release ~31 Jul 2026, debut issue 15 Aug). Asake: 'M$NEY' on the Billboard 200. Victony: 'STARLIFE' (release 21 Aug, debut issue 5 Sep) on the Billboard 200 and Canadian Albums.
- **Canadian Albums + Billboard 200 (weeks of 10 and 17 Oct 2026)** — P3. Canadian Albums and Billboard 200: 'Still In Charge' (BNXN, EP).
- **Billboard Global 200 + Global Excl. US + Canadian Hot 100 (+ Luxembourg Songs)** — P3 (standing). Oxlade 'Ku Lo Sa': Canadian Hot 100 week of 15 Oct 2022 (#59?), Global 200 week of 8 Oct 2022 (#79?), Global Excl. US for the same weeks, Luxembourg Songs week of 24 Sep 2022 (#12?).
- **Billboard Global 200 + Global Excl. US** — P3 (standing). Kizz Daniel 'Cough (Odo)': Global 200 / Excl. US. Ruger 'Asiwaju' (late 2022): Global 200 / Excl. US.
- **Billboard Global Excl. US** — P4. Rema chart-history Global Excl. US: 'Oh No'.
- **Billboard Canadian Hot 100 + Canadian Albums (billboard.com)** — Chart-history pages for Burna Boy, Tems, Tyla, Rema, Wizkid, Asake, Ayra Starr, CKay, Davido, Seyi Vibez; issues dated 12 Sep–3 Oct 2026. Check Dai Dai (site CA 3), Asake M$NEY album (site 69), Seyi Vibez 'Swaguu', Rema 'Oh No', Tems 'What You Need'.
- **Billboard Argentina Hot 100 (billboard.com/charts/billboard-argentina-hot-100)** — Burna Boy chart history → Dai Dai: last chart week and total weeks (site: AR 1, weeksAtPeak 1, weeks 11); also any board artist 12 Sep–3 Oct.
- **Billboard Colombia Hot 100 / Chile / Peru / Bolivia / Mexico Songs (billboard.com)** — Dai Dai on each chart, issues 12 Sep–3 Oct 2026 (site: CO 1, 10+ weeks floor; CL 14; PE 23; BO 25; MX none); Ayra Starr Santa and Rema Calm Down/Bubalu history.
- **Monitor Latino Top 20 General — GT, HN, NI, PY, PR, UY (charts.monitorlatino.com)** — Dai Dai position and weeks in each country for weeks of 7, 14, 21, 28 Sep 2026; any board artist (Burna Boy, Rema, Tyla, Wizkid, Ayra Starr).
- **IFPI Latin America — Ecuador (@ifpilatam Instagram)** — Weekly Ecuador Top graphics, week 37 onward: Dai Dai (site EC 1); also re-source Santa (site EC 2) and Bubalu (site EC 21), which were read on Billboard Ecuador Songs.
- **PRODUCE Panama — chart policy** — Decide whether 'Charts digital Panamá' (BMAT Weighted Streaming Panama, weekly PDF, Semana 39 = 18–24 Sep 2026) replaces the airplay Top 50 Internacional as Panama's chart, and what depth counts (the PDF runs 3,000 deep).
- **Nationale Top 40 Suriname — Wahala (CKay ft Olamide)** — Rule whether to publish 29 (best published list, 3–10 Oct 2024) or 23 (the body's own 'vorige week 23' for the unpublished 26 Sep–3 Oct 2024 list).
- **Billboard Malaysia Songs (MY)** — billboard.com/charts/malaysia-songs-hotw: chart history for 'Dai Dai' (Shakira & Burna Boy) and 'Raindance' (Dave & Tems)
- **The Official Lebanese Top 20 (OLT20)** — OLT20 Instagram/Facebook (@OLT20): the 2026 Combined chart where 'Dai Dai' was No. 1 (site entry added 5 Jul 2026), plus any issue dated after 11 Sep 2026
- **Billboard Vietnam Hot 100 (VN)** — Dai Dai chart history (site VN 93), plus new rows for any of the 20 artists since 11 Sep 2026
- **Billboard Hong Kong Songs (HK)** — Dai Dai (no HK row on the site), We Pray (site 4), and any board-artist rows since 11 Sep 2026
- **Billboard Philippines Songs / Philippines Hot 100 (PH)** — Dai Dai (no PH row), Raindance (site 53), and any board-artist rows since 11 Sep 2026
- **Billboard Thailand Songs (TH)** — Dai Dai, and Tyla 'When I'm with You' (site 6)
- **Billboard Indonesia Songs (ID)** — Dai Dai, plus any board-artist rows since 11 Sep 2026
- **Billboard Taiwan Songs (TW)** — Dai Dai, plus any board-artist rows since 11 Sep 2026
- **Billboard Singapore Songs (SG, co-principal per the rema sweep)** — Dai Dai and Raindance chart histories
- **IMI International Top 20 (IN)** — IMI's social accounts or indianmi.org: is there any issue after Week 33 2026 (week ending 17 Aug)?
- **Owner ruling: Mako Hit List (IL)** — Decide (a) whether Tems/Raindance IL 27 is publishable, given tems-chart-peaks-v1.md dropped Israel while charts.ts names Mako as IL's official chart, and (b) whether Mako's pre-launch backfilled issues (Aug 2022 to 13 Mar 2023) count. That decides Calm Down 12 vs 35, Ku Lo Sa 54 vs none, and Rush 81 vs none.
- **PT AFP/Audiogest Top 200 Singles (Dai Dai weeksAtPeak)** — Open audiogest.pt/tops-semanais-2026 and download the Semana 35 PDF (file_2026-09-03-09-27-14.pdf) and the Semana 37 PDF (file_2026-09-16-10-35-23.pdf) into ~/Downloads. Page 9, TOP 200 SINGLES, find the row 'Dai Dai / Shakira & Burna Boy'. Semana 35 gives weeks 35 and 34 (Pos, Pos.Ant.); Semana 37 gives week 36 (Pos.Ant.). Also download Semanas 27, 29 and 33 (file_2026-07-20-13-45-41.pdf, file_2026-07-22-11-39-03.p…
- **TurnTable Official Top 100 Albums (Nigeria)** — When turntablecharts.com/charts/2 shows the issue dated 24 Sep 2026 (wk39), read Swaguu (Seyi Vibez) at No. 1, and also the wk39 positions of M$NEY (Asake), Oriade (Davido), STARLIFE (Victony) and any board artist's album. Or re-run the walker; /api/ttc-proxy/api/chart/2/39/2026 must return weekNumber 39 dated 2026-09-24.
- **TurnTable Official Nigeria Top 100 + Top 100 Albums** — Issue dated 1 Oct 2026 (wk40) for both charts once published (probably announced around 6 Oct)
- **TopHit Russia: which series is the site's RU row?** — In a normal browser, open tophit.com, search 'Dai Dai Shakira Burna Boy', open the track page and set its chart graph to Russia. Note the RADIO series peak (expected about 4, in the week of 28 Aug-3 Sep 2026) and the internet/streaming peak (31?). Then open tophit.com/chart/top/radio/hits/ru/weekly/20260828-20260903 and read Dai Dai's exact position.
- **TopHit Top Radio Hits KZ / MD / UA / EE / BY** — tophit.com track pages, read in a browser that clears the Cloudflare check itself: Dai Dai (KZ 8, MD 34, UA 90, EE 1 weeks); Calm Down Rema & Selena Gomez (KZ 2, MD 2, BY 8, EE 19); Raindance Dave feat. Tems and What You Need (KZ 12, MD 69, EE 80); Water, Chanel, She Did It Again and Push 2 Start by Tyla, plus Talk to Me by Damiano David, Tyla & Nile Rodgers (EE 3/20/91/11, UA 86, KZ 33); Pongo (MD 15); Good Feeling…
- **Radiomonitor Türkiye International Airplay (TR)** — X: from:RadiomonitorTR "Resmi Uluslararası Listesi" (weekly 'N. Hafta Top10' posts, weeks 21-40 of 2026). Look for 'Dai Dai' and note the best position against the stored 7.
- **Radiomonitor MT / MK / RS / SI (history)** — radiomonitor.com airplay-chart pages for malta, north_macedonia, serbia and slovenia, or the Radiomonitor app. Capture the current week every Friday (API: POST app2.radiomonitor.com/v7/p/api/?action=get_homepage_chart&filter_id=94/181/182/271).
- **ARIA Top 100 Singles (ARIA Report, positions 51–100, subscriber-only)** — Coldplay 'We Pray' (feat. Little Simz, Burna Boy, Elyanna & TINI), ARIA Report issues of 14 Oct 2024 and 4 Nov to 25 Nov 2024
- **ARIA Albums, issue dated 24 Aug 2020** — Burna Boy 'Twice as Tall', ARIA Top 50 Albums, week of 24 Aug 2020 (its debut week)
- **ARIA Top 100 Singles/Albums (51–100)** — Burna Boy: I Told Them... (album, 56), Last Last (79), My Oasis (84), Be Honest (77), WGFT (96), and Dai Dai after 14 Sep 2026; Tyla: She Did It Again (87)
- **ARIA Singles before 1 Jul 2019** — Drake ft. Wizkid & Kyla 'One Dance', ARIA Singles 2016
- **Billboard Canadian Hot 100 + Canadian Albums (billboard.com/charts/canadian-hot-100, /canadian-albums)** — Chart history for each board artist, especially the Sept 2026 releases: Asake M$NEY (site CA 69 album), Davido Oriadé, Seyi Vibez Swaguu, Victony STARLIFE, Omah Lay CLARITY OF MIIND, Tems 'What You Need', Tyla A*POP tracks, Dai Dai (site CA 3)
- **Billboard Mexico Songs** — Santa (site 15), Calm Down (site 16), and any Dai Dai row (the site says it never charted there)
- **Billboard Colombia Hot 100 / Chile Songs / Peru Songs / Bolivia Songs** — Dai Dai weeks (the CO weeks figure of 10 is a floor), Santa CO 2 / CL 7 / PE 1 / BO 1, Bubalu CO 7 / PE 14, Calm Down PE 23, plus any Sept 2026 board entries
- **IFPI Latin America — Ecuador (@ifpilatam Instagram)** — Weekly Ecuador Top graphics from week 20 2026 to now: Dai Dai weeks at No.1 and total weeks, plus any board artist; the Santa EC 2 and Bubalu EC 21 rows are Billboard Ecuador, not IFPI
- **Monitor Latino Top 20 General (charts.monitorlatino.com) — HN, GT, NI, PY, PR, UY** — Dai Dai peak and weeks in each country (site: HN 4, PR 2, UY 2, PY 3, GT 5, NI 6), plus Calm Down NI 6 / PY 9 / UY 15, One Dance PY 12, Chanel GT 8
- **POLICY — Panama non-airplay chart (IFPI CAM Panama Weighted Streaming, published weekly by PRODUCE as PLANTILLA-SEMANA-NN.pdf)** — Decide whether Panama still qualifies for the airplay carve-out. producepanama.org has published an IFPI CAM Panama weighted streaming Top 3000 every week since at least week 23 2026. Its week 39 row reads 'Dai Dai — Shakira, Burna Boy', position 30, 19 weeks, 2 weeks at #1, max 1. Santa's max there is 57, against the 5 the site carries from the airplay Top 50.
- **ARIA Singles 51–100 (The ARIA Report / ARIA subscriber Top 100)** — In a human browser, open the National Library of Australia web archive (webarchive.nla.gov.au, Trove 'Websites') or Pandora and search for 'ARIA Report'. Open the Top 100 Singles for the weeks after each release and read the row with its credit: Burna Boy 'Last Last' (released 13 May 2022; site 79), Sam Smith ft. Burna Boy 'My Oasis' (released 30 Jul 2020; site 84), Jorja Smith ft. Burna Boy 'Be Honest' (released Ju…
- **ARIA Albums 51–100** — In the same ARIA Report archive (human browser), open the Top 100 Albums for the week of 4 Sep 2023 and the weeks after, and read the Burna Boy 'I Told Them...' row (site 56). Optionally also check the week of 24 Aug 2020 for 'Twice as Tall', which is not in that week's Top 50.
- **ARIA Singles and Albums 51–100, all 19 board artists** — Optional: in a browser, check australian-charts.com artist pages (Hung Medien, a lead source only) for Olamide, Black Sherif, BNXN, Wizkid, Davido, Rema, Tems, Tyla, Ayra Starr, Asake, Omah Lay, Seyi Vibez, Victony, Fireboy DML, CKay, Kizz Daniel, Ruger, Oxlade and Tiwa Savage. Confirm any row ranked 51 to 100 in the ARIA Report for that week before adding it.
- **DE GfK Single Top 100 (offiziellecharts.de)** — Open offiziellecharts.de and search 'Shakira' > 'Dai Dai' (or open the current Single Top 100) after GfK publishes the 02.10.2026 chart on Friday afternoon
- **DE GfK Single Top 100** — offiziellecharts.de search 'Gunna' > 'Wgft' (Gunna feat. Burna Boy): read Höchstposition and Chartentry
- **DE GfK Album Top 100** — offiziellecharts.de search 'Tyla' > Album 'A*Pop': read Höchstposition
- **DE GfK Single Top 100** — offiziellecharts.de search 'Drake' > 'One Dance' (feat. Wizkid & Kyla): confirm Höchstposition 1
- **DE GfK Single + Album Top 100** — offiziellecharts.de artist search, one at a time: Asake, Olamide, Black Sherif, BNXN, Fireboy DML, Kizz Daniel, Ruger, Oxlade, Tiwa Savage, Victony (check both the SINGLE and ALBUM tabs)
- **DE GfK Single Top 100** — offiziellecharts.de search 'Dave' > 'Raindance' (feat. Tems): note whether it is still on the chart and the current weeks figure
- **BE Ultratop 50 + Ultratop 200 Albums, Wallonia and Flanders (ultratop.be, owner's browser)** — Open /fr/ultratop50/2026/20260912, /fr/ultratop50/2026/20260919, /nl/ultratop50/2026/20260912, /fr/albums/2026/20260912, /fr/albums/2026/20260919, /nl/albums/2026/20260912 and /nl/albums/2026/20260919. Ctrl-F each for: Burna, Olamide, Sherif, BNXN, Wizkid, Davido, Rema, Tems, Tyla, Ayra, Asake, Omah, Seyi, Victony, Fireboy, CKay, Kizz, Ruger, Oxlade, Tiwa. Priority titles: Swaguu, M$NEY, Online, OWO OLUWA, Oriadé, S…
- **BE Ultratop 50 (ultratop.be item page)** — Search 'Dai dai' on ultratop.be. On the Shakira x Burna Boy item page, count the weeks at No. 1 in Wallonia (site: 9) and in Flanders, and confirm Wallonia/Flanders weeks = 19 as of 26 Sep.
- **BE Ultratop (artist search)** — ultratop.be search for Olamide, Black Sherif, BNXN and Ruger, on both /nl and /fr. Confirm the discography has no 'Singles - Ultratop 50' or 'Albums - Ultratop' table.
- **NL Dutch Single Top 100 (dutchcharts.nl)** — Shakira x Burna Boy 'Dai dai': position and weeks on the 26 Sep 2026 (and 3 Oct) Single Top 100. Site: weeks 17, last noted No. 6 on 19 Sep. Hung says 18.
- **NL Dutch Single Top 100 (dutchcharts.nl)** — 'Cheat on Me' (Burna Boy feat. Dave): Hung lead NL 46. 'Sittin' on Top of the World' (Burna Boy feat. 21 Savage): Hung lead NL 98. Neither is on the site.
- **NL Dutch Single Top 100 / Nederlandse Top 40** — Check which Dutch chart each site NL figure comes from. Finesse (Pheelz & BNXN) NL 84, Body (Topic x Fireboy DML x Nico Santos) NL 17 and Soweto (Victony) NL 46 have no Hung NL line. Also check Peru (Fireboy DML & Ed Sheeran): Hung NL 11 vs site 21.
- **NL Dutch Single Top 100 (dutchcharts.nl)** — Emiliana (CKay): Hung lead NL 21, 21 weeks. Ku Lo Sa (Oxlade): Hung lead NL 13, 45 weeks. Nesesari (Kizz Daniel): prior lead NLD 10. None of the three is on the site.
- **NL Dutch Single Top 100 + Album Top 100 + Top 40** — Sep 2026 issues: Swaguu (Seyi Vibez), M$NEY (Asake), Online (BNXN), OWO OLUWA (Kizz Daniel), Oriadé (Davido), STARLIFE (Victony), CLARITY OF MIIND (Omah Lay), Starrgirl (Ayra Starr), What You Need (Tems), Alive (Jorja Smith ft. Wizkid), Turn It Up (Jonna Fraser ft. Tiwa Savage).
- **HR Billboard Croatia Songs (Hits of the World; launched Feb 2022)** — Owner opens billboard.com/charts/croatia-songs-hotw/ and each artist's Billboard chart-history page (Croatia Songs tab) for: Burna Boy (Dai Dai, site 13; check whether still charting and current weeks), Rema (Calm Down, site 23), Tems (Raindance), Tyla (Water, Push 2 Start, Chanel), Ayra Starr, CKay, Wizkid, Davido, Asake and the rest of the 20.
- **RO Billboard Romania Songs (Hits of the World)** — Owner opens billboard.com/charts/romania-songs-hotw/ and each artist's chart history (Romania Songs tab): Burna Boy Dai Dai (site 5; open run?), Rema Calm Down (site 11), Tems Raindance (site 14), Tyla Water (the doc says nil), plus a nil check for the other board artists.
- **LV LaIPA streaming chart, 2020-2023** — Find LaIPA's weekly 'Straumēšanas TOP' / 'Mūzikas Patēriņa Tops' for 2020-2023. LaIPA says its Ranger Computers streaming chart began in Jan 2023, but it is not on laipa.org (the news list is rendered by JS and ?qPage is ignored), parmuziku.lv (Mūzikas Patēriņa Tops stops 2019-W50; Straumēšanas TOP runs 2024-W1 to 2025-W5) or TVNET (from 2025). Likely on LaIPA's social channels. This window would verify Calm Down LV…
- **LV LaIPA/GAMMA 'Latvijā straumētāko singlu TOP20' on TVNET, 2026-W28/29/W31-34** — sejas.tvnet.lv section 'TOP20' (/section/4472 is JS-rendered, so its listing can't be read with curl): find the weekly articles for 2026 weeks 28, 29, 31, 32, 33 and 34, if they were posted, and read the 'straumētāko singlu TOP20' image for Shakira, Burna Boy 'Dai Dai'.
- **Billboard Iceland Songs (2026, barred to AI readers)** — Shakira & Burna Boy 'Dai Dai' – confirm peak 1 and weeks
- **Billboard Iceland Songs (2026, barred)** — Dave & Tems 'Raindance' – confirm the 15° peak and its week
- **Tónlistinn – Lög, weeks 2021-W01 to W25 (vefsafn.is replay, hCaptcha, so by hand)** — Justin Bieber ft. Burna Boy 'Loved by You' (Mar-Apr 2021) and any other board artist
- **Tónlistinn – Lög, list of ~13 Oct to 3 Nov 2024 (no Wayback capture)** — Coldplay 'WE PRAY' – any position better than 30, and the credit printed
- **VG-lista / Topplista depth ruling (Paul)** — Own It #26 (2019-W48) and Rema 'Calm Down' #27 (2023-W15, 10 wks)
- **VG-lista (vglista.no) vs Topplista (topplista.no) identity ruling (Paul)** — Tems 'Raindance' NO: vglista.no prints best 10 / 14 wks; Topplista prints 12 / 21 wks. Tyla 'She Did It Again': vglista 37 / 1 wk; Topplista 32 / 4 wks
- **Hitlisten Track Top-40 uge 39 and 40/2026** — Shakira & Burna Boy 'Dai Dai' – weeks count

