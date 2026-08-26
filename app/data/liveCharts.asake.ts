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
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "AO",
            "name": "Angola",
            "position": 5,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 30,
            "movement": 114
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 35,
            "movement": 153
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 48,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 54,
            "movement": -31
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 57,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 66,
            "movement": 10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 76,
            "movement": 32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 87,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 90,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 91,
            "movement": -19
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 99,
            "movement": -65
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 100,
            "movement": -11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 126,
            "movement": -85
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 134,
            "movement": -44
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 145,
            "movement": -30
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 153,
            "movement": 32
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 153,
            "movement": 9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 171,
            "movement": -111
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 179,
            "movement": -46
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
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": -3
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 25,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 38,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 67,
            "movement": 124
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 116,
            "movement": -12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 122,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 127,
            "movement": -110
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 152,
            "movement": -66
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
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 59,
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 32,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 50,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 175,
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 187,
            "movement": 7
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
            "position": 20,
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
            "position": 51,
            "movement": -15
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
            "position": 9,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": -11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 128,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 134,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 140,
            "movement": -76
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 109,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
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
            "position": 50,
            "movement": -5
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
            "position": 8,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 68
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": -35
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 196,
            "movement": -18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 198,
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
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 38,
            "movement": 29
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 39,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 58
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 84
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 126,
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
            "position": 11,
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
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 24,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 94,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": -23
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
            "movement": 8
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
            "position": 9,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -65
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 97,
            "movement": -44
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -96
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": -88
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 192,
            "movement": -30
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 48,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
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
            "position": 51,
            "movement": 0
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
            "position": 96,
            "movement": 2
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
            "position": 29,
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
            "movement": -2
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
            "position": 33,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -13
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
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
            "position": 38,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -48
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": 77
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 132,
            "movement": -55
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": 44
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 192,
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": -79
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 193,
            "movement": -18
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
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
            "position": 93,
            "movement": -28
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": -50
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 115,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 11
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
            "position": 69,
            "movement": -28
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
            "country": "FJ",
            "name": "Fiji",
            "position": 40,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -25
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -20
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
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": -46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 179,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 16,
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
            "position": 148,
            "movement": -20
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
            "position": 98,
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
            "position": 19,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": -56
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
            "position": 53,
            "movement": -8
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
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": -65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
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
            "position": 29,
            "movement": 2
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
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
            "position": 31,
            "movement": 1
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
            "position": 27,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": 12
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
            "movement": 16
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
            "position": 33,
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
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
            "position": 77,
            "movement": 12
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
            "position": 70,
            "movement": 3
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 197,
            "movement": -25
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
            "position": 105,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
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
            "position": 21,
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
            "position": 97,
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
            "position": 28,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -66
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
            "position": 75,
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
            "position": 75,
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
            "position": 43,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
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
            "position": 58,
            "movement": 2
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
            "position": 76,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": 17
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
            "movement": 2
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
            "position": 96,
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
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 20
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
            "position": 149,
            "movement": -74
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": 1
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
            "position": 59,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
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
            "position": 107,
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
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -14
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
            "position": 171,
            "movement": -2
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
            "position": 38,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
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
            "position": 56,
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
            "position": 54,
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
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -37
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
            "movement": 11
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
            "position": 119,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 88,
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
            "position": 193,
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
            "movement": -50
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
            "position": 65,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 12
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
            "position": 200,
            "movement": -12
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
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
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
            "movement": 2
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
            "position": 57,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
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
            "position": 131,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 136,
            "movement": 21
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -7
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
            "position": 91,
            "movement": -41
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
            "position": 177,
            "movement": 1
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
            "movement": -1
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
            "movement": 0
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
            "position": 152,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 131,
            "movement": -110
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -31
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
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -1
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
            "position": 195,
            "movement": -1
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 113,
            "movement": -68
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": null,
            "status": "new"
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
            "position": 130,
            "movement": -1
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
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 11
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
            "movement": 2
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
            "position": 125,
            "movement": -1
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
            "position": 145,
            "movement": 37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 40,
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
            "position": 116,
            "movement": 5
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
            "position": 126,
            "movement": -1
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
            "position": 9,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 187,
            "movement": 4
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
            "position": 124,
            "movement": 6
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
            "position": 162,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gold",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 168,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
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
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
  