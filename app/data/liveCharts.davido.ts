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
  export const liveChartsUpdated = "2026-09-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-28T14:01Z";
  
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
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -6
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
            "position": 84,
            "movement": 1
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
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 32,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": -8
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
            "position": 11,
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
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -21
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 151,
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
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
            "position": 6,
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
            "position": 7,
            "movement": 4
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 35,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 51,
            "movement": 24
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 104,
            "movement": 37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 110,
            "movement": 28
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": 36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": -60
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 164,
            "movement": -26
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 176,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
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
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": 61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 117,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": 28
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
            "position": 61,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 66,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": 14
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
            "position": 53,
            "movement": -1
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
            "position": 14,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 71,
            "movement": -46
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": -72
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": -25
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -6
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
            "position": 131,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 200,
            "movement": -33
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
            "position": 89,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -147
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
            "position": 153,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
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
            "movement": -13
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
            "position": 13,
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
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 184,
            "movement": -67
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -26
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": -5
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
            "position": 182,
            "movement": -11
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -73
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
            "position": 83,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 197,
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
            "position": 63,
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
            "position": 44,
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
            "position": 22,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 136,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
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
            "position": 130,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
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
            "position": 80,
            "movement": 10
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
            "position": 34,
            "movement": -26
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
            "position": 5,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -2
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
            "position": 68,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 135,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": 1
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
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 27
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 92,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -36
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
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
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -5
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
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 60,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 51
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 18
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
            "position": 27,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
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
            "position": 31,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -74
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -49
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": 2
          },
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
            "movement": -107
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 18
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
            "position": 200,
            "movement": -28
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
            "movement": 7
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
            "position": 62,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": -51
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
            "position": 49,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 9
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -18
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": 8
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 0
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
            "position": 68,
            "movement": 1
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
            "position": 82,
            "movement": -30
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
            "position": 100,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 4
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
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 53
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 169,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FOR THE ROAD",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
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
            "position": 150,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cfe803919679a91e83cb8967b57aab71/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gallardo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
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
            "position": 171,
            "movement": -1
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
            "position": 177,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
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
            "position": 197,
            "movement": -36
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
  