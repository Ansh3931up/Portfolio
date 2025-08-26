"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Search, Menu, X } from 'lucide-react'
import { Button } from "./ui/button"
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'


// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable)
}

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
  // Refs for GSAP animations
  const navRef = useRef<HTMLElement>(null)
  const centerTextRef = useRef<HTMLDivElement>(null)
  const draggableButtonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // GSAP animations for bottom taskbar
  useEffect(() => {
    if (mounted && draggableButtonsRef.current) {
      // Initial animation for taskbar - faster loading
      gsap.fromTo(draggableButtonsRef.current, 
        { 
          scale: 0.8, 
          opacity: 0, 
          y: 100
        },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }
      )

      // Animate taskbar items with stagger - reduced delays
      gsap.fromTo('.taskbar-item',
        { 
          opacity: 0, 
          y: 30,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        }
      )
    }
  }, [mounted])

  // GSAP animations
  useEffect(() => {
    if (!mounted || !navRef.current || !centerTextRef.current) return

    // Animate center text on mount - faster loading
    gsap.fromTo(centerTextRef.current, 
      { 
        scale: 0.8, 
        opacity: 0,
        rotation: -5
      },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0,
        duration: 0.8,
        ease: "power2.out"
      }
    )

    // Animate navigation items - faster loading
    const navItems = navRef.current.querySelectorAll('.nav-item')
    gsap.fromTo(navItems,
      { 
        y: -20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
      }
    )

    // Setup draggable buttons
    if (draggableButtonsRef.current) {
      const buttons = draggableButtonsRef.current.querySelectorAll('.draggable-btn')
      buttons.forEach((btn) => {
        Draggable.create(btn, {
          type: "x,y",
          bounds: "body",
          inertia: true,
          onDragStart: function() {
            gsap.to(this.target, { scale: 1.1, duration: 0.2 })
          },
          onDragEnd: function() {
            gsap.to(this.target, { scale: 1, duration: 0.2 })
          }
        })
      })
    }
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

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // You can implement search functionality here
      console.log('Searching for:', searchQuery)
      setSearchQuery('')
    }
  }

  if (!mounted) return null

  return (
    <header className="bg-background w-full">
      {/* Draggable Floating Buttons */}
     

      {/* Main Navigation - Modern Capsule Design */}
      <nav ref={navRef} className="py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-0 shadow-2xl border border-primary/20">
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
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-32 bg-white/20 text-white placeholder-white/70 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                  >
                    <Search size={16} />
                  </button>
                </div>

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

            {/* Mobile Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-red-accent/50 focus:border-red-accent/50 transition-all duration-300"
              />
              <button
                onClick={handleSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                <Search size={22} />
              </button>
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
              <button className="block w-full py-4 px-4 text-white/80 hover:text-white font-medium text-center rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/20 hover:border-white/30">
                Login
              </button>
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

