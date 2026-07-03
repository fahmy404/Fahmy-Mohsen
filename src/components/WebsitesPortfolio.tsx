import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Eye, Lock, User, Tag, ChevronDown, ChevronUp, Globe, Zap, Clock, BookOpen, Droplets, Monitor } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  url: string;
  description: string;
  tags: string[];
  badge?: string;
  badgeColor?: string;
  icon: React.ReactNode;
  credentials?: {
    role: string;
    email?: string;
    username?: string;
    password: string;
  }[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Orvian Agency",
    url: "https://orvian.agency/",
    description: "موقع وكالة إبداعية متخصصة في تقديم الحلول التسويقية الرقمية والتصميم الاحترافي.",
    tags: ["وكالة", "تسويق رقمي", "تصميم"],
    icon: <Globe className="w-5 h-5" />,
    color: "#f2a900",
  },
  {
    id: 2,
    title: "Hashtag Egypt",
    url: "https://www.hashtag-eg.net/",
    description: "موقع كافيه يعرض المنيو الرقمي بشكل أنيق مع إمكانية الحجز أونلاين وتصفح الخدمات والعروض.",
    tags: ["كافيه", "منيو رقمي", "حجز أونلاين"],
    icon: <Monitor className="w-5 h-5" />,
    color: "#6366f1",
  },
  {
    id: 3,
    title: "Brand Me Agency",
    url: "https://brand-me-umber.vercel.app/",
    description: "موقع وكالة إعلانات وسوشيال ميديا متخصصة في إدارة المحتوى والتسويق الرقمي للعلامات التجارية.",
    tags: ["أجنسي", "إعلانات", "سوشيال ميديا"],
    icon: <Globe className="w-5 h-5" />,
    color: "#ec4899",
  },
  {
    id: 4,
    title: "Sharaf Clinic",
    url: "https://sharafclinic0.vercel.app/",
    description: "موقع عيادة طبية متكامل مع نظام حجز المواعيد وعرض الخدمات الطبية.",
    tags: ["صحة", "عيادة", "حجز مواعيد"],
    icon: <Globe className="w-5 h-5" />,
    color: "#10b981",
  },
  {
    id: 5,
    title: "Armenia Tourism",
    url: "https://armenia-three.vercel.app/",
    description: "موقع سياحي احترافي لاستعراض وجهات السياحة في أرمينيا بتصميم جذاب.",
    tags: ["سياحة", "سفر", "أرمينيا"],
    icon: <Globe className="w-5 h-5" />,
    color: "#f59e0b",
  },
  {
    id: 6,
    title: "Abo Naem",
    url: "https://abo-naem.vercel.app/",
    description: "موقع تجاري متكامل يعرض المنتجات والخدمات بتصميم عصري وتجربة مستخدم سلسة.",
    tags: ["تجارة", "منتجات", "خدمات"],
    icon: <Globe className="w-5 h-5" />,
    color: "#8b5cf6",
  },
  {
    id: 7,
    title: "Test Project",
    url: "https://test-psi-six-61.vercel.app/",
    description: "مشروع تجريبي يُظهر مهارات التطوير والبرمجة المتقدمة.",
    tags: ["تجريبي", "تطوير"],
    icon: <Zap className="w-5 h-5" />,
    color: "#06b6d4",
  },
  {
    id: 8,
    title: "IHRS Egypt",
    url: "https://ihrs-eg.com/",
    description: "موقع شركة IHRS المتخصصة في خدمات الموارد البشرية — نسخة تجريبية بدون صور.",
    tags: ["موارد بشرية", "شركة HR", "نسخة تجريبية"],
    badge: "نسخة تجريبية",
    badgeColor: "#f59e0b",
    icon: <Globe className="w-5 h-5" />,
    color: "#f59e0b",
  },
  {
    id: 9,
    title: "CRM — نظام إدارة شركة عقارات",
    url: "https://fahmy.vercel.app/",
    description: "نظام CRM متكامل مصمم لشركة عقارات — يشمل إدارة العملاء والعقارات والوحدات والصفقات. قيد التطوير.",
    tags: ["عقارات", "CRM", "إدارة عملاء"],
    badge: "قيد التطوير",
    badgeColor: "#6366f1",
    icon: <Monitor className="w-5 h-5" />,
    color: "#6366f1",
  },
  {
    id: 10,
    title: "Wazafly — منصة التوظيف",
    url: "https://wazafly.vercel.app/",
    description: "منصة توظيف متكاملة تربط الباحثين عن عمل بشركات الموارد البشرية — قيد التطوير في انتظار فريق وممول.",
    tags: ["توظيف", "SaaS", "HR"],
    badge: "قيد التطوير",
    badgeColor: "#ef4444",
    icon: <Globe className="w-5 h-5" />,
    color: "#ef4444",
    credentials: [
      { role: "موظف", email: "fahmymohsen777@gmail.com", password: "12345678" },
      { role: "HR", email: "fahmymohsen0@gmail.com", password: "12345678" },
    ],
  },
  {
    id: 11,
    title: "Fahmy ERP",
    url: "https://fahmy-erp.vercel.app/login",
    description: "نظام ERP مرن وقابل للتطبيق على أي منتج — تم بناؤه في البداية لإدارة تجارة الفحم ويمكن تكييفه لأي نشاط تجاري. قيد التطوير.",
    tags: ["ERP", "فحم", "متعدد الاستخدامات"],
    badge: "قيد التطوير",
    badgeColor: "#10b981",
    icon: <Monitor className="w-5 h-5" />,
    color: "#10b981",
    credentials: [
      { role: "مدير النظام", username: "admin", password: "admin135790+*" },
    ],
  },
  {
    id: 12,
    title: "AI Resume Analyzer",
    url: "https://cv5-github-io.vercel.app/",
    description: "أداة ذكاء اصطناعي لتحليل وتقييم السير الذاتية ومقارنتها بمتطلبات الوظائف.",
    tags: ["ذكاء اصطناعي", "CV", "تحليل"],
    icon: <Zap className="w-5 h-5" />,
    color: "#ec4899",
  },
  {
    id: 13,
    title: "ATS-Friendly CV Builder",
    url: "https://cv-bulid.vercel.app/",
    description: "منشئ السير الذاتية المتوافق مع أنظمة ATS لضمان تخطي فلاتر الشركات الكبرى.",
    tags: ["CV Builder", "ATS", "توظيف"],
    icon: <BookOpen className="w-5 h-5" />,
    color: "#6366f1",
  },
  {
    id: 14,
    title: "Blood Map — أرشيف المجازر",
    url: "https://blood-map-seven.vercel.app/",
    description: "أرشيف توثيقي يجمع أبرز المجازر الموثقة تاريخياً — أُنشئ إبان الإبادة الجماعية في غزة تضامناً مع الشعب الفلسطيني 🇵🇸",
    tags: ["توثيق", "أرشيف", "تضامن"],
    icon: <Droplets className="w-5 h-5" />,
    color: "#ef4444",
  },
  {
    id: 15,
    title: "News App",
    url: "https://news-two-khaki.vercel.app/",
    description: "تطبيق أخبار تفاعلي اتعمل خلال محاضرات التعليم والشرح.",
    tags: ["أخبار", "تعليمي"],
    badge: "مشروع تعليمي",
    badgeColor: "#06b6d4",
    icon: <BookOpen className="w-5 h-5" />,
    color: "#06b6d4",
  },
  {
    id: 16,
    title: "Space Explorer",
    url: "https://space-iota-amber.vercel.app/",
    description: "موقع استكشاف الفضاء بتصميم مبهر اتعمل خلال جلسات التدريب والشرح.",
    tags: ["فضاء", "تعليمي", "تصميم"],
    badge: "مشروع تعليمي",
    badgeColor: "#06b6d4",
    icon: <Globe className="w-5 h-5" />,
    color: "#8b5cf6",
  },
  {
    id: 17,
    title: "Islam Q",
    url: "https://islamq-six.vercel.app/",
    description: "منصة أسئلة وأجوبة إسلامية اتعملت خلال محاضرات التعليم البرمجي.",
    tags: ["إسلامي", "تعليمي", "Q&A"],
    badge: "مشروع تعليمي",
    badgeColor: "#06b6d4",
    icon: <BookOpen className="w-5 h-5" />,
    color: "#10b981",
  },
  {
    id: 18,
    title: "Gamer Fahmy",
    url: "https://gamrfahmy.vercel.app/",
    description: "موقع ألعاب وترفيه اتعمل كجزء من تدريبات البرمجة العملية.",
    tags: ["ألعاب", "تعليمي"],
    badge: "مشروع تعليمي",
    badgeColor: "#06b6d4",
    icon: <Zap className="w-5 h-5" />,
    color: "#f59e0b",
  },
  {
    id: 19,
    title: "Wedding Invitation 1",
    url: "https://weedweedtest.vercel.app/",
    description: "دعوة زفاف أونلاين تجريبية بتصميم رومانسي وأنيميشن ساحر.",
    tags: ["زفاف", "دعوة", "تجريبي"],
    badge: "دعوة زفاف",
    badgeColor: "#ec4899",
    icon: <Globe className="w-5 h-5" />,
    color: "#ec4899",
  },
  {
    id: 20,
    title: "Wedding Invitation 2",
    url: "https://temp2-nine-rho.vercel.app/",
    description: "دعوة زفاف أونلاين تجريبية ثانية بقالب مختلف وتصميم فريد.",
    tags: ["زفاف", "دعوة", "تجريبي"],
    badge: "دعوة زفاف",
    badgeColor: "#ec4899",
    icon: <Globe className="w-5 h-5" />,
    color: "#ec4899",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showCredentials, setShowCredentials] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-[#0d0d0d] hover:border-white/15 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
    >
      {/* Top glow accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
      />

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              {project.icon}
            </div>
            <div>
              <h4 className="text-base font-bold text-white leading-tight">{project.title}</h4>
              <p className="text-xs text-gray-500 mt-0.5 truncate max-w-[160px]" dir="ltr">{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</p>
            </div>
          </div>
          {project.badge && (
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: `${project.badgeColor}20`, color: project.badgeColor, border: `1px solid ${project.badgeColor}30` }}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Credentials Toggle */}
        {project.credentials && (
          <div className="mb-4">
            <button
              onClick={() => setShowCredentials(!showCredentials)}
              className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/10 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>بيانات الدخول</span>
              </div>
              {showCredentials ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <AnimatePresence>
              {showCredentials && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 space-y-3 p-4 rounded-xl bg-black/40 border border-white/5">
                    {project.credentials.map((cred, i) => (
                      <div key={i} className="space-y-2">
                        <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{cred.role}</p>
                        {cred.email && (
                          <div className="flex items-center gap-2 text-xs" dir="ltr">
                            <span className="text-gray-500 w-16 flex-shrink-0">Email:</span>
                            <code className="text-gray-300 bg-white/5 px-2 py-0.5 rounded font-mono text-xs">{cred.email}</code>
                          </div>
                        )}
                        {cred.username && (
                          <div className="flex items-center gap-2 text-xs" dir="ltr">
                            <User className="w-3 h-3 text-gray-500 flex-shrink-0" />
                            <code className="text-gray-300 bg-white/5 px-2 py-0.5 rounded font-mono text-xs">{cred.username}</code>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-xs" dir="ltr">
                          <span className="text-gray-500 w-16 flex-shrink-0">Password:</span>
                          <code className="text-gray-300 bg-white/5 px-2 py-0.5 rounded font-mono text-xs">{cred.password}</code>
                        </div>
                        {i < (project.credentials?.length ?? 0) - 1 && <div className="border-t border-white/5 pt-2" />}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: `${project.color}20`, border: `1px solid ${project.color}30` }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${project.color}30`; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${project.color}20`; }}
          >
            <Eye className="w-4 h-4" />
            <span>معاينة</span>
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function WebsitesPortfolio() {
  const [activeFilter, setActiveFilter] = useState('الكل');
  
  const filters = ['الكل', 'مواقع احترافية', 'أدوات رقمية', 'مشاريع تعليمية', 'دعوات زفاف'];

  const filteredProjects = activeFilter === 'الكل' 
    ? projects
    : activeFilter === 'مواقع احترافية'
    ? projects.filter(p => [1,2,3,4,5,6,7,8,9].includes(p.id))
    : activeFilter === 'أدوات رقمية'
    ? projects.filter(p => [10,11,12,13,14].includes(p.id))
    : activeFilter === 'مشاريع تعليمية'
    ? projects.filter(p => [15,16,17,18].includes(p.id))
    : projects.filter(p => [19,20].includes(p.id));

  return (
    <section id="websites" className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
          >
            <Globe className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-amber-500 font-medium uppercase tracking-[0.15em]">تطوير المواقع</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            مواقع إلكترونية
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg"
          >
            مجموعة من المواقع والمنتجات الرقمية التي قمت بتطويرها بتقنيات حديثة وتصاميم احترافية
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(242,169,0,0.3)]'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm text-gray-500">
            عرض <span className="text-amber-500 font-bold">{filteredProjects.length}</span> مشروع
          </span>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "20+", label: "موقع منشور", color: "#f2a900" },
            { value: "5+", label: "تقنيات مختلفة", color: "#6366f1" },
            { value: "100%", label: "متجاوب مع الجوال", color: "#10b981" },
            { value: "∞", label: "شغف بالإبداع", color: "#ec4899" },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-5 rounded-2xl text-center border border-white/5">
              <p className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
