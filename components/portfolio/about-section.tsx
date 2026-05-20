"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
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
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          </div>
          
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 order-2 md:order-1">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I&apos;m a Computer Science student at Darshan University. I enjoy building web and mobile apps. I&apos;m learning new technologies and improving my problem-solving skills every day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently exploring React, Flutter, and backend development. I like working on projects that solve real problems.
                </p>
              </div>
              
              {/* Profile Image in About */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl">
                    <Image
                      src="/images/prince-profile.jpeg"
                      alt="Prince Kakadiya"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold text-foreground">Rajkot, Gujarat, India</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Languages</p>
                <p className="font-semibold text-foreground">English, Hindi, Gujarati</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Focus</p>
                <p className="font-semibold text-foreground">Web & Mobile Apps</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Problem Solving", "Smart Thinker", "Teamwork", "Quick Learner", "Communication"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
