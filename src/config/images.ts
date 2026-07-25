/**
 * Centralized image paths for ORVIX STONE EGYPT.
 *
 * Selection rules:
 * - Full-frame marble / granite slab photography only for product heroes
 * - Process imagery for About / Export (quarry, factory, containers, warehouse)
 * - No lifestyle kitchens, bathrooms, furniture, or generic interiors
 *
 * Replace any remote URL with a local file under /public/images when client assets arrive.
 */
/** Stable Unsplash CDN URL (photo-* ids). */
const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80&fm=jpg`;

/** Verified full-frame stone textures (no interiors). */
const stone = {
  whiteBright: u('photo-1566041510394-cf7c8fe21800', 2400),
  whitePolished: u('photo-1623197532650-bacb8a68914e', 2000),
  whiteFine: u('photo-1640280882429-204f63d777e7', 1600),
  whiteWall: u('photo-1558346648-9757f2fa4474', 1600),
  whiteSoft: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1600',
  greyVeined: u('photo-1566305977571-5666677c6e98', 1600),
  greyCloud: u('photo-1551554781-c46200ea959d', 1600),
  greyAbstract: u('photo-1697497624156-bcccebccffc4', 1600),
  darkBrown: u('photo-1694382224140-cb7443c6a3ec', 1600),
  blackMarble: u('photo-1550053808-52a75a05955d', 1600),
  darkLinear: u('photo-1616362258782-7511b61686ea', 1600),
  honedDark: u('photo-1578662996442-48f60103fc96', 1600),
  /** Soft warm-white slab field — used for Galala / beige limestone family */
  beigeWarm: u('photo-1558346648-9757f2fa4474', 1600),
} as const;

/** Industrial / logistics — stone export context (not lifestyle). */
const process = {
  warehouse: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1800',
  containers: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1800',
  containerYard: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1800',
  industrial: u('photo-1541888946425-d81bb19240f5', 1800),
  cuttingSparks: u('photo-1504917595217-d4dc5ebe6122', 1600),
  cargoShip: u('photo-1605745341112-85968b19335b', 1800),
} as const;

function productGallery(base: string, accents: string[]): [string, string, string, string, string, string] {
  return [
    base, // 1 Full slab
    accents[0] ?? base, // 2 Texture close-up
    accents[1] ?? base, // 3 Polished finish
    accents[2] ?? base, // 4 Honed finish
    accents[3] ?? process.industrial, // 5 Raw block / industrial
    accents[4] ?? accents[0] ?? base, // 6 Application example (still stone-only)
  ];
}

export const images = {
  logos: {
    /** Typography wordmark — dark for light surfaces */
    primary: '/images/logos/orvix-wordmark-dark.svg',
    dark: '/images/logos/orvix-wordmark-dark.svg',
    /** Typography wordmark — light for dark surfaces */
    light: '/images/logos/orvix-wordmark-light.svg',
  },
  icons: {},
  hero: {
    /** Large bright polished marble slab */
    home: stone.whiteBright,
    cta: stone.whitePolished,
  },
  products: {
    gandola: stone.greyVeined,
    biancoHalayb: stone.whiteBright,
    redAswan: stone.darkBrown,
    newHalayb: stone.darkLinear,
    rosaElNasr: stone.blackMarble,
    galalaLight: stone.beigeWarm,
    rosaKaterina: stone.greyCloud,
  },
  productGalleries: {
    gandola: productGallery(stone.greyVeined, [
      stone.greyVeined,
      stone.whitePolished,
      stone.honedDark,
      process.industrial,
      stone.greyAbstract,
    ]),
    biancoHalayb: productGallery(stone.whiteBright, [
      stone.whiteFine,
      stone.whitePolished,
      stone.greyCloud,
      process.cuttingSparks,
      stone.whiteSoft,
    ]),
    redAswan: productGallery(stone.darkBrown, [
      stone.darkBrown,
      stone.blackMarble,
      stone.honedDark,
      process.industrial,
      stone.darkLinear,
    ]),
    newHalayb: productGallery(stone.darkLinear, [
      stone.darkLinear,
      stone.greyVeined,
      stone.honedDark,
      process.cuttingSparks,
      stone.blackMarble,
    ]),
    rosaElNasr: productGallery(stone.blackMarble, [
      stone.blackMarble,
      stone.darkBrown,
      stone.honedDark,
      process.industrial,
      stone.darkLinear,
    ]),
    galalaLight: productGallery(stone.beigeWarm, [
      stone.beigeWarm,
      stone.whitePolished,
      stone.whiteFine,
      process.cuttingSparks,
      stone.whiteWall,
    ]),
    rosaKaterina: productGallery(stone.greyCloud, [
      stone.greyCloud,
      stone.blackMarble,
      stone.honedDark,
      process.industrial,
      stone.darkBrown,
    ]),
  },
  gallery: {
    one: stone.whiteBright,
    two: stone.whiteFine,
    three: stone.darkBrown,
    four: stone.greyVeined,
    five: stone.blackMarble,
    six: stone.whitePolished,
    projects1: stone.whiteWall,
    projects2: stone.greyCloud,
    projects3: stone.darkLinear,
    marble1: stone.whiteBright,
    marble2: stone.whiteFine,
    marble3: stone.whiteSoft,
    marble4: stone.whitePolished,
    granite1: stone.darkBrown,
    granite2: stone.blackMarble,
    granite3: stone.honedDark,
    factory1: process.warehouse,
    factory2: process.cuttingSparks,
    quarry1: process.industrial,
    quarry2: process.cuttingSparks,
  },
  applications: {
    villas: stone.whiteBright,
    hotels: stone.whitePolished,
    commercial: stone.greyVeined,
    hospitality: stone.whiteFine,
    mosques: stone.beigeWarm,
    landscape: stone.darkBrown,
  },
  factory: {
    overview: process.warehouse,
  },
  about: {
    preview: process.warehouse,
    hero: process.industrial,
    story: process.cuttingSparks,
    whyEgypt: stone.whitePolished,
    cta: stone.darkBrown,
  },
  export: {
    map: process.containers,
    packaging: process.containerYard,
    warehouse: process.warehouse,
    cta: process.cargoShip,
  },
  contact: {
    map: process.containers,
    cta: stone.blackMarble,
  },
} as const;

export type ImagesConfig = typeof images;
