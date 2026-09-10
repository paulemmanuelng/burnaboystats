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
| **Nigeria** | **Separated, never deleted.** Headline is international certified units (26 countries); Nigeria carries its own line and a toggle folds it in. |

## Why Nigeria is separated — the reason matters

Not "it doesn't hold much weight." It holds enormous weight: **668 of 1,212 plaques,
55% of the dataset**, at a 100,000-unit Platinum. Excluding it on importance grounds
is an editorial judgment someone can accuse you of making to favour an artist.

The defensible reason is **comparability**. `certifications.ts:82` already records it:
TCSN's register is **REQUEST-BASED** — "absence from it proves nothing." So a gap
between two artists in Nigeria may measure which label filed paperwork, not which
record sold. Nigeria is the only one of the 27 where that is true; elsewhere the
register is comprehensive and absence is real.

**This follows the site's own existing convention, it does not invent one.**
`certifications.ts:767` already ships `intlCertHistory`, which filters NG out of the
year-on-year log, and its comment states the rule: separate it where it would
distort a comparison, and count it everywhere else — "the worldwide total, the
country grid, every release's row."

Consequence to design for: **excluding Nigeria takes the dataset from 1,212 plaques
to 544.** The US, UK, Canada, France and New Zealand become the spine of every
comparison, and artists whose plaques are mostly Nigerian will look thin on the
default view. True, not a flaw — but the layout has to survive a lopsided pair.

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
| **Burna Boy** | **has one** — `BURNA` in `afrobeats.ts:2109` (he is not inside `afrobeatsArtists`, since the board is his peers, but the record exists and carries an image). |

**All 16 artists have an image. The artist-totals display rule works as-is.**

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

## Real magnitudes (measured 10 Sep 2026) — what the layout must survive

`intl` = plaques outside Nigeria, i.e. what the DEFAULT view shows.

```
artist            rel  plq  intl  NG   lead  feat  countries(intl)
Burna Boy          85  234   171   63   157    77  25
Wizkid             85  156    85   71    97    59  20
Rema               46   82    45   37    70    12  20
Tems               15   71    63    8    30    41  18
Tyla               10   62    60    2    61     1  22
Davido             70   91    31   60    63    28  8
Omah Lay           47   62    19   43    46    16  8
Ayra Starr         26   41    18   23    30    11  11
CKay               10   28    18   10    25     3  14
BNXN               55   65    10   55    46    19  5
Asake              73   80     9   71    54    26  3
Fireboy DML        28   36     8   28    31     5  5
Victony            19   24     5   19    22     2  5
Olamide            52   54     2   52    48     6  1
Black Sherif       24   24     0   24    22     2  0
Seyi Vibez        102  102     0  102    76    26  0
```

### The empty state is not an edge case — it is two of the sixteen

Excluding Nigeria, **Seyi Vibez (102 plaques) and Black Sherif (24) have ZERO**.
Olamide has 2 of 54, Asake 9 of 80, Victony 5 of 24. So "this artist has no
international certifications" is a **first-class state the design must handle
gracefully** — Seyi Vibez vs anyone renders an empty column on the default view, and
if that looks like a bug the page is broken for a quarter of the roster.

The Nigeria toggle is the answer, and this is the argument for surfacing it
prominently rather than burying it: for these artists it is the only view with data.

### The real sample pair, for the mock

```
Gbona   [Lead single]  FR Diamond · CA Platinum · CH Platinum · SE Gold
                       DK Gold · PT Gold · NZ Gold · UK Gold        (8 plaques, 0 NG)
Essence [Lead single]  ZA 7x Platinum · US 5x Platinum · CA 3x Platinum
                       NZ 3x Platinum · NG 2x Platinum · UK Platinum
                       CH Platinum · FR Gold                        (8 plaques, 1 NG)

union of international country rows for this pair: 10
```

