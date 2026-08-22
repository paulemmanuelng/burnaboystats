// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=wizkid from kworb's artist page.
  //
  // PLATFORM chart data for Wizkid: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-08-22";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 77,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 80,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 84,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 89,
            "movement": 9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 93,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 96,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 109,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 115,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 121,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 124,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 124,
            "movement": 11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 127,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 127,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 159,
            "movement": -15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 163,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 181,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 38,
            "movement": 37
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 53,
            "movement": 77
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 61,
            "movement": -31
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 75,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 126,
            "movement": -78
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 126,
            "movement": 17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 151,
            "movement": 19
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 160,
            "movement": 16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 163,
            "movement": -18
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 166,
            "movement": -128
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -16
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 183,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 188,
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
            "country": "MN",
            "name": "Mongolia",
            "position": 71,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 138,
            "movement": -22
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MONEY CONSTANT",
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
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 72
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 46,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 93,
            "movement": -35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 176,
            "movement": -38
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 85,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 110,
            "movement": 12
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
            "position": 35,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 52,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
            "movement": -63
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 190,
            "movement": -64
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": -17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": -20
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 142,
            "movement": 38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
            "movement": -46
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 198,
            "movement": -109
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 199,
            "movement": -116
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -15
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
            "position": 72,
            "movement": -37
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
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 134
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 29
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
            "position": 38,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -91
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": -47
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": -51
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": 100
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": -63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -32
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": -22
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -69
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": -49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": -147
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
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 75
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -87
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
            "position": 53,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -19
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 150
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": -22
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -60
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": -40
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
            "position": 36,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
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
            "position": 68,
            "movement": -1
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
            "position": 33,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
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
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 153
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
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
            "position": 179,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 30,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 125,
            "movement": -49
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
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
            "position": 160,
            "movement": 6
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
            "position": 55,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 87,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
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
            "position": 119,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 107,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
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
            "position": 137,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 192,
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
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/38dc027b0eae49a8e7fd7af3312a00a6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -52
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
            "position": 153,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Call Me Every Day",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LA",
            "name": "Laos",
            "position": 22,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/72cef83ff7a8c740f94ccf2ea5e0fdb7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No Stress",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 114,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Steady",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Smile",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2 Sugar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Can't Believe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f25b7d9807558219cbe7646ad27e092/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ebelebe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/afea1bda5fb6b9c56301ea949d4516bf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alive",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 142,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
  