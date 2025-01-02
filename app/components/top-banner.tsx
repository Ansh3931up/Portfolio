"use client"

import { Search, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from './ui/button'

export function TopBanner() {
  const { theme, setTheme } = useTheme()
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="w-full bg-[#2c1810] text-[#faf7f2] text-xs">
      <div className="container mx-auto px-4 py-1 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-4 md:gap-8">
          <span>{currentDate}</span>
          <span className="hidden sm:inline">Edition: Digital</span>
          <span className="hidden md:inline">Weather: Always Coding</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1 hover:text-[#faf7f2]/70 transition-colors"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </Button>
          <Button className="hover:text-[#faf7f2]/70 transition-colors">
            <Search size={14} />
          </Button>
          <Link 
            href="#subscribe" 
            className="hover:text-[#faf7f2]/70 transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  )
}

