"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { getGitHubRepos, getGitHubUser, GitHubRepo, GitHubUser } from "../utils/github";

export function Hero() {

  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, reposData] = await Promise.all([
          getGitHubUser('Ansh3931up'),
          getGitHubRepos('Ansh3931up')
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#141111] text-white flex items-center pb-28 justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading GitHub profile...</p>
        </div>
      </main>
    );
  }

  if (!user || !repos) {
    return (
      <main className="min-h-screen bg-[#141111] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Unable to load profile data
          </h1>
          <p className="text-white/70">
            Please try refreshing the page
          </p>
        </div>
      </main>
    );
  }

  return (
    <section className="relative overflow-hidden bg-background border-b-2 pb-4 ">

      {/* Animated Background Elements (hidden on small screens) */}
      <div className="moving-lines font-bold text-white hidden sm:block">
        <div className="moving-line"></div>
        <div className="moving-line"></div>
        <div className="moving-line"></div>
        <div className="moving-line"></div>
        <div className="moving-line"></div>
        <div className="moving-line"></div>
      </div>
      
      {/* Orbital elements (hidden on small screens) */}
      <div className="orbital-container hidden sm:block">
        <div className="orbital-element"></div>
        <div className="orbital-element"></div>
        <div className="orbital-element"></div>
        <div className="orbital-element"></div>
      </div>
      
      {/* Minimal particles on mobile, full set on >= sm */}
      <div className="floating-particles sm:hidden">
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="floating-particles hidden sm:block">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="grid-pattern"></div>

      {/* Pulsing Dots (limit on mobile) */}
      <div className="pulse-dot"></div>
      <div className="pulse-dot"></div>
      <div className="pulse-dot hidden sm:block"></div>
      <div className="pulse-dot hidden sm:block"></div>
      <div className="pulse-dot hidden sm:block"></div>
      <div className="pulse-dot hidden sm:block"></div>

      {/* Glowing Orbs (only one on mobile) */}
      <div className="glow-orb"></div>
      <div className="glow-orb hidden sm:block"></div>
      <div className="glow-orb hidden sm:block"></div>

      {/* Additional Visual Elements (hidden on small screens) */}
      <div className="geometric-shapes hidden md:block">
        <div className="shape triangle"></div>
        <div className="shape square"></div>
        <div className="shape circle"></div>
        <div className="shape hexagon"></div>
      </div>

      {/* Energy Lines (hidden on small screens) */}
      <div className="energy-lines hidden md:block">
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
      </div>

      {/* Floating Cards (hidden on small screens) */}
      <div className="floating-cards hidden md:block">
        <div className="floating-card"></div>
        <div className="floating-card"></div>
        <div className="floating-card"></div>
      </div>

      <div className="container mx-auto px-4 pt-8 sm:pt-12 md:pt-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative text-center lg:text-left max-w-4xl px-4 sm:px-0 z-10 order-2 lg:order-1 flex-1"
          >
            {/* Decorative Corner - Responsive sizing */}
            <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-red-500 opacity-50" />
            
            <div className="relative z-10">
              {/* Professional Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-red-500 font-medium text-sm">Available for Projects</span>
              </div>
           
                
              {/* Main Title with Better Typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-2 sm:mb-8">
                <span className="block text-base sm:text-lg md:text-xl mb-4 text-red-500 font-poppins font-medium tracking-wide uppercase">
                  Full-Stack Developer & Problem Solver
                </span>
                <span className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-6 sm:mb-8 rubik-distressed-regular">
                  Crafting Digital
                </span>
                <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent font-poppins">
                  Excellence
                </span>
              </h1>
              
              {/* Enhanced Description */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <p className="text-base sm:text-md md:text-md lg:text-lg font-poppins text-white/90 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  I&apos;m a strategic problem solver who transforms complex challenges into elegant digital solutions. 
                  With expertise in full-stack development, I architect robust applications that not only meet 
                  requirements but exceed expectations.
                </p>
                
                
              </div>
            </div>

            {/* Decorative Corner - Responsive sizing */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-red-500 opacity-50" />
          </motion.div>

          {/* Profile Photo - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-[9999] order-1 lg:order-2"
          >
            <div className="relative inline-block">
              {/* Test with a simple colored circle first */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full border-4 border-red-500 bg-red-500 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mx-auto shadow-2xl">
                A
              </div>
              
              {/* Try the actual image */}
              <img 
                src={user.avatar_url}
                alt="GitHub Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full border-4 border-red-500 mx-auto shadow-2xl absolute top-0 left-0"
                style={{ zIndex: 9999 }}
              />  
              
              <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full border-4 border-[#1a1a1a] flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Responsive grid and typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 relative"
        >
          {/* Decorative Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-px bg-red-500" />
          
          {[
            { label: "Projects Completed", value: "25+" },
            { label: "Years Experience", value: "2+" },
            { label: "Technologies Mastered", value: "20+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-2xl sm:text-3xl font-bold group-hover:text-red-500 transition-colors font-poppins">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-poppins">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Quote - Portfolio-focused */}
        <div className="mt-8 sm:mt-12 text-center">
          <blockquote className="text-lg sm:text-xl italic text-red-500 font-poppins">
            &ldquo;Code is poetry, and every project tells a story&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}

