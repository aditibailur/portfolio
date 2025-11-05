'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  id?: string
}

export function SectionHeading({ title, subtitle, className, id }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      className={cn('text-center mb-12 lg:mb-16', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <motion.p
          className="text-primary font-medium text-sm uppercase tracking-wider mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary"
        initial={{ width: 0 }}
        whileInView={{ width: '5rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </motion.div>
  )
}