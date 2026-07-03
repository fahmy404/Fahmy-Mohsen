/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500/30 selection:text-amber-200">
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
    </div>
  );
}
