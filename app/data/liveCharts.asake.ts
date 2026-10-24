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
  export const liveChartsBuiltAt = "2026-10-24T11:07Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "NE",
            "name": "Niger",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 34
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 24,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 28,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 31,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 41,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 47,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 48,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 51,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 51,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 78,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 94,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 95,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 126,
            "movement": 22
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 135,
            "movement": 27
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 187,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 188,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 188,
            "movement": 0
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
            "position": 42,
            "movement": -19
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
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 38,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 135,
            "movement": 0
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
            "movement": 2
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
            "position": 54,
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
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 0
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 56,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 84,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 124,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 135,
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
            "position": 12,
            "movement": 2
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
            "movement": -8
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
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 26,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 93,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 111,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 146,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 154,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 173,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 182,
            "movement": 0
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 138,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 163,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
            "movement": 0
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
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
            "position": 44,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 24
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
            "position": 60,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 139,
            "movement": 0
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
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 101,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
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
            "position": 110,
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
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 38,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 59,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 156,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
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
            "position": 131,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": 0
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
            "position": 41,
            "movement": -19
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
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": 0
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
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
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
            "position": 22,
            "movement": 6
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
            "position": 64,
            "movement": -21
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
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
            "position": 21,
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
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
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
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
            "position": 45,
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
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 136,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
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
            "position": 122,
            "movement": -4
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 0
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 96,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 150,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": 0
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
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 0
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
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
            "position": 90,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": 0
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
            "position": 68,
            "movement": 7
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
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
            "position": 123,
            "movement": -1
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
            "position": 42,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 147,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
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
            "position": 72,
            "movement": -2
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
            "position": 36,
            "movement": -17
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
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
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
            "position": 46,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
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
            "position": 43,
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
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
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
            "position": 170,
            "movement": 12
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
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
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
            "position": 175,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 0
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
            "position": 74,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
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
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
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
            "position": 49,
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
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
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
            "position": 142,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 194,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": 0
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
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
            "position": 116,
            "movement": 11
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
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
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
            "position": 113,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
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
            "position": 60,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 142,
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
            "position": 173,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/378f569589ef115812041d5044282ced/500x500-000000-80-0-0.jpg"
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
            "position": 107,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": 10
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
            "position": 114,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 18
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
            "position": 196,
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
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
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
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
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
    "title": "Che Che",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
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
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gold",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 170,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": -96
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
  