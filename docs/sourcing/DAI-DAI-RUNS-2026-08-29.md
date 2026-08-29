# "Dai Dai" — every run figure, read at the body (29 Aug 2026)

Prompted by a fan chart round-up. **Every number below was read at the chart
body's own site or an archived capture of it**; the round-up was used only as a
list of things to go and check, and it is wrong in two places (see the bottom).

## What changed

| Chart | Weeks at No. 1 | Weeks on chart | How |
|---|---|---|---|
| Germany — Offizielle Charts | 8 → **9** | 13 → **14** | counted; the 14 is the body's own "In Charts: 14 W" |
| Austria — Ö3 Austria Top 40 | 9 → **10** | 13 → **14** | see below; the 14 is the body's own WW column |
| Sweden — Sverigetopplistan | 6 → **7** | 14 → **15** | counted, v21–v35 |
| Billboard Global 200 | 5 → **6** | — → **13** | counted; the 13 is the body's WEEKS cell |
| Billboard Global Excl. US | 9 (unchanged) | — → **14** | counted; WEEKS cell |
| Portugal — AFP/Audiogest | — → **8** | — → **14** | counted from the weekly PDFs; "Sem. Top." = 14 |
| Luxembourg — Billboard | — → **8** | — → **13** | counted; WEEKS cell |
| Greece — IFPI Greece | — → **4** | — → **10** | counted; "# of Weeks" = 10 |
| Slovakia — IFPI ČNS | *(absent)* | — → **12** | "Počet kol: 12", the body's own |
| Poland — ZPAV/OLiS | — → **1** | — → **12** | new No. 1 — see POLAND-OLIS.md |
| France — SNEP | 6 (**unchanged**) | — | see below |

**No chart body publishes a weeks-at-No.1 figure.** Every such number here was
counted week by week from that body's own weekly chart, and the weeks counted
are listed below. Bodies publish position, last-week, peak and weeks-on-chart;
those are quoted as theirs where used.

## The runs, week by week

- **Germany** No. 1 in the nine weeks 3 Jul → 3 Sep. The three weeks before are
  read and are *not* No. 1: 26 Jun #2, 19 Jun #2, 12 Jun #11.
- **Sweden** No. 1 in v28–v32, v34, v35 — **seven, not consecutive**: it fell to
  #2 in v33 behind Victor Leksell & Molly Sandén's "Tänk om". Run v21 #96 → v35 #1.
- **Billboard Global 200** — **six, not consecutive**: 18 Jul, 25 Jul, 1 Aug,
  8 Aug, then #3 on 15 Aug, then 22 Aug and 29 Aug. Debut 6 Jun at #114.
- **Global Excl. US** — nine consecutive, 4 Jul → 29 Aug. Debut 30 May at #166.
- **Portugal** — eight consecutive, Semanas 27–34. Debut S21 at #182.
- **Luxembourg** — eight consecutive, 11 Jul → 29 Aug. Debut 6 Jun at #15.
- **Greece** — **four, not consecutive**: weeks 26, 27, **29**, 30, with week 28
  spent at #2 behind Hugel's "Jamaican (Bam Bam)". IFPI Greece then paused the
  chart for the summer ("Τα Charts θα επιστρέψουν το Σεπτέμβριο"), so week 30 is
  the last one published.

### Austria, which needed two routes

Neither oe3.orf.at nor austriatop40.at publishes a weekly archive — both serve
only the current week — so the run cannot simply be walked. **10** is settled by
two independent arguments that agree:

1. The 22 Aug commit (`d5eff08`) recorded **9 weeks, 13 on chart**, read
   week-by-week at the body, i.e. through the 21 Aug chart. Today the body has
   it at No. 1 again with **WW = 14**. One further chart week, and it was No. 1
   in it: 9 + 1 = **10**.
2. Working from Wayback captures of the Ö3 page, No. 1 is confirmed on 26 Jun,
   17 Jul, 24 Jul, 31 Jul, 7 Aug, 14 Aug, 21 Aug and 28 Aug. **26 Jun → 28 Aug
   is exactly ten chart weeks.** Only 3 Jul and 10 Jul could not be re-read, and
   they sit inside a span the first argument already covers.

## Two things the round-up gets wrong

**France has not gained a week.** SNEP has not published a 28 August chart at
all — semaine 34 ("Semaine du 21 août 2026") is the latest — so no increment was
possible. The **6** already on the site stands.

It stands for a reason worth recording. SNEP shows a *Dai Dai*-titled row at
No. 1 for **seven** straight weeks (semaines 28–34), but the rows are not the
same record: semaine 30 reads **"DAI DAI (A CAPPELLA)"**. A version is not the
song, so semaine 30 is excluded — which gives exactly the 6 already published.
(Semaines 28–29 credit "SHAKIRA" alone and 31–34 "SHAKIRA, BURNA BOY"; that
reads as SNEP's credit field catching up, and it does not change the count
either way.)

**Greece is 4 weeks at No. 1, not 3.** The round-up undercounts by one. The
same IFPI Greece page also carries a separate **"Dai Dai (Instrumental)"** row
(ISRC USQX92604110) at No. 5 in week 30 — not the song, not counted. Two charts
in one sweep where a version row sat beside the record.

**And Poland's climb is +8, not +9** — ZPAV's own row gives the previous week
as 9. Peaks are what this dataset publishes, so nothing downstream moves.

