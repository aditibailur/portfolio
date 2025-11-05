'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Building, Calendar, ExternalLink, GraduationCap } from 'lucide-react'

const experiences = [
  {
    role: 'Master of Software Engineering Systems',
    company: 'Northeastern University, Boston, MA',
    period: '05/2025 - 12/2025',
    current: true,
    type: 'education',
    description: '',
  },
  {
    role: 'Software Engineering Co-op',
    company: 'Aiera',
    period: '09/2024 - Present',
    current: true,
    type: 'work',
    description: 'Developed a serverless AWS–Python pipeline at Aiera, improving data processing efficiency.',
  },
  {
    role: 'Software Developer',
    company: 'Stellar Organization',
    period: '06/2023 - 12/2023',
    current: false,
    type: 'work',
    description: 'Engineered AI-driven financial insights and real-time event streaming systems.',
  },
  {
    role: 'Bachelor of Technology in Computer Science with Honors',
    company: 'Shah and Anchor Kutchhi Engineering College',
    period: '04/2023 - 05/2023',
    current: false,
    type: 'education',
    description: '',
  },
  {
    role: 'Software Developer',
    company: 'Oasis Infobyte',
    period: '05/2023',
    current: false,
    type: 'work',
    description: 'Developed a responsive CRM platform with MERN stack and interactive data visualization.',
  },
  {
    role: 'Software Developer',
    company: 'AS-44 (ArthSwatantrya)',
    period: '06/2021 - 02/2022',
    current: false,
    type: 'work',
    description: 'Led the development of a CRM–ERP hybrid system for financial consultancy.',
  },
]

export function About() {
  return (
    <section id="about" className="py-12 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-6 relative">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none space-y-6">
              <motion.p
                className="text-lg leading-relaxed text-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I am a passionate Full-Stack Developer and Software Engineering Master's student at Northeastern University with a strong foundation in building scalable, data-driven, and user-centered web and mobile applications. My experience spans front-end and back-end development, cloud infrastructure, CI/CD pipelines, and UI/UX design, with hands-on expertise in React, Redux, Node.js, Python, AWS, and Flutter.
              </motion.p>
              
              <motion.p
                className="text-lg leading-relaxed text-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I thrive at the intersection of technology and human impact, having developed applications that improve accessibility, streamline workflows, and enhance user experiences. Notable projects include PawConnect, a real-time pet adoption Progressive Web App, and an Accessibility-First Travel Booking Dashboard, where I combined research-driven design with responsive, intuitive interfaces.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I enjoy collaborating with interdisciplinary teams, solving complex technical challenges, and leveraging my skills to develop applications that make a meaningful difference. Outside of coding, I am passionate about reading, painting, and exploring creative ways to merge technology with everyday life.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                variant="secondary" 
                className="mt-6"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display font-semibold text-text mb-4">
              Education & Experience Timeline
            </h3>
            
            {/* Scrollable Timeline Container */}
            <div className="relative">
              {/* Top Fade Gradient */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none rounded-t-xl" />
              
              {/* Scrollable Content */}
              <div className="max-h-[400px] lg:max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400 rounded-xl bg-gradient-to-b from-slate-50/50 to-transparent p-3 lg:p-4">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
                  
                  <div className="space-y-6 lg:space-y-8">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        className="relative flex items-start space-x-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {/* Timeline Dot */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                              exp.current 
                                ? 'bg-gradient-to-r from-primary to-secondary' 
                                : exp.type === 'education' 
                                  ? 'bg-card border-2 border-accent/30'
                                  : 'bg-card border-2 border-primary/30'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {exp.type === 'education' ? (
                              <GraduationCap 
                                className={`w-5 h-5 ${
                                  exp.current ? 'text-white' : 'text-accent'
                                }`} 
                              />
                            ) : (
                              <Building 
                                className={`w-5 h-5 ${
                                  exp.current ? 'text-white' : 'text-primary'
                                }`} 
                              />
                            )}
                          </motion.div>
                          {exp.current && (
                            <motion.div
                              className="absolute -inset-2 bg-primary/20 rounded-full"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                              }}
                            />
                          )}
                        </div>

                        {/* Timeline Card */}
                        <Card className="flex-1 hover:shadow-card-hover transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-lg font-semibold text-text">
                                  {exp.role}
                                </h4>
                                <p className="text-primary font-medium">
                                  {exp.company}
                                </p>
                              </div>
                              {exp.current && (
                                <span className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex items-center text-muted text-sm mb-3">
                              <Calendar className="w-4 h-4 mr-2" />
                              {exp.period}
                            </div>
                            {exp.description && (
                              <p className="text-sm text-muted leading-relaxed">
                                {exp.description}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Bottom Fade Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none rounded-b-xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}