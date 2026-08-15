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
    slug: "twice-as-tall",
    title: "Twice as Tall",
    tagline: "The Grammy winner — executive-produced with Diddy",
    blurb:
      "Released in August 2020, Twice as Tall won the 2021 Grammy for Best Global Music Album — the first winner of the category under that name, one year after African Giant's nomination. Recorded in lockdown and executive-produced with Diddy and Mama Bose Ogulu, it reaches across continents: Youssou N'Dour, Chris Martin, Stormzy, Naughty by Nature and Sauti Sol all appear across its fifteen tracks.",
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
        a: "Across its 15 tracks, Twice as Tall features Youssou N'Dour (Level Up), Naughty by Nature (Naughty by Nature), Sauti Sol (Time Flies), Chris Martin of Coldplay (Monsters You Made) and Stormzy (Real Life). Diddy served as an executive producer.",
      },
    ],
    metaTitle: "Twice as Tall — Burna Boy's Grammy-Winning 2020 Album",
    metaDescription:
      "Twice as Tall, Burna Boy's Grammy-winning 2020 album: Best Global Music Album 2021, charted in 12 countries — with Stormzy, Chris Martin and Youssou N'Dour.",
  },
];

export const albumPageSlugs = albumPages.map((a) => a.slug);
export const albumPageBySlug = (slug: string) => albumPages.find((a) => a.slug === slug);
export const albumPageByTitle = (title: string) => albumPages.find((a) => a.title === title);
