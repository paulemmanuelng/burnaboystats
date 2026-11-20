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
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-20";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-20T20:27Z";
  
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 20,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 26,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 47,
            "movement": -17
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 55,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 62,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": -32
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
            "movement": -158
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
            "position": 33,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 50,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": -14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 64,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 69,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 100,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -11
          },
          {
            "country": "CN",
            "name": "China",
            "position": 156,
            "movement": 13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 173,
            "movement": -19
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
            "position": 8,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 19,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 63,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": -25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -22
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -15
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
            "position": 29,
            "movement": 0
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
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": -82
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": -36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": -44
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
            "position": 8,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GR",
            "name": "Greece",
            "position": 96,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 122,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 165,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 177,
            "movement": -104
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 109,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": -76
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
            "position": 97,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
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
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
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
            "position": 66,
            "movement": -3
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
            "position": 164,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jaga Jaga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebd3e7b46a4d85fb7a46e4cfc3dcbf14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto(Remix)",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bf2da8f7a93d0c8bb952cf78141fdd4d/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
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
  