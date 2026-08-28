# Sweden — the register that was there all along

**Read:** 27 August 2026 · **Body:** GLF / Ifpi Sverige, via Grammotex

## What was wrong

Four Swedish rows sat on this site with the right tier and no source. Earlier sweeps
concluded Sweden had no post-2004 public register and called the entries
"unverifiable in principle". That conclusion was wrong, and the reason is small and
stupid:

**`https://grammotex.se` times out. The site is HTTP-only.** Every automated probe
died at the TLS handshake and the timeout was read as "site dead / no certification
content". One character of protocol hid the register.

## Is Grammotex a body source? Qualified no — and this was got wrong first

The first version of this document asserted that GLF **is** Ifpi Sverige, on the
grounds that Grammotex's footer and ifpi.se/kontakt publish the same telephone
number, **08-735 97 50**. That inference was wrong and is retracted here.

A shared switchboard evidences a shared secretariat, not a shared legal person.
The two carry **different organisationsnummer and different legal forms**:

| | Organisationsnummer | Legal form |
|---|---|---|
| Grammofonleverantörernas Förening (GLF) | 769601-2397 | ekonomisk förening |
| Ifpi Svenska Gruppen / Ifpi Sverige | 802005-0186 | ideell förening (reg. 1973) |

GLF compiled the official Swedish charts from 1975 until those duties passed to
Ifpi Sverige, and sv.wikipedia records **"Organisationen upphörde 2021"** — GLF
ceased in 2021. GLF has run Grammotex since 1986.

Which leaves a real gap: these certificates are dated **2023-08-16**, after the
date GLF is said to have wound up, in a database badged to GLF. So the
`Guld/Platina` field is **the Swedish record industry's own record of a
certification** — it is not demonstrably **the certifying body's own register
entry**, and under this site's standing rule that distinction is the whole point.

Counter-evidence, not suppressed: hitta.se attaches the GLF name to Ifpi's
organisationsnummer 802005-0186 in its URL slug, though its record body shows an
IFPI entity at a third address. And GLF's own registry body could not be read —
merinfo returned 403, allabolag 404, vainu delisted — so GLF's org number rests
on two aggregator listing titles rather than a Bolagsverket primary record.

**What that means in practice:** the certificate numbers are strong
corroboration, and better evidence than these rows have ever had. They are not
yet a body reading. Closing it properly is one email to **info@ifpi.se**.

## How to read a record

    http://sys2.grammotex.se/netdata/grp006.MBR/artdata?sart=<id>     # note: http://

Public, no login. `grp008.MBR` serves the same record plus the `Bolag` field.
A record renders `Prefix/Suffix` (ISRC), `Ljudbärare`, `Bolag`, `EAN-kod`, `Artist`,
`Titel`, `Märke`, and `Guld/Platina: <tier> - cert.nr <n> - <YYYY-MM-DD>`.
`?lang=en` on the public site gives the English labels (`Gold/Platinum:`).

**The search is login-walled, the records are not.** `grp006.MBR/place` (chart
placements) returns *"Ej behörig till denna funktion"*. Record ids are assigned in
ingestion order, not by artist, so they cannot be enumerated by scanning — an id has
to come from the trade search. That is the only remaining gate.

## Verified

| Title | Tier | Cert. no. | Awarded | Key |
|---|---|---|---|---|
| On The Low | Platinum | 10448 | 2023-08-16 | ISRC USAT21812249 |
| Ye ("Yeh" in the register) | Platinum | 10450 | 2023-08-16 | ISRC USAT21800327 |
| African Giant (album) | Guld | 10452 | 2023-08-16 | \*10552979 |
| Gbona | Guld | 10453 | 2023-08-16 | **sart=9225432**, re-read independently |

Gbona was pulled directly from the endpoint above and matched the supplied record
exactly, character for character. The other three rest on records read at the same
body on the same day; their `sart` ids are not yet recorded here.

Certificates **10449** and **10451** fall inside this run and are unaccounted for.
Given 10448/10450/10452/10453 are all his and all share one date, the two gaps are
worth checking whenever trade access is available.

## Consequences

- Three existing rows (Ye, African Giant, Gbona) keep their tiers — **all three were
  already correct** — and gain a certificate number.
- **On The Low was absent from the data layer entirely**: no certifications, no chart
  entries, for a lead single off *African Giant*. Its Swedish Platinum is now the
  231st plaque.
- Sweden is **not** a no-register country. It is a **trade-gated register** country.
  Absence from public view proves nothing either way — the same shape as TCSN.

## On the Low, read body by body (27 Aug 2026)

**Correction first.** An earlier pass of this sweep recorded "On The Low" as
absent from the data layer and created a second entry for it. It was not absent:
the release is titled **"On the Low"** (lower-case *the*) and already carried
nine certifications. The case-sensitive grep that missed it produced a duplicate
entry and double-counted nine plaques, briefly pushing the catalogue to a false
239. The duplicate is removed and the total is **231** — 230 plus the one
genuinely new plaque, Sweden.

