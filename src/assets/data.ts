const data = {
  "splash_screen": {
    "logoSrc": "/kronario_full.svg",
    "logoAlt": "logo_full",
    "avatarSrc": "/avatar.svg",
    "avatarAlt": "Kronario avatar",
    "title": "Organiza tu horario con Kronario",
    "subtitle": "Kronario te ayuda a organizar tu horario de manera rápida y efectiva."
  },
  "pagina_carreras": {
    "menu": {
      "type": "search",
      "text": "Buscar carrera..."
    },
    "progress_bar": {
      "progress": 1
    },
    "arrow_nav": {
      "text": "Selecciona tu/s carrera/s",
      "block": "left",
      "leftUrl": "none",
      "rightUrl": "/subjects"
    },
    "badge_list": {
      "badges": [
        "Pregrados",
        "Postgrados"
      ],
      "color": "blue"
    },
    "categories": [
      {
        "name": "Pregrados",
        "id": "qwe-qw"
      },
      {
        "name": "Postgrados",
        "id": "qwe-qe"
      }
    ],
    "item_list": [
      {
        "name": "Ingeniería en sistemas de información",
        "category": "Pregrado",
        "id": "qwe-002"
      },
      {
        "name": "Ingeniería mecánica",
        "category": "Pregrado",
        "id": "qwe-003"
      },
      {
        "name": "Economía",
        "category": "Pregrado",
        "id": "qwe-007"
      },
      {
        "name": "Administración de empresas",
        "category": "Pregrado",
        "id": "qwe-008"
      },
      {
        "name": "Marketing",
        "category": "Pregrado",
        "id": "qwe-009"
      },
      {
        "name": "Doctorado en física",
        "category": "Posgrado",
        "id": "qwe-016"
      },
      {
        "name": "Doctorado en ciencias políticas",
        "category": "Posgrado",
        "id": "qwe-017"
      },
      {
        "name": "Doctorado en ingeniería eléctrica",
        "category": "Posgrado",
        "id": "qwe-018"
      },
      {
        "name": "Maestría en administración de empresas",
        "category": "Posgrado",
        "id": "qwe-019"
      },
      {
        "name": "Maestría en derecho empresarial",
        "category": "Posgrado",
        "id": "qwe-020"
      }
    ]
  },
  "pagina_asignaturas": {
    "menu": {
      "type": "search",
      "text": "Buscar asignatura..."
    },
    "progress_bar": {
      "progress": 2
    },
    "arrow_nav": {
      "text": "Selecciona tus asignaturas",
      "block": "none",
      "leftUrl": "/",
      "rightUrl": "/restrictions"
    },
    "badge_list": {
      "color": "green"
    },
    "item_list": [
      {
        "name": "Cálculo I",
        "category": [
          "Ingeniería en sistemas de información",
          "Ingeniería mecánica",
          "Ingeniería eléctrica",
          "Ingeniería civil",
          "Maestría en administración de empresas",
          "Doctorado en física",
          "Doctorado en ingeniería eléctrica"
        ],
        "id": "qwe-qww"
      },
      {
        "name": "Programación I",
        "category": [
          "Ingeniería en sistemas de información",
          "Ingeniería en sistemas y computación",
          "Maestría en administración de empresas",
          "Maestría en derecho empresarial"
        ],
        "id": "asd-dfg"
      },
      {
        "name": "Estadística",
        "category": [
          "Economía",
          "Ingeniería en sistemas de información",
          "Maestría en administración de empresas",
          "Maestría en derecho empresarial"
        ],
        "id": "zxc-vbn"
      },
      {
        "name": "Marketing Digital",
        "category": [
          "Marketing",
          "Ingeniería en sistemas de información",
          "Maestría en administración de empresas",
          "Maestría en derecho empresarial"
        ],
        "id": "fgh-jkl"
      },
      {
        "name": "Sistemas Operativos",
        "category": [
          "Ingeniería en sistemas de información",
          "Ingeniería en sistemas y computación",
          "Maestría en administración de empresas",
          "Doctorado en física",
          "Doctorado en ingeniería eléctrica"
        ],
        "id": "yui-opl"
      },
      {
        "name": "Diseño de Circuitos",
        "category": [
          "Ingeniería eléctrica",
          "Ingeniería en sistemas de información",
          "Maestría en administración de empresas",
          "Doctorado en ingeniería eléctrica"
        ],
        "id": "hjk-lkj"
      },
      {
        "name": "Derecho Empresarial",
        "category": [
          "Administración de empresas",
          "Maestría en administración de empresas",
          "Maestría en derecho empresarial",
          "Doctorado en ciencias políticas"
        ],
        "id": "poi-uyt"
      },
      {
        "name": "Liderazgo y Gestión",
        "category": [
          "Administración de empresas",
          "Maestría en administración de empresas",
          "Maestría en derecho empresarial",
          "Doctorado en ciencias políticas"
        ],
        "id": "mnb-vcx"
      },
      {
        "name": "Física Moderna",
        "category": [
          "Ingeniería en sistemas de información",
          "Doctorado en física",
          "Doctorado en ciencias políticas"
        ],
        "id": "rty-ghj"
      }
    ]
  },
  "pagina_restricciones": {
    "menu": {
      "type": "none",
      "text": "none"
    },
    "progress_bar": {
      "progress": 3
    },
    "arrow_nav": {
      "text": "Ajusta tu horario",
      "block": "none",
      "leftUrl": "/subjects",
      "rightUrl": "/schedules"
    },
    "primera_seccion": {
      "title": "Bloquea tus Profesores:",
      "subjects_badge": {
        "badges": [
          "Calculo 1",
          "Algoritmia y programacion 2",
          "Programacion orientada a objetos"
        ],
        "color": "yellow"
      },
      "profesor_list": [
        {
          "name": "Pedro Ramirez",
          "category": "Cálculo I",
          "id": "as1-jkl"
        },
        {
          "name": "Sofia Gomez",
          "category": "Cálculo I",
          "id": "as1-mnb"
        },
        {
          "name": "Sofia Gomez",
          "category": "Programación I",
          "id": "as1-m9b"
        },
        {
          "name": "Carlos Hernandez",
          "category": "Programación I",
          "id": "as2-bvc"
        },
        {
          "name": "Lucia Torres",
          "category": "Programación I",
          "id": "as2-zxc"
        },
        {
          "name": "Mario Vargas",
          "category": "Estadística",
          "id": "as3-rty"
        },
        {
          "name": "Ana Velazquez",
          "category": "Estadística",
          "id": "as3-yui"
        },
        {
          "name": "Juan Carlos Lopez",
          "category": "Marketing Digital",
          "id": "as4-poi"
        },
        {
          "name": "Patricia Ruiz",
          "category": "Marketing Digital",
          "id": "as4-lkj"
        },
        {
          "name": "Luisa Fernandez",
          "category": "Sistemas Operativos",
          "id": "as5-hgf"
        },
        {
          "name": "Jorge Gonzalez",
          "category": "Sistemas Operativos",
          "id": "as5-edc"
        },
        {
          "name": "Fernando Ortiz",
          "category": "Diseño de Circuitos",
          "id": "as6-vfr"
        },
        {
          "name": "Martha Jimenez",
          "category": "Diseño de Circuitos",
          "id": "as6-bnm"
        },
        {
          "name": "Jose Luis Torres",
          "category": "Derecho Empresarial",
          "id": "as7-uio"
        },
        {
          "name": "Laura Hernandez",
          "category": "Derecho Empresarial",
          "id": "as7-jkl"
        },
        {
          "name": "Gabriela Sanchez",
          "category": "Liderazgo y Gestión",
          "id": "as8-poi"
        },
        {
          "name": "Ricardo Gomez",
          "category": "Liderazgo y Gestión",
          "id": "as8-qwe"
        },
        {
          "name": "Miguel Gonzalez",
          "category": "Liderazgo y Gestión",
          "id": "as9-zxc"
        },
        {
          "name": "Miguel Gonzalez",
          "category": "Física Moderna",
          "id": "as9-zxc"
        },
        {
          "name": "Marcela Torres",
          "category": "Física Moderna",
          "id": "as9-vbn"
        }
      ]
    }
  },
  "pagina_horarios": {
    "menu": {
      "type": "button",
      "text": "Guardar"
    },
    "progress_bar": {
      "progress": 3
    },
    "arrow_nav": {
      "text": "Elige tu horario",
      "block": "right",
      "leftUrl": "/restrictions",
      "rightUrl": "none"
    },
    "horarios": [
        [
          {
            "name": "PROGRAMACION ORIENTADA A OBJETOS",
            "NRC": "2894",
            "teachers": [
              "Angulo Madrid, Eduardo"
            ],
            "blocks": [
              [
                "F",
                "0930 - 1128",
                "BLOQG2 - 34G2"
              ],
              [
                "R",
                "1630 - 1828",
                "BLOQB - SDU2"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "CALCULO 3",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "W",
                "1630 - 1828",
                "BLOQJ - 11J"
              ],
              [
                "T",
                "1630 - 1828",
                "BLOQJ - 34J"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "FISICA ELECTRICIDAD",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "T",
                "1430 - 1628",
                "BLOQJ - 25C"
              ],
              [
                "W",
                "1430 - 1529",
                "BLOQJ - 23C"
              ],
              [
                "F",
                "1430 - 1628",
                "BLOQL - L1-5"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "MATEMATICA DISCRETA",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "M",
                "1230 - 1428",
                "BLOQE - 11E"
              ],
              [
                "T",
                "0630 - 0729",
                "BLOQE - 11E"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "ESTRUCTURA DE DATOS I",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "T",
                "0730 - 0928",
                "BLOQJ - 34J"
              ],
              [
                "W",
                "1030 - 1228",
                "BLOQD - SDU4"
              ]
            ],
            "quotas": "1"
          }
        ],
        [
          {
            "name": "PROGRAMACION ORIENTADA A OBJETOS",
            "NRC": "2894",
            "teachers": [
              "Angulo Madrid, Eduardo"
            ],
            "blocks": [
              [
                "F",
                "0930 - 1128",
                "BLOQG2 - 34G2"
              ],
              [
                "R",
                "1630 - 1828",
                "BLOQB - SDU2"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "CALCULO 3",
            "NRC": "3107",
            "teachers": [
              "Uribe Jongbloed, Bernardo"
            ],
            "blocks": [
              [
                "W",
                "1630 - 1828",
                "BLOQJ - 11J"
              ],
              [
                "T",
                "1630 - 1828",
                "BLOQJ - 34J"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "INGLES VI",
            "NRC": "4873",
            "teachers": [
              "Torres Lopez, Leidy"
            ],
            "blocks": [
              [
                "M",
                "1430 - 1529",
                "BLOQJ - I1-21"
              ],
              [
                "T",
                "1230 - 1428",
                "BLOQJ - 53G1"
              ],
              [
                "R",
                "1430 - 1529",
                "BLOQI - I3-12"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "FISICA ELECTRICIDAD",
            "NRC": "2357",
            "teachers": [
              "Miranda Crespo, Juan"
            ],
            "blocks": [
              [
                "T",
                "1430 - 1628",
                "BLOQJ - 25C"
              ],
              [
                "W",
                "1430 - 1529",
                "BLOQJ - 23C"
              ],
              [
                "F",
                "1430 - 1628",
                "BLOQL - L1-5"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "MATEMATICA DISCRETA",
            "NRC": "3128",
            "teachers": [
              "Mejia Salazar, Diana"
            ],
            "blocks": [
              [
                "M",
                "1230 - 1428",
                "BLOQE - 11E"
              ],
              [
                "T",
                "0630 - 0729",
                "BLOQE - 11E"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "ESTRUCTURA DE DATOS I",
            "NRC": "2901",
            "teachers": [
              "Gamarra Acosta, Margarita"
            ],
            "blocks": [
              [
                "T",
                "0730 - 0928",
                "BLOQJ - 34J"
              ],
              [
                "W",
                "1030 - 1228",
                "BLOQD - SDU4"
              ]
            ],
            "quotas": "1"
          }
        ],
        [
          {
            "name": "PROGRAMACION ORIENTADA A OBJETOS",
            "NRC": "2894",
            "teachers": [
              "Angulo Madrid, Eduardo"
            ],
            "blocks": [
              [
                "F",
                "0930 - 1128",
                "BLOQG2 - 34G2"
              ],
              [
                "R",
                "1630 - 1828",
                "BLOQB - SDU2"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "CALCULO 3",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "W",
                "1630 - 1828",
                "BLOQJ - 11J"
              ],
              [
                "T",
                "1630 - 1828",
                "BLOQJ - 34J"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "INGLES VI",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "M",
                "1430 - 1529",
                "BLOQJ - I1-21"
              ],
              [
                "T",
                "1230 - 1428",
                "BLOQJ - 53G1"
              ],
              [
                "R",
                "1430 - 1529",
                "BLOQI - I3-12"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "FISICA ELECTRICIDAD",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "T",
                "1430 - 1628",
                "BLOQJ - 25C"
              ],
              [
                "W",
                "1430 - 1529",
                "BLOQJ - 23C"
              ],
              [
                "F",
                "1430 - 1628",
                "BLOQL - L1-5"
              ]
            ],
            "quotas": "1"
          },
          {
            "name": "ESTRUCTURA DE DATOS I",
            "NRC": "3010",
            "teachers": [
              "Uribe, Bernardo"
            ],
            "blocks": [
              [
                "T",
                "0730 - 0928",
                "BLOQJ - 34J"
              ],
              [
                "W",
                "1030 - 1228",
                "BLOQD - SDU4"
              ]
            ],
            "quotas": "1"
          }
        ]
    ]
  }
}

export default data