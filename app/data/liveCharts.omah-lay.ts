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
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T19:21Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -45
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -37
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 70,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": -53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": -21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 102,
            "movement": -9
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 111,
            "movement": -87
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": -43
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 125,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 137,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 139,
            "movement": -61
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 144,
            "movement": 40
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
            "movement": -119
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": -128
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
            "position": 6,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 48
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 94,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 125,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": 51
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 146,
            "movement": -31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 67
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 26
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 116,
            "movement": -74
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": 51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -45
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 199,
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
            "position": 85,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": 11
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
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 153,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 125,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 71
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
            "position": 113,
            "movement": 5
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
            "movement": 178
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
            "position": 184,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -19
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "position": 191,
            "movement": 5
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TAKE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
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
            "position": 94,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
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
            "position": 116,
            "movement": -14
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
            "position": 83,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5850c8b89e4f4726c16ef035da9edaf4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 54
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
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
            "position": 60,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 169,
            "movement": 11
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
            "position": 92,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -54
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
            "position": 139,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WAIST",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 6
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
            "position": 94,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 80,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Godly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 56,
            "movement": -47
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
            "position": 89,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed64774f56cf5d0f3fcb8e25c9fe39f6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Namek",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 93,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 191,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BACK TO LAGOS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -12
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
            "position": 100,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Company",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 80,
            "movement": -14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 157,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d9ca878974f4d47b8d671a0ea95ecd2/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 141,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed64774f56cf5d0f3fcb8e25c9fe39f6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": 83
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bae2b286e60621c6855fa7bfe393b057/500x500-000000-80-0-0.jpg"
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
            "position": 80,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
  