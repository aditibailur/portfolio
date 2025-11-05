'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { smoothScrollTo } from '@/lib/utils'

export function Footer() {
  const scrollToTop = () => {
    smoothScrollTo('home')
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 to-slate-100 border-t border-slate-200/50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="text-center">
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="mb-8 mx-auto p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>

          {/* Main Footer Text */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Copyright Text */}
            <p className="text-text text-sm leading-relaxed">
              © 2025 Aditi Bailur. All rights reserved.
            </p>
            
            {/* Education Info */}
            <p className="text-muted text-sm">
              Software Engineering Systems | Northeastern University
            </p>

            {/* Made with Love */}
            <motion.div
              className="flex items-center justify-center space-x-2 text-muted text-xs mt-6 pt-6 border-t border-slate-200/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#64748B', '#EF4444', '#64748B']
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
              <span>using Next.js, TypeScript & Tailwind CSS</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  )
}