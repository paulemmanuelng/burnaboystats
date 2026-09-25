# Sweep documents — the evidence behind the Afrobeats Board

Every certification and chart peak on [/afrobeats](https://burnaboystats.com/afrobeats) traces to a row in one of these files. Two per artist:

| file | holds |
|---|---|
| `<artist>-certifications-v1.md` | every plaque, per title, per country, with a verification mark |
| `<artist>-chart-peaks-v1.md` | every charting position, per title, per country |

One pair of files for every artist on the board; `tests/sweepDocs.test.ts` fails if one is missing. The first nine (Wizkid, Davido, Rema, Tems, Tyla, Ayra Starr, Asake, Omah Lay, Seyi Vibez) were swept 15–19 August 2026; the rest joined later, each with its own dated sweep.

One file is Burna Boy's own: `burna-boy-nigeria-2026-09-18.md` — every issue of TurnTable's Nigeria Top 100 and Top 100 Albums walked for his catalogue on 18 September 2026 (the 89 Nigerian peaks in `app/data/charts.ts`, each with the issue that set it). The walker is `scripts/turntable-walk.mjs`.

They lived outside the repo until 21 August 2026, which meant the site published 742 plaques whose evidence existed only as loose files on one laptop. **Change a number in `app/data/afrobeats.ts` only after changing the row here that backs it.**

## What the marks mean

- **✓** — seen in the issuing body's own **live** register.
- **✓ᴬ** — seen in the issuing body's own **archived** register: a Wayback capture of the same URL, fetched in the raw `…{timestamp}id_/…` form so the response is the original bytes rather than the toolbar-injected page.
- **✓ᴴ** — a chart row for country X, read on a Hung Medien sister domain of a **different** country, not on X's own chart site. Example: a Dutch peak read in the "Weltweit" block of swisscharts.com. A Hung Medien domain that *is* X's own chart site counts as the body's own register: swisscharts.com is the Swiss Hitparade's own site (hitparade.ch's database on its English domain), so a Swiss row or a Swiss plaque read there is **✓**, not ✓ᴴ. Chart rows only, never a plaque. The row names the domain it was read on and the body it stands in for, and it must show the peak, the chart and the week of the peak. The cross-country block prints only a peak and a count of weeks, so on its own it is a lead, not a row. No published row carries ✓ᴴ as of 25 Sep 2026. Oxlade's Netherlands #13 and Portugal #60 were the only two, and they were dropped that day on exactly this point (see `oxlade-chart-peaks-v1.md`).

**By hand, never read by an agent** (owner rulings, 24–25 Sep 2026): TOSAC (South Africa's chart), RiSA, FIMI, the BPI, ARIA's accreditation Dropbox, AFP's uploads, dutchcharts.nl, top40.nl and billboard.com — Wayback copies included. A row whose only evidence came from one of them is not published; it goes on Paul's weekly hand-check list with the exact search to run, and is added when he confirms it.

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
- **A live chart run is published, not held.** A record still on a chart is published at its current `highestPosition` with the board's open-run note ("Peak still open — read in the release's first weeks…"), and re-read at the next sweep. When a run is no longer in its first weeks, the note keeps the "Peak still open —" opening but says what was read instead: Tiwa Savage's *Energy* (25 Sep 2026) reads "still on the Top 100 when read, 16 weeks in (4 Jun to 17 Sep 2026), after reaching No. 7 on 30 Jul". The 6 Sep 2026 sweep held CKay's SHEGE "because the run is live" while the same board carried Rema's TEA and five Davido rows the same way; the 17 Sep audit published SHEGE, BACK 2 U, As We Get High, TWIN, WHO THIS, That Girl and Starrgirl under this one rule. What is never done: typing a peak from a written report when the body's own payload says otherwise (Starrgirl: payload 2, report "3" — the payload is the chart).
