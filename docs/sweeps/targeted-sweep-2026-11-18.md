# Targeted register read — 18 November 2026 (Wednesday)

Certifications only. One register, RMNZ (New Zealand), read for Burna Boy and
all nineteen board artists. It was read on RadioScope's two certification
tables, from their newest rows back to the batch of 8 Oct 2026, where the
11 Nov sweep ended (`targeted-sweep-2026-11-11.md`).

The lead was two fan posts on X (@BurnaBoyStats and @Toluwase_x, 17 Nov
2026), which the owner sent as a screenshot. They claimed a New Zealand Gold
for *Dai Dai*. A fan post is a lead, never a source:

- the lead session read the register row in the in-app browser that morning
  (05:10 UTC; `refresh-1111/nz-1118/rmnz-dai-dai-read.md`);
- this read fetched it again, with the rest of the newest batches.

**Status: one new plaque, Burna Boy's. One more board row found, not applied,
awaiting Paul.**

- ***Dai Dai*** (Shakira & Burna Boy) 🇳🇿 **Gold**: "Shakira And Burna Boy |
  Dai Dai | Gold | 2026-10-22". **Applied.**
- ***Calm Down*** (Rema) 🇳🇿 **Plat x5**: "Rema | Calm Down | Plat x5 |
  2026-10-29". The board holds 4×, from the Plat x4 row of 2025-02-27.
  **Found, not applied, awaiting Paul.**

*Dai Dai*'s Gold is applied in the same edit:

- **The release row.** `app/data/certifications.ts` gains `{ c: "NZ", level:
  "Gold" }` on *Dai Dai*'s row, and the dated log a 2026-10-22 NZ Gold event.
- **Burna Boy.** He goes from 252 to 253 plaques (Gold 103 → 104), with no new
  country: New Zealand was his already. He stays on 27 countries.
- **The song.** *Dai Dai* goes from 19 to 20 plaques, and from 19 to 20
  countries.
- **The dated log.** The 2026 international log goes from 76 to 77 events.
- **/compare.** It prices the plaque at RMNZ's level for a Gold single, 15,000
  units (`app/data/certThresholds.ts`). His priced count goes from 179 to 180,
  and the New Zealand board gains a record no other artist holds. The
  unpriced list is still only Colombia's singles.
- **/updates.** One line, dated the day of the read.

`CERTS_VERIFIED_ON` moves to 2026-11-18. The day is logged in
`TARGETED_REGISTER_READS` with the one code read, NZ.

| code | register | newest batch read | result |
|---|---|---|---|
| NZ | RMNZ via RadioScope: TablePress tables 2052 (singles) and 2051 (albums), ordered by Date Certified, newest first, the newest 600 rows of each; and table 2052's own search for "Dai Dai" and for "Calm Down" | the batch of 12 Nov 2026 (65 single and 8 album rows), then 5 Nov, 29 Oct, 22 Oct and 15 Oct, down to the 8 Oct batch the 11 Nov read ended on (80 and 5 rows, unchanged) | "Shakira And Burna Boy \| Dai Dai \| Gold \| 2026-10-22": **new, applied**. It is the register's only *Dai Dai* row. "Rema \| Calm Down \| Plat x5 \| 2026-10-29": **found, not applied, awaiting Paul** (the board holds Plat x4, 2025-02-27). No other row for the twenty artists in the five new batches, singles or albums |

## Could the 11 Nov read have seen a row dated 22 Oct? No

The 22 Oct batch was not in the register when the 11 Nov sweep read it.

| | 11 Nov 2026 (`refresh-1111/certs-dl/nz/`) | 18 Nov 2026 (`refresh-1111/nz-1118/`) |
|---|---|---|
| singles, table 2052 | 23,186 rows; newest dated 2026-10-08 | 23,533 rows; newest dated 2026-11-12 |
| albums, table 2051 | 4,088 rows; newest dated 2026-10-08 | 4,136 rows; newest dated 2026-11-12 |

- **Both reads sorted by date, newest first.** A row dated 22 Oct would have
  come above the 8 Oct batch on 11 Nov.
- **The new rows match the growth exactly.** The tables grew by 347 singles
  and 48 albums. The rows dated after 8 Oct number exactly 347 and 48, in
  five batches:

  | batch | singles | albums |
  |---|---|---|
  | 15 Oct | 80 | 10 |
  | 22 Oct | 76 | 12 |
  | 29 Oct | 63 | 7 |
  | 5 Nov | 63 | 11 |
  | 12 Nov | 65 | 8 |

- **The older batches are untouched.** The 8 Oct and 1 Oct batches are, row
  for row, what the 11 Nov read returned.

So all five batches were posted after the 11 Nov read (05:41 UTC). They were
up by the fan posts of 17 Nov. Each is dated by the day of certification, not
the day it was posted, and the register prints no posting date.

## *Dai Dai*

- **The search.** Table 2052's search for "Dai Dai" returns 19 rows, and one
  is the song: "Shakira And Burna Boy | Dai Dai | Gold | 2026-10-22".
