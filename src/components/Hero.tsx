import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

// ── Optimized Particle Canvas ──────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string; pulse: number; phase: number };
    const colors = ['rgba(242,169,0,', 'rgba(99,102,241,', 'rgba(232,121,160,', 'rgba(16,185,129,'];

    // ✅ FIX: Reduced from 90 to 50 particles (44% fewer draw calls)
    const particles: P[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.3,
      alpha: Math.random() * 0.45 + 0.05,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    // ✅ FIX: Throttle to ~30fps instead of 60fps for background canvas
    let lastTime = 0;
    const TARGET_FPS = 30;
    const FRAME_DURATION = 1000 / TARGET_FPS;

    // ✅ FIX: Reduced connection distance from 110 to 80 (cuts O(n²) pairs significantly)
    const CONNECTION_DIST = 80;
    const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;

    const draw = (timestamp: number) => {
      raf = requestAnimationFrame(draw);
      const elapsed = timestamp - lastTime;
      if (elapsed < FRAME_DURATION) return;
      lastTime = timestamp - (elapsed % FRAME_DURATION);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(t * p.pulse * 100 + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + a + ')';
        ctx.fill();
      });

      // ✅ FIX: Use squared distance to avoid expensive Math.hypot
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CONNECTION_DIST_SQ) {
            const d = Math.sqrt(dSq);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${0.05 * (1 - d / CONNECTION_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ willChange: 'transform' }}
    />
  );
}

// ── Floating geometric shapes ─────────────────────────────
// ✅ FIX: Removed extra rings (2 rotating rings removed), reduced from 6 to 4 floating dots
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large aurora blobs — using CSS animations instead of Framer Motion for better perf */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-30"
        style={{ top: '-10%', left: '-15%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(80px)', willChange: 'transform' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-25"
        style={{ bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(242,169,0,0.12) 0%, transparent 70%)', filter: 'blur(80px)', willChange: 'transform' }}
        animate={{ x: [0, -35, 0], y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut', delay: 3 }}
      />

      {/* Small floating dots — reduced from 6 to 4 */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            top: `${20 + i * 18}%`,
            right: `${5 + (i % 3) * 10}%`,
            background: i % 2 === 0 ? '#f2a900' : '#6366f1',
            boxShadow: `0 0 6px ${i % 2 === 0 ? '#f2a900' : '#6366f1'}`,
            willChange: 'transform',
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.7, delay: i * 0.5, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

// ── Typewriter ────────────────────────────────────────────
function TypewriterText({ lang }: { lang: 'ar' | 'en' }) {
  const wordsAr = ['تطوير المواقع', 'أنظمة SaaS', 'أدوات الذكاء الاصطناعي', 'الهوية الرقمية'];
  const wordsEn = ['Web Development', 'SaaS Systems', 'AI-Powered Tools', 'Digital Identity'];
  const words = lang === 'ar' ? wordsAr : wordsEn;

  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const word = words[current];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setCurrent(c => (c + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(isDeleting
          ? word.substring(0, displayed.length - 1)
          : word.substring(0, displayed.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, current, words, speed]);

  return (
    <span className="text-gold text-glow-gold font-bold">
      {displayed}
      <span className="animate-pulse text-amber-400">|</span>
    </span>
  );
}

export default function Hero() {
  const { lang, t } = useLang();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ✅ FIX: Reduced spring stiffness & increased damping for smoother, less CPU-intensive spring
  const springX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  // ✅ FIX: Throttle mousemove to every 2 frames (~33ms at 60fps) using useCallback
  const lastMoveTime = useRef(0);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastMoveTime.current < 33) return; // ~30fps throttle
    lastMoveTime.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.015);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.015);
  }, [mouseX, mouseY]);

  const stats = [
    { value: '2', label: t('سنوات خبرة', 'Years Exp.'), color: '#f2a900' },
    { value: '30', label: t('مشروع', 'Projects'), color: '#6366f1' },
    { value: '100%', label: t('رضا العملاء', 'Satisfaction'), color: '#10b981' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ParticleField />
      <FloatingOrbs />

      {/* Mouse-reactive aurora — ✅ FIX: Added will-change for GPU layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ x: springX, y: springY, willChange: 'transform' }}
      >
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(242,169,0,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Content */}
      <motion.div
        style={{ y, opacity, willChange: 'transform, opacity' }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20"
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="badge" style={{ background: 'rgba(242,169,0,0.08)', border: '1px solid rgba(242,169,0,0.25)', color: '#ffd166' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {t('متاح للعمل الآن', 'Available for Work')}
          </span>
        </motion.div>

        {/* Name heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-white mb-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          {t('مرحباً، أنا', "Hi, I'm")}
          <br />
          <span className="text-gold text-glow-gold" style={{ fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>
            Fahmy Mohsen
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-medium mb-6 text-gray-300 min-h-[1.4em]"
        >
          {t('متخصص في ', 'Specialized in ')}<TypewriterText lang={lang} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t(
            'أبني منتجات رقمية تجمع بين الأداء العالي والجماليات الاستثنائية — من مواقع الويب إلى أنظمة SaaS وأدوات الذكاء الاصطناعي.',
            'I build digital products combining high performance and exceptional aesthetics — from websites to SaaS systems and AI tools.'
          )}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#portfolio"
            className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-black overflow-hidden cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #f2a900, #ffd166)', boxShadow: '0 0 30px rgba(242,169,0,0.35), 0 4px 20px rgba(0,0,0,0.3)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(242,169,0,0.5), 0 4px 20px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{t('مشاهدة الأعمال', 'View My Work')}</span>
            <motion.span animate={{ x: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
              <ArrowLeft className="w-4 h-4" />
            </motion.span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </motion.a>

          <motion.a
            href="https://wa.me/201027899375"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
            whileHover={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('تواصل معي', 'Contact Me')}
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-black mb-1" style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}>
                {stat.value}+
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-600 uppercase tracking-[0.2em] font-medium">
          {t('تمرير', 'Scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ color: 'rgba(242,169,0,0.5)' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
