// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-13T19:46Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 13,
            "movement": 8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 13,
            "movement": 163
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 13,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": 3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 22,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 33,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 45,
            "movement": 13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 64,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 47
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 88
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": 29
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 91,
            "movement": -10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 94,
            "movement": 80
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 115,
            "movement": -69
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 117,
            "movement": -60
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 131,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 140,
            "movement": -16
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 170,
            "movement": -134
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 184,
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
            "position": 3,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 36,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 82,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 88,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 108,
            "movement": 14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 120,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 131,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": 3
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
            "position": 80,
            "movement": -67
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 188,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 31,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
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
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 37,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 38,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 47,
            "movement": 72
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 60,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 69,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 102,
            "movement": 5
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 165,
            "movement": 28
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 172,
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
            "position": 23,
            "movement": 56
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
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
            "position": 12,
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
            "position": 12,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 30,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 60
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 48,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 76,
            "movement": -51
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 173,
            "movement": 15
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
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": -55
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": 61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": -10
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
            "position": 38,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 7
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
            "position": 43,
            "movement": 16
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
            "position": 21,
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
            "position": 95,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 96
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 44
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 67,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 81,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -54
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 149,
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
            "position": 8,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 64
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": -69
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
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
            "position": 8,
            "movement": -3
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
            "position": 46,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 105,
            "movement": -43
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 130,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": 17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 128,
            "movement": -23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 136,
            "movement": -94
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
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
            "position": 12,
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
            "position": 27,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": -57
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -65
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -89
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
            "position": 45,
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
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 31
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -51
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": 7
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
            "position": 19,
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
            "position": 9,
            "movement": 101
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
            "position": 9,
            "movement": 24
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
            "position": 16,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 34,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 78,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -36
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
            "position": 124,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 116
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 35
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -54
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 118,
            "movement": 55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 154,
            "movement": -73
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": -95
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "position": 16,
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
            "position": 39,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -55
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
            "movement": 3
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
            "position": 32,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 41
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 97,
            "movement": 90
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 128,
            "movement": 26
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 36,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": 56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -44
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
            "position": 31,
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
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
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
            "position": 100,
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
            "position": 3,
            "movement": 3
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 96
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 153,
            "movement": -136
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
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
            "position": 36,
            "movement": 4
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
            "position": 69,
            "movement": -23
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
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -76
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": -44
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
            "position": 39,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playtime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": -63
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -28
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 26,
            "movement": -2
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": -30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": -16
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
            "position": 105,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 87
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -48
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
            "position": 103,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
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
            "position": 132,
            "movement": -21
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
            "position": 65,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aloe Vera",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -85
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
            "position": 78,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3074abf102bd38e5ea6f05abf2200fae/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
            "movement": 56
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
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
            "position": 125,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": 24
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
            "position": 41,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
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
            "position": 156,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2:30",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 109,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ligali",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13"
  },
  {
    "title": "Happiness (feat. Asake, Gunna)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -3
          }
        ]
      }
    ],
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
  