Reading each claim at the issuing body's own register therefore *confirmed* what
was already recorded rather than discovering it:

| Country | Body | Tier | Award date | Outcome |
|---|---|---|---|---|
| 🇫🇷 France | SNEP | Diamant | 2022-07-14 | held |
| 🇨🇦 Canada | Music Canada | 2× Platinum | 2026-01-28 | held |
| 🇨🇭 Switzerland | IFPI Schweiz | Platin | 2023 | held |
| 🇸🇪 Sweden | GLF/Grammotex | Platinum | 2023-08-16 | **added** |
| 🇬🇧 UK | BPI | Platinum | 2026-01-23 | held |
| 🇦🇺 Australia | ARIA | Gold | 2023-05-01 | held |
| 🇩🇰 Denmark | IFPI Danmark | Guld | 2025-02-19 | held |
| 🇳🇬 Nigeria | TCSN | **Gold** | — | **corrected from Silver** |
| 🇺🇸 USA | RIAA | Gold | 2022-04-26 | held |
| 🇳🇿 New Zealand | RMNZ | Platinum | — | **not re-read** |

One real correction: **Nigeria is Gold, not Silver**, per TCSN. That moves a
plaque between tiers without changing the count.

**New Zealand — a second correction.** This sweep first reported that RMNZ
publishes no register and that the NZ Platinum should be omitted. Both were
wrong. Recorded Music NZ publishes certification data as a field on each chart
row — aotearoamusiccharts.co.nz embeds
`"certification":{"nz":false,"type":"platinum","multiple":N}` in its chart
payloads, and 18 rows on the current singles chart carry it. What is true is
narrower: "On the Low" has **no New Zealand chart entry**, so there is no row for
a marker to attach to, exactly as with Gbona in Sweden. The existing Platinum
predates this sweep and stands; it simply was not re-read here.

Provenance notes carried into the data file: BPI publishes the full escalation
(Silver 2020-10-16 → Gold 2023-04-07 → Platinum 2026-01-23) and its register now
needs an `HX-Request` header; Switzerland was read on the swisscharts.com mirror
of a register IFPI Schweiz itself calls non-exhaustive and label-issued; TCSN's
"Feb 6, 2025" stamp is shared by 1,274 entries and is a **migration batch date,
not an award date**, which is why Nigeria has no row in the dated log.

## Still open

- Sweden's certificate numbers **10449** and **10451** fall inside Burna Boy's
  2023-08-16 run and are unaccounted for.
- Incidental rows surfaced while reading other registers should be reconciled
  against what the site already holds. **BPI's Gbona Gold (31 Jul 2026) is
  already reconciled** — the site carries it both on the release row and as a
  dated 2026 event in the log. ~~SNEP's "five further Diamant singles"~~ **CLOSED 28 Aug 2026 — the note was
  wrong, there are no further Diamants.** SNEP's register was read in full for
  Burna Boy (`snepmusique.com/les-certifications/?interprete=burna+boy`, 20 award
  rows over 19 distinct titles) and it reconciles **exactly** with the 19 French
  rows here — six Diamant, six Platine, seven Or, formats included. Filtering
  `certification=Diamant` returns precisely the six already recorded; Double,
  Triple and Quadruple Diamant each return zero, against a positive control where
  Double Diamant alone returns 18 rows for other artists. Coverage was checked
  three further ways: by lead act (Jorja Smith, Master KG, Coldplay, Shakira,
  Dadju, Joé Dwèt Filé, Dave, Ed Sheeran, Nomcebo, Little Simz), by title, and by
  spelling variants — no row surfaced that is not already here.

  Two traps recorded for the next reader: SNEP paginates as `page/N/` **with the
  trailing slash**, and without it a bare curl gets a 301 and an empty body that
  looks like "one page of results" (Dadju: 30 rows broken vs 96 correct). And a
  regex anchored on the `certif icon-` div pairs each tier with the NEXT card's
  title — anchor on the `certification` container.
- ~~The 19 New Zealand rows rest on chart-row markers…~~ **CLOSED 28 Aug 2026.
  All 19 read at RMNZ's own register and all 19 match.** The premise was wrong:
  RMNZ does not publish tiers as chart-row markers, it publishes a full dated
  register through RadioScope — TablePress table **2052** for singles (24,260
  rows) and **2051** for albums (4,040). Burna Boy has **29** single rows there,
  which are ladder steps collapsing to 17 titles, plus **3** album rows
  collapsing to 2. That is exactly the 19 plaques the site holds, at exactly the
  tiers it records — including "Last Last" and "Location" at `Plat x3`,
  "I Told Them…" Gold (20.11.2025) and "Love, Damini" `Plat x1` (22.05.2025).
  Note the register writes plain Platinum as `Plat x1`, which is easy to misread
  as unmultiplied. Recipe in `reference-rmnz-radioscope` — the SSP endpoint needs
  a per-pageload token scraped from the page plus the full DataTables contract.
