// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-28T22:39Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 113,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -6
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 6
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -5
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
            "position": 7,
            "movement": -1
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
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 0
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
            "position": 26,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -3
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -12
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
            "position": 35,
            "movement": 1
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
            "position": 14,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 15,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": 26
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 30,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 88,
            "movement": 82
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 91,
            "movement": -61
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 113,
            "movement": -30
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 186,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 192,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 115,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 138
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": 65
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 23
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": -47
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -56
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": -65
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 73,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 96,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 99,
            "movement": -25
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 103,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 147,
            "movement": -87
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -28
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 177,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
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
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 15,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 24,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 86,
            "movement": 12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 163,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 28
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 153,
            "movement": -103
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": -135
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
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
            "position": 63,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 122
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
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
            "position": 46,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
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
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": 55
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": null,
            "status": "new"
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
            "position": 169,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 89,
            "movement": 70
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MV",
            "name": "Maldives",
            "position": 64,
            "movement": 129
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 107,
            "movement": 82
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -93
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
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
            "position": 151,
            "movement": 23
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
            "position": 57,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
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
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 28,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bout U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d2d72d718d4ad08f355e40b0ec94a33/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OZEBA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AZAMAN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses Ultra",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01"
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
  