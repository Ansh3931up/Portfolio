"use client"

import { motion } from "framer-motion"

export function MovingSubheader() {
  return (
    <div className="border-y border-primary">
      <div className="overflow-hidden bg-primary text-primary-foreground py-2">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-lg font-newspaper-body">
            Breaking News: Innovative Developer Revolutionizes Web Design • Cutting-Edge Projects Unveiled • Clients Rave About Exceptional Results • Hire Now for Transformative Digital Solutions
          </span>
        </motion.div>
      </div>
      <div className="h-px bg-primary my-4 mx-8" />
    </div>
  )
}

