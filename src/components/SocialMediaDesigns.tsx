import { motion } from 'motion/react';

export default function SocialMediaDesigns() {
  const images = [
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5870703493562174708_y.jpg?w=1280&h=1280",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_6046487872103189558_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_6039501824328404019_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5783113940572245047_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5886281485973654412_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5929282977714080633_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5931534777527766066_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/%D9%86%D9%86/photo_5870703493562174702_y.jpg?w=896&h=896",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/%D9%86%D9%86/photo_5870703493562174703_y.jpg?w=892&h=896",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/%D9%86%D9%86/photo_5773810723577775387_y.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/ddd/photo_5773810723577775382_y.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/ddd/photo_5792151616911164841_y%20(1).jpg?w=1050&h=1050",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/ddd/photo_5809677050573867108_y.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/ddd/photo_5911259022898614277_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/ddd/photo_5911259022898614276_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/ddd/photo_5929430106110019824_y.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/474994346_531200356624391_7261985879766148572_n.jpg?w=1448&h=2048",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/475170827_531203656624061_8110757779777111473_n.jpg?w=940&h=788",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/475188492_531224749955285_3844132031804148930_n.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/475263793_531226949955065_6575232257069335238_n.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/475024310_531250483286045_1508132880997612783_n.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/477022072_540860145658412_4761295611166255205_n.jpg?w=960&h=960",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/477022069_540859722325121_1348958625161872495_n.jpg?w=960&h=960",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/480530473_546478831763210_6723953048378659870_n.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/480570057_546478828429877_8891222166343155093_n.jpg?w=1080&h=1080",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/jhuj/481030319_551432094601217_5493835967212771491_n.jpg?w=960&h=960"
  ];

  return (
    <section id="social-media" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-4 font-medium"
          >
            تصميم محتوى السوشيال ميديا
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            تصاميم إبداعية
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            تصاميم جذابة لمنصات التواصل الاجتماعي تزيد التفاعل وتعزز الحضور الرقمي.
          </motion.p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="break-inside-avoid glass-panel rounded-2xl overflow-hidden group relative"
            >
              <img 
                src={src} 
                alt={`Social Media Design ${index + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
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
