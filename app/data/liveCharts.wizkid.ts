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
  export const liveChartsUpdated = "2026-09-05";
  
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
            "position": 22,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 49,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 54,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 65,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 65,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 77,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 81,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 86,
            "movement": 12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 89,
            "movement": 20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 98,
            "movement": -20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 105,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 106,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 107,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 112,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 113,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 128,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 129,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 157,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 169,
            "movement": -2
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 171,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 175,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 177,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 178,
            "movement": -4
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
            "position": 43,
            "movement": 19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 65,
            "movement": 76
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 108,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": 22
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 137,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
            "movement": 36
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 154,
            "movement": -25
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 183,
            "movement": -18
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 183,
            "movement": -67
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 187,
            "movement": 11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 197,
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
            "country": "RO",
            "name": "Romania",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 89,
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 35,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 102,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 115,
            "movement": -34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 128,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 191,
            "movement": -12
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 76,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 2
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
            "position": 101,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -5
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
            "position": 36,
            "movement": 0
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
            "position": 47,
            "movement": -28
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 56,
            "movement": 59
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": -47
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 184,
            "movement": 6
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
            "position": 41,
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
            "position": 60,
            "movement": 0
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
            "position": 90,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": -57
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": -77
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
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
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 93,
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
            "position": 26,
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
            "position": 45,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 33,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": -57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
            "movement": -41
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 200,
            "movement": -70
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 68,
            "movement": -48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 134,
            "movement": 25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 139,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 193,
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 31,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 84
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -77
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 44
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 160,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 183,
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
            "position": 17,
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
            "position": 53,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 4
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 49
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": 54
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": -95
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -36
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
            "movement": -15
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": -57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 99,
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 56
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": -6
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
            "position": 94,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 39,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -84
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": 48
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
            "position": 47,
            "movement": -42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 173,
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
            "position": 69,
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
            "position": 40,
            "movement": -6
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": -11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 67,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": 57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": -18
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 151,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 173,
            "movement": -25
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -57
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 132,
            "movement": -101
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 14
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 88,
            "movement": -46
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -8
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
            "position": 198,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 78,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
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
            "position": 131,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -1
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
            "position": 86,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
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
            "position": 154,
            "movement": 6
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
            "position": 105,
            "movement": 4
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 41,
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
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 89,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": -13
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
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No Stress",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -25
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/31566a105920b61a40e268a4b8997791/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 62,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Drogba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b5c2e2be723408f28befdd7a53e1c64a/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "EASY WITH ME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e5bc56dd547bcc84a47089b865230cb/500x500-000000-80-0-0.jpg"
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
            "position": 62,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bc2fb454695d80d8c78f43478549c26f/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Surulere",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f204ea5bc059318869bb1890f9377d4f/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -158
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/38dc027b0eae49a8e7fd7af3312a00a6/500x500-000000-80-0-0.jpg"
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Smile",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Reckless",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Longtime",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
  