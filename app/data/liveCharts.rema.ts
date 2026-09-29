// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-29";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-29T22:19Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": 65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 28
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 83,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 146,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 37,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 76,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 199,
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
            "position": 4,
            "movement": 9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 14,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -17
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
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
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
            "position": 2,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 5,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 7,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 57,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 105,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 49,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -21
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
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 18,
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
            "position": 18,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
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
            "position": 33,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 61,
            "movement": 35
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 62,
            "movement": 31
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 75,
            "movement": 15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 89,
            "movement": 9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 100,
            "movement": -5
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
            "position": 52,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 66,
            "movement": -26
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -7
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 167,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 84,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 158,
            "movement": null,
            "status": "new"
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
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 8,
            "movement": 7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 28,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 55,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 63,
            "movement": -32
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 94,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 162,
            "movement": -45
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 198,
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 190,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 45,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 50
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": 67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 141,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -65
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
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
            "position": 198,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 32,
            "movement": 16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 59,
            "movement": 141
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": 27
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 181,
            "movement": -160
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": 83
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": -17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 128,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 59,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 107
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": -28
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 188,
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
            "position": 58,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": 48
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
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
            "position": 142,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Won Da Mo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": -79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee5b8bb977ed14449b1a4cdde235ba53/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 96
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OZEBA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses Ultra",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Commando - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
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
  