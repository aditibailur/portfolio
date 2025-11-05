'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn, smoothScrollTo } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleSectionInView = () => {
      const sections = navLinks.map(link => link.href.slice(1))
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionInView)
    handleScroll()
    handleSectionInView()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionInView)
    }
  }, [])

  const handleNavClick = (href: string) => {
    const sectionId = href.slice(1)
    smoothScrollTo(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md border-b border-slate-200/50 shadow-card' 
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-display font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Aditi Bailur
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'relative px-3 py-2 text-base font-medium transition-colors duration-200',
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-muted hover:text-text'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-slate-200/50 shadow-card z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="container mx-auto px-6 py-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        'block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200',
                        activeSection === link.href.slice(1)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted hover:text-text hover:bg-slate-50'
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}