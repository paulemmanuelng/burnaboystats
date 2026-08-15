// Per-album deep-dive pages (/music/albums/[slug]). Charts and certifications
// are pulled live from data/charts.ts and data/certifications.ts by title —
// same pattern as the song pages (data/songs.ts) — so an album page never
// drifts from the rest of the site. This file holds only what those datasets
// don't: the editorial hook, the verified extra facts, and per-album SEO.
//
// Everything stated here is verifiable from the chart/cert/awards data or from
// well-documented history — no invented figures. Album streaming totals that
// circulate in fan graphics (e.g. "2.1B across all platforms") deliberately do
// NOT appear: no body publishes them.

import type { SongFact } from "./songs";
import { sameTitle } from "../lib/titleKey";

export interface AlbumPage {
  slug: string;
  title: string; // must match data/albums.ts, charts.ts and certifications.ts
  tagline: string;
  blurb: string;
  extraFacts: SongFact[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const albumPages: AlbumPage[] = [
  {
    slug: "life",
    title: "L.I.F.E",
    tagline: "The debut — Leaving an Impact For Eternity",
    blurb:
      "Burna Boy's 2013 debut studio album on Aristokrat Records, its title an acronym for Leaving an Impact For Eternity. Carried by “Like to Party”, “Tonight” and “Run My Race”, it announced a sound already fluent in Fela's afrobeat and dancehall — and won Album of the Year at the 2015 Nigeria Entertainment Awards.",
    extraFacts: [
      { v: "2015", l: "Album of the Year — Nigeria Entertainment Awards" },
      { v: "15", l: "tracks, with 2face Idibia, Timaya, Wizkid, Olamide and Reminisce among the guests" },
    ],
    faqs: [
      {
        q: "What does L.I.F.E stand for?",
        a: "L.I.F.E is an acronym for Leaving an Impact For Eternity — the title of Burna Boy's 2013 debut studio album, released on Aristokrat Records.",
      },
      {
        q: "Which songs are on L.I.F.E?",
        a: "The 15-track album carries “Like to Party” — his breakout lead single — alongside “Tonight”, “Run My Race”, “#Yawadey” and collaborations with 2face Idibia, Timaya, Wizkid, Olamide and Reminisce.",
      },
      {
        q: "Did L.I.F.E win any awards?",
        a: "Yes — L.I.F.E won Album of the Year at the 2015 Nigeria Entertainment Awards and was nominated for Best R&B/Pop Album at the 2014 Headies.",
      },
    ],
    metaTitle: "L.I.F.E — Burna Boy's 2013 Debut Album",
    metaDescription:
      "L.I.F.E (Leaving an Impact For Eternity), Burna Boy's 2013 debut: “Like to Party”, guests from Wizkid to 2face — and Album of the Year at the 2015 NEA.",
  },
  {
    slug: "on-a-spaceship",
    title: "On a Spaceship",
    tagline: "The second album — self-released on his own Spaceship label",
    blurb:
      "Released in 2015 on his own Spaceship imprint, On a Spaceship is Burna Boy's second studio album — nineteen tracks with Wizkid, Phyno, Flavour, Wande Coal and South Africa's AKA among the guests. “Rizzla” endures as its cult favourite, and the self-released album marked the independence that still defines the Spaceship label credit on every record since.",
    extraFacts: [
      { v: "19", l: "tracks — his longest album" },
      { v: "2015", l: "self-released on his own Spaceship label" },
    ],
    faqs: [
      {
        q: "What is On a Spaceship?",
        a: "On a Spaceship is Burna Boy's second studio album, released in 2015 on his own Spaceship label — a 19-track record with Wizkid, Phyno, Flavour, Wande Coal and AKA among its guests.",
      },
      {
        q: "Which artists feature on On a Spaceship?",
        a: "The album features Wizkid (Single), Phyno (Duro Ni Be), Flavour (Before), Wande Coal (On a Very Good Day), Nyanda (Mine Tonight) and a South African posse cut with AKA, Kid X and Da L.E.S (Birthday).",
      },
      {
        q: "What is the best-known song on On a Spaceship?",
        a: "“Rizzla” has endured as the album's cult favourite — it has its own deep-dive page on this site with the story of its afro-dancehall groove.",
      },
    ],
    metaTitle: "On a Spaceship — Burna Boy's 2015 Album",
    metaDescription:
      "On a Spaceship, Burna Boy's self-released 2015 album: 19 tracks, guests from Wizkid to AKA, and the cult favourite “Rizzla” — the full tracklist and story.",
  },
  {
    slug: "outside",
    title: "Outside",
    tagline: "The breakthrough — home of “Ye”",
    blurb:
      "His first release under Atlantic, Outside (2018) is the album that carried Burna Boy out — thirteen tracks with J Hus, Lily Allen and Mabel, and above all “Ye”, the song that became his global calling card. It won Album of the Year at the 2018 Nigeria Entertainment Awards and set up everything African Giant would claim a year later.",
    extraFacts: [
      { v: "2018", l: "Album of the Year — Nigeria Entertainment Awards" },
      { v: "13", l: "tracks, with J Hus, Lily Allen and Mabel featuring" },
      { v: "“Ye”", l: "the breakout — over 330 million Spotify streams and counting" },
    ],
    faqs: [
      {
        q: "Which album is Burna Boy's “Ye” on?",
        a: "“Ye” is on Outside (2018), Burna Boy's first release under Atlantic. The song became his international breakthrough and now counts hundreds of millions of streams — its full story is on this site's “Ye” page.",
      },
      {
        q: "Who features on Outside?",
        a: "Outside features J Hus (Sekkle Down), Lily Allen (Heaven's Gate) and Mabel (Outside) across its 13 tracks.",
      },
      {
        q: "Did Outside win any awards?",
        a: "Yes — Outside won Album of the Year at the 2018 Nigeria Entertainment Awards and earned a Best R&B/Pop Album nomination at the 2019 Headies.",
      },
    ],
    metaTitle: "Outside — Burna Boy's 2018 Breakthrough Album",
    metaDescription:
      "Outside (2018), the album that broke Burna Boy worldwide: home of “Ye”, features from J Hus, Lily Allen and Mabel, and Album of the Year at the 2018 NEA.",
  },
  {
    slug: "african-giant",
    title: "African Giant",
    tagline: "The statement — Grammy-nominated, Platinum in France",
    blurb:
      "African Giant (2019) took its name from the billing he demanded and made it fact: nineteen tracks with Damian Marley, Angélique Kidjo, Future, Jorja Smith and YG, a first Grammy nomination (Best World Music Album), the Edison Award for Best World Album, and certifications in seven countries — Platinum in France with Gold in the UK, Canada, Sweden, the Netherlands, Switzerland and Denmark.",
    extraFacts: [
      { v: "2020", l: "Grammy-nominated — Best World Music Album — and Edison Award winner" },
      { v: "19", l: "tracks, with Damian Marley, Angélique Kidjo, Future, Jorja Smith and YG" },
    ],
    faqs: [
      {
        q: "Was African Giant nominated for a Grammy?",
        a: "Yes — African Giant earned Burna Boy's first Grammy nomination, for Best World Music Album at the 2020 awards. He won the renamed category a year later with Twice as Tall.",
      },
      {
        q: "Is African Giant certified?",
        a: "African Giant holds certifications in seven countries: Platinum in France (SNEP) and Gold in the UK, Canada, Sweden, the Netherlands, Switzerland and Denmark.",
      },
      {
        q: "How did African Giant chart?",
        a: "African Giant charted in seven countries, peaking at No. 12 in Ireland, No. 16 in the UK and No. 104 on the US Billboard 200.",
      },
    ],
    metaTitle: "African Giant — Burna Boy's Grammy-Nominated 2019 Album",
    metaDescription:
      "African Giant (2019): Burna Boy's first Grammy nomination, Platinum in France, Gold in six more countries — with Damian Marley, Angélique Kidjo and Future.",
  },
  {
    slug: "twice-as-tall",
    title: "Twice as Tall",
    tagline: "The Grammy winner — the first-ever Best Global Music Album",
    blurb:
      "Released in August 2020, Twice as Tall won the 2021 Grammy for Best Global Music Album — the first winner of the category under that name, one year after African Giant's nomination. Recorded in lockdown and executive-produced by his mother and manager, Bose Ogulu, it reaches across continents: Youssou N'Dour, Chris Martin, Stormzy, Naughty by Nature and Sauti Sol all appear across its fifteen tracks.",
    extraFacts: [
      { v: "2021", l: "Grammy — Best Global Music Album, the first winner under that name" },
      { v: "15", l: "tracks, with features from Youssou N'Dour, Chris Martin, Stormzy, Naughty by Nature and Sauti Sol" },
      { v: "No. 54", l: "US Billboard 200 — his best album peak there at the time" },
    ],
    faqs: [
      {
        q: "Did Twice as Tall win a Grammy?",
        a: "Yes — Twice as Tall won Best Global Music Album at the 2021 Grammy Awards, the first winner of the category under that name. Burna Boy had been nominated the year before with African Giant.",
      },
      {
        q: "How did Twice as Tall chart?",
        a: "Twice as Tall charted in 12 countries, peaking at No. 10 in the Netherlands, No. 11 in the UK and No. 54 on the US Billboard 200 — his best album peak in the US at the time.",
      },
      {
        q: "Who features on Twice as Tall?",
        a: "Across its 15 tracks, Twice as Tall features Youssou N'Dour (Level Up), Naughty by Nature (Naughty by Nature), Sauti Sol (Time Flies), Chris Martin of Coldplay (Monsters You Made) and Stormzy (Real Life).",
      },
    ],
    metaTitle: "Twice as Tall — Burna Boy's Grammy-Winning 2020 Album",
    metaDescription:
      "Twice as Tall, Burna Boy's Grammy-winning 2020 album: Best Global Music Album 2021, charted in 12 countries — with Stormzy, Chris Martin and Youssou N'Dour.",
  },
  {
    slug: "love-damini",
    title: "Love, Damini",
    tagline: "The personal one — his UK and Dutch No. 2, home of “Last Last”",
    blurb:
      "Signed with his own name — Damini — Love, Damini (2022) is the confessional album, and it became his biggest to that point: No. 2 in both the UK and the Netherlands, No. 14 on the US Billboard 200, and certifications in eight countries including 5× Platinum in Nigeria. “Last Last” is its heartbreak-anthem heart, with Ed Sheeran, J Balvin, Khalid, Popcaan and Ladysmith Black Mambazo across the guest list. It won Album of the Year at both AFRIMA and the Trace Awards in 2023.",
    extraFacts: [
      { v: "2023", l: "Album of the Year at both AFRIMA and the Trace Awards; Grammy-nominated" },
      { v: "5×", l: "Platinum in Nigeria — one of eight countries to certify it" },
      { v: "19", l: "tracks, from Ladysmith Black Mambazo to Ed Sheeran" },
    ],
    faqs: [
      {
        q: "How did Love, Damini chart?",
        a: "Love, Damini reached No. 2 in both the UK and the Netherlands — his record album peak at the time — with No. 3 in Nigeria, No. 6 in Canada and No. 14 on the US Billboard 200, charting in ten countries in all.",
      },
      {
        q: "Which songs are on Love, Damini?",
        a: "The 19-track album is led by “Last Last”, with “For My Hand” (feat. Ed Sheeran), “Rollercoaster” (feat. J Balvin), “Wild Dreams” (feat. Khalid), “Solid” (feat. Blxst & Kehlani) and Ladysmith Black Mambazo opening and closing the record.",
      },
      {
        q: "Is Love, Damini certified?",
        a: "Yes — in eight countries: 5× Platinum in Nigeria, Platinum in Canada, Denmark and New Zealand, and Gold in the UK, France, Sweden and the Netherlands.",
      },
    ],
    metaTitle: "Love, Damini — Burna Boy's 2022 Album",
    metaDescription:
      "Love, Damini (2022): No. 2 in the UK and Netherlands, 5× Platinum in Nigeria, home of “Last Last” — with Ed Sheeran, J Balvin and Khalid among the guests.",
  },
  {
    slug: "i-told-them",
    title: "I Told Them…",
    tagline: "The UK No. 1 — the first Afrobeats album to top the British chart",
    blurb:
      "I Told Them… (2023) debuted at No. 1 on the UK Official Albums Chart — the first Afrobeats album ever to do it — and topped the Nigerian chart too. Built around a hip-hop spine with GZA, RZA, 21 Savage, J. Cole and Dave, it earned a Grammy nomination, put him on the Grammys' main telecast stage in 2024, and its tour grossed $30.46M — the highest ever by an African artist.",
    extraFacts: [
      { v: "No. 1", l: "UK Official Albums Chart — the first Afrobeats album to top it — and No. 1 in Nigeria" },
      { v: "$30.46M", l: "the I Told Them… Tour — the highest-grossing tour ever by an African artist" },
      { v: "2024", l: "Grammy-nominated — Best Global Music Album — with a main-stage Grammys performance" },
    ],
    faqs: [
      {
        q: "Was I Told Them… a No. 1 album?",
        a: "Yes — I Told Them… debuted at No. 1 on the UK Official Albums Chart in 2023, the first Afrobeats album ever to top it, and reached No. 1 in Nigeria, No. 2 in the Netherlands and No. 31 on the US Billboard 200.",
      },
      {
        q: "Who features on I Told Them…?",
        a: "The album leans into hip-hop: GZA and RZA of Wu-Tang Clan, 21 Savage (Sittin' on Top of the World), J. Cole (Thanks), Dave (Cheat on Me) and Seyi Vibez (Giza).",
      },
      {
        q: "How successful was the I Told Them… Tour?",
        a: "The I Told Them… Tour grossed $30.46M across 22 reported shows — the highest-grossing tour ever by an African artist, per Billboard Boxscore.",
      },
    ],
    metaTitle: "I Told Them… — Burna Boy's UK No. 1 Album (2023)",
    metaDescription:
      "I Told Them… (2023): the first Afrobeats album to top the UK chart, No. 1 in Nigeria, a Grammy nomination and the $30.46M record-breaking tour.",
  },
  {
    slug: "no-sign-of-weakness",
    title: "No Sign of Weakness",
    tagline: "The eighth album — and the springboard for “Dai Dai”",
    blurb:
      "No Sign of Weakness (2025) is the eighth studio album — No. 1 in Nigeria, No. 6 in the UK, with Travis Scott, Mick Jagger and Shaboozey across its sixteen tracks. It won Album of the Year at AFRIMA 2025, earned a Grammy nomination for Best Global Music Album, and in 2026 he followed it with “Dai Dai” alongside Shakira — the official FIFA World Cup song.",
    extraFacts: [
      { v: "2025", l: "Album of the Year — AFRIMA — and a Grammy nomination for Best Global Music Album" },
      { v: "16", l: "tracks, with Travis Scott, Mick Jagger and Shaboozey featuring" },
      { v: "No. 1", l: "Nigeria — plus No. 6 in the UK" },
    ],
    faqs: [
      {
        q: "How did No Sign of Weakness chart?",
        a: "No Sign of Weakness reached No. 1 in Nigeria and No. 6 in the UK, charting in seven countries including the US Billboard 200.",
      },
      {
        q: "Who features on No Sign of Weakness?",
        a: "The album features Travis Scott (TaTaTa), Mick Jagger of the Rolling Stones (Empty Chairs) and Shaboozey (Change Your Mind) across its 16 tracks.",
      },
      {
        q: "Is “Dai Dai” on No Sign of Weakness?",
        a: "No — “Dai Dai”, the 2026 FIFA World Cup official song with Shakira, is a standalone single released after the album. Its full story lives on this site's Dai Dai page.",
      },
    ],
    metaTitle: "No Sign of Weakness — Burna Boy's 2025 Album",
    metaDescription:
      "No Sign of Weakness (2025): No. 1 in Nigeria, No. 6 in the UK, AFRIMA Album of the Year — with Travis Scott, Mick Jagger and Shaboozey. Tracklist and stats.",
  },
];

export const albumPageSlugs = albumPages.map((a) => a.slug);
export const albumPageBySlug = (slug: string) => albumPages.find((a) => a.slug === slug);
// sameTitle, not ===: the data files disagree on ellipsis punctuation for
// "I Told Them…" (see lib/titleKey.ts) and an exact join silently misses.
export const albumPageByTitle = (title: string) => albumPages.find((a) => sameTitle(a.title, title));
