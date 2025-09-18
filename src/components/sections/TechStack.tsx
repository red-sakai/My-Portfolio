"use client"
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { SiVite } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiFlask } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { TbBrandCSharp } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { RiSupabaseFill } from 'react-icons/ri'
import { FaDigitalOcean } from "react-icons/fa"
import { FaFlutter } from "react-icons/fa6"
import { SiDart } from "react-icons/si"
import { SiShadcnui } from "react-icons/si"
import { FaUnity } from "react-icons/fa"

const frontendTechs = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: IoLogoCss3 },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind', icon: RiTailwindCssFill },
  { name: 'Flask', icon: SiFlask },
  { name: 'Flutter', icon: FaFlutter},
  { name: 'Dart', icon: SiDart},
  { name: "Shadcn", icon: SiShadcnui},
  { name: 'Unity Engine', icon: FaUnity}
]

const backendTechs = [
  { name: 'Python', icon: FaPython },
  { name: 'C#', icon: TbBrandCSharp },
  { name: 'Javascript', icon: IoLogoJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'MySQL', icon: GrMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Supabase', icon: RiSupabaseFill },
  { name: 'Digitalocean', icon: FaDigitalOcean}
]

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Tech Stack
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Frontend Development</h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendTechs.map(({ name, icon: Icon }) => (
                  <div key={name} className="bg-blue-50 rounded-lg p-3 text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                    <Icon className="text-blue-700 text-2xl" />
                    <span className="text-blue-700 font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card hover>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Backend Development</h3>
              <div className="grid grid-cols-2 gap-4">
                {backendTechs.map(({ name, icon: Icon }) => (
                  <div key={name} className="bg-green-50 rounded-lg p-3 text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                    <Icon className="text-green-700 text-2xl" />
                    <span className="text-green-700 font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
