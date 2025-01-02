"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Contact() {
  const [emailForm, setEmailForm] = useState({
    from_name: '',
    from_email: '',
    message: '',
    subject: 'New Contact Form Message'
  })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailForm),
      })

      if (!response.ok) throw new Error('Failed to send email')
      
      setEmailForm({
        from_name: '',
        from_email: '',
        message: '',
        subject: 'New Contact Form Message'
      })
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="py-12 border-t-2 border-[#2c1810] dark:border-gray-700">
      <h2 className="font-newspaper-heading text-4xl font-bold mb-8 text-center dark:text-gray-100">
        CONTACT THE EDITOR
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="space-y-6">
          <h3 className="font-newspaper-heading text-2xl font-bold dark:text-gray-100">
            Get in Touch
          </h3>
          <p className="font-newspaper-body text-sm leading-relaxed dark:text-gray-300">
            Have a digital challenge that needs solving? Looking to bring your web presence into the modern era? Or perhaps you're a fellow developer interested in collaborating on the next big thing? Whatever your needs, I'm always eager to connect and discuss how we can work together to create something extraordinary in the digital realm.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-70 transition-opacity dark:text-gray-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity dark:text-gray-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity dark:text-gray-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity dark:text-gray-300">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={emailForm.from_name}
            onChange={(e) => setEmailForm({...emailForm, from_name: e.target.value})}
            className="w-full p-2 border border-[#2c1810] dark:border-gray-600 
                     font-newspaper-body text-sm bg-[#faf7f2] dark:bg-gray-800 
                     focus:outline-none focus:ring-1 focus:ring-[#2c1810] dark:focus:ring-gray-500 
                     dark:text-gray-100 dark:placeholder-gray-400
                     transition-colors duration-200"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={emailForm.from_email}
            onChange={(e) => setEmailForm({...emailForm, from_email: e.target.value})}
            className="w-full p-2 border border-[#2c1810] dark:border-gray-600 
                     font-newspaper-body text-sm bg-[#faf7f2] dark:bg-gray-800 
                     focus:outline-none focus:ring-1 focus:ring-[#2c1810] dark:focus:ring-gray-500 
                     dark:text-gray-100 dark:placeholder-gray-400
                     transition-colors duration-200"
            required
          />
          <textarea
            placeholder="Your Message"
            value={emailForm.message}
            onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
            rows={4}
            className="w-full p-2 border border-[#2c1810] dark:border-gray-600 
                     font-newspaper-body text-sm bg-[#faf7f2] dark:bg-gray-800 
                     focus:outline-none focus:ring-1 focus:ring-[#2c1810] dark:focus:ring-gray-500 
                     dark:text-gray-100 dark:placeholder-gray-400
                     transition-colors duration-200"
            required
          />
          <button 
            type="submit"
            disabled={sending}
            className="w-full bg-[#2c1810] dark:bg-gray-700 text-[#faf7f2] 
                     font-newspaper-heading text-sm py-2 px-4 
                     hover:bg-[#2c1810]/80 dark:hover:bg-gray-600 
                     transition-colors duration-300 
                     disabled:opacity-50
                     shadow-md dark:shadow-gray-900/50"
          >
            {sending ? 'SENDING...' : 'SEND CORRESPONDENCE'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}

