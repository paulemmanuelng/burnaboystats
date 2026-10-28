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
  export const liveChartsUpdated = "2026-10-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-28T22:39Z";
  
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
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": 61
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 47
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 76,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 109,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -108
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
            "movement": 33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 11,
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
            "position": 7,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 51,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -61
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
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
            "position": 44,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
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
            "position": 78,
            "movement": -4
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
            "position": 33,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 105
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 86,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": 14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 122,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -61
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": -33
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 176,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 181,
            "movement": -75
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
            "movement": -2
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
            "position": 34,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 184,
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
            "position": 90,
            "movement": -41
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
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
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
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
            "position": 149,
            "movement": 7
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
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -20
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
            "position": 184,
            "movement": 6
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
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
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
    "title": "Infinity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HOLY GHOST",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -52
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": -23
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
            "position": 123,
            "movement": 45
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IE",
            "name": "Ireland",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b4fd7e67b985be9489dbf58dc74497b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Waist",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -30
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 144,
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
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
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
            "position": 86,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 187,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 1
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
            "position": 179,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CANADA BREEZE",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
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
            "position": 66,
            "movement": 1
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
            "position": 186,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Company",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PE",
            "name": "Peru",
            "position": 114,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d9ca878974f4d47b8d671a0ea95ecd2/500x500-000000-80-0-0.jpg"
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
  