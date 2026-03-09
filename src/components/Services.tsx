import { motion } from 'motion/react';
import { Code2, Layout, Database, Bot, Palette, Share2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "تطوير المواقع الحديثة",
      icon: <Code2 className="w-8 h-8 mb-6 text-amber-500" />,
      desc: "بناء مواقع سريعة ومتجاوبة باستخدام أحدث التقنيات."
    },
    {
      title: "تصميم واجهات UI / UX",
      icon: <Layout className="w-8 h-8 mb-6 text-indigo-500" />,
      desc: "تصميم تجارب مستخدم مذهلة وواجهات جذابة وسهلة الاستخدام."
    },
    {
      title: "بناء أنظمة SaaS",
      icon: <Database className="w-8 h-8 mb-6 text-emerald-500" />,
      desc: "تطوير تطبيقات برمجية كخدمة قابلة للتوسع والنمو."
    },
    {
      title: "تطوير أدوات الذكاء الاصطناعي",
      icon: <Bot className="w-8 h-8 mb-6 text-rose-500" />,
      desc: "دمج نماذج الذكاء الاصطناعي لتحسين العمليات والأتمتة."
    },
    {
      title: "تصميم الهوية البصرية",
      icon: <Palette className="w-8 h-8 mb-6 text-fuchsia-500" />,
      desc: "ابتكار هويات بصرية تعكس قيم علامتك التجارية."
    },
    {
      title: "تصميم محتوى السوشيال ميديا",
      icon: <Share2 className="w-8 h-8 mb-6 text-cyan-500" />,
      desc: "تصاميم إبداعية لمنصات التواصل الاجتماعي تزيد التفاعل."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-4 font-medium"
          >
            خدماتي
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            حلول رقمية متكاملة
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            أقدم مجموعة واسعة من الخدمات الرقمية لمساعدة الشركات والأفراد على تحقيق أهدافهم في العصر الرقمي.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-amber-500 transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
