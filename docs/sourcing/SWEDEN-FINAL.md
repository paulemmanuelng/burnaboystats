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
