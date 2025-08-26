declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: Element | HTMLElement
    name?: string
    offset?: number
    smooth?: boolean
    smoothMobile?: boolean
    direction?: 'vertical' | 'horizontal'
    gestureDirection?: 'vertical' | 'horizontal'
    class?: string
    scrollbarClass?: string
    repeat?: boolean
    initPosition?: { x: number; y: number }
    reloadOnContextChange?: boolean
    lerp?: number
    tablet?: any
    smartphone?: any
    [key: string]: any
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions)
    init(): void
    update(): void
    start(): void
    stop(): void
    destroy(): void
    scrollTo(target: number | string | Element, options?: any): void
    on(event: string, callback: (...args: any[]) => void): void
    off(event: string, callback: (...args: any[]) => void): void
  }
}


