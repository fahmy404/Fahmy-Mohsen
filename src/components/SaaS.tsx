import { motion } from 'motion/react';
import { ExternalLink, Cpu, FileText, Database } from 'lucide-react';

export default function SaaS() {
  const projects = [
    {
      title: "CV Bank",
      link: "https://cvbankf.vercel.app/",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      desc: "نظام إدارة السير الذاتية للشركات والمؤسسات.",
      screenshots: [
        "https://69abfe42fa9e210ee0f042d0.imgix.net/sass/Screenshot%202026-03-09%20061706.png",
        "https://69abfe42fa9e210ee0f042d0.imgix.net/sass/Screenshot%202026-03-09%20061824.png"
      ]
    },
    {
      title: "ATS Resume Builder",
      link: "https://cv-bulid.vercel.app/",
      icon: <FileText className="w-8 h-8 text-indigo-500" />,
      desc: "أداة بناء سير ذاتية متوافقة مع أنظمة تتبع المتقدمين (ATS).",
      screenshots: [
        "https://69abfe42fa9e210ee0f042d0.imgix.net/Screenshot%202026.png"
      ]
    },
    {
      title: "AI CV Analyzer",
      link: "https://cv2-github-io-7v57.vercel.app/",
      icon: <Cpu className="w-8 h-8 text-rose-500" />,
      desc: "أداة تحليل السير الذاتية باستخدام الذكاء الاصطناعي لتقييم مدى ملاءمتها للوظائف.",
      screenshots: [
        "https://69abfe42fa9e210ee0f042d0.imgix.net/lkj/Screenshot%2020.png",
        "https://69abfe42fa9e210ee0f042d0.imgix.net/lkj/Screenshot%20202.png"
      ]
    }
  ];

  return (
    <section id="saas" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-4 font-medium"
          >
            أنظمة SaaS وأدوات الذكاء الاصطناعي
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            منتجات رقمية مبتكرة
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            تطوير أنظمة متقدمة وأدوات ذكية تلبي احتياجات سوق العمل الحديث.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl">
                  {project.icon}
                </div>
                <h4 className="text-2xl font-bold">{project.title}</h4>
              </div>
              <p className="text-gray-400 mb-8 flex-grow">
                {project.desc}
              </p>

              <div className="space-y-4 mb-8">
                {project.screenshots.map((screenshot, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-white/10 group relative aspect-video">
                    <img 
                      src={screenshot} 
                      alt={`${project.title} Screenshot ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors w-full"
              >
                <span>تجربة النظام</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
