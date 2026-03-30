import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./pages/landing-page";
import GalleryPage from "./pages/gallery-page";
import { useEffect } from "react";
import Lenis from "lenis";
import {
  ABINGDON_LVT_DATA,
  ABINGDONG_LOVE_STORY_SOFT_WHISPER_CARPET_DATA,
  ABINGDONG_STAIN_FREE_CAPTIVATION_CARPET_DATA,
  ABINGDONG_STAIN_FREE_CARES_CARPET_DATA,
  ASSOCIATED_WEAVERS_MAGNIFICUS_CARPET_DATA,
  ASSOCIATED_WEAVERS_YUKON_CARPET_DATA,
  CORMAR_INGLEWOOD_SAXONY_CARPET_DATA,
  CORMAR_PRIMO_TEXTURE_CARPET_DATA,
  CORMAR_SENSATION_CARPET_DATA,
  FURLONG_BLISS_SAXONY_CARPET_DATA,
  FURLONG_ELEGANCE_CARPET_DATA,
  FURLONG_ENDURANCE_VINYLs_DATA,
  FURLONG_ESSENTIAL_II_VINYLs_DATA,
  FURLONG_FAIRWAY_CARPET_DATA,
  FURLONG_TRIDENT_TWIST_CARPET_DATA,
  INVICTUS_LVT_DATA,
  LEMINATE_ELITE_XL_DATA,
  LEMINATE_RIVER_DATA,
  LEMINATE_URBAN_DATA,
  LEWIS_ABBOTT_FLAT_WEAVES_GATSBY_CARPET_DATA,
  LEWIS_ABBOTT_FLAT_WEAVES_HERRINGBONE_CARPET_DATA,
  MATRESE_BED_BEDSET_DATA,
  MATRESE_BED_FRAMES_DATA,
  MATRESE_BED_HEADBOARDS_DATA,
  MATRESE_BED_MATTRESSES_DATA,
} from "./configs/products";
import WiderPage from "./pages/wider-page";
import {
  CARPET_BRAND_SECTIONS,
  LEMINATE_BRAND_SECTIONS,
  LVT_BRAND_SECTIONS,
  MATRESE_BED_FRAME_BRAND_SECTIONS,
  VINYL_BRAND_SECTIONS,
} from "./configs/brands";
import TilesPage from "./pages/tiles-page";
import {
  CARPET_DESCRIPTION,
  LAMINATE_DESCRIPTION,
  LVT_DESCRIPTION,
  MATTRESS_BED_DESCRIPTION,
  VINYL_DESCRIPTION,
} from "./configs/description";
import DetailService from "./pages/detail-service";
import AboutPage from "./pages/about-page";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/services" element={<DetailService />} />
      <Route path="/about" element={<AboutPage />} />

      <Route
        path="/carpet"
        element={
          <WiderPage
            headerContent={CARPET_DESCRIPTION}
            brandList={CARPET_BRAND_SECTIONS}
          />
        }
      />
      {/* CORMAR CARPETS */}
      <Route
        path="/carpet/cormar-inglewood-saxony"
        element={
          <GalleryPage productsList={CORMAR_INGLEWOOD_SAXONY_CARPET_DATA} />
        }
      />
      <Route
        path="/carpet/cormar-primo-texture"
        element={
          <GalleryPage productsList={CORMAR_PRIMO_TEXTURE_CARPET_DATA} />
        }
      />
      <Route
        path="/carpet/cormar-sensation"
        element={<GalleryPage productsList={CORMAR_SENSATION_CARPET_DATA} />}
      />
      {/* FURLONG FLOORING */}
      <Route
        path="/carpet/furlong-bliss-saxony"
        element={
          <GalleryPage productsList={FURLONG_BLISS_SAXONY_CARPET_DATA} />
        }
      />
      <Route
        path="/carpet/furlong-trident-twist"
        element={
          <GalleryPage productsList={FURLONG_TRIDENT_TWIST_CARPET_DATA} />
        }
      />
      <Route
        path="/carpet/furlong-fairway"
        element={<GalleryPage productsList={FURLONG_FAIRWAY_CARPET_DATA} />}
      />
      <Route
        path="/carpet/furlong-elegance"
        element={<GalleryPage productsList={FURLONG_ELEGANCE_CARPET_DATA} />}
      />
      {/* ABINGDON FLOORING */}
      <Route
        path="/carpet/abingdon-stain-free-captivation"
        element={
          <TilesPage
            title="Abingdon - Captivation"
            description="Engage your emotions with the enchanting allure of Captivation."
            heroImage="/tiles/carpet/abingdon/captivation.png"
            productsList={ABINGDONG_STAIN_FREE_CAPTIVATION_CARPET_DATA}
          />
        }
      />
      <Route
        path="/carpet/abingdon-stain-free-cares"
        element={
          <TilesPage
            title="Abingdon - Caress"
            description="Set your inner designer free with an abundance of colour."
            heroImage="/tiles/carpet/abingdon/cares.png"
            productsList={ABINGDONG_STAIN_FREE_CARES_CARPET_DATA}
          />
        }
      />
      <Route
        path="/carpet/abingdon-love-story-soft-whisper"
        element={
          <TilesPage
            title="Abingdon - Soft Whisper"
            description="A Saxony carpet that’s elegant, plush, and crafted for lasting beauty."
            heroImage="/tiles/carpet/abingdon/soft-whisper.png"
            productsList={ABINGDONG_LOVE_STORY_SOFT_WHISPER_CARPET_DATA}
          />
        }
      />
      {/* ASSOCIATED WEAVERS */}
      <Route
        path="/carpet/associated-weavers-yukon"
        element={
          <GalleryPage productsList={ASSOCIATED_WEAVERS_YUKON_CARPET_DATA} />
        }
      />
      <Route
        path="/carpet/associated-weavers-magnificus"
        element={
          <GalleryPage
            productsList={ASSOCIATED_WEAVERS_MAGNIFICUS_CARPET_DATA}
          />
        }
      />
      {/* LEWIS ABBOTT */}
      <Route
        path="/carpet/lewis-abbott-flat-weaves-herringbone"
        element={
          <TilesPage
            title="Lewis Abbott - Flat Waves Herringbone"
            description="Chic, woven, and built to last. Our Herringbone shades offer a sophisticated look with the rugged durability needed for every room in your home."
            heroImage="/tiles/carpet/lewis-abbott/herringbone/copper-preview.png"
            productsList={LEWIS_ABBOTT_FLAT_WEAVES_HERRINGBONE_CARPET_DATA}
          />
        }
      />
      <Route
        path="/carpet/lewis-abbott-flat-weaves-gatsby"
        element={
          <TilesPage
            title="Lewis Abbott - Gatsby"
            description="A beautiful collection of muted tones in two striking fashionable woven designs."
            heroImage="/tiles/carpet/lewis-abbott/gatsby.png"
            productsList={LEWIS_ABBOTT_FLAT_WEAVES_GATSBY_CARPET_DATA}
          />
        }
      />
      <Route
        path="/vinyl"
        element={
          <WiderPage
            brandList={VINYL_BRAND_SECTIONS}
            headerContent={VINYL_DESCRIPTION}
          />
        }
      />
      <Route
        path="/vinyl/furlong-essential-ii"
        element={
          <GalleryPage productsList={FURLONG_ESSENTIAL_II_VINYLs_DATA} />
        }
      />
      <Route
        path="/vinyl/abingdon-endurance"
        element={<GalleryPage productsList={FURLONG_ENDURANCE_VINYLs_DATA} />}
      />

      {/* ========== LVT ========== */}
      <Route
        path="/lvt"
        element={
          <WiderPage
            brandList={LVT_BRAND_SECTIONS}
            headerContent={LVT_DESCRIPTION}
          />
        }
      />
      <Route
        path="/lvt/invictus-maximus-click"
        element={<GalleryPage productsList={INVICTUS_LVT_DATA} />}
      />
      <Route
        path="/lvt/artisan-click-abingdon"
        element={<GalleryPage productsList={ABINGDON_LVT_DATA} />}
      />

      {/* ========== LEMINATE ========== */}
      <Route
        path="/laminate"
        element={
          <WiderPage
            brandList={LEMINATE_BRAND_SECTIONS}
            headerContent={LAMINATE_DESCRIPTION}
          />
        }
      />
      <Route
        path="/leminate/urban-8mm"
        element={<GalleryPage productsList={LEMINATE_URBAN_DATA} />}
      />
      <Route
        path="/leminate/river-water-resistant-8mm"
        element={<GalleryPage productsList={LEMINATE_RIVER_DATA} />}
      />
      <Route
        path="/leminate/elite-xl-10mm"
        element={<GalleryPage productsList={LEMINATE_ELITE_XL_DATA} />}
      />

      {/* ========== MATTRESS ========== */}
      <Route
        path="/mattress-bed"
        element={
          <WiderPage
            brandList={MATRESE_BED_FRAME_BRAND_SECTIONS}
            headerContent={MATTRESS_BED_DESCRIPTION}
          />
        }
      />
      <Route
        path="/mattress-bed/bed"
        element={<GalleryPage productsList={MATRESE_BED_BEDSET_DATA} />}
      />
      <Route
        path="/mattress-bed/mattress"
        element={<GalleryPage productsList={MATRESE_BED_MATTRESSES_DATA} />}
      />
      <Route
        path="/mattress-bed/frame"
        element={<GalleryPage productsList={MATRESE_BED_FRAMES_DATA} />}
      />
      <Route
        path="/mattress-bed/headboards"
        element={<GalleryPage productsList={MATRESE_BED_HEADBOARDS_DATA} />}
      />
    </Routes>
  );
}

export default App;
