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
  export const liveChartsUpdated = "2026-11-04";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-04T19:49Z";
  
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 24,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 42,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 33
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 64,
            "movement": 88
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 16
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 77,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 114,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": 60
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 117,
            "movement": -35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": 16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 176,
            "movement": -51
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 197,
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 10
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 10,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 7
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
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 28
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 39,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 70,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 96,
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
            "country": "CN",
            "name": "China",
            "position": 34,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 84,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 91,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 141,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 141,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 191,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
            "movement": -4
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
            "position": 75,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 88,
            "movement": -17
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
            "position": 24,
            "movement": 3
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
            "position": 36,
            "movement": 0
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": 64
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 75,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 37
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 35
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -70
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 172,
            "movement": -41
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
            "movement": -113
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
            "movement": -2
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
            "position": 9,
            "movement": 1
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
            "position": 67,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 87,
            "movement": -57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 31
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 122,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": 41
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 190,
            "movement": -61
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 190,
            "movement": 6
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
            "position": 15,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 77,
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
            "position": 136,
            "movement": 5
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
            "position": 198,
            "movement": -112
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
            "position": 96,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": -19
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
            "position": 89,
            "movement": -7
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
            "position": 71,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -66
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
            "position": 141,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
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
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 5
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
            "position": 198,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Glory",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eee79a810fa9e9004dc19a2313b5afe4/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": 71
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
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
            "position": 51,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": 8
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
  