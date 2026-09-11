# Certification unit thresholds — 27 bodies, sourced at each body

Researched 10 Sep 2026 by a 15-agent workflow (1.67M tokens, 480 tool calls, 0 errors);
the six heaviest countries were independently re-derived by an adversarial verifier.
Full machine-readable record with every source URL, quote and caveat: `CERT-THRESHOLDS.json`.

**22 of 27 sourced at the body. 5 returned null, correctly.**

## THE FINDING THAT GOVERNS THE WHOLE FEATURE

**"Units" is not a common currency.** These bodies do not all measure the same thing,
and a naive sum would add 30,000,000 French *streams* to 70,000 Australian *units*.

| basis for SINGLES | countries |
|---|---|
| sales-equivalent **units** — directly comparable | 15: NG, UK, US, CA, NZ, AT, CH, DE, IT, AU, ZA, PT, ES, BR, HU |
| raw **streams**, body publishes a download-equivalence → normalisable | 4: FR, DK, NO, NL |
| raw **streams**, no ratio published → NOT normalisable | SE, MX |
| **PLN revenue** → not normalisable (albums fine) | PL |
| nothing published | 5: GR, BE, CO, CZ, SK |

**19 of 27 can be put on one scale for singles.** Every conversion below is the
body's OWN published figure — nothing is invented.

### Normalisation, using each body's own arithmetic

| | published (streams) | ÷ | = sales-equivalent units |
|---|---|---|---|
| FR single Gold | 15,000,000 | 150 | **100,000** |
| FR single Platinum | 30,000,000 | 150 | **200,000** |
| FR single Diamond | 50,000,000 | 150 | **333,333** |
| DK single Gold | 4,500,000 | 100 | **45,000** |
| DK single Platinum | 9,000,000 | 100 | **90,000** |
| NO single Gold | 3,000,000 | 100 | **30,000** |
| NO single Platinum | 6,000,000 | 100 | **60,000** |
| NL single Gold | 10,000,000 | 215 | **46,512** |
| NL single Platinum | 20,000,000 | 215 | **93,023** |
| NL single Diamond | 50,000,000 | 215 | **232,558** |

- **FR** — 1 download = 150 streams
- **DK** — 1 download = 100 enheder
- **NO** — 1 download = 100 salg
- **NL** — 1 single sale = 215 streams

### Cannot be normalised — exclude and SAY SO

- **SE** — singles are capped streams; downloads excluded since 2018 and NO download-equivalence published
- **MX** — singles are raw audio streams; AMPROFON publishes no stream-to-unit ratio
- **PL** — singles are measured in PLN REVENUE, not units (albums ARE units)
- **GR** — IFPI Greece's site is fully reachable and was read in full — it simply does not publish its certification thresholds. Every page on ifpi.gr was fetche
- **BE** — Two-part failure. (1) The certifying body's own site, brma.be, publishes NO certification criteria: I fetched https://www.brma.be/ and enumerated its 
- **CO** — The site itself is fully readable — the body simply does not publish its unit thresholds anywhere. This is a 'does not publish', not a 'could not reac
- **CZ** — Identical hard connectivity failure to SK — same server. ifpicr.cz resolves to 62.109.154.161, but curl times out after 25s on both https and http for
- **SK** — Both candidate hosts are network-unreachable from every path available to this session — this is a hard connectivity failure, not a paywall or a bot c

## The table as published by each body

Raw, un-normalised. `—` = tier does not exist at that body, or is not published.

