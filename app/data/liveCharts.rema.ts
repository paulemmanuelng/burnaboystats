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
  export const liveChartsUpdated = "2026-10-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-18T07:15Z";
  
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
            "position": 2,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
            "movement": -36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": -58
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -37
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 179,
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 38,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 160,
            "movement": 0
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": null,
            "status": "re"
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
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -18
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
            "position": 3,
            "movement": 0
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -8
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
            "position": 18,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 3
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
            "position": 41,
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
            "position": 65,
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
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -1
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 64,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 107
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 198,
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
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 26,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 31,
            "movement": 13
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 36,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 54,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 122,
            "movement": -44
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 127,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 154,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 154,
            "movement": 8
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
            "position": 88,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 115,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 18,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 23,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 56,
            "movement": -20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 118,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 167,
            "movement": -23
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 178,
            "movement": -101
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 67
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": 14
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 200,
            "movement": -124
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
            "position": 72,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -70
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
            "position": 55,
            "movement": 37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
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
            "position": 195,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 90
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 62,
            "movement": 69
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": -14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 15
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 122,
            "movement": -40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": null,
            "status": "new"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 13
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": 43
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 153,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
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
            "position": 60,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 149,
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
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 59,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 85
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
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
            "position": 40,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": 12
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
            "country": "MR",
            "name": "Mauritania",
            "position": 73,
            "movement": -54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -27
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
            "position": 156,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Her",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 17,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f7dbea53e3057465cd2b8cd57dff0538/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Why",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AZAMAN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 190,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 18,
            "movement": 1
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
            "position": 144,
            "movement": -11
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
  