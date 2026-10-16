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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-16";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-16T04:36Z";
  
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
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 9,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 11,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 15
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 14,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": -9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 33,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 42,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 51,
            "movement": -24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 64,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 96,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 146,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 185,
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
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 151,
            "movement": -23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 186,
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
            "position": 47,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 120,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 147
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -25
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
            "position": 42,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 34,
            "movement": 43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 58
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 60,
            "movement": 98
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 80,
            "movement": 42
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 81,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -42
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 99,
            "movement": 36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": -88
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 166,
            "movement": -51
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 51,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 54,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 24
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": 45
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": 18
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
            "movement": -31
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 164,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 182,
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
            "position": 19,
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
            "position": 25,
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
            "position": 11,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 5,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": 2
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
            "position": 48,
            "movement": 64
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 58
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -26
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 91,
            "movement": -28
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -124
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 172,
            "movement": -52
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
            "position": 10,
            "movement": 0
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
            "position": 34,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 34,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 128,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 150,
            "movement": -84
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
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
            "position": 20,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 199,
            "movement": -14
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
            "position": 42,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": null,
            "status": "re"
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
            "position": 13,
            "movement": 173
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
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
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 87
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 19
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 80,
            "movement": 113
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": -85
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -103
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 32
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": -48
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 199,
            "movement": -174
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 25
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
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
            "position": 5,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": 0
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
            "position": 10,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 90,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 44
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 111,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 158,
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
            "position": 152,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 16,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
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
            "position": 34,
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
            "position": 56,
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
            "position": 17,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "position": 25,
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
            "position": 155,
            "movement": -6
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
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": 46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 131,
            "movement": -43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
            "movement": -42
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -148
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
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
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
            "position": 56,
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
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 21,
            "movement": 51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
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
            "position": 72,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
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
            "position": 67,
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
            "position": 9,
            "movement": 83
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": 2
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
            "position": 32,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 62,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
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
            "position": 113,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 24,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -55
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -43
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -21
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
            "position": 85,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 8,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
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
            "position": 33,
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
            "position": 23,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": 57
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 79
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -47
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 49,
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
            "position": 47,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 47,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
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
            "position": 100,
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
            "position": 40,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 7,
            "movement": 118
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 105,
            "movement": 19
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
            "position": 58,
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
            "position": 69,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 36,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 81
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": -17
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -57
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 66,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -70
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 92,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 63,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 93,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": 48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -50
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
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 91,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
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
            "position": 188,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 40,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
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
            "position": 157,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 116,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": 3
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
            "position": 165,
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
            "position": 159,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 196,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
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
            "position": 117,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 147,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 73,
            "movement": -4
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
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 77,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": -7
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
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 95,
            "movement": -2
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Olorun",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 165,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 11,
            "movement": 147
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 128,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 170,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "position": 200,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
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
  