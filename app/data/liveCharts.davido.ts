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
  export const liveChartsUpdated = "2026-10-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-27T18:06Z";
  
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
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": -38
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
            "position": 73,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": 5
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
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": null,
            "status": "re"
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
            "position": 48,
            "movement": -1
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
            "position": 54,
            "movement": -27
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 41,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 147,
            "movement": 9
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
            "position": 46,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 123,
            "movement": -5
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
            "position": 14,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": 53
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 99,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 138,
            "movement": -65
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 35,
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
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -24
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
            "position": 86,
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
            "position": 7,
            "movement": -2
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
            "position": 17,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 92
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": 2
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
            "position": 85,
            "movement": -59
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
            "position": 73,
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
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": 65
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 135,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": -36
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
            "position": 68,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -31
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
            "position": 59,
            "movement": -9
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
            "position": 42,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
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
            "position": 146,
            "movement": -7
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
            "position": 163,
            "movement": -14
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": 0
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
            "position": 130,
            "movement": -19
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
            "position": 84,
            "movement": -6
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
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": -37
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 185,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
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
            "position": 65,
            "movement": -7
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
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 140,
            "movement": -63
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": 0
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
            "position": 128,
            "movement": 5
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
            "position": 197,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -30
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 143,
            "movement": -62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": 0
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
            "position": 93,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 3
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
            "position": 18,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 0
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
            "movement": 3
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
            "position": 162,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 73,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 87,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 69,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 0
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
            "position": 65,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -17
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
            "position": 100,
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
    "title": "FIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
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
            "position": 28,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fade",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "10 Kilo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 53,
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
    "title": "Risky",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Money",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/999b76908ce8d84c0ca25eb5e58dc505/500x500-000000-80-0-0.jpg"
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
            "position": 170,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
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
            "position": 177,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 97,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/87977db8dce4080536f48f3cfa5785c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Activate",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hip Hop Messiah",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1703840ac7d78835bcd229f68c6a56cd/500x500-000000-80-0-0.jpg"
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
  