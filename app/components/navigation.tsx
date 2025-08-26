"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "./ui/button"




export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  
  // Refs for GSAP animations
  const navRef = useRef<HTMLElement>(null)
  const centerTextRef = useRef<HTMLDivElement>(null)
  const draggableButtonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Framer Motion animations for bottom taskbar
  useEffect(() => {
    if (mounted && draggableButtonsRef.current) {
      // Taskbar animations will be handled by Framer Motion
    }
  }, [mounted])

  // Framer Motion animations
  useEffect(() => {
    if (!mounted || !navRef.current || !centerTextRef.current) return
    // Animations will be handled by Framer Motion components
  }, [mounted])

  const handleNavigation = (sectionId: string) => {
    setMobileMenuOpen(false)
    
    if (!window.location.pathname.match(/^\/($|#)/)) {
      window.location.href = `/#${sectionId.toLowerCase()}`
      return
    }
    
    const element = document.getElementById(sectionId.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  

  if (!mounted) return null

  return (
    <header className="bg-background w-full">
      {/* Draggable Floating Buttons */}
     

      {/* Main Navigation - Modern Capsule Design */}
      <nav ref={navRef} className="py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#521b09] backdrop-blur-sm rounded-full p-0 shadow-2xl border border-primary/20">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
              {/* Left Navigation Items */}
              <div className="hidden lg:flex items-center space-x-6">
                {[
                  "What's Included",
                  "Stories",
                  "Our Why",
                  "FAQs"
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigation(item.toLowerCase().replace(/\s+/g, '-'))}
                    className="nav-item text-white/80 hover:text-white font-medium text-sm transition-all duration-300 hover:scale-105"
                  >
                    {item}
                  </button>
                ))}
              </div>
              
              {/* Center Brand Name */}
              <div 
                ref={centerTextRef}
                className="bg-white  bg-clip-text text-transparent font-bold text-2xl tracking-wider"
              ><Link href="/">
                ANSH
                </Link>
              </div>
              {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center ">
        <Button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-red-accent/20 backdrop-blur-sm border border-red-accent/30 text-white rounded-full px-6 py-3 hover:bg-red-accent/30 transition-all duration-300 shadow-lg"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

              {/* Right Action Buttons */}
              <div className="hidden lg:flex items-center space-x-4">

                <button className="nav-item text-white/80 hover:text-white font-medium text-sm transition-all duration-300">
                <img 
                  src="/faceimage.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-3 border-red-500 shadow-lg"
                />
                </button>
                                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="nav-item bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Contact
                  </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      



      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl mx-4 mb-4 shadow-2xl"
        >
          <nav className="py-6 px-6">
            {/* Mobile Profile Image */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <img 
                  src="/faceimage.png"
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-3 border-red-500 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">Welcome Back</h3>
                <p className="text-white/70 text-sm">Ready to explore?</p>
              </div>
            </div>

            

            {/* Navigation Items */}
            <div className="space-y-2 mb-6">
              {[
                "What's Included",
                "Stories",
                "Our Why",
                "FAQs"
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="block w-full py-4 px-4 text-white/90 hover:text-white font-medium text-left rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block w-full bg-gradient-to-r from-red-accent to-orange-500 hover:from-red-accent/90 hover:to-orange-500/90 text-white py-4 px-4 rounded-xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-red-accent/25 cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

