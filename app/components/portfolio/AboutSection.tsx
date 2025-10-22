"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";
import { BackgroundShapes } from "../ui/background-shapes";
import { Code, Target, Award, Users } from "lucide-react";

interface AboutSectionProps {
  id: string;
  forwardedRef: React.RefObject<HTMLDivElement | null>;
}

export const AboutSection: React.FC<AboutSectionProps> = memo(({ id, forwardedRef }) => {
  return (
    <section
      id={id}
      ref={forwardedRef}
      className="h-auto min-h-screen bg-black border-0 pt-24 pb-12 flex items-center relative overflow-hidden"
    >
      <BackgroundShapes />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-[#2e8ce4] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div 
            className="aspect-square w-full max-w-lg mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-[#2e8ce4]/20 to-[#252422] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2e8ce4]/10 to-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#2e8ce4]/30 to-[#252422] rounded-full flex items-center justify-center border-4 border-[#2e8ce4] shadow-xl">
                  <span className="text-4xl font-bold text-white">AK</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="text-left space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">My Journey</h3>
              <p className="text-sm sm:text-base text-gray-300">
                I&apos;m a passionate Full Stack Developer and DSA expert with a strong foundation in computer science. 
                Currently pursuing my education while building innovative solutions and contributing to open-source projects.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">My Passion</h3>
              <p className="text-sm sm:text-base text-gray-300">
                I love solving complex problems through code and creating efficient algorithms. 
                My expertise lies in full-stack development, with a particular focus on data structures and algorithms.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">My Goals</h3>
              <p className="text-sm sm:text-base text-gray-300">
                I aim to become a leading software engineer who can build scalable applications 
                and contribute to the tech community through innovative solutions and knowledge sharing.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
              <StatsCard icon={<Code className="w-6 h-6" />} value="50+" label="Projects Completed" />
              <StatsCard icon={<Target className="w-6 h-6" />} value="100+" label="Problems Solved" />
              <StatsCard icon={<Award className="w-6 h-6" />} value="2+" label="Years Experience" />
              <StatsCard icon={<Users className="w-6 h-6" />} value="5+" label="Technologies Mastered" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          className="w-full space-x-reverse h-auto"
        >
          <path
            d="M321.39,80.44c58-15.79,114.16-35.13,172-50.86,82.39-20.72,168.19-22.73,250.45-3.39C823.78,40,906.67,90,985.66,110.83c70.05,20.48,146.53,30.09,214.34,8V0H0V35.35A600.21,600.21,0,0,0,321.39,80.44Z"
            className="fill-current text-red-800/80 shadow-lg shadow-red-800/80"
          />

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current drop-shadow-xl shadow-red-600 text-red-600"
          />
        </svg>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

/**
 * Stats card component for displaying metrics
 */
const StatsCard: React.FC<StatsCardProps> = memo(({ icon, value, label }) => {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-600/20"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-white">{icon}</div>
        <h4 className="text-lg sm:text-xl font-bold text-white">{value}</h4>
      </div>
      <p className="text-sm text-gray-300">{label}</p>
    </motion.div>
  );
});

StatsCard.displayName = 'StatsCard';
