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
  export const liveChartsUpdated = "2026-09-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-23T07:49Z";
  
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
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
            "position": 26,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 26,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 125,
            "movement": -24
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
            "position": 26,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -29
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
            "position": 14,
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
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -2
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": -47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -54
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -40
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
            "position": 66,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -10
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
            "position": 51,
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
            "position": 22,
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -34
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 130,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 144,
            "movement": 20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 155,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 166,
            "movement": 28
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 171,
            "movement": 18
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
            "position": 6,
            "movement": -2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 152,
            "movement": -32
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 186,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 197,
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 52,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 152,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -34
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
            "position": 116,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": 10
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
            "position": 79,
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
            "position": 95,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -50
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
            "movement": 1
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 106,
            "movement": 85
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": -49
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
            "position": 47,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -90
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 200,
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
            "position": 19,
            "movement": 170
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 132
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 38,
            "movement": -14
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
            "position": 142,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": -10
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
            "movement": 2
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -84
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 161,
            "movement": -99
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": -4
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -17
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
            "position": 107,
            "movement": 13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 184,
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
            "position": 66,
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": -16
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
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
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
            "position": 15,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 54,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -11
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
            "position": 26,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
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
            "position": 161,
            "movement": 7
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
            "position": 14,
            "movement": 6
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
            "position": 54,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -63
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
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 57,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -11
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
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -121
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
            "position": 72,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
            "position": 43,
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
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 199,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 56,
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
            "position": 68,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
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
            "position": 140,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
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
            "position": 63,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -10
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
            "position": 59,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 3
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
            "position": 74,
            "movement": 17
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -9
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
            "position": 87,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
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
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 154,
            "movement": -89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
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
            "position": 188,
            "movement": -95
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
    "title": "On The Road",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 53
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/603c1798522c1b9fae27290d2e877f3f/500x500-000000-80-0-0.jpg"
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
            "position": 79,
            "movement": 29
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
            "position": 96,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sweet in the Middle",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
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
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -25
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/acd552a8f2ba4e9f448a876eacb65d4d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gobe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/d7997ace25abd1a5cf1a8ae8d541a52a/500x500-000000-80-0-0.jpg"
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
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
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
  