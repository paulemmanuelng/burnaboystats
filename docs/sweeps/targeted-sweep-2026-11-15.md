# Targeted register read — 15 November 2026 (Sunday)

Certifications only. One certifying body, ARIA (Australia), read for Burna Boy
and all nineteen board artists from its two year-to-date lists:

- "ARIA TITLE ACCREDITATIONS REPORT — For Single Titles Reaching a New
  Accreditation Level between 1-01-2026 and 31-10-2026";
- the same report for album titles, same months.

ARIA's accreditation Dropbox is read by the owner's hand, never by an agent
(`README.md`, "By hand"). Paul downloaded both lists himself on 15 Nov 2026,
so his downloads are the read. They are kept in the sweep's working folder,
`refresh-1111/aria-1115/`: "Oct Single Accreds 2026.pdf" and "Oct Album
Accreds 2026.pdf", with the text extracted from them (`singles.txt`,
`singles.rows.json`, `albums.txt`, `albums.rows.json`). Paul approved the
plaque below on 15 Nov 2026 ("yes do it").

**Status: one new board plaque, none of Burna Boy's.**

- *Secondhand* (Don Toliver ft. Rema) 🇦🇺 **Gold**, Rema: "Don Toliver |
  Secondhand | WAR | GOLD". ARIA files the record under the lead act alone.

It is applied in the same edit (`app/data/afrobeats.ts`,
`AFROBEATS_VERIFIED_ON_29`). Rema goes from 86 to 87 plaques, with no new
country: Australia was his already, through *Calm Down*. He stays on 24
countries. The board goes from 1,102 to 1,103. /compare prices it at ARIA's
level for a Gold single, 35,000 units (`app/data/certThresholds.ts`), and the
Australian board gains a record no other artist holds. `CERTS_VERIFIED_ON`
moves with the read, since it covered Burna Boy's registers too: to 15 Nov,
and on to 18 Nov with the RMNZ read applied in the same edit
(`targeted-sweep-2026-11-18.md`). The day is logged in
`TARGETED_REGISTER_READS` with the one code read, AU.

