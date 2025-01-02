"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const feedbacks = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    content: "Working with this developer was an absolute pleasure. Their attention to detail and innovative solutions exceeded our expectations.",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    company: "Digital Frontiers LLC",
    content: "The web application delivered by this talented developer has significantly improved our user engagement and conversion rates.",
    image: "/placeholder.svg",
  },
  {
    name: "Alex Johnson",
    company: "NextGen Startups",
    content: "I was impressed by the developer's ability to translate our complex requirements into a sleek, user-friendly interface. Highly recommended!",
    image: "/placeholder.svg",
  },
]

export function Feedback() {
  return (
    <section className="py-12 border-t-2 border-b-2 border-[#2c1810]">
      <h2 className="font-newspaper-heading text-4xl font-bold mb-8 text-center">
        CLIENT TESTIMONIALS
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={feedback.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-2 border-[#2c1810] p-6 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#2c1810]">
              <Image
                src={feedback.image}
                alt={feedback.name}
                width={96}
                height={96}
                className="grayscale"
              />
            </div>
            <p className="font-newspaper-body text-sm mb-4">{feedback.content}</p>
            <p className="font-newspaper-heading text-sm font-bold">{feedback.name}</p>
            <p className="font-newspaper-body text-xs text-[#2c1810]/60">{feedback.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

