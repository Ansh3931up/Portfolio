"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare, Building, Star, Sparkles, ArrowRight, Zap } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-8 bg-[#0f0f0f] relative overflow-hidden">
      {/* Sleek Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-1 h-40 bg-gradient-to-b from-red-500/30 via-red-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-48 right-24 w-0.5 h-32 bg-gradient-to-b from-orange-500/25 via-orange-400/15 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-20 bg-gradient-to-b from-red-400/20 via-red-300/10 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-0.5 h-24 bg-gradient-to-b from-orange-400/15 via-orange-300/10 to-transparent animate-pulse delay-1500"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sleek Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center space-x-3 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-red-400 font-medium text-sm uppercase tracking-[0.2em]">Ready to Connect</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-8 font-poppins leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let&apos;s Build
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Something Great
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto font-poppins leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Ready to discuss opportunities, collaborations, or just want to say hello? 
            I&apos;d love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Sleek Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 font-poppins flex items-center">
                <Zap className="w-8 h-8 text-red-500 mr-3" />
                Get In Touch
              </h3>
              <p className="text-gray-400 leading-relaxed font-poppins text-lg">
                I&apos;m always open to discussing new opportunities, innovative projects, and exciting collaborations. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Sleek Contact Details */}
            <div className="space-y-4">
              {[
                { icon: Phone, title: "Phone", value: "+91-7206000725", color: "red" },
                { icon: Mail, title: "Email", value: "anshkumar3931@gmail.com", color: "orange" },
                { icon: MapPin, title: "Location", value: "Una, Himachal Pradesh, India", color: "red" }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="group p-5 bg-gradient-to-r from-white/[0.02] to-white/[0.01] backdrop-blur-sm rounded-2xl border border-white/[0.08] hover:border-red-500/30 transition-all duration-500 hover:bg-gradient-to-r hover:from-white/[0.05] hover:to-white/[0.02]"
                  whileHover={{ scale: 1.02, x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500/20 to-${item.color === 'red' ? 'orange' : 'red'}-500/20 rounded-xl flex items-center justify-center border border-${item.color}-500/30 group-hover:border-${item.color}-400/50 transition-all duration-300`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-400 group-hover:text-${item.color}-300 transition-colors duration-300`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold font-poppins text-lg group-hover:text-red-300 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-400 font-poppins group-hover:text-gray-300 transition-colors duration-300">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sleek Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-5 font-poppins text-lg">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/Ansh3931up", title: "GitHub Profile", color: "red" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ansh-kumar-a08461253", title: "LinkedIn Profile", color: "orange" }
                ].map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-gradient-to-br from-white/[0.08] to-white/[0.04] hover:from-red-500/20 hover:to-orange-500/20 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 border border-white/[0.15] hover:border-red-500/40 shadow-lg hover:shadow-red-500/25"
                    title={social.title}
                    whileHover={{ y: -8, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-7 h-7 text-white group-hover:text-red-300 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Sleek Status Card */}
            <motion.div 
              className="bg-gradient-to-r from-red-500/[0.08] via-orange-500/[0.06] to-red-500/[0.08] backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 shadow-2xl"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h4 className="text-white font-semibold mb-4 font-poppins text-lg">Current Status</h4>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="text-green-400 text-sm font-poppins font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-400 text-sm font-poppins leading-relaxed">
                Currently working as Software Engineer at Hyperqube Ionic • Open to full-time roles and exciting projects
              </p>
            </motion.div>
          </motion.div>

          {/* Sleek Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.06] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.12] shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-poppins flex items-center">
              <MessageSquare className="w-8 h-8 text-red-500 mr-3" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", name: "name", label: "Full Name", icon: User, required: true, placeholder: "Enter your full name" },
                { id: "email", name: "email", label: "Email Address", icon: Mail, required: true, placeholder: "Enter your email address", type: "email" },
                { id: "company", name: "company", label: "Company/Organization", icon: Building, required: false, placeholder: "Enter company name (optional)" },
                { id: "message", name: "message", label: "Message", icon: MessageSquare, required: true, placeholder: "Tell me about your project or inquiry...", isTextarea: true }
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-white font-medium mb-3 font-poppins text-lg">
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                  </label>
                  <div className="relative group">
                    <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-red-400 transition-colors duration-300" />
                    {field.isTextarea ? (
                      <textarea
                        id={field.id}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        rows={5}
                        className="w-full pl-12 pr-4 py-4 bg-white/[0.08] border border-white/[0.15] text-white placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300 font-poppins text-lg resize-none hover:bg-white/[0.12] focus:bg-white/[0.15]"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type || "text"}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full pl-12 pr-4 py-4 bg-white/[0.08] border border-white/[0.15] text-white placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300 font-poppins text-lg hover:bg-white/[0.12] focus:bg-white/[0.15]"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-400 font-poppins"
                >
                  ✅ {submitMessage}
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-400 font-poppins"
                >
                  ❌ {submitMessage}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-[1.02] shadow-lg cursor-pointer font-poppins flex items-center justify-center space-x-3 text-lg overflow-hidden relative ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-red-500 via-red-600 to-orange-500 hover:from-red-600 hover:via-red-700 hover:to-orange-600 hover:shadow-red-500/25'
                }`}
                whileHover={isSubmitting ? {} : { y: -3 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Sleek Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/[0.08] via-orange-500/[0.06] to-red-500/[0.08] backdrop-blur-xl rounded-3xl p-12 border border-red-500/20 shadow-2xl">
            <motion.h3 
              className="text-4xl font-bold text-white mb-8 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Let&apos;s Build Something Amazing Together
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-10 max-w-3xl mx-auto font-poppins text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Whether you&apos;re looking for a developer to join your team, need help with a project, 
              or want to discuss potential collaborations, I&apos;m here to help bring your ideas to life.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "24h", label: "Response Time", icon: Zap },
                { value: "100%", label: "Client Satisfaction", icon: Star },
                { value: "∞", label: "Possibilities", icon: Sparkles }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/[0.08] hover:border-red-500/30 transition-all duration-500 hover:bg-white/[0.05] group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                >
                  <div className="text-4xl font-black text-red-400 font-poppins mb-3 group-hover:text-red-300 transition-colors duration-300">{stat.value}</div>
                  <div className="text-gray-400 text-lg font-poppins group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

