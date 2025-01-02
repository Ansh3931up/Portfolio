"use client"

import { useEffect } from "react"

export default function LinkedInRedirect() {
  useEffect(() => {
    window.location.replace("https://www.linkedin.com/in/ansh-kumar-a08461253")
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Redirecting to LinkedIn...</p>
    </div>
  )
}
