# Every plaque change this research produces

Compiled 27 Aug 2026 after four sweeps (Burna 231 plaques, board 830, a
last-chance pass at seven walled bodies, and hand verification in Sweden and
Colombia). Matched on **artist together with title**, per the rule.

## Summary

| | Count |
|---|---|
| Plaques **added** | **2** (one already live, one proposed) |
| Plaques **removed** | **0** |
| Tier **changed** | **1** (already live) |
| Claims investigated and **rejected** | **9** |

The overwhelming result is that **the site was already right.** Across ~1,060
plaques, four register sweeps produced one live addition, one proposed addition,
one tier correction, and no removals at all.

---

## ADDED — already live on main

**1. Burna Boy — "On the Low" — 🇸🇪 Sweden, Platinum**
GLF/Grammotex certificate **10448**, awarded 2023-08-16. The song had no
certification data on the site at all. Took the catalogue **230 → 231**.

## TIER CHANGED — already live on main

**2. Burna Boy — "On the Low" — 🇳🇬 Nigeria, Silver → Gold**
TCSN's register gives Gold. Moves a plaque between tiers; count unchanged.

## ADDED — proposed, not yet applied

**3. Rema — "Bubalu" — 🇨🇴 Colombia, Diamond** *(would be plaque 232 / board 831)*

Read by me in Pro Musica Colombia's own register PDF:

    BUBALU  FEID FEAT REMA  UNIVERSAL MUSIC  ÁLBUM  DIAMANTE  29/11/2023  COLOMBIA

Rema's "Bubalu" entry currently holds US Platinum ×2 and ES Platinum but no
Colombian row. Note the register lists the format as ÁLBUM, and carries a
separate `BUBALU | FEID | SINGLE | DIAMANTE | 6/03/2024` row crediting Feid
alone — **the row naming Rema is the 2023 ÁLBUM one.**

This also fixes a body error: the site records Colombia's certifying body as
**"Sony Music Colombia"**, a label. The real body is **Pro Musica Colombia**
(pro-musica.co), the IFPI national group for Colombia, Ecuador and Peru. Two
earlier sweeps concluded Colombia had no body because IFPI's own local-associations
page still points at `apdifcolombia.com`, a domain suspended since Dec 2023.

## REMOVED — nothing

No plaque on the site was refuted at any body. Where a register could not be
read, that is recorded as unreadable, not as grounds for removal.

---

## Investigated and REJECTED — no change

| Claim | Why rejected |
|---|---|
| Asake — "Bad Influence" NG 2× Platinum | Already adjudicated and **HELD**. No Asake recording of that title exists; it is **Omah Lay's** *Get Layd* track. TCSN's `artiste` field is in error. Confirmed by Paul. |
| Wizkid — "Everyday" NG Silver → Platinum | TCSN credits **Fireboy DML** — "Everyday (Fireboy Dml)" |
| Asake — "Reason" NG → 5× Platinum | TCSN credits **Omah Lay**; Asake's own row reads Platinum, matching the site |
| Ayra Starr — "Away" NG → 2× Platinum | TCSN credits **Davido**, who already holds ×2 |
| Rema — "Bounce" NG Silver → Gold | TCSN credits **Bella Shmurda & Seyi Vibez** |
| Victony — "Risk" NG Silver → Gold | TCSN credits **Davido ft. Popcaan** |
| Asake — "2:30" NG understated | Already carries `x: 4`; my report dropped the field |
| Burna Boy — "No Stress" ZA Platinum | **Not a Burna song.** Already on the site under **Wizkid**. Across 1,908 archived RiSA captures there is no "No Stress" capture, and RiSA's own URL for *Ginger* — the real Burna feature — reads plain `artist=Wizkid` |
| 11 Swedish, 4 Belgian, 5 Greek, 14 South African rows | All **match the site exactly** |

---

## Not plaque changes, but corrections worth making

- **🇨🇴 Colombia body**: "Sony Music Colombia" → **Pro Musica Colombia**, with register URL.
- **🇳🇱 Netherlands URL**: `nvpi.nl` → **`goudplatina.nl/database`** — NVPI's own register, not the trade association's homepage.
- **🇬🇧 UK URL**: `bpi.co.uk/award/` → **`certified-awards.bpi.co.uk`** — the searchable register, which also has real per-title permalinks.
- **🇧🇪 Belgium body**: BEA has renamed to **BRMA** and publishes no register; **Ultratop** is the Belgian register-keeper.
- **11 unlinked countries** gain a verified body URL (`results/verified-body-urls.json`).
- **🇨🇭 Switzerland**: add a note that certification there is **request-based** — IFPI Schweiz publishes thresholds only and charges CHF 75 + VAT for a GfK check, so absence never implies uncertified. Same shape as the existing TCSN note.
- **🇸🇪 Sweden**: seven of eight plaques now carry certificate numbers. The eighth, **Location (Dave ft. Burna Boy)**, has never been sourced — and the gaps in his 2023-08-16 run are **10449, 10454, 10456**.
