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
  export const liveChartsUpdated = "2026-09-14";
  
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
            "position": 33,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 71,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 84,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 86,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 89,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 95,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 103,
            "movement": 14
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 110,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 114,
            "movement": -28
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 133,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 143,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 145,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 153,
            "movement": 14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 161,
            "movement": 19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 166,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 180,
            "movement": 19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 183,
            "movement": -31
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 190,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 41,
            "movement": 5
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 57,
            "movement": 102
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 68,
            "movement": 11
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 72,
            "movement": 18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 92,
            "movement": -34
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 94,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 123,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -17
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 157,
            "movement": 42
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 182,
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
            "country": "PE",
            "name": "Peru",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 196,
            "movement": -176
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
            "position": 70,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 48,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 70,
            "movement": 41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 140,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 155,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 191,
            "movement": -47
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
            "position": 28,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 37,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
            "movement": -19
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
            "position": 31,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 155,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
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
            "position": 19,
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
            "position": 65,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 1
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
            "position": 15,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": 22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": -9
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
            "movement": 0
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 60,
            "movement": 68
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 114,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
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
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": 1
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
            "position": 27,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": -49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": 36
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
            "position": 21,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 32,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": 47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": -75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": null,
            "status": "new"
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
            "position": 177,
            "movement": -76
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "position": 68,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 56
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 72,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -22
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 189,
            "movement": -121
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -114
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": -67
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
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
            "position": 79,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": 80
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 84
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -42
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 184,
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
            "country": "TR",
            "name": "Turkey",
            "position": 184,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 43,
            "movement": 35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
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
            "position": 135,
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
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": -33
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
            "movement": 4
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
            "movement": -12
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
            "position": 39,
            "movement": 1
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
            "position": 60,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 76,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 117,
            "movement": 18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 120,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
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
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -18
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
            "position": 134,
            "movement": 0
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
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 19
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 73,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -4
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
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
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
            "position": 106,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
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
            "position": 179,
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
            "position": 49,
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
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 66
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -71
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
            "position": 47,
            "movement": 2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
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
            "position": 172,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 103,
            "movement": -42
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 164,
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
            "position": 196,
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
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
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
            "position": 184,
            "movement": 12
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
            "position": 115,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like This",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a95ad39eeab8749be5d4d8c7d4458615/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -2
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
            "position": 101,
            "movement": 0
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
            "position": 176,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 76,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": -66
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
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
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
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 52
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Energy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -145
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -142
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 136,
            "movement": 16
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
  