| | single Silver | Gold | Platinum | Diamond | album Silver | Gold | Platinum | Diamond |
|---|---|---|---|---|---|---|---|---|
| **AT** | — | 15,000 | 30,000 | — | — | 7,500 | 15,000 | — |
| **AU** | — | 35,000 | 70,000 | — | 20,000 | 35,000 | 70,000 | 500,000 |
| **BE** | — | — | — | — | — | — | — | — |
| **BR** | — | 40,000 | 80,000 | 300,000 | — | 40,000 | 80,000 | 300,000 |
| **CA** | — | 40,000 | 80,000 | 800,000 | — | 40,000 | 80,000 | 800,000 |
| **CH** | — | 15,000 | 30,000 | — | — | 10,000 | 20,000 | — |
| **CO** | — | — | — | — | — | — | — | — |
| **CZ** | — | — | — | — | — | — | — | — |
| **DE** | — | 300,000 | 600,000 | 1,500,000 | — | 75,000 | 150,000 | 750,000 |
| **DK** | — | 4,500,000 | 9,000,000 | — | — | 10,000 | 20,000 | — |
| **ES** | — | 50,000 | 100,000 | — | — | 20,000 | 40,000 | — |
| **FR** | — | 15,000,000 | 30,000,000 | 50,000,000 | — | 50,000 | 100,000 | 500,000 |
| **GR** | — | — | — | — | — | — | — | — |
| **HU** | — | 5,000 | 10,000 | — | — | 2,000 | 4,000 | — |
| **IT** | — | 100,000 | 200,000 | 2,000,000 | — | 25,000 | 50,000 | 500,000 |
| **MX** | — | 22,000,000 | 44,000,000 | 220,000,000 | — | 70,000 | 140,000 | 700,000 |
| **NG** | 25,000 | 50,000 | 100,000 | — | 12,500 | 25,000 | 50,000 | — |
| **NL** | — | 10,000,000 | 20,000,000 | 50,000,000 | — | 40,000,000 | 80,000,000 | 200,000,000 |
| **NO** | — | 3,000,000 | 6,000,000 | — | — | 10,000 | 20,000 | — |
| **NZ** | — | 15,000 | 30,000 | — | — | 7,500 | 15,000 | — |
| **PL** | — | 125,000 | 250,000 | 1,000,000 | — | 15,000 | 30,000 | 150,000 |
| **PT** | — | 12,000 | 25,000 | 250,000 | — | 3,500 | 7,000 | 70,000 |
| **SE** | — | 6,000,000 | 12,000,000 | — | — | 15,000 | 30,000 | — |
| **SK** | — | — | — | — | — | — | — | — |
| **UK** | 200,000 | 400,000 | 600,000 | — | 60,000 | 100,000 | 300,000 | — |
| **US** | — | 500,000 | 1,000,000 | 10,000,000 | — | 500,000 | 1,000,000 | 10,000,000 |
| **ZA** | — | 20,000 | 40,000 | — | — | 25,000 | 50,000 | — |

## Verifier verdicts (six heaviest, re-derived independently)

- **NG** — AGREES. No numeric correction. Every figure, both ratios, the tier set, the multiplier rule and all four quoted strings reproduce exactly off the body's own pages. Three non-numeric notes for the record:

1. "Sales + streaming equivalents" is slightly loose. TCSN never says "sales" — the wording is "on-demand streaming and digital downloads", and the application page adds "All TCSN certification awards da
- **UK** — AGREES. No corrections — every figure in the claim matches the BPI's own page exactly (singles 200k/400k/600k, albums 60k/100k/300k, no Diamond, multi-platinum as literal multiples of the Platinum threshold), and both quoted passages are verbatim.

Two non-contradicting notes for whoever consumes this, neither of which changes a claimed value:

1. Completeness, not error: the same threshold section also c
- **CA** — AGREES. No figure is wrong. Six accuracy caveats worth carrying into publication:

1. MISSING LADDER, not a wrong one. The claim's album row states 40,000/80,000/800,000 with no date qualifier in the numeric fields (the "after 1 May 2008" caveat only appears later, in the multiplier prose). Music Canada publishes a SECOND, higher album ladder for albums released BEFORE May 1, 2008: Gold 50,000, Platinum 1
- **FR** — AGREES. No corrections to any figure — all four singles values, all four album values, both conversion ratios, the freemium ratio, the ladder shape, the 4x Diamant ceiling and both register anomalies reproduce exactly.

One trap found that is worth recording so nobody "corrects" this figure downward later. SNEP contradicts itself on the single Platine threshold. Its own historique PDF (https://snepmusique
- **NZ** — AGREES. No corrections — every figure in the claim reproduces exactly from RMNZ's own documents, the source URL is the body's own site, and the single/album split is not conflated (singles 15,000/30,000; albums 7,500/15,000, correctly the lower pair for albums). Four additive notes, none of which change a number:

1. COMPILATIONS. Rule 2.4's opening sentence covers "Albums, Singles and Compilations", and 
- **US** — DISPUTED. The numbers in the claim are, I believe, operationally CORRECT -- but the claim is mis-sourced on one of them, and the cited page will actively contradict anyone who checks it. That is why agrees=false, not because 10,000,000 is wrong.

1) THE REAL PROBLEM -- album Diamond. The claim says album Diamond = 10,000,000 and cites https://www.riaa.com/gold-platinum/about-awards/. That page's Full-Length

