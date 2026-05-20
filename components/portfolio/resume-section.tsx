"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Download, ExternalLink, Briefcase, GraduationCap, Code } from "lucide-react"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Code,
      title: "Technical Skills",
      items: ["React, Flutter, Node.js", "MongoDB, SQL", "Git, VS Code"]
    },
    {
      icon: Briefcase,
      title: "Projects",
      items: ["Matrimony Mobile App", "E-Commerce Platform", "Web Applications"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      items: ["B.Tech in CSE", "Darshan University", "CGPA: 7.48"]
    }
  ]

  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Resume</h2>
          </div>
          
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Resume Preview Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="aspect-[8.5/11] rounded-xl bg-background/80 border border-border overflow-hidden relative">
                  {/* Resume Preview Mockup */}
                  <div className="absolute inset-0 p-6 space-y-4">
                    <div className="text-center pb-4 border-b border-border">
                      <div className="h-4 w-40 mx-auto bg-primary/20 rounded mb-2" />
                      <div className="h-3 w-32 mx-auto bg-muted-foreground/20 rounded" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-3 w-24 bg-primary/20 rounded" />
                      <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                      <div className="h-2 w-5/6 bg-muted-foreground/10 rounded" />
                      <div className="h-2 w-4/5 bg-muted-foreground/10 rounded" />
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="h-3 w-20 bg-primary/20 rounded" />
                      <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                      <div className="h-2 w-3/4 bg-muted-foreground/10 rounded" />
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="h-3 w-28 bg-primary/20 rounded" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-muted-foreground/10 rounded" />
                        <div className="h-6 w-14 bg-muted-foreground/10 rounded" />
                        <div className="h-6 w-18 bg-muted-foreground/10 rounded" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm">
                      <ExternalLink className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </motion.div>
              
              {/* Resume Info & Download */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Prince Kakadiya
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  CSE student interested in web and mobile development. I work with React, Flutter, and Node.js.
                </p>
                
                {/* Highlights */}
                <div className="space-y-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary h-fit">
                        <highlight.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{highlight.title}</p>
                        <p className="text-muted-foreground text-sm">{highlight.items.join(" • ")}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Download Button */}
                <a
                  href="/Kakadiya_Prince_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
