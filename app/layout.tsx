import type { Metadata } from 'next'
import './globals.css'

// Mirrors .figma/make/site.json, previously applied by the Vite
// figma-site-configuration plugin via transformIndexHtml.
export const metadata: Metadata = {
  title: 'Figma Make App',
  description:
    'Transform Figma designs into responsive, pixel-perfect websites with animations and interactive prototypes, enhancing user engagement and design fidelity.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
