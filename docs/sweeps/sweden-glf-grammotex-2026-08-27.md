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

## On The Low, read body by body (27 Aug 2026)

The Swedish find exposed a song with no certification data at all. Every claim
against it was then read at the issuing body's own register:

| Country | Body | Tier | Award date |
|---|---|---|---|
| 🇫🇷 France | SNEP | **Diamant** | 2022-07-14 (*date de constat*) |
| 🇨🇦 Canada | Music Canada | **2× Platinum** | 2026-01-28 |
| 🇨🇭 Switzerland | IFPI Schweiz | Platin | 2023 (year only) |
| 🇸🇪 Sweden | GLF/Grammotex | Platinum | 2023-08-16 (cert. 10448) |
| 🇬🇧 UK | BPI | Platinum | 2026-01-23 |
| 🇦🇺 Australia | ARIA | Gold | 2023-05-01 |
| 🇩🇰 Denmark | IFPI Danmark | Guld | 2025-02-19 |
| 🇳🇬 Nigeria | TCSN | Gold | — (see below) |
| 🇺🇸 USA | RIAA | Gold | 2022-04-26 |
| 🇳🇿 New Zealand | RMNZ | **OMITTED** | no readable register |

**Two tiers came back higher than the table that pointed at them.** Canada is
2× Platinum, not Platinum — Music Canada bulk-reprocessed its catalogue in
January 2026. Nigeria is Gold, not Silver. Had these been copied from the
citation, both would have been published wrong.

**New Zealand is omitted, not caveated.** radioscope.net.nz is dead and
nztop40.co.nz/certifications 404s, so RMNZ publishes nothing covering
international repertoire. The song also never charted in NZ.

Provenance notes carried into the data file: BPI publishes the full escalation
(Silver 2020-10-16 → Gold 2023-04-07 → Platinum 2026-01-23) and its register now
needs an `HX-Request` header; Switzerland was read on the swisscharts.com mirror
of a register IFPI Schweiz itself calls non-exhaustive and label-issued; TCSN's
"Feb 6, 2025" stamp is shared by 1,274 entries and is a **migration batch date,
not an award date**, which is why Nigeria has no row in the dated log.

## Still open

- **Every Canadian tier on the site needs re-auditing.** Music Canada
  bulk-reprocessed its catalogue in January 2026, so any CA row inherited from a
  citation is presumptively stale — this sweep found one understated by a full
  tier on the first song it looked at.
- **Every New Zealand row needs re-auditing**, for the opposite reason: there is
  no public register left to confirm any of them against.
- Sweden's own certificate numbers **10449** and **10451** fall inside Burna
  Boy's 2023-08-16 run and are unaccounted for.
- Incidental rows surfaced while reading other registers (SNEP lists five further
  Diamant singles; BPI shows Gbona Gold dated 31 Jul 2026) should be reconciled
  against what the site already holds.
