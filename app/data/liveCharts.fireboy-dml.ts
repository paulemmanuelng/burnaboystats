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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-09-17";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-17T23:09Z";
  
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
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 65,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": -54
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "position": 90,
            "movement": 1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laughter, Tears & Goosebumps",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 73
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -6
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
            "position": 32,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": -12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": 18
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
            "position": 48,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "adedamola",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -77
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
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
            "position": 73,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "APOLLO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 100
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
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
            "position": 102,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "everyday",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86d8d6db321a04e6b49342da728b2e58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CLAAT",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 62
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
            "position": 63,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/29bf5b5ad5f962997dbb7c369a8320d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "So it Goes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -3
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
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3fe94d046b5097983f35fcc47037c799/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ZUKO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da2c728690442570efd5b29209fca908/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peru",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 19,
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
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4ab733790d692331a550d79a27e254ae/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "iseoluwa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Diana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/48963b4c8969105192017e3dbe543fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "History",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a0db260ae940d4870a73c5a735408d67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Need You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What If I Say",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ogaranya",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5cb992ab2c3f0025f5c1e3c00ce25deb/500x500-000000-80-0-0.jpg"
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
  