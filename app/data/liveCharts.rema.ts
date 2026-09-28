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
  export const liveChartsUpdated = "2026-09-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-28T14:01Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
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
            "position": 6,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 61,
            "movement": -20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 63,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": 21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
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
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 34,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 52,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 185,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
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
            "position": 3,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
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
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": -29
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
            "position": 6,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -150
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
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
            "position": 27,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 11,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 69,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 149,
            "movement": -69
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 155,
            "movement": 21
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
            "position": 58,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 123
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 59
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 131,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -60
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 181,
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
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 15,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 31,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 42,
            "movement": -13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 70,
            "movement": -26
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 74,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 68,
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
            "position": 161,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 65
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 194,
            "movement": -147
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
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 200,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 35,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": 7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 91,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 198,
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
            "position": 152,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 63,
            "movement": 50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 149,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": -45
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 142,
            "movement": 10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 160,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
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
            "position": 78,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 187,
            "movement": -119
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
            "position": 57,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": 60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
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
            "position": 116,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
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
            "position": 138,
            "movement": 20
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
            "position": 178,
            "movement": -148
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 96,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -5
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
            "position": 48,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 5
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
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Commando - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 59
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee5b8bb977ed14449b1a4cdde235ba53/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
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
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album"
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
  