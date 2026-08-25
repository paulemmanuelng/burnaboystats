// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=victony from kworb's artist page.
  //
  // PLATFORM chart data for Victony: where each release is sitting RIGHT
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
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 1,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 4,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 5,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 23,
            "movement": 3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 27,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 29,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 38,
            "movement": 24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 54,
            "movement": 24
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 66,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 71,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": 9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 76,
            "movement": -16
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 101,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": 28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 169,
            "movement": -31
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 170,
            "movement": -24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 172,
            "movement": -30
          },
          {
            "country": "FR",
            "name": "France",
            "position": 174,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 186,
            "movement": -109
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": -52
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 196,
            "movement": -113
          },
          {
            "country": "AI",
            "name": "Anguilla",
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 5,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 35,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 52,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 55,
            "movement": 10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 72,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 93,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 200,
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
            "country": "AO",
            "name": "Angola",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 46,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": 6
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
            "position": 6,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 153
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 109,
            "movement": -21
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
            "position": 3,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -36
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
            "position": 4,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 132,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3be386ed5da6f28d57ce4808d7d07802/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 1,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 4,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 13,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 14,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 15,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 17,
            "movement": 171
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": -12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 22,
            "movement": -17
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 23,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 23,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 28,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -8
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 29,
            "movement": 67
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 30,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 31,
            "movement": 21
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 33,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 35,
            "movement": -9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": -12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 39,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 42,
            "movement": 43
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 44,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 56,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 64,
            "movement": -21
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 68,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 76,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 84,
            "movement": -31
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 90,
            "movement": -38
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 129,
            "movement": -6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 130,
            "movement": -56
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 152,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 152,
            "movement": -21
          },
          {
            "country": "US",
            "name": "United States",
            "position": 152,
            "movement": -12
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 159,
            "movement": -68
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 159,
            "movement": -43
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": 19
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 189,
            "movement": -133
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 194,
            "movement": -27
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 197,
            "movement": -119
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 199,
            "movement": -79
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
            "position": 42,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FRE$H",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 2
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
            "position": 28,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 142,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 18
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
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
            "position": 19,
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
            "position": 73,
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
            "position": 27,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": -41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
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
            "position": 52,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": 20
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
            "position": 22,
            "movement": 35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
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
            "position": 25,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -18
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
            "movement": -2
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
            "position": 54,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TOO LIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -94
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
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
            "position": 48,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": 49
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 120,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 197,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ARMED & DANGEROUS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -55
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -74
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -98
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
            "position": 55,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FYNE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": -56
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -102
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
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CLEAR",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": -79
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -80
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
            "position": 100,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
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
            "position": 40,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MISSIN PIECE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
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
            "position": 78,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": -78
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
            "position": 44,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CAN JUICE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -41
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
            "position": 108,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AMAZON",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -36
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
            "position": 99,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": 42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PITY THIS BOY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -20
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
            "position": 18,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OHEMA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hello",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jaga Jaga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Babylon",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2d663b939236f5b42b169e75ec16fc14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outlaw",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
  