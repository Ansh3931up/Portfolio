// Scroll utilities for controlling scroll speed and ensuring smooth animations

// Throttle function to limit scroll event frequency
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function(this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Debounce function to delay execution until scroll stops
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return function(this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// Smooth scroll with controlled speed
export function smoothScrollTo(element: HTMLElement | string, duration: number = 1000) {
  const target = typeof element === 'string' ? document.querySelector(element) : element
  if (!target) return

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)
}

// Easing function for smooth scroll
function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1) return c / 2 * t * t * t + b
  t -= 2
  return c / 2 * (t * t * t + 2) + b
}

// Scroll speed controller
export class ScrollSpeedController {
  private isEnabled: boolean = true
  private maxSpeed: number = 50 // pixels per frame
  private currentSpeed: number = 0
  private lastScrollTop: number = 0
  private lastScrollTime: number = 0

  constructor(maxSpeed: number = 50) {
    this.maxSpeed = maxSpeed
    this.init()
  }

  private init() {
    this.lastScrollTop = window.pageYOffset
    this.lastScrollTime = Date.now()
  }

  // Enable/disable scroll speed control
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled
  }

  // Check if scroll speed is within limits
  checkScrollSpeed(): boolean {
    if (!this.isEnabled) return true

    const currentTime = Date.now()
    const currentScrollTop = window.pageYOffset
    const timeDiff = currentTime - this.lastScrollTime
    const scrollDiff = Math.abs(currentScrollTop - this.lastScrollTop)

    if (timeDiff > 0) {
      this.currentSpeed = scrollDiff / timeDiff * 16.67 // Convert to pixels per frame (60fps)
    }

    this.lastScrollTop = currentScrollTop
    this.lastScrollTime = currentTime

    return this.currentSpeed <= this.maxSpeed
  }

  // Get current scroll speed
  getCurrentSpeed(): number {
    return this.currentSpeed
  }

  // Set maximum allowed scroll speed
  setMaxSpeed(speed: number) {
    this.maxSpeed = speed
  }
}

// Intersection Observer with scroll speed control
export function createScrollObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {},
  scrollController?: ScrollSpeedController
) {
  const observer = new IntersectionObserver((entries) => {
    if (scrollController && !scrollController.checkScrollSpeed()) {
      return // Skip callback if scrolling too fast
    }
    callback(entries)
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  })

  return observer
}

// GSAP scroll trigger with speed control
export function createGSAPScrollTrigger(
  element: HTMLElement,
  animation: gsap.core.Timeline | gsap.core.Tween,
  scrollController?: ScrollSpeedController,
  options: {
    start?: string
    end?: string
    scrub?: boolean | number
    markers?: boolean
  } = {}
) {
  if (typeof window === 'undefined' || !window.gsap) return

  // Note: ScrollTrigger needs to be imported separately in components that use this
  // This is a utility function that assumes ScrollTrigger is available

  return {
    trigger: element,
    animation: animation,
    start: options.start || "top 80%",
    end: options.end || "bottom 20%",
    scrub: options.scrub || false,
    markers: options.markers || false,
    onUpdate: () => {
      if (scrollController && !scrollController.checkScrollSpeed()) {
        // Pause animation if scrolling too fast
        animation.pause()
      } else {
        // Resume animation if scroll speed is acceptable
        if (animation.paused()) {
          animation.resume()
        }
      }
    }
  }
}

// Global scroll speed controller instance
export const globalScrollController = new ScrollSpeedController(50)

// Initialize scroll speed control globally
if (typeof window !== 'undefined') {
  let scrollTimeout: NodeJS.Timeout
  let lastScrollTime = 0
  const minScrollInterval = 16 // Minimum 16ms between scroll events (~60fps)

  const handleScroll = throttle(() => {
    // If Locomotive or Lenis is active, do not process here
    if ((window as any).__locomotiveActive || (window as any).__lenisActive) {
      lastScrollTime = Date.now()
      return
    }
    // If Lenis is active, avoid double-handling scroll
    if (typeof window !== 'undefined' && (window as any).__lenisActive) {
      lastScrollTime = Date.now()
      return
    }
    const now = Date.now()
    const timeSinceLastScroll = now - lastScrollTime
    
    // Enforce minimum scroll interval
    if (timeSinceLastScroll < minScrollInterval) {
      return
    }
    
    if (!globalScrollController.checkScrollSpeed()) {
      // Add visual feedback for fast scrolling
      document.body.classList.add('fast-scroll-warning')
      
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('fast-scroll-warning')
      }, 1000)
    }
    
    lastScrollTime = now
  }, 16) // ~60fps

  // Add scroll speed restriction
  const restrictScrollSpeed = (e: Event) => {
    const now = Date.now()
    if (now - lastScrollTime < minScrollInterval) {
      e.preventDefault()
      return false
    }
    lastScrollTime = now
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  // If Lenis is active we rely on it; otherwise apply our restriction
  const attachRawHandlers = () => {
    if (!(window as any).__lenisActive) {
      window.addEventListener('wheel', restrictScrollSpeed, { passive: false })
      window.addEventListener('touchmove', restrictScrollSpeed, { passive: false })
    }
  }
  const detachRawHandlers = () => {
    window.removeEventListener('wheel', restrictScrollSpeed as any)
    window.removeEventListener('touchmove', restrictScrollSpeed as any)
  }
  // Only attach raw handlers when neither Locomotive nor Lenis is active
  const shouldAttach = !((window as any).__locomotiveActive || (window as any).__lenisActive)
  if (shouldAttach) attachRawHandlers()
  // Observe Lenis flag changes (simple polling; lightweight)
  let lastLenis = (window as any).__lenisActive
  setInterval(() => {
    const currLenis = (window as any).__lenisActive
    const currLoco = (window as any).__locomotiveActive
    if (currLenis !== lastLenis) {
      lastLenis = curr
      detachRawHandlers()
      if (!currLenis && !currLoco) attachRawHandlers()
    } else {
      // respond to loco changes as well
      const shouldAttachNow = !currLenis && !currLoco
      detachRawHandlers()
      if (shouldAttachNow) attachRawHandlers()
    }
  }, 500)
}
