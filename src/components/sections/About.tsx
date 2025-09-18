"use client"
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Passionate Developer</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Jhered Miguel C. Republica, a Computer Engineering student driven by the philosophy 
              of continuous improvement. Every day presents an opportunity to learn something new, 
              tackle challenging problems, and build solutions that make a difference.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in software development is fueled by curiosity and the desire to create 
              meaningful applications. I believe in writing clean, efficient code and staying 
              up-to-date with the latest technologies and best practices.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What Drives Me</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Continuous learning and growth
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Building innovative solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clean, maintainable code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Collaborative development
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
