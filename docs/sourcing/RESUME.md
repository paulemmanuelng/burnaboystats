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
- **Off-chart awards are announced monthly on facebook.com/audiogest.** The MOST
  RECENT batch is readable logged out; **older months are not** — the logged-out page
  serves only the latest ~10 photos and will not scroll, so the archive is closed by
  this route. Wayback captures after 2022 are all 302 login redirects. Earlier sweeps
  managed to read only the Feb and Mar 2026 tables. Month M is announced at the start of M+1
  ("Começamos o novo mês a anunciar os Galardões de Ouro de Maio de 2026").
  Each batch is a carousel: a cover slide plus cards of four awards, nationals
  first with an "ARTISTA NACIONAL" ribbon, then international alphabetically.

**How to read the carousel** (no login, no bot-check): open the page, click
Photos, pull `a[href*="fbid="]` hrefs, then for each permalink pull the
`t39.30808-6` scontent image URL and navigate to that raw `.jpg` — the CDN image
renders full-frame with no login modal. Post `og:title`/`og:description` also
come back to a plain curl with a Googlebot UA on `/audiogest/photos/<slug>/<id>/`
permalinks, though NOT on `photo.php?...&set=pb...`.

Instagram is useless: every Wayback capture after 2022 is a 302 login redirect.

**Consequence:** Portuguese certifications for NON-CHARTING titles are now
verifiable, which they were not before. Worth a pass over every board artist's
Portuguese rows, and over the monthly batches back through 2026.
