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
  export const liveChartsUpdated = "2026-08-26";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 3,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 9,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 10,
            "movement": 14
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 23,
            "movement": -16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 34,
            "movement": 22
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": -15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 60,
            "movement": 120
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 72,
            "movement": 17
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 76,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 80,
            "movement": -63
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 86,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 89,
            "movement": -25
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 90,
            "movement": -23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 96,
            "movement": -50
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 144,
            "movement": -94
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 151,
            "movement": -39
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 162,
            "movement": -108
          },
          {
            "country": "FR",
            "name": "France",
            "position": 181,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 188,
            "movement": -32
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": -102
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 200,
            "movement": -135
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 17,
            "movement": 174
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 29,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 63,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": 38
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 86,
            "movement": 13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 104,
            "movement": -26
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 191,
            "movement": -99
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
            "position": 7,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 10
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": null,
            "status": "re"
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": 40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 147,
            "movement": -15
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
            "position": 15,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 113,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
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
            "position": 23,
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
            "position": 45,
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
            "position": 35,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": 2
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
            "position": 23,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 131,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 194,
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
            "position": 4,
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
            "position": 36,
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
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": 43
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 67,
            "movement": 47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 71,
            "movement": 53
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -39
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 104,
            "movement": -32
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": -25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": -112
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
            "position": 101,
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 120
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 34,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 50
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 97,
            "movement": 53
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -29
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 178,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 37,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 133,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "position": 109,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 52,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": 82
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": 26
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
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
            "position": 108,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 92
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 44,
            "movement": -10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 53,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 162,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 170,
            "movement": -90
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 174,
            "movement": -136
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
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 87,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 80
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -60
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 22
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
            "position": 78,
            "movement": -50
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
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
            "position": 51,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 77,
            "movement": -42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": -38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": 19
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
            "position": 55,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
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
            "position": 10,
            "movement": 0
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
            "position": 77,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -34
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -30
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 50,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 199,
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -12
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": -15
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
            "position": 20,
            "movement": -2
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 96,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": 41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "position": 89,
            "movement": 42
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
            "position": 67,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -44
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 198,
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
            "position": 14,
            "movement": 1
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
            "position": 128,
            "movement": 6
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
            "position": 10,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
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
            "position": 32,
            "movement": 11
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
            "position": 41,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
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
            "position": 24,
            "movement": 0
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
            "position": 45,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 47
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
            "movement": 18
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
            "position": 64,
            "movement": 1
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
            "position": 46,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": 19
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
            "movement": 8
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
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 114,
            "movement": -11
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
            "position": 83,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 115,
            "movement": 15
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
            "position": 76,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
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
            "position": 169,
            "movement": 7
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
            "position": 10,
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -11
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
            "position": 57,
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
            "position": 52,
            "movement": 5
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
            "position": 86,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
            "position": 134,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
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
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
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
            "position": 86,
            "movement": 12
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
            "position": 66,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -33
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
            "position": 188,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 5
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
            "position": 134,
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
            "position": 162,
            "movement": -154
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
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 178,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 140,
            "movement": 26
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
            "position": 166,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 157,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
    "title": "Gratitude - Live in London",
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
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 21,
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": -1
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
            "position": 124,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Olorun",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
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
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 125,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 160,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 147,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 192,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kings Intro",
    "platforms": [
      {
        "platform": "Apple Music",
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
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -149
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 45,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Lonely At The Top (Remix)",
    "kind": "song",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/97eb0aab44d059e2cfac9297d2d6733b/500x500-000000-80-0-0.jpg"
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
  