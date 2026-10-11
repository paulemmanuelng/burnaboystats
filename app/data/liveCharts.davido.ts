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
  export const liveChartsUpdated = "2026-10-11";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-11T22:01Z";
  
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
            "position": 16,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 90
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 132,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": 9
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
            "position": 54,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -28
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
            "position": 59,
            "movement": -6
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
            "position": 93,
            "movement": null,
            "status": "new"
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
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -1
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -7
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
            "position": 25,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 57,
            "movement": 3
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
            "position": 20,
            "movement": -8
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
            "position": 12,
            "movement": 6
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 1
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
            "position": 11,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": 10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 150,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": -55
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 200,
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": -18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 154,
            "movement": -30
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
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 45
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
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
            "position": 119,
            "movement": -112
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 153,
            "movement": -23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
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
            "position": 153,
            "movement": -43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
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
            "position": 108,
            "movement": -10
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
            "position": 15,
            "movement": -3
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
            "position": 38,
            "movement": 69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -83
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
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
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -61
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
            "position": 145,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
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
            "position": 122,
            "movement": -11
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
            "movement": -48
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
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 61
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -68
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
            "position": 25,
            "movement": 39
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 85,
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
            "position": 47,
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -119
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
            "position": 86,
            "movement": -8
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
            "position": 115,
            "movement": -111
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
            "position": 140,
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
            "movement": -58
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
            "position": 15,
            "movement": 27
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
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
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": -37
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
            "position": 113,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": 17
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
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 7
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
            "position": 95,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 40,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
            "movement": -72
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
            "position": 77,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": 27
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
            "position": 195,
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
            "country": "TD",
            "name": "Chad",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 9
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
            "position": 65,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 76,
            "movement": -27
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 116,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 80,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": 2
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
            "position": 84,
            "movement": 1
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
            "position": 78,
            "movement": -1
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
            "position": 53,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tchelete",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/603c1798522c1b9fae27290d2e877f3f/500x500-000000-80-0-0.jpg"
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
            "position": 188,
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 154,
            "movement": 31
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
            "position": 80,
            "movement": -64
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
            "position": 162,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Awuke",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -125
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a087ecbb3b04710409cd98ae120c6550/500x500-000000-80-0-0.jpg"
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
  