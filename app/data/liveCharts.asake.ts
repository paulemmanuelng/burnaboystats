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
  export const liveChartsUpdated = "2026-10-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-24T20:54Z";
  
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -1
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
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 10,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 15,
            "movement": 173
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 17,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 21,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": -20
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 41,
            "movement": -17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 46,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 54,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 60,
            "movement": -13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 62,
            "movement": -31
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 67,
            "movement": -16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 72,
            "movement": 22
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 96,
            "movement": -57
          },
          {
            "country": "FR",
            "name": "France",
            "position": 108,
            "movement": 33
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 133,
            "movement": 19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 196,
            "movement": -8
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
            "position": 48,
            "movement": -16
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 49,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": -26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 160,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
            "movement": -8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 113,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -7
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 58,
            "movement": -7
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
            "position": 5,
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
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
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
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 42,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 62,
            "movement": 62
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": 27
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 84,
            "movement": 51
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": -28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 174,
            "movement": -90
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
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
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
            "position": 13,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 62,
            "movement": -7
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
            "position": 9,
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
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 74
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 56,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 60
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": 48
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": -56
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 26
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 196,
            "movement": -6
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
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
            "position": 51,
            "movement": -7
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
            "position": 12,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 35
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
            "position": 11,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 41,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 42,
            "movement": 97
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -123
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 165,
            "movement": null,
            "status": "new"
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
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 27,
            "movement": 108
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -46
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": -15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 138,
            "movement": 44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": -82
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 164,
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
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 54,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 82,
            "movement": 16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": 61
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 137,
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
            "position": 16,
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
            "position": 47,
            "movement": -16
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": -56
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
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 91,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
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
            "position": 2,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": 54
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": 29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 101,
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
            "position": 106,
            "movement": 4
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
            "position": 70,
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
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 18,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 51,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": 48
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 145,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
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
            "position": 14,
            "movement": 16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
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
            "position": 142,
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -10
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": -54
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 19
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": -46
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": 18
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
            "position": 7,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": -59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": -30
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
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
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
            "position": 41,
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -85
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 61
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
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
            "position": 21,
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
            "position": 65,
            "movement": -9
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
            "movement": 49
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
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
            "position": 15,
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
            "position": 26,
            "movement": 12
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
            "position": 34,
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 87
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": 76
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
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
            "position": 22,
            "movement": -1
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
            "position": 31,
            "movement": 0
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
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": -51
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -67
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": -24
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
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 33,
            "movement": -1
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
            "position": 16,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -63
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -32
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
            "position": 62,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
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
            "movement": -6
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
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 73
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 45,
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
            "position": 61,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": 63
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": 32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": 2
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
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
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
            "position": 43,
            "movement": -3
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
            "position": 13,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
            "movement": -32
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
            "position": 66,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -12
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
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 59
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 126,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": 8
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
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 81
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 32
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -52
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
            "movement": -1
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
            "position": 54,
            "movement": -29
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
            "position": 21,
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
            "position": 8,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 70
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 118,
            "movement": -5
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
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -7
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
            "position": 50,
            "movement": -1
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
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -160
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 185,
            "movement": -10
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
            "country": "ML",
            "name": "Mali",
            "position": 170,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
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
            "position": 96,
            "movement": 16
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
            "position": 77,
            "movement": -18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
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
            "position": 175,
            "movement": -5
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
            "position": 38,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
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
            "position": 50,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
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
            "position": 131,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
            "movement": -95
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": -68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 11
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
            "position": 47,
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
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
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
            "position": 162,
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
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
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
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
            "position": 177,
            "movement": -4
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
            "position": 49,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -1
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
            "position": 155,
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
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 21
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
            "position": 38,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
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
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": -26
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
            "position": 182,
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
            "position": 111,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 131,
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
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 6
          }
        ]
      }
    ],
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 161
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/378f569589ef115812041d5044282ced/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
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
            "country": "GH",
            "name": "Ghana",
            "position": 4,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
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
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 169,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -120
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
  