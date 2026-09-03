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
  export const liveChartsUpdated = "2026-09-03";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
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
            "country": "NE",
            "name": "Niger",
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 5,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
            "movement": 47
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 18,
            "movement": 35
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 23,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 30,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 34,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 48,
            "movement": 16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 65,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 69,
            "movement": -22
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 73,
            "movement": 31
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 95,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 96,
            "movement": -60
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 111,
            "movement": 56
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 130,
            "movement": 17
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 134,
            "movement": -19
          },
          {
            "country": "FR",
            "name": "France",
            "position": 139,
            "movement": 17
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 155,
            "movement": -108
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 156,
            "movement": -97
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": -125
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 173,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 181,
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
            "position": 30,
            "movement": -9
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": -2
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 0
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 39,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 43,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 142,
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
            "movement": -2
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
            "position": 57,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -3
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
            "position": 140,
            "movement": 1
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
            "position": 2,
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
            "position": 2,
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
            "position": 11,
            "movement": 0
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 57,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -23
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 76,
            "movement": -9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": -45
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 88,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -42
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 109,
            "movement": -71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -74
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": 59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -86
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": -83
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 175,
            "movement": 19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": 2
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
            "position": 128,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -80
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
            "position": 24,
            "movement": -1
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
            "position": 121,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 124,
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
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -27
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
            "position": 37,
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
            "position": 37,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 5
          },
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
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 41,
            "movement": 139
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -37
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 109,
            "movement": -45
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 117,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 173,
            "movement": 18
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 185,
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
            "position": 21,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
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
            "position": 1,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
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
            "position": 5,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 82,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 94,
            "movement": 31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 125,
            "movement": -76
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 155,
            "movement": -10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 169,
            "movement": 7
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
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
            "position": 8,
            "movement": 1
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
            "position": 12,
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
            "position": 23,
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
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 12,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -76
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 123,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": -91
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": -61
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
            "position": 29,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 52,
            "movement": 116
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 124,
            "movement": 37
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -132
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 194,
            "movement": -101
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
            "movement": 9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -39
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": 10
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
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
            "position": 11,
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
            "position": 122,
            "movement": 16
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
            "position": 11,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": 59
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 68,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
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
            "position": 58,
            "movement": 5
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
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 54,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 10
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
            "position": 106,
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
            "position": 62,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 135
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
            "position": 53,
            "movement": -8
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
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 1
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
            "position": 35,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 55
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": -59
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 134,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": -27
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
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 85,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
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
            "position": 101,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": 57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 78,
            "movement": 5
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
            "position": 82,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": 49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
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
            "position": 30,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
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
            "position": 24,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 18
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 133
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
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
            "position": 24,
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
            "position": 75,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 87
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
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
            "position": 28,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -69
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
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 37,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 110
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
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
            "position": 54,
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
            "position": 94,
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
            "position": 61,
            "movement": 0
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
            "position": 56,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": -58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 98,
            "movement": 17
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
            "position": 185,
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
            "position": 91,
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
            "position": 96,
            "movement": -13
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
            "position": 38,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 89
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
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
            "position": 77,
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
            "position": 48,
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
            "position": 74,
            "movement": -10
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
            "position": 63,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -109
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": -92
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
            "position": 91,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -67
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -49
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
            "position": 90,
            "movement": 0
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
            "position": 48,
            "movement": 67
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
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
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 130,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 5
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
            "position": 128,
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
            "position": 70,
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
            "position": 66,
            "movement": 1
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
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
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
            "position": 84,
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
            "position": 66,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 45,
            "movement": 5
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
            "position": 50,
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
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -39
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 107,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
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
            "position": 81,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 127,
            "movement": 26
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
            "position": 35,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 167,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 24
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
            "position": 168,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "movement": 65
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": -58
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 156,
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
            "position": 138,
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
            "position": 109,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 123,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
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
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 45
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
            "position": 7,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": 19
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
            "position": 53,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
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
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 5
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
            "position": 144,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "movement": -26
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
            "position": 197,
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
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 164,
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": 8
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
            "position": 92,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Start",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 152,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": -26
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
            "position": 131,
            "movement": 7
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
            "position": 117,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 193,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
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
    "title": "Reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
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
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 77,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mogbe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
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
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
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
    "title": "Kings Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get it Right",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
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
  