# Certified-units comparison — spec and data readiness

A page that compares two artists by the **certified units** behind their plaques:
song vs song ("Gbona" vs "Essence"), or artist total vs artist total.

## Decided (Paul, 10 Sep 2026)

| | |
|---|---|
| **Framing** | **Certified units, never "units sold."** A plaque is a FLOOR: 3× Platinum in Nigeria means *at least* 300,000 and could be 590,000. The sum of thresholds is a minimum. This is the page's edge, not its weakness — a floor for both artists under identical rules. |
| **Features** | Toggle, **default ON** (Paul, 12 Sep 2026 — was OFF until then). Every plaque the artist holds counts; the reader flips it to lead credits only. |
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

### Three states, not two (corrected 10 Sep 2026 — Paul)

**Nobody is cut. All sixteen stay selectable.** An artist with a few international
plaques is thin, not empty, and the earlier note lumped four artists together when
only two are actually the problem.

```
Black Sherif    0 intl countries
Seyi Vibez      0
Olamide         1   UK
Asake           3   NZ UK US
BNXN / Victony  5
Fireboy DML     5
...
Tyla           22
Burna Boy      25
```

1. **Normal** — ~10 rows. Gbona vs Essence. Design target.
2. **Thin** — 1 to 5 rows. Olamide has exactly one country (UK). A one-row table
   must not read as a rendering fault.
3. **Zero** — Black Sherif and Seyi Vibez only. Needs a real empty state that points
   at the Nigeria toggle, because that is the view where their data lives.

### The hard case is LOPSIDED, not empty — and it is far more common

```
Burna vs Olamide       union 25 rows -> Olamide has a value in  1, blank in 24
Burna vs Asake         union 25 rows -> Asake      has a value in  3, blank in 22
Burna vs Victony       union 25 rows -> Victony    has a value in  5, blank in 20
Burna vs Fireboy DML   union 25 rows -> Fireboy    has a value in  5, blank in 20
```

Any of Burna / Tyla / Rema / Wizkid against a thin artist produces a table that is
mostly blank down one side. **This is the state to design hardest for** — it is more
frequent than either the normal case or the empty one, and done badly it looks like
the page failed to load rather than like a real difference in certified reach.

Three things worth the designer's attention here:
- A blank cell must read as **"no plaque"**, explicitly — never as empty space.
- Row order matters when one side dominates. Sorting by the larger side buries the
  handful of rows where the smaller artist actually competes.
- Consider collapsing the tail: *"and 20 further countries where only Burna Boy is
  certified"* — one summary row instead of twenty blank ones. That keeps the
  contested rows visible, which is the part a reader came for.

### The old note, kept for the counts

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

### The compare page's OWN floating button is the Afrobeats Board (Paul, 10 Sep 2026)

`"The Afrobeats Board ↗"` → `/afrobeats`. Not share, not reset — the Board.

This closes a circuit rather than adding a control:

```
artist ledger  --[Compare]-->  compare page  --[The Board]-->  /afrobeats  --> another ledger
```

A reader who has just watched two artists priced against each other is one tap from
the room where the other fourteen live, which is the next thing they actually want.

**The treatment already exists — do not redraw it.**
`app/afrobeats/[artist]/charts/page.tsx:243` ships it as
`<Link href="/afrobeats" className="btn btnPrimary">The Afrobeats Board ↗</Link>`.
On mobile it takes the `.actionPrimary` slot — the same gold pill the Compare button
occupies on the certifications screens — and carries the same two iPhone guards
(`-webkit-text-fill-color` and `transform: translateZ(0)`).

### Pre-select the artist from the page you came from

`MobileCerts` already receives **`subject={a.name}`** and the artist route has
`a.slug`. So the entry link should carry the artist — e.g. `/compare?a=wizkid` — and
land with that side already filled and the other side waiting. From Burna's page it
is `?a=burna-boy`. **A Compare button that opens two empty pickers wastes the one
thing the context already knows.**

Design consequence: the page has a **one-side-filled** state as its most common
arrival, not the empty state. That should be the hero mock, not a blank comparison.

## Nigeria default — Paul: "default Nigeria on when both are home market artists"

Tested against all 120 possible pairs before implementing, because the rule has two
readings that disagree on 34 of them.

