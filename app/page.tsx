'use client'

import dynamic from 'next/dynamic'

// The site tree (DesignFrame, frameLayer, useIsDesktop, etc.) assumes a
// browser environment throughout — ResizeObserver, document.body portals,
// matchMedia — and was authored as a client-only SPA under Vite (no SSR).
// Rendering it client-only here reproduces that behavior exactly and avoids
// a hydration mismatch: the server has no way to know the real viewport
// width ahead of time, so SSR-ing the desktop/mobile branch would flash the
// wrong layout on first paint for anyone below the 1024px breakpoint.
const App = dynamic(() => import('@/App'), { ssr: false })

export default function Page() {
  return <App />
}
