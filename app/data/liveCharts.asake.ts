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
  export const liveChartsUpdated = "2026-11-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-22T19:45Z";
  
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 11,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 13,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 17,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 17,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 26,
            "movement": 17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -17
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 33,
            "movement": 10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 53,
            "movement": -24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 54,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 54,
            "movement": 24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
            "movement": 29
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 67,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 84,
            "movement": 109
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 87,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 88,
            "movement": 49
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 94,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 106,
            "movement": -50
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 114,
            "movement": 14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 129,
            "movement": -71
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 164,
            "movement": -126
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 195,
            "movement": -55
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
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 67,
            "movement": 32
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": 4
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
            "position": 80,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": 15
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 168,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": -4
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
            "movement": 5
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
            "position": 81,
            "movement": -24
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
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 2
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
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 30,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 46,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 64,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 86,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 124,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 198,
            "movement": -56
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
            "position": 26,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 67,
            "movement": 25
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
            "position": 22,
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
            "position": 7,
            "movement": 48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 75,
            "movement": -37
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": -64
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": -55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 99,
            "movement": -53
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 181,
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
            "position": 10,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": 23
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 75,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -16
          },
          {
            "country": "WW",
            "name": "Worldwide",
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
            "position": 16,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 160,
            "movement": -61
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 163,
            "movement": 3
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
            "position": 7,
            "movement": 1
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -66
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": 11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 180,
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
            "position": 51,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 2
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": -31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 153,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 177,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": -50
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 131,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": 56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -55
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 193,
            "movement": -13
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
            "position": 13,
            "movement": -1
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
            "position": 5,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "position": 62,
            "movement": 2
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
            "position": 119,
            "movement": 59
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
            "position": 32,
            "movement": 39
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
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 48,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 53,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 90,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -15
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
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
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
            "position": 168,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 5
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": -59
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
            "position": 154,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": 55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 83
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": -44
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 28,
            "movement": 8
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
            "position": 41,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": -81
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
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
            "position": 24,
            "movement": 5
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": 39
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 66
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 47,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -68
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -73
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 17,
            "movement": -2
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
            "position": 60,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 74
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
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
            "position": 105,
            "movement": 30
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
            "position": 76,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 26
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
            "position": 69,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -25
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
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
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
            "position": 141,
            "movement": 18
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 72
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
            "movement": -79
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
            "position": 48,
            "movement": -2
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
            "position": 23,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 2
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
            "position": 63,
            "movement": 5
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
            "position": 92,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": 60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
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
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
            "position": 166,
            "movement": 15
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
            "position": 165,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
            "movement": -50
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
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
            "position": 65,
            "movement": 2
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
            "position": 11,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -22
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
            "position": 143,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
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
            "position": 39,
            "movement": 9
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -9
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
            "position": 146,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playtime",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -34
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 95,
            "movement": 89
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
            "position": 62,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
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
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 10
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
            "position": 171,
            "movement": -43
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
            "position": 143,
            "movement": -124
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 139,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
            "position": 63,
            "movement": 65
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 7
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
            "position": 99,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 64,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Great Guy",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 152,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
            "position": 179,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Iskolodo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
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
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 65,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-22"
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
  