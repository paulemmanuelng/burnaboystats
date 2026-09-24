# Cert watcher — sample report (live run after the review fixes)

The report below is exactly what the watcher rendered on a full live run
against every register, on 24 Sep 2026 at 14:12 UTC, from Paul's Mac, after
the review fixes of the same day (SPEC §0.3):

```
node --no-warnings scripts/cert-watch/index.mjs --dry-run --deep --cache <fresh dir> --out <dir> --save-raw <scratch dir>
```

**Since this run** (SPEC §0.4, later on 24 Sep): RiSA and FIMI are
permanently manual by Paul's ruling (both ask not to be read by AI tools), so
their rows now read `📋 human check` rather than "held — awaiting Paul's
ruling"; Music Canada and IFPI Danmark carry a rolling control (a first read
says it has none yet); Pro-Música Brasil also searches "Teams", its
misspelling of Tems; and a read that is not clean posts no leads. Later that
night Paul ruled on this run's two candidates (SPEC §0.5): TCSN's
"Asake | 02:30" is the site's "2:30", which holds NG Platinum ×4, and now reads
in sync; PROMUSICAE's "CKAY / AXEL / DJ YO | LOVE NWANTITI (REMIX)" is not
added (the site counts a song and its remixes as one record per country, and
holds ES Platinum on the original) and is a known divergence, suppressed at
that exact tier. A run today lists neither. The report below is left exactly
as it was rendered.

A dry run: no issue was touched, and the state block the issue body carries is
left out (this is `report.md`). The cache was fresh, so there was no previous
state: every candidate is marked new and every floor was learned on this run.
The two candidates are **leads for Paul, not decisions**; nothing was added to
the site.

The first full run (13:03 UTC) listed seven. The review showed five of them
were not leads, and the watcher no longer lists them: Pro-Música Brasil's
"Rema | Fame - A COLORS ENCORE" (Ouro) is the site's "Fame – A COLORS ENCORE",
BR Gold, printed with a hyphen instead of an en dash; TCSN's "Sarz, Asake &
Gunna | Happiness (Sarz)" is Asake's record, and reached Wizkid only through a
chart alias; and the RIAA, SNEP and PROMUSICAE Soweto rows credit the 2022
original by Victony & Tempoe, which Rema is not on (the Rema sweep removed the
Spanish Gold on the same credit). How GitHub's datacenter addresses are
treated is still unknown — the first Actions run (`workflow_dispatch`,
`dry_run: true`, `deep: true`) shows it host by host in its run details.

---

## 🏅 Certification watch — Thursday 24 September 2026

**2 candidates to verify** (2 new since the last run) · 21 of 21 automated registers read cleanly · 0 stale · 7 manual checks this week · 2 on the watchlist

ℹ️ No previous state was found, so every open candidate is listed as new.

> Every line is a **lead**, not a fact. Confirm it in the body's own register, then add it by hand: `certifications.ts` / `afrobeats.ts`, its `/compare` pricing, the country's register link, the updates feed. This bot never edits site data.

### Candidates

- [ ] 🆕 **Asake — "02:30"** · 🇳🇬 Nigeria · TurnTable (TCSN) · **NEW RELEASE** <!-- fp:fd42f0673447d8bc -->
  - Register reads: `Platinum_4` (Platinum ×4)
  - Award date: `2026-02-06T00:00:00` (certified date)
  - Row: `Asake | 02:30 | Platinum_4 | Single | | 2026-02-06T00:00:00 | isClaimed false`
  - Site holds now: no release titled like this on Asake's page
  - Check: https://turntablecharts.com/certification · Row link: https://turntablecharts.com/certification
  - ℹ TCSN is request-based and paid: a title can be certifiable and not listed, and the live list shows at most 500 rows and no Silver
  - First seen: 2026-09-24

- [ ] 🆕 **CKay — "LOVE NWANTITI (REMIX)"** · 🇪🇸 Spain · PROMUSICAE · **NEW RELEASE** <!-- fp:3099bcd20a31fe2c -->
  - Register reads: `1 × Discos de Platino` (Platinum)
  - Award date: `2024 semana 11` (award week (año · semana))
  - Row: `23765 · CANCIONES | LOVE NWANTITI (REMIX) | CKAY / AXEL / DJ YO | 1 × Discos de Platino | año 2024 semana 11`
  - Row: `15859 · CANCIONES | LOVE NWANTITI (REMIX) | CKAY / AXEL / DJ YO | 1 × Discos de Oro | año 2021 semana 46`
  - Site holds now: no release titled like this on CKay's page
  - Check: https://www.elportaldemusica.es/awards/index · Row link: https://www.elportaldemusica.es/single/ckay-axel-dj-yo-love-nwantiti-remix
  - First seen: 2026-09-24

