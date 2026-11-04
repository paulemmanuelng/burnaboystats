# /records/firsts: the outside source behind each "Proof ↗" (read 4 Nov 2026)

Paul asked on 4 Nov 2026 for every first's "Proof" to link the exact real
source. Each candidate page was opened before it was used:

- robots.txt was read first, in its own step, and checked for the
  "burnaboystats-bot" agent, Claude-User and `*`. No host used here names
  either agent, and `*` allows every page used. officialcharts.com and
  chartmasters.org bar only the training crawlers ClaudeBot and anthropic-ai;
  musicweek.com has no robots.txt (404). Pollstar's `Crawl-delay: 10` was kept
  between its pages.
- The page was fetched with plain curl and the "burnaboystats-bot" user agent:
  no login, no cookies, nothing clicked.
- A page is used only where it states the first itself, or, for a figure, a
  chart or a count, where it prints the row the first rests on. A page that
  only confirms the event is not used.

The data carries each link as `proof: { url, quote, readOn }`
(app/data/firsts.ts, FirstSource). The quote is the page's own words or table
row, as read on 4 Nov 2026. Both layouts open it in a new tab.

## Linked: 21 firsts

Each row is the data's `url` and `quote`, exactly (tests/firstsProof.test.tsx
holds the two together). The kworb rows quote the table rows the first rests
on: the first and fifth of the five songs past 400,000,000, the 23rd of 23
past 100,000,000, the 52nd of 52 past 50,000,000, the albums past 500,000,000
and 1,000,000,000, and the daily table's Peak row for "Dai Dai" (Global).

| First | Source | Quote, as read |
|---|---|---|
| First Nigerian artist to headline Red Rocks Amphitheatre | https://news.pollstar.com/2025/06/20/burna-boy-announces-no-sign-of-weakness-north-american-tour/ | making Burna Boy the first Nigerian artist to ever headline the iconic venue |
| First African artist to headline the Stade de France | https://www.stadefrance.com/en/le-stade/burna-boy-stade-de-france | becoming the first African artist to perform a solo concert at this legendary stadium |
| First African artist to headline & sell out a UK stadium | https://www.queenelizabetholympicpark.co.uk/whats-on/burna-boy-london-stadium | Following his 2023 sellout show … Burna Boy made history in his recent performance at London Stadium as the first African artist to headline a UK stadium. |
| First African artist to headline & sell out a US stadium | https://www.grammy.com/artists/burna-boy/251682/ | Burna Boy became the first African artist to headline and sell out major stadium venues in the U.S. and Europe |
| First African artist to headline the Hollywood Bowl | https://news.pollstar.com/2021/11/03/bringing-burna-boy-to-the-bowl-duke-concept-builds-the-u-s-into-a-viable-touring-market-for-top-african-talent/ | Burna Boy’s Oct. 8 headline show at the Hollywood Bowl is being hailed as the first by an African artist. |
| First African artist to perform at a FIFA World Cup Final halftime show | https://inside.fifa.com/organisation/media-releases/justin-bieber-world-cup-2026-final-halftime-show-madonna-shakira-bts | To represent Africa on the first-ever FIFA World Cup Final Halftime Show is a privilege and a responsibility |
| First African artist to perform on the Grammys' main telecast stage | https://www.grammy.com/news/burna-boy-no-sign-of-weakness-review-takeaways/ | the African giant broke precedent as the first African artist to perform on the 2024 GRAMMYs stage |
| First winner of the Grammy for Best Global Music Album | https://www.grammy.com/news/burna-boy-wins-best-global-music-album-twice-tall-2021-grammy-awards-show/ | They are the first winner of the recently renamed category, formerly known as Best World Music Album. |
| First African artist with four albums past 500 million Spotify streams | https://kworb.net/spotify/artist/3wcj11K77LjEY1PkEazffa_albums.html | Love, Damini 1,762,815,518 · African Giant 1,425,213,509 · I Told Them... 900,025,302 · Outside 513,742,850 |
| First African artist with a song over 6 million Spotify streams in a day | https://kworb.net/spotify/track/0kosUz0jePvjiz4ctmR6wL.html | Peak · Global · 1 (6,723,310) |
| First African artist to reach 60 million Spotify monthly listeners | https://chartmasters.org/artist/burna-boy/ | 2026-08-08 Listeners 60,000,000 |
| First African artist to reach 50 million Spotify monthly listeners | https://chartmasters.org/artist/burna-boy/ | 2026-07-06 Listeners 50,000,000 |
| First Nigerian artist to surpass 4 billion YouTube views | https://www.youtube.com/@BurnaBoy/about | 4,112,644,501 views |
| Past 2 billion UK streams before his first BRIT Billion | https://www.musicweek.com/labels/read/a-global-music-juggernaut-austin-daboh-toasts-burna-boy-s-no-1-promises-more-success/088460 | Over two billion streams in the UK across Burna's catalogue |
| First African artist with two albums over 1 billion Spotify streams | https://kworb.net/spotify/artist/3wcj11K77LjEY1PkEazffa_albums.html | Love, Damini 1,762,815,518 · African Giant 1,425,213,509 |
| First African artist to earn a UK No. 1 album and No. 1 single | https://www.officialcharts.com/artist/29059/burna-boy/ | OWN IT STORMZY/ ED SHEERAN/ BURNA BOY Peak: 1 … I TOLD THEM... BURNA BOY Peak: 1 |
| First African artist to reach 1 billion streams on Audiomack | https://audiomack.com/burna-boy | Total Account Plays 2,157,520,462 |
| First African artist to reach No. 1 on Spotify's Global Songs chart | https://newsroom.spotify.com/2026-09-03/songs-of-summer-reveal/ | It spent 37 days at No. 1 on our Global Charts |
| First African artist with five songs past 400 million Spotify streams | https://kworb.net/spotify/artist/3wcj11K77LjEY1PkEazffa_songs.html | * Location (feat. Burna Boy) 745,069,648 … * Own It (feat. Ed Sheeran & Burna Boy) 417,838,026 |
| First African artist with more than 20 songs past 100 million Spotify streams | https://kworb.net/spotify/artist/3wcj11K77LjEY1PkEazffa_songs.html | * Sungba (feat. Burna Boy) - Remix 102,981,111 |
| First African artist with 50 songs past 50 million Spotify streams | https://kworb.net/spotify/artist/3wcj11K77LjEY1PkEazffa_songs.html | * Miss You Bad 50,276,935 |

