# Car design frames — source assets

The fifteen supplied page designs, **originals, untouched**. These are the reference
for [car-collection-build-handoff.md](../car-collection-build-handoff.md); read that
before working from them.

Filenames are as supplied and must stay that way — the handoff's manifest table cites
them, and renaming breaks the audit trail. The `slug` column is the route slug and the
exported asset name (`public/cars/<slug>.avif`), derived only at export.

**Ranked most-expensive-first, matching the index order.**

| # | file | car | slug | note |
|---|---|---|---|---|
| 01 | `IMG_1530.jpeg` | Bugatti Chiron (Venuum Widebody) | `bugatti-chiron` | — |
| 02 | `IMG_1531.jpeg` | McLaren Senna (MSO Carbon Edition) | `mclaren-senna` | — |
| 03 | `IMG_1529.jpeg` | Ferrari SF90 Spider | `ferrari-sf90-spider` | — |
| 04 | `IMG_0104.png` | Ferrari Purosangue | `ferrari-purosangue` | watermark |
| 05 | `IMG_0106.png` | Lamborghini Revuelto | `lamborghini-revuelto` | watermark |
| 06 | `IMG_1532.jpeg` | Rolls-Royce Cullinan Black Badge | `rolls-royce-cullinan-black-badge` | — |
| 07 | `IMG_1534.jpeg` | Lamborghini Aventador SVJ Roadster | `lamborghini-aventador-svj-roadster` | — |
| 08 | `IMG_1533.jpeg` | Rolls-Royce Dawn | `rolls-royce-dawn` | — |
| 09 | `IMG_1538.jpeg` | Ferrari 812 GTS | `ferrari-812-gts` | wordmark typo: BURNADDYSTATS.COM |
| 10 | `IMG_1535.jpeg` | Porsche 911 GT3 RS (Weissach) | `porsche-911-gt3-rs` | frame reads (992) — ship the site's designation |
| 11 | `IMG_1539.jpeg` | Lamborghini Urus (Novitec Edition) | `lamborghini-urus` | — |
| 12 | `IMG_0110.jpeg` | Mercedes-Maybach S680 4MATIC | `mercedes-maybach-s680` | — |
| 13 | `IMG_0111.jpeg` | Mercedes-Maybach GLS 600 | `mercedes-maybach-gls-600` | watermark |
| 14 | `IMG_0112.jpeg` | Ferrari Testarossa | `ferrari-testarossa` | — |
| 15 | `IMG_0113.jpeg` | Ferrari 328 GTS | `ferrari-328-gts` | watermark |

## Watermark

Four frames carry the Gemini sparkle at roughly `x 1210–1310, y 598–688` on the
1374×768 frame — centre ≈ `(1253, 641)`, about 40×40px. It sits at x ≈ 91%, y ≈ 83.5%,
**outside the car-crop window** (x 20–80%, y 16–78%), so extracting the car removes it
without any retouching. See §8.1 of the handoff.

## What these are not

Concept frames, not production comps. Every string in them is generated pixels and
several are misspelled. Correct on layout, hierarchy, palette and proportion;
unreliable on every word and every number. See §3 and §4 of the handoff.
