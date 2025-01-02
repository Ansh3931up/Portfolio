"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Revolutionary E-Commerce Platform Disrupts Online Shopping",
    description: "In a groundbreaking move, a new e-commerce platform has emerged, promising to revolutionize the way people shop online. With its innovative features and user-centric design, this platform is set to challenge industry giants and redefine customer expectations.",
    image: "/placeholder.svg",
    date: "June 15, 2023",
  },
  {
    title: "AI-Powered Analytics Tool Transforms Business Intelligence",
    description: "A cutting-edge AI-powered analytics tool is making waves in the business world, offering unprecedented insights and predictive capabilities. Companies adopting this technology are reporting significant improvements in decision-making processes and operational efficiency.",
    image: "/placeholder.svg",
    date: "July 3, 2023",
  },
  {
    title: "Sustainable Tech Initiative Paves the Way for Green Computing",
    description: "As environmental concerns take center stage, a new sustainable tech initiative is leading the charge in green computing. This innovative approach combines energy-efficient hardware with eco-friendly software practices, setting a new standard for the tech industry.",
    image: "/placeholder.svg",
    date: "August 22, 2023",
  },
]

export function Projects() {
  return (
    <section className="py-12 border-t-2 border-b-2 border-[#2c1810]">
      <h2 className="font-newspaper-heading text-5xl font-bold mb-8 text-center">
        BREAKING NEWS: LATEST PROJECTS
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-5 lg:col-span-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale"
                />
              </div>
              <p className="mt-2 text-xs font-newspaper-body text-[#2c1810]/60">{project.date}</p>
            </div>
            <div className="md:col-span-7 lg:col-span-8">
              <h3 className="font-newspaper-heading text-3xl font-bold mb-4">{project.title}</h3>
              <p className="font-newspaper-body text-base leading-relaxed">{project.description}</p>
              <a href="#" className="inline-block mt-4 font-newspaper-heading text-sm underline">Read more</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

