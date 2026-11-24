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
  export const liveChartsUpdated = "2026-11-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-24T22:31Z";
  
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
            "country": "AI",
            "name": "Anguilla",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 38,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 43,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 57,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": 13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": -47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 163,
            "movement": -92
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": -80
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 170,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -40
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 132,
            "movement": -58
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -87
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
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
            "position": 84,
            "movement": 2
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
            "position": 69,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
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
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 75
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -72
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": -74
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
            "movement": -10
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
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 19
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
            "position": 177,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": -47
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": 119
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 13
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
            "position": 62,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -88
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
            "position": 142,
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
            "position": 171,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 183,
            "movement": -127
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
            "position": 117,
            "movement": 26
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
            "position": 130,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 157
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 94,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -22
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
            "position": 90,
            "movement": -7
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
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 56
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": -61
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -15
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
            "position": 169,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
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
            "position": 75,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 107
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
    "title": "BACK TO LAGOS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
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
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": -41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -4
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
            "position": 26,
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
    "title": "HOLY GHOST",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "AR",
            "name": "Argentina",
            "position": 112,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b4fd7e67b985be9489dbf58dc74497b/500x500-000000-80-0-0.jpg"
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
            "position": 93,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 180,
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
    "title": "Godly",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
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
    "title": "Company",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HR",
            "name": "Croatia",
            "position": 84,
            "movement": 21
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 191,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d9ca878974f4d47b8d671a0ea95ecd2/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
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
    "title": "woman",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1724f66c550648b497bd7ccec64b9179/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f913fed89932ceb56f7809aa7f811c0c/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ANGELS",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/400fd12df115a4aa37e3464e41658563/500x500-000000-80-0-0.jpg"
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
  