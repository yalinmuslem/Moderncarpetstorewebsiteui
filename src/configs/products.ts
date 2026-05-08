export interface ProductSpec {
  label: string;
  value: string | number;
}

export type Product = {
  id: number;
  title: string;
  tileImg: string;
  roomImg?: string;
  specs?: ProductSpec[];
};

const INGLEWOOD_SAXONY_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Excellon Polypropylene" },
  { label: "Tog Rating", value: "1.3" },
  { label: "Suitability", value: "Extra Heavy Domestic" },
  { label: "Widths", value: "4m, 5m" },
];

export const CORMAR_INGLEWOOD_SAXONY_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Venetian Marble",
    tileImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/venetian-marble.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/venetian-marble-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 2,
    title: "Ganache",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/ganache.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/ganache-preview.webp",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 3,
    title: "Peak Frost",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/peak-frost.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/peak-frost-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 4,
    title: "Manor Stone",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/manor-stone.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/manor-stone-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 5,
    title: "Rolling Fog",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/rolling-fog.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/rolling-fog-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 6,
    title: "North Star",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/north-star.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/north-star-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 7,
    title: "Nimbus",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/nimbus.webp",
    roomImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/nimbus-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 8,
    title: "Winter Ice",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/winter-ice.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/winter-ice-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 9,
    title: "Night Sky",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/night-sky.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/night-sky-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 10,
    title: "Fordham Flax",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/fordham-flax.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/fordham-flax-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 11,
    title: "Devon Cream",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/devon-cream.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/devon-cream-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 12,
    title: "Sandbank",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/sandbank.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/sandbank-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 13,
    title: "Aspen Blue",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/aspen-blue.webp",
    roomImg:
      "/tiles/carpet/cormar-carpets/inglewood-saxony/aspen-blue-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 14,
    title: "Willow",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/willow.webp",
    roomImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/willow-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
  {
    id: 15,
    title: "Ivory",
    tileImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/ivory.webp",
    roomImg: "/tiles/carpet/cormar-carpets/inglewood-saxony/ivory-preview.png",
    specs: INGLEWOOD_SAXONY_SPECS,
  },
];
const PRIMO_TEXTURES_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Excellon Polypropylene" },
  { label: "Suitability", value: "Heavy Domestic / Medium Contract" },
  { label: "Widths", value: "4 Metres, 5 Metres" },
  { label: "Style", value: "Easy Clean Loop" },
];

export const CORMAR_PRIMO_TEXTURE_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Canvas",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/canvas.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/canvas-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 2,
    title: "Pale Linen",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/pale-linen.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/pale-linen-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 3,
    title: "Tapestry",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/tapestry.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/tapestry-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 4,
    title: "Chalice",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/chalice.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/chalice-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 5,
    title: "Elk",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/elk.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/elk-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 6,
    title: "River Cane",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/river-cane.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/river-cane-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 7,
    title: "Pear Tree",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/pear-tree.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/pear-tree-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 8,
    title: "Thread",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/thread.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/thread-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 9,
    title: "Cobblestone",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/cobblestone.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/cobblestone-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 10,
    title: "Moon Mist",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/moon-mist.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/moon-mist-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 11,
    title: "Amulet",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/amulet.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/amulet-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 12,
    title: "Sesame Seed",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/sesame-seed.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/sesame-seed-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 13,
    title: "Sea Shale",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/sea-shale.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/sea-shale-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 14,
    title: "Porcini",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/porcini.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/porcini-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 15,
    title: "Hemp",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/hemp.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/hemp-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 16,
    title: "Flint",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/flint.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/flint-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 17,
    title: "Flaxseed",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/flaxseed.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/flaxseed-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 18,
    title: "Cornish Clay",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/cornish-clay.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/primo-textures/cornish-clay-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 19,
    title: "Boulder",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/boulder.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/primo-textures/boulder-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
  {
    id: 20,
    title: "Antelope",
    tileImg: "/tiles/carpet/cormar-carpets/primo-textures/antelope.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/antelope-preview.png",
    specs: PRIMO_TEXTURES_SPECS,
  },
];

const SENSATION_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Luxelle Polypropylene" },
  { label: "Tog Rating", value: "1.7" },
  { label: "Suitability", value: "Heavy Domestic / Medium Contract" },
  { label: "Widths", value: "4 Metres, 5 Metres" },
];

export const CORMAR_SENSATION_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Ventura Opal",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/ventura-opal.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/ventura-opal-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 2,
    title: "Latte",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/latte.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/latte-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 3,
    title: "Soft Orchid",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/soft-orchid.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/soft-orchid-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 4,
    title: "Mother of Pearl",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/mother-of-pearl.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/sensation/mother-of-pearl-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 5,
    title: "Ammonite",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/ammonite.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/ammonite-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 6,
    title: "Icing Sugar",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/icing-sugar.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/icing-sugar-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 7,
    title: "Cambrian Stone",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/cambrian-stone.jpg",
    roomImg:
      "/tiles/carpet/cormar-carpets/sensation/cambrian-stone-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 8,
    title: "Arctic Grey",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/arctic-grey.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/arctic-grey-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 9,
    title: "Shale Grey",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/shale-grey.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/shale-grey-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 10,
    title: "Lone Star",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/lone-star.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/lone-star-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 11,
    title: "Cape Diamond",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/cape-diamond.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/cape-diamond-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 12,
    title: "Light Taupe",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/light-taupe.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/light-taupe-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 13,
    title: "Laguna",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/laguna.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/laguna-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 14,
    title: "Greystone",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/greystone.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/greystone-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 15,
    title: "Monterey Sand",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/monterey-sand.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/monterey-sand-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 16,
    title: "Gazelle",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/gazelle.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/gazelle-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 17,
    title: "Eau De Nil",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/eau-de-nil.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/eau-de-nil-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 18,
    title: "Radiance",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/radiance.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/radiance-preview.png",
    specs: SENSATION_SPECS,
  },
  {
    id: 19,
    title: "Wedgwood",
    tileImg: "/tiles/carpet/cormar-carpets/sensation/wedgwood.jpg",
    roomImg: "/tiles/carpet/cormar-carpets/sensation/wedgwood-preview.png",
    specs: SENSATION_SPECS,
  },
];
const FURLONG_BLISS_SPECS: ProductSpec[] = [
  { label: "Material", value: "Bleach Cleanable / Mothproof" },
  { label: "Tog Value", value: "1.63" },
  { label: "Suitability", value: "Heavy Domestic / General Commercial" },
  { label: "Yarn", value: "2-Ply Yarn" },
  { label: "Widths", value: "4 & 5 Metres" },
  { label: "Warranty", value: "7 Year Residential" },
];

export const FURLONG_BLISS_SAXONY_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Foggy Night 2551",
    tileImg: "/tiles/carpet/furlong/bliss/foggy-night-2551.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/foggy-night-2551-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 2,
    title: "Pebble Beach 2552",
    tileImg: "/tiles/carpet/furlong/bliss/pebble-beach-2552.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/pebble-beach-2552-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 3,
    title: "Sienna 2553",
    tileImg: "/tiles/carpet/furlong/bliss/sienna-2553.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/sienna-2553-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 4,
    title: "Tuscan 2554",
    tileImg: "/tiles/carpet/furlong/bliss/tuscan-2554.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/tuscan-2554-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 5,
    title: "Coral Reef 2555",
    tileImg: "/tiles/carpet/furlong/bliss/coral-reef-2555.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/coral-reef-2555-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 6,
    title: "Granola 2556",
    tileImg: "/tiles/carpet/furlong/bliss/granola-2556.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/granola-2556-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 7,
    title: "Oat Milk 2557",
    tileImg: "/tiles/carpet/furlong/bliss/oat-milk-2557.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/oat-milk-2557-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 8,
    title: "Meringue 2558",
    tileImg: "/tiles/carpet/furlong/bliss/meringue-2558.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/meringue-2558-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 9,
    title: "French Grey 2559",
    tileImg: "/tiles/carpet/furlong/bliss/french-grey-2559.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/french-grey-2559-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 10,
    title: "Silk Shadow 2560",
    tileImg: "/tiles/carpet/furlong/bliss/silk-shadow-2560.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/silk-shadow-2560-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 11,
    title: "Skylight 2561",
    tileImg: "/tiles/carpet/furlong/bliss/skylight-2561.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/skylight-2561-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
  {
    id: 12,
    title: "Misty Morning 2562",
    tileImg: "/tiles/carpet/furlong/bliss/misty-morning-2562.jpg",
    roomImg: "/tiles/carpet/furlong/bliss/misty-morning-2562-preview.png",
    specs: FURLONG_BLISS_SPECS,
  },
];
const TRIDENT_TWIST_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Carefree PP (Bleach Cleanable)" },
  { label: "TOG Value", value: "1.37" },
  { label: "Suitability", value: "Class 33 - Heavy Commercial" },
  { label: "Backing", value: "Combi-bac" },
  { label: "Technical", value: "Tenth Gauge / 2-Ply Yarn" },
  { label: "Widths", value: "4m, 5m" },
  { label: "Warranty", value: "10 Year Residential" },
];

