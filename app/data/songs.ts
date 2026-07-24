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
    spotify: "https://open.spotify.com/track/4LPNkxES0zCGn6S2Y1vmJN",
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
        a: "“Last Last” reached No. 1 in South Africa, No. 4 on the UK Official Singles Chart, and No. 44 on the US Billboard Hot 100, charting in 14 countries in all.",
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
    spotify: "https://open.spotify.com/track/2lEl1iNGpz9r2B7R5BqXSD",
    tagline: "The life-anthem that broke Burna Boy worldwide",
    blurb:
      "From the 2018 album Outside, “Ye” is one of Burna Boy's signature songs and the record that broke him internationally. A defiant, celebratory Afro-fusion anthem about the will to live and enjoy every moment — “I no wan die, I wan enjoy” — it became a global streaming staple and went Platinum across the US, UK, France, Canada and beyond, all without ever needing a singles chart.",
    extraFacts: [
      { v: "2018", l: "his international breakthrough, from the album Outside" },
      { v: "Platinum", l: "certified in the US, UK, France, Canada, Sweden, NZ & Switzerland" },
      { v: "Anthem", l: "a live-set staple and enduring fan favourite that still defines his early sound" },
    ],
    faqs: [
      {
        q: "What is Burna Boy's “Ye” about?",
        a: "“Ye” is a life-affirming anthem about the will to live and enjoy the moment — Burna Boy sings about refusing to waste his life and making the most of his success against the odds. Its hook, “I no wan die, I wan enjoy,” became one of his most-quoted lines.",
      },
      {
        q: "Why is Burna Boy's “Ye” so important?",
        a: "“Ye” (2018), from the album Outside, was Burna Boy's international breakthrough — the song that carried him from an Afrobeats favourite to a global name. It became a massive streaming hit and went Platinum in the US, UK, France and several other countries.",
      },
      {
        q: "What album is “Ye” on?",
        a: "“Ye” is from Burna Boy's 2018 album Outside.",
      },
    ],
    metaTitle: "Burna Boy “Ye” — The Song That Broke Him Worldwide",
    metaDescription:
      "The story of Burna Boy's “Ye” (2018): his international breakthrough from the album Outside — a life-affirming anthem certified Platinum across the US, UK, France and beyond.",
  },
  {
    slug: "on-the-low",
    title: "On the Low",
    year: 2019,
    album: "African Giant",
    cover: "https://i.scdn.co/image/ab67616d0000b273a9c13c1a5538f87146ac8ca5",
    spotify: "https://open.spotify.com/track/1zIk8RJEKGvoH4FioFnGyJ",
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
      "A feature on Gunna's 2025 album The Last Wun, “WGFT” gave Burna Boy his highest position ever on the US Billboard Hot 100 — No. 16 — blending Gunna's melodic trap with Burna's Afrobeats cadence. It charted in 12 countries and put him back in the US Top 20.",
    extraFacts: [
      { v: "No. 16", l: "US Billboard Hot 100 — Burna Boy's highest-ever Hot 100 peak" },
      { v: "12", l: "countries charted, from the US and UK to Greece" },
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
      "“WGFT” by Gunna featuring Burna Boy gave Burna his highest-ever Billboard Hot 100 peak at No. 16, charting in 12 countries — the full chart run and story.",
  },
  {
    slug: "kilometre",
    title: "Kilometre",
    year: 2021,
    album: "Single",
    cover: "https://i.scdn.co/image/ab67616d0000b27339041f1bb96943fde5bb86c9",
    spotify: "https://open.spotify.com/track/0oQgoesQJq0fRnWOY1D73g",
    tagline: "The viral 2021 return — No. 1 in Nigeria",
    blurb:
      "Burna Boy's first solo single after the Grammy-winning Twice as Tall, “Kilometre” (2021) was an instant Afro-fusion hit — a slick, danceable record that topped the Nigerian chart and became one of his most-played songs of the year. It went Platinum in Nigeria and Gold in Canada.",
    extraFacts: [
      { v: "No. 1", l: "Nigeria (TurnTable Top 100)" },
      { v: "Platinum", l: "certified Platinum in Nigeria, Gold in Canada" },
      { v: "2021", l: "his first solo single after Twice as Tall" },
    ],
    faqs: [
      {
        q: "What is “Kilometre” by Burna Boy?",
        a: "“Kilometre” is a 2021 single by Burna Boy — his first solo release after the Grammy-winning album Twice as Tall. The Afro-fusion track reached No. 1 in Nigeria and went Platinum there.",
      },
      {
        q: "Did “Kilometre” reach No. 1?",
        a: "Yes — “Kilometre” topped Nigeria's TurnTable Top 100 chart, and is certified Platinum in Nigeria and Gold in Canada.",
      },
    ],
    metaTitle: "Burna Boy “Kilometre” — No. 1 in Nigeria & Every Stat",
    metaDescription:
      "Burna Boy's “Kilometre” (2021): his first solo single after Twice as Tall, a No. 1 in Nigeria certified Platinum — the story, chart peaks and certifications.",
  },
  {
    slug: "city-boys",
    title: "City Boys",
    year: 2023,
    album: "I Told Them…",
    cover: "https://i.scdn.co/image/ab67616d0000b273c361f3720bafc0da36f14d96",
    spotify: "https://open.spotify.com/track/4RoKNqyZ9622tcAeNPNv5k",
    tagline: "The triumphant I Told Them… anthem",
    blurb:
      "A celebratory highlight from I Told Them… (2023), “City Boys” became one of the album's biggest songs — a swaggering Afrobeats anthem that reached No. 2 in Nigeria, charted in eight countries and went 4× Platinum at home.",
    extraFacts: [
      { v: "No. 2", l: "Nigeria (TurnTable Top 100)" },
      { v: "4× Platinum", l: "in Nigeria, plus Platinum in Canada & France" },
      { v: "I Told Them…", l: "a standout single from the 2023 album" },
    ],
    faqs: [
      {
        q: "What album is “City Boys” on?",
        a: "“City Boys” is from Burna Boy's 2023 album I Told Them…, one of the record's biggest singles.",
      },
      {
        q: "How did “City Boys” chart?",
        a: "“City Boys” reached No. 2 in Nigeria and charted in eight countries, including the UK and the Netherlands. It is certified 4× Platinum in Nigeria, plus Platinum in Canada and France.",
      },
    ],
    metaTitle: "Burna Boy “City Boys” — Chart Peaks, Certifications & Facts",
    metaDescription:
      "Burna Boy's “City Boys” from I Told Them… (2023): No. 2 in Nigeria, 4× Platinum at home and charting in eight countries — the full story and stats.",
  },
  {
    slug: "jerusalema",
    title: "Jerusalema (Remix)",
    credit: "Master KG ft. Nomcebo Zikode & Burna Boy",
    year: 2020,
    album: "Single",
    cover: "https://i.scdn.co/image/ab67616d0000b2739d07e4e641b9ee80b0f713d0",
    spotify: "https://open.spotify.com/track/1dmES1X8l1AnFBy2gR3wYA",
    tagline: "The global dance phenomenon",
    blurb:
      "In 2020 Burna Boy joined the remix of Master KG and Nomcebo Zikode's “Jerusalema” — the gospel-house track that swept the world through the #JerusalemaDanceChallenge. His verse helped push it to No. 1 in six countries, including Belgium, Switzerland, the Netherlands and South Africa, and Diamond certification in France. It remains one of the biggest African songs in history.",
    extraFacts: [
      { v: "6", l: "countries at No. 1 — Belgium, Switzerland, Hungary, Netherlands, Suriname & South Africa" },
      { v: "Diamond", l: "certified Diamond in France, 4× Platinum in Italy" },
      { v: "2020", l: "the global #JerusalemaDanceChallenge phenomenon" },
    ],
    faqs: [
      {
        q: "Is Burna Boy on “Jerusalema”?",
        a: "Yes — Burna Boy features on the 2020 remix of Master KG and Nomcebo Zikode's “Jerusalema.” His verse helped the song reach No. 1 in six countries during the global #JerusalemaDanceChallenge.",
      },
      {
        q: "How big was “Jerusalema (Remix)”?",
        a: "It was a global phenomenon — No. 1 in Belgium, Switzerland, Hungary, the Netherlands, Suriname and South Africa, charting in 16 countries and certified Diamond in France and 4× Platinum in Italy.",
      },
    ],
    metaTitle: "“Jerusalema (Remix)” — Master KG, Nomcebo & Burna Boy Stats",
    metaDescription:
      "Burna Boy on the “Jerusalema” remix: No. 1 in six countries, Diamond in France and 17 chart entries during the global #JerusalemaDanceChallenge — full stats.",
  },
  {
    slug: "gbona",
    title: "Gbona",
    year: 2018,
    album: "Single",
    cover: "https://i.scdn.co/image/ab67616d0000b2735edf362ac1de3e5718382296",
    spotify: "https://open.spotify.com/track/0DrzsBstN5rObzTuX8DSro",
    tagline: "The 2018 single that went Diamond in France",
    blurb:
      "A hard-hitting Afro-fusion single from 2018, later included on African Giant, “Gbona” was part of the run that broke Burna Boy internationally. It never needed a singles chart to become a staple — going Diamond in France and picking up eight certifications worldwide.",
    extraFacts: [
      { v: "Diamond", l: "certified Diamond in France (SNEP)" },
      { v: "2018", l: "a breakthrough-era single, later on African Giant" },
      { v: "Platinum", l: "Platinum in Canada & Switzerland, plus Gold across Europe" },
    ],
    faqs: [
      {
        q: "What album is “Gbona” on?",
        a: "“Gbona” was released as a single in 2018 and later included on Burna Boy's 2019 album African Giant.",
      },
      {
        q: "Is “Gbona” certified?",
        a: "Yes — “Gbona” is certified Diamond in France and holds eight certifications in total, despite never charting on a singles chart.",
      },
    ],
    metaTitle: "Burna Boy “Gbona” — Diamond in France & Every Certification",
    metaDescription:
      "Burna Boy's “Gbona” (2018): a single certified Diamond in France, later included on African Giant — eight certifications worldwide, the story and full stats.",
  },
];

export const songBySlug = (slug: string) => songs.find((s) => s.slug === slug);
export const songSlugs = songs.map((s) => s.slug);
