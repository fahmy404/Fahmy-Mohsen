import { motion } from 'framer-motion';
import { LangProvider } from './contexts/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Brands from './components/Brands';
import WebsitesPortfolio from './components/WebsitesPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <motion.div
        className="min-h-screen text-white"
        style={{ background: '#020206' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Brands />
          <div id="portfolio">
            <WebsitesPortfolio />
          </div>
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </LangProvider>
  );
}

