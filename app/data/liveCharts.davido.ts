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
  export const liveChartsUpdated = "2026-10-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-21T04:53Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -61
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
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 105,
            "movement": 3
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
            "position": 8,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": null,
            "status": "new"
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
            "movement": 0
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
            "position": 9,
            "movement": 143
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -7
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
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
            "position": 57,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -46
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 126,
            "movement": -94
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 172,
            "movement": -22
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": 54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": -64
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 170,
            "movement": -102
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -33
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": -58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
            "position": 55,
            "movement": -4
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
            "position": 93,
            "movement": -10
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -90
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
            "position": 94,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
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
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 16,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": -14
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
            "position": 171,
            "movement": 9
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
            "position": 166,
            "movement": 6
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
            "country": "TD",
            "name": "Chad",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
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
            "position": 111,
            "movement": -4
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
            "position": 92,
            "movement": -10
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
            "position": 192,
            "movement": -14
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
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 41,
            "movement": 153
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": 60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
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
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": 124
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -46
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": -24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 161,
            "movement": -99
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -53
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 33,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
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
            "position": 94,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 172,
            "movement": -101
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
            "movement": -3
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
            "position": 52,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": 77
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
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
            "position": 19,
            "movement": 3
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
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 60
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -29
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 153,
            "movement": -98
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -34
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 154,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 47,
            "movement": 0
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 50,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 75,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -12
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
            "country": "FR",
            "name": "France",
            "position": 25,
            "movement": -18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 120,
            "movement": -117
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 26
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
            "position": 98,
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
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 137,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
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
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GY",
            "name": "Guyana",
            "position": 105,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
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
            "position": 189,
            "movement": 3
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
            "position": 197,
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
    "title": "Activate",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
  