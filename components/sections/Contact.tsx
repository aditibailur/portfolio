'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'bailur.a@northeastern.edu',
    href: 'mailto:bailur.a@northeastern.edu',
    color: 'from-red-500 to-pink-500',
    description: 'Send me an email',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aditi-bailur',
    href: 'https://linkedin.com/in/aditi-bailur',
    color: 'from-blue-600 to-blue-700',
    description: 'Connect with me',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/aditibailur',
    href: 'https://github.com/aditibailur',
    color: 'from-gray-700 to-gray-900',
    description: 'View my code',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Boston, MA',
    href: 'https://maps.google.com?q=Boston,MA',
    color: 'from-green-500 to-emerald-600',
    description: 'Based in',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative">
        <SectionHeading 
          title="Let's Connect" 
          subtitle="Get in touch"
        />

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    className={`mx-auto mb-4 p-3 rounded-2xl bg-gradient-to-r ${method.color} shadow-lg w-fit`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.label}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-sm mb-3">
                    {method.description}
                  </p>

                  {/* Value */}
                  <p className="text-sm font-medium text-text truncate">
                    {method.value}
                  </p>

                  {/* External Link Icon */}
                  {method.href.startsWith('http') && (
                    <motion.div
                      className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-4 h-4 text-primary mx-auto" />
                    </motion.div>
                  )}
                </CardContent>

                {/* Hover Effect Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                  initial={{ opacity: 0 }}
                />
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-text mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-lg text-muted leading-relaxed mb-8">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly conversation about technology and design.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="mailto:bailur.a@northeastern.edu"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/aditi-bailur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-medium rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-xl hidden lg:block"
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
          className="absolute bottom-20 left-20 w-16 h-16 bg-accent/10 rounded-full blur-xl hidden lg:block"
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
      </div>
    </section>
  )
}