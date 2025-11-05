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
  github?: string
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
    },
    github: 'https://github.com/aditibailur/American-Sign-Language-Recognition-'
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
    },
    github: 'https://github.com/aditibailur/food_resq'
  }
]

export function Projects() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (projectId: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isExpanded={expandedCards.has(project.id)}
            onToggle={() => toggleCard(project.id)}
          />
          ))}
      </div>
      </div>
    </section>
  )
}

function ProjectCard({ 
  project, 
  isExpanded, 
  onToggle 
}: { 
  project: Project
  isExpanded: boolean
  onToggle: () => void
}) {
  const expandedContentId = `project-${project.id}-expanded`
  const cardId = `project-card-${project.id}`

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onToggle()
  }

  return (
    <div id={cardId} className={`flex flex-col rounded-3xl bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/30 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group ${!isExpanded ? 'h-[600px]' : ''}`}>
      {/* Project Image */}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-64 md:h-72 overflow-hidden block cursor-pointer group/image"
        >
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover/image:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Frosted Icon Chip */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <span className="text-sm" role="img" aria-label={project.title}>
              {project.icon}
            </span>
          </div>
        </a>
      ) : (
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
      )}

      {/* Card Content */}
      <div className={`p-8 md:p-10 flex flex-col flex-1 ${!isExpanded ? 'min-h-[280px]' : ''}`}>
        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Expanded Content */}
        {isExpanded && (
          <div 
            className="overflow-hidden transition-all duration-300 ease-in-out"
            id={expandedContentId}
            aria-live="polite"
          >
            <div className="space-y-4 mb-6">
              <p className="text-slate-600 leading-relaxed">
                {project.longDescription}
              </p>
              
              {/* Action Buttons */}
              {(project.cta || project.github) && (
                <div className="pt-2 flex flex-wrap gap-3">
                  {project.cta && project.cta.href !== '#' && (
                    <a
                      href={project.cta.href}
                      className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.cta.text}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tech Tags */}
        <div className="mb-4 mt-auto">
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
          type="button"
          onClick={handleToggle}
          className="inline-flex items-center justify-center w-fit px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:scale-105 motion-reduce:transform-none"
          aria-expanded={isExpanded}
          aria-controls={expandedContentId}
          data-project-id={project.id}
        >
          {isExpanded ? 'View less' : 'View more'}
        </button>
      </div>
    </div>
  )
}