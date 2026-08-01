"use client"

import { useEffect, useState } from 'react'
import DesktopSite from './components/DesktopSite'
import MobileSite from './components/MobileSite'
import Chrome from './site/Chrome'
import DesignFrame from './site/DesignFrame'
import { SiteProvider, useScrollReveal } from './site/ui'

/** Authored bounds of the two imported Figma frames. */
const DESKTOP_WIDTH = 1440
const DESKTOP_HEIGHT = 3696
const MOBILE_WIDTH = 430
const MOBILE_HEIGHT = 3289
const BREAKPOINT = 1024

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window === 'undefined' || window.innerWidth >= BREAKPOINT,
  )

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${BREAKPOINT}px)`)
    const update = () => setIsDesktop(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return isDesktop
}

function Site() {
  const isDesktop = useIsDesktop()
  useScrollReveal([isDesktop])

  return (
    <div className="min-h-screen w-full bg-ash-950">
      {isDesktop ? (
        <DesignFrame designHeight={DESKTOP_HEIGHT} designWidth={DESKTOP_WIDTH} maxScale={1.35}>
          <DesktopSite />
        </DesignFrame>
      ) : (
        <DesignFrame designHeight={MOBILE_HEIGHT} designWidth={MOBILE_WIDTH} maxScale={1.6}>
          <MobileSite />
        </DesignFrame>
      )}
      <Chrome />
    </div>
  )
}

export default function App() {
  return (
    <SiteProvider>
      <Site />
    </SiteProvider>
  )
}
