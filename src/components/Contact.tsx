import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

const WHATSAPP_NUMBER = '201027899375';

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/fahmy.mohsen.2025', icon: <Facebook className="w-5 h-5" />, color: '#1877f2', hoverBg: 'rgba(24,119,242,0.15)', hoverBorder: 'rgba(24,119,242,0.4)' },
  { name: 'Instagram', url: 'https://www.instagram.com/fahmoka/', icon: <Instagram className="w-5 h-5" />, color: '#e1306c', hoverBg: 'rgba(225,48,108,0.15)', hoverBorder: 'rgba(225,48,108,0.4)' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fahmy-mohsen-753417366', icon: <Linkedin className="w-5 h-5" />, color: '#0a66c2', hoverBg: 'rgba(10,102,194,0.15)', hoverBorder: 'rgba(10,102,194,0.4)' },
];

export default function Contact() {
  const { t } = useLang();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `مرحباً فهمي 👋`, ``,
      `*الاسم:* ${name || '(لم يُذكر)'}`,
      `*البريد الإلكتروني:* ${email || '(لم يُذكر)'}`,
      ``, `*الرسالة:*`, message || '(لا توجد رسالة)',
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(242,169,0,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(70px)' }}
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut', delay: 6 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="line-dec" />
              <h2 className="text-sm uppercase tracking-[0.2em] text-amber-500 font-medium">
                {t('تواصل معي', 'Get In Touch')}
              </h2>
            </div>

            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              {t('لنصنع معاً حلولاً رقمية قوية وابتكارية.', "Let's Build Something Great Together.")}
            </h3>

            {/* Description — removed "لا تتردد" */}
            <p className="text-base sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              {t(
                'هل لديك فكرة مشروع أو تحتاج إلى استشارة تقنية؟ أنا هنا لمساعدتك.',
                'Have a project idea or need technical consultation? I\'m here to help you.'
              )}
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              {[
                { icon: <User className="w-5 h-5 text-amber-500" />, labelAr: 'الاسم', labelEn: 'Name', value: 'Fahmy Mohsen', delay: 0.2 },
                { icon: <Phone className="w-5 h-5 text-indigo-400" />, labelAr: 'الهاتف', labelEn: 'Phone', value: '01027899375', href: 'tel:01027899375', delay: 0.3 },
                { icon: <Mail className="w-5 h-5 text-emerald-400" />, labelAr: 'البريد الإلكتروني', labelEn: 'Email', value: 'fahmymohsen777@gmail.com', href: 'mailto:fahmymohsen777@gmail.com', delay: 0.4 },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: item.delay }} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{t(item.labelAr, item.labelEn)}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-medium text-white hover:text-amber-400 transition-colors break-all" dir="ltr">{item.value}</a>
                    ) : (
                      <p className="text-lg font-medium text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.15em] mb-4">{t('تابعني على', 'Follow Me')}</p>
              <div className="flex items-center gap-3">
                {socialLinks.map(s => (
                  <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = s.hoverBg; el.style.borderColor = s.hoverBorder; el.style.color = s.color; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(255,255,255,0.05)'; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl relative z-10"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
              <h4 className="text-xl sm:text-2xl font-bold mb-6">{t('أرسل رسالة', 'Send a Message')}</h4>

              <form className="space-y-5" onSubmit={handleWhatsApp}>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">{t('الاسم', 'Name')}</label>
                  <input id="contact-name" type="text" value={name} onChange={e => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-600"
                    placeholder={t('أدخل اسمك', 'Enter your name')} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">{t('البريد الإلكتروني', 'Email')}</label>
                  <input id="contact-email" type="email" value={email} onChange={e => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-600"
                    placeholder={t('أدخل بريدك الإلكتروني', 'Enter your email')} dir="ltr" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">{t('الرسالة', 'Message')}</label>
                  <textarea id="contact-message" rows={4} value={message} onChange={e => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-gray-600"
                    placeholder={t('كيف يمكنني مساعدتك؟', 'How can I help you?')} />
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 bg-[#25d366] text-black rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>{t('إرسال عبر واتساب', 'Send via WhatsApp')}</span>
                  <Send className="w-4 h-4" />
                </motion.button>

                <p className="text-xs text-gray-600 text-center">
                  {t('سيتم فتح واتساب مع رسالتك جاهزة للإرسال', 'WhatsApp will open with your message ready to send')}
                </p>
              </form>
            </div>

            <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full blur-3xl -z-10" style={{ background: 'rgba(242,169,0,0.05)' }} />
            <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full blur-3xl -z-10" style={{ background: 'rgba(99,102,241,0.05)' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
