"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Moon, Sun, Search, Menu, X, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation'
import { SearchableItem, searchContent } from '@/utils/search'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchableItem[]>([])
  const router = useRouter()

  // Example searchable items - replace with your actual content
  const searchableItems: SearchableItem[] = [
    // About section
    {
      id: 'about',
      title: 'About Me',
      content: 'Your about section content...',
      type: 'about',
      url: '#about'
    },
    
    // Projects
    {
      id: 'project-1',
      title: 'Project Name',
      content: 'Project description...',
      type: 'project',
      url: '#projects'
    },
    
    // Skills
    {
      id: 'skill-1',
      title: 'Web Development',
      content: 'React, Next.js, TypeScript...',
      type: 'skill',
      url: '#skills'
    },
    
    // Testimonials
    {
      id: 'testimonial-1',
      title: 'Client Name',
      content: 'Testimonial content...',
      type: 'testimonial',
      url: '#testimonials'
    }
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const results = searchContent(searchQuery, searchableItems)
    setSearchResults(results)
  }, [searchQuery])

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleNavigation = (sectionId: string) => {
    // Close mobile menu if open
    setMobileMenuOpen(false)
    
    // Check if we're not on the home page
    if (!window.location.pathname.match(/^\/($|#)/)) {
      window.location.href = `/#${sectionId.toLowerCase()}`
      return
    }
    
    // If on home page, smooth scroll to section
    const element = document.getElementById(sectionId.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSearchNavigation = (url: string) => {
    setSearchQuery('') // Clear search
    
    // Remove the '#' from the url to get the section id
    const sectionId = url.replace('#', '')
    
    // Check if we're not on the home page
    if (!window.location.pathname.match(/^\/($|#)/)) {
      window.location.href = `/#${sectionId.toLowerCase()}`
      return
    }
    
    // If on home page, smooth scroll to section
    const element = document.getElementById(sectionId.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      // Navigate to the first result when pressing enter
      handleSearchNavigation(searchResults[0].url)
    }
  }

  if (!mounted) return null

  return (
    <header className="bg-background border-b-2 border-primary w-full">
      {/* Top Bar - More responsive */}
      <div className="border-b border-primary">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1 sm:py-2 flex justify-between items-center text-[10px] sm:text-xs font-newspaper-body">
          <div className="hidden sm:flex items-center gap-2 md:gap-4">
            <span className="hidden lg:inline">{currentDate}</span>
            <span className="hidden md:inline">Edition: Digital</span>
            <span className="hidden md:inline">Weather: Always Coding</span>
          </div>
          {/* Social Icons - Mobile Only */}
      <div className=" flex md:mx-auto justify-center gap-4 py-2 ">
        <Link href="/github" className="text-primary hover:text-primary/70">
          <Github size={20} />
        </Link>
        <Link href="/linkedin" className="text-primary hover:text-primary/70">
          <Linkedin size={20} />
        </Link>
       
      </div>
          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                className="
                  w-32 sm:w-48
                  py-1 px-2 sm:py-1.5 sm:px-3
                  border border-primary rounded-md
                  text-xs sm:text-sm
                  bg-background
                  focus:outline-none focus:ring-1 focus:ring-primary
                  dark:bg-gray-800 dark:border-gray-600
                  dark:text-gray-100 dark:placeholder-gray-400
                  transition-colors duration-200
                "
              />
              
              {/* Search Results Dropdown */}
              {searchQuery && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background dark:bg-gray-800 border border-primary dark:border-gray-600 rounded-md shadow-lg z-50">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSearchNavigation(result.url)}
                      className="w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-primary/10 dark:hover:bg-gray-700"
                    >
                      <div className="font-bold">{result.title}</div>
                      <div className="text-primary/70 dark:text-gray-400 truncate">
                        {result.content.substring(0, 50)}...
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background dark:bg-gray-800 border border-primary dark:border-gray-600 rounded-md shadow-lg z-50 p-3 text-xs sm:text-sm text-center text-primary/70 dark:text-gray-400">
                  No results found
                </div>
              )}
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-primary/70 transition-colors p-1 sm:p-2"
            >
              {theme === "dark" ? 
                <Sun size={12} className="sm:w-4 sm:h-4" /> : 
                <Moon size={12} className="sm:w-4 sm:h-4" />
              }
            </button>
            <Link href="#contact" className="hidden sm:inline-block hover:text-primary/70 transition-colors">
              Subscribe
            </Link>
            <Button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-1 sm:p-2"
            >
              {mobileMenuOpen ? 
                <X size={16} className="sm:w-5 sm:h-5" /> : 
                <Menu size={16} className="sm:w-5 sm:h-5" />
              }
            </Button>
          </div>
        </div>
      </div>

      

      {/* Main Header - More responsive */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-6 text-center">
        <div className="flex items-center justify-center relative">
          <div className="hidden sm:block text-[10px] sm:text-sm font-newspaper-body absolute left-0">
            Vol. MMXXIII, No. 42
          </div>
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-newspaper-title tracking-tighter px-2 sm:px-4"
            whileHover={{ scale: 1.05 }}
          >
            The Developer Times
          </motion.h1>
          <div className="hidden sm:block text-[10px] sm:text-sm font-newspaper-body absolute right-0">
            Price: Your Attention
          </div>
        </div>
        <p className="font-newspaper-body text-[10px] xs:text-xs sm:text-sm mt-1 sm:mt-2">
          YOUR TRUSTED SOURCE FOR DEVELOPMENT EXCELLENCE
        </p>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-primary absolute w-full bg-background z-50 shadow-lg"
        >
          <nav className="py-2 sm:py-4 px-2 sm:px-4">
            {[
              "HEADLINES",
              "ABOUT",
              "PROJECTS",
              "SKILLS",
              "TESTIMONIALS",
              "CONTACT"
            ].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="block w-full py-2 font-newspaper-heading text-xs sm:text-sm hover:text-primary/70 transition-colors text-center"
              >
                {item}
              </button>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-b border-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-4 lg:space-x-8 py-2 md:py-3">
            {[
              "HEADLINES",
              "ABOUT",
              "PROJECTS",
              "SKILLS",
              "TESTIMONIALS",
              "CONTACT"
            ].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="font-newspaper-heading text-xs lg:text-sm hover:text-primary/70 transition-colors whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Breaking News Ticker - Responsive text size */}
      <div className="bg-primary text-primary-foreground py-1 overflow-hidden">
        <motion.div
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="whitespace-nowrap font-newspaper-body text-[10px] xs:text-xs sm:text-sm"
        >
          BREAKING NEWS: New portfolio features launched • Client satisfaction reaches all-time high • Latest project exceeds performance benchmarks • Now accepting new project inquiries • Special collaboration opportunities available
        </motion.div>
      </div>
    </header>
  )
}

