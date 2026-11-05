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
  export const liveChartsUpdated = "2026-11-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-05T20:01Z";
  
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
            "position": 3,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 12,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 14,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 14,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 16,
            "movement": 88
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 34
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 21,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 30,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": -18
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 53,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 66,
            "movement": -14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 69,
            "movement": -17
          },
          {
            "country": "FR",
            "name": "France",
            "position": 71,
            "movement": -11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 78,
            "movement": 73
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 102,
            "movement": -20
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 115,
            "movement": -41
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 115,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 124,
            "movement": -72
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 129,
            "movement": -21
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 132,
            "movement": -6
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
            "country": "CA",
            "name": "Canada",
            "position": 158,
            "movement": -38
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": -93
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 181,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
            "movement": -87
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
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 2
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
            "position": 51,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -18
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 28
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 90,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 133,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": 11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 156,
            "movement": 37
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 178,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -118
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
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 148,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": null,
            "status": "new"
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
            "position": 136,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -24
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
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": -71
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 20
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
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
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
            "position": 114,
            "movement": 20
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
            "position": 116,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 28,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 23
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
            "position": 92,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": 20
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
            "position": 81,
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
            "position": 71,
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
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -37
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -27
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
            "position": 26,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": 8
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
            "position": 97,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5850c8b89e4f4726c16ef035da9edaf4/500x500-000000-80-0-0.jpg"
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
            "position": 93,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": 28
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -110
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
            "position": 137,
            "movement": -4
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
            "position": 178,
            "movement": 5
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
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": 11
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
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": 7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 193,
            "movement": -12
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
            "position": 55,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": 5
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
            "movement": null,
            "status": "new"
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
            "position": 26,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
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
            "position": 169,
            "movement": -11
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -5
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
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "country": "GM",
            "name": "Gambia",
            "position": 124,
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
            "position": 171,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
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
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": -111
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -54
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
            "position": 95,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
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
            "country": "TN",
            "name": "Tunisia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": 3
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
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
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
            "position": 80,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
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
            "position": 63,
            "movement": 4
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
            "position": 134,
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
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
  