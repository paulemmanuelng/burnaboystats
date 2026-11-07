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
  export const liveChartsUpdated = "2026-11-07";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-07T06:03Z";
  
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
            "position": 3,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 31
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 41,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 50,
            "movement": 129
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 52,
            "movement": 64
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 56,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": -12
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -33
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 187,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -4
          },
          {
            "country": "CN",
            "name": "China",
            "position": 46,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 86,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 93,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -17
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 150,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "position": 24,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 186,
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
            "position": 28,
            "movement": 2
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
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 99
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 120,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 48
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 153,
            "movement": -81
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 183,
            "movement": -46
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": -13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 193,
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
            "position": 51,
            "movement": 115
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 108,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": -110
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
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
            "movement": 2
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
            "position": 49,
            "movement": null,
            "status": "new"
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
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 67,
            "movement": 51
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": 25
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
            "position": 61,
            "movement": 1
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
            "position": 89,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Everything",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/04f0aa35363a5f1d380cf0d898738084/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 8
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
            "position": 99,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": 0
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
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": 2
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
            "position": 149,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eee79a810fa9e9004dc19a2313b5afe4/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
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
  