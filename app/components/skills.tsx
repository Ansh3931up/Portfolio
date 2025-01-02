"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Database, Cloud, Lock, Cpu, Smartphone } from 'lucide-react'

const skills = [
  { 
    name: "Frontend", 
    icon: Code,
    details: "HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS"
  },
  { 
    name: "Backend", 
    icon: Database,
    details: "Node.js, Express.js, MongoDB, MySQL"
  },
  { 
    name: "Development Tools", 
    icon: Zap,
    details: "Git, GitHub, Docker, Postman"
  },
  { 
    name: "Programming", 
    icon: Cpu,
    details: "JavaScript, C, C++"
  },
  { 
    name: "State Management", 
    icon: Cloud,
    details: "Redux, Context API"
  },
  { 
    name: "Soft Skills", 
    icon: Lock,
    details: "Leadership, Communication, Teamwork, Problem Solving"
  }
]

export function Skills() {
  return (
    <section className="py-8 section-color-change" id="skills">
      <h2 className="font-newspaper-heading text-3xl font-bold mb-6 border-b-2 border-primary pb-2">
        TECHNICAL ARSENAL
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border-2 border-primary p-4 text-center font-newspaper-body hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <skill.icon className="w-8 h-8 mb-2" />
              <span className="font-bold mb-2">{skill.name}</span>
              <p className="text-sm">{skill.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

