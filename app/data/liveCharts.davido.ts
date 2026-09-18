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
  export const liveChartsUpdated = "2026-09-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-18T06:43Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
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
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 2
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
            "position": 28,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 53
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 178,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -8
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 91,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 166,
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": null,
            "status": "re"
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
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 69,
            "movement": -6
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
            "position": 2,
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
            "position": 9,
            "movement": 11
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": -41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": 17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
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
            "position": 64,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
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
            "position": 35,
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
            "position": 49,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 21,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": 10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 128,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
            "movement": 39
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 146,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 150,
            "movement": -21
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -25
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 184,
            "movement": -145
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 186,
            "movement": -30
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
            "position": 159,
            "movement": -59
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
            "movement": -9
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
            "position": 12,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 33,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
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
            "position": 144,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
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
            "position": 136,
            "movement": -17
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
            "position": 10,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 123
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 196,
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
            "position": 27,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": null,
            "status": "new"
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
            "position": 6,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
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
            "position": 24,
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
            "position": 149,
            "movement": -122
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
            "position": 130,
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
            "position": 18,
            "movement": -1
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
            "position": 10,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": 55
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 53,
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
            "position": 150,
            "movement": -121
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
            "position": 113,
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
            "position": 21,
            "movement": 72
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
            "position": 52,
            "movement": -1
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
            "position": 13,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
            "movement": -112
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": -21
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
            "position": 100,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
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
            "position": 67,
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
            "position": 61,
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
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 60
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -24
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
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "position": 87,
            "movement": -6
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
            "position": 75,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": 28
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
            "position": 10,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 50,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": 5
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
            "position": 58,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 46,
            "movement": 0
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
            "position": 36,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
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
            "position": 115,
            "movement": 5
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
            "position": 186,
            "movement": -9
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
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
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
            "position": 64,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": -89
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": -30
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
            "position": 8,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 3
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
            "position": 175,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 69,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
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
            "position": 127,
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
            "position": 75,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": 5
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 0
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
            "position": 138,
            "movement": 45
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 150,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Funds",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": 15
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
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
            "position": 105,
            "movement": -59
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
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
    "title": "Nwa Baby",
    "platforms": [
      {
        "platform": "iTunes",
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/74fb63756975ed8644a5519be4ad39fc/500x500-000000-80-0-0.jpg"
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
    "title": "Constantly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
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
    "title": "Joy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
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
    "title": "Lover Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -5
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
            "position": 136,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Guide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
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
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
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
    "title": "Ogechi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Titanium",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Julie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gbagbe Oshi",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MORE PRETTY GIRLS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/763673d134d19d6bee0efd1f24dc10ec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Confirm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 150,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8fa8965d4b88e9dec3578d96d73c9572/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
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
            "position": 186,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
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
  