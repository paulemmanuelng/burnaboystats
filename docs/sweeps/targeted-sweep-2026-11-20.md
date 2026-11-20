# Targeted register read — 20 November 2026 (Friday)

Certifications only, Burna Boy and all nineteen board artists. The Thursday
set of registers (IFPI Greece, ZPAV, IFPI Austria, IFPI Danmark and the
registers that award on any day: RIAA, Music Canada, Pro-Música Brasil, IFPI
Schweiz, MAHASZ, IFPI Norge and NVPI), read on Friday 20 Nov. Each was read
from what it had published since its last logged read, 11 Nov 2026
(`targeted-sweep-2026-11-11.md`; IFPI Norge and IFPI Danmark also 13 Nov,
`targeted-sweep-2026-11-13.md`). Every read was made with curl and the honest
user agent, `burnaboystats-research/1.0 (+https://burnaboystats.com)`, after
the host's robots.txt was read in its own step. No register blocked or
challenged the reader, and nothing was spoofed or logged into. The raw
captures are in the sweep's working folders (`c1120/` and `certs1120/` in the
session scratchpad).

**Status: one Burna Boy plaque moves up a tier, and three of Wizkid's move,
all on Music Canada's register on the day of the read. Applied.**

- ***Ginger*** (Wizkid ft. Burna Boy) 🇨🇦 **Platinum**, up from Gold:
  "November 20, 2026 | Platinum Single | Wizkid, Burna Boy | Ginger | RCA
  Records / Sony Music Entertainment Canada Inc." It is Burna Boy's and
  Wizkid's.
- ***Fever*** (Wizkid) 🇨🇦 **Gold**, a new plaque: "November 20, 2026 | Gold
  Single | Wizkid | Fever | RCA Records / Sony Music Entertainment Canada
  Inc."
- ***Call Me Every Day*** (Chris Brown ft. Wizkid) 🇨🇦 **Platinum**, up from
  Gold: "November 20, 2026 | Platinum Single | Chris Brown, Wizkid | Call Me
  Every Day | RCA Records / Sony Music Entertainment Canada Inc."

Each row was matched on artist and on title. The register's WP REST API
gives each one's award id, unit total and release date: *Fever* 90133,
51,400 units, released 10/01/2018 (Wizkid's 2018 single, not Vybz Kartel's
*Fever* of the 11 Nov read); *Ginger* 90134, 83,129 units, 10/29/2020; *Call
Me Every Day* 90135, 104,006 units, 06/17/2022. Each total clears the level
printed (Music Canada: Gold 40,000 units, Platinum 80,000). The Golds the two
upgrades replace are still listed: "December 13, 2022 | Gold Single | Wizkid |
Ginger (ft. Burna Boy)" and "December 14, 2022 | Gold Single | Chris Brown ft
Wizkid | Call Me Everyday".

They are applied in the same edit:

- **Burna Boy.** *Ginger*'s release row in `app/data/certifications.ts` reads
  `{ c: "CA", level: "Platinum" }`, moved to the end of the list as the newest
  award, and the dated log gains a 2026-11-20 Canada Platinum event. An
  upgrade: he stays on 253 plaques in 27 countries, Platinum 106 → 107 and Gold
  104 → 103. The 2026 international log goes from 77 to 78 events (96 with
  Nigeria). The Gold step of December 2022 has no row in the log.
- **Wizkid.** `app/data/afrobeats.ts`: *Fever* gains CA Gold, and *Ginger* and
  *Call Me Every Day* move to CA Platinum (`AFROBEATS_VERIFIED_ON_31`). He goes
  from 160 to 161 plaques, still 22 countries (Canada was his). The board goes
  from 1,103 to 1,104. `docs/sweeps/wizkid-certifications-v1.md` carries the
  rows.
- **/compare.** Burna Boy's priced count holds at 180 (an upgrade adds no
  plaque) and gains one Music Canada step, 40,000 units. The Canada board moves
  from 6,560,000 to 6,680,000 units (*Fever* 40,000, and one 40,000 step each
  for *Ginger* and *Call Me Every Day*: *Ginger* is one record, so its step
  counts once in the units and twice in the lines, 6,920,000 → 7,080,000). It
  goes from 65 to 66 plaques. The country boards go from 1,257 records to
  1,258.
- **/updates.** One line for *Ginger*, dated the day of the read. It is not
  marked `big`: an upgrade, not a new plaque.

`CERTS_VERIFIED_ON` moves to 2026-11-20. The day is logged in
`TARGETED_REGISTER_READS` with the eleven codes read: GR, PL, AT, DK, US, CA,
BR, CH, HU, NO, NL.

