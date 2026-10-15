// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=victony from kworb's artist page.
  //
  // PLATFORM chart data for Victony: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
  export interface LiveEntry {
    country: string; // ISO alpha-2
    name: string;
    position: number;
    // Movement against the chart's previous edition: 0 = no change, null = the
    // source flagged a new/re-entry, absent = the source reports no movement for
    // this platform at all (YouTube). Absent and null are different facts.
    movement?: number | null;
    /** Why there is no movement: the source flagged a new entry or a re-entry. */
    status?: "new" | "re";
  }
  
  export interface LivePlatform {
    platform: string;
    numberOnes: number;
    entries: LiveEntry[];
  }
  
  export interface LiveRelease {
    title: string;
    kind: "song" | "album";
    /** Release artwork, resolved at build time. Absent means unresolved — the
     *  page draws a monogram rather than borrowing another release's cover. */
    cover?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-15T17:05Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 9,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 45,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 48,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 110,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 173,
            "movement": 8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": 18
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 84,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 87,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 142,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 144,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": -6
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 55,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 69,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 39,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 129,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 67,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3be386ed5da6f28d57ce4808d7d07802/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 63,
            "movement": -46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": 20
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 156,
            "movement": -96
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": -91
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 29
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 91,
            "movement": -52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -38
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 123,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 140,
            "movement": -104
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 180,
            "movement": -42
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FRE$H",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 23
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 0
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jaga Jaga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hello",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skido",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebd3e7b46a4d85fb7a46e4cfc3dcbf14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Everything",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/04f0aa35363a5f1d380cf0d898738084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OHEMA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PITY THIS BOY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  }
];
  
  /** Totals, derived so they can never disagree with the data above. */
  export const livePlacementCount = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
    0
  );
  export const liveNumberOnes = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
    0
  );
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
  /** Placements per platform, biggest first — powers the summary row. */
  export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
    livePlatforms
      .map((platform) => {
        const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
        return {
          platform,
          placements: blocks.reduce((n, p) => n + p.entries.length, 0),
          numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
        };
      })
      .sort((a, b) => b.placements - a.placements);
  