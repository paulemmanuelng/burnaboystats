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
