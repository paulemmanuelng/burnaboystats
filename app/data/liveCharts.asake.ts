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
  export const liveChartsBuiltAt = "2026-11-24T09:59Z";
  
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
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 36,
            "movement": -10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 48,
            "movement": -15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 57,
            "movement": 30
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 74,
            "movement": -21
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 88,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 91,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 92,
            "movement": -38
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 96,
            "movement": -29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 107,
            "movement": 88
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 111,
            "movement": -23
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 111,
            "movement": -45
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 160,
            "movement": -106
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 167,
            "movement": -101
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 180,
            "movement": -74
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
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 49,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 180,
            "movement": -8
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
            "movement": -9
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
            "movement": 20
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
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
            "position": 35,
            "movement": -7
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
            "position": 27,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 61,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": -6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 107,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": -23
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 126,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 158,
            "movement": -56
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 28,
            "movement": 0
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
            "position": 20,
            "movement": 2
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
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 62
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 28,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 76,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": -31
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 90,
            "movement": -60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": -40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -62
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": -25
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": 18
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
            "position": 26,
            "movement": null,
            "status": "new"
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
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 38,
            "movement": 66
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 108,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": -55
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": -92
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 185,
            "movement": -22
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
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 26
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 38,
            "movement": 142
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": 30
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
            "movement": 0
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
            "movement": -3
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 14,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 93
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 45,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 82
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": -50
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": 6
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 145,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": 30
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
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": 27
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 48,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 66,
            "movement": 24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 75,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -46
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
            "position": 173,
            "movement": -5
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
            "position": 10,
            "movement": 0
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 95
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 113,
            "movement": -68
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": -42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 159,
            "movement": -66
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -100
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 179,
            "movement": -38
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
            "position": 153,
            "movement": 1
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 133
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 113,
            "movement": -66
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": -92
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": -39
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
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
            "position": 69,
            "movement": -7
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 0
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
            "position": 27,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": -7
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
            "position": 41,
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
            "position": 13,
            "movement": 0
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
            "position": 6,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -45
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
            "position": 27,
            "movement": 1
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
            "position": 58,
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
            "position": 43,
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
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 83
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
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
            "movement": -5
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -11
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
            "movement": -16
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
            "position": 96,
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
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 81
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": -78
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -47
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 169,
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
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": -42
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
            "position": 34,
            "movement": -2
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
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
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
            "position": 40,
            "movement": 8
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 64,
            "movement": -1
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
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
            "position": 137,
            "movement": 4
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
            "position": 55,
            "movement": 1
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
            "position": 93,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
            "position": 180,
            "movement": -14
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
            "position": 15,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": 17
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": 82
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": -35
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 195,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": -55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -3
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
            "position": 15,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
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
            "position": 145,
            "movement": -2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": -49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
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
            "position": 134,
            "movement": 12
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
            "position": 72,
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
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": -70
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
            "position": 37,
            "movement": 2
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
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
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
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
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
            "position": 97,
            "movement": 2
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
            "position": 148,
            "movement": -26
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
            "position": 171,
            "movement": -106
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
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
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
            "position": 17,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
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
            "position": 58,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 150,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 68,
            "movement": 111
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Great Guy",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 45,
            "movement": 0
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
            "position": 140,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
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
    "title": "Active",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JO",
            "name": "Jordan",
            "position": 98,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": 6
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
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
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
            "position": 32,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Introduction",
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
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": null,
            "status": "new"
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
            "position": 133,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
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
            "position": 124,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bust Down",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aab01b2d1bb04ed44066415cd622b0b6/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": -101
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6b04fbaad81f83fdadd181d00c1d9aef/500x500-000000-80-0-0.jpg"
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
  