## Access notes for the next sweep

- **offiziellecharts.de** returns HTTP 403 to curl and to WebFetch. It reads
  normally in a real browser.
- **billboard.com** now 307-redirects automated clients to `tollbit.billboard.com`
  ("not authorized … without a valid TollBit Token"). No token was sought; its
  pages were read through Wayback captures of billboard.com, each cited.
- **ifpicr.cz** would not accept connections during the sweep (timeouts to
  62.109.154.161:443 over both schemes) and Wayback holds only nine captures of
  `/hitparada/43` ever. The live page *did* load once from this machine — that
  read is where the Slovak 12 comes from — but the weekly archive needs a Nette
  form POST (`_do=chart-chartForm-submit&chartId=43&weekId=<id>`, ids sequential,
  3029 = week 34 of 2026) which timed out on every attempt. **Slovakia's weeks at
  No. 1 stay absent rather than guessed.**
- **austriancharts.at is a Hung Medien mirror, not the body.** It was avoided.

## The four that could not be closed, and what is known about each

### Netherlands — closed, and the one clean read of the four

dutchcharts.nl **publishes the figure itself**: "Peak 1 (7 weken)", and its own
week-by-week table matches this repo's note row for row — 20.06 #1, 27.06 #1,
then 04.07–18.07 at #2, then 25.07 through 22.08 at #1. Seven weeks, in two
stints, exactly as written. **Weeks on chart moves 13 → 14** ("Aantal weken 14"),
and the song is no longer No. 1: it sits at **No. 3 on the 29/08/2026 chart**.

*Provenance caveat worth a ruling:* dutchcharts.nl carries a Hung Medien
copyright. It is the standard published home of the Single Top 100 and hosts the
chart's own week-by-week data rather than reproducing someone else's table — but
it is not an NVPI/GfK-branded property. Elsewhere this repo treats Hung Medien
sites as mirrors to avoid (austriancharts.at). Paul may want to decide whether
the Dutch case is different.

### The conflation trap sitting right next to it

**top40.nl's Nederlandse Top 40 is a different chart** and has "Dai Dai" at
**No. 1 in week 35 with a tenth week at No. 1 and 14 weeks on chart**. This repo
tracks the Single Top 100 for NL, where the song is at No. 3.

Note what those numbers are: a **10** and a **14**. The 10 equals the figure this
repo stores for *Switzerland's* weeks at No. 1, and the 14 equals the Belgian
weeks-on-chart claim. If a figure here ever came off a round-up rather than a
body, this is the most plausible place it got crossed. top40.nl does not publish
the Single Top 100 at all.

### Switzerland — left at 10, with the reasoning recorded

hitparade.ch is Cloudflare-gated ("Performing security verification"; 403 to
curl) and Wayback holds nothing on the song page after **09.08.2026**. That
capture is useful, because **hitparade.ch publishes weeks-at-peak itself**:
"Peak 1 (9 weeks)", 12 weeks on chart, with a run table of 24.05 #33 → 09.08 #1
showing No. 1 in the nine weeks from 14.06.

The stored **10** is consistent with that: nine weeks through 09.08 plus the
16.08 chart, which is what the 21 Aug commit that set it would have been reading.
So **10 is left alone.** It is probably now one or two weeks low — Swiss charts
are Sunday-dated, so 23.08 has published — but a figure that understates a run
is not the same as a wrong one, and nothing readable supports raising it.

(One hypothesis considered and rejected: that the 10 was misread from the
26.07.2026 chart row "VW 1 | W 10 | P 1", where W is weeks **on chart**. That
would be a real trap — but the arithmetic above explains the 10 without it.)

### Belgium — unverified, left at 9 / 14

ultratop.be is Cloudflare-gated on **both** language sides, and Wayback has no
capture of either Ultratop 50 during the run. The stored figures were read at
the body on 22 Aug (`d5eff08`) and are left as they are.

Explicitly **not** used as corroboration: the Hung Medien cross-country panel on
the dutchcharts song page shows "BE Peak 1 / weken 14" for both regions. Those
are weeks **on chart**, not weeks at No. 1, and it is an aggregator summary
rather than Ultratop's own data.

### Norway — unverified, left at 4, and the readable record is consistent

VG-lista no longer serves weekly lists: vglista.no 301s to vg.no/vglista/ and
every chart path 404s. It publishes no weeks-at-No.1 figure in any case. Wayback
holds 2026 weeks 01–03, 05–09, 13, 14, 18–20, 26, 27, 29 and 30 only.

All four readable in-run weeks show the song **not** at No. 1 — wk26 #4, wk27 #2,
wk29 #3, wk30 #2 (behind "Vikingblod", then the Kygo remix). That is not a
contradiction: this repo says the Norwegian run starts at **week 31**, and weeks
31–35 have no captures at all. The readable record is consistent with the claim
without supporting it.

## Gated or gone, for the next sweep

| Body | State |
|---|---|
| hitparade.ch | Cloudflare interstitial; 403 to curl. No song-page capture after 09.08.2026 |
| ultratop.be | Cloudflare interstitial on both language sides; no in-run captures |
| vglista.no | Weekly lists no longer served at all; every chart path 404s |
| ifpicr.cz | Host refused connections during the sweep; nine Wayback captures of `/hitparada/43` ever |

No bot check was bypassed anywhere.
