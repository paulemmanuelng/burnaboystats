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
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T21:48Z";
  
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
            "position": 14,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": 35
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": 18
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
            "position": 70,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 2
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
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 80
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": 10
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
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -16
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
            "position": 26,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
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
            "position": 60,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": -39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -106
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
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": -58
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 135,
            "movement": 19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": -28
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 80
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 124,
            "movement": -52
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": 58
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
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
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 80
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 44
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 106
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
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
            "position": 5,
            "movement": 94
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": -10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": -134
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -8
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
            "position": 23,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -19
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
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": 16
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
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": 74
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -19
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 200,
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
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 121,
            "movement": 38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": -84
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
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
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -124
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
            "position": 110,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
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
            "position": 108,
            "movement": -10
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
            "position": 12,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": -19
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
            "position": 124,
            "movement": -112
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
            "position": 126,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": 63
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -86
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
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
            "position": 47,
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
            "position": 64,
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
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": -7
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 86
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": -84
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 42,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 72,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 3
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
            "movement": -82
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
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
            "position": 105,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 17
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
            "position": 74,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -1
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
            "position": 32,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 39,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 75,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 9
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
            "position": 49,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
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
            "position": 78,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -31
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 38,
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
            "position": 44,
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
            "position": 165,
            "movement": -5
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
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
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
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 101,
            "movement": -18
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
            "position": 66,
            "movement": -33
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
            "position": 77,
            "movement": 1
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
            "position": 85,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
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
    "title": "Awuke",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/a087ecbb3b04710409cd98ae120c6550/500x500-000000-80-0-0.jpg"
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
            "position": 114,
            "movement": 6
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lover Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
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
    "title": "Dada",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
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
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 161,
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
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
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
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
            "movement": -170
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 191,
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
    "title": "Gallardo",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 181,
            "movement": -3
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
            "position": 198,
            "movement": -6
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
  