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
| Burna Boy — We Pray | Gold | blank, S41–S44 2024 | The site dates the award **2025**; the chart run was Sep–Nov 2024. The windows do not overlap, so the blank barely bears on it. |
| Burna Boy — Own It | Gold | blank in ~20 rows, 2019 W48 – 2020 W21 | The strongest doubt of the six. It constrains only Nov 2019 – May 2020; a later off-chart award would be invisible here. |
| Burna Boy — Gbona | Gold | never charted, 130 weeklies | No register evidence either way. Burna Boy's first Portuguese chart appearance in this register is *Own It*, 2019 W48. |
| Burna Boy — Location | Gold | never charted, 105 weeklies | No register evidence either way. |

**Nothing is withdrawn.** A "never charted" line cannot support a removal, and the two
blanks that could be checked turned out to be already sourced in this repo.

**One flag worth keeping:** the four Burna Boy Portuguese rows — Gbona, Location,
Own It, We Pray — carry **no per-row register citation anywhere in the repo**, unlike
every board row, which was read at a body. They are the least-evidenced Portuguese
claims on the site. The route to settle them now exists: AFP's monthly carousels on
facebook.com/audiogest, readable logged out, back through 2026 and earlier.

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
