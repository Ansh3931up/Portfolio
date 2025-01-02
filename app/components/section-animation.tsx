"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface SectionProps {
  children: React.ReactNode
  className?: string
  index: number
}

export function AnimatedSection({ children, className, index }: SectionProps) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0.95, 1, 1, 0.95]
  )
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    isMobile 
      ? [0, 0, 0, 0] // No horizontal movement on mobile
      : [index % 2 === 0 ? -50 : 50, 0, 0, index % 2 === 0 ? 50 : -50]
  )
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    isMobile
      ? [0, 0, 0, 0] // No rotation on mobile
      : [index % 2 === 0 ? 15 : -15, 0, 0, index % 2 === 0 ? -15 : 15]
  )

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        x,
        rotateY,
        zIndex: 10 - index,
        position: "relative",
      }}
      className={`
        min-h-[70vh] md:min-h-[80vh] 
        perspective-1000 
        px-4 md:px-8 
        ${className}
      `}
    >
      <motion.div className="
        transform-gpu
        py-4 md:py-6
        max-w-7xl 
        mx-auto
      ">
        {children}
      </motion.div>
    </motion.div>
  )
}
