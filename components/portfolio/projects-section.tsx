"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FolderGit2, ExternalLink, Smartphone, Globe } from "lucide-react"

const projects = [
  {
    title: "Matrimony Mobile App",
    description: "A comprehensive matrimony mobile application built with Flutter featuring clean UI design, smooth navigation, and an intuitive user experience for connecting people.",
    tech: ["Flutter", "Dart", "Firebase"],
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce Web App",
    description: "A full-stack e-commerce platform with robust backend APIs and MongoDB integration. Features include product management, user authentication, and order processing.",
    tech: ["Node.js", "MongoDB", "Express", "REST API"],
    icon: Globe,
    color: "from-primary to-purple-500",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-background/50 text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
