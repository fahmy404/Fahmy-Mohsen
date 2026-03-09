import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "تحسين العمليات",
    "إدارة البيانات",
    "تطوير حضورها الرقمي",
    "استخدام الذكاء الاصطناعي في الأعمال"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-panel p-2">
              <img 
                src="https://69abfe42fa9e210ee0f042d0.imgix.net/photo_5870703493562174712_y.jpg" 
                alt="Fahmy Mohsen" 
                className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-4 font-medium">نبذة عني</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              فهمي محسن
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              مطور مواقع ومنتجات رقمية متخصص في بناء المواقع الحديثة وأنظمة SaaS وأدوات الذكاء الاصطناعي.
            </p>
            
            <div className="mb-10">
              <p className="text-gray-400 mb-6 font-medium">أركز على بناء حلول رقمية تساعد الشركات على:</p>
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
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">+5</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">سنوات خبرة</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">+50</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">مشروع مكتمل</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
