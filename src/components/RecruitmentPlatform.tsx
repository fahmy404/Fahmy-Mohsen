import { motion } from 'motion/react';
import { CheckCircle2, Clock } from 'lucide-react';

export default function RecruitmentPlatform() {
  const features = [
    "رفع السيرة الذاتية",
    "بحث ذكي للمرشحين",
    "نظام اشتراكات للشركات",
    "قاعدة بيانات للمرشحين"
  ];

  const images = [
    "https://69abfe42fa9e210ee0f042d0.imgix.net/hty/Screensh.png",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/hty/Screen.png",
    "https://69abfe42fa9e210ee0f042d0.imgix.net/hty/Scre.png"
  ];

  return (
    <section id="coming-soon" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-500 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
              <Clock className="w-4 h-4" />
              <span>قيد التطوير</span>
            </div>
            
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
              مشروع قادم
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              منصة التوظيف
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              منصة توظيف متكاملة تربط بين الباحثين عن عمل وشركات الموارد البشرية (HR).
            </p>
            
            <div className="mb-10">
              <p className="text-gray-400 mb-6 font-medium">أهم الميزات:</p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden glass-panel p-2 border border-white/10">
                  <img 
                    src={images[0]} 
                    alt="Recruitment Platform Preview 1" 
                    className="w-full h-auto object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden glass-panel p-2 border border-white/10">
                  <img 
                    src={images[1]} 
                    alt="Recruitment Platform Preview 2" 
                    className="w-full h-auto object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="sm:mt-12">
                <div className="rounded-2xl overflow-hidden glass-panel p-2 border border-white/10">
                  <img 
                    src={images[2]} 
                    alt="Recruitment Platform Preview 3" 
                    className="w-full h-auto object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
