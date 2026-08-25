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
  export const liveChartsUpdated = "2026-08-25";
  
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
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 69,
            "movement": 10
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 85,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 88,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 89,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 90,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 96,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 100,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 108,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 113,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 120,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 121,
            "movement": -21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 122,
            "movement": 27
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 131,
            "movement": 18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 132,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 142,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 174,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 184,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 184,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 24,
            "movement": 5
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
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 59,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 67,
            "movement": 25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 83,
            "movement": 46
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 98,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 99,
            "movement": 75
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 107,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 137,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 156,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 166,
            "movement": -67
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 188,
            "movement": -48
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 194,
            "movement": -30
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 195,
            "movement": -26
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 190,
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
            "position": 77,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 96,
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
            "position": 127,
            "movement": 12
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
            "movement": 5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 155,
            "movement": -96
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
            "position": 27,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
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
            "position": 37,
            "movement": -4
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
            "position": 142,
            "movement": -116
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": -82
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 149,
            "movement": -66
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 157,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -32
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
            "movement": -5
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
            "position": 54,
            "movement": -5
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
            "position": 9,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 92
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 105,
            "movement": 85
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 135,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": -22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 180,
            "movement": -24
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
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
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
            "position": 31,
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
            "position": 15,
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
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 48,
            "movement": 33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": 25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 177,
            "movement": -104
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": -72
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 172,
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
            "position": 95,
            "movement": -4
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
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -113
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
            "position": 48,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 6
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
            "position": 23,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -93
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
            "movement": -61
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
            "position": 33,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 97,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
            "movement": -69
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
            "movement": 7
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
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 132,
            "movement": -99
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -10
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
            "position": 77,
            "movement": 2
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
            "position": 125,
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
            "position": 97,
            "movement": -69
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -11
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
            "position": 80,
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
            "position": 178,
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 4
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
            "position": 181,
            "movement": 8
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
            "position": 32,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
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
            "position": 167,
            "movement": 5
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
            "position": 50,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 54,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 6
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
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 106,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 110,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 182,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
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
            "position": 49,
            "movement": 1
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
            "position": 123,
            "movement": 7
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
            "position": 105,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
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
            "position": 133,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": -27
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
            "position": 183,
            "movement": -7
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
            "position": 77,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
            "movement": 3
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
            "movement": 4
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
            "position": 120,
            "movement": 4
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -16
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
            "position": 194,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 199,
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 166,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 113,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Cash Flow",
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -135
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Say My Name",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9348290ff2c42fef0438d57515d5233a/500x500-000000-80-0-0.jpg"
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
            "position": 31,
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
    "title": "Piece of Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
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
            "position": 128,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 134,
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
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -2
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
            "position": 113,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": null,
            "status": "new"
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
  