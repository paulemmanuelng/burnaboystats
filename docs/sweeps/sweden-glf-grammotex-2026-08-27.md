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

## Why Grammotex is a body source

Grammotex's own page footer:

> Grammotex Musikdatabas — Grammofon Leverantörernas Förening, Box 1429,
> SE-111 84 Stockholm, Tel: **08-735 97 50**

ifpi.se/kontakt:

> info@ifpi.se eller **08-735 97 50**

Same telephone number, same organisation. GLF is Ifpi Sverige under its older name,
and `certifications.ts` has credited "GLF" as a source since the file was written.
So the `Guld/Platina` line is the certifying body's own record — not a cited table.

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

## Still open

Wikipedia's table for "On The Low" also claims AU Gold, CA Platinum, DK Gold,
**FR Diamond**, NZ Platinum, NG Silver, CH Platinum, UK Platinum and US Gold. None
are on the site and none are entered here: each needs reading at its own body first.
That is nine plaques, one of them a Diamond, hanging on a song the data layer did
not know existed.
