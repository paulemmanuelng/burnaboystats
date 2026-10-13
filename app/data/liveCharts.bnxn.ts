// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=bnxn from kworb's artist page.
  //
  // PLATFORM chart data for BNXN: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-13T22:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Still In Charge - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 61,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 126,
            "movement": -19
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 128,
            "movement": -44
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 130,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": 12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 149,
            "movement": -31
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 177,
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
            "position": 55,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Back Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 80
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -97
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -1
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
            "position": 32,
            "movement": 3
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
            "position": 21,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": 93
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": -79
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
            "position": 132,
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
            "position": 48,
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
            "position": 25,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If You Like",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 199,
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
            "position": 8,
            "movement": 2
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
            "position": 20,
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
            "position": 2,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pidgin & English",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
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
            "position": 90,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "16",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -40
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
            "position": 13,
            "movement": 5
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
            "position": 21,
            "movement": -3
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
            "position": 16,
            "movement": 42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "my type",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 78
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -112
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
            "position": 26,
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
            "position": 199,
            "movement": -125
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
            "position": 195,
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
    "title": "Online",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": -68
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
            "movement": 4
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
            "position": 44,
            "movement": -2
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
            "position": 22,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d15ec9ac4c6efc3b30a9b12f86283099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shamaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -43
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
            "position": 18,
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
            "position": 78,
            "movement": -17
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
            "position": 78,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Days",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/99ab461acf3040d231c824f66893a811/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CAPTAIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
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
            "position": 10,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sincerely, Benson",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 9
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
            "position": 17,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Very Soon",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
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
            "position": 67,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Game Needs Us - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Deliberate Work",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
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
            "position": 122,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laye Mi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 2
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
            "movement": 15
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
            "position": 56,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Finesse",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": -16
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
            "position": 57,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cd08785ca6d2a471c70f774fc3e9b8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Since '97",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 10
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
            "position": 12,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8b3586d040e4d5ef670f3987dcfc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jies",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "POE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12b39d25fb640779483f443dcbedf748/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RnB",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sorry I'm Late",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/01e3a69fce9ce6cb0acf2e44f1be8280/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yes Sir",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Phenomena",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/46e288e8e53f80f89164b0a15d57f9c1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Feeling",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c0bc5156d31fbdfdc199a238476f02ec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PRAY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0ce9ce5b82ac7a394e54078a804577ac/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Emotional High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GWAGWALADA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7f89da381e2508e30a82f7dc2d18287f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ilashe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/589173416a36ce1395e49b85c4e6a9f8/500x500-000000-80-0-0.jpg"
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
  