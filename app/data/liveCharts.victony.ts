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
  export const liveChartsUpdated = "2026-11-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-01T06:12Z";
  
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
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 26,
            "movement": 32
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 27,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 100,
            "movement": 68
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -31
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 172,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 81,
            "movement": -8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 88,
            "movement": -9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 113,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 160,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -17
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 16
          },
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
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 43
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
            "position": 19,
            "movement": 26
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 27,
            "movement": 28
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 50,
            "movement": 26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 28
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 72,
            "movement": null,
            "status": "re"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 92,
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
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 81
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 45,
            "movement": -16
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
            "position": 41,
            "movement": 53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -40
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
            "position": 27,
            "movement": -3
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 23,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 82,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 83,
            "movement": -64
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -53
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 164,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 183,
            "movement": -73
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 185,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -93
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
            "country": "AI",
            "name": "Anguilla",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 76,
            "movement": 66
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 117,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 183,
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 14
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
            "position": 134,
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
            "position": 143,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 67
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
            "movement": -6
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
            "position": 78,
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
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -16
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
            "position": 180,
            "movement": -2
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
            "position": 101,
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
            "position": 137,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": 76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto(Remix)",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bf2da8f7a93d0c8bb952cf78141fdd4d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Everything",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 71,
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
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
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
            "position": 194,
            "movement": -150
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebd3e7b46a4d85fb7a46e4cfc3dcbf14/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 19,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eee79a810fa9e9004dc19a2313b5afe4/500x500-000000-80-0-0.jpg"
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
            "position": 49,
            "movement": 5
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
            "position": 173,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SLICK (Remix)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HN",
            "name": "Honduras",
            "position": 2,
            "movement": 48
          }
        ]
      }
    ],
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3be386ed5da6f28d57ce4808d7d07802/500x500-000000-80-0-0.jpg"
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
  