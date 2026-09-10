# Certified-units comparison — spec and data readiness

A page that compares two artists by the **certified units** behind their plaques:
song vs song ("Gbona" vs "Essence"), or artist total vs artist total.

## Decided (Paul, 10 Sep 2026)

| | |
|---|---|
| **Framing** | **Certified units, never "units sold."** A plaque is a FLOOR: 3× Platinum in Nigeria means *at least* 300,000 and could be 590,000. The sum of thresholds is a minimum. This is the page's edge, not its weakness — a floor for both artists under identical rules. |
| **Features** | Toggle, **default OFF**. Lead credits only until the reader flips it. |
| **Stat card button** | Compare takes the primary slot on the certifications page; **stat card moves to secondary, it is not removed.** Both layouts — desktop and mobile are separate components. |
| **Threshold scope** | **All 27 countries before anything ships.** No partial launch. |
| **Song/album selected** | Cover art + release name + **artist names**. |
| **Artist totals selected** | Both selected artists' **images**. |

## Two rules the engine must not get wrong

1. **Never sum a release's awards — take the highest.** Gold → Platinum → 2× Platinum
   is the same sales recertified, not three sales. The per-release `certs` arrays hold
   CURRENT level (safe to sum across releases). `certHistory` is an EVENT log and
   summing it would roughly double every figure.
2. **Coverage bias must be visible.** Where a body publishes no threshold the plaque
   contributes zero, which silently penalises whoever holds more plaques in unsourced
   markets. Show per artist: "N plaques excluded — threshold not published."

## Data readiness for the display rules

Measured 10 Sep 2026 from the live data, not assumed.

### Artist images

| | |
|---|---|
| 15 board artists | **15/15** have `image` |
| **Burna Boy** | **none** — he is deliberately NOT in `afrobeatsArtists` (the board is "Burna Boy's peers"). Needs an image in a comparable place. |

### Cover art — THE GAP, and it runs the wrong way

| | releases | with art | missing |
|---|---|---|---|
| Board (15 artists) | 662 | **656** | 6 |
| Burna — albums | 4 | 3 | 1 |
| Burna — singles | 56 | 7 | **49** |
| Burna — features | 25 | 2 | **23** |
| **Burna total** | **85** | **12** | **73** |

**The board is 99.1% covered and Burna is 14%.** `AfroRelease` carries `cover?`;
Burna's `Release` in `certifications.ts` has **no cover field at all**. His art exists
only for the 8 in `albums.ts` and the 14 song pages in `songs.ts`.

So "Gbona vs Essence" would today render Essence with art and Gbona without — on
Burna Boy's own site. **Mechanical to fix, not a blocker:** board covers are Spotify
CDN URLs (`i.scdn.co/image/…`) and were populated once for 656 releases; the same job
for 73 is the same work. Requires adding `cover?` to `Release`.

### Credit lines — a smaller, opposite gap

Burna's `Release` has `credit?` ("feat. Travis Scott", "Dave ft. Burna Boy").
`AfroRelease` has **no credit field**. For a board artist's *lead* releases the credit
is just their own name, which is fine — but for their **featured appearances** the
lead artist is not recorded, so "who is this a feature on?" cannot be shown.

## Build order

1. `certThresholds.ts` — 27 countries × single/album × tier, each from the body's own
   published page, `null` where unpublished. **The long pole and the critical path.**
2. Compare engine + tests (highest-award rule, multipliers, exclusions).
3. Cover-art fill: 73 Burna releases + one artist image. Parallelisable.
4. Design brief — written AFTER 1 and 2, so it carries real rows and real edge cases
   instead of invented ones.
5. The page, then the button swap on both certifications layouts.

Worklist of the 27 countries: `docs/sourcing/CERT-THRESHOLDS-WORKLIST.md`.
