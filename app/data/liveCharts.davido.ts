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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T05:43Z";
  
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
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 30,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -2
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
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 10,
            "movement": 164
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 26,
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
            "position": 7,
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
            "position": 28,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": -22
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
            "position": 64,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
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
            "position": 27,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -13
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
            "position": 54,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": -14
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 57,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 38
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": 30
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 164,
            "movement": -15
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 172,
            "movement": -134
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 184,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -9
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
            "position": 3,
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
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -41
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 112
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": 32
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 130,
            "movement": 47
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -8
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
            "position": 25,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 15,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -85
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
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
            "position": 41,
            "movement": 2
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
            "position": 191,
            "movement": 4
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
            "position": 23,
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
            "position": 34,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 7
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
            "position": 10,
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
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
            "position": 66,
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
            "position": 14,
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
            "position": 96,
            "movement": -4
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
            "movement": 11
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
            "position": 61,
            "movement": -6
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
            "position": 29,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 150,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -3
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
            "position": 91,
            "movement": -4
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
            "position": 14,
            "movement": -12
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
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
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
            "position": 13,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -33
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
            "movement": 0
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
            "position": 164,
            "movement": 5
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
            "position": 44,
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
            "position": 14,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -10
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
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": -45
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -3
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
            "movement": 0
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
            "position": 37,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
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
            "position": 125,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 67
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 196,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 41
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
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 52,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 56,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 54,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
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
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 48
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -70
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -99
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 44
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 195,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -23
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
            "position": 67,
            "movement": 0
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
            "position": 66,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 52
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 3
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
            "position": 70,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": 1
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -44
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 23,
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
    "title": "On The Road",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 78,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ke Star",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5a54ff0e04934271e7acec9af3dd55d8/500x500-000000-80-0-0.jpg"
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
            "position": 49,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CFMF",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 60,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lover Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 161,
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
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 180,
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
    "title": "One Ticket",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cfe803919679a91e83cb8967b57aab71/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 82,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eeedaecd7be328ebce48a16701042891/500x500-000000-80-0-0.jpg"
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
            "position": 185,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
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
  