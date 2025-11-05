'use client'

import { Code2, Database, Globe2, Server } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'AWS (Lambda, S3, API Gateway)'],
  },
  {
    title: 'Web Development',
    icon: Globe2,
    skills: ['React', 'Redux', 'Next.js'],
  },
  {
    title: 'Back-end & APIs',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Spring Boot'],
  },
]

export function SkillsMarquee() {
  return (
    <section aria-label="Skills and Technologies" className="relative py-12 overflow-hidden">
      {/* Left Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10" />
      
      {/* Right Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10" />

      {/* Scrollable Container */}
      <div className="group overflow-hidden">
        <div 
          className="flex w-max gap-6 animate-[marquee_15s_linear_infinite] lg:animate-[marquee_18s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:px-6"
          aria-live="off"
        >
          {/* First Set of Cards */}
          {skillCategories.map((category, index) => (
            <SkillCard key={`first-${category.title}`} category={category} index={index} />
          ))}
          
          {/* Duplicate Set for Seamless Loop */}
          {skillCategories.map((category, index) => (
            <SkillCard key={`second-${category.title}`} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ 
  category, 
  index 
}: { 
  category: typeof skillCategories[0], 
  index: number 
}) {
  return (
    <div className="flex-shrink-0 w-96 lg:w-[28rem] bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header with Icon and Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
          <category.icon className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-text">
          {category.title}
        </h3>
      </div>

      {/* Skills Pills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-slate-100/80 hover:bg-primary/10 text-text text-sm font-medium rounded-full transition-colors duration-200 cursor-default focus:outline-none focus:ring-2 focus:ring-primary/50"
            tabIndex={0}
            role="button"
            aria-label={`${skill} skill`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}