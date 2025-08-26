'use client'

import { useEffect, useRef } from 'react'
import { globalScrollController } from '../utils/scroll-utils'

interface ScrollControllerProps {
  children: React.ReactNode
  maxScrollSpeed?: number
  enableScrollControl?: boolean
}

export function ScrollController({ 
  children, 
  maxScrollSpeed = 50,
  enableScrollControl = true 
}: ScrollControllerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enableScrollControl) return

    // Configure scroll speed controller
    globalScrollController.setMaxSpeed(maxScrollSpeed)
    globalScrollController.setEnabled(true)

    // Add scroll event listener with throttling
    let lastScrollTop = window.pageYOffset
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollTop = window.pageYOffset
          const scrollDiff = Math.abs(currentScrollTop - lastScrollTop)
          
          // Check if scrolling is too fast
          if (scrollDiff > maxScrollSpeed) {
            // Add visual feedback
            document.body.classList.add('fast-scroll-warning')
            setTimeout(() => {
              document.body.classList.remove('fast-scroll-warning')
            }, 500)
          }
          
          lastScrollTop = currentScrollTop
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      globalScrollController.setEnabled(false)
    }
  }, [maxScrollSpeed, enableScrollControl])

  return (
    <div ref={containerRef} className="scroll-controlled">
      {children}
    </div>
  )
}

// Hook for components that need scroll control
export function useScrollControl(maxSpeed: number = 50) {
  useEffect(() => {
    globalScrollController.setMaxSpeed(maxSpeed)
    globalScrollController.setEnabled(true)

    return () => {
      globalScrollController.setEnabled(false)
    }
  }, [maxSpeed])

  return {
    isScrollingFast: () => !globalScrollController.checkScrollSpeed(),
    getCurrentSpeed: () => globalScrollController.getCurrentSpeed(),
    setMaxSpeed: (speed: number) => globalScrollController.setMaxSpeed(speed)
  }
}