### Watchlist — reported every run until it lands

- ⏳ **Dai Dai (Shakira & Burna Boy) — 🇺🇸 RIAA Latin** · register: `2X PLATINO` (`badge LA level 2`, award `default_451299`, certification date July 9, 2026) · site: Platinum ×6 (RIAA Latin) — **the site is ahead of the register** · lands when: the register reads level 6 or more · lead: the site holds 6X from RIAA's verified @⁠riaa\_awards post of 23 Sep 2026 (PR \#320, Paul 24 Sep); the database read 2X Platino (9 Jul 2026) on 24 Sep · read ✅ today, unchanged since 2026-09-24
- ⏸️ **Dai Dai (Shakira & Burna Boy) — 🇬🇧 BPI** · not machine-read today: ⏸️ held — robots.txt (robots.txt User-agent: \* / Disallow: / (read 24 Sep 2026); Paul to rule) · last reading (23 Sep sweep, BPI detail page): `Most Recent Certification Silver · Most Recent Certification Date 07 August 2026` · site: Silver · lands when: the site holds Gold (added by hand after a human confirms it at the BPI) · lead: fan lead; the BPI's public list stopped at the 04.09.2026 batch · human check: open https://certified-awards.bpi.co.uk/, set "certified date from" to last Monday; search the 16 names plus "Buju"; for Dai Dai open its detail page and read "Most Recent Certification"

### Register health

