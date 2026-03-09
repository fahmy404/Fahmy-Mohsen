import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-gradient-gold font-serif italic pr-1">F.M</span>
            <span className="text-gray-500 text-sm">© {new Date().getFullYear()} جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#hero" className="hover:text-white transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-white transition-colors">نبذة عني</a>
            <a href="#services" className="hover:text-white transition-colors">خدماتي</a>
            <a href="#portfolio" className="hover:text-white transition-colors">الأعمال</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
