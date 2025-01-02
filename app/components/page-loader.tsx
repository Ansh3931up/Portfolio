"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import bgimage from '../../assests/news-bg.jpeg'

const greetings = [
  { hello: "Hello", welcome: "Welcome", lang: "English" },
  { hello: "नमस्ते", welcome: "स्वागत है", lang: "Hindi" },
  { hello: "Bonjour", welcome: "Bienvenue", lang: "French" },
  { hello: "Hola", welcome: "Bienvenido", lang: "Spanish" },
  { hello: "こんにちは", welcome: "ようこそ", lang: "Japanese" },
  { hello: "你好", welcome: "欢迎", lang: "Chinese" },
  { hello: "The Developer Times", welcome: "", lang: "final", isFinal: true }
]

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { theme } = useTheme()
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
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        theme === 'dark' ? 'bg-black' : 'bg-[#faf7f2]'
      }`}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: theme === 'dark' ? 0.12 : 0.35
        }}
      />

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
          className={`${greeting.isFinal ? 'text-primary' : ''} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          <div className={`font-bold ${
            greeting.isFinal 
              ? 'text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-newspaper-title tracking-tighter' 
              : 'text-4xl xs:text-5xl sm:text-6xl md:text-7xl'
          } mb-2`}>
            {greeting.hello}
          </div>
          {!greeting.isFinal && (
            <div className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl ${
              theme === 'dark' ? 'text-primary-dark' : 'text-primary'
            }`}>
              {greeting.welcome}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
} 