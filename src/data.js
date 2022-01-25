import { FaLongArrowAltRight } from "react-icons/fa";
import { MdSingleBed, MdOutlineLightbulb, MdMonitor } from "react-icons/md";
import {
  FaCouch,
  FaWifi,
  FaPumpSoap,
  FaSnowflake,
  FaToilet,
  FaShower,
  FaBath,
} from "react-icons/fa";
import { BiFridge, BiCloset } from "react-icons/bi";
import { GiTeapot, GiTowel, GiTable, GiCookingPot } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

import React from "react";

import dbl1 from "./images/dbl/DBL 001.jpg";
import dbl2 from "./images/dbl/DBL 003.jpg";
import dbl3 from "./images/dbl/DBL 004.jpg";
import dbl4 from "./images/dbl/DBL 006.jpg";
import dbl5 from "./images/dbl/DBL 007.jpg";
import dbl6 from "./images/dbl/DBL 009.jpg";

import deluxe1 from "./images/deluxe/DELUXE 002.jpg";
import deluxe2 from "./images/deluxe/DELUXE 004.jpg";
import deluxe3 from "./images/deluxe/DELUXE 005.jpg";
import deluxe4 from "./images/deluxe/DELUXE 008.jpg";
import deluxe5 from "./images/deluxe/DELUXE 011.jpg";
import deluxe6 from "./images/deluxe/DELUXE 012.jpg";

import premium1 from "./images/premium/TWIM PREMIUM 003.jpg";
import premium2 from "./images/premium/TWIM PREMIUM 004.jpg";
import premium3 from "./images/premium/TWIM PREMIUM 005.jpg";
import premium4 from "./images/premium/TWIM PREMIUM 006.jpg";
import premium5 from "./images/premium/TWIM PREMIUM 008.jpg";

import studio1 from "./images/studio/STUDIO 002.jpg";
import studio2 from "./images/studio/STUDIO 003.jpg";
import studio3 from "./images/studio/STUDIO 004.jpg";
import studio4 from "./images/studio/STUDIO 009.jpg";
import studio5 from "./images/studio/STUDIO 011.jpg";

import superior1 from "./images/superior/SUPERIOR 002.jpg";
import superior2 from "./images/superior/SUPERIOR 005.jpg";
import superior3 from "./images/superior/SUPERIOR 006.jpg";
import superior4 from "./images/superior/SUPERIOR 007.jpg";
import superior5 from "./images/superior/SUPERIOR 011.jpg";
import superior6 from "./images/superior/SUPERIOR 015.jpg";

import twin1 from "./images/twin/TWIN 001.jpg";
import twin2 from "./images/twin/TWIN 002.jpg";
import twin3 from "./images/twin/TWIN 004.jpg";
import twin4 from "./images/twin/TWIN 005.jpg";
import twin5 from "./images/twin/TWIN 006.jpg";

import restauracja1 from "./images/restauracja/RESTAURACJA 001.jpg";
import restauracja2 from "./images/restauracja/RESTAURACJA 004.jpg";
import restauracja3 from "./images/restauracja/RESTAURACJA 007.jpg";
import restauracja4 from "./images/restauracja/RESTAURACJA 010.jpg";
import restauracja5 from "./images/restauracja/RESTAURACJA 011.jpg";
import restauracja6 from "./images/restauracja/RESTAURACJA 0014.jpg";
import restauracja7 from "./images/restauracja/RESTAURACJA 015.jpg";

import recepcjaBar1 from "./images/recepcja&bar/RECEPCJA 001.jpg";
import recepcjaBar2 from "./images/recepcja&bar/RECEPCJA 003.jpg";
import recepcjaBar3 from "./images/recepcja&bar/RECEPCJA 004.jpg";
import recepcjaBar4 from "./images/recepcja&bar/BAR 002.jpg";
import recepcjaBar5 from "./images/recepcja&bar/BAR 003.jpg";