export const FURLONG_TRIDENT_TWIST_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Obsidian 1750",
    tileImg: "/tiles/carpet/furlong/trident-twist/obsidian-1750.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/obsidian-1750-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 2,
    title: "Winter Barley 1751",
    tileImg: "/tiles/carpet/furlong/trident-twist/winter-barley-1751.jpg",
    roomImg:
      "/tiles/carpet/furlong/trident-twist/winter-barley-1751-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 3,
    title: "Honey Mustard 1752",
    tileImg: "/tiles/carpet/furlong/trident-twist/honey-mustard-1752.jpg",
    roomImg:
      "/tiles/carpet/furlong/trident-twist/honey-mustard-1752-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 4,
    title: "Old Grouse 1753",
    tileImg: "/tiles/carpet/furlong/trident-twist/old-grouse-1753.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/old-grouse-1753-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 5,
    title: "Coldstream 1754",
    tileImg: "/tiles/carpet/furlong/trident-twist/coldstream-1754.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/coldstream-1754-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 6,
    title: "Loch Inver 1755",
    tileImg: "/tiles/carpet/furlong/trident-twist/loch-inver-1755.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/loch-inver-1755-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 7,
    title: "Saltire 1756",
    tileImg: "/tiles/carpet/furlong/trident-twist/saltire-1756.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/saltire-1756-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 8,
    title: "Iona 1757",
    tileImg: "/tiles/carpet/furlong/trident-twist/iona-1757.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/iona-1757-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 9,
    title: "Moraine 1758",
    tileImg: "/tiles/carpet/furlong/trident-twist/moraine-1758.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/moraine-1758-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 10,
    title: "Thistle 1759",
    tileImg: "/tiles/carpet/furlong/trident-twist/thistle-1759.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/thistle-1759-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 11,
    title: "Shieling 1760",
    tileImg: "/tiles/carpet/furlong/trident-twist/shieling-1760.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/shieling-1760-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
  {
    id: 12,
    title: "Tundra 1761",
    tileImg: "/tiles/carpet/furlong/trident-twist/tundra-1761.jpg",
    roomImg: "/tiles/carpet/furlong/trident-twist/tundra-1761-preview.png",
    specs: TRIDENT_TWIST_SPECS,
  },
];
const FURLONG_FAIRWAY_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Polypropylene (Bleach Cleanable)" },
  { label: "Backing", value: "Blue Felt Backing" },
  { label: "TOG Value", value: "1.17" },
  { label: "Suitability", value: "Class 21 - Light Domestic" },
  { label: "Widths", value: "4m, 5m" },
  { label: "Warranty", value: "7 Year Residential" },
];

export const FURLONG_FAIRWAY_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Grey Wolf 237",
    tileImg: "/tiles/carpet/furlong/fairway/grey-wolf-237.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/grey-wolf-237-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
  {
    id: 2,
    title: "Ginger Nut 243",
    tileImg: "/tiles/carpet/furlong/fairway/ginger-nut-243.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/ginger-nut-243-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
  {
    id: 3,
    title: "Moondust 246",
    tileImg: "/tiles/carpet/furlong/fairway/moondust-246.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/moondust-246-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
  {
    id: 4,
    title: "Panther 247",
    tileImg: "/tiles/carpet/furlong/fairway/panther-247.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/panther-247-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
  {
    id: 5,
    title: "Starlight 248",
    tileImg: "/tiles/carpet/furlong/fairway/starlight-248.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/starlight-248-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
  {
    id: 6,
    title: "Sand Dune 249",
    tileImg: "/tiles/carpet/furlong/fairway/sand-dune-249.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/sand-dune-249-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
  {
    id: 7,
    title: "Light Taupe 250",
    tileImg: "/tiles/carpet/furlong/fairway/light-taupe-250.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/light-taupe-250-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
  {
    id: 8,
    title: "Biscotti 251",
    tileImg: "/tiles/carpet/furlong/fairway/biscotti-251.jpg",
    roomImg: "/tiles/carpet/furlong/fairway/biscotti-251-preview.jpg",
    specs: FURLONG_FAIRWAY_SPECS,
  },
];
const FURLONG_ELEGANCE_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Carefree PP (Bleach Cleanable)" },
  { label: "Technical", value: "Tenth Gauge / 2-Ply Yarn" },
  { label: "Backing", value: "Combi-bac" },
  { label: "TOG Value", value: "1.36" },
  { label: "Suitability", value: "Heavy Domestic / General Commercial" },
  { label: "Widths", value: "4m, 5m" },
  { label: "Warranty", value: "10 Year Residential" },
];

export const FURLONG_ELEGANCE_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Ammonite 1102",
    tileImg: "/tiles/carpet/furlong/elegance/ammonite-1102.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/ammonite-1102-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 2,
    title: "Magna Carta 517",
    tileImg: "/tiles/carpet/furlong/elegance/magna-carta-517.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/magna-carta-517-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 3,
    title: "Creme Fraiche 1113",
    tileImg: "/tiles/carpet/furlong/elegance/creme-fraiche-1113.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/creme-fraiche-1113-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 4,
    title: "Portland Stone 1100",
    tileImg: "/tiles/carpet/furlong/elegance/portland-stone-1100.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/portland-stone-1100-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 5,
    title: "Snow Leopard 1104",
    tileImg: "/tiles/carpet/furlong/elegance/snow-leopard-1104.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/snow-leopard-1104-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 6,
    title: "Travertine 1114",
    tileImg: "/tiles/carpet/furlong/elegance/travertine-1114.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/travertine-1114-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 7,
    title: "Fresh Mint 1115",
    tileImg: "/tiles/carpet/furlong/elegance/fresh-mint-1115.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/fresh-mint-1115-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 8,
    title: "Powder Sky 1116",
    tileImg: "/tiles/carpet/furlong/elegance/powder-sky-1116.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/powder-sky-1116-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 9,
    title: "Storm Lantern 1109",
    tileImg: "/tiles/carpet/furlong/elegance/storm-lantern-1109.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/storm-lantern-1109-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 10,
    title: "Excalibur 1103",
    tileImg: "/tiles/carpet/furlong/elegance/excalibur-1103.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/excalibur-1103-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 11,
    title: "Druids Circle 519",
    tileImg: "/tiles/carpet/furlong/elegance/druids-circle-519.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/druids-circle-519-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 12,
    title: "Chaume 511",
    tileImg: "/tiles/carpet/furlong/elegance/chaume-511.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/chaume-511-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 13,
    title: "Cotswold Stone 1117",
    tileImg: "/tiles/carpet/furlong/elegance/cotswold-stone-1117.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/cotswold-stone-1117-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 14,
    title: "Flax 1118",
    tileImg: "/tiles/carpet/furlong/elegance/flax-1118.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/flax-1118-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 15,
    title: "Chantilly 1119",
    tileImg: "/tiles/carpet/furlong/elegance/chantilly-1119.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/chantilly-1119-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
  {
    id: 16,
    title: "Bone China 1120",
    tileImg: "/tiles/carpet/furlong/elegance/bone-china-1120.jpg",
    roomImg: "/tiles/carpet/furlong/elegance/bone-china-1120-preview.jpg",
    specs: FURLONG_ELEGANCE_SPECS,
  },
];
const ABINGDON_CAPTIVATION_SPECS: ProductSpec[] = [
  { label: "Material", value: "Polypropylene (Stainfree)" },
  { label: "Pile Height", value: "8.25mm" },
  { label: "Technical", value: "10th Gauge High Twist" },
  { label: "Backing", value: "Fleece Back" },
  { label: "Tog Value", value: "1.1" },
  { label: "Suitability", value: "Commercial / Heavy Domestic" },
  { label: "Warranty", value: "10 Year Wear Warranty" },
  { label: "Available Widths", value: "2.5m, 4m, 5m" },
];

export const ABINGDONG_STAIN_FREE_CAPTIVATION_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Black Raven",
    tileImg: "/tiles/carpet/abingdon/captivation/black-raven.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/black-raven-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 2,
    title: "Sapphire",
    tileImg: "/tiles/carpet/abingdon/captivation/sapphire.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/sapphire-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 3,
    title: "Frosted Steel",
    tileImg: "/tiles/carpet/abingdon/captivation/frosted-steel.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/frosted-steel-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 4,
    title: "Tundra Frost",
    tileImg: "/tiles/carpet/abingdon/captivation/tundra-frost.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/tundra-frost-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 5,
    title: "Jewel",
    tileImg: "/tiles/carpet/abingdon/captivation/jewel.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/jewel-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 6,
    title: "Nimbus Cloud",
    tileImg: "/tiles/carpet/abingdon/captivation/nimbus-cloud.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/nimbus-cloud-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 7,
    title: "Snowfall",
    tileImg: "/tiles/carpet/abingdon/captivation/snowfall.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/snowfall-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 8,
    title: "Turtle Dove",
    tileImg: "/tiles/carpet/abingdon/captivation/turtle-dove.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/turtle-dove-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 9,
    title: "Moon Cloud",
    tileImg: "/tiles/carpet/abingdon/captivation/moon-cloud.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/moon-cloud-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 10,
    title: "Seneca Rock",
    tileImg: "/tiles/carpet/abingdon/captivation/seneca-rock.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/seneca-rock-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 11,
    title: "Cloudy Dreams",
    tileImg: "/tiles/carpet/abingdon/captivation/cloudy-dreams.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/cloudy-dreams-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 12,
    title: "Linen Wash",
    tileImg: "/tiles/carpet/abingdon/captivation/linen-wash.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/linen-wash-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 13,
    title: "Oceanside",
    tileImg: "/tiles/carpet/abingdon/captivation/oceanside.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/oceanside-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 14,
    title: "Pentland",
    tileImg: "/tiles/carpet/abingdon/captivation/pentland.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/pentland-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 15,
    title: "Putting Green",
    tileImg: "/tiles/carpet/abingdon/captivation/putting-green.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/putting-green-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 16,
    title: "Treasure Isle",
    tileImg: "/tiles/carpet/abingdon/captivation/treasure-isle.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/treasure-isle-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
  {
    id: 17,
    title: "Dock Blue",
    tileImg: "/tiles/carpet/abingdon/captivation/dock-blue.jpg",
    roomImg: "/tiles/carpet/abingdon/captivation/dock-blue-preview.png",
    specs: ABINGDON_CAPTIVATION_SPECS,
  },
];

const ABINGDON_CARESS_SPECS: ProductSpec[] = [
  { label: "Material", value: "Polypropylene (Stainfree)" },
  { label: "Pile Height", value: "11.5mm" },
  { label: "Technical", value: "1/10th Gauge Twist" },
  { label: "Backing", value: "Fleece Back" },
  { label: "Tog Value", value: "1.52" },
  { label: "Suitability", value: "Commercial / Heavy Domestic" },
  { label: "Warranty", value: "10 Year Wear Warranty" },
  { label: "Available Widths", value: "2.5m, 4m, 5m" },
];

export const ABINGDONG_STAIN_FREE_CARES_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Pink Whisper",
    tileImg: "/tiles/carpet/abingdon/caress/pink-whisper.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/pink-whisper-preview.png", // Asumsi penamaan preview
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 2,
    title: "Deep Blue",
    tileImg: "/tiles/carpet/abingdon/caress/deep-blue.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/deep-blue-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 3,
    title: "Old Gold",
    tileImg: "/tiles/carpet/abingdon/caress/old-gold.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/old-gold-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 4,
    title: "Fir Green",
    tileImg: "/tiles/carpet/abingdon/caress/fir-green.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/fir-green-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 5,
    title: "Terracotta",
    tileImg: "/tiles/carpet/abingdon/caress/terracotta.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/terracotta-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 6,
    title: "Bourneville",
    tileImg: "/tiles/carpet/abingdon/caress/bourneville.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/bourneville-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 7,
    title: "Rioja",
    tileImg: "/tiles/carpet/abingdon/caress/rioja.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/rioja-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 8,
    title: "Azure",
    tileImg: "/tiles/carpet/abingdon/caress/azure.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/azure-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 9,
    title: "Sapphire",
    tileImg: "/tiles/carpet/abingdon/caress/sapphire.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/sapphire-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 10,
    title: "Ebony",
    tileImg: "/tiles/carpet/abingdon/caress/ebony.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/ebony-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 11,
    title: "Titanium",
    tileImg: "/tiles/carpet/abingdon/caress/titanium.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/titanium-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 12,
    title: "Mocha",
    tileImg: "/tiles/carpet/abingdon/caress/mocha.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/mocha-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 13,
    title: "Latte",
    tileImg: "/tiles/carpet/abingdon/caress/latte.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/latte-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 14,
    title: "Cotton",
    tileImg: "/tiles/carpet/abingdon/caress/cotton.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/cotton-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 15,
    title: "Champagne",
    tileImg: "/tiles/carpet/abingdon/caress/champagne.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/champagne-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 16,
    title: "Suede",
    tileImg: "/tiles/carpet/abingdon/caress/suede.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/suede-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 17,
    title: "Silver",
    tileImg: "/tiles/carpet/abingdon/caress/silver.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/silver-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
  {
    id: 18,
    title: "Platinum",
    tileImg: "/tiles/carpet/abingdon/caress/platinum.jpg",
    roomImg: "/tiles/carpet/abingdon/caress/platinum-preview.png",
    specs: ABINGDON_CARESS_SPECS,
  },
];

const ABINGDON_SOFT_WHISPER_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Polyester" },
  { label: "Pile Height", value: "13mm (Saxony Pile)" },
  { label: "Backing", value: "Fleece Back" },
  { label: "Tog Value", value: "2.47" },
  { label: "Suitability", value: "Commercial / Heavy Domestic" },
  { label: "Warranty", value: "10 Year Wear Warranty" },
  { label: "Available Widths", value: "2.5m, 4m, 5m" },
  { label: "Feature", value: "Bleach Cleanable" },
];

