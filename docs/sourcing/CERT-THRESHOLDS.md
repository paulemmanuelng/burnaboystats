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
| **PLN revenue** → not normalisable (albums fine) | PL — **singles priced from 23 Sep 2026 at the 2 zł a single ZPAV's own 2017–2024 rules printed, ¶; see the dated section at the end** |
| nothing published | 5: GR, BE, CO, CZ, SK — (GR priced at IFPI's 2013 level from 20 Sep 2026, ¶; BE/CZ/SK found and priced 10–11 Sep) |

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
- **PL** — singles are measured in PLN REVENUE, not units (albums ARE units) **Priced from 23 Sep 2026: today's złoty levels ÷ 2 zł a single, the value ZPAV's own rules printed from 1 Mar 2017 to the end of 2024 (Paul's decision, ¶) — see the dated section at the end of this file.**
- **GR** — IFPI Greece's site is fully reachable and was read in full — it simply does not publish its certification thresholds. Every page on ifpi.gr was fetche **Priced from 20 Sep 2026 at IFPI's June 2013 level (grade C, historic, ¶) — see the dated section at the end of this file.**
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
| **GR** ¶ | — | 3,000 | 6,000 | — | — | 3,000 | 6,000 | — |
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

¶ GR — IFPI's International Certification Award levels, June 2013 (international-repertoire albums); the body publishes no current level. Applied 20 Sep 2026 — see the dated section at the end.

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
| Poland | singles 125,000 zł / 250,000 zł; no revenue→units conversion exists | A | ✗ still unconvertible → ✅ 23 Sep 2026 at 2 zł a single — ZPAV's rules DID state one, 1 Mar 2017 to end-2024 (see end); Paul's decision |
| Greece | current levels are "stream points" from an unauthenticable screenshot of a private email; historic 2013 album levels are grade C but physical-era and marked historic | **D** | ✗ (11 Sep) → ✅ 20 Sep 2026 at the 2013 level, grade C historic, Paul's decision |
| Colombia | album levels only, from IFPI's June 2013 list; **no singles threshold has ever existed at any grade**; ASINCOL is defunct | C (albums) | ✗ no board plaque is a Colombian album |

**IFPI's consolidated "International Certification Award Levels" list exists and
the June 2013 edition is retrievable on Wayback.** Its current edition lives at
p.206 of the Global Music Report Premium Edition (£19,950), so it is not.

Burna's not-comparable plaques: **13 → 10**. Remaining: Sweden 6, Poland 2,
Colombia 1, Greece 1.

## 11 Sep 2026 (evening) — the Greek and Polish "thresholds" came back, via a fan DM

A contact sent Paul two AI-formatted tables: Greece "Digital Singles
(Streaming-Based), since 2021: Gold 1,000,000 / Platinum 2,000,000 / Diamond
10,000,000 streams", and Poland "Singles: Gold 125,000 PLN / Platinum 250,000
PLN", read as "Gold single = 125k units … total 375k". Re-checked at both bodies
before answering:

- **Greece — still nothing at the body.** All 25 pages of ifpi.gr re-fetched
  (Greek + English, plus the Digital Singles chart with its `Award` column of
  G/P codes). The only "gold"/"platinum" strings on the whole site are album
  titles (*ABBA Gold*, *Solid Gold Hits*) and history trivia. No criteria page,
  no "since 2021", no stream levels, no ratio. Wikipedia's Greece singles row
  reads **3,000 / 6,000 shipments**, cited to IFPI's *International
  Certification Award levels* (June 2013) and a 2012 ifpi.gr page — the last
  figure IFPI ever published for Greek singles, physical-era. The 1M/2M/10M
  table is the same grade-D claim as the private-email screenshot above, now
  wearing an AI table. **Not applied.** Greece stays listed, not priced.
- **Poland — the screenshot confirms the exclusion.** Its own heading is
  "Gross Revenue Thresholds" and its own text says singles are "measured purely
  by overall generated revenue" — 125,000 / 250,000 **PLN**, matching ZPAV's
  regulamin. Treating złoty as units ("125k units") is a currency-to-units
  substitution; there is no per-unit price to divide by. **Not applied.**
  Poland singles stay listed, not priced; Polish albums are units and ARE priced.
  *(23 Sep 2026: "no per-unit price" was wrong. ZPAV's own rules valued one
  single at 2 zł from 1 Mar 2017 to the end of 2024, and the singles are now
  priced at it — see the dated section at the end. "125k units" stays
  rejected: 125,000 zł is 62,500 units.)*
- Stream ≠ unit anywhere on this site. Where a body publishes stream levels
  and no ratio (Sweden, Mexico) the page converts at 100 streams per unit and
  marks it §; a body that publishes no levels at all cannot even get that.

Burna's four listed-not-priced plaques are unchanged: We Pray PL Platinum, Dai
Dai PL Gold, Dai Dai GR Gold, Dai Dai CO Gold (Sony Music Colombia).

## 12 Sep 2026 — every plaque counts (Paul: "no cert should go unseen")

Two changes to the page's defaults and one to its rules, all Paul's call after
seeing "All Eyes on Me" (AKA ft. Burna Boy, 19× Platinum in South Africa)
absent from his total:

1. **Featured appearances count by default.** A plaque the artist holds is a
   plaque; the certifications pages count them. The switch drops to lead
   credits only.
2. **Sweden and Mexico are priced.** Both publish their song levels in streams
   and no download-equivalence, so they were listed and never summed. They are
   now converted at **100 streams to a unit — the ratio IFPI Danmark and IFPI
   Norge publish for the same measure** — and every such line carries a § with
   a footnote saying exactly that. It is the one place the page applies a ratio
   a body did not set. Sources, both grade A:
   - **Ifpi Sverige**, ifpi.se/musikbolag/guld-och-platina (read 12 Sep 2026):
     «Låt (enbart streams) 6 000 000 / 12 000 000» since 1 Jan 2024; the body's
     own page archived 2018-09, 2020-12 and 2023-03 reads 4 / 8 million from
     1 Jan 2018 (recorded as the floor); archived 2017-12 it was units,
     «Singel 20 000 / 40 000», downloads and streams included. Its
     Guld och Platina-guide states songs count *capped* streams only — so the
     figure is a floor twice over. Multi-platinum applications exist (its own
     «Ansökan om multiplatina» form), so N× Platina is body-defined.
   - **AMPROFON**, antecedentes_criterios_certificaciones.pdf (read 12 Sep 2026):
     «Niveles medidos en audio streams — Oro 22,000,000 / Platino 44,000,000 /
     Diamante 220,000,000» for releases from 1 Nov 2020; 9.3 / 18.6 / 93
     million before (recorded as the floor). No multiplier rule in the PDF; its
     register stacks levels, so N× carries the existing caveat.
   A screenshot Paul sent (an AI summary) had Sweden at 5 / 10 million streams
   pre-2024 and a «1 download = 100 streams» rule — the body's own pages say
   4 / 8 million, and the ratio is Denmark's and Norway's, not Sweden's. The
   body was read; the summary was not used.
3. **Unpriced rows never fold.** Poland (złoty of revenue), Greece and Colombia
   (no thresholds) still cannot be summed — 17 plaques across the board, Burna
   4 — but a row carrying one is always on screen, never in the collapsed tail.
   (From 20 Sep 2026, Greece priced ¶: 10 across the board, Burna 3 — the
   section at the end of this file.)

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

## 20 Sep 2026 — Greece priced at IFPI's June 2013 level (Paul's decision)

**Grade C, historic.** Source: IFPI's own "International Certification Award
levels — Updated June 2013", the umbrella body's publication and the last level
ever published for Greece. Evidence file, with the verbatim rows:
[IFPI-AWARD-LEVELS-2013.md](IFPI-AWARD-LEVELS-2013.md). Wayback capture of the
PDF:
https://web.archive.org/web/20140328112251id_/http://ifpi.org/content/library/international-award-levels.pdf

Levels applied:

| format | Gold | Platinum |
|---|---|---|
| Singles | 3,000 | 6,000 |
| Albums — international repertoire | 3,000 | 6,000 |

The domestic-repertoire album column (6,000 / 12,000) applies to no artist on
this site. No Silver, no Diamond, and no multiplier rule — an N× award is priced
as N × Platinum, carried as a `caveat` (†) in the same voice as Austria's and
Mexico's. These are physical-era "unit sales required"; IFPI Greece now
certifies from its streaming Digital Singles chart and states no ratio, so a
plaque awarded today may sit on a different bar. That is what the new
`historic` field on `CERT_THRESHOLDS.GR` says, rendered as the ¶ footnote on
every Greek line of /compare and named on /methodology.

This is a DIFFERENT source from the fan-DM 1M / 2M / 10M "stream points" table
rejected on 11 Sep (grade D, above). That table stays rejected; nothing in it
is used.

Effect, recounted from the data (features on, Nigeria off): not-comparable
plaques across the board **17 → 10** (Colombia 2, Poland 8 remain); Burna
**4 → 3**. Unpriceable country/format pairs in the table 5 → 3 (CO/single,
CO/album, PL/single). The seven Greek plaques, all singles, now priced:

| artist | title | award | units |
|---|---|---|---|
| Burna Boy | Dai Dai | Platinum | 6,000 |
| Wizkid | One Dance (feature) | 3× Platinum | 18,000 † |
| Rema | Calm Down | Platinum | 6,000 |
| Tems | Raindance (feature) | 2× Platinum | 12,000 † |
| Tyla | Water | 2× Platinum | 12,000 † |
| Tyla | Push 2 Start | Gold | 3,000 |
| Tyla | Show Me Love (feature) | Gold | 3,000 |

No Greek album plaque exists on the site, so the album column is exercised by
nothing yet. Per-artist "not comparable" (features on, Nigeria off): Burna
4 → 3, Wizkid 2 → 1, Rema 3 → 2, Tems 3 → 2, Tyla 4 → 1; CKay stays 1 (Poland).

## 23 Sep 2026 — Poland's singles priced at ZPAV's own 2 zł a single (Paul: "we have to use 62,500 until anything changes")

Prompted by a fan table pricing Dai Dai's Polish Gold at 62,500 units and a
group-chat request to make it 125,000 "because they changed the rule". Both
numbers are real; only one is units.

**The source, verbatim** — https://www.olis.pl/terms_oliw (fetched 23 Sep 2026)
prints BOTH rulebooks:

- *«REGULAMIN … (od stycznia 2025)»*, «Niniejszy Regulamin obowiązuje od 1
  stycznia 2025», item 20, «SINGLE AUDIO | Sprzedaż cyfrowa (PLN)»: Złota Płyta
  125 000 zł · Platynowa 250 000 zł · Podwójna Platynowa 500 000 zł · Potrójna
  Platynowa 750 000 zł · Diamentowa 1 000 000 zł · Podwójna Diamentowa
  2 000 000 zł · Potrójna Diamentowa 3 000 000 zł. Złoty only, **no rate**. Its
  item 21 still counts pre-March-2017 sales as «1 płatne pobranie … lub 250 szt.
  streamów … równoznaczne ze sprzedażą 1 singla» but puts no złoty value on one.
- *«REGULAMIN … (do końca 2024)»*, «obowiązuje od 01.08.2021»: «SINGLE CYFROWE
  (ilość / wysokość przychodu) | 25 000 / 50 000 zł | 50 000 / 100 000 zł |
  250 000 / 500 000 zł», and item 4b: «… jest równoznaczna ze sprzedażą 1
  singla, **o wartości 2 zł**».

**The rate's history** (Wayback captures of
bestsellery.zpav.pl/wyroznienia/regulamin.php, 27 of 51 read):

| rulebook («obowiązuje od») | singles row | units at 2 zł |
|---|---|---|
| 01.06.2015 / 01.08.2015 | «SINGLE \| 10 000 \| 20 000 \| 100 000» (units; no zł) | 10k / 20k / 100k |
| 01.03.2017 | «od 20 000 zł \| od 40 000 zł \| od 200 000 zł»; «o wartości 2 zł» first appears | 10k / 20k / 100k |
| 08.11.2017 | «10 000 / 20 000 zł \| 20 000 / 40 000 zł \| 100 000 / 200 000 zł» | 10k / 20k / 100k |
| 01.08.2021 | «25 000 / 50 000 zł \| 50 000 / 100 000 zł \| 250 000 / 500 000 zł» | 25k / 50k / 250k |
| 1 Jan 2025 | 125 000 / 250 000 / 1 000 000 zł, złoty only | **62.5k / 125k / 500k** |

So 2 zł is ZPAV's own figure, printed from 1 Mar 2017 to the end of 2024 —
the sentence itself sits under the clause for sales before 28 Feb 2017, but
units sat beside złoty at exactly 2:1 in every single table from Oct 2017
(the 20171003 capture, still under the 01.03.2017 rules), and that table is
the rate applied. The 2025 rules print no rate, and they raised the album
rate from 20 zł to 35 zł, so the single rate may have moved too. The 11 Sep entry above ("no per-unit price to divide by")
was wrong about that.

**Applied** (`CERT_THRESHOLDS.PL`): `single` 62,500 / 125,000 / 500,000;
`singleRawPln` 125,000 / 250,000 / 1,000,000 zł; `plnPerSingle` 2 — kept out of
`singleRaw`, which /compare and /methodology read as streams. `historic` with
`historicFormat: "single"` puts ¶ on Polish SINGLE lines only (the level is
today's; the RATE is the last one published). `vintage` (‡) now covers both
single rises (1 Aug 2021, 1 Jan 2025). `floor.single` is the 2021 band,
25,000 / 50,000 / 250,000: ZPAV's register dates every Polish single plaque on
the roster 11 Aug 2021 or later.

**Register dates** (POST olis.pl/api/search, category 3, subcategories 6/7/8 =
Złote/Platynowe/Diamentowe, `search_in: contractor`; needs the XHR,
Referer and User-Agent headers or Cloudflare answers 302):

| artist | plaque | ZPAV register | rulebook | units now | cleared then |
|---|---|---|---|---|---|
| Burna Boy | Dai Dai Gold | Gold 2026-08-26 | 2025 | 62,500 | 62,500 |
| Burna Boy | We Pray Platinum (feature) | Gold 2025-07-09, Platinum 2026-06-24 | 2025 | 125,000 | 125,000 |
| Tems | Raindance Gold (feature) | Gold 2026-08-05 | 2025 | 62,500 | 62,500 |
| Tems | Wait For U Gold (feature) | Gold 2024-12-31 | 2021 | 62,500 ‡ | 25,000 |
| Tyla | Water Platinum | Gold 2024-02-07, Platinum 2024-06-05 | 2021 | 125,000 ‡ | 50,000 |
| Rema | Calm Down Diamond | Gold 2023-01-11, 4 Platinum rows 2023, Diamond 2024-01-10 | 2021 | 500,000 ‡ | 250,000 |
| CKay | love nwantiti 4× Platinum | Platinum rows 2022-03-09, 2022-10-05, 2023-06-21, 2024-03-06 | 2021 | 500,000 ‡ | 200,000 |
| Wizkid | One Dance 3× Platinum (feature) | ONE Platinum row, filed at step 3 (`date_3` 2021-08-11; olis.pl prints "3") | 2021 | 375,000 ‡ | 150,000 |

**One Dance is 3× — register-confirmed, and a trap worth recording.** ZPAV
holds ONE One Dance row, "ONE DANCE | singiel", Platynowa — and one row can be
a multiple. Each row carries `date_1` … `date_7`, one per step, and olis.pl's
own front end prints the step it fills (`date_3?n("span",[e._v(" 3 ")])`).
One Dance's is `date_3` = 2021-08-11, so the site shows Platinum "3"; God's
Plan and Work sit in the same batch the same way, and Calm Down's and love
nwantiti's four rows are `date_1` … `date_4`. This change first read the one row
as 1× and cut the Wikipedia 3×; the sequential review caught it before merge.
The 3× (Wikipedia: `number=3`, 2021/8) stands, now confirmed at the body.

Effect (features on, Nigeria off): not-comparable plaques across the board
**10 → 2** (Colombia only); unpriceable country/format pairs 3 → 2 (CO/single,
CO/album). Poland's country board goes from 30,000 units (1 of 9 counted) to
1,842,500 (9 of 9). Units added: Burna +187,500, Rema +500,000, CKay +500,000,
Wizkid +375,000, Tems +125,000, Tyla +125,000. No artist-total rank changes and
no pair leader flips.

