# Sweep documents — the evidence behind the Afrobeats Board

Every certification and chart peak on [/afrobeats](https://burnaboystats.com/afrobeats) traces to a row in one of these files. Two per artist:

| file | holds |
|---|---|
| `<artist>-certifications-v1.md` | every plaque, per title, per country, with a verification mark |
| `<artist>-chart-peaks-v1.md` | every charting position, per title, per country |

One pair of files for every artist on the board; `tests/sweepDocs.test.ts` fails if one is missing. The first nine (Wizkid, Davido, Rema, Tems, Tyla, Ayra Starr, Asake, Omah Lay, Seyi Vibez) were swept 15–19 August 2026; the rest joined later, each with its own dated sweep.

One file is Burna Boy's own: `burna-boy-nigeria-2026-09-18.md` — every issue of TurnTable's Nigeria Top 100 and Top 100 Albums walked for his catalogue on 18 September 2026 (the 89 Nigerian peaks in `app/data/charts.ts`, each with the issue that set it). The walker is `scripts/turntable-walk.mjs`.

They lived outside the repo until 21 August 2026, which meant the site published 742 plaques whose evidence existed only as loose files on one laptop. **Change a number in `app/data/afrobeats.ts` only after changing the row here that backs it.**

## Targeted sweeps (since 8 October 2026)

The owner ruled on 8 Oct 2026 that a sweep reads only the registers due that day: Tuesday the BPI (by Paul's hand), RMNZ, IFPI Sverige, SNEP, FIMI, Promusicae and ČNS IFPI (CZ, SK); Thursday IFPI Greece, ZPAV, IFPI Austria, IFPI Danmark and the registers that award on any day; and the monthly lists. The last full sweep, 2 Oct 2026 (`sweep-2026-10-02.md`), will not recur. Every targeted sweep, **including one that finds nothing**:

1. writes `targeted-sweep-<day>.md` here (not `sweep-<day>.md`, which names a full sweep: `CERTS_LAST_FULL_SWEEP` and `AFROBEATS_LAST_FULL_SWEEP` are tested against the newest of those): each register read, the newest batch it showed, and the result (a proven zero is a result; a register that could not be read is a gap and is not listed as read);
2. adds the day to `TARGETED_REGISTER_READS` in `app/data/certifications.ts`, with the `COUNTRIES` codes actually read. The pair pages and the /afrobeats hub print the newest day as "(latest …)", and their sitemap dates follow it;
3. moves `CERTS_VERIFIED_ON` to that day, since every targeted read covers Burna Boy's registers;
4. applies any plaque it confirmed in the same edit.

A sweep that skips step 2 because it found nothing leaves the pages saying an older "latest" day than the registers were read on.

## What the marks mean

- **✓** — seen in the issuing body's own **live** register.
- **✓ᴬ** — seen in the issuing body's own **archived** register: a Wayback capture of the same URL, fetched in the raw `…{timestamp}id_/…` form so the response is the original bytes rather than the toolbar-injected page.
- **✓ᴴ** — a chart row for country X, read on a Hung Medien sister domain of a **different** country, not on X's own chart site. Example: a Dutch peak read in the "Weltweit" block of swisscharts.com. A Hung Medien domain that *is* X's own chart site counts as the body's own register: swisscharts.com is the Swiss Hitparade's own site (hitparade.ch's database on its English domain), so a Swiss row or a Swiss plaque read there is **✓**, not ✓ᴴ. Chart rows only, never a plaque. The row names the domain it was read on and the body it stands in for, and it must show the peak, the chart and the week of the peak. The cross-country block prints only a peak and a count of weeks, so on its own it is a lead, not a row. No published row carries ✓ᴴ as of 25 Sep 2026. Oxlade's Netherlands #13 and Portugal #60 were the only two, and they were dropped that day on exactly this point (see `oxlade-chart-peaks-v1.md`).
- **▣** — a plaque counted from a **label-issued award**, not from a register row, on an owner's ruling. The precedent is AKA's *All Eyes on Me* 🇿🇦 19× (a Sony Music Entertainment Africa plaque; `app/data/certifications.ts`); the board's first use is Tyla's nine South African plaques from Sony Music Africa's framed award, ruled 3 Oct 2026 (`tyla-certifications-v1.md`), one of which — *No.1* (feat. Tems) Gold — is also a Tems plaque as a featured credit (`tems-certifications-v1.md`). The label's **own announcement** on its verified account carries the same mark under the same ruling — Tyla's *Chanel* 🇿🇦 Gold, posted by Sony Music Africa on @SonyMusicAfrica on 8 Jan 2026 and read from the owner's screenshot (3 Oct 2026); the row quotes the post, names the account and the date, and the cert also carries `announced: { via, on }`. In `app/data/afrobeats.ts` such a cert carries `source: "label"` and names its issuer in `body`; every page that says a figure was read in the issuing body's own register qualifies that sentence from it. The row names the plaque, where it was posted and the ruling. Plaques only, never a chart row. The evidence is what the plaque itself shows — each disc's label and the number of stacked discs, and the nameplate — and nothing else (owner, 3 Oct 2026: "only use what you read in that plaque image"). **Turkey, from 7 Oct 2026:** the mark also covers a market with no register at all — Turkish single plaques are label-issued (Sony Music Türkiye awards its own), and the owner ruled that they count, Tyla's with Burna Boy's. Board use: Tyla's *Water* 🇹🇷 3× Diamond, read off Epic Records' TYLA plaque (Getty Images 2206148592), issuer "Epic Records" (`tyla-certifications-v1.md`); the evidence for both artists, and the plaque held back (*Jump* 🇹🇷 Platinum, no published Turkish Platinum level), is in `turkey-label-plaques-2026-10-07.md`.
- **✓ᴾ** — a plaque counted from the **certifying body's own published announcement** — a post on its verified account, with its own certification card — where the body's searchable register does **not** list the row. The body is the issuer, so no issuer override is recorded, but the plaque is not a register row and the site says so wherever it says "read in the issuing body's own register". First use: Tyla's album *Tyla* 🇫🇷 Or, announced by SNEP on @snep on 6 Apr 2026 ("50 000 équivalents ventes") and absent from snepmusique.com's database when read on 3 Oct 2026 (`tyla-certifications-v1.md`). **Nigeria, from 14 Nov 2026:** on the owner's ruling, TurnTable's own news articles (turntablecharts.com/news) count as TCSN's announcement where its register shows no row for the record or a lower tier — nine records, ten board plaques (see "Nigeria" below and `targeted-sweep-2026-11-14.md`). In `app/data/afrobeats.ts` such a cert carries `source: "announcement"` and `announced: { via, on }` (`via` "its own news site" and the article's date, for TurnTable). The row quotes the post or names the article, gives the date, and says how the register was searched. Distinct from a body's award card that its register *does* list (AFP's monthly cards, read ✓). Plaques only, never a chart row.

**By hand, never read by an agent** (owner rulings, 24–25 Sep 2026): TOSAC (South Africa's chart), RiSA, FIMI, the BPI, ARIA's accreditation Dropbox, AFP's uploads, dutchcharts.nl, top40.nl and billboard.com — Wayback copies included. A row whose only evidence came from one of them is not published; it goes on Paul's weekly hand-check list with the exact search to run, and is added when he confirms it.

A register read in full and holding nothing is recorded as a **proven zero**. A register that could not be read is recorded as a **gap**, never as a zero. The distinction matters and the files keep it.

## Nigeria: why the site and TurnTable's dashboard disagree

This is the single most common reason to think the board is wrong, and it isn't.

TurnTable's public register at `turntablecharts.com/certification` **serves a hard cap of exactly 500 rows** — 456 Platinum, 44 Gold, and **zero Silver**. It truncates mid-Gold, so it serves none of the Silver tier for *any* artist. The full history is only in the archived captures of that same URL, the richest being `20260221224010` at 39 MB and 2,477 rows.

For Seyi Vibez the live page shows **51 of his 103** plaques. The other 52 — 32 Gold and all 20 Silver — exist solely in the captures. Check him against the live dashboard and the Silvers look invented.

Silver is a genuine TCSN tier, not a rendering artefact; their own application form asked applicants to select "Silver, Gold, Platinum or Multi-Platinum", and the page now publishes the Silver threshold itself (below). The programme is also request-based and paid, so absence from the register never proves absence of an award. See the note above the `NG` entry in `app/data/certifications.ts`.

**Do not "clean up" Nigerian rows against the live register.**

**The page was rebuilt between 30 Sep and 27 Oct 2026** (re-read 14 Nov 2026, `targeted-sweep-2026-11-14.md`). The date column reads **"Eligibility Date"** where it read "Certified Date"; the Display tab, a second view of the same rows, is gone; the old request form's wording is gone from the Application tab, which now takes applications by email and **publishes TCSN's thresholds**:

| format | 1 unit = | Silver | Gold | Platinum |
|---|---|---|---|---|
| single | 150 streams | 25,000 units | 50,000 units | 100,000 units |
| album (more than three singles and/or over 15 minutes, so an EP counts) | 1,500 streams | 12,500 units | 25,000 units | 50,000 units |

These are the levels `app/data/certThresholds.ts` already prices. Every row still renders "Claim plaque" and none "Certified", on 30 Sep and today.

**The live page cannot show a row added since February, at any tier.** Its 500 rows have not changed since Feb 2026: they are exactly the first 500 rows of the uncapped 21 Feb 2026 list (`20260221224010`), once "Platinum" reads "Platinum_1" and "Gold" "Gold_1". That list sorts by batch stamp, newest first, and then by id — **not by tier** (seven places where the tier goes back up while the ids rise, e.g. id 231 *Giza* Platinum_2 then id 232 *Dog Eat Dog* Platinum_3). The newest batch, 1,274 rows, only looks tier-sorted because it was loaded in tier order. So a row added under the current stamp, Platinum included, lands past row 1,274 and never reaches the 500 shown; the window can show only a batch with a *later* stamp arriving on top. An unchanged window is not evidence that nothing was awarded. And no readable state of the register has held an album or EP row since its two-row launch state of Feb 2023, which held Wizkid's *Made in Lagos* Gold (`wizkid-certifications-v1.md`): all 500 live rows are singles, and the 21 Feb rows are singles or blank.

**TurnTable's own news articles count as the body's announcement** (owner's ruling, 14 Nov 2026). Where an article on turntablecharts.com/news states a TCSN tier for a record the register shows no row for, or a lower tier, the article's tier is applied, marked ✓ᴾ and `source: "announcement"`, dated by the article. Where two articles disagree, the **cautious reading** stands, the lower tier (*Fem*: 2× in one article, Platinum in a later one, so Platinum). Where an article's stated tier differs from TurnTable's own published formula applied to its stream count, the **stated tier** stands (*Work of Art*: 752 million album streams is 10× by the formula; the article says 9×). The articles state the formula's tier for 28 of the 29 single tiers they give with a stream count, which is why every one that differs from the frozen register is higher. An article is read for its tier only: a chart recap's "eligible" is not a certification, and a tier must be TurnTable's own, for the record named, by artist and title together.

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
