# Targeted register sweep — 4 November 2026 (Wednesday)

Certifications only, Burna Boy and every board artist. The owner asked on
4 Nov 2026 for the stale data to be refreshed, so this sweep reads every
register that had published since its last logged read: the Tuesday set
(RMNZ, IFPI Sverige, SNEP, FIMI, Promusicae, ČNS IFPI for both countries),
the Thursday set without ZPAV (IFPI Greece, IFPI Austria, IFPI Danmark and
the registers that award on any day) and BVMI's database, which carries its
October report.

**Status: three new board plaques, none of Burna Boy's.**

- *Commas* (Ayra Starr) 🇫🇷 **Or** — SNEP's list, constat 30/10/2026.
- *Raindance* (Dave & Tems) 🇪🇸 **Oro** — Promusicae's awards for 2026 week 44.
- *Raindance* (Dave & Tems) 🇩🇪 **Gold** — BVMI's Gold-/Platin-Datenbank, 2026.

They are applied in the same edit (`app/data/afrobeats.ts`, `AFROBEATS_VERIFIED_ON_24`).
Ayra Starr goes from 42 to 43 plaques, with no new country. Tems goes from 76
to 78, and Germany is her 22nd country. `CERTS_VERIFIED_ON` moves to
2026-11-04, and the day is logged in `TARGETED_REGISTER_READS` with the
eighteen codes below.

| code | register | newest batch read | result |
|---|---|---|---|
| FR | SNEP, snepmusique.com/les-certifications/, pages 1–3: rows 1–150 of the list, newest constat first | constat 30/10/2026 (32 rows), 22/10/2026 (29) and 15/10/2026 (24), down to the 08/10/2026 batch the 14 Oct read ended on | "Singles \| COMMAS \| AYRA STARR \| UNIVERSAL MUSIC FRANCE \| Or \| sortie 01/02/2024 \| constat 30/10/2026": **new, applied**. No other Burna Boy, Shakira or board row |
| IT | FIMI, POST fimi.it/ajax/filter-certificazioni.php: weeks 41–45 of 2026, both formats, plus a 2026 search for each of 23 names | week 44 (23–29 Oct): 16 awards; week 43: 12; week 42: 16; week 45: none yet | 0. The 2026 searches return only rows already on the site: *Dai Dai* Oro (week 33) and *Raindance* Oro (week 30) |
| ES | Promusicae, elportaldemusica.es awards, weeks 41–45 of 2026, every page | week 44 (23 rows); week 43 (14); week 42 (17); week 45 empty | "CANCIONES \| RAINDANCE \| DAVE / TEMS \| 1 × Discos de Oro \| 2026 \| Semana 44": **new, applied** (Tems's Spanish Gold until now was *Wait For U*). No Burna Boy row |
| NZ | RMNZ via RadioScope, TablePress tables 2052 (singles) and 2051 (albums), the newest 600 rows of each by date | 8 Oct 2026, the same batch the 14 Oct read ended on: both tables hold the same 23,186 and 4,088 rows as on 14 Oct | the register has added no batch since 8 Oct, so nothing new to match |
| SE | IFPI Sverige, sys2.ifpi.se, read record by record: the 52 Burna Boy and board records read on 14 Oct, after sverigetopplistan.se searches for 27 names, which found no new record; Sverigetopplistan's charts 41, 54, 94 and 215 for 2026 week 44 | 2026 week 44 (the charts' newest issue) | no record's Guld/Platina line changed. The only board row in week 44 is *Dai Dai*, "Platina", already on the site |
| CZ | ČNS IFPI chart 30 (ifpicr.cz/hitparada/30), weeks 42, 43 and 44 of 2026 (weekIds 3041–3043), all 100 rows each | week 44 of 2026 | *Dai Dai*, "Platinový singl", No. 25 in week 44, already on the site. No other Burna Boy or board row |
| SK | ČNS IFPI chart 43 (ifpicr.cz/hitparada/43), the same three weeks | week 44 of 2026 | *Dai Dai*, "Platinový singl", No. 8 in week 44, already on the site. No other Burna Boy or board row |
| GR | IFPI Greece, ifpi.gr digital_ien.html and digital_en.html: week 42 live (Last-Modified Thu 29 Oct 2026 07:27 GMT), week 41 from the raw Wayback captures `20261022003821id_` and `20261022003404id_` | week 42 of 2026; the week-43 file is not yet posted | *Raindance* "2P" and *Dai Dai* "P", both already on the site; *Dai Dai (SPINALL Remix)* carries no award |
| US | RIAA, riaa.com/gold-platinum: the recent-award feed, pages 1–9 (270 rows, certification dates 7 Oct to 2 Nov 2026), plus searches for 24 names (default awards) and 9 names (RIAA Latin) | 2 Nov 2026 | 0 new. *One Dance* 15× Platinum (23 Oct 2026) is already on the site (`AFROBEATS_VERIFIED_ON_23`), and so is *Dai Dai* 19× Platino (6 Oct 2026) |
| CA | Music Canada, musiccanada.com/wp-json/wp/v2/award: the newest 100 by id (32,038 rows in all), every row dated after 10 Oct (74) and every row modified after 10 Oct (112), plus searches for 22 names | 2 Nov 2026 | 0. No search returns a row that was not there on 15 Oct, and none of those rows has been modified since |
| BR | Pro-Música Brasil, pro-musicabr.org.br certificados: the same 36 artist searches as on 15 Oct, plus the newest listing pages 1–6 (240 cards, covers uploaded up to 3 Nov 2026) | 3 Nov 2026 | 0. Every search returns the same cards as on 15 Oct, and no new card is a board title |
| AT | IFPI Austria, ifpi.at/auszeichnungen, in full (31 pages of 200) | 28 Oct 2026: 6,047 rows, 18 of them added since 15 Oct (batches of 20, 21, 27 and 28 Oct) | 0. None of the 18 is a Burna Boy or board row |
| DK | IFPI Danmark, ifpi.dk/certificeringer-0, pages 0–3 (200 rows, back to 1 Sep 2026) | 27 Oct 2026: batches of 15 Oct (25 rows), 20 Oct (25) and 27 Oct (12) | 0. *Dai Dai* Guld (29.09.2026) and *One Dance* 6xPlatin (22.09.2026) are as on the site |
| CH | IFPI Switzerland's awards on the Swiss Hitparade's own site, swisscharts.com/edelmetall/2026 and /2025 | the same 116 cards as on 15 Oct | 0. No card has been added since |
| HU | MAHASZ, slagerlistak.hu/arany-es-platinalemezek/adatbazis/2026 | 321 rows (highest id 26065), 57 new or re-tiered since 15 Oct | 0. Every new row is a Hungarian act's. *Dai Dai* Platinum is already on the site |
| NO | IFPI Norway, ifpi.no/trofe/trofeoversikt, pages 1–3 (300 rows) | 22 Oct 2026: 13 rows added since 15 Oct | 0. None of the 13 is a board row |
| NL | NVPI, goudplatina.nl /api/filter | 6,493 rows, the same count as on 15 Oct; the newest row was created 28 Aug 2026 | the register has added nothing since 28 Aug, so nothing new to match |
| DE | BVMI, the Gold-/Platin-Datenbank at musikindustrie.de (POST form, `action=suche`, every select at "alle"), searched for 22 names across all years | 2026 | "Dave & Tems \| Raindance \| 2026 \| Single \| 1x Gold \| Universal Music Entertainment GmbH \| Neighbourhood": **new, applied**. The rest match the site: *Location* Gold and *Dai Dai* Gold (2026), *Jerusalema* Platin (2021), *One Dance* Diamond, *Calm Down* Platin, *Water* Gold, *Another Vibe* Gold and *love nwantiti* Platin |

