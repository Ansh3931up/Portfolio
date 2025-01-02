"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"

interface LayeredSectionProps {
  children: ReactNode
  className?: string
}

export function LayeredSection({ children, className }: LayeredSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95])

  return (
    <motion.section
      ref={ref}
      className={`relative bg-[#faf7f2] text-[#2c1810] border-b-2 border-[#2c1810] ${className}`}
      style={{ opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </motion.section>
  )
}

