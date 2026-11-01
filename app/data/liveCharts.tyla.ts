// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=tyla from kworb's artist page.
  //
  // PLATFORM chart data for Tyla: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-01T06:12Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "A*POP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 18,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 21
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 42,
            "movement": 75
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 38
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": 148
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 50,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 51,
            "movement": -27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 61,
            "movement": 34
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 62,
            "movement": -21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 74,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": -74
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": 87
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 106,
            "movement": -38
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 121,
            "movement": -51
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 129,
            "movement": -106
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 133,
            "movement": -70
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 148,
            "movement": -85
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -85
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 156,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 94,
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 176,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 53,
            "movement": -5
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SHE DID IT AGAIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 191,
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
            "country": "SE",
            "name": "Sweden",
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYLA +",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 180,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bliss",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 104,
            "movement": -49
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6614157bd80488fdd3dbb466867ab066/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PUSH 2 START",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Water",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 99,
            "movement": -72
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
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Truth or Dare",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1ae9486180d1f50e7dbbb099b1e66825/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WWP - Single",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 126,
            "movement": -32
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 49,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jump",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 166,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Girls Need Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 92,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fa59cd46e53198633e35c1fac97521cf/500x500-000000-80-0-0.jpg"
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
  