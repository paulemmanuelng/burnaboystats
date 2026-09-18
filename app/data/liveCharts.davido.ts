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
  export const liveChartsBuiltAt = "2026-09-18T21:45Z";
  
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
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": -47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 87,
            "movement": 72
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": 53
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 189,
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
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
            "position": 24,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 175,
            "movement": -9
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 78,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -77
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
            "position": 3,
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
            "position": 7,
            "movement": 2
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
            "position": 10,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 157,
            "movement": -49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 163,
            "movement": 3
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
            "position": 66,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 4
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
            "position": 38,
            "movement": -3
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
            "position": 3,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 34,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 63,
            "movement": -42
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": 8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 129,
            "movement": 17
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 138,
            "movement": 46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 145,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 188,
            "movement": -38
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
            "position": 166,
            "movement": -66
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 180,
            "movement": 16
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 125,
            "movement": -95
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
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": 164
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": -63
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
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
            "position": 27,
            "movement": -3
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
            "movement": -10
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
            "position": 70,
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": 38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -88
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": -75
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
            "position": 3,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -14
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
            "position": 160,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -23
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
            "movement": -15
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
            "position": 85,
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 65
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": -66
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
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
            "position": 97,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
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
            "position": 51,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
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
            "position": 74,
            "movement": -7
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 198,
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 146,
            "movement": -68
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
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
            "position": 123,
            "movement": -10
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 195,
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
            "position": 61,
            "movement": -8
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 73
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": 54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": null,
            "status": "new"
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
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -13
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
            "position": 62,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": 1
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
            "position": 53,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
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
            "position": 80,
            "movement": -22
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
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -11
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
            "position": 193,
            "movement": -7
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 127,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
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
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": 16
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
            "position": 60,
            "movement": 58
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": 3
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
            "position": 56,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 8
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
            "position": 27,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -18
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
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
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
            "position": 59,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 97
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -8
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
            "position": 110,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 143,
            "movement": -16
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
            "position": 62,
            "movement": 7
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
            "position": 119,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 28
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
            "position": 117,
            "movement": -86
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
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
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 35
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
            "position": 124,
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
            "position": 115,
            "movement": -86
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If It's Okay",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 11,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d18376c3bedbdcd7323453974cb46d03/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -6
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
            "position": 106,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Return",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Funds",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
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
            "position": 130,
            "movement": -2
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
            "position": 156,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": 12
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
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
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
    "title": "Gbagbe Oshi",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": -73
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/74fb63756975ed8644a5519be4ad39fc/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": 5
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
            "position": 165,
            "movement": -2
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
            "position": 181,
            "movement": 5
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
  