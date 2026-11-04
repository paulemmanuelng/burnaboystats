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
  export const liveChartsUpdated = "2026-11-04";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-04T19:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "CLARITY OF MIND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 20,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": -11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 22,
            "movement": 53
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 29,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 52,
            "movement": 16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 52,
            "movement": 20
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 52,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": -27
          },
          {
            "country": "FR",
            "name": "France",
            "position": 60,
            "movement": -17
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 65,
            "movement": -13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 73,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 74,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 82,
            "movement": -35
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 93,
            "movement": -49
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 104,
            "movement": -75
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": -83
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 118,
            "movement": 49
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 120,
            "movement": -27
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 120,
            "movement": -43
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 126,
            "movement": -16
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 151,
            "movement": -44
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 171,
            "movement": -110
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 196,
            "movement": -17
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
    "title": "BACK TO LAGOS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 49,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -38
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 88,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": -47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 153,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": -111
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
            "position": 134,
            "movement": -23
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
            "position": 162,
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
            "position": 142,
            "movement": 16
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
            "position": 40,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 48
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": 76
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 105,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 159,
            "movement": -47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 193,
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
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 115
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 176,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -52
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
            "position": 143,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TAKE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 25,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 75
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 37,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 66,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": 25
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 28,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 54,
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
            "position": 88,
            "movement": 9
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
            "position": 41,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5850c8b89e4f4726c16ef035da9edaf4/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 96,
            "movement": -68
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": -80
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
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
            "position": 73,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
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
            "position": 47,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -71
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
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
            "position": 133,
            "movement": 5
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
            "position": 183,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 15
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 199,
            "movement": -3
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
            "position": 85,
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
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
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
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": null,
            "status": "new"
          },
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
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
            "position": 158,
            "movement": 17
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
            "position": 44,
            "movement": 46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 3
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
            "position": 181,
            "movement": -7
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
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
            "movement": -2
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
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -7
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
            "position": 141,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 96,
            "movement": -13
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
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
            "position": 81,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 200,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
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
            "position": 27,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f913fed89932ceb56f7809aa7f811c0c/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b4fd7e67b985be9489dbf58dc74497b/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KEEP GOING",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CANADA BREEZE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 148,
            "movement": -110
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1a9dbee3a264aea0fb54aef116dfd507/500x500-000000-80-0-0.jpg"
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
  