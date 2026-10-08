// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=omah-lay from kworb's artist page.
  //
  // PLATFORM chart data for Omah Lay: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-08T06:10Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "CLARITY OF MIND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": 80
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 23,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 63,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 83,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": -64
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -26
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 188,
            "movement": -112
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "position": 11,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I AM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 35,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 47,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": 24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 135,
            "movement": -80
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
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
            "position": 67,
            "movement": 3
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
            "position": 187,
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
            "position": 36,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": -57
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 168,
            "movement": -44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
            "movement": -9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 197,
            "movement": -51
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 133,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 13,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -78
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": -41
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
            "position": 14,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 96
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
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
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 152
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
            "movement": 3
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
            "position": 147,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 133,
            "movement": -80
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
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
            "position": 160,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Infinity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -14
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 189,
            "movement": -102
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Waist",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
            "position": 79,
            "movement": 1
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
            "position": 47,
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
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 81,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MY HEALER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -3
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
            "position": 158,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 55,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": 53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 165,
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
            "position": 80,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -3
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
            "position": 155,
            "movement": -61
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
            "position": 163,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "reason",
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
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 129,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Namek",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 90,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 162,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Godly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 48,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed64774f56cf5d0f3fcb8e25c9fe39f6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "joanna",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 51,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "come closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 130,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "it's yours",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 131,
            "movement": -79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "imagine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 136,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "10 Toes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "As We Get High",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4d2ad60759dd994a1a8440baa1c61e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 180,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/02e3bf9a87b002f4e52e9395e8a7348b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What Have We Done - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 84,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed64774f56cf5d0f3fcb8e25c9fe39f6/500x500-000000-80-0-0.jpg"
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
  