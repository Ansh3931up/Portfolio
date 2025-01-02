"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ContentSection() {
  return (
    <section className="grid grid-cols-12 gap-6 py-8">
      {/* Main Article */}
      <div className="col-span-12 md:col-span-8 space-y-6">
        <article className="border-b-2 border-[#2c1810] pb-6">
          <div className="relative aspect-video mb-4">
            <Image
              src="/placeholder.svg"
              alt="Featured Project"
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <h2 className="font-newspaper-heading text-3xl font-bold mb-4">
            REVOLUTIONARY WEB DEVELOPMENT APPROACH UNVEILED
          </h2>
          <p className="font-newspaper-body text-sm mb-4">
            By John Developer | Tech Correspondent
          </p>
          <div className="font-newspaper-body space-y-4">
            <p className="first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:font-bold">
              In a groundbreaking development, innovative approaches to web development are reshaping the digital landscape. The integration of cutting-edge technologies with time-tested methodologies has yielded remarkable results, setting new standards for the industry.
            </p>
            <p>
              "Our focus has always been on creating seamless, user-centric experiences," states the lead developer. "By leveraging the latest frameworks while maintaining a strong foundation in core principles, we've achieved unprecedented levels of performance and user satisfaction."
            </p>
          </div>
        </article>

        {/* Secondary Articles */}
        <div className="grid grid-cols-2 gap-6">
          {[1, 2].map((_, i) => (
            <article key={i} className="border-b border-[#2c1810] pb-4">
              <div className="relative aspect-[4/3] mb-3">
                <Image
                  src="/placeholder.svg"
                  alt="Project"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale"
                />
              </div>
              <h3 className="font-newspaper-heading text-xl font-bold mb-2">
                INNOVATIVE SOLUTIONS DRIVE SUCCESS
              </h3>
              <p className="font-newspaper-body text-sm">
                Latest project demonstrates the power of modern web technologies in creating exceptional user experiences.
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Side Column */}
      <div className="col-span-12 md:col-span-4 space-y-6">
        {/* Featured Box */}
        <div className="border-2 border-[#2c1810] p-4">
          <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-[#2c1810]">
            FEATURED SKILLS
          </h3>
          <ul className="space-y-2 font-newspaper-body text-sm">
            <li>• React & Next.js Expert</li>
            <li>• Full Stack Development</li>
            <li>• Performance Optimization</li>
            <li>• UI/UX Design</li>
            <li>• API Development</li>
          </ul>
        </div>

        {/* News Briefs */}
        <div className="border-2 border-[#2c1810] p-4">
          <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-[#2c1810]">
            QUICK UPDATES
          </h3>
          <div className="space-y-4 font-newspaper-body text-sm">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="border-b border-dotted border-[#2c1810] last:border-0 pb-2 last:pb-0">
                <p className="font-bold">Project Milestone Achieved</p>
                <p className="text-xs">Latest development phase completed ahead of schedule</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advertisement */}
        <div className="border-2 border-[#2c1810] p-4 text-center">
          <p className="font-newspaper-heading text-xs mb-2">ADVERTISEMENT</p>
          <p className="font-newspaper-heading text-xl mb-2">HIRE NOW</p>
          <p className="font-newspaper-body text-sm mb-4">Limited Time Offer</p>
          <button className="bg-[#2c1810] text-[#faf7f2] px-6 py-2 text-sm font-newspaper-heading hover:bg-[#2c1810]/80 transition-colors">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  )
}

