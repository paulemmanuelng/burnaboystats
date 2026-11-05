// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=fireboy-dml from kworb's artist page.
  //
  // PLATFORM chart data for Fireboy DML: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-05T06:53Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 64,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
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
            "position": 105,
            "movement": 42
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ZUKO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 70
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 77,
            "movement": 112
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": -82
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
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
            "position": 15,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da2c728690442570efd5b29209fca908/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laughter, Tears & Goosebumps",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 16,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": -30
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
            "position": 35,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 31,
            "movement": 146
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 146,
            "movement": 48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": -39
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
            "position": 52,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ONE MAN REGIMENT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
            "movement": -50
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
            "position": 118,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "APOLLO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 134
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 5
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 165,
            "movement": -19
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
            "position": 102,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 95
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "iseoluwa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 10
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
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IMALI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9405ef9f7a00125ec0e7f408a7640d14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "So it Goes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 8
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
            "position": 138,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3fe94d046b5097983f35fcc47037c799/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Vibration",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
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
            "position": 45,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "adedamola",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -11
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
            "position": 107,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What If I Say",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
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
  