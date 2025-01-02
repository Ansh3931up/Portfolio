"use client"

import { motion } from "framer-motion"

export function HireMe() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-primary text-primary-foreground text-center"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-newspaper-heading text-4xl font-bold mb-4">EXTRA! EXTRA!</h2>
        <p className="font-newspaper-body text-xl mb-8">Talented Developer Now Available for Hire!</p>
        <a
          href="#contact"
          className="inline-block bg-background text-foreground font-newspaper-heading py-2 px-6 text-lg hover:bg-secondary transition-colors duration-300"
        >
          Reach Out Now
        </a>
      </div>
    </motion.section>
  )
}

