"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import bgimage from '../../assests/news-bg.jpeg'

const greetings = [
  { hello: "Hello", welcome: "Welcome", lang: "English" },
  { hello: "नमस्ते", welcome: "स्वागत है", lang: "Hindi" },
  { hello: "Bonjour", welcome: "Bienvenue", lang: "French" },
  { hello: "Hola", welcome: "Bienvenido", lang: "Spanish" },
  { hello: "こんにちは", welcome: "ようこそ", lang: "Japanese" },
  { hello: "你好", welcome: "欢迎", lang: "Chinese" },
  { hello: "ANSH", welcome: "", lang: "brand", isFinal: true, isBrand: true }
]

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev === greetings.length - 1) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 2000)
          return prev
        }
        return prev + 1
      })
    }, 600)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null
  if (!isLoading) return null

  const greeting = greetings[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-black"
    >
      {/* Spider-Man Poster Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      />

      {/* Red Theme Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-red-800/40 to-black/70"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="spider-web top-10 left-20"></div>
        <div className="spider-web top-20 right-32"></div>
        <div className="spider-web bottom-32 left-40"></div>
        <div className="spider-web bottom-20 right-20"></div>
      </div>

      <div className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          key={greeting.lang}
          initial={{ opacity: 0, y: 0 }}
          animate={greeting.isFinal ? {
            opacity: 1,
            y: [-50, -220],
            transition: {
              opacity: { duration: 0.5 },
              y: { duration: 1.5, delay: 0.5 }
            }
          } : greeting.isBrand ? {
            opacity: 1,
            y: 0,
            scale: [0.5, 1.2, 1],
            rotate: [0, 360],
            transition: {
              opacity: { duration: 0.8 },
              scale: { duration: 1.5, delay: 0.3 },
              rotate: { duration: 1.2, delay: 0.5 }
            }
          } : {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3
            }
          }}
          exit={{ 
            opacity: 0,
            transition: {
              duration: 0.2
            }
          }}
          className={`${greeting.isFinal ? 'text-white font-bold' : ''} ${greeting.isBrand ? 'bg-gradient-to-r from-red-400 via-white to-red-600 bg-clip-text text-transparent' : ''} ${
            greeting.isFinal || greeting.isBrand ? '' : 'text-white'
          }`}
        >
          <div className={`font-bold ${
            greeting.isFinal 
              ? 'text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  tracking-tighter' 
              : greeting.isBrand
              ? 'text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider'
              : 'text-4xl xs:text-5xl sm:text-6xl md:text-7xl'
          } mb-2`}>
            {greeting.hello}
          </div>
          {!greeting.isFinal && (
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-red-200 font-semibold">
              {greeting.welcome}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
} 