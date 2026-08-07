"use client"

/** The Anubis temple plate. The desktop and mobile copies are byte-identical, so
 *  one path serves both frames. */
const PAGE_BACKGROUND = '/images/desktop/6ef1991cd065d3bb86bffbbbf73385605ea5346a.png'

/**
 * The one background behind the whole site, pinned to the viewport.
 *
 * Inside the canvas it could only ever be as wide as the canvas, and the canvas
 * stops growing at `maxScale` — so zooming the browser out far enough left the
 * design in a fixed-width column with bare page colour down both sides. Fixed
 * to the viewport it fills the gutters at any zoom level, and holds still while
 * the page scrolls over it.
 *
 * `z-0` rather than a negative z-index: the wrapper this sits in is static, so
 * a negative index would escape to the root stacking context and paint *under*
 * the `body` and wrapper backgrounds — invisible, which is the very black bar
 * being fixed. At `z-0` it is a positioned box that paints over those
 * backgrounds, and the canvas still covers it by coming later in the DOM.
 */
export default function PageBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute bg-black inset-0" />
      {/* Dimmed against the black beneath, so the plate reads as a faint
          backdrop rather than competing with the content over it. This single
          opacity is the exposure knob — no extra veil on top, which would
          double up and flatten the highlights. */}
      <img
        alt=""
        className="absolute anim-drift-opaque inset-0 max-w-none object-center object-cover opacity-[0.35] size-full"
        src={PAGE_BACKGROUND}
      />
    </div>
  )
}
