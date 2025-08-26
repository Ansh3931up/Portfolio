"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Calendar, Code, ArrowRight, Star } from 'lucide-react'
import rss from '../../assests/rss.png'
import chat from '../../assests/chat.png'
import neura from '../../assests/neura.png'
import ecova from '../../assests/ecova.png'

const projects = [
  {
    title: "NeuraCampus - Digital Campus Management System",
    description: "Lead Developer of a multi-tenant digital campus management system with innovative attendance tracking combining sound authentication and facial recognition, reducing roll-call time from 5-8 minutes to just seconds for 100+ students.",
    longDescription: "Ensured system reliability with ACID transactions and anomaly detection to maintain accurate attendance and allow teachers to double-check absentees, reducing errors significantly. Currently exploring event-driven relational database updates as a WebSocket alternative to reduce infrastructure cost and complexity. Migrated deployment from AWS EC2 to Vercel for improved scalability and cost-efficiency. Additional features include automatic scheduling and integrated PDF reader functionalities under development.",
    image: neura, // You can replace this with a NeuraCampus image
    date: "2024 – Ongoing",
    link: "https://neuracampus.vercel.app/",
    technologies: ["Next.js", "Clerk", "AWS/Vercel"],
    features: ["Multi-tenant CMS", "Sound + Facial Recognition", "ACID Transactions", "Event-driven Architecture"],
    status: "active"
  },
  {
    title: "TransLingo - Multilingual Chat Platform",
    description: "Led the development of a real-time multilingual chat platform using WebSocket technology. Optimized RESTful APIs improving system efficiency by 15%. Integrated front-end and back-end using Tailwind CSS and JWT for responsive UI and secure authentication.",
    longDescription: "Built a scalable real-time communication platform supporting multiple languages with instant translation capabilities. Implemented WebSocket connections for live chat, optimized database queries for better performance, and created a responsive design that works seamlessly across all devices.",
    image: chat,
    date: "2023",
    link: "https://chat-box-iota-gold.vercel.app/",
    technologies: ["WebSocket", "Tailwind CSS", "JWT", "RESTful APIs"],
    features: ["Real-time Chat", "Multilingual Support", "Secure Authentication", "Responsive Design"],
    status: "completed"
  },
  {
    title: "Social Website for Organization",
    description: "Developed a comprehensive content management system with enhanced security features, reducing incidents by 30%. Implemented Firebase notifications for real-time updates and improved user engagement through streamlined content delivery.",
    longDescription: "Created a full-featured social platform with advanced content management capabilities, user authentication, and real-time notifications. Implemented robust security measures and optimized the system for high user engagement and content discovery.",
    image: rss,
    date: "2023",
    link: "https://rss-react-anshs-projects-8a0075b6.vercel.app/",
    technologies: ["React", "Firebase", "Content Management", "Security"],
    features: ["CMS", "Real-time Updates", "Enhanced Security", "User Engagement"],
    status: "completed"
  },
  {
    title: "ECOVA Club Website",
    description: "Developed the frontend for an environmental club website, increasing user interaction by 40% through improved design and event features. Implemented scalable architecture following best practices in React development.",
    longDescription: "Designed and developed a modern, responsive website for an environmental organization with event management, member registration, and interactive features. Focused on user experience and accessibility while maintaining high performance standards.",
    image: ecova,
    date: "2023",
    link: "https://ecova.vercel.app/",
    technologies: ["React", "Frontend Development", "Event Management", "Responsive Design"],
    features: ["Event Management", "Member Registration", "Responsive Design", "High Performance"],
    status: "completed"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-8 section-dark-gray relative overflow-hidden">
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
            <span className="text-red-400 font-medium text-sm uppercase tracking-[0.2em]">Featured Work</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-8 font-poppins leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Showcasing innovative solutions and cutting-edge technologies that solve real-world problems
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* Project Image */}
                <motion.div 
                  className="lg:col-span-5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.1] group-hover:border-red-500/30 transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'active' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status === 'active' ? 'Active' : 'Completed'}
                      </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Date */}
                  <div className="flex items-center mt-4 text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-poppins">{project.date}</span>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins group-hover:text-red-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg leading-relaxed font-poppins text-gray-300 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 font-poppins flex items-center">
                        <Code className="w-5 h-5 text-red-400 mr-2" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-white/[0.05] border border-white/[0.1] rounded-lg text-sm text-gray-300 font-poppins hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 + techIndex * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 font-poppins flex items-center">
                        <Star className="w-5 h-5 text-red-400 mr-2" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center space-x-2 text-gray-400 font-poppins text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                      className="flex items-center space-x-3 text-red-400 font-semibold font-poppins group-hover:text-red-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
              </div>
            </div>
            </div>
          </motion.article>
        ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/[0.08] via-orange-500/[0.06] to-red-500/[0.08] backdrop-blur-xl rounded-3xl p-12 border border-red-500/20 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6 font-poppins">Ready to Start a Project?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-poppins text-lg leading-relaxed">
              Let&apos;s collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 hover:from-red-600 hover:via-red-700 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 cursor-pointer font-poppins flex items-center space-x-3 mx-auto"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

