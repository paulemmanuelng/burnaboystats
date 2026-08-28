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
  export const liveChartsUpdated = "2026-08-28";
  
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
            "position": 36,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 73,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": 8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 88,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 94,
            "movement": -19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 96,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 97,
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 101,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 108,
            "movement": 14
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 110,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 112,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 112,
            "movement": 12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 115,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 128,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 129,
            "movement": 20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 132,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 135,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 157,
            "movement": 10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 164,
            "movement": 11
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 190,
            "movement": -14
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
            "country": "BH",
            "name": "Bahrain",
            "position": 48,
            "movement": 10
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 67,
            "movement": 99
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 75,
            "movement": 26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 96,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 50
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 132,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": -36
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 179,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 183,
            "movement": -24
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 192,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 45,
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
            "country": "PE",
            "name": "Peru",
            "position": 180,
            "movement": -42
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 72,
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
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": 140
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 136,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -19
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 62,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
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
            "position": 32,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 92
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 93
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 84,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 72
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": 39
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": 44
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 177,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 180,
            "movement": 19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 187,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": -83
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
            "position": 60,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -58
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": 9
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
            "position": 29,
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
            "position": 14,
            "movement": 41
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
            "position": 49,
            "movement": -3
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
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 84
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 116,
            "movement": 46
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 139,
            "movement": 50
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
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
            "position": 2,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
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
            "position": 73,
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
            "position": 6,
            "movement": -2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
            "movement": -91
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
            "position": 47,
            "movement": 0
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
            "position": 81,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 23
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
            "position": 3,
            "movement": 134
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
            "position": 16,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -25
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
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
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -66
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
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
            "position": 71,
            "movement": -2
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
            "position": 16,
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
            "position": 34,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 37,
            "movement": 33
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 83,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": 20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": 85
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -38
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 165,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
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
            "position": 97,
            "movement": -17
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
            "position": 82,
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
            "position": 63,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": 3
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
            "movement": -1
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
            "position": 143,
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 51,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
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
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 194,
            "movement": -111
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
            "position": 112,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -1
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 14
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
            "position": 102,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 164,
            "movement": 8
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
            "position": 191,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
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
            "position": 105,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
            "position": 177,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -11
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
            "position": 153,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -1
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
            "position": 149,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Piece of My Heart",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23dec0c82a7bb91327d048b0019004bd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
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
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 118,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine to the Top",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 85,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/72cef83ff7a8c740f94ccf2ea5e0fdb7/500x500-000000-80-0-0.jpg"
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
            "position": 104,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Cash Flow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": -17
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
  