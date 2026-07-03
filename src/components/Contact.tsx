import { motion } from 'motion/react';
import { Phone, Mail, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-4 font-medium">تواصل معي</h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              لنصنع معاً حلولاً رقمية قوية وابتكارية.
            </h3>
            <p className="text-base sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              هل لديك فكرة مشروع أو تحتاج إلى استشارة تقنية؟ لا تتردد في التواصل معي.
            </p>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <User className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">الاسم</p>
                  <p className="text-xl font-medium text-white">Fahmy Mohsen</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Phone className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">الهاتف</p>
                  <a href="tel:01027899375" className="text-xl font-medium text-white hover:text-indigo-400 transition-colors" dir="ltr">
                    01027899375
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Mail className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">البريد الإلكتروني</p>
                  <a href="mailto:fahmymohsen777@gmail.com" className="text-sm sm:text-xl font-medium text-white hover:text-emerald-400 transition-colors break-all">
                    fahmymohsen777@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Side (Optional/Decorative) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 relative z-10">
              <h4 className="text-2xl font-bold mb-8">أرسل رسالة</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">الاسم</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">الرسالة</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="كيف يمكنني مساعدتك؟"
                  ></textarea>
                </div>
                <a 
                  href="https://wa.me/201027899375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  إرسال الرسالة عبر واتساب
                </a>
              </form>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
