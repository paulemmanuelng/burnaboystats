# Portugal — every board row checked against AFP's own Galardão column

**27 Aug 2026.** Prompted by a claim that turned out to be false, which exposed
that AFP *does* publish a register — the project had it recorded as having none.

## Where the register actually is

| | |
|---|---|
| `afp.org.pt` | **dead** — Wayback terminates January 2016 |
| audiogest.pt home / news | no certification data at all |
| **Charting titles** | the **`Gal.` column** on the weekly TOP PDF |
| **Off-chart awards** | monthly carousels on **facebook.com/audiogest** — the CURRENT batch is readable logged out; older months are not (the page serves only the latest ~10 photos and does not scroll) |
| **Off-chart awards, the route that works** | the **ANNUAL `TOP AFP/AUDIOGEST` reports** — same `Gal.` column, cumulative, and up to **10 000 positions deep** instead of 200. Linked from the same index as the weeklies. This is how the four Burna Boy rows were finally settled. |

Index: `https://www.audiogest.pt/tabelas-oficiais-de-vendas-?lang=pt` → TOPS
Semanais by year → one PDF per Semana. Codes: `OU` = Ouro, `PL`…`9PL` = Platina.
Each PDF holds four sections — Top 200 Álbuns, Stream Álbuns, Streams, Singles.

## Verified at the body — 7 of 17

24 weeks of 2026 were parsed (Semanas 1–18 and 29–34), matching each row on
**title AND artist**, never title alone.

| Artist | Title | Site | AFP `Gal.` | |
|---|---|---|---|---|
| Wizkid | One Dance | Platinum ×8 | **8PL** | ✓ |
| Rema | Calm Down | Platinum ×9 | **9PL** | ✓ |
| Tyla | Water | Platinum ×4 | **4PL** | ✓ |
| Tems | Wait For U | Platinum ×2 | **2PL** | ✓ |
| Tems | Raindance | Platinum ×2 | OU → PL → **2PL** | ✓ |
| Tems | Me & U | Platinum | OU → **PL** | ✓ |
| Burna Boy | Dai Dai | Platinum | OU → **PL** | ✓ |

The column tracks upgrades live — *Raindance* is visible moving Gold → Platinum
→ 2× Platinum across consecutive weeks — so a blank cell on a charting title is
meaningful, not merely missing.

## The pre-2026 rows, read in the 2018–2025 weeklies

A second pass swept the earlier years — 130 weekly PDFs for 2018–2020 alone.

| Artist | Title | Site | AFP `Gal.` | |
|---|---|---|---|---|
| Burna Boy | Jerusalema (Remix) | Platinum ×2 | blank → OU → PL → **2PL** | ✓ |
| CKay | love nwantiti | Platinum ×6 | PL → 2PL → … → **6PL** | ✓ |
| Ayra Starr | Santa | Platinum | OU → **PL** | ✓ |
| Omah Lay | soso | Platinum | **PL** | ✓ |

**Eleven of seventeen are now confirmed at the body**, each with the register's own
row and, where the ladder was visible, the full upgrade path.

## The other six — and why NONE is withdrawn

Two findings look alike and are not:

- **Blank while charting** — AFP printed the row, the column was live in that same
  PDF, and it printed nothing. That is a reading, and it is evidence against an award
  *during that run*.
- **Never charted** — the weekly register only badges titles currently on chart, so a
  non-charting title produces silence. Silence is not evidence in either direction.

| Title | Site | Finding | Resolution |
|---|---|---|---|
| Tyla — Chanel | Gold | blank, 2025 S48 – 2026 S7 | **Already sourced.** `tyla-certifications-v1.md` records it in AFP's **March 2026 monthly award table** — an off-chart award, landing after the run ended. The blanks are exactly what that predicts. |
| Tyla — Truth or Dare | Gold | never charted | **Already sourced** — AFP's **February 2026** table, explicitly "awarded to a song that never charted". |
| Burna Boy — We Pray | Gold | blank, S41–S44 2024 | **Now confirmed** — `OU` at 168 in the **Semana 08 de 2025** weekly. The award came in Feb 2025, months after the 2024 run ended, which is why every 2024 row is blank. |
| Burna Boy — Own It | Gold | blank in ~20 rows, 2019 W48 – 2020 W21 | **Now confirmed** — `OU` at 244 in the **TOP Anual 2020**, blank at 2824 in the 2019 annual. Awarded during 2020, after the weekly run. |
| Burna Boy — Gbona | Gold | never charted, 130 weeklies | **Now confirmed** — `OU` at 1555 in the **TOP Anual 2022**. Never charting was irrelevant: the annual reaches 10 000. |
| Burna Boy — Location | Gold | never charted, 105 weeklies | **Now confirmed** — `OU` at 568 in the **TOP Anual 2020** as *Dave feat. Burna Boy*, blank at 698 in 2019. |

