"use client"

import Link from "next/link"
import { Menu } from 'lucide-react'
import { useState } from "react"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    "HEADLINES",
    "ABOUT",
    "PROJECTS",
    "SKILLS",
    "TESTIMONIALS",
    "CONTACT"
  ]

  return (
    <nav className="border-y-2 border-[#2c1810] sticky top-0 bg-[#faf7f2] z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex-1 flex justify-center space-x-8 py-3">
            {sections.map((section) => (
              <Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className="font-newspaper-heading text-sm hover:text-[#2c1810]/70 transition-colors"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-4 flex items-center gap-2"
          >
            <Menu size={20} />
            <span className="font-newspaper-heading">Menu</span>
          </button>
          
          {isMenuOpen && (
            <div className="absolute left-0 right-0 bg-[#faf7f2] border-t border-[#2c1810]">
              {sections.map((section) => (
                <Link
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="block px-4 py-3 font-newspaper-heading text-sm hover:bg-[#2c1810] hover:text-[#faf7f2] transition-colors border-b border-[#2c1810]/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

