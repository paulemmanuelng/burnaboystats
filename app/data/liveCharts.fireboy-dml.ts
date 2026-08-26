// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=fireboy-dml from kworb's artist page.
  //
  // PLATFORM chart data for Fireboy DML: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-08-26";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 40,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -25
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -20
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
            "position": 99,
            "movement": 9
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
            "position": 66,
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
            "country": "UG",
            "name": "Uganda",
            "position": 72,
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
            "country": "OM",
            "name": "Oman",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
            "movement": null,
            "status": "new"
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
            "position": 51,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": 2
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 125,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 198,
            "movement": -70
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": 18
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -138
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "MR",
            "name": "Mauritania",
            "position": 4,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 62,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -8
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
            "position": 184,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
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
            "position": 104,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 125,
            "movement": -70
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 66
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
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
            "position": 123,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3fe94d046b5097983f35fcc47037c799/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 98
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
            "position": 61,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4ab733790d692331a550d79a27e254ae/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 150,
            "movement": -116
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
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
            "position": 137,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1642e0fe2e894dec4ee6bac55297ca9d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dopamine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2454c47103560319b1992920e1a866e9/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a0db260ae940d4870a73c5a735408d67/500x500-000000-80-0-0.jpg"
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  