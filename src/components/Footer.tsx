import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

export default function Footer() {
  const { t } = useLang();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { nameAr: 'الرئيسية', nameEn: 'Home', href: '#hero' },
    { nameAr: 'نبذة عني', nameEn: 'About', href: '#about' },
    { nameAr: 'خدماتي', nameEn: 'Services', href: '#services' },
    { nameAr: 'شركاء النجاح', nameEn: 'Partners', href: '#brands' },
    { nameAr: 'أعمالي', nameEn: 'Portfolio', href: '#websites' },
  ];

  return (
    <footer className="py-12 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(5,5,15,0.9)' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-tight" style={{ background: 'linear-gradient(135deg, #f2a900, #ffd166)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: '"Space Grotesk", sans-serif' }}>
              Fahmy.
            </span>
            <span className="text-gray-600 text-sm">© {new Date().getFullYear()} {t('جميع الحقوق محفوظة', 'All Rights Reserved')}</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-500">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-amber-400 transition-colors">
                {t(l.nameAr, l.nameEn)}
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-500 hover:text-amber-400 transition-all duration-300 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            whileHover={{ scale: 1.1, y: -2, borderColor: 'rgba(242,169,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('العودة للأعلى', 'Back to top')}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
