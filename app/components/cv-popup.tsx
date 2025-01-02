"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useTheme } from 'next-themes'

export function CVPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground font-newspaper-heading py-2 px-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View CV
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-md" 
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl bg-card rounded-lg shadow-2xl border border-primary/20 overflow-hidden"
              style={{ height: 'calc(90vh - 2rem)' }}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-2 border-b border-primary/20 bg-card/80 backdrop-blur-sm z-10">
                <h2 className="font-newspaper-heading text-lg text-foreground">
                  Curriculum Vitae
                </h2>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-foreground rounded-lg p-1 hover:bg-primary/10 transition-colors duration-300"
                >
                  <X size={16} />
                </button>
              </div>

              {/* PDF Container */}
              <div className="w-full h-full pt-12 overflow-auto">
                <div 
                  className="min-h-full flex items-start justify-center px-4 pb-12"
                >
                  <iframe
                    src={`/resume.pdf#view=FitH&pagemode=thumbs${theme === 'dark' ? '&toolbar=0' : ''}`}
                    className="w-full bg-white dark:bg-card shadow-lg rounded"
                    style={{ 
                      border: 'none',
                      height: '100vh',
                      maxWidth: '800px'
                    }}
                    title="CV Preview"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

