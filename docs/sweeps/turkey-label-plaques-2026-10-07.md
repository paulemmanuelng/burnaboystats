# Turkey as a label-issued market — 7 Oct 2026

**Scope:** two plaques for Burna Boy's *Dai Dai* (Shakira & Burna Boy) — 🇹🇷 Diamond (new) and 🇨🇴 Gold → Platinum (an upgrade) — and one for Tyla's *Water* — 🇹🇷 3× Diamond (new). All three are **label-issued** (▣ in `README.md`), counted on the owner's ruling; none is a register row, and no register was read for them. Nothing here is a sweep of any body: the full register sweep remains `sweep-2026-10-02.md`.

## The ruling (Paul, 7 Oct 2026)

- **Turkey has no certification register for singles or streaming.** Mü-Yap, the IFPI national group, runs only its yearly Mü-Yap Music Awards, mainly albums; mu-yap.org has no certifications page; tr.wikipedia's certification list has no Turkey singles row. (The Aug 2026 gap pass read Mü-Yap's whole public corpus: award-night tables for 2003–2009 only, albums only, physical copies — `tyla-certifications-v1.md`, Per-body coverage.)
- **Turkish single plaques are label-issued.** Sony Music Türkiye awards its own Diamond, Platinum and Gold from Spotify, TikTok and YouTube data, and publishes no threshold table and no register.
- **Label-issued Turkey plaques count** — Burna Boy's *Dai Dai* Diamond — **and, for fairness, Tyla's Turkey plaques go in too.** This extends the label-plaque model already on the site: South Africa (Tyla's Sony Music Africa award, 3 Oct 2026; AKA's *All Eyes on Me* 19×) and Colombia (*Dai Dai*'s Sony Music Colombia Gold, 24 Sep 2026). It does not relax "confirm at the body" for any country whose register can be read.

## The evidence

All seen in the owner's screenshots and files. **No photo or screenshot is committed**; X, Instagram, Facebook and TikTok are not fetched by this site's tooling, so the posts are cited, not linked.

1. **Sony Music's "FIFA World Cup Official Song 2026" plaque for *Dai Dai*** (Sony Music Latin-Iberia), presented to Shakira at Live Nation Music Land, Madrid, early October 2026, photographed with her. Its tier columns, as read: **DIAMOND — Brazil, France, Turkey**; **PLATINUM — … Colombia …** (certifications in 35 territories in all, as listed in the owner's notes of 6 Oct 2026).
2. **Shakira's own certifications graphic** — Diamond: brasil, france, turkey.
3. **Sony Music Türkiye's own graphic**, credited to "Shakira and Sony Music Türkiye", reported on 7 Oct 2026 as "certified **DIAMOND SINGLE** for **75,000 units** sold in Türkiye". This is the issuer and the only Turkish unit level ever published.
4. **Epic Records' TYLA plaque** — Getty Images **2206148592** (photographer Natasha Campos), Los Angeles, **30 Jan 2025**; logos Epic and FAX. Read 3 Oct 2026 (zoomed) and again 7 Oct 2026. The *Water* line opens **"3X DIAMOND TURKEY"**; the *Jump* line reads **"PLATINUM TURKEY, SPAIN, MALAYSIA"**; the TYLA album line names no Turkey.

## What changed

| artist | title | country | before | after | issuer (`body`) | evidence | /compare |
|---|---|---|---|---|---|---|---|
| Burna Boy | *Dai Dai* | 🇹🇷 Turkey | — | **Diamond ▣** | Sony Music Türkiye (`source: "label"`) | 1, 2, 3 | **75,000** units |
| Burna Boy | *Dai Dai* | 🇨🇴 Colombia | Gold ▣ (Sony Music Colombia) | **Platinum ▣** | Sony Music | 1 | not priced (the `["CO/single"]` pin, unchanged) |
| Tyla | *Water* | 🇹🇷 Turkey | — | **3× Diamond ▣** | Epic Records (`source: "label"`) | 4 | **225,000** units (3 × 75,000, † multiplier assumed) |

- **Colombia is an upgrade, not a new plaque:** one plaque per title per country at its current tier, so the Platinum replaces the Gold on the release row; the dated log keeps the Gold step and adds the Platinum. The issuer is named as the plaque names it, **Sony Music** — the plaque does not say which Sony company made the Colombian award, so "Sony Music Colombia" (the Gold's issuer) is not carried over. Colombia's register, Pro Música Colombia, runs only to Aug 2024.
- **Turkey on the site.** `COUNTRIES.TR` names **Sony Music Türkiye** as Turkey's body — the label that issues Turkish plaques, there being no register — and links its own site, https://www.sonymusic.com.tr/ (robots.txt `User-agent: * / Disallow:`, read 7 Oct 2026; no thresholds and no register on it, and no page for *Dai Dai*, Shakira or Tyla in its sitemaps). It is the closest honest link. Every Turkish plaque still names its issuer and carries `source: "label"`, so the CSV and the API call it a label plaque with no register link, and every "read in the body's own register" sentence counts it as an exception.
- **Pricing.** `CERT_THRESHOLDS.TR`: single Diamond **75,000** (Sony Music Türkiye's own figure, evidence 3); Gold and Platinum **null** because no level for them has been published anywhere — not because the label does not award them; albums excluded (no level published). The board at /compare/in/turkey is priced "at Sony Music Türkiye's own Diamond level".

## Totals

| | before | after |
|---|---|---|
| Burna Boy — plaques | 250 | **251** |
| Burna Boy — countries | 26 | **27** (Turkey) |
| *Dai Dai* — plaques / countries | 18 | **19** |
| Burna Boy — Diamonds | 7 (all SNEP, France) | **8** (7 SNEP; 1 Sony Music Türkiye, label-issued) |
| Tyla — plaques / countries | 75 / 24 | **76 / 25** (`tyla-certifications-v1.md`) |
| Board (19 artists, Burna Boy apart) | 1,088 | **1,089** |
| Board + Burna Boy | 1,338 | **1,340** |
| Plaques not read off a register row (the hub's Provenance tile) | 15 | **17** |
| Country boards at /compare/in | 27 | **28** (Turkey) |
| Burna Boy — certified units (Nigeria apart, features in) | 31,442,660 | **31,517,660** (+75,000) |
| Tyla — certified units (Nigeria apart, features in) | 14,070,565 | **14,295,565** (+225,000) |

## Pending — not added

- **Tyla, *Jump* 🇹🇷 Platinum ▣** (evidence 4, "PLATINUM TURKEY"). No Turkish Platinum unit level has been published, so it cannot be priced on /compare, and the unpriced set stays pinned to Colombia's singles (`tests/compareReconciliation.test.ts`; owner's rule of 23 Sep 2026: price it or ask, never widen the pin). Add it when a Sony Music Türkiye Platinum figure is published, or on the owner's word on how to price it.
- **The other territories on Sony Music's *Dai Dai* plaque** that have no readable register (Chile, Peru, Central America, India, Malaysia, Taiwan, Singapore and the rest) are not part of this ruling, which covers Turkey and the Colombian upgrade only.
