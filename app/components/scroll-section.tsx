'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollSection({ children, className = '', delay = 0 }: ScrollSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.2, 
        delay: delay * 0.05, 
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
