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
  export const liveChartsUpdated = "2026-10-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-05T14:46Z";
  
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 141,
            "movement": 56
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
            "position": 23,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 36,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": -17
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -50
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
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 0
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
            "position": 9,
            "movement": 3
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
            "position": 15,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": -13
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
            "position": 54,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 61,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -10
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
            "position": 29,
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 149,
            "movement": -127
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
            "movement": -22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": -73
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
            "movement": -22
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
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
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": 18
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 162,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": -91
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": -34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 145,
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
            "position": 73,
            "movement": 7
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
            "position": 196,
            "movement": -120
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
            "position": 97,
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": 56
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 43
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -30
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
            "position": 19,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 40,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -17
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
            "position": 65,
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
            "position": 200,
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
            "position": 59,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 16,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -123
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
            "position": 156,
            "movement": -1
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
            "position": 154,
            "movement": 8
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
            "position": 100,
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 24,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 125,
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
            "position": 85,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
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
            "position": 102,
            "movement": 16
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
            "position": 68,
            "movement": 0
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
            "position": 24,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 94
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 111
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 49,
            "movement": 21
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 145,
            "movement": -115
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 177,
            "movement": -23
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -22
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
            "position": 39,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 76
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -27
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -44
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -76
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
            "position": 52,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -91
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
            "position": 44,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 55,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -13
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
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -5
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
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 53,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": 7
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
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": -18
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
            "position": 98,
            "movement": -75
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
            "position": 47,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "movement": -85
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
            "position": 71,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": 3
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
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -21
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
            "position": 122,
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
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -10
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
            "position": 80,
            "movement": 0
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
            "position": 95,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
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
    "title": "Risky",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
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
    "title": "Offa Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 184,
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
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lately",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -86
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Only You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -96
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 191,
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
  