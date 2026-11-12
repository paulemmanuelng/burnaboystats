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
  export const liveChartsUpdated = "2026-11-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-12T19:59Z";
  
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
            "country": "SC",
            "name": "Seychelles",
            "position": 5,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 30,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": 26
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": -72
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -65
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
            "movement": -64
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": -32
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
            "position": 43,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 87,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 102,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 15
          },
          {
            "country": "CN",
            "name": "China",
            "position": 109,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 33
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 157,
            "movement": 28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 111,
            "movement": null,
            "status": "new"
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
            "position": 25,
            "movement": 11
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
            "position": 43,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 30,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 75,
            "movement": -45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": -68
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 188,
            "movement": 6
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
            "position": 70,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 137,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 163,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
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
            "position": 55,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
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
            "position": 80,
            "movement": -2
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
            "position": 52,
            "movement": 2
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
            "position": 172,
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
            "position": 168,
            "movement": -18
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
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
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
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -22
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
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Everything",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/04f0aa35363a5f1d380cf0d898738084/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": -16
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
            "position": 61,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
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
  