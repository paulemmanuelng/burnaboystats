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
  export const liveChartsUpdated = "2026-08-30";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","iTunes"];
  
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
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 61,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 75,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 91,
            "movement": -16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 91,
            "movement": 9
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 93,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 98,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 99,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 100,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 118,
            "movement": -15
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 119,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 122,
            "movement": -7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 136,
            "movement": -12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 144,
            "movement": -25
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 155,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 159,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 163,
            "movement": -31
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 175,
            "movement": -40
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": 48
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
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 81,
            "movement": 39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 140,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": -3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 152,
            "movement": -104
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 170,
            "movement": -74
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 178,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 179,
            "movement": 17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 183,
            "movement": 11
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 184,
            "movement": -31
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 189,
            "movement": -41
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 197,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -61
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 99,
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
            "position": 8,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 44,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": 32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": 56
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 134,
            "movement": 2
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
            "position": 32,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
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
            "position": 35,
            "movement": -4
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
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
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
            "position": 28,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 77,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 97,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": 53
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 84,
            "movement": -62
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
            "position": 66,
            "movement": -2
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
            "position": 16,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 93,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 122,
            "movement": 55
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": -39
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -50
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
            "position": 71,
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
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 112,
            "movement": -22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 169,
            "movement": -30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -13
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": -72
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
            "position": 17,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 118
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 140,
            "movement": -91
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": 32
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
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
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 47
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
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 98
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
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
            "position": 84,
            "movement": -15
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
            "movement": -2
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -37
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
            "movement": 2
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
            "position": 18,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 70
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": -127
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 50
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
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
            "position": 60,
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
            "position": 198,
            "movement": -137
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": -128
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 196,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 31,
            "movement": 53
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 126,
            "movement": 63
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
            "position": 38,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 141,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": -85
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
            "position": 100,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
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
            "position": 178,
            "movement": -27
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
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 137,
            "movement": null,
            "status": "new"
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
            "position": 139,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -21
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
            "position": 110,
            "movement": 76
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 36,
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
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
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
            "position": 107,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
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
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -11
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
            "position": 127,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 122,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Joy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
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
    "title": "Anxious",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 14,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Anoti",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
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
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -70
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
            "position": 177,
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
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": null,
            "status": "new"
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
            "country": "NE",
            "name": "Niger",
            "position": 143,
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
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
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
            "position": 115,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -1
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
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
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
            "movement": 1
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
  