"use client"

import { motion } from "framer-motion"

export function NewsTicker() {
  return (
    <div className="bg-[#2c1810] text-[#faf7f2] py-2 overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="whitespace-nowrap font-newspaper-body text-sm"
        >
          BREAKING NEWS: Innovative Developer Revolutionizes Web Design • 
          Cutting-Edge Projects Unveiled • Clients Rave About Exceptional Results • 
          Latest Project Exceeds Performance Benchmarks • Now Accepting New Project Inquiries • 
          Special Collaboration Opportunities Available • Portfolio Updated with Latest Work •
          New Technology Stack Implemented • Client Satisfaction Reaches All-Time High
        </motion.div>
      </div>
    </div>
  )
}

