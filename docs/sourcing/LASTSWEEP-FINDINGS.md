# Last pass at the unreadable bodies — 27 Aug 2026

8 agents, 206 register reads, via Wayback and current dashboards.
**Two bodies cracked, two closed for good, one register discredited.**

## 🇧🇪 Belgium — CRACKED, and two earlier assumptions were wrong

1. **BEA is not the register-keeper.** `belgianentertainment.be` now 301s to
   **brma.be** — BEA renamed to the Belgian Recorded Music Association. Its full
   sitemap (~160 URLs) carries news, jobs, members, contact — **no awards
   section at all**. BRMA publishes no register.
2. **Ultratop publishes the Belgian awards**, and the register did not die, it
   **moved**: not `/nl/awards` (which has *zero* Wayback snapshots ever) but
   `/fr/or-platine/<year>/<singles|albums>`. The legacy `certifications.asp`
   endpoint still serves it and is well archived.

Live Ultratop is Cloudflare-403 on every path; the **archived** capture is fully
readable — an all-time singles register of **1,971 certified titles, 2016-2024**,
each row carrying its full tier history with dates.

**All four board/Burna entries in Belgium:**

| Credit | Title | Tier |
|---|---|---|
| Master KG feat. Burna Boy & Nomcebo Zikode | Jerusalema (Remix) | 2× Platine |
| Drake feat. Wizkid & Kyla | One Dance | 3× Platine |
| Rema | Calm Down | 2× Platine |
| Tyla | Water | Platine |

Album register swept 2019-2025: **zero** hits for any of the thirteen artists.
Genuinely absent from Belgium: Davido, Tems, Ayra Starr, Asake, Omah Lay, Seyi
Vibez, Victony, Fireboy DML, CKay — including "Essence", "Love Nwantiti" and
"Peru" despite their chart runs. **Burna Boy has no lead-credit Belgian plaque**;
his one Belgian award is the Master KG feature.

## 🇨🇭 Switzerland — readable but for the wrong years. Keep it omitted.

Wayback holds `hitparade.ch/awards.asp` for **1989-2018 plus 2019/2020 only**.
From January 2021 **every** capture 404s, and the live page is Turnstile-walled.
The Afrobeats certification window (2021-2026) is archived nowhere.

Years that *were* read — 2015, 2016, 2017, 2018, 2019, 2020, ~426 rows parsed in
full — contain **zero** hits for any of the thirteen, lead or featured.

**That is not a "no Swiss plaques" verdict** and must not be recorded as one:
Calm Down, Water, Love Nwantiti, Essence and Last Last all fall in the missing
years.

**New structural finding worth putting in `certifications.ts`:** Swiss
certification is **request-based**. `ifpi.ch/edelmetallpruefung` is not a
register — it is a paid application form (CHF 75 + 8.1% VAT for a GfK check).
IFPI Schweiz publishes thresholds only. **Absence from any Swiss list never
implies uncertified** — structurally identical to TCSN. Published thresholds,
from the archived pages: since 2017, Gold = 10,000 and Platinum = 20,000 units
for singles and albums alike.

Two dead ends closed permanently: `ifpi.ch` has no register path (full 33-page
sitemap enumerated), and hitparade.ch has no alternate Edelmetall path.

## 🇬🇷 Greece — READ LIVE, six rows

Shakira & Burna Boy "Dai Dai" Gold · Drake "One Dance (feat. Wizkid)" 3× Platinum ·
Dave "Raindance (feat. Tems)" 2× Platinum · Tyla "Water" 2× Platinum ·
Tyla "PUSH 2 START" Gold · Selena Gomez & Rema "Calm Down" Platinum

## 🇨🇴 Colombia — one row, and it is not what the site records

The register returns **FEID FEAT REMA — "BUBALU" — DIAMANTE**. The site's single
Colombian row is a *label-issued* Sony Music Colombia award, which is a different
thing. Worth reconciling.

## 🇨🇿 🇸🇰 Czechia & Slovakia — no public register. Closed.

Both agents returned `NO_PUBLIC_REGISTER`. Do not spend another pass here.

## 🇿🇦 South Africa — the register is archived, but its data is now suspect

Wayback holds RiSA's certification pages as **artist+title filtered URLs**
(40-53KB, real content) under `/certification-levels/certifications/?artist=…&title=…`.
The unfiltered page is a ~5KB JS shell in every capture, which is why direct
reads kept failing.

**The "No Stress" credit does not survive checking.** Two separate agents
reported RiSA crediting *"Wizkid feat. Burna Boy — No Stress"*. Neither is
supported:

- Across **1,908 archived RiSA captures there is no "No Stress" capture at all**.
- RiSA's own archived URL for **"Ginger"** — the Made in Lagos track that
  genuinely *does* feature Burna Boy — reads **`artist=Wizkid`**, plain.

So the register does not evidence a Burna Boy credit on "No Stress", and
**Paul is right that it is a Wizkid song** — it is a solo track on *Made in
Lagos*; Ginger is the Burna feature. **Treat every ZA row from these passes as
unreliable**, and treat the earlier "missing No Stress plaque" as fully retracted.
