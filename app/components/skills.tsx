"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Database, Cloud, Lock, Cpu, Smartphone } from 'lucide-react'

const skills = [
  { name: "Frontend", icon: Code },
  { name: "UI/UX", icon: Palette },
  { name: "Performance", icon: Zap },
  { name: "Backend", icon: Database },
  { name: "Cloud", icon: Cloud },
  { name: "Security", icon: Lock },
  { name: "AI/ML", icon: Cpu },
  { name: "Mobile", icon: Smartphone },
]

export function Skills() {
  return (
    <section className="py-8 section-color-change" id="skills">
      <h2 className="font-newspaper-heading text-3xl font-bold mb-6 border-b-2 border-primary pb-2">
        TECHNICAL ARSENAL
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border-2 border-primary p-4 text-center font-newspaper-body hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex flex-col items-center justify-center"
          >
            <skill.icon className="w-8 h-8 mb-2" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

