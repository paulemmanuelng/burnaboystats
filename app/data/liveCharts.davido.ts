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
  export const liveChartsUpdated = "2026-11-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-05T06:53Z";
  
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
            "movement": -21
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
            "position": 77,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
            "movement": -16
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
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 4
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
            "position": 45,
            "movement": 4
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
            "position": 18,
            "movement": 153
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -29
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
            "position": 61,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 183,
            "movement": -11
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
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 198,
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
            "position": 6,
            "movement": 1
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
            "position": 16,
            "movement": 0
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
            "position": 5,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": 28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": -26
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 196,
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
            "position": 6,
            "movement": 1
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
            "position": 26,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 42
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 53
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": 30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "position": 33,
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 64
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": -13
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
            "position": 74,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": 27
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
            "position": 33,
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
            "position": 11,
            "movement": 73
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 85
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": 20
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
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 50,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": 64
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 151,
            "movement": 19
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
            "position": 115,
            "movement": 4
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
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
            "position": 68,
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
            "position": 61,
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
            "position": 40,
            "movement": 2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
            "movement": -82
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
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
            "position": 86,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -37
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
            "position": 56,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -132
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
            "position": 137,
            "movement": -4
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
            "position": 183,
            "movement": -2
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 82
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
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
    "title": "2am in toronto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -42
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
            "position": 62,
            "movement": -5
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
            "position": 11,
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
            "position": 168,
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 193,
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
            "position": 29,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 68,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
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
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 27,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 56,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 96
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 28
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
            "position": 118,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 101,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -41
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
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
            "position": 61,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -55
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
            "position": 86,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": -42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -9
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
            "position": 62,
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
    "title": "Champion Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": -29
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All over You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6339d7ca1f42b21412813125ef683020/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hope In You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5fe158cfee002ea68dd734127252fada/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fade",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
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
            "position": 50,
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
    "title": "Risky",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "position": 187,
            "movement": 6
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
            "position": 169,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
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
            "position": 190,
            "movement": -8
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
  