export const ABINGDONG_LOVE_STORY_SOFT_WHISPER_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Blue Eclipse",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/blue-eclipse.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/blue-eclipse-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 2,
    title: "Oasis",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/oasis.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/oasis-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 3,
    title: "Autumn Flame",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/autumn-flame.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/autumn-flame-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 4,
    title: "Soft Sandstone",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/soft-sandstone.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/soft-sandstone-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 5,
    title: "Honey Dew",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/honey-dew.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/honey-dew-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 6,
    title: "Caramel Cream",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/caramel-cream.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/caramel-cream-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 7,
    title: "Velvet Taupe",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/velvet-taupe.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/velvet-taupe-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 8,
    title: "Tapestry",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/tapestry.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/tapestry-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 9,
    title: "Chiffon",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/chiffon.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/chiffon-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 10,
    title: "Twilight",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/twilight.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/twilight-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 11,
    title: "Anthracite",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/anthracite.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/anthracite-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 12,
    title: "Shale",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/shale.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/shale-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 13,
    title: "Harbour",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/harbour.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/harbour-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
  {
    id: 14,
    title: "Frost",
    tileImg: "/tiles/carpet/abingdon/soft-whisper/frost.jpg",
    roomImg: "/tiles/carpet/abingdon/soft-whisper/frost-preview.png",
    specs: ABINGDON_SOFT_WHISPER_SPECS,
  },
];

const AW_YUKON_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Polyester" },
  { label: "Style", value: "Deep Pile Saxony" },
  { label: "Thickness", value: "21.5mm" },
  { label: "Pile Height", value: "19mm" },
  { label: "Backing", value: "Fusion Backing (Felt Layer)" },
  { label: "Brand", value: "Associated Weavers" },
];

export const ASSOCIATED_WEAVERS_YUKON_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Vanilla",
    tileImg: "/tiles/carpet/associated-weavers/yukon/vanilla.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/vanilla-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 2,
    title: "Sage Green",
    tileImg: "/tiles/carpet/associated-weavers/yukon/sage-green.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/sage-green-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 3,
    title: "Blanched Almond",
    tileImg: "/tiles/carpet/associated-weavers/yukon/blanched-almond.jpg",
    roomImg:
      "/tiles/carpet/associated-weavers/yukon/blanched-almond-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 4,
    title: "Barbados",
    tileImg: "/tiles/carpet/associated-weavers/yukon/barbados.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/barbados-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 5,
    title: "Attic",
    tileImg: "/tiles/carpet/associated-weavers/yukon/attic.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/attic-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 6,
    title: "Lavender",
    tileImg: "/tiles/carpet/associated-weavers/yukon/lavender.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/lavender-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 7,
    title: "Safari",
    tileImg: "/tiles/carpet/associated-weavers/yukon/safari.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/safari-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 8,
    title: "Midnight",
    tileImg: "/tiles/carpet/associated-weavers/yukon/midnight.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/midnight-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 9,
    title: "Aragon",
    tileImg: "/tiles/carpet/associated-weavers/yukon/aragon.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/aragon-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 10,
    title: "Pearl",
    tileImg: "/tiles/carpet/associated-weavers/yukon/pearl.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/pearl-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 11,
    title: "Morning Mist",
    tileImg: "/tiles/carpet/associated-weavers/yukon/morning-mist.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/morning-mist-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 12,
    title: "Shoreline",
    tileImg: "/tiles/carpet/associated-weavers/yukon/shoreline.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/shoreline-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 13,
    title: "Baltic Sea",
    tileImg: "/tiles/carpet/associated-weavers/yukon/baltic-sea.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/baltic-sea-preview.png",
    specs: AW_YUKON_SPECS,
  },
  {
    id: 14,
    title: "Raven",
    tileImg: "/tiles/carpet/associated-weavers/yukon/raven.jpg",
    roomImg: "/tiles/carpet/associated-weavers/yukon/raven-preview.png",
    specs: AW_YUKON_SPECS,
  },
];

