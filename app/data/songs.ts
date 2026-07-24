// Per-song deep-dive pages (/music/[slug]). Each song's charts and certifications
// are pulled live from data/charts.ts and data/certifications.ts by title, so
// those pages never drift from the rest of the site. This file holds only what
// isn't already in those datasets: the editorial hook, the album/cover, the
// verified extra facts, and per-song SEO. Dai Dai is intentionally NOT here — it
// keeps its own bespoke /dai-dai page and is featured on the /music hub instead.
//
// Everything stated here is verifiable from the chart/cert data or from
// well-documented history — no invented figures.

export interface SongFact {
  v: string;
  l: string;
}

export interface Song {
  slug: string;
  title: string; // must match the title used in charts.ts / certifications.ts
  credit?: string; // e.g. "Gunna ft. Burna Boy"; omit when Burna is lead
  year: number;
  album: string;
  cover: string; // Spotify i.scdn.co cover URL
  spotify: string; // open.spotify.com track link
  tagline: string; // short hook under the title
  blurb: string; // 2–4 sentence story
  extraFacts: SongFact[]; // facts beyond the auto chart/cert counts
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const songs: Song[] = [
  {
    slug: "last-last",
    title: "Last Last",
    year: 2022,
    album: "Love, Damini",
    cover: "https://i.scdn.co/image/ab67616d0000b273d98e997eaad5f503b9e1f2f2",
    spotify: "https://open.spotify.com/track/6Qc9YfWku1Tt5f4V2Gd3Dt",
    tagline: "The heartbreak anthem — “I need igbo and shayo”",
    blurb:
      "The lead single from Love, Damini (2022), built on a sample of Toni Braxton's “He Wasn't Man Enough.” It became Burna Boy's signature breakup anthem and one of the most-certified African songs ever — topping the South African chart, reaching No. 4 in the UK (his highest-charting solo single there at the time) and going Diamond in France.",
    extraFacts: [
      { v: "No. 1", l: "South Africa (TOSAC) — his home-continent chart-topper" },
      { v: "No. 4", l: "UK Official Singles Chart — his highest solo single there at the time" },
      { v: "No. 44", l: "US Billboard Hot 100" },
      { v: "Diamond", l: "certified Diamond in France (SNEP)" },
    ],
    faqs: [
      {
        q: "What is “Last Last” by Burna Boy about?",
        a: "“Last Last” is a heartbreak anthem about coping with a breakup — its hook, “I need igbo and shayo” (weed and alcohol), became one of Burna Boy's most quoted lines. It samples Toni Braxton's 2000 hit “He Wasn't Man Enough.”",
      },
      {
        q: "How high did “Last Last” chart?",
        a: "“Last Last” reached No. 1 in South Africa, No. 4 on the UK Official Singles Chart, and No. 44 on the US Billboard Hot 100, charting in 15 countries in all.",
      },
      {
        q: "Is “Last Last” certified?",
        a: "Yes — it is one of the most-certified African songs ever, with 12 certifications including Diamond in France, 5× Platinum in Nigeria, 4× Platinum in Canada and Platinum in the US and UK.",
      },
    ],
    metaTitle: "Burna Boy “Last Last” — Chart Peaks, Certifications & Facts",
    metaDescription:
      "Everything about Burna Boy's “Last Last”: No. 1 in South Africa, No. 4 in the UK, Diamond in France and 12 certifications in all — the samples, story and every chart peak.",
  },
  {
    slug: "ye",
    title: "Ye",
    year: 2018,
    album: "Outside",
    cover: "https://i.scdn.co/image/ab67616d0000b2732135956e3ca0a183db8ac395",
    spotify: "https://open.spotify.com/track/2vFN2eWdD0amZBrTBZ0eYr",
    tagline: "The song that broke Burna Boy worldwide",
    blurb:
      "From the 2018 album Outside, “Ye” is the song that turned Burna Boy into a global star. Its rise was supercharged when Kanye West released an album titled Ye that same year — listeners searching for Kanye's record kept discovering Burna's song instead. It went Platinum across the US, UK, France, Canada and beyond, a pure streaming-and-culture hit.",
    extraFacts: [
      { v: "2018", l: "the international breakthrough, from the album Outside" },
      { v: "Platinum", l: "certified Platinum in the US, UK, France, Canada, Sweden, NZ & Switzerland" },
      { v: "Kanye", l: "boosted by fans searching for Kanye West's album “Ye”" },
    ],
    faqs: [
      {
        q: "Why is Burna Boy's “Ye” so famous?",
        a: "“Ye” (2018) was Burna Boy's international breakthrough. Its streams surged after Kanye West released an album also called Ye — people searching for Kanye's record found Burna Boy's song instead — and it went Platinum in the US, UK and several other countries.",
      },
      {
        q: "Is “Ye” connected to Kanye West?",
        a: "Not musically — it's a coincidence. Burna Boy's “Ye” and Kanye West's album Ye both arrived in 2018, and the search overlap helped drive Burna's song to a global audience.",
      },
      {
        q: "What album is “Ye” on?",
        a: "“Ye” is from Burna Boy's 2018 album Outside.",
      },
    ],
    metaTitle: "Burna Boy “Ye” — The Song That Broke Him Worldwide",
    metaDescription:
      "The story of Burna Boy's “Ye” (2018): his international breakthrough from the album Outside, boosted by the Kanye West search overlap, and certified Platinum across the US, UK and Europe.",
  },
  {
    slug: "on-the-low",
    title: "On the Low",
    year: 2019,
    album: "African Giant",
    cover: "https://i.scdn.co/image/ab67616d0000b273a9c13c1a5538f87146ac8ca5",
    spotify: "https://open.spotify.com/track/5jdNbYPvRAigkYd2Ckjrb1",
    tagline: "The smooth love song that went Diamond in France",
    blurb:
      "A silky Afro-fusion love song from African Giant (2019), “On the Low” became one of Burna Boy's biggest records in Europe. It was certified Diamond in France — among the highest honours any African song has earned there — and picked up nine certifications worldwide.",
    extraFacts: [
      { v: "Diamond", l: "certified Diamond in France (SNEP)" },
      { v: "2× Platinum", l: "in Canada, plus Platinum in the UK, NZ & Switzerland" },
      { v: "African Giant", l: "a standout from the 2019 album" },
    ],
    faqs: [
      {
        q: "Is “On the Low” certified Diamond?",
        a: "Yes — “On the Low” is certified Diamond in France by SNEP, one of the highest certifications any African song has achieved there, and holds nine certifications in total.",
      },
      {
        q: "What album is “On the Low” on?",
        a: "“On the Low” is from Burna Boy's 2019 album African Giant.",
      },
    ],
    metaTitle: "Burna Boy “On the Low” — Diamond in France & Every Stat",
    metaDescription:
      "Burna Boy's “On the Low” from African Giant (2019): certified Diamond in France, 2× Platinum in Canada and nine certifications in all — the story and full stats.",
  },
  {
    slug: "wgft",
    title: "WGFT",
    credit: "Gunna ft. Burna Boy",
    year: 2025,
    album: "The Last Wun",
    cover: "https://i.scdn.co/image/ab67616d0000b27303a253cffd6d9e556ef4eec5",
    spotify: "https://open.spotify.com/track/0WsC4ETIXyiHDMXRaPMvKe",
    tagline: "Burna Boy's highest-ever Billboard Hot 100 peak",
    blurb:
      "A feature on Gunna's 2025 album The Last Wun, “WGFT” gave Burna Boy his highest position ever on the US Billboard Hot 100 — No. 16 — blending Gunna's melodic trap with Burna's Afrobeats cadence. It charted in 13 countries and put him back in the US Top 20.",
    extraFacts: [
      { v: "No. 16", l: "US Billboard Hot 100 — Burna Boy's highest-ever Hot 100 peak" },
      { v: "13", l: "countries charted, from the US and UK to Greece" },
      { v: "2025", l: "a feature on Gunna's album The Last Wun" },
    ],
    faqs: [
      {
        q: "What is Burna Boy's highest Billboard Hot 100 position?",
        a: "Burna Boy's highest Billboard Hot 100 peak is No. 16, achieved with “WGFT,” his 2025 feature on Gunna's album The Last Wun.",
      },
      {
        q: "Who is on “WGFT”?",
        a: "“WGFT” is by American rapper Gunna featuring Burna Boy, from Gunna's 2025 album The Last Wun. A remix with Chris Brown followed in 2026.",
      },
    ],
    metaTitle: "Gunna & Burna Boy “WGFT” — His Best Billboard Hot 100 Peak",
    metaDescription:
      "“WGFT” by Gunna featuring Burna Boy gave Burna his highest-ever Billboard Hot 100 peak at No. 16, charting in 13 countries — the full chart run and story.",
  },
];

export const songBySlug = (slug: string) => songs.find((s) => s.slug === slug);
export const songSlugs = songs.map((s) => s.slug);
