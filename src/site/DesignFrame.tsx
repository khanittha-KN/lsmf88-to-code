"use client"

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { FrameProvider } from './frameLayer'

type Props = {
  /** Intrinsic width of the Figma frame this subtree was authored at. */
  designWidth: number
  /** Authored frame height from Figma. Used as the floor for the canvas so the
   *  frame is correct on first paint and for frames that clip their own content
   *  (bottom-anchored or off-canvas children), where measuring says nothing. */
  designHeight: number
  /** Upper bound on upscaling so the design never bloats on ultrawide displays. */
  maxScale?: number
  children: ReactNode
}

/**
 * The imported frames are absolutely positioned inside a fixed-width canvas, so
 * they cannot reflow. Instead of rewriting that geometry (which would break the
 * pixel-for-pixel match with Figma), the canvas is rendered at its authored
 * width and uniformly scaled to the viewport — every proportion, offset and
 * type size stays exactly as designed at any screen size.
 */
export default function DesignFrame({ designWidth, designHeight, maxScale = 1.3, children }: Props) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(designHeight)

  /**
   * Bottom-most edge of the frame's real content, in design units.
   *
   * Two traps make the obvious `scrollHeight` read wrong here. The canvas
   * carries an explicit `height`, so its own `scrollHeight` is floored by that
   * height and can only ever ratchet upward — and the page background is an
   * `inset-0` layer sized *by* the canvas, so it stretches to whatever it is
   * measured against. Collapsing to `auto` first breaks that feedback loop.
   * Then `scrollHeight` counts transformed boxes, so entrance animations that
   * park their element a few pixels low inflate the result until every reveal
   * has fired; walking layout offsets instead ignores transforms entirely.
   *
   * The collapsed frame's own `offsetHeight` is the floor: it is 0 for a frame
   * sized by the canvas, and its authored height for one that declares its own
   * (mobile), which must not be shrunk below.
   */
  const measureContent = () => {
    const node = inner.current
    const frame = node?.firstElementChild
    if (!node || !(frame instanceof HTMLElement)) return 0

    const previous = node.style.height
    node.style.height = 'auto'
    let bottom = frame.offsetHeight
    for (const child of frame.children) {
      if (!(child instanceof HTMLElement)) continue
      bottom = Math.max(bottom, child.offsetTop + child.offsetHeight)
    }
    node.style.height = previous
    return bottom
  }

  useLayoutEffect(() => {
    const measure = () => {
      const available = outer.current?.clientWidth ?? designWidth
      // Rounded: an irrational scale factor leaves text boxes on sub-pixel
      // boundaries, which defeats axis-aligned bounding-box measurement.
      const next = Math.min(available / designWidth, maxScale)
      setScale(Math.round(next * 1000) / 1000)
      const measured = measureContent()
      setHeight(measured > 0 ? measured : designHeight)
    }
    measure()

    const observer = new ResizeObserver(measure)
    if (outer.current) observer.observe(outer.current)
    if (inner.current) observer.observe(inner.current)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [designWidth, designHeight, maxScale])

  // Late-loading imagery can change the intrinsic height; re-measure once idle.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const measured = measureContent()
      if (measured > 0) setHeight(measured)
    }, 900)
    return () => window.clearTimeout(id)
  }, [designHeight])

  const geometry = useMemo(() => ({ scale, designWidth }), [scale, designWidth])

  return (
    <FrameProvider value={geometry}>
    <div ref={outer} className="w-full overflow-x-clip">
      <div
        className="relative mx-auto"
        style={{
          width: designWidth * scale,
          height: height * scale,
        }}
      >
        <div
          ref={inner}
          className="relative origin-top-left"
          style={{
            width: designWidth,
            height,
            transform: scale === 1 ? undefined : `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
    </FrameProvider>
  )
}
