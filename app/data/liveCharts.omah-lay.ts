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
  export const liveChartsUpdated = "2026-11-06";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-06T19:29Z";
  
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
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 26,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 28,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 36,
            "movement": 30
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 42,
            "movement": -30
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 64,
            "movement": 38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": -39
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 69,
            "movement": -17
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 73,
            "movement": -59
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 78,
            "movement": 73
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 95,
            "movement": -65
          },
          {
            "country": "FR",
            "name": "France",
            "position": 100,
            "movement": -29
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 102,
            "movement": -86
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 118,
            "movement": -52
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 124,
            "movement": -72
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 140,
            "movement": -89
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 143,
            "movement": -78
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 155,
            "movement": -35
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 158,
            "movement": -43
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 164,
            "movement": -49
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 180,
            "movement": -51
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TAKE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 46,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -76
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -96
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 188,
            "movement": -70
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
            "position": 22,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": 6
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
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
            "position": 102,
            "movement": -5
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
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5850c8b89e4f4726c16ef035da9edaf4/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 59,
            "movement": 89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": -45
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
            "position": 119,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 28
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 86,
            "movement": 62
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": 50
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -61
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": -35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 178,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -118
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 196,
            "movement": -123
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
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
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
            "position": 13,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 28,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 59
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 177,
            "movement": -20
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
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
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
            "position": 87,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -44
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -88
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 180,
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
            "position": 80,
            "movement": 34
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
            "position": 103,
            "movement": 13
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
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -96
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 131,
            "movement": 6
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
            "position": 115,
            "movement": -53
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
            "position": 164,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 37,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
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
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -36
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
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
            "position": 122,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Infinity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -111
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -37
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 183,
            "movement": 5
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
            "position": 58,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WAIST",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 45
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
            "position": 89,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -17
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ghost",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -39
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
            "position": 183,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b4fd7e67b985be9489dbf58dc74497b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HOLY GHOST FIRE",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "temptations",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Moving",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f913fed89932ceb56f7809aa7f811c0c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "understand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebaba8c1ec645c396628a92f7aca871b/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ARTIFICIAL HAPPINESS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772b0b5eabc8b7efd2ba401dd555fc4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gut Genug",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4f5c145b06c62888141b2a7eabad4b3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CANADA BREEZE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
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
            "position": 107,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-05",
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
  