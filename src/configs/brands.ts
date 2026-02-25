import {
  ABINGDONG_FLOORING_CARPET_BRAND,
  ASSOCIATED_WEAVERS_CARPET_BRAND,
  CORMAR_CARPET_BRAND,
  ESSENTIAL_II_VINYL_BRAND,
  FURLONG_FLOORING_SOUTHERN_CARPET_BRAND,
  LEWIS_ABBOTT_CARPET_BRAND,
  type Product,
  type WiderGridBrand,
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
    items: ESSENTIAL_II_VINYL_BRAND,
    reverse: true,
  },
];