const AW_MAGNIFICUS_SPECS: ProductSpec[] = [
  { label: "Material", value: "100% Polypropylene" },
  { label: "Style", value: "Deep Pile Saxony" },
  { label: "Thickness", value: "20mm" },
  { label: "Pile Height", value: "17.5mm" },
  { label: "TOG Rating", value: "2.0" },
  { label: "Backing", value: "Fusion Backing" },
  { label: "Feature", value: "Stain Resistant / Easy Clean" },
];

export const ASSOCIATED_WEAVERS_MAGNIFICUS_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Cream",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/cream.jpg",
    roomImg: "/tiles/carpet/associated-weavers/magnificus/cream-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 2,
    title: "Granola",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/granola.jpg",
    roomImg: "/tiles/carpet/associated-weavers/magnificus/granola-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 3,
    title: "Silkworm",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/silkworm.jpg",
    roomImg: "/tiles/carpet/associated-weavers/magnificus/silkworm-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 4,
    title: "Shortbread",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/shortbread.jpg",
    roomImg:
      "/tiles/carpet/associated-weavers/magnificus/shortbread-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 5,
    title: "Cotswold Stone",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/cotswold-stone.jpg",
    roomImg:
      "/tiles/carpet/associated-weavers/magnificus/cotswold-stone-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 6,
    title: "Sandcastle",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/sandcastle.jpg",
    roomImg:
      "/tiles/carpet/associated-weavers/magnificus/sandcastle-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 7,
    title: "Latte",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/latte.jpg",
    roomImg: "/tiles/carpet/associated-weavers/magnificus/latte-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 8,
    title: "Silver Moon",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/silver-moon.jpg",
    roomImg:
      "/tiles/carpet/associated-weavers/magnificus/silver-moon-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 9,
    title: "Steel Grey",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/steel-grey.jpg",
    roomImg:
      "/tiles/carpet/associated-weavers/magnificus/steel-grey-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 10,
    title: "Slate",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/slate.jpg",
    roomImg: "/tiles/carpet/associated-weavers/magnificus/slate-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 11,
    title: "Pewter",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/pewter.jpg",
    roomImg: "/tiles/carpet/associated-weavers/magnificus/pewter-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
  {
    id: 12,
    title: "Deep Cavern",
    tileImg: "/tiles/carpet/associated-weavers/magnificus/deep-cavern.jpg",
    roomImg:
      "/tiles/carpet/associated-weavers/magnificus/deep-cavern-preview.png",
    specs: AW_MAGNIFICUS_SPECS,
  },
];

export const LEWIS_ABBOTT_FLAT_WEAVES_HERRINGBONE_CARPET_DATA: Product[] = [
  {
    id: 1,
    title: "Ebony",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/ebony.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/ebony-preview.png",
  },
  {
    id: 2,
    title: "Marble",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/marble.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/marble-preview.png",
  },
  {
    id: 3,
    title: "Ivory",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/ivory.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/ivory-preview.png",
  },
  {
    id: 4,
    title: "Sheffield",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/sheffield.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/sheffield-preview.png",
  },
  {
    id: 5,
    title: "Sisal",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/sisal.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/sisal-preview.png",
  },
  {
    id: 6,
    title: "Zinc",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/zinc.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/zinc-preview.png",
  },
  {
    id: 7,
    title: "Flint",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/flint.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/flint-preview.png",
  },
  {
    id: 8,
    title: "Chalk",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/chalk.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/chalk-preview.png",
  },
  {
    id: 9,
    title: "Graphite",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/graphite.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/graphite-preview.png",
  },
  {
    id: 10,
    title: "Copper",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/copper.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/copper-preview.png",
  },
  {
    id: 11,
    title: "Bronze",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/bronze.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/bronze-preview.png",
  },
  {
    id: 12,
    title: "Quick Silver",
    tileImg: "/tiles/carpet/lewis-abbott/herringbone/quicksilver.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/herringbone/quicksilver-preview.png",
  },
];

export const LEWIS_ABBOTT_FLAT_WEAVES_GATSBY_CARPET_DATA: Product[] = [
  // Row 1: Linear / Ribbed Patterns
  {
    id: 1,
    title: "Myrtle",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/myrtle.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/myrtle-preview.png",
  },
  {
    id: 2,
    title: "Jazz Age",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/jazz-age.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/jazz-age-preview.png",
  },
  {
    id: 3,
    title: "Daisy",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/daisy.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/daisy-preview.png",
  },
  {
    id: 4,
    title: "Chicago",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/chicago.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/chicago-preview.png",
  },
  {
    id: 5,
    title: "Carraway",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/carraway.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/carraway-preview.png",
  },
  {
    id: 6,
    title: "Buchanan",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/buchanan.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/buchanan-preview.png",
  },
  // Row 2: gatsby Patterns
  {
    id: 7,
    title: "Minnesota",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/minnesota.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/minnesota-preview.png",
  },
  {
    id: 8,
    title: "Long Island",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/long-island.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/long-island-preview.png",
  },
  {
    id: 9,
    title: "Oxford",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/oxford.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/oxford-preview.png",
  },
  {
    id: 10,
    title: "Midwest",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/midwest.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/midwest-preview.png",
  },
  {
    id: 11,
    title: "New York",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/new-york.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/new-york-preview.png",
  },
  {
    id: 12,
    title: "Roaring Twenties",
    tileImg: "/tiles/carpet/lewis-abbott/gatsby/roaring-twenties.jpg",
    roomImg: "/tiles/carpet/lewis-abbott/gatsby/roaring-twenties-preview.png",
  },
];

// export const LVT_DATA: Product[] = [
//   // Classical Series
//   {
//     id: 101,
//     title: "Honey Oak (Classical)",
//     tileImg: "/tiles/lvt/honey-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l1/1200/800",
//   },
//   {
//     id: 102,
//     title: "Country Oak (Classical)",
//     tileImg: "/tiles/lvt/country-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l2/1200/800",
//   },
//   {
//     id: 103,
//     title: "Bare Oak (Classical)",
//     tileImg: "/tiles/lvt/bare-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l3/1200/800",
//   },
//   {
//     id: 104,
//     title: "English Oak (Classical)",
//     tileImg: "/tiles/lvt/english-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l4/1200/800",
//   },
//   {
//     id: 105,
//     title: "Monument (Classical)",
//     tileImg: "/tiles/lvt/monument-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l5/1200/800",
//   },
//   {
//     id: 106,
//     title: "Shadow Oak (Classical)",
//     tileImg: "/tiles/lvt/shadow-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l6/1200/800",
//   },
//   {
//     id: 107,
//     title: "Dovewing (Classical)",
//     tileImg: "/tiles/lvt/dovewing-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l7/1200/800",
//   },
//   {
//     id: 108,
//     title: "Arctic Oak (Classical)",
//     tileImg: "/tiles/lvt/arctic-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l8/1200/800",
//   },
//   {
//     id: 109,
//     title: "City Oak (Classical)",
//     tileImg: "/tiles/lvt/city-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l9/1200/800",
//   },
//   {
//     id: 110,
//     title: "Loft Oak (Classical)",
//     tileImg: "/tiles/lvt/loft-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l10/1200/800",
//   },
//   {
//     id: 111,
//     title: "Heritage Oak (Classical)",
//     tileImg: "/tiles/lvt/heritage-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l11/1200/800",
//   },
//   {
//     id: 112,
//     title: "Smoke Oak (Classical)",
//     tileImg: "/tiles/lvt/smoke-oak-classical.jpg",
//     roomImg: "https://picsum.photos/seed/l12/1200/800",
//   },

//   // Parquet Series
//   {
//     id: 201,
//     title: "Honey Oak (Parquet)",
//     tileImg: "/tiles/lvt/honey-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp1/1200/800",
//   },
//   {
//     id: 202,
//     title: "Country Oak (Parquet)",
//     tileImg: "/tiles/lvt/country-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp2/1200/800",
//   },
//   {
//     id: 203,
//     title: "Bare Oak (Parquet)",
//     tileImg: "/tiles/lvt/bare-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp3/1200/800",
//   },
//   {
//     id: 204,
//     title: "Smoked Oak (Parquet)",
//     tileImg: "/tiles/lvt/smoked-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp4/1200/800",
//   },
//   {
//     id: 205,
//     title: "Heritage Oak (Parquet)",
//     tileImg: "/tiles/lvt/heritage-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp5/1200/800",
//   },
//   {
//     id: 206,
//     title: "Loft Oak (Parquet)",
//     tileImg: "/tiles/lvt/loft-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp6/1200/800",
//   },
//   {
//     id: 207,
//     title: "City Oak (Parquet)",
//     tileImg: "/tiles/lvt/city-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp7/1200/800",
//   },
//   {
//     id: 208,
//     title: "Arctic Oak (Parquet)",
//     tileImg: "/tiles/lvt/arctic-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp8/1200/800",
//   },
//   {
//     id: 209,
//     title: "Dovewing (Parquet)",
//     tileImg: "/tiles/lvt/dovewing-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp9/1200/800",
//   },
//   {
//     id: 210,
//     title: "Shadow Oak (Parquet)",
//     tileImg: "/tiles/lvt/shadow-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp10/1200/800",
//   },
//   {
//     id: 211,
//     title: "Monument (Parquet)",
//     tileImg: "/tiles/lvt/monument-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp11/1200/800",
//   },
//   {
//     id: 212,
//     title: "English Oak (Parquet)",
//     tileImg: "/tiles/lvt/english-oak-parquet.jpg",
//     roomImg: "https://picsum.photos/seed/lp12/1200/800",
//   },
// ];

