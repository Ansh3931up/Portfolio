"use client"

import { motion } from "framer-motion"

export function TopAd() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-2 border-[#2c1810] mx-4 my-6"
    >
      <div className="text-center py-8 px-4">
        <p className="font-newspaper-heading text-xs mb-2">ADVERTISEMENT</p>
        <h2 className="font-newspaper-heading text-3xl md:text-4xl mb-2">
          HIRE A DEVELOPER TODAY!
        </h2>
        <p className="font-newspaper-body text-lg mb-4">
          Limited Time Offer - Special Rates Available
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <div className="text-center p-4 border border-[#2c1810]">
            <p className="font-bold">Frontend</p>
            <p className="text-sm">React & Next.js</p>
          </div>
          <div className="text-center p-4 border border-[#2c1810]">
            <p className="font-bold">Backend</p>
            <p className="text-sm">Node & APIs</p>
          </div>
          <div className="text-center p-4 border border-[#2c1810]">
            <p className="font-bold">Full Stack</p>
            <p className="text-sm">End-to-End</p>
          </div>
        </div>
        <button className="mt-6 bg-[#2c1810] text-[#faf7f2] px-8 py-2 font-newspaper-heading hover:bg-[#2c1810]/80 transition-colors">
          CONTACT NOW
        </button>
      </div>
    </motion.div>
  )
}

