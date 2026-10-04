# Data research: everything the box-office-by-country page shows

**For:** Claude Design, job 1 (`/records/tours/revenue/countries`, "Highest-Grossing Artists by Country") and job 2's box-office board (`/records/tours/revenue`, "Highest-grossing shows").
**Made:** 3 Oct 2026, by `research/derive.mjs`, from `app/data/tourRevenue.ts` on `main` `2ac28b4a` (after PR #403). That file holds 82 single shows and 3 multi-night runs. It is byte-identical on `main`'s tip at the time of writing (`ce03f202`, a stats refresh that did not touch it) and on PR #405's head (`a88639e2`), so the countries page will show exactly these figures when #405 merges.
**Re-run:** `node docs/design/box-office-by-country/research/derive.mjs` (Node 24, which strips the TypeScript types; add `--json` for the raw numbers, `2>/dev/null` to hide Node's module-type warning). The script reads the data file itself and does **not** call the page's own code (`app/lib/revenueByCountry.ts`). That keeps it a second, separate count. Its totals match the figures the owner was given: 89 nights, 12 countries, 4 continents, Burna Boy leading 9 of 12, and Tyla leading Japan, the Philippines and Singapore.
**Re-checked:** 4 Oct 2026 against `main` `1cd8972b` (#405 and #406 merged; `tourRevenue.ts` unchanged since `2ac28b4a`), by a separate script written from scratch: every figure in §1–§6 and §9 matched.
**Status:** report only.

These are **sizing and example values**. The site derives every one of them on every build, so the design must not type any of them. When a show is reported, the counts, ranks, leaders and shares move. Draw the layout so that it survives that: a 13th country, a new continent, another artist on the US list, or a leader changing hands.

## The rules (the owner's, 3 Oct 2026; the page follows them)

- **Gross, not revenue.** Every figure is reported ticket sales (gross box office) in US dollars, as TouringData republishes Billboard Boxscore and Pollstar. New copy says "gross".
- **Leading a country** means the biggest **total** reported gross there: every single show **plus** every multi-night run. The **best night** rides alongside and comes from single shows only. A run is one combined figure for several nights, and it never stands in for a night.
- **Nights:** one per single show, plus every night of a run (82 + 7 = 89).
- **Ranking:** artists within a country by total, then best single night, then name. Countries by total. Continents by total.
- **Africa is shown**, as "No reported box office yet", never hidden. Box-office reporting barely reaches venues there. That means not reported, not unplayed. **South America** has no reported box office either, and the page does not print it today (see §7).
- **Gold** marks Burna Boy's own figures (and live/action elements) only. Below, **bold** marks his rows: they are the gold ones on the page.
- **Formats the page uses today:** `usdM` = `$15.50M` (two decimals; every figure on the phone, and every figure except the row totals on desktop) and `usdFull` = `$15,495,482` (desktop row totals). The board's own phone screen uses `compactGross` = `$6.147M` / `$527.4K`, so that small figures stay distinct (§6).

## 1. Headline figures

| Figure | Value | Rule |
|---|---|---|
| Single shows on the board | **82** | `revenueShows.length` |
| Multi-night runs | **3** (7 nights) | `revenueStands` |
| Nights, all told | **89** | singles + every night of a run |
| Countries | **12** | distinct flags across shows and runs |
| Continents with reported box office | **4** of 6 (North America, Europe, Oceania and Asia) | Africa, South America have none |
| Countries Burna Boy leads | **9 of 12** | leader = biggest total |
| Countries someone else leads | Japan (Tyla), Philippines (Tyla), Singapore (Tyla) | |
| Grand total, every reported gross | **$68,869,662** ($68.87M) | shows + runs |
| His share of the grand total | $44,986,067 = 65.3% | |
| Board last re-read | October 2026 | `REVENUE_AS_OF` |

The page's own summary sentence, rebuilt with its rule: "82 single shows and 3 multi-night runs (89 nights) in 12 countries on 4 continents. Burna Boy leads 9 of the 12."

## 2. Continents (ranked as the page ranks them)

| # | Continent | Total | Nights | Countries | Leader · leader's total (share) | Runner-up · total | Artists |
|---|---|---|---|---|---|---|---|
| 1 | North America | $34,314,997 ($34.31M) | 60 | 2 (United States, Canada) | **Burna Boy** · $21.18M of $34.31M (61.7%) | Asake · $4.28M | 7 |
| 2 | Europe | $29,267,544 ($29.27M) | 20 | 6 (United Kingdom, France, Germany, Switzerland, Belgium, Ireland) | **Burna Boy** · $20.68M of $29.27M (70.7%) | Fally Ipupa · $3.16M | 7 |
| 3 | Oceania | $3,224,178 ($3.22M) | 6 | 1 (Australia) | **Burna Boy** · $3.12M of $3.22M (96.9%) | Fireboy DML · $0.10M | 2 |
| 4 | Asia | $2,062,943 ($2.06M) | 3 | 3 (Japan, Philippines, Singapore) | Tyla · $2.06M of $2.06M (100.0%) | the only artist reported | 1 |
| 5 | Africa | — | 0 | 0 | **No reported box office yet** | — | 0 |
| 6 | South America | — | 0 | 0 | **No reported box office yet** | — | 0 |

Every artist per continent (total · nights):

- **North America**: Burna Boy $21.18M · 22 nights; Asake $4.28M · 7 nights; Davido $4.21M · 8 nights; Tiwa Savage $1.41M · 16 nights; Rema $1.39M · 4 nights; Wizkid $1.00M · 1 night; Tems $0.84M · 2 nights
- **Europe**: Burna Boy $20.68M · 10 nights; Fally Ipupa $3.16M · 1 night; Wizkid $2.88M · 3 nights; Davido $1.70M · 2 nights; Asake $0.33M · 1 night; Tems $0.26M · 2 nights; Rema $0.25M · 1 night
- **Oceania**: Burna Boy $3.12M · 4 nights; Fireboy DML $0.10M · 2 nights
- **Asia**: Tyla $2.06M · 3 nights

## 3. Countries (ranked as the page ranks them)

| # | Flag | Country | Continent | Total | Nights | Leader | Leader's total of country's (share) | Leader's best single night | Artists |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇺🇸 | United States | North America | $26,920,799 | 48 | **Burna Boy** | $15.50M of $26.92M (57.6%) | $1,724,853 · Capital One Arena, Washington, D.C. (2024) · 13,892 tickets | 7 |
| 2 | 🇬🇧 | United Kingdom | Europe | $12,909,603 | 7 | **Burna Boy** | $8.83M of $12.91M (68.4%) | $6,147,209 · London Stadium, London (2024) · 58,973 tickets | 3 |
| 3 | 🇫🇷 | France | Europe | $11,054,130 | 4 | **Burna Boy** | $7.39M of $11.05M (66.9%) | $4,528,368 · Stade de France, Paris (2025) · 43,881 tickets | 3 |
| 4 | 🇨🇦 | Canada | North America | $7,394,198 | 12 | **Burna Boy** | $5.68M of $7.39M (76.9%) | $527,395 · Rogers Arena, Vancouver (2023) · 7,198 tickets | 4 |
| 5 | 🇦🇺 | Australia | Oceania | $3,224,178 | 6 | **Burna Boy** | $3.12M of $3.22M (96.9%) | $1,116,628 · Qudos Bank Arena, Sydney (2025) · 10,401 tickets | 2 |
| 6 | 🇩🇪 | Germany | Europe | $2,991,402 | 5 | **Burna Boy** | $2.48M of $2.99M (82.8%) | $1,386,581 · Lanxess Arena, Cologne (2023) · 14,260 tickets | 3 |
| 7 | 🇯🇵 | Japan | Asia | $1,175,124 | 1 | Tyla | only artist · $1.18M | $1,175,124 · Ariake Arena, Tokyo (2025) · 9,050 tickets | 1 |
| 8 | 🇨🇭 | Switzerland | Europe | $822,939 | 1 | **Burna Boy** | only artist · $0.82M | $822,939 · Hallenstadion, Zurich (2022) · 8,827 tickets | 1 |
| 9 | 🇧🇪 | Belgium | Europe | $781,236 | 1 | **Burna Boy** | only artist · $0.78M | $781,236 · Sportpaleis, Antwerp (2023) · 8,266 tickets | 1 |
| 10 | 🇮🇪 | Ireland | Europe | $708,234 | 2 | **Burna Boy** | $0.38M of $0.71M (53.5%) | $378,802 · 3Arena, Dublin (2022) · 7,504 tickets | 2 |
| 11 | 🇵🇭 | Philippines | Asia | $502,612 | 1 | Tyla | only artist · $0.50M | $502,612 · SM Mall of Asia Arena, Manila (2025) · 5,356 tickets | 1 |
| 12 | 🇸🇬 | Singapore | Asia | $385,207 | 1 | Tyla | only artist · $0.39M | $385,207 · Singapore Expo, Singapore (2025) · 3,617 tickets | 1 |

## 4. Every country, in full

Each artist row: rank · artist · total (full) · page label (`usdM`) · nights · best single night · runs in the total. **Bold** = Burna Boy (gold on the page).

### 🇺🇸 United States — North America

Total $26,920,799 ($26.92M) · 48 nights (48 single shows) · 7 artists · cities: Washington, D.C. · Boston · New York · Atlanta · Los Angeles · Hollywood, FL · Oakland · Columbia, MD · Chicago · Orlando · Tampa, FL · Dallas · Seattle · Houston · Austin · Inglewood, CA · Silver Spring, MD · San Francisco · Minneapolis · Columbus · Philadelphia · Denver

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $15,495,482 | $15.50M | 16 | $1,724,853 · Capital One Arena, Washington, D.C. (2024) · 13,892 tickets | — |
| 02 | Davido | $4,212,198 | $4.21M | 8 | $884,147 · Capital One Arena, Washington, D.C. (2023) · 8,577 tickets | — |
| 03 | Asake | $3,069,151 | $3.07M | 5 | $866,409 · Barclays Center, New York (2023) · 8,464 tickets | — |
| 04 | Tiwa Savage | $1,169,955 | $1.17M | 13 | $175,420 · The Fillmore, Silver Spring, MD (2022) · 2,150 tickets | — |
| 05 | Rema | $1,132,167 | $1.13M | 3 | $793,707 · Madison Square Garden, New York (2025) · 10,595 tickets | — |
| 06 | Wizkid | $1,002,709 | $1.00M | 1 | $1,002,709 · Madison Square Garden, New York (2022) · 12,901 tickets | — |
| 07 | Tems | $839,137 | $0.84M | 2 | $547,697 · Radio City Music Hall, New York (2024) · 5,956 tickets | — |

### 🇬🇧 United Kingdom — Europe

Total $12,909,603 ($12.91M) · 7 nights (4 single shows + 1 run) · 3 artists · cities: London · Manchester

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $8,832,718 | $8.83M | 3 | $6,147,209 · London Stadium, London (2024) · 58,973 tickets | — |
| 02 | Wizkid | $2,875,468 | $2.88M | 3 | — (every reported night was in a run) | The O2 Arena, London · 28–29 November and 1 December 2021 · 3 nights · $2,875,468 · 50,814 tickets |
| 03 | Davido | $1,201,417 | $1.20M | 1 | $1,201,417 · The O2 Arena, London (2024) · 14,919 tickets | — |

### 🇫🇷 France — Europe

Total $11,054,130 ($11.05M) · 4 nights (4 single shows) · 3 artists · cities: Paris

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $7,391,708 | $7.39M | 2 | $4,528,368 · Stade de France, Paris (2025) · 43,881 tickets | — |
| 02 | Fally Ipupa | $3,160,842 | $3.16M | 1 | $3,160,842 · La Défense Arena, Paris (2023) · 39,048 tickets | — |
| 03 | Davido | $501,580 | $0.50M | 1 | $501,580 · Accor Arena, Paris (2024) · 7,227 tickets | — |

### 🇨🇦 Canada — North America

Total $7,394,198 ($7.39M) · 12 nights (8 single shows + 2 runs) · 4 artists · cities: Toronto · Vancouver · Edmonton · Laval · Montreal

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $5,683,794 | $5.68M | 6 | $527,395 · Rogers Arena, Vancouver (2023) · 7,198 tickets | Scotiabank Arena, Toronto · 24–25 February 2024 · 2 nights · $2,801,928 · 29,579 tickets<br>Centre Bell, Montreal · 28–29 February 2024 · 2 nights · $1,904,384 · 26,303 tickets |
| 02 | Asake | $1,212,892 | $1.21M | 2 | $916,954 · Scotiabank Arena, Toronto (2024) · 9,652 tickets | — |
| 03 | Rema | $259,253 | $0.26M | 1 | $259,253 · Place Bell, Laval (2025) · 4,071 tickets | — |
| 04 | Tiwa Savage | $238,259 | $0.24M | 3 | $82,481 · Union Hall, Edmonton (2022) · 1,120 tickets | — |

### 🇦🇺 Australia — Oceania

Total $3,224,178 ($3.22M) · 6 nights (6 single shows) · 2 artists · cities: Sydney · Melbourne · Perth · Brisbane

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $3,123,623 | $3.12M | 4 | $1,116,628 · Qudos Bank Arena, Sydney (2025) · 10,401 tickets | — |
| 02 | Fireboy DML | $100,555 | $0.10M | 2 | $53,334 · Metro Theatre, Sydney (2023) · 1,040 tickets | — |

### 🇩🇪 Germany — Europe

Total $2,991,402 ($2.99M) · 5 nights (5 single shows) · 3 artists · cities: Cologne · Berlin · Düsseldorf

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $2,475,765 | $2.48M | 2 | $1,386,581 · Lanxess Arena, Cologne (2023) · 14,260 tickets | — |
| 02 | Tems | $260,697 | $0.26M | 2 | $178,473 · Tempodrom, Berlin (2024) · 3,468 tickets | — |
| 03 | Rema | $254,940 | $0.25M | 1 | $254,940 · Mitsubishi Electric Halle, Düsseldorf (2024) · 4,695 tickets | — |

### 🇯🇵 Japan — Asia

Total $1,175,124 ($1.18M) · 1 night (1 single show) · 1 artist · cities: Tokyo

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | Tyla | $1,175,124 | $1.18M | 1 | $1,175,124 · Ariake Arena, Tokyo (2025) · 9,050 tickets | — |

### 🇨🇭 Switzerland — Europe

Total $822,939 ($0.82M) · 1 night (1 single show) · 1 artist · cities: Zurich

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $822,939 | $0.82M | 1 | $822,939 · Hallenstadion, Zurich (2022) · 8,827 tickets | — |

### 🇧🇪 Belgium — Europe

Total $781,236 ($0.78M) · 1 night (1 single show) · 1 artist · cities: Antwerp

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $781,236 | $0.78M | 1 | $781,236 · Sportpaleis, Antwerp (2023) · 8,266 tickets | — |

### 🇮🇪 Ireland — Europe

Total $708,234 ($0.71M) · 2 nights (2 single shows) · 2 artists · cities: Dublin

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | **Burna Boy** | $378,802 | $0.38M | 1 | $378,802 · 3Arena, Dublin (2022) · 7,504 tickets | — |
| 02 | Asake | $329,432 | $0.33M | 1 | $329,432 · 3Arena, Dublin (2024) · 4,100 tickets | — |

### 🇵🇭 Philippines — Asia

Total $502,612 ($0.50M) · 1 night (1 single show) · 1 artist · cities: Manila

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | Tyla | $502,612 | $0.50M | 1 | $502,612 · SM Mall of Asia Arena, Manila (2025) · 5,356 tickets | — |

### 🇸🇬 Singapore — Asia

Total $385,207 ($0.39M) · 1 night (1 single show) · 1 artist · cities: Singapore

| # | Artist | Total | Label | Nights | Best single night | Runs inside the total |
|---|---|---|---|---|---|---|
| 01 | Tyla | $385,207 | $0.39M | 1 | $385,207 · Singapore Expo, Singapore (2025) · 3,617 tickets | — |

## 5. Multi-night runs (`revenueStands`), and where each lands

| Run | Artist | Tour | Dates | Nights | Gross | Tickets | Where its total would rank among single shows | Country it adds to |
|---|---|---|---|---|---|---|---|---|
| 🇬🇧 The O2 Arena, London | Wizkid | Made in Lagos Tour | 28–29 November and 1 December 2021 | 3 | $2,875,468 | 50,814 | would be No. 4 | United Kingdom |
| 🇨🇦 Scotiabank Arena, Toronto | **Burna Boy** | I Told Them… Tour | 24–25 February 2024 | 2 | $2,801,928 | 29,579 | would be No. 5 | Canada |
| 🇨🇦 Centre Bell, Montreal | **Burna Boy** | I Told Them… Tour | 28–29 February 2024 | 2 | $1,904,384 | 26,303 | would be No. 5 | Canada |

## 6. The revenue board's own facts (phone hero, desktop lede, chips)

| Fact | Value |
|---|---|
| Shows on the board | 82 |
| His | 32 (39.0% of the shows) |
| Everyone else's | 50 |
| "more than every other artist on this list combined" prints? | **no** — 32 is not more than 50 |
| His share of the board's gross | $40,279,755 of $61,287,882 = 65.7% |
| No. 1 | Burna Boy · London Stadium, London (2024) · $6,147,209 ($6.15M) · 58,973 tickets |
| Smallest | Fireboy DML · 170 Russell, Melbourne (2023) · $47,221 · 881 tickets |
| Shows at $1M or more | 18 |
| Rows with no headcount | 0 |
| Board sorted by gross | yes |
| Shows per artist (desktop chip counts) | Burna Boy 32 · Tiwa Savage 16 · Davido 10 · Asake 8 · Rema 5 · Tems 4 · Tyla 3 · Fireboy DML 2 · Fally Ipupa 1 · Wizkid 1 |
| Neighbouring rows whose `usdM` labels collide ($X.XXM) | 22 |
| Neighbouring rows whose `compactGross` labels collide (the phone board's) | 0 |

The board's hero, as the screens print it today:

| Where | Text |
|---|---|
| Phone top-bar badge | `$6.15M` (the No. 1 gross) |
| Phone lede | "Eighty-two documented shows by African artists, ranked by gross — 32 of them his." |
| Phone stat grid | `$6.15M` BIGGEST NIGHT · `58,973` TICKETS, LONDON |
| Phone chips | ALL 82 · BURNA BOY 32 · OTHERS 50 |
| Desktop lede | "Every reported single-show gross by an African artist we have verified — 82 shows, ranked. Burna Boy holds 32 of them." |
| Countries page lede (both layouts) | "Every reported box-office gross by an African artist, added up country by country — 82 single shows and 3 multi-night runs (89 nights) in 12 countries on 4 continents. Burna Boy leads 9 of the 12." |
| Countries page phone stat grid | `9 of 12` COUNTRIES HE LEADS · `89` REPORTED NIGHTS |
| Countries page phone top-bar badge | `12 countries` |

## 7. Edge cases (computed)

| Case | What the data holds today |
|---|---|
| One-artist countries | 🇯🇵 Japan (Tyla, $1.18M) · 🇨🇭 Switzerland (Burna Boy, $0.82M) · 🇧🇪 Belgium (Burna Boy, $0.78M) · 🇵🇭 Philippines (Tyla, $0.50M) · 🇸🇬 Singapore (Tyla, $0.39M) — the leader line reads "· the only artist reported · …" and there is no runner-up |
| One-artist continent | Asia (Tyla, 3 countries) — the card's runner line reads "The only artist reported" and has no "of $X" |
| Leader whose total is mostly runs | Canada: Burna Boy $5,683,794, of which runs $4,706,312 (82.8%); without the runs he would have $977,482 and Asake's $1,212,892 would lead |
| Leader whose best night is NOT the country's best night | Canada: leader Burna Boy's best single night $527,395 (Rogers Arena) < Asake's $916,954 (Scotiabank Arena) |
| Artist with no single night in a country (runs only) | United Kingdom: Wizkid (row reads "Nights reported together") |
| Artist with a run AND single nights | Canada: Burna Boy — 2 runs + 2 single nights |
| Narrowest lead | Ireland (53.5% of the country) |
| Most artists in one country | United States (7) |
| Most nights in one country | United States 48; most nights by one artist in one country: Burna Boy in United States, 16; Tiwa Savage in United States, 13 |
| Many nights, small total | Tiwa Savage in United States: 13 nights, $1,169,955 · Rema in United States: 3 nights, $1,132,167 · Tiwa Savage in Canada: 3 nights, $238,259 |
| Biggest / smallest country total | United States $26,920,799 / Singapore $385,207 (a 70× spread) |
| Biggest / smallest artist total in a country | Burna Boy in United States $15,495,482 / Fireboy DML in Australia $100,555 (label $0.10M) |
| Biggest / smallest best night | $6,147,209 (London Stadium) / $53,334 (Fireboy DML, Metro Theatre; label $0.05M) |
| Totals that print below $1M as "$0.xxM" (artist rows) | 13 of 29 |
| Neighbouring artist rows in one country with the same `usdM` label | none today |
| Same venue, more than one artist | La Défense Arena, Paris (Fally Ipupa, Burna Boy) · Capital One Arena, Washington, D.C. (Burna Boy, Davido, Asake) · Madison Square Garden, New York (Burna Boy, Wizkid, Asake, Davido, Rema) · State Farm Arena, Atlanta (Burna Boy, Davido, Asake) · The O2 Arena, London (Burna Boy, Davido, Wizkid) · Scotiabank Arena, Toronto (Asake, Burna Boy) · Barclays Center, New York (Asake, Davido) · Rogers Place, Edmonton (Burna Boy, Asake) · 3Arena, Dublin (Burna Boy, Asake) · MGM Music Hall, Boston (Rema, Davido) · House of Blues, Boston (Rema, Davido) |
| Continents with no reported box office | Africa, South America — the page prints the Africa card only; South America is not printed anywhere |
| Longest country name | United Kingdom (14 chars) |
| Longest artist name | Tiwa Savage (11 chars) |
| Longest best-night venue | Mitsubishi Electric Halle (25 chars) |
| Longest city | Silver Spring, MD (17 chars) |
| Longest leader line (name + line) | "Burna Boy leads · $15.50M of $26.92M · 48 nights reported" (57 chars) |
| Longest best-night line | "3 nights reported together · The O2 Arena, London (28–29 November and 1 December 2021)" (86 chars; Wizkid, United Kingdom) |
| Longest phone meta line (best night + run note) | "Best night $0.53M · Rogers Arena, Vancouver (2023). Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal" (160 chars; Burna Boy, Canada) |

Every leader line and best-night line, as the page builds them:

- 🇺🇸 **United States** — "Burna Boy leads · $15.50M of $26.92M · 48 nights reported"
  - Burna Boy: "Best night $1.72M · Capital One Arena, Washington, D.C. (2024)"
  - Davido: "Best night $0.88M · Capital One Arena, Washington, D.C. (2023)"
  - Asake: "Best night $0.87M · Barclays Center, New York (2023)"
  - Tiwa Savage: "Best night $0.18M · The Fillmore, Silver Spring, MD (2022)"
  - Rema: "Best night $0.79M · Madison Square Garden, New York (2025)"
  - Wizkid: "Best night $1.00M · Madison Square Garden, New York (2022)"
  - Tems: "Best night $0.55M · Radio City Music Hall, New York (2024)"
- 🇬🇧 **United Kingdom** — "Burna Boy leads · $8.83M of $12.91M · 7 nights reported"
  - Burna Boy: "Best night $6.15M · London Stadium, London (2024)"
  - Wizkid: "3 nights reported together · The O2 Arena, London (28–29 November and 1 December 2021)"
  - Davido: "Best night $1.20M · The O2 Arena, London (2024)"
- 🇫🇷 **France** — "Burna Boy leads · $7.39M of $11.05M · 4 nights reported"
  - Burna Boy: "Best night $4.53M · Stade de France, Paris (2025)"
  - Fally Ipupa: "Best night $3.16M · La Défense Arena, Paris (2023)"
  - Davido: "Best night $0.50M · Accor Arena, Paris (2024)"
- 🇨🇦 **Canada** — "Burna Boy leads · $5.68M of $7.39M · 12 nights reported"
  - Burna Boy: "Best night $0.53M · Rogers Arena, Vancouver (2023)" + "Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal"
  - Asake: "Best night $0.92M · Scotiabank Arena, Toronto (2024)"
  - Rema: "Best night $0.26M · Place Bell, Laval (2025)"
  - Tiwa Savage: "Best night $0.08M · Union Hall, Edmonton (2022)"
- 🇦🇺 **Australia** — "Burna Boy leads · $3.12M of $3.22M · 6 nights reported"
  - Burna Boy: "Best night $1.12M · Qudos Bank Arena, Sydney (2025)"
  - Fireboy DML: "Best night $0.05M · Metro Theatre, Sydney (2023)"
- 🇩🇪 **Germany** — "Burna Boy leads · $2.48M of $2.99M · 5 nights reported"
  - Burna Boy: "Best night $1.39M · Lanxess Arena, Cologne (2023)"
  - Tems: "Best night $0.18M · Tempodrom, Berlin (2024)"
  - Rema: "Best night $0.25M · Mitsubishi Electric Halle, Düsseldorf (2024)"
- 🇯🇵 **Japan** — "Tyla · the only artist reported · $1.18M · 1 night"
  - Tyla: "Best night $1.18M · Ariake Arena, Tokyo (2025)"
- 🇨🇭 **Switzerland** — "Burna Boy · the only artist reported · $0.82M · 1 night"
  - Burna Boy: "Best night $0.82M · Hallenstadion, Zurich (2022)"
- 🇧🇪 **Belgium** — "Burna Boy · the only artist reported · $0.78M · 1 night"
  - Burna Boy: "Best night $0.78M · Sportpaleis, Antwerp (2023)"
- 🇮🇪 **Ireland** — "Burna Boy leads · $0.38M of $0.71M · 2 nights reported"
  - Burna Boy: "Best night $0.38M · 3Arena, Dublin (2022)"
  - Asake: "Best night $0.33M · 3Arena, Dublin (2024)"
- 🇵🇭 **Philippines** — "Tyla · the only artist reported · $0.50M · 1 night"
  - Tyla: "Best night $0.50M · SM Mall of Asia Arena, Manila (2025)"
- 🇸🇬 **Singapore** — "Tyla · the only artist reported · $0.39M · 1 night"
  - Tyla: "Best night $0.39M · Singapore Expo, Singapore (2025)"


## 8. Edge cases in plain words (what the layouts must hold)

1. **Canada: a leader carried by runs.** Burna Boy leads Canada with $5,683,794 over 6 nights. $4,706,312 of that (82.8%) is his two runs: Toronto, 24–25 Feb 2024, and Montreal, 28–29 Feb 2024. His own best **single** night there is the smallest leading best night on the page ($527,395, Rogers Arena, Vancouver, 2023), and the runner-up, Asake, has a bigger single night ($916,954, Scotiabank Arena, Toronto, 2024). Without the runs, Asake would lead. This is the owner's rule working as intended: totals include runs. The design has to make "leads on total; best night is someone else's bigger" read as right, not as a bug. (A note on the brief's premise: Canada's lead is **mostly** runs, not **only** runs. His Vancouver and Edmonton nights joined the board on 3 Oct 2026.)
2. **UK: a row with no best night.** Wizkid's only UK figure is the O2 run (28–29 November and 1 December 2021, 3 nights, $2,875,468, 50,814 tickets). His row has a total and nights but no single night, so it needs a "nights reported together" state in place of the best-night line. The run is also on the box-office board's "Multi-night runs" list. The country page counts it in the UK total. That is the only place in the UK where his name appears.
3. **One-artist countries** (5 of 12): Japan, Switzerland, Belgium, the Philippines and Singapore. There is no runner-up and no "of $X". A whole **one-artist continent**: Asia, where Tyla is the only artist and leads all three of its countries.
4. **Not his:** 3 of the 12 countries and 1 of the 4 continents are led by someone else (Tyla). Leaders' names and figures show in plain ink there, never gold.
5. **Scale:** country totals run from $26,920,799 (US, 48 nights, 7 artists) down to $385,207 (Singapore, 1 night), a 70× spread. Artist totals inside a country run from $15,495,482 (him, US) down to $100,555 (Fireboy DML, Australia). The smallest best night is $53,334. A bar or area scale has to keep a $0.1M row visible next to a $15.5M one, or say plainly that it does not.
6. **Many nights, small money:** Tiwa Savage has 13 US nights for $1,169,955 (the most nights on the page after his 16), so she outranks Rema's 3 nights ($1,132,167) by $37,788. The nights column and the total column can tell different stories.
7. **The longest strings** (§7 table): country "United Kingdom" (14), artist "Tiwa Savage" (11), venue "Mitsubishi Electric Halle" (25), city "Silver Spring, MD" (17). The longest best-night line is the UK runs-only one (86 characters). The longest phone meta line is his Canada line with its run note (160 characters).
8. **Empty continents:** Africa (shown, by rule) and South America (not shown today). If the designer shows the continents as a set (a map, a row of six), South America needs a state too. If it stays unshown, say so in the design response, so the owner can rule on it.
9. **Held off the board, so not on this page:** Burna Boy's Ziggo Dome, Amsterdam, 14 Apr 2022 (the gross has no Billboard/Pollstar report; the owner's ruling, 3 Oct 2026), so **the Netherlands is absent**. Also Tiwa Savage's O2 Academy Brixton, 2022 ($344,500), which is pending a body read. Either could join later. The layout must take a new country without redesign.
10. **The same venue under several artists:** Madison Square Garden, New York (5 artists); Capital One Arena, Washington D.C. and State Farm Arena, Atlanta (3 each); The O2 Arena, London (Burna Boy and Davido single nights, plus Wizkid's run); Scotiabank Arena, Toronto (Asake's single night, plus Burna Boy's run). A venue-based graphic would have to stack them.


## 9. Board extras (for the brief's heroes and Job 2's rows)

Made by `research/board-extras.mjs` from the same data file (`node docs/design/box-office-by-country/research/board-extras.mjs 2>/dev/null`). Single shows only: the three multi-night runs are not on the ranked board. **Bold** = Burna Boy.

### Top ten single shows

| # | Artist | Venue, city | Year | Tickets | Gross |
|---|---|---|---|---|---|
| 1 | **Burna Boy** | 🇬🇧 London Stadium, London | 2024 | 58,973 | $6,147,209 |
| 2 | **Burna Boy** | 🇫🇷 Stade de France, Paris | 2025 | 43,881 | $4,528,368 |
| 3 | Fally Ipupa | 🇫🇷 La Défense Arena, Paris | 2023 | 39,048 | $3,160,842 |
| 4 | **Burna Boy** | 🇫🇷 La Défense Arena, Paris | 2023 | 36,585 | $2,863,340 |
| 5 | **Burna Boy** | 🇺🇸 Capital One Arena, Washington, D.C. | 2024 | 13,892 | $1,724,853 |
| 6 | **Burna Boy** | 🇺🇸 TD Garden, Boston | 2024 | 13,219 | $1,592,684 |
| 7 | **Burna Boy** | 🇺🇸 Madison Square Garden, New York | 2022 | 13,586 | $1,576,641 |
| 8 | **Burna Boy** | 🇺🇸 Capital One Arena, Washington, D.C. | 2022 | 14,688 | $1,434,525 |
| 9 | **Burna Boy** | 🇺🇸 State Farm Arena, Atlanta | 2024 | 13,331 | $1,394,173 |
| 10 | **Burna Boy** | 🇩🇪 Lanxess Arena, Cologne | 2023 | 14,260 | $1,386,581 |

- His shows in the top ten: 9; in the top five: 4.
- The highest-ranked show that is not his: No. 3, Fally Ipupa, La Défense Arena (2023), $3,160,842.
- Shows at $1M or more: 18, of them his: 14.
- Scale: biggest $6,147,209 / smallest $47,221 = 130×.
- Tickets per show run from 525 to 58,973.
- Years on the board: 2021, 2022, 2023, 2024, 2025. Distinct tours: 20.

### Per artist, single-show board (the chip counts)

| Artist | Shows | Gross of those shows | Best show |
|---|---|---|---|
| **Burna Boy** | 32 | $40,279,755 | $6,147,209 · London Stadium, London (2024) |
| Davido | 10 | $5,915,195 | $1,201,417 · The O2 Arena, London (2024) |
| Asake | 8 | $4,611,475 | $916,954 · Scotiabank Arena, Toronto (2024) |
| Fally Ipupa | 1 | $3,160,842 | $3,160,842 · La Défense Arena, Paris (2023) |
| Tyla | 3 | $2,062,943 | $1,175,124 · Ariake Arena, Tokyo (2025) |
| Rema | 5 | $1,646,360 | $793,707 · Madison Square Garden, New York (2025) |
| Tiwa Savage | 16 | $1,408,214 | $175,420 · The Fillmore, Silver Spring, MD (2022) |
| Tems | 4 | $1,099,834 | $547,697 · Radio City Music Hall, New York (2024) |
| Wizkid | 1 | $1,002,709 | $1,002,709 · Madison Square Garden, New York (2022) |
| Fireboy DML | 2 | $100,555 | $53,334 · Metro Theatre, Sydney (2023) |

### Longest strings in the board's own fields

- Venue: "Brisbane Entertainment Centre" (29)
- City: "Silver Spring, MD" (17)
- Tour: "We Rise by Lifting Others Tour" (30)
- Artist: "Fally Ipupa" (11)
- Phone meta in the owner's 3 Oct form, "Artist · City · Year", every row: longest "Tiwa Savage · Silver Spring, MD · 2022" (38); longest of his: "Burna Boy · Washington, D.C. · 2024" (35).
- The same with the tour added, every row: longest "Tiwa Savage · Silver Spring, MD · Water & Garri Tour · 2022" (59).
