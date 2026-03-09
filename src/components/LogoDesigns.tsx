import { motion } from 'motion/react';

export default function LogoDesigns() {
  const images = [
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_6039613149876963823_x.jpg",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5911259022898614275_x.jpg",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5888533285787339634_y.jpg",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5938182678232370188_y.jpg",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5936022709110685499_y.jpg"
  ];

  return (
    <section id="logos" className="py-24 md:py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-4 font-medium"
          >
            تصميم الشعارات
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            الهوية البصرية
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            تصميم شعارات احترافية تعكس هوية وقيم العلامة التجارية بشكل فريد ومميز.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1, duration: 0.5 }}
              className="aspect-square glass-panel rounded-2xl overflow-hidden flex items-center justify-center p-4 group cursor-pointer hover:bg-white/5 hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(242,169,0,0.15)] transition-all duration-500"
            >
              <img 
                src={src} 
                alt={`Logo Design ${index + 1}`} 
                className="w-full h-full object-contain filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
