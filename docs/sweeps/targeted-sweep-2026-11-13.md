# Targeted register read — 13 November 2026 (Friday)

Certifications only. Four registers, read for two items the owner sent that
day ("update", with two screenshots):

1. his own search of the BPI register (UK), a hand read, showing a new Burna
   Boy plaque;
2. an X post by a parody fan account claiming three plaques for *Boom* (Major
   Lazer, MOTi, Ty Dolla $ign, Wizkid & Kranium): "2× Plat in Norway 🆕", "Plat
   in Denmark", "Gold in France". A fan post is a lead, never a source, so each
   claim was read at its register: IFPI Norway, IFPI Danmark and SNEP.

**Status: two new plaques, one of them Burna Boy's.**

- *Sekkle Down* (feat. J Hus) 🇬🇧 **Silver**, Burna Boy: the BPI's register,
  "Latest Certification 13.11.2026", read by the owner by hand. His first
  plaque for the song.
- *Boom* (Major Lazer, MOTi, Ty Dolla $ign, Wizkid & Kranium) 🇳🇴 **2× Platinum**,
  Wizkid: IFPI Norway's trophy list, dated 04/11/2026. Norway is a new country
  for him.

Both are applied in the same edit. Burna Boy goes from 251 to 252 plaques
(Silver 34 → 35), with no new country: the UK is his already. The release is
new to the site, so `singles` grows from 76 to 77 and the dated log gets a
13 Nov 2026 UK event. Wizkid goes from 159 to 160 plaques and from 21 to 22
countries (`AFROBEATS_VERIFIED_ON_27`), and the board from 1,095 to 1,096.
The fan post's Danish and French claims are plaques the board already holds,
and neither register shows a newer row. `CERTS_VERIFIED_ON` moves to
2026-11-13, and the day is logged in `TARGETED_REGISTER_READS` with the four
codes below.

| code | register | newest batch read | result |
|---|---|---|---|
| UK | BPI, the certified-awards register on bpi.co.uk: read by Paul by hand (his screenshot of the register's award card, 13 Nov 2026), not by agent | his search for *Sekkle Down*: one card | "BURNA BOY \| SEKKLE DOWN \| Format Single \| Corporate Group/Label ATLANTIC \| Latest Certification 13.11.2026 \| Released 11.12.2017 \| Award Silver": **new, applied** |
| NO | IFPI Norway, ifpi.no/trofe/trofeoversikt/: page 1 (100 rows, newest first) and the list's search for "Wizkid" and for "Major Lazer" | 11/11/2026 (page 1's top row). The *Boom* row, dated 04/11/2026, is second; it was not on page 1 when the 11 Nov sweep read it (newest row then 23 Oct), so it was posted after that read | "04/11/2026 \| Major Lazer, MOTi, Ty Dolla $ign, Wizkid & Kranium \| Boom \| Mad Decent under exclusive license to Because Music \| Singel \| Platina \| 2x": **new, applied**. The register's only *Boom* row and its only row naming Wizkid. No lower Norwegian tier for it is listed. No other board row on page 1 |
| DK | IFPI Danmark, ifpi.dk/certificeringer-0, pages 0 and 1 (100 rows, newest first), and the register's own node for *Boom*'s Platin (ifpi.dk/node/4291) | the batch of 3 Nov 2026 (30 rows), down to 6 Oct | 0. No *Boom*, Major Lazer or Wizkid row in the newest 100. Node 4291 still reads "Track \| Major Lazer Feat. Moti Ty Dolla $ign... \| Boom \| Warner Music \| Platin", 01.08.2017: the Platin already on the board (⚠, the register cuts the credit before Wizkid). The fan post's "Plat in Denmark" is that plaque |
| FR | SNEP, snepmusique.com/les-certifications/: page 1 (newest constat first), and the list's search for title "boom" and for artist "major lazer" | constat 06/11/2026 (30 rows on page 1), the batch the 11 Nov sweep read | 0. One row for the record: "Singles \| BOOM \| MAJOR LAZER FEAT. MOTI, TY DOLLA $iGN, WIZKID & KRANIUM \| BECAUSE MUSIC / WARNER MUSIC FRANCE \| Or \| sortie 27/11/2015 \| constat 22/06/2018": the Or already on the board. The fan post's "Gold in France" is that plaque |

## United Kingdom: the BPI, read by Paul by hand

The BPI's register bars every bot (`certified-awards.bpi.co.uk/robots.txt`:
`User-agent: *`, `Disallow: /`), so UK plaques are read from the owner's own
screen. His screenshot of the register on bpi.co.uk, taken 13 Nov 2026, is the
read. It is kept as the evidence in the sweep's working folder,
`refresh-1111/certs-1113/bpi-sekkle-down-paul-2026-11-13.png`.

The card, as the register prints it:

- BURNA BOY | SEKKLE DOWN
- Format: Single | Corporate Group/Label: ATLANTIC
- Latest Certification: 13.11.2026 | Released: 11.12.2017
- Award: Silver

Matched on artist and title. The register files the record under Burna Boy
alone; Spotify prints his single as "Sekkle Down (feat. J Hus)" (2017), and it
is track 4 of *Outside* (Atlantic, 2018), whose tracklist the site already
carries. That single is the only *Sekkle Down* in his discography. The site
had no plaque for the song (`app/data/certifications.ts`), so this is a new
release row, titled and credited the way the site credits his other leads:
"Sekkle Down", "feat. J Hus", 2017. Its role is lead by Rule C (on his own
releases, and first-listed on kworb's track, Spotify id
1Rbp5dCkJhaC9KYXGzv6Qe), so it is filed under Singles. The cover resolver
gives it *Outside*'s sleeve, as it does "Ye".

/compare prices it at the BPI's level for a Silver single, 200,000 units
(`app/data/certThresholds.ts`).

## Boom: three claims, three registers

The board already held two plaques for *Boom* under Wizkid (`app/data/afrobeats.ts`,
"Featured appearances"): 🇫🇷 Gold and 🇩🇰 Platinum. Each register was matched
on artist and title together, the way those two rows were (Paul's ruling of
28 Sep 2026: one recording, and Wizkid is on it).

- **Norway: confirmed, new.** IFPI Norway prints the full credit, so this row
  carries no ⚠. 2× Platina, dated 04/11/2026. Applied as one plaque at its
  current tier, `{ c: "NO", level: "Platinum", x: 2 }`.
- **Denmark: already held.** The register's Platin of 01.08.2017 stands; no
  newer row.
- **France: already held.** SNEP's Or of 22/06/2018 stands; no newer row.

No /updates line: the feed is Burna Boy's only.

Not read this time: every other register. This was a read of the owner's two
items, not a weekday sweep; the Tuesday and Thursday registers keep the dates
of their last logged reads (11 Nov 2026).

robots.txt was read first on each host the agent fetched. ifpi.no bars only
/wp-admin/ for `*`. ifpi.dk bars /search/ (so its site search was not used)
and admin paths, not the certificeringer list or node pages. snepmusique.com
bars ClaudeBot and other training crawlers by name and allows `*` on
/les-certifications/. The User-Agent was "burnaboystats-bot". The BPI was not
fetched.
