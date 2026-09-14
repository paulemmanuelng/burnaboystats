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
  export const liveChartsUpdated = "2026-09-14";
  
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 10,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 61,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 62,
            "movement": 64
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": -27
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 102,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": -41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": 37
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 128,
            "movement": -28
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
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
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 142,
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
            "position": 13,
            "movement": 79
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 39,
            "movement": -16
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 6
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
            "position": 17,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
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
            "position": 24,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -24
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 138,
            "movement": 0
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
            "position": 12,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -2
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
            "position": 14,
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
            "position": 96,
            "movement": -63
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 27,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 35,
            "movement": -21
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 41,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 48,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 86,
            "movement": 66
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 138,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": 12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 172,
            "movement": 22
          },
          {
            "country": "YE",
            "name": "Yemen",
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
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 36
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 171,
            "movement": 20
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 174,
            "movement": -26
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
            "position": 197,
            "movement": -25
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
            "position": 41,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 48,
            "movement": 92
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 98
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 101,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 149,
            "movement": -79
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 156,
            "movement": -37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": -57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -28
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
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -12
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 83,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": -118
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
            "position": 12,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 187,
            "movement": -102
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CA",
            "name": "Canada",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 88,
            "movement": -37
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 97,
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
            "position": 159,
            "movement": -37
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 196,
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
            "position": 24,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -6
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
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": 33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 145,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
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
            "position": 138,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 30
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -8
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
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": -54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": 33
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 180,
            "movement": 16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 10
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
            "position": 199,
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
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 8
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
            "movement": 87
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
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
            "position": 151,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -6
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
            "position": 67,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 78,
            "movement": 100
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": -130
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
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
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 83
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
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
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
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
    "title": "FUN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": -60
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
            "position": 50,
            "movement": 5
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
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
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
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
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
            "position": 121,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goals",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": 86
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 169,
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
    "title": "KELEBU",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9762353430bf3c5816735dca5d916a96/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/159a067af3e7b92c6a6b45c576968b09/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AZAMAN",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PH",
            "name": "Philippines",
            "position": 69,
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
    "title": "Oroma Baby",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
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
            "position": 121,
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
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rizzla",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1e0b6213b1da0d39bb35f07b9e6f5d48/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BUBALU",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PE",
            "name": "Peru",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56f2de197c8f55917c66611779ff876c/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
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
            "position": 185,
            "movement": 1
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
  