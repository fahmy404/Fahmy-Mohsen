import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function WebsitesPortfolio() {
  const projects = [
    {
      title: "IHRS Egypt",
      link: "http://ihrs-eg.com/",
      logo: "https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5929430106110019838_y.jpg",
      screenshots: [
        "https://69abfe42fa9e210ee0f042d0.imgix.net/ihrs/Screenshot%202026-03-09%20080001.png",
        "https://69abfe42fa9e210ee0f042d0.imgix.net/ihrs/Screenshot%202026-03-09%20080126.png"
      ]
    },
    {
      title: "Abo Naem Website",
      link: "https://abo-naem.vercel.app/",
      logo: null,
      screenshots: [
        "https://69abfe42fa9e210ee0f042d0.imgix.net/kjh/Screenshot%202026-03-09%20080640.png",
        "https://69abfe42fa9e210ee0f042d0.imgix.net/kjh/Screenshot%202026-03-09%20080719.png"
      ]
    },
    {
      title: "Armenia Tourism Website",
      link: "https://armenia-three.vercel.app/",
      logo: "https://69abfe42fa9e210ee0f042d0.imgix.net/logo/1003524789.png",
      screenshots: [
        "https://69abfe42fa9e210ee0f042d0.imgix.net/Screenshot%202026-03-09%20052558.png",
        "https://69abfe42fa9e210ee0f042d0.imgix.net/jv%20jvkhv,/hjhgjckj.png"
      ]
    }
  ];

  return (
    <section id="websites" className="py-24 md:py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-4 font-medium"
          >
            تطوير المواقع
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            مواقع إلكترونية
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            مجموعة من المواقع الإلكترونية التي قمت بتطويرها لعملائي.
          </motion.p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 md:p-12 rounded-3xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                <div className="flex items-center gap-6">
                  {project.logo && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 p-2 flex items-center justify-center">
                      <img src={project.logo} alt={`${project.title} Logo`} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  <h4 className="text-3xl font-bold">{project.title}</h4>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  <span>زيارة الموقع</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.screenshots.map((screenshot, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-white/10 group relative">
                    <img 
                      src={screenshot} 
                      alt={`${project.title} Screenshot ${idx + 1}`} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