export const sublinks = [
  {
    pageOne: "pokoje",
    links: [
      {
        label: "pokój 2-osobowy TWIN",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/twin",
      },
      {
        label: "pokój 2-osobowy DOUBLE",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/double",
      },
      {
        label: "pokój 2-osobowy PREMIUM",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/premium",
      },
      {
        label: "apartament SUPERIOR",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/superior",
      },
      {
        label: "apartament STUDIO",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/studio",
      },
      {
        label: "apartament DELUXE",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/deluxe",
      },
    ],
  },
  {
    pageOne: "o nas",
    links: [
      { label: "hotel", icon: <FaLongArrowAltRight />, url: "/oNas/oHotelu" },
      {
        label: "kraków",
        icon: <FaLongArrowAltRight />,
        url: "/oNas/oKrakowie",
      },
    ],
  },
  {
    pageOne: "usługi",
    links: [
      {
        label: "transfery i wycieczki",
        icon: <FaLongArrowAltRight />,
        url: "/uslugi/transport&wycieczki",
      },
      {
        label: "restauracja",
        icon: <FaLongArrowAltRight />,
        url: "/uslugi/restauracja",
      },
      {
        label: "parking",
        icon: <FaLongArrowAltRight />,
        url: "/uslugi/parking",
      },
    ],
  },
  {
    pageOne: "kontakt",
    links: [
      {
        label: "kontakt",
        icon: <FaLongArrowAltRight />,
        url: "/kontakt/formularzKontaktowy",
      },
      { label: "faq", icon: <FaLongArrowAltRight />, url: "/kontakt/faq" },
      {
        label: "regulamin",
        icon: <FaLongArrowAltRight />,
        url: "/kontakt/regulamin",
      },
      {
        label: "rodo i cookies",
        icon: <FaLongArrowAltRight />,
        url: "/kontakt/rodo&cookies",
      },
    ],
  },
];
export const sublinksEN = [
  {
    pageOne: "rooms",
    links: [
      {
        label: "TWIN room",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/twin",
      },
      {
        label: "DOUBLE room",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/double",
      },
      {
        label: "PREMIUM room",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/premium",
      },
      {
        label: "SUPERIOR room",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/superior",
      },
      {
        label: "STUDIO room",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/studio",
      },
      {
        label: "DELUXE room",
        icon: <FaLongArrowAltRight />,
        url: "/pokoje/deluxe",
      },
    ],
  },
  {
    pageOne: "about us",
    links: [
      { label: "hotel", icon: <FaLongArrowAltRight />, url: "/oNas/oHotelu" },
      {
        label: "cracow",
        icon: <FaLongArrowAltRight />,
        url: "/oNas/oKrakowie",
      },
    ],
  },
  {
    pageOne: "services",
    links: [
      {
        label: "transfers and tours",
        icon: <FaLongArrowAltRight />,
        url: "/uslugi/transport&wycieczki",
      },
      {
        label: "restaurant",
        icon: <FaLongArrowAltRight />,
        url: "/uslugi/restauracja",
      },
      {
        label: "parking",
        icon: <FaLongArrowAltRight />,
        url: "/uslugi/parking",
      },
    ],
  },
  {
    pageOne: "contact",
    links: [
      {
        label: "contact",
        icon: <FaLongArrowAltRight />,
        url: "/kontakt/formularzKontaktowy",
      },
      { label: "faq", icon: <FaLongArrowAltRight />, url: "/kontakt/faq" },
      {
        label: "regulations",
        icon: <FaLongArrowAltRight />,
        url: "/kontakt/regulamin",
      },
      {
        label: "rodo and cookies",
        icon: <FaLongArrowAltRight />,
        url: "/kontakt/rodo&cookies",
      },
    ],
  },
];

