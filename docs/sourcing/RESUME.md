# Certification sourcing — resume protocol

**Goal:** every certification on the site links to the certifying body's own
record, so a reader can check the plaque themselves. Ordered by Paul, 27 Aug 2026.

**Branch:** `cert-sourcing`. **Do NOT push to main** — Paul reviews first.

## State

| File | What it holds |
|---|---|
| `burna-boy.worklist.json` | 231 rows, one per plaque. `status` is `pending` / `sourced` / `unreadable`. |
| `burna-boy.by-country.md` | The same work grouped by certifying body — the unit of work. |
| `results/<CC>.json` | Per-country findings as they land. Append-only. |

## Rules

1. **Body's own register only.** A cited table is not a source. Unreadable means
   record `unreadable` with the reason — never publish-with-caveat.
2. **Deep link where the body offers one**, else the closest searchable URL that
   actually lands on the record. A dead link to a primary source is worse than
   no link.
3. Record the **verbatim row** and the date read alongside every URL.
4. Nothing is written into `app/data/` until the sweep is complete.

## Known register quirks (do not re-derive)

- **BPI** — moved to `certified-awards.bpi.co.uk`; `bpi.co.uk/brit-certified/`
  404s. Has real per-title permalinks. Results need an `HX-Request: true` header.
- **SNEP** — JS-rendered; has permalinks. Offers PDF/CSV export of a filtered view.
- **Grammotex (SE)** — `http://` ONLY, https times out. Public per-record URLs:
  `http://sys2.grammotex.se/netdata/grp006.MBR/artdata?sart=<id>`. Search is
  login-walled, so ids must come from a trade account.
- **RMNZ** — no standalone register. Certifications are a field on chart rows at
  aotearoamusiccharts.co.nz: `"certification":{"nz":…,"type":…,"multiple":N}`.
  A title that never charted in NZ has no row and cannot be confirmed.
- **TCSN (NG)** — request-based and paid; live register caps at 500 rows and
  serves no Silver. Absence proves nothing.
- **hitparade.ch** — Cloudflare Turnstile. Use swisscharts.com. IFPI Schweiz
  calls its own register non-exhaustive and label-issued; publishes year only.
- **ARIA** — accreditation PDFs, Dropbox-hosted, reached from aria.com.au.

## Next

Burna Boy first, then the 11 other board artists in `app/data/afrobeats.ts`.

## Portugal (AFP/Audiogest) — READABLE, found 27 Aug 2026

Earlier passes recorded Portugal as having no usable certification register.
That was wrong. It has one; it is just not on a website.

- `afp.org.pt` is dead (Wayback terminates January 2016) and audiogest.pt's
  news feed carries no certification items. Both are dead ends.
- **The register is the weekly TOP PDF's `Gal.` column**, at
  `https://www.audiogest.pt/tops-semanais-2026?lang=pt` — one PDF per Semana,
  four sections (Top 200 Álbuns, Stream Álbuns, Streams, **Singles**).
  `OU` = Ouro, `PL`…`9PL` = Platina. It annotates only titles charting that week.
- **Off-chart awards, the route that works: the ANNUAL `TOP AFP/AUDIOGEST`
  reports.** Same `Gal.` column, cumulative over the year, and up to **10 000
  positions deep** rather than 200 — so they cover titles that never charted at
  all. Linked from the same index as the weeklies
  (`/tabelas-oficiais-de-vendas-?lang=pt`). Two rules for using them:
  the column **freezes at the period end, not publication** (11 titles awarded
  between 8 Jan and 11 Mar 2021 are all still blank in the TOP Anual 2020,
  published 26 Mar 2021), and **absence may be depth** — the reports run
  2019→3000, 2020→3000, 2021→**1000**, 2022→**10000**, 2023→200, 2024→200, with
  2025 and 2026 unpublished. Bracket an award between the last blank annual and
  the first badged one, and ignore any annual too shallow to reach the position.
- **Off-chart awards are also announced monthly on facebook.com/audiogest.** The MOST
  RECENT batch is readable logged out; **older months are not** — the logged-out page
  serves only the latest ~10 photos and will not scroll, so the archive is closed by
  this route. Wayback captures after 2022 are all 302 login redirects. Earlier sweeps
  managed to read only the Feb and Mar 2026 tables. Month M is announced at the start of M+1
  ("Começamos o novo mês a anunciar os Galardões de Ouro de Maio de 2026").
  Each batch is a carousel: a cover slide plus cards of four awards, nationals
  first with an "ARTISTA NACIONAL" ribbon, then international alphabetically.
- **ineews.eu reproduces whole batches verbatim** (search `?s=galardões`), naming
  AUDIOGEST — Feb 2026 (42 awards) and Mar 2026 (94) so far, one article a month.
  Useful as a *lead*, but it is syndication: confirm at an AFP PDF before publishing.

**How to read the carousel** (no login, no bot-check): open the page, click
Photos, pull `a[href*="fbid="]` hrefs, then for each permalink pull the
`t39.30808-6` scontent image URL and navigate to that raw `.jpg` — the CDN image
renders full-frame with no login modal. Post `og:title`/`og:description` also
come back to a plain curl with a Googlebot UA on `/audiogest/photos/<slug>/<id>/`
permalinks, though NOT on `photo.php?...&set=pb...`.

Instagram is useless: every Wayback capture after 2022 is a 302 login redirect.

**Consequence:** Portuguese certifications for NON-CHARTING titles are now
verifiable, which they were not before — via the annuals, not the carousels.
Burna Boy's four unsourced Portuguese Golds were all settled this way on
27 Aug 2026 (see `docs/sweeps/portugal-afp-verification-2026-08-27.md`); three
needed their dates corrected. **Still to do: the same annual-report pass over
every other board artist's Portuguese rows** — the earlier sweep tested them
against the weeklies only, which cannot see a non-charting or post-run award.
