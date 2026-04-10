import {
  ABINGDONG_FLOORING_CARPET_BRAND,
  ASSOCIATED_WEAVERS_CARPET_BRAND,
  CORMAR_CARPET_BRAND,
  VINYL_BRAND,
  FURLONG_FLOORING_SOUTHERN_CARPET_BRAND,
  LEWIS_ABBOTT_CARPET_BRAND,
  type WiderGridBrand,
  LVT_BRAND,
  LAMINATE_BRAND,
  HEADBOARDS_MATRESE_BED_FRAME_BRAND,
  FRAMES_MATRESE_BED_FRAME_BRAND,
  MATTRESS_MATRESE_BED_FRAME_BRAND,
  DIVAN_BASES_MATRESE_BED_FRAME_BRAND,
} from "@/configs/products";

export interface BrandSection {
  title: string;
  description: string;
  items: WiderGridBrand[];
  reverse: boolean;
}

export const CARPET_BRAND_SECTIONS: BrandSection[] = [
  {
    title: "Cormar Carpets",
    description:
      "Style meets comfort with our Fairisle wool loop range—durable, elegant, and made for the home.",
    items: CORMAR_CARPET_BRAND,
    reverse: true,
  },
  {
    title: "Furlong Flooring Southern",
    description:
      "From long-lasting hallway carpets to luxury bedroom carpets, explore our award-winning carpet ranges designed for style, comfort, and durability.",
    items: FURLONG_FLOORING_SOUTHERN_CARPET_BRAND,
    reverse: false,
  },
  {
    title: "Abingdon Flooring",
    description: "British Heritage. Modern Innovation. Quality You Can Trust.",
    items: ABINGDONG_FLOORING_CARPET_BRAND,
    reverse: true,
  },
  {
    title: "Associated Weavers",
    description:
      "Associated Weavers is your ideal flooring partner for your home, your office, or any commercial project. Flooring has a tailor-made solution to suit your needs!",
    items: ASSOCIATED_WEAVERS_CARPET_BRAND,
    reverse: false,
  },
  {
    title: "Floors By Lewis Abbott",
    description:
      "Flooring experts for over 75 years, Lewis Abbott were established in 1945. A family run business specialising in supplying high quality carpet and flooring products and providing exceptional service to its customers.",
    items: LEWIS_ABBOTT_CARPET_BRAND,
    reverse: true,
  },
];

export const VINYL_BRAND_SECTIONS: BrandSection[] = [
  {
    title: "Vinyl",
    description: "This vinyl range is affordable and competitively priced.",
    items: VINYL_BRAND,
    reverse: true,
  },
];

export const LVT_BRAND_SECTIONS: BrandSection[] = [
  {
    title: "LVT",
    description:
      "LVT is ideal for customers who want a high-end look with low maintenance — a modern flooring solution built to last.",
    items: LVT_BRAND,
    reverse: true,
  },
];

export const LAMINATE_BRAND_SECTIONS: BrandSection[] = [
  {
    title: "Laminate",
    description:
      "Laminate flooring is a stylish and cost-effective solution for modern homes and busy spaces.",
    items: LAMINATE_BRAND,
    reverse: true,
  },
];

export const MATRESE_BED_FRAME_BRAND_SECTIONS: BrandSection[] = [
  {
    title: "Bed",
    description:
      "Upgrade your sleep sanctuary with our premium divan bases, engineered for superior durability and a clean, modern aesthetic.",
    items: DIVAN_BASES_MATRESE_BED_FRAME_BRAND,
    reverse: true,
  },
  {
    title: "Mattresses",
    description:
      "From orthopaedic support to cloud-like softness, explore our curated selection of mattresses designed to provide the restorative rest you deserve.",
    items: MATTRESS_MATRESE_BED_FRAME_BRAND,
    reverse: true,
  },
  {
    title: "Frames",
    description:
      "Define your bedroom's character with our range of high-quality bed frames, where structural integrity meets exquisite design.",
    items: FRAMES_MATRESE_BED_FRAME_BRAND,
    reverse: true,
  },
  {
    title: "Headboards",
    description:
      "Add a touch of sophistication and personalized comfort with our elegant headboards, available in various premium fabrics and styles.",
    items: HEADBOARDS_MATRESE_BED_FRAME_BRAND,
    reverse: true,
  },
];
