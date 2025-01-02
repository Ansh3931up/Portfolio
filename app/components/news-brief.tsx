"use client"

import { motion } from "framer-motion"

interface NewsBriefProps {
  title: string
  content: string
  date?: string
}

export function NewsBrief({ title, content, date }: NewsBriefProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="border-b border-dotted border-[#2c1810] pb-3 last:border-0"
    >
      <h4 className="font-newspaper-heading font-bold mb-1">{title}</h4>
      <p className="font-newspaper-body text-sm">{content}</p>
      {date && (
        <p className="font-newspaper-body text-xs text-[#2c1810]/70 mt-1">{date}</p>
      )}
    </motion.div>
  )
}

 