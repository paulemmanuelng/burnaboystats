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
  export const liveChartsUpdated = "2026-09-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-24T17:15Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 75,
            "movement": 50
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 142,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -10
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 25,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 133,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
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
            "position": 61,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -21
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
            "position": 10,
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
            "position": 6,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 93
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -31
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": 73
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": 15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 149,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 157,
            "movement": -17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 177,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 197,
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
            "country": "GH",
            "name": "Ghana",
            "position": 9,
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
            "position": 2,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -50
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
            "position": 60,
            "movement": 6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 62,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -1
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 9
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
            "movement": 0
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
            "position": 47,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": -60
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -84
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "position": 26,
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
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
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
            "position": 39,
            "movement": -1
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
            "position": 155,
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
            "position": 26,
            "movement": -8
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
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
            "position": 93,
            "movement": 14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 191,
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
            "position": 65,
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
            "position": 8,
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
            "position": 52,
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
            "position": 55,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 184,
            "movement": -7
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
            "position": 39,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": 61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 144,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 127
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -63
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
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
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
            "position": 136,
            "movement": 3
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
            "position": 12,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 25,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 131,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
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
            "position": 123,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": 5
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
            "position": 78,
            "movement": 1
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
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -41
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 58,
            "movement": 103
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -20
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
            "movement": -6
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 56
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 184,
            "movement": -67
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
            "position": 161,
            "movement": 1
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
            "position": 48,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": 28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "position": 52,
            "movement": -6
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
            "position": 76,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 2
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
            "position": 60,
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -22
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 50,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -11
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
            "position": 58,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
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
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 125
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -18
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
            "position": 50,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
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
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
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
            "position": 139,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 59,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
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
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
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
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": 69
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
            "position": 112,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On The Road",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -68
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fans Mi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 28,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/49e60bcc245747acb829b0a96723c176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Flora My Flawa",
    "platforms": [
      {
        "platform": "Deezer",
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dcec044d71034e401dfe6d1f768c18ff/500x500-000000-80-0-0.jpg"
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
            "position": 5,
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
    "title": "OVER DEM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -5
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
            "position": 96,
            "movement": 0
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
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shakabulizzy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/acd552a8f2ba4e9f448a876eacb65d4d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 171,
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
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 174,
            "movement": -82
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
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
  