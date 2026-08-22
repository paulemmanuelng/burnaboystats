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
            "position": 37,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 79,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 81,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 84,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 84,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 89,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 95,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 96,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 105,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 114,
            "movement": 7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 115,
            "movement": -6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 131,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 135,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 135,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": -14
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 149,
            "movement": -25
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 163,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 175,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 56,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 65,
            "movement": 10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 91,
            "movement": -30
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 97,
            "movement": 29
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 120,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -24
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 144,
            "movement": -106
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 145,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 17
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 168,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 189,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 71,
            "movement": -54
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
            "position": 78,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": -10
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 23,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 76,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": 45
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 168,
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 73,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 109,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
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
            "position": 49,
            "movement": -14
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
            "position": 8,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -39
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": 72
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 134,
            "movement": 49
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": 9
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": 92
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": 62
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 131,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -19
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 149,
            "movement": -74
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 198,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
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
            "position": 39,
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
            "position": 50,
            "movement": 22
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 99
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 40,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": -39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": 1
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
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 12
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
            "position": 65,
            "movement": 107
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 69
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 20
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 107,
            "movement": -66
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 161,
            "movement": -110
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -11
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
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
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
            "position": 67,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -14
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
            "position": 121,
            "movement": -80
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
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -92
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 104,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": 19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
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
            "position": 185,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 28
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
            "movement": -24
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
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
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
            "country": "SN",
            "name": "Senegal",
            "position": 78,
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
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
            "movement": 0
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
            "position": 99,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": 91
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 5
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
            "position": 52,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/72cef83ff7a8c740f94ccf2ea5e0fdb7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
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
            "position": 189,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
            "position": 177,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 160,
            "movement": -84
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 174,
            "movement": -67
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -37
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
            "position": 114,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": 57
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
            "position": 78,
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
            "position": 158,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 45
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
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
            "position": 194,
            "movement": -43
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
            "position": 146,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
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
            "position": 118,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Man On A Mission",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 128,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/afea1bda5fb6b9c56301ea949d4516bf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soco",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 141,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Can't Believe",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f25b7d9807558219cbe7646ad27e092/500x500-000000-80-0-0.jpg"
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
  