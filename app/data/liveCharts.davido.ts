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
  export const liveChartsUpdated = "2026-11-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-26T21:38Z";
  
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
            "position": 14,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": 11
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
            "position": 64,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 100,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
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
            "position": 19,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
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
            "position": 64,
            "movement": -7
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": -66
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -21
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
            "position": 67,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": -13
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
            "movement": 0
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
            "position": 13,
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
            "position": 22,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": 42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": -36
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 153,
            "movement": -30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": -55
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 64
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": 27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": -61
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 179,
            "movement": 18
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 186,
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
            "position": 31,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PARTY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 15,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4285de11c037b6bce20faa82338358ed/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": -81
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
            "movement": -73
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
            "position": 94,
            "movement": 9
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
            "position": 170,
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
            "position": 48,
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": 82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 198,
            "movement": -74
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 199,
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
            "position": 88,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": -95
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -27
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
            "position": 197,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": 1
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
            "position": 113,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -64
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": -59
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -11
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
            "position": 85,
            "movement": 29
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
            "position": 93,
            "movement": -88
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
            "position": 17,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -63
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 138,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -64
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
            "position": 131,
            "movement": -42
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -8
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
            "position": 91,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -81
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
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
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
            "position": 152,
            "movement": -21
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
            "position": 182,
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": -6
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 71,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 75,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -92
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": 51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": -24
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
            "position": 52,
            "movement": -4
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
            "position": 86,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -77
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 66,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 136,
            "movement": -94
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -57
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": 31
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 156,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 177,
            "movement": null,
            "status": "new"
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
            "position": 92,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
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
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 7,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 73,
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
            "country": "KE",
            "name": "Kenya",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skelewu",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23726f80ac87dcce3846c3b638cba30d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ogechi",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg"
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
            "position": 118,
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 186,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
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
            "position": 47,
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
  