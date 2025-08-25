'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function BottomNavigation() {
  const [mounted, setMounted] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [showResume, setShowResume] = useState(false)
  const taskbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const heroHeight = window.innerHeight
      setIsHeroVisible(scrollTop < heroHeight)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // GSAP animations for bottom taskbar
  useEffect(() => {
    if (mounted && taskbarRef.current && !isHeroVisible) {
      // Animate taskbar appearance when leaving hero
      gsap.fromTo(taskbarRef.current, 
        { 
          opacity: 0, 
          y: 100
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      )

      // Animate taskbar items with stagger
      gsap.fromTo('.taskbar-item',
        { 
          opacity: 0, 
          y: 20
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      )
    }
  }, [mounted, isHeroVisible])



  // Don't render if still in hero section
  if (isHeroVisible) {
    return null
  }

  return (
    <div 
      ref={taskbarRef}
      className="bottom-taskbar max-w-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="flex items-center justify-center max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 min-w-0">
        {/* Social Media & Resume Icons */}
        <div className="flex items-center space-x-3 sm:space-x-2 md:space-x-2 lg:space-x-2 w-full justify-evenly">
          {/* Resume Icon */}
          <button 
            onClick={() => {
              console.log('Resume button clicked');
              setShowResume(true);
            }}
            onMouseDown={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            className="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform select-none touch-manipulation"
            title="View Resume"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/25 flex-shrink-0">
              <img src="/resume.png" alt="Resume" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-[11px] sm:text-xs text-white/80 mt-2 whitespace-nowrap font-medium">
              Resume
            </span>
          </button>

          {/* GitHub Icon */}
          <a 
            href="/github" 
            onMouseDown={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            className="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform select-none touch-manipulation"
            title="GitHub Profile"
          >
                              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/25 border border-gray-600 flex-shrink-0">
                    <img src="/git.png" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
            <span className="text-[11px] sm:text-xs text-white/80 mt-2 whitespace-nowrap font-medium">
              GitHub
            </span>
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="/linkedin" 
            onMouseDown={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            className="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform select-none touch-manipulation"
            title="LinkedIn Profile"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex-shrink-0">
              <img src="/Linkedin.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-[11px] sm:text-xs text-white/80 mt-2 whitespace-nowrap font-medium">
              LinkedIn
            </span>
          </a>

          {/* Gmail Icon */}
          <button 
            onClick={() => {
              console.log('Contact button clicked');
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseDown={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            className="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform select-none touch-manipulation"
            title="Contact Section"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/25 flex-shrink-0">
              <img src="/gmail.png" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-[11px] sm:text-xs text-white/80 mt-2 whitespace-nowrap font-medium">
              Contact
            </span>
          </button>

          {/* Project Icon */}
          <button 
            onClick={() => {
              console.log('Projects button clicked');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseDown={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            className="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform select-none touch-manipulation"
            title="View Projects"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex-shrink-0">
              <img src="/project.png" alt="Projects" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-[11px] sm:text-xs text-white/80 mt-2 whitespace-nowrap font-medium">
              Projects
            </span>
          </button>
        </div>
      </div>

      {/* Resume Dialog */}
      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-[95vw] h-[95vh] p-0 sm:max-w-[90vw] sm:w-[90vw] lg:max-w-[80vw] lg:w-[80vw] xl:max-w-[70vw] xl:w-[70vw]">
          <DialogHeader className="bg-gradient-to-r from-red-600 to-red-500 p-4 sm:p-6 m-0 rounded-t-lg">
            <DialogTitle className="text-white text-lg sm:text-xl lg:text-2xl font-bold">Resume</DialogTitle>
          </DialogHeader>
          <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto h-[calc(95vh-80px)] sm:h-[calc(95vh-100px)] lg:h-[calc(95vh-120px)]">
            <iframe 
              src="https://drive.google.com/file/d/1YyFT-E3qnjJ8F_CxcNalUW565lX5ZkcV/preview"
              className="w-full h-full border-0 rounded-lg"
              title="Resume"
              allow="autoplay"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
