'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Aditi's work on PawConnect showcased her expertise in React, Node.js, and PostgreSQL.",
    author: "Shilpa Kalantari",
    role: "Professor",
    rating: 5,
  },
  {
    quote: "Her research mindset and operational excellence truly stand out.",
    author: "Atul Kochhar",
    role: "Mentor",
    rating: 5,
  },
  {
    quote: "Aditi's FoodResQ app effectively tackled food waste using Flutter and Firebase.",
    author: "Karya Shah",
    role: "Oasis Infobyte",
    rating: 5,
  },
  {
    quote: "Her strong problem-solving mindset and technical expertise in full-stack development are commendable.",
    author: "Arundhati",
    role: "Stellar Organization",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-12 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative">
        <SectionHeading 
          title="Testimonials" 
          subtitle="What others say"
        />

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              <TestimonialCard 
                testimonial={testimonials[currentIndex]} 
                index={currentIndex} 
              />
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card border border-slate-200 text-muted hover:text-primary hover:border-primary transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card border border-slate-200 text-muted hover:text-primary hover:border-primary transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: '10+', label: 'Projects' },
            { number: '3+', label: 'Companies' },
            { number: '2+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <motion.div
                className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  bounce: 0.5
                }}
              >
                {stat.number}
              </motion.div>
              <p className="text-muted text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  )
}

function TestimonialCard({ 
  testimonial, 
  index 
}: { 
  testimonial: typeof testimonials[0], 
  index: number 
}) {
  return (
    <Card className="h-full hover:shadow-card-hover transition-all duration-300 group">
      <CardContent className="p-8">
        {/* Quote Icon */}
        <motion.div
          className="mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Quote className="w-10 h-10 text-primary/30" />
        </motion.div>

        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.2 + i * 0.1 
              }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </div>

        {/* Quote Text */}
        <motion.blockquote
          className="text-lg leading-relaxed text-text mb-8 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          "{testimonial.quote}"
        </motion.blockquote>

        {/* Author Info */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-semibold text-text group-hover:text-primary transition-colors duration-300">
              {testimonial.author}
            </div>
            <div className="text-muted text-sm">
              {testimonial.role}
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}