**Nothing is withdrawn.** A "never charted" line cannot support a removal, and the two
blanks that could be checked turned out to be already sourced in this repo.

**The four flagged rows are now settled — at the body, not the carousels.** The
carousels were a dead end; the annual reports were the answer, and the weekly sweep
had simply been looking at the wrong document. All four Burna Boy Portuguese Golds
are real. Three needed their dates corrected:

| Row | Was | Now | Confirming document |
|---|---|---|---|
| Own It | undated | **2020** | TOP Anual 2020, `244 OU` |
| Location | undated | **2020** | TOP Anual 2020, `568 OU` |
| Gbona | 2023 | **2022** | TOP Anual 2022, `1555 OU` |
| We Pray | 2025 | 2025 ✓ | Semana 08 de 2025 weekly, `168 OU` |

### Two calibrations that make the annuals usable

**The `Gal.` column freezes at the period end, not at publication.** Tested, not
assumed: 11 titles that went from blank to `OU` between 8 Jan and 11 Mar 2021 —
*Levitating*, *34+35*, *Wonder*, *Whoopty*, *Therefore I Am* among them — are **all
still blank** in the TOP Anual 2020, which was published 26 Mar 2021, after every
one of those awards. So an `OU` in an annual means the plaque existed by that
report's last week.

**Absence from an annual may be depth, not fact.** The reports vary enormously:
2019 → 3 000, 2020 → 3 000, **2021 → 1 000**, 2022 → 10 000, 2023 → 200, 2024 → 200.
*Gbona* sits at 1555, so the 2021 annual physically cannot show it — which is why
its award can be bracketed only to 2021-or-2022, and the year recorded is the later
bound. 2025 and 2026 annuals are listed as `#`, unpublished.

**Why the credit test mattered.** In the TOP Anual 2020, Dave's *Location* carries
`OU` at 568 — and Khalid's *Location* sits **blank at 571**, three lines below it,
with Playboi Carti's *Location* also blank in 2022. A title-only match would have
read all three as one plaque.

### The monthly award cards — the route that closes Portugal

**28 Aug 2026.** AFP/Audiogest's monthly batches are published as **award cards**,
one per plaque, printing title / artist credit / label and the tier as a disc
graphic. They are the body's own artefact, and they are the ONLY place Portugal
announces an award to a title that was not charting when the plaque landed. Read
directly, the **March 2026** batch confirmed four plaques the site did not hold
and one it did:

| Artist | Title | Tier | Note |
|---|---|---|---|
| Burna Boy | **Wgft** (Gunna feat. Burna Boy) | Ouro | AFP prints the title `Wgft`, not `WGFT` |
| Victony | **Soweto** (Victony & Tempoe) | 1ª Platina | credited to the ORIGINAL, not Rema's remix |
| Tems | **Fountains** (Drake feat. Tems) | Ouro | featured credit |
| Omah Lay | **understand** | Ouro | register prints it all-lowercase |
| Tyla | Chanel | Ouro | already on the site — now confirmed at the body |

February 2026 likewise confirms **Truth or Dare** (Tyla, Ouro) and **Raindance**
(Dave & Tems, Platina), both already recorded.

**Why no PDF could ever have shown these.** Every one was awarded off-chart:
*Soweto* has never entered Portugal's Top 200 at all (zero rows in 8 annuals and
~290 weeklies); *Wgft* charted four weeks in Feb 2026 with the `Gal.` cell blank
and dropped off before the award; *Fountains* and *understand* sit in the TOP
Anual 2022 unbadged and were not charting in 2026; *Chanel* ran Semanas 48/2025
to 07/2026, blank throughout, and left before the March batch.

**One correction this forces.** Victony's sweep listed 🇵🇹 AFP/Audiogest among his
**proven zeros** — read in full, holding nothing. The reading was accurate and the
conclusion was wrong: a register read in full is a proven zero only for the awards
that register can express. Corrected in `victony-certifications-v1.md`.

**Provenance note.** ineews.eu reproduces these batch tables verbatim and is a
sound way to FIND a row, but it is syndication, not the body — and demonstrably
imperfect: its February article says 42 awards while its table prints 41. Every
row above was confirmed on Audiogest's own card before publication.

## Not confirmed — 1


**Tyla — *Chanel* — recorded Gold.** It charted Semanas 1–7 of 2026, peaking at
**#49** with ten weeks on chart, and its `Gal.` cell is **blank in every one**.
That is not proof of absence: an award granted after it left the chart would
appear only in a monthly carousel. But it is not confirmed at the body, and no
other Portuguese row on the board is in that position.

## Method note

Two false positives were caught and discarded before this table was written:
a title-only search matched **Léo Santa**na for *Santa*, and Limp Bizkit's
*Hot Dog Flavored Water* for *Water*. The parser now requires the title to begin
the row's title field **and** the artist to follow it in the same row.
