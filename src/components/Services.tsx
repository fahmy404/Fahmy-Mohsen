import { motion } from 'framer-motion';
import { Code2, Layout, Database, Bot, Palette, Share2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useLang } from '../contexts/LangContext';

export default function Services() {
  const { t } = useLang();

  const services = [
    {
      titleAr: 'تطوير المواقع الحديثة', titleEn: 'Modern Web Development',
      icon: Code2,
      descAr: 'بناء مواقع سريعة ومتجاوبة باستخدام React, Next.js وأحدث التقنيات مع أداء استثنائي.',
      descEn: 'Building fast, responsive websites using React, Next.js and the latest technologies with exceptional performance.',
      color: '#f2a900', tags: ['React', 'Next.js', 'TypeScript'], number: '01',
    },
    {
      titleAr: 'تصميم واجهات UI / UX', titleEn: 'UI / UX Design',
      icon: Layout,
      descAr: 'تصميم تجارب مستخدم مذهلة تجمع بين الجمال والوظيفية وسهولة الاستخدام.',
      descEn: 'Designing stunning user experiences that combine beauty, functionality, and ease of use.',
      color: '#6366f1', tags: ['Figma', 'Design Systems', 'Prototyping'], number: '02',
    },
    {
      titleAr: 'بناء أنظمة SaaS', titleEn: 'SaaS Systems',
      icon: Database,
      descAr: 'تطوير تطبيقات برمجية كخدمة قابلة للتوسع مع نظام مصادقة وإدارة مستخدمين.',
      descEn: 'Developing scalable software-as-a-service applications with authentication and user management.',
      color: '#10b981', tags: ['SaaS', 'CRM', 'ERP'], number: '03',
    },
    {
      titleAr: 'أدوات الذكاء الاصطناعي', titleEn: 'AI-Powered Tools',
      icon: Bot,
      descAr: 'دمج نماذج الذكاء الاصطناعي كـ GPT-4 في منتجاتك لتحسين العمليات والأتمتة.',
      descEn: 'Integrating AI models like GPT-4 into your products to enhance operations and automation.',
      color: '#e879a0', tags: ['GPT-4', 'Gemini', 'LangChain'], number: '04',
    },
    {
      titleAr: 'تصميم الهوية البصرية', titleEn: 'Brand Identity Design',
      icon: Palette,
      descAr: 'ابتكار هويات بصرية متكاملة تعكس قيم علامتك التجارية وتميزها في السوق.',
      descEn: 'Creating complete visual identities that reflect your brand values and stand out in the market.',
      color: '#a855f7', tags: ['Brand Identity', 'Logo', 'Style Guide'], number: '05',
    },
    {
      titleAr: 'محتوى السوشيال ميديا', titleEn: 'Social Media Content',
      icon: Share2,
      descAr: 'تصاميم إبداعية وجذابة لمنصات التواصل الاجتماعي تزيد التفاعل والوصول.',
      descEn: 'Creative and engaging designs for social media platforms that increase engagement and reach.',
      color: '#06b6d4', tags: ['Instagram', 'LinkedIn', 'Branding'], number: '06',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden" style={{ background: 'rgba(5,5,15,0.8)' }}>
      {/* Animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <motion.div
          className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(242,169,0,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="line-dec rotate-180" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">{t('خدماتي', 'Services')}</span>
            <div className="line-dec" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-white mb-5"
          >
            {t('حلول رقمية ', 'Digital Solutions ')}<span className="text-gold">{t('متكاملة', 'That Deliver')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed"
          >
            {t(
              'أقدم مجموعة شاملة من الخدمات الرقمية لمساعدة الشركات والأفراد على تحقيق أهدافهم في العصر الرقمي.',
              'I provide a comprehensive range of digital services to help businesses and individuals achieve their goals in the digital age.'
            )}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const [hovered, setHovered] = useState(false);
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                className="relative group rounded-3xl p-7 cursor-default overflow-hidden"
                style={{
                  background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${hovered ? service.color + '30' : 'rgba(255,255,255,0.06)'}`,
                  transition: 'all 0.4s ease',
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${service.color}08 0%, transparent 70%)` }}
                />
                <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }} />
                <div className="absolute top-6 right-6 text-4xl font-black opacity-[0.06] select-none" style={{ color: service.color }}>
                  {service.number}
                </div>
                <motion.div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${service.color}12`, border: `1px solid ${service.color}25` }}
                  animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <Icon className="w-5 h-5" style={{ color: service.color }} />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3">{t(service.titleAr, service.titleEn)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{t(service.descAr, service.descEn)}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{ background: `${service.color}08`, color: service.color, border: `1px solid ${service.color}20` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-5 text-sm">
            {t('هل تحتاج خدمة مخصصة لمشروعك؟', 'Need a custom service for your project?')}
          </p>
          <motion.a
            href="https://wa.me/201027899375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-black cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #f2a900, #ffd166)', boxShadow: '0 0 25px rgba(242,169,0,0.3)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(242,169,0,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            {t('تحدث معي عن مشروعك', "Let's Talk About Your Project")}
            <ArrowLeft className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
