// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-09-12";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 21
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 34
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 63
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 162,
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
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 180,
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
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 76,
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
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": -6
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
            "position": 34,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 138,
            "movement": -25
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
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -117
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
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
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
            "position": 15,
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
            "position": 71,
            "movement": null,
            "status": "new"
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 15,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 22,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 33,
            "movement": -23
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 72,
            "movement": -42
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 136,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -10
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 180,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
            "movement": 9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 121,
            "movement": 23
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 36
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 171,
            "movement": 20
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 133,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 153,
            "movement": 25
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VN",
            "name": "Vietnam",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
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
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 65
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 100,
            "movement": 27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 196,
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
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 8
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 76,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 176,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 101,
            "movement": -62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -33
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": 2
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
            "country": "OM",
            "name": "Oman",
            "position": 35,
            "movement": 89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 63
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": 111
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 183,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 19
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": -17
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
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 96,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 160,
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
            "country": "CA",
            "name": "Canada",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
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
            "position": 112,
            "movement": -89
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 193,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -32
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 164,
            "movement": -77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
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
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 166,
            "movement": -6
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
            "position": 24,
            "movement": 41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -29
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
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
            "position": 179,
            "movement": 0
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
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
            "position": 36,
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
            "position": 53,
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
            "position": 46,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
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
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": 4
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
            "position": 144,
            "movement": -71
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
            "position": 43,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
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
            "position": 153,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goals",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8d26b51a325ab59c594708d1c8c71bf2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
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
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": 26
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
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
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
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "KELEBU",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9762353430bf3c5816735dca5d916a96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Commando",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/159a067af3e7b92c6a6b45c576968b09/500x500-000000-80-0-0.jpg"
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
            "position": 147,
            "movement": -12
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
            "country": "LR",
            "name": "Liberia",
            "position": 170,
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
    "title": "Bad Commando - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -1
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  