## Rules the engine needs, from the bodies themselves

- **AT** — Silver: no. Diamond: NO DIAMOND TIER. Austria does not award Diamond at all. The Richtlinien recognise exactly two levels throughou. Multiplier: NOT DEFINED BY THE BODY. The Richtlinien set minimum quantities for Gold and Platin only and contain no formul
- **AU** — Silver: yes. Diamond: A distinct, separate award — not Nx Platinum. Code s.10.10: 'The threshold for a Diamond Award is 500,000 sale. Multiplier: Literally N x the 70,000 Platinum threshold, and ARIA's Code proves it with its own worked example under s.10.
- **BR** — Silver: no. Diamond: DIAMOND IS A DISTINCT THRESHOLD, NOT A MULTIPLE OF PLATINUM. Nacional Diamante = 300,000 units (7.5x Ouro, 3.7. Multiplier: Two separate ladders, and only Platinum is a plain multiple. Platina Duplo = 2x Platina (160,000) and Platina 
- **CA** — Silver: no. Diamond: Diamond is a NAMED, published tier that is numerically exactly 10x Platinum. Singles and post-May-2008 albums:. Multiplier: Literally N times the Platinum threshold of 80,000, and Music Canada publishes the whole ladder rather than a 
- **CH** — Silver: no. Diamond: No Diamond at all. The Edelmetall-Richtlinie's category list (Ziff. 5) contains only Gold, Platin and multiple. Multiplier: Literally N x the Platinum threshold, and the guideline enumerates each step explicitly: singles Doppelplatin 
- **CO** — Silver: no. Diamond: Diamante IS awarded and is named by the body as one of its three tiers, and it appears throughout the register. Multiplier: Not published, and its register gives no sign of one: the certifications PDF records a single flat tier per ro
- **DE** — Silver: no. Diamond: Diamond is a DISTINCT threshold, not a multiple of Platinum, and it is capped at one award. Albums 750 000 uni. Multiplier: Explicitly defined, and it is NOT a simple N-times-Gold ladder — BVMI skips the even Gold multiples because th
- **DK** — Silver: no. Diamond: NO DIAMOND. IFPI Danmark does not award a Diamond certification. The criteria table has exactly four named col. Multiplier: Literally N x the Platinum threshold. The body's own table lists Guld / Platin / Dobbelt Platin / Trippel Plat
- **ES** — Silver: no. Diamond: NO DIAMOND. Promusicae awards only Disco de Oro and Disco de Platino — both are its registered trademarks ("Di. Multiplier: N x the named base award. Promusicae's own award register offers exactly two award types in its filter (values
- **FR** — Silver: no. Diamond: Distinct published threshold at its own level, not a computed multiple of Platinum. For SINGLES, Diamant = 50,. Multiplier: Not a uniform 'N x Platinum'. For ALBUMS the platinum ladder is literally N x 100,000 but stops at triple: pla
- **HU** — Silver: no. Diamond: Not currently awarded. Gyémánt (Diamond) was a real tier historically — the body's own history table gives it . Multiplier: Literally N times the Platinum threshold, and MAHASZ states it in those words for both categories: 'A platina 
- **IT** — Silver: no. Diamond: Italy does award Diamante, and it is a named tier with its own row — but numerically it is exactly 10x the Pla. Multiplier: Literally N times the Platinum threshold, published as an explicit ladder rather than left to inference. Album
- **MX** — Silver: no. Diamond: Diamond is a DISTINCT published threshold with its own number, not a shorthand for N× Platinum — though arithm. Multiplier: Not defined anywhere in the criteria PDF. What AMPROFON's own live register does show is that levels STACK cum
- **NG** — Silver: yes. Diamond: There is NO Diamond tier at TCSN. The launch announcement defines the programme as "The awards (silver, gold a. Multiplier: Multi-Platinum = literally N x the Platinum threshold. The certification application page lists the levels an 
- **NL** — Silver: no. Diamond: Diamant is a DISTINCT threshold, not a multiple of Platina. Single Diamant = 50,000,000 streams (2.5x the 20M . Multiplier: There is NO multiplier tier any more. NVPI's own news page states: 'Meervoudig Platina bestaat sinds dit jaar 
- **NO** — Silver: no. Diamond: No Diamond tier. Both criteria pages say only 'IFPI Norge utsteder de offisielle gull og platina-troféene' — g. Multiplier: The body publishes NO written multiplier rule. Its own trophy register (https://ifpi.no/trofe/trofeoversikt/) 
- **NZ** — Silver: no. Diamond: There is no Diamond tier at RMNZ. Rule 2.4 awards only "Gold and Platinum status", the About page lists only G. Multiplier: NOT PUBLISHED. RMNZ's rules and its About page define exactly two statuses — Gold and Platinum — and give one 
- **PL** — Silver: no. Diamond: Diamond IS a distinct, separately published threshold — not an Nx multiple of Platinum. For albums (muzyka roz. Multiplier: ZPAV does NOT use an open-ended Nx multiplier — it publishes a fixed, explicitly enumerated ladder that stops 
- **PT** — Silver: no. Diamond: Diamante is a distinct published threshold, not merely Nx Platina: 250 000 single units / 70 000 album units. . Multiplier: Awards are 'atribuídas, sucessiva e não cumulativamente'. Art. 16.3: 'Contam para novo Galardão, as vendas fís
- **SE** — Silver: no. Diamond: Ifpi Sverige does not award Diamond. The published format table contains only Guld and Platina columns, and a . Multiplier: NOT PUBLISHED. Ifpi Sverige publishes exactly two levels, Guld and Platina, in its only threshold table. No 2x
- **UK** — Silver: yes. Diamond: There is NO Diamond tier at the BPI. The published tier list is Silver, Gold, Platinum, Multi-Platinum only, a. Multiplier: Literally N times the Platinum threshold. The table row reads "Multi-Platinum — Multiples of 600k" (singles) a
- **US** — Silver: no. Diamond: Diamond is a named, distinct tier but its value is numerically 10x Platinum: "Diamond® 10,000,000 units", date. Multiplier: Literally N times the Platinum threshold: 1,000,000 units per Platinum step. RIAA's Certification Levels table
- **ZA** — Silver: no. Diamond: No Diamond tier at all. The word "Diamond" does not appear anywhere in RiSA's Certification Levels document; t. Multiplier: Literally N times Platinum, expressed as a fixed increment per step. Albums (post-2024): Platinum 50,000 and "

## The deep hunt (10–11 Sep 2026) — seven unpriceable bodies, searched beyond their own sites

Paul: find them somewhere. Every figure returned graded A (body's own site) / B
(its own archive) / C (IFPI's published list) / D (secondary only); **only A–C is
publishable here.** Each was independently re-derived before being applied.

| body | result | grade | applied? |
|---|---|---|---|
| **Belgium** | BRMA sets the thresholds; Ultratop, its awards operator, publishes them — singles 10k/20k/100k for Belgian or Dutch/French-sung records, **20k/40k/200k for all other repertoire**; albums 10k/20k/100k | **B** | ✅ other-repertoire tier |
| **Czechia** | 9 Mar 2026 rules: single 2.5M / 5M, album 5M / 10M **subscription streams**, with the body's own `1 download = 222` | **A** | ✅ normalised ÷222 |
| **Slovakia** | same rulebook: single 850k / 1.7M, album 1.75M / 3.5M, `1 download = 217` | **B** | ✅ normalised ÷217 |
| Sweden | thresholds confirmed; the *absence* of any sale-equivalence is explicit and deliberate at the body | A | ✗ still unconvertible |
| Poland | singles 125,000 zł / 250,000 zł; no revenue→units conversion exists | A | ✗ still unconvertible |
| Greece | current levels are "stream points" from an unauthenticable screenshot of a private email; historic 2013 album levels are grade C but physical-era and marked historic | **D** | ✗ |
| Colombia | album levels only, from IFPI's June 2013 list; **no singles threshold has ever existed at any grade**; ASINCOL is defunct | C (albums) | ✗ no board plaque is a Colombian album |

**IFPI's consolidated "International Certification Award Levels" list exists and
the June 2013 edition is retrievable on Wayback.** Its current edition lives at
p.206 of the Global Music Report Premium Edition (£19,950), so it is not.

Burna's not-comparable plaques: **13 → 10**. Remaining: Sweden 6, Poland 2,
Colombia 1, Greece 1.

## Corrections landed from the compare-page audit (11 Sep 2026)

- **Brazil: Internacional table, not Nacional.** The research had said so in
  capitals; the file carried the Nacional integers and priced 15 plaques at double.
- **Spain** gains a multiplier caveat (same situation as AT, NO).
- **South Africa** gains a *vintage* note: RiSA doubled its thresholds for sales
  after 1 Jan 2024 and prints both regimes. See the rule question below.
- **Netherlands**: two cells rounded a floor upward; floor division now.

## OPEN — a rule question for Paul

**Eleven bodies changed thresholds inside the 2018–2026 window** (ZA, ES, FR, HU,
IT, MX, NL, PL, PT, SE, DE). The decided rule — current thresholds for everyone —
overstates any plaque awarded before a body *raised* its levels, on a page whose
promise is "at least". Options: (a) keep current + ‡ disclosure (live now for ZA);
(b) price at the lowest threshold the body has applied since 2018 — every figure a
true floor, recent plaques understated; (c) era-correct where dated, lowest where
not. The `vintage` field and ‡ footnote are the plumbing for whichever is chosen.

## The floor rule — established, then set aside for today's thresholds (11 Sep 2026)

Paul first delegated the choice and the floor rule was applied; on seeing the
full table — Italy's single Platinum at 30,000 against a published 200,000 — he
chose **today's thresholds for every body**: "it only makes sense that way."
So the PRICING values are today's published levels, the floors established below
are kept in a `floor` field for the record, and every body that raised its
levels carries ‡ on screen saying a plaque awarded before the rise may have
cleared a lower bar. The three passes below are what established the floors.

Established by three passes over the eleven bodies that moved:
1. **Extract** — one agent per body, from the body's own dated rules (grade A on
   ten, B on Mexico). 22 agents, 3.2M tokens.
2. **Verify** — independent re-derivation. Three "disputes", all enrichments: the
   extractors had missed **FR single Diamond 233,333** and **DE single Diamond
   1,000,000**, both of which the site prices.
3. **Red team, maximum effort** — one agent per body told to *break* the claim.
   2.5M tokens. Eight floors survived every attack. Three broke:

| | what broke | resolution |
|---|---|---|
| **Mexico** | the 30,000-unit single "floor" is from before Nov 2020; singles have been raw streams since, and every Mexican single here is from that regime | singles **stay excluded** — a unit floor from a different measure is not a floor |
| **Poland** | same, and worse than the research said: ZPAV went revenue-only on **1 Mar 2017**, not 2025 | singles **stay excluded** |
| **Germany** | a lower 150,000/300,000 single band existed for records first released 2003–May 2014 | **not applied** — BVMI keys to release date and every German single here was released 2016+; 200,000/400,000 is the band that ever applied to them |

The Mexican and Polish breaks are the trap I pointed the red team at in advance;
the German one is the refinement they found unprompted.

**The floors as applied** (pricing value → today's):

```
ZA  single 10,000/20,000        → 20,000/40,000       album 15,000/30,000 → 25,000/50,000
ES  single 20,000/40,000        → 50,000/100,000
FR  single 66,666/133,333/233,333 → 100,000/200,000/333,333   (10M/20M/35M streams ÷ 150, same-period ratio)
HU  single 1,500/3,000          → 5,000/10,000        album 1,000/2,000 → 2,000/4,000
IT  single 15,000/30,000/300,000 → 100,000/200,000/2,000,000
MX  album  30,000/60,000/300,000 → 70,000/140,000/700,000     (singles excluded)
NL  single 15,000/30,000        → 46,511/93,023       (Diamant 232,558 unchanged — no lower level existed)
PL  album  10,000/20,000/100,000 → 15,000/30,000/150,000      (singles excluded)
PT  single 5,000/10,000/100,000 → 12,000/25,000/250,000
DE  single Diamond 1,000,000    → 1,500,000           (Gold/Platinum 200,000/400,000: the band that applied)
SE  unchanged
```

**Design fixture under today's thresholds:** Gbona **915,333**, Essence **6,180,000**
(the latter down from the design's 6,340,000 only by the Essence 7× → 3× correction).
Under the floor rule they would have read 808,333 / 6,086,666 — recorded in the
tests for the trail.
