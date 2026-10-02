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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T05:43Z";
  
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": 2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 102,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -46
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 131,
            "movement": -24
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 169,
            "movement": -70
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
            "movement": 52
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 139
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -16
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 10,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 22,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 104,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -41
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
            "position": 106,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 140,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
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
            "country": "FR",
            "name": "France",
            "position": 81,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -41
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
            "position": 38,
            "movement": -33
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
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": -41
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
            "position": 33,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
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
            "position": 22,
            "movement": 9
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
            "position": 25,
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
            "position": 57,
            "movement": 11
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
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 85,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 132,
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
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": 0
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 19,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": 29
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 27,
            "movement": -13
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": 17
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 19
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 143,
            "movement": -54
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 102,
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
            "country": "PH",
            "name": "Philippines",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 115,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -73
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": -54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -67
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
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 144,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 194,
            "movement": -75
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
            "movement": -77
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 56,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": -98
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": -68
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
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
            "position": 14,
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
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 71,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
            "movement": -124
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -114
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
            "position": 114,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -12
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
            "position": 82,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -89
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
            "position": 125,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
            "position": 169,
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -11
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
            "position": 154,
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
            "position": 65,
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
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -102
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
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
            "position": 166,
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
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -48
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
            "position": 184,
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
            "position": 187,
            "movement": -1
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
  