"use client"
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import projects from '@/components/data/projects.json'

function ProjectModal({ project, onClose }: { project: typeof projects[0], onClose: () => void }) {
  if (!project) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={project.screenshot}
          alt={project.title + " screenshot"}
          className="rounded mb-4 w-full object-cover max-h-64"
        />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button size="sm" href={project.liveUrl}>Live Demo</Button>
          <Button variant="outline" size="sm" href={project.githubUrl}>GitHub</Button>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-2"
        >
          Featured Projects
        </motion.h2>
        <p className="text-center text-gray-500 mb-10 text-base">
          Some links may not work due to them being still ongoing or not available anymore due to specific reasons.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card
                hover
                className="flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${project.title}`}
              >
                <img
                  src={project.screenshot}
                  alt={project.title + " screenshot"}
                  className="rounded mb-3 w-full object-cover max-h-40 group-hover:scale-105 transition-transform duration-200"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button size="sm" href={project.liveUrl}>Live Demo</Button>
                  <Button variant="outline" size="sm" href={project.githubUrl}>GitHub</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <Button variant="outline" href="https://github.com/red-sakai">
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
