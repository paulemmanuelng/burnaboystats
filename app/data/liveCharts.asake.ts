// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-12";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 10,
            "movement": 56
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 10,
            "movement": 23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 20,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 22,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 24,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": 9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 43,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 48,
            "movement": 18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 49,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 53,
            "movement": -24
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 58,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 69,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 82,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 83,
            "movement": -32
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 99,
            "movement": -15
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 108,
            "movement": 36
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 122,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 124,
            "movement": -36
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 147,
            "movement": -60
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 174,
            "movement": 19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 175,
            "movement": -68
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 176,
            "movement": -136
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 177,
            "movement": -161
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 38,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": -11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 183,
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
            "position": 25,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 105,
            "movement": 68
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
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
            "position": 4,
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
            "position": 49,
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
            "position": 11,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 43,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 107,
            "movement": -43
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 116,
            "movement": 31
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 128,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": -22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
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
            "position": 4,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "position": 7,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
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
            "position": 8,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 17,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": -9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 83,
            "movement": 80
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 113,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 140,
            "movement": 58
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 43,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": 65
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 111
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 177,
            "movement": -31
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 192,
            "movement": -81
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 193,
            "movement": -66
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
            "position": 38,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 107,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 138,
            "movement": -8
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
            "position": 40,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -71
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
            "movement": -4
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
            "position": 24,
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
            "position": 36,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 52,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 64,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 90,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": -30
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
            "position": 96,
            "movement": -6
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
            "position": 43,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 6
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
            "position": 11,
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
            "position": 111,
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
            "position": 144,
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
            "position": 12,
            "movement": -6
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
            "position": 13,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 109
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 52,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 84,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": -52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 164,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -21
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
            "position": 30,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 69
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": -13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 136,
            "movement": -13
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 180,
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
            "movement": 32
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 46,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -21
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
            "movement": 46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
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
            "position": 74,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 124
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": -62
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
            "position": 166,
            "movement": -138
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": 84
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": -35
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
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
            "position": 94,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": -56
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 100
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 84
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": -11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 76,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -16
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
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
            "position": 102,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 139,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -75
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 16
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
            "position": 67,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -85
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
            "position": 9,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
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
            "position": 87,
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
            "position": 50,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -44
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -9
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
            "position": 56,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": -11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": -8
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
            "position": 51,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 27,
            "movement": -3
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
            "position": 108,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
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
            "position": 45,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -2
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
            "position": 50,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": -4
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
            "position": 98,
            "movement": -5
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
            "position": 30,
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
            "position": 77,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -2
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
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": 78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
            "position": 108,
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
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 117
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -13
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
            "position": 168,
            "movement": -13
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
            "position": 56,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
            "position": 152,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 2,
            "movement": 54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
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
            "position": 71,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 80
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 151,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 60,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
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
            "position": 135,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -19
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
            "position": 102,
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
            "position": 82,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
            "movement": -5
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
            "position": 61,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -6
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
            "position": 123,
            "movement": -8
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
            "position": 7,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "position": 178,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
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
            "position": 49,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -9
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
            "position": 102,
            "movement": 66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -12
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
            "position": 189,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 130
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yoga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Great Guy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Swear",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Suru",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude - Live in London",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 2
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
  