| code | register | how it was read | newest batch read | result |
|---|---|---|---|---|
| US | RIAA, riaa.com/gold-platinum | Certification-date filter, all artists: `?tab_active=default-award&se=&release_date_toggle=1&from=2026-11-06&to=2026-11-20` (resolved to tab recent-award, newest certification first). Its "Show More" pages 2–4 came from the admin-ajax POST `action=load_more_search_default&page=N`, with the same filter. That gave 107 rows for 6–20 Nov; the same method gave 27 for 1–5 Nov, 134 in all, default and Latin badges in one list. Then 21 name searches (`se=<name>`): Burna Boy, the nineteen board artists and Shakira | certification date November 20, 2026 (e.g. default_456288, "YFN LUCCI \| JAN. 31ST (MY TRUTH)." Gold); highest row id default_456297 | 0. The only board row dated 1–20 Nov is "AYRA STARR \| RUSH \| MAVIN GLOBAL HOLDINGS LIMITED \| SINGLE \| November 5, 2026", 1X Platinum (default_455979), already on the board. No name search returns a row above default_455979. *Dai Dai* is still 19X Platino (default_454813, October 6, 2026), as the site has it |
| CA | Music Canada, musiccanada.com | Three requests at least 30 s apart (robots.txt sets Crawl-delay 30): the WP REST award list modified after 2026-11-10T00:00:00, newest first (`/wp-json/wp/v2/award?modified_after=…&orderby=modified&order=desc`, X-WP-Total 24, one page); the register's public search, `/gold-platinum/?_gp_search=wizkid`, for each level at the body; and the newest 40 awards by id (32,064 rows in all, 32,040 on 11 Nov; the ids added since run 90074–90138) | November 20, 2026: ids 90133–90138, posted about 16:22–16:29 UTC, minutes before the read | **3 board rows, all applied:** Wizkid *Fever* Gold Single (new); "Wizkid, Burna Boy" *Ginger* Platinum Single (up from Gold, his and Wizkid's); "Chris Brown, Wizkid" *Call Me Every Day* Platinum Single (up from Gold). The other rows since 11 Nov are not by any of the twenty: Keshi ×10, KATSEYE ×2, ADÉLA ×2, Black Pumas, "Shimza, AR/CO, Kasango", Alyssa Grace and RÜFÜS DU SOL |
| BR | Pro-Música Brasil, pro-musicabr.org.br/home/certificados/ | One GET of the default listing: newest first, 40 cards a page, "(15269 resultados)" over 382 pages. It was compared with the full listing captured on 4 Nov, which printed 15,260 with "Yunk Vino \| Só Quando Ela Me Quer" on top. That card is now tenth, so exactly 9 cards were added since 4 Nov, which covers everything since 11 Nov | the 9 cards now on top, all "(2026)": Palavra Cantada *Canções de Brincar*, Dj Brenno Paixão/Mac Júlia/MC RICA *Rua do Ouro*, Fernandinho ×2, Raflow, NOVEMBER KID, Hungria ×2, Silfarley *Tem Cerveja Aí?* | 0. None of the 9 names Burna Boy or a board artist in its artist or title field |
| NL | NVPI, goudplatina.nl | One GET of `/api/filter`, newest first by createdAt (no robots.txt, HTTP 404) | created 2026-08-28T05:01:51Z: Isabèl Usher *Ik Kom Weer Thuis*, Single, Goud (16-7-2026), the same newest row as on 11 Nov | 0. count/total 6,493, as on 11 Nov; the response is the same size, 24,700 bytes. Nothing added since 28 Aug 2026 |
| CH | IFPI Schweiz, via the Swiss Hitparade's own site (swisscharts.com/edelmetall) | One GET of `/edelmetall/2026`, its award cards parsed and diffed against the 11 Nov capture | 37 cards for 2026 (35 on 11 Nov); the two added: Katseye *Gabriela* (Single, Platin) and Lady Gaga *Abracadabra* (Single, Platin) | 0. The only board card for 2026 is "Tyla / Chanel, Kategorie: Single, Jahr: 2026, Label: Sony, Edelmetall: Gold", unchanged and on the board |
| HU | MAHASZ, slagerlistak.hu (arany- és platinalemezek adatbázis) | One GET of `/arany-es-platinalemezek/adatbazis/2026`, its rows parsed and diffed against the 11 Nov capture | 327 rows for 2026 (325 on 11 Nov); the two added: "Filmzene / Hogyan tudnék élni nélküled? (Eredeti filmzene)" 2× Platinum and "Tate McRae / Housewife (Sony Music)" Gold | 0. "Shakira x Burna Boy / Dai Dai / (Sony Music)" is still Platinum with no multiplier, as on the site. No other board row on the 2026 page |
| GR | IFPI Greece, the Award column of its digital charts (ifpi.gr) | Week 45: the live `digital_ien.html` and `digital_en.html` (Last-Modified Wed 18 Nov 2026 06:24 GMT), 100 rows each. Week 44 was posted after the 11 Nov read ended (06:02 UTC), so it was read from raw Wayback captures of the same URLs (`20261111070057id_` and `20261111072105id_`; the 12 Nov captures carry the same digests). Every row's artist field was filtered for Burna Boy, the nineteen and Buju | week 45/2026, posted 18 Nov; week 44 through Wayback (✓ᴬ) | 0. The only tracked rows, both on digital_ien: "Tems, Dave \| Raindance (feat. Tems) \| … \| 2P" (No. 13, then No. 11) and "Shakira, Burna Boy \| Dai Dai \| … \| P" (No. 36, then No. 35), both on the site at those tiers. digital_en has no tracked row in either week. *Dai Dai* (SPINALL Remix) is off the chart |
| PL | ZPAV, via olis.pl's API (oficjalna lista wyróżnień) | POST `olis.pl/api/search`, category 3, subcategories 6 (złote), 7 (platynowe) and 8 (diamentowe), limit 100, search_in "contractor"; rows diffed by id and date_1–date_7 against the 11 Nov captures; artist from music.artist.title | the 18 Nov 2026 batch (6 Gold, 4 Platinum), and one row each dated 13 Nov (GENZIE *404* Gold; EMIN, JONY *Kamin* Platinum). Diamond's newest is still 4 Nov 2026 | 0. 12 rows added since 11 Nov (7 Gold, 5 Platinum, 0 Diamond), none by a tracked artist. The tracked rows in the windows are unchanged and match the site, each still 1× (no date_2): Gold *Dai Dai* (2026-08-26), Gold *Raindance* (2026-08-05), Platinum *Dai Dai* (2026-10-21), Platinum *WE PRAY* (2026-06-24) |
| AT | IFPI Austria, ifpi.at/auszeichnungen | The newest 200 rows, `?fwp_per_page=200` (FacetWP total_rows 6,059, 6,048 on 11 Nov), diffed against the 11 Nov capture. The plain page now defaults to 4 rows a page and looked stale (total 6,050, newest 11.11.2026), so it was not used as the read | 18.11.2026: eight Fäaschtbänkler singles | 0. The 11 rows added match the +11 in total_rows: Fäaschtbänkler ×8, RAF Camora *Vienna* PLATIN (17.11.2026), Salvatore Mancuso x Max Niklas GOLD (11.11.2026) and Glueboys *Disko-Edelweiss* GOLD (back-dated to 13.10.2026), none by a tracked artist. The 11 rows that left the window are all dated 31.03.2026, so no row was edited in place. Both tracked rows in the window are on the site: *Dai Dai* PLATIN (03.09.2026) and Tyla's *Water* PLATIN (05.08.2026) |
| DK | IFPI Danmark, ifpi.dk/certificeringer-0 | Over http, as the site's own link does (https fails on a certificate mismatch): `?page=0` and `?page=1`, 100 rows newest first; page 0 compared with the 11 Nov capture as a set, since the register shuffles rows inside a batch. Its search is under `/search/`, which robots.txt bars, so it was not used | 3 Nov 2026 (30 rows) is still the top batch; nothing dated after 3 Nov is posted | 0. Page 0 is 03.11 ×30, 27.10 ×12 and 20.10 ×8, the 03.11 and 27.10 rows identical as a set to 11 Nov; page 1 is 20.10 ×17, 15.10 ×25 and 06.10 ×8. No tracked artist in the 100 rows, lead-act filings of featured titles included |
| NO | IFPI Norge, ifpi.no/trofe/trofeoversikt | Page 1 (100 rows, newest first), diffed against the 11 Nov capture; `?pg=29` for the total (2,890 rows, 29 pages, as on 11 Nov). The list back-dates rows, so also its own search, `?searchterm=`, for the twenty names and Buju and for the lead acts Dave, Shakira, Coldplay and Don Toliver, 2 s apart | 19/11/2026: "Hagle, Tor-Anders Ringnes \| Mekke bil" | 0 since the 13 Nov read. Page 1 has 30 rows not there on 11 Nov, some back-dated to 14–23 Oct; the only board row among them is *Boom* 2x (04/11/2026), applied on 13 Nov. The searches return only rows on the site: Tyla *Water* and *Tyla+*, *Calm Down* and Dave's *Location*. "Burna Boy" and 17 other names return INGEN TREFF; Shakira, Coldplay and Don Toliver have no *Dai Dai*, *We Pray* or *Secondhand* row |

## Limits of this read

No register was a gap: all eleven were read. What each read can show has
limits, and they are stated here so a later read does not take a zero for more
than it is.

- **IFPI Greece** shows an award only for a song on that week's chart, so a
  plaque for a song off the chart cannot be seen.
- **IFPI Danmark** has posted no batch dated after 3 Nov. The next, likely
  dated 10 or 17 Nov, is still to come; the next read starts from 3 Nov.
- **IFPI Austria**'s plain landing page is stale and shows 4 rows a page, so
  the 200-row FacetWP view is the read.
- **IFPI Norge**'s total of 2,890 is 25 above the count from earlier reads, so
  deeper back-dated rows may exist. The artist and lead-act searches found none
  for the twenty.
- **Pro-Música Brasil** and **MAHASZ** print no award dates (the year only, or
  none), so their "since 11 Nov" coverage rests on card and row counts and on
  position diffs against earlier captures.
- **RIAA**'s certification-date filter needs `release_date_toggle=1`. Without
  it, from/to filter on the release date, and the page says "No matching
  results".