What the pages are:
- **The venue's own page:** stadefrance.com; queenelizabetholympicpark.co.uk,
  the page of London Stadium's owner for his 2024 show there.
- **The award body:** grammy.com, three pages (the 2021 winner's article, the
  No Sign of Weakness review and his artist bio).
- **The tournament:** inside.fifa.com, FIFA's media release, quoting Burna Boy.
- **The platforms and their trackers:** youtube.com, audiomack.com,
  newsroom.spotify.com, officialcharts.com, kworb.net, chartmasters.org.

Two hosts are trade press, not the venue: Pollstar (Red Rocks, the Hollywood
Bowl), the touring trade's paper of record; and Music Week, where the label
made the statement. No venue or promoter page on a readable host states those
two firsts. The Citi Field first is sourced to the Recording Academy's bio for
the same reason.

The 50-songs entry's rival counts were re-read on the same day's kworb pages:
docs/sourcing/BOARD-READINGS-2026-11-04.md.

## Left for Paul's ruling: 17 firsts whose source is billboard.com or TouringData's X

These keep their link inside the site, or none, until Paul rules. We do not
fetch billboard.com, and TouringData publishes on X.

Billboard (12):
- Highest-charting World Cup song in Billboard Hot 100 history (/dai-dai)
- First African artist to win a Billboard Music Award as lead artist (/records/awards)
- First African artist to reach No. 1 on the Billboard Global 200 (/records/africas-biggest)
- First entry on Billboard's Adult Contemporary chart (none)
- First African artist to chart the Billboard Hot 100 six years running (none)
- Most Billboard Hot 100 entries by an African artist (/records/africas-biggest)
- Highest-charting Nigerian album in Billboard 200 history (/records/charts)
- First Nigerian artist to chart five albums on the Billboard 200 (/records/charts)
- First African artist to top the Billboard Colombia Hot 100 (/records/charts)
- First African artist to top the Billboard Argentina Hot 100 (/records/charts)
- First African artist to appear on the Billboard Vietnam Hot 100 (/records/charts)
- One of only two African artists to top the Billboard Global 200 (Excl. US) (/records/charts)

