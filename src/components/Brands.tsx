import { motion } from 'motion/react';

const brands = [
  { src: "/images/brands/photo_6039613149876963823_x.jpg" },
  { src: "/images/brands/photo_5911259022898614275_x.jpg" },
  { src: "/images/brands/photo_5888533285787339634_y.jpg" },
  { src: "/images/brands/photo_5938182678232370188_y.jpg" },
  { src: "/images/brands/photo_5936022709110685499_y.jpg" },
  { src: "/images/brands/photo_5776140322429059167_x.jpg" },
  { src: "/images/brands/photo_5773810723577775234_y.jpg" },
  { src: "/images/brands/photo_5890824049540579740_y.jpg" },
  { src: "/images/brands/photo_5890824049540579741_y.jpg" },
  { src: "/images/brands/photo_5890824049540579742_y.jpg" },
  { src: "/images/brands/photo_5890824049540579743_y.jpg" },
  { src: "/images/brands/photo_5890824049540579744_y.jpg" },
  { src: "/images/brands/photo_5890824049540579745_y.jpg" },
  { src: "/images/brands/photo_5890824049540579746_y.jpg" },
  { src: "/images/brands/photo_5890824049540579747_y.jpg" },
  { src: "/images/brands/photo_5890824049540579748_y.jpg" },
  { src: "/images/brands/photo_5929430106110019838_y.jpg" },
  { src: "/images/brands/455658882_3940616622865978_60240-removebg-preview.png" },
  { src: "/images/brands/655586702_2530312847403412_763912960820410048_n.jpg" },
  { src: "/images/brands/logo.png" },
  { src: "/images/brands/Website-logo.webp" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 md:py-24 relative overflow-hidden bg-[#050505]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] z-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(242,169,0,0.035) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(242,169,0,0.08)', border: '1px solid rgba(242,169,0,0.2)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            <span className="text-sm text-amber-400 font-medium uppercase tracking-[0.18em]">العلامات التجارية</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            شركاء النجاح
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base"
          >
            فخور بالعمل مع مجموعة متنوعة من الشركات والعلامات التجارية المميزة
          </motion.p>
        </div>

        {/* ── Uniform Grid ── */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 border border-white/8 rounded-2xl overflow-hidden">
          {brands.map((brand, i) => {
            const isLight = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: (i % 7) * 0.05, duration: 0.35 }}
                className="group relative flex items-center justify-center aspect-square p-4 sm:p-5 cursor-pointer transition-transform duration-300 hover:z-10 hover:scale-105"
                style={{
                  background: isLight ? '#ffffff' : '#0a0a0a',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(242,169,0,0.12)' }}
                />

                {/* Logo */}
                <img
                  src={brand.src}
                  alt={`شريك ${i + 1}`}
                  className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{
                    filter: isLight
                      ? 'grayscale(0.3) brightness(0.9)'   // on white: mostly original
                      : 'grayscale(0.3) brightness(1.1)',  // on black: slightly brighter
                    maxWidth: '80px',
                    maxHeight: '80px',
                  }}
                  loading="lazy"
                  onError={e => {
                    (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                  }}
                />

                {/* Bottom amber line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: '#f2a900' }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-[80px]"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1))' }} />
          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <span className="text-amber-400 font-bold text-xl">{brands.length}+</span>
            {' '}علامة تجارية وشركة
          </span>
          <div className="h-px flex-1 max-w-[80px]"
            style={{ background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.1))' }} />
        </motion.div>
      </div>
    </section>
  );
}
