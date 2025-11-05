'use client'

import { motion } from 'framer-motion'

const techStackCategories = [
  {
    title: 'Programming Languages',
    emoji: '💻',
    gradient: 'from-blue-100 via-indigo-100 to-blue-50',
    skills: ['Python', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'C++', 'R'],
  },
  {
    title: 'Backend & APIs',
    emoji: '⚙️',
    gradient: 'from-orange-100 via-red-100 to-orange-50',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'RESTful APIs', 'GraphQL', 'Spring Boot'],
  },
  {
    title: 'Databases & Cloud',
    emoji: '🗄️',
    gradient: 'from-green-100 via-emerald-100 to-green-50',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'AWS (Lambda, S3, API Gateway)', 'GCP'],
  },
  {
    title: 'Frontend & Frameworks',
    emoji: '🧩',
    gradient: 'from-purple-100 via-violet-100 to-purple-50',
    skills: ['React', 'Redux', 'Next.js', 'Bootstrap', 'HTML5', 'CSS3', 'SCSS', 'Flutter'],
  },
  {
    title: 'DevOps & Tools',
    emoji: '🚀',
    gradient: 'from-gray-100 via-slate-100 to-gray-50',
    skills: ['Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'CI/CD', 'Postman', 'Jest', 'Poetry'],
  },
  {
    title: 'UI/UX & Design Tools',
    emoji: '🎨',
    gradient: 'from-pink-100 via-rose-100 to-pink-50',
    skills: ['Figma', 'Adobe XD', 'D3.js', 'Three.js'],
  },
  {
    title: 'Data & Analytics',
    emoji: '📊',
    gradient: 'from-cyan-100 via-blue-100 to-cyan-50',
    skills: ['Power BI', 'LangChain', 'OpenSearch', 'Apache Kafka', 'Zookeeper'],
  },
]

export function TechStack() {
  return (
    <section 
      aria-label="Tech Stack" 
      className="py-16 bg-gradient-to-b from-[#f9faff] via-[#f3f4fc] to-[#edf0ff] relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          🧠 Tech Stack
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Technologies and tools I work with to build scalable, modern applications
        </p>
      </motion.div>

      {/* Left Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f9faff] via-[#f9faff]/80 to-transparent z-10" />
      
      {/* Right Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f9faff] via-[#f9faff]/80 to-transparent z-10" />

      {/* Scrollable Container */}
      <div className="group overflow-hidden">
        <div 
          className="flex w-max gap-8 animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:px-6"
          aria-live="off"
        >
          {/* First Set of Cards */}
          {techStackCategories.map((category, index) => (
            <TechCard key={`first-${category.title}`} category={category} index={index} />
          ))}
          
          {/* Duplicate Set for Seamless Loop */}
          {techStackCategories.map((category, index) => (
            <TechCard key={`second-${category.title}`} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechCard({ 
  category, 
  index 
}: { 
  category: typeof techStackCategories[0]
  index: number 
}) {
  return (
    <div
      className="flex-shrink-0 w-80 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full hover:scale-105"
    >
      {/* Header with Icon and Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-sm`}>
          <span className="text-2xl" role="img" aria-label={category.title}>
            {category.emoji}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 leading-tight">
          {category.title}
        </h3>
      </div>

      {/* Skills Pills */}
      <div className="space-y-3" role="list" aria-label={`${category.title} skills`}>
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skill}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1 hover:scale-102"
            role="listitem"
            tabIndex={0}
            aria-label={`${skill} skill`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}