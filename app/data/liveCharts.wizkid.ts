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
  export const liveChartsUpdated = "2026-08-27";
  
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
            "country": "MR",
            "name": "Mauritania",
            "position": 39,
            "movement": 69
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
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
            "country": "BH",
            "name": "Bahrain",
            "position": 58,
            "movement": -23
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 75,
            "movement": 26
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 40
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 131,
            "movement": -28
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 134,
            "movement": -39
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 159,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 166,
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
            "position": 176,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": 21
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
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
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
            "position": 138,
            "movement": -22
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
            "country": "ML",
            "name": "Mali",
            "position": 25,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -1
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
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": -46
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 198,
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
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": -12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 66,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 151,
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": null,
            "status": "new"
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
            "position": 16,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 3
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
            "position": 65,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -21
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": -63
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 153,
            "movement": 36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": -53
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 180,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 187,
            "movement": -9
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
            "position": 99,
            "movement": -66
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
            "position": 37,
            "movement": 0
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
            "position": 44,
            "movement": -7
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
            "position": 71,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": -65
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 174,
            "movement": -44
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
            "movement": -22
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
            "position": 50,
            "movement": 1
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
            "position": 36,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -2
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
            "position": 76,
            "movement": 19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 78,
            "movement": null,
            "status": "new"
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
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
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
            "position": 55,
            "movement": -25
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -69
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": 61
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 162,
            "movement": -52
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 166,
            "movement": -71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 200,
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
            "position": 44,
            "movement": 38
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
            "position": 92,
            "movement": -7
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
            "position": 104,
            "movement": -6
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
            "country": "ML",
            "name": "Mali",
            "position": 176,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -24
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
            "position": 4,
            "movement": null,
            "status": "new"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
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
            "position": 112,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
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
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 86,
            "movement": -64
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": -98
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 136,
            "movement": -40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 198,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -55
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": -93
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
            "position": 137,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 79,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": -41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
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
            "position": 47,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 37,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
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
            "position": 12,
            "movement": 0
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 86
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
            "position": 28,
            "movement": -2
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
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
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
            "movement": -1
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
            "position": 30,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 8
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 133,
            "movement": -92
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
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
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -26
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
            "position": 131,
            "movement": -47
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
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 107,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -11
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
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
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
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 86,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": null,
            "status": "new"
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": 61
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 179,
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
            "position": 46,
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
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
            "position": 117,
            "movement": -96
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": -68
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/72cef83ff7a8c740f94ccf2ea5e0fdb7/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -14
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
            "position": 48,
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
            "position": 164,
            "movement": -2
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
    "title": "Wine to the Top",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song"
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
    "title": "Alive",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
            "movement": 17
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
            "position": 157,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "B. D'OR",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -103
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 125,
            "movement": -9
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
  