export const gallery = [
  {
    id: 1,
    img: [twin1, twin2, twin3, twin4, twin5],
    category: "twin",
  },
  {
    id: 2,
    img: [dbl1, dbl2, dbl3, dbl4, dbl5, dbl6],
    category: "double",
  },
  {
    id: 3,
    img: [premium1, premium2, premium3, premium4, premium5],
    category: "premium",
  },
  {
    id: 4,
    img: [superior1, superior2, superior3, superior4, superior5, superior6],
    category: "superior",
  },
  {
    id: 5,
    img: [studio1, studio2, studio3, studio4, studio5],
    category: "studio",
  },
  {
    id: 6,
    img: [deluxe1, deluxe2, deluxe3, deluxe4, deluxe5, deluxe6],
    category: "deluxe",
  },
  {
    id: 7,
    img: [
      restauracja1,
      restauracja2,
      restauracja3,
      restauracja4,
      restauracja5,
      restauracja6,
      restauracja7,
    ],
    category: "restauracja",
  },
  {
    id: 8,
    img: [recepcjaBar1, recepcjaBar2, recepcjaBar3, recepcjaBar4, recepcjaBar5],
    category: "recepcja i bar",
  },
];
export const galleryEN = [
  {
    id: 1,
    img: [twin1, twin2, twin3, twin4, twin5],
    category: "twin",
  },
  {
    id: 2,
    img: [dbl1, dbl2, dbl3, dbl4, dbl5, dbl6],
    category: "double",
  },
  {
    id: 3,
    img: [premium1, premium2, premium3, premium4, premium5],
    category: "premium",
  },
  {
    id: 4,
    img: [superior1, superior2, superior3, superior4, superior5, superior6],
    category: "superior",
  },
  {
    id: 5,
    img: [studio1, studio2, studio3, studio4, studio5],
    category: "studio",
  },
  {
    id: 6,
    img: [deluxe1, deluxe2, deluxe3, deluxe4, deluxe5, deluxe6],
    category: "deluxe",
  },
  {
    id: 7,
    img: [
      restauracja1,
      restauracja2,
      restauracja3,
      restauracja4,
      restauracja5,
      restauracja6,
      restauracja7,
    ],
    category: "restaurant",
  },
  {
    id: 8,
    img: [recepcjaBar1, recepcjaBar2, recepcjaBar3, recepcjaBar4, recepcjaBar5],
    category: "reception and bar",
  },
];

