import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  IconCode,
  IconDatabase,
  IconServer,
  IconCloud,
  IconBrush,
  IconBrain,
  IconFunction,
  IconMail,
  IconBell,
  IconCloudDataConnection,
} from '@tabler/icons-react';
import { FaJs, FaReact, FaNode, FaAws } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiPython,
  SiPrisma,
  SiJest,
  SiGit,
  SiJira,
} from 'react-icons/si';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Languages');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <IconCode className="h-5 w-5" />,
      color: '#3178C6',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, level: 95, color: '#F7DF1E' },
        {
          name: 'TypeScript',
          icon: <SiTypescript />,
          level: 90,
          color: '#3178C6',
        },
        { name: 'Python', icon: <SiPython />, level: 85, color: '#3776AB' },
      ],
    },
    {
      title: 'Frontend',
      icon: <IconBrush className="h-5 w-5" />,
      color: '#61DAFB',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 95, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 88, color: '#1AFB9C' },
        { name: 'Redux', icon: <SiRedux />, level: 85, color: '#764ABC' },
        {
          name: 'Tailwind',
          icon: <SiTailwindcss />,
          level: 90,
          color: '#06B6D4',
        },
      ],
    },
    {
      title: 'Backend',
      icon: <IconServer className="h-5 w-5" />,
      color: '#339933',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 95, color: '#339933' },
        { name: 'Python', icon: <SiPython />, level: 90, color: '#3776AB' },
        { name: 'Express', icon: <SiExpress />, level: 90, color: '#1AFB9C' },
        { name: 'NestJS', icon: <SiNestjs />, level: 80, color: '#E0234E' },
      ],
    },
    {
      title: 'Database',
      icon: <IconDatabase className="h-5 w-5" />,
      color: '#4DB33D',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      skills: [
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql />,
          level: 90,
          color: '#336791',
        },
        { name: 'MySQL', icon: <SiMysql />, level: 85, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 88, color: '#4DB33D' },
      ],
    },
    {
      title: 'Cloud & AI',
      icon: <IconCloud className="h-5 w-5" />,
      color: '#FF9900',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      skills: [
        { name: 'AWS Bedrock', icon: <IconBrain className="w-5 h-5" />, level: 90, color: '#D86613' }, // Bedrock orange
        { name: 'AWS Lambda', icon: <IconFunction className="w-5 h-5" />, level: 88, color: '#FF9900' }, // Lambda orange
        { name: 'AWS EC2', icon: <IconServer className="w-5 h-5" />, level: 85, color: '#FF9900' }, // EC2 orange
        { name: 'AWS RDS', icon: <IconDatabase className="w-5 h-5" />, level: 87, color: '#527FFF' }, // RDS blue
        { name: 'AWS SQS', icon: <IconMail className="w-5 h-5" />, level: 82, color: '#F7A81B' }, // SQS yellow
        { name: 'AWS SNS', icon: <IconBell className="w-5 h-5" />, level: 80, color: '#C14396' }, // SNS pink
        { name: 'AWS S3', icon: <IconCloudDataConnection className="w-5 h-5" />, level: 90, color: '#569A31' }, // S3 green
        { name: 'LangGraph', icon: <SiPython />, level: 80, color: '#3776AB' },
      ],
    },
    {
      title: 'Tools & Other',
      icon: <IconBrush className="h-5 w-5" />,
      color: '#6B73FF',
      bgGradient: 'from-indigo-500/20 to-purple-500/20',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 95, color: '#F05032' },
        { name: 'JIRA', icon: <SiJira />, level: 85, color: '#0052CC' },
        { name: 'Prisma', icon: <SiPrisma />, level: 88, color: '#2D3748' },
        { name: 'Jest', icon: <SiJest />, level: 80, color: '#C21325' },
      ],
    },
  ];

  const certifications = [
    {
      title: 'AWS Solutions Architect',
      subtitle: 'Associate',
      provider: 'Amazon Web Services',
      icon: <FaAws className="text-4xl" />,
      color: '#FF9900',
      link: '#',
    },
    {
      title: 'AWS Partner',
      subtitle: 'Generative AI Essentials (Business)',
      provider: 'Amazon Web Services',
      icon: <FaAws className="text-4xl" />,
      color: '#FF9900',
      link: '#',
    },
  ];

  const activeCategory = skillCategories.find(
    (cat) => cat.title === selectedCategory
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen relative overflow-hidden"
    >
      {/* Background Mesh Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #f7d486 1px, transparent 1px),
            linear-gradient(to bottom, #f7d486 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Simplified Floating Geometric Elements */}
      <motion.div
        className="absolute top-40 right-4 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 pointer-events-none"
        style={{ rotate }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#f7d486]/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-4 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none"
        animate={{
          rotate: -360,
          y: [0, 15, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full border-2 border-[#c5f9d7]/30 rounded-lg rotate-45" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        {/* Consistent Title Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white/10 absolute -top-8 sm:-top-10 left-0">
              SKILLS
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-[#c5f9d7] via-[#f7d486] to-[#f27a7d] text-transparent bg-clip-text">
                Arsenal
              </span>
            </h3>
          </div>
        </motion.div>

        {/* Mobile Layout - All categories visible */}
        {isMobile ? (
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/[0.05]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <span style={{ color: category.color }}>
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {category.title}
                    </h4>
                    <p className="text-white/50 text-sm">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="bg-black/30 rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="text-2xl"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </div>
                          <span className="font-medium text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-white/70">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop Layout - Category selector with fixed content height */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Category Selector */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24">
                <h4 className="text-xl font-bold text-white mb-6">
                  Categories
                </h4>

                <div className="space-y-3">
                  {skillCategories.map((category, index) => (
                    <motion.button
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCategory(category.title)}
                      className="w-full relative group"
                      whileHover={{ x: 10 }}
                    >
                      <div
                        className={`
                        relative bg-black/50 backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300
                        ${
                          selectedCategory === category.title
                            ? 'border-white/30 bg-white/5'
                            : 'border-white/10 hover:border-white/20'
                        }
                      `}
                      >
                        {/* Active Gradient Background */}
                        {selectedCategory === category.title && (
                          <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-gradient-to-r from-[#c5f9d7]/10 via-[#f7d486]/10 to-[#f27a7d]/10 rounded-2xl"
                            transition={{ type: 'spring', duration: 0.6 }}
                          />
                        )}

                        <div className="relative flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${category.color}20` }}
                          >
                            <span style={{ color: category.color }}>
                              {category.icon}
                            </span>
                          </div>
                          <div className="text-left">
                            <h5 className="font-semibold text-white">
                              {category.title}
                            </h5>
                            <p className="text-sm text-white/50">
                              {category.skills.length} skills
                            </p>
                          </div>

                          {/* Skill count indicator */}
                          <div className="ml-auto">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                              <span className="text-sm font-bold text-white/70">
                                {category.skills.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills Display with fixed height */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              {/* Active Category Skills */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/[0.05] min-h-[600px]"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${activeCategory?.color}20` }}
                  >
                    <span
                      className="text-2xl"
                      style={{ color: activeCategory?.color }}
                    >
                      {activeCategory?.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {activeCategory?.title}
                    </h4>
                    <p className="text-white/50">Mastery Level</p>
                  </div>
                </div>

                {/* Skills Grid with consistent layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                  {activeCategory?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative group"
                    >
                      <div className="relative bg-black/30 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                        {/* Skill Icon & Info */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="text-3xl"
                              style={{ color: skill.color }}
                              animate={{
                                rotate: hoveredSkill === skill.name ? 360 : 0,
                                scale: hoveredSkill === skill.name ? 1.2 : 1,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              {skill.icon}
                            </motion.div>
                            <h5 className="font-semibold text-white">
                              {skill.name}
                            </h5>
                          </div>
                          <motion.span
                            className="text-2xl font-bold"
                            style={{ color: skill.color }}
                            animate={{
                              scale:
                                hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>

                        {/* Progress Ring */}
                        <div className="flex-grow flex items-center justify-center">
                          <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle
                                cx="48"
                                cy="48"
                                r="36"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="8"
                                fill="none"
                              />
                              <motion.circle
                                cx="48"
                                cy="48"
                                r="36"
                                stroke={skill.color}
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 36}`}
                                initial={{
                                  strokeDashoffset: 2 * Math.PI * 36,
                                }}
                                animate={{
                                  strokeDashoffset:
                                    2 * Math.PI * 36 * (1 - skill.level / 100),
                                }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <h4 className="text-2xl font-bold text-white mb-8 text-center">
            Certifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <span style={{ color: cert.color }}>{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-white group-hover:text-primary transition-colors">
                      {cert.title}
                    </h5>
                    <p className="text-sm text-white/70 mb-1">
                      {cert.subtitle}
                    </p>
                    <p className="text-xs text-white/50">{cert.provider}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <h4 className="text-2xl font-bold text-white mb-8 text-center">
            Publications
          </h4>
          <div className="max-w-4xl mx-auto">
            <motion.a
              href="https://drive.google.com/file/d/1aHsJKNmo8vM3glw47D9AwoT4IDjPMcd/view"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.05] hover:border-white/[0.15] transition-all duration-300 group block"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#c5f9d7]/20 to-[#f7d486]/20 flex items-center justify-center border border-[#c5f9d7]/20">
                  <IconCode className="w-8 h-8 text-[#c5f9d7]" />
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-bold text-white group-hover:text-[#c5f9d7] transition-colors mb-2">
                    Generation of Machine Learning Dataset from Relational Database and Its Evaluation Using Supervised Classifiers
                  </h5>
                  <p className="text-[#f7d486] font-medium mb-2">
                    GRADIVA REVIEW JOURNAL
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    Research paper on creating ML datasets from relational databases and evaluating their performance using supervised classification algorithms. This work demonstrates expertise in data preprocessing, feature engineering, and machine learning model evaluation.
                  </p>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <span>📄 Research Paper</span>
                    <span>•</span>
                    <span>🔬 Machine Learning</span>
                    <span>•</span>
                    <span>📊 Data Science</span>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
