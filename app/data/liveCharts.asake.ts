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
  export const liveChartsUpdated = "2026-10-07";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-07T06:06Z";
  
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "country": "NG",
            "name": "Nigeria",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 7,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 33,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 53,
            "movement": -12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 53,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": 12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 65,
            "movement": -28
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 67,
            "movement": 37
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 73,
            "movement": 97
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 74,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": -9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 160,
            "movement": -105
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 162,
            "movement": -87
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 163,
            "movement": -25
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 174,
            "movement": -72
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 190,
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 100,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 122,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
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
            "position": 11,
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
            "position": 8,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 167,
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
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
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
            "position": 25,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 35,
            "movement": 126
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 37,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -28
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": 56
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -58
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 112,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
            "movement": 47
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 184,
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": -44
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 153,
            "movement": 12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -2
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
            "position": 41,
            "movement": 0
          },
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
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
            "position": 55,
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
            "position": 37,
            "movement": 13
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
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 89
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 54,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": -43
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 179,
            "movement": -31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 199,
            "movement": -2
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 56,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 109,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 115,
            "movement": -47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": -50
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 133,
            "movement": -82
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": 19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "position": 20,
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
            "position": 10,
            "movement": 20
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
            "position": 7,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": -13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 142,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": -90
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
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
            "position": 192,
            "movement": -19
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
            "position": 156,
            "movement": -22
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": 109
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 100
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -56
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
            "position": 43,
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
            "position": 137,
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
            "position": 25,
            "movement": 11
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -57
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 83,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 131,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": 11
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
            "position": 27,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 40,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 83,
            "movement": 16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -55
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
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
            "position": 81,
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
            "position": 42,
            "movement": 14
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
            "position": 22,
            "movement": -5
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
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": -41
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
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
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
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
            "position": 21,
            "movement": 6
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
            "position": 129,
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
            "position": 44,
            "movement": -22
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
            "position": 26,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 46,
            "movement": 61
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -95
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 151,
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 55,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 137,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -29
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
            "position": 150,
            "movement": 9
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
            "position": 186,
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
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
            "position": 30,
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
            "position": 56,
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
            "position": 16,
            "movement": 4
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
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
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
            "position": 111,
            "movement": -3
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
            "position": 50,
            "movement": -28
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
            "position": 69,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -56
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": -53
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
            "movement": 3
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
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -12
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
            "position": 90,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
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
            "position": 57,
            "movement": 3
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
            "position": 62,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -103
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
            "movement": 3
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
            "position": 44,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 34
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
            "movement": 14
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
            "position": 63,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": -67
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
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
            "position": 46,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 114,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
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
            "position": 123,
            "movement": 13
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
            "position": 68,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -3
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
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 36
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
            "position": 89,
            "movement": -16
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
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
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
            "position": 122,
            "movement": 4
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
            "position": 56,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 24
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
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 66,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 128,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
            "movement": 8
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
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 142,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
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
            "position": 182,
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
            "position": 148,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -71
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 85,
            "movement": -8
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
            "position": 164,
            "movement": -24
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
            "movement": 44
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
            "position": 58,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
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
            "position": 95,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 5
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
            "position": 180,
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
            "position": 24,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": 6
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
            "position": 154,
            "movement": 15
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
            "position": 125,
            "movement": 4
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
            "position": 103,
            "movement": 1
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
            "position": 184,
            "movement": -8
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
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 80,
            "movement": -40
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 97,
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
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
            "position": 67,
            "movement": -15
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
            "position": 102,
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
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": 0
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
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 4
          }
        ]
      }
    ],
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
            "position": 77,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 4,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Worldwide",
    "platforms": [
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
            "position": 154,
            "movement": -12
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
            "position": 165,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 185,
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
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 4
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
            "position": 172,
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
    "title": "Getting Paid (feat. Asake, Wizkid, Skillibeng)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 188,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 123,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba (Remix)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
  