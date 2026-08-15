// The full career timeline (/timeline) — the site's chronological spine.
// Every entry restates a fact that already lives (dated and sourced) in
// firsts.ts, awards.ts, albums.ts, tours.ts or the About bio; nothing here is
// asserted for the first time. The /about page keeps its own nine-row abridged
// strip — this is the deep version, linking out to the pages that hold the
// working.

export type TimelineKind = "album" | "milestone" | "award" | "tour" | "chart";

export interface TimelineEntry {
  date: string; // display label — year, or a fuller date where the record has one
  title: string;
  text: string;
  href?: string;
  kind: TimelineKind;
}

export interface TimelineEra {
  name: string;
  span: string;
  intro: string;
  entries: TimelineEntry[];
}

export const timelineEras: TimelineEra[] = [
  {
    name: "Port Harcourt to Lagos",
    span: "2010 – 2015",
    intro:
      "A decade before the records, the foundations: mixtapes out of Port Harcourt, a debut on Aristokrat, and a sound already fluent in Fela's afrobeat and dancehall.",
    entries: [
      { date: "2010", title: "The career begins", text: "Burna Boy starts releasing music out of Port Harcourt, working with producer LeriQ in the Aristokrat camp.", kind: "milestone" },
      { date: "2012", title: "“Like to Party” breaks through", text: "The breakout single that carried him onto Nigerian radio, later the lead track of his debut album.", href: "/music/like-to-party", kind: "chart" },
      { date: "2013", title: "L.I.F.E — the debut album", text: "Leaving an Impact For Eternity, released on Aristokrat Records. It would win Album of the Year at the 2015 Nigeria Entertainment Awards.", href: "/music/albums/life", kind: "album" },
      { date: "2015", title: "On a Spaceship", text: "The second album, self-released on his own Spaceship label — the imprint still on every record since.", href: "/music/albums/on-a-spaceship", kind: "album" },
    ],
  },
  {
    name: "The World Catches Up",
    span: "2017 – 2019",
    intro:
      "An Atlantic deal, a song called “Ye”, and the album that told everyone exactly who he was — he had been ready for years.",
    entries: [
      { date: "2017", title: "Signs with Atlantic Records", text: "The major-label deal that set up his international run.", kind: "milestone" },
      { date: "2018", title: "Outside — and “Ye” goes global", text: "His major-label debut wins Album of the Year at the Nigeria Entertainment Awards, and “Ye” becomes his international calling card.", href: "/music/albums/outside", kind: "album" },
      { date: "2019", title: "African Giant", text: "The statement album — his first Grammy nomination followed, plus the Edison Award and certifications across Europe and North America.", href: "/music/albums/african-giant", kind: "album" },
      { date: "2019", title: "First Afrobeats artist to sell out the SSE Arena, Wembley", text: "The London arena sellout that announced the live draw — and the BET Award for Best International Act arrives the same year.", href: "/records/firsts", kind: "tour" },
      { date: "2019", title: "A UK No. 1 single — “Own It”", text: "With Stormzy and Ed Sheeran, Burna Boy tops the UK Singles Chart.", href: "/records/charts", kind: "chart" },
    ],
  },
  {
    name: "The Crown",
    span: "2020 – 2021",
    intro: "Recorded in lockdown, crowned on the Grammy stage.",
    entries: [
      { date: "Aug 2020", title: "Twice as Tall", text: "The fifth album, executive-produced by his mother and manager, Bose Ogulu — features reaching from Youssou N'Dour to Stormzy.", href: "/music/albums/twice-as-tall", kind: "album" },
      { date: "Mar 2021", title: "The Grammy", text: "Twice as Tall wins Best Global Music Album — the first winner of the category under that name.", href: "/records/awards", kind: "award" },
      { date: "2021", title: "First African artist to headline the Hollywood Bowl", text: "The Los Angeles landmark joins the list of firsts.", href: "/records/firsts", kind: "tour" },
    ],
  },
  {
    name: "The Giant Era",
    span: "2022 – 2024",
    intro:
      "Madison Square Garden, stadiums on two continents, a UK No. 1 album and the Grammys' main stage — the era the records piled up.",
    entries: [
      { date: "Apr 2022", title: "First Nigerian artist to headline & sell out Madison Square Garden", text: "One night at the Garden — and the Ziggo Dome sellout follows the same year.", href: "/records/firsts", kind: "tour" },
      { date: "Jul 2022", title: "Love, Damini — and “Last Last”", text: "The personal album reaches No. 2 in the UK and the Netherlands — the highest-charting Nigerian album in Billboard 200 history at No. 14 — while “Last Last” becomes one of the most-certified African songs ever.", href: "/music/albums/love-damini", kind: "album" },
      { date: "Jun 2023", title: "First African artist to perform at a UEFA Champions League final", text: "Istanbul, before Manchester City vs Inter — his first global football stage.", href: "/records/firsts", kind: "milestone" },
      { date: "Aug 2023", title: "I Told Them… debuts at UK No. 1", text: "The first Afrobeats album ever to top the UK Official Albums Chart — and a No. 1 in Nigeria.", href: "/music/albums/i-told-them", kind: "album" },
      { date: "2023", title: "Stadium history, twice", text: "First African artist to headline and sell out a UK stadium (London Stadium) and a US stadium (Citi Field) — in the same year.", href: "/records/firsts", kind: "tour" },
      { date: "2023", title: "The I Told Them… Tour", text: "The arena run behind the album. When Billboard Boxscore published the full tally in 2025, it stood at $30.46M and 302,801 tickets — the highest-grossing tour ever by an African artist.", href: "/records/tours", kind: "tour" },
      { date: "Feb 2024", title: "First African artist on the Grammys' main telecast stage", text: "A medley from I Told Them… with Brandy and 21 Savage.", href: "/records/firsts", kind: "milestone" },
      { date: "2024", title: "The biggest single show by any African artist", text: "London Stadium: $6.15M grossed and 58,973 tickets in one night.", href: "/records/tours/revenue", kind: "tour" },
    ],
  },
  {
    name: "No Sign of Weakness",
    span: "2025",
    intro: "An eighth album and a year of firsts, from Red Rocks to the Stade de France.",
    entries: [
      { date: "Jul 2025", title: "No Sign of Weakness", text: "Album eight: No. 1 in Nigeria, with Travis Scott, Mick Jagger and Shaboozey — AFRIMA's Album of the Year.", href: "/music/albums/no-sign-of-weakness", kind: "album" },
      { date: "2025", title: "Red Rocks, Stade de France, New Zealand", text: "First Nigerian artist to headline Red Rocks, first African artist to sell out the Stade de France, and the first African stadium headline in New Zealand.", href: "/records/firsts", kind: "tour" },
      { date: "2025", title: "Five albums on the Billboard 200", text: "The first Nigerian artist to chart five albums on the US album chart.", href: "/records/firsts", kind: "chart" },
    ],
  },
  {
    name: "The World Cup Era",
    span: "2026",
    intro:
      "“Dai Dai” with Shakira — the official FIFA World Cup song — turns a career of firsts into a global No. 1 machine.",
    entries: [
      { date: "May 2026", title: "“Dai Dai” arrives", text: "The official 2026 FIFA World Cup song, with Shakira — released 14 May.", href: "/dai-dai", kind: "chart" },
      { date: "Jun 2026", title: "First African artist to headline a FIFA World Cup opening ceremony", text: "Mexico City, alongside Shakira, performing the tournament's own song.", href: "/records/firsts", kind: "milestone" },
      { date: "2026", title: "No. 1 on the Billboard Global 200", text: "The first African artist to top it — and the highest-charting World Cup song in Billboard Hot 100 history.", href: "/records/charts", kind: "chart" },
      { date: "19 Jul 2026", title: "The World Cup Final halftime show", text: "The first-ever FIFA World Cup Final halftime show — and the first African artist to headline it.", href: "/dai-dai", kind: "milestone" },
      { date: "8 Aug 2026", title: "60 million monthly listeners", text: "The first African artist to reach 60 million on Spotify — after being the first to 50 million weeks earlier.", href: "/records/africas-biggest", kind: "milestone" },
      { date: "Aug 2026", title: "The 100th Platinum plaque", text: "“Dai Dai” goes Platinum in Hungary — Burna Boy's 100th current Platinum award worldwide.", href: "/certifications", kind: "award" },
    ],
  },
];

export const timelineEntryCount = timelineEras.reduce((n, e) => n + e.entries.length, 0);
