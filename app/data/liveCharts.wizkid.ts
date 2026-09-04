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
  export const liveChartsUpdated = "2026-09-04";
  
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
            "position": 27,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 52,
            "movement": 8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 63,
            "movement": 10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 66,
            "movement": 9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 78,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 78,
            "movement": 16
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 80,
            "movement": 30
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 95,
            "movement": 17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 96,
            "movement": 32
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 98,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 100,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 108,
            "movement": -10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 109,
            "movement": 8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 113,
            "movement": 9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 120,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 120,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 131,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 151,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 167,
            "movement": 7
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 176,
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
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 62,
            "movement": 55
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 81,
            "movement": 82
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 101,
            "movement": -63
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 116,
            "movement": -41
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 129,
            "movement": 22
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 141,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": -43
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 165,
            "movement": -32
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 196,
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
            "position": 3,
            "movement": -1
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
            "position": 15,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 40,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 88,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 136,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 179,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
            "movement": 40
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": -6
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
            "position": 21,
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
            "country": "KE",
            "name": "Kenya",
            "position": 33,
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 48,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 128,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 130,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 146,
            "movement": -18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 161,
            "movement": -7
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 160,
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
            "position": 18,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
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
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
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
            "position": 27,
            "movement": 3
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
            "position": 23,
            "movement": -8
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
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 149,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -2
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
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -31
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
            "position": 88,
            "movement": -10
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
            "movement": 3
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
            "position": 24,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": null,
            "status": "new"
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
            "movement": 15
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 94
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -33
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 83
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 49,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -17
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 112
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -49
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 197,
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": 1
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 16
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
            "position": 72,
            "movement": -3
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
            "position": 67,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": 9
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
            "position": 44,
            "movement": 15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 47,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": 1
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
            "position": 42,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
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
            "position": 197,
            "movement": -11
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
            "position": 159,
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
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 44
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
            "position": 125,
            "movement": -9
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
            "country": "DM",
            "name": "Dominica",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 133,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 148,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": -51
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
            "position": 130,
            "movement": -4
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
            "position": 84,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
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
            "position": 160,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 6
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
            "position": 166,
            "movement": -5
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
            "position": 188,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 89,
            "movement": -3
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
            "position": 187,
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
            "position": 55,
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
            "position": 45,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/31566a105920b61a40e268a4b8997791/500x500-000000-80-0-0.jpg"
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
            "position": 25,
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
            "position": 105,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/38dc027b0eae49a8e7fd7af3312a00a6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All For Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love My Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee5775a4038904759fa2911ca20e4913/500x500-000000-80-0-0.jpg"
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
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bc2fb454695d80d8c78f43478549c26f/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e5bc56dd547bcc84a47089b865230cb/500x500-000000-80-0-0.jpg"
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
            "position": 188,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo to Shan",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7e7f840d0099df8c44eddda6841cc52d/500x500-000000-80-0-0.jpg"
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
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Smile",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Reckless",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Longtime",
    "platforms": [],
    "kind": "song",
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
  