What the bodies print, and what they do not:

- **SNEP** prints the constat date: the Or is dated 30/10/2026.
- **Promusicae** prints the award week only. The Oro is dated by its week, 2026 week 44 (23–29 Oct), with no day.
- **BVMI** prints only the year of an award. It has no date and no certificate number, so the German Gold carries no `date`, like the board's other BVMI rows.

None of the three is a Burna Boy plaque. His total, his countries and the dated
log do not move.

Not read this sweep:

- **ZPAV (PL).** Its batch dated 4 Nov is posted Wednesday evening or Thursday,
  so it is read on 5 Nov.
- **The owner's hand checks:** the BPI (UK), ARIA (AU), AFP (PT), Ultratop (BE),
  RiSA (ZA) and Sony Music Türkiye (TR).
- **TurnTable (NG) and Pro Música Colombia (CO).** Neither has published
  anything new since its last read.

robots.txt was read first on every host. On the hosts that have one, the
`User-agent: *` group allows these paths:

- snepmusique.com, fimi.it, elportaldemusica.es, radioscope.co.nz,
  sverigetopplistan.se, riaa.com, musiccanada.com (Crawl-delay: 30, so the
  requests were spaced 31 seconds apart), pro-musicabr.org.br, ifpi.at, ifpi.dk,
  swisscharts.com, ifpi.no and musikindustrie.de.
- slagerlistak.hu names no `*` group at all.

Three hosts return no robots.txt (HTTP 404): sys2.ifpi.se, ifpi.gr and
goudplatina.nl. ifpicr.cz returns an empty one (HTTP 200, 0 bytes). Nothing
is disallowed on any of them.

Every page was fetched with curl and the user agent "burnaboystats-bot" on
4 Nov 2026, between 06:03 and 06:29 UTC. The raw captures stay in the sweep's
working folder (`sweep-1104`); this file is the record of what each register
showed.
