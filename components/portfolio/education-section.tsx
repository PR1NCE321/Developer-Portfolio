"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "Darshan University",
    location: "Rajkot, Gujarat",
    period: "Expected 2027",
    grade: "CGPA: 7.48",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Modi Higher Secondary School",
    location: "Rajkot, Gujarat",
    period: "2023",
    grade: "Science (PCM)",
    current: false,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Modi Secondary School",
    location: "Rajkot, Gujarat",
    period: "2021",
    grade: "",
    current: false,
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-2 ${
                      edu.current 
                        ? "bg-primary border-primary shadow-lg shadow-primary/50" 
                        : "bg-card border-primary/50"
                    }`} />
                    
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.location}</p>
                        </div>
                        
                        {edu.current && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        
                        {edu.grade && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Award className="w-4 h-4" />
                            <span>{edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