| code | register | newest batch read | result |
|---|---|---|---|
| AU | ARIA, the accreditation lists linked from aria.com.au/accreditations: its "ARIA TITLE ACCREDITATIONS REPORT" for singles and for albums, 1 Jan to 31 Oct 2026. Downloaded by Paul by hand (ARIA's Dropbox is never read by an agent), not by agent | the year to date, 1 Jan to 31 Oct 2026: 499 single rows, A to Z, and 43 album rows | "Don Toliver \| Secondhand \| WAR \| GOLD": **new, applied** (Rema; filed under the lead act, ⚠ in his file). "Dave, Tems \| Raindance \| UMA \| PLATINUM" and "Tyla \| Chanel \| SME \| GOLD": already on the board at those tiers. No Burna Boy, Shakira or *Dai Dai* row. No album row for any of the twenty |

## The lists' scope

Each list prints every title that reached a **new** accreditation level
between 1 Jan and 31 Oct 2026, one row per title, at the level it reached:
artist, title, the label's company code and the accreditation. It prints no
day. A title that moved twice in the period shows only its newest level, and
a title that did not move is not listed at all, whatever it holds.

- **Singles: 499 rows** on ten pages, complete from A to Z: from "5 Seconds
  Of Summer | Amnesia" to "Zhavia Ward & Zayn | A Whole New World (End
  Title)".
- **Albums: 43 rows** on one page.
- Both PDFs are Excel exports. Their own creation stamps read 13 Nov 2026,
  16:02 (singles) and 16:03 (albums), UTC+11.

## Method

- **Extraction.** The rows were taken from the text of Paul's two PDFs.
  `singles.rows.json` holds 500 entries for 499 rows. Five entries are
  flagged `odd`: "The Dreggs | Gold | GYR | GOLD" split in two, and three
  rows read whole into the title cell ("Cynthia Erivo, Ariana Grande What Is
  This Feeling? | UMA", "Lime Cordiale & Idris Elba Apple Crumble | MGM",
  "Noah Kahan & Julia Michaels Hurt Somebody | UMA"). In 37 more entries,
  not flagged, the second line of a wrapped artist name was read into the
  title (e.g. "Ariana Grande Feat. Iggy | Azalea Problem"), and one entry
  carries the report's header in place of its artist ("Ariana Grande | No
  Tears Left To Cry").
- **The recheck.** So the PDFs' own text was extracted a second time, row by
  row, by the position of each cell. Every row of both lists was then
  matched again. The re-extracted rows and the match lists are kept in
  `refresh-1111/aria-1115/recheck-2026-11-18/`. The re-extraction leaves
  one title blank, Rihanna's "Same Ol' Mistakes", which is no board title
  and which the first pass read whole.
- **Matching, on both fields.** Every row was matched on artist **and** on
  title against the site's own titles for the twenty artists: every
  certified release and every chart title in `app/data/certifications.ts`,
  `app/data/charts.ts` and `app/data/afrobeats.ts`.
  - **On artist:** the twenty names, and Shakira for *Dai Dai*.
  - **On title:** this is the half that catches lead-act filing, which is how
    ARIA filed *Secondhand* (the list prints a Feat. credit on 35 rows, but
    not on every featured song). *Secondhand* was found here: its row names
    only Don Toliver, so a search for "Rema" never finds it.
  - **Matched by:** whole-word name matches, and titles compared without case
    or punctuation. Then compared again with a parenthesis or a "feat."
    credit removed.

## Results

**Applied.** *Secondhand* 🇦🇺 Gold (Rema), as above. It is counted on
Paul's ruling of 28 Sep 2026, the treatment Wizkid's *System* carries: one
recording, and the artist is on it.

- There is one *Secondhand*: Don Toliver's single featuring Rema. The board
  already counts the same record twice:
  - in Canada, from Music Canada's Platinum row `Secondhand (feat. Rema)`;
  - in Portugal, from AFP's card "Secondhand — Don Toliver feat. Rema —
    Warner Music".
- `WAR` is ARIA's code for that same Warner label.

The register does not print Rema's name, so the plaque carries the ⚠ that
Rema's file gives a row whose credit names only the lead act
(`docs/sweeps/rema-certifications-v1.md`).

**Already on the board.**

| artist | the list's row | the board |
|---|---|---|
| Tems | "Dave, Tems \| Raindance \| UMA \| PLATINUM" | 🇦🇺 Platinum |
| Tyla | "Tyla \| Chanel \| SME \| GOLD" | 🇦🇺 Gold |

Both are unchanged, so both artists keep their dates. The *Chanel* row is
Tyla's record: the board's other *Chanel*, Blaqbonez ft. Asake, has no row.

**Burna Boy: nothing.**

- No row names Burna Boy or Shakira, and no row is titled *Dai Dai*. So
  *Dai Dai* had no Australian accreditation as of 31 Oct 2026. The list
  covers every new level reached from 1 Jan, and the song was released on
  15 May 2026.
- None of his titles appears under another lead act either: *Location*,
  *We Pray*, *Own It* and *Real Life* all have no row.

**Albums: nothing for the twenty.** No row of the 43 names any of them, and
no title is one of theirs.

**Same title, another act's song: 23 rows, none applied.** Each is a
different song by an act that is not on the board, and none names a board
artist.

On the site's certified titles, 17 rows. The first match, run on
`singles.rows.json`, found these 13:

| the list's row | the board title it shares |
|---|---|
| Ariana Grande "Imagine" | Omah Lay's |
| Ariana Grande Feat. Future "Everyday" | Fireboy DML's and Wizkid's |
| BlackPink "Jump" | Tyla's |
| Daniel Caesar "Always" | Black Sherif's |
| Lady Gaga "Abracadabra" | Wizkid's |
| Ocean Alley "Infinity" | Olamide's and Omah Lay's |
| Rihanna "Diamonds" | Wizkid's |
| Rihanna "Jump" | Tyla's |
| Rihanna "Skin" | Kizz Daniel's |
| Rufus Du Sol "Always" | Black Sherif's |
| Sam Barber "Man Of The Year" | Seyi Vibez's |
| Stephen Sanchez "High" | Davido's |
| The Weeknd, Playboi Carti "Timeless" | Davido's album |

Four more rows on the certified titles, hidden in `singles.rows.json` by the
wrapped artist cells and, for *Gold*, the split row:

| the list's row | the board title it shares |
|---|---|
| Ariana Grande Feat. Iggy Azalea "Problem" | Olamide's |
| Calvin Harris, Clementine Douglas "Blessings" | Asake's |
| Ivan Gough & Feenixpawl Feat. Georgi Kay "In My Mind" | BNXN's |
| The Dreggs "Gold" | Asake's |

Two rows on chart titles only, compared exactly:

| the list's row | the board title it shares |
|---|---|
| Fred again.. & Jozzy "ten" | Seyi Vibez's "Ten" |
| Noah Kahan "Forever" | CKay's "forever"; and Omah Lay's "Forever (Remix)" once the parenthesis is removed |

Four rows that match only once a credit is removed:

| the list's row | the board title it shares |
|---|---|
| Gigi Perez "Sometimes (Backwood)" | Olamide's "Sometimes" |
| Great Gable "Drift" | Teejay & Davido's "Drift (Remix)" |
| Kerser "Bad Habits" | King Promise & Davido's |
| Rihanna "Birthday Cake" | Davido's "Birthday Cake" (ft. Nas & Hit-Boy) |

No /updates line: the feed is Burna Boy's only, and this read holds nothing
of his.

**Not read this time:** every other register. This was a read of the owner's
two downloads, not a weekday sweep. The other registers keep the dates of
their last logged reads.

No host was fetched by an agent for this read. The lists are Paul's own
downloads, read from his files.
