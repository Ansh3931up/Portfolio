"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface NewsItemProps {
  title: string
  content: string
  image?: string
  date?: string
  category?: string
}

export function NewsColumn({ items }: { items: NewsItemProps[] }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="border-b border-primary pb-4 last:border-0"
        >
          {item.image && (
            <div className="relative aspect-[4/3] mb-3">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
            </div>
          )}
          {item.category && (
            <span className="text-xs font-newspaper-heading text-primary/70 mb-1 block">
              {item.category}
            </span>
          )}
          <h3 className="font-newspaper-heading font-bold text-lg mb-2">
            {item.title}
          </h3>
          <p className="font-newspaper-body text-sm leading-snug">
            {item.content}
          </p>
          {item.date && (
            <p className="font-newspaper-body text-xs text-primary/70 mt-2">
              {item.date}
            </p>
          )}
        </motion.article>
      ))}
    </div>
  )
}

