// Live moments — the milestone shows and broadcasts, newest first.
//
// Split out of ./tours on 4 Oct 2026: the Stade de France line reads its gross
// off the box-office board (./tourRevenue), and ./tours is bundled into client
// components, so importing the board there shipped every row's `source` note
// to the browser. Import this file from server code only;
// tests/tourRevenueServerOnly.test.ts walks every "use client" module's
// imports and fails if one reaches ./tourRevenue.

import type { LiveMoment } from "./tours";
import { revenueShows } from "./tourRevenue";

// The Stade de France gross, read off the Boxscore row the leaderboard prints
// rather than typed a second time (NPC-03, Paul, 24 Sep 2026: the first is the
// headline — the row is 43,881 tickets, not a sell-out).
const stadeDeFranceRow = revenueShows.find((r) => r.artist === "Burna Boy" && r.venue === "Stade de France");
const stadeDeFranceGross = stadeDeFranceRow ? ` — a $${(stadeDeFranceRow.revenue / 1e6).toFixed(2)}M gross` : "";

// Newest first within each year too, as the page prints them in this order
// (debug pass 5 Oct 2026: 2025 ran Stade de France, Red Rocks, the Lionesses
// parade). The rows that are also dated tour shows carry no `date` of their
// own (see LiveMoment.date), so the order is kept by hand, not sorted.
//
// Madison Square Garden: "First Nigerian", as firsts.ts, the Space Drift note
// and TouringData's 25 May 2022 post say — it read "First African" until
// 5 Oct 2026, a claim no source on the site makes.
export const liveMoments: LiveMoment[] = [
  { year: "2026", date: "2026-07-19", title: "FIFA World Cup Final halftime show", text: "Performed at the 2026 final's halftime show at MetLife Stadium, East Rutherford (19 July) — the first African artist to do so — on a bill with Madonna, Shakira, BTS, Justin Bieber and Coldplay.", record: true },
  { year: "2026", title: "FIFA World Cup Opening Ceremony", text: "Headlined the opener in Mexico City with Shakira, performing the official tournament song “Dai Dai.”" },
  { year: "2026", date: "2026-01-16", title: "AFCON 2025 Fan Zone grand finale", text: "Headlined “The AFCON Last Dance” in Rabat (16 Jan 2026), closing out the Africa Cup of Nations hosted by Morocco — on a bill with Stormzy, Stonebwoy and Jaylann." },
  { year: "2025", title: "Red Rocks Amphitheatre", text: "First Nigerian artist to headline the iconic Colorado venue, opening the North American leg of the No Sign of Weakness tour." },
  { year: "2025", title: "England Lionesses' Euro victory parade", text: "Surprise-performed “For My Hand” for a crowd the FA put at 65,000 at Buckingham Palace as the Lionesses celebrated retaining the UEFA Women's Euro (July 2025) — manager Sarina Wiegman, a self-professed fan, sang along." },
  { year: "2025", title: "Stade de France, Paris", text: `First African artist to headline the Stade de France (April 2025)${stadeDeFranceGross}.` },
  { year: "2024", title: "London Stadium — African concert record", text: "$6.15M from 58,973 tickets: the highest-grossing single concert by any African artist.", record: true },
  { year: "2024", title: "Grammy Awards Stage", text: "First African artist to perform on the Grammys' main telecast stage — a medley from I Told Them… with Brandy and 21 Savage." },
  { year: "2023", title: "Citi Field, New York (sold out)", text: "First African artist to headline and sell out a stadium in the United States." },
  { year: "2023", title: "UEFA Champions League Final", text: "First African artist to perform at the Champions League final kick-off show, in Istanbul." },
  { year: "2023", title: "London Stadium (sold out)", text: "First African artist to headline a UK stadium (3 June 2023), to about 60,000 fans, on the Love, Damini tour." },
  { year: "2023", title: "NBA All-Star Game halftime show", text: "Headlined an Afrobeats halftime show at the 2023 NBA All-Star Game in Salt Lake City, alongside Tems and Rema." },
  { year: "2022", title: "Billboard Music Awards", text: "Performed at the 2022 Billboard Music Awards in Las Vegas." },
  { year: "2022", title: "Madison Square Garden (sold out)", text: "First Nigerian artist to sell out the world's most famous arena." },
  { year: "2022", title: "National Stadium, Jamaica", text: "His first concert in Jamaica — about 19,000 fans in Kingston, joined by Popcaan and Lila Iké, staking his claim in reggae's home." },
  { year: "2021", title: "Grammy Awards Premiere Ceremony", text: "Performed “Ye,” “Onyeka” and “Level Up” at the 2021 pre-telecast ceremony — the year Twice as Tall won Best Global Music Album." },
  { year: "2020", title: "One World: Together at Home", text: "Performed “African Giant” and “Hallelujah” from Lagos on the Global Citizen/WHO Covid-19 benefit special curated by Lady Gaga, spotlighting relief efforts across Africa." },
];
