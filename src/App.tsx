import { Route, Routes } from "react-router";
import LandingPage from "./pages/landing-page";
import GalleryPage from "./pages/gallery-page";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/carpet" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
