"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

type FrameGeometry = { scale: number; designWidth: number }

/* Cached on the global for the same reason as the site context: hot reloading
   can leave two copies of this module in the graph, and two copies would mean
   the provider and the consumers hold different context objects. */
const globalScope = globalThis as typeof globalThis & {
  __lsmf88FrameContext?: ReturnType<typeof createContext<FrameGeometry>>
}
const FrameContext = (globalScope.__lsmf88FrameContext ??= createContext<FrameGeometry>({
  scale: 1,
  designWidth: 0,
}))

export function FrameProvider({ value, children }: { value: FrameGeometry; children: ReactNode }) {
  return <FrameContext.Provider value={value}>{children}</FrameContext.Provider>
}

/**
 * Lifts its children out of the scaled canvas into a `position: fixed` layer on
 * <body>, re-applying the canvas scale so they still match the design.
 *
 * A fixed element nested inside the canvas would resolve against the canvas's
 * own transform and scroll away with the page; driving it from a scroll handler
 * instead makes it lag a frame behind and visibly judder. Portalling out is the
 * only way to get an element that genuinely does not move.
 */
export function FixedFrameLayer({ children }: { children: ReactNode }) {
  const { scale, designWidth } = useContext(FrameContext)
  const [host, setHost] = useState<HTMLElement | null>(null)

  useEffect(() => setHost(document.body), [])
  if (!host) return null

  return createPortal(
    <div className="fixed inset-x-0 pointer-events-none top-0 z-[60] flex justify-center">
      <div
        className="pointer-events-auto relative"
        style={{
          width: designWidth,
          height: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          // Lets children bleed past the canvas to the viewport edges — see
          // `.frame-bleed` in index.css.
          ['--frame-scale' as string]: scale,
        }}
      >
        {children}
      </div>
    </div>,
    host,
  )
}
