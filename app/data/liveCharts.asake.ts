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
  export const liveChartsUpdated = "2026-11-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-15T18:56Z";
  
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
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 7,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 9,
            "movement": 83
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 48
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 15,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 22,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 24,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 27,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 33,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 36,
            "movement": 61
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 45,
            "movement": 19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 52,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 59,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": 14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 89,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 95,
            "movement": -17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 124,
            "movement": -14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": -69
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 159,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 173,
            "movement": 27
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 179,
            "movement": -128
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 197,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 2
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 132,
            "movement": 57
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": -3
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
            "position": 64,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 133,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 134,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 164,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
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
            "position": 5,
            "movement": -1
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
            "position": 55,
            "movement": -29
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 44,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 85,
            "movement": -25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 111,
            "movement": -64
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 129,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 144,
            "movement": 54
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 191,
            "movement": -34
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
            "movement": -1
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
            "position": 18,
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
            "position": 14,
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
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 68
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 24
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 48,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 89
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": 40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": -22
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": -85
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
            "movement": -1
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
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -34
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 71,
            "movement": 77
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -44
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 112,
            "movement": -31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 113,
            "movement": -33
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 166,
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
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 93,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 11
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
            "position": 42,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": 17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 165,
            "movement": -77
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "position": 44,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 69
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 24
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
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
            "position": 9,
            "movement": -1
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
            "position": 80,
            "movement": -19
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
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
            "position": 194,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 182,
            "movement": 6
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
            "position": 13,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
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
            "position": 54,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 18,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 44
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 157,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -105
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": 22
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
            "movement": -22
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
            "position": 24,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": 13
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
            "position": 46,
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
            "position": 45,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": 81
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -104
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 15,
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
            "position": 95,
            "movement": -89
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
            "position": 18,
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
    "title": "Eja Meja",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -75
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
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
            "position": 18,
            "movement": -4
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
            "position": 190,
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
            "position": 31,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": 58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": 3
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
            "position": 127,
            "movement": -8
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
            "position": 62,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 107
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
            "position": 30,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 103
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 191,
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 68
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": -51
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
            "position": 4,
            "movement": -1
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
            "position": 30,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
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
            "position": 31,
            "movement": -1
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
            "position": 104,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
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
            "movement": -4
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
            "position": 90,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 36,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 143,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": 15
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
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -18
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
            "position": 68,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": -34
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
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 186,
            "movement": 1
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
            "position": 10,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 51,
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
            "position": 197,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 86
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
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
            "position": 163,
            "movement": -122
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
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
            "position": 51,
            "movement": -10
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
            "position": 27,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
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
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
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
    "title": "Terminator",
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
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -33
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
            "movement": -6
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
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
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
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aloe Vera",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -44
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
            "position": 183,
            "movement": -42
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
            "position": 179,
            "movement": -43
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": -135
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": -12
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
            "position": 172,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "movement": -4
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
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 172,
            "movement": -13
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
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 101,
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
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 164,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 172,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PALAZZO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0bcd709f154f3696394779095ad0c3c9/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Uhh Yeahh",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -129
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": null,
            "status": "new"
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
            "position": 12,
            "movement": -1
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
  