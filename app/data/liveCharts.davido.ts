// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=davido from kworb's artist page.
  //
  // PLATFORM chart data for Davido: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-19T13:23Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 61
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 195,
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
            "country": "ZM",
            "name": "Zambia",
            "position": 67,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": 4
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
            "position": 27,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -2
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
            "position": 51,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 108,
            "movement": -10
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -4
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
            "position": 8,
            "movement": -1
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
            "movement": 113
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
            "position": 26,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 21,
            "movement": 166
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -58
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -13
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 130,
            "movement": -53
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
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
            "position": 34,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 11
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
            "position": 10,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 124,
            "movement": -100
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -77
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
            "position": 5,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 50,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 147,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -15
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
            "position": 88,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 9
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
            "position": 52,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": 33
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
            "position": 102,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -94
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -54
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
            "position": 44,
            "movement": 27
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
            "position": 51,
            "movement": -2
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
            "position": 56,
            "movement": -2
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
            "position": 43,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
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
            "position": 135,
            "movement": 33
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 45,
            "movement": -12
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
            "position": 172,
            "movement": -14
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
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 40,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 114,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -34
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
            "movement": 30
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": -17
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
            "position": 50,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
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
            "position": 108,
            "movement": 27
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
            "position": 178,
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
            "position": 78,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 65
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 196,
            "movement": -86
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
            "position": 58,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": -52
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
            "position": 133,
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
            "position": 185,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2am in toronto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 196,
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
            "position": 28,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 96
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": 10
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 7
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
            "position": 41,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 79
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -57
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 50,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": -43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": 14
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
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": 64
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skelewu",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23726f80ac87dcce3846c3b638cba30d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tanana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 34,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OVER DEM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Electricity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dd374a6d185e39c6c4f847704afc827e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IN THE GARDEN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PRECISION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 110,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/999b76908ce8d84c0ca25eb5e58dc505/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 76
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEM",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fa0e3368a8a8e80b32fe88a276b9e759/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Son of Mercy - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
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
  