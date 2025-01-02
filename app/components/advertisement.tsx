"use client"

import { motion } from "framer-motion"

export function Advertisement() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-2 border-[#2c1810] p-4 text-center bg-[#faf7f2]"
    >
      <p className="font-newspaper-heading text-sm mb-2">ADVERTISEMENT</p>
      <div className="space-y-2">
        <p className="font-newspaper-heading text-2xl">HIRE ME TODAY!</p>
        <p className="font-newspaper-body text-sm">Limited Time Offer</p>
        <p className="font-newspaper-body text-xs">Contact for Special Rates</p>
        <button className="bg-[#2c1810] text-[#faf7f2] px-4 py-2 text-sm font-newspaper-heading hover:bg-[#2c1810]/80 transition-colors">
          GET IN TOUCH
        </button>
      </div>
    </motion.div>
  )
}