export const questionsData = [
  {
    id: 1,
    title:
      "Czym różnią się od siebie poszczególne typy apartamentów – Standard, Superior, Deluxe?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },

  {
    id: 2,
    title: "Podane ceny są cenami za apartament czy za osobę?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 3,
    title: "Co znajduje się na wyposażeniu pokojów?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 4,
    title:
      "Z jakich udogodnień można skorzystać na terenie Aparthotelu Miodowa?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 5,
    title: "Czy istnieje możliwość skorzystania z parkingu?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 6,
    title: "O której godzinie rozpoczyna się, a o której kończy doba hotelowa?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 7,
    title: "Jakie są konsekwencje anulowania rezerwacji?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 8,
    title: "Czy w Aparthotelu Miodowa akceptowana jest płatność kartą?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
];
export const questionsDataEN = [
  {
    id: 1,
    title:
      "What is the difference between the different types of apartments - Standard, Superior, Deluxe?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 2,
    title: "The given prices are prices per apartment or per person?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 3,
    title: "What's on the room equipment?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 4,
    title: "What amenities can you use at Aparthotel Miodowa?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 5,
    title: "Is it possible to use the car park?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 6,
    title: "What time does the hotel day begin and end?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 7,
    title: "What are the consequences of canceling the reservation?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
  {
    id: 8,
    title: "Is card payment accepted at Aparthotel Miodowa?",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam expedita quae aliquid! Expedita fuga dolores maxime qui unde quisquam non in sequi natus animi. Mollitia, consequuntur quos. Assumenda, at.",
  },
];

export const items = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "pokój 2-osobowy TWIN",
      slug: "/pokoje/twin",
      type: "pokój",
      price: 220,
      size: 16,
      capacity: 2,
      featured: false,
      breakfast: true,
      bathroom: "prysznic",
      kitchen: "lodówka, czajnik",
      beds: "2x 90cm",
      sofa: false,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "łóżka",
          icon: <MdSingleBed />,
        },
        {
          label: "lampka",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Szafa",
          icon: <BiCloset />,
        },
        // {
        //   label: "Stół",
        //   icon: <GiTable />,
        // },
        // {
        //   label: "Sofa",
        //   icon: <FaCouch />,
        // },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Telefon",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Klimatyzacja",
          icon: <FaSnowflake />,
        },
        {
          label: "Lodówka",
          icon: <BiFridge />,
        },
        {
          label: "Czajnik",
          icon: <GiTeapot />,
        },
        // {
        //   label: "kuchnia",
        //   icon: <GiCookingPot />,
        // },
        {
          label: "Ręczniki",
          icon: <GiTowel />,
        },
        {
          label: "Szamponiki",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Prysznic",
          icon: <FaShower />,
        },
        // {
        //   label: "Wanna",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: twin1,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin2,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin3,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin4,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "pokój 2-osobowy DOUBLE",
      slug: "/pokoje/double",
      type: "pokój",
      price: 220,
      size: 16,
      capacity: 2,
      featured: true,
      breakfast: true,
      bathroom: "prysznic",
      kitchen: "lodówka, czajnik",
      beds: "1x 160cm",
      sofa: false,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "łóżko",
          icon: <MdSingleBed />,
        },
        {
          label: "lampka",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Szafa",
          icon: <BiCloset />,
        },
        // {
        //   label: "Stół",
        //   icon: <GiTable />,
        // },
        // {
        //   label: "Sofa",
        //   icon: <FaCouch />,
        // },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Telefon",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Klimatyzacja",
          icon: <FaSnowflake />,
        },
        {
          label: "Lodówka",
          icon: <BiFridge />,
        },
        {
          label: "Czajnik",
          icon: <GiTeapot />,
        },
        // {
        //   label: "kuchnia",
        //   icon: <GiCookingPot />,
        // },
        {
          label: "Ręczniki",
          icon: <GiTowel />,
        },
        {
          label: "Szamponiki",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Prysznic",
          icon: <FaShower />,
        },
        // {
        //   label: "Wanna",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: dbl1,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl2,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl3,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl4,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl5,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "pokój 2-osobowy PREMIUM",
      slug: "/pokoje/premium",
      type: "pokój",
      price: 260,
      size: 22,
      capacity: 4,
      featured: false,
      breakfast: true,
      bathroom: "prysznic",
      kitchen: "lodówka, czajnik",
      beds: "2x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "łóżka",
          icon: <MdSingleBed />,
        },
        {
          label: "lampka",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Szafa",
          icon: <BiCloset />,
        },
        {
          label: "Stół",
          icon: <GiTable />,
        },
        {
          label: "Sofa",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Telefon",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Klimatyzacja",
          icon: <FaSnowflake />,
        },
        {
          label: "Lodówka",
          icon: <BiFridge />,
        },
        {
          label: "Czajnik",
          icon: <GiTeapot />,
        },
        // {
        //   label: "kuchnia",
        //   icon: <GiCookingPot />,
        // },
        {
          label: "Ręczniki",
          icon: <GiTowel />,
        },
        {
          label: "Szamponiki",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Prysznic",
          icon: <FaShower />,
        },
        // {
        //   label: "Wanna",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: premium2,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium1,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium3,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium4,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "apartament SUPERIOR",
      slug: "/pokoje/superior",
      type: "apartament",
      price: 300,
      size: 38,
      capacity: 4,
      featured: true,
      breakfast: true,
      bathroom: "prysznic",
      kitchen: "kuchnia",
      beds: "2x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "łóżka",
          icon: <MdSingleBed />,
        },
        {
          label: "lampka",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Szafa",
          icon: <BiCloset />,
        },
        {
          label: "Stół",
          icon: <GiTable />,
        },
        {
          label: "Sofa",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 40"`,
          icon: <MdMonitor />,
        },
        {
          label: "Telefon",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Klimatyzacja",
          icon: <FaSnowflake />,
        },
        {
          label: "Lodówka",
          icon: <BiFridge />,
        },
        {
          label: "Czajnik",
          icon: <GiTeapot />,
        },
        {
          label: "kuchnia",
          icon: <GiCookingPot />,
        },
        {
          label: "Ręczniki",
          icon: <GiTowel />,
        },
        {
          label: "Szamponiki",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Prysznic",
          icon: <FaShower />,
        },
        // {
        //   label: "Wanna",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: superior1,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior2,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior3,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior4,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior5,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "apartament STUDIO",
      slug: "/pokoje/studio",
      type: "apartament",
      price: 320,
      size: 32,
      capacity: 4,
      featured: true,
      breakfast: true,
      bathroom: "prysznic",
      kitchen: "kuchnia",
      beds: "2x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "łóżka",
          icon: <MdSingleBed />,
        },
        {
          label: "lampka",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Szafa",
          icon: <BiCloset />,
        },
        {
          label: "Stół",
          icon: <GiTable />,
        },
        {
          label: "Sofa",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 40"`,
          icon: <MdMonitor />,
        },
        {
          label: "Telefon",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Klimatyzacja",
          icon: <FaSnowflake />,
        },
        {
          label: "Lodówka",
          icon: <BiFridge />,
        },
        {
          label: "Czajnik",
          icon: <GiTeapot />,
        },
        {
          label: "kuchnia",
          icon: <GiCookingPot />,
        },
        {
          label: "Ręczniki",
          icon: <GiTowel />,
        },
        {
          label: "Szamponiki",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Prysznic",
          icon: <FaShower />,
        },
        // {
        //   label: "Wanna",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: studio1,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio2,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio3,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio4,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "apartament DELUXE",
      slug: "/pokoje/deluxe",
      type: "apartament",
      price: 350,
      size: 40,
      capacity: 4,
      featured: true,
      breakfast: true,
      bathroom: "wanna",
      kitchen: "kuchnia",
      beds: "3x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "łóżka",
          icon: <MdSingleBed />,
        },
        {
          label: "lampka",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Szafa",
          icon: <BiCloset />,
        },
        {
          label: "Stół",
          icon: <GiTable />,
        },
        {
          label: "Sofa",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 40"`,
          icon: <MdMonitor />,
        },
        {
          label: "Telefon",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Klimatyzacja",
          icon: <FaSnowflake />,
        },
        {
          label: "Lodówka",
          icon: <BiFridge />,
        },
        {
          label: "Czajnik",
          icon: <GiTeapot />,
        },
        {
          label: "kuchnia",
          icon: <GiCookingPot />,
        },
        {
          label: "Ręczniki",
          icon: <GiTowel />,
        },
        {
          label: "Szamponiki",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Prysznic",
          icon: <FaShower />,
        },
        {
          label: "Wanna",
          icon: <FaBath />,
        },
      ],
      images: [
        {
          fields: {
            file: {
              url: deluxe1,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe2,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe3,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe4,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe5,
            },
          },
        },
      ],
    },
  },
];
export const itemsEN = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "TWIN room",
      slug: "/pokoje/twin",
      type: "room",
      price: 220,
      size: 16,
      capacity: 2,
      featured: false,
      breakfast: true,
      bathroom: "shower",
      kitchen: "fridge, kettle",
      beds: "2x 90cm",
      sofa: false,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "Beds",
          icon: <MdSingleBed />,
        },
        {
          label: "Bedside Lamp",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Wardrobe",
          icon: <BiCloset />,
        },
        // {
        //   label: "Table",
        //   icon: <GiTable />,
        // },
        // {
        //   label: "Couch",
        //   icon: <FaCouch />,
        // },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Phone",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Air-Conditioner",
          icon: <FaSnowflake />,
        },
        {
          label: "Fridge",
          icon: <BiFridge />,
        },
        {
          label: "Kettle",
          icon: <GiTeapot />,
        },
        // {
        //   label: "Kitchen",
        //   icon: <GiCookingPot />,
        // },
        {
          label: "Towels",
          icon: <GiTowel />,
        },
        {
          label: "Shampoos",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Shower",
          icon: <FaShower />,
        },
        // {
        //   label: "Bath",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: twin1,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin2,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin3,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin4,
            },
          },
        },
        {
          fields: {
            file: {
              url: twin5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "DOUBLE room",
      slug: "/pokoje/double",
      type: "room",
      price: 220,
      size: 16,
      capacity: 2,
      featured: true,
      breakfast: true,
      bathroom: "shower",
      kitchen: "fridge, kettle",
      beds: "1x 160cm",
      sofa: false,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "Beds",
          icon: <MdSingleBed />,
        },
        {
          label: "Bedside Lamp",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Wardrobe",
          icon: <BiCloset />,
        },
        // {
        //   label: "Table",
        //   icon: <GiTable />,
        // },
        // {
        //   label: "Couch",
        //   icon: <FaCouch />,
        // },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Phone",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Air-Conditioner",
          icon: <FaSnowflake />,
        },
        {
          label: "Fridge",
          icon: <BiFridge />,
        },
        {
          label: "Kettle",
          icon: <GiTeapot />,
        },
        // {
        //   label: "Kitchen",
        //   icon: <GiCookingPot />,
        // },
        {
          label: "Towels",
          icon: <GiTowel />,
        },
        {
          label: "Shampoos",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Shower",
          icon: <FaShower />,
        },
        // {
        //   label: "Bath",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: dbl1,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl2,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl3,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl4,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl5,
            },
          },
        },
        {
          fields: {
            file: {
              url: dbl6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "PREMIUM room",
      slug: "/pokoje/premium",
      type: "room",
      price: 260,
      size: 22,
      capacity: 4,
      featured: false,
      breakfast: true,
      bathroom: "shower",
      kitchen: "fridge, kettle",
      beds: "2x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "Beds",
          icon: <MdSingleBed />,
        },
        {
          label: "Bedside Lamp",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Wardrobe",
          icon: <BiCloset />,
        },
        // {
        //   label: "Table",
        //   icon: <GiTable />,
        // },
        {
          label: "Couch",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Phone",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Air-Conditioner",
          icon: <FaSnowflake />,
        },
        {
          label: "Fridge",
          icon: <BiFridge />,
        },
        {
          label: "Kettle",
          icon: <GiTeapot />,
        },
        // {
        //   label: "Kitchen",
        //   icon: <GiCookingPot />,
        // },
        {
          label: "Towels",
          icon: <GiTowel />,
        },
        {
          label: "Shampoos",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Shower",
          icon: <FaShower />,
        },
        // {
        //   label: "Bath",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: premium2,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium1,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium3,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium4,
            },
          },
        },
        {
          fields: {
            file: {
              url: premium5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "SUPERIOR apartment",
      slug: "/pokoje/superior",
      type: "apartment",
      price: 300,
      size: 38,
      capacity: 4,
      featured: true,
      breakfast: true,
      bathroom: "shower",
      kitchen: "kettle",
      beds: "2x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "Beds",
          icon: <MdSingleBed />,
        },
        {
          label: "Bedside Lamp",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Wardrobe",
          icon: <BiCloset />,
        },
        {
          label: "Table",
          icon: <GiTable />,
        },
        {
          label: "Couch",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Phone",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Air-Conditioner",
          icon: <FaSnowflake />,
        },
        {
          label: "Fridge",
          icon: <BiFridge />,
        },
        {
          label: "Kettle",
          icon: <GiTeapot />,
        },
        {
          label: "Kitchen",
          icon: <GiCookingPot />,
        },
        {
          label: "Towels",
          icon: <GiTowel />,
        },
        {
          label: "Shampoos",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Shower",
          icon: <FaShower />,
        },
        // {
        //   label: "Bath",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: superior1,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior2,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior3,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior4,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior5,
            },
          },
        },
        {
          fields: {
            file: {
              url: superior6,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "STUDIO apartment",
      slug: "/pokoje/studio",
      type: "apartment",
      price: 320,
      size: 32,
      capacity: 4,
      featured: true,
      breakfast: true,
      bathroom: "shower",
      kitchen: "kettle",
      beds: "2x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "Beds",
          icon: <MdSingleBed />,
        },
        {
          label: "Bedside Lamp",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Wardrobe",
          icon: <BiCloset />,
        },
        {
          label: "Table",
          icon: <GiTable />,
        },
        {
          label: "Couch",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Phone",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Air-Conditioner",
          icon: <FaSnowflake />,
        },
        {
          label: "Fridge",
          icon: <BiFridge />,
        },
        {
          label: "Kettle",
          icon: <GiTeapot />,
        },
        {
          label: "Kitchen",
          icon: <GiCookingPot />,
        },
        {
          label: "Towels",
          icon: <GiTowel />,
        },
        {
          label: "Shampoos",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Shower",
          icon: <FaShower />,
        },
        // {
        //   label: "Bath",
        //   icon: <FaBath />,
        // },
      ],
      images: [
        {
          fields: {
            file: {
              url: studio1,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio2,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio3,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio4,
            },
          },
        },
        {
          fields: {
            file: {
              url: studio5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "DELUXE apartment",
      slug: "/pokoje/deluxe",
      type: "apartment",
      price: 350,
      size: 40,
      capacity: 4,
      featured: true,
      breakfast: true,
      bathroom: "bath",
      kitchen: "kitchen",
      beds: "3x 90cm",
      sofa: true,
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae minus totam quisquam temporibus unde? Voluptas possimus tempora, facilis atque ipsum temporibus dicta quos officia? Corrupti at ea labore eum earum omnis sequi animi dolore obcaecati? Sequi placeat, repellendus velit beatae officia culpa mollitia cum quam corporis enim nostrum. Atque dolor dicta omnis reiciendis unde fuga exercitationem deserunt porro, aut nobis enim magnam minima nulla tenetur fugiat molestiae velit quas voluptas quos, vero quidem consectetur molestias. Quaerat quibusdam repellendus ipsum voluptates fugiat. Nesciunt dolor consequuntur, ullam eius enim, eaque similique error perferendis dolore nulla iusto voluptas ab ipsum cupiditate! Necessitatibus!",
      ],
      extras: [
        {
          label: "Beds",
          icon: <MdSingleBed />,
        },
        {
          label: "Bedside Lamp",
          icon: <MdOutlineLightbulb />,
        },
        {
          label: "Wardrobe",
          icon: <BiCloset />,
        },
        {
          label: "Table",
          icon: <GiTable />,
        },
        {
          label: "Couch",
          icon: <FaCouch />,
        },
        {
          label: "Wi-Fi",
          icon: <FaWifi />,
        },
        {
          label: `TV 32"`,
          icon: <MdMonitor />,
        },
        {
          label: "Phone",
          icon: <BsFillTelephoneFill />,
        },
        {
          label: "Air-Conditioner",
          icon: <FaSnowflake />,
        },
        {
          label: "Fridge",
          icon: <BiFridge />,
        },
        {
          label: "Kettle",
          icon: <GiTeapot />,
        },
        {
          label: "Kitchen",
          icon: <GiCookingPot />,
        },
        {
          label: "Towels",
          icon: <GiTowel />,
        },
        {
          label: "Shampoos",
          icon: <FaPumpSoap />,
        },
        {
          label: "WC",
          icon: <FaToilet />,
        },
        {
          label: "Shower",
          icon: <FaShower />,
        },
        {
          label: "Bath",
          icon: <FaBath />,
        },
      ],
      images: [
        {
          fields: {
            file: {
              url: deluxe1,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe2,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe3,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe4,
            },
          },
        },
        {
          fields: {
            file: {
              url: deluxe5,
            },
          },
        },
      ],
    },
  },
];
