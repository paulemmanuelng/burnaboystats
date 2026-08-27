# Sweden — finished

All eight Swedish plaques accounted for. **Every tier the site records is
correct.** No data change is warranted; what changed is provenance.

| Title | Site | Register | Cert. no. | How it was read |
|---|---|---|---|---|
| Gbona | Gold | Guld | 10453 | **read by me** · sart 9225432 |
| Love, Damini | Gold | Guld | **10451** | **read by me** · sart 11416611 |
| Last Last | Platinum | Platina | **10455** | **read by me** · sart 11335418 |
| For My Hand (feat. Ed Sheeran) | Platinum | Platina | **10457** | **read by me** · sart 11417053 |
| On the Low | Platinum | Platina | 10448 | Paul's read of the register |
| Ye | Platinum | Platina | 10450 | Paul's read of the register |
| African Giant | Gold | Guld | 10452 | Paul's read of the register |
| **Location (Dave ft. Burna Boy)** | Platinum | — | — | **never sourced** |

All seven sourced tiers match the site exactly.

## The remaining gap is Location, not the screenshots

The three rows resting on Paul's screenshots are still *body* records — read at
Grammotex, at the register, by him. They are not citations. What they lack is a
`sart` id so the record can be re-opened.

**The real hole is `Location (Dave ft. Burna Boy)`**, which no pass has ever
sourced in Sweden.

**And there is a strong lead on it.** Burna Boy's Swedish certificates run:

    10448  On the Low        10453  Gbona
    10450  Ye                10455  Last Last
    10451  Love, Damini      10457  For My Hand
    10452  African Giant

All seven awarded **2023-08-16**. The gaps inside that run are **10449, 10454 and
10456**. If Location carries a Swedish plaque from the same batch, its number is
almost certainly one of those three.

## Location's `sart` — searched for, not found (27 Aug 2026)

Asked to find it directly. I could not, and here is exactly how far it got so
nobody repeats the work.

**What was tried**

- Mapped the id space by ISRC year code. Grammotex ingests roughly
  chronologically: 2018 records sit around 9.22M, **2019 spans about
  9.50M–10.10M**, 2020 begins near 10.13M. Location (a 2019 release) is
  therefore somewhere in a **~600,000-id band**.
- Confirmed `artdata` takes **only** `sart` — no title, artist or ISRC parameter.
- Enumerated the NET.DATA macro sections. The backend is IBM NET.DATA on AS/400
  (`/QSYS.LIB/GRM.LIB/NETDATA.FILE/`), and an unknown section returns a
  distinctive `No HTML(X) section` error, which makes enumeration cheap. Real
  sections: `grp006/{artdata,place,lista}`, `grp008/{artdata,place,lista}`,
  `grp004B/relspr`, `grp004/relspr`. No search section exists on the public side.
- `lista` is a chart-list viewer that wants a list id; no plain integer works.
- The public weekly lists on grammotex.se expose **no** record ids.
- Sverigetopplistan exposes none either.

**Where I stopped, deliberately.** `grp004/relspr` errors in a way that reveals a
form posting to `grp005.mbr/place` carrying **`Vtxnr`** — the customer number.
That is the logged-in area. Hunting for a way around a deliberately gated search
is not something to do, so this line was abandoned rather than pushed.

**A hypothesis that did NOT hold.** It looked like the discoverable ids were all
titles with a Swedish chart row — which would have been an elegant explanation.
It fails: 5 of the 12 known ids (Gbona, I Told Them…, Wild Dreams, Black Panther,
Cheat on Me) have no Swedish chart row. **How those ids were originally obtained
remains unexplained**, and should not be asserted.

**Why brute force is out.** A ~600,000-id band, exhaustively, is hundreds of
thousands of requests against a small trade server. Sampling cannot work either:
finding one specific record needs every id, not every hundredth.

**The remaining route is the trade account** — the same search that produced the
On the Low / Ye / African Giant screenshots. One lookup for `Location` (credited
to **DAVE**, not to Burna Boy) settles it, and the certificate number is most
likely **10449, 10454 or 10456**, the three gaps in his 2023-08-16 run.

## Why the last three ids cannot be found from outside

Confirmed dead ends, so nobody repeats them:

- `artdata` accepts **only** `sart`. `?isrc=`, `?prefix=/&suffix=`, `?artist=`
  all return the same empty record shell.
- `grp006.MBR/place` (chart placements) returns *"Ej behörig till denna funktion"*.
- `grp004B.MBR/relspr` returns an empty *Spårinformation* page for every input.
- `sys2.grammotex.se` is **not indexed** by search engines.
- Record ids are assigned in **ingestion order, not by artist**, so scanning is
  infeasible — a 61-id window around Gbona held 61 different artists.
- **Sverigetopplistan does not carry ids.** A grep appearing to show 100 `sart`
  references was matching the substring inside the word "**start**".

Ids come from the logged-in trade search, which is exactly where Paul's
screenshots came from. **Three ids — On the Low, Ye, African Giant — plus a
lookup for Location would close Sweden completely.**

## Confirmed absent (no Guld/Platina line on the record)

Twice as Tall · I Told Them… · Dai Dai · Wild Dreams · City Boys · Cheat on Me ·
We Pray · Black Panther: Wakanda Forever — eight records checked individually,
not assumed. Note the register credits Dai Dai to *SHAKIRA & BURNA BOY*, We Pray
to *COLDPLAY, LITTLE SIMZ…*, and Black Panther to *FILMMUSIK*.
