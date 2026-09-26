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
  export const liveChartsUpdated = "2026-09-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-26T11:29Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
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
            "position": 1,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 11,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": 14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 32,
            "movement": 21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": 10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 47,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 52,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": -58
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": 56
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 80,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 119,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 145,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 196,
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
            "movement": -1
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 51,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 93,
            "movement": -25
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 138,
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
            "position": 46,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 84,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 106,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 180,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
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
            "position": 11,
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
            "position": 40,
            "movement": -33
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
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 45,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 92,
            "movement": -59
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 94,
            "movement": 100
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": -34
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 163,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": -29
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
            "movement": 2
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
            "position": 28,
            "movement": -10
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -11
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
            "position": 25,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 47,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 56,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": -37
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 92,
            "movement": 94
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 94,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": -35
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 137,
            "movement": -45
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 147,
            "movement": -25
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 164,
            "movement": 30
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
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 7
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
            "position": 6,
            "movement": -3
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
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 8
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": 21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": -42
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 198,
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
            "movement": 0
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 167,
            "movement": -30
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
            "position": 54,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -9
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -2
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
            "position": 59,
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
            "position": 38,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -63
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": -69
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 160,
            "movement": -60
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
            "position": 131,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 4
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": -23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 121,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 143,
            "movement": -48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
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
            "position": 122,
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
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": -26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 152,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": 28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
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
            "position": 23,
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
            "position": 38,
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
            "position": 53,
            "movement": 10
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 30,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 46
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 46,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": -16
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": -25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 143,
            "movement": -41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
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
            "position": 80,
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
            "position": 37,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": -42
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": -32
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
            "position": 68,
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -51
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": -63
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
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
            "position": 7,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -41
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 107,
            "movement": -101
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -72
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
            "movement": -20
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
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
            "position": 41,
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
            "position": 67,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
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
            "position": 15,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 51,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 48,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 97
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -68
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
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
            "position": 88,
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
            "position": 23,
            "movement": 61
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 48,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 70,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 107,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -57
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": -61
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -26
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
            "position": 110,
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
            "position": 31,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -81
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
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
            "position": 27,
            "movement": 0
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
            "position": 112,
            "movement": -11
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
            "position": 54,
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
            "position": 22,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 17,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": -27
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
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
            "position": 61,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "TD",
            "name": "Chad",
            "position": 29,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": -36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -47
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 83,
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
            "position": 80,
            "movement": -4
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
            "position": 194,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -23
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
            "position": 82,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 81,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
            "movement": -62
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
            "position": 98,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": -27
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
            "movement": 7
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
            "position": 143,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
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
            "position": 140,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
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
            "position": 47,
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
            "position": 81,
            "movement": 56
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 165,
            "movement": -71
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 73,
            "movement": -6
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
            "position": 67,
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": 67
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 2
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
            "position": 51,
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
            "position": 47,
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
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 100,
            "movement": 1
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
            "position": 137,
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
            "position": 22,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 103,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -64
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
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
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
            "position": 137,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 68,
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
            "position": 75,
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
            "position": 89,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 33,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": 17
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
            "position": 66,
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
    "title": "Getting Paid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 164,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
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
            "position": 5,
            "movement": -3
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 114,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 186,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
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
            "position": 176,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -50
          }
        ]
      }
    ],
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
  