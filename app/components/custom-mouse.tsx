'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function CustomMouse() {
  const mouseRef = useRef<HTMLDivElement>(null)
  const mouseInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mouseRef.current || !mouseInnerRef.current) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => {
      gsap.to(mouseRef.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(mouseRef.current, { 
        scale: 0, 
        opacity: 0, 
        duration: 0.3,
        ease: "power2.out"
      })
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      // Smooth following with GSAP
      currentX = gsap.utils.interpolate(currentX, mouseX, 0.1)
      currentY = gsap.utils.interpolate(currentY, mouseY, 0.1)

      if (mouseRef.current) {
        gsap.set(mouseRef.current, {
          x: currentX - 25, // Center the pointer
          y: currentY - 25
        })
      }

      if (mouseInnerRef.current) {
        gsap.set(mouseInnerRef.current, {
          x: currentX - 5, // Center the inner pointer
          y: currentY - 5
        })
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Outer mouse pointer */}
      <div
        ref={mouseRef}
        className="fixed pointer-events-none z-[9999] w-12 h-12 rounded-full border-2 border-primary/50 bg-primary/20 backdrop-blur-sm mix-blend-difference transition-all duration-300 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          scale: 0
        }}
      />
      
      {/* Inner mouse pointer */}
      <div
        ref={mouseInnerRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-primary shadow-lg"
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  )
}
