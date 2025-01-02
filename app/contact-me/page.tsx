"use client"

import { useState } from 'react'
import { Send, Paperclip, X } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function ContactPage() {
  const [emailForm, setEmailForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
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
        subject: '',
        message: ''
      })
      alert('Email sent successfully!')
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send email. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-newspaper-title mb-2">New Message</h1>
          <div className="h-1 w-20 bg-primary"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-4 sm:p-6 rounded-lg border border-primary">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-newspaper-body mb-1">From Name</label>
              <input
                type="text"
                value={emailForm.from_name}
                onChange={(e) => setEmailForm({...emailForm, from_name: e.target.value})}
                className="w-full p-2 border border-primary bg-background rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-newspaper-body mb-1">From Email</label>
              <input
                type="email"
                value={emailForm.from_email}
                onChange={(e) => setEmailForm({...emailForm, from_email: e.target.value})}
                className="w-full p-2 border border-primary bg-background rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-newspaper-body mb-1">Subject</label>
            <input
              type="text"
              value={emailForm.subject}
              onChange={(e) => setEmailForm({...emailForm, subject: e.target.value})}
              className="w-full p-2 border border-primary bg-background rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-newspaper-body mb-1">Message</label>
            <textarea
              value={emailForm.message}
              onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
              className="w-full p-2 border border-primary bg-background rounded min-h-[200px]"
              required
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2"
            >
              <Send size={16} />
              {sending ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 