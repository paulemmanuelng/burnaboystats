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
  export const liveChartsUpdated = "2026-11-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-24T22:31Z";
  
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 15,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 15,
            "movement": 165
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": 21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": 54
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 25,
            "movement": 11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 26,
            "movement": 44
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 28,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 30,
            "movement": 62
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 69,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 87,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 87,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 100,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 124,
            "movement": -13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 169,
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
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 37,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 96,
            "movement": 78
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
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
            "position": 79,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 154,
            "movement": 6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 154,
            "movement": 14
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
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": -19
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
            "position": 11,
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
            "position": 95,
            "movement": 74
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 34,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 46,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": 31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 110,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": 26
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
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
            "position": 23,
            "movement": -3
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
            "position": 16,
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
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 35,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 60,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 63
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": 45
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -49
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
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 45,
            "movement": 40
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 52,
            "movement": 24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": 41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -60
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": -21
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 146,
            "movement": -56
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -70
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
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
            "position": 5,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 54,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -7
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
            "position": 11,
            "movement": -1
          },
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
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 115,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": -22
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 183,
            "movement": 4
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 53,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 130,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
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
            "position": 60,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 4,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 69,
            "movement": -55
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -21
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 78,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -71
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": -49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 162,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -64
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 187,
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": -25
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
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 26,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 60,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 75,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 119,
            "movement": -53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": 38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
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
            "position": 187,
            "movement": -14
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
            "position": 21,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 2
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
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
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
            "movement": 7
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
            "position": 86,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -51
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
            "position": 198,
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
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
            "position": 30,
            "movement": -3
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
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": -49
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 109
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": -33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 25,
            "movement": 4
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
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 130,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -18
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 173,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
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
            "position": 172,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
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
            "position": 141,
            "movement": -4
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
            "position": 59,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 83
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -76
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
            "position": 121,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
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
            "position": 29,
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
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": -42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -95
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": 41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
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
            "position": 70,
            "movement": -6
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
            "position": 104,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -1
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
            "movement": -1
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
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": -9
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
            "position": 67,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
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
            "position": 176,
            "movement": 4
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
            "position": 76,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 0
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
            "position": 29,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
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
            "position": 133,
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
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 7
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
            "position": 74,
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
            "position": 44,
            "movement": 28
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
            "position": 126,
            "movement": 22
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 108,
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
            "position": 70,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
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
            "movement": -3
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
            "position": 75,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": 51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
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
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": 85
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
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -12
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
            "position": 108,
            "movement": 9
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
            "position": 149,
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
    "title": "Blessings",
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 104,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 168,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 81
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
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
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2:30",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -91
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sunshine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -91
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
  