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
  export const liveChartsUpdated = "2026-08-28";
  
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
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 16,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 19,
            "movement": 24
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 19,
            "movement": 44
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 21,
            "movement": 160
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 26,
            "movement": 73
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": 8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": -23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 49,
            "movement": 25
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 50,
            "movement": 36
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": 5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 65,
            "movement": 42
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 68,
            "movement": -23
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 87,
            "movement": 69
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 99,
            "movement": 19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 105,
            "movement": -85
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 120,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 30,
            "movement": 30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 48,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": 95
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": -39
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 74,
            "movement": 25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": -24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -16
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 102,
            "movement": -69
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": -30
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 142,
            "movement": -86
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 145,
            "movement": -89
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": -82
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 191,
            "movement": -12
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
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 53
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 115,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": -98
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 98,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 13
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
            "position": 49,
            "movement": 28
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 8
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 185,
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": 6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 173,
            "movement": 5
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
            "position": 3,
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
            "position": 11,
            "movement": 100
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
            "position": 40,
            "movement": -8
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
            "country": "NG",
            "name": "Nigeria",
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
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 70,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": 6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 89,
            "movement": 63
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 127,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 147,
            "movement": -31
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 190,
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
            "position": 8,
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
            "position": 7,
            "movement": -2
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 7,
            "movement": 44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 26,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 57,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 93
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": -102
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
            "position": 28,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 73
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 48,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 23
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
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
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
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
            "position": 75,
            "movement": -55
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
            "position": 181,
            "movement": -57
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
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 43,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 125,
            "movement": 31
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 163,
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
            "position": 102,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 48,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -44
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -98
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 192,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 9,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -58
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
            "movement": -49
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
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
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 34,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 199,
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
            "position": 87,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 33
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
            "position": 31,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": -25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": 2
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
            "position": 15,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 15,
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
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 112
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 162,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": -89
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
            "position": 12,
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
            "position": 9,
            "movement": 13
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
            "position": 151,
            "movement": -8
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
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 72,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 143,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -34
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
            "position": 100,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 200,
            "movement": -167
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
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
            "position": 30,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -16
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
            "position": 54,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 2
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
            "position": 13,
            "movement": -3
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
            "position": 130,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": 68
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
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
            "position": 20,
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
            "position": 57,
            "movement": -27
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
            "position": 63,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
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
            "position": 22,
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
            "position": 74,
            "movement": -55
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 52,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": 57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
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
            "position": 85,
            "movement": -8
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
            "movement": 0
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
            "position": 197,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 116
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": 13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": -77
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
            "position": 63,
            "movement": 12
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
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 94,
            "movement": 13
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
            "position": 181,
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
            "position": 44,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
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
            "position": 113,
            "movement": 0
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
            "position": 65,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
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
            "position": 185,
            "movement": -14
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
            "position": 171,
            "movement": -105
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
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -67
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 110,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": 59
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
            "movement": -1
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
            "position": 197,
            "movement": -1
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
            "position": 43,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -21
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
            "position": 56,
            "movement": 0
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
            "position": 57,
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
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
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
            "movement": -12
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
            "position": 42,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 44,
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
            "position": 182,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 25
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
            "position": 45,
            "movement": 25
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 63
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
            "position": 141,
            "movement": -5
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
            "position": 63,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": 7
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
            "position": 192,
            "movement": 6
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
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
            "position": 84,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
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
            "position": 130,
            "movement": 1
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
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
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
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 9
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
            "position": 182,
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
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 0
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
            "position": 78,
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
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 62
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 179,
            "movement": 8
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
            "position": 187,
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
    "title": "Gratitude - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -17
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
    "title": "Che Che",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 43,
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
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
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
    "title": "Bad Boy - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
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
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 2
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
            "country": "LR",
            "name": "Liberia",
            "position": 121,
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
    "title": "Bad Boy",
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
            "position": 79,
            "movement": -18
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
            "position": 136,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 194,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mogbe",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 196,
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
  