export type Product = {
    id: number;
    title: string;
    tileImg: string;
    roomImg: string;
}

export const CARPET_DATA: Product[] = [
    { id: 1, title: "Ebony", tileImg: "/tiles/carpet/ebony.jpg", roomImg: "/tiles/carpet/ebony-preview.png" },
    { id: 2, title: "Marble", tileImg: "/tiles/carpet/marble.jpg", roomImg: "/tiles/carpet/marble-preview.png" },
    { id: 3, title: "Ivory", tileImg: "/tiles/carpet/ivory.jpg", roomImg: "/tiles/carpet/ivory-preview.png" },
    { id: 4, title: "Sheffield", tileImg: "/tiles/carpet/sheffield.jpg", roomImg: "/tiles/carpet/sheffield-preview.png" },
    { id: 5, title: "Sisal", tileImg: "/tiles/carpet/sisal.jpg", roomImg: "/tiles/carpet/sisal-preview.png" },
    { id: 6, title: "Zinc", tileImg: "/tiles/carpet/zinc.jpg", roomImg: "/tiles/carpet/zinc-preview.png" },
    { id: 7, title: "Flint", tileImg: "/tiles/carpet/flint.jpg", roomImg: "/tiles/carpet/flint-preview.png" },
    { id: 8, title: "Chalk", tileImg: "/tiles/carpet/chalk.jpg", roomImg: "/tiles/carpet/chalk-preview.png" },
    { id: 9, title: "Graphite", tileImg: "/tiles/carpet/graphite.jpg", roomImg: "/tiles/carpet/graphite-preview.png" },
    { id: 10, title: "Copper", tileImg: "/tiles/carpet/copper.jpg", roomImg: "/tiles/carpet/copper-preview.png" },
    { id: 11, title: "Bronze", tileImg: "/tiles/carpet/bronze.jpg", roomImg: "/tiles/carpet/bronze-preview.png" },
    { id: 12, title: "Quick Silver", tileImg: "/tiles/carpet/quicksilver.jpg", roomImg: "/tiles/carpet/quicksilver-preview.png" }
];

export const LVT_DATA: Product[] = [
    // Classical Series
    { id: 101, title: "Honey Oak (Classical)", tileImg: "/tiles/lvt/honey-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l1/1200/800" },
    { id: 102, title: "Country Oak (Classical)", tileImg: "/tiles/lvt/country-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l2/1200/800" },
    { id: 103, title: "Bare Oak (Classical)", tileImg: "/tiles/lvt/bare-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l3/1200/800" },
    { id: 104, title: "English Oak (Classical)", tileImg: "/tiles/lvt/english-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l4/1200/800" },
    { id: 105, title: "Monument (Classical)", tileImg: "/tiles/lvt/monument-classical.jpg", roomImg: "https://picsum.photos/seed/l5/1200/800" },
    { id: 106, title: "Shadow Oak (Classical)", tileImg: "/tiles/lvt/shadow-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l6/1200/800" },
    { id: 107, title: "Dovewing (Classical)", tileImg: "/tiles/lvt/dovewing-classical.jpg", roomImg: "https://picsum.photos/seed/l7/1200/800" },
    { id: 108, title: "Arctic Oak (Classical)", tileImg: "/tiles/lvt/arctic-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l8/1200/800" },
    { id: 109, title: "City Oak (Classical)", tileImg: "/tiles/lvt/city-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l9/1200/800" },
    { id: 110, title: "Loft Oak (Classical)", tileImg: "/tiles/lvt/loft-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l10/1200/800" },
    { id: 111, title: "Heritage Oak (Classical)", tileImg: "/tiles/lvt/heritage-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l11/1200/800" },
    { id: 112, title: "Smoke Oak (Classical)", tileImg: "/tiles/lvt/smoke-oak-classical.jpg", roomImg: "https://picsum.photos/seed/l12/1200/800" },

    // Parquet Series
    { id: 201, title: "Honey Oak (Parquet)", tileImg: "/tiles/lvt/honey-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp1/1200/800" },
    { id: 202, title: "Country Oak (Parquet)", tileImg: "/tiles/lvt/country-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp2/1200/800" },
    { id: 203, title: "Bare Oak (Parquet)", tileImg: "/tiles/lvt/bare-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp3/1200/800" },
    { id: 204, title: "Smoked Oak (Parquet)", tileImg: "/tiles/lvt/smoked-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp4/1200/800" },
    { id: 205, title: "Heritage Oak (Parquet)", tileImg: "/tiles/lvt/heritage-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp5/1200/800" },
    { id: 206, title: "Loft Oak (Parquet)", tileImg: "/tiles/lvt/loft-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp6/1200/800" },
    { id: 207, title: "City Oak (Parquet)", tileImg: "/tiles/lvt/city-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp7/1200/800" },
    { id: 208, title: "Arctic Oak (Parquet)", tileImg: "/tiles/lvt/arctic-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp8/1200/800" },
    { id: 209, title: "Dovewing (Parquet)", tileImg: "/tiles/lvt/dovewing-parquet.jpg", roomImg: "https://picsum.photos/seed/lp9/1200/800" },
    { id: 210, title: "Shadow Oak (Parquet)", tileImg: "/tiles/lvt/shadow-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp10/1200/800" },
    { id: 211, title: "Monument (Parquet)", tileImg: "/tiles/lvt/monument-parquet.jpg", roomImg: "https://picsum.photos/seed/lp11/1200/800" },
    { id: 212, title: "English Oak (Parquet)", tileImg: "/tiles/lvt/english-oak-parquet.jpg", roomImg: "https://picsum.photos/seed/lp12/1200/800" }
];



