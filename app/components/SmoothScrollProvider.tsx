"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Mark Lenis active so other utilities don't double-handle scroll
    ;(window as any).__lenisActive = true
    const lenis = new Lenis({
      duration: 0.85,      // lower = faster response
      smooth: true,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1.25, // quicker wheel response
      touchMultiplier: 1.15, // quicker touch response
      lerp: 0.16,            // faster catch-up
      easing: (t: number) => 1 - Math.pow(1 - t, 2.0),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      // cleanup if Lenis provides destroy
      // @ts-ignore
      if (typeof lenis.destroy === "function") lenis.destroy()
      ;(window as any).__lenisActive = false
    }
  }, [])

  return <>{children}</>
}
