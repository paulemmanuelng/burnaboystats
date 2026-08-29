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
