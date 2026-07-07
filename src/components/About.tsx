import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';
import { useRef, useState, useCallback } from 'react';
import { useLang } from '../contexts/LangContext';

// ✅ FIX: Throttled TiltCard mousemove - only update position every 2 frames
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // ✅ FIX: Reduced rotation range from ±8° to ±5° for subtler, lighter effect
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 100, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 100, damping: 25 });

  const lastMoveTime = useRef(0);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // ✅ FIX: Throttle to ~30fps
    const now = Date.now();
    if (now - lastMoveTime.current < 33) return;
    lastMoveTime.current = now;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const techStack = [
  { icon: '⚛', label: 'React' },
  { icon: '▲', label: 'Next.js' },
  { icon: '🔷', label: 'TypeScript' },
  { icon: '🔥', label: 'Vite' },
  { icon: '🎨', label: 'Tailwind' },
  { icon: '🤖', label: 'AI/ML' },
];

export default function About() {
  const { t } = useLang();

  const features = [
    t('تطوير حضور رقمي احترافي', 'Build Professional Digital Presence'),
    t('تحسين العمليات وأتمتتها', 'Optimize & Automate Operations'),
    t('بناء أنظمة SaaS قابلة للتوسع', 'Build Scalable SaaS Systems'),
    t('دمج الذكاء الاصطناعي في الأعمال', 'Integrate AI into Business'),
  ];

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background — ✅ FIX: Replaced Framer Motion animate with CSS animation for background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full float-slow"
          style={{ background: 'radial-gradient(circle, rgba(242,169,0,0.05) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.6 }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full float-slow"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.5, animationDelay: '-4s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-2/5 relative"
          >
            <TiltCard className="relative">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', maxHeight: '420px' }}>
                  <img
                    src="/images/me/fahmy.jpg"
                    alt="Fahmy Mohsen"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    style={{ filter: 'grayscale(15%)' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,2,6,0.9) 0%, rgba(2,2,6,0.3) 50%, transparent 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-2xl font-bold text-white mb-1">Fahmy Mohsen</p>
                    <p className="text-sm text-amber-400 font-medium">{t('مطور ومصمم رقمي', 'Full-Stack Developer & Designer')}</p>
                  </div>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-3 divide-x divide-white/5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {[
                    { val: '2', lbl: t('سنوات', 'Years') },
                    { val: '30', lbl: t('مشروع', 'Projects') },
                    { val: '100%', lbl: t('التزام', 'Commitment') },
                  ].map((s, i) => (
                    <div key={i} className="py-4 text-center">
                      <p className="text-xl font-black text-gold">{s.val}+</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', backdropFilter: 'blur(10px)', willChange: 'transform' }}
              >
                ✦ {t('متاح للعمل', 'Available')}
              </motion.div>
            </TiltCard>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span>{tech.icon}</span>
                  {tech.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="line-dec" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                {t('نبذة عني', 'About Me')}
              </span>
            </div>

            <h2 className="heading-lg text-white mb-6">
              {t('مطور يصنع ', 'Developer Creating ')}
              <span className="text-gradient-multi">{t('تجارب رقمية', 'Digital Experiences')}</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t(
                'مطور مواقع ومنتجات رقمية متخصص في بناء المواقع الحديثة وأنظمة SaaS وأدوات الذكاء الاصطناعي. أجمع بين البرمجة الاحترافية والتصميم الإبداعي لأقدم منتجات تفوق التوقعات.',
                'A web and digital products developer specialized in building modern websites, SaaS systems, and AI tools. I combine professional programming with creative design to deliver products beyond expectations.'
              )}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(242,169,0,0.04)', border: '1px solid rgba(242,169,0,0.1)' }}
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{f}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="https://wa.me/201027899375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-sm text-black cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #f2a900, #ffd166)', boxShadow: '0 0 25px rgba(242,169,0,0.3)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(242,169,0,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Star className="w-4 h-4" />
              {t('تعاون معي في مشروعك', 'Collaborate on Your Project')}
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
