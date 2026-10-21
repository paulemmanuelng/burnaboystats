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
  export const liveChartsUpdated = "2026-10-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-21T04:53Z";
  
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": 173
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 92,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 97,
            "movement": -40
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 167,
            "movement": -68
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 184,
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
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 76,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 90,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 149,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 13
          },
          {
            "country": "FR",
            "name": "France",
            "position": 176,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 199,
            "movement": -12
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 55,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 76,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": -14
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
            "position": 6,
            "movement": 27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 91,
            "movement": -65
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
            "position": 39,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -10
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
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 93,
            "movement": 58
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": -55
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 162,
            "movement": 18
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": -60
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 192,
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
            "position": 6,
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
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 75,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 104,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": -71
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -14
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 192,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -7
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
            "position": 101,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
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
            "position": 93,
            "movement": 10
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
            "position": 58,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 72,
            "movement": 6
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
            "position": 192,
            "movement": -6
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
            "position": 107,
            "movement": -13
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
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
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
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SLICK Remix",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 19,
            "movement": 2
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
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3be386ed5da6f28d57ce4808d7d07802/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": 8
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
            "position": 173,
            "movement": -3
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
            "position": 15,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
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
            "position": 64,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 147,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
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
            "position": 170,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
  