- **The other 18 match only part of the word:**
  - Lauren Daigle: *Look Up Child*, *You Say*, *Rescue* and *Trust In You*;
  - Justin Bieber's *DAISIES*, and Katy Perry's *Daisies*;
  - Daily J; Ashnikko's *Daisy*; Mako Road's *Daiquiri*.
- **No step below it.** No lower New Zealand tier is listed: the song went
  straight to Gold.
- **The match.** Artist and title both match the site's release, "Dai Dai",
  credit "Shakira & Burna Boy".
- **The fan posts.** They showed the same row. Nothing else in them is used.

## *Calm Down*: found, not applied

Table 2052's search for "Calm Down" lists the record's ladder:

| credit | tier | date |
|---|---|---|
| Rema | Gold | 2023-03-02 |
| Rema | Plat x1 | 2023-04-27 |
| Rema | Plat x3 | 2024-03-07 |
| Rema | Plat x4 | 2025-02-27 |
| Rema | **Plat x5** | **2026-10-29** |
| Rema And Selena Gomez | Gold | 2023-02-16 |
| Rema And Selena Gomez | Gold | 2023-04-27 |

The board counts the solo and remix rows as one plaque
(`rema-certifications-v1.md`). It counts that plaque at 4×, read from the
Plat x4 row of 2025-02-27. The register's rows are cumulative, so the newest
row is the current tier: 5×, dated 2026-10-29.

**It is not applied.** The read was for *Dai Dai*'s plaque, and any other new
row waits for Paul. If he applies it:

- it is an upgrade, so no plaque count moves (Rema stays at 87, the board at
  1,103);
- Rema's New Zealand units on /compare rise by 30,000, one Platinum single
  at RMNZ's level;
- Rema's `verifiedOn` would move to 18 Nov.

## Matching

Every row dated 8 Oct or later was matched on artist **and** on title: 427
singles and 53 albums.

- **On artist:** the twenty names, and Shakira.
- **On title:** the twenty artists' certified and chart titles in
  `app/data/`.
- **Titles compared:** exactly, and again with a parenthesis or a "feat."
  credit removed.

Only the two rows above are board records. "Black Eyed Peas feat. Shakira |
GIRL LIKE ME | Gold | 2026-10-08" is Shakira's, without Burna Boy, and is
not a board record.

The title-only matches are other acts' songs, and none is applied:

| batch | the register's row | the board title it shares |
|---|---|---|
| 12 Nov | PartyNextDoor feat. Drake, *Recognize* | Omah Lay's |
| 12 Nov | Stephen Sanchez, *High* | Davido's |
| 5 Nov | Zerb And The Chainsmokers feat. Ink, *Addicted* | CKay's |
| 5 Nov | Luude And Issey Cross feat. Moby, *Oh My* | Fireboy DML's |
| 29 Oct | Tool, *Sober* | Yung Alpha & Davido's |
| 29 Oct | Gotye, FISHER, Chris Lake, Kimbra And Sante Sansone, *Somebody (2024)* | Olamide's |
| 29 Oct | Zara Larsson, *All The Time* | Seyi Vibez's |
| 29 Oct | Shaboozey And Jelly Roll, *Amen* | Asake's and Omah Lay's |
| 22 Oct | Smashproof feat. Gin, *Brother* | Asake's |
| 22 Oct | Michael Jackson, *Smooth Criminal* | Rema's |
| 22 Oct | Justin Bieber, *Company* | Omah Lay's |
| 22 Oct | Summer Walker, *Body* | Black Sherif's and Fireboy DML's |
| 15 Oct | Post Malone feat. Ty Dolla $ign, *Psycho* | Asake's |
| 15 Oct | Playboi Carti, *TOXIC* | BNXN's, and Rema's *Toxic* (Hamza ft. Rema) |
| 15 Oct | Ozzy Osbourne, *Dreamer* | Black Sherif's |
| 15 Oct | Russ, *Goodbye* | Ayra Starr's |
| 8 Oct | Ellie Goulding, *Burn* | Kizz Daniel's |
| 8 Oct | Lily Allen, *Smile* | Wizkid's |

The match lists are kept in `refresh-1111/nz-1118/matches-artist-and-title.txt`.

## How it was read

- **robots.txt first**, in its own step: `www.radioscope.co.nz/robots.txt`
  disallows only /wp-admin/ for `*`, and allows admin-ajax.php. The tables'
  data route is `/wp-json/tablepress/v1/ssp/<table>`, which no rule bars.
- **The recipe**, from the 14 Oct and 11 Nov reads:
  - each page was fetched first, and its per-pageload token (`r=` and `n=`)
    was taken from the table's own DataTables call, fresh before every query
    (four page loads);
  - each query carried the full server-side contract, ordered on column 4,
    Date Certified, descending.
- **The client:** curl, with the user agent "burnaboystats.com
  (+https://burnaboystats.com/contact)", on 18 Nov 2026 between 05:19 and
  05:23 UTC.
- **The raw responses** are kept in `refresh-1111/nz-1118/`, with the
  robots.txt copy:
  - `recent-2052-by-date-desc.json`;
  - `recent-2051-by-date-desc.json`;
  - `search-2052-dai-dai.json`;
  - `search-2052-calm-down.json`.

**Not read this time:** every other register. The others keep the dates of
their last logged reads.
