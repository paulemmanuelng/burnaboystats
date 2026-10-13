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
  export const liveChartsBuiltAt = "2026-10-13T22:48Z";
  
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
            "position": 20,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": -31
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
            "position": 55,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 126,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
            "movement": -6
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
            "position": 58,
            "movement": 4
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 30,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 86,
            "movement": -58
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
            "position": 35,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 70,
            "movement": -6
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
            "position": 11,
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
            "position": 101,
            "movement": -99
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
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 24,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 29,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 66,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": 113
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 43,
            "movement": 47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 81
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 68
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 195,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 68
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
            "position": 17,
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
            "position": 104,
            "movement": -98
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": 97
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 81,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 25,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -23
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
            "position": 34,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
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
            "position": 93,
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
            "position": 16,
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
            "position": 154,
            "movement": -6
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": 8
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
            "position": 33,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -99
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
            "position": 103,
            "movement": -8
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
            "position": 181,
            "movement": -7
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
            "position": 97,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": -48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -60
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
            "position": 26,
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -56
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
            "position": 48,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -22
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
            "position": 148,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": 6
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
            "position": 128,
            "movement": 17
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": -13
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 46,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 143,
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
            "name": "Swaziland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
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
            "position": 145,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -3
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
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": -20
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 19
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
      }
    ],
    "kind": "album",
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
            "position": 34,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -32
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
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": -38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "position": 41,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 154,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 98,
            "movement": 82
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 11
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
            "position": 149,
            "movement": -110
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
            "position": 135,
            "movement": -103
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 54,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Offa Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 136,
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
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 140,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "IN THE GARDEN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 181,
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 193,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
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
    "title": "E PAIN ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
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
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
            "movement": -70
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sweet in the Middle",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": -112
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 123,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 126,
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
  