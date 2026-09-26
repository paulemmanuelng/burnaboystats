// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=seyi-vibez from kworb's artist page.
  //
  // PLATFORM chart data for Seyi Vibez: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-26T11:29Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SWAGUU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": 36
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 21,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 23,
            "movement": 30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 35,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 40,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 59,
            "movement": -12
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": -22
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 87,
            "movement": -71
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": -55
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 117,
            "movement": -16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 148,
            "movement": -48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": -43
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": -124
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 182,
            "movement": -117
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 189,
            "movement": -139
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 40,
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
            "position": 41,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "VOLUME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 60
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -16
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 71,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
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
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BACK 2 U",
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
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -15
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 124,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": 10
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
            "position": 4,
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
            "position": 19,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/625f9538bb2952a5b160aef95aeb7ed0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ilome",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -24
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 191,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -21
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
            "position": 39,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
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
            "position": 3,
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
            "position": 39,
            "movement": -2
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
            "position": 12,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PANSA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -37
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 185,
            "movement": -38
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
            "position": 7,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DIAMONDS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -97
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
            "position": 10,
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
            "position": 93,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MELANIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
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
            "position": 15,
            "movement": -1
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
            "position": 159,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GOD",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
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
            "position": 8,
            "movement": -1
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
            "position": 17,
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
            "position": 61,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3f47680977ad5f31c014b7d49127ce8a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUJI MOTO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -58
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
            "position": 24,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AKPAN AKPARI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
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
            "position": 14,
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
            "position": 11,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SWAGUU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -62
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -14
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
            "position": 37,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -25
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "EL JAJA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
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
            "position": 12,
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
            "position": 20,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Thy Kingdom Come",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -2
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 37,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
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
            "position": 15,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6954c3e880713a3d27089b7a0ad8570d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ALUBARIKA",
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
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": -24
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
            "position": 42,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ALAFIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
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
            "position": 17,
            "movement": -1
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
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/48381e9f42170865f4eaa548d3b014c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OBLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
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
            "position": 24,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6954c3e880713a3d27089b7a0ad8570d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Vibe Till Thy Kingdom Come",
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
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
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
            "position": 63,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6954c3e880713a3d27089b7a0ad8570d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Karma",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -35
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
            "position": 69,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8ebad7f5af3f521ca579199d9e05150/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MY HEALER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -31
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
            "position": 162,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 1
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
            "position": 137,
            "movement": -6
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
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 84
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Billion Dollar Baby 2.0",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -25
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
            "position": 45,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd6ee4f7ca4e570c6a0b6319f7e57730/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Loseyi Professor",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -31
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
            "position": 48,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/44b6b558a027125f253bbf9538541db4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Let There Be Light",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0d3b3f15e7c633880a6653e97ab81cd2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Man of The Year",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8ebad7f5af3f521ca579199d9e05150/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Instagram",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
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
            "position": 43,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c75b2cd0abfbe74aa799b7e04caa9018/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Big Things",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f160ebeb49e3bcae4edadc24aa7d1cc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NSNV",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 1
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
            "position": 86,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3f47680977ad5f31c014b7d49127ce8a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nahamciaga - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Doha",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/44b6b558a027125f253bbf9538541db4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNIVERSE",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Pressure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee26d796ad7fe0cc761309d449f775ae/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Today",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7811d182331cada5bb161fbb2edf0f40/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where I'm from",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4fe00e347d44e64c014306d1f5f778b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GWAGWALADA",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7f89da381e2508e30a82f7dc2d18287f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HOW ARE YOU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65338596d2138717cab1e115fd412599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MARIO KART",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aa8d9ee07662959c9f52b4e9282a0f54/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Billion Dollar Baby",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd6ee4f7ca4e570c6a0b6319f7e57730/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Vibez Incorporation Mixtape, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
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
  