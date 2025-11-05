'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { smoothScrollTo } from '@/lib/utils'

const techStack = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Flutter', icon: '💙' },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 lg:pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Photo */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[520px] xl:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/aditi.jpg"
                  alt="Aditi Bailur - Frontend and UI/UX Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 450px, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-display font-medium text-text leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <span className="text-gradient">Aditi Bailur</span> — a Software Engineering grad student who loves crafting fast, elegant, and scalable digital experiences.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Aspiring Full-Stack Developer
            </motion.p>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => smoothScrollTo('about')}
                className="text-lg px-8 py-4"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className="text-muted font-medium">Tech Stack</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 8px 25px rgba(99, 102, 241, 0.15)'
                    }}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium text-text">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [-10, 10, -10],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-16 h-16 bg-accent/10 rounded-full blur-xl"
        animate={{
          y: [10, -10, 10],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  )
}