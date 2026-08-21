# Sweep documents — the evidence behind the Afrobeats Board

Every certification and chart peak on [/afrobeats](https://burnaboystats.com/afrobeats) traces to a row in one of these files. Two per artist:

| file | holds |
|---|---|
| `<artist>-certifications-v1.md` | every plaque, per title, per country, with a verification mark |
| `<artist>-chart-peaks-v1.md` | every charting position, per title, per country |

Nine artists: Wizkid, Davido, Rema, Tems, Tyla, Ayra Starr, Asake, Omah Lay, Seyi Vibez. Swept 15–19 August 2026.

They lived outside the repo until 21 August 2026, which meant the site published 742 plaques whose evidence existed only as loose files on one laptop. **Change a number in `app/data/afrobeats.ts` only after changing the row here that backs it.**

## What the marks mean

- **✓** — seen in the issuing body's own **live** register.
- **✓ᴬ** — seen in the issuing body's own **archived** register: a Wayback capture of the same URL, fetched in the raw `…{timestamp}id_/…` form so the response is the original bytes rather than the toolbar-injected page.

A register read in full and holding nothing is recorded as a **proven zero**. A register that could not be read is recorded as a **gap**, never as a zero. The distinction matters and the files keep it.

## Nigeria: why the site and TurnTable's dashboard disagree

This is the single most common reason to think the board is wrong, and it isn't.

TurnTable's public register at `turntablecharts.com/certification` **serves a hard cap of exactly 500 rows** — 456 Platinum, 44 Gold, and **zero Silver**. It truncates mid-Gold, so it serves none of the Silver tier for *any* artist. The full history is only in the archived captures of that same URL, the richest being `20260221224010` at 39 MB and 2,477 rows.

For Seyi Vibez the live page shows **51 of his 103** plaques. The other 52 — 32 Gold and all 20 Silver — exist solely in the captures. Check him against the live dashboard and the Silvers look invented.

Silver is a genuine TCSN tier, not a rendering artefact; their own application form asks applicants to select "Silver, Gold, Platinum or Multi-Platinum". The programme is also request-based and paid, so absence from the register never proves absence of an award. See the note above the `NG` entry in `app/data/certifications.ts`.

**Do not "clean up" Nigerian rows against the live register.**

## Reproducing a Nigerian count

Verified end to end on 21 August 2026. The register is a Next.js page; the data is in `__NEXT_DATA__` at `props.pageProps.certEntries`, and each row carries `title`, `artiste`, `milestone` (e.g. `Platinum_8`), and `certifiedDate`.

```bash
curl -sL --compressed "https://web.archive.org/web/20260221224010id_/https://turntablecharts.com/certification" -o capture.html
```

Then parse `certEntries` out of `__NEXT_DATA__` and reduce it. Two traps, both of which produce a wrong answer on the first try:

1. **Key on `(title, artiste)`, never title alone.** "On God" is two different records — Vibez Inc / Seyi Vibez / ODUMODUBLVCK / Tml Vibez (Gold) and Kashy ft. Seyi Vibez (Silver). Collapse them and you lose a plaque: 19 Silver instead of 20.
2. **Then fold artist-string variants of the same record**, or you overcount. "Gwagwalada" is filed under both `BNXN, Seyi Vibez & Kizz Daniel` and `BNXN, Seyi Vibez, Kizz Daniel`; "Bad Vibes" appears twice. Take the highest tier per record — that is what turns the capture's raw 46 Platinum into the correct 44.

Applied to Seyi Vibez, the capture yields **44 Platinum + 39 Gold + 20 Silver = 103**, matching the board exactly.

## Counting rules

Identical to the ones this site applies to Burna Boy, so the numbers are comparable rather than borrowed from fan tallies:

- One plaque per title per country, at its **current** tier. A 6× Platinum is one plaque, not six; an upgrade replaces, it does not add.
- Lead, co-billed and featured credits all count. Writer and producer credits do not.
- Singles and albums are recorded separately.
- Chart peaks follow `charts.ts`: one entry per country on its principal national chart, no platform or genre charts, airplay only where a country publishes nothing else.
