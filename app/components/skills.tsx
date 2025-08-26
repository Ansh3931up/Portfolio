"use client"

import { motion } from "framer-motion"
import { Code, Zap, Database, Cloud, Cpu, Globe, Shield, Rocket, Layers, Palette } from 'lucide-react'

const skills = [
  { 
    name: "Frontend Development", 
    icon: Code,
    details: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    color: "red",
    level: 95
  },
  { 
    name: "Backend & APIs", 
    icon: Database,
    details: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT"],
    color: "orange",
    level: 88
  },
  { 
    name: "Programming Languages", 
    icon: Cpu,
    details: ["JavaScript", "TypeScript", "Python", "C++", "C"],
    color: "red",
    level: 92
  },
  { 
    name: "Databases & Storage", 
    icon: Cloud,
    details: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "AWS S3"],
    color: "orange",
    level: 85
  },
  { 
    name: "Development Tools", 
    icon: Zap,
    details: ["Git", "Docker", "Postman", "VS Code", "GitHub Actions"],
    color: "red",
    level: 90
  },
  { 
    name: "State Management", 
    icon: Layers,
    details: ["Redux", "Context API", "Zustand", "React Query", "SWR"],
    color: "orange",
    level: 87
  },
  { 
    name: "UI/UX Design", 
    icon: Palette,
    details: ["Responsive Design", "Material-UI", "Framer Motion", "Accessibility", "User Research"],
    color: "red",
    level: 83
  },
  { 
    name: "DevOps & Deployment", 
    icon: Rocket,
    details: ["Vercel", "AWS", "CI/CD", "Performance", "Monitoring"],
    color: "orange",
    level: 80
  },
  { 
    name: "Security & Testing", 
    icon: Shield,
    details: ["JWT", "OAuth", "Jest", "Cypress", "Security Best Practices"],
    color: "red",
    level: 82
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 section-darker-gray relative overflow-hidden">
      {/* Sleek Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-1 h-40 bg-gradient-to-b from-red-500/20 via-red-400/15 to-transparent animate-pulse"></div>
        <div className="absolute top-48 right-32 w-0.5 h-32 bg-gradient-to-b from-orange-500/20 via-orange-400/10 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-20 bg-gradient-to-b from-red-400/15 via-red-300/10 to-transparent animate-pulse delay-500"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sleek Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center space-x-3 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-red-400 font-medium text-sm uppercase tracking-[0.2em]">My Expertise</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-8 font-poppins leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Arsenal
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A comprehensive toolkit of technologies and frameworks that power innovative solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.06] backdrop-blur-xl rounded-3xl p-6 border border-white/[0.12] shadow-2xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-[1.02] hover:border-red-500/30">
                
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${skill.color}-500/20 to-${skill.color === 'red' ? 'orange' : 'red'}-500/20 rounded-xl flex items-center justify-center border border-${skill.color}-500/30 group-hover:border-${skill.color}-400/50 transition-all duration-300`}>
                    <skill.icon className={`w-7 h-7 text-${skill.color}-400 group-hover:text-${skill.color}-300 transition-colors duration-300`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins group-hover:text-red-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-sm text-gray-400 font-poppins">Proficiency</div>
                      <div className="text-sm font-bold text-red-400 font-poppins">{skill.level}%</div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-white/[0.1] rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-2 bg-gradient-to-r from-${skill.color}-500 to-${skill.color === 'red' ? 'orange' : 'red'}-500 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {skill.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      className="flex items-center space-x-2 text-gray-300 font-poppins text-sm group-hover:text-gray-200 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + detailIndex * 0.05 }}
                    >
                      <div className={`w-1.5 h-1.5 bg-${skill.color}-400 rounded-full`}></div>
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/[0.05] to-orange-500/[0.05] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-red-500/[0.08] via-orange-500/[0.06] to-red-500/[0.08] backdrop-blur-xl rounded-3xl p-10 border border-red-500/20 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 font-poppins text-center">Soft Skills & Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { skill: "Leadership", icon: Rocket, description: "Team management and project coordination" },
                { skill: "Communication", icon: Globe, description: "Clear and effective communication" },
                { skill: "Problem Solving", icon: Cpu, description: "Analytical thinking and innovation" },
                { skill: "Collaboration", icon: Shield, description: "Teamwork and cross-functional coordination" }
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  className="text-center p-6 bg-white/[0.05] rounded-2xl border border-white/[0.08] hover:border-red-500/30 transition-all duration-500 hover:bg-white/[0.08] group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  <h4 className="text-white font-semibold font-poppins mb-2">{item.skill}</h4>
                  <p className="text-gray-400 text-sm font-poppins">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

