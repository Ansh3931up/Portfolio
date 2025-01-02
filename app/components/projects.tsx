"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import rss from '../../assests/rss.png'
import chat from '../../assests/chat.png'
import ecova from '../../assests/ecova.png'

const projects = [
  {
    title: "TransLingo - Multilingual Chat Platform",
    description: "Led the development of a real-time multilingual chat platform using WebSocket technology. Optimized RESTful APIs improving system efficiency by 15%. Integrated front-end and back-end using Tailwind CSS and JWT for responsive UI and secure authentication.",
    image: chat,
    date: "2023",
    link: "https://chat-box-iota-gold.vercel.app/"
  },
  {
    title: "Social Website for Organization",
    description: "Developed a comprehensive content management system with enhanced security features, reducing incidents by 30%. Implemented Firebase notifications for real-time updates and improved user engagement through streamlined content delivery.",
    image: rss,
    date: "2023",
    link: "https://rss-react-anshs-projects-8a0075b6.vercel.app/"
  },
  {
    title: "ECOVA Club Website",
    description: "Developed the frontend for an environmental club website, increasing user interaction by 40% through improved design and event features. Implemented scalable architecture following best practices in React development.",
    image: ecova,
    date: "2023",
    link: "https://ecova.vercel.app/"
  }
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
            className="grid md:grid-cols-12 gap-8 items-start cursor-pointer"
            onClick={() => window.open(project.link, '_blank')}
          >
            <div className="md:col-span-5 lg:col-span-4">
              <div className="relative aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="fit"
                  className=""
                />
              </div>
              <p className="mt-2 text-xs font-newspaper-body text-[#2c1810]/60">{project.date}</p>
            </div>
            <div className="md:col-span-7 lg:col-span-8">
              <h3 className="font-newspaper-heading text-3xl font-bold mb-4">{project.title}</h3>
              <p className="font-newspaper-body text-base leading-relaxed">{project.description}</p>
              <a href={project.link} className="inline-block mt-4 font-newspaper-heading text-sm underline">Read more</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

