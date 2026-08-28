# BNXN — international certifications, verified at each body

**28 Aug 2026.** All ten read by me directly at the issuing register, not taken
from an agent. The sweep's own verifier agents died on the usage limit, so every
row here was re-read by hand.

| Country | Body | Title | Tier | Date | Credit as the register prints it |
|---|---|---|---|---|---|
| 🇺🇸 US | RIAA | Finesse | **Gold** | 03.02.2025 | `PHEELZ & BNXN` |
| 🇺🇸 US | RIAA | Mood | **Gold** | 09.05.2024 | `WIZKID — MOOD (FEAT. BNXN)` |
| 🇬🇧 UK | BPI | Finesse | **Gold** | 14.11.2025 | `PHEELZ & BNXN` |
| 🇬🇧 UK | BPI | Propeller | **Silver** | 02.08.2024 | `JAE5 FT DAVE & BNXN` |
| 🇬🇧 UK | BPI | Mood | **Silver** | 02.08.2024 | `WIZKID FT BUJU` |
| 🇨🇦 CA | Music Canada | Finesse | **Platinum** | 20.12.2023 | `Pheelz` ⚠ |
| 🇨🇦 CA | Music Canada | Mood | **Gold** | 21.07.2023 | `Wizkid — Mood (Ft. Buju)` |
| 🇳🇿 NZ | RMNZ | Finesse | **Gold** | 08.02.2024 | `Pheelz And BNXN` |
| 🇳🇿 NZ | RMNZ | Mood | **Gold** | 02.10.2025 | `WizKid feat. Buju` |
| 🇫🇷 FR | SNEP | Finesse | **Platine** | 29.05.2025 | `PHEELZ & BNXN` |

**Ten plaques across five countries**, plus Nigeria's 55 → **65 plaques in six
countries.**

## Two things this verification turned up

**The dual stage name was load-bearing.** *Mood* is filed at BPI as
`WIZKID FT BUJU`, at Music Canada as `Mood (Ft. Buju)` and at RMNZ as
`WizKid feat. Buju` — the pre-2022 name. A BNXN-only search returns none of them.
At BPI, searching `BNXN` returns Finesse and Propeller and **not** Mood; only the
`BUJU` search surfaces it.

**⚠ Music Canada credits *Finesse* to `Pheelz` alone.** The register does not name
BNXN, though the recording is billed "Pheelz & BNXN" and Warner Records is the
label on both. Counted, with the same ⚠ convention this project already uses for
Rema's *Secondhand* Canadian Gold, which Music Canada credits to Don Toliver
alone. Music Canada also carries a Gold row for *Finesse* on the same date,
superseded by the Platinum.

**No collisions.** RMNZ returns 9 rows for "Finesse" and 16 for "Mood"; exactly
one of each names BNXN or Buju.

## How each was read
- **RIAA** — `riaa.com/gold-platinum/?tab_active=default-award&se=BNXN`. The tier
  is not in the row markup; it is in the row's own share metadata
  (`data-share-desc`), which reads "earned RIAA Gold Award for FINESSE".
- **BPI** — `certified-awards.bpi.co.uk/?search=<term>` with `HX-Request: true`.
  The field is `search`, not `q`; `q` is the artist-dropdown autocomplete and
  silently returns the unfiltered page.
- **Music Canada** — FacetWP filters client-side, so a GET with `?gp_search=` or
  `?_search=` returns the unfiltered page with an identical byte count. POST to
  `/wp-json/facetwp/v1/refresh` with `{"facets":{"gp_search":["<term>"]},
  "template":"goldplatinum"}` and parse `template` from the JSON.
- **RMNZ** — RadioScope TablePress 2052, per `reference-rmnz-radioscope`.
- **SNEP** — `snepmusique.com/les-certifications/?interprete=bnxn`.
