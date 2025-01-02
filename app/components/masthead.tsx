"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Masthead() {
  return (
    <div className="border-b-4 border-[#2c1810]">
      <div className="container mx-auto px-4 py-6">
        {/* Top Row */}
        <div className="flex justify-between items-center mb-4 text-xs font-newspaper-body">
          <div>Vol. MMXXIII, No. 42</div>
          <div>Price: Your Attention</div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-4">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-newspaper-title tracking-tighter"
            whileHover={{ scale: 1.02 }}
          >
            The Developer Times
          </motion.h1>
          <p className="font-newspaper-body text-sm mt-2">
            YOUR TRUSTED SOURCE FOR DEVELOPMENT EXCELLENCE
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center text-xs border-t border-[#2c1810] pt-4">
          <div>
            <strong>INSIDE TODAY</strong>
            <p>Latest Projects</p>
          </div>
          <div>
            <strong>TECH STACK</strong>
            <p>React & Next.js</p>
          </div>
          <div>
            <strong>EXPERIENCE</strong>
            <p>5+ Years</p>
          </div>
          <div className="hidden md:block">
            <strong>CLIENTS</strong>
            <p>Worldwide</p>
          </div>
          <div className="hidden md:block">
            <strong>AVAILABILITY</strong>
            <p>Open to Work</p>
          </div>
          <div className="hidden md:block">
            <strong>LOCATION</strong>
            <p>Remote</p>
          </div>
        </div>
      </div>
    </div>
  )
}

