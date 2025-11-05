'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  shortDescription: string
  longDescription: string
  tags: string[]
  image: string
  gradient: string
  icon: string
  cta?: {
    text: string
    href: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PawConnect',
    shortDescription: 'Real-Time Pet Adoption Platform — multilingual PWA with real-time adoption tracking and optimized API performance.',
    longDescription: 'Implemented real-time adoption tracking with WebSockets for instant updates. Optimized API performance with ACID-compliant PostgreSQL, reducing response time by 30%.',
    tags: ['React', 'Redux', 'TypeScript', 'WebSockets', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS S3'],
    image: '/projects/pawconnect.jpg',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🐾'
  },
  {
    id: 2,
    title: 'TripSync',
    shortDescription: 'Personalized Trip Planning Platform — responsive web app with dynamic data fetching and performance-enhanced SSR/SSG.',
    longDescription: 'Enhanced UX by reducing page load times by 40% using SSR and SSG in Next.js. Improved query execution speed with indexed and cached RESTful APIs in Spring Boot.',
    tags: ['React', 'Next.js', 'Spring Boot', 'GitHub Actions'],
    image: '/projects/tripsync.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '✈️'
  },
  {
    id: 3,
    title: 'ASL Recognition and Speech Conversion',
    shortDescription: 'CNN-based model for real-time ASL recognition with optimized inference speed.',
    longDescription: 'Achieved 97.89% accuracy on a 115,000-image dataset using a 2-layer CNN. Boosted inference speed by 40% with model quantization and pruning for real-time ASL recognition.',
    tags: ['Python', 'TensorFlow', 'Keras', 'RESTful APIs'],
    image: '/projects/asl-recognition.jpg',
    gradient: 'from-purple-500 to-indigo-500',
    icon: '🤝',
    cta: {
      text: 'View Paper',
      href: 'https://drive.google.com/file/d/1GjzhglQ0eGkeH3_v4QksW8EUs8yx68G5/view'
    }
  },
  {
    id: 4,
    title: 'FoodResQ',
    shortDescription: 'Android app to reduce hotel food waste using Flutter + Google Maps API.',
    longDescription: 'Integrated Google Maps API to assist organizations in locating needy individuals. Published research in IJRASET (Sept 2023, Volume 11, Issue IX, ISSN: 2321-9653) on food waste reduction.',
    tags: ['Flutter', 'Firebase', 'Google Maps API'],
    image: '/projects/foodresq.jpg',
    gradient: 'from-green-500 to-emerald-500',
    icon: '🍽️',
    cta: {
      text: 'View Paper',
      href: '#'
    }
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-12 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in web development, machine learning, and mobile applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandedContentId = `project-${project.id}-expanded`

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev)
  }

  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/30 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover object-top transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Frosted Icon Chip */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
          <span className="text-sm" role="img" aria-label={project.title}>
            {project.icon}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8 md:p-10">
        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Expanded Content */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          id={expandedContentId}
          aria-live="polite"
        >
          <div className="space-y-4 mb-6">
            <p className="text-slate-600 leading-relaxed">
              {project.longDescription}
            </p>
            
            {/* CTA Button - Only for ASL project */}
            {project.cta && project.title === 'ASL Recognition and Speech Conversion' && (
              <div className="pt-2 ml-2">
                <a
                  href={project.cta.href}
                  className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.cta.text}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-full border border-purple-200/50 transition-colors duration-200 cursor-default focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
                tabIndex={0}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleExpanded}
          className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:scale-105 motion-reduce:transform-none"
          aria-expanded={isExpanded}
          aria-controls={expandedContentId}
        >
          {isExpanded ? 'View less' : 'View more'}
        </button>
      </div>
    </div>
  )
}