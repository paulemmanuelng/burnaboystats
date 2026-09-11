# Mobile audit brief — /compare on burnaboystats.com

Repo: /Users/paulemmanuelng/burnaboy-website (Next.js 16, CSS Modules). Dev server: http://localhost:3000 (already running, hot-reloads).
Page: app/compare/page.tsx (server component, every state is a URL; controls are <Link>s; the search is a GET form).
Styles: app/compare/compare.module.css (mobile breakpoint block at `@media (max-width: 760px)`), tokens in app/globals.css.
Mobile chrome registry: app/lib/mobileScreens.ts (which routes get a back bar / action bar / five-tab bar). Existing mobile action-bar pattern: app/components/MobileCerts.tsx (`.actionBar`, `.actionPrimary`) + app/components/mobileCerts.module.css.
Design handoff (mobile frames M1–M3): /private/tmp/claude-501/-Users-paulemmanuelng-SQL-Project/4773f091-3fa7-48cc-afc8-1748c3619fba/scratchpad/rd60/design_handoff_burnaboystats/PROMPT-COMPARE.md and designs/desktop/Compare.dc.html in the same bundle (a design file; read EXTRACTION-GUIDE.md there). Spec: docs/design/CERT-UNITS-COMPARE-SPEC.md.
Site design rules that count as conventions (do not report these as defects): gold is for live-or-action only; mono is labels only; dense list screens, no accordions for content lists (a <details> fold on a picker of 85 chips is a deliberate, Paul-requested exception); one responsive tree for this page (deliberate); state lives in the URL; certified units are never "sold".

## The harness (headless Chrome over CDP — no playwright)
node /private/tmp/claude-501/-Users-paulemmanuelng-SQL-Project/4773f091-3fa7-48cc-afc8-1748c3619fba/scratchpad/mobile/shot.mjs --url "<URL>" [--width 375] [--height 812] [--dpr 2] [--theme dark|light] [--out /path/file.png] [--full] [--eval "<js expression>"] [--click "<css selector>"] [--open-details] [--scroll <px>]
- Prints one JSON line: scrollWidth/clientWidth/overflowX/scrollHeight + evalResult. overflowX true = horizontal overflow = a blocker.
- --eval runs in the page after load (use an IIFE; return JSON-serialisable values). Measure with getBoundingClientRect, getComputedStyle, scrollWidth vs clientWidth.
- --click runs element.click() on the first match, then waits 250ms (client-side navigation happens; then measure window.scrollY, location.href, etc.).
- --full captures the whole page. Write screenshots under /private/tmp/claude-501/-Users-paulemmanuelng-SQL-Project/4773f091-3fa7-48cc-afc8-1748c3619fba/scratchpad/mobile/<your-label>/ (mkdir -p it). Read a PNG with the Read tool to look at it.
- Each run launches its own Chrome (~3–6 s). Run several in sequence; do not run more than 3 at once.
- CSS-module classes are hashed on the dev server ("compare-module__-ZWgpW__wrap"); select with [class*="__wrap"] or [class*="tableWrap"].

## States (all on http://localhost:3000)
S0  /compare                                                      arrival, both slots empty
S1  /compare?a=burna-boy                                          one side filled
S2  /compare?a=burna-boy&b=wizkid                                 normal artist comparison
S3  /compare?a=burna-boy&b=wizkid&all=1                           table fully expanded
S4  /compare?a=burna-boy&b=wizkid&ng=1&feat=1                     Nigeria included, features on
S5  /compare?a=burna-boy&b=black-sherif                           Nigeria included BY DEFAULT (why-line)
S6  /compare?a=seyi-vibez&b=bnxn                                  both home-market artists
S7  /compare?a=burna-boy&b=burna-boy                              same-artist refusal
S8  /compare?mode=songs                                           song mode arrival
S9  /compare?mode=songs&a=burna-boy                               song picker (85 releases, folded after 8)
S10 /compare?mode=songs&a=burna-boy&qa=last                       search results
S11 /compare?mode=songs&a=burna-boy&qa=zzz                        no matches
S12 /compare?mode=songs&a=burna-boy&b=wizkid&sa=Gbona&sb=Essence  song vs song (the design's fixture)
S13 /compare?mode=songs&a=wizkid&b=tems&sa=Essence&sb=Essence     same-record refusal
S14 /compare?mode=songs&a=ayra-starr&b=rema&sa=Santa&sb=Bubalu    Latin programme markers
S15 /compare?a=tyla&b=tems                                        multiplier caveat (†) and ‡ vintage marks
S16 /compare?mode=songs&a=asake&b=olamide&sa=Peace%20Be%20Unto%20You%20(PBUY)&sb=Amapiano   long title
S17 /compare?mode=songs&a=ckay&b=burna-boy&sa=love%20nwantiti%20(ah%20ah%20ah)&sb=Ye       long lower-case title
Widths to cover: 320, 360, 375, 390, 414, 430 (height 812). Themes: dark AND light (--theme light).

## Already fixed today (do not re-report)
- `<main>` was fit-content inside body's column flexbox, so the table's min-content pushed the document to 404px at 375 (`.wrap { width: 100% }` now). Verify it stays at 375 in your states; report only if you find a DIFFERENT overflow.

## What a finding must contain
title; severity (blocker = broken/unusable/clipped/wrong; major = clearly worse than the site's other mobile screens or off the design; minor; nit); state id(s) + width(s) + theme; the exact harness command that shows it; the measured evidence (numbers, or a screenshot path); what you believe the cause is (file:line if you found it); a concrete suggested fix. No speculation without a measurement or a screenshot. Do NOT edit any repo file — this is read-only.
