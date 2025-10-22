"use client";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { BackgroundShapes } from "../ui/background-shapes";
import { 
  Code, 
  Database, 
  Cpu, 
  GitBranch, 
  Smartphone, 
  Globe,
  Brain,
  Zap,
  Shield,
  Layers
} from "lucide-react";

interface SkillsSectionProps {
  id: string;
  forwardedRef: React.RefObject<HTMLDivElement | null>;
}

export const SkillsSection: React.FC<SkillsSectionProps> = memo(({ id, forwardedRef }) => {
  // Skills data with different colors and categories
  const skills = useMemo(() => [
    // DSA & Problem Solving
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Data Structures & Algorithms",
      description: "Expert in arrays, linked lists, trees, graphs, and complex algorithms",
      level: "Expert",
      color: "from-red-500 to-red-700",
      iconBg: "bg-red-500/20",
      iconColor: "text-red-300",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Strong analytical thinking and systematic approach to complex problems",
      level: "Advanced",
      color: "from-orange-500 to-red-600",
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-300",
    },
    
    // Frontend
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS, and modern web technologies",
      level: "Advanced",
      color: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-300",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Creating beautiful, responsive user interfaces for all devices",
      level: "Advanced",
      color: "from-purple-500 to-indigo-600",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-300",
    },
    
    // Backend
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Node.js, Express, REST APIs, and database management",
      level: "Intermediate",
      color: "from-green-500 to-teal-600",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-300",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "System Design",
      description: "Understanding of scalable architecture and system design principles",
      level: "Intermediate",
      color: "from-yellow-500 to-orange-600",
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-300",
    },
    
    // Tools & Technologies
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control",
      description: "Git, GitHub, and collaborative development workflows",
      level: "Advanced",
      color: "from-gray-500 to-gray-700",
      iconBg: "bg-gray-500/20",
      iconColor: "text-gray-300",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Full Stack Integration",
      description: "End-to-end application development and deployment",
      level: "Intermediate",
      color: "from-pink-500 to-rose-600",
      iconBg: "bg-pink-500/20",
      iconColor: "text-pink-300",
    },
  ], []);
  
  // DSA specific skills
  const dsaSkills = useMemo(() => [
    "Arrays & Strings",
    "Linked Lists",
    "Stacks & Queues",
    "Trees & Graphs",
    "Dynamic Programming",
    "Greedy Algorithms",
    "Sorting & Searching",
    "Hash Tables",
    "Binary Search",
    "Two Pointers",
    "Sliding Window",
    "Backtracking"
  ], []);

  return (
    <section
      id={id}
      ref={forwardedRef}
      className="h-auto min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center relative overflow-hidden pt-16 pb-24 lg:py-32"
    >
      <BackgroundShapes />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-red-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-red-600/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/5 blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-16 mb-4">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              Skills & Expertise
            </motion.span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#2e8ce4] mx-auto"></div>
          <p className="text-gray-300/80 text-sm md:text-base max-w-xl mx-auto mt-4">
            My technical skills and expertise in software development and problem solving
          </p>
        </motion.div>

        {/* DSA Section - Special highlight */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Data Structures & Algorithms</h3>
              <p className="text-gray-300">My core expertise in problem solving and algorithm design</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {dsaSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-600/30 hover:bg-gray-700/30 transition-all duration-300"
                >
                  <span className="text-sm text-white font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${skill.color} bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${skill.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <div className={skill.iconColor}>
                    {skill.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
            <p className="text-gray-300">
              I'm always learning new technologies and improving my skills. Currently focused on advanced system design, 
              cloud technologies, and contributing to open-source projects. I believe in the power of continuous learning 
              and staying updated with the latest trends in technology.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          className="w-full space-x-reverse h-auto"
        >
          <motion.path
            initial={{
              d: "M321.39,80.44c58-15.79,114.16-35.13,172-50.86,82.39-20.72,168.19-22.73,250.45-3.39C823.78,40,906.67,90,985.66,110.83c70.05,20.48,146.53,30.09,214.34,8V0H0V35.35A600.21,600.21,0,0,0,321.39,80.44Z",
            }}
            animate={{
              d: [
                "M321.39,75.44c58-20.79,114.16-32.13,172-45.86,82.39-22.72,168.19-22.73,250.45-4.39C823.78,35,906.67,85,985.66,105.83c70.05,18.48,146.53,28.09,214.34,6V0H0V32.35A600.21,600.21,0,0,0,321.39,75.44Z",
                "M321.39,80.44c58-15.79,114.16-35.13,172-50.86,82.39-20.72,168.19-22.73,250.45-3.39C823.78,40,906.67,90,985.66,110.83c70.05,20.48,146.53,30.09,214.34,8V0H0V35.35A600.21,600.21,0,0,0,321.39,80.44Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
            className="fill-current text-red-800/40"
          />

          <motion.path
            initial={{
              d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
            }}
            animate={{
              d: [
                "M321.39,50.44c58-15.79,114.16-25.13,172-35.86,82.39-18.72,168.19-18.73,250.45-.39C823.78,20,906.67,65,985.66,85.83c70.05,16.48,146.53,24.09,214.34,5V0H0V25.35A600.21,600.21,0,0,0,321.39,50.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              duration: 6,
              ease: "easeInOut",
            }}
            className="fill-current text-red-900"
          />
        </svg>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';