| Register | Class | Today | Newest seen / note |
|---|---|---|---|
| 🇺🇸 RIAA | AUTOMATE | ✅ read | newest award September 24, 2026 · control default\_424119 present · 11 Latin row(s) left to riaa-latin |
| 🇺🇸 RIAA Latin | AUTOMATE | ✅ read | 33 row(s) for the 16 names (newest: MVLAN (FT. JC REYES), September 21, 2026) · control default\_451299 present · 1 award history read |
| 🇨🇦 Music Canada | AUTOMATE | ✅ read | newest id 89710, 2026-09-23 · control 89702 present · 31,859 awards in the register (X-WP-Total) · first read: newest 100 awards |
| 🇫🇷 SNEP | AUTOMATE | ✅ read | newest date de constat 17/09/2026 · control DAI DAI · Diamant · 27/08/2026 present · 19 interprète searches |
| 🇵🇱 ZPAV | AUTOMATE | ✅ read | newest award 2026-09-23 · control 6:31629 present · 48 artist searches |
| 🇸🇪 Ifpi Sverige | WITH-CARE | ✅ read | newest cert date read 2026-09-18 · control 15311162 present · 72 searches (53 lead acts), 7 matched items with a badge, 7 record page(s) read |
| 🇩🇰 IFPI Danmark | WITH-CARE | ✅ read | newest 16.09.2026 · control row older than today's read reaches — checked in the tests · 152 distinct rows from pages 0–2 in 3 round(s), 9 requests · 10 row(s) printed on two pages in the default order — tied dates at page boundaries may still be short |
| 🇳🇱 NVPI | AUTOMATE | ✅ read | 6,493 awards in the register; newest 16-7-2026 (NVPI publishes late) · 500 newest read, back to 2005-11-17 |
| 🇨🇿 ČNS IFPI (chart 30) | WITH-CARE | ✅ read | week 38/2026 (week id 3036) · 50 badge(s) on 100 chart rows · badges show only while a title charts · previous week (week 37/2026): 49 badge(s) |
| 🇸🇰 ČNS IFPI (chart 43) | WITH-CARE | ✅ read | week 38/2026 (week id 3036) · 58 badge(s) on 100 chart rows · badges show only while a title charts · previous week (week 37/2026): 56 badge(s) |
| 🇦🇹 IFPI Austria | AUTOMATE | ✅ read | 5,994 awards in the register (read with fwp\_per\_page; the default page is a stale cache) · newest date 03.09.2026 · control Shakira & Burna Boy \| Dai Dai \| PLATIN \| 03.09.2026 present · deep read: all 5,994 rows |
| 🇭🇺 MAHASZ | AUTOMATE | ✅ read | 269 rows for 2026 · year only · control Shakira x Burna Boy \| Dai Dai \| 2026 present · 19 Kereső searches |
| 🇳🇴 IFPI Norge | AUTOMATE | ✅ read | newest trophy 25/08/2026 · control 19/05/2026 \| DAVE \| Location present · deep read: 96 trophies for 2026 |
| 🇪🇸 PROMUSICAE | AUTOMATE | ✅ read | week 39: 0 · week 38: 19 · control 30349 present · 15 artist searches (strings from the site's own dropdown) |
| 🇩🇪 BVMI | WITH-CARE | ✅ read | 2026: 434 rows · year only · control Shakira & Burna Boy \| Dai Dai \| 2026 \| Single \| 1x Gold present · 434 rows on 22 pages (2026) |
| 🇬🇷 IFPI Greece | WITH-CARE | ✅ read | chart week of 2026-09-07 · file dated 2026-09-23 · International: week 37/2026 · 75 award(s) on 100 rows · file Last-Modified Wed, 23 Sep 2026 05:48:30 GMT · Local: week 37/2026 · 70 award(s) on 100 rows · file Last-Modified Wed, 23 Sep 2026 05:48:29 GMT · charting titles only |
| 🇨🇭 IFPI Schweiz (swisscharts.com) | WITH-CARE | ✅ read | 29 cards for 2026 · control Tyla \| Chanel \| 2026 present · not a complete list (the page says so) |
| 🇳🇿 RMNZ (RadioScope) | WITH-CARE | ✅ read | 28,501 rows; newest 2026-09-17 · control Dave feat. Tems \| Raindance \| Plat x2 present · singles: 24,435 rows · albums: 4,066 rows · control search "Raindance": 3 row(s) |
| 🇲🇽 AMPROFON | WITH-CARE | ✅ read | 8,685 rows; newest 2026-09-23 (id 8721) · control 5987 present |
| 🇳🇬 TurnTable (TCSN) | WITH-CARE | ✅ read | newest certified date 2026-02-06 · control Asake \| Lonely At The Top \| Platinum\_8 present · 500 rows (the live cap is 500; no Silver shown) · first read · build 9FLVyEQ3OX\_KP6OGJD8nk (printed, never compared) · Wayback CDX not read (robots.txt unreadable (UNABLE\_TO\_GET\_ISSUER\_CERT)) — a lead only, not a register read |
| 🇧🇷 Pro-Música Brasil | WITH-CARE | ✅ read | 15 certificate(s) on the name searches · control Stormzy, Ed Sheeran, Burna Boy \| Own It \| Ouro present · 19 artist searches · deep read: 1274 of 1274 certificates for 2026 |
| 🇬🇧 BPI | MANUAL | ⏸️ held — robots.txt | robots.txt: User-agent: \* / Disallow: / · human check below |
| 🇿🇦 RiSA | MANUAL | ⏸️ held — awaiting Paul's ruling | recipe ready: honest User-Agent only (a browser one gets a decoy); robots.txt declares Content-Usage: ai=n · human check below |
| 🇮🇹 FIMI | MANUAL | ⏸️ held — awaiting Paul's ruling | footer bars crawling for AI training · human check below |
| 🇨🇴 Pro Música Colombia | MANUAL | 📋 human check | Hostinger bot check (403 "Checking your browser") since 24 Sep 2026 · register frozen since 21/02/2025 · human check below |
| 🇧🇪 Ultratop (BRMA) | MANUAL | 📋 human check | Cloudflare challenge (403) on every request — never automated · human check below |
| 🇦🇺 ARIA | MANUAL | 📋 human check | list is a Dropbox /sh/ zip that robots.txt disallows · human check below |
| 🇵🇹 AFP (Audiogest) | MANUAL | 📋 human check | robots.txt disallows /uploads (the weekly and annual PDFs) · human check below |

### Manual checks this week (2026-W39; ticks reset Monday)

- [ ] 🇬🇧 **BPI** — open https://certified-awards.bpi.co.uk/, set "certified date from" to last Monday; search the 16 names plus "Buju"; for Dai Dai open its detail page and read "Most Recent Certification" <!-- manual:uk:2026-W39 -->
- [ ] 🇧🇪 **Ultratop** — open https://www.ultratop.be/nl/goud-platina/2026/singles, in a browser (the page is behind a bot check), Ctrl-F the 16 names there and on /albums, and screenshot any row with the URL in frame <!-- manual:be:2026-W39 -->
- [ ] 🇦🇺 **ARIA** — open https://www.aria.com.au/accreditations, download the current list and search credit AND title; "Loved by You" and "Enjoy Yourself (Remix)" are kept plaques — don't re-flag them <!-- manual:au:2026-W39 -->
- [ ] 🇵🇹 **AFP** — open https://www.audiogest.pt/tops-semanais-2026, read the newest weekly PDF's Gal. column for the 16 names, then this month's award cards at instagram.com/audiogest (a frame proves only its own rows) <!-- manual:pt:2026-W39 -->
- [ ] 🇿🇦 **RiSA** — open https://risa.org.za/certification-levels/certifications/, in a browser, search the 16 names; the badge image is the tier (Multi-Platinum = at least 3×) <!-- manual:za:2026-W39 -->
- [ ] 🇮🇹 **FIMI** — open https://www.fimi.it/top-of-the-music/certificazioni/, filter singles then albums for this year, and search each of the 16 names <!-- manual:it:2026-W39 -->
- [ ] 🇨🇴 **Pro Música Colombia** — open https://pro-musica.co/certificaciones-2/, in a browser (Hostinger shows machines a bot check): is a register PDF newer than 21/02/2025 linked? <!-- manual:co:2026-W39 -->
- Coverage the bot cannot close: 🇳🇬 TCSN shows only 500 rows and no Silver (check for a new Wayback capture) · 🇨🇿🇸🇰 albums and off-chart titles carry no badge · 🇬🇷 non-charting titles carry no award · 🇸🇪 never-charted titles have no record id · 🇳🇱 NVPI runs about 2 months behind · 🇨🇭 the swisscharts.com page is not a complete list

<details><summary>Run details</summary>

Run 2026-09-24 14:12 UTC · 2 m 5 s · 350 requests (amprofon.com.mx 2, ifpi.at 3, ifpi.dk 10, ifpi.no 3, ifpicr.cz 5, musiccanada.com 2, pro-musicabr.org.br 52, slagerlistak.hu 21, snepmusique.com 21, sverigetopplistan.se 73, swisscharts.com 2, sys2.ifpi.se 8, turntablecharts.com 2, web.archive.org 1, www.elportaldemusica.es 19, www.goudplatina.nl 2, www.ifpi.gr 3, www.musikindustrie.de 23, www.olis.pl 52, www.radioscope.co.nz 7, www.riaa.com 39) · deep reads · dry run

First response per host: amprofon.com.mx 200 hcdn marker ✓ · ifpi.at 200 Apache marker ✓ · ifpi.dk 200 LiteSpeed marker ✓ · ifpi.no 200 Apache marker ✓ · ifpicr.cz 200 nginx marker ✓ · musiccanada.com 200 Apache marker ✓ · pro-musicabr.org.br 200 LiteSpeed marker ✓ · slagerlistak.hu 200 Apache marker ✓ · snepmusique.com 200 Apache marker ✓ · sverigetopplistan.se 200 nginx marker ✓ · swisscharts.com 200 cloudflare cf-ray marker ✓ · sys2.ifpi.se 200 Apache marker ✓ · turntablecharts.com 200 marker ✓ · web.archive.org network · www.elportaldemusica.es 200 Apache marker ✓ · www.goudplatina.nl 200 Vercel marker ✓ · www.ifpi.gr 200 Apache marker ✓ · www.musikindustrie.de 200 OMCnet Webserver marker ✓ · www.olis.pl 200 cloudflare cf-ray marker ✓ · www.radioscope.co.nz 200 BitNinja-WafPro marker ✓ · www.riaa.com 200 cloudflare cf-ray marker ✓

Smallest gap between two requests, per host: amprofon.com.mx 1.1 s · ifpi.at 1.1 s · ifpi.dk 1.1 s · ifpi.no 1.1 s · ifpicr.cz 1.1 s · musiccanada.com 30.0 s · pro-musicabr.org.br 1.1 s · slagerlistak.hu 1.1 s · snepmusique.com 1.1 s · sverigetopplistan.se 1.1 s · swisscharts.com 10.0 s · sys2.ifpi.se 1.1 s · turntablecharts.com 1.1 s · www.elportaldemusica.es 1.1 s · www.goudplatina.nl 1.1 s · www.ifpi.gr 1.1 s · www.musikindustrie.de 1.1 s · www.olis.pl 1.1 s · www.radioscope.co.nz 1.1 s · www.riaa.com 1.1 s

Suppressed: 2 known divergences (One Dance `badge DI level 11`, Wait For U `badge DI level 11`), 1 held row (`Asake | Bad Influence`), 0 tribute rejects, 0 dismissed · floors: musiccanada: floor learned: 31,859 · zpav: floor learned: 300 · nvpi: floor learned: 6,493 · cns-ifpi-cz: floor learned: 100 · cns-ifpi-sk: floor learned: 100 · ifpi-austria: floor learned: 5,994 · mahasz: floor learned: 269 · bvmi: floor learned: 434 · swisscharts: floor learned: 29 · rmnz: floor learned: 28,501 · amprofon: floor learned: 8,685 · tcsn: floor learned: 500 · cleared since the last run (the site caught up): none
</details>