export interface WiderGridBrand {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const CORMAR_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Inglewood Saxony",
    description: "A durable, bleach-cleanable carpet available in 15 heather colors with a 10-year stain and wear warranty.",
    imageUrl: "/tiles/carpet/cormar-carpets/inglewood-saxony.png",
  },
  {
    id: 2,
    title: "Primo Texture",
    description: "A premium, easy-to-clean loop pile carpet that delivers a classic wool aesthetic with high-end practicality.",
    imageUrl: "/tiles/carpet/cormar-carpets/primo-textures.png",
  },
  {
    id: 3,
    title: "Sensation",
    description: "The UK's favorite deep-pile carpet collection, offering unrivaled luxury and stain-resistant performance with a 10-year warranty.",
    imageUrl: "/tiles/carpet/cormar-carpets/sensation.png",
  },
];

export const FURLONG_FLOORING_SOUTHERN_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Bliss Saxony",
    description: "A deep, plush saxony carpet made from 100% polypropylene for a warm, cozy feel in busy households.",
    imageUrl: "/tiles/carpet/furlong/bliss-saxony.png",
  },
  {
    id: 2,
    title: "Trident Twist",
    description: "A durable, low-maintenance 2-ply yarn twist available in a stylish patterned tweed for domestic and commercial use.",
    imageUrl: "/tiles/carpet/furlong/trident-twist.png",
  },
  {
    id: 3,
    title: "Fairway",
    description: "A quality, bleach-cleanable carpet featuring vibrant on-trend colors and stain-resistant fibers for every room.",
    imageUrl: "/tiles/carpet/furlong/fairway.png",
  },
  {
    id: 4,
    title: "Elegance",
    description: "A premium 2-ply twist pile carpet that combines a natural wool look with the durability of bleach-cleanable fibers.",
    imageUrl: "/tiles/carpet/furlong/elegance.png",
  },
];

export const ABINGDONG_FLOORING_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Stain Free Captivation",
    description: "Capture elegance and comfort with the enchanting, stain-resistant allure of this sophisticated collection.",
    imageUrl: "/tiles/carpet/abingdon/captivation.png",
  },
  {
    id: 2,
    title: "Stain Free Cares",
    description: "Inspire your inner designer with a wide array of vibrant colors designed for creative and practical living.",
    imageUrl: "/tiles/carpet/abingdon/cares.png",
  },
  {
    id: 3,
    title: "Love Story Soft Whisper",
    description: "An elegant and plush Saxony carpet meticulously crafted for enduring beauty and soft comfort.",
    imageUrl: "/tiles/carpet/abingdon/soft-whisper.png",
  }, 
];

// Associated Weavers
export const ASSOCIATED_WEAVERS_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Yukon",
    description: "A captivating carpet designed to evoke deep comfort and visual enchantment in any modern space.",
    imageUrl: "/tiles/carpet/associated-weavers/yukon.png",
  },
  {
    id: 2,
    title: "Magnificus",
    description: "Unleash your creativity with a magnificent palette of colors and a soft, luxurious finish.",
    imageUrl: "/tiles/carpet/associated-weavers/magnificus.png",
  }, 
];

// Lewis Abbott
export const LEWIS_ABBOTT_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Flat Weaves Herringbone",
    description: "An extremely durable woven collection featuring contemporary shades in an elegant, fashionable herringbone pattern.",
    imageUrl: "/tiles/carpet/lewis-abbott/herringbone.png",
  },
  {
    id: 2,
    title: "Flat Weaves Gatsby",
    description: "A striking collection of muted tones crafted from stain-resistant polypropylene for a modern, durable home.",
    imageUrl: "/tiles/carpet/lewis-abbott/gatsby.png",
  }, 
];