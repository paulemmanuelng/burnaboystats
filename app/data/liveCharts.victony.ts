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
  export const liveChartsUpdated = "2026-10-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-08T06:10Z";
  
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 27,
            "movement": 89
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 49,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 59,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": -100
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": 24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
            "movement": -3
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
            "position": 32,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 75,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 91,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 99,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 145,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 158,
            "movement": 12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 200,
            "movement": -18
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
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -19
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 104,
            "movement": -18
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
            "movement": 56
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": -1
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
            "movement": 1
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 26,
            "movement": 156
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 91,
            "movement": -45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -38
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 109,
            "movement": -77
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 129,
            "movement": 44
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
            "movement": -23
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
            "position": 4,
            "movement": 0
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 64,
            "movement": -50
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 118,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 161,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -76
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 170,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -10
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
            "position": 92,
            "movement": -10
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 88,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 196,
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
            "position": 129,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 61,
            "movement": -6
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
            "position": 135,
            "movement": -5
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
            "position": 84,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
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
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 86,
            "movement": -10
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
            "position": 83,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINO",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebd3e7b46a4d85fb7a46e4cfc3dcbf14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -82
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 158,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Very Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IS",
            "name": "Iceland",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9006b3beadf51c1be30df723a7edc6c0/500x500-000000-80-0-0.jpg"
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
  