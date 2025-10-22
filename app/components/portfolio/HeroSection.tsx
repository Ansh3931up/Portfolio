"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { BackgroundShapes } from "../ui/background-shapes";
import { Typewriter } from "../ui/Typewriter";
import { Github, Linkedin, Mail, Download } from "lucide-react";

interface HeroSectionProps {
  id: string;
  forwardedRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = memo(({ id, forwardedRef }) => {
  return (
    <section
      id={id}
      ref={forwardedRef}
      className="h-auto min-h-screen w-full pt-32 sm:pt-28 pb-12 sm:pb-16 flex items-center relative overflow-hidden hero-section bg-black"
    >
      <BackgroundShapes />
      
      <div className="relative z-10 flex flex-col w-full">
        <main className="max-w-full mx-4 sm:mx-10 flex items-center my-5 md:my-auto px-4 sm:px-6 lg:px-0 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            <div className="flex flex-col justify-center space-y-6 relative z-30">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-white">
                  <span className="block">Hi, I'm</span>
                  <span className="block">
                    <span className="text-[#2e8ce4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Ansh</span>
                    <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"> Kumar</span>
                  </span>
                  <span className="block text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <Typewriter 
                      words={["Full Stack Developer", "DSA Expert", "Problem Solver", "Tech Enthusiast"]}
                      delay={2000}
                      deleteSpeed={50}
                      typeSpeed={100}
                      className="inline-block"
                    />
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Passionate about creating innovative solutions through code. I specialize in full-stack development 
                with expertise in data structures and algorithms. Currently pursuing my passion for technology 
                and building amazing digital experiences.
              </motion.p>

              <motion.div 
                className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href="/resume"
                  className="w-full flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-md text-white bg-[#2e8ce4] shadow-lg hover:bg-[#1764ad] transition-all ease-in-out duration-300 md:py-4 md:text-lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-md text-[#2e8ce4] bg-white border border-[#2e8ce4] shadow-lg hover:bg-gray-100 transition-all ease-in-out duration-300 md:py-4 md:text-lg"
                >
                  Get In Touch
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://github.com/anshkumar3931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2e8ce4]/20 backdrop-blur-sm rounded-full text-[#2e8ce4] hover:text-white hover:bg-[#2e8ce4]/60 transition-all duration-300"
                  aria-label="Visit my GitHub profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/ansh-kumar-a08461253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2e8ce4]/20 backdrop-blur-sm rounded-full text-[#2e8ce4] hover:text-white hover:bg-[#2e8ce4]/60 transition-all duration-300"
                  aria-label="Visit my LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:anshkumar3931@gmail.com"
                  className="p-3 bg-[#2e8ce4]/20 backdrop-blur-sm rounded-full text-[#2e8ce4] hover:text-white hover:bg-[#2e8ce4]/60 transition-all duration-300"
                  aria-label="Send me an email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </motion.div>
            </div>

            {/* Right side - Profile Image/Animation */}
            <div className="hidden lg:block relative z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Animated background circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-96 h-96 border border-red-500/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-80 h-80 border border-red-500/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 border border-red-500/40 rounded-full"
                  />
                </div>

                {/* Profile Image Placeholder */}
                <div className="relative z-10 w-80 h-80 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center border-4 border-red-500">
                    <span className="text-6xl font-bold text-red-500">AK</span>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold">JS</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-red-500 font-bold">TS</span>
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -left-8 w-12 h-12 bg-red-800 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-sm">React</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
      
      <WaveDivider />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

/**
 * Animated wave divider component for section transitions
 */
export const WaveDivider: React.FC = memo(() => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-5 pointer-events-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 150"
        preserveAspectRatio="none"
        className="w-full space-x-reverse h-auto"
      >
        <path
          d="M321.39,80.44c58-15.79,114.16-35.13,172-50.86,82.39-20.72,168.19-22.73,250.45-3.39C823.78,40,906.67,90,985.66,110.83c70.05,20.48,146.53,30.09,214.34,8V0H0V35.35A600.21,600.21,0,0,0,321.39,80.44Z"
          className="fill-current text-red-900/40"
        />

        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-current text-red-900"
        />
      </svg>
    </div>
  );
});

WaveDivider.displayName = 'WaveDivider';
