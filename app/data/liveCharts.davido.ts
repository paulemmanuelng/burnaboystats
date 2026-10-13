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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-13T00:45Z";
  
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
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
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
            "position": 49,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -26
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
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 2
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 50
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -6
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
            "position": 29,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 64,
            "movement": -7
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
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
            "position": 8,
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
            "position": 2,
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
            "position": 18,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 16,
            "movement": 108
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 145,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "position": 4,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": -48
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -106
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -60
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
            "movement": -46
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2am in toronto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -93
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
            "position": 15,
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
            "position": 6,
            "movement": 123
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -18
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
            "position": 68,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 62
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 124,
            "movement": -66
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 163,
            "movement": -21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
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
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -7
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
            "position": 95,
            "movement": 3
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
            "position": 174,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 62,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
            "movement": -26
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
            "position": 34,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -107
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -15
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
            "position": 146,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
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
            "position": 145,
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -72
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
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
            "position": 49,
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
            "position": 28,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 18
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
            "position": 150,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
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
            "position": 94,
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
            "position": 148,
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
            "position": 64,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 197,
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
            "position": 91,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 52,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": 98
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": 56
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
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
            "position": 83,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 179,
            "movement": -48
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
            "position": 134,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 57,
            "movement": 80
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 81
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": -18
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
            "position": 171,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 154,
            "movement": -38
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 90
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -9
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
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "name": "Swaziland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 71,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 3
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
            "position": 179,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "TD",
            "name": "Chad",
            "position": 56,
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
            "position": 36,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 88,
            "movement": -10
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
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 88,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": 49
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
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
            "position": 141,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 155,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woju",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gallardo",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dada",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shoki",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
  