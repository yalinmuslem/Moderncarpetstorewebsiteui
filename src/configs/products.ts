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
    description:
      "With a palette of 15 heather colors, the Inglewood Saxony carpet is built to last. It features a 10-year Stain and Wear Warranty and is fully compatible with bleach cleaning for effortless maintenance.",
    imageUrl: "/tiles/carpet/category/inglewood-saxony.webp",
  },
  {
    id: 2,
    title: "Primo Texture",
    description:
      "Experience the classic aesthetic of wool without the maintenance. Primo Textures offers a premium, three-fold yarn loop pile that combines high-end style with the everyday practicality of an easy-to-clean surface. Available in two of our most sought-after designs.",
    imageUrl: "/tiles/carpet/category/primo-textures.webp",
  },
  {
    id: 3,
    title: "Sensation",
    description:
      "Step into the comfort of the country’s most loved deep-pile carpet. The Sensation collection offers effortless maintenance with its bleach-cleanable, stain-resistant fibers. Choose between the classic 'Original' feel or the unrivaled luxury of the all-new, extra-heavyweight 'Ultimate Sensation'—both backed by a 10-year warranty.",
    imageUrl: "/tiles/carpet/category/sensation.webp",
  },
];

export const FURLONG_FLOORING_SOUTHERN_CARPET_BRAND: WiderGridBrand[] = [
  {
    id: 1,
    title: "Bliss Saxony",
    description:
      "Bliss is a deep, luxurious saxony carpet that truly lives up to its name. Made from 100% polypropylene, it’s built to handle the demands of busy households while maintaining its rich, plush feel underfoot. Perfect for bedrooms and living spaces alike, Bliss creates a warm, cosy atmosphere and adds a touch of everyday indulgence to any room.",
    imageUrl: "/tiles/carpet/category/inglewood-saxony.webp",
  },
  {
    id: 2,
    title: "Trident Twist",
    description:
      "Our market-leading range has a sister range - the Trident Tweed. It is made using 2-ply yarn and a 1/10-gauge construction, providing a durable and low-maintenance twist. The range comes in a new patterned tweed design, with a mix of warm, cool, and bold colors, making it suitable for both domestic and commercial use.",
    imageUrl: "/tiles/carpet/category/primo-textures.webp",
  },
  {
    id: 3,
    title: "Fairway",
    description:
      "Our Fairway carpet is part of our Regency carpet range that is manufactured in our production facility in Belfast. This quality carpet is available in both soft warm and vibrant on-trend colours that are perfect for every room. It consists of stain resistant fibres, is easy to clean and has the added benefit of being bleach cleanable.",
    imageUrl: "/tiles/carpet/category/sensation.webp",
  },
  {
    id: 4,
    title: "Elegance",
    description:
      "Our Fairway carpet is part of our Regency carpet range that is manufactured in our production facility in Belfast. This quality carpet is available in both soft warm and vibrant on-trend colours that are perfect for every room. It consists of stain resistant fibres, is easy to clean and has the added benefit of being bleach cleanable.",
    imageUrl: "/tiles/carpet/category/sensation.webp",
  },
];