// LVT
const INVICTUS_LVT_SPECS: ProductSpec[] = [
  { label: "Thickness", value: "2.50 mm" },
  { label: "Wear Layer", value: "0.55 mm" },
  { label: "Protection", value: "Scratchmaster Coating" },
  { label: "Installation", value: "Dryback / Stick Down" },
  { label: "Plank Dimensions", value: "229mm x 1517mm" },
  { label: "Format", value: "Luxury Vinyl Tile" },
  { label: "Suitability", value: "Busy Households (Kids & Pets)" },
  { label: "Pack Size", value: "3.47m2 per pack" },
];

export const INVICTUS_LVT_DATA: Product[] = [
  {
    id: 1,
    title: "Cotton Oak Parquet - Sandalwood",
    tileImg: "/tiles/lvt/invictus/cotton-oak-parquet-sandalwood.jpg",
    roomImg: "/tiles/lvt/invictus/cotton-oak-parquet-sandalwood-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 2,
    title: "Bella Noce Parquet - Walnut",
    tileImg: "/tiles/lvt/invictus/bella-noce-parquet-walnut.jpg",
    roomImg: "/tiles/lvt/invictus/bella-noce-parquet-walnut-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 3,
    title: "Sienna Oak Parquet - Orchid",
    tileImg: "/tiles/lvt/invictus/sienna-oak-parquet-orchid.jpg",
    roomImg: "/tiles/lvt/invictus/sienna-oak-parquet-orchid-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 4,
    title: "Majestic Oak Parquet - Vista",
    tileImg: "/tiles/lvt/invictus/majestic-oak-parquet-vista.jpg",
    roomImg: "/tiles/lvt/invictus/majestic-oak-parquet-vista-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 5,
    title: "Velvet Oak Parquet - Olivia",
    tileImg: "/tiles/lvt/invictus/velvet-oak-parquet-olivia.jpg",
    roomImg: "/tiles/lvt/invictus/velvet-oak-parquet-olivia-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 6,
    title: "Cabin Oak Parquet - Whitehaven",
    tileImg: "/tiles/lvt/invictus/cabin-oak-parquet-whitehaven.jpg",
    roomImg: "/tiles/lvt/invictus/cabin-oak-parquet-whitehaven-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 7,
    title: "Barn Oak Parquet - Saddle",
    tileImg: "/tiles/lvt/invictus/barn-oak-parquet-saddle.jpg",
    roomImg: "/tiles/lvt/invictus/barn-oak-parquet-saddle-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 8,
    title: "Belrose Oak Parquet - Sesame",
    tileImg: "/tiles/lvt/invictus/belrose-oak-parquet-sesame.jpg",
    roomImg: "/tiles/lvt/invictus/belrose-oak-parquet-sesame-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 9,
    title: "Heritage Oak Chevron - Sandringham",
    tileImg: "/tiles/lvt/invictus/heritage-oak-chevron-sandringham.jpg",
    roomImg: "/tiles/lvt/invictus/heritage-oak-chevron-sandringham-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 10,
    title: "Regency Oak Parquet - Scone",
    tileImg: "/tiles/lvt/invictus/regency-oak-parquet-scone.jpg",
    roomImg: "/tiles/lvt/invictus/regency-oak-parquet-scone-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 11,
    title: "Highland Oak Parquet - Classic",
    tileImg: "/tiles/lvt/invictus/highland-oak-parquet-classic.jpg",
    roomImg: "/tiles/lvt/invictus/highland-oak-parquet-classic-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 12,
    title: "Divine Oak Parquet - Pure",
    tileImg: "/tiles/lvt/invictus/divine-oak-parquet-pure.jpg",
    roomImg: "/tiles/lvt/invictus/divine-oak-parquet-pure-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 13,
    title: "Groovy Granite Parquet - Alabaster",
    tileImg: "/tiles/lvt/invictus/groovy-granite-parquet-alabaster.jpg",
    roomImg: "/tiles/lvt/invictus/groovy-granite-parquet-alabaster-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 14,
    title: "Highland Oak Parquet - Sunrise",
    tileImg: "/tiles/lvt/invictus/highland-oak-parquet-sunrise.jpg",
    roomImg: "/tiles/lvt/invictus/highland-oak-parquet-sunrise-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 15,
    title: "French Oak Parquet - Polar",
    tileImg: "/tiles/lvt/invictus/french-oak-parquet-polar.jpg",
    roomImg: "/tiles/lvt/invictus/french-oak-parquet-polar-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 16,
    title: "New England Oak Parquet - Sand",
    tileImg: "/tiles/lvt/invictus/new-england-oak-parquet-sand.jpg",
    roomImg: "/tiles/lvt/invictus/new-england-oak-parquet-sand-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
  {
    id: 17,
    title: "Royal Oak Parquet - Blonde",
    tileImg: "/tiles/lvt/invictus/royal-oak-parquet-blonde.jpg",
    roomImg: "/tiles/lvt/invictus/royal-oak-parquet-blonde-preview.png",
    specs: INVICTUS_LVT_SPECS,
  },
];

const ABINGDON_ARTISAN_LVT_SPECS: ProductSpec[] = [
  { label: "Thickness", value: "5.5mm Click" },
  { label: "Wear Layer", value: "0.55mm" },
  { label: "Style", value: "Classic Herringbone" },
  { label: "Plank Size", value: "750 x 125mm" },
  { label: "Edge Detail", value: "4-Sided Bevel Edge" },
  { label: "Technology", value: "Emboss-in-Register" },
  { label: "Suitability", value: "Commercial / Heavy Domestic" },
  { label: "Warranty", value: "15 Year Residential" },
  { label: "Coverage", value: "1.87 m² (20 Planks per Pack)" },
];

export const ABINGDON_LVT_DATA: Product[] = [
  {
    id: 1,
    title: "Antique Walnut",
    tileImg: "/tiles/lvt/abingdon/antique-walnut.jpg",
    roomImg: "/tiles/lvt/abingdon/antique-walnut-preview.png",
    specs: ABINGDON_ARTISAN_LVT_SPECS,
  },
  {
    id: 2,
    title: "Chestnut",
    tileImg: "/tiles/lvt/abingdon/chestnut.jpg",
    roomImg: "/tiles/lvt/abingdon/chestnut-preview.png",
    specs: ABINGDON_ARTISAN_LVT_SPECS,
  },
  {
    id: 3,
    title: "Weathered Cedar",
    tileImg: "/tiles/lvt/abingdon/weathered-cedar.jpg",
    roomImg: "/tiles/lvt/abingdon/weathered-cedar-preview.png",
    specs: ABINGDON_ARTISAN_LVT_SPECS,
  },
  {
    id: 4,
    title: "Urban Grey",
    tileImg: "/tiles/lvt/abingdon/urban-grey.jpg",
    roomImg: "/tiles/lvt/abingdon/urban-grey-preview.png",
    specs: ABINGDON_ARTISAN_LVT_SPECS,
  },
  {
    id: 5,
    title: "Smokey Oak",
    tileImg: "/tiles/lvt/abingdon/smokey-oak.jpg",
    roomImg: "/tiles/lvt/abingdon/smokey-oak-preview.png",
    specs: ABINGDON_ARTISAN_LVT_SPECS,
  },
  {
    id: 6,
    title: "Brushed Oak",
    tileImg: "/tiles/lvt/abingdon/brushed-oak.jpg",
    roomImg: "/tiles/lvt/abingdon/brushed-oak-preview.png",
    specs: ABINGDON_ARTISAN_LVT_SPECS,
  },
];

// Vinyl
const FURLONG_ESSENTIAL_II_SPECS: ProductSpec[] = [
  { label: "Material", value: "PVC Vinyl" },
  { label: "Backing", value: "Felt Back" },
  { label: "Wear Layer", value: "0.2mm" },
  { label: "TOG Value", value: "0.11" },
  { label: "Slip Resistance", value: "R10" },
  { label: "Suitability", value: "Class 22 - General Domestic" },
  { label: "Features", value: "Underfloor Heating / Bathroom Friendly" },
  { label: "Widths", value: "2m, 3m, 4m" },
];

export const FURLONG_ESSENTIAL_II_VINYLs_DATA: Product[] = [
  {
    id: 1,
    title: "Ashridge ER101",
    tileImg: "/tiles/vinyl/furlong/essential-ii/ashridge-er101.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/ashridge-er101-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 2,
    title: "Bisham ER102",
    tileImg: "/tiles/vinyl/furlong/essential-ii/bisham-er102.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/bisham-er102-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 3,
    title: "Bowdown ER103",
    tileImg: "/tiles/vinyl/furlong/essential-ii/bowdown-er103.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/bowdown-er103-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 4,
    title: "Winterly ER104",
    tileImg: "/tiles/vinyl/furlong/essential-ii/winterly-er104.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/winterly-er104-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 5,
    title: "Enborne ER105",
    tileImg: "/tiles/vinyl/furlong/essential-ii/enborne-er105.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/enborne-er105-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 6,
    title: "Brampton ER107",
    tileImg: "/tiles/vinyl/furlong/essential-ii/brampton-er107.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/brampton-er107-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 7,
    title: "Coombe ER113",
    tileImg: "/tiles/vinyl/furlong/essential-ii/coombe-er113.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/coombe-er113-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 8,
    title: "Catmore ER114",
    tileImg: "/tiles/vinyl/furlong/essential-ii/catmore-er114.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/catmore-er114-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 9,
    title: "Brunton ER115",
    tileImg: "/tiles/vinyl/furlong/essential-ii/brunton-er115.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/brunton-er115-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 10,
    title: "Eccleston ER116",
    tileImg: "/tiles/vinyl/furlong/essential-ii/eccleston-er116.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/eccleston-er116-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 11,
    title: "Gillow ER117",
    tileImg: "/tiles/vinyl/furlong/essential-ii/gillow-er117.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/gillow-er117-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 12,
    title: "Kirkby ER118",
    tileImg: "/tiles/vinyl/furlong/essential-ii/kirkby-er118.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/kirkby-er118-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
  {
    id: 13,
    title: "Pinkney ER119",
    tileImg: "/tiles/vinyl/furlong/essential-ii/pinkney-er119.jpg",
    roomImg: "/tiles/vinyl/furlong/essential-ii/pinkney-er119-preview.png",
    specs: FURLONG_ESSENTIAL_II_SPECS,
  },
];

const ABINGDON_ENDURANCE_SPECS: ProductSpec[] = [
  { label: "Thickness", value: "4.0mm Premium Vinyl" },
  { label: "Wear Layer", value: "0.2mm" },
  { label: "Style", value: "Vinyl Sheet" },
  { label: "Suitability", value: "Commercial / Heavy Domestic" },
  { label: "Warranty", value: "7 Year Wear Warranty" },
  { label: "Features", value: "Water Resistant / Underfloor Heating" },
  { label: "Resistance", value: "Scratch, Scuff & Stain Resistant" },
  { label: "Available Widths", value: "2m, 3m, 4m" },
];

export const FURLONG_ENDURANCE_VINYLs_DATA: Product[] = [
  {
    id: 1,
    title: "Parma",
    tileImg: "/tiles/vinyl/furlong/endurance/parma.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/parma-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
  {
    id: 2,
    title: "Florence",
    tileImg: "/tiles/vinyl/furlong/endurance/florence.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/florence-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
  {
    id: 3,
    title: "Milan",
    tileImg: "/tiles/vinyl/furlong/endurance/milan.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/milan-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
  {
    id: 4,
    title: "Verona",
    tileImg: "/tiles/vinyl/furlong/endurance/verona.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/verona-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
  {
    id: 5,
    title: "Pisa",
    tileImg: "/tiles/vinyl/furlong/endurance/pisa.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/pisa-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
  {
    id: 6,
    title: "Turin",
    tileImg: "/tiles/vinyl/furlong/endurance/turin.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/turin-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
  {
    id: 7,
    title: "Venice",
    tileImg: "/tiles/vinyl/furlong/endurance/venice.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/venice-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
  {
    id: 8,
    title: "Bologna",
    tileImg: "/tiles/vinyl/furlong/endurance/bologna.jpg",
    roomImg: "/tiles/vinyl/furlong/endurance/bologna-preview.png",
    specs: ABINGDON_ENDURANCE_SPECS,
  },
];

// LAMINATE

const FURLONG_URBAN_LAMINATE_SPECS: ProductSpec[] = [
  { label: "Material", value: "HDF (High Density Fibreboard)" },
  { label: "Plank Size", value: "1205mm x 197mm" },
  { label: "Water Resistance", value: "24 Hours" },
  { label: "TOG Value", value: "0.5" },
  { label: "Installation", value: "Click Fitting / Bevel Edge" },
  {
    label: "Suitability",
    value: "Class 23 - Heavy Domestic / Class 32 - General Commercial",
  },
  { label: "Warranty", value: "15 Year Residential / 10 Year Commercial" },
  { label: "Eco Feature", value: "Blue Angel Certified / Recyclable" },
];

export const LAMINATE_URBAN_DATA: Product[] = [
  {
    id: 1,
    title: "Oslo AU017",
    tileImg: "/tiles/leminate/urban/oslo-au017.jpg",
    roomImg: "/tiles/leminate/urban/oslo-au017-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
  {
    id: 2,
    title: "Paris AU007",
    tileImg: "/tiles/leminate/urban/paris-au007.jpg",
    roomImg: "/tiles/leminate/urban/paris-au007-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
  {
    id: 3,
    title: "Nairobi FU016",
    tileImg: "/tiles/leminate/urban/nairobi-fu016.jpg",
    roomImg: "/tiles/leminate/urban/nairobi-fu016-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
  {
    id: 4,
    title: "Copenhagen AU020",
    tileImg: "/tiles/leminate/urban/copenhagen-au020.jpg",
    roomImg: "/tiles/leminate/urban/copenhagen-au020-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
  {
    id: 5,
    title: "Kartaca FU018",
    tileImg: "/tiles/leminate/urban/kartaca-fu018.jpg",
    roomImg: "/tiles/leminate/urban/kartaca-fu018-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
  {
    id: 6,
    title: "Tokyo FU006",
    tileImg: "/tiles/leminate/urban/tokyo-fu006.jpg",
    roomImg: "/tiles/leminate/urban/tokyo-fu006-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
  {
    id: 7,
    title: "Peking FU007",
    tileImg: "/tiles/leminate/urban/peking-fu007.jpg",
    roomImg: "/tiles/leminate/urban/peking-fu007-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
  {
    id: 8,
    title: "Prague AU015",
    tileImg: "/tiles/leminate/urban/prague-au015.jpg",
    roomImg: "/tiles/leminate/urban/prague-au015-preview.png",
    specs: FURLONG_URBAN_LAMINATE_SPECS,
  },
];

const FURLONG_RIVER_LAMINATE_SPECS: ProductSpec[] = [
  { label: "Material", value: "HDF (High Density Fibreboard)" },
  { label: "Water Resistant", value: "72 Hours" },
  { label: "Plank Size", value: "1205mm x 197mm" },
  { label: "Joint System", value: "Click Fitting" },
  { label: "Edge Detail", value: "Bevel Edge" },
  { label: "TOG Value", value: "0.5" },
  {
    label: "Suitability",
    value: "Class 23 - Heavy Domestic / Class 32 - General Commercial",
  },
  { label: "Warranty", value: "15 Year Residential / 10 Year Commercial" },
  { label: "Eco Feature", value: "Blue Angel Certified" },
];

export const LAMINATE_RIVER_DATA: Product[] = [
  {
    id: 1,
    title: "Danube Oak",
    tileImg: "/tiles/leminate/river/danube-oak.jpg",
    roomImg: "/tiles/leminate/river/danube-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
  {
    id: 2,
    title: "Tigris Oak",
    tileImg: "/tiles/leminate/river/tigris-oak.jpg",
    roomImg: "/tiles/leminate/river/tigris-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
  {
    id: 3,
    title: "Delaware Oak",
    tileImg: "/tiles/leminate/river/delaware-oak.jpg",
    roomImg: "/tiles/leminate/river/delaware-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
  {
    id: 4,
    title: "Ganges Oak",
    tileImg: "/tiles/leminate/river/ganges-oak.jpg",
    roomImg: "/tiles/leminate/river/ganges-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
  {
    id: 5,
    title: "Thames Oak",
    tileImg: "/tiles/leminate/river/thames-oak.jpg",
    roomImg: "/tiles/leminate/river/thames-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
  {
    id: 6,
    title: "Nile Oak",
    tileImg: "/tiles/leminate/river/nile-oak.jpg",
    roomImg: "/tiles/leminate/river/nile-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
  {
    id: 7,
    title: "Trent Oak",
    tileImg: "/tiles/leminate/river/trent-oak.jpg",
    roomImg: "/tiles/leminate/river/trent-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
  {
    id: 8,
    title: "Erne Oak",
    tileImg: "/tiles/leminate/river/erne-oak.jpg",
    roomImg: "/tiles/leminate/river/erne-oak-preview.png",
    specs: FURLONG_RIVER_LAMINATE_SPECS,
  },
];

const FURLONG_ELITE_XL_SPECS: ProductSpec[] = [
  { label: "Material", value: "Pine HDF" },
  { label: "Plank Size", value: "1202mm x 195mm" },
  { label: "Water Resistant", value: "72 Hours" },
  { label: "TOG Value", value: "0.8" },
  { label: "Joint System", value: "Click Fitting" },
  { label: "Edge Detail", value: "Bevel Edge" },
  {
    label: "Suitability",
    value: "Class 23 - Heavy Domestic / Class 33 - Heavy Commercial",
  },
  { label: "Warranty", value: "15 Year Residential / 10 Year Commercial" },
  { label: "Eco Feature", value: "Sustainable / Blue Angel Certified" },
];

export const LAMINATE_ELITE_XL_DATA: Product[] = [
  {
    id: 1,
    title: "Ankara FXL015",
    tileImg: "/tiles/leminate/elite-xl/ankara-fxl015.jpg",
    roomImg: "/tiles/leminate/elite-xl/ankara-fxl015-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
  {
    id: 2,
    title: "Brussels FXL030",
    tileImg: "/tiles/leminate/elite-xl/brussels-fxl030.jpg",
    roomImg: "/tiles/leminate/elite-xl/brussels-fxl030-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
  {
    id: 3,
    title: "Lisbon FXL012",
    tileImg: "/tiles/leminate/elite-xl/lisbon-fxl012.jpg",
    roomImg: "/tiles/leminate/elite-xl/lisbon-fxl012-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
  {
    id: 4,
    title: "London FXL026",
    tileImg: "/tiles/leminate/elite-xl/london-fxl026.jpg",
    roomImg: "/tiles/leminate/elite-xl/london-fxl026-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
  {
    id: 5,
    title: "Manila FXL021",
    tileImg: "/tiles/leminate/elite-xl/manila-fxl021.jpg",
    roomImg: "/tiles/leminate/elite-xl/manila-fxl021-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
  {
    id: 6,
    title: "Vienna FXL029",
    tileImg: "/tiles/leminate/elite-xl/vienna-fxl029.jpg",
    roomImg: "/tiles/leminate/elite-xl/vienna-fxl029-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
  {
    id: 7,
    title: "Samsun FXL038",
    tileImg: "/tiles/leminate/elite-xl/samsun-fxl038.jpg",
    roomImg: "/tiles/leminate/elite-xl/samsun-fxl038-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
  {
    id: 8,
    title: "Derin FC088",
    tileImg: "/tiles/leminate/elite-xl/derin-fc088.jpg",
    roomImg: "/tiles/leminate/elite-xl/derin-fc088-preview.png",
    specs: FURLONG_ELITE_XL_SPECS,
  },
];

const MATRESE_DIVAN_SPECS: ProductSpec[] = [
  {
    label: "Bed Sizes",
    value: "Single (3ft), Small Double (4ft), Double (4ft6), King (5ft)",
  },
  {
    label: "Storage Options",
    value: "No Storage, 2 Drawers, 4 Drawers (Metal Runners)",
  },
  {
    label: "Fabric Options",
    value: "Basic Matching Fabric or Customised Fabric",
  },
  { label: "Includes", value: "Divan Base & Matching Mattress Option" },
  { label: "Build", value: "Deep Quilt Construction" },
];

export const MATRESE_BED_BEDSET_DATA: Product[] = [
  {
    id: 1,
    title: "Divan Bases",
    tileImg: "/tiles/mattress-bed/divan-bases.jpg",
    roomImg: "/tiles/mattress-bed/divan-bases-preview.png",
    specs: MATRESE_DIVAN_SPECS,
  },
];

export const MATRESE_BED_MATTRESSES_DATA: Product[] = [
  {
    id: 1,
    title: "Deep Quilt Mattress",
    tileImg: "/tiles/mattress-bed/deep-quilt-mattress.jpg",
    roomImg: "/tiles/mattress-bed/deep-quilt-mattress-preview.png",
    specs: [
      {
        label: "Available Sizes",
        value: "Single (3FT), Small Double (4FT), Double (4FT6), King (5FT)",
      },
      { label: "Type", value: "Deep Quilt Traditional Spring" },
      { label: "Comfort Level", value: "Medium Support" },
      { label: "Features", value: "Breathable Cover & Edge Support" },
    ],
  },
  {
    id: 2,
    title: "1500 Pocket Sprung Mattress",
    tileImg: "/tiles/mattress-bed/1500-pcket-sprung-mattress.jpg",
    roomImg: "/tiles/mattress-bed/1500-pcket-sprung-mattress-preview.png",
    specs: [
      {
        label: "Available Sizes",
        value:
          "Single (3FT), Small Double (4FT), Double (4FT6), King (5FT), Super King (6FT), 3FT3, 3FT6",
      },
      { label: "Core", value: "1500 Individual Pocket Springs" },
      { label: "Comfort Level", value: "Luxury Medium-Firm" },
      { label: "Features", value: "Zero Motion Transfer & Orthopedic Support" },
    ],
  },
  {
    id: 3,
    title: "Crown Orthopedic Mattress",
    tileImg: "/tiles/mattress-bed/crown-orthopedic-mattress.jpg",
    roomImg: "/tiles/mattress-bed/crown-orthopedic-mattress-preview.png",
    specs: [
      {
        label: "Available Sizes",
        value:
          "Single (3FT), Small Double (4FT), Double (4FT6), King (5FT), Super King (6FT), 3FT3, 3FT6",
      },
      { label: "Type", value: "Medical Grade Orthopedic" },
      { label: "Comfort Level", value: "Extra Firm" },
      {
        label: "Features",
        value: "Spinal Alignment Technology & Hypoallergenic",
      },
    ],
  },
];

export const MATRESE_BED_FRAMES_DATA: Product[] = [
  {
    id: 1,
    title: "LONDON FRAME",
    tileImg: "/tiles/mattress-bed/frames/london-frame.jpg",
    roomImg: "/tiles/mattress-bed/frames/london-frame-preview.png",
    specs: [
      { label: "Frame by Color", value: "Grey" },
      { label: "Frame by Size", value: "Single (3 FT), Double (4 FT 6)" },
      { label: "Style", value: "Modern Minimalist" },
      { label: "Material", value: "Metal Construction" },
    ],
  },
  {
    id: 2,
    title: "CHUNKY HONEY/CHERRY BUNK BED",
    tileImg: "/tiles/mattress-bed/frames/chunky-honey-cherry-bunk-bed.jpg",
    roomImg:
      "/tiles/mattress-bed/frames/chunky-honey-cherry-bunk-bed-preview.png",
    specs: [
      { label: "Frame by Color", value: "Honey / Cherry" },
      { label: "Frame by Size", value: "Single (3 FT)" },
      { label: "Style", value: "Traditional Bunk Bed" },
      { label: "Material", value: "Solid Wood" },
    ],
  },
  {
    id: 3,
    title: "MISSION CHILDRENS BUNK BED",
    tileImg: "/tiles/mattress-bed/frames/mission-childrens-bunk-bed.jpg",
    roomImg:
      "/tiles/mattress-bed/frames/mission-childrens-bunk-bed-preview.png",
    specs: [
      { label: "Frame by Color", value: "White" },
      { label: "Frame by Size", value: "Single (3 FT)" },
      { label: "Style", value: "Classic Mission Design" },
      { label: "Feature", value: "Integrated Ladder & Safety Rails" },
    ],
  },
];

export const MATRESE_BED_HEADBOARDS_DATA: Product[] = [
  {
    id: 1,
    title: "Flat PVC Headboard (20 Inch)",
    tileImg: "/tiles/mattress-bed/headboards/flat-pvc-20-inch.jpg",
    roomImg: "/tiles/mattress-bed/headboards/flat-pvc-20-inch-preview.png",
    specs: [
      { label: "Material", value: "Flat PVC" },
      { label: "Height", value: "20 Inch" },
      {
        label: "Available Sizes",
        value: "Single 3FT / (2FT 6), Double 4FT 6 / (4FT), King Size 5FT",
      },
      { label: "Available Colours", value: "Black, Brown, Cream" },
    ],
  },
  {
    id: 2,
    title: "Premium Headboards (Designs 30)",
    tileImg:
      "/tiles/mattress-bed/headboards/premium-headboards-optional-material-designs-30.jpg",
    roomImg:
      "/tiles/mattress-bed/headboards/premium-headboards-optional-material-designs-30-preview.png",
    specs: [
      { label: "Material", value: "Premium Fabric / Optional Material" },
      {
        label: "Available Sizes",
        value:
          "3FT 3, 3FT 6, Double 4FT 6 / (4FT), King Size 5FT, Single 3FT / (2FT 6), Super King 6FT",
      },
      {
        label: "Available Styles",
        value:
          "Jakarta, London, Madrid, Malga, Rochester, Seville Malia, Venice Charcoal",
      },
      { label: "Feature", value: "Custom Design Selection" },
    ],
  },
];

export interface WiderGridBrand {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

// ===== CARPET =====
export const CORMAR_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Inglewood Saxony",
    description:
      "A durable, bleach-cleanable carpet available in 15 heather colors with a 10-year stain and wear warranty.",
    imageUrl: "/tiles/carpet/cormar-carpets/inglewood-saxony.png",
    path: "/carpet/cormar-inglewood-saxony",
  },
  {
    id: 2,
    title: "Primo Texture",
    description:
      "A premium, easy-to-clean loop pile carpet that delivers a classic wool aesthetic with high-end practicality.",
    imageUrl: "/tiles/carpet/cormar-carpets/primo-textures.png",
    path: "/carpet/cormar-primo-texture",
  },
  {
    id: 3,
    title: "Sensation",
    description:
      "The UK's favorite deep-pile carpet collection, offering unrivaled luxury and stain-resistant performance with a 10-year warranty.",
    imageUrl: "/tiles/carpet/cormar-carpets/sensation.png",
    path: "/carpet/cormar-sensation",
  },
];

export const FURLONG_FLOORING_SOUTHERN_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Bliss Saxony",
    description:
      "A deep, plush saxony carpet made from 100% polypropylene for a warm, cozy feel in busy households.",
    imageUrl: "/tiles/carpet/furlong/bliss-saxony.png",
    path: "/carpet/furlong-bliss-saxony",
  },
  {
    id: 2,
    title: "Trident Twist",
    description:
      "A durable, low-maintenance 2-ply yarn twist available in a stylish patterned tweed for domestic and commercial use.",
    imageUrl: "/tiles/carpet/furlong/trident-twist.png",
    path: "/carpet/furlong-trident-twist",
  },
  {
    id: 3,
    title: "Fairway",
    description:
      "A quality, bleach-cleanable carpet featuring vibrant on-trend colors and stain-resistant fibers for every room.",
    imageUrl: "/tiles/carpet/furlong/fairway.png",
    path: "/carpet/furlong-fairway",
  },
  {
    id: 4,
    title: "Elegance",
    description:
      "A premium 2-ply twist pile carpet that combines a natural wool look with the durability of bleach-cleanable fibers.",
    imageUrl: "/tiles/carpet/furlong/elegance.png",
    path: "/carpet/furlong-elegance",
  },
];

export const ABINGDONG_FLOORING_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Stain Free Captivation",
    description:
      "Capture elegance and comfort with the enchanting, stain-resistant allure of this sophisticated collection.",
    imageUrl: "/tiles/carpet/abingdon/captivation.png",
    path: "/carpet/abingdon-stain-free-captivation",
  },
  {
    id: 2,
    title: "Stain Free Cares",
    description:
      "Inspire your inner designer with a wide array of vibrant colors designed for creative and practical living.",
    imageUrl: "/tiles/carpet/abingdon/cares.png",
    path: "/carpet/abingdon-stain-free-cares",
  },
  {
    id: 3,
    title: "Love Story Soft Whisper",
    description:
      "An elegant and plush Saxony carpet meticulously crafted for enduring beauty and soft comfort.",
    imageUrl: "/tiles/carpet/abingdon/soft-whisper.png",
    path: "/carpet/abingdon-love-story-soft-whisper",
  },
];

export const ASSOCIATED_WEAVERS_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Yukon",
    description:
      "A captivating carpet designed to evoke deep comfort and visual enchantment in any modern space.",
    imageUrl: "/tiles/carpet/associated-weavers/yukon.png",
    path: "/carpet/associated-weavers-yukon",
  },
  {
    id: 2,
    title: "Magnificus",
    description:
      "Unleash your creativity with a magnificent palette of colors and a soft, luxurious finish.",
    imageUrl: "/tiles/carpet/associated-weavers/magnificus.png",
    path: "/carpet/associated-weavers-magnificus",
  },
];

export const LEWIS_ABBOTT_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Flat Weaves Herringbone",
    description:
      "An extremely durable woven collection featuring contemporary shades in an elegant, fashionable herringbone pattern.",
    imageUrl: "/tiles/carpet/lewis-abbott/herringbone.png",
    path: "/carpet/lewis-abbott-flat-weaves-herringbone",
  },
  {
    id: 2,
    title: "Flat Weaves Gatsby",
    description:
      "A striking collection of muted tones crafted from stain-resistant polypropylene for a modern, durable home.",
    imageUrl: "/tiles/carpet/lewis-abbott/gatsby.png",
    path: "/carpet/lewis-abbott-flat-weaves-gatsby",
  },
];

// ===== VINYL =====

export const VINYL_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Essential II",
    description: "This vinyl range is affordable and competitively priced.",
    imageUrl:
      "https://www.furlongflooring.com/_next/image?url=https%3A%2F%2Ffiles.mutualcdn.com%2Ffurlong-flooring%2Fimages%2Fcn_essential_main.jpg%3Fdate%3D2023-11-17T15%3A48%3A04%2B00%3A00&w=1920&q=75",
    path: "/vinyl/furlong-essential-ii",
  },
  {
    id: 2,
    title: "Endurance",
    description: "Exceptional style without compromising functionality.",
    imageUrl:
      "https://www.abingdonflooring.co.uk/wp-content/uploads/Endurance-Featured-Image-1.jpg",
    path: "/vinyl/abingdon-endurance",
  },
];

// ===== LVT =====

export const LVT_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Invictus Maximus Click",
    description: "Lorem ipsum lorem ipsum lorem ipsum.",
    imageUrl: "/tiles/lvt/invictus/cotton-oak-parquet-sandalwood-preview.png",
    path: "/lvt/invictus-maximus-click",
  },
  {
    id: 2,
    title: "Artisan Click Abingdon",
    description:
      "Bring timeless elegance and lasting performance to your space with Artisan, a premium collection designed to impress.",
    imageUrl: "/tiles/lvt/abingdon/antique-walnut-preview.png",
    path: "/lvt/artisan-click-abingdon",
  },
];

// ===== LAMINATE =====

export const LAMINATE_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Urban 8mm",
    description:
      "Urban laminate flooring is a top-quality 8mm laminate that offers a perfect combination of price, decors and availability. The market-leading Uniclic® click system is incorporated into the flooring, making the installation process quicker and simpler.",
    imageUrl: "/tiles/leminate/urban/kartaca-fu018-preview.png",
    path: "/laminate/urban-8mm",
  },
  {
    id: 2,
    title: "River water resistant 8mm",
    description:
      "Hardwearing and sustainably sourced with a Uniclic® system for faster fitting, River delivers on price, quality and aesthetic. The on trend decors range from light to dark and are inspired by authentic wood types – plus with its 72 hour water resistance, River really is the perfect hardflooring choice.",
    imageUrl: "/tiles/leminate/river/danube-oak-preview.png",
    path: "/laminate/river-water-resistant-8mm",
  },
  {
    id: 3,
    title: "Elite XL 10mm",
    description:
      "Furlong Flooring's Elite XL is an exclusive 12mm laminate range that is strong, hard-wearing, and environmentally sustainable. It has an AC5 rating, making it highly durable and suitable for commercial settings. Available in 8 trendy decors that are specifically designed for the UK market, Elite XL offers unbeatable value for money. ",
    imageUrl: "/tiles/leminate/elite-xl/ankara-fxl015-preview.png",
    path: "/laminate/elite-xl-10mm",
  },
];

// ===== Mattrese & Bed Frame =====

export const DIVAN_BASES_MATRESE_BED_FRAME_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Bed",
    description:
      "Discover the perfect foundation for your sleep with our handcrafted divan bases, designed for maximum stability and timeless style.",
    imageUrl: "/tiles/mattress-bed/divan-bases-preview.png",
    path: "/mattress-bed/bed",
  },
];

export const MATTRESS_MATRESE_BED_FRAME_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Mattresses",
    description:
      "Experience unparalleled comfort with our premium range of orthopaedic and pocket-sprung mattresses tailored for ultimate support.",
    imageUrl: "/tiles/mattress-bed/1500-pcket-sprung-mattress-preview.png",
    path: "/mattress-bed/mattress",
  },
];

export const FRAMES_MATRESE_BED_FRAME_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Bed Frames",
    description:
      "Elevate your bedroom aesthetics with our exclusive bed frames, blending durable craftsmanship with modern architectural designs.",
    imageUrl: "/tiles/mattress-bed/frames/london-frame-preview.png",
    path: "/mattress-bed/frame",
  },
];

export const HEADBOARDS_MATRESE_BED_FRAME_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Headboards",
    description:
      "The ultimate finishing touch. Choose from a variety of textures and heights to add a layer of luxury and comfort to your bed.",
    imageUrl: "/tiles/mattress-bed/headboards/flat-pvc-20-inch-preview.png",
    path: "/mattress-bed/headboards",
  },
];
