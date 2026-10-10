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
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T21:49Z";
  
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 91,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 125,
            "movement": -62
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
            "movement": -129
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
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 21,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 92,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
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
            "country": "BM",
            "name": "Bermuda",
            "position": 51,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
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
            "position": 10,
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
            "position": 7,
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
            "movement": 2
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
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
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
            "position": 14,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
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
            "position": 37,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 185,
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
            "position": 21,
            "movement": 58
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 28,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": -7
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 52,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 70,
            "movement": 4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 83,
            "movement": -24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 101,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 128,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 181,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -96
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
            "position": 35,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -113
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 82,
            "movement": 4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 165,
            "movement": 10
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
            "position": 46,
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
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 16,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 53,
            "movement": -29
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 54,
            "movement": -39
          },
          {
            "country": "FR",
            "name": "France",
            "position": 56,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 71,
            "movement": -8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 97,
            "movement": -16
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": 58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 156,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": -29
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
            "country": "YE",
            "name": "Yemen",
            "position": 34,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
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
            "position": 74,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": -22
          },
          {
            "country": "SR",
            "name": "Suriname",
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
            "position": 193,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 183,
            "movement": -9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 185,
            "movement": -6
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
            "position": 65,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 53,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 86,
            "movement": -72
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -123
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 86,
            "movement": -1
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
            "position": 193,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": 8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 74,
            "movement": 91
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 110,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 173,
            "movement": -33
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 174,
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
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 44
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
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
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -40
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
            "position": 63,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 38
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
            "movement": -24
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
            "position": 81,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 21
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 184,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 198,
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
            "position": 95,
            "movement": -75
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
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
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
            "position": 28,
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
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 5
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
            "position": 57,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
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
            "position": 70,
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
            "position": 80,
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
    "title": "Another life",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5382ae925c6d46c77343417f8c7232f4/500x500-000000-80-0-0.jpg"
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
            "position": 118,
            "movement": 60
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Reason You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
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
            "position": 128,
            "movement": 62
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OZEBA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 141,
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
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": 41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alien",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dd11f8ffe79111fbeedfcd39cf8f3bb9/500x500-000000-80-0-0.jpg"
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
            "position": 19,
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
            "position": 162,
            "movement": 15
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
  