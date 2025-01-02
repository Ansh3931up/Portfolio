"use client"

import { motion } from "framer-motion"
import { Trophy, Users, GraduationCap } from 'lucide-react'

const achievements = [
  {
    title: "Programming Contest Runner-up",
    description: "Secured second place in the Programming Contest organized by Force, the college coding club, showcasing problem-solving skills and code optimization abilities.",
    icon: Trophy
  },
  {
    title: "Leadership in Ecova Club",
    description: "Led PR division initiatives, successfully increasing club membership by 20% through strategic outreach programs.",
    icon: Users
  },
  {
    title: "Full Stack Web Development Certification",
    description: "Completed comprehensive Full Stack Web Development certification from PW Skills, covering both Front-End and Back-End technologies.",
    icon: GraduationCap,
    link: "https://cdn.pwskills.com/learn/certificates/2616df34-059b-4f2a-9901-211fe3e6c2aa.pdf"
  }
]

export function Achievements() {
  return (
    <section className="py-8 section-color-change" id="achievements">
      <h2 className="font-newspaper-heading text-3xl font-bold mb-6 border-b-2 border-primary pb-2">
        ACHIEVEMENTS & CERTIFICATIONS
      </h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-2 border-primary p-4 font-newspaper-body"
          >
            <div className="flex items-start gap-4">
              <achievement.icon className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm">{achievement.description}</p>
                {achievement.link && (
                  <a 
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline mt-2 inline-block"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 