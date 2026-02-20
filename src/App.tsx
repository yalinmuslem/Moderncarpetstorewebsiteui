import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./pages/landing-page";
import GalleryPage from "./pages/gallery-page";
import { useEffect } from "react";
import Lenis from "lenis";

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
      <Route path="/carpet" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
