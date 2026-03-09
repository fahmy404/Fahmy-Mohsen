import { motion } from 'motion/react';
import { ArrowLeft, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">
            مرحباً بك في عالمي الرقمي
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            سابقة أعمال <br />
            <span className="text-gradient-gold font-serif italic pr-2">Fahmy Mohsen</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            تطوير مواقع – أنظمة SaaS – أدوات الذكاء الاصطناعي – تصميم الهوية الرقمية
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">مشاهدة الأعمال</span>
              <ArrowLeft className="w-4 h-4 relative z-10 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/201027899375"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-panel rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              <span>تواصل معي</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">تمرير للأسفل</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
