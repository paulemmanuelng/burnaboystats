# TurnTable Charts — reading the whole archive

**Found 28 Aug 2026.** TurnTable's site renders only the current week, but its
backend exposes every weekly issue either principal chart has ever published.
This is the official Nigerian chart, so it is the source for every Nigerian
chart peak on this site.

## The route

```
GET https://turntablecharts.com/api/ttc-proxy/api/chart/{categoryId}/{weekNumber}/{year}
```

- **A `Referer` header of `https://turntablecharts.com/...` is required.** Without
  it the proxy returns `403 Forbidden: not allowed.`
- The response is a `{"payload": "<base64>"}` envelope; decode the payload to get
  the chart JSON.
- `categoryId` **1** = Official Nigeria Top 100 (singles), **2** = Official Top
  100 Albums. The `/charts` page lists 31 categories in `chartCategories`.
- Each row carries `rank`, `title`, `artiste`, **`highestPosition`**,
  `weeksOnChart`, `lastPosition` and **`imageUri`** (the cover art).

## The trap

**An invalid week/year does NOT error.** It silently returns the category's
EARLIEST instance. Every response must be validated by checking the decoded
payload's own `weekNumber` and `dateCreated` against what was requested, or the
archive quietly fills with duplicates of week one.

## Coverage confirmed

- Official Nigeria Top 100: **303 consecutive weekly issues**, 2020-11-05 →
  2026-08-20.
- Official Top 100 Albums: **199 consecutive issues**, 2022-11-02 → 2026-08-20.
- Continuity verified by differencing consecutive issue dates. The only
  non-7-day gaps are 2024-12-26 → 2024-12-31 (5d) and → 2025-01-09 (9d), which
  are TurnTable's own New Year's Eve special issue, not missing weeks.

## Also useful

The current week is available without the proxy, as Next.js page data:
`https://turntablecharts.com/_next/data/<buildId>/charts/top-100.json` — 30 KB
against 321 KB for the HTML. `buildId` comes from `__NEXT_DATA__` on any page.

The same `__NEXT_DATA__` route serves the **certification** register at
`/certification` → `props.pageProps.certEntries`.
