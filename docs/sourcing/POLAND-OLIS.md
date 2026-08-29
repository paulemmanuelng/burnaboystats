# Poland — reading ZPAV's own chart data (olis.pl)

Recorded 29 Aug 2026, while confirming "Dai Dai" at No. 1.

Two earlier sweeps (Davido, Ayra Starr) recorded ZPAV as **unreachable** —
"bestsellery.zpav.pl never completes over HTTPS; olis.pl's official awards list
is a Vue SPA whose `POST /api/search` returned Laravel 404 to every parameter
combination tried". That is now solved, and this file is the recipe so the next
sweep does not repeat the dead ends.

## The charts ZPAV actually publishes

From the links on `https://www.olis.pl/`:

| Route | What it is | Tracked here? |
|---|---|---|
| `/charts/oficjalna-lista-sprzedazy/albumy` | albums | albums |
| `/charts/oficjalna-lista-sprzedazy/single-w-streamie` | **singles on stream** | **yes — this is Poland's singles chart** |
| `/charts/oficjalna-lista-sprzedazy/albumy-w-streamie` | albums on stream | component |
| `/charts/oficjalna-lista-sprzedazy/albumy-fizycznie` | physical albums | component |
| `/charts/oficjalna-lista-sprzedazy/albumy-winyle` | vinyl albums | component |
| `/charts/oficjalna-lista-airplay` | **airplay** | **no** — Poland publishes a non-airplay chart, so the airplay list is excluded by the standing rule |
| `/charts/oficjalna-lista-wyroznien/{zlote,platynowe,diamentowe}-plyty` | gold/platinum/diamond awards | certifications |

`single-w-streamie` is the **only** Polish singles chart that is not airplay,
which settles which one this dataset's `PL` row belongs to.

## The endpoint

The page is a Vue SPA. The component is declared in the HTML as
`<listing :category="1" :subcategory="2">` — those two numbers are the
`category_id` / `subcategory_id` the API wants.

The bundle at `/js/app.js` calls `$http.post("api/search", …)`. That path is
**relative**, and the earlier sweeps resolved it against the chart page, giving
`/charts/oficjalna-lista-sprzedazy/api/search` — which is the Laravel 404 they
recorded. It resolves against the **origin**:

```
POST https://www.olis.pl/api/search
Content-Type: application/json
X-Requested-With: XMLHttpRequest
Referer: https://www.olis.pl/charts/oficjalna-lista-sprzedazy/single-w-streamie

{"category_id":1,"subcategory_id":2,"search_in":"","keyword":"",
 "limit":100,"selected_week":null,"sort_type":"position","sort_order":"asc"}
```

No CSRF token is required despite the `<meta name="csrf-token">` on the page.
Returns ~3 MB of JSON: `tracks[]` (the 100 rows), `latest_date`, and per row a
`music` object carrying `position`, `last_week`, `peak_position`,
`times_listed`, and a full `history.positions_on_list[]` — every week the record
has charted, with its position that week. **The run comes free with the row**;
there is no archive to walk.

**`keyword` and `search_in` are ignored** — passing `"Burna"` returns the same
unfiltered 100. Read the list and filter client-side.

## What it showed for "Dai Dai"

`latest_date: 2026-08-20` — week **2026-W34** (14–20 Aug) is the newest
published list. Row 1:

- artists `Shakira, Burna Boy` · title `Dai Dai` · Sony Music Latin / Sony Music
  Entertainment · `spotify_url` track `59ulCNXlrxTeZ86ZshGkS8` — the original,
  not the remix row this dataset has had to exclude before
- `position: 1` · `peak_position: 1` · `times_listed: 12` ·
  `history.in_top_ten: 2`
- ZPAV's own trend string: `POPRZEDNI TYDZIEŃ: 9 | WZROST O: 8`

Full run, from `history.positions_on_list`:

| Week | Range | Pos |
|---|---|---|
| W23 | 29 May–4 Jun | 87 |
| W24 | 5–11 Jun | 72 |
| W25 | 12–18 Jun | 26 |
| W26 | 19–25 Jun | 34 |
| W27 | 26 Jun–2 Jul | 10 |
| W28 | 3–9 Jul | 9 |
| W29 | 10–16 Jul | 19 |
| W30 | 17–23 Jul | 4 |
| W31 | 24–30 Jul | 4 |
| W32 | 31 Jul–6 Aug | 5 |
| W33 | 7–13 Aug | 9 |
| **W34** | **14–20 Aug** | **1** |

The W30/W31 fours are the peak this dataset already carried, which is the
corroboration that `PL` was pointed at the right chart all along — it simply
moved.

**One correction to the circulating figure:** the fan round-up says Poland
`(+9)`, i.e. a climb from No. 10. ZPAV's own row says the previous week was
**9**, a climb of **8**. Peaks are what this dataset publishes, so nothing
downstream depends on it — but the round-up is wrong on that point.

## The airplay chart, for completeness

Poland's `oficjalna-lista-airplay` (`category_id: 2`, same endpoint) was read the
same day so the exclusion could not be mistaken for cherry-picking:
**"Dai Dai" peaks at No. 2 there** (weeks 30, 32, 33), sat at No. 3 in week 34,
10 weeks on chart — it has **never** been No. 1 on Polish airplay. The rule that
drops airplay where a non-airplay chart exists costs this dataset nothing in
Poland; it is the streaming list that carries the No. 1.
