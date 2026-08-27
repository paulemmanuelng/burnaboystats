# Portugal — every board row checked against AFP's own Galardão column

**27 Aug 2026.** Prompted by a claim that turned out to be false, which exposed
that AFP *does* publish a register — the project had it recorded as having none.

## Where the register actually is

| | |
|---|---|
| `afp.org.pt` | **dead** — Wayback terminates January 2016 |
| audiogest.pt home / news | no certification data at all |
| **Charting titles** | the **`Gal.` column** on the weekly TOP PDF |
| **Off-chart awards** | monthly carousels on **facebook.com/audiogest**, readable logged out |

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

## Not confirmed — 1

**Tyla — *Chanel* — recorded Gold.** It charted Semanas 1–7 of 2026, peaking at
**#49** with ten weeks on chart, and its `Gal.` cell is **blank in every one**.
That is not proof of absence: an award granted after it left the chart would
appear only in a monthly carousel. But it is not confirmed at the body, and no
other Portuguese row on the board is in that position.

## Not yet covered — 9

Older titles whose Portuguese chart runs predate 2026, so the weeks sampled
cannot show them: Gbona, Location, We Pray, Own It, Jerusalema (Remix),
Truth or Dare, Santa, soso, love nwantiti. These need the 2018–2025 weeklies,
or the monthly carousels.

## Method note

Two false positives were caught and discarded before this table was written:
a title-only search matched **Léo Santa**na for *Santa*, and Limp Bizkit's
*Hot Dog Flavored Water* for *Water*. The parser now requires the title to begin
the row's title field **and** the artist to follow it in the same row.