Box office, Billboard Boxscore or TouringData (5):
- Highest-grossing tour ever by an African artist (/records/tours)
- Highest-grossing single concert by any African artist (/records/tours/revenue)
- First African artist to gross over $1M from a single Oceania concert (/records/tours/revenue)
- Highest-grossing tour by an African artist in Oceania (none)
- First African artist to play four arena-scale shows in a single Oceania tour (none)

## Kept inside the site: the two counts only this site derives

- Most certified African artist worldwide (/certifications)
- Most certifications by an African artist in a single year (/certifications)

## Not linked yet: 15 firsts with no readable page that states them

Each keeps its link inside the site, or none.

**Two are contradicted or qualified by the body's own page:**
- **First African lead artist nominated for a Grammy outside the global
  categories.** grammy.com's "10 African GRAMMY Winners Through The Years" lists
  Miriam Makeba's Best Folk Recording (1966, with Harry Belafonte) and Black
  Coffee's Best Dance/Electronic Album (2022, "the first African to win the
  category for an original project"). Both are non-global categories before
  2024. The claim needs Paul's ruling.
- **First Afrobeats artist to top the UK Official Albums Chart.** The OCC says
  "the first-ever international Afrobeats artist to secure a UK Number 1 album"
  and "While homegrown British talent such as J Hus have enjoyed chart-topping
  success on the Official Albums Chart". Renaming the first "First international
  Afrobeats artist to top the UK Official Albums Chart" would let it link
  officialcharts.com/chart-news/sittin-on-top-of-the-world-burna-boy-becomes-first-global-afrobeats-star-to-secure-uk/.

**The page confirms the event, not the first:**
- First African artist to headline a stadium concert in New Zealand. Auckland
  Stadiums' own news calls it "Burna Boy’s first-ever New Zealand performance
  at the inaugural Afrosoul Festival".
- First Nigerian artist to headline & sell out Madison Square Garden. Pollstar
  (10 Dec 2021) says "the first Nigerian artist to headline Madison Square
  Garden", before the show; nothing readable states the sell-out. msg.com's
  event page lists the show only.
- First African artist to headline a FIFA World Cup opening ceremony.
  inside.fifa.com (4 Jun 2026) names Shakira and Burna Boy for "Dai Dai" at
  the Mexico City ceremony, with Tyla also on the bill. It doesn't say "first".
- First African artist to perform at a UEFA Champions League final. uefa.com
  names Anitta and Burna Boy as the Kick Off Show's headliners. It doesn't say
  "first".

**The "first" is only in press or on social media:**
- First African artist to sell out the Ziggo Dome. The venue's articles are
  pre-show notices rendered in the browser; the plaque was shown on social
  media.
- First Afrobeats artist to sell out the SSE Arena, Wembley: press only.
- First African artist to pass 2 billion Spotify streams in a calendar year.
  ChartMasters' artist page prints month-end totals, not the 2026 figure; the
  "first" is ChartMasters' own post of 14 Oct 2026.

**No readable page records it:**
- Fastest music video of his career to 600 million views. kworb's video page
  keeps only the last 12 days; YouTube prints today's total.
- First African artist to top Spotify's Global Music Video Chart. Spotify for
  Artists' launch post (21 Jul 2026) names no No. 1. charts.spotify.com,
  opened read-only in the Browser pane, has no music-video chart among its
  charts and no dated page for it.
- First African artist to surpass 700 million monthly audience on YouTube.
  YouTube Music prints "665m monthly audiences" today. The 700M crossing and
  the 929M peak come from chart-tracking accounts.
- Longest run by an African song on Apple Music's Global Top 100. No page
  records run lengths, and kworb cannot see that chart.
- First African artist to surpass 2 billion UK streams. The BRIT Billion is
  the BPI's award for one billion. Its list dates his award to 15/07/2024;
  "2 billion" is the label's trophy and "first African" is @chartdata's.
  brits.co.uk now serves a Cloudflare challenge.
- First African artist with two No. 1 singles in Belgium. Ultratop's live
  site serves a Cloudflare challenge, and the Wayback copies of his artist
  page date from 2020, before "Dai Dai". The CDX index was offline.
