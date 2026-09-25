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
  export const liveChartsUpdated = "2026-09-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-25T17:49Z";
  
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 24,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": -61
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 127,
            "movement": -52
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
            "movement": -1
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 26,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": 4
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
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
            "position": 87,
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
            "position": 14,
            "movement": -8
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
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 181,
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
            "position": 60,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 65,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
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
            "position": 54,
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
            "position": 41,
            "movement": 6
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 15
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 26,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": 31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 136,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 153,
            "movement": -59
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 162,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 167,
            "movement": -10
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
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": 25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
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
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
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
            "position": 40,
            "movement": 0
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
            "position": 153,
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
            "position": 43,
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
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 91
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": -7
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
            "position": 128,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
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
            "position": 86,
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
            "position": 79,
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": -59
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
            "position": 54,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -33
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
            "position": 134,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
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
            "position": 144,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 1
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
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -49
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": 60
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 191,
            "movement": -133
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": -59
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
            "position": 115,
            "movement": -106
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
            "position": 87,
            "movement": 6
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
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "name": "Swaziland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 64,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
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
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 199,
            "movement": -39
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
            "position": 69,
            "movement": -9
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -29
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -5
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": -53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -12
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
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -65
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -55
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": -43
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 78
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
            "movement": -11
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
            "movement": 5
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
            "position": 48,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 0
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
            "position": 78,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 177,
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
            "position": 65,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 19
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
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -58
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
            "position": 142,
            "movement": 3
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
            "position": 97,
            "movement": 103
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -18
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
            "position": 130,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
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
            "position": 85,
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
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
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
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -70
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Titanium",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 35,
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
    "title": "CFMF",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -3
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
            "position": 76,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 77,
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
    "title": "Ekuro",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
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
            "position": 141,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 176,
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
    "title": "FOR YOU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 151,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Be There Still",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
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
    "title": "Activate",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": null,
            "status": "new"
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
  