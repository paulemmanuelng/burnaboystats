# Netherlands — goudplatina.nl is NVPI's own register

**Question raised 27 Aug 2026: what is goudplatina.nl?** It is not a third party.
It is **NVPI's own dedicated certification site**:

- Title *"Goud, Platina & Diamant"*; strapline *"De officiële status voor de
  meest beluisterde hits in Nederland"*.
- Names NVPI 23 times; contact address is **goudplatina@nvpi.nl**.
- Carries a searchable **Database** of awards.

So Dutch rows sourced to `goudplatina.nl` are body reads, not aggregator reads.

**The site's NL link should move.** `COUNTRIES.NL.url` currently points at
`nvpi.nl`, the trade association's general site. The register is at
**https://www.goudplatina.nl/database** — that is where a reader can actually
check a plaque.

## Burna Boy's three Dutch plaques, located at NVPI

| Site row | NVPI record | Date |
|---|---|---|
| African Giant — Gold | `Burna Boy — African Giant` | 17-8-2020 |
| Love, Damini — Gold | `Burna Boy — Love, Damini` | 3-11-2022 |
| Location (Dave ft. Burna Boy) — Platinum | **`DAVE — Location`** | 21-5-2026 |

**The third one proves the artist+title rule.** Searching NVPI for "Burna"
returns only two records, because the register credits *Location* to DAVE alone.
And searching the title alone is worse: NVPI holds **two** records called
*Location* — Dave's (2026) and **Khalid's (2017)**. Title-only matching takes the
wrong one; artist-plus-title takes the right one.

## Caveat

NVPI's `/api/filter` responses carry artist, title, date and an id, but **no tier
field** in what was returned. The tiers above are the site's existing values, not
values read from NVPI. Confirming Goud vs Platina vs Diamant needs the record
rendered on the database page, not the filter API.
