"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { BackgroundShapes } from "../ui/background-shapes";
import Marquee from "../ui/marquee";
import { ReviewCard } from "./ReviewCard";

interface TechStacksSectionProps {
  id: string;
  forwardedRef: React.RefObject<HTMLDivElement | null>;
}

export const TechStacksSection: React.FC<TechStacksSectionProps> = memo(({ id, forwardedRef }) => {
  const techStacks = [
    {
      name: "React & Next.js",
      body: "Modern frontend development with React ecosystem",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description: "Building scalable web applications with React, Next.js, and modern JavaScript frameworks. Expertise in component-based architecture, state management, and performance optimization."
    },
    {
      name: "Node.js & Express",
      body: "Server-side JavaScript development",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      description: "Creating robust backend services with Node.js, Express.js, and RESTful APIs. Experience with middleware, authentication, and database integration."
    },
    {
      name: "TypeScript",
      body: "Type-safe JavaScript development",
      img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
      description: "Writing maintainable and scalable code with TypeScript. Strong understanding of type systems, interfaces, generics, and advanced TypeScript features."
    },
    {
      name: "MongoDB & Databases",
      body: "Database design and management",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Working with MongoDB, PostgreSQL, and other databases. Experience in data modeling, query optimization, and database administration."
    },
    {
      name: "Tailwind CSS",
      body: "Utility-first CSS framework",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Creating responsive and beautiful user interfaces with Tailwind CSS. Expertise in utility classes, custom components, and design systems."
    },
    {
      name: "Git & GitHub",
      body: "Version control and collaboration",
      img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      description: "Proficient in Git version control, GitHub workflows, and collaborative development practices. Experience with branching strategies and code reviews."
    },
    {
      name: "Docker & DevOps",
      body: "Containerization and deployment",
      img: "https://images.unsplash.com/photo-1667372393129-331051c77fa8?w=400&h=300&fit=crop",
      description: "Containerizing applications with Docker, CI/CD pipelines, and cloud deployment. Experience with AWS, Vercel, and other cloud platforms."
    },
    {
      name: "Data Structures & Algorithms",
      body: "Problem solving and optimization",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      description: "Strong foundation in data structures, algorithms, and problem-solving. Experience with LeetCode, competitive programming, and algorithmic thinking."
    }
  ];

  const firstRow = techStacks.slice(0, techStacks.length / 2);
  const secondRow = techStacks.slice(techStacks.length / 2);

  return (
    <section
      id={id}
      ref={forwardedRef}
      className="h-auto min-h-screen bg-gradient-to-b from-[#2e8ce4]/20 to-[#252422] pt-24 pb-12 flex items-center relative overflow-hidden"
    >
      <BackgroundShapes />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Tech <span className="text-[#2e8ce4]">Stacks</span> & Tools
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#2e8ce4] mx-auto"></div>
          <p className="text-gray-300/80 text-sm md:text-base max-w-xl mx-auto mt-4">
            Technologies and frameworks I use to build amazing digital experiences
          </p>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] h-[250px] sm:h-64">
            {firstRow.map((tech) => (
              <ReviewCard key={tech.name} {...tech} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s] h-[250px] sm:h-64">
            {secondRow.map((tech) => (
              <ReviewCard key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#eb5e28]/10 to-[#252422]/20 backdrop-blur-sm rounded-xl p-8 border border-[#eb5e28]/20 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always excited to work with new technologies and take on challenging projects. 
              Let&apos;s discuss how we can bring your ideas to life with the right tech stack!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#eb5e28] text-white rounded-lg hover:bg-[#eb5e28]/90 transition-colors"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-[#252422] text-white rounded-lg hover:bg-[#403d39] transition-colors border border-[#eb5e28]/30"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          className="w-full h-auto"
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
              duration: 3,
              ease: "easeInOut",
            }}
            className="fill-current text-[#eb5e28]/20"
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
              duration: 4,
              ease: "easeInOut",
            }}
            className="fill-current text-black"
          />
        </svg>
      </div>
    </section>
  );
});

TechStacksSection.displayName = 'TechStacksSection';