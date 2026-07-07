import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { name: t('الرئيسية', 'Home'), href: '#hero' },
    { name: t('نبذة عني', 'About'), href: '#about' },
    { name: t('خدماتي', 'Services'), href: '#services' },
    { name: t('أعمالي', 'Portfolio'), href: '#websites' },
    { name: t('تواصل', 'Contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}
    >
      {/* Glass background */}
      <div
        className="absolute inset-0 -z-10 transition-all duration-400"
        style={{
          background: isScrolled ? 'rgba(2,2,6,0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo — just "Fahmy" text, no box icon */}
        <motion.a
          href="#hero"
          className="group flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-2xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #f2a900, #ffd166)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            Fahmy
          </span>
          <span
            className="text-2xl font-black tracking-tight"
            style={{ color: 'rgba(255,255,255,0.25)', fontFamily: '"Space Grotesk", sans-serif' }}
          >
            .
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                activeLink === link.href ? 'text-amber-400' : 'text-gray-400 hover:text-white'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -1 }}
            >
              {link.name}
              {activeLink === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"
                />
              )}
            </motion.a>
          ))}
        </motion.nav>

        {/* Right side: Lang toggle + CTA + Mobile btn */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLang}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)',
            }}
            whileHover={{
              background: 'rgba(242,169,0,0.1)',
              borderColor: 'rgba(242,169,0,0.3)',
              color: '#f2a900',
              scale: 1.04,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* CTA — no icon */}
          <motion.a
            href="https://wa.me/201027899375"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-5 py-2.5 rounded-xl font-semibold text-sm text-black cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #f2a900, #ffd166)',
              boxShadow: '0 0 20px rgba(242,169,0,0.3)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(242,169,0,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            {t('تواصل معي', 'Contact Me')}
          </motion.a>

          {/* Mobile menu btn */}
          <motion.button
            className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-white cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(5,5,15,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-amber-400 transition-colors py-2 border-b border-white/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
              {/* Mobile lang toggle */}
              <motion.button
                onClick={toggleLang}
                className="mt-2 py-2 text-sm font-bold text-amber-500 text-right cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {lang === 'ar' ? '🌐 Switch to English' : '🌐 التبديل للعربية'}
              </motion.button>
              <motion.a
                href="https://wa.me/201027899375"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black text-base cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #f2a900, #ffd166)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {t('تواصل معي عبر واتساب', 'Contact via WhatsApp')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
