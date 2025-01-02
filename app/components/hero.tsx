"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import image1 from '../../assests/my-image_enhanced.png'

export function Hero() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] bg-background dark:bg-black border-b-2 border-primary">
      {/* Color Dots - Responsive sizing */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#C6A07D]" />
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#8B4513]" />
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#2c1810]" />
      </div>

      {/* Special Issue Banner - Responsive text */}
      <div className="absolute top-0 left-0 bg-primary text-primary-foreground py-1 sm:py-2 px-2 sm:px-4 z-10">
        <span className="font-newspaper-heading text-xs sm:text-sm tracking-wider">SPECIAL ISSUE</span>
      </div>

      <div className="container mx-auto px-4 pt-8 sm:pt-12 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Text Content - Responsive typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Decorative Corner - Responsive sizing */}
            <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-primary opacity-50" />
            
            <div className="relative z-10">
              <h1 className="font-newspaper-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-4 sm:mb-6">
                <span className="block text-base sm:text-xl md:text-2xl mb-2 text-primary/70">
                  {currentDate} Edition
                </span>
                DIGITAL
                <br />
                CRAFTSMAN
              </h1>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg md:text-xl font-newspaper-body text-muted-foreground border-l-4 border-primary pl-4">
                  A masterful celebration of modern web development, 
                  showcasing the artistry, the passion, and the innovation 
                  that drives the digital frontier.
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground font-newspaper-body">
                  <span className="px-2 sm:px-3 py-1 border border-primary">Featured Developer</span>
                  <span className="px-2 sm:px-3 py-1 border border-primary">Full-Stack Engineer</span>
                </div>
              </div>
            </div>

            {/* Decorative Corner - Responsive sizing */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-primary opacity-50" />
          </motion.div>

          {/* Image with Overlay - Responsive sizing and layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] bg-gradient-to-b from-background to-transparent ">
              <Image
                src={image1}
                alt="Featured Developer"
                layout="fill"
                objectFit="cover"
                className="mix-blend-multiply dark:bg-black dark:mix-blend-difference"
                priority
              />
              {/* Text Overlay - Responsive typography */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background/90 to-transparent">
                <h2 className="font-newspaper-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">
                  The Future of Web Development
                </h2>
                <p className="font-newspaper-body text-xs sm:text-sm text-muted-foreground">
                  Pushing boundaries with modern technologies
                </p>
              </div>
            </div>

            {/* Issue Details - Responsive positioning and text */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-primary text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 rotate-3">
              <span className="font-newspaper-heading text-xs sm:text-sm">Vol. MMXXIII</span>
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-px bg-primary" />
          
          {[
            { label: "Projects Delivered", value: "20+" },
            { label: "Years Experience", value: "0.5+" },
            { label: "Technologies", value: "15+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="font-newspaper-heading text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                {stat.value}
              </p>
              <p className="font-newspaper-body text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Quote - Responsive typography */}
        <div className="mt-8 sm:mt-12 text-center">
          <blockquote className="font-newspaper-body text-base sm:text-lg italic text-muted-foreground">
            "Crafting digital experiences that leave a lasting impression"
          </blockquote>
        </div>
      </div>
    </section>
  )
}