**~10 country rows is the typical song-vs-song table.** Not 30, not 3. Design for 10,
survive 25 (Burna's full artist view).

Note what this pair demonstrates about Nigeria: **"Gbona" has no Nigerian plaque at
all** while "Essence" has 2x Platinum. That is not a sales difference — TCSN's
register is request-based and "Gbona" (2018) predates it. Including Nigeria would
hand Essence a lead built entirely on paperwork. This single pair is the clearest
possible illustration of why NG is separated, and it should probably be the mock.

### Tier tokens already exist — do not invent colours

```
--tier-diamond  #31A1C0    --tier-diamond-ink  --tier-diamond-edge
--tier-platinum #EFEDE6    --tier-platinum-ink --tier-platinum-edge
--tier-gold     #FBB417    --tier-gold-ink     --tier-gold-edge
--tier-silver   #848F9E    --tier-silver-ink   --tier-silver-edge
```
`-ink` is for the tier WORD in running text (the fills fail AA on paper); `-edge` is
the badge border. In dark mode each ink IS its fill, so it is a no-op there.

### Where the button actually lives — the two layouts are NOT symmetric

- **Mobile:** `app/components/MobileCerts.tsx:565` — `<Link href="/share" className={styles.actionPrimary}>Make a stat card ↗</Link>`. This is the gold pill in Paul's screenshot. Compare takes this slot; stat card moves to secondary.
- **Desktop:** `app/certifications/page.tsx:162-165` — there is **no stat-card button at all**, only two `btn btnSecondary` links ("Visualized", "Methodology ↗"). So on desktop there is nothing to replace and Compare needs a new home.

Gold is standardised: `--gold-fill` / `--gold-bright` / `--gold-dim` / `--ink-on-gold`,
one gradient ramp for every gold action on the site. Any gold pill MUST carry
`-webkit-text-fill-color` and `transform: translateZ(0)` — without the layer promotion
at rest the label does not paint on iPhone until hover. That bug shipped twice.

## Entry points: every artist's certs page, not just Burna's (Paul, 10 Sep 2026)

Cheaper than it sounds — **one dynamic route serves all fifteen board artists**
(`app/afrobeats/[artist]/page.tsx`), and **`MobileCerts` is shared** by that route and
by `/certifications`. So there are two components to touch, not sixteen pages.

### Mobile — the action bar is currently OFF for the fifteen, and for a good reason

`app/afrobeats/[artist]/page.tsx:196` passes **`showActionBar={false}`**. The bar's
only content is `<Link href="/share">Make a stat card ↗</Link>`, and **`/share` builds a
BURNA stat card** — meaningless on Wizkid's page. That is why the bar is suppressed
there, not an oversight.

So the fix is not "turn the bar on":

| | primary | secondary | filter icon |
|---|---|---|---|
| **Burna** (`/certifications`) | **Compare ↗** | Make a stat card | keep |
| **The 15** (`/afrobeats/[artist]`) | **Compare ↗** | *(none — no stat card exists for them)* | keep |

The bar becomes worth showing on all sixteen for the first time, because Compare is
the first action in it that is meaningful for every artist.

### Desktop — nothing to replace, and a natural neighbour already exists

- `/certifications` (`page.tsx:162-165`): two `btn btnSecondary` links — "Visualized",
  "Methodology ↗". No stat-card button at all.
- `/afrobeats/[artist]` (`page.tsx:473-487`): a row of `btn` links ending with
  **`<Link href="/certifications">Burna Boy's ledger ↗</Link>`** — the page already
  points at a rival ledger, so Compare belongs beside it.

### Pre-select the artist from the page you came from

`MobileCerts` already receives **`subject={a.name}`** and the artist route has
`a.slug`. So the entry link should carry the artist — e.g. `/compare?a=wizkid` — and
land with that side already filled and the other side waiting. From Burna's page it
is `?a=burna-boy`. **A Compare button that opens two empty pickers wastes the one
thing the context already knows.**

Design consequence: the page has a **one-side-filled** state as its most common
arrival, not the empty state. That should be the hero mock, not a blank comparison.
