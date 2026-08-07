"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import { PROMO_COUNT, PROMO_INTERVAL_MS } from './promos'

export type AuthMode = 'login' | 'register'
export type Category = 'slot' | 'casino' | 'sport' | 'lotto'

export const CATEGORY_LABELS: Record<Category, string> = {
  slot: 'สล็อต',
  casino: 'คาสิโน',
  sport: 'กีฬา',
  lotto: 'หวย',
}

type SiteState = {
  auth: AuthMode | null
  openAuth: (mode: AuthMode) => void
  closeAuth: () => void
  category: Category
  setCategory: (c: Category) => void
  promoSlide: number
  setPromoSlide: (i: number) => void
  notify: (message: string) => void
  toasts: { id: number; message: string }[]
}

/* Hot reloading can leave two evaluated copies of this module in the graph (the
   provider holding one, consumers importing another). Two copies means two
   distinct context objects and a provider the consumers can't see, so the
   context identity is cached on the global instead of the module scope. */
const globalScope = globalThis as typeof globalThis & {
  __lsmf88SiteContext?: ReturnType<typeof createContext<SiteState | null>>
}
const SiteContext = (globalScope.__lsmf88SiteContext ??= createContext<SiteState | null>(null))

export function useSite(): SiteState {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite must be used inside <SiteProvider>')
  return ctx
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthMode | null>(null)
  const [category, setCategory] = useState<Category>('slot')
  const [promoSlide, setPromoSlide] = useState(0)
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([])
  const nextId = useRef(1)

  const notify = useCallback((message: string) => {
    const id = nextId.current++
    setToasts((t) => [...t.slice(-2), { id, message }])
    window.setTimeout(() => {
      setToasts((t) => t.filter((entry) => entry.id !== id))
    }, 3200)
  }, [])

  const openAuth = useCallback((mode: AuthMode) => setAuth(mode), [])
  const closeAuth = useCallback(() => setAuth(null), [])

  /* Promotion banner advances on its own; the dots, the thumbnail strip and the
     detail panel all read the same index, so they stay in step. Depending on
     `promoSlide` restarts the timer whenever a dot or thumbnail is clicked, so a
     manual pick gets a full interval before it moves on. Nothing to rotate below
     two promotions, and a reader who asked for less motion gets none. */
  useEffect(() => {
    if (PROMO_COUNT < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(() => {
      setPromoSlide((i) => (i + 1) % PROMO_COUNT)
    }, PROMO_INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [promoSlide])

  useEffect(() => {
    if (!auth) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAuth(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [auth])

  const value = useMemo<SiteState>(
    () => ({
      auth,
      openAuth,
      closeAuth,
      category,
      setCategory,
      promoSlide,
      setPromoSlide,
      notify,
      toasts,
    }),
    [auth, openAuth, closeAuth, category, promoSlide, notify, toasts],
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

/** Reveals every `[data-reveal]` node in the tree as it scrolls into view. */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'),
    )
    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.style.transitionDelay = `${Number(el.dataset.revealDelay ?? 0)}ms`
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Adds `.is-scrolling` to <html> while the page moves, and reports progress. */
export function useScrollChrome() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let timer = 0
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      setScrolled(window.scrollY > 320)
      document.documentElement.classList.add('is-scrolling')
      window.clearTimeout(timer)
      timer = window.setTimeout(
        () => document.documentElement.classList.remove('is-scrolling'),
        700,
      )
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.clearTimeout(timer)
    }
  }, [])

  return { progress, scrolled }
}
