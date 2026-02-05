import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Projects />
        <Reviews />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}