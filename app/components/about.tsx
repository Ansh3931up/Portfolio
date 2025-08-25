"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-4 bg-[#0f0f0f] relative overflow-hidden">
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
            <span className="text-red-400 font-medium text-sm uppercase tracking-[0.2em]">My Journey</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-8 font-poppins leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Story Behind
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              The Code
            </span>
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story */}
      <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 font-poppins">From Electronics to Full-Stack Innovation</h3>
              <div className="space-y-6 text-lg leading-relaxed font-poppins text-gray-300">
                <p>
                  As a B.Tech student in Electronics and Communication Engineering at IIIT Una, I discovered my passion for software development through hands-on projects and real-world applications. My journey began with fundamental programming in C and C++, gradually evolving into full-stack web development.
          </p>
          <p>
                  Currently working as a Software Engineer at Hyperqube Ionic, I&apos;ve engineered multi-tenant file storage platforms, developed flexible meeting schedulers, and solved complex UI challenges. My work focuses on creating scalable, secure, and user-friendly solutions that solve real business problems.
          </p>
          <p>
                  I believe in the power of innovative technology to transform education and business processes. Projects like NeuraCampus demonstrate my commitment to solving complex challenges through creative engineering solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="space-y-8"
          >
            {/* Education Highlights */}
            <div className="bg-gradient-to-r from-red-500/[0.08] via-orange-500/[0.06] to-red-500/[0.08] backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-lg">
              <h4 className="text-white font-semibold mb-4 font-poppins text-lg">Education</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-poppins">B.Tech ECE</span>
                  <span className="text-red-400 font-bold font-poppins">9.12 CGPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-poppins">Senior Secondary</span>
                  <span className="text-red-400 font-bold font-poppins">94.6%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-poppins">Secondary</span>
                  <span className="text-red-400 font-bold font-poppins">95%</span>
                </div>
              </div>
            </div>

            {/* Current Role */}
            <div className="bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.12] shadow-lg">
              <h4 className="text-white font-semibold mb-4 font-poppins text-lg">Current Role</h4>
              <div className="space-y-3">
                <div className="text-gray-300 font-poppins">
                  <span className="text-red-400 font-semibold">Software Engineer</span> at Hyperqube Ionic
                </div>
                <div className="text-sm text-gray-400 font-poppins">
                  Remote • Sept. 2024 – Present
                </div>
                <div className="text-sm text-gray-300 font-poppins">
                  Full-stack development, multi-tenant platforms, and mentoring
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-red-500/[0.08] via-orange-500/[0.06] to-red-500/[0.08] backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-lg">
              <h4 className="text-white font-semibold mb-4 font-poppins text-lg">Key Achievements</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300 font-poppins text-sm">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>Hackathon Recognition at NIT Hamirpur</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 font-poppins text-sm">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>Runner-up in College Coding Contest</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 font-poppins text-sm">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>PR Head at ECOVA, IIIT Una</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/[0.08] via-orange-500/[0.06] to-red-500/[0.08] backdrop-blur-xl rounded-3xl p-8 border border-red-500/20 shadow-2xl">
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-poppins text-lg leading-relaxed">
              Passionate about creating innovative solutions that bridge the gap between technology and real-world needs. 
              Always eager to learn, grow, and contribute to meaningful projects.
          </p>
        </div>
      </motion.div>
      </div>
    </section>
  )
}

