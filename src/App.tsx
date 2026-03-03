import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./pages/landing-page";
import GalleryPage from "./pages/gallery-page";
import { useEffect } from "react";
import Lenis from "lenis";
import {
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
  FURLONG_FAIRWAY_CARPET_DATA,
  FURLONG_TRIDENT_TWIST_CARPET_DATA,
  LEWIS_ABBOTT_FLAT_WEAVES_GATSBY_CARPET_DATA,
  LEWIS_ABBOTT_FLAT_WEAVES_HERRINGBONE_CARPET_DATA,
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
      <Route
        path="/carpet"
        element={<WiderPage brandList={CARPET_BRAND_SECTIONS} />}
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
          <GalleryPage
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
            heroImage="/tiles/carpet/abingdon/soft-whisper.png"
            productsList={LEWIS_ABBOTT_FLAT_WEAVES_GATSBY_CARPET_DATA}
          />
        }
      />
      <Route
        path="/vinyl"
        element={<WiderPage brandList={VINYL_BRAND_SECTIONS} />}
      />
      <Route
        path="/lvt"
        element={<WiderPage brandList={LVT_BRAND_SECTIONS} />}
      />
      <Route
        path="/laminate"
        element={<WiderPage brandList={LEMINATE_BRAND_SECTIONS} />}
      />
      <Route
        path="/mattress"
        element={<WiderPage brandList={MATRESE_BED_FRAME_BRAND_SECTIONS} />}
      />
    </Routes>
  );
}

export default App;
