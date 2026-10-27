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
  export const liveChartsUpdated = "2026-10-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-27T22:18Z";
  
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
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
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 11,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": -14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 33,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 40,
            "movement": -25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 43,
            "movement": -27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 49,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 55,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 58,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 61,
            "movement": 44
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 74,
            "movement": -11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 85,
            "movement": -29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 90,
            "movement": -68
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 90,
            "movement": 6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 113,
            "movement": -36
          },
          {
            "country": "FR",
            "name": "France",
            "position": 119,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 148,
            "movement": -33
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 153,
            "movement": -69
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 166,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": -128
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "position": 4,
            "movement": -1
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
            "position": 124,
            "movement": -22
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 2
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
            "position": 12,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 49,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 76,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
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
            "position": 53,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": 49
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 117,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
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
            "position": 5,
            "movement": 0
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
            "position": 7,
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
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": 59
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 127,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -35
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": -46
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 193,
            "movement": -15
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 6
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
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
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
            "position": 53,
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
            "position": 10,
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
            "position": 47,
            "movement": null,
            "status": "re"
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
            "position": 8,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 42,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 103,
            "movement": 66
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": -46
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": -66
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 57,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 72,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 155,
            "movement": 17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 181,
            "movement": -57
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
            "position": 14,
            "movement": -4
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
            "position": 41,
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
            "position": 8,
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
            "position": 10,
            "movement": -1
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -45
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 106,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": 41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -53
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
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
            "position": 16,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -32
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 43,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 108,
            "movement": -34
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": -75
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "position": 9,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 3
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
            "position": 12,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 102,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": 21
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
            "position": 2,
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": -14
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
            "position": 130,
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": 9
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
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -14
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
            "position": 15,
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
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 31,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": 10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 71,
            "movement": 28
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 87,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
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
            "position": 137,
            "movement": -15
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 17
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 79,
            "movement": 25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 134,
            "movement": -85
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 45
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -94
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
            "position": 115,
            "movement": 17
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 59,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -50
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -42
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 108,
            "movement": 64
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -132
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
            "position": 5,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
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
            "position": 46,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 43,
            "movement": 1
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
            "position": 40,
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
            "position": 30,
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
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
            "position": 16,
            "movement": 1
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
            "position": 39,
            "movement": -12
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
            "position": 20,
            "movement": 14
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
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
            "position": 20,
            "movement": 6
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
            "position": 163,
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
            "position": 33,
            "movement": -2
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
            "position": 16,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": -78
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": 28
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
            "position": 21,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 64
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": 12
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
            "position": 83,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 6
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
            "movement": 1
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
            "position": 35,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "movement": -8
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
            "position": 54,
            "movement": -6
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
            "position": 190,
            "movement": 4
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
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
            "movement": -100
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
            "position": 100,
            "movement": 5
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
            "position": 187,
            "movement": -168
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": -81
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": 10
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
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
            "position": 83,
            "movement": -11
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
            "position": 27,
            "movement": -19
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": -87
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": -92
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
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
            "position": 172,
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
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
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
            "position": 56,
            "movement": -2
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
            "country": "SN",
            "name": "Senegal",
            "position": 56,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": 24
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
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 200,
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
            "position": 122,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
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
            "position": 178,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
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
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 20
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
            "position": 27,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 197,
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
            "position": 107,
            "movement": -7
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
            "position": 2,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
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
            "position": 141,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 64,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
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
            "position": 152,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 11,
            "movement": 21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": 43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": -25
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
            "position": 41,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 101,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 197,
            "movement": 3
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
            "position": 96,
            "movement": -4
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
            "position": 137,
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
            "position": 189,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/378f569589ef115812041d5044282ced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yoga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wave",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "position": 127,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Olorun",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 157,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 180,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": -6
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
            "position": 6,
            "movement": 0
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
  