**NG share of plaques, which is what "home market" means as a measurable property:**
```
Black Sherif 100%   Seyi Vibez 100%   Olamide 96%   Asake 89%   BNXN 85%
Victony 79%   Fireboy DML 78%   Omah Lay 69%   Davido 66%   Ayra Starr 56%
--- 50% line ---
Wizkid 46%   Rema 45%   CKay 36%   Burna Boy 27%   Tems 11%   Tyla 3%
```

**Rule A — both artists >=50% Nigerian** (Paul's literal wording): fires on **45 pairs**.
**Rule B — the pair's own international view is unusable** (either side has zero, or
the union is tiny): fires on **35 pairs**. They agree on only 23.

### Where they diverge, and why neither is enough alone

**Rule A alone MISSES 12 pairs that render an empty column** — every pairing of Black
Sherif or Seyi Vibez against a big international catalogue:
```
Seyi Vibez vs Burna Boy   0 v 25 countries
Seyi Vibez vs Tyla        0 v 22
Black Sherif vs Wizkid    0 v 20
```
Rule A leaves these on the international view because Burna, Tyla and Wizkid are not
home-market artists — so one column is blank top to bottom. That is exactly the
failure the decision was made to prevent.

**Rule B alone SKIPS 22 pairs Paul's wording would flip** — two majority-Nigerian
artists who nonetheless have a perfectly usable international view:
```
Davido vs Ayra Starr      8 v 11 countries, union 12 rows
Omah Lay vs Davido        8 v 8,  union 10
Fireboy DML vs Omah Lay   5 v 8,  union 10
```
Rule B keeps these international. Whether that is right depends on what the rule is
FOR: preventing an empty page (Rule B), or showing two Nigerian artists in the market
where their careers actually happened (Rule A).

### DO NOT hardcode a list of "home-market artists"

Whatever rule is chosen, it must be **derived from the plaque data**, not typed. A
literal list goes stale the day Asake takes a US plaque — and Asake sits at 89%, four
plaques from moving. `NG share >= 0.5` and `intl countries == 0` are both one-line
derivations off the existing arrays.

### Whenever the default is flipped, SAY SO on screen

Silently including Nigeria is the bad version, because the whole reason it is
separated is that TCSN's register is request-based and therefore not comparable
between artists. A visible line — *"Nigeria included: Seyi Vibez has no international
certifications"* — keeps the page honest and explains itself in one sentence.

### DECIDED (Paul, 10 Sep 2026): fire on either clause

```
Nigeria opens ON when:
    (ngShare(A) >= 0.5 AND ngShare(B) >= 0.5)     -- both are home-market artists
 OR  intlCountries(A) == 0 OR intlCountries(B) == 0  -- either column would be blank
```

**57 of 120 pairs.** 28 fire on the first clause only, 12 on the second only, 17 on both.

A third clause — "or the international union is under ~6 rows" — was tested and is
**provably redundant: it changes 0 pairs.** Every non-home-market artist holds at
least 14 international countries, so a thin union already implies both sides are
home-market, which clause one catches. Two clauses, no magic number. Do not re-add it.

Both clauses derive from the plaque arrays. Nothing is typed:
```
home-market (NG share >= 50%): Asake, Ayra Starr, BNXN, Black Sherif, Davido,
                               Fireboy DML, Olamide, Omah Lay, Seyi Vibez, Victony
zero-international:            Black Sherif, Seyi Vibez
```

**The 12 pairs clause two rescues** — all of them a blank column under the literal
wording alone:
```
Burna Boy vs Black Sherif   25 v 0      Black Sherif vs Tyla    0 v 22
Burna Boy vs Seyi Vibez     25 v 0      Black Sherif vs CKay    0 v 14
Black Sherif vs Wizkid       0 v 20     Wizkid vs Seyi Vibez   20 v 0
Black Sherif vs Rema         0 v 20     Rema vs Seyi Vibez     20 v 0
Black Sherif vs Tems         0 v 18     Tems vs Seyi Vibez     18 v 0
                                        Tyla vs Seyi Vibez     22 v 0
                                        Seyi Vibez vs CKay      0 v 14
```

Note the asymmetry this creates and design for it: in those 12, one artist's entire
figure comes from Nigeria and the other's barely moves. **The "why" line is doing real
work there** — without it the page looks like it quietly changed the rules to make a
matchup happen.
