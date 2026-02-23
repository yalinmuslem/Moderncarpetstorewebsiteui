import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./pages/landing-page";
import GalleryPage from "./pages/gallery-page";
import { useEffect } from "react";
import Lenis from "lenis";
import { CARPET_DATA, LVT_DATA } from "./configs/products";
import WiderPage from "./pages/wider-page";

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
        element={<WiderPage productsList={CARPET_DATA} />}
      />
      <Route
        path="/carpet/inglewood-saxony"
        element={<GalleryPage productsList={CARPET_DATA} />}
      />
      <Route
        path="/carpet/primo-texture"
        element={<GalleryPage productsList={CARPET_DATA} />}
      />
      <Route
        path="/carpet/sensation"
        element={<GalleryPage productsList={CARPET_DATA} />}
      />
      <Route path="/lvt" element={<GalleryPage productsList={LVT_DATA} />} />
    </Routes>
  );
}

export default App;
