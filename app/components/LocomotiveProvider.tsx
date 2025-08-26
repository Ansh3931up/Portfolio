"use client"

import { useEffect } from "react"

export default function LocomotiveProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let loco: any
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      // Mark active so other utilities back off
      ;(window as any).__locomotiveActive = true
      loco = new LocomotiveScroll({})
    })()

    return () => {
      try {
        if (loco && typeof loco.destroy === "function") loco.destroy()
      } catch {}
      ;(window as any).__locomotiveActive = false
    }
  }, [])

  return <>{children}</>
}
