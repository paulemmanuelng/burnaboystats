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
  export const liveChartsUpdated = "2026-11-11";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-11T19:40Z";
  
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
            "position": 5,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 14,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 25,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 33,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": -21
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": -25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 120,
            "movement": -108
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -66
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": 23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 177,
            "movement": -44
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 191,
            "movement": -117
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
            "movement": -57
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
            "position": 6,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 17,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 54,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 89,
            "movement": -19
          },
          {
            "country": "FR",
            "name": "France",
            "position": 98,
            "movement": -10
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 82,
            "movement": 4
          },
          {
            "country": "CN",
            "name": "China",
            "position": 91,
            "movement": -11
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 104,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 185,
            "movement": -7
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
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
            "movement": -21
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
            "position": 36,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 82,
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
            "position": 17,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 30,
            "movement": 77
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 44,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": -72
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": 72
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 56
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 191,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 194,
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
            "position": 10,
            "movement": -1
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
            "country": "OM",
            "name": "Oman",
            "position": 68,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 32
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": 33
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 169,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 177,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -34
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 71,
            "movement": null,
            "status": "new"
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
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 10
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
            "position": 78,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -105
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
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
            "position": 139,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -3
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
            "position": 174,
            "movement": -20
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
            "position": 150,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 84,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 143,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebd3e7b46a4d85fb7a46e4cfc3dcbf14/500x500-000000-80-0-0.jpg"
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
            "position": 55,
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
            "position": 133,
            "movement": 67
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
            "position": 173,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Water",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
  