# How the numbers in `../tour-map.md` were made

Read-only. Nothing here writes to `app/`. Run from this folder:

```sh
python3 derive.py ../../../../.. > derived.json   # parse tours.ts, tourRevenue.ts, performedCountries.ts, worldShapes.ts
python3 gen_md.py                                 # writes tables.md (the §2 tables; derived-tables.md is the 29 Sep copy)
python3 analysis.py                               # on-screen sizes per layout, fill contrast, the Antarctica band
python3 inset_candidates.py ../../../../..        # what a corner inset would cover, Dai Dai map and tour map
cp measured-daidai.json daidai-out.json && python3 inset_area.py ../../../../..   # share of each country under today's Dai Dai inset

# added 30 Sep 2026 for the brief's second pass
python3 card_counts.py > card-counts.md                            # the counting rules: documented line, de-duplication, years, biggest line
python3 country_links.py ../../../../.. boards.txt > country-links.md   # best chart peak, plaques and certifications board per country
python3 countries_md.py > ../countries.md                          # joins the two into the per-country table
python3 region_views.py 364 > region-views.md                      # phone region views as lon/lat boxes, 402-wide phone (map 364 px); pass 352 for 390
python3 closeup_and_inset.py ../../../../.. > closeup-and-inset.txt     # desktop close-up corners (cropped and uncropped), magnification, Dai Dai inset 901-1440
```

`boards.txt` is the list of certifications boards linked from the live
https://burnaboystats.com/compare/in on 30 Sep 2026 (27 slugs). Refresh it with
`curl -s https://burnaboystats.com/compare/in | grep -o 'href="/compare/in/[a-z0-9-]*"' | sed 's#href="/compare/in/##; s#"##' | sort -u > boards.txt`.
`region-views.md` holds both widths (the 402 run first, then 352 for comparison with
the 390 screenshots).

- `derive.py` holds the two judgement calls, as tables:
  - `LOC` maps each festival, one-off and concert `location` string to a
    country and a city.
  - `LM_PLACE` places each live moment.

  Everything else is counting.
- `phone.js`, `desktop.js`, `desktop-card.js` and `daidai.js` are the in-page
  measuring scripts for the repo's headless-Chrome harness. Run them one at a
  time, under the machine lock:
  `~/.local/bin/heavy node scripts/mobile-shot.mjs --url https://burnaboystats.com/records/tours/map --width 375 --height 812 --eval "$(cat phone.js)"`.
  Add `--desktop --width 1440 --height 900` for the desktop scripts, and use
  `/dai-dai` for `daidai.js`. `desktop.js` and `daidai.js` also load the same
  page in a 1024 × 768 same-origin iframe, so its media queries read 1024.
- The card half of `desktop.js` came back empty (`cardH` all null):
  `element.focus()` fires no focus event in a headless page that doesn't have
  window focus. `desktop-card.js` redoes it with a synthetic click, which the
  map handles the same way (`PerformanceMap.tsx:94-97`).
- `measured-*.json` are the raw outputs of 29 Sep 2026.
