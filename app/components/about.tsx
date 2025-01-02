"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-newspaper-heading text-3xl font-bold mb-4 border-b-2 border-[#2c1810] pb-2">
          THE STORY BEHIND THE CODE
        </h2>
        <div className="font-newspaper-body text-sm leading-snug space-y-4 columns-1 md:columns-2 gap-8">
          <p className="first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:font-bold">
            In the ever-evolving landscape of digital technology, our featured developer stands as a beacon of innovation and creativity. With a career spanning over a decade, they've honed their skills in the art of web development, mastering the intricate dance of code and design.
          </p>
          <p>
            Their journey began in the early days of the internet boom, cutting their teeth on basic HTML and CSS. As the web grew more complex, so did their skillset. They dove headfirst into the world of JavaScript, embracing its power to create dynamic, interactive experiences.
          </p>
          <p>
            But it wasn't just about the code. They realized early on that true digital craftsmanship lies in the seamless blend of functionality and aesthetics. This realization led them to explore the realms of user experience and interface design, always with an eye towards creating solutions that are not just functional, but delightful to use.
          </p>
          <p>
            Today, they stand at the forefront of web development, armed with a diverse toolkit that includes React, Next.js, and a host of other cutting-edge technologies. But more than just a developer, they see themselves as a digital storyteller, weaving narratives through code and design that engage, inspire, and transform.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

