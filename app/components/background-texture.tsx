"use client"

import { useEffect, useState } from 'react'

export function BackgroundTexture() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 opacity-5"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='500' viewBox='0 0 1000 500'%3E%3Ctext x='0' y='20' font-family='serif' font-size='20' fill='%23000' transform='rotate(180 500 250)'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        transform: `rotate(180deg) translateY(${scrollY * 0.5}px)`,
        transition: 'transform 0.1s linear',
      }}
    ></div>
  )
}

