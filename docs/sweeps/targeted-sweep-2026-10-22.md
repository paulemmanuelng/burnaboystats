# Targeted register sweep — 22 October 2026 (Thursday)

Certifications only, Burna Boy and every board artist, one register: ZPAV,
read through olis.pl's own award lists. Read on the owner's report that "Dai
Dai" is Platinum in Poland. No other register was read for this sweep; the
rest of the Thursday set (IFPI Greece, IFPI Austria, IFPI Danmark and the
any-day registers) is not logged for this day.

**Status: one upgrade, no new plaque.** *Dai Dai* 🇵🇱 Gold → Platinum: ZPAV's
platynowe płyty list carries the row in its 21.10.2026 batch, posted to
olis.pl on 22 Oct 2026 at 10:05. Applied in the same edit
(`app/data/certifications.ts`, the release row and the dated log), which moved
`CERTS_VERIFIED_ON` to 2026-10-22. The day is logged in
`TARGETED_REGISTER_READS` with PL.

| code | register | newest batch read | result |
|---|---|---|---|
| PL | ZPAV, POST olis.pl/api/search, category 3 (oficjalna lista wyróżnień): subcategory 6 złote płyty, 7 platynowe płyty, 8 diamentowe płyty, the newest 100 rows of each | 21 Oct 2026 (Gold and Platinum); 5 Aug 2026 (Diamond, no batch since) | Platinum, 21.10.2026 batch (15 rows): "Shakira, Burna Boy \| Dai Dai \| Sony Music Entertainment \| singiel", `date_1` 2026-10-21, `date_2`–`date_7` empty, so 1×: **upgrade from Gold, applied**. The Gold row (złote płyty, `date_1` 2026-08-26) stays as the step below. Gold, 21.10.2026 batch (12 rows): no Burna Boy or board row. Both lists' 7 Oct batches: none either (as read on 15 Oct). Diamond: no Dai Dai, Burna Boy or board row. The other board-artist rows in the 100 read (Dave & Tems *Raindance* Gold, 05.08.2026; *We Pray* Platinum, 24.06.2026) are already on the site |

What the body prints: the public list
(`olis.pl/charts/oficjalna-lista-wyroznien/platynowe-plyty`) shows the row as
"Dai Dai | Shakira, Burna Boy | Sony Music Entertainment" with "21.10.2026" in
its "data przyznania" column, so the log carries that day as the award's
`date`. The register prints no unit count. ZPAV's rules from January 2025
(olis.pl/terms_oliw) set a Platinum single at 250,000 zł of revenue and state
no złoty-per-single rate; /compare converts it at 2 zł a single, the rate ZPAV's
own single tables used until the end of 2024 (`certThresholds.ts` PL, the ¶
note), so 125,000 units.

robots.txt on olis.pl is `User-agent: * / Disallow:` (nothing disallowed).
Fetched with curl, user agent "burnaboystats-bot", 22 Oct 2026, 18:12–18:18
UTC. The raw captures stay in the sweep's working folder (`zpav`,
`zpav-apply`); this file is the record of what the register showed.
