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
  export const liveChartsUpdated = "2026-10-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-03T05:22Z";
  
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 122,
            "movement": -96
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 5
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
            "country": "GD",
            "name": "Grenada",
            "position": 38,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -195
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
            "position": 12,
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
            "position": 9,
            "movement": 19
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
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
            "position": 56,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": 14
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
            "position": 174,
            "movement": 8
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
            "position": 58,
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
            "position": 65,
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 88,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 153,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 169,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 183,
            "movement": 1
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
            "position": 13,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
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
            "movement": 0
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 105
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 74,
            "movement": -47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -35
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 121,
            "movement": -37
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 123,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": -46
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 175,
            "movement": -44
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": 12
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
            "position": 30,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -30
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
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
            "position": 24,
            "movement": -14
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
            "position": 9,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
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
            "position": 43,
            "movement": -2
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
            "position": 198,
            "movement": -7
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
            "movement": 1
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
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 110,
            "movement": -92
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": -52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "position": 129,
            "movement": 6
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
            "position": 162,
            "movement": 2
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 128,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": -49
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
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
            "position": 117,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": 8
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
            "movement": 0
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
            "position": 45,
            "movement": -31
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -9
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
            "position": 70,
            "movement": -4
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
            "position": 199,
            "movement": -193
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
            "position": 95,
            "movement": 1
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
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
            "movement": -39
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
            "position": 107,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": -70
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": -86
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": -10
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
            "position": 92,
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
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 38,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
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
            "position": 124,
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
            "position": 62,
            "movement": 28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": -49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 6
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
            "position": 55,
            "movement": -3
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 56,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -6
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
            "position": 57,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 3
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
            "position": 17,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 96
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": -43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -6
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
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
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
            "position": 34,
            "movement": 1
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
            "position": 64,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 65,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
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
            "position": 73,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
            "movement": -9
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
            "position": 120,
            "movement": -91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 46,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -9
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
            "position": 94,
            "movement": 11
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
            "position": 151,
            "movement": -15
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
            "position": 96,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": -75
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
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": -11
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
            "country": "SR",
            "name": "Suriname",
            "position": 149,
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
    "title": "Lover Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -13
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
            "position": 160,
            "movement": -21
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
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 141,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cfe803919679a91e83cb8967b57aab71/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 140,
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
  