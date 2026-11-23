# Targeted register read — 23 November 2026 (Monday)

Certifications only, Burna Boy and all nineteen board artists. Two registers,
both from Paul's leads of 23 Nov 2026, saved in the working folder
`refresh-1111/certs-1123/`: his screenshot of Music Canada's register
(`ca-music-canada-2026-11-23-wizkid.jpg`), and Audiogest's emailed replies to
fans about Rema (`pt-rema-audiogest-email.jpg`) and about Burna Boy's songs (a
9.8 s screen recording, `paul-video-1000011087.mp4`, and its frame
`paul-video-1000011087-frame.png`). Paul asked for the update ("go ahead with
the cert update").

Music Canada was read at the body with curl and the honest user agent,
`burnaboystats-research/1.0 (+https://burnaboystats.com)`, after its
robots.txt was read in its own step (`User-agent: *`, `Crawl-delay: 30`, no
Disallow). Every request was at least 30 s after the one before. Nothing was
spoofed, challenged or logged into. Portugal keeps no searchable register, so
its evidence is Audiogest's own written answers, which Paul ruled acceptable on
21 Nov 2026 (`targeted-sweep-2026-11-21.md`, "Essence" and "Rush").

**Status: two new plaques for Burna Boy (Portugal), one for Rema (Portugal),
and two of Wizkid's Canadian plaques move up a tier. Applied.**

| code | register | newest batch read | result |
|---|---|---|---|
| CA | Music Canada, its register on musiccanada.com, read by agent: the WP REST award list (`/wp-json/wp/v2/award`) for every award posted since 19 Nov, newest first (7 rows), and searched by each title (`search=brown skin girl`, `search=joro`); and the public search, `/gold-platinum/?_gp_search=wizkid` | November 23, 2026: awards 90140 and 90141 | 2 board upgrades, both Wizkid's: "Joro" and "Brown Skin Girl" Gold → Platinum. Nothing new for Burna Boy or the other eighteen. The other five rows since 19 Nov: Wizkid's three of 20 Nov (applied that day), RÜFÜS DU SOL *Innerbloom* and Alyssa Grace *Bloodstream* |
| PT | AFP/Audiogest, which keeps no searchable register: its emailed replies to fans, signed by its Operations Specialist and relayed by Paul on 23 Nov 2026 | the replies as relayed; no batch | 2 new for Burna Boy: "On the Low" Gold and "For My Hand" Platinum. "Last Last" Platinum, applied on 21 Nov, gains its day. 1 new board plaque: Rema's "Soundgasm" Gold. His "Calm Down" 9× Platinum and "Secondhand" Gold are confirmed at the tiers already held |

## Canada: Music Canada, read at the body

Paul's screenshot showed two rows dated November 23, 2026. Both are on the
register, each matched on artist and on title:

- "November 23, 2026 | Platinum Single | Wizkid | Joro | RCA Records / Sony
  Music Entertainment Canada Inc." — award 90141, 122,519 units, released
  07/04/2019. The Gold the register still lists: "February 4, 2022 | Gold
  Single | Wizkid | Joro | RCA Records / Sony Music Entertainment Canada"
  (award 75613, 40,396.55 units).
- "November 23, 2026 | Platinum Single | Blue Ivy, Saint Jhn, Beyoncé, Wizkid
  | Brown Skin Girl | RCA Records / Sony Music Entertainment Canada Inc." —
  award 90140, 88,907 units, released 07/19/2019. The Gold the register still
  lists: "December 1, 2020 | Gold Single | Beyonce, SAINt JHN & WizKiD | Brown
  Skin Girl (ft. Blue Ivy Carter) | Columbia Records / Sony Music
  Entertainment Canada" (award 71267, 40,751.13 units).

Each total clears the level printed (Music Canada: Gold 40,000 units, Platinum
80,000) and not the next (2× Platinum, 160,000). Both are upgrades on Wizkid's
board in `app/data/afrobeats.ts`: "Joro" and "Brown Skin Girl" read
`{ c: "CA", level: "Platinum" }` (`AFROBEATS_VERIFIED_ON_33`). He stays on 162
plaques in 22 countries; his Gold goes 61 → 59 and Platinum 66 → 68. Neither
record is on another board or on Burna Boy's file.

## Portugal (AFP/Audiogest): its emailed replies

| record | plaque | evidence | applied |
|---|---|---|---|
| "On the Low" (Burna Boy) | 🇵🇹 Gold, dated 2 June 2026 | Audiogest's reply to a fan, signed by its Operations Specialist, in a thread titled "Request for Sales…": "The following certifications have been awarded: - On the Low: Gold (2 June 2026) - For My Hand: Platinum (12 July 2024) - Last Last: Platinum (2 October 2026)". Paul's screen recording `paul-video-1000011087.mp4` (the frame `paul-video-1000011087-frame.png`; seven frames across the 9.8 s read the same) | Release row and a 2026 row in the dated log, dated 2026-06-02. A new plaque; Portugal was already his. AFP's single Gold is 12,000 units |
| "For My Hand" (Burna Boy feat. Ed Sheeran) | 🇵🇹 Platinum, dated 12 July 2024 | The same reply | Release row and a 2024 row in the dated log, dated 2024-07-12. A new plaque; AFP's single Platinum is 25,000 units |
| "Last Last" (Burna Boy) | 🇵🇹 Platinum, dated 2 October 2026 | The same reply | Applied on 21 Nov from Audiogest's card of October's Platinum awards, which printed no day. Its dated-log row gains `date: "2026-10-02"`; no new plaque |
| "Soundgasm" (Rema) | 🇵🇹 Gold, dated June 20, 2021 as printed | Audiogest's reply to a fan, from the same sender, titled "Audiogest: Rema Certifications": "The following certifications have been awarded to Rema: "Secondhand" – Gold (January 30, 2026); "Calm Down" – 9× Platinum (February 10, 2022); "Soundgasm" – Gold (June 20, 2021)". Paul's screenshot `pt-rema-audiogest-email.jpg` | Rema 87 → 88; Portugal was already his (`AFROBEATS_VERIFIED_ON_33`). Priced at AFP's current single Gold, 12,000 units |
| "Calm Down" (Rema) | 🇵🇹 9× Platinum | The same reply | Already held at 9× (AFP's weekly TOP, from week 24 of 2025). Nothing moves |
| "Secondhand" (Don Toliver ft. Rema) | 🇵🇹 Gold | The same reply | Already held (AFP's own card, July 2026's Gold batch). Nothing moves |

**The reply about Burna Boy's songs names no artist.** It is matched to Burna Boy because
all three titles are his and only his together, and because its "Last Last"
Platinum of 2 October 2026 is the award Audiogest's own October card prints as
"1ª PLATINA | Last Last | Burna Boy | Warner Music". The 21 Nov precedent is the
same: the "Essence" replies did not name Wizkid or Tems either.

**The dates in the reply about Rema are quoted as printed, not as award
days.** "Calm Down" is dated February 10, 2022, but its 9× Platinum is on AFP's
weekly TOP only from week 24 of 2025. "Secondhand" is dated January 30, 2026,
but AFP's own card put its Gold in July 2026's batch. Those dates may be first
awards or release dates. So Rema's sweep document quotes "Soundgasm"'s date
and the board row carries none (board rows carry no dates). The reply about
Burna Boy's songs does not have this problem: its "Last Last" date falls in
the month the October card covers, and none of its three dates is a release
date. It is logged as printed.

## What moved

- **Burna Boy:** 253 → 255 plaques, still 27 countries. As lead artist 196 →
  198; international and lead 127 → 129. Platinum 107 → 108 and Gold 103 → 104.
  The 2026 international log 79 → 80 (97 → 98 with Nigeria); 2024 20 → 21.
  "On the Low" 10 → 11 certifications (its song page's copy and search) and
  "For My Hand" 9 → 10 (search). His priced count on /compare 180 → 182.
  On /records/visualized, Portugal (12) is now sixth alone above Denmark and
  Australia (10 each), so the phone list shows 6 countries, not 8.
- **On This Day:** 12 July (2024) and 2 October (2026) gain their first Burna
  Boy milestones; 2 June gains a second.
- **Board:** 1,107 → 1,108 (Rema 87 → 88). Wizkid holds at 162.
- **Country boards:** 1,260 → 1,263 records. Portugal 1,267,000 → 1,316,000
  units (lines 1,279,000 → 1,328,000), 30 → 33 plaques, none of the three
  new records shared. Canada 6,680,000 → 6,760,000 units (lines 7,080,000 →
  7,160,000), 66 plaques, two Platinum steps on records no other artist holds.
- **/updates:** one line for Burna Boy's two Portuguese plaques, not `big`. The
  board's rows get none (the feed is Burna Boy's).

`CERTS_VERIFIED_ON` moves to 2026-11-23. The day is logged in
`TARGETED_REGISTER_READS` with the codes read: CA and PT.

## Limits of this read

- **Music Canada** was read for what it posted since 19 Nov and for the two
  titles, not in full. The 20 Nov read (`targeted-sweep-2026-11-20.md`) covers
  what came before.
- **Portugal** has no register to read. A reply covers only what the fan asked
  about, so other titles may hold awards no reply has named yet.
