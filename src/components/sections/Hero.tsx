"use client"
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Hi, I'm <span className="text-blue-600">Jhered Miguel C. Republica</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Computer Engineering Student with a passion of being better everyday. 
          Building innovative solutions with modern web technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" href="#projects">View My Work</Button>
          <Button variant="outline" size="lg" href="#about">About Me</Button>
        </motion.div>
      </div>
    </section>
  )
}
