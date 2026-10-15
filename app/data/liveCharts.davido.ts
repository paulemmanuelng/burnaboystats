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
  export const liveChartsUpdated = "2026-10-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-15T11:34Z";
  
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
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -26
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
            "position": 58,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
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
            "position": 63,
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
            "position": 47,
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 114,
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 83,
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
            "position": 2,
            "movement": -1
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
            "position": 12,
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -13
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": -16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": -84
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": -64
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": -90
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
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
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 15,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 25,
            "movement": 88
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 73,
            "movement": -44
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 100,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 199,
            "movement": -17
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
    "title": "2am in toronto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
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
            "position": 20,
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
            "movement": -26
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
            "position": 177,
            "movement": null,
            "status": "new"
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
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -52
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 190,
            "movement": -109
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
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
            "position": 114,
            "movement": -11
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
            "position": 36,
            "movement": -3
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
            "position": 27,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 58,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -10
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
            "position": 150,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
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
            "position": 151,
            "movement": -23
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
            "position": 25,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": 60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
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
            "position": 57,
            "movement": -5
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
            "position": 37,
            "movement": -9
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
            "position": 38,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -41
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
            "position": 100,
            "movement": -7
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
            "position": 152,
            "movement": 4
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
            "position": 62,
            "movement": 2
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
            "position": 86,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": -87
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": 2
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
            "position": 45,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": -45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
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
            "position": 17,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 11
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
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -64
          },
          {
            "country": "UG",
            "name": "Uganda",
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 2
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
            "position": 30,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": -77
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
            "name": "Eswatini",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 52,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
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
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
            "movement": -7
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
            "position": 89,
            "movement": -48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 153,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 194,
            "movement": -55
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 199,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": -68
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
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 2,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 10
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
            "position": 140,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -82
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 0
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
            "position": 154,
            "movement": 8
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
            "position": 54,
            "movement": -36
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
            "position": 75,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": 1
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEM",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fa0e3368a8a8e80b32fe88a276b9e759/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 8
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 181,
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
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 174,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ogechi",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": -11
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
  