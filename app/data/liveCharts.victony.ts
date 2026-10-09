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
  export const liveChartsUpdated = "2026-10-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-09T22:42Z";
  
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
            "country": "AO",
            "name": "Angola",
            "position": 4,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 21,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 56,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": -50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": -45
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 194,
            "movement": -50
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 81,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 93,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 101,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 135,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
            "movement": 10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 162,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 167,
            "movement": -8
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
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": 0
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
            "position": 45,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -11
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 62,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 73,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 129,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -124
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -37
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
            "position": 34,
            "movement": -2
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -28
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 39,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -27
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": -55
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": -32
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "country": "OM",
            "name": "Oman",
            "position": 63,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 107,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 84
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -46
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
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
            "position": 12,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 153,
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
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -9
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
            "position": 83,
            "movement": 3
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
            "position": 77,
            "movement": null,
            "status": "new"
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
            "position": 46,
            "movement": 8
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
            "position": 70,
            "movement": -4
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
            "position": 133,
            "movement": -16
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
            "position": 80,
            "movement": 7
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
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": 35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
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
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 176,
            "movement": -75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -7
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
    "title": "Hello",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -5
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
            "position": 97,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OHEMA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
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
  