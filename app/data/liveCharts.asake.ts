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
  export const liveChartsUpdated = "2026-10-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-03T16:21Z";
  
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
            "movement": -1
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
            "position": 3,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": 5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 30,
            "movement": -11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 31,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 32,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 35,
            "movement": -18
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 37,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 45,
            "movement": 126
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 53,
            "movement": -42
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 60,
            "movement": 10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 60,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 77,
            "movement": -37
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 120,
            "movement": -22
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 121,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 132,
            "movement": -37
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 154,
            "movement": -46
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 161,
            "movement": 9
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 168,
            "movement": -42
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 180,
            "movement": -151
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 168,
            "movement": -24
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
            "position": 3,
            "movement": 10
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 0
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 81,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 86,
            "movement": 40
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
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
            "position": 35,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 93,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 141,
            "movement": 4
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
            "position": 60,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -61
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
            "position": 3,
            "movement": 14
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": 1
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 102,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 126,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 146,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
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
            "movement": -4
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
            "movement": -6
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
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 15,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 90
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": -43
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 93,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 188,
            "movement": -115
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": -31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": -31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": -21
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
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
            "position": 39,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 40,
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
            "position": 50,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 76
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 20
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 38,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 159,
            "movement": 9
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
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 93,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 146,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 146,
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
            "position": 162,
            "movement": -7
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
            "position": 57,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": 56
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
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
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 48,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 79,
            "movement": 90
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": 14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 140,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
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
            "position": 74,
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
            "position": 19,
            "movement": 59
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
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
            "position": 5,
            "movement": 22
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
            "position": 32,
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
            "position": 118,
            "movement": -10
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
            "position": 36,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 43,
            "movement": 70
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 60,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 55
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": -102
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": -44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 24,
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
            "position": 62,
            "movement": 21
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
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 32,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": 26
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 120,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
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
            "position": 130,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
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
            "movement": 76
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 191,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 117
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": -61
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
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
            "position": 28,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 76,
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
            "movement": -4
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
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 19
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
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 104,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -17
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
            "position": 76,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
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
            "position": 52,
            "movement": -4
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
            "position": 37,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
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
            "position": 48,
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
            "position": 75,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 21,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -67
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": -53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
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
            "position": 50,
            "movement": -5
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
            "position": 67,
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
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
            "position": 121,
            "movement": -9
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
            "position": 65,
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
            "position": 199,
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
            "position": 55,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 28,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
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
            "position": 28,
            "movement": -2
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
            "position": 147,
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
            "position": 99,
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
            "position": 30,
            "movement": -8
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -36
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": -70
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 88
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 115,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ikebe",
    "platforms": [
      {
        "platform": "Apple Music",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": 54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
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
            "position": 118,
            "movement": -4
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
            "position": 65,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": -50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
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
            "position": 120,
            "movement": 6
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
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 171,
            "movement": -18
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
            "position": 137,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 96
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": -43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 109,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 69
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
            "position": 49,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 37,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 81,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 78
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -21
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
            "position": 155,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -26
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
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 88
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
            "position": 98,
            "movement": 0
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
            "position": 59,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 125,
            "movement": -10
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
            "position": 168,
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
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 82,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 95,
            "movement": -11
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
            "position": 181,
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
            "position": 94,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 177,
            "movement": -7
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
            "position": 17,
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
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -3
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
            "position": 153,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "movement": -5
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
            "position": 171,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 128,
            "movement": 8
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
            "position": 169,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 15
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
            "position": 81,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 187,
            "movement": -117
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
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
            "position": 36,
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
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": 8
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
            "position": 154,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wave",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 164,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ligali",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 181,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 185